// Researched + adversarially-verified market data for the priority systems.
// Generated from the research workflow (2026-06-22). Regenerate; do not hand-edit.

export const RESEARCH = {
  "hvac": {
    "dataStatus": "complete",
    "confidence": "low",
    "tam": {
      "total": {
        "value": 110,
        "unit": "billion",
        "source": "src-1"
      },
      "newConstruction": {
        "value": 24,
        "unit": "billion",
        "modeledEstimate": true,
        "assumption": "No source directly reports the residential HVAC new-construction vs. existing-stock split. Modeled at ~22% of the residential total. Anchored to Census/NAHB Survey of Construction data (VERIFIED via src-4): 98% of new single-family homes started in 2024 installed central AC and 97% installed forced-air or heat-pump heating (so essentially every new home is an HVAC sale), but new single-family + multifamily starts (~1.4M units) are a small fraction of the ~120M+ occupied U.S. housing units driving replacement/repair demand. Directionally sound; the absolute dollar value scales with whatever the residential total is and inherits that total's (low) confidence.",
        "source": "src-4"
      },
      "renovationRepair": {
        "value": 86,
        "unit": "billion",
        "modeledEstimate": true,
        "assumption": "Modeled as the residual ~78% of the residential total (replacement, retrofit, repair, recurring maintenance/service). Supported directionally by Grand View Research (repair & replacement is the single largest North America HVAC-services category) and by the ~7.9M annual residential system replacements implied by ~120M installed systems on a ~15-year life. Replacement + repair + maintenance dominate residential HVAC; new construction is the minority. Inherits the residential total's low confidence.",
        "source": "src-5"
      },
      "year": 2025,
      "methodology": "Top-down. Anchor VERIFIED: IBISWorld Heating & Air-Conditioning Contractors (NAICS 238220) U.S. market size = $158.4B (2025), $159.4B (2026). The residential carve-out is the weak link: the record applies a ~70% residential share (from a prior internal brief) to reach ~$110B, but this share is NOT independently corroborated and runs HIGH versus third-party splits found in verification: Mordor Intelligence ~52% residential, Grand View Research ~40% residential, and another industry split ~40% residential of the HVAC-services market. Those shares imply a residential TAM nearer $63-82B; a ~55% share (closer to the record's own bottom-up cross-check) implies ~$87B. The record's bottom-up triangulation (~7.9M annual replacements x $6-9K + ~$24B residential service ≈ $80-95B) also lands BELOW the $110B top-down. Net: $110B is best treated as an UPPER-BOUND estimate; a $80-95B midpoint is more defensible. Total retained at 110 but confidence downgraded to low. Note IBISWorld's 238220 definition may skew more residential/light-commercial than the broader 'HVAC services' definitions Mordor/GVR use (which fold in large commercial/industrial mechanical contracting), partially reconciling the gap.",
      "confidence": "low"
    },
    "topPlayers": [
      {
        "name": "American Residential Services (ARS / Rescue Rooter)",
        "approxRevenue": {
          "value": 1.5,
          "unit": "billion",
          "source": "src-6"
        },
        "ownership": "PE-backed",
        "sponsor": "GI Partners (with Charlesbank Capital Partners)",
        "note": "VERIFIED. Nation's largest provider of residential HVAC & plumbing maintenance/replacement services; 70+ locally managed service centers across 23 states, 6,000+ employees (2,500+ technicians), 1.2M annual customer visits (src-8 GI Partners portfolio page). Reuters (src-6) reported GI Partners exploring a >$3.5B sale on >$1.5B revenue / ~$200M EBITDA.",
        "website": "https://www.ars.com",
        "source": "src-6"
      },
      {
        "name": "Service Experts (Enercare)",
        "approxRevenue": {
          "value": 1,
          "unit": "billion",
          "source": null
        },
        "ownership": "PE-backed",
        "sponsor": "Brookfield Infrastructure (via Enercare)",
        "note": "PARTIALLY VERIFIED / revenue UNCERTAIN. Residential/light-commercial HVAC & plumbing platform; ~75+ locations across ~31 U.S. states corroborated by company profiles. Revenue estimates vary WIDELY across third-party aggregators ($745M to $1.9B), so the ~$1B figure is a rough midpoint, not a sourced number - approxRevenue.source set to null. CAUTION: the cited src-7 (ION Analytics) does NOT support the ~$1B/~80-location figures and in fact states Service Experts is EXCLUDED from Brookfield's pending Enercare (Canada) sale; the 'Brookfield selling' framing is misleading. Ownership via Enercare/Brookfield (2018 take-private) is accurate.",
        "website": "https://www.serviceexperts.com",
        "source": null
      },
      {
        "name": "Sila Services",
        "approxRevenue": {
          "value": 1,
          "unit": "billion",
          "source": null
        },
        "ownership": "PE-backed",
        "sponsor": "Goldman Sachs Alternatives (Private Equity)",
        "note": "VERIFIED (deal) / revenue ESTIMATED. Residential HVAC, plumbing & electrical roll-up of 30+ brands across the Northeast, Mid-Atlantic and Midwest (src-2 press release confirms 30+ brands, Goldman majority stake from Morgan Stanley Capital Partners, Nov 2024). Deal value ~$1.7B at ~17x EBITDA of just-under-$100M is corroborated by M&A reporting (AcquisitionsTracker and others) - NOT by the src-2 GS press release itself, which did not disclose financial terms. Revenue ~$1B+ is an estimate (no disclosed figure); approxRevenue.source set to null.",
        "website": "https://www.silaservices.com",
        "source": "src-2"
      }
    ],
    "rollups": [
      {
        "platform": "Sila Services",
        "sponsor": "Goldman Sachs Alternatives (Private Equity)",
        "thesis": "Multi-brand residential HVAC/plumbing/electrical buy-and-build across the Northeast, Mid-Atlantic and Midwest; consolidate fragmented local operators, centralize procurement and back office, grow recurring service memberships.",
        "notableAddOns": "30+ acquired HVAC/plumbing/electrical brands across the NE/Mid-Atlantic/Midwest (rolled up since 2021 under Morgan Stanley Capital Partners, continued under Goldman from Nov 2024). VERIFIED via src-2.",
        "link": "https://am.gs.com/en-us/individual/news/press-release/2024/sila-services-investment",
        "linkType": "press-release",
        "source": "src-2"
      },
      {
        "platform": "American Residential Services (ARS / Rescue Rooter)",
        "sponsor": "GI Partners (with Charlesbank Capital Partners)",
        "thesis": "Scale a national residential HVAC & plumbing replace/repair/maintenance network via tuck-in acquisitions plus organic membership growth; densify metros to improve fleet utilization.",
        "notableAddOns": "70+ service centers across 23 states built via acquisition and de novo expansion since GI Partners' Oct 2020 majority investment. VERIFIED via src-8.",
        "link": "https://www.gipartners.com/private-equity/portfolio/american-residential-services",
        "linkType": "company",
        "source": "src-8"
      },
      {
        "platform": "Wrench Group",
        "sponsor": "Leonard Green & Partners (with Oak Hill Capital, TSG Consumer Partners)",
        "thesis": "Own-and-operate (non-franchise) residential HVAC, plumbing, water and electrical services roll-up concentrated in high-growth Sun Belt metros; buy market leaders and scale the platform.",
        "notableAddOns": "Multi-state Sun Belt platform (Atlanta, Dallas, Houston, Phoenix, Tampa, SF Bay, Sacramento, Denver, Jacksonville, Naples, etc.); the cited press release (src-9, Nov 2022) states 24 markets / 13 states / 5,800+ team members / 16 brands (NOT the 21 markets / 11 states / 7,400 / 5,500-vehicles figures originally listed, which that link does not support). Separately VERIFIED: $1.3B private-debt refinancing led by Blue Owl & Oak Hill, Sept 2025, to fund further M&A (Bloomberg/SFNet).",
        "link": "https://www.wrenchgroup.com/articles/tsg-consumer-partners-and-oak-hill-partner-with-leonard-green-and-management-to-enhance-the-wrench-groups-next-phase-of-growth/",
        "linkType": "press-release",
        "source": "src-9"
      }
    ],
    "fragmentation": {
      "score": 5,
      "rationale": "Highly fragmented. VERIFIED: IBISWorld counts ~118,500 U.S. Heating & Air-Conditioning Contractor businesses for 2025 (120,461 reported for 2026 at +1.7% YoY; src-3). Even the largest pure-play residential consolidators (ARS ~$1.5B, Service Experts ~$1B, Sila ~$1B) each represent roughly 1% or less of the residential market; the vast majority of revenue sits with single-location, owner-operated local contractors.",
      "source": "src-3"
    },
    "rollupIntensity": {
      "score": 5,
      "rationale": "Very active, VERIFIED. Residential HVAC is among the most heavily pursued PE roll-up theses in home services: Goldman Sachs PE's ~$1.7B Sila majority stake (Nov 2024, ~17x EBITDA), GI Partners exploring a >$3.5B ARS sale (~$200M EBITDA), and Leonard Green's Wrench Group $1.3B refi (Sept 2025) to fund more deals. S&P Global Market Intelligence (citing Capstone Partners) reported PE HVAC add-on deals up ~88% YoY (32 vs. 17) through mid-2025, with just over half of the 77 H1-2025 HVAC M&A deals PE- or platform-backed. Other active platforms include Orion (Alpine), NearU, Crete United, Authority Brands, Neighborly (KKR), Service Logic. 2024 was a record year; activity accelerated into 2025-2026."
    },
    "sources": [
      {
        "id": "src-1",
        "publisher": "IBISWorld",
        "title": "Heating & Air-Conditioning Contractors in the US - Market Size Statistics",
        "url": "https://www.ibisworld.com/united-states/market-size/heating-air-conditioning-contractors/1945/",
        "type": "market-research",
        "dateAccessed": "2026-06-22"
      },
      {
        "id": "src-2",
        "publisher": "Goldman Sachs Asset Management",
        "title": "Sila Services Announces Equity Investment from Goldman Sachs Alternatives' Private Equity Business",
        "url": "https://am.gs.com/en-us/individual/news/press-release/2024/sila-services-investment",
        "type": "trade-press",
        "dateAccessed": "2026-06-22"
      },
      {
        "id": "src-3",
        "publisher": "IBISWorld",
        "title": "Heating & Air-Conditioning Contractors in the US - Number of Businesses Statistics",
        "url": "https://www.ibisworld.com/united-states/number-of-businesses/heating-air-conditioning-contractors/1945/",
        "type": "market-research",
        "dateAccessed": "2026-06-22"
      },
      {
        "id": "src-4",
        "publisher": "National Association of Home Builders (Eye on Housing)",
        "title": "HVAC in New Construction in 2024 (Census Survey of Construction data)",
        "url": "https://eyeonhousing.org/2025/09/hvac-in-new-construction-in-2024/",
        "type": "trade-association",
        "dateAccessed": "2026-06-22"
      },
      {
        "id": "src-5",
        "publisher": "Grand View Research",
        "title": "North America HVAC Services Market Size & Outlook, 2030 (service-type shares)",
        "url": "https://www.grandviewresearch.com/industry-analysis/north-america-hvac-services-market-report",
        "type": "market-research",
        "dateAccessed": "2026-06-22"
      },
      {
        "id": "src-6",
        "publisher": "Reuters (via Investing.com)",
        "title": "Exclusive: American Residential Services explores $3.5 billion-plus sale, sources say",
        "url": "https://www.investing.com/news/stock-market-news/exclusiveamerican-residential-services-explores-35-billionplus-sale-sources-say-4575938",
        "type": "trade-press",
        "dateAccessed": "2026-06-22"
      },
      {
        "id": "src-7",
        "publisher": "ION Analytics (Infralogic)",
        "title": "Brookfield selling home services provider Enercare",
        "url": "https://ionanalytics.com/insights/infralogic/brookfield-selling-home-services-provider-enercare/",
        "type": "trade-press",
        "dateAccessed": "2026-06-22"
      },
      {
        "id": "src-8",
        "publisher": "GI Partners",
        "title": "American Residential Services - Private Equity Portfolio",
        "url": "https://www.gipartners.com/private-equity/portfolio/american-residential-services",
        "type": "trade-press",
        "dateAccessed": "2026-06-22"
      },
      {
        "id": "src-9",
        "publisher": "Wrench Group",
        "title": "TSG Consumer Partners and Oak Hill Partner with Leonard Green and Management to Enhance The Wrench Group's Next Phase of Growth",
        "url": "https://www.wrenchgroup.com/articles/tsg-consumer-partners-and-oak-hill-partner-with-leonard-green-and-management-to-enhance-the-wrench-groups-next-phase-of-growth/",
        "type": "trade-press",
        "dateAccessed": "2026-06-22"
      },
      {
        "id": "src-10",
        "publisher": "S&P Global Market Intelligence (citing Capstone Partners)",
        "title": "HVAC deals demonstrate private equity's appetite for add-ons",
        "url": "https://www.spglobal.com/market-intelligence/en/news-insights/articles/2025/10/hvac-deals-demonstrate-private-equity-s-appetite-for-add-ons-94359580",
        "type": "trade-press",
        "dateAccessed": "2026-06-22"
      },
      {
        "id": "src-11",
        "publisher": "Secured Finance Network",
        "title": "Blue Owl, Oak Hill Lead $1.3 Billion Debt Refinancing for Wrench Group",
        "url": "https://www.sfnet.com/home/industry-data-publications/the-secured-lender/tsl-express-daily-articles-news/tsl-express-daily-articles-news/2025/09/15/blue-owl-oak-hill-lead-$1.3-billion-debt-refinancing-for-wrench-group",
        "type": "trade-press",
        "dateAccessed": "2026-06-22"
      }
    ]
  },
  "plumbing": {
    "dataStatus": "complete",
    "confidence": "medium",
    "tam": {
      "year": 2024,
      "total": {
        "value": 55,
        "unit": "billion",
        "source": "src-1"
      },
      "newConstruction": {
        "value": 16.5,
        "unit": "billion",
        "modeledEstimate": true,
        "assumption": "Residential plumbing-service revenue is predominantly service/repair/replacement/remodel rather than tract-home rough-in. New-construction plumbing share of the residential pool modeled at ~30%, consistent with Census VIP residential new-build being the smaller channel relative to the existing-home service base that plumbing contractors skew toward. No vendor reports the residential-only new-vs-repair plumbing split directly. MODELED.",
        "source": "src-4"
      },
      "renovationRepair": {
        "value": 38.5,
        "unit": "billion",
        "modeledEstimate": true,
        "assumption": "Renovation/repair/replacement (drain cleaning, repipes, fixture/water-heater replacement, leak repair, bath/kitchen remodel plumbing) modeled at ~70% of the residential plumbing pool. Supported by Roto-Rooter (largest residential plumber) deriving ~71% of revenue from residential and almost entirely from service/repair/restoration rather than new construction, and by Census residential-improvements definitions (confirmed: include kitchen/bath modernization and water-heater replacement). MODELED.",
        "source": "src-4"
      },
      "methodology": "Top-down. Start from IBISWorld 'Plumbers in the US' (NAICS 23822b, parent 238220) total industry revenue of $166.5B for 2024 (CONFIRMED on IBISWorld; page now also shows $191.4B projected for 2026). Apply IBISWorld/ServiceTitan segmentation that nonresidential work is ~two-thirds of industry revenue, leaving residential at ~one-third (~$55B). The residential pool is then split into new-construction (~30%) vs renovation/repair/replacement (~70%) as a MODELED estimate, since the residential-only new-vs-repair split is not directly reported by any single source. CAVEAT: NAICS 238220 is 'Plumbing, Heating, and Air-Conditioning Contractors' and bundles some HVAC/heating work, so $55B is an order-of-magnitude residential plumbing TAM, not a NAICS-isolated pure-plumbing figure.",
      "confidence": "medium"
    },
    "topPlayers": [
      {
        "name": "Apex Service Partners",
        "approxRevenue": {
          "value": null,
          "unit": "billion",
          "source": null
        },
        "ownership": "PE-backed",
        "sponsor": "Alpine Investors (with Apollo Global Management minority stake at ~$10B enterprise valuation; $2B Apollo investment announced May 2026)",
        "note": "Largest US residential HVAC/plumbing/electrical roll-up. Per the May 2026 Apex/Alpine/Apollo announcement: 75 local brands across 46 states, 13,000+ employees, 16M+ homes served, founded 2019. Revenue not disclosed in cited sources; prior record's $1.3B revenue figure could NOT be corroborated in src-5 (which covers the $10B valuation, not revenue) and was set to null.",
        "website": "https://apexservicepartners.com/",
        "source": "src-5"
      },
      {
        "name": "Roto-Rooter (Chemed Corporation)",
        "approxRevenue": {
          "value": 0.62,
          "unit": "billion",
          "source": "src-6"
        },
        "ownership": "public",
        "sponsor": "",
        "note": "Largest single-brand US residential plumbing/drain-cleaning operator. FY2024 Roto-Rooter segment revenue ~$891M total (Q1 $235.2M, Q2 $221.3M, Q3 $214.8M, Q4 ~$219.8M); residential ~71% (~$624M, adjusted down from record's ~73%/$660M per confirmed quarterly residential figures: $162.9M/$155.0M/$146.0M/$160.5M). Subsidiary of NYSE-listed Chemed (CHE).",
        "website": "https://www.rotorooter.com/",
        "source": "src-6"
      },
      {
        "name": "Wrench Group",
        "approxRevenue": {
          "value": null,
          "unit": "billion",
          "source": null
        },
        "ownership": "PE-backed",
        "sponsor": "Leonard Green & Partners (acquired from Investcorp 2019; Oak Hill Capital / TSG Consumer Partners cited as later minority)",
        "note": "National residential HVAC/plumbing/electrical home-services platform. Per the 2019 Leonard Green announcement: formed by Investcorp in 2016 from four founding brands; at acquisition served 325,000+ customers across 7 metros (Atlanta, Dallas, Denver, Houston, Phoenix, Sarasota, Tampa) and has since expanded. Revenue not publicly disclosed.",
        "website": "https://www.wrenchgroup.com/",
        "source": "src-7"
      }
    ],
    "rollups": [
      {
        "platform": "Apex Service Partners",
        "sponsor": "Alpine Investors / Apollo (minority)",
        "thesis": "Build the largest national residential HVAC, plumbing and electrical service platform by acquiring and operating leading local contractor brands; high add-on cadence.",
        "notableAddOns": "Frank Gay Services (Orlando) among founding brands; grown to 75 local contracting brands across 46 states since 2019.",
        "link": "https://apexservicepartners.com/",
        "linkType": "company",
        "source": "src-5"
      },
      {
        "platform": "Wrench Group",
        "sponsor": "Leonard Green & Partners (from Investcorp 2019)",
        "thesis": "Consolidate residential HVAC/plumbing/electrical home-services businesses with leading positions in major Sun Belt metros; grow recurring service-agreement base.",
        "notableAddOns": "Formed 2016 from four founding brands (Atlanta, Dallas, Houston, Phoenix); expanded to 7+ metros by 2019 acquisition.",
        "link": "https://www.leonardgreen.com/investcorp-announces-sale-of-the-wrench-group-to-leonard-green/",
        "linkType": "press-release",
        "source": "src-7"
      },
      {
        "platform": "P3 Services (Peltram Plumbing Holdings)",
        "sponsor": "Stellex Capital Management",
        "thesis": "Build a national residential, multi-family and light-commercial plumbing/mechanical and septic platform across the Southeast, Southwest, Florida and Pacific Northwest via local add-on acquisitions.",
        "notableAddOns": "2024 add-ons include Schrader Plumbing (Dallas), Forsyth Septic & Rooter (Winston-Salem), Rolland Reash Plumbing & Bob's Backflow (Jacksonville FL), The Plumbing & Drain Co. & 2 Sons Plumbing (Seattle), Anchor Plumbing (San Antonio). Platform acquired by Stellex from Crescendo Capital in 2022.",
        "link": "https://www.privsource.com/acquisitions/private-equity-backed-acquisitions/plumbing",
        "linkType": "company",
        "source": "src-8"
      }
    ],
    "fragmentation": {
      "score": 5,
      "rationale": "Highly fragmented. US Census County Business Patterns / IBISWorld count ~120,000-142,000 plumbing businesses (NAICS 238220). The largest single residential operator, Roto-Rooter, has ~$624M residential revenue against a ~$55B residential pool (~1% share); even the largest PE roll-up (Apex) holds only low-single-digit share of the broader plumbing/HVAC/electrical market. No firm approaches a meaningful national share.",
      "source": "src-2"
    },
    "rollupIntensity": {
      "score": 5,
      "rationale": "Very active. Private equity has acquired nearly 800 MEP (mechanical-electrical-plumbing/HVAC) companies since 2022 (PitchBook, via WSJ; CONFIRMED across multiple outlets). Multiple well-capitalized platforms (Apex, Wrench Group, P3/Peltram, Redwood Services) are executing high-cadence add-on programs. Apex drew a $2B Apollo minority investment at a $10B enterprise valuation in May 2026 (CONFIRMED). Plumbing is being acquired at mid-single-digit EBITDA multiples with multiples rising as PE expands from HVAC into the category."
    },
    "sources": [
      {
        "id": "src-1",
        "publisher": "IBISWorld",
        "title": "Plumbers in the US - Market Size (NAICS 238220 / 23822b)",
        "url": "https://www.ibisworld.com/united-states/market-size/plumbers/1946/",
        "dateAccessed": "2026-06-22",
        "type": "market-research"
      },
      {
        "id": "src-2",
        "publisher": "ServiceTitan",
        "title": "Plumbing Industry Statistics (market size, residential vs nonresidential share, establishment counts; cites IBISWorld and US Census)",
        "url": "https://www.servicetitan.com/blog/plumbing-industry-statistics",
        "dateAccessed": "2026-06-22",
        "type": "trade-press"
      },
      {
        "id": "src-3",
        "publisher": "US Census Bureau",
        "title": "Construction Spending (Value of Construction Put in Place) - C30 Index",
        "url": "https://www.census.gov/construction/c30/c30index.html",
        "dateAccessed": "2026-06-22",
        "type": "government"
      },
      {
        "id": "src-4",
        "publisher": "US Census Bureau",
        "title": "Construction Spending - Definitions (residential improvements include kitchen/bath modernization and water-heater replacement)",
        "url": "https://www.census.gov/construction/c30/definitions.html",
        "dateAccessed": "2026-06-22",
        "type": "government"
      },
      {
        "id": "src-5",
        "publisher": "Apollo Global Management / Business Wire",
        "title": "Apex Service Partners and Alpine Investors Announce Strategic Minority Investment from Apollo Funds in Apex ($10B valuation, $2B investment, 75 brands/46 states/13,000 employees)",
        "url": "https://www.businesswire.com/news/home/20260528216487/en/Apex-Service-Partners-and-Alpine-Investors-Announce-Strategic-Minority-Investment-from-Apollo-Funds-in-Apex",
        "dateAccessed": "2026-06-22",
        "type": "trade-press"
      },
      {
        "id": "src-6",
        "publisher": "Chemed Corporation (Business Wire press release)",
        "title": "Chemed Reports Fourth-Quarter 2024 Results (Roto-Rooter segment FY2024 revenue and residential/commercial split)",
        "url": "https://www.businesswire.com/news/home/20250226582395/en/Chemed-Reports-Fourth-Quarter-2024-Results",
        "dateAccessed": "2026-06-22",
        "type": "filing"
      },
      {
        "id": "src-7",
        "publisher": "Leonard Green & Partners",
        "title": "Investcorp Announces Sale of The Wrench Group to Leonard Green",
        "url": "https://www.leonardgreen.com/investcorp-announces-sale-of-the-wrench-group-to-leonard-green/",
        "dateAccessed": "2026-06-22",
        "type": "trade-press"
      },
      {
        "id": "src-8",
        "publisher": "PR Newswire",
        "title": "P3 Services Accelerates National Expansion with Multiple Strategic Acquisitions Across the U.S. Over the Last Year (P3 / Peltram / Stellex add-ons)",
        "url": "https://www.prnewswire.com/news-releases/p3-services-accelerates-national-expansion-with-multiple-strategic-acquisitions-across-the-us-over-the-last-year-302388605.html",
        "dateAccessed": "2026-06-22",
        "type": "trade-press"
      },
      {
        "id": "src-9",
        "publisher": "Contractor Magazine / WSJ (PitchBook data)",
        "title": "Solid Business Sense: Private Equity and the MEP Trades (~800 MEP companies acquired by PE since 2022)",
        "url": "https://www.contractormag.com/management/article/55277446/solid-business-sense-private-equity-and-the-mep-trades",
        "dateAccessed": "2026-06-22",
        "type": "trade-press"
      }
    ]
  },
  "electrical": {
    "dataStatus": "complete",
    "confidence": "medium",
    "tam": {
      "total": {
        "value": 121,
        "unit": "billion",
        "source": "src-1"
      },
      "newConstruction": {
        "value": 44,
        "unit": "billion",
        "modeledEstimate": true,
        "assumption": "No source reports a residential-only new-construction vs renovation split directly. Modeled by applying the NECA 2024 Profile of the Electrical Contractor work-type mix to the residential total: NECA reports new construction = 36.6% of electrical contractor revenue (independently verified via NECA/PRNewswire press release). 36.6% x $121B residential total = ~$44B. Cross-checked with NAHB 2024 Cost of Constructing a Home (electrical = 6.4% of single-family construction cost, ~$27,383/home, independently verified) and Census 2024 residential construction put-in-place, which implies new-residential electrical installation in the ~$40-55B range, consistent with this estimate.",
        "source": "src-3"
      },
      "renovationRepair": {
        "value": 77,
        "unit": "billion",
        "modeledEstimate": true,
        "assumption": "Modeled as the residual of the residential total after new construction (~$121B - ~$44B = ~$77B). NECA 2024 Profile reports new construction at 36.6%, implying ~63% is maintenance/service/repair plus modernization/retrofit. The exact service-vs-retrofit subsplit (cited as 36% / 28% in the original record) could NOT be independently verified from the public NECA press release or topline summary - those specific subcomponent percentages are behind the full paid report and are treated as approximate. Corroborated directionally by Harvard JCHS LIRA owner-occupied home improvement & repair spending (~$450B in 2024); electrical (panel upgrades, rewiring, EV-circuit work) is one fast-growing trade within that envelope.",
        "source": "src-4"
      },
      "year": 2024,
      "methodology": "Top-down. Anchored on IBISWorld 'Electricians' (NAICS 238210) US industry revenue of $345.1B (2025, independently verified), then scaled to the residential segment using the NECA 2024 Profile of the Electrical Contractor. NECA reports single-family housing at ~29% of revenue (2023, down from 38.4% in 2018); adding multi-family/other residential supports the ~35% residential share used here (vs CII + nonbuilding for the balance). ~35% x ~$345B = ~$121B residential. NOTE: the $121B residential total is a MODELED/derived estimate, not a directly reported figure - hence medium confidence. The new-construction vs renovation/repair split is modeled (not directly reported) by applying NECA's verified 36.6% new-construction work-type share, cross-checked against the NAHB single-family electrical cost share (6.4%, verified) x Census residential construction spend, and JCHS LIRA remodeling spend.",
      "confidence": "medium"
    },
    "topPlayers": [
      {
        "name": "Apex Service Partners",
        "approxRevenue": {
          "value": 3,
          "unit": "billion",
          "source": "src-5"
        },
        "ownership": "PE-backed",
        "sponsor": "Alpine Investors",
        "note": "Nation's largest residential HVAC/plumbing/electrical roll-up. Revenue updated to ~$3B (2026), operating in 46 states with 150+ locations and 13,000+ teammates (the prior $1.3B / 107-brand / 8,000-tradespeople figure was a 2023-era snapshot and is now stale). Backed by Alpine Investors and Partners Group; Apollo Funds agreed to a minority stake in May 2026. Electrical is one of three core trades, so residential-electrical-ONLY revenue is a subset of the ~$3B all-trades total, NOT separately reported.",
        "website": "https://apexservicepartners.com/",
        "source": "src-5"
      },
      {
        "name": "Sila Services",
        "approxRevenue": {
          "value": null,
          "unit": "billion",
          "source": null
        },
        "ownership": "PE-backed",
        "sponsor": "Goldman Sachs Alternatives",
        "note": "Residential HVAC, plumbing and electrical platform (30+ brands across the US Northeast/Midwest/Mid-Atlantic). Goldman Sachs Alternatives acquired a MAJORITY stake from Morgan Stanley Capital Partners, announced Nov 11 2024 (independently verified). IMPORTANT: financial terms of the transaction were NOT disclosed - the ~$1.6B revenue and ~$1.7B deal-value figures in the original record could not be confirmed from any official source and have been set to null. Electrical is one segment within the bundled multi-trade platform.",
        "website": "https://www.silaservices.com/",
        "source": "src-7"
      },
      {
        "name": "Mister Sparky (Authority Brands)",
        "approxRevenue": {
          "value": null,
          "unit": "million",
          "source": null
        },
        "ownership": "franchise",
        "note": "Largest dedicated residential-electrician franchise brand; subsidiary of Authority Brands (owned by Apax Partners, with BCI investment), acquired via the Clockwork brands in spring 2019. Pure residential electrical focus, but current system-wide sales are not publicly disclosed (left null; a stale 2019 ~$89M figure was rejected as too old to represent current revenue).",
        "website": "https://www.mistersparky.com/",
        "source": "src-8"
      }
    ],
    "rollups": [
      {
        "platform": "Apex Service Partners",
        "sponsor": "Alpine Investors",
        "thesis": "Buy-and-own consolidation of residential HVAC/plumbing/electrical local brands into a shared-services platform (recruiting, marketing, procurement, finance, technology); electrical is one of three core trades cross-sold to the existing home-services customer base. Now 46 states / 150+ locations / ~$3B revenue; Apollo Funds took a minority stake (May 2026) alongside Alpine and Partners Group.",
        "notableAddOns": "Serial add-on program across HVAC/plumbing/electrical; grew from 107 brands (2023) to 150+ locations (2026)",
        "link": "https://apexservicepartners.com/",
        "linkType": "company",
        "source": "src-5"
      },
      {
        "platform": "Sila Services",
        "sponsor": "Goldman Sachs Alternatives",
        "thesis": "Roll-up of residential heating, cooling, plumbing and electrical contractors across the Northeast/Midwest/Mid-Atlantic; Goldman Sachs Alternatives acquired a majority stake from Morgan Stanley Capital Partners (announced Nov 11 2024) to fund continued add-on M&A. Deal value not disclosed.",
        "notableAddOns": "",
        "link": "https://www.silaservices.com/",
        "linkType": "company",
        "source": "src-7"
      },
      {
        "platform": "Wrench Group",
        "sponsor": "Leonard Green & Partners",
        "thesis": "Multi-trade residential services platform (HVAC, plumbing, water, electrical); Leonard Green & Partners holds majority (since April 2019), with TSG Consumer Partners and Oak Hill as minority investors (Nov 2022). Operates 25 brands across 27 markets in 14 states with 5,800+ team members serving ~1.75M customers/year; consolidates local contractors and layers recurring service-membership revenue.",
        "notableAddOns": "15+ acquisitions across HVAC/plumbing/electrical/water management",
        "link": "https://www.wrenchgroup.com/",
        "linkType": "company",
        "source": "src-9"
      },
      {
        "platform": "Authority Brands (Mister Sparky)",
        "sponsor": "Apax Partners",
        "thesis": "Franchise-model consolidation of residential home-services brands; Mister Sparky is the dedicated residential-electrician franchise within a portfolio that also includes One Hour Heating & Air Conditioning and Benjamin Franklin Plumbing. Owned by Apax Partners (with a significant investment led by BCI).",
        "notableAddOns": "Clockwork brands (One Hour, Benjamin Franklin, Mister Sparky) acquired spring 2019",
        "link": "https://www.apax.com/partnerships/authority-brands/",
        "linkType": "company",
        "source": "src-8"
      }
    ],
    "fragmentation": {
      "score": 5,
      "rationale": "Highly fragmented. IBISWorld counts ~256,995 'Electricians' businesses in the US (2025, independently verified), and NECA's 2024 Profile shows residential work is dominated by very small firms (residential exceeds 50% of revenue for firms with <10 employees but falls to ~9% for firms with 100+ employees). Even the largest residential platforms (Apex ~$3B, Sila and Wrench all multi-trade) represent only low-single-digit percentages of the ~$121B residential electrical market individually, and their revenue is shared across HVAC/plumbing/electrical. No single firm approaches a meaningful national residential-electrical share.",
      "source": "src-1"
    },
    "rollupIntensity": {
      "score": 4,
      "rationale": "Active, PE-driven consolidation - but specific stats in the original record were corrected. Electrical is a core trade in nearly every major residential home-services platform (Apex, Sila, Wrench, Authority Brands), and multiple large 2024-2026 transactions occurred (Goldman/Sila majority stake Nov 2024; Apollo minority in Apex May 2026). HOWEVER, Cascade Partners' own data shows total electrical-contractor M&A deal count FELL to ~99 in 2025 from ~140 in 2024 - contradicting the original record's claims that 'lower-middle-market electrical M&A rose ~13% in 2024' and 'H1 2025 PE deal count exceeded full-year 2024.' The 'PE ~75% of deals' and '$50B+ deployed since 2018' figures could not be independently verified and have been removed. Net: intensity remains high (4/5) given continued large platform deals and PE dominance, but 2025 volume softened.",
      "score_basis": "corrected"
    },
    "sources": [
      {
        "id": "src-1",
        "publisher": "IBISWorld",
        "title": "Electricians in the US - Market Size & Number of Businesses (NAICS 238210)",
        "url": "https://www.ibisworld.com/united-states/market-size/electricians/189/",
        "type": "market-research",
        "dateAccessed": "2026-06-22"
      },
      {
        "id": "src-2",
        "publisher": "IBISWorld",
        "title": "Electricians in the US - Number of Businesses Statistics (NAICS 238210)",
        "url": "https://www.ibisworld.com/united-states/number-of-businesses/electricians/189/",
        "type": "market-research",
        "dateAccessed": "2026-06-22"
      },
      {
        "id": "src-3",
        "publisher": "National Electrical Contractors Association (NECA) / PRNewswire",
        "title": "2024 Profile of the Electrical Contractor Reveals Industry Growth and Shifting Trends (new construction 36.6%)",
        "url": "https://www.prnewswire.com/news-releases/2024-profile-of-the-electrical-contractor-reveals-industry-growth-and-shifting-trends-302198383.html",
        "type": "trade-association",
        "dateAccessed": "2026-06-22"
      },
      {
        "id": "src-4",
        "publisher": "Harvard Joint Center for Housing Studies (JCHS)",
        "title": "Leading Indicator of Remodeling Activity (LIRA) - 2024 home improvement & repair spending",
        "url": "https://www.jchs.harvard.edu/research-areas/remodeling/lira",
        "type": "market-research",
        "dateAccessed": "2026-06-22"
      },
      {
        "id": "src-5",
        "publisher": "Alpine Investors / Apollo Global Management (press releases)",
        "title": "Apex Service Partners - Alpine Investors launch & Apollo minority investment (~$3B revenue, 46 states, 150+ locations)",
        "url": "https://alpineinvestors.com/update/alpine-launches-apex-service-partners/",
        "type": "trade-press",
        "dateAccessed": "2026-06-22"
      },
      {
        "id": "src-6",
        "publisher": "US Census Bureau",
        "title": "Monthly Construction Spending, December 2024 (residential put-in-place)",
        "url": "https://www.census.gov/construction/c30/pdf/pr202412.pdf",
        "type": "government",
        "dateAccessed": "2026-06-22"
      },
      {
        "id": "src-7",
        "publisher": "Goldman Sachs Asset Management / Morgan Stanley (press releases)",
        "title": "Goldman Sachs Alternatives acquires majority stake in Sila Services from Morgan Stanley Capital Partners (Nov 11 2024; terms undisclosed)",
        "url": "https://am.gs.com/en-us/individual/news/press-release/2024/sila-services-investment",
        "type": "trade-press",
        "dateAccessed": "2026-06-22"
      },
      {
        "id": "src-8",
        "publisher": "Apax Partners / Authority Brands",
        "title": "Authority Brands partnership (Apax Partners, BCI investment) - Mister Sparky electrician franchise",
        "url": "https://www.apax.com/partnerships/authority-brands/",
        "type": "trade-press",
        "dateAccessed": "2026-06-22"
      },
      {
        "id": "src-9",
        "publisher": "Leonard Green & Partners / Wrench Group",
        "title": "Wrench Group - residential HVAC, plumbing, electrical platform (25 brands, 14 states, LGP majority)",
        "url": "https://www.leonardgreen.com/tsg-consumer-partners-oak-hill-partner-with-leonard-green-and-management-to-enhance-wrench-groups-next-phase-of-growth/",
        "type": "trade-press",
        "dateAccessed": "2026-06-22"
      },
      {
        "id": "src-10",
        "publisher": "National Association of Home Builders (NAHB)",
        "title": "Cost of Constructing a Home 2024 (electrical = 6.4% of single-family construction cost, ~$27,383)",
        "url": "https://www.nahb.org/news-and-economics/housing-economics-plus/special-studies/special-studies-pages/cost-of-constructing-a-home-in-2024",
        "type": "trade-association",
        "dateAccessed": "2026-06-22"
      },
      {
        "id": "src-11",
        "publisher": "Cascade Partners",
        "title": "Electrical Contracting Industry M&A Market Update, H1 2025",
        "url": "https://cascade-partners.com/electrical-contracting-ma-market-update/",
        "type": "trade-press",
        "dateAccessed": "2026-06-22"
      }
    ]
  },
  "roofing": {
    "dataStatus": "complete",
    "confidence": "medium",
    "tam": {
      "total": {
        "value": 19.5,
        "unit": "billion",
        "source": "src-2"
      },
      "newConstruction": {
        "value": 6.8,
        "unit": "billion",
        "modeledEstimate": true,
        "assumption": "Modeled as the ~35% new-construction share of the ~$19.5B residential TAM. The same vendors used for the TAM report the replacement-vs-new REVENUE split as ~two-thirds/one-third: Market Dataforecast states replacement ~67% (new ~33%), Mordor Intelligence states reroofing/replacement 63.5% (new ~36.5%). Midpoint ~35% new x $19.5B => ~$6.8B. NOTE: this corrects the prior record, which applied an 80/20 split. The 80%+ reroofing figure (BGL/Mordor) is reroofing's share of DEMAND/VOLUME, not the dollar-revenue split, and BGL's $15.7B was the materials market. New construction is the most cyclical, housing-permit-driven slice.",
        "source": "src-2"
      },
      "renovationRepair": {
        "value": 12.7,
        "unit": "billion",
        "modeledEstimate": true,
        "assumption": "Modeled as the ~65% replacement/reroofing/repair REVENUE share of the ~$19.5B residential TAM. Market Dataforecast: replacement ~67% of US roofing revenue; Mordor: reroofing/replacement 63.5%. Midpoint ~65% x $19.5B => ~$12.7B. >90% of reroofing DEMAND is non-discretionary (age/storm/insurance-driven) per BGL, even though reroofing's share of DOLLAR revenue (~65%) is lower than its share of demand volume (~80%).",
        "source": "src-2"
      },
      "year": 2025,
      "methodology": "Top-down. Start from total US roofing market ~$31.5B (Market Dataforecast 2025) and take the residential share (62.1%) to get ~$19.5B residential TAM. Corroborated by Mordor Intelligence: total ~$32.66B x 58% residential => ~$18.9B residential, so ~$19-19.5B is well anchored across two vendors. New-construction vs renovation dollar split modeled at ~35/65 from the replacement-revenue share that Market Dataforecast (~67% replacement) and Mordor (63.5% reroofing) converge on. CAUTION: prior record modeled an 80/20 split by conflating reroofing's share of demand-volume (BGL/Mordor ~80%) with its share of dollar revenue (~65%); corrected here.",
      "confidence": "medium"
    },
    "topPlayers": [
      {
        "name": "Erie Home",
        "approxRevenue": {
          "value": 609,
          "unit": "million",
          "source": "src-5"
        },
        "ownership": "PE-backed",
        "sponsor": "Gridiron Capital (retains majority of combined company after 2025 merger with Gridiron-backed Leaf Home)",
        "note": "Toledo, OH-based; $609M 2024 revenue, #4 on RC 2025 Top 100 and the largest primarily-residential roofing contractor. Direct-to-homeowner metal and asphalt roofing plus basement waterproofing. In 2025 combined with Gridiron-backed Leaf Home; Gridiron Capital retains majority ownership (Ares preferred equity, Apollo debt).",
        "website": "https://eriehome.com",
        "source": "src-5"
      },
      {
        "name": "Infinity Home Services",
        "approxRevenue": {
          "value": 500,
          "unit": "million",
          "source": "src-1"
        },
        "ownership": "PE-backed",
        "sponsor": "Freeman Spogli & Co. and LightBay Capital",
        "note": "Residential roofing/exterior roll-up platform; ~23 partner brands; just over $500M 2024 revenue and #6 on RC 2025 Top 100. Sponsors Freeman Spogli + LightBay partnered Dec 2022. Revenue per RC Top 10; not from the Freeman Spogli press release (which states no revenue).",
        "website": "https://infinityhomeservices.com",
        "source": "src-1"
      },
      {
        "name": "Stronghouse Solutions",
        "approxRevenue": {
          "value": null,
          "unit": "million",
          "source": null
        },
        "ownership": "PE-backed",
        "sponsor": "O2 Investment Partners",
        "note": "Residential roofing/exterior platform (formerly Capital Construction Holdings, rebranded Jan 2023). O2 press release at rebrand cited 5 brands / 6 states; the company's current site claims 30+ states, so footprint has grown. Ranked in RC 2025 Top 10. Revenue not publicly disclosed.",
        "website": "https://stronghousebrands.com",
        "source": "src-7"
      }
    ],
    "rollups": [
      {
        "platform": "Infinity Home Services",
        "sponsor": "Freeman Spogli & Co. and LightBay Capital",
        "thesis": "Acquire and integrate strong regional residential roofing/exterior brands into a national multi-brand platform with shared back-office, procurement and lead-gen scale; partners keep their name, team and management.",
        "notableAddOns": "GF Sprague & Company (Boston) and Resnick Roofing & Contracting (Pittsburgh) confirmed as the 13th/14th brands in the cited release; ~23 partner brands total per company site",
        "link": "https://www.freemanspogli.com/news/infinity-home-services-adds-its-thirteenth-and-fourteenth-brands-driving-continued-expansion-in-new-and-existing-markets/",
        "linkType": "press-release",
        "source": "src-6"
      },
      {
        "platform": "Omnia Exterior Solutions",
        "sponsor": "CCMP Growth Advisors (CCMP Capital)",
        "thesis": "National residential roofing/exterior remodeling roll-up launched June 2023; partner with founder-operated regional roofers and give owners equity/options to build geographic density (entered New England in 2024).",
        "notableAddOns": "James & Whitney Company (8th buy of 2024, entered Maine/New Hampshire); 11 brands since inception, 8 partnerships completed in 2024",
        "link": "https://www.roofingcontractor.com/articles/100196-omnia-exterior-solutions-makes-8th-buy-in-24-enters-new-england",
        "linkType": "trade-press",
        "source": "src-8"
      },
      {
        "platform": "Stronghouse Solutions",
        "sponsor": "O2 Investment Partners",
        "thesis": "Build one national residential roofing/exterior brand by consolidating storm-response-focused regional contractors. Rebranded from Capital Construction Holdings in Jan 2023.",
        "notableAddOns": "Linear Roofing & General Contractors and Marshall Building & Remodeling confirmed in the O2 rebrand release (alongside Capital Construction, Irish Roofing & Exteriors, Options Exteriors)",
        "link": "https://o2investment.com/news/capital-construction-holdings-announces-holding-company-rebrand-to-stronghouse-solutions/",
        "linkType": "press-release",
        "source": "src-7"
      }
    ],
    "fragmentation": {
      "score": 5,
      "rationale": "Highly fragmented. Roughly 100,000 roofing companies operate in the US (vendor estimates range ~95,000-114,000); the top 100 providers represent only ~17% of total roofing spend and even the largest contractor (Tecta America) holds <2% share. Dominated by small local/regional owner-operators with low barriers to entry. (These structural stats come from market-research vendors, not the RC Top 10 article.)",
      "source": "src-2"
    },
    "rollupIntensity": {
      "score": 5,
      "rationale": "Very active. Per Roofing Contractor, roofing-contractor acquisitions rose from 106 deals (2023) to 134 deals (2024), a ~25% YoY increase; PE-backed platforms grew from 17 (start of 2023) to 56 (end of 2024). 7 of the RC Top 10 contractors are PE-affiliated, together >$4B in revenue. By mid-2025 a US roofing platform was reportedly being acquired roughly every 48 hours. Multiple well-capitalized residential platforms (Infinity Home Services, Stronghouse, Omnia, Erie/Leaf-Gridiron) are actively acquiring add-ons. CORRECTION: prior record's '82 deals in 2024, up 30%, 134 expected 2025' was inaccurate; 134 is the 2024 actual."
    },
    "sources": [
      {
        "id": "src-1",
        "publisher": "Roofing Contractor",
        "title": "The Top 10 Roofing Contractors of 2025",
        "url": "https://www.roofingcontractor.com/articles/101115-the-top-10-roofing-contractors-of-2025",
        "type": "trade-press",
        "dateAccessed": "2026-06-22"
      },
      {
        "id": "src-2",
        "publisher": "Market Dataforecast",
        "title": "U.S. Roofing Market Size, Share, Growth & Trends Report",
        "url": "https://www.marketdataforecast.com/market-reports/us-roofing-market",
        "type": "market-research",
        "dateAccessed": "2026-06-22"
      },
      {
        "id": "src-3",
        "publisher": "Mordor Intelligence",
        "title": "United States Roofing Market Size & Share Outlook to 2031",
        "url": "https://www.mordorintelligence.com/industry-reports/united-states-roofing-market",
        "type": "market-research",
        "dateAccessed": "2026-06-22"
      },
      {
        "id": "src-4",
        "publisher": "Brown Gibbons Lang & Company (BGL)",
        "title": "Renovation & Repair Spending Driving Growth in the Roofing Market",
        "url": "https://www.bglco.com/insights/renovation-repair-spending-driving-growth-in-the-roofing-market/",
        "type": "market-research",
        "dateAccessed": "2026-06-22"
      },
      {
        "id": "src-5",
        "publisher": "Roofing Contractor",
        "title": "Gridiron Capital-backed Leaf Home to Acquire Erie Home",
        "url": "https://www.roofingcontractor.com/articles/101281-gridiron-capital-backed-leaf-home-to-acquire-erie-home",
        "type": "trade-press",
        "dateAccessed": "2026-06-22"
      },
      {
        "id": "src-6",
        "publisher": "Freeman Spogli & Co.",
        "title": "Infinity Home Services Adds its Thirteenth and Fourteenth Brands, Driving Continued Expansion",
        "url": "https://www.freemanspogli.com/news/infinity-home-services-adds-its-thirteenth-and-fourteenth-brands-driving-continued-expansion-in-new-and-existing-markets/",
        "type": "trade-press",
        "dateAccessed": "2026-06-22"
      },
      {
        "id": "src-7",
        "publisher": "O2 Investment Partners",
        "title": "Capital Construction Holdings Announces Holding Company Rebrand to Stronghouse Solutions",
        "url": "https://o2investment.com/news/capital-construction-holdings-announces-holding-company-rebrand-to-stronghouse-solutions/",
        "type": "trade-press",
        "dateAccessed": "2026-06-22"
      },
      {
        "id": "src-8",
        "publisher": "Roofing Contractor",
        "title": "Omnia Exterior Solutions Makes 8th Buy in '24, Enters New England",
        "url": "https://www.roofingcontractor.com/articles/100196-omnia-exterior-solutions-makes-8th-buy-in-24-enters-new-england",
        "type": "trade-press",
        "dateAccessed": "2026-06-22"
      },
      {
        "id": "src-9",
        "publisher": "Roofing Contractor",
        "title": "Roofing's Big Deal: What Contractors Need to Know About Private Equity in 2025",
        "url": "https://www.roofingcontractor.com/articles/100478-roofings-big-deal-what-contractors-need-to-know-about-private-equity-in-2025",
        "type": "trade-press",
        "dateAccessed": "2026-06-22"
      }
    ]
  },
  "fencing": {
    "dataStatus": "complete",
    "confidence": "medium",
    "tam": {
      "total": {
        "value": 5.9,
        "unit": "billion",
        "source": "src-2"
      },
      "year": 2024,
      "newConstruction": {
        "value": 2.4,
        "unit": "billion",
        "modeledEstimate": true,
        "assumption": "Split not directly reported by any single source. Modeled at ~40% of the residential installed market. Residential fencing demand is weighted toward replacement/remodeling (privacy upgrades, weathered cedar replacement) while new construction is driven by single-family housing starts and homebuilder subdivision/HOA fencing. 40% new / 60% repair-replacement is a reasoned allocation consistent with home-improvement-heavy residential exterior categories; no source publishes an exact fencing split.",
        "source": "src-2"
      },
      "renovationRepair": {
        "value": 3.5,
        "unit": "billion",
        "modeledEstimate": true,
        "assumption": "Modeled at ~60% of the residential installed market. Grand View attributes residential leadership to home improvement, privacy, and property enhancement, and FMI cites renovation-spending tailwinds, implying replacement/repair (weathered wood-to-composite swaps, storm damage, privacy upgrades) is the larger share. No source publishes an exact fencing renovation-vs-new split; this is a modeled allocation.",
        "source": "src-2"
      },
      "methodology": "Top-down. Anchored on the US fencing market sized at ~$9.1B in 2024 (Grand View Research; Grand View independently confirms ~$9.81B for 2025 with 5.4% CAGR to $14.90B by 2033, so ~$9.1-9.3B in 2024 is consistent). Corroborated by Custom Market Insights at $9.8B (2024). Grand View reports residential at the largest revenue share (64.8% in 2025, VERIFIED) and the contractor/installed channel at 78.8% (VERIFIED). Applying the residential share yields ~$5.9B (9.1 * 0.648). This residential figure is channel-inclusive; a strictly installed-only residential figure (x 0.788) would be ~$4.6B (sensitivity flagged). Independently cross-checked against FMI Corp, which sizes the combined US perimeter security & fencing market at $19.5B in 2024 with nonresidential at $13.7B (VERIFIED) - implying a residential+agricultural remainder of ~$5.8B, mutually consistent with the ~$5.9B residential headline. Note: IBISWorld's 'Fence Construction' industry ($20.4B in 2026) is a broader construction-services definition and is NOT used as the TAM anchor. New-vs-renovation split is modeled (see split assumptions).",
      "confidence": "medium"
    },
    "topPlayers": [
      {
        "name": "Superior Fence & Rail",
        "approxRevenue": {
          "value": 825,
          "unit": "million",
          "source": "src-4"
        },
        "ownership": "PE-backed",
        "sponsor": "MidOcean Partners (via Empower Brands)",
        "note": "Largest US residential fence franchise (verified: ranked #1 in fencing, Entrepreneur Franchise 500). System-wide revenue is a ROUGH MODELED ESTIMATE (~units x avg franchisee revenue), NOT an audited single-entity figure. Empower's official page reports average new-franchisee sales of $2.2M (2022) and the brand's own site now cites 120+ US/Canada locations; unit count and per-unit averages vary by source vintage, so the ~$825M figure carries meaningful uncertainty. ~90% residential revenue.",
        "website": "https://www.superiorfenceandrail.com",
        "source": "src-4"
      },
      {
        "name": "Fenceworks (Gemspring Capital platform)",
        "approxRevenue": {
          "value": null,
          "unit": "million",
          "source": null
        },
        "ownership": "PE-backed",
        "sponsor": "Gemspring Capital",
        "note": "Riverside, CA-based fencing installer/distributor (founded 1984, ~500 employees), serving the nation's largest homebuilders (D.R. Horton, Lennar, KB Home, Pulte). Acquired by Gemspring Nov 2023; ~20 locations across West Coast, Midwest and Southeast after add-ons. Revenue not publicly disclosed. CORRECTED website to fenceworks.us (verified official); the prior fenceworks.com is an unrelated Nashville TN contractor, not this company.",
        "website": "https://www.fenceworks.us",
        "source": "src-6"
      },
      {
        "name": "U.S. Fence Solutions",
        "approxRevenue": {
          "value": 130,
          "unit": "million",
          "source": "src-9"
        },
        "ownership": "PE-backed",
        "sponsor": "Building Industry Partners (BIP)",
        "note": "National fencing holding company formed 2016 (residential + commercial installers/distributors); reported over $130M total annual sales across operating companies in CO, TX and OK (VERIFIED via BIP/FMI). HQ Fort Worth, TX. Note: BIP has divested some units over time (e.g., Binford Supply 2021, Ideal Fencing 2023), so current consolidated revenue may differ from the headline $130M.",
        "website": "https://www.usfencesolutions.com",
        "source": "src-9"
      }
    ],
    "rollups": [
      {
        "platform": "Superior Fence & Rail / Empower Brands",
        "sponsor": "MidOcean Partners",
        "thesis": "Franchise-led national consolidation of residential fence installation under a multi-brand home-services platform.",
        "notableAddOns": "Superior Fence & Rail rolled into Empower Brands (formed 2022 from Lynx Franchising + Outdoor Living Brands); sister brands include Koala Insulation, Wallaby Windows, Bumble Roofing.",
        "link": "https://www.midoceanpartners.com/our-business/portfolio-companies/empower-brands",
        "linkType": "company",
        "source": "src-5"
      },
      {
        "platform": "Fenceworks",
        "sponsor": "Gemspring Capital",
        "thesis": "Buy-and-build of regional residential fence installers/distributors serving large homebuilders; acquire strong management teams and scale them on a broader platform.",
        "notableAddOns": "Accurate Fence (Atlanta metro) acquired to expand Southeast footprint; also Kansas Fencing and T-Bar Fence (TX) per Gemspring announcements.",
        "link": "https://www.gemspring.com/fenceworks-expands-footprint-into-the-southeast-with-acquisition-of-accurate-fence/",
        "linkType": "press-release",
        "source": "src-6"
      },
      {
        "platform": "U.S. Fence Solutions",
        "sponsor": "Building Industry Partners (BIP)",
        "thesis": "Acquire and partner with leading independent residential and commercial fencing installers/distributors in strategic US markets to build a national holding company.",
        "notableAddOns": "Split Rail Fence & Supply (CO, platform 2016), Ideal Fencing Corp. (CO), Western Access Controls (gate/access).",
        "link": "https://www.buildingip.com/portfolio-1/us-fence-solutions",
        "linkType": "company",
        "source": "src-9"
      },
      {
        "platform": "Fence Builders / Green Hill Fence",
        "sponsor": "Watchtower Capital Partners",
        "thesis": "Platform investment combining complementary Southeast regional fence operators (residential + commercial) to consolidate a fragmented market and accelerate organic growth.",
        "notableAddOns": "Fence Builders, Inc. (Winston-Salem, NC, founded 1955) + Green Hill Fence Company (SC), acquired simultaneously July 2025 (VERIFIED via PR Newswire, dated July 16 2025).",
        "link": "https://www.prnewswire.com/news-releases/watchtower-capital-completes-platform-investment-in-fence-builders-302506140.html",
        "linkType": "press-release",
        "source": "src-7"
      },
      {
        "platform": "Perimeter Solutions Group",
        "sponsor": "Bertram Capital",
        "thesis": "Multi-region fence and perimeter-security installer roll-up across residential, commercial and municipal segments (permanent + rental fencing, gate/access control across 14 Southern US states).",
        "notableAddOns": "Strategic Fence & Wall (permanent fence & gate installation add-on). Bertram invested Oct 2024 (VERIFIED).",
        "link": "https://www.bertramcapital.com/portfolio/perimetersolutionsgroup",
        "linkType": "company",
        "source": "src-8"
      }
    ],
    "fragmentation": {
      "score": 5,
      "rationale": "Highly fragmented (VERIFIED). IBISWorld explicitly states the US Fence Construction industry is highly fragmented with no company holding more than 5% market share, and counts ~315k businesses in the industry. FMI Corp characterizes the perimeter security & fencing space as a fragmented landscape ripe for buy-and-build consolidation. Even the largest player (Superior Fence & Rail, ~$0.8B system-wide estimate) is well under low-single-digit percent of the ~$9B US fencing market.",
      "source": "src-1"
    },
    "rollupIntensity": {
      "score": 4,
      "rationale": "Very active and accelerating PE consolidation. At least five distinct PE-backed platforms verified (MidOcean/Empower-Superior Fence, Gemspring/Fenceworks, BIP/U.S. Fence Solutions, Watchtower/Fence Builders [July 2025], Bertram/Perimeter Solutions Group [Oct 2024]). FMI published a dedicated September 2025 PE sector brief framing fencing as an early-entry buy-and-build opportunity (VERIFIED), and multiple platform investments and add-ons closed 2023-2026. Not yet at peak (no dominant national consolidator), hence 4 rather than 5. Note: additional sponsors referenced anecdotally (Harkness/Premier Fence, Argosy/Federal Rent-A-Fence) were not independently re-verified in this audit and are not relied upon for the score."
    },
    "sources": [
      {
        "id": "src-1",
        "publisher": "IBISWorld",
        "title": "Fence Construction in the US - Market Size Statistics",
        "url": "https://www.ibisworld.com/industry-statistics/market-size/fence-construction-united-states/",
        "dateAccessed": "2026-06-22",
        "type": "market-research"
      },
      {
        "id": "src-2",
        "publisher": "Grand View Research",
        "title": "U.S. Fencing Market Size And Share | Industry Report, 2033",
        "url": "https://www.grandviewresearch.com/industry-analysis/us-fencing-market",
        "dateAccessed": "2026-06-22",
        "type": "market-research"
      },
      {
        "id": "src-3",
        "publisher": "FMI Corp",
        "title": "Private Equity Sector Brief: Perimeter Security and Fencing (September 2025)",
        "url": "https://fmicorp.com/insights/thought-leadership/private-equity-sector-brief-perimeter-security-and-fencing",
        "dateAccessed": "2026-06-22",
        "type": "trade-press"
      },
      {
        "id": "src-4",
        "publisher": "Empower Brands",
        "title": "Superior Fence & Rail Franchise Overview - Empower Brands",
        "url": "https://empowerfranchising.com/our-brands/superior-fence-rail/",
        "dateAccessed": "2026-06-22",
        "type": "trade-press"
      },
      {
        "id": "src-5",
        "publisher": "MidOcean Partners",
        "title": "Empower Brands - Portfolio Company",
        "url": "https://www.midoceanpartners.com/our-business/portfolio-companies/empower-brands",
        "dateAccessed": "2026-06-22",
        "type": "trade-press"
      },
      {
        "id": "src-6",
        "publisher": "Gemspring Capital",
        "title": "Fenceworks Expands Footprint into the Southeast with Acquisition of Accurate Fence",
        "url": "https://www.gemspring.com/fenceworks-expands-footprint-into-the-southeast-with-acquisition-of-accurate-fence/",
        "dateAccessed": "2026-06-22",
        "type": "trade-press"
      },
      {
        "id": "src-7",
        "publisher": "PR Newswire / Watchtower Capital Partners",
        "title": "Watchtower Capital Completes Platform Investment in Fence Builders",
        "url": "https://www.prnewswire.com/news-releases/watchtower-capital-completes-platform-investment-in-fence-builders-302506140.html",
        "dateAccessed": "2026-06-22",
        "type": "trade-press"
      },
      {
        "id": "src-8",
        "publisher": "Bertram Capital",
        "title": "Perimeter Solutions Group, LLC - Portfolio",
        "url": "https://www.bertramcapital.com/portfolio/perimetersolutionsgroup",
        "dateAccessed": "2026-06-22",
        "type": "trade-press"
      },
      {
        "id": "src-9",
        "publisher": "Building Industry Partners",
        "title": "U.S. Fence Solutions - Portfolio",
        "url": "https://www.buildingip.com/portfolio-1/us-fence-solutions",
        "dateAccessed": "2026-06-22",
        "type": "trade-press"
      },
      {
        "id": "src-10",
        "publisher": "Custom Market Insights",
        "title": "US Fencing Market Size, Trends, Share, Forecast 2033",
        "url": "https://www.custommarketinsights.com/report/us-fencing-market/",
        "dateAccessed": "2026-06-22",
        "type": "market-research"
      }
    ]
  },
  "tree-arbor": {
    "dataStatus": "complete",
    "confidence": "medium",
    "tam": {
      "total": {
        "value": 25.5,
        "unit": "billion",
        "source": "src-1"
      },
      "year": 2024,
      "newConstruction": {
        "value": 2.6,
        "unit": "billion",
        "modeledEstimate": true,
        "assumption": "No source reports a new-construction vs. existing-home split for tree care. Modeled at ~10% of residential TAM. Residential tree care (mature-tree pruning, removal of established/hazard trees, plant health care, storm response) is overwhelmingly performed on existing properties; the new-construction component is limited to initial tree planting/lot-clearing tied to new housing and is typically bundled into landscaping/site-prep budgets rather than ongoing arbor care. 10% is a conservative upper bound for the new-construction-driven share.",
        "source": "src-1"
      },
      "renovationRepair": {
        "value": 22.9,
        "unit": "billion",
        "modeledEstimate": true,
        "assumption": "Modeled as the residual ~90% of residential TAM. Captures maintenance/replacement-type spend on existing homes: recurring pruning/trimming, hazard and dead-tree removal, stump grinding, plant health care/treatments, and emergency storm response. This is the dominant demand driver in tree care because it scales with the installed base of mature trees on existing homes and with weather events, not with new construction.",
        "source": "src-1"
      },
      "methodology": "Top-down from IBISWorld 'Tree Trimming Services in the US' (NAICS-aligned). IBISWorld sizes the total US tree trimming/care industry at ~$38.2B in 2024 ($39.5B in 2025). Private households account for ~66.8% of industry revenue (commonly cited from IBISWorld's market segmentation), implying a residential TAM of ~$25.5B for 2024 (0.668 x $38.2B). NOTE: the record's originally-cited source (Coherent Market Insights) does NOT support a $15B US residential figure on the page checked - that page reports a GLOBAL residential tree services market of ~$17.0B (2026) with North America ~36.2% (~$6.1B). TAM was therefore reset to the IBISWorld-anchored residential estimate, which is better sourced and aligns with the industry's known scale. New-construction vs. renovation/replacement split is NOT directly reported and is MODELED at ~10%/~90% (see split assumptions).",
      "confidence": "medium"
    },
    "topPlayers": [
      {
        "name": "The Davey Tree Expert Company (Residential/Commercial segment)",
        "approxRevenue": {
          "value": 0.83,
          "unit": "billion",
          "source": "src-2"
        },
        "ownership": "private",
        "sponsor": "",
        "note": "Employee-owned since 1979 (largest U.S. pure-play tree care company; 8th-largest employee-owned company in the U.S.). Total 2024 revenue ~$1.841B (confirmed via company infobox/SEC filings). The Residential/Commercial segment (residential-relevant portion, vs. its larger Utility line-clearance segment) is MODELED at roughly 45% of revenue (~$0.83B); the exact 2024 R/C-vs-Utility split was not confirmed from the filing in this verification, so treat the segment figure as an estimate. Selective acquirer.",
        "website": "https://www.davey.com",
        "source": "src-2"
      },
      {
        "name": "Bartlett Tree Experts (The F.A. Bartlett Tree Expert Co.)",
        "approxRevenue": {
          "value": 481,
          "unit": "million",
          "source": "src-3"
        },
        "ownership": "private",
        "sponsor": "",
        "note": "Fourth-generation family/employee-owned premium residential and commercial tree, shrub and plant health care provider. CORRECTED: ~$481M revenue in 2023 per LM150 (ranked No. 6 on the 2024 LM150). The record's prior $526M figure appears to have been mis-assigned (that figure is SavATree's latest LM150 number). Some later/2025 estimates put Bartlett revenue higher. Active tuck-in acquirer.",
        "website": "https://www.bartlett.com",
        "source": "src-3"
      },
      {
        "name": "SavATree",
        "approxRevenue": {
          "value": 526.9,
          "unit": "million",
          "source": "src-3"
        },
        "ownership": "PE-backed",
        "sponsor": "Apax Partners",
        "note": "PE-backed residential/commercial tree, shrub and lawn care consolidator (founded 1978; HQ Bedford Hills, NY). CORRECTED to ~$526.9M (most recent LM150) from the record's $479M (a prior-year LM150 figure; revenue has ranged $403M -> $479M -> $526.9M across recent LM150 editions). Operates 58 locations across 27 states. Grew via 27+ add-ons under CI Capital, then sold to Apax funds (closed Q4 2021); remains an active acquirer.",
        "website": "https://www.savatree.com",
        "source": "src-4"
      }
    ],
    "rollups": [
      {
        "platform": "TreeServe",
        "sponsor": "Soundcore Capital Partners",
        "thesis": "Buy-and-build platform (Soundcore's 12th) consolidating residential-focused tree care across high-growth MSAs in the Northeast, Southeast and Midwest; services span trimming/pruning, tree and stump removal, plant/shrub health care, and emergency storm response.",
        "notableAddOns": "Formed March 2025 via investment in Princeton Tree Care (NJ) and Clauser Tree Care (PA) as founding platforms; subsequently added Dave Leonard Tree Specialists (KY), JL Tree Service (VA), and Schneider Tree Care (Greenville, SC).",
        "link": "https://www.prnewswire.com/news-releases/soundcore-launches-its-12th-platform-with-the-formation-of-treeserve-302419253.html",
        "linkType": "press-release",
        "source": "src-5"
      },
      {
        "platform": "SavATree",
        "sponsor": "Apax Partners",
        "thesis": "Established residential/commercial tree, shrub and lawn care roll-up; multi-state branch expansion (58 locations across 27 states) via organic growth plus a steady cadence of regional add-on acquisitions.",
        "notableAddOns": "27+ add-on acquisitions across its history under CI Capital; continued bolt-ons under Apax ownership.",
        "link": "https://www.apax.com/news-views/apax-funds-to-acquire-savatree/",
        "linkType": "press-release",
        "source": "src-4"
      },
      {
        "platform": "Monster Tree Service",
        "sponsor": "Apax Partners (via Authority Brands)",
        "thesis": "Franchise-based national residential tree care roll-up under Authority Brands' multi-brand home-services platform (Authority Brands is Apax-backed); consolidates the fragmented residential market through franchised, certified-arborist-led local operators rather than direct equity acquisition. Described as the first national tree service franchise, with 140+ locations.",
        "notableAddOns": "Acquired by Authority Brands in 2020; ongoing franchise/territory expansion through 2024-2025.",
        "link": "https://www.authoritybrands.com/our-brands/monster-tree-service/",
        "linkType": "company",
        "source": "src-6"
      }
    ],
    "fragmentation": {
      "score": 5,
      "rationale": "Highly fragmented. IBISWorld reports the US tree trimming/care industry has well over 100,000 establishments (other trade sources cite 130,000-138,000 tree service businesses); the vast majority are solo/small local operators. No single firm controls more than ~5% of the market; the largest pure-play residential/commercial players (Davey R/C ~$0.83B, SavATree ~$527M, Bartlett ~$481M) are each only ~1-3% of a ~$25.5B residential TAM, and the top 5 combined hold well under 15% share. Local reputation and on-site, high-touch service keep demand intensely regional.",
      "source": "src-1"
    },
    "rollupIntensity": {
      "score": 5,
      "rationale": "Very active. Trade and legal coverage describes 50+ private-equity firms actively pursuing platform and add-on investments across seasonal/landscape services including tree care, with multiple distinct PE-backed residential platforms rolling up simultaneously: Soundcore's TreeServe (launched Mar 2025; 5 acquisitions in under a year), Apax-backed SavATree (27+ add-ons), Apax/Authority Brands' Monster Tree Service franchise system, plus others (e.g., CPS Capital's Tree Care Partners). Reported EBITDA multiples cluster in the mid-single digits (~3.5x-5.0x) for typical assets, ranging up to ~9.5x for premium platforms. NOTE: the record's prior precise annual deal counts (22 in 2023 -> 65 in 2024 -> 100+ in 2025) and the exact add-on-vs-platform multiple split (4-5x vs 8-9.5x) were NOT corroborated by the cited sources and have been removed; founder retirements and recurring/storm-driven revenue remain the documented drivers."
    },
    "sources": [
      {
        "id": "src-1",
        "publisher": "IBISWorld",
        "title": "Tree Trimming Services in the US - Market Size & Industry Statistics (NAICS 6064)",
        "url": "https://www.ibisworld.com/united-states/market-size/tree-trimming-services/6064/",
        "type": "market-research",
        "dateAccessed": "2026-06-22"
      },
      {
        "id": "src-2",
        "publisher": "The Davey Tree Expert Company / Wikipedia (corroboration)",
        "title": "Davey Tree Expert Co. 2024 revenue (~$1.841B) and segment structure (Residential/Commercial vs. Utility)",
        "url": "https://en.wikipedia.org/wiki/Davey_Tree_Expert_Company",
        "type": "trade-press",
        "dateAccessed": "2026-06-22"
      },
      {
        "id": "src-3",
        "publisher": "Landscape Management (LM150)",
        "title": "LM150 rankings - Bartlett Tree Experts (~$481M, 2023) and SavATree (~$526.9M, latest)",
        "url": "https://www.bartlett.com/news/Bartlett-Ranked-6-Landscape-Management-Top-150",
        "type": "trade-press",
        "dateAccessed": "2026-06-22"
      },
      {
        "id": "src-4",
        "publisher": "Apax Partners",
        "title": "Apax Funds to acquire SavATree",
        "url": "https://www.apax.com/news-views/apax-funds-to-acquire-savatree/",
        "type": "trade-press",
        "dateAccessed": "2026-06-22"
      },
      {
        "id": "src-5",
        "publisher": "PR Newswire / Soundcore Capital Partners",
        "title": "Soundcore Launches Its 12th Platform with the Formation of TreeServe",
        "url": "https://www.prnewswire.com/news-releases/soundcore-launches-its-12th-platform-with-the-formation-of-treeserve-302419253.html",
        "type": "trade-press",
        "dateAccessed": "2026-06-22"
      },
      {
        "id": "src-6",
        "publisher": "Authority Brands",
        "title": "Monster Tree Service Franchise | Authority Brands",
        "url": "https://www.authoritybrands.com/our-brands/monster-tree-service/",
        "type": "trade-press",
        "dateAccessed": "2026-06-22"
      },
      {
        "id": "src-7",
        "publisher": "PE Professional",
        "title": "Soundcore's TreeServe Platform Branches Out with Two More Acquisitions (Dave Leonard, JL Tree)",
        "url": "https://peprofessional.com/2025/09/treeserve-expands-multi-regional-platform-with-acquisitions-of-dave-leonard-tree-specialists-and-jl-tree-service/",
        "type": "trade-press",
        "dateAccessed": "2026-06-22"
      },
      {
        "id": "src-8",
        "publisher": "Green Industry Law",
        "title": "Forests of Deals: The Rise of M&A in the U.S. Tree-Care Industry",
        "url": "https://greenindustrylaw.com/forests-of-deals-the-rise-of-ma-in-the-u-s-tree-care-industry/",
        "type": "trade-press",
        "dateAccessed": "2026-06-22"
      }
    ]
  },
  "landscaping": {
    "dataStatus": "complete",
    "confidence": "medium",
    "tam": {
      "total": {
        "value": 112,
        "unit": "billion",
        "source": "src-1"
      },
      "newConstruction": {
        "value": 17,
        "unit": "billion",
        "assumption": "Not directly reported for residential landscaping. Modeled: most US residential landscape demand is recurring maintenance plus renovation/redesign of the ~145M unit existing housing stock; only a modest slice is tied to new-home installs. With single-family completions running ~1M/yr against a vast installed base, new-construction landscape install is estimated at ~15% of the residential total (112B x 0.15 = ~17B). Cross-checks against Census new single-family construction spending, where lot landscaping is a small line item per home. MODELED, not directly sourced.",
        "modeledEstimate": true,
        "source": "src-5"
      },
      "renovationRepair": {
        "value": 95,
        "unit": "billion",
        "assumption": "Modeled as the residual ~85% of the residential total, covering recurring lawn maintenance/lawn care, landscape renovation/redesign, and repair/replacement on existing homes. Mordor reports Maintenance services at ~44.3% of the total US landscaping market and design-build/development as the fastest-growing residual; the bulk of residential work is performed on the existing housing stock rather than new builds. MODELED residual, not directly sourced.",
        "modeledEstimate": true,
        "source": "src-3"
      },
      "methodology": "Top-down. Start from US Landscaping Services market size: IBISWorld reports $176.7B (2026, verified); Mordor reports ~$186-188B (2025) for the broader US landscaping market. Take a mid-point industry size of roughly $185B (2025) for all-segment US landscaping/lawn-care services. Apply Mordor Intelligence's reported residential application share of 60.28% (2025, verified) -> ~$112B residential. New-construction vs renovation/repair split is not separately published, so it is modeled (see split assumptions): ~15% new-construction install (~$17B), ~85% renovation/repair/recurring-maintenance on the existing housing stock (~$95B). Both top-line inputs (IBISWorld $176.7B; Mordor 60.28% residential) independently verified; the new-con/reno split remains a model, hence medium confidence.",
      "confidence": "medium",
      "year": 2025
    },
    "topPlayers": [
      {
        "name": "TruGreen",
        "approxRevenue": {
          "value": 2.9,
          "unit": "billion",
          "source": "src-6"
        },
        "ownership": "PE-backed",
        "sponsor": "Clayton, Dubilier & Rice",
        "note": "Largest US lawn care company; subscription-based residential lawn, tree and shrub care across ~300+ locations. Majority owned by CD&R since the 2014/2016 Scotts LawnService merger. NOTE: TruGreen is private; the ~$2.9B figure is a third-party ESTIMATE (Statista/secondary aggregators cluster at $2.7-2.9B), not a filing - treat as approximate.",
        "website": "https://www.trugreen.com",
        "source": "src-6"
      },
      {
        "name": "Weed Man (Weed Man USA / Turf Holdings)",
        "approxRevenue": {
          "value": 387,
          "unit": "million",
          "source": "src-8"
        },
        "ownership": "franchise",
        "sponsor": "",
        "note": "Largest franchised lawn care brand in North America; 930+ territories across North America. CORRECTED: 2024 US system-wide sales were 'over $387 million' per the Feb 2025 announcement (record originally cited $371.5M, which the source does not support). Heavily residential lawn fertilization/weed control; targeting $1B system sales.",
        "website": "https://www.weedman.com",
        "source": "src-8"
      },
      {
        "name": "BrightView Holdings",
        "approxRevenue": {
          "value": 2.77,
          "unit": "billion",
          "source": "src-7"
        },
        "ownership": "public",
        "sponsor": "",
        "note": "Largest US landscaping company (NYSE: BV), ~$2.77B FY2024 revenue (verified). Predominantly commercial maintenance and design-build; residential is a minority of mix, so its residential-only revenue is materially below TruGreen's.",
        "website": "https://www.brightview.com",
        "source": "src-7"
      }
    ],
    "rollups": [
      {
        "platform": "ExperiGreen Lawn Care + Turf Masters Brands (merged under Turf Masters Brands name)",
        "sponsor": "Wind Point Partners",
        "thesis": "Build a national residential lawn care platform by rolling up regional fertilization/weed-control operators into a single multi-state brand with shared route density and back office.",
        "notableAddOns": "Turf Masters Brands (acquired by Wind Point and merged with ExperiGreen, early 2025). Combined entity serves nearly 400,000 residential customers across 16 states and 2 Canadian provinces, with 1,800+ employees. Turf Masters add-ons include Cardinal Lawns (2025) and Executive/Stewart/Tender (2024). VERIFIED against the Lawn & Landscape report.",
        "link": "https://www.lawnandlandscape.com/news/turf-masters-brands-sold-to-experigreen-lawn-care-parent-company/",
        "linkType": "press-release",
        "source": "src-9"
      }
    ],
    "fragmentation": {
      "score": 5,
      "rationale": "Highly fragmented (VERIFIED qualitatively by Mordor: 'highly fragmented', 'Low' market concentration). The five largest firms (BrightView, Davey, TruGreen, Ruppert, Gothic) collectively hold only a small share of the US lawn care/landscaping market; residential is dominated by local/regional owner-operators. NOTE: IBISWorld reports ~556k landscaping-services businesses; the specific '~76,769 establishments' figure was not confirmed on the cited Mordor page but does not change the score.",
      "source": "src-10"
    },
    "rollupIntensity": {
      "score": 4,
      "rationale": "Very active PE consolidation. Wind Point's ExperiGreen + Turf Masters merger (early 2025) and the combined platform's multiple add-ons (Cardinal Lawns; Executive/Stewart/Tender) show aggressive residential lawn-care roll-up (verified). Broader landscaping/property-maintenance roll-up by large sponsors (e.g., Apax-backed platforms) is also active. Slightly below 5 because much activity concentrates in lawn-care chemical services and commercial; the long tail of residential maintenance remains largely untouched by consolidators. NOTE: the '~89 acquisitions by Apax' claim from the original record was not independently verified and was removed from the rationale."
    },
    "sources": [
      {
        "id": "src-1",
        "publisher": "Mordor Intelligence / IBISWorld (derived mid-point)",
        "title": "US Landscaping market ~$185B (2025); residential 60.28% share (verified) -> ~$112B residential",
        "url": "https://www.mordorintelligence.com/industry-reports/united-states-landscaping-market",
        "type": "market-research",
        "dateAccessed": "2026-06-22"
      },
      {
        "id": "src-2",
        "publisher": "IBISWorld",
        "title": "Landscaping Services in the US - Market Size ($176.7B, 2026, verified)",
        "url": "https://www.ibisworld.com/united-states/market-size/landscaping-services/1497/",
        "type": "market-research",
        "dateAccessed": "2026-06-22"
      },
      {
        "id": "src-3",
        "publisher": "Mordor Intelligence",
        "title": "United States Landscaping Market - service-type split (Maintenance ~44.3%, Design-Build fastest-growing)",
        "url": "https://www.mordorintelligence.com/industry-reports/united-states-landscaping-market",
        "type": "market-research",
        "dateAccessed": "2026-06-22"
      },
      {
        "id": "src-5",
        "publisher": "US Census Bureau",
        "title": "New Residential Construction / Value of Construction Put in Place (context for modeled new-construction share)",
        "url": "https://www.census.gov/construction/nrc/current/index.html",
        "type": "government",
        "dateAccessed": "2026-06-22"
      },
      {
        "id": "src-6",
        "publisher": "Statista / company profiles (TruGreen)",
        "title": "TruGreen revenue estimate (~$2.7-2.9B; private company, third-party estimate)",
        "url": "https://www.statista.com/statistics/900223/annual-revenue-of-trugreen-cos/",
        "type": "market-research",
        "dateAccessed": "2026-06-22"
      },
      {
        "id": "src-7",
        "publisher": "US Securities and Exchange Commission",
        "title": "BrightView Holdings Form 8-K FY2024 (~$2.77B revenue; figure independently corroborated)",
        "url": "https://www.sec.gov/Archives/edgar/data/0001734713/000095017024126344/bv-ex99_1.htm",
        "type": "filing",
        "dateAccessed": "2026-06-22"
      },
      {
        "id": "src-8",
        "publisher": "International Franchise Association / PRNewswire",
        "title": "Weed Man revamps strategy to target $1B in system sales (2024 'over $387 million' US system-wide)",
        "url": "https://www.franchise.org/2025/02/weed-man-revamps-strategy-to-target-1-billion-in-system-sales/",
        "type": "trade-press",
        "dateAccessed": "2026-06-22"
      },
      {
        "id": "src-9",
        "publisher": "Lawn & Landscape",
        "title": "Turf Masters Brands sold to ExperiGreen Lawn Care parent (Wind Point Partners); ~400K residential customers, 16 states",
        "url": "https://www.lawnandlandscape.com/news/turf-masters-brands-sold-to-experigreen-lawn-care-parent-company/",
        "type": "trade-press",
        "dateAccessed": "2026-06-22"
      },
      {
        "id": "src-10",
        "publisher": "Mordor Intelligence",
        "title": "US Lawn Care market - highly fragmented; top 5 (BrightView, Davey, TruGreen, Ruppert, Gothic) hold small combined share; 'Low' concentration",
        "url": "https://www.mordorintelligence.com/industry-reports/united-states-lawn-care-market",
        "type": "market-research",
        "dateAccessed": "2026-06-22"
      },
      {
        "id": "src-11",
        "publisher": "Clayton, Dubilier & Rice",
        "title": "TruGreen portfolio / ownership (CD&R majority owner)",
        "url": "https://www.cdr.com/portfolio/trugreen",
        "type": "trade-press",
        "dateAccessed": "2026-06-22"
      }
    ]
  },
  "pest-control": {
    "dataStatus": "complete",
    "confidence": "high",
    "tam": {
      "total": {
        "value": 8.85,
        "unit": "billion",
        "source": "src-2"
      },
      "newConstruction": {
        "value": 0.62,
        "unit": "billion",
        "modeledEstimate": true,
        "assumption": "Pest control is overwhelmingly a recurring service to the existing housing stock; new-construction exposure is limited to builder-paid pre-construction termite soil treatment / pretreats on new single-family starts. New-construction-linked work modeled at ~7% of the ~$8.85B residential total (pre-construction termite + initial new-home treatments). NPMA does not separately report a new-vs-existing split, so this is a modeled allocation.",
        "source": "src-3"
      },
      "renovationRepair": {
        "value": 8.23,
        "unit": "billion",
        "modeledEstimate": true,
        "assumption": "Residual ~93% of the residential total - recurring/repeat service to existing homes (quarterly/bi-monthly general pest, termite renewals & bait monitoring, rodent, bed bug, mosquito). Mapped to the renovation/repair/ongoing-service-to-existing-stock bucket because pest control on existing homes is recurring maintenance spend, not new construction. NPMA reports the large majority of residential service revenue is recurring.",
        "source": "src-3"
      },
      "methodology": "Top-down. Anchor on the NPMA / Specialty Consultants 'Strategic Analysis of the U.S. Structural Pest Control Industry' total US structural service revenue of $12.654B for 2024 (residential + commercial structural pest control; +7.9% over 2023's $11.723B) - VERIFIED against NPMA release. Apply the residential share of total industry revenue (~70% per IBISWorld + NPMA-cited segmentation) to derive ~$8.85B US residential. IBISWorld's broader ~$25.4B 'pest control' figure uses a wider scope (incl. fumigation/agricultural) and is used only as a directional cross-check, not the TAM base. The new-construction vs renovation/repair split is not separately reported by NPMA, so it is modeled: pest control is fundamentally a recurring service to existing housing stock, with a small (~7%) modeled slice for builder-paid pre-construction termite pretreatment tied to new single-family construction.",
      "year": 2024,
      "confidence": "high"
    },
    "topPlayers": [
      {
        "name": "Rentokil-Terminix (Rentokil Initial plc, North America)",
        "approxRevenue": {
          "value": 4.1,
          "unit": "billion",
          "source": "src-5"
        },
        "ownership": "public",
        "sponsor": "",
        "note": "CORRECTED during verification. Largest US structural pest operator post-Terminix merger. Rentokil Initial group FY2024 revenue £5.44B; North America was ~60% of group (~£3.26B / ~$4.1B at ~1.27 USD/GBP), the large majority of which is pest control (Terminix-branded US residential/termite/SME plus commercial). The original record's $2.06B (£1,614m) figure was an H1 2024 North America pest-control interim figure mislabeled as full-year - corrected here to the full-year North America scale. Exact FY2024 NA pest-control line not cleanly extractable from the primary PDF via automated fetch, so this is a verified-directional estimate (NA ~60% of group). London/NYSE listed (RTO).",
        "website": "https://www.rentokil-initial.com",
        "source": "src-5"
      },
      {
        "name": "Rollins, Inc. (Orkin / HomeTeam / Clark / Northwest)",
        "approxRevenue": {
          "value": 1.535,
          "unit": "billion",
          "source": "src-4"
        },
        "ownership": "public",
        "sponsor": "",
        "note": "VERIFIED against primary release: residential contract revenue exactly $1,535,104K in FY2024 (global; ~93% of Rollins revenue is US). Total company revenue $3,388,708K; commercial $1,125,964K; termite/ancillary $688,186K. Largest pure pest-focused public consolidator; NYSE: ROL.",
        "website": "https://www.rollins.com",
        "source": "src-4"
      },
      {
        "name": "Aptive Environmental",
        "approxRevenue": {
          "value": 533,
          "unit": "million",
          "source": "src-7"
        },
        "ownership": "PE-backed",
        "sponsor": "Citation Capital",
        "note": "Largest US pure-play residential challenger; ~500K+ households across 34 states. Citation Capital took majority stake Aug 27, 2024 (VERIFIED via PR Newswire / Simpson Thacher / MergerLinks) - this superseded the prior owner. Revenue figure is a third-party estimate (Growjo; private co.) and could not be re-fetched (403); third-party estimates for Aptive vary widely, so treat with low confidence.",
        "website": "https://aptivepestcontrol.com",
        "source": "src-7"
      }
    ],
    "rollups": [
      {
        "platform": "Aptive Environmental",
        "sponsor": "Citation Capital",
        "thesis": "Back a founder-led, tech-enabled residential pest platform and accelerate organic growth plus M&A across the 34-state footprint.",
        "notableAddOns": "",
        "link": "https://www.prnewswire.com/news-releases/citation-capital-partners-with-aptive-environmental-to-propel-innovation-and-expansion-302231586.html",
        "linkType": "press-release",
        "source": "src-6"
      },
      {
        "platform": "Certus Pest Control",
        "sponsor": "Imperial Capital Group (with Liberty Mutual Investments)",
        "thesis": "Acquire and integrate regional residential/commercial pest operators into a national platform; one of the most active US roll-ups by deal count.",
        "notableAddOns": "7 disclosed acquisitions in 2024 (per PE roll-up tracker) - single most active US pest-control acquirer that year",
        "link": "https://ctacquisitions.com/pest-control-pe-rollup-tracker-2026/",
        "linkType": "company",
        "source": "src-8"
      },
      {
        "platform": "PestCo Holdings",
        "sponsor": "Thompson Street Capital Partners",
        "thesis": "Consolidate family-owned residential pest operators into a regional/national platform; 20+ acquisitions since 2021 founding.",
        "notableAddOns": "6 disclosed acquisitions in 2024; 20+ since 2021",
        "link": "https://ctacquisitions.com/pest-control-pe-rollup-tracker-2026/",
        "linkType": "company",
        "source": "src-8"
      },
      {
        "platform": "Hawx Pest Control",
        "sponsor": "Aurora Capital Partners",
        "thesis": "Scale a door-to-door residential pest brand across high-growth Sun Belt markets with tuck-in acquisitions.",
        "notableAddOns": "",
        "link": "https://ctacquisitions.com/pest-control-pe-rollup-tracker-2026/",
        "linkType": "company",
        "source": "src-8"
      }
    ],
    "fragmentation": {
      "score": 5,
      "rationale": "Highly fragmented: ~32,000-33,000 US pest control businesses in 2024-2025 (IBISWorld VERIFIED), with the long tail running only one or two locations. Even the two largest players (Rentokil-Terminix and Rollins) together hold a minority of total US revenue; IBISWorld characterizes the industry as low market-share concentration. Thousands of family-owned local operators dominate the long tail - classic SMB roll-up fragmentation.",
      "source": "src-9"
    },
    "rollupIntensity": {
      "score": 5,
      "rationale": "Very active. Consolidation is the defining feature of the industry: Rentokil and Rollins each close dozens of tuck-ins annually, and there are 20+ identified PE-backed residential roll-up platforms (Aptive/Citation, Certus/Imperial+Liberty Mutual, PestCo/Thompson Street, Hawx/Aurora, plus Greenix, Anticimex/EQT, Shore, Trivest, and others). Recurring revenue (large majority of residential), high margins, and recession resistance make pest control one of the most consistently acquired home-services categories."
    },
    "sources": [
      {
        "id": "src-1",
        "publisher": "IBISWorld",
        "title": "Pest Control in the US - Market Size (2024-2025)",
        "url": "https://www.ibisworld.com/united-states/market-size/pest-control/1495/",
        "type": "market-research",
        "dateAccessed": "2026-06-22"
      },
      {
        "id": "src-2",
        "publisher": "National Pest Management Association (NPMA)",
        "title": "U.S. Pest Control Industry Shows Remarkable Resilience with Nearly 8% Growth in 2024",
        "url": "https://www.npmapestworld.org/your-business/latest-news/us-pest-control-industry-shows-remarkable-resilience-with-nearly-8-growth-in-2024/",
        "type": "trade-association",
        "dateAccessed": "2026-06-22"
      },
      {
        "id": "src-3",
        "publisher": "National Pest Management Association (NPMA) / Specialty Consultants, LLC",
        "title": "U.S. Pest Control Industry Sustains Steady Growth with 6% Increase in 2025",
        "url": "https://www.npmapestworld.org/your-business/latest-news/us-pest-control-industry-sustains-steady-growth-with-6-increase-in-2025/",
        "type": "trade-association",
        "dateAccessed": "2026-06-22"
      },
      {
        "id": "src-4",
        "publisher": "Rollins, Inc. / PR Newswire",
        "title": "Rollins, Inc. Reports Fourth Quarter and Full Year 2024 Financial Results",
        "url": "https://www.prnewswire.com/news-releases/rollins-inc-reports-fourth-quarter-and-full-year-2024-financial-results-302375212.html",
        "type": "filing",
        "dateAccessed": "2026-06-22"
      },
      {
        "id": "src-5",
        "publisher": "Rentokil Initial plc",
        "title": "Rentokil Initial 2024 Preliminary Results (full-year North America segment revenue)",
        "url": "https://www.rentokil-initial.com/~/media/Files/R/Rentokil/documents/2024-preliminary-results.pdf",
        "type": "filing",
        "dateAccessed": "2026-06-22"
      },
      {
        "id": "src-6",
        "publisher": "Citation Capital / PR Newswire",
        "title": "Citation Capital Partners with Aptive Environmental to Propel Innovation and Expansion",
        "url": "https://www.prnewswire.com/news-releases/citation-capital-partners-with-aptive-environmental-to-propel-innovation-and-expansion-302231586.html",
        "type": "trade-press",
        "dateAccessed": "2026-06-22"
      },
      {
        "id": "src-7",
        "publisher": "Growjo",
        "title": "Aptive Environmental: Revenue, Competitors, Alternatives (revenue estimate)",
        "url": "https://growjo.com/company/Aptive_Environmental",
        "type": "market-research",
        "dateAccessed": "2026-06-22"
      },
      {
        "id": "src-8",
        "publisher": "CT Acquisitions",
        "title": "2026 Pest Control PE Roll-Up Tracker: 22 Platforms",
        "url": "https://ctacquisitions.com/pest-control-pe-rollup-tracker-2026/",
        "type": "trade-press",
        "dateAccessed": "2026-06-22"
      },
      {
        "id": "src-9",
        "publisher": "IBISWorld",
        "title": "Pest Control in the US - Number of Businesses Statistics",
        "url": "https://www.ibisworld.com/united-states/number-of-businesses/pest-control/1495/",
        "type": "market-research",
        "dateAccessed": "2026-06-22"
      }
    ]
  },
  "pool-spa": {
    "dataStatus": "complete",
    "confidence": "medium",
    "tam": {
      "total": {
        "value": 31,
        "unit": "billion",
        "source": "src-1"
      },
      "newConstruction": {
        "value": 16.2,
        "unit": "billion",
        "source": "src-2",
        "modeledEstimate": false,
        "assumption": "IBISWorld 'Swimming Pool Construction in the US' industry revenue, $16.2B in 2024 (verified: IBISWorld market-size page confirms $16.2B 2024, +1.2%, $16.5B 2025). This construction industry captures new inground/aboveground builds plus a portion of major builder-performed renovation/replacement. Used as the new-construction proxy. Slightly overlaps renovation, so the modeled service figure is treated as additive recurring care rather than double-counting builder remodels."
      },
      "renovationRepair": {
        "value": 15,
        "unit": "billion",
        "source": "src-1",
        "modeledEstimate": true,
        "assumption": "Modeled. PHTA framing (verified) cites a ~$15B pool care/maintenance/repair aftermarket within the $62B value chain, with maintenance ~64% of industry revenue and recurring across ~14M US pools / ~125,000 businesses. Used here as the recurring renovation/repair/replacement + service portion, separate from new-build construction. No government source (Census VIP / JCHS LIRA) breaks out pools specifically, so the ~$15B aftermarket is the modeled non-new portion. The $31B total = ~$16.2B construction + ~$15B aftermarket/service."
      },
      "methodology": "Bottom-up by segment. The PHTA headline of $62B covers the entire pool/hot-tub/spa value chain (incl. hot tubs/spas, retail accessories, wholesale/manufacturer chain) and is NOT the residential demand-side TAM. To isolate US residential construction + renovation/repair + recurring service, two demand-side segments were summed: (1) IBISWorld Swimming Pool Construction industry revenue ~$16.2B (2024, verified), and (2) the PHTA-cited ~$15B annual pool care/maintenance/repair aftermarket (verified). Sum ~= $31B. New-vs-renovation split is modeled because no government source breaks out pools. Both anchor figures independently verified.",
      "confidence": "medium",
      "year": 2024
    },
    "topPlayers": [
      {
        "name": "Pool Corporation (POOLCORP)",
        "approxRevenue": {
          "value": 5.3,
          "unit": "billion",
          "source": "src-3"
        },
        "ownership": "public",
        "sponsor": "",
        "note": "World's largest wholesale distributor of pool supplies/equipment (Nasdaq: POOL); $5.3B net sales FY2024 (verified, -4% vs 2023; op income $617.2M), majority recurring maintenance products. Distributor, not a residential service operator, but the dominant US pool-industry public company by revenue.",
        "website": "https://www.poolcorp.com",
        "source": "src-3"
      },
      {
        "name": "Leslie's, Inc.",
        "approxRevenue": {
          "value": 1.33,
          "unit": "billion",
          "source": "src-4"
        },
        "ownership": "public",
        "sponsor": "",
        "note": "Largest direct-to-consumer pool/spa retailer and service provider (Nasdaq: LESL); FY2024 (ended Sept 28, 2024) total sales $1,330.1M, down 8.3% (verified via IR release); residential retail plus in-store/in-home water testing and service.",
        "website": "https://lesliespool.com",
        "source": "src-4"
      },
      {
        "name": "SPS PoolCare",
        "approxRevenue": {
          "value": 87,
          "unit": "million",
          "source": "src-5"
        },
        "ownership": "PE-backed",
        "sponsor": "Storr Group",
        "note": "Largest US pure-play residential pool service operator (PSN Top 50 #1, 2025 list); $87M service revenue / 33,713 accounts in 2024 (verified via PSN/Pool & Spa News); serial consolidator with 191 acquisitions since 2021; pro-forma combined revenue rises materially after the Jan 2026 Pool Troopers add-on ($57M / 16,182 accounts, #2 on PSN list).",
        "website": "https://spspoolcare.com",
        "source": "src-5"
      }
    ],
    "rollups": [
      {
        "platform": "SPS PoolCare",
        "sponsor": "Storr Group (debt from Balance Point Capital)",
        "thesis": "Buy-and-build consolidation of route-based recurring pool service businesses; combine top operators to gain regional density and commercial reach across FL/Southwest. Verified: Storr Group platform investor, Balance Point Capital debt provider, 191 acquisitions since 2021.",
        "notableAddOns": "Pool Troopers (closed Jan 26, 2026; $57M rev / 16,182 accounts, #2 on PSN Top 50; largest add-on to date; seller PE Shoreline Equity retained minority); 191 total acquisitions; ~42,000 weekly recurring customers across 19 markets in 5 states post-deal (all verified via PSN/PRNewswire/PE Professional).",
        "link": "https://www.poolspanews.com/business/sps-poolcare-acquires-pool-troopers/",
        "linkType": "press-release",
        "source": "src-5"
      },
      {
        "platform": "Yummy Pools",
        "sponsor": "Trivest Partners",
        "thesis": "Build a leading residential pool service platform via organic growth plus acquisitions of local cleaning/maintenance/repair routes; Trivest's entry into pool services consolidation via June 2024 majority recapitalization (verified via BusinessWire/Founders Advisors/PE Professional).",
        "notableAddOns": "Atlanta-based Yummy Pools (founders Casey Graham/Renee Weber) had already grown via several local pool service/maintenance tuck-ins; Trivest's June 2024 recap provides growth capital for further acquisitions (specific add-on names not disclosed).",
        "link": "https://peprofessional.com/2024/06/trivest-acquires-yummy-to-begin-pool-services-consolidation/",
        "linkType": "press-release",
        "source": "src-6"
      },
      {
        "platform": "America's Swimming Pool Company (ASP) / Authority Brands",
        "sponsor": "Apax Partners",
        "thesis": "Franchise-led consolidation of residential pool service; ASP (largest US pool service franchise) rolled into Apax-backed multi-brand home-services platform Authority Brands. NOTE: the Apax/Authority Brands acquisition of ASP dates to Oct 2018 (verified), not a 2024 event; 2024 figures below are subsequent operating/growth stats.",
        "notableAddOns": "ASP operating 350+ cities / 380+ franchise locations (was 21 states at 2018 acquisition; reportedly expanded since); franchise growth continued within the Apax-backed Authority Brands portfolio through 2024.",
        "link": "https://www.apax.com/news-views/authority-brands-acquires-america-s-swimming-pool-company/",
        "linkType": "press-release",
        "source": "src-7"
      }
    ],
    "fragmentation": {
      "score": 5,
      "rationale": "Highly fragmented (verified). IBISWorld reports US Swimming Pool Construction as highly fragmented with no firm >5% share, across ~21,500-22,000 construction businesses. PHTA (verified) cites ~125,000 mostly small businesses serving ~14M pools, largely 'one-man-and-a-truck' service shops; the largest pure-play service consolidator (SPS PoolCare, ~$87M) has <1% of the ~$15B service aftermarket. Even SPS + Pool Troopers combined (~$144M direct) is a low-single-digit-percent share.",
      "source": "src-2"
    },
    "rollupIntensity": {
      "score": 4,
      "rationale": "Very active and accelerating (verified). Multiple PE-backed platforms are rolling up route-based residential pool service: SPS PoolCare (Storr Group) with 191 acquisitions including the Jan 2026 Pool Troopers deal, Trivest's Yummy Pools entering consolidation via June 2024 recap, and long-standing Apax-backed Authority Brands ASP franchise. Route-based recurring revenue commands premium multiples, drawing strong PE interest. Not a 5 because absolute consolidated share remains tiny against a ~125,000-operator base."
    },
    "sources": [
      {
        "id": "src-1",
        "publisher": "Pool & Hot Tub Alliance (PHTA)",
        "title": "Pool & Hot Tub Alliance / industry framing ($62B value chain; ~$15B care & maintenance aftermarket, maintenance ~64% of revenue; ~14M pools, ~125,000 businesses) - figures verified via PHTA and industry triangulation",
        "url": "https://www.phta.org/",
        "type": "trade-association",
        "dateAccessed": "2026-06-22"
      },
      {
        "id": "src-2",
        "publisher": "IBISWorld",
        "title": "Swimming Pool Construction in the US - Market Size & Number of Businesses (2024: $16.2B, +1.2%; 2025: $16.5B; ~21,500-22,000 businesses; highly fragmented, no firm >5% share) - VERIFIED",
        "url": "https://www.ibisworld.com/united-states/market-size/swimming-pool-construction/2021/",
        "type": "market-research",
        "dateAccessed": "2026-06-22"
      },
      {
        "id": "src-3",
        "publisher": "Pool Corporation (POOLCORP IR)",
        "title": "Pool Corporation Reports Year End and Fourth Quarter 2024 Results ($5.3B net sales FY2024, -4%; op income $617.2M) - VERIFIED",
        "url": "https://ir.poolcorp.com/pool-corporation-reports-year-end-and-fourth-quarter-2024-results-provides-2025-earnings-guidance/",
        "type": "filing",
        "dateAccessed": "2026-06-22"
      },
      {
        "id": "src-4",
        "publisher": "Leslie's, Inc. (Investor Relations)",
        "title": "Leslie's, Inc. Announces Fourth Quarter & Fiscal 2024 Financial Results (FY2024 total sales $1,330.1M, -8.3%; year ended Sept 28, 2024) - VERIFIED",
        "url": "https://ir.lesliespool.com/news-events/press-releases/detail/203/leslies-inc-announces-fourth-quarter-fiscal-2024",
        "type": "filing",
        "dateAccessed": "2026-06-22"
      },
      {
        "id": "src-5",
        "publisher": "Pool & Spa News",
        "title": "SPS PoolCare Acquires Pool Troopers (SPS $87M rev / 33,713 accounts 2024; Pool Troopers $57M / 16,182 accounts; 191 acquisitions since 2021; Storr Group platform; Balance Point Capital debt) - VERIFIED",
        "url": "https://www.poolspanews.com/business/sps-poolcare-acquires-pool-troopers/",
        "type": "trade-press",
        "dateAccessed": "2026-06-22"
      },
      {
        "id": "src-6",
        "publisher": "PE Professional",
        "title": "Trivest Acquires Yummy to Begin Pool Services Consolidation (June 2024 majority recap; Trivest Partners; Yummy Pools platform) - VERIFIED (also BusinessWire / Founders Advisors)",
        "url": "https://peprofessional.com/2024/06/trivest-acquires-yummy-to-begin-pool-services-consolidation/",
        "type": "trade-press",
        "dateAccessed": "2026-06-22"
      },
      {
        "id": "src-7",
        "publisher": "Apax Partners",
        "title": "Authority Brands acquires America's Swimming Pool Company (Apax-backed Authority Brands; ASP largest US pool service franchise) - VERIFIED, but note acquisition dates to Oct 2018, not 2024",
        "url": "https://www.apax.com/news-views/authority-brands-acquires-america-s-swimming-pool-company/",
        "type": "trade-press",
        "dateAccessed": "2026-06-22"
      }
    ]
  },
  "solar": {
    "dataStatus": "complete",
    "confidence": "medium",
    "tam": {
      "year": 2024,
      "confidence": "medium",
      "methodology": "Bottom-up, modeled (NOT a directly-reported residential dollar figure). Volume from SEIA/Wood Mackenzie US Solar Market Insight 2024 Year-in-Review: ~4.7 GWdc of residential solar installed in 2024 (VERIFIED: SEIA/WoodMac report 4.7 GWdc residential, down 31% YoY). Converted to customer-facing revenue using a blended installed price of ~$3.20/Wdc, bracketed between NREL/DOE's Q1-2024 residential bottom-up benchmark (~$2.68-2.74/Wdc in 2023 dollars, VERIFIED src-5) and EnergySage's reported all-channel CASH median of $3.50/W (VERIFIED src-6; EnergySage marketplace median was $2.50/W, but most retail loan/lease volume transacts above that). 4,700 MWdc x ~$3.20/W ~= $15B solar installation revenue. Add residential battery storage: ~3 GWh / 1,250 MW installed in 2024 (VERIFIED via WoodMac/ACP US Energy Storage Monitor, src-7) at ~$1,000-1,200/kWh installed ~= $3.0-3.6B gross, of which much is co-installed with solar; net ~+$1.5-2.0B incremental to reach a combined residential solar + storage installation TAM of ~$16.5B. New-construction vs retrofit split modeled from Grand View Research's US residential solar PV report (~72% retrofit / ~28% new construction); src-8 returned HTTP 403 on re-check and could NOT be independently re-confirmed - treat the split as a single-vendor, unverified modeled assumption. For SMB-acquisition purposes essentially all independent installer revenue is retrofit; the 28% new-construction figure is vendor-reported and likely overstates the builder-channel share.",
      "total": {
        "value": 16.5,
        "unit": "billion",
        "source": "src-1"
      },
      "newConstruction": {
        "value": 4.6,
        "unit": "billion",
        "modeledEstimate": true,
        "assumption": "~28% of the modeled $16.5B total, per Grand View Research retrofit-vs-new-construction split (single market-research vendor; src-8 could not be re-fetched on verification - HTTP 403; likely overstates builder channel for independent installers). Low confidence.",
        "source": "src-8"
      },
      "renovationRepair": {
        "value": 11.9,
        "unit": "billion",
        "modeledEstimate": true,
        "assumption": "~72% of the modeled $16.5B total (retrofit / replacement on existing homes), per Grand View Research split (single vendor, not re-confirmed on verification). This is the dominant share and the one relevant to SMB rooftop installer acquisitions.",
        "source": "src-8"
      }
    },
    "topPlayers": [
      {
        "name": "Sunrun Inc.",
        "approxRevenue": {
          "value": 2.04,
          "unit": "billion",
          "source": "src-2"
        },
        "ownership": "public",
        "sponsor": "",
        "note": "Largest US residential solar + storage company by revenue and customers (1.05M customers at YE2024). FY2024 total revenue $2.037B (VERIFIED in audited Q4/FY2024 release, src-2). Market-share note: Wood Mackenzie pegs Sunrun's FULL-YEAR US residential market share at ~12-13% in 2024 (src-13/src-10); the often-cited ~19% of new installs and ~45% of new residential storage are Sunrun-reported Q4 2024 new-install figures, narrower than full-year share. NASDAQ: RUN.",
        "website": "https://www.sunrun.com",
        "source": "src-2"
      },
      {
        "name": "Freedom Forever",
        "approxRevenue": {
          "value": 1,
          "unit": "billion",
          "source": "src-9"
        },
        "ownership": "private",
        "sponsor": "",
        "note": "Ranked #1 US residential solar contractor by kW installed on Solar Power World's Top Solar Contractors list, but #2 by national market share (~6-7%, behind Sunrun) per Wood Mackenzie; operated in 30+ states. Reported >$1B gross revenue is an unaudited approximation (private company, no filing) - LOW confidence. VERIFIED: filed Chapter 11 on April 15, 2026 (D. Del., case 26-10522), $500M-$1B liabilities, amid an industry demand slowdown and a Texas AG sales-practices probe.",
        "website": "https://freedomforever.com",
        "source": "src-9"
      },
      {
        "name": "Tesla Energy (Tesla, Inc.)",
        "approxRevenue": {
          "value": null,
          "unit": "billion",
          "source": null
        },
        "ownership": "public",
        "sponsor": "",
        "note": "Historically a top-three US residential solar installer competing with Sunrun, though now increasingly subcontractor-reliant and shifting toward a technology-supplier model (src-10). Tesla does not break out a standalone US residential-solar-installation revenue line, so a clean residential figure cannot be sourced; revenue left null. Powerwall is the #1 residential storage product (~47% share in 2024 per EnergySage). NASDAQ: TSLA.",
        "website": "https://www.tesla.com/energy",
        "source": "src-10"
      }
    ],
    "rollups": [
      {
        "platform": "ION Solar",
        "sponsor": "Greenbelt Capital Partners (with Trilantic Energy Partners, Blackstone Credit, Energy Impact Partners)",
        "thesis": "Growth equity (March 2022) into a market-leading residential rooftop installer (8 states, 200+ MW across 30,000+ households at the time) to fund geographic expansion and adjacent residential energy products; founders retained majority equity.",
        "notableAddOns": "",
        "link": "https://www.businesswire.com/news/home/20220308005508/en/ION-Solar-Secures-Investment-Led-by-Greenbelt-Capital-Partners-Blackstone-Credit-and-EIP",
        "linkType": "press-release",
        "source": "src-11"
      },
      {
        "platform": "Momentum Solar",
        "sponsor": "Advantage Capital",
        "thesis": "PE/community-development capital backing of a turnkey residential rooftop solar installer. NOTE on verification: the documented Advantage Capital investment is a modest ~$4.1M Grow-NJ-program financing from Nov 2018 (job-retention/HQ expansion), NOT a large growth-equity roll-up platform; Momentum is frequently cited among the largest privately-owned residential installers and a post-ITC survivor, but no buy-and-build add-on sequence is documented. Low confidence as a roll-up.",
        "notableAddOns": "",
        "link": "https://www.businesswire.com/news/home/20181128005699/en/Advantage-Capital-Invests-Momentum-Solar-Supporting-Company%E2%80%99s",
        "linkType": "press-release",
        "source": "src-12"
      }
    ],
    "fragmentation": {
      "score": 4,
      "rationale": "Moderately-to-highly fragmented. Per Wood Mackenzie (src-13/src-10), even the #1 player Sunrun held only ~12-13% of the US residential market in 2024 (up from ~11% in 2023), with #2 Freedom Forever at ~6-7%. (The record's earlier 'top five ~35% / Sunrun ~19%' figures were NOT supported by the cited src-13 page, which states Sunrun ~12% full-year; corrected here.) Below the leaders sits a long tail of thousands of small local/regional installers, and several large players have exited via bankruptcy (Freedom Forever Apr-2026; PosiGen distress), reinforcing churn and fragmentation rather than durable consolidation. Score 4 retained - a 12%-share leader implies a fragmented market.",
      "source": "src-13"
    },
    "rollupIntensity": {
      "score": 2,
      "rationale": "Below average and cooling. PE inflows into US solar hit a four-year low in 2024 (~$3.1B Jan 1-Nov 26, ~25% below 2023, only ~four PE deals - VERIFIED via S&P Global Market Intelligence), and 2024-2026 saw distressed Chapter 11 consolidation (Freedom Forever Apr-2026, PosiGen) rather than growth-oriented roll-up sequences. A few standing PE-backed platforms exist (ION Solar/Greenbelt 2022; Momentum Solar/Advantage Capital - the latter a modest 2018 deal), but documented buy-and-build add-on activity in residential rooftop is limited; post-ITC (25D sunset end-2025) policy uncertainty and a projected ~20% 2026 volume contraction further dampen roll-up appetite."
    },
    "sources": [
      {
        "id": "src-1",
        "publisher": "SEIA / Wood Mackenzie",
        "title": "US Solar Market Insight 2024 Year in Review (Executive Summary) - residential ~4.7 GWdc",
        "url": "https://seia.org/research-resources/solar-market-insight-report-2024-year-in-review/",
        "dateAccessed": "2026-06-22",
        "type": "trade-association"
      },
      {
        "id": "src-2",
        "publisher": "Sunrun Inc. (GlobeNewswire)",
        "title": "Sunrun Reports Fourth Quarter and Full Year 2024 Financial Results (total revenue $2.037B)",
        "url": "https://www.globenewswire.com/news-release/2025/02/27/3034274/0/en/Sunrun-Reports-Fourth-Quarter-and-Full-Year-2024-Financial-Results.html",
        "dateAccessed": "2026-06-22",
        "type": "filing"
      },
      {
        "id": "src-5",
        "publisher": "NREL / U.S. DOE",
        "title": "Fall 2024 Solar Industry Update (Q1-2024 cost benchmarks; residential ~$2.68-2.74/Wdc, 2023 USD)",
        "url": "https://docs.nrel.gov/docs/fy25osti/92257.pdf",
        "dateAccessed": "2026-06-22",
        "type": "government"
      },
      {
        "id": "src-6",
        "publisher": "pv magazine USA / EnergySage",
        "title": "U.S. residential solar falls to lowest-ever $2.50/W marketplace median; cash median ~$3.50/W in 2024",
        "url": "https://pv-magazine-usa.com/2025/04/29/u-s-residential-solar-falls-to-lowest-ever-2-50-per-watt-said-energysage/",
        "dateAccessed": "2026-06-22",
        "type": "trade-press"
      },
      {
        "id": "src-7",
        "publisher": "Energy-Storage.news / Wood Mackenzie + ACP",
        "title": "US energy storage 2024: residential ~1,250 MW / ~3 GWh added (US Energy Storage Monitor)",
        "url": "https://www.energy-storage.news/2024-energy-storage-installations-surpassed-12gw/",
        "dateAccessed": "2026-06-22",
        "type": "trade-press"
      },
      {
        "id": "src-8",
        "publisher": "Grand View Research",
        "title": "U.S. Residential Solar PV Market Size & Share Report (retrofit/new-construction split) - HTTP 403 on re-check, not independently re-confirmed",
        "url": "https://www.grandviewresearch.com/industry-analysis/us-residential-solar-pv-market-report",
        "dateAccessed": "2026-06-22",
        "type": "market-research"
      },
      {
        "id": "src-9",
        "publisher": "PR Newswire (Freedom Forever) / pv magazine USA",
        "title": "Freedom Forever Top Solar Contractors ranking; Chapter 11 filing (Apr 15, 2026) corroborated by pv magazine USA",
        "url": "https://pv-magazine-usa.com/2026/04/15/residential-solar-company-freedom-forever-files-chapter-11-bankruptcy/",
        "dateAccessed": "2026-06-22",
        "type": "trade-press"
      },
      {
        "id": "src-10",
        "publisher": "Wood Mackenzie",
        "title": "Competition heats up for the top three US residential solar installers (Sunrun, Freedom Forever, Tesla)",
        "url": "https://www.woodmac.com/news/opinion/competition-heats-up-for-the-top-three-us-residential-solar-installers/",
        "dateAccessed": "2026-06-22",
        "type": "market-research"
      },
      {
        "id": "src-11",
        "publisher": "Business Wire (Greenbelt Capital Partners / ION Solar)",
        "title": "ION Solar Secures Investment Led by Greenbelt Capital Partners, Blackstone Credit and EIP (Mar 2022)",
        "url": "https://www.businesswire.com/news/home/20220308005508/en/ION-Solar-Secures-Investment-Led-by-Greenbelt-Capital-Partners-Blackstone-Credit-and-EIP",
        "dateAccessed": "2026-06-22",
        "type": "trade-press"
      },
      {
        "id": "src-12",
        "publisher": "Business Wire (Advantage Capital / Momentum Solar)",
        "title": "Advantage Capital Invests in Momentum Solar (Nov 2018, ~$4.1M Grow-NJ financing)",
        "url": "https://www.businesswire.com/news/home/20181128005699/en/Advantage-Capital-Invests-Momentum-Solar-Supporting-Company%E2%80%99s",
        "dateAccessed": "2026-06-22",
        "type": "trade-press"
      },
      {
        "id": "src-13",
        "publisher": "Wood Mackenzie",
        "title": "Tracking distributed solar and storage competitive landscapes in 2024 (Sunrun ~12% full-year share, up from 11%)",
        "url": "https://www.woodmac.com/news/opinion/tracking-distributed-solar-and-storage-competitive-landscapes-in-2024/",
        "dateAccessed": "2026-06-22",
        "type": "market-research"
      }
    ]
  },
  "garage-doors": {
    "dataStatus": "complete",
    "confidence": "medium",
    "tam": {
      "total": {
        "value": 12.5,
        "unit": "billion",
        "source": "src-1"
      },
      "newConstruction": {
        "value": 1.4,
        "unit": "billion",
        "modeledEstimate": true,
        "assumption": "FMI sizes the TOTAL US overhead & garage door market at ~$16B for 2026 (residential + commercial), reaching ~$19.6B by 2030 (residential garage doors growing ~4.9% CAGR; non-residential ~6.0%). Of the total, FMI splits roughly 60% service/maintenance (~$9.6B) and 40% new-install/replacement (~$6.4B). To isolate a residential-only TAM I apply a ~78% residential weighting to the $16B total (residential is ~100M of ~114M doors = ~88% by count, discounted because commercial service is more intensive per door), giving ~$12.5B residential. New-construction is then modeled as the new-build slice of the install/replacement pool: US single-family starts were ~1.02M in 2024 (Census) and ~85% of new homes include a garage (NAHB), i.e. ~0.87M new residential door installs vs. a ~100M-door replacement/repair installed base. New construction is therefore a small fraction of installs; I estimate ~$1.4B, with remaining install/replacement spend driven by replacement of existing doors. NOTE: the $16B anchor is a single market-research-vendor (FMI) figure, corroborated directionally by PitchBook's reporting of the same $16B->$19.6B sizing; the residential split and new-build slice are MODELED, not directly reported.",
        "source": "src-1"
      },
      "renovationRepair": {
        "value": 11.1,
        "unit": "billion",
        "modeledEstimate": true,
        "assumption": "Residual: residential TAM (~$12.5B) minus modeled new-construction (~$1.4B). Dominated by the ~$9.6B-equivalent service/maintenance + repair pool (60% of total market per FMI) plus replacement of existing doors on the ~100M residential installed base. The mortgage lock-in effect and non-discretionary, non-deferrable repair cycles (broken springs, opener failures) make replacement/repair the structural majority of demand.",
        "source": "src-1"
      },
      "methodology": "Top-down. Anchored on FMI Corporation's March 2026 Private Equity Sector Brief, which sizes the total US overhead & garage door market at ~$16B (2026), reaching ~$19.6B by 2030, split ~60% service/maintenance (~$9.6B) and ~40% new-install/replacement (~$6.4B), against an installed base of ~114M doors (~100M residential, ~14M commercial). The $16B figure is corroborated by PitchBook's reporting (via Yahoo Finance) citing the same FMI $16B->$19.6B sizing. Residential-only TAM modeled at ~$12.5B by applying a ~78% residential weighting (between the ~88% residential door-count share and a lower commercial-service-intensity adjustment). New-construction vs renovation/repair split modeled from Census single-family starts (~1.02M, 2024) x ~85% garage attachment (NAHB) against the ~100M-door replacement base. Cross-check: IBISWorld's narrowly-defined 'Garage Door Installation' industry (NAICS sub-segment) is only ~$459.3M (2025) across just 299 specialist firms; this captures only pure-play installers and materially understates true end-market spend (spread across 15,000+ small multi-trade/local operators per FMI), so it is used as a fragmentation data point, not the TAM. Confidence held at medium: the TAM rests on a single vendor (FMI) plus modeling.",
      "confidence": "medium",
      "year": 2026
    },
    "topPlayers": [
      {
        "name": "Guild Garage Group",
        "approxRevenue": {
          "value": 300,
          "unit": "million",
          "source": "src-3"
        },
        "ownership": "PE-backed",
        "sponsor": "Oak Hill Capital",
        "note": "Largest pure residential garage door SERVICES roll-up; launched 2024, 28 local brands, 500+ certified technicians across 30 states (confirmed via April 2026 PR Newswire release). Crossed ~$300M revenue / ~$50M EBITDA before Oak Hill agreed to acquire it for $800M+ (~16x EBITDA), per Reuters/PitchBook reporting (the PR Newswire release itself states terms were not disclosed; the $300M/$50M/$800M figures come from M&A reporting).",
        "website": "https://www.guildgaragegroup.com",
        "source": "src-3"
      },
      {
        "name": "Precision Door Service (Neighborly)",
        "approxRevenue": {
          "value": 600,
          "unit": "million",
          "source": "src-4"
        },
        "ownership": "franchise",
        "sponsor": "",
        "note": "Largest residential garage door repair/service brand by footprint; 132 US franchised locations as of Dec 2024 (per 2025 FDD). Systemwide revenue ~$570-600M is an EXTRAPOLATION from Item 19 average-gross-sales-by-territory data, NOT an officially reported systemwide figure; some sources cite system-wide sales 'exceeding $300M'. Part of Neighborly. Treat the $600M as an upper-bound extrapolation.",
        "website": "https://www.precisiondoor.net",
        "source": "src-4"
      },
      {
        "name": "Overhead Door Corporation (incl. Genie)",
        "approxRevenue": {
          "value": null,
          "unit": "billion",
          "source": null
        },
        "ownership": "private",
        "sponsor": "",
        "note": "Largest US garage door manufacturer/brand (wholly-owned subsidiary of Japan's Sanwa Holdings); IBISWorld names Sanwa Holdings as the largest business in US garage door installation. Brands include Overhead Door, Wayne Dalton, TODCO, and The Genie Company; ~400+ US distributors. Primarily a manufacturer/dealer-network player rather than a direct residential-services operator, so a precise residential-services revenue figure is not reliably sourceable (left null).",
        "website": "https://www.overheaddoor.com",
        "source": "src-7"
      }
    ],
    "rollups": [
      {
        "platform": "Guild Garage Group",
        "sponsor": "Oak Hill Capital",
        "thesis": "Buy-and-build of local residential garage door service brands focused on non-discretionary maintenance, repair and replacement; preserve local brand autonomy with continued management/operator ownership while adding platform scale.",
        "notableAddOns": "~28 local brands across 30 states since 2024 launch (operated under retained local names); ~25-30 acquisitions per FMI/PitchBook reporting.",
        "link": "https://www.prnewswire.com/news-releases/oak-hill-capital-partners-with-guild-garage-group-302731713.html",
        "linkType": "press-release",
        "source": "src-3"
      },
      {
        "platform": "GarageCo Holdings",
        "sponsor": "Gridiron Capital",
        "thesis": "'A Family of Family Brands' - consolidate residential and commercial garage door service businesses, partnering with founder-owners and applying an integrated buy-and-build playbook (Gridiron Fund V platform, partner since 2023/2024).",
        "notableAddOns": "Verified on Gridiron's portfolio page: Dan's Overhead Doors (2025), Quality Overhead Door (2024), Cedar Park Overhead Doors (2024). Other brands previously attributed to this platform (P.D.Q. Door, Apple Door Systems, Cunningham, Genson, Omaha Door & Window) are NOT confirmed on the sponsor page and are unverified.",
        "link": "https://gridironcapital.com/company/garageco/",
        "linkType": "company",
        "source": "src-5"
      },
      {
        "platform": "US Dock & Door",
        "sponsor": "Soundcore Capital Partners",
        "thesis": "Build a national platform across commercial overhead door / dock equipment and residential garage doors via installation, maintenance and repair; Soundcore Fund III platform, initial investment August 2023.",
        "notableAddOns": "Top Notch & Premier (GA, 2023), Select Door Service (GA, 2024), Garage Headquarters (RI/MA) & Total Garage Store (TN) - confirmed on Soundcore portfolio page.",
        "link": "https://soundcorecap.com/cpt_potfolio/us-dock-door/",
        "linkType": "company",
        "source": "src-6"
      },
      {
        "platform": "Door Pro America",
        "sponsor": "Rotunda Capital Partners",
        "thesis": "Installer and service provider of residential garage doors across the US; buy-and-build adding regional installers and service providers (Rotunda Fund III, partnered 2023).",
        "notableAddOns": "Liberty Door & Awning (NJ) and American Garage Door Systems (NC) - confirmed on Rotunda portfolio page (plus one additional unnamed add-on).",
        "link": "https://www.rotundacapital.com/portfolio/door-pro-america-portfolio",
        "linkType": "company",
        "source": "src-8"
      }
    ],
    "fragmentation": {
      "score": 5,
      "rationale": "Highly fragmented. ~100M residential garage doors are serviced largely by 15,000+ small, owner-run local operators (FMI estimates ~90% of the market is independent businesses) with no dominant national service brand. Even the largest service players (Guild ~$300M; Precision ~$300-600M systemwide) each hold low-single-digit shares of a ~$12-16B market. IBISWorld's narrow 'Garage Door Installation' segment counts just 299 specialist firms at ~$459M (2025). This fragmentation is precisely what is drawing the current PE roll-up wave ('the new HVAC').",
      "source": "src-1"
    },
    "rollupIntensity": {
      "score": 5,
      "rationale": "Very active and accelerating. PitchBook (via Yahoo Finance reporting) counts 29 PE-backed garage door deals in 2024 and 26 in 2025 (including add-ons), with multiple competing platforms (Guild/Oak Hill, GarageCo/Gridiron, US Dock & Door/Soundcore, Door Pro America/Rotunda, plus Vortex Doors and DuraServ/Leonard Green). Oak Hill's $800M+ acquisition of Guild at a reported ~16x EBITDA - multiples normally seen in IT/data-services - signals peak roll-up enthusiasm and explicit framing of garage doors as the next HVAC-style consolidation play (FMI/PitchBook)."
    },
    "sources": [
      {
        "id": "src-1",
        "publisher": "FMI Corporation",
        "title": "Private Equity Sector Brief: Overhead & Garage Door Services (March 2026)",
        "url": "https://fmicorp.com/insights/thought-leadership/private-equity-sector-brief-overhead-garage-door-services",
        "dateAccessed": "2026-06-22",
        "type": "market-research"
      },
      {
        "id": "src-2",
        "publisher": "IBISWorld",
        "title": "Garage Door Installation in the US - Market Size & Industry Statistics",
        "url": "https://www.ibisworld.com/united-states/market-size/garage-door-installation/4855/",
        "dateAccessed": "2026-06-22",
        "type": "market-research"
      },
      {
        "id": "src-3",
        "publisher": "PR Newswire (Oak Hill Capital / Guild Garage Group)",
        "title": "Oak Hill Capital Partners with Guild Garage Group",
        "url": "https://www.prnewswire.com/news-releases/oak-hill-capital-partners-with-guild-garage-group-302731713.html",
        "dateAccessed": "2026-06-22",
        "type": "trade-press"
      },
      {
        "id": "src-4",
        "publisher": "Franchise Chatter",
        "title": "Precision Door Service Franchise Review 2026 (FDD: 132 locations, average sales by territory)",
        "url": "https://www.franchisechatter.com/2026/05/13/precision-door-service-franchise-review-2026-costs-fees-news-average-revenues-and-or-profits/",
        "dateAccessed": "2026-06-22",
        "type": "trade-press"
      },
      {
        "id": "src-5",
        "publisher": "Gridiron Capital",
        "title": "GarageCo - Company Overview / Family of Family Brands",
        "url": "https://gridironcapital.com/company/garageco/",
        "dateAccessed": "2026-06-22",
        "type": "trade-press"
      },
      {
        "id": "src-6",
        "publisher": "Soundcore Capital Partners",
        "title": "US Dock & Door - Portfolio",
        "url": "https://soundcorecap.com/cpt_potfolio/us-dock-door/",
        "dateAccessed": "2026-06-22",
        "type": "trade-press"
      },
      {
        "id": "src-7",
        "publisher": "IBISWorld",
        "title": "Garage Door Installation in the US - Number of Businesses (Sanwa Holdings largest business)",
        "url": "https://www.ibisworld.com/united-states/number-of-businesses/garage-door-installation/4855/",
        "dateAccessed": "2026-06-22",
        "type": "market-research"
      },
      {
        "id": "src-8",
        "publisher": "Rotunda Capital Partners",
        "title": "Door Pro America - Portfolio",
        "url": "https://www.rotundacapital.com/portfolio/door-pro-america-portfolio",
        "dateAccessed": "2026-06-22",
        "type": "trade-press"
      },
      {
        "id": "src-9",
        "publisher": "PitchBook (via Yahoo Finance)",
        "title": "PE hopes garage door roll-ups will be the new HVAC (29 deals 2024, 26 deals 2025; 16x EBITDA; $16B->$19.6B)",
        "url": "https://finance.yahoo.com/markets/stocks/articles/pe-hopes-garage-door-roll-193930270.html",
        "dateAccessed": "2026-06-22",
        "type": "trade-press"
      },
      {
        "id": "src-10",
        "publisher": "US Census Bureau / NAHB",
        "title": "New Residential Construction (single-family starts ~1.02M, 2024); ~85% of new homes include a garage",
        "url": "https://www.census.gov/construction/nrc/index.html",
        "dateAccessed": "2026-06-22",
        "type": "government"
      }
    ]
  },
  "foundation": {
    "dataStatus": "complete",
    "confidence": "medium",
    "tam": {
      "total": {
        "value": 10.5,
        "unit": "billion",
        "source": "src-2"
      },
      "year": 2024,
      "newConstruction": {
        "value": 1,
        "unit": "billion",
        "modeledEstimate": true,
        "source": null,
        "assumption": "Foundation repair and basement waterproofing are predominantly remediation/repair services performed on existing homes (settlement, cracks, water intrusion, crawl-space encapsulation, piering, concrete lifting). New-construction work is limited to below-grade waterproofing membranes and new-build foundation remediation. Modeled at ~10% of total based on the service-nature of the category; no source directly reports the split, so this is a top-down allocation."
      },
      "renovationRepair": {
        "value": 9.5,
        "unit": "billion",
        "modeledEstimate": true,
        "source": null,
        "assumption": "Modeled as the residual ~90% of total. Repair/replacement on existing housing stock is the core of this category. Allocation is a modeled estimate, not a directly reported figure."
      },
      "methodology": "Top-down. The 'operative' US residential market for the bundled category (foundation repair + basement/crawl-space waterproofing + crawl-space encapsulation + concrete lifting) is reported at ~$9.8B-$11.8B by the CT Acquisitions PE roll-up tracker (src-2), corroborated by Future Market Insights' US-AND-CANADA foundation-repair-services figure of $11.8B for 2025 (src-3). NOTE: the FMI corroborating figure is US+Canada, so it modestly overstates US-only; this is one reason confidence is held at medium. A narrower 'foundation repair only' US definition is ~$3.2B in 2024 (The Business Research Company, cited within src-2). I take ~$10.5B as the mid-point US residential total for the bundled category. The new-construction vs renovation/repair split is not directly reported and is modeled (see split assumptions): ~90% renovation/repair, ~10% new construction.",
      "confidence": "medium"
    },
    "topPlayers": [
      {
        "name": "Groundworks",
        "approxRevenue": {
          "value": 1,
          "unit": "billion",
          "source": "src-4"
        },
        "ownership": "PE-backed",
        "sponsor": "KKR (lead, North America XIII Fund, Feb 2023); Cortec Group (minority)",
        "note": "Largest US residential foundation repair / water-management platform; surpassed $1B in sales in 2024 with 5,500+ employees and 72+ offices across North America. Revenue confirmed directly from official GlobeNewswire/Inc. 5000 release.",
        "website": "https://www.groundworks.com",
        "source": "src-4"
      },
      {
        "name": "U.S. Waterproofing (Rotunda platform)",
        "approxRevenue": {
          "value": null,
          "unit": "million",
          "source": null
        },
        "ownership": "PE-backed",
        "sponsor": "Rotunda Capital Partners (Fund III, Nov 2022)",
        "note": "Chicago/Midwest-rooted (founded 1957, NE Illinois/NW Indiana/SE Wisconsin) residential waterproofing and foundation-repair platform expanding into the Southeast; active add-on acquirer. No credibly sourced revenue figure available.",
        "website": "https://www.uswaterproofing.com",
        "source": "src-2"
      },
      {
        "name": "Olshan Foundation Solutions",
        "approxRevenue": {
          "value": null,
          "unit": "million",
          "source": null
        },
        "ownership": "private",
        "sponsor": "",
        "note": "Houston-based, founded 1933; one of the oldest and largest independent residential foundation-repair/waterproofing contractors, multiple Texas locations. No reliably sourced revenue figure (data-aggregator vendor profiles vary widely and are not credible).",
        "website": "https://www.olshanfoundation.com",
        "source": "src-5"
      }
    ],
    "rollups": [
      {
        "platform": "Groundworks",
        "sponsor": "KKR (lead, Feb 2023); Cortec Group (minority)",
        "thesis": "Build the national champion in residential foundation repair and water management by acquiring strong regional brands and cross-selling foundation repair, waterproofing, crawl-space encapsulation and concrete lifting.",
        "notableAddOns": "URETEK South (Jan 2024), Bay Area Underpinning (July 2023, California entry), EagleLIFT, Leveled Concrete, WTX Foundation Repair, Matvey (Seattle), Doug Lacey's (Calgary)",
        "link": "https://www.prnewswire.com/news-releases/groundworks-announces-kkr-as-a-new-strategic-partner-to-support-growth-301735637.html",
        "linkType": "press-release",
        "source": "src-6"
      },
      {
        "platform": "U.S. Waterproofing",
        "sponsor": "Rotunda Capital Partners",
        "thesis": "Consolidate regional residential waterproofing and foundation-repair contractors across the Midwest and Southeast into a multi-market platform.",
        "notableAddOns": "Engineered Solutions of Georgia, Crawl Space Brothers, Carolina Foundation Solutions, Foundation Solutions 360",
        "link": "https://ctacquisitions.com/guides/foundation-repair-pe-rollup-tracker-2026/",
        "linkType": "company",
        "source": "src-2"
      },
      {
        "platform": "United Structural Systems",
        "sponsor": "Summit Park; Schroders Capital",
        "thesis": "Roll up foundation-repair and waterproofing contractors across the Mid-South / Southeast.",
        "notableAddOns": "Ox Foundation Solutions, BACS (Chattanooga)",
        "link": "https://ctacquisitions.com/guides/foundation-repair-pe-rollup-tracker-2026/",
        "linkType": "company",
        "source": "src-2"
      },
      {
        "platform": "StableDry Services",
        "sponsor": "Summit Park",
        "thesis": "Second Summit Park foundation/waterproofing platform consolidating contractors across the Southeastern US.",
        "notableAddOns": "Foundation Services of Central Florida; USS Ltd (Lexington/Charleston)",
        "link": "https://ctacquisitions.com/guides/foundation-repair-pe-rollup-tracker-2026/",
        "linkType": "company",
        "source": "src-2"
      },
      {
        "platform": "Solid Ground Solutions",
        "sponsor": "CenterOak Partners (Equity Fund II, Jan 2025)",
        "thesis": "Central-US foundation-repair / waterproofing consolidation platform (Columbus, OH HQ).",
        "notableAddOns": "",
        "link": "https://ctacquisitions.com/guides/foundation-repair-pe-rollup-tracker-2026/",
        "linkType": "company",
        "source": "src-2"
      },
      {
        "platform": "AnchorPoint Foundations",
        "sponsor": "Oridian Capital (formerly HCI Equity Partners)",
        "thesis": "Foundation-repair / waterproofing consolidation platform (PE-backed, entered June 2026 per tracker).",
        "notableAddOns": "",
        "link": "https://ctacquisitions.com/guides/foundation-repair-pe-rollup-tracker-2026/",
        "linkType": "company",
        "source": "src-2"
      }
    ],
    "fragmentation": {
      "score": 4,
      "rationale": "Highly fragmented but consolidating. Thousands of independent regional/local contractors and franchise systems (Ram Jack, etc.) serve the market; the single largest player, Groundworks, is ~$1B against an ~$10.5B US category, i.e. roughly 10% share, and the top players collectively hold only an estimated ~18-22% of revenue. The remainder is independent metro/county-scale operators. Score 4 (fragmented, not 5) reflects that active PE roll-ups have begun to consolidate the top end.",
      "source": "src-2"
    },
    "rollupIntensity": {
      "score": 5,
      "rationale": "Very active. Per the CT Acquisitions tracker (src-2), at least 6 distinct PE-backed platforms are actively acquiring: Groundworks/KKR, U.S. Waterproofing/Rotunda, United Structural Systems and StableDry/Summit Park, Solid Ground Solutions/CenterOak, AnchorPoint/Oridian. Groundworks alone has executed numerous add-ons since KKR's Feb 2023 investment (e.g., Bay Area Underpinning July 2023, URETEK South Jan 2024). Strong sponsor competition for assets in the space."
    },
    "sources": [
      {
        "id": "src-1",
        "publisher": "Future Market Insights",
        "title": "Foundation Repair Services Market Size & Trends 2025-2035",
        "url": "https://www.futuremarketinsights.com/reports/foundation-repair-services-market",
        "type": "market-research",
        "dateAccessed": "2026-06-22"
      },
      {
        "id": "src-2",
        "publisher": "CT Acquisitions",
        "title": "Foundation Repair PE Roll-Up Tracker 2026: 7 Active Platforms",
        "url": "https://ctacquisitions.com/guides/foundation-repair-pe-rollup-tracker-2026/",
        "type": "trade-press",
        "dateAccessed": "2026-06-22"
      },
      {
        "id": "src-3",
        "publisher": "Future Market Insights",
        "title": "USA & Canada Foundation Repair Services Market Size to 2035",
        "url": "https://www.futuremarketinsights.com/reports/united-states-and-canada-foundation-repair-services-market",
        "type": "market-research",
        "dateAccessed": "2026-06-22"
      },
      {
        "id": "src-4",
        "publisher": "Groundworks / GlobeNewswire",
        "title": "Groundworks Named an Inc. 5000 Fastest Growing Company for the Eighth Consecutive Year",
        "url": "https://www.globenewswire.com/news-release/2024/08/13/2929276/0/en/Groundworks-Named-an-Inc-5000-Fastest-Growing-Company-for-the-Eighth-Consecutive-Year.html",
        "type": "trade-press",
        "dateAccessed": "2026-06-22"
      },
      {
        "id": "src-5",
        "publisher": "Olshan Foundation Solutions",
        "title": "Olshan Foundation Repair - Company Site",
        "url": "https://www.olshanfoundation.com/",
        "type": "trade-press",
        "dateAccessed": "2026-06-22"
      },
      {
        "id": "src-6",
        "publisher": "PR Newswire / Groundworks",
        "title": "Groundworks Announces KKR as a New Strategic Partner to Support Growth",
        "url": "https://www.prnewswire.com/news-releases/groundworks-announces-kkr-as-a-new-strategic-partner-to-support-growth-301735637.html",
        "type": "trade-press",
        "dateAccessed": "2026-06-22"
      }
    ]
  },
  "gutters": {
    "dataStatus": "in-progress",
    "confidence": "low",
    "tam": {
      "year": 2025,
      "confidence": "low",
      "methodology": "Re-anchored to the only credibly-sourced figure: Freedonia ~$8.0B TOTAL US gutters & downspouts market (2022 base, ~2.7%/yr to $8.3B by 2027). Residential-only TAM and new/reno split are modeled and were nulled because the cited source does not disclose them.",
      "total": {
        "value": 8,
        "unit": "billion",
        "source": "src-1"
      },
      "newConstruction": {
        "value": null,
        "unit": "billion",
        "modeledEstimate": true,
        "assumption": "NULLED on verification. The original $1B (~25% of an unsupported $4.1B residential base) cannot be sourced. Freedonia does not disclose a new-construction dollar figure or share. Directional context only: ~1.63M housing completions in 2024 (Census, src-7) vs. ~145M+ existing housing units implies new construction is a minority of gutter demand and that replacement/aftermarket dominates - but no credible dollar value exists, so this is left null.",
        "source": null
      },
      "renovationRepair": {
        "value": null,
        "unit": "billion",
        "modeledEstimate": true,
        "assumption": "NULLED on verification. The original $3.1B (~75% of an unsupported $4.1B residential base) cannot be sourced. Freedonia confirms qualitatively that 'the residential aftermarket accounts for the vast majority of sales' and that improvement/repair demand exists, supporting the directional claim that renovation/replacement dominates - but it does not publish a dollar figure or percentage, so no hard value is asserted here.",
        "source": null
      }
    },
    "topPlayers": [
      {
        "name": "Leaf Home (LeafFilter)",
        "approxRevenue": {
          "value": 1.8,
          "unit": "billion",
          "source": "src-2"
        },
        "ownership": "PE-backed",
        "sponsor": "Gridiron Capital",
        "note": "VERIFIED. Largest US direct-to-consumer residential services provider; LeafFilter gutter protection is its flagship line. Revenue 'more than $1.8B' (current) per ION Analytics (src-2), up from ~$100M at Gridiron's 2016 majority acquisition. Gridiron Capital retains majority ownership. Ares Management led a preferred-equity investment and Apollo funds provided debt financing in connection with the Sept 2025 Erie Home combination (Gridiron press release, src-5). IPO process possibly re-launching within 6-12 months per CEO (src-2).",
        "website": "https://www.leafhome.com/",
        "source": "src-2"
      },
      {
        "name": "Erie Home",
        "approxRevenue": {
          "value": 0.609,
          "unit": "billion",
          "source": "src-3"
        },
        "ownership": "PE-backed",
        "sponsor": "Gridiron Capital",
        "note": "VERIFIED. DTC residential exterior services (re-roofing, gutters, basement/water). Reported $609M revenue in 2024; ranked #4 on Roofing Contractor's 2025 Top 100 (src-3). NOTE: Erie was already a Gridiron portfolio company (Gridiron partnered with it in 2021); the Sept 2025 transaction combines two existing Gridiron holdings under the Leaf Home platform rather than a fresh outside acquisition. Financial terms not disclosed.",
        "website": "https://www.eriehome.com/",
        "source": "src-3"
      },
      {
        "name": "LeafGuard (Englert, Inc.)",
        "approxRevenue": {
          "value": 313.8,
          "unit": "million",
          "source": "src-4"
        },
        "ownership": "private",
        "sponsor": "",
        "note": "LOW CONFIDENCE. Seamless one-piece gutter system with integrated guard, introduced 1993 and operated by Englert, Inc. ~$313.8M revenue is a Growjo third-party ESTIMATE (src-4), not a primary filing - treat as indicative only. One of the larger standalone branded seamless-gutter-system players.",
        "website": "https://www.leafguard.com/",
        "source": "src-4"
      }
    ],
    "rollups": [
      {
        "platform": "Leaf Home",
        "sponsor": "Gridiron Capital",
        "thesis": "Build the largest direct-to-consumer residential services & products platform in North America, anchored on LeafFilter gutter protection and expanded across exterior/home verticals (re-roofing, gutters, basement/water, bath, stair lifts, garage flooring). 300+ field offices, 3,100+ sales consultants, 2,400+ installers across 48 US states and Canada post-Erie combination.",
        "notableAddOns": "Erie Home ($609M revenue, combined Sept 2025 - both companies already Gridiron-owned since 2016/2021); prior Leaf Home direct-to-consumer tuck-ins (bath/water/stair-lift). Ares Management led preferred equity; Apollo funds provided debt.",
        "link": "https://gridironcapital.com/leaf-home-announces-acquisition-of-erie-home-uniting-two-leading-residential-services-providers/",
        "linkType": "press-release",
        "source": "src-5"
      }
    ],
    "fragmentation": {
      "score": 4,
      "rationale": "VERIFIED. The installer/services base is highly fragmented: IBISWorld counts 4,929 US 'Gutter Services' businesses (2025, confirmed via IBISWorld number-of-businesses statistic), with no operator dominating at the local-services level. However, the branded gutter-PROTECTION / DTC sub-segment is materially more concentrated, with Leaf Home (LeafFilter) the clear national leader at 'more than $1.8B' revenue - far above any local installer. Net: a long fragmented tail of local seamless-gutter installers topped by a small number of large national DTC protection brands. Score 4 (fragmented but with an emerging national consolidator).",
      "source": "src-6"
    },
    "rollupIntensity": {
      "score": 3,
      "rationale": "Moderately active. PE consolidation is concentrated in the gutter-protection / broader residential-exterior space rather than across the commodity seamless-gutter installer base. Gridiron Capital's Leaf Home is the dominant platform, combining two Gridiron-owned companies (Leaf Home + Erie Home, ~$609M) in Sept 2025 with Ares (preferred equity) and Apollo (debt) capital and a possible IPO. Dedicated pure-play gutter roll-ups outside Leaf Home are limited, so intensity is meaningful but not broad-based - score 3.",
      "score_note": ""
    },
    "sources": [
      {
        "id": "src-1",
        "publisher": "The Freedonia Group (via GlobeNewswire)",
        "title": "US Gutters & Downspouts Market Report 2024 - Historical Demand Data and Forecasts (Featuring Cornerstone, Leaf Home Solutions, OmniMax, Spectra Metals, TopBuild)",
        "url": "https://www.globenewswire.com/news-release/2024/07/01/2906872/28124/en/US-Gutters-Downspouts-Market-Report-2024-Historical-Demand-Data-2012-2017-and-2022-and-Forecasts-2027-and-2032-Featuring-Cornerstone-Leaf-Home-Solutions-OmniMax-Spectra-Metals-TopB.html",
        "dateAccessed": "2026-06-22",
        "type": "market-research"
      },
      {
        "id": "src-2",
        "publisher": "ION Analytics (Mergermarket)",
        "title": "Leaf Home could launch IPO process in 6-12 months, new CEO says",
        "url": "https://ionanalytics.com/insights/mergermarket/leaf-home-could-launch-ipo-process-in-6-to-12-months/",
        "dateAccessed": "2026-06-22",
        "type": "trade-press"
      },
      {
        "id": "src-3",
        "publisher": "Roofing Contractor",
        "title": "Gridiron Capital-backed Leaf Home to Acquire Erie Home",
        "url": "https://www.roofingcontractor.com/articles/101281-gridiron-capital-backed-leaf-home-to-acquire-erie-home",
        "dateAccessed": "2026-06-22",
        "type": "trade-press"
      },
      {
        "id": "src-4",
        "publisher": "Growjo",
        "title": "LeafGuard Brand Gutter: Revenue, Competitors, Alternatives",
        "url": "https://growjo.com/company/LeafGuard_Brand_Gutter",
        "dateAccessed": "2026-06-22",
        "type": "trade-press"
      },
      {
        "id": "src-5",
        "publisher": "Gridiron Capital",
        "title": "Leaf Home Announces Acquisition of Erie Home, Uniting Two Leading Residential Services Providers",
        "url": "https://gridironcapital.com/leaf-home-announces-acquisition-of-erie-home-uniting-two-leading-residential-services-providers/",
        "dateAccessed": "2026-06-22",
        "type": "trade-press"
      },
      {
        "id": "src-6",
        "publisher": "IBISWorld",
        "title": "Gutter Services in the US - Market Size & Number of Businesses Statistics (2025)",
        "url": "https://www.ibisworld.com/united-states/market-size/gutter-services/6321/",
        "dateAccessed": "2026-06-22",
        "type": "market-research"
      },
      {
        "id": "src-7",
        "publisher": "US Census Bureau",
        "title": "New Residential Construction (housing completions, 2024)",
        "url": "https://www.census.gov/construction/nrc/current/index.html",
        "dateAccessed": "2026-06-22",
        "type": "government"
      },
      {
        "id": "src-8",
        "publisher": "Mordor Intelligence",
        "title": "United States Gutter Guards Market Size, Share, and Industry Trends (2026-2031)",
        "url": "https://www.mordorintelligence.com/industry-reports/united-states-gutter-guards-market",
        "dateAccessed": "2026-06-22",
        "type": "market-research"
      }
    ]
  },
  "water-heater": {
    "dataStatus": "complete",
    "confidence": "medium",
    "tam": {
      "total": {
        "value": 19,
        "unit": "billion",
        "source": null
      },
      "newConstruction": {
        "value": 2.5,
        "unit": "billion",
        "modeledEstimate": true,
        "assumption": "New-construction water heaters track housing completions. ~1.4M US new residential units complete annually (Census), each needing one water heater installed at a blended installed price of ~$1,800. 1.4M x $1,800 ~= $2.5B. Set as a modeled subset of the ~$19B total. Note: ~1.4M completions is an approximation, not pulled from a cited Census release in this record.",
        "source": null
      },
      "renovationRepair": {
        "value": 16.5,
        "unit": "billion",
        "modeledEstimate": true,
        "assumption": "Residual of total (~$19B) minus new-construction ($2.5B). Replacement dominates because water heaters fail on a ~10-15 year cycle and the vast majority of the ~9.5M residential units installed per year replace an existing unit. Unit basis corroborated by AHRI/CleanTechnica 2024 shipments (electric storage >5M, gas storage declining ~3%).",
        "source": "src-1"
      },
      "methodology": "Bottom-up, installed-SERVICES basis (not wholesale equipment value). Units: AHRI 2024 US residential shipments ~5.1M+ electric storage (CleanTechnica/src-1 confirms electric surpassed 5M units in 2024 for the first time) + ~3.4M gas storage = ~8.5M storage, plus an estimated ~1M tankless, giving ~9.5M units installed/replaced per year. Price: blended fully-installed job ~$2,000, anchored to HomeAdvisor 2025 tankless normal range $1,404-$3,901 (src-2) and tank replacements ~$900-1,800. ~9.5M x ~$2,000 ~= $19B. IMPORTANT: $19B is a MODELED estimate with NO single published source confirming it. Published equipment-only (wholesale) figures are much lower: GMInsights (src-3) pegs North America residential water heater equipment revenue at ~$3.5B for 2024 (US portion ~$2.7B). An installed-services figure several multiples higher than wholesale is expected once contractor labor, permits, haul-away, and retail markup are added, but the specific $19B multiple is not independently corroborated - treat as a directional model, not a sourced figure.",
      "year": 2024,
      "confidence": "medium"
    },
    "topPlayers": [
      {
        "name": "A. O. Smith Corporation",
        "approxRevenue": {
          "value": 3,
          "unit": "billion",
          "source": "src-5"
        },
        "ownership": "public",
        "sponsor": "",
        "note": "Largest US residential water heater manufacturer (>35% NA residential share per GMInsights/src-3). $3.0B North America segment sales in 2024 ($2,950.1M; total company sales $3.8B) per A.O. Smith FY2024 results (src-5). The $3.0B segment also includes boilers and water treatment, so it OVERSTATES pure water-heater revenue. Equipment maker, not an installer.",
        "website": "https://www.aosmith.com",
        "source": "src-5"
      },
      {
        "name": "Rheem Manufacturing",
        "approxRevenue": {
          "value": null,
          "unit": "usd",
          "source": null
        },
        "ownership": "private",
        "sponsor": "",
        "note": "Co-leader with A.O. Smith in US residential water heaters; strong Home Depot retail channel and leading heat-pump water heater share. Privately held; no segment revenue disclosed (revenue set to null, not fabricated). One of the top-5 NA players (65% combined top-5 share per GMInsights/src-3). Equipment maker, not an installer.",
        "website": "https://www.rheem.com",
        "source": "src-3"
      },
      {
        "name": "Bradford White Corporation",
        "approxRevenue": {
          "value": null,
          "unit": "usd",
          "source": null
        },
        "ownership": "private",
        "sponsor": "",
        "note": "Third major US residential water heater manufacturer (top-3 with A.O. Smith and Rheem; A.O. Smith/Rheem/Bradford White/Bosch/Rinnai held ~65% combined top-5 NA share per GMInsights/src-3). Employee/private-owned, no public revenue (null, not fabricated). Equipment maker, not an installer.",
        "website": "https://www.bradfordwhite.com",
        "source": "src-3"
      }
    ],
    "rollups": [
      {
        "platform": "Affordable Water Heaters and Plumbing (AWHAP)",
        "sponsor": "Dubin Clark & Company",
        "thesis": "Buy-and-build a Western US in-home water-heater replacement/repair platform (Valencia, CA; founded 1995), then add adjacent residential plumbing and HVAC services to raise revenue per customer. Acquired July 2020; Midwest Mezzanine Funds and Reinsurance Group of America provided subordinated debt/equity.",
        "notableAddOns": "Temperature Control, Inc. (Woodland Hills, CA residential HVAC), acquired June 2021; also Thousand Oaks Plumbing per Dubin Clark add-on announcements.",
        "link": "https://www.dubinclark.com/news-article/dubin-clark-announces-acquisition-of-affordable-water-heatersplumbing-inc-awhap",
        "linkType": "press-release",
        "source": "src-7"
      }
    ],
    "fragmentation": {
      "score": 5,
      "rationale": "The install/replace SERVICES market is highly fragmented: water-heater replacement is performed mostly by ~129,000 US plumbing contractors (IBISWorld/src-6 reports ~128,787 plumbing businesses) plus HVAC contractors, with no firm holding >5% share per IBISWorld (confirmed). Dedicated water-heater installers (Fast Water Heater, Water Heaters Only, AWHAP) are small, regional, and private. (The EQUIPMENT manufacturing tier is the opposite - consolidated, A.O. Smith/Rheem/Bradford White dominating - but that is not the acquirable services market.)",
      "source": "src-6"
    },
    "rollupIntensity": {
      "score": 2,
      "rationale": "Limited dedicated water-heater roll-up activity. Most PE capital reaches this work indirectly through multi-trade residential platforms (HVAC + plumbing + electrical), where water-heater replacement is one of many services, rather than through pure-play water-heater installers. The clearest dedicated example is Dubin Clark's AWHAP platform (verified). Activity is steady but niche, not a hot stand-alone roll-up theme."
    },
    "sources": [
      {
        "id": "src-1",
        "publisher": "CleanTechnica",
        "title": "Electric Water Heater Sales Set New Record In 2024 While Gas Sales Decline (AHRI shipment data)",
        "url": "https://cleantechnica.com/2025/04/28/electric-water-heater-sales-set-new-record-in-2024-while-gas-sales-decline/",
        "type": "trade-press",
        "dateAccessed": "2026-06-22"
      },
      {
        "id": "src-2",
        "publisher": "HomeAdvisor",
        "title": "How Much Does a Tankless Water Heater Cost? [2025 Data] (installed-price ranges)",
        "url": "https://www.homeadvisor.com/cost/plumbing/install-a-tankless-water-heater/",
        "type": "trade-press",
        "dateAccessed": "2026-06-22"
      },
      {
        "id": "src-3",
        "publisher": "GMInsights",
        "title": "North America Residential Water Heater Market Size, 2034 Report",
        "url": "https://www.gminsights.com/industry-analysis/north-america-residential-water-heater-market",
        "type": "market-research",
        "dateAccessed": "2026-06-22"
      },
      {
        "id": "src-4",
        "publisher": "Air-Conditioning, Heating, and Refrigeration Institute (AHRI)",
        "title": "Monthly Shipments / Residential Storage Water Heaters Statistical Release",
        "url": "https://www.ahrinet.org/analytics/statistics/monthly-shipments",
        "type": "trade-association",
        "dateAccessed": "2026-06-22"
      },
      {
        "id": "src-5",
        "publisher": "A. O. Smith Corporation (PR Newswire)",
        "title": "A. O. Smith Reports 2024 Results and Introduces 2025 Guidance",
        "url": "https://www.prnewswire.com/news-releases/a-o-smith-reports-2024-results-and-introduces-2025-guidance-302363952.html",
        "type": "filing",
        "dateAccessed": "2026-06-22"
      },
      {
        "id": "src-6",
        "publisher": "IBISWorld",
        "title": "Plumbers in the US - Industry Analysis (number of businesses; fragmentation, no firm >5% share)",
        "url": "https://www.ibisworld.com/united-states/industry/plumbers/1946/",
        "type": "market-research",
        "dateAccessed": "2026-06-22"
      },
      {
        "id": "src-7",
        "publisher": "Dubin Clark & Company",
        "title": "Dubin Clark Announces Acquisition of Affordable Water Heaters & Plumbing, Inc. (AWHAP)",
        "url": "https://www.dubinclark.com/news-article/dubin-clark-announces-acquisition-of-affordable-water-heatersplumbing-inc-awhap",
        "type": "trade-press",
        "dateAccessed": "2026-06-22"
      }
    ]
  }
}
