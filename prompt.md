# Build Prompt: Home Services Acquisition Thesis Explorer

Paste this whole document into Claude Code as the project spec. Build in the phases listed at the bottom so a working skeleton runs before any data research begins.

---

## 1. What we are building

An interactive, single-page web app centered on a 3D model of a house. Each system of the house (HVAC, roof, plumbing, fence, trees, pool, foundation, etc.) is a clickable hotspot. Clicking a hotspot opens a detail panel containing:

- Total Addressable Market, split into **new construction** and **renovation / repair / replacement**
- The **top 3 players** in that category (revenue scale, ownership, PE backer if any)
- A list of **active roll-ups / consolidation** happening in the space (platform company, sponsor, notable add-ons)
- A **fragmentation score** and **roll-up intensity** rating
- **Inline sources** for every figure, from reputable sources only

The purpose is to surface high-potential white space in residential home services for acquisition. Treat it as an analytical instrument, not a marketing page. Visual polish matters, but data integrity and source quality matter more.

Primary user: a search-fund / PE-style investor ideating theses. Near-term, it is a private ideation tool. Down the road it should be presentable to partners and LPs, so build it clean enough to share.

---

## 2. Tech stack (use exactly this unless a hard blocker appears)

- **Vite** + vanilla **JavaScript** (no framework). Single deployable app.
- **Three.js** for the 3D scene.
- **GSAP** for all animation: camera moves, panel transitions, hotspot reveals. Use GSAP's `to`/`timeline` to drive camera position and `OrbitControls` target, updating controls in the render loop. Keep GSAP for motion and Three for rendering; do not fight the render loop.
- **No CSS framework.** Hand-write CSS with custom properties for the design tokens in section 8.
- Data lives in a local structured file (`/src/data/systems.js`), researched and hardcoded per section 7. No backend, no live API at runtime.
- Must build to a static bundle that can be dropped on any static host.

Avoid em dashes anywhere in code comments, UI copy, or content. Use periods or hyphens.

---

## 3. The 3D house and hotspot architecture (most important section)

Do **not** rely on raycasting individual named meshes for system selection. Assume the house may be a single fused mesh.

Architecture:

1. Load one house GLB as the visual centerpiece. See model sourcing below.
2. Maintain a `hotspots` array. Each hotspot has a stable `id`, a 3D `position` (Vector3) placed on or near the relevant part of the house, and a link to its system data record.
3. Render each hotspot as an HTML element (a pin / label) absolutely positioned over the canvas. Each frame, project the hotspot's 3D position to 2D screen space (`vector.project(camera)`) and update the DOM element's transform. Hide hotspots whose 3D position is occluded or behind the camera (depth test against the model, or a simple dot-product facing check as a v1 approximation).
4. Clicking a hotspot triggers a GSAP camera flight to a per-hotspot framing (a saved camera position + target), dims the rest of the scene slightly, and opens the detail panel for that system.
5. A persistent "reset view" control returns to the default orbit framing.

This makes the number of clickable systems independent of the model's mesh structure, so we can reach maximum granularity without a specially rigged model.

**Model sourcing, in order of preference:**

- A clean architectural house GLB with sane scale and topology, ideally a cutaway or sectioned house so interior systems read visually. Good free sources: Poly Pizza, Quaternius, Sketchfab (filter to downloadable + permissive license). Confirm and record the license.
- If no suitable model is found, generate a stylized 3/4 cutaway house. (The user can produce a base mesh via Higgsfield image-to-3D and drop the GLB into `/src/assets/`.) Accept that it will be a single mesh; the hotspot architecture above handles that.
- Provide a clearly marked placeholder primitive house (simple boxes for walls, roof, garage, plus ground plane and a few yard props) so the app runs end to end before the final model lands. Make swapping the model a one-line change (a single `MODEL_URL` constant).

Camera: perspective camera, `OrbitControls` with damping, sensible min/max polar angle and zoom limits so users cannot flip under the ground. Soft studio-style lighting (hemisphere + key + fill), subtle shadow, neutral background. Slow idle auto-rotate on the landing state that stops on first interaction.

---

## 4. System taxonomy (target maximum granularity)

Organize hotspots into zones. Build all zones into the taxonomy, but populating data is phased (section 7). Each system carries a `dataStatus` of `complete`, `in-progress`, or `stub` so the UI can show what is researched versus pending.

**Zone A: Envelope and structure**
Roofing. Gutters and downspouts. Siding and exterior cladding. Windows. Exterior doors. Foundation, structural, and waterproofing. Garage doors. Decks and patios. Driveways, concrete, and hardscape.

**Zone B: Core mechanical (interior)**
HVAC (split into install vs repair/replace in the data; also note heating, cooling, ductwork). Plumbing. Electrical. Water heater / tankless. Insulation. Low-voltage, smart home, and security. Generators and backup power.

**Zone C: Yard and exterior services**
Landscaping and lawn care. Tree and arbor (trimming, removal, health). Fencing. Irrigation and sprinklers. Pest control. Pool and spa. Outdoor and landscape lighting.

**Zone D: Energy and specialty**
Solar and battery storage. EV charging.

**Zone E: Interior finish (renovation-heavy)**
Kitchen remodel. Bath remodel. Flooring. Painting (interior and exterior). Cabinetry and countertops. Closets and home organization.

**Zone F: Restoration and other**
Water / fire / mold restoration. Chimney and fireplace. Septic.

v1 priority systems to research first (the user's pick): HVAC, Plumbing, Electrical, Roofing, Fencing, Tree/arbor, Landscaping, Pest control, Pool and spa, Solar, Garage doors, Foundation, Gutters. Everything else starts as `stub` with the schema in place.

---

## 5. UX and interaction flow

1. **Landing:** house slowly auto-rotating, hotspots faintly pulsing, a short title lockup, and a one-line framing of what the tool is. A legend explains the hotspot color coding (by opportunity tier, see below).
2. **Hover hotspot:** label expands, shows system name + headline TAM number.
3. **Click hotspot:** camera flies to that system, side panel slides in (GSAP) with the full data record (section 6 layout). Other hotspots fade back.
4. **Detail panel** is scrollable and clearly sectioned: TAM breakdown, top 3 players, roll-up activity, opportunity read, sources.
5. **Filters / views (top bar):**
   - Filter hotspots by zone.
   - **Opportunity heatmap toggle:** recolor hotspots by a composite "attractiveness" read (large TAM + high fragmentation + low-to-moderate roll-up intensity = hottest). This is the white-space finder. Make the scoring logic transparent and documented in code.
   - Sort / list view: a slide-out ranked table of all systems by TAM, by fragmentation, and by roll-up intensity, so the user can scan opportunities without clicking each hotspot.
6. **Reset view** always available.
7. Responsive: must be usable on a laptop primarily; gracefully degrade on tablet. Mobile can be a simplified fallback (list-first) if 3D performance is poor.

Keep all motion smooth and restrained. No bounce easing, no gratuitous effects. Think quiet, expensive, and precise.

---

## 6. Data model and detail-panel layout

Each system is one record. Use this schema in `/src/data/systems.js`:

```js
{
  id: "hvac",
  zone: "core-mechanical",
  name: "HVAC",
  position: [x, y, z],          // 3D hotspot anchor
  camera: { pos: [x,y,z], target: [x,y,z] }, // framing on click
  dataStatus: "complete",       // complete | in-progress | stub

  tam: {
    currency: "USD",
    year: 2024,
    total: { value: null, unit: "billion", source: "src-id" },
    newConstruction: { value: null, unit: "billion", source: "src-id", note: "" },
    renovationRepair: { value: null, unit: "billion", source: "src-id", note: "" },
    methodology: "top-down | bottom-up + brief description of how derived",
    confidence: "high | medium | low"
  },

  topPlayers: [
    {
      name: "",
      approxRevenue: { value: null, unit: "billion", source: "src-id" },
      ownership: "public | PE-backed | private | franchise",
      sponsor: "",               // PE owner if applicable
      note: "",
      source: "src-id"
    }
    // exactly 3
  ],

  rollups: [
    {
      platform: "",              // consolidating platform company
      sponsor: "",               // PE firm behind it
      thesis: "",                // one line on the consolidation play
      notableAddOns: "",         // examples if reported
      source: "src-id"
    }
    // as many as are real and well-sourced; [] if none found
  ],

  fragmentation: {
    score: null,                 // 1 (consolidated) to 5 (highly fragmented)
    rationale: "",
    source: "src-id"             // e.g. share held by top firms
  },

  rollupIntensity: {
    score: null,                 // 1 (little activity) to 5 (very active)
    rationale: ""
  },

  opportunityTier: null,         // derived field: hot | warm | cool, from heatmap logic

  sources: [
    {
      id: "src-id",
      publisher: "",             // e.g. U.S. Census Bureau, Harvard JCHS
      title: "",
      url: "",
      dateAccessed: "YYYY-MM-DD",
      type: "government | trade-association | filing | market-research | trade-press"
    }
  ]
}
```

Rules: every numeric field that has a value must reference a `source` id. The `sources` array is the single source of truth for citations; the panel renders them as a numbered list and inline superscripts link to them. No number appears in the UI without a citation or an explicit "modeled estimate" label.

Detail-panel section order: 1) system name + opportunity tier badge, 2) TAM (total, then new-construction and renovation/repair as a split, with methodology and confidence shown), 3) Top 3 players, 4) Roll-up activity, 5) Fragmentation + roll-up intensity read, 6) Sources.

---

## 7. Research and sourcing rules (read carefully)

You have a web-search tool. Use it to populate the v1 priority systems with real, current figures. Do not invent numbers, players, or roll-ups. If a credible figure cannot be found, set the value to `null`, set `confidence` to `low`, and add a short note saying data was unavailable. A clearly empty field is correct; a fabricated one is a failure.

**Reputable sources only.** Acceptable, roughly in order of trust:

- Government and official statistics: U.S. Census Bureau (Construction Spending / VIP, American Housing Survey, Economic Census), Bureau of Labor Statistics, Department of Energy / EIA (for solar, HVAC efficiency, energy).
- Harvard Joint Center for Housing Studies (JCHS), especially the LIRA remodeling data and Improving America's Housing reports, for renovation/repair sizing.
- Established trade associations for category sizing and structure: ACCA and AHRI (HVAC), NRCA (roofing), NECA (electrical), PHCC (plumbing), NAHB and AGC (construction), NPMA (pest), Pool and Hot Tub Alliance (pool), SEIA (solar), ISA and TCIA (tree care), AAMA / FGIA (windows).
- Public company filings (10-K, 10-Q, investor decks) for player revenue and segment data.
- Reputable market-research firms, used with judgment and always attributed: IBISWorld, Freedonia, Grand View Research. Treat single-vendor "market size" PDFs as one data point, not gospel; prefer corroboration.
- Credible M&A and PE reporting and the PE firms' own announcements for roll-ups.
- Established business and trade press (for example major outlets and respected industry publications).

**Do not use** SEO content farms, AI-generated listicles, unattributed "market report" landing pages, Wikipedia as a primary source for figures (it can be a pointer to a real source, then cite the real source), or vendor marketing claims presented as market data.

For TAM specifically: state whether each figure is top-down (market sizing) or bottom-up (households x penetration x average ticket), and note the year. Where new-construction vs renovation/repair is not directly reported, you may model the split, but you must mark it as a modeled estimate and state the assumption.

Maintain a top-level `SOURCES.md` mirroring every source used, grouped by system, for auditability.

**Roll-up research leads (confirm before including; do not assume any are current or accurate).** Useful starting points to verify against reputable sources: residential HVAC/plumbing/electrical platforms backed by PE; large pest-control consolidators; commercial and residential roofing platforms; national tree-care and landscaping consolidators; pool service consolidators; foundation-repair platforms; garage-door consolidators. Search for the specific platform names, their sponsors, and recent add-on acquisitions, then cite. Only include what you can source.

---

## 8. Design system

Aesthetic: McKinsey-clean, quiet, precise, investment-grade. Generous whitespace, strong type hierarchy, restrained color, no clutter.

- **Type:** Montserrat for headings and UI labels; a clean readable body face (Inter or system sans) for panel body text. Minimum 11px effective; body text comfortably larger. Tight, confident heading sizing.
- **Palette:** sophisticated and muted. Default to a deep neutral base (charcoal / near-black or deep navy) for the canvas surround, off-white panels, and a single restrained accent for interactive elements and the "hot" opportunity tier. Use a small sequential scale (cool to warm) for the opportunity heatmap (for example desaturated blue for cool, amber for warm, restrained red for hot). Expose all colors as CSS custom properties so the user can drop in the Founders' Oak brand palette later by editing tokens in one place. Do not invent specific brand hex values; use a tasteful default scheme and leave a clearly labeled `:root` token block.
- **Hotspots:** small, elegant pins or numbered dots, not cartoonish. Subtle pulse on idle, clean expand on hover.
- **Panels:** crisp cards, clear section dividers, numbered citations rendered like a research note.
- **Motion:** GSAP, smooth and slow, no overshoot. Camera flights around 0.8 to 1.2 seconds with an ease like power2.inOut.

---

## 9. File structure (deliverable)

```
/
  index.html
  package.json
  vite.config.js
  /src
    main.js                 // bootstraps scene + UI
    /scene
      scene.js              // renderer, camera, lights, controls
      house.js              // model load + placeholder fallback
      hotspots.js           // hotspot projection + DOM sync + click handling
      camera-moves.js       // GSAP camera flight helpers
    /ui
      panel.js              // detail panel render + open/close
      filters.js            // zone filter, heatmap toggle, ranked list view
      legend.js
    /data
      systems.js            // the researched data records
      scoring.js            // opportunity-tier / heatmap logic (documented)
    /styles
      tokens.css            // design tokens (palette, type, spacing)
      app.css
    /assets
      house.glb             // final model (or placeholder note)
  SOURCES.md
  README.md                 // how to run, how to swap the model, how to add a system
```

---

## 10. Build phases (sequence the work this way)

1. **Skeleton runs first.** Vite app, Three scene with the placeholder primitive house, OrbitControls, lighting, idle auto-rotate. No data yet.
2. **Hotspot system.** Implement 3D-to-2D projection, DOM pin sync, hover, click, GSAP camera flight, reset view. Wire 2 or 3 dummy hotspots end to end.
3. **Detail panel + filters shell.** Panel open/close, zone filter, ranked-list view, heatmap toggle wired to dummy data and `scoring.js`.
4. **Data: v1 priority systems.** Research and populate the 13 priority systems per sections 6 and 7, with full citations and `SOURCES.md`. This is the heavy, careful step. Mark confidence honestly.
5. **Real model swap.** Replace the placeholder via the `MODEL_URL` constant; re-place hotspot anchors and per-hotspot camera framings on the real geometry.
6. **Remaining systems as stubs to in-progress.** Fill out the rest of the taxonomy opportunistically; keep `dataStatus` accurate.
7. **Polish pass.** Design tokens, motion timing, occlusion handling for hotspots, responsive degradation, README.

After each phase, confirm the app still builds and runs before moving on.

---

## 11. Acceptance criteria

- App builds to a static bundle and runs with no console errors.
- The house renders, orbits smoothly, and every system in the v1 priority list has a working, correctly-anchored hotspot.
- Clicking any populated hotspot flies the camera and opens a panel showing TAM (with new-construction vs renovation/repair split), top 3 players, roll-up activity, fragmentation and roll-up intensity, and a numbered source list.
- Every displayed number traces to a reputable source in `sources` or is explicitly labeled a modeled estimate. No naked numbers.
- The heatmap toggle visibly recolors hotspots by the documented opportunity logic, and the ranked list view sorts by TAM, fragmentation, and roll-up intensity.
- Swapping the 3D model is a one-line change. Adding a new system is documented in the README and requires only a new data record plus a hotspot anchor.
- `SOURCES.md` exists and is complete for all populated systems.

---

## 12. Non-goals and constraints

- No runtime backend or live API calls. Data is researched and hardcoded.
- No fabricated data, ever. Empty and honest beats full and wrong.
- No CSS or component framework.
- No em dashes in code, copy, or content.
- Keep dependencies minimal: Three.js, GSAP, Vite, and a GLTF loader. Nothing else unless justified.

Ask me before deviating from the stack, the hotspot architecture, or the no-fabrication rule.
