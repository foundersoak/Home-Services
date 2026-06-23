import gsap from 'gsap'

/*
  camera-moves.js
  GSAP-driven camera flights. The render loop (main.js) owns controls.update(); GSAP only
  mutates camera.position and controls.target. Damping + user control are disabled during a
  flight and restored on completion so the easing does not fight OrbitControls inertia.
*/

export const DEFAULT_FRAMING = {
  pos: [9.5, 6.8, 11.5],
  target: [0, 1.7, 0]
}

let active = null

export function flyTo(framing, camera, controls, opts = {}) {
  if (active) active.kill()

  const duration = opts.duration ?? 1.0
  const wasAutoRotate = false // auto-rotate stays off once a flight begins

  controls.autoRotate = wasAutoRotate
  controls.enableDamping = false
  controls.enabled = false

  const tl = gsap.timeline({
    defaults: { duration, ease: 'power2.inOut' },
    onComplete: () => {
      controls.enableDamping = true
      controls.enabled = true
      active = null
      opts.onComplete && opts.onComplete()
    }
  })
  tl.to(camera.position, { x: framing.pos[0], y: framing.pos[1], z: framing.pos[2] }, 0)
  tl.to(controls.target, { x: framing.target[0], y: framing.target[1], z: framing.target[2] }, 0)
  active = tl
  return tl
}

export function reset(camera, controls, opts = {}) {
  return flyTo(DEFAULT_FRAMING, camera, controls, opts)
}

export function isFlying() {
  return active !== null
}
