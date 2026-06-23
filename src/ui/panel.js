/*
  panel.js
  The detail panel. Renders one system record as a research note: TAM (total + new-construction
  vs renovation/repair split), top 3 players (names link to company sites), roll-up activity
  (platforms link to the company site or the sponsor press release), fragmentation + roll-up
  intensity, and a numbered source list. Every figure with a source shows an inline superscript
  citation; modeled splits show a "modeled estimate" chip; stub records show a research-pending
  note instead of fabricated numbers.
*/

const BASE = import.meta.env.BASE_URL

const ZONE_LABELS = {
  envelope: 'Envelope & Structure',
  'core-mechanical': 'Core Mechanical',
  yard: 'Yard & Exterior',
  energy: 'Energy & Specialty',
  interior: 'Interior Finish',
  restoration: 'Restoration & Other'
}

const TYPE_LABELS = {
  government: 'Government',
  'trade-association': 'Trade assoc.',
  filing: 'Filing',
  'market-research': 'Market research',
  'trade-press': 'Trade press'
}

export function createPanel({ container, onClose }) {
  const el = document.createElement('aside')
  el.id = 'detail-panel'
  el.className = 'panel'
  el.setAttribute('aria-hidden', 'true')
  el.innerHTML =
    '<button class="panel-close" type="button" aria-label="Close panel">Close</button>' +
    '<div class="panel-scroll"></div>'
  container.appendChild(el)
  const scroll = el.querySelector('.panel-scroll')
  let openId = null

  el.querySelector('.panel-close').addEventListener('click', () => close())

  function open(system, scoreRec) {
    openId = system.id
    scroll.innerHTML = renderSystem(system, scoreRec)
    scroll.scrollTop = 0
    el.classList.add('is-open')
    el.setAttribute('aria-hidden', 'false')
  }

  function close() {
    if (!openId) return
    openId = null
    el.classList.remove('is-open')
    el.setAttribute('aria-hidden', 'true')
    onClose && onClose()
  }

  return {
    open,
    close,
    get openId() {
      return openId
    }
  }
}

// ---- rendering helpers ----

function esc(v) {
  return String(v == null ? '' : v).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c])
}

function pending(label) {
  return `<span class="val-pending">${esc(label || 'pending')}</span>`
}

function cite(srcId, srcMap) {
  if (!srcId || !srcMap.has(srcId)) return ''
  const n = srcMap.get(srcId)
  return `<sup class="cite"><a href="#src-${n}">${n}</a></sup>`
}

function money(obj, srcMap) {
  if (!obj || obj.value == null) return pending('pending')
  const unit = obj.unit === 'billion' ? 'B' : obj.unit === 'million' ? 'M' : ''
  return `$${esc(obj.value)}${unit}${cite(obj.source, srcMap)}`
}

function tierBadge(tier) {
  if (!tier) return ''
  const label = { hot: 'Hot opportunity', warm: 'Warm', cool: 'Cool' }[tier]
  return `<span class="tier-badge tier-${tier}">${label}</span>`
}

function statusChip(status) {
  const label = { complete: 'Complete', 'in-progress': 'In progress', stub: 'Research pending' }[status] || status
  return `<span class="status-chip status-${status}">${label}</span>`
}

function confidenceChip(level) {
  if (!level) return ''
  return `<span class="conf-chip conf-${level}">${esc(level)} confidence</span>`
}

function scoreFigure(value) {
  if (value == null) return pending('pending')
  return `<span class="score-figure"><span class="score-num">${esc(value)}</span><span class="score-den">/5</span></span>`
}

function extLink(url, text, kind) {
  if (!url) return esc(text)
  const tag = kind ? `<span class="link-kind">${kind === 'press-release' ? 'press release' : 'site'}</span>` : ''
  return `<a class="ext-link" href="${esc(url)}" target="_blank" rel="noopener noreferrer">${esc(text)}${tag}</a>`
}

function renderSystem(s, score) {
  const srcMap = new Map()
  ;(s.sources || []).forEach((src, i) => srcMap.set(src.id, i + 1))
  const tier = score && score.tier

  return `
    ${s.image
      ? `<figure class="sys-hero"><img src="${esc(BASE + s.image)}" alt="${esc(s.name)}" loading="lazy" onerror="this.closest('.sys-hero').remove()" /></figure>`
      : ''}
    <header class="sys-head">
      <div class="sys-eyebrow">${esc(ZONE_LABELS[s.zone] || s.zone)}</div>
      <h2 class="sys-title">${esc(s.name)}</h2>
      <div class="sys-chips">${tierBadge(tier)}${statusChip(s.dataStatus)}</div>
    </header>
    ${s.dataStatus !== 'complete'
      ? `<p class="panel-note">${s.dataStatus === 'stub'
          ? 'This system is scaffolded but not yet researched. Figures are placeholders, shown so the structure is visible; they are not sourced.'
          : 'Research in progress. Some figures may be incomplete or unsourced.'}</p>`
      : ''}
    ${tamSection(s, srcMap)}
    ${playersSection(s, srcMap)}
    ${rollupsSection(s, srcMap)}
    ${signalSection(s, srcMap)}
    ${sourcesSection(s, srcMap)}
  `
}

function tamSection(s, srcMap) {
  const t = s.tam || {}
  const total = money(t.total, srcMap)
  const nc = t.newConstruction
  const rr = t.renovationRepair
  const modeled = (o) => (o && o.modeledEstimate ? `<span class="modeled-chip">modeled estimate</span>` : '')
  const noteOf = (o) => (o && o.note ? `<span class="split-note">${esc(o.note)}</span>` : o && o.assumption ? `<span class="split-note">${esc(o.assumption)}</span>` : '')

  return `
    <section class="panel-section">
      <div class="section-head"><h3>Total Addressable Market</h3>${t.year ? `<span class="section-meta">${esc(t.year)}</span>` : ''}</div>
      <div class="tam-total"><span class="tam-total-val">${total}</span><span class="tam-total-label">total annual</span></div>
      <div class="tam-split">
        <div class="tam-split-item">
          <span class="split-label">New construction</span>
          <span class="split-val">${money(nc, srcMap)} ${modeled(nc)}</span>
          ${noteOf(nc)}
        </div>
        <div class="tam-split-item">
          <span class="split-label">Renovation / repair / replace</span>
          <span class="split-val">${money(rr, srcMap)} ${modeled(rr)}</span>
          ${noteOf(rr)}
        </div>
      </div>
      ${(t.methodology || t.confidence)
        ? `<div class="tam-meta">${t.methodology ? `<span class="method">${esc(t.methodology)}</span>` : ''}${confidenceChip(t.confidence)}</div>`
        : ''}
    </section>
  `
}

function playersSection(s, srcMap) {
  const players = s.topPlayers || []
  if (players.length === 0) {
    return `<section class="panel-section"><div class="section-head"><h3>Top players</h3></div><p class="empty-line">${s.dataStatus === 'complete' ? 'No dominant players identified.' : 'Research pending.'}</p></section>`
  }
  const rows = players
    .map(
      (p) => `
      <li class="player-row">
        <div class="player-main">
          <span class="player-name">${extLink(p.website, p.name)}</span>
          ${p.approxRevenue && p.approxRevenue.value != null ? `<span class="player-rev">${money(p.approxRevenue, srcMap)}</span>` : ''}
        </div>
        <div class="player-meta">
          ${p.ownership ? `<span class="own-chip">${esc(p.ownership)}</span>` : ''}
          ${p.sponsor ? `<span class="sponsor">${esc(p.sponsor)}</span>` : ''}
          ${p.note ? `<span class="player-note">${esc(p.note)}</span>` : ''}
          ${cite(p.source, srcMap)}
        </div>
      </li>`
    )
    .join('')
  return `<section class="panel-section"><div class="section-head"><h3>Top players</h3></div><ol class="player-list">${rows}</ol></section>`
}

function rollupsSection(s, srcMap) {
  const rollups = s.rollups || []
  if (rollups.length === 0) {
    return `<section class="panel-section"><div class="section-head"><h3>Roll-up activity</h3></div><p class="empty-line">${s.dataStatus === 'complete' ? 'No active consolidation identified.' : 'Research pending.'}</p></section>`
  }
  const rows = rollups
    .map(
      (r) => `
      <li class="rollup-row">
        <div class="rollup-head">
          <span class="rollup-platform">${extLink(r.link, r.platform, r.linkType)}</span>
          ${r.sponsor ? `<span class="rollup-sponsor">${esc(r.sponsor)}</span>` : ''}
          ${cite(r.source, srcMap)}
        </div>
        ${r.thesis ? `<p class="rollup-thesis">${esc(r.thesis)}</p>` : ''}
        ${r.notableAddOns ? `<p class="rollup-addons"><span class="addons-label">Notable add-ons</span> ${esc(r.notableAddOns)}</p>` : ''}
      </li>`
    )
    .join('')
  return `<section class="panel-section"><div class="section-head"><h3>Roll-up activity</h3></div><ul class="rollup-list">${rows}</ul></section>`
}

function signalSection(s, srcMap) {
  const f = s.fragmentation || {}
  const r = s.rollupIntensity || {}
  return `
    <section class="panel-section">
      <div class="section-head"><h3>Fragmentation & roll-up intensity</h3></div>
      <div class="signal-grid">
        <div class="signal-item">
          <div class="signal-top"><span class="signal-label">Fragmentation</span>${scoreFigure(f.score)}${cite(f.source, srcMap)}</div>
          <div class="signal-scale"><span>consolidated</span><span>fragmented</span></div>
          ${f.rationale ? `<p class="signal-rationale">${esc(f.rationale)}</p>` : ''}
        </div>
        <div class="signal-item">
          <div class="signal-top"><span class="signal-label">Roll-up intensity</span>${scoreFigure(r.score)}</div>
          <div class="signal-scale"><span>quiet</span><span>very active</span></div>
          ${r.rationale ? `<p class="signal-rationale">${esc(r.rationale)}</p>` : ''}
        </div>
      </div>
    </section>
  `
}

function sourcesSection(s, srcMap) {
  const sources = s.sources || []
  if (sources.length === 0) return ''
  const items = sources
    .map(
      (src, i) => `
      <li id="src-${i + 1}" class="source-item">
        <span class="source-num">${i + 1}</span>
        <span class="source-body">
          <span class="source-pub">${esc(src.publisher)}</span>${src.type ? `<span class="source-type">${esc(TYPE_LABELS[src.type] || src.type)}</span>` : ''}
          <span class="source-title">${src.url ? `<a href="${esc(src.url)}" target="_blank" rel="noopener noreferrer">${esc(src.title)}</a>` : esc(src.title)}</span>
          ${src.dateAccessed ? `<span class="source-date">accessed ${esc(src.dateAccessed)}</span>` : ''}
        </span>
      </li>`
    )
    .join('')
  return `<section class="panel-section sources"><div class="section-head"><h3>Sources</h3></div><ol class="source-list">${items}</ol></section>`
}
