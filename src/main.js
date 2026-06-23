import './styles/tokens.css'
import './styles/app.css'
import './styles/hotspots.css'
import { createScene } from './scene/scene.js'
import { loadHouse } from './scene/house.js'
import { createHotspots } from './scene/hotspots.js'
import { flyTo, reset as resetCamera } from './scene/camera-moves.js'
import { systems as baseSystems, CLUSTERS } from './data/systems.js'

/*
  main.js
  Bootstraps the scene + house + hotspots and owns the single render loop.
  ?stress=N pads the system list with N dummy anchors to load-test pin performance.
*/

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

const hotspots = createHotspots({
  systems,
  clusters: CLUSTERS,
  camera,
  controls,
  container: hotspotLayer,
  onSelect: (s) => {
    flyTo(s.camera, camera, controls)
    hotspots.dim(s.id)
    // Panel opens here in P3.
  }
})

document.getElementById('reset-view').addEventListener('click', () => {
  controls.autoRotate = false
  hotspots.collapse()
  hotspots.dim(null)
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
