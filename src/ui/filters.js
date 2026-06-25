/*
  filters.js
  The control surface: a bottom dock with a zone filter, a heatmap toggle, a live weight-slider
  popover (wTAM / wFrag / wRoll, recolors + re-ranks in real time), and a slide-out ranked list
  sortable by TAM, fragmentation, roll-up intensity, or opportunity score.

  Scoring state lives in main.js; this module is pure UI and calls the provided handlers.
*/

export function createControls({ container, systems, clusters, getScores, initialWeights, handlers }) {
  // ---- dock ----
  const dock = document.createElement('div')
  dock.id = 'control-dock'
  dock.innerHTML = `
    <label class="dock-field">
      <span class="dock-label">Zone</span>
      <select id="zone-select" class="dock-select">
        <option value="">All zones</option>
        ${clusters.map((c) => `<option value="${c.id}">${c.name}</option>`).join('')}
      </select>
    </label>
    <button id="heatmap-toggle" class="dock-btn" type="button" aria-pressed="false">
      <span class="dot-swatch"></span> Heatmap
    </button>
    <button id="weights-btn" class="dock-btn" type="button" aria-expanded="false">Weights</button>
    <button id="list-btn" class="dock-btn" type="button" aria-expanded="false">Ranked list</button>
    <span class="dock-divider"></span>
    <div class="dock-zoom">
      <button id="zoom-out" class="zoom-btn" type="button" aria-label="Zoom out">&minus;</button>
      <button id="zoom-in" class="zoom-btn" type="button" aria-label="Zoom in">+</button>
    </div>
  `
  container.appendChild(dock)

  dock.querySelector('#zoom-in').addEventListener('click', () => handlers.onZoom('in'))
  dock.querySelector('#zoom-out').addEventListener('click', () => handlers.onZoom('out'))

  // ---- weights popover ----
  const weights = { ...initialWeights }
  const pop = document.createElement('div')
  pop.id = 'weights-pop'
  pop.className = 'pop is-hidden'
  pop.innerHTML = `
    <div class="pop-title">Opportunity weights</div>
    <p class="pop-sub">Hottest = large TAM, high fragmentation, moderate roll-up. Each slider moves on its own; the mix is normalized when scoring.</p>
    ${weightRow('tam', 'Market size (TAM)', weights.tam)}
    ${weightRow('frag', 'Fragmentation', weights.frag)}
    ${weightRow('roll', 'Roll-up intensity', weights.roll)}
  `
  container.appendChild(pop)

  // Labels show each slider's OWN raw setting (0-100), so moving one never shifts the others'
  // displayed numbers. The values are normalized to sum-to-1 only inside readWeights for scoring.
  function weightRow(key, label, val) {
    return `
      <label class="weight-row">
        <span class="weight-label">${label}</span>
        <input type="range" min="0" max="100" value="${Math.round(val * 100)}" data-key="${key}" class="weight-slider" />
        <span class="weight-val" data-val="${key}">${Math.round(val * 100)}</span>
      </label>`
  }

  function readWeights() {
    const sliders = pop.querySelectorAll('.weight-slider')
    let a = 0
    const raw = {}
    sliders.forEach((s) => {
      raw[s.dataset.key] = Number(s.value)
      a += Number(s.value)
    })
    const sum = a || 1
    return { tam: raw.tam / sum, frag: raw.frag / sum, roll: raw.roll / sum }
  }

  pop.querySelectorAll('.weight-slider').forEach((s) => {
    s.addEventListener('input', () => {
      const lab = pop.querySelector('.weight-val[data-val="' + s.dataset.key + '"]')
      if (lab) lab.textContent = s.value
      handlers.onWeights(readWeights())
    })
  })

  // ---- ranked list panel ----
  const listPanel = document.createElement('aside')
  listPanel.id = 'ranked-list'
  listPanel.className = 'is-hidden'
  listPanel.innerHTML = `
    <div class="rl-head">
      <h3>Systems ranked</h3>
      <button class="rl-close" type="button" aria-label="Close list">Close</button>
    </div>
    <div class="rl-sorts">
      ${sortBtn('score', 'Opportunity', true)}
      ${sortBtn('tam', 'TAM')}
      ${sortBtn('frag', 'Fragmentation')}
      ${sortBtn('roll', 'Roll-up')}
    </div>
    <div class="rl-body"></div>
  `
  container.appendChild(listPanel)
  let sortKey = 'score'

  function sortBtn(key, label, active) {
    return `<button class="rl-sort${active ? ' is-active' : ''}" data-sort="${key}" type="button">${label}</button>`
  }

  listPanel.querySelectorAll('.rl-sort').forEach((b) => {
    b.addEventListener('click', () => {
      sortKey = b.dataset.sort
      listPanel.querySelectorAll('.rl-sort').forEach((x) => x.classList.toggle('is-active', x === b))
      renderList()
    })
  })
  listPanel.querySelector('.rl-close').addEventListener('click', () => toggleList(false))

  function valOf(s, key, scores) {
    if (key === 'tam') return s.tam && s.tam.total ? s.tam.total.value : null
    if (key === 'frag') return s.fragmentation ? s.fragmentation.score : null
    if (key === 'roll') return s.rollupIntensity ? s.rollupIntensity.score : null
    const r = scores.get(s.id)
    return r ? r.score : null
  }

  function renderList() {
    const scores = getScores()
    const rows = systems
      .map((s) => ({
        s,
        v: valOf(s, sortKey, scores),
        tam: s.tam && s.tam.total ? s.tam.total.value : null,
        tier: scores.get(s.id) ? scores.get(s.id).tier : null
      }))
      .sort((a, b) => {
        if (a.v == null) return 1
        if (b.v == null) return -1
        if (b.v !== a.v) return b.v - a.v
        // Tie-break by TAM so a single discrete component at full weight (e.g. 100% roll-up,
        // whose 1-5 score yields only a few distinct values) still orders the list visibly.
        return (b.tam == null ? -Infinity : b.tam) - (a.tam == null ? -Infinity : a.tam)
      })
    const body = listPanel.querySelector('.rl-body')
    body.innerHTML = rows
      .map(({ s, tier }) => {
        const tam = s.tam && s.tam.total && s.tam.total.value != null ? '$' + s.tam.total.value + 'B' : '--'
        const frag = s.fragmentation && s.fragmentation.score != null ? s.fragmentation.score : '--'
        const roll = s.rollupIntensity && s.rollupIntensity.score != null ? s.rollupIntensity.score : '--'
        return `
        <button class="rl-row" data-id="${s.id}" type="button">
          <span class="rl-dot ${tier ? 'tier-' + tier : ''}"></span>
          <span class="rl-name">${s.name}</span>
          <span class="rl-metric">${tam}</span>
          <span class="rl-metric rl-sub">F${frag} / R${roll}</span>
        </button>`
      })
      .join('')
    body.querySelectorAll('.rl-row').forEach((r) => {
      r.addEventListener('click', () => {
        const sys = systems.find((x) => x.id === r.dataset.id)
        if (sys) handlers.onSelectSystem(sys)
      })
    })
  }

  // ---- toggles ----
  let heatmapOn = false
  const heatBtn = dock.querySelector('#heatmap-toggle')
  heatBtn.addEventListener('click', () => {
    heatmapOn = !heatmapOn
    heatBtn.classList.toggle('is-on', heatmapOn)
    heatBtn.setAttribute('aria-pressed', String(heatmapOn))
    handlers.onHeatmap(heatmapOn)
  })

  dock.querySelector('#zone-select').addEventListener('change', (e) => {
    const v = e.target.value
    handlers.onZone(v === '' ? null : v)
  })

  const weightsBtn = dock.querySelector('#weights-btn')
  weightsBtn.addEventListener('click', () => {
    const show = pop.classList.contains('is-hidden')
    pop.classList.toggle('is-hidden', !show)
    weightsBtn.setAttribute('aria-expanded', String(show))
  })

  const listBtn = dock.querySelector('#list-btn')
  listBtn.addEventListener('click', () => toggleList(listPanel.classList.contains('is-hidden')))
  function toggleList(show) {
    listPanel.classList.toggle('is-hidden', !show)
    listBtn.setAttribute('aria-expanded', String(show))
    listBtn.classList.toggle('is-on', show)
    if (show) renderList()
  }

  // Keep the zone dropdown in sync if a cluster is expanded elsewhere.
  function setZoneValue(idOrNull) {
    dock.querySelector('#zone-select').value = idOrNull || ''
  }

  return {
    refreshList: () => {
      if (!listPanel.classList.contains('is-hidden')) renderList()
    },
    setZoneValue
  }
}
