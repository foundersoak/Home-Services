import './styles/tokens.css'
import './styles/app.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'

/*
  Phase 0 skeleton.
  A minimal but real Three.js scene whose only job is to prove the toolchain end to end:
  Vite bundles three + the app, and the GitHub Pages base path resolves assets on the live
  URL. Phase 1 replaces the placeholder massing below with the cutaway house module.
*/

const canvas = document.getElementById('scene')

const renderer = new THREE.WebGLRenderer({ canvas, antialias: true })
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
renderer.setSize(window.innerWidth, window.innerHeight)

const scene = new THREE.Scene()
scene.background = new THREE.Color('#0e1814')

const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 100)
camera.position.set(5, 4, 7)

const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true
controls.autoRotate = true
controls.autoRotateSpeed = 0.4
controls.target.set(0, 1, 0)

scene.add(new THREE.HemisphereLight(0xffffff, 0x33403a, 1.0))
const key = new THREE.DirectionalLight(0xffffff, 1.3)
key.position.set(6, 9, 5)
scene.add(key)

// Placeholder massing. Stand-in until the cutaway house module (house.js) lands in P1.
const walls = new THREE.Mesh(
  new THREE.BoxGeometry(3, 2, 3),
  new THREE.MeshStandardMaterial({ color: 0x2c5f3f, roughness: 0.85 })
)
walls.position.y = 1
scene.add(walls)

const roof = new THREE.Mesh(
  new THREE.ConeGeometry(2.45, 1.4, 4),
  new THREE.MeshStandardMaterial({ color: 0x8a6d3b, roughness: 0.8 })
)
roof.position.y = 2.7
roof.rotation.y = Math.PI / 4
scene.add(roof)

const ground = new THREE.Mesh(
  new THREE.CircleGeometry(8, 48),
  new THREE.MeshStandardMaterial({ color: 0x16241d, roughness: 1 })
)
ground.rotation.x = -Math.PI / 2
scene.add(ground)

function onResize() {
  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()
  renderer.setSize(window.innerWidth, window.innerHeight)
}
window.addEventListener('resize', onResize)

function tick() {
  requestAnimationFrame(tick)
  controls.update()
  renderer.render(scene, camera)
}
tick()
