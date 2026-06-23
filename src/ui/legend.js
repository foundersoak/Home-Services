/*
  legend.js
  A small frosted legend (bottom-left). The opportunity-tier scale appears only when the
  heatmap is on; the data-status key is always present.
*/

export function createLegend({ container }) {
  const el = document.createElement('div')
  el.id = 'legend'
  el.innerHTML = `
    <div class="legend-row legend-tiers is-hidden">
      <span class="legend-title">Opportunity</span>
      <span class="legend-scale">
        <span class="ls ls-cool">Cool</span><span class="ls ls-warm">Warm</span><span class="ls ls-hot">Hot</span>
      </span>
    </div>
    <div class="legend-row legend-status">
      <span class="legend-title">Data</span>
      <span class="legend-items">
        <span class="li"><i class="li-dot li-complete"></i>Researched</span>
        <span class="li"><i class="li-dot li-stub"></i>Pending</span>
      </span>
    </div>
  `
  container.appendChild(el)
  const tiers = el.querySelector('.legend-tiers')
  return {
    update(heatmapOn) {
      tiers.classList.toggle('is-hidden', !heatmapOn)
    }
  }
}
