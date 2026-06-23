import * as THREE from 'three'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'

/*
  house.js
  The 3D centerpiece, behind a single swap point.

  To use a real model: set MODEL_URL to a .glb path (e.g. 'assets/house.glb' placed in
  /src/assets/, or any URL). Leave it null to use the built-in primitive cutaway house.
  Swapping the model is this one line; afterward, re-author the per-system hotspot anchors
  and camera framings in src/data/systems.js against the new geometry.
*/

export const MODEL_URL = null

export async function loadHouse() {
  if (MODEL_URL) {
    const loader = new GLTFLoader()
    const url = import.meta.env.BASE_URL + String(MODEL_URL).replace(/^\//, '')
    const gltf = await loader.loadAsync(url)
    const root = gltf.scene
    root.traverse((o) => {
      if (o.isMesh) {
        o.castShadow = true
        o.receiveShadow = true
      }
    })
    return root
  }
  return buildPlaceholderHouse()
}

// ---------------------------------------------------------------------------
// Placeholder cutaway house, built from primitives.
// Solid walls on the back (-z) and left (-x); the front (+z) and right (+x) are
// left partial so the interior reads as a dollhouse cutaway facing the camera.
// ---------------------------------------------------------------------------

const COLORS = {
  exterior: 0xe7e0d0,
  interiorWall: 0xd8cdb6,
  floor: 0xb0895f,
  roof: 0x474440,
  foundation: 0x8d8a82,
  trim: 0x2c5f3f,
  glass: 0x9fc2cf,
  metal: 0xaab0b0,
  steel: 0xccd0cd,
  wood: 0xa07b4f,
  water: 0x5aa6bd,
  foliage: 0x356640,
  foliageLight: 0x4a7d52,
  trunk: 0x6b4f34,
  concrete: 0x9a958b,
  brick: 0x9a5f48,
  panel: 0x1c2533
}

function std(color, opts = {}) {
  return new THREE.MeshStandardMaterial({ color, roughness: 0.82, metalness: 0.0, ...opts })
}

function box(w, h, d, color, opts = {}) {
  const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), std(color, opts))
  m.castShadow = true
  m.receiveShadow = true
  return m
}

function at(mesh, x, y, z) {
  mesh.position.set(x, y, z)
  return mesh
}

function buildPlaceholderHouse() {
  const house = new THREE.Group()
  house.name = 'placeholder-house'
  const add = (m) => {
    house.add(m)
    return m
  }

  // Foundation + floor slabs
  add(at(box(6.7, 0.4, 5.7, COLORS.foundation, { roughness: 0.95 }), 0, 0.2, 0))
  add(at(box(6, 0.14, 5, COLORS.floor), 0, 0.47, 0))
  add(at(box(6, 0.14, 5, COLORS.floor), 0, 2.6, 0))

  // Walls: full back + left; partial front + right (the cutaway opening)
  add(at(box(6, 4.3, 0.18, COLORS.exterior), 0, 2.35, -2.41)) // back
  add(at(box(0.18, 4.3, 5, COLORS.exterior), -2.91, 2.35, 0)) // left
  add(at(box(2.2, 4.3, 0.18, COLORS.exterior), -1.8, 2.35, 2.41)) // front-left segment
  add(at(box(0.18, 4.3, 2.0, COLORS.exterior), 2.91, 2.35, -1.4)) // right-back segment
  add(at(box(0.14, 4.2, 2.8, COLORS.interiorWall), 0.2, 2.35, -1.0)) // interior partition

  // Windows (glass pane + forest trim frame) on the solid walls
  const glassOpts = { transparent: true, opacity: 0.45, metalness: 0.1, roughness: 0.2 }
  function addWindow(x, y, z, w, h, rotY = 0) {
    const g = new THREE.Group()
    const frame = box(w + 0.12, h + 0.12, 0.08, COLORS.trim)
    const pane = box(w, h, 0.06, COLORS.glass, glassOpts)
    pane.position.z = 0.02
    g.add(frame, pane)
    g.position.set(x, y, z)
    g.rotation.y = rotY
    add(g)
  }
  addWindow(-1.4, 1.5, -2.5, 1.1, 1.2)
  addWindow(1.2, 1.5, -2.5, 1.1, 1.2)
  addWindow(-1.4, 3.5, -2.5, 1.1, 1.0)
  addWindow(1.2, 3.5, -2.5, 1.1, 1.0)
  addWindow(-3.0, 1.5, -0.8, 1.1, 1.2, Math.PI / 2)
  addWindow(-3.0, 3.5, 0.8, 1.1, 1.0, Math.PI / 2)

  // Gable roof: two planks to a ridge along X, plus gable-end triangles
  const roofLen = 6.9
  const halfDepth = 2.85
  const rise = 1.55
  const slopeLen = Math.hypot(halfDepth, rise)
  const slopeAngle = Math.atan2(rise, halfDepth)
  const eaveY = 4.55
  const midY = eaveY + rise / 2
  const frontRoof = box(roofLen, 0.16, slopeLen, COLORS.roof, { roughness: 0.7 })
  frontRoof.rotation.x = slopeAngle
  add(at(frontRoof, 0, midY, halfDepth / 2))
  const backRoof = box(roofLen, 0.16, slopeLen, COLORS.roof, { roughness: 0.7 })
  backRoof.rotation.x = -slopeAngle
  add(at(backRoof, 0, midY, -halfDepth / 2))

  function addGable(xPos) {
    const shape = new THREE.Shape()
    shape.moveTo(-halfDepth, 0)
    shape.lineTo(halfDepth, 0)
    shape.lineTo(0, rise)
    shape.closePath()
    const geo = new THREE.ExtrudeGeometry(shape, { depth: 0.14, bevelEnabled: false })
    const m = new THREE.Mesh(geo, std(COLORS.exterior))
    m.castShadow = true
    m.receiveShadow = true
    m.rotation.y = Math.PI / 2
    m.position.set(xPos, eaveY, 0)
    add(m)
  }
  addGable(3.0)
  addGable(-3.0)

  // Chimney
  add(at(box(0.62, 1.9, 0.62, COLORS.brick, { roughness: 0.95 }), 1.5, 5.5, -1.1))

  // Solar panels on the front roof slope
  function addSolar(offX) {
    const p = box(1.25, 0.05, 0.85, COLORS.panel, { metalness: 0.35, roughness: 0.35 })
    p.rotation.x = slopeAngle
    add(at(p, offX, midY + 0.12, halfDepth / 2))
  }
  addSolar(-1.2)
  addSolar(0.3)
  addSolar(1.8)

  // Garage + driveway
  add(at(box(2.6, 2.1, 3.0, COLORS.exterior), -4.35, 1.05, 0.9))
  add(at(box(2.6, 0.16, 3.1, COLORS.roof), -4.35, 2.18, 0.9))
  add(at(box(2.1, 1.6, 0.1, COLORS.steel, { metalness: 0.2, roughness: 0.5 }), -4.35, 0.95, 2.42))
  add(at(box(2.6, 0.05, 4.2, COLORS.concrete, { roughness: 0.95 }), -4.35, 0.04, 4.4))

  // Exterior HVAC condenser (right side)
  const ac = new THREE.Group()
  const acBody = box(0.95, 0.95, 0.95, COLORS.metal, { metalness: 0.3, roughness: 0.5 })
  const acFan = new THREE.Mesh(
    new THREE.CylinderGeometry(0.32, 0.32, 0.06, 24),
    std(0x33383a, { metalness: 0.4, roughness: 0.4 })
  )
  acFan.position.y = 0.5
  ac.add(acBody, acFan)
  ac.position.set(3.9, 0.5, 1.4)
  ac.traverse((o) => {
    if (o.isMesh) {
      o.castShadow = true
      o.receiveShadow = true
    }
  })
  add(ac)

  // Interior mechanicals visible through the cutaway
  add(at(box(0.7, 1.1, 0.6, COLORS.steel, { metalness: 0.25, roughness: 0.5 }), -1.4, 1.05, -1.5)) // furnace
  const wh = new THREE.Mesh(
    new THREE.CylinderGeometry(0.32, 0.32, 1.05, 20),
    std(COLORS.metal, { metalness: 0.25, roughness: 0.5 })
  )
  wh.castShadow = true
  wh.receiveShadow = true
  add(at(wh, -0.6, 0.99, -1.5)) // water heater
  add(at(box(0.1, 0.7, 0.45, COLORS.panel, { metalness: 0.3, roughness: 0.5 }), -2.83, 1.4, -0.4)) // electrical panel

  // Pool (front-right yard)
  add(at(box(3.6, 0.3, 2.3, COLORS.concrete, { roughness: 0.95 }), 4.6, 0.12, 2.0)) // coping
  add(at(box(3.2, 0.22, 1.95, COLORS.water, { transparent: true, opacity: 0.85, metalness: 0.2, roughness: 0.1 }), 4.6, 0.2, 2.0))

  // Trees
  function addTree(x, z, scale, light) {
    const g = new THREE.Group()
    const trunk = new THREE.Mesh(
      new THREE.CylinderGeometry(0.12 * scale, 0.16 * scale, 1.1 * scale, 8),
      std(COLORS.trunk, { roughness: 1 })
    )
    trunk.position.y = 0.55 * scale
    const crown = new THREE.Mesh(
      new THREE.IcosahedronGeometry(0.85 * scale, 1),
      std(light ? COLORS.foliageLight : COLORS.foliage, { roughness: 1, flatShading: true })
    )
    crown.position.y = 1.5 * scale
    g.add(trunk, crown)
    g.position.set(x, 0, z)
    g.traverse((o) => {
      if (o.isMesh) {
        o.castShadow = true
        o.receiveShadow = true
      }
    })
    add(g)
  }
  addTree(-5.4, -3.4, 1.15, false)
  addTree(5.6, -2.6, 0.95, true)
  addTree(-5.8, 4.2, 0.85, false)

  // Front fence line (+z)
  for (let x = -6; x <= 6; x += 0.9) add(at(box(0.12, 1.0, 0.12, COLORS.wood, { roughness: 1 }), x, 0.5, 5.4))
  add(at(box(12.2, 0.1, 0.08, COLORS.wood, { roughness: 1 }), 0, 0.8, 5.4))
  add(at(box(12.2, 0.1, 0.08, COLORS.wood, { roughness: 1 }), 0, 0.35, 5.4))

  return house
}
