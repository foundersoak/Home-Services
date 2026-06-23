import './styles/tokens.css'
import './styles/app.css'
import './styles/hotspots.css'
import './styles/panel.css'
import './styles/controls.css'
import { createScene } from './scene/scene.js'
import { loadHouse } from './scene/house.js'
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

let systems = baseSystems
const stress = new URLSearchParams(location.search).get('stress')
if (stress) {
  const target = Math.max(parseInt(stress, 10) || 0, baseSystems.length)
  systems = baseSystems.concat(makeStress(target - baseSystems.length))
}

loadHouse().then((house) => {
  scene.add(house)
})

const state = {
  weights: { ...DEFAULT_WEIGHTS },
  heatmap: false,
  scores: computeScores(systems, DEFAULT_WEIGHTS)
}

const panel = createPanel({
  container: app,
  onClose: () => hotspots.dim(null)
})

const hotspots = createHotspots({
  systems,
  clusters: CLUSTERS,
  camera,
  controls,
  container: hotspotLayer,
  onSelect: (s) => selectSystem(s)
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
      if (id == null) {
        hotspots.collapse()
        resetCamera(camera, controls)
      } else {
        hotspots.expand(id)
      }
    },
    onHeatmap: (on) => {
      state.heatmap = on
      refreshScores()
    },
    onWeights: (w) => {
      state.weights = w
      refreshScores()
    },
    onSelectSystem: (s) => selectSystem(s)
  }
})

function selectSystem(s) {
  controls.autoRotate = false
  flyTo(s.camera, camera, controls)
  hotspots.dim(s.id)
  panel.open(s, state.scores.get(s.id))
}

function refreshScores() {
  state.scores = computeScores(systems, state.weights)
  hotspots.applyScores(state.scores, state.heatmap)
  legend.update(state.heatmap)
  controlsUi.refreshList()
}
refreshScores()

document.getElementById('reset-view').addEventListener('click', () => {
  controls.autoRotate = false
  hotspots.collapse()
  hotspots.dim(null)
  panel.close()
  resetCamera(camera, controls)
})

function stopAutoRotate() {
  controls.autoRotate = false
  controls.removeEventListener('start', stopAutoRotate)
}
controls.addEventListener('start', stopAutoRotate)

function tick() {
  requestAnimationFrame(tick)
  controls.update()
  hotspots.update()
  renderer.render(scene, camera)
}
tick()

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
