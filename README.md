# Home Services Acquisition Thesis Explorer

An interactive 3D instrument for surfacing acquisition white space in residential home
services, built for Founders' Oak Capital. Orbit a cutaway-quality house; each system
(HVAC, roofing, plumbing, electrical, tree care, and more) is a clickable hotspot that flies
the camera and opens a research-grade panel: Total Addressable Market split into new
construction vs renovation/repair, the top 3 players (with website links), active roll-ups
(with sponsor + press-release links), a fragmentation score, a roll-up-intensity rating, and
numbered citations for every figure. An opportunity heatmap and a sortable ranked list surface
the hottest white space.

Live: https://foundersoak.github.io/Home-Services/

## Stack

Vite + vanilla JavaScript, Three.js (3D), GSAP (motion). No framework, no backend. Data is
researched, verified, and hardcoded. Builds to a static bundle.

## Run

```bash
npm install
npm run dev      # local dev server (data validator runs in dev; check the console)
npm run build    # static bundle in dist/
npm run preview  # preview the production build
```

Append `?validate` to the URL to run the data-integrity check in any build (warns on any
numeric without a resolving source). Append `?calib` to show all pins with labels for anchor
tuning. Append `?stress=90` to load-test pin performance.

## Deploy

Built `dist/` is published to the `gh-pages` branch (GitHub Pages "Deploy from a branch").
Vite `base` is `/Home-Services/` to match the project-page path. To redeploy: `npm run build`,
then push the contents of `dist/` to the `gh-pages` branch.

## Architecture

```
src/
  main.js              bootstraps scene + house + hotspots + UI; owns the render loop
  scene/
    scene.js           renderer, HDR environment lighting, camera, OrbitControls, shadow
    house.js           model load + MODEL_URL swap + auto-center/scale; primitive fallback
    hotspots.js        HTML pins projected each frame; culling, facing occlusion, zone LOD
    camera-moves.js    GSAP camera flights (flyTo / reset)
  ui/
    panel.js           detail panel (TAM, players, roll-ups, signals, citations, hero image)
    filters.js         zone filter, heatmap toggle, live weight sliders, ranked list
    legend.js          opportunity-tier + data-status legend
  data/
    systems.js         taxonomy + geometry (anchors, camera framings, images) per system
    research-data.js    researched + verified market data, merged into systems.js by id
    scoring.js         opportunity heatmap logic (log-normalized TAM + fragmentation + roll-up)
  styles/              tokens.css (Founders' Oak brand) + app/panel/controls/hotspots css
public/
  house.glb            the 3D model (texture-compressed)
  systems/<id>.webp    per-system panel hero images
SOURCES.md             every source, grouped by system
```

## Swapping the 3D model

The house lives behind a single `MODEL_URL` constant in `src/scene/house.js`. Point it at a
`.glb` in `public/` (served at the base path) to load a different model; set it to `null` to
use the built-in primitive cutaway house. The loader auto-centers and scales any model to a
fixed footprint and sits it on the ground. After swapping, re-author the per-system hotspot
anchors and camera framings in `src/data/systems.js` against the new geometry (the `?calib`
mode and the labeled-marker calibration help).

## Adding or editing a system

1. Add a record to the `systems` array in `src/data/systems.js`: `id`, `zone`,
   `displayCluster` (one of the six LOD clusters), `name`, `position` (the 3D anchor),
   `normal` (facing direction), and optionally an `image` (`systems/<id>.webp`). A hotspot,
   panel, heatmap score, and ranked-list row are generated automatically.
2. To give it data, add an entry keyed by `id` to `src/data/research-data.js` following the
   schema (TAM with new-con/reno split, top players, roll-ups, fragmentation, roll-up
   intensity, sources). Until then it renders as an honest `stub`.
3. Add its sources to `SOURCES.md`.

## Data integrity

`research-data.js` was produced by a multi-agent research workflow: one analyst per system
(seeded with internal market briefs where available, plus reputable web research), then an
adversarial verifier that confirmed every figure traces to a real source and every player /
roll-up link resolves. Modeled TAM splits are flagged `modeledEstimate` with the stated
assumption. No number is shown without a citation or a modeled-estimate label; the `?validate`
check enforces this.
