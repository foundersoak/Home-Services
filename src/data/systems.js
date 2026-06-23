/*
  systems.js
  The single data source for the explorer. Each record drives a hotspot, a detail panel,
  a heatmap score, and a ranked-list row.

  SCHEMA (see prompt.md section 6 for the full contract):
  {
    id, zone, displayCluster, name,
    position: [x,y,z],            // 3D hotspot anchor (house coordinate space)
    normal:   [x,y,z],            // direction the pin faces (for facing-check occlusion)
    camera:   { pos:[x,y,z], target:[x,y,z] },  // framing on click
    dataStatus: 'complete' | 'in-progress' | 'stub',
    tam: { currency, year, total:{value,unit,source}, newConstruction:{...,modeledEstimate,assumption},
           renovationRepair:{...}, methodology, confidence },
    topPlayers: [{ name, approxRevenue:{value,unit,source}, ownership, sponsor, note, website, source }],
    rollups:    [{ platform, sponsor, thesis, notableAddOns, link, linkType, source }],
    fragmentation:  { score:1..5, rationale, source },
    rollupIntensity:{ score:1..5, rationale },
    opportunityTier: null,        // DERIVED by scoring.js, never hand-authored
    sources: [{ id, publisher, title, url, dateAccessed, type }]
  }

  The numeric fields below are PLACEHOLDERS (dataStatus: 'stub') so the hotspot, heatmap, and
  list machinery can be built and stress-tested before the researched data lands in P5/P6.
  Real, fully-cited figures replace these per the research workflow. Positions, normals,
  camera framings, zones, and clusters are real and authored against the placeholder house.
*/

// The six level-of-detail display clusters. anchor is an optional explicit cluster-pin
// position; when omitted, hotspots.js uses the centroid of the cluster's member anchors.
export const CLUSTERS = [
  { id: 'envelope', name: 'Envelope & Structure', anchor: [-0.2, 5.2, 2.6] },
  { id: 'mechanical', name: 'Core Mechanical', anchor: [3.9, 2.6, 1.4] },
  { id: 'yard', name: 'Yard & Exterior', anchor: [4.6, 1.4, 3.0] },
  { id: 'energy', name: 'Energy & Specialty', anchor: [0.3, 6.1, 1.4] },
  { id: 'interior', name: 'Interior Finish', anchor: [-1.2, 1.6, 0.4] },
  { id: 'restoration', name: 'Restoration & Other', anchor: [-1.5, 3.0, -1.0] }
]

// Push the camera outward from the house center, through the anchor, lifted a touch.
// Gives every system a sensible default flight; can be overridden per record later.
function frameFor(pos, dist = 6, lift = 1.8) {
  const dx = pos[0]
  const dz = pos[2]
  const len = Math.hypot(dx, dz) || 1
  const nx = dx / len
  const nz = dz / len
  return {
    pos: [pos[0] + nx * dist, pos[1] + lift, pos[2] + nz * dist],
    target: [pos[0], pos[1], pos[2]]
  }
}

// Outward XZ normal for exterior anchors; interior anchors override toward the cutaway.
function outward(pos) {
  const len = Math.hypot(pos[0], pos[2]) || 1
  return [pos[0] / len, 0.15, pos[2] / len]
}

const CUTAWAY_NORMAL = [0.7, 0.1, 0.7] // faces the open front-right corner

// Helper to build a stub record with placeholder figures.
function stub(o) {
  const position = o.position
  return {
    id: o.id,
    zone: o.zone,
    displayCluster: o.displayCluster,
    name: o.name,
    position,
    normal: o.normal || outward(position),
    camera: o.camera || frameFor(position, o.dist, o.lift),
    dataStatus: 'stub',
    tam: {
      currency: 'USD',
      year: 2024,
      total: { value: o.tam ?? null, unit: 'billion', source: null },
      newConstruction: { value: null, unit: 'billion', source: null, modeledEstimate: false, assumption: '' },
      renovationRepair: { value: null, unit: 'billion', source: null, modeledEstimate: false, assumption: '' },
      methodology: '',
      confidence: 'low'
    },
    topPlayers: [],
    rollups: [],
    fragmentation: { score: o.frag ?? null, rationale: '', source: null },
    rollupIntensity: { score: o.roll ?? null, rationale: '' },
    opportunityTier: null,
    sources: []
  }
}

export const systems = [
  // Zone A: Envelope & structure
  stub({ id: 'roofing', zone: 'envelope', displayCluster: 'envelope', name: 'Roofing', position: [0, 5.7, 1.5], normal: [0, 0.7, 0.7], tam: 64, frag: 5, roll: 4 }),
  stub({ id: 'gutters', zone: 'envelope', displayCluster: 'envelope', name: 'Gutters & Downspouts', position: [-2.6, 4.5, 2.5], tam: 8, frag: 5, roll: 2 }),
  stub({ id: 'garage-doors', zone: 'envelope', displayCluster: 'envelope', name: 'Garage Doors', position: [-4.35, 1.0, 2.55], normal: [0, 0, 1], tam: 7, frag: 4, roll: 3 }),
  stub({ id: 'foundation', zone: 'envelope', displayCluster: 'envelope', name: 'Foundation & Waterproofing', position: [0.2, 0.35, 2.5], normal: [0, -0.2, 1], tam: 5, frag: 4, roll: 3 }),

  // Zone B: Core mechanical
  stub({ id: 'hvac', zone: 'core-mechanical', displayCluster: 'mechanical', name: 'HVAC', position: [3.9, 1.15, 1.4], tam: 111, frag: 5, roll: 4, dist: 5, lift: 1.6 }),
  stub({ id: 'plumbing', zone: 'core-mechanical', displayCluster: 'mechanical', name: 'Plumbing', position: [-1.4, 1.7, -1.4], normal: CUTAWAY_NORMAL, tam: 47, frag: 5, roll: 3 }),
  stub({ id: 'electrical', zone: 'core-mechanical', displayCluster: 'mechanical', name: 'Electrical', position: [-2.8, 1.5, -0.4], normal: CUTAWAY_NORMAL, tam: 30, frag: 5, roll: 3 }),
  stub({ id: 'water-heater', zone: 'core-mechanical', displayCluster: 'mechanical', name: 'Water Heater / Tankless', position: [-0.6, 1.6, -1.4], normal: CUTAWAY_NORMAL, tam: 6, frag: 4, roll: 2 }),

  // Zone C: Yard & exterior
  stub({ id: 'landscaping', zone: 'yard', displayCluster: 'yard', name: 'Landscaping & Lawn Care', position: [2.2, 0.3, 4.2], normal: [0, 0.3, 1], tam: 153, frag: 5, roll: 3 }),
  stub({ id: 'tree-arbor', zone: 'yard', displayCluster: 'yard', name: 'Tree & Arbor', position: [-5.4, 2.0, -3.4], tam: 31, frag: 5, roll: 3 }),
  stub({ id: 'fencing', zone: 'yard', displayCluster: 'yard', name: 'Fencing', position: [3.2, 0.7, 5.4], normal: [0, 0.2, 1], tam: 9, frag: 5, roll: 2 }),
  stub({ id: 'pest-control', zone: 'yard', displayCluster: 'yard', name: 'Pest Control', position: [-5.7, 0.7, 3.8], tam: 18, frag: 3, roll: 5 }),
  stub({ id: 'pool-spa', zone: 'yard', displayCluster: 'yard', name: 'Pool & Spa', position: [4.6, 0.5, 2.0], normal: [0.4, 0.4, 0.5], tam: 15, frag: 4, roll: 3 }),

  // Zone D: Energy & specialty
  stub({ id: 'solar', zone: 'energy', displayCluster: 'energy', name: 'Solar & Battery Storage', position: [0.3, 5.6, 1.5], normal: [0, 0.8, 0.5], tam: 25, frag: 4, roll: 2 })
]
