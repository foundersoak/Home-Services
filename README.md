# Home Services Acquisition Thesis Explorer

An interactive 3D instrument for surfacing acquisition white space in residential home
services, built for Founders' Oak Capital. Each system of a cutaway house (HVAC, roofing,
plumbing, tree care, and more) is a clickable hotspot that opens a research-grade panel:
Total Addressable Market split into new construction vs renovation/repair, the top 3 players,
active roll-ups, a fragmentation score, a roll-up-intensity rating, and inline citations for
every figure. An opportunity heatmap and a ranked list surface the hottest white space.

## Stack

Vite + vanilla JavaScript, Three.js for the 3D scene, GSAP for motion. No framework, no
backend. Data is researched and hardcoded in `src/data/systems.js`. Builds to a static bundle.

## Run

```bash
npm install
npm run dev      # local dev server
npm run build    # static bundle in dist/
npm run preview  # preview the production build
```

## Deploy

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the app and publishes
it to GitHub Pages at https://foundersoak.github.io/Home-Services/. The Vite `base` in
`vite.config.js` is set to `/Home-Services/` to match the project page path.

## Swapping the 3D model

The house lives behind a single `MODEL_URL` constant in `src/scene/house.js`. Set it to a
`.glb` path to load a real model; leave it null to use the built-in primitive cutaway house.
After swapping, re-author the per-system hotspot anchors and camera framings against the new
geometry.

## Adding a system

Add one record to `src/data/systems.js` following the documented schema (id, zone,
displayCluster, position, camera framing, TAM, top players, roll-ups, fragmentation, roll-up
intensity, sources). A hotspot, panel, heatmap score, and ranked-list row are generated
automatically. See the schema comment at the top of that file.
