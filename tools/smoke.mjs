import { chromium } from 'playwright'

const url = process.argv[2] || 'http://localhost:4173/Home-Services/'
const tag = process.argv[3] || 'smoke'

const browser = await chromium.launch({
  args: ['--use-gl=angle', '--use-angle=swiftshader', '--ignore-gpu-blocklist']
})
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } })
const errors = []
page.on('console', (m) => {
  if (m.type() === 'error') errors.push('CONSOLE: ' + m.text())
})
page.on('pageerror', (e) => errors.push('PAGEERROR: ' + e.message))

const r = { url, errors }
try {
  await page.goto(url, { waitUntil: 'load' })
  await page.waitForTimeout(3200)
  await page.screenshot({ path: `${tag}-landing.png` })

  // Heatmap toggle -> pins should get tier classes
  await page.click('#heatmap-toggle')
  await page.waitForTimeout(400)
  r.tieredPins = await page.$$eval('.hotspot.tier-hot, .hotspot.tier-warm, .hotspot.tier-cool', (e) => e.length)
  r.legendVisible = await page.$eval('.legend-tiers', (e) => !e.classList.contains('is-hidden'))
  await page.screenshot({ path: `${tag}-heatmap.png` })

  // Weights popover -> move a slider
  await page.click('#weights-btn')
  await page.waitForTimeout(250)
  const slider = await page.$('.weight-slider[data-key="frag"]')
  if (slider) {
    await slider.focus()
    for (let i = 0; i < 10; i++) await page.keyboard.press('ArrowRight')
    await page.waitForTimeout(200)
  }
  r.weightVal = await page.$eval('.weight-val[data-val="frag"]', (e) => e.textContent)

  // Ranked list
  await page.click('#list-btn')
  await page.waitForTimeout(400)
  r.listRows = await page.$$eval('.rl-row', (e) => e.length)

  // Click first ranked row -> panel opens
  const row = await page.$('.rl-row')
  if (row) {
    await row.click()
    await page.waitForTimeout(1500)
    r.panelOpen = await page.$eval('#detail-panel', (e) => e.classList.contains('is-open'))
    r.panelTitle = await page.$eval('.sys-title', (e) => e.textContent).catch(() => null)
    await page.screenshot({ path: `${tag}-panel.png` })
  }
} catch (e) {
  r.errors.push('SCRIPT: ' + e.message)
}

console.log(JSON.stringify(r, null, 2))
await browser.close()
