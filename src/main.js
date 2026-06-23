import './styles/tokens.css'
import './styles/app.css'
import { createScene } from './scene/scene.js'
import { loadHouse } from './scene/house.js'

/*
  main.js
  Bootstraps the scene + house and owns the single render loop. Hotspots, panel,
  filters, and scoring wire in here in later phases.
*/

const canvas = document.getElementById('scene')
const { scene, camera, renderer, controls } = createScene(canvas)

loadHouse().then((house) => {
  scene.add(house)
})

// Idle auto-rotate stops permanently on first user interaction.
function stopAutoRotate() {
  controls.autoRotate = false
  controls.removeEventListener('start', stopAutoRotate)
}
controls.addEventListener('start', stopAutoRotate)

function tick() {
  requestAnimationFrame(tick)
  controls.update()
  renderer.render(scene, camera)
}
tick()
