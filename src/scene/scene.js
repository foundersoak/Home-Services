import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js'

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
  renderer.toneMapping = THREE.AgXToneMapping
  renderer.toneMappingExposure = 1.25

  const scene = new THREE.Scene()

  // HDR-style image-based lighting so PBR materials read with real reflections and
  // soft ambient, instead of flat plastic. RoomEnvironment is a procedural studio.
  const pmrem = new THREE.PMREMGenerator(renderer)
  scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture
  scene.environmentIntensity = 0.42 // less flat ambient, more directional contrast

  const camera = new THREE.PerspectiveCamera(42, window.innerWidth / window.innerHeight, 0.1, 200)
  camera.position.set(14, 10.5, 17)

  const controls = new OrbitControls(camera, canvas)
  controls.enableDamping = true
  controls.dampingFactor = 0.06
  controls.enablePan = false
  controls.minDistance = 9
  controls.maxDistance = 34
  controls.minPolarAngle = 0.12
  controls.maxPolarAngle = Math.PI / 2 - 0.04 // never dip below the ground plane
  controls.target.set(0, 2.2, 0)
  controls.autoRotate = true
  controls.autoRotateSpeed = 0.35

  // Soft studio lighting: warm hemisphere fill, a warm key (the only shadow caster),
  // and a cool low fill to keep the shadow side from going dead.
  scene.add(new THREE.HemisphereLight(0xf3eee2, 0x1b2820, 0.28))

  const key = new THREE.DirectionalLight(0xfff4e2, 3.1)
  key.position.set(9, 15, 8)
  key.castShadow = true
  key.shadow.mapSize.set(2048, 2048)
  key.shadow.camera.near = 1
  key.shadow.camera.far = 60
  key.shadow.camera.left = -14
  key.shadow.camera.right = 14
  key.shadow.camera.top = 14
  key.shadow.camera.bottom = -14
  key.shadow.bias = -0.0004
  key.shadow.radius = 4
  scene.add(key)

  // Cool rim light from behind for edge separation (reduces the flat 'clay' read).
  const rim = new THREE.DirectionalLight(0xbfe0ff, 1.1)
  rim.position.set(-8, 7, -10)
  scene.add(rim)

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
