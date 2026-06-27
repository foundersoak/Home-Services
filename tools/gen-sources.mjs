import fs from 'fs'
const merged = (await import('./src/data/research-data.js')).RESEARCH
const NAMES = {
  hvac: 'HVAC', plumbing: 'Plumbing', electrical: 'Electrical', roofing: 'Roofing', fencing: 'Fencing',
  'tree-arbor': 'Tree & Arbor', landscaping: 'Landscaping & Lawn Care', 'pest-control': 'Pest Control',
  'pool-spa': 'Pool & Spa', solar: 'Solar & Battery Storage', 'garage-doors': 'Garage Doors',
  foundation: 'Foundation & Waterproofing', gutters: 'Gutters & Downspouts', 'water-heater': 'Water Heater / Tankless',
  siding: 'Siding & Cladding', windows: 'Windows', 'exterior-doors': 'Exterior Doors', 'decks-patios': 'Decks & Patios',
  'driveways-hardscape': 'Driveways & Hardscape', insulation: 'Insulation', 'low-voltage-security': 'Low-Voltage & Security',
  generators: 'Generators & Backup', irrigation: 'Irrigation & Sprinklers', 'outdoor-lighting': 'Outdoor Lighting',
  'ev-charging': 'EV Charging', 'kitchen-remodel': 'Kitchen Remodel', 'bath-remodel': 'Bath Remodel', flooring: 'Flooring',
  painting: 'Painting', 'cabinetry-countertops': 'Cabinetry & Countertops', 'closets-organization': 'Closets & Organization',
  'pet-services': 'Pet Services', restoration: 'Water / Fire / Mold Restoration', 'chimney-fireplace': 'Chimney & Fireplace', septic: 'Septic'
}
const order = ['roofing', 'gutters', 'garage-doors', 'foundation', 'hvac', 'plumbing', 'electrical', 'water-heater',
  'landscaping', 'tree-arbor', 'fencing', 'pest-control', 'pool-spa', 'pet-services', 'solar', 'siding', 'windows',
  'exterior-doors', 'decks-patios', 'driveways-hardscape', 'insulation', 'low-voltage-security', 'generators',
  'irrigation', 'outdoor-lighting', 'ev-charging', 'kitchen-remodel', 'bath-remodel', 'flooring', 'painting',
  'cabinetry-countertops', 'closets-organization', 'restoration', 'chimney-fireplace', 'septic']
let md = '# Sources\n\nResearched and adversarially verified, grouped by system. Every displayed figure traces to a source below or is labeled a modeled estimate. Generated 2026-06-24.\n\n'
for (const id of order) {
  const r = merged[id]
  if (!r) continue
  md += `## ${NAMES[id] || id}  (${r.dataStatus}, confidence: ${r.confidence || 'n/a'})\n\n`
  if (!r.sources || !r.sources.length) { md += '_No sources recorded._\n\n'; continue }
  for (const s of r.sources) md += `- **${s.publisher}** - ${s.title} (${s.type})${s.url ? ` <${s.url}>` : ''}${s.dateAccessed ? ` (accessed ${s.dateAccessed})` : ''}\n`
  md += '\n'
}
fs.writeFileSync('SOURCES.md', md)
console.log('SOURCES.md regenerated:', order.filter((id) => merged[id]).length, 'systems')
