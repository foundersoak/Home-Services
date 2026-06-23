import * as THREE from 'three'
import { flyTo } from './camera-moves.js'
import { clusterTier } from '../data/scoring.js'

/*
  hotspots.js
  HTML pins projected over the 3D canvas. No raycasting of named meshes for selection, so
  the number of clickable systems is independent of the model's mesh structure.

  Each frame (gated by a dirty flag set on camera change), every active pin's world anchor is
  projected to screen space and its transform updated. Pins are culled when behind the camera
  or off-screen, and hidden by a per-pin facing check (v1 occlusion; raycaster upgrade in P7).

  Level of detail: the landing shows six zone-cluster pins. Selecting a cluster (or a zone
  filter) expands it into its individual system pins. Only one set is processed per frame.
*/

export function createHotspots({ systems, clusters, camera, controls, container, onSelect, occluder }) {
  const size = { w: window.innerWidth, h: window.innerHeight }
  const _v = new THREE.Vector3()
  const _ray = new THREE.Raycaster()
  const _origin = new THREE.Vector3()
  const _rdir = new THREE.Vector3()

  let expanded = null // null = clustered | 'all' = every system | clusterId = one cluster
  let dirty = true
  let forceHidden = false // true while inside the interior scene
  let activePins = []

  const memberCount = {}
  for (const c of clusters) memberCount[c.id] = systems.filter((s) => s.displayCluster === c.id).length

  function centroid(clusterId) {
    const members = systems.filter((s) => s.displayCluster === clusterId)
    const sum = [0, 0, 0]
    for (const m of members) {
      sum[0] += m.position[0]
      sum[1] += m.position[1]
      sum[2] += m.position[2]
    }
    const n = members.length || 1
    return [sum[0] / n, sum[1] / n, sum[2] / n]
  }

  function makePinEl(isCluster) {
    const el = document.createElement('button')
    el.type = 'button'
    el.className = 'hotspot is-hidden' + (isCluster ? ' is-cluster' : '')
    el.innerHTML =
      '<span class="hotspot-dot"></span>' +
      '<span class="hotspot-label"><span class="hs-name"></span><span class="hs-sub"></span></span>'
    container.appendChild(el)
    return el
  }

  const systemPins = systems.map((s) => {
    const el = makePinEl(false)
    el.querySelector('.hs-name').textContent = s.name
    const tam = s.tam && s.tam.total ? s.tam.total.value : null
    el.querySelector('.hs-sub').textContent = tam != null ? formatTam(tam) : 'data pending'
    el.dataset.id = s.id
    el.addEventListener('click', (e) => {
      e.stopPropagation()
      onSelect && onSelect(s)
    })
    return { el, kind: 'system', data: s, anchor: s.position, normal: s.normal }
  })

  const clusterPins = clusters.filter((c) => memberCount[c.id] > 0).map((c) => {
    const el = makePinEl(true)
    el.querySelector('.hs-name').textContent = c.name
    el.querySelector('.hs-sub').textContent = memberCount[c.id] + ' systems'
    el.dataset.cluster = c.id
    const anchor = c.anchor || centroid(c.id)
    el.addEventListener('click', (e) => {
      e.stopPropagation()
      expand(c.id)
    })
    return { el, kind: 'cluster', data: c, anchor, normal: null }
  })

  function formatTam(v) {
    return '$' + v + 'B'
  }

  function hide(p) {
    p.el.classList.add('is-hidden')
    p.el.style.pointerEvents = 'none'
  }

  function recomputeActive() {
    if (expanded === null) {
      activePins = clusterPins
      systemPins.forEach(hide)
    } else if (expanded === 'all') {
      activePins = systemPins
      clusterPins.forEach(hide)
    } else {
      clusterPins.forEach(hide)
      systemPins.forEach((p) => {
        if (p.data.displayCluster !== expanded) hide(p)
      })
      activePins = systemPins.filter((p) => p.data.displayCluster === expanded)
    }
    dirty = true
  }

  function update() {
    if (forceHidden) return
    if (!dirty) return
    const w = size.w
    const h = size.h
    const cx = camera.position.x
    const cy = camera.position.y
    const cz = camera.position.z

    for (const p of activePins) {
      const a = p.anchor
      _v.set(a[0], a[1], a[2]).project(camera)

      // behind camera / beyond far plane
      if (_v.z > 1) {
        hide(p)
        continue
      }
      // off screen (with a small margin)
      if (_v.x < -1.15 || _v.x > 1.15 || _v.y < -1.15 || _v.y > 1.15) {
        hide(p)
        continue
      }
      // facing-check occlusion (v1): show only when the anchor faces the camera
      const n = p.normal
      if (n) {
        const vx = cx - a[0]
        const vy = cy - a[1]
        const vz = cz - a[2]
        const vl = Math.hypot(vx, vy, vz) || 1
        const dot = (n[0] * vx + n[1] * vy + n[2] * vz) / vl
        if (dot < -0.05) {
          hide(p)
          continue
        }
      }

      // Raycaster occlusion: hide pins blocked by the house body (cheap box proxy).
      if (occluder) {
        _origin.set(cx, cy, cz)
        _rdir.set(a[0] - cx, a[1] - cy, a[2] - cz)
        const dist = _rdir.length()
        _ray.set(_origin, _rdir.normalize())
        _ray.near = 0
        _ray.far = dist - 0.25
        if (_ray.intersectObject(occluder, false).length > 0) {
          hide(p)
          continue
        }
      }

      const sx = (_v.x * 0.5 + 0.5) * w
      const sy = (-_v.y * 0.5 + 0.5) * h
      p.el.style.transform = 'translate3d(' + sx.toFixed(1) + 'px,' + sy.toFixed(1) + 'px,0) translate(-50%,-50%)'
      p.el.classList.remove('is-hidden')
      p.el.style.pointerEvents = 'auto'
    }
    dirty = false
  }

  function clusterFraming(anchor) {
    const dx = anchor[0]
    const dz = anchor[2]
    const len = Math.hypot(dx, dz) || 1
    return {
      pos: [anchor[0] + (dx / len) * 7, anchor[1] + 2.6, anchor[2] + (dz / len) * 7],
      target: anchor
    }
  }

  function expand(clusterId) {
    expanded = clusterId
    recomputeActive()
    const c = clusters.find((x) => x.id === clusterId)
    const anchor = c.anchor || centroid(clusterId)
    flyTo(clusterFraming(anchor), camera, controls)
  }

  function collapse() {
    expanded = null
    recomputeActive()
  }

  function setZoneFilter(clusterId) {
    expanded = clusterId // null clears to clustered
    recomputeActive()
  }

  function showAll() {
    expanded = 'all'
    recomputeActive()
  }

  function dim(exceptId) {
    for (const p of systemPins) {
      p.el.classList.toggle('is-dimmed', exceptId != null && p.data.id !== exceptId)
    }
  }

  const TIER_CLASSES = ['tier-hot', 'tier-warm', 'tier-cool']

  // Recolor pins by opportunity tier. When heatmapOn is false, pins revert to the default dot.
  function applyScores(scoreMap, heatmapOn) {
    for (const p of systemPins) {
      p.el.classList.remove(...TIER_CLASSES)
      if (heatmapOn) {
        const rec = scoreMap.get(p.data.id)
        if (rec && rec.tier) p.el.classList.add('tier-' + rec.tier)
      }
    }
    for (const p of clusterPins) {
      p.el.classList.remove(...TIER_CLASSES)
      if (heatmapOn) {
        const tier = clusterTier(systems, p.data.id, scoreMap)
        if (tier) p.el.classList.add('tier-' + tier)
      }
    }
  }

  function markDirty() {
    dirty = true
  }

  // Hide every pin (e.g. while the camera is inside the interior scene), or restore.
  function setVisible(v) {
    forceHidden = !v
    if (!v) {
      systemPins.forEach(hide)
      clusterPins.forEach(hide)
    } else {
      recomputeActive()
    }
  }

  controls.addEventListener('change', () => {
    dirty = true
  })
  window.addEventListener('resize', () => {
    size.w = window.innerWidth
    size.h = window.innerHeight
    dirty = true
  })

  recomputeActive()

  return {
    update,
    expand,
    collapse,
    setZoneFilter,
    showAll,
    dim,
    applyScores,
    markDirty,
    setVisible,
    get expandedCluster() {
      return expanded
    }
  }
}
