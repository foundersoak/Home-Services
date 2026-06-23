import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'

/*
  scene.js
  Owns the renderer, camera, lights, controls, and the invisible shadow-catcher ground.
  Returns the handles main.js needs. The visible backdrop is a CSS gradient behind a
  transparent canvas (see app.css #app), so the house reads as a softly-lit floating
  product in the Apple-hero sense, grounded only by a soft contact shadow.
*/

export function createScene(canvas) {
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true })
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  renderer.setSize(window.innerWidth, window.innerHeight)
  renderer.shadowMap.enabled = true
  renderer.shadowMap.type = THREE.PCFSoftShadowMap
  renderer.outputColorSpace = THREE.SRGBColorSpace
  renderer.toneMapping = THREE.ACESFilmicToneMapping
  renderer.toneMappingExposure = 1.04

  const scene = new THREE.Scene()

  const camera = new THREE.PerspectiveCamera(42, window.innerWidth / window.innerHeight, 0.1, 200)
  camera.position.set(9.5, 6.8, 11.5)

  const controls = new OrbitControls(camera, canvas)
  controls.enableDamping = true
  controls.dampingFactor = 0.06
  controls.enablePan = false
  controls.minDistance = 7
  controls.maxDistance = 24
  controls.minPolarAngle = 0.12
  controls.maxPolarAngle = Math.PI / 2 - 0.04 // never dip below the ground plane
  controls.target.set(0, 1.7, 0)
  controls.autoRotate = true
  controls.autoRotateSpeed = 0.35

  // Soft studio lighting: warm hemisphere fill, a warm key (the only shadow caster),
  // and a cool low fill to keep the shadow side from going dead.
  scene.add(new THREE.HemisphereLight(0xf3eee2, 0x1b2820, 0.85))

  const key = new THREE.DirectionalLight(0xfff5e6, 2.2)
  key.position.set(8, 13, 7)
  key.castShadow = true
  key.shadow.mapSize.set(2048, 2048)
  key.shadow.camera.near = 1
  key.shadow.camera.far = 60
  key.shadow.camera.left = -14
  key.shadow.camera.right = 14
  key.shadow.camera.top = 14
  key.shadow.camera.bottom = -14
  key.shadow.bias = -0.0004
  key.shadow.radius = 7
  scene.add(key)

  const fill = new THREE.DirectionalLight(0xbcd2c6, 0.45)
  fill.position.set(-9, 5, -7)
  scene.add(fill)

  // Invisible plane that only renders the contact shadow.
  const ground = new THREE.Mesh(
    new THREE.PlaneGeometry(80, 80),
    new THREE.ShadowMaterial({ opacity: 0.26 })
  )
  ground.rotation.x = -Math.PI / 2
  ground.receiveShadow = true
  scene.add(ground)

  function resize() {
    const w = window.innerWidth
    const h = window.innerHeight
    camera.aspect = w / h
    camera.updateProjectionMatrix()
    renderer.setSize(w, h)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  }
  window.addEventListener('resize', resize)

  return { scene, camera, renderer, controls, ground }
}
