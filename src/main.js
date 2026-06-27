import './styles/tokens.css'
import './styles/app.css'
import './styles/hotspots.css'
import './styles/panel.css'
import './styles/controls.css'
import * as THREE from 'three'
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js'
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js'
import { SSAOPass } from 'three/addons/postprocessing/SSAOPass.js'
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js'
import { createScene } from './scene/scene.js'
import { loadHouse, loadInterior } from './scene/house.js'
import { createHotspots } from './scene/hotspots.js'
import { flyTo, reset as resetCamera } from './scene/camera-moves.js'
import { systems as baseSystems, CLUSTERS } from './data/systems.js'
import { computeScores, DEFAULT_WEIGHTS } from './data/scoring.js'
import { createPanel } from './ui/panel.js'
import { createControls } from './ui/filters.js'
import { createLegend } from './ui/legend.js'

/*
  main.js
  Bootstraps scene + house + hotspots + UI and owns the single render loop. Scoring state
  (weights, heatmap on/off, current score map) lives here; refreshScores() recomputes and
  pushes results to the hotspots, legend, and ranked list. ?stress=N load-tests the pins.
*/

const app = document.getElementById('app')
const canvas = document.getElementById('scene')
const hotspotLayer = document.getElementById('hotspot-layer')
const { scene, camera, renderer, controls } = createScene(canvas)

// Ambient-occlusion post-processing for depth/definition. Desktop-only (skip on small
// screens, where SSAO is too expensive); those fall back to a plain render.
let composer = null
if (window.innerWidth >= 900) {
  composer = new EffectComposer(renderer)
  composer.addPass(new RenderPass(scene, camera))
  const ssao = new SSAOPass(scene, camera, window.innerWidth, window.innerHeight)
  ssao.kernelRadius = 0.6
  ssao.minDistance = 0.002
  ssao.maxDistance = 0.08
  composer.addPass(ssao)
  composer.addPass(new OutputPass())
  window.addEventListener('resize', () => composer.setSize(window.innerWidth, window.innerHeight))
}

let systems = baseSystems
const stress = new URLSearchParams(location.search).get('stress')
if (stress) {
  const target = Math.max(parseInt(stress, 10) || 0, baseSystems.length)
  systems = baseSystems.concat(makeStress(target - baseSystems.length))
}

// Exterior <-> interior scene state.
let houseGroup = null
let interiorGroup = null
let mode = 'exterior'
let lastOpened = null // last system whose panel was opened (drives close-to-L2)
let resetting = false // true during a reset-view, so close-to-L2 does not fight the wide reset
let zoning = false // true during a dock zone change, so close-to-L2 does not fight it
let pendingEnter = null // timeout id for the deferred interior enter swap (cancellable)
let pendingExit = null // timeout id for the deferred interior exit swap (cancellable)
const veil = document.getElementById('stage-veil')

loadHouse().then((house) => {
  houseGroup = house
  scene.add(house)
  const loader = document.getElementById('loader')
  if (loader) {
    loader.classList.add('is-gone')
    setTimeout(() => loader.remove(), 800)
  }
})

loadInterior()
  .then((room) => {
    room.visible = false
    interiorGroup = room
    scene.add(room)
  })
  .catch(() => {
    // No interior model present; interior systems fall back to an exterior framing.
  })

const state = {
  weights: { ...DEFAULT_WEIGHTS },
  heatmap: false,
  scores: computeScores(systems, DEFAULT_WEIGHTS)
}

const panel = createPanel({
  container: app,
  onClose: () => returnToContext()
})

// Box proxy of the house mass for raycaster occlusion (hides pins behind the building).
const occluder = new THREE.Mesh(new THREE.BoxGeometry(6.4, 4.4, 4.8))
occluder.position.set(-0.2, 2.3, -0.1)
occluder.updateMatrixWorld(true)

const hotspots = createHotspots({
  systems,
  clusters: CLUSTERS,
  camera,
  controls,
  container: hotspotLayer,
  onSelect: (s) => selectSystem(s),
  occluder,
  // Drive the dock zone <select> and the contextual LHS list from whatever expands a cluster
  // (pin click, dock select, or close-to-L2), so all three stay in sync.
  onExpand: (id) => {
    controlsUi.setZoneValue(id)
    controlsUi.setClusterContext(id)
  },
  onCollapse: () => {
    controlsUi.setZoneValue(null)
    controlsUi.setClusterContext(null)
  }
})

const legend = createLegend({ container: app })

const controlsUi = createControls({
  container: app,
  systems,
  clusters: CLUSTERS,
  getScores: () => state.scores,
  initialWeights: state.weights,
  handlers: {
    onZone: (id) => {
      // A zone change must land on a clean exterior state, so tear down any open panel / interior
      // scene first. returnToContext early-returns while zoning; this path owns the camera + LOD.
      zoning = true
      if (panel.openId != null) panel.close()
      controlsUi.setActiveRow(null)
      if (id == null) {
        hotspots.collapse()
        if (mode === 'interior') {
          exitInterior() // swap to exterior + wide reset + restore pins (panel is closed)
        } else {
          hotspots.setVisible(true)
          resetCamera(camera, controls)
        }
      } else if (mode === 'interior') {
        hotspots.expand(id, { fly: false }) // set LOD + scope the list without flying yet
        exitInterior(hotspots.clusterFramingFor(id)) // swap to exterior and fly to the cluster
      } else {
        hotspots.setVisible(true) // a just-closed panel may have left pins hidden
        hotspots.expand(id)
      }
      zoning = false
    },
    onHeatmap: (on) => {
      state.heatmap = on
      refreshScores()
    },
    onWeights: (w) => {
      state.weights = w
      refreshScores()
    },
    onZoom: (dir) => zoomBy(dir === 'in' ? 0.78 : 1.28),
    onSelectSystem: (s) => selectSystem(s)
  }
})

// Calibration mode (?calib): show every pin with its label forced visible, for anchor tuning.
if (new URLSearchParams(location.search).has('calib')) {
  app.classList.add('calib-mode')
  hotspots.showAll()
  // Raycast a screen pixel (CSS px) onto the model and return the world point, for anchor tuning.
  window.__pick = (px, py) => {
    const r = new THREE.Raycaster()
    const ndc = new THREE.Vector2((px / window.innerWidth) * 2 - 1, -(py / window.innerHeight) * 2 + 1)
    r.setFromCamera(ndc, camera)
    const hits = r.intersectObjects(scene.children, true)
    if (!hits.length) return null
    const p = hits[0].point
    return { x: +p.x.toFixed(2), y: +p.y.toFixed(2), z: +p.z.toFixed(2) }
  }
  window.__cam = () => ({
    pos: camera.position.toArray().map((v) => +v.toFixed(2)),
    target: controls.target.toArray().map((v) => +v.toFixed(2))
  })
}

// Default interior framing (overridden per system by interiorCamera).
const DEFAULT_INTERIOR = { pos: [5.5, 4, 7], target: [-0.3, 2.3, -0.8] }

function enterInterior(s) {
  cancelPendingExit() // a pending exit would fight this enter
  if (pendingEnter) clearTimeout(pendingEnter) // collapse a rapid second enter into one
  veil.classList.add('is-active')
  pendingEnter = setTimeout(() => {
    pendingEnter = null
    mode = 'interior'
    if (houseGroup) houseGroup.visible = false
    if (interiorGroup) interiorGroup.visible = true
    hotspots.setVisible(false)
    flyTo(s.interiorCamera || DEFAULT_INTERIOR, camera, controls, { duration: 0.4 })
    veil.classList.remove('is-active')
  }, 330)
}

// If the panel closes (or reset fires) before the deferred enter swap runs, cancel it so we are
// not stranded inside the interior scene with no panel open.
function cancelPendingEnter() {
  if (pendingEnter) {
    clearTimeout(pendingEnter)
    pendingEnter = null
    veil.classList.remove('is-active')
  }
}
function cancelPendingExit() {
  if (pendingExit) {
    clearTimeout(pendingExit)
    pendingExit = null
  }
}

// restorePins=false keeps pins hidden after the swap (used when exiting interior into a still-open
// exterior panel, where the pins should stay hidden until the panel itself closes). The deferred
// swap is cancellable (a newer exit supersedes a stale one) and never restores pins while a panel
// is still open, so a stale exit can never reveal stray pins through the house.
function exitInterior(framing, restorePins = true) {
  if (pendingExit) clearTimeout(pendingExit) // supersede any in-flight exit
  veil.classList.add('is-active')
  pendingExit = setTimeout(() => {
    pendingExit = null
    mode = 'exterior'
    if (interiorGroup) interiorGroup.visible = false
    if (houseGroup) houseGroup.visible = true
    if (restorePins && panel.openId == null) hotspots.setVisible(true)
    if (framing) flyTo(framing, camera, controls, { duration: 0.4 })
    else resetCamera(camera, controls, { duration: 0.4 })
    veil.classList.remove('is-active')
  }, 330)
}

// Dolly the camera toward (factor<1) or away from (factor>1) the current target, clamped to the
// orbit distance limits. Keeps the view direction and target, so it reads as a clean zoom.
function zoomBy(factor) {
  controls.autoRotate = false
  const t = controls.target
  const offset = new THREE.Vector3().subVectors(camera.position, t)
  const dist = THREE.MathUtils.clamp(offset.length() * factor, controls.minDistance, controls.maxDistance)
  offset.setLength(dist)
  flyTo({ pos: [t.x + offset.x, t.y + offset.y, t.z + offset.z], target: [t.x, t.y, t.z] }, camera, controls, {
    duration: 0.3
  })
}

function selectSystem(s) {
  controls.autoRotate = false
  // Ensure THIS system's cluster is the expanded one, so closing the panel returns to the right
  // L2 (e.g. when the system was picked from the GLOBAL ranked list while a different cluster, or
  // none, or the calib 'all' set was active). fly:false avoids a stray cluster flight before the
  // system flight below; it also scopes the contextual list to the cluster.
  if (hotspots.expandedCluster !== s.displayCluster) hotspots.expand(s.displayCluster, { fly: false })
  // Hide every other pin immediately, BEFORE any async transition, so no pins flash through the
  // house (the expand above just made the cluster's pins active). Stays hidden until the panel closes.
  hotspots.setVisible(false)
  lastOpened = s
  panel.open(s, state.scores.get(s.id))
  controlsUi.setActiveRow(s.id)
  if (s.interior && interiorGroup) {
    enterInterior(s)
  } else if (mode === 'interior') {
    exitInterior(s.camera, false) // keep pins hidden; the panel is still open
  } else {
    flyTo(s.camera, camera, controls)
  }
}

// Closing a detail panel returns the camera to at least the L2 cluster view (sibling pins + the
// contextual list visible), so picking the next system is easy. reset-view sets `resetting` so its
// deliberate wide reset is not overridden here.
function returnToContext() {
  cancelPendingEnter() // a close mid interior-transition returns cleanly to the exterior L2
  if (resetting || zoning) return // reset-view / zone-change own their own camera + LOD teardown
  controlsUi.setActiveRow(null)
  const cl = hotspots.expandedCluster || (lastOpened && lastOpened.displayCluster)
  if (mode === 'interior') {
    exitInterior(cl ? hotspots.clusterFramingFor(cl) : undefined)
  } else if (cl) {
    hotspots.setVisible(true)
    flyTo(hotspots.clusterFramingFor(cl), camera, controls, { duration: 0.6 })
  } else {
    hotspots.setVisible(true)
    resetCamera(camera, controls)
  }
}

function refreshScores() {
  state.scores = computeScores(systems, state.weights)
  hotspots.applyScores(state.scores, state.heatmap)
  legend.update(state.heatmap)
  controlsUi.refreshList()
}
refreshScores()

// Data integrity check (dev build, or ?validate): every non-null numeric must trace to a
// resolving source id, unless it is a flagged modeled estimate. Enforces "no naked numbers".
if (import.meta.env.DEV || new URLSearchParams(location.search).has('validate')) {
  validateData(systems)
}

document.getElementById('reset-view').addEventListener('click', () => {
  controls.autoRotate = false
  resetting = true
  const wasInterior = mode === 'interior'
  panel.close() // fires onClose -> returnToContext, which early-returns while resetting
  controlsUi.setActiveRow(null)
  controlsUi.closeList() // a full reset also dismisses a manually-opened ranked list
  hotspots.collapse() // fires onCollapse -> clears zone select + contextual list scope
  if (wasInterior) {
    exitInterior() // swap back to exterior, wide reset, restore cluster pins
  } else {
    hotspots.setVisible(true)
    resetCamera(camera, controls)
  }
  resetting = false
})

// Escape closes the open detail panel (which flies back to the L2 cluster view), so keyboard users
// are never stranded in a system with no quick way out.
window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && panel.openId != null) panel.close()
})

function stopAutoRotate() {
  controls.autoRotate = false
  controls.removeEventListener('start', stopAutoRotate)
}
controls.addEventListener('start', stopAutoRotate)

// Dissolve the landing hero on first interaction.
const intro = document.getElementById('intro')
window.addEventListener(
  'pointerdown',
  () => {
    if (intro) intro.classList.add('is-gone')
  },
  { once: true }
)

function tick() {
  requestAnimationFrame(tick)
  controls.update()
  hotspots.update()
  if (composer) composer.render()
  else renderer.render(scene, camera)
}
tick()

function validateData(list) {
  let issues = 0
  for (const s of list) {
    if (s.dataStatus === 'stub') continue
    const ids = new Set((s.sources || []).map((x) => x.id))
    const check = (val, src, label, modeled) => {
      if (val == null || modeled) return
      if (!src) {
        console.warn(`[data] ${s.id}: ${label}=${val} has no source (naked number)`)
        issues++
      } else if (!ids.has(src)) {
        console.warn(`[data] ${s.id}: ${label} source '${src}' is not in sources[]`)
        issues++
      }
    }
    const t = s.tam || {}
    check(t.total && t.total.value, t.total && t.total.source, 'tam.total')
    check(t.newConstruction && t.newConstruction.value, t.newConstruction && t.newConstruction.source, 'tam.newConstruction', t.newConstruction && t.newConstruction.modeledEstimate)
    check(t.renovationRepair && t.renovationRepair.value, t.renovationRepair && t.renovationRepair.source, 'tam.renovationRepair', t.renovationRepair && t.renovationRepair.modeledEstimate)
    for (const p of s.topPlayers || []) check(p.approxRevenue && p.approxRevenue.value, p.approxRevenue && p.approxRevenue.source, `player "${p.name}" revenue`)
    check(s.fragmentation && s.fragmentation.score, s.fragmentation && s.fragmentation.source, 'fragmentation')
  }
  if (issues) console.warn(`[data] ${issues} citation issue(s) across ${list.length} systems`)
  else console.info(`[data] OK: every non-null numeric in ${list.filter((s) => s.dataStatus !== 'stub').length} populated systems traces to a source`)
}

// Deterministic dummy systems ringed around the house for pin stress-testing.
function makeStress(n) {
  const ids = CLUSTERS.map((c) => c.id)
  const out = []
  for (let i = 0; i < n; i++) {
    const angle = (i / Math.max(n, 1)) * Math.PI * 2
    const r = 4 + (i % 5)
    const pos = [Math.cos(angle) * r, 0.5 + (i % 6), Math.sin(angle) * r]
    out.push({
      id: 'stress-' + i,
      name: 'Stress ' + i,
      zone: 'yard',
      displayCluster: ids[i % ids.length],
      position: pos,
      normal: [Math.cos(angle), 0.2, Math.sin(angle)],
      camera: { pos: [pos[0] * 1.5, pos[1] + 3, pos[2] * 1.5], target: pos },
      dataStatus: 'stub',
      tam: { total: { value: (i % 50) + 1 } },
      fragmentation: { score: (i % 5) + 1 },
      rollupIntensity: { score: (i % 5) + 1 },
      topPlayers: [],
      rollups: [],
      sources: []
    })
  }
  return out
}
