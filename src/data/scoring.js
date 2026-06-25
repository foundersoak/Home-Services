/*
  scoring.js
  The opportunity heatmap logic, kept transparent and pure (no DOM, no mutation of systems).

  attractiveness = wTAM*nTAM + wFrag*nFrag + wRoll*nRoll

    nTAM  = log-normalized TAM across scoreable systems -> 0..1   (log, since TAM spans ~$5B-$300B)
    nFrag = (fragmentation.score - 1) / 4                -> 0..1   (5 = most fragmented = best)
    nRoll = ROLL_CURVE[rollupIntensity.score]            -> 0..1   (moderate sweet spot)

  Tiers are RELATIVE terciles (top third hot / middle warm / bottom cool), recomputed on every
  weight change so the heatmap is always comparative. A system is scoreable only with a TAM and
  a fragmentation score; un-scoreable stubs get tier null and are excluded from tiering.
*/

export const DEFAULT_WEIGHTS = { tam: 0.4, frag: 0.35, roll: 0.25 }

// Moderate roll-up intensity is the sweet spot: a proven, not-yet-saturated consolidation model.
export const ROLL_CURVE = { 1: 0.55, 2: 0.85, 3: 1.0, 4: 0.6, 5: 0.3 }

function tamOf(s) {
  return s.tam && s.tam.total && s.tam.total.value != null ? s.tam.total.value : null
}

export function computeScores(systems, weights = DEFAULT_WEIGHTS) {
  const tamVals = systems.map(tamOf).filter((v) => v != null && v > 0)
  const haveTam = tamVals.length > 0
  const logMin = haveTam ? Math.log(Math.min(...tamVals)) : 0
  const logMax = haveTam ? Math.log(Math.max(...tamVals)) : 1
  const span = logMax - logMin || 1

  const out = new Map()
  const scored = []

  for (const s of systems) {
    const tam = tamOf(s)
    const frag = s.fragmentation ? s.fragmentation.score : null
    const roll = s.rollupIntensity ? s.rollupIntensity.score : null

    if (tam == null || frag == null) {
      out.set(s.id, { scoreable: false, nTAM: 0, nFrag: 0, nRoll: 0, score: 0, tier: null })
      continue
    }

    const nTAM = (Math.log(tam) - logMin) / span
    const nFrag = (frag - 1) / 4
    const nRoll = roll != null ? ROLL_CURVE[roll] ?? 0.5 : 0.5
    const score = weights.tam * nTAM + weights.frag * nFrag + weights.roll * nRoll

    const rec = { scoreable: true, nTAM, nFrag, nRoll, score, tier: null }
    out.set(s.id, rec)
    scored.push(rec)
  }

  // Sort by score, tie-broken by size (nTAM). With a single discrete component at full weight
  // (frag/roll are 1-5), many systems share a score; the tie-break keeps tiering deterministic.
  scored.sort((a, b) => (b.score !== a.score ? b.score - a.score : b.nTAM - a.nTAM))
  const n = scored.length
  scored.forEach((rec, i) => {
    const frac = n <= 1 ? 0 : i / n
    rec.tier = frac < 1 / 3 ? 'hot' : frac < 2 / 3 ? 'warm' : 'cool'
  })

  return out
}

// Best (hottest) tier among a cluster's members, for coloring cluster pins in heatmap mode.
export function clusterTier(systems, clusterId, scoreMap) {
  const order = { hot: 3, warm: 2, cool: 1 }
  let best = null
  for (const s of systems) {
    if (s.displayCluster !== clusterId) continue
    const t = scoreMap.get(s.id)
    if (t && t.tier && (!best || order[t.tier] > order[best])) best = t.tier
  }
  return best
}
