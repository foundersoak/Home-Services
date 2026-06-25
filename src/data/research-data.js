// Researched + adversarially-verified market data for the priority systems.
// Generated from the research workflows (2026-06-22 / 2026-06-24). Regenerate; do not hand-edit.

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
          "value": null,
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
          "value": null,
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
        "source": "src-1"
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
  },
  "siding": {
    "dataStatus": "complete",
    "confidence": "medium",
    "tam": {
      "total": {
        "value": 22,
        "unit": "billion",
        "source": "src-2"
      },
      "newConstruction": {
        "value": 7.7,
        "unit": "billion",
        "assumption": "Modeled at ~35% of the siding-specific installed services TAM. New residential construction is the minority channel for siding; the dominant volume is re-cladding of the aging owner-occupied housing stock (replacement/remodel). Split anchored qualitatively to JCHS LIRA remodeling demand dwarfing new single-family completions and to Freedonia's framing of residential siding demand being replacement-led.",
        "modeledEstimate": true,
        "source": "src-5"
      },
      "renovationRepair": {
        "value": 14.3,
        "unit": "billion",
        "assumption": "Modeled at ~65% of the siding-specific installed services TAM. Siding is overwhelmingly a replacement/re-cladding product driven by aging housing stock, weather damage, and curb-appeal remodels (JCHS LIRA), so renovation/repair/replacement is the majority channel.",
        "modeledEstimate": true,
        "source": "src-5"
      },
      "methodology": "Top-down from installed-services lens. IBISWorld reports the combined 'Roofing & Siding Contractors' installation-services market at $75.4B in 2024 (src-2) - directly reported and verified accessible. That figure bundles roofing (the larger trade) with siding. Because no clean public residential-siding-only installed-services figure is available (the Freedonia US Residential Siding 2024 materials study, src-3, is paywalled (HTTP 403 confirmed) and measures product/material demand, not installed contractor revenue), the residential siding installed TAM is MODELED at ~$22B: roughly 30% of the combined roofing+siding contractor revenue attributable to siding work, then taken as predominantly residential. The new-vs-reno split is then modeled from JCHS/Census framing (replacement-led). Treat the $22B as an order-of-magnitude modeled estimate, not a directly reported figure.",
      "confidence": "medium",
      "year": 2024
    },
    "topPlayers": [
      {
        "name": "James Hardie Industries (North America)",
        "approxRevenue": {
          "value": 2.95,
          "unit": "billion",
          "source": "src-1"
        },
        "ownership": "public",
        "sponsor": "",
        "note": "Largest US fiber-cement siding manufacturer (Hardie brand). FY2024 group revenue verified at $3.94B (src-1); North America segment (~$2.95B) is a derived estimate (~75% of group), not a separately reported line on src-1. Materials/manufacturer, not an installer, but the category-defining residential siding brand.",
        "website": "https://www.jameshardie.com",
        "source": "src-1"
      },
      {
        "name": "Power Home Remodeling",
        "approxRevenue": {
          "value": 1.7,
          "unit": "billion",
          "source": "src-4"
        },
        "ownership": "PE-backed",
        "sponsor": "Harvest Partners; Bain Capital; Sixth Street",
        "note": "Nation's largest full-service exterior home remodeler; siding is a core product alongside windows, roofing, gutters and doors (verified on src-4). $1.7B annual revenue verified on src-4. Direct-to-consumer residential installer.",
        "website": "https://www.powerhrg.com",
        "source": "src-4"
      },
      {
        "name": "Great Day Improvements",
        "approxRevenue": {
          "value": 1.6,
          "unit": "billion",
          "source": "src-6"
        },
        "ownership": "PE-backed",
        "sponsor": "Littlejohn & Co.",
        "note": "National direct-to-consumer home remodeling platform (LeafFilter, Champion, Patio Enclosures); exterior cladding/siding within its broad remodel suite. ~$1.6B 2024 revenue (src-6 headline cites $1.3B in 2023; company guidance of >$1.6B for 2024 corroborated by PE/press reporting). CORRECTION: sponsor is Littlejohn & Co. (strategic partner since 2021, 2024 preferred-equity investment), NOT Renovus Capital Partners as originally recorded.",
        "website": "https://www.greatdayimprovements.com",
        "source": "src-6"
      }
    ],
    "rollups": [
      {
        "platform": "Renuity",
        "sponsor": "Greenbriar Equity Group",
        "thesis": "Aggregate tech-enabled direct-to-consumer home-improvement/replacement brands (bath, window, garage coatings, closet and other categories) into a national platform with shared back office and lead-gen.",
        "notableAddOns": "Multi-brand replacement/remodel platform acquired from York Private Equity (Greenbriar closed acquisition June 3, 2024; York remains invested)",
        "link": "https://www.greenbriar.com/greenbriar-equity-group-announces-acquisition-of-renuity/",
        "linkType": "press-release",
        "source": "src-7"
      },
      {
        "platform": "Valor Exterior Partners",
        "sponsor": "Osceola Capital Management",
        "thesis": "Consolidate fragmented family-owned residential exterior contractors (roofing, siding, windows, doors, decking) into a regional multi-trade platform with operational scale.",
        "notableAddOns": "Doing It Right Roofing & Siding (PA, Apr 2025); Kirkin Exteriors (DE, Jul 2025); Roofing King; Associate Roofing (MA, Apr 2026); 9 acquisitions since Sept 2024 launch",
        "link": "https://osceola.com/osceola-investments/valor-exterior-partners/",
        "linkType": "company",
        "source": "src-8"
      },
      {
        "platform": "Omnia Exterior Solutions",
        "sponsor": "CCMP Capital (CCMP Growth Advisors)",
        "thesis": "Build a national residential roofing and exterior-remodeling (incl. siding/gutter/general contracting) platform via roll-up of regional contractors.",
        "notableAddOns": "Great Roofing & Restoration (Westerville, OH; Aug 2024) and other regional exterior contractors",
        "link": "https://www.calfee.com/newsroom-news-great-roofing-omnia-exterior-acquisition-ccmp-advisors-08262024",
        "linkType": "press-release",
        "source": "src-9"
      }
    ],
    "fragmentation": {
      "score": 5,
      "rationale": "IBISWorld reports the Roofing & Siding Contractors industry is highly fragmented with no company holding more than 5% market share (verified via IBISWorld industry analysis). The installer base is dominated by local family-owned shops; even the largest D2C remodelers (Power, Great Day) hold low-single-digit share of the broader exterior services pool. Manufacturing is more concentrated (James Hardie in fiber cement), but the residential installation/service layer - the SMB acquisition target - is highly fragmented. (Note: the specific ~130,000-establishment count cited originally could not be independently confirmed in this session; the no-company-over-5% / highly-fragmented core claim is verified.)",
      "source": "src-2"
    },
    "rollupIntensity": {
      "score": 4,
      "rationale": "Very active and accelerating PE consolidation across residential roofing+siding+exterior services: roofing/exterior platform count roughly tripled from 17 (start 2023) to 56 (end 2024) - ~229% increase - with platforms acquiring 106 contractors in 2023 and 134 in 2024 (corroborated by multiple roofing-industry PE trackers). Multiple dedicated exterior-services platforms (Valor, Omnia, Renuity, Great Day, Power). Siding is consolidated mostly as part of broader 'exterior services' roll-ups rather than siding-pure platforms, which is why this is a 4 rather than a 5."
    },
    "sources": [
      {
        "id": "src-1",
        "publisher": "stockanalysis.com (James Hardie Industries / SEC filings)",
        "title": "James Hardie Industries (JHX) Revenue 2005-2025",
        "url": "https://stockanalysis.com/stocks/jhx/revenue/",
        "type": "filing",
        "dateAccessed": "2026-06-24"
      },
      {
        "id": "src-2",
        "publisher": "IBISWorld",
        "title": "Roofing & Siding Contractors in the US - Market Size Statistics",
        "url": "https://www.ibisworld.com/united-states/market-size/roofing-siding-contractors/6545/",
        "type": "market-research",
        "dateAccessed": "2026-06-24"
      },
      {
        "id": "src-3",
        "publisher": "The Freedonia Group",
        "title": "US Residential Siding 2024 Report",
        "url": "https://www.freedoniagroup.com/industry-study/us-residential-siding-2024",
        "type": "market-research",
        "dateAccessed": "2026-06-24"
      },
      {
        "id": "src-4",
        "publisher": "Bain Capital",
        "title": "Power Home Remodeling Secures Investment from Bain Capital, Sixth Street, and Harvest Partners Structured Capital",
        "url": "https://www.baincapital.com/news/power-home-remodeling-secures-investment-bain-capital-sixth-street-and-harvest-partners",
        "type": "trade-press",
        "dateAccessed": "2026-06-24"
      },
      {
        "id": "src-5",
        "publisher": "Joint Center for Housing Studies of Harvard University",
        "title": "Leading Indicator of Remodeling Activity (LIRA)",
        "url": "https://www.jchs.harvard.edu/research-areas/remodeling/lira",
        "type": "trade-association",
        "dateAccessed": "2026-06-24"
      },
      {
        "id": "src-6",
        "publisher": "Crain's Cleveland Business",
        "title": "Great Day Improvements rides billion-dollar growth into new HQ; revenues top $1.3 billion",
        "url": "https://www.crainscleveland.com/real-estate/home-services-firm-moves-new-hq-revenues-top-13-billion",
        "type": "trade-press",
        "dateAccessed": "2026-06-24"
      },
      {
        "id": "src-7",
        "publisher": "Greenbriar Equity Group",
        "title": "Greenbriar Equity Group Announces Acquisition of Renuity",
        "url": "https://www.greenbriar.com/greenbriar-equity-group-announces-acquisition-of-renuity/",
        "type": "trade-press",
        "dateAccessed": "2026-06-24"
      },
      {
        "id": "src-8",
        "publisher": "Osceola Capital Management",
        "title": "Valor Exterior Partners (portfolio company)",
        "url": "https://osceola.com/osceola-investments/valor-exterior-partners/",
        "type": "trade-press",
        "dateAccessed": "2026-06-24"
      },
      {
        "id": "src-9",
        "publisher": "Calfee, Halter & Griswold LLP",
        "title": "Great Roofing Partners with Omnia Exterior Solutions (CCMP Advisors)",
        "url": "https://www.calfee.com/newsroom-news-great-roofing-omnia-exterior-acquisition-ccmp-advisors-08262024",
        "type": "trade-press",
        "dateAccessed": "2026-06-24"
      }
    ]
  },
  "windows": {
    "dataStatus": "complete",
    "confidence": "medium",
    "tam": {
      "year": 2022,
      "confidence": "medium",
      "methodology": "Bottom-up anchored on product value, grossed up for installation. Principia/HIRI report the US RESIDENTIAL windows PRODUCT market at $20.6B (64.6M units) in 2022 (VERIFIED at src-1, exact match). That is factory/product value and excludes installation labor, which is a large share of an installed replacement job. The installed residential window replacement+installation market is therefore materially larger than product value. We gross up the $20.6B product base by ~1.45x to capture installation labor/margin to a modeled installed TAM of ~$30B. This total is a MODELED ESTIMATE (the gross-up multiplier is not itself a sourced figure). Cross-checks support the magnitude: (a) HIRI 'Window Market Watch' reports a US professional window installation segment of ~$8.26B (2022) plus a consumer segment of ~$7.2B; (b) a Census-attributed residential window replacement figure of ~$25B circulates in trade coverage; (c) vendor 'window replacement services' estimates cluster lower at $11.5-13.8B but measure narrower service-only/US-windows scopes. The ~$30B installed TAM is also consistent with top installers alone (Renewal by Andersen ~$2B installed (modeled), Power ~$1.24B partly windows, Great Day/Champion, Window Nation) plus a long fragmented tail. Product anchor is sourced (src-1); new/RR split is sourced (src-2, Freedonia 45/55).",
      "total": {
        "value": 30,
        "unit": "billion",
        "source": "src-1"
      },
      "newConstruction": {
        "value": 13.5,
        "unit": "billion",
        "modeledEstimate": true,
        "assumption": "Freedonia reports US residential window demand splits roughly 45% new construction / 55% renovation-replacement (src-2; corroborated via secondary trade attribution). Applied 45% to the ~$30B modeled installed residential TAM = ~$13.5B. Sourced split applied to a modeled total, so this value is itself modeled.",
        "source": "src-2"
      },
      "renovationRepair": {
        "value": 16.5,
        "unit": "billion",
        "modeledEstimate": true,
        "assumption": "55% renovation/replacement share (Freedonia, src-2) applied to the ~$30B modeled installed residential TAM = ~$16.5B. This replacement/remodel segment is the SMB-relevant installer market (aging housing stock, homeowner replacement demand) and is where the PE roll-ups operate. Modeled value (sourced split x modeled total).",
        "source": "src-2"
      }
    },
    "topPlayers": [
      {
        "name": "Renewal by Andersen",
        "approxRevenue": {
          "value": null,
          "unit": "billion",
          "source": null
        },
        "ownership": "private",
        "sponsor": "",
        "note": "Full-service replacement window+door division of privately/employee-owned Andersen Corporation (Andersen Corp total revenue ~$3.6B per Forbes, Nov 2024; src-3 confirms RbA is an Andersen subsidiary and reports 2024 profit sharing but does NOT itself state revenue). Manufactures, sells and installs Fibrex windows via 100+ US locations. Largest dedicated residential replacement-window installer. The ~$2B installed figure is a MODELED ESTIMATE for the RbA division, not a disclosed or independently sourced number.",
        "website": "https://www.renewalbyandersen.com/",
        "source": "src-3"
      },
      {
        "name": "Power Home Remodeling",
        "approxRevenue": {
          "value": 1.24,
          "unit": "billion",
          "source": "src-4"
        },
        "ownership": "private",
        "sponsor": "",
        "note": "Largest full-service residential exterior remodeler; $1.24B revenue on 97,631 jobs in 2024 (Qualified Remodeler TOP 500, ranked #4) - VERIFIED. Windows are a core product line alongside siding, roofing and doors, so only a portion is window-specific.",
        "website": "https://www.powerhrg.com/",
        "source": "src-4"
      },
      {
        "name": "Great Day Improvements (Champion Windows)",
        "approxRevenue": {
          "value": null,
          "unit": "billion",
          "source": null
        },
        "ownership": "PE-backed",
        "sponsor": "Littlejohn & Co. (minority)",
        "note": "Ranked #3 on Qualified Remodeler's 2024 TOP 500 (VERIFIED). Roll-up parent of Champion Windows, Universal Windows Direct, Stanek, Apex Energy Solutions, Patio Enclosures, and (via ELM) LeafGuard & Englert. Littlejohn made a structured-capital minority investment in 2022 (VERIFIED). Specific revenue not publicly disclosed; left null.",
        "website": "https://www.greatdayimprovements.com/",
        "source": "src-5"
      }
    ],
    "rollups": [
      {
        "platform": "Window Nation",
        "sponsor": "AEA Investors",
        "thesis": "Scale a differentiated direct-to-consumer replacement-window installer across a large, growing and fragmented market via geographic add-ons.",
        "notableAddOns": "ARMORVUE Window & Door (2024); NewSouth Window Solutions acquired from MITER Brands (Sept 2025); expanded from ~15 markets at AEA's 2021 acquisition. (AEA acquired Window Nation July 2021; NewSouth add-on VERIFIED via PRNewswire/BusinessWire Sept 2025.)",
        "link": "https://www.windowanddoor.com/news/aea-investors-acquires-window-nation",
        "linkType": "press-release",
        "source": "src-6"
      },
      {
        "platform": "Mosaic Service Partners",
        "sponsor": "Alpine Investors",
        "thesis": "Build a national residential window-and-door replacement platform by partnering with regional installers, investing in tech/marketing/talent while preserving local brands.",
        "notableAddOns": "Launched Nov 10, 2025 with The Window Experts (Houston), Weather Tite Windows (Tampa Bay), and Windows on Washington (DC metro). VERIFIED via Alpine announcement.",
        "link": "https://alpineinvestors.com/update/mosaic-service-partners-launch/",
        "linkType": "company",
        "source": "src-7"
      },
      {
        "platform": "Great Day Improvements",
        "sponsor": "Littlejohn & Co.",
        "thesis": "Consolidate direct-to-consumer window/exterior installers under one operating platform; cross-sell windows, doors, siding, sunrooms and gutters nationally.",
        "notableAddOns": "Champion Windows, Universal Windows Direct, Stanek, Apex Energy Solutions, Patio Enclosures, ELM Home & Building Solutions (LeafGuard & Englert). VERIFIED via Littlejohn announcement and Great Day brand portfolio.",
        "link": "https://littlejohnllc.com/news/littlejohn-co-makes-strategic-minority-investment-in-great-day-improvements/",
        "linkType": "press-release",
        "source": "src-5"
      }
    ],
    "fragmentation": {
      "score": 4,
      "rationale": "Highly fragmented installer market. Even the largest dedicated installer (Renewal by Andersen, ~$2B installed modeled) is well under 10% of a ~$30B installed TAM, and the top handful of installers combined are a low double-digit share. The bulk of replacement/installation work is performed by thousands of regional and local contractors. Manufacturing is more concentrated (Andersen, Pella, MITER) but the install/services layer the SMB thesis targets is fragmented. Not a 5 because national branded players (RbA, Power, Great Day, Window Nation) and active PE platforms are steadily taking share.",
      "source": "src-1"
    },
    "rollupIntensity": {
      "score": 4,
      "rationale": "Very active and accelerating. Multiple PE platforms are explicitly consolidating residential window/door installers: AEA's Window Nation (ARMORVUE 2024, NewSouth from MITER Brands Sept 2025 - both VERIFIED), Alpine's Mosaic Service Partners (launched Nov 2025 with 3 simultaneous add-ons - VERIFIED), and Littlejohn-backed Great Day Improvements (Champion/UWD/ELM - VERIFIED). Sustained bolt-on cadence and fresh platform formation in 2025 indicate intensity near the top of the scale."
    },
    "sources": [
      {
        "id": "src-1",
        "publisher": "Principia Consulting / HIRI",
        "title": "What Is Driving Residential Windows Demand (US residential windows market: 64.6M units / $20.6B in 2022)",
        "url": "https://www.principiaconsulting.com/2023/10/19/residential-windows-demand-through-2025/",
        "type": "market-research",
        "dateAccessed": "2026-06-24"
      },
      {
        "id": "src-2",
        "publisher": "The Freedonia Group",
        "title": "US Windows & Doors Market Research & Forecast Analysis, 2024-2033 (residential demand ~45% new construction / 55% renovation-replacement)",
        "url": "https://www.freedoniagroup.com/industry-study/windows-doors-us",
        "type": "market-research",
        "dateAccessed": "2026-06-24"
      },
      {
        "id": "src-3",
        "publisher": "Andersen Corporation / Twin Cities Business",
        "title": "Andersen Corp. Ends 2024 with $50.8M in Profit Sharing (confirms Renewal by Andersen is an Andersen subsidiary; Andersen Corp ~$3.6B revenue per Forbes Nov 2024 - revenue not stated in this article)",
        "url": "https://tcbmag.com/andersen-corp-ends-2024-with-50-8m-in-profit-sharing/",
        "type": "trade-press",
        "dateAccessed": "2026-06-24"
      },
      {
        "id": "src-4",
        "publisher": "Qualified Remodeler",
        "title": "TOP 500 2024 (Power Home Remodeling #4, $1.24B revenue on 97,631 jobs)",
        "url": "https://www.qualifiedremodeler.com/top-500-2024/",
        "type": "trade-press",
        "dateAccessed": "2026-06-24"
      },
      {
        "id": "src-5",
        "publisher": "Littlejohn & Co.",
        "title": "Littlejohn & Co. Makes Strategic, Minority Investment in Great Day Improvements",
        "url": "https://littlejohnllc.com/news/littlejohn-co-makes-strategic-minority-investment-in-great-day-improvements/",
        "type": "trade-press",
        "dateAccessed": "2026-06-24"
      },
      {
        "id": "src-6",
        "publisher": "Window + Door",
        "title": "AEA Investors Acquires Window Nation",
        "url": "https://www.windowanddoor.com/news/aea-investors-acquires-window-nation",
        "type": "trade-press",
        "dateAccessed": "2026-06-24"
      },
      {
        "id": "src-7",
        "publisher": "Alpine Investors",
        "title": "Alpine Investors Launches New Platform: Mosaic Service Partners",
        "url": "https://alpineinvestors.com/update/mosaic-service-partners-launch/",
        "type": "trade-press",
        "dateAccessed": "2026-06-24"
      }
    ]
  },
  "exterior-doors": {
    "dataStatus": "complete",
    "confidence": "low",
    "tam": {
      "total": {
        "value": 15,
        "unit": "billion",
        "source": "src-2"
      },
      "year": 2024,
      "newConstruction": {
        "value": 6,
        "unit": "billion",
        "modeledEstimate": true,
        "assumption": "Modeled ~40% of the installed exterior-door market attributable to new residential construction. Every new home installs entry + patio doors as standard items, but 2024 new single-family building was cyclically weak, so the split is weighted R&R-heavy. Derived by allocating the ~$15B installed TAM between per-home door content on ~1M completions and R&R. Not directly reported.",
        "source": "src-5"
      },
      "renovationRepair": {
        "value": 9,
        "unit": "billion",
        "modeledEstimate": true,
        "assumption": "Modeled ~60% of the installed exterior-door market as replacement/renovation. HIRI data (src-4) indicate door replacement is ~82% contractor-installed with ~75% of large-project cost being labor, making the installed replacement market materially larger than product-only revenue. Weighted heavier than new construction given depressed 2024 new homebuilding. Not directly reported.",
        "source": "src-4"
      },
      "methodology": "Re-anchored after verification. Product-level anchor: Verified Market Research US Entry Door Market (front entry + patio + storm + side doors) = $11.17B in 2023 (src-2, confirmed on source) - predominantly manufacturer/distributor product revenue. Cross-checked against public residential door-maker scale: JELD-WEN North America FY2024 net revenue $2.71B with doors = 63% of total company net revenues (src-3 confirms NA revenue; src-6 10-K confirms door % = 63%); Owens Corning Doors (ex-Masonite) Q4 2024 net sales $564M / FY2024 partial-year $1.448B (src-7, confirmed). Adding installation labor for the replacement portion (~82% contractor-installed, ~75% labor per HIRI src-4) lifts the installed sales+installation TAM above product-only into a ~$14-17B range. Order of magnitude is corroborated by the adjacent US garage-door market (~$16B per src-9). Total set at ~$15B. IMPORTANT: the previously-cited 'independent ~$15.3B 2024 residential exterior doors' figure from src-1 (Future Market Report) did NOT verify - that page actually reports a GLOBAL market of ~$12.2B (2025) with the US at 20.4% share (implying only ~$2.5B US), so src-1 was REMOVED as TAM corroboration. The total now rests on the VMR product anchor + HIRI labor uplift only, which is why confidence is downgraded. New-vs-R&R split is modeled (not reported).",
      "confidence": "low"
    },
    "topPlayers": [
      {
        "name": "JELD-WEN Holding, Inc.",
        "approxRevenue": {
          "value": 2.7,
          "unit": "billion",
          "source": "src-3"
        },
        "ownership": "public",
        "sponsor": "",
        "note": "NYSE: JELD. North America segment FY2024 net revenue $2.71B (src-3, confirmed); door sales = 63% of total company net revenues per FY2024 10-K (src-6, confirmed). Leading US manufacturer of interior and exterior residential doors (fiberglass/steel entry and patio).",
        "website": "https://www.jeld-wen.com",
        "source": "src-3"
      },
      {
        "name": "Owens Corning Doors (Masonite)",
        "approxRevenue": {
          "value": 2.3,
          "unit": "billion",
          "source": "src-7"
        },
        "ownership": "public",
        "sponsor": "",
        "note": "Masonite acquired by Owens Corning (NYSE: OC) May 2024; now the Doors segment. Q4 2024 net sales $564M (confirmed); FY2024 partial-year (post-close) Doors revenue $1.448B (src-7, confirmed). ~$2.3B annualized run-rate ($564M x4) used as a full-year proxy. Major US residential entry/exterior door system maker.",
        "website": "https://www.owenscorning.com",
        "source": "src-7"
      },
      {
        "name": "Andersen Corporation (incl. Renewal by Andersen)",
        "approxRevenue": {
          "value": null,
          "unit": "billion",
          "source": null
        },
        "ownership": "private",
        "sponsor": "",
        "note": "Privately/employee-held. Major residential window and door manufacturer; Renewal by Andersen is its start-to-finish replacement installation arm. It introduced its first entry-door product in 2024 and launched the Ensemble Entry Door Designer Collection in May 2025 (src-8, confirmed). Company-wide revenue not publicly disclosed; exterior-door-specific figure unavailable.",
        "website": "https://www.andersenwindows.com",
        "source": "src-8"
      }
    ],
    "rollups": [],
    "fragmentation": {
      "score": 4,
      "rationale": "Manufacturing of residential exterior doors is moderately consolidated - a handful of national players (JELD-WEN, Owens Corning/Masonite, Andersen, Pella, Therma-Tru/Fortune Brands) hold large share. But the SALES + INSTALLATION layer is highly fragmented: doors reach homeowners through thousands of independent dealers, lumberyards, remodelers, and retailer install programs (Home Depot/Lowe's). The installed-services market - the SMB-acquirable layer - is fragmented; the upstream product layer is more concentrated. Net score 4 (fragmented, leaning toward the installation channel). HIRI (src-4) confirms ~82% contractor-installed, consistent with a deep independent-installer base.",
      "source": "src-4"
    },
    "rollupIntensity": {
      "score": 2,
      "rationale": "No identifiable PE-backed roll-up platform dedicated to residential exterior (entry/patio) door SALES + INSTALLATION exists, unlike the adjacent garage-door space. Per src-9 (PitchBook, confirmed): garage-door PE deal activity was 29 deals in 2024 and 26 in 2025, and Oak Hill Capital acquired Guild Garage Group for ~$800M (16x EBITDA) in 2026 - a DISTINCT product category. Exterior-door consolidation has instead occurred at the MANUFACTURING level - most notably Owens Corning's ~$3.9B acquisition of Masonite (2024) - not as a fragmented-installer buy-and-build. Entry/patio door installation is typically bundled into broader window/door or general remodeling roll-ups rather than pursued as a standalone thesis. Low-to-moderate dedicated activity."
    },
    "sources": [
      {
        "id": "src-1",
        "publisher": "Future Market Report",
        "title": "Residential Exteriors Doors Market Size, Share, Growth | CAGR Forecast",
        "url": "https://www.futuremarketreport.com/industry-report/residential-exteriors-doors-market",
        "type": "market-research",
        "dateAccessed": "2026-06-24"
      },
      {
        "id": "src-2",
        "publisher": "Verified Market Research",
        "title": "US Entry Door Market Size And Forecast",
        "url": "https://www.verifiedmarketresearch.com/product/us-entry-door-market/",
        "type": "market-research",
        "dateAccessed": "2026-06-24"
      },
      {
        "id": "src-3",
        "publisher": "PR Newswire / JELD-WEN Holding, Inc.",
        "title": "JELD-WEN Reports Fourth Quarter and Full Year 2024 Results",
        "url": "https://www.prnewswire.com/news-releases/jeld-wen-reports-fourth-quarter-and-full-year-2024-results-302378059.html",
        "type": "filing",
        "dateAccessed": "2026-06-24"
      },
      {
        "id": "src-4",
        "publisher": "Home Improvement Research Institute (HIRI)",
        "title": "Doors Market Expectations and Trends in Installation and Replacement Activity",
        "url": "https://www.hiri.org/blog/doors-market-expectations-trends",
        "type": "trade-association",
        "dateAccessed": "2026-06-24"
      },
      {
        "id": "src-5",
        "publisher": "Harvard Joint Center for Housing Studies (JCHS)",
        "title": "Leading Indicator of Remodeling Activity (LIRA)",
        "url": "https://www.jchs.harvard.edu/research-areas/remodeling/lira",
        "type": "trade-association",
        "dateAccessed": "2026-06-24"
      },
      {
        "id": "src-6",
        "publisher": "U.S. Securities and Exchange Commission / JELD-WEN Holding, Inc.",
        "title": "JELD-WEN Holding, Inc. - Form 10-K - FY2024 (door % of revenue and product mix)",
        "url": "https://www.sec.gov/Archives/edgar/data/0001674335/000167433525000055/jeld-20241231.htm",
        "type": "filing",
        "dateAccessed": "2026-06-24"
      },
      {
        "id": "src-7",
        "publisher": "Owens Corning (Investor Relations)",
        "title": "Owens Corning Delivers Full-Year Net Sales of $11.0 Billion (Doors segment Q4 2024 net sales $564M)",
        "url": "https://investor.owenscorning.com/investors/stock-performance-and-earnings/press-releases/press-release-details/2025/Owens-Corning-Delivers-Full-Year-Net-Sales-of-11.0-Billion-Generates-Earnings-of-647-Million-and-Adjusted-EBIT-of-2.0-Billion/default.aspx",
        "type": "filing",
        "dateAccessed": "2026-06-24"
      },
      {
        "id": "src-8",
        "publisher": "PR Newswire / Renewal by Andersen",
        "title": "Renewal by Andersen Launches Ensemble Entry Door Designer Collection",
        "url": "https://www.prnewswire.com/news-releases/renewal-by-andersen-launches-ensemble-entry-door-designer-collection-302444335.html",
        "type": "trade-press",
        "dateAccessed": "2026-06-24"
      },
      {
        "id": "src-9",
        "publisher": "PitchBook",
        "title": "PE hopes garage door roll-ups will be the new HVAC",
        "url": "https://pitchbook.com/news/articles/pe-hopes-garage-door-roll-ups-will-be-the-new-hvac",
        "type": "trade-press",
        "dateAccessed": "2026-06-24"
      },
      {
        "id": "src-10",
        "publisher": "Principia Consulting",
        "title": "Detailing Residential Doors Market Demand, Size, and Segmentation",
        "url": "https://www.principiaconsulting.com/2022/09/07/detailing-residential-doors-market-demand/",
        "type": "market-research",
        "dateAccessed": "2026-06-24"
      }
    ]
  },
  "decks-patios": {
    "dataStatus": "complete",
    "confidence": "medium",
    "tam": {
      "total": {
        "value": 8.5,
        "unit": "billion",
        "source": "src-3"
      },
      "year": 2024,
      "methodology": "Two valid lenses exist and conflict, so the total is MODELED. (1) Narrow pure-play 'Deck & Patio Construction' contractor industry (IBISWorld, a NAICS-23899x subset) = ~$1.3bn [src-1] -- captures only specialist deck/patio firms and excludes decks/patios installed by GCs, landscapers, remodelers, hardscapers, and DIY, so it materially understates the installed market. (NOTE: IBISWorld's live page now labels the ~$1.3bn figure as 2026; value is stable across recent years.) (2) Materials-up build: Freedonia data put US decking MATERIALS demand at ~$7bn [src-3]; Grand View puts the residential end-use share at ~81% [src-2, vendor PDF, one data point]. Grossing residential decking materials (~$5.5-6bn) up for installation labor on the contractor-installed portion, then adding residential patio/hardscape installation (patios appear on ~64% of new homes vs ~17% for decks per Census SOC [src-5], and are a large remodel category), yields an installed US residential decks+patios market on the order of $8-9bn. Midpoint $8.5bn used. Order-of-magnitude estimate, not a precise figure; corroboration across vendors is partial and no single allowlisted source asserts this number.",
      "confidence": "low",
      "newConstruction": {
        "value": 2.6,
        "unit": "billion",
        "assumption": "MODELED. New residential construction is the minority channel: only ~17.4% of new single-family homes completed in 2024 had a deck (a new all-time low, down from 17.6% in 2023) while ~64% had a patio, per NAHB tabulation of the Census/HUD Survey of Construction [src-5]. New-build decks/patios are also lower-spec per unit than remodel projects. Allocated ~30% of the modeled $8.5bn total to new construction.",
        "modeledEstimate": true,
        "source": "src-5"
      },
      "renovationRepair": {
        "value": 5.9,
        "unit": "billion",
        "assumption": "MODELED. Remodel/replacement/repair is the dominant channel -- existing-home owners rebuilding aging decks and adding outdoor-living space. JCHS reports the US home-improvement & repair market is above $600bn (2022-2025), with outside-property/outside-attachment projects (fences, patios, decks, porches, landscaping) a meaningful slice [src-4]. Allocated ~70% of the modeled $8.5bn total to renovation/repair/replacement.",
        "modeledEstimate": true,
        "source": "src-4"
      }
    },
    "topPlayers": [
      {
        "name": "Trex Company, Inc.",
        "approxRevenue": {
          "value": 1.151,
          "unit": "billion",
          "source": "src-6"
        },
        "ownership": "public",
        "sponsor": "",
        "note": "Largest US wood-alternative (composite) decking & railing maker; FY2024 net sales $1.151bn (+5.2% YoY), overwhelmingly residential. A materials manufacturer, not a contractor, but the single largest revenue pool in the residential decking value chain. VERIFIED against FY2024 earnings release ($1,151,449K).",
        "website": "https://www.trex.com",
        "source": "src-6"
      },
      {
        "name": "AZEK Company (TimberTech / AZEK Exteriors)",
        "approxRevenue": {
          "value": 1.44,
          "unit": "billion",
          "source": "src-7"
        },
        "ownership": "public",
        "sponsor": "",
        "note": "#2 composite/PVC decking & outdoor-living maker (TimberTech). FY2024 net sales $1.44bn (residential segment $1.37bn), VERIFIED via AZEK FY2024 Q4 earnings release. Acquired by James Hardie Industries (NYSE/ASX: JHX) on 1 July 2025 (~$8.4bn implied / ~$8.75bn total transaction value incl. net debt); now a James Hardie subsidiary (public parent).",
        "website": "https://www.azekco.com",
        "source": "src-7"
      },
      {
        "name": "Archadeck Outdoor Living (Empower Brands)",
        "approxRevenue": {
          "value": null,
          "unit": "billion",
          "source": null
        },
        "ownership": "PE-backed",
        "sponsor": "MidOcean Partners",
        "note": "Largest US custom outdoor-living DESIGN-BUILD franchise (decks, porches, patios, hardscapes) -- the closest thing to a national residential deck/patio contractor. Part of Empower Brands, a MidOcean Partners franchise platform (confirmed via empowerfranchising.com). Specific unit count / per-franchisee averages NOT confirmed on the company page. System-wide revenue not separately disclosed (left null).",
        "website": "https://www.archadeck.com",
        "source": "src-8"
      }
    ],
    "rollups": [
      {
        "platform": "Archadeck Outdoor Living / Empower Brands",
        "sponsor": "MidOcean Partners",
        "thesis": "Franchise roll-up of residential outdoor-living design-build (decks, porches, patios, hardscapes) under a multi-brand home-services platform.",
        "notableAddOns": "Empower Brands portfolio also includes Superior Fence & Rail, Conserva Irrigation, Outdoor Lighting Perspectives, Wallaby Windows, Koala Insulation, Bumble Roofing, Canopy Lawn Care",
        "link": "https://empowerfranchising.com/our-brands/archadeck-outdoor-living/",
        "linkType": "company",
        "source": "src-8"
      },
      {
        "platform": "Decks & Docks",
        "sponsor": "CCMP Growth Advisors",
        "thesis": "Buy-and-build distribution platform for decking, dock and outdoor-building materials serving contractors and residential customers across the Eastern US.",
        "notableAddOns": "Excelsior and Fence & Deck Direct (April 2024); 38 locations total after partnering with CCMP in Oct 2023",
        "link": "https://www.businesswire.com/news/home/20240416921603/en/Decks-Docks-Partners-with-Excelsior-and-Fence-Deck-Direct",
        "linkType": "press-release",
        "source": "src-9"
      },
      {
        "platform": "Outdoor Living Supply",
        "sponsor": "Trilantic North America",
        "thesis": "Consolidation of hardscape / outdoor-living / landscape-materials distributors supplying patio, paver and outdoor-living contractors.",
        "notableAddOns": "Multiple hardscape add-ons since 2020 launch (e.g., Geo. Schofield, Mid-Atlantic/South-Atlantic Concrete Products, Garden Supply Hardscapes 2024)",
        "link": "https://www.deck-specialist.com/outdoor-living-supply-acquires-two-hardscape-companies/",
        "linkType": "press-release",
        "source": "src-10"
      }
    ],
    "fragmentation": {
      "score": 5,
      "rationale": "Highly fragmented at the contractor/installer level. IBISWorld counts thousands of US Deck & Patio Construction businesses with NO firm holding a dominant share. Dominated by small local design-build and handyman-style operators; consolidation exists mainly upstream in materials manufacturing (Trex, AZEK) and distribution (Decks & Docks, Outdoor Living Supply), plus one national builder franchise (Archadeck) -- not in the install base itself. (NOTE: the specific '~6,746 businesses / none >5% share' figures sit behind IBISWorld's paywall and could not be re-verified; directional fragmentation claim stands.)",
      "source": "src-1"
    },
    "rollupIntensity": {
      "score": 3,
      "rationale": "Moderate. Active consolidation is real but mostly adjacent to the install trade: materials M&A (James Hardie's ~$8.4bn AZEK acquisition completed July 2025) and PE-backed distribution roll-ups (CCMP's Decks & Docks, Trilantic's Outdoor Living Supply). At the contractor level, Archadeck/Empower (MidOcean) is the main organized platform and growth is franchise-led rather than acquisition-led, so direct roll-up of independent deck/patio builders is still early-stage."
    },
    "sources": [
      {
        "id": "src-1",
        "publisher": "IBISWorld",
        "title": "Deck & Patio Construction in the US - Market Size Statistics",
        "url": "https://www.ibisworld.com/industry-statistics/market-size/deck-patio-construction-united-states/",
        "type": "market-research",
        "dateAccessed": "2026-06-24"
      },
      {
        "id": "src-2",
        "publisher": "Grand View Research",
        "title": "Decks Market Size, Share & Trends Industry Report",
        "url": "https://www.grandviewresearch.com/industry-analysis/decks-market-report",
        "type": "market-research",
        "dateAccessed": "2026-06-24"
      },
      {
        "id": "src-3",
        "publisher": "The Freedonia Group",
        "title": "US Wood & Competitive Decking - Market Size, Demand Forecast",
        "url": "https://www.freedoniagroup.com/industry-study/us-wood-competitive-decking",
        "type": "market-research",
        "dateAccessed": "2026-06-24"
      },
      {
        "id": "src-4",
        "publisher": "Harvard Joint Center for Housing Studies",
        "title": "Improving America's Housing 2025",
        "url": "https://www.jchs.harvard.edu/improving-americas-housing-2025",
        "type": "trade-association",
        "dateAccessed": "2026-06-24"
      },
      {
        "id": "src-5",
        "publisher": "NAHB Eye On Housing (Census/HUD Survey of Construction)",
        "title": "Share of New Homes with Decks Edges Lower",
        "url": "https://eyeonhousing.org/2025/11/share-of-new-homes-with-decks-edges-lower/",
        "type": "trade-association",
        "dateAccessed": "2026-06-24"
      },
      {
        "id": "src-6",
        "publisher": "Trex Company, Inc. (via StockTitan, FY2024 earnings release)",
        "title": "Trex Company Reports Fourth Quarter and Full Year 2024 Results",
        "url": "https://www.stocktitan.net/news/TREX/trex-company-reports-fourth-quarter-and-full-year-2024-ilmoub09h4vl.html",
        "type": "filing",
        "dateAccessed": "2026-06-24"
      },
      {
        "id": "src-7",
        "publisher": "The AZEK Company (Form 8-K, Q4/FY2024 earnings release, via BusinessWire/SEC)",
        "title": "The AZEK Company Announces Fourth Quarter and Full-Year Fiscal 2024 Results",
        "url": "https://www.businesswire.com/news/home/20241119098618/en/The-AZEK-Company-Announces-Fourth-Quarter-and-Full-Year-Fiscal-2024-Results",
        "type": "filing",
        "dateAccessed": "2026-06-24"
      },
      {
        "id": "src-8",
        "publisher": "Empower Brands",
        "title": "Archadeck Outdoor Living - Empower Brands (MidOcean Partners platform)",
        "url": "https://empowerfranchising.com/our-brands/archadeck-outdoor-living/",
        "type": "trade-press",
        "dateAccessed": "2026-06-24"
      },
      {
        "id": "src-9",
        "publisher": "BusinessWire",
        "title": "Decks & Docks (CCMP Growth Advisors) Partners with Excelsior and Fence & Deck Direct",
        "url": "https://www.businesswire.com/news/home/20240416921603/en/Decks-Docks-Partners-with-Excelsior-and-Fence-Deck-Direct",
        "type": "trade-press",
        "dateAccessed": "2026-06-24"
      },
      {
        "id": "src-10",
        "publisher": "Deck Specialist",
        "title": "Outdoor Living Supply (Trilantic North America) Acquires Two Hardscape Companies",
        "url": "https://www.deck-specialist.com/outdoor-living-supply-acquires-two-hardscape-companies/",
        "type": "trade-press",
        "dateAccessed": "2026-06-24"
      }
    ]
  },
  "driveways-hardscape": {
    "dataStatus": "complete",
    "confidence": "medium",
    "tam": {
      "total": {
        "value": 30,
        "unit": "billion",
        "source": "src-5"
      },
      "newConstruction": {
        "value": 9,
        "unit": "billion",
        "assumption": "Modeled at ~30% of the ~$30B residential concrete/flatwork/hardscape installation market. Driveways, patios, walks and slabs are standard inclusions in new single-family homes (63.7% of 2023 new SF starts had patios per NAHB/Census SOC, src-9), but new-home flatwork is a smaller slice of total demand than replacement/renovation because the installed base of existing homes is far larger than annual completions. The 30% share is benchmarked against the Census 2024 residential construction mix and the much larger existing-home stock, which skews flatwork spend toward repair/replacement. NOT a directly reported figure.",
        "modeledEstimate": true,
        "source": "src-3"
      },
      "renovationRepair": {
        "value": 21,
        "unit": "billion",
        "assumption": "Modeled at ~70% of the ~$30B market. Residential concrete franchisors (e.g., Sam the Concrete Man) describe core demand as driveway/sidewalk repair and replacement and patio installation on existing homes, indicating the bulk of spend is renovation/repair rather than new construction. Consistent with the JCHS LIRA owner-occupied home improvement & repair pool (~$509B for 2025, confirmed via src-4), of which exterior/outdoor hardscape is a small component. Split is a modeled estimate, not a directly reported figure.",
        "modeledEstimate": true,
        "source": "src-4"
      },
      "year": 2024,
      "methodology": "Hybrid. The headline ~$30B residential concrete services figure is taken verbatim from Eagle Merchant Partners' Oct-2024 acquisition rationale for Sam the Concrete Man, which characterizes the U.S. residential concrete services market as 'a $30 billion sector' that is 'highly fragmented...with no national leader' (src-5, confirmed). Corroborated top-down for order-of-magnitude: IBISWorld's broader U.S. Concrete Contractors industry (residential driveways/walks plus commercial, structural and foundation work) is $110.5B for 2026 (src-1, confirmed); residential flatwork/driveways/hardscape installation is a minority subset, consistent with ~$30B. Census 2024 residential construction put-in-place (~$917.9B, src-3) and JCHS LIRA owner-occupied improvement spending (~$509B 2025, src-4 confirmed) frame the new-vs-renovation split. Hardscaping PRODUCTS (pavers, stone, walls) are a much smaller materials-only market (~$4.9B in 2025 per Arizton, src-6) and are a component of, not a substitute for, the installed-services TAM. The ~$30B headline rests on a SINGLE PE-deal source; the new/reno split is modeled, not reported. Confidence: medium.",
      "confidence": "medium"
    },
    "topPlayers": [
      {
        "name": "Sam the Concrete Man (SamCo)",
        "approxRevenue": {
          "value": null,
          "unit": "million",
          "source": null
        },
        "ownership": "PE-backed",
        "sponsor": "Eagle Merchant Partners",
        "note": "Described by the PE buyer as the largest residential concrete services franchisor in the U.S.; 80+ franchise units across 30 states (confirmed src-5). System-wide sales on the order of ~$80M is an INFERRED estimate (avg-unit-revenue x units); src-5 does NOT disclose unit economics or system revenue. Majority stake acquired by Eagle Merchant Partners Oct 2024; CEO Todd Stewart (acquired the original business 2007, launched franchise model 2019) retained equity.",
        "website": "https://samtheconcreteman.com",
        "source": "src-5"
      },
      {
        "name": "The Driveway Company",
        "approxRevenue": {
          "value": null,
          "unit": "million",
          "source": null
        },
        "ownership": "franchise",
        "sponsor": "",
        "note": "Concrete repair/maintenance and decorative driveway franchise, 30+ years in the industry, present in 12+ states (confirmed src-7). Privately held; CEO Gary Findley (confirmed). System-wide revenue not disclosed. Specific unit count (~45) and incorporation year (2006) not corroborated by src-7.",
        "website": "https://thedrivewaycompany.com",
        "source": "src-7"
      },
      {
        "name": "Concrete Craft",
        "approxRevenue": {
          "value": null,
          "unit": "million",
          "source": null
        },
        "ownership": "franchise",
        "sponsor": "",
        "note": "Decorative concrete franchise owned by Home Franchise Concepts (ultimate parent JM Family Enterprises). Unit count collapsed from 85 (2022) to 77 (end-2023) to 35 (Jan-2025) to 3 (Jan-2026), and the brand reportedly showed ZERO franchise locations by April 2026 (src-8). Included as a notable but effectively defunct branded player. Revenue not disclosed.",
        "website": "https://www.concretecraft.com",
        "source": "src-8"
      }
    ],
    "rollups": [
      {
        "platform": "Sam the Concrete Man (SamCo)",
        "sponsor": "Eagle Merchant Partners",
        "thesis": "Build the national brand in residential concrete services (driveways, sidewalks, patios) via a franchise-led roll-up of a ~$30B market that has no national leader.",
        "notableAddOns": "Organic franchise-unit expansion (80+ units across 30 states); CEO Todd Stewart retained equity; plans to scale the network and add adjacent residential concrete services.",
        "link": "https://peprofessional.com/2024/10/eagle-acquires-sam-the-concrete-man/",
        "linkType": "press-release",
        "source": "src-5"
      }
    ],
    "fragmentation": {
      "score": 5,
      "rationale": "Highly fragmented. The residential driveway/flatwork/hardscape installation market is dominated by small, local, owner-operated concrete contractors. The PE buyer of the largest branded residential player explicitly states there is 'no national leader' (src-5, confirmed), and IBISWorld characterizes the broader concrete contractors industry as highly fragmented with no firm holding meaningful national share. The largest revenue concrete contractors nationally (Baker Concrete, Lithko, Keystone) are commercial/structural, not residential flatwork.",
      "source": "src-5"
    },
    "rollupIntensity": {
      "score": 2,
      "rationale": "Limited residential-specific consolidation. There is one credible emerging PE-backed residential platform (Eagle Merchant Partners' Oct-2024 investment in Sam the Concrete Man, a franchise model - confirmed src-5). Most active concrete/paving roll-up capital is concentrated on the COMMERCIAL side (e.g., Trinity Hunt's Sage Surface Partners/DACS, Huron Capital's Sunland Asphalt, Heartland Paving Partners), not residential driveways/hardscape. Net: early-stage, low-intensity for the residential segment specifically."
    },
    "sources": [
      {
        "id": "src-1",
        "publisher": "IBISWorld",
        "title": "Concrete Contractors in the US - Market Size (2026: $110.5bn)",
        "url": "https://www.ibisworld.com/united-states/market-size/concrete-contractors/200/",
        "type": "market-research",
        "dateAccessed": "2026-06-24"
      },
      {
        "id": "src-3",
        "publisher": "U.S. Census Bureau",
        "title": "Monthly Construction Spending, December 2024 (residential put-in-place)",
        "url": "https://www.census.gov/construction/c30/pdf/pr202412.pdf",
        "type": "government",
        "dateAccessed": "2026-06-24"
      },
      {
        "id": "src-4",
        "publisher": "Harvard Joint Center for Housing Studies (JCHS)",
        "title": "Leading Indicator of Remodeling Activity (LIRA) - owner-occupied improvement & repair spending (~$509B, 2025)",
        "url": "https://www.jchs.harvard.edu/research-areas/remodeling/lira",
        "type": "trade-association",
        "dateAccessed": "2026-06-24"
      },
      {
        "id": "src-5",
        "publisher": "PE Professional",
        "title": "Eagle Acquires Sam the Concrete Man (residential concrete services 'a $30 billion sector', no national leader)",
        "url": "https://peprofessional.com/2024/10/eagle-acquires-sam-the-concrete-man/",
        "type": "trade-press",
        "dateAccessed": "2026-06-24"
      },
      {
        "id": "src-6",
        "publisher": "Arizton Advisory & Intelligence (via PR Newswire)",
        "title": "U.S. Hardscaping Products Market Size to Hit USD 6.50 Billion by 2031 (2025 baseline ~$4.9B, materials only)",
        "url": "https://www.prnewswire.co.uk/news-releases/us-hardscaping-products-market-size-to-hit-usd-6-50-billion--tools-revenue-to-reach-usd-3-06-billion-by-2031--growth-trends-share--forecast--arizton-302804273.html",
        "type": "market-research",
        "dateAccessed": "2026-06-24"
      },
      {
        "id": "src-7",
        "publisher": "The Driveway Company",
        "title": "About Us - The Driveway Company (franchise, 12+ states, CEO Gary Findley)",
        "url": "https://thedrivewaycompany.com/about-us/",
        "type": "trade-press",
        "dateAccessed": "2026-06-24"
      },
      {
        "id": "src-8",
        "publisher": "Unhappy Franchisee",
        "title": "Home Franchise Concepts' Concrete Craft Has Disappeared - unit-count history (85 in 2022 to 3 in Jan-2026, ~0 by Apr-2026)",
        "url": "https://unhappyfranchisee.com/home-franchise-concepts-concrete-craft/",
        "type": "trade-press",
        "dateAccessed": "2026-06-24"
      },
      {
        "id": "src-9",
        "publisher": "NAHB / Eye On Housing (U.S. Census Survey of Construction)",
        "title": "Patio adoption in new single-family homes (63.7% of 2023 had patios)",
        "url": "https://eyeonhousing.org/2024/09/over-two-thirds-of-new-homes-in-2023-feature-porches/",
        "type": "trade-association",
        "dateAccessed": "2026-06-24"
      }
    ]
  },
  "insulation": {
    "dataStatus": "complete",
    "confidence": "medium",
    "tam": {
      "year": 2025,
      "confidence": "medium",
      "methodology": "Top-down. Anchor = IBISWorld 'Insulation Contractors' (NAICS 23831 subset / IBISWorld 4870), the revenue of US establishments primarily engaged in installing insulation in buildings: $13.6B in 2025 across 28,814 establishments (src-1, src-5, both confirmed live). This installation-services figure (not the ~$12.5B insulation-MATERIALS market measured by Grand View in 2023, src-2) is the correct basis for an SMB-acquisition TAM because it captures contractor top-line revenue. Residential portion MODELED at ~$8.0B (~59% of the $13.6B total): the two large public consolidators are deliberately weighted toward commercial/mechanical work (TopBuild's mix is ~65% commercial/industrial vs ~35% residential, confirmed src-6), but the long tail of ~28,800 mostly small, local contractors is overwhelmingly residential, and Grand View notes residential is the largest application segment in the US (confirmed src-2). Residential share is an analyst estimate, hence medium confidence.",
      "total": {
        "value": 13.6,
        "unit": "billion",
        "source": "src-1"
      },
      "newConstruction": {
        "value": 4.4,
        "unit": "billion",
        "modeledEstimate": true,
        "assumption": "No source reports a residential new-vs-retrofit split for insulation installation. Modeled at ~55% of the ~$8.0B residential estimate (~$4.4B). Rationale: builder-channel installers like IBP report residential new construction as the dominant growth driver of insulation installation (src-3), but that overstates the universe because independent retrofit-focused contractors (e.g. Koala, USA Insulation franchises, src-7, src-8) skew toward existing-home work; blended toward roughly even, tilted to new build. Anchor concept: residential new-construction insulation tracks Census new private residential construction spending; retrofit tracks JCHS/remodel activity. modeledEstimate=true; no direct source, hence source=null.",
        "source": null
      },
      "renovationRepair": {
        "value": 3.6,
        "unit": "billion",
        "modeledEstimate": true,
        "assumption": "Modeled at ~45% of the ~$8.0B residential estimate (~$3.6B), i.e. the residual after new construction. Retrofit/re-insulation demand is supported by IRA Energy-Efficient Home Improvement (25C) tax credits and the finding that 89% of US homes are under-insulated (NAIMA/ICF using NREL 2024 ResStock, confirmed src-9), suggesting a large and growing replacement/retrofit pool. Split is modeled (modeledEstimate=true); src-9 supports the demand thesis, not the dollar figure.",
        "source": "src-9"
      }
    },
    "topPlayers": [
      {
        "name": "TopBuild Corp. (TruTeam)",
        "approxRevenue": {
          "value": 1.87,
          "unit": "billion",
          "source": "src-6"
        },
        "ownership": "public",
        "sponsor": "",
        "note": "Largest US insulation installer (TruTeam, 235+ branches). Total 2024 sales $5.33B (Installation/TruTeam $3.29B + Specialty Distribution/Service Partners $2.34B); end-market mix ~35% residential / ~65% commercial-industrial, implying ~$1.87B residential (confirmed src-6). NYSE: BLD.",
        "website": "https://www.topbuild.com",
        "source": "src-6"
      },
      {
        "name": "Installed Building Products, Inc. (IBP)",
        "approxRevenue": {
          "value": 1.7,
          "unit": "billion",
          "source": "src-3"
        },
        "ownership": "public",
        "sponsor": "",
        "note": "2nd-largest installer; FY2024 net revenue $2.94B, ~60% from insulation installation, residential-dominant (growth driven by single-family new construction), implying roughly $1.7B residential insulation. NYSE: IBP. Confirmed src-3.",
        "website": "https://www.installedbuildingproducts.com",
        "source": "src-3"
      },
      {
        "name": "Koala Insulation",
        "approxRevenue": {
          "value": null,
          "unit": "million",
          "source": null
        },
        "ownership": "franchise",
        "sponsor": "Empower Brands (MidOcean Partners)",
        "note": "Fastest-scaling pure-play RESIDENTIAL retrofit insulation brand; ~395 operational franchised units across 37 states (~420 total territories) by mid-2025 (confirmed src-7 and official site). System-wide revenue not publicly disclosed. PE-backed via Empower Brands / MidOcean Partners (acquired 2023).",
        "website": "https://koalainsulation.com",
        "source": "src-7"
      }
    ],
    "rollups": [
      {
        "platform": "TopBuild Corp. (TruTeam)",
        "sponsor": "Public (NYSE: BLD)",
        "thesis": "Serial acquirer consolidating regional insulation installers and specialty distributors into a national platform, increasingly diversifying into commercial/mechanical insulation.",
        "notableAddOns": "Specialty Products & Insulation (SPI, ~$1B, 2023); completed eight acquisitions in 2024 (~$153M added annual sales). Linked release (src-10) is the Nov-2021 acquisition of Tonks Insulation (UT) and Shepherds Insulation (CO).",
        "link": "https://www.topbuild.com/investors/press-releases/detail/127/topbuild-acquires-two-residential-insulation-installation-companies",
        "linkType": "press-release",
        "source": "src-10"
      },
      {
        "platform": "Koala Insulation (Empower Brands)",
        "sponsor": "MidOcean Partners",
        "thesis": "Franchise roll-up professionalizing a fragmented, mom-and-pop residential retrofit insulation category under a national brand and shared back-office/marketing.",
        "notableAddOns": "Acquired by Empower Brands in 2023 alongside Wallaby Windows; ~395 operational franchised units / ~420 territories by mid-2025.",
        "link": "https://www.pehub.com/pe-backed-empower-brands-acquires-franchises-koala-insulation-and-wallaby-windows/",
        "linkType": "press-release",
        "source": "src-7"
      },
      {
        "platform": "USA Insulation (Threshold Brands)",
        "sponsor": "The Riverside Company",
        "thesis": "PE-backed trade-services franchise platform consolidating residential/commercial retrofit insulation (proprietary USA Premium Foam) under the Threshold Brands umbrella.",
        "notableAddOns": "Acquired into Riverside's Threshold Brands platform (launched 2021); ~50 franchised locations alongside MaidPro, Pestmaster, Men in Kilts.",
        "link": "https://www.riversidecompany.com/currents/riverside-sweeps-in-with-latest-trade-services-franchise-strategy/",
        "linkType": "press-release",
        "source": "src-8"
      }
    ],
    "fragmentation": {
      "score": 5,
      "rationale": "Highly fragmented. IBISWorld: the US Insulation Contractors industry is 'highly fragmented with no companies holding a market share greater than 5%,' spread across 28,814 establishments (confirmed src-1, src-5). Even the two largest national players (TopBuild residential ~$1.87B, IBP residential ~$1.7B) each hold well under 5% of a $13.6B contractor market, and below ~$8B residential, the bulk is served by thousands of small local and regional contractors and franchisees. Classic consolidation target.",
      "source": "src-1"
    },
    "rollupIntensity": {
      "score": 4,
      "rationale": "Very active. Two public serial consolidators (TopBuild - eight acquisitions in 2024 alone; IBP) execute continuous tuck-in acquisitions of regional installers, and two distinct PE-backed franchise platforms target the residential retrofit niche: Empower Brands/MidOcean (Koala Insulation) and Riverside/Threshold Brands (USA Insulation). Tailwinds from IRA 25C tax credits and 89% of homes under-insulated keep deal interest high (src-9). Not a 5 because residential-specific platform M&A, outside the two publics, is still relatively early and franchise-led rather than equity roll-up of independents."
    },
    "sources": [
      {
        "id": "src-1",
        "publisher": "IBISWorld",
        "title": "Insulation Contractors in the US - Industry Analysis (NAICS 4870), 2025",
        "url": "https://www.ibisworld.com/united-states/industry/insulation-contractors/4870/",
        "type": "market-research",
        "dateAccessed": "2026-06-24"
      },
      {
        "id": "src-2",
        "publisher": "Grand View Research",
        "title": "U.S. Insulation Market Size & Share | Industry Report, 2030",
        "url": "https://www.grandviewresearch.com/industry-analysis/us-insulation-market-report",
        "type": "market-research",
        "dateAccessed": "2026-06-24"
      },
      {
        "id": "src-3",
        "publisher": "Installed Building Products, Inc. (Business Wire)",
        "title": "Installed Building Products Reports Record Fourth Quarter 2024 Results",
        "url": "https://www.businesswire.com/news/home/20250226863227/en/Installed-Building-Products-Reports-Record-Fourth-Quarter-2024-Results",
        "type": "filing",
        "dateAccessed": "2026-06-24"
      },
      {
        "id": "src-5",
        "publisher": "IBISWorld",
        "title": "Insulation Contractors in the US - Market Size Statistics",
        "url": "https://www.ibisworld.com/united-states/market-size/insulation-contractors/4870/",
        "type": "market-research",
        "dateAccessed": "2026-06-24"
      },
      {
        "id": "src-6",
        "publisher": "Investing.com (reporting TopBuild Q4 2024 investor slides)",
        "title": "TopBuild Q4 2024 slides: 9-year growth streak continues amid market headwinds",
        "url": "https://ca.investing.com/news/company-news/topbuild-q4-2024-slides-9year-growth-streak-continues-amid-market-headwinds-93CH-4482117",
        "type": "filing",
        "dateAccessed": "2026-06-24"
      },
      {
        "id": "src-7",
        "publisher": "PE Hub",
        "title": "PE-backed Empower Brands acquires franchises Koala Insulation and Wallaby Windows",
        "url": "https://www.pehub.com/pe-backed-empower-brands-acquires-franchises-koala-insulation-and-wallaby-windows/",
        "type": "trade-press",
        "dateAccessed": "2026-06-24"
      },
      {
        "id": "src-8",
        "publisher": "The Riverside Company",
        "title": "Riverside Sweeps in with Latest Trade Services Franchise Strategy (Threshold Brands / USA Insulation)",
        "url": "https://www.riversidecompany.com/currents/riverside-sweeps-in-with-latest-trade-services-franchise-strategy/",
        "type": "trade-press",
        "dateAccessed": "2026-06-24"
      },
      {
        "id": "src-9",
        "publisher": "Insulation Institute / NAIMA",
        "title": "Report: 89% of Homes Are Under Insulated",
        "url": "https://insulationinstitute.org/report-89-of-homes-are-under-insulated/",
        "type": "trade-association",
        "dateAccessed": "2026-06-24"
      },
      {
        "id": "src-10",
        "publisher": "TopBuild Corp. (GlobeNewswire)",
        "title": "TopBuild Acquires Two Residential Insulation Installation Companies",
        "url": "https://www.topbuild.com/investors/press-releases/detail/127/topbuild-acquires-two-residential-insulation-installation-companies",
        "type": "filing",
        "dateAccessed": "2026-06-24"
      }
    ]
  },
  "low-voltage-security": {
    "dataStatus": "complete",
    "confidence": "medium",
    "tam": {
      "year": 2023,
      "total": {
        "value": 22.6,
        "unit": "billion",
        "source": "src-3"
      },
      "newConstruction": {
        "value": 5.6,
        "unit": "billion",
        "modeledEstimate": true,
        "assumption": "No direct new-vs-retrofit split is reported by CEDIA. Modeled at ~25% of the residential installation market. CEDIA project data show custom-integration work skews heavily to existing-home retrofits/upgrades (theater, networking, security, lighting, automation add-ons), with new-construction pre-wire/whole-home builds a minority of project volume. 25% new-construction share applied to the $22.6B residential base.",
        "source": "src-3"
      },
      "renovationRepair": {
        "value": 17,
        "unit": "billion",
        "modeledEstimate": true,
        "assumption": "Modeled as the residual (~75%) of the $22.6B residential installation market after the modeled new-construction share. Captures retrofit installs, system upgrades/replacements, and add-on projects in existing owner-occupied and rental homes - consistent with CEDIA's reported median job mix (median project ~$15K, mostly existing-home work) and the long-tail installer profile (median 30 projects/yr, 5 employees).",
        "source": "src-3"
      },
      "methodology": "Top-down, anchored on CEDIA's 2023 Market Research Analysis (US & UK), which sizes the US professional smart-home / custom-integration installation industry at $29B across ~20,000 integration firms (data collected Jul-Aug 2023; survey of 1,000+ integrators plus D-Tools/Portal spec data and 14 manufacturer/distributor inputs). CEDIA reports residential projects account for ~78% of integrator revenue (per CE Pro coverage of the report; the CEDIA landing page itself cites the $29B and ~20,000-integrator figures but does not restate the 78% on-page), yielding a residential installation TAM of ~$22.6B (0.78 x $29B). This captures the residential low-voltage / structured-wiring / smart-home / security-systems INSTALLATION market (the labor-and-integration trade), distinct from broader 'home security market' research-firm figures (~$15B US, e.g., Market Research Future's $15.1B 2024 estimate) that center on monitoring/RMR and hardware rather than the installation trade. New-vs-renovation split is modeled (no direct source) because neither CEDIA nor Census isolates a residential low-voltage installation line item by construction type.",
      "confidence": "medium"
    },
    "topPlayers": [
      {
        "name": "ADT Inc.",
        "approxRevenue": {
          "value": 4.9,
          "unit": "billion",
          "source": "src-4"
        },
        "ownership": "public",
        "sponsor": "",
        "note": "Largest US residential security/smart-home provider; FY2024 total revenue $4,898M with end-of-period recurring monthly revenue (RMR) ~$359M (~$4.3B annualized). Confirmed via SEC 10-K and Q4/FY2024 earnings release. NYSE: ADT.",
        "website": "https://www.adt.com",
        "source": "src-4"
      },
      {
        "name": "Vivint Smart Home (NRG Energy Smart Home segment)",
        "approxRevenue": {
          "value": 1.68,
          "unit": "billion",
          "source": "src-5",
          "modeledEstimate": true
        },
        "ownership": "public",
        "sponsor": "",
        "note": "#2 US residential smart-home/security installer-monitor; subsidiary of NYSE-listed NRG Energy (acquired 2022/closed 2023 for ~$2.8B). FY2024 segment Adjusted EBITDA confirmed at ~$1.0B (per NRG FY2024 results); >5% net subscriber growth, 90% retention. The ~$1.68B segment revenue is an estimate - NRG's FY2024 release discloses segment Adjusted EBITDA but not a standalone Smart Home revenue line, so the revenue figure is approximate.",
        "website": "https://www.vivint.com",
        "source": "src-5"
      },
      {
        "name": "Brinks Home (Monitronics International)",
        "approxRevenue": {
          "value": 470,
          "unit": "million",
          "source": "src-6",
          "modeledEstimate": true
        },
        "ownership": "private",
        "sponsor": "",
        "note": "Major US alarm-monitoring provider; monitors 800,000+ alarm accounts (per 2023 filing). Emerged from Chapter 11 in June/July 2023 (cutting ~$500M debt); now privately held. The ~$39M RMR / ~$470M annualized-RMR figure is an estimate consistent with prior Monitronics filings - not explicitly restated in the cited 2023 bankruptcy coverage.",
        "website": "https://www.brinkshome.com",
        "source": "src-6"
      }
    ],
    "rollups": [],
    "fragmentation": {
      "score": 4,
      "rationale": "The installation trade itself is highly fragmented: CEDIA counts ~20,000 US custom-integration firms with a median annual residential revenue of only ~$900K, a median of 5 employees, and 30 projects/year - a classic long-tail of owner-operator local installers (confirmed via CEDIA and CE Pro coverage). The monitoring/RMR tier above it is more consolidated (ADT, Vivint/NRG, Brinks Home dominate national subscriber bases), which pulls the blended score off a pure 5. Net: a deeply fragmented installer base sitting beneath an oligopolistic national-monitoring layer.",
      "source": "src-3"
    },
    "rollupIntensity": {
      "score": 2,
      "rationale": "M&A in the security/integration space is active overall (Security Sales & Integration reports 190 deals in 2023, +5% YoY, with PE add-ons ~48% of all deals and ~88% of financial-buyer acquisitions; valuations ~13x EV/EBITDA), but the deal flow is concentrated in fire & life safety (38.9% of transactions) and commercial/enterprise security integration. No prominent, named PE roll-up platform is specifically consolidating residential low-voltage/smart-home installers at scale; the residential tier consolidates mainly via national-monitor subscriber-portfolio acquisitions (ADT, Vivint/NRG, Brinks). Residential-installer roll-up activity is therefore modest and not the headline."
    },
    "sources": [
      {
        "id": "src-1",
        "publisher": "Market Research Future",
        "title": "US Home Security Systems Market Size (~$15.1B US, 2024) - research-firm estimate centered on monitoring/hardware, not the installation trade",
        "url": "https://www.marketresearchfuture.com/reports/us-home-security-systems-market-13061",
        "type": "market-research",
        "dateAccessed": "2026-06-24"
      },
      {
        "id": "src-2",
        "publisher": "CE Pro",
        "title": "Roughly 20K Integrators Fueling $29B Custom Industry: CEDIA Report (confirms 78% residential, $900K median revenue, 5 median employees, 30 projects/yr, $15K median project)",
        "url": "https://www.cepro.com/news/cedia-market-research-analysis-20k-integrators-29-billion-industry/131275/",
        "type": "trade-press",
        "dateAccessed": "2026-06-24"
      },
      {
        "id": "src-3",
        "publisher": "CEDIA (Custom Electronic Design & Installation Association)",
        "title": "CEDIA Research: US Professional Smart Home Industry Nears $30 Billion (2023 Market Research Analysis; ~$29B; ~20,000 integrators; $900K median residential revenue)",
        "url": "https://cedia.org/smart-home-professionals/news/cedias-reinvigorated-research-approach-uncovers-us-professional-smart-home-industry-nears-30-billion/",
        "type": "trade-association",
        "dateAccessed": "2026-06-24"
      },
      {
        "id": "src-4",
        "publisher": "US Securities and Exchange Commission (ADT Inc.)",
        "title": "ADT Inc. Form 10-K FY2024 (total revenue $4,898M; end-of-period RMR ~$359M)",
        "url": "https://www.sec.gov/Archives/edgar/data/0001703056/000170305625000022/adt-20241231.htm",
        "type": "filing",
        "dateAccessed": "2026-06-24"
      },
      {
        "id": "src-5",
        "publisher": "NRG Energy, Inc. (Investor Relations)",
        "title": "NRG Energy Full Year 2024 Financial Results - Smart Home (Vivint) segment (~$1.0B Adjusted EBITDA; >5% net subscriber growth; 90% retention)",
        "url": "https://investors.nrg.com/static-files/ce3301a7-b4ac-411f-8565-b69a2288635c",
        "type": "filing",
        "dateAccessed": "2026-06-24"
      },
      {
        "id": "src-6",
        "publisher": "Security Sales & Integration",
        "title": "Brinks Home (Monitronics) - files Chapter 11 in 2023; monitors 800,000+ alarm accounts; emerged from Ch.11 mid-2023",
        "url": "https://www.securitysales.com/news/brinks-home-security-parent-monitronics-files-for-bankruptcy-again/151441/",
        "type": "trade-press",
        "dateAccessed": "2026-06-24"
      },
      {
        "id": "src-7",
        "publisher": "Security Sales & Integration",
        "title": "Security Solutions Mergers and Acquisitions Flourish in 2023, Poised for Growth in 2024 (190 deals, +5% YoY; PE add-ons ~48% of deals; fire/life-safety 38.9%; commercial-skewed)",
        "url": "https://www.securitysales.com/business/mergers/security-solutions-mergers-acquisitions-growth-2024/",
        "type": "trade-press",
        "dateAccessed": "2026-06-24"
      }
    ]
  },
  "generators": {
    "dataStatus": "complete",
    "confidence": "medium",
    "tam": {
      "total": {
        "value": 6,
        "unit": "billion",
        "source": "src-1"
      },
      "newConstruction": {
        "value": 0.9,
        "unit": "billion",
        "source": null,
        "modeledEstimate": true,
        "assumption": "Home standby generators are overwhelmingly a retrofit/replacement product on existing homes (purchase triggered by outage events and resilience demand, not new-build). Builder-installed units in new single-family construction are a small minority. Modeled at ~15% of total installed market."
      },
      "renovationRepair": {
        "value": 5.1,
        "unit": "billion",
        "source": null,
        "modeledEstimate": true,
        "assumption": "Modeled at ~85% of total. Captures retrofit installs on existing homes, generator replacements/upgrades, and recurring service/maintenance/repair on the installed base (GenerX alone runs >12,000 inspection/maintenance/service visits/yr per Rotunda src-5). This is the dominant demand driver and the part most relevant to an installer/dealer acquisition."
      },
      "year": 2025,
      "methodology": "Hybrid bottom-up + corroboration around the residential installation value chain (equipment + install labor). Equipment anchor (VERIFIED): Global Market Insights pegs US home standby gensets at USD 3.3B (2025) (src-1), corroborated by Generac's audited residential products segment of $2.43B (2024, +18% YoY, $2.06B->$2.43B) (src-2) at ~75% NA residential-standby share. GMI also names the top 5 NA players (Generac, Rehlko/ex-Kohler, Cummins, Kirloskar, Briggs & Stratton) at ~90% combined NA share. Installed/end-customer TAM grosses equipment up for install labor: a typical home standby install runs ~$4-6K equipment + ~$3-5K labor/transfer-switch/gas-line (Angi/HomeGuide cost data, src-7), i.e. installation adds ~0.6-1.0x of equipment cost. Applying ~0.8x uplift to the ~$3.3B equipment base yields ~$6B total installed residential market. Scope note: residential home-standby specifically. Mordor (src-6) reports a NARROWER 'residential generators' figure (~$2.0B NA 2025), which is not directly comparable (different segment boundary) and is used here only for fragmentation context, not as the TAM anchor. Total installed TAM is a defensible model (medium confidence), not a single-vendor headline.",
      "confidence": "medium"
    },
    "topPlayers": [
      {
        "name": "Generac Holdings (residential products segment)",
        "approxRevenue": {
          "value": 2.43,
          "unit": "billion",
          "source": "src-2"
        },
        "ownership": "public",
        "sponsor": "",
        "note": "Dominant US home standby manufacturer; ~75% NA residential standby share via large dealer network. Residential products segment $2.43B (2024, +18% YoY, from $2.06B) per audited earnings (src-2); home standby is the core driver. VERIFIED against Generac FY2024 release.",
        "website": "https://www.generac.com",
        "source": "src-2"
      },
      {
        "name": "Rehlko (formerly Kohler Energy) - KOHLER Home Energy / backup generators",
        "approxRevenue": {
          "value": null,
          "unit": "billion",
          "source": null
        },
        "ownership": "PE-backed",
        "sponsor": "Platinum Equity",
        "note": "#2 US residential standby brand (per GMI top-5). Carved out of Kohler Co. into independent business (Platinum Equity majority owner, Kohler retains minority stake); transaction closed May 6, 2024 (src-3). Kohler Energy REBRANDED to Rehlko on Sep 17, 2024; consumer generators still sold under the KOHLER brand (kohlerhomeenergy.rehlko.com). Residential-only revenue not separately disclosed. Deal value not disclosed by Platinum Equity; press reporting (Bloomberg) pegged it at >$3B.",
        "website": "https://www.rehlko.com",
        "source": "src-3"
      },
      {
        "name": "Canter Power Systems",
        "approxRevenue": {
          "value": null,
          "unit": "million",
          "source": null
        },
        "ownership": "PE-backed",
        "sponsor": "Rotunda Capital Partners",
        "note": "Largest US independent residential generator INSTALLER (vs manufacturer); Home Depot's largest national residential generator installer since 2007 (Service Provider of the Year 2022); Generac Power Pro Premier dealer since 2016. Combined platform serves 50,000+ customers, 275+ staff (175+ techs), 15 states (src-5). Live website VERIFIED. (Third-party revenue estimates exist but are not from a reliable source; left null.)",
        "website": "https://canterpowersystems.com",
        "source": "src-5"
      }
    ],
    "rollups": [
      {
        "platform": "Canter Power Systems",
        "sponsor": "Rotunda Capital Partners",
        "thesis": "Consolidate fragmented regional residential backup-power installers/dealers into the premier national installer + field-services platform.",
        "notableAddOns": "GenerX Generators (FL, >12,000 inspection/maintenance/service visits/yr), Midwest Electric & Generators (MN), Grasten Power Technologies (Houston, acquired Oct 23, 2024 - Canter's 3rd add-on under Rotunda, which invested Sep 2022). All Generac Power Pro Premier dealers.",
        "link": "https://www.rotundacapital.com/news/canter-power-systems-continues-its-national-expansion-with-acquisition-of-grasten-power-technologies",
        "linkType": "press-release",
        "source": "src-4"
      },
      {
        "platform": "Rehlko (formerly Kohler Energy / incl. KOHLER Home Energy backup generators)",
        "sponsor": "Platinum Equity",
        "thesis": "Carve Kohler's energy/generator portfolio into an independent PE-owned platform to accelerate growth in energy resilience incl. residential backup power.",
        "notableAddOns": "Carve-out of Kohler's energy business (Power Systems, Engines, Home Energy, KUP, Clarke Energy, Heila Technologies, Curtis Instruments). Closed May 6, 2024; rebranded to Rehlko Sep 17, 2024. Deal value undisclosed by Platinum Equity (press reports: >$3B, Bloomberg).",
        "link": "https://www.platinumequity.com/news/kohler-co-and-platinum-equity-close-transaction-to-establish-kohler-energy-as-independent-business/",
        "linkType": "press-release",
        "source": "src-3"
      }
    ],
    "fragmentation": {
      "score": 4,
      "rationale": "Equipment/manufacturing is consolidated (Generac ~75% NA residential standby; Rehlko/ex-Kohler #2; Cummins/Kirloskar/Briggs rounding out the top 5 at ~90% NA share per GMI). But the INSTALLATION/dealer layer - the part Founders' Oak would acquire - is highly fragmented: thousands of small local electricians and generator installers, with Generac alone running a large multi-thousand dealer network. Even the largest independent installer (Canter) is a sub-$50M roll-up of small regional shops. Score 4 reflects a consolidated supply side over a very fragmented service/install base.",
      "source": "src-1"
    },
    "rollupIntensity": {
      "score": 4,
      "rationale": "Multiple active PE platforms in 2024-25 (VERIFIED via primary sources): Rotunda's Canter Power (3 residential add-ons through Grasten Oct-2024), and Platinum Equity's Kohler Energy carve-out (closed May 2024, rebranded Rehlko Sep 2024). Strong, ongoing consolidation though still early in the residential-install fragment. (Note: earlier-cited adjacent commercial/critical-power platforms could not be re-verified here and are dropped from the rationale.)"
    },
    "sources": [
      {
        "id": "src-1",
        "publisher": "Global Market Insights",
        "title": "U.S. Home Standby Gensets Market Size, Report",
        "url": "https://www.gminsights.com/industry-analysis/us-home-standby-gensets-market",
        "dateAccessed": "2026-06-24",
        "type": "market-research"
      },
      {
        "id": "src-2",
        "publisher": "Generac Holdings Inc. (via GlobeNewswire)",
        "title": "Generac Reports Fourth Quarter and Full-Year 2024 Results",
        "url": "https://www.globenewswire.com/news-release/2025/02/12/3024845/0/en/Generac-Reports-Fourth-Quarter-and-Full-Year-2024-Results.html",
        "dateAccessed": "2026-06-24",
        "type": "filing"
      },
      {
        "id": "src-3",
        "publisher": "Platinum Equity",
        "title": "Kohler Co. and Platinum Equity Close Transaction to Establish Kohler Energy as Independent Business",
        "url": "https://www.platinumequity.com/news/kohler-co-and-platinum-equity-close-transaction-to-establish-kohler-energy-as-independent-business/",
        "dateAccessed": "2026-06-24",
        "type": "trade-press"
      },
      {
        "id": "src-4",
        "publisher": "Rotunda Capital Partners",
        "title": "Canter Power Systems Continues Its National Expansion with Acquisition of Grasten Power Technologies",
        "url": "https://www.rotundacapital.com/news/canter-power-systems-continues-its-national-expansion-with-acquisition-of-grasten-power-technologies",
        "dateAccessed": "2026-06-24",
        "type": "trade-press"
      },
      {
        "id": "src-5",
        "publisher": "Rotunda Capital Partners",
        "title": "Canter Power Systems, GenerX Generators and Midwest Electric and Generators Combine to Form National Residential Services Platform",
        "url": "https://www.rotundacapital.com/news/canter-power-systems-generx-generators-and-midwest-electric-and-generators-combine-to-form-national-residential-services-platform",
        "dateAccessed": "2026-06-24",
        "type": "trade-press"
      },
      {
        "id": "src-6",
        "publisher": "Mordor Intelligence",
        "title": "Residential Generators Market Size, Share, 2025-2030 Outlook",
        "url": "https://www.mordorintelligence.com/industry-reports/residential-generators-market",
        "dateAccessed": "2026-06-24",
        "type": "market-research"
      },
      {
        "id": "src-7",
        "publisher": "Angi",
        "title": "Whole House Generator Cost (2026 Data)",
        "url": "https://www.angi.com/articles/how-much-does-it-cost-install-generator.htm",
        "dateAccessed": "2026-06-24",
        "type": "trade-press"
      }
    ]
  },
  "irrigation": {
    "dataStatus": "in-progress",
    "confidence": "low",
    "tam": {
      "total": {
        "value": 1.25,
        "unit": "billion",
        "source": "src-2"
      },
      "newConstruction": {
        "value": 0.38,
        "unit": "billion",
        "modeledEstimate": true,
        "assumption": "Residential new-build sprinkler installs are a minority of irrigation work; the existing-home installed base of tens of millions of systems drives the bulk of demand via repair/replacement/service. Modeled at ~30% of the residential subtotal. No directly reported residential new-construction irrigation figure exists; Census Construction Spending does not break out irrigation as a line item.",
        "source": null
      },
      "renovationRepair": {
        "value": 0.87,
        "unit": "billion",
        "modeledEstimate": true,
        "assumption": "Repair, replacement, winterization/summerization, service, and retrofit of existing residential sprinkler systems. Modeled at ~70% of the residential subtotal, reflecting irrigation's service-heavy, recurring, retrofit-driven nature (consistent with franchise models like Conserva built around repair/maintenance/inspection revenue).",
        "source": null
      },
      "year": 2024,
      "methodology": "Top-down. Anchor = IBISWorld 'Lawn Sprinkler Installation Contractors' US industry revenue of $2.5bn (2024, ~2,425 firms; verified on both the IBISWorld industry page and market-size page). IBISWorld describes NONRESIDENTIAL construction/renovation as the industry's PRIMARY market and publishes no residential-only figure, so the residential share is MODELED at ~50% (= $1.25bn). NOTE: src-2 supports the $2.5bn TOTAL industry figure, not the $1.25bn residential subtotal, which is a modeled split with no direct source. That residential subtotal is further split ~30% new-construction / ~70% renovation-repair-replacement based on the dominance of the existing-home installed base and the category's service/repair-heavy revenue mix. Census Construction Spending and JCHS LIRA do not isolate irrigation, so no direct corroboration of any of the splits exists. Treat the entire residential breakdown as modeled estimates, not reported data.",
      "confidence": "low"
    },
    "topPlayers": [
      {
        "name": "Conserva Irrigation (Empower Brands)",
        "approxRevenue": {
          "value": 46.8,
          "unit": "million",
          "source": "src-3"
        },
        "ownership": "PE-backed",
        "sponsor": "MidOcean Partners",
        "note": "Largest dedicated national irrigation contractor; franchise system, $46.8M (precisely $46,793,882) system-wide sales FY2024 (FYE Sept 30, 2024, +17.3% YoY) across 202 outlets / 172 territories / 68 franchisees; residential + commercial repair, install, winterization. Ownership chain verified: MidOcean Partners -> Empower Brands -> Conserva Irrigation.",
        "website": "https://www.conservairrigation.com/",
        "source": "src-3"
      },
      {
        "name": "Massey Services (irrigation division)",
        "approxRevenue": {
          "value": null,
          "unit": "million",
          "source": null
        },
        "ownership": "private",
        "note": "Largest privately held, family-owned pest-prevention company in the US (nation's ~5th largest pest company); offers residential landscape/irrigation/sprinkler service as one line among pest/termite/lawn, not a pure-play. Serves ~1,000,000 customers across the Sun Belt (AL, FL, GA, LA, TX, SC, NC, VA, OK, TN) per Massey's own materials (record's earlier '~700,000' was understated). Irrigation-specific revenue not publicly disclosed.",
        "website": "https://www.masseyservices.com/irrigation-sprinkler-services/",
        "source": "src-6"
      },
      {
        "name": "American Landscaping Partners (ALP)",
        "approxRevenue": {
          "value": null,
          "unit": "million",
          "source": null
        },
        "ownership": "PE-backed",
        "sponsor": "Shoreline Equity Partners",
        "note": "Landscape roll-up (partnered with Shoreline Equity since Aug 2023) acquiring residential/commercial irrigation businesses (e.g., Chesapeake Irrigation & Lighting, Feb 2025 - its 8th/9th add-ons); irrigation is one service vertical within a broader landscape platform. Consolidated revenue not disclosed.",
        "website": "https://shorelineequitypartners.com/",
        "source": "src-5"
      }
    ],
    "rollups": [
      {
        "platform": "Conserva Irrigation / Empower Brands",
        "sponsor": "MidOcean Partners",
        "thesis": "National franchise platform scaling water-conserving residential/commercial irrigation under a multi-brand home-services umbrella.",
        "notableAddOns": "Conserva sits alongside Empower Brands' home-services portfolio (Koala Insulation, Wallaby Windows, Bumble Roofing, Canopy Lawn Care, etc.). Empower was formed in 2022 from the integration of Lynx Franchising and Outdoor Living Brands; MidOcean investment dated Dec 2020.",
        "link": "https://www.midoceanpartners.com/our-business/portfolio-companies/empower-brands",
        "linkType": "company",
        "source": "src-4"
      },
      {
        "platform": "American Landscaping Partners",
        "sponsor": "Shoreline Equity Partners",
        "thesis": "Buy-and-build landscape services platform folding in residential/commercial irrigation & lighting companies as add-ons.",
        "notableAddOns": "Chesapeake Irrigation & Lighting (Baltimore metro) and Tennessee GreenScapes, both Feb 25, 2025 (ALP's 8th and 9th acquisitions since the Aug 2023 Shoreline partnership).",
        "link": "https://shorelineequitypartners.com/american-landscaping-partners-announces-partnerships-with-tennessee-greenscapes-and-chesapeake-irrigation-lighting/",
        "linkType": "press-release",
        "source": "src-5"
      },
      {
        "platform": "United Land Services",
        "sponsor": "Centre Partners / LP First Capital",
        "thesis": "Multi-regional landscape services consolidator that includes irrigation among bundled grounds-maintenance services.",
        "notableAddOns": "25 acquisitions since platform formation in Sept 2020; 6x+ revenue growth; 30+ branches across six Southeast/South-Central states; 2025 add-ons expanded 'ancillary irrigation capabilities' in FL.",
        "link": "https://www.lawnandlandscape.com/news/united-land-services-acquires-four-companies/",
        "linkType": "press-release",
        "source": "src-7"
      }
    ],
    "fragmentation": {
      "score": 5,
      "rationale": "IBISWorld states the industry is highly fragmented with no company holding more than 5% market share, spread across ~2,425 establishments (verified). The largest dedicated national player (Conserva) does ~$47M system-wide against the ~$2.5bn total industry (<2% share). Residential irrigation is overwhelmingly local owner-operators.",
      "source": "src-1"
    },
    "rollupIntensity": {
      "score": 3,
      "rationale": "Moderate. One PE-backed national franchise platform is purpose-built for irrigation (Conserva/Empower/MidOcean), plus active landscape-services roll-ups (ALP/Shoreline; United Land Services/Centre Partners) pick up irrigation firms as add-ons. But irrigation-specific (vs. broader landscape) consolidation is still early and absolute deal sizes are small. (Note: the original rationale's reference to 'Mariani, Ares-backed Landscape Workshop' was not independently verified in this audit and is dropped to avoid unsupported claims.)"
    },
    "sources": [
      {
        "id": "src-1",
        "publisher": "IBISWorld",
        "title": "Lawn Sprinkler Installation Contractors in the US - Industry Analysis (2024)",
        "url": "https://www.ibisworld.com/united-states/industry/lawn-sprinkler-installation-contractors/6488/",
        "dateAccessed": "2026-06-24",
        "type": "market-research"
      },
      {
        "id": "src-2",
        "publisher": "IBISWorld",
        "title": "Lawn Sprinkler Installation Contractors in the US - Market Size",
        "url": "https://www.ibisworld.com/industry-statistics/market-size/lawn-sprinkler-installation-contractors-united-states/",
        "dateAccessed": "2026-06-24",
        "type": "market-research"
      },
      {
        "id": "src-3",
        "publisher": "Franchise Chatter",
        "title": "Conserva Irrigation Franchise Review 2025: Costs, Fees, Average Revenues (FY2024 FDD Item 19, $46.8M system-wide)",
        "url": "https://www.franchisechatter.com/2025/08/21/conserva-irrigation-franchise-review-2025-costs-fees-news-average-revenues-and-or-profits/",
        "dateAccessed": "2026-06-24",
        "type": "trade-press"
      },
      {
        "id": "src-4",
        "publisher": "MidOcean Partners",
        "title": "Empower Brands - Portfolio Company",
        "url": "https://www.midoceanpartners.com/our-business/portfolio-companies/empower-brands",
        "dateAccessed": "2026-06-24",
        "type": "trade-press"
      },
      {
        "id": "src-5",
        "publisher": "Shoreline Equity Partners",
        "title": "American Landscaping Partners Announces Partnerships with Tennessee GreenScapes and Chesapeake Irrigation & Lighting",
        "url": "https://shorelineequitypartners.com/american-landscaping-partners-announces-partnerships-with-tennessee-greenscapes-and-chesapeake-irrigation-lighting/",
        "dateAccessed": "2026-06-24",
        "type": "trade-press"
      },
      {
        "id": "src-6",
        "publisher": "Green Industry Pros",
        "title": "Massey Services: Committed to Customers and Water Conservation",
        "url": "https://www.greenindustrypros.com/industry-updates/article/12383169/massey-services-committed-to-customers-and-water-conservation",
        "dateAccessed": "2026-06-24",
        "type": "trade-press"
      },
      {
        "id": "src-7",
        "publisher": "Lawn & Landscape",
        "title": "United Land Services acquires four companies",
        "url": "https://www.lawnandlandscape.com/news/united-land-services-acquires-four-companies/",
        "dateAccessed": "2026-06-24",
        "type": "trade-press"
      }
    ]
  },
  "outdoor-lighting": {
    "dataStatus": "in-progress",
    "confidence": "medium",
    "tam": {
      "total": {
        "value": 1.4,
        "unit": "billion",
        "source": "src-1"
      },
      "year": 2024,
      "newConstruction": {
        "value": 0.21,
        "unit": "billion",
        "modeledEstimate": true,
        "source": "src-6",
        "assumption": "Outdoor/landscape lighting is overwhelmingly an aftermarket/retrofit add-on to existing homes; new single-family completions (~1.02M in 2024 per Census) are a small fraction of the ~145M existing housing stock. Modeled at ~15% of residential TAM attributable to new-construction installs, the rest being renovation/replacement/add-on. Split is modeled, not directly reported."
      },
      "renovationRepair": {
        "value": 1.19,
        "unit": "billion",
        "modeledEstimate": true,
        "source": "src-6",
        "assumption": "Modeled as ~85% of residential TAM. Landscape lighting, permanent/holiday LED systems, and lighting retrofits are predominantly purchased by owners of existing homes (remodel/retrofit fixtures and aftermarket installs dominate), consistent with industry framing of the category as a remodeling/retrofit-driven aftermarket. Split is modeled, not directly reported."
      },
      "methodology": "Top-down, single-vendor anchor (treat as one data point). Grand View Research reports the US landscape lighting market at USD 3,550.4M in 2024 (largely fixtures/product), confirmed via GVR press/horizon outlook. Residential share modeled at ~40% (GVR reports commercial application held ~60% of demand in 2023, implying ~40% residential), yielding ~USD 1.4B residential. This is a product-weighted estimate and likely understates the full installed/service market (design-build labor, permanent-lighting installation). New-vs-renovation split is modeled (no source reports it directly): ~15% new construction / ~85% renovation-replacement-addon, given outdoor lighting is a retrofit-driven aftermarket added to the existing ~145M-unit housing stock rather than bundled into the ~1.02M new single-family completions in 2024. Not corroborated by a second market-research vendor; confidence low.",
      "confidence": "low"
    },
    "topPlayers": [
      {
        "name": "Trimlight (Illumination Enterprises)",
        "approxRevenue": {
          "value": null,
          "unit": "million",
          "source": null
        },
        "ownership": "PE-backed",
        "sponsor": "Valesco Industries / Corinthian Capital Group",
        "note": "Permanent exterior/holiday LED lighting systems sold through 300+ exclusive dealers across US and Canada; founded 2011, Salt Lake City area. Revenue NULLED in audit: record's $37M was misattributed (claimed as 'Growjo $25-50M range') but Growjo actually reports ~$16.5M, LeadIQ reports a $25-50M band, and Salary.com reports $1-5M - estimates diverge widely with no credible single figure, so no point estimate is defensible.",
        "website": "https://trimlight.com",
        "source": "src-3"
      },
      {
        "name": "Outdoor Lighting Perspectives",
        "approxRevenue": {
          "value": 57,
          "unit": "million",
          "source": "src-4"
        },
        "ownership": "franchise",
        "sponsor": "MidOcean Partners (via Empower Brands)",
        "note": "Leading residential outdoor lighting design/install franchise, ~130 territories (35 states per 2024 FDD); revenue is a MODELED estimate = ~130 territories x ~$440K AUV (FDD Item 19) = ~$57M, not a reported system-wide figure. Both AUV (~$440K) and territory count (~130) independently corroborated.",
        "website": "https://www.outdoorlights.com",
        "source": "src-4"
      },
      {
        "name": "Blingle! Premier Lighting",
        "approxRevenue": {
          "value": null,
          "unit": "million",
          "source": null
        },
        "ownership": "franchise",
        "sponsor": "HorsePower Brands",
        "note": "Residential/commercial outdoor, holiday and permanent lighting franchise (launched Jan 2022, formerly Heroes Holiday Lighting), Omaha NE; avg gross sales per location reported ~$488K (FDD, confirmed via 1851 Franchise). No reliable system-wide revenue figure located; value remains null.",
        "website": "https://www.blingle.com",
        "source": "src-5"
      }
    ],
    "rollups": [
      {
        "platform": "Trimlight (Illumination Enterprises)",
        "sponsor": "Valesco Industries / Corinthian Capital Group",
        "thesis": "Consolidate the permanent exterior LED lighting category and scale the dealer network on rising demand for smart-home and outdoor home improvement.",
        "notableAddOns": "Majority recapitalization of Trimlight (incl. Illumination Enterprises / Trimlight of Salt Lake) closed May 13, 2025, in partnership with founders/management; Future Standard / FS Investments provided debt financing. Valesco's 4th platform investment from Fund III. Confirmed via PR Newswire, Valesco/BusinessWire, and PE trade press.",
        "link": "https://peprofessional.com/2025/05/valesco-and-corinthian-own-the-night-with-trimlight-buy/",
        "linkType": "press-release",
        "source": "src-3"
      },
      {
        "platform": "Empower Brands",
        "sponsor": "MidOcean Partners",
        "thesis": "Multi-brand home-services franchising platform; outdoor/landscape lighting is one vertical (Outdoor Lighting Perspectives) cross-sold across the 10-brand franchise portfolio.",
        "notableAddOns": "Formed 2022 from Lynx Franchising + Outdoor Living Brands (which owned Outdoor Lighting Perspectives); MidOcean-backed (portfolio company); 10 brands incl. OLP, Archadeck, Conserva Irrigation, Bumble Roofing, Koala Insulation. Note: MidOcean's own portfolio page does not itself name OLP; OLP affiliation corroborated via empowerfranchising.com brand list.",
        "link": "https://www.midoceanpartners.com/our-business/portfolio-companies/empower-brands",
        "linkType": "company",
        "source": "src-7"
      },
      {
        "platform": "HorsePower Brands",
        "sponsor": "HorsePower Brands (institutional backer not disclosed on cited source)",
        "thesis": "Build-and-buy multi-concept home-services franchisor; outdoor/holiday lighting represented by Blingle!, cross-sold across the seasonal home-services portfolio.",
        "notableAddOns": "Portfolio includes Blingle! Premier Lighting (launched Jan 2022), Mighty Dog Roofing, Heroes Lawn Care, iFOAM and others (10 brands on About page). Record's 'founder-funded, no institutional PE' claim is NOT corroborated by the cited HorsePower About page (no ownership/funding disclosed there) - softened to 'not disclosed on cited source.'",
        "link": "https://horsepowerbrands.com/about/",
        "linkType": "company",
        "source": "src-8"
      }
    ],
    "fragmentation": {
      "score": 5,
      "rationale": "Highly fragmented. Installation/service is dominated by thousands of local landscape-lighting and electrical contractors plus franchise territories (Outdoor Lighting Perspectives ~130 territories, Trimlight 300+ dealers, Blingle franchisees). Even the leading specialty fixture brands are small; the residential installed-service side is far more atomized with no operator at meaningful national share. Note: the original 'top 5 GLOBAL players ~38%' concentration claim could not be re-confirmed (GVR Horizon page 403'd) and refers to the broader fixture market, not US residential service - directionally supportive of high fragmentation but not independently verified.",
      "source": "src-1"
    },
    "rollupIntensity": {
      "score": 3,
      "rationale": "Moderate and rising. One clear PE-sponsored category roll-up confirmed (Valesco/Corinthian majority recap of Trimlight, May 2025) and two active franchise platforms with outdoor/holiday lighting brands (MidOcean's Empower Brands/OLP confirmed; HorsePower's Blingle confirmed as a brand, though HorsePower's own institutional backing is undisclosed on the cited source). The space is still early in consolidation versus mature home-services verticals (HVAC, roofing, plumbing). The '3-5x EBITDA' acquisition-multiple claim is anecdotal and not tied to a specific cited source."
    },
    "sources": [
      {
        "id": "src-1",
        "publisher": "Grand View Research",
        "title": "U.S. Landscape Lighting Market Size & Outlook, 2024-2030",
        "url": "https://www.grandviewresearch.com/horizon/outlook/landscape-lighting-market/united-states",
        "type": "market-research",
        "dateAccessed": "2026-06-24"
      },
      {
        "id": "src-2",
        "publisher": "Grand View Research",
        "title": "Landscape Lighting Market Size And Share Report, 2030 (residential vs commercial application share)",
        "url": "https://www.grandviewresearch.com/industry-analysis/landscape-lighting-market-report",
        "type": "market-research",
        "dateAccessed": "2026-06-24"
      },
      {
        "id": "src-3",
        "publisher": "PR Newswire / Valesco Industries / PE Professional",
        "title": "Corinthian Capital Group and Valesco Industries Acquire Trimlight, Inc. (May 13, 2025)",
        "url": "https://www.prnewswire.com/news-releases/corinthian-capital-group-and-valesco-industries-acquire-trimlight-inc-302454236.html",
        "type": "trade-press",
        "dateAccessed": "2026-06-24"
      },
      {
        "id": "src-4",
        "publisher": "SharpSheets (FDD Item 19 analysis)",
        "title": "Outdoor Lighting Perspectives Franchise FDD, Profits & Costs (AUV ~$440K, ~130 territories)",
        "url": "https://sharpsheets.io/blog/outdoor-lighting-perspectives-franchise-fdd-profits-costs/",
        "type": "trade-press",
        "dateAccessed": "2026-06-24"
      },
      {
        "id": "src-5",
        "publisher": "1851 Franchise",
        "title": "Blingle! Franchise Costs, Fees, Profit and Data (avg gross sales ~$488K)",
        "url": "https://1851franchise.com/blingle-franchise-costs-fees-profit-and-data-2725569",
        "type": "trade-press",
        "dateAccessed": "2026-06-24"
      },
      {
        "id": "src-6",
        "publisher": "U.S. Census Bureau",
        "title": "New Residential Construction / Highlights of 2024 Characteristics of New Housing (~1.02M single-family completions 2024)",
        "url": "https://www.census.gov/construction/nrc/current/index.html",
        "type": "government",
        "dateAccessed": "2026-06-24"
      },
      {
        "id": "src-7",
        "publisher": "MidOcean Partners",
        "title": "Empower Brands (portfolio company; parent of Outdoor Lighting Perspectives)",
        "url": "https://www.midoceanpartners.com/our-business/portfolio-companies/empower-brands",
        "type": "trade-press",
        "dateAccessed": "2026-06-24"
      },
      {
        "id": "src-8",
        "publisher": "HorsePower Brands",
        "title": "About Us (portfolio incl. Blingle! Premier Lighting)",
        "url": "https://horsepowerbrands.com/about/",
        "type": "trade-press",
        "dateAccessed": "2026-06-24"
      }
    ]
  },
  "ev-charging": {
    "dataStatus": "in-progress",
    "confidence": "low",
    "tam": {
      "total": {
        "value": 1.5,
        "unit": "billion",
        "source": "src-model"
      },
      "year": 2024,
      "methodology": "Bottom-up (no official source isolates residential EV-charger install-labor revenue). ~1.5M US plug-in EV sales in 2024 (Argonne/DOE, verified) x home Level 2 install attach rate (Consumer Reports' 2024 survey of 8,000+ newer-EV owners found 88% use a 240V Level 2 home charger; the model conservatively assumes ~50% NEW-install attach to avoid double-counting owners who already had a charger) ~= 750K new residential installs/yr, plus a stock of prior-year EV owners retrofitting. At ~$800-$2,000 labor-only install spend per job (Qmerit: residential L2 electrical labor + permits $799-$1,999, verified; all-in incl. hardware higher), total residential installation-labor spend ~= $1.3-2.0B; anchored at ~$1.5B. Cross-checked against (not derived from) Grand View's $5.09B US EVCI market (2024, verified) and Mordor's residential-72.2%-of-US-market share (2024, verified), both of which include equipment and public/DC-fast infrastructure and are therefore larger.",
      "confidence": "low",
      "newConstruction": {
        "value": 0.23,
        "unit": "billion",
        "modeledEstimate": true,
        "assumption": "~15% of total. Home EV-charger installs are overwhelmingly retrofits; builder-installed EV-ready circuits in new single-family construction are a small but growing share (no Census line-item isolates EV circuits, so modeled).",
        "source": null
      },
      "renovationRepair": {
        "value": 1.27,
        "unit": "billion",
        "modeledEstimate": true,
        "assumption": "~85% of total. The vast majority of residential Level 2 installs are retrofit/replacement work on existing homes (dedicated 240V circuit runs, panel upgrades) per Qmerit install-cost breakdowns (verified).",
        "source": null
      },
      "total_note": ""
    },
    "topPlayers": [
      {
        "name": "Qmerit",
        "approxRevenue": {
          "value": null,
          "unit": "million",
          "source": null
        },
        "ownership": "public-subsidiary",
        "sponsor": "",
        "note": "North America's largest certified residential EV-installer network (23,000+ electricians, 1.5M+ home electrification projects per qmerit.com, verified). Previously PE-backed by Lime Rock New Energy (invested Oct 2020); acquired by Schneider Electric (public, Euronext) Dec 2021 and operated as a subsidiary; also took an investment from GIC. Preferred install partner for most North American EV OEMs. Installation revenue not separately disclosed.",
        "website": "https://qmerit.com",
        "source": "src-qmerit"
      },
      {
        "name": "Treehouse",
        "approxRevenue": {
          "value": null,
          "unit": "million",
          "source": null
        },
        "ownership": "private",
        "sponsor": "Flourish Ventures",
        "note": "VC-backed home-electrification install platform ($16.6M Series A Oct 2024, led by Flourish Ventures with Eaton, MassMutual Ventures, CarMax, others; verified). AI-driven quoting/load calcs/permitting/scheduling for EV chargers, heat pumps, storage. Operates in 40 states (verified), targeting all 50. Revenue not disclosed. (Note: the '$26.6M total raised' figure in the prior draft could not be corroborated and was removed; only the verified $16.6M Series A is retained.)",
        "website": "https://treehouse.pro",
        "source": "src-treehouse"
      },
      {
        "name": "Tesla (home charging / installation referral)",
        "approxRevenue": {
          "value": null,
          "unit": "million",
          "source": null
        },
        "ownership": "public",
        "sponsor": "",
        "note": "Sells Wall Connector hardware and refers home installation to certified electricians (largely via Qmerit). Dominant share of bundled new-EV home-charger sales, but installation labor is performed by third-party electricians, so its direct installation-services revenue is not separable.",
        "website": "https://www.tesla.com",
        "source": "src-installers"
      }
    ],
    "rollups": [
      {
        "platform": "Qmerit (Schneider Electric)",
        "sponsor": "Lime Rock New Energy (prior PE owner, Oct 2020-Dec 2021); Schneider Electric (current owner)",
        "thesis": "Roll up and certify a national network of licensed electrical contractors into the single preferred home-EV-charging / electrification install platform for EV OEMs and utilities.",
        "notableAddOns": "Capital City Electrical Services (Atlanta, acquired Jan 2021, verified); six network acquisitions closed during Lime Rock New Energy's ~14-month ownership (verified); later combined with EnergySage and WattBuy under Schneider Electric (WattBuy acquired Aug 2025, verified).",
        "link": "https://qmerit.com/news/qmerit-acquires-capital-city-electrical-services/",
        "linkType": "press-release",
        "source": "src-qmerit-rollup"
      }
    ],
    "fragmentation": {
      "score": 5,
      "rationale": "Installation labor is performed by thousands of independent local licensed electricians; even the largest player (Qmerit) is an aggregator/referral network of 23,000+ third-party electricians (verified) rather than a direct employer of installers. No single firm performs a material share of installs directly. Highly fragmented at the install-labor level.",
      "source": "src-qmerit"
    },
    "rollupIntensity": {
      "score": 3,
      "rationale": "Moderate. Consolidation is occurring at the network/platform layer (Qmerit's six acquisitions under PE owner Lime Rock New Energy, then strategic acquisition by public Schneider Electric in Dec 2021; Treehouse's VC-funded roll-up of install capacity; Schneider's WattBuy/EnergySage tuck-ins, all verified) rather than a broad classic PE buy-and-build of standalone electrician shops. Activity is real but channeled through OEM/utility-partnered platforms."
    },
    "sources": [
      {
        "id": "src-model",
        "publisher": "Founders' Oak (modeled)",
        "title": "Bottom-up TAM model: ~1.5M US plug-in EV sales/yr (Argonne/DOE) x home Level 2 install attach rate (Consumer Reports) x ~$800-2,000 labor-only install spend per job (Qmerit), plus existing-owner upgrade stock",
        "url": "https://www.anl.gov/esia/light-duty-electric-drive-vehicles-monthly-sales-updates",
        "type": "market-research"
      },
      {
        "id": "src-evsales",
        "publisher": "Argonne National Laboratory / U.S. DOE",
        "title": "Light Duty Electric Drive Vehicles Monthly Sales Updates - over 1.5M US plug-in EVs sold in 2024 (BEV ~80%)",
        "url": "https://www.anl.gov/esia/light-duty-electric-drive-vehicles-monthly-sales-updates",
        "type": "government"
      },
      {
        "id": "src-eia",
        "publisher": "U.S. Energy Information Administration (EIA)",
        "title": "U.S. share of electric and hybrid vehicle sales reached a record in the third quarter of 2024",
        "url": "https://www.eia.gov/todayinenergy/detail.php?id=63904",
        "type": "government"
      },
      {
        "id": "src-installcost",
        "publisher": "Qmerit",
        "title": "Understanding Your EV Home Charging Station Costs for Installation (residential Level 2 electrical labor + permits $799-$1,999; hardware additional)",
        "url": "https://qmerit.com/blog/understanding-your-ev-home-charging-station-costs-for-installation/",
        "type": "trade-press"
      },
      {
        "id": "src-attach",
        "publisher": "Consumer Reports",
        "title": "How to Find the Best Home EV Charger - 2024 survey of 8,000+ newer-EV owners; 88% use a 240V Level 2 home charger",
        "url": "https://www.consumerreports.org/cars/hybrids-evs/how-to-choose-the-best-home-wall-charger-for-your-electric-vehicle-a6908889697/",
        "type": "trade-press"
      },
      {
        "id": "src-qmerit",
        "publisher": "Qmerit",
        "title": "EV Charging Stations Installer Network - 23,000+ electricians, 1.5M+ home electrification projects installed",
        "url": "https://qmerit.com/ev-charging-stations-installer-network/",
        "type": "trade-press"
      },
      {
        "id": "src-qmerit-rollup",
        "publisher": "Qmerit",
        "title": "Qmerit Acquires Capital City Electrical Services (Atlanta, Jan 2021)",
        "url": "https://qmerit.com/news/qmerit-acquires-capital-city-electrical-services/",
        "type": "trade-press"
      },
      {
        "id": "src-limerock",
        "publisher": "Lime Rock New Energy",
        "title": "Qmerit Case Study - PE ownership (Oct 2020), six network acquisitions, exit to Schneider Electric (Dec 2021)",
        "url": "https://www.lrnewenergy.com/insights/qmerit-case-study-from-impact-capital-managers-strengthening-outcomes-impact-and-financial-return-at-exit/",
        "type": "trade-press"
      },
      {
        "id": "src-schneider",
        "publisher": "pv magazine USA",
        "title": "Schneider Electric acquires home electrification software platform WattBuy (combined with subsidiaries EnergySage and Qmerit)",
        "url": "https://pv-magazine-usa.com/2025/08/21/schneider-electric-acquires-wattbuy-home-electrification-software-business/",
        "type": "trade-press"
      },
      {
        "id": "src-treehouse",
        "publisher": "Business Wire",
        "title": "Treehouse Secures $16.6M Series A Funding to Scale Electrification Installations Nationwide (Flourish Ventures lead; 40 states)",
        "url": "https://www.businesswire.com/news/home/20241016941510/en/Treehouse-Secures-$16.6M-Series-A-Funding-to-Scale-Electrification-Installations-Nationwide",
        "type": "trade-press"
      },
      {
        "id": "src-treehouse-tc",
        "publisher": "TechCrunch",
        "title": "Treehouse uses AI to help electricians install tech like EV chargers and heat pumps more cheaply",
        "url": "https://techcrunch.com/2024/10/16/treehouse-uses-ai-to-help-electricians-install-tech-like-ev-chargers-and-heat-pumps-more-cheaply/",
        "type": "trade-press"
      },
      {
        "id": "src-installers",
        "publisher": "Mordor Intelligence",
        "title": "US Electric Vehicle Charging Equipment Market - residential 72.2% of 2024 US market; installers/integrators as key channel",
        "url": "https://www.mordorintelligence.com/industry-reports/us-electric-vehicle-charging-equipment-market",
        "type": "market-research"
      },
      {
        "id": "src-gvr",
        "publisher": "Grand View Research",
        "title": "US Electric Vehicle Charging Infrastructure (EVCI) Market - US market $5.09B in 2024 (equipment+infrastructure, not install-labor only)",
        "url": "https://www.grandviewresearch.com/industry-analysis/us-electric-vehicle-charging-infrastructure-evci-market",
        "type": "market-research"
      }
    ]
  },
  "kitchen-remodel": {
    "dataStatus": "in-progress",
    "confidence": "medium",
    "tam": {
      "total": {
        "value": null,
        "unit": "billion",
        "source": "src-modeled"
      },
      "year": 2024,
      "methodology": "Top-down, MODELED. No US source reports a kitchen-only residential market size. NKBA's 2024 Kitchen & Bath Market Outlook reports a COMBINED residential K&B market of ~$173B for 2024 (VERIFIED on NKBA's free outlook page; the new-construction ~$106B / remodel ~$67B split is from NKBA's press summary, corroborated via trade press). Houzz's 2025 Kitchen Trends Study (VERIFIED) shows kitchen median spend ~$60K (large major remodel ~$72K), running roughly 2x typical bath spend, implying kitchen captures the majority of K&B dollars. Kitchen share is modeled at ~55% of the K&B total -> ~$95B kitchen-only (new + remodel). Independent sanity check: JCHS LIRA puts TOTAL home improvement & repair at ~$509B for 2025 (VERIFIED); a ~$95B kitchen slice is ~19% of that, plausible for the single most expensive room remodel. Treat as an order-of-magnitude estimate, NOT a reported figure.",
      "confidence": "low",
      "newConstruction": {
        "value": 58,
        "unit": "billion",
        "modeledEstimate": true,
        "assumption": "NKBA 2024: ~$106B of the ~$173B combined K&B market was new-construction K&B (~61%). Applying the modeled 55% kitchen share ($106B x 0.55) gives ~$58B kitchen new-construction. Modeled, not directly reported.",
        "source": "src-nkba"
      },
      "renovationRepair": {
        "value": 37,
        "unit": "billion",
        "modeledEstimate": true,
        "assumption": "NKBA 2024: ~$67B of the ~$173B combined K&B market was remodel/repair (~39%). Applying the modeled 55% kitchen share ($67B x 0.55) gives ~$37B kitchen remodel/replacement. Cross-check: JCHS LIRA ~$509B total improvement spend (2025); a ~$37B kitchen-remodel slice is consistent with kitchens being a top remodeling category by spend. Modeled, not directly reported.",
        "source": "src-nkba"
      }
    },
    "topPlayers": [
      {
        "name": "Kitchen Tune-Up (Home Franchise Concepts)",
        "approxRevenue": {
          "value": 130,
          "unit": "million",
          "source": "src-ktu-fdd"
        },
        "ownership": "franchise",
        "sponsor": "",
        "note": "Largest kitchen-focused branded franchise (cabinet refacing/tune-ups); ~270 territories (VERIFIED). Parent: Home Franchise Concepts, a subsidiary of JM Family Enterprises. System-wide sales ESTIMATED ~$120-150M (FDD-derived: ~234 territories open all of 2024 at a reported average in the mid-$500Ks; this is a modeled aggregate, NOT an official consolidated figure).",
        "website": "https://www.kitchentuneup.com/",
        "source": "src-ktu-fdd"
      },
      {
        "name": "Kitchen Saver (Saver Systems)",
        "approxRevenue": {
          "value": null,
          "unit": "million",
          "source": null
        },
        "ownership": "private",
        "note": "Active multi-state kitchen cabinet renewal/refacing operator (VERIFIED active 2026; ~14 states incl. MD, NJ, FL, NY, PA, NC). Private; no disclosed revenue. Employee-band/private-data points (e.g. 201-500 employees) come from third-party aggregators and are unverified.",
        "website": "https://kitchensaver.com/",
        "source": null
      }
    ],
    "rollups": [
      {
        "platform": "Renuity",
        "sponsor": "Greenbriar Equity Group",
        "thesis": "National tech-enabled direct-to-consumer replacement/remodel platform. Kitchen-ADJACENT, not a pure kitchen play: Greenbriar's own announcement lists bath, windows, garage coatings, closets and 'other diversified categories' -- kitchen is NOT among the named offerings.",
        "notableAddOns": "Greenbriar completed acquisition of Renuity from York Capital Management's PE group on June 3, 2024 (VERIFIED via Greenbriar press release). Underlying brands include Pacific Bath, Closet America, HomeSmart, Statewide, Mad City, FHIA, Paradise (per prior internal brief; not re-verified individually).",
        "link": "https://www.greenbriar.com/greenbriar-equity-group-announces-acquisition-of-renuity/",
        "linkType": "press-release",
        "source": "src-greenbriar"
      },
      {
        "platform": "Renovo Home Partners (DEFUNCT - cautionary)",
        "sponsor": "Audax Group (exited 2024); BlackRock TCP Capital (creditor)",
        "thesis": "Direct-to-consumer kitchen/bath/exterior remodel roll-up (incl. Reborn Cabinets, a major kitchen-refacing operator, and Dreamstyle Remodeling) that COLLAPSED: operations ceased Oct 29, 2025 and the holding entity (HomeRenew Buyer) filed Chapter 7 on Nov 3, 2025 with $100M-$500M liabilities (VERIFIED via multiple trade-press outlets). Illustrates execution/leverage risk in remodel roll-ups; NOT an active platform. NOTE: Dreamstyle Remodeling -- previously listed as an active top player -- was a Renovo brand and shut down in this collapse; it has been REMOVED from active players.",
        "notableAddOns": "Reborn Cabinets, Dreamstyle Remodeling, Minnesota Rusco, NewPro, Alure, Remodel USA, ~19 affiliated brands; all closed Oct-Nov 2025.",
        "link": "https://www.woodworkingnetwork.com/news/woodworking-industry-news/reborn-cabinets-closes-corporate-ownership-folds",
        "linkType": "press-release",
        "source": "src-renovo"
      }
    ],
    "fragmentation": {
      "score": null,
      "rationale": "Highly fragmented. The broader residential remodeling space (NAICS 236118) has ~125,000+ establishments with no dominant player (top-5 share low single digits; per prior internal brief citing IBISWorld/Pro Remodeler -- not re-verified in this audit). Kitchen remodeling specifically has NO public pure-play; the largest branded players are franchise networks (Kitchen Tune-Up ~270 territories, est. ~$120-150M system sales) and regional independents (e.g. Kitchen Saver), each well under 1% of the modeled ~$95B kitchen market. Big-box installed services (Home Depot/Lowe's) and IKEA do meaningful kitchen volume but do not disclose kitchen-only revenue.",
      "source": "src-modeled"
    },
    "rollupIntensity": {
      "score": 3,
      "rationale": "Moderate and cooling. PE has actively backed home-services replacement/remodel platforms (Renuity/Greenbriar, VERIFIED June 2024), but consolidation is concentrated in bath/window/exterior replacement rather than kitchen specifically. Kitchen-pure roll-ups are thin (mostly franchising: Kitchen Tune-Up, N-Hance, Cabinet IQ). The high-profile Renovo Home Partners Chapter 7 collapse (Nov 2025), which took down kitchen operator Reborn Cabinets AND remodeler Dreamstyle, has chilled sentiment and increased diligence. Net: active capital but early-stage in the kitchen slice and recently bruised. (The often-cited '$30B+ PE into home services' and N-Hance unit counts are from prior briefs and not re-verified here.)"
    },
    "sources": [
      {
        "id": "src-nkba",
        "publisher": "National Kitchen & Bath Association (NKBA)",
        "title": "2024 Kitchen & Bath Market Outlook",
        "url": "https://nkba.org/research/2024-kitchen-bath-market-outlook/",
        "type": "trade-association"
      },
      {
        "id": "src-lira",
        "publisher": "Joint Center for Housing Studies, Harvard University",
        "title": "Continued Gains Projected for Remodeling Amid Economic Uncertainty (LIRA)",
        "url": "https://www.jchs.harvard.edu/press-releases/continued-gains-projected-remodeling-amid-economic-uncertainty",
        "type": "trade-association"
      },
      {
        "id": "src-houzz",
        "publisher": "Houzz",
        "title": "2025 U.S. Houzz Kitchen Trends Study",
        "url": "https://www.houzz.com/magazine/2025-u-s-houzz-kitchen-trends-study-stsetivw-vs~179685414",
        "type": "market-research"
      },
      {
        "id": "src-greenbriar",
        "publisher": "Greenbriar Equity Group",
        "title": "Greenbriar Equity Group Announces Acquisition of Renuity",
        "url": "https://www.greenbriar.com/greenbriar-equity-group-announces-acquisition-of-renuity/",
        "type": "trade-press"
      },
      {
        "id": "src-renovo",
        "publisher": "Woodworking Network",
        "title": "Reborn Cabinets closes as corporate ownership folds",
        "url": "https://www.woodworkingnetwork.com/news/woodworking-industry-news/reborn-cabinets-closes-corporate-ownership-folds",
        "type": "trade-press"
      },
      {
        "id": "src-ktu-fdd",
        "publisher": "Franchise Chatter (FDD analysis)",
        "title": "Kitchen Tune-Up Franchise Review 2025: Costs, Fees, Average Revenues",
        "url": "https://www.franchisechatter.com/2025/11/05/kitchen-tune-up-franchise-review-2025-costs-fees-news-average-revenues-and-or-profits/",
        "type": "trade-press"
      }
    ]
  },
  "bath-remodel": {
    "dataStatus": "complete",
    "confidence": "medium",
    "tam": {
      "total": {
        "value": 45.1,
        "unit": "billion",
        "source": "src-3"
      },
      "year": 2025,
      "methodology": "Top-down. Primary anchor is Global Market Insights' US bathroom remodeling market estimate of $45.1B for 2025 (4.1% CAGR 2026-2035), which scopes the US bathroom remodeling/renovation category. This is a SINGLE market-research vendor figure and is treated as one data point. Directional corroboration: NKBA/John Burns 2025 Kitchen & Bath Market Outlook puts the total combined K&B industry at $235B (2025, +0.8%); the $45.1B US bath figure is internally consistent with bath being roughly one-fifth of that combined kitchen+bath spend once new-construction kitchen+bath product spend is excluded. NOTE (verification): the record's prior claim of a 'separate GMI North America $72.2B (2024)' figure could NOT be confirmed on the GMI page (the page states the US dominates North America but gives no separate $72.2B value); that corroboration has been removed. Confidence held to medium given single-vendor reliance for the headline number and definitional variance across reports.",
      "confidence": "medium",
      "newConstruction": {
        "value": 6.8,
        "unit": "billion",
        "modeledEstimate": true,
        "assumption": "Modeled at ~15% of the $45.1B total. Bath 'remodeling' market reports are by definition dominated by renovation/replacement of existing baths; new-construction bath fit-out is largely captured separately in Census residential construction spending. The 15% new-construction allocation is anchored to the NKBA/John Burns 2025 K&B Outlook direction (confirmed): new-construction K&B spending was forecast to DECLINE 1.1% in 2025 while repair/remodel rose 2.6%. No report gives a direct bath-only new-vs-remodel dollar split, so this is a modeled allocation.",
        "source": "src-2"
      },
      "renovationRepair": {
        "value": 38.3,
        "unit": "billion",
        "modeledEstimate": true,
        "assumption": "Modeled at ~85% of the $45.1B total (residual after the 15% new-construction allocation). Consistent with the NKBA/John Burns 2025 K&B Outlook (confirmed) showing repair & remodel as the growth engine (+2.6% in 2025) versus declining new construction, and with the inherent renovation-replacement nature of the 'bathroom remodeling' category (tub-to-shower conversions, fixture/surface replacement, accessibility retrofits).",
        "source": "src-2"
      }
    },
    "topPlayers": [
      {
        "name": "West Shore Home",
        "approxRevenue": {
          "value": 1.2,
          "unit": "billion",
          "source": "src-4"
        },
        "ownership": "PE-backed",
        "sponsor": "Leonard Green & Partners",
        "note": "Largest US one-day bath/shower replacement and window remodeler; reported $1.2B remodeling revenue on 76,288 jobs (2024), ranked #5 on Qualified Remodeler's 2025 Top 500 (revenue, jobs, and rank confirmed via BusinessWire/Yahoo and Qualified Remodeler). PE ownership confirmed: Leonard Green & Partners recapitalized West Shore Home in 2020 (~$250M investment, per M&A reporting). Operates 40+ markets across 20+ states.",
        "website": "https://westshorehome.com",
        "source": "src-4"
      },
      {
        "name": "Renuity",
        "approxRevenue": {
          "value": null,
          "unit": "billion",
          "source": null
        },
        "ownership": "PE-backed",
        "sponsor": "Greenbriar Equity Group",
        "note": "Tech-enabled home-services consolidation platform spanning bath, window, garage coatings and closets. Acquired June 2024 by Greenbriar Equity Group from York Capital Management (financial terms NOT disclosed). Bath brands include Pacific Bath, Mad City Windows & Baths, FHIA, Statewide Remodeling. REVENUE NULLED (verification): neither Greenbriar source discloses revenue; the prior $0.75B / ~$500M-$1B figure traces only to data aggregators (LeadIQ/Prospeo), which are not allowlisted, so no numeric value is asserted.",
        "website": "https://renuityhome.com",
        "source": "src-6"
      },
      {
        "name": "Jacuzzi Bath Remodel",
        "approxRevenue": {
          "value": null,
          "unit": "million",
          "source": null
        },
        "ownership": "franchise",
        "sponsor": "",
        "note": "National branded bath-remodel / tub-to-shower-conversion network operating through company locations plus independent dealers (e.g., Bath Experts, ranked #64 on Qualified Remodeler's 2025 Top 500 as the exclusive Jacuzzi Bath Remodel dealer in its markets - confirmed via PR.com). Large aggregate footprint but no credibly attributable consolidated US revenue figure found, so value left null.",
        "website": "https://www.jacuzzibathremodel.com",
        "source": "src-7"
      }
    ],
    "rollups": [
      {
        "platform": "Renuity",
        "sponsor": "Greenbriar Equity Group (prior: York Capital Management)",
        "thesis": "Aggregate best-in-class regional bath/window/exterior replacement-remodeling brands into a national tech-enabled home-services platform with shared marketing, data and analytics.",
        "notableAddOns": "Pacific Bath, Mad City Windows & Baths, FHIA Remodeling, Statewide Remodeling, Home Smart Industries, MaxHome, Paradise Home Improvement, RiteWindow",
        "link": "https://www.greenbriar.com/greenbriar-equity-group-announces-acquisition-of-renuity/",
        "linkType": "press-release",
        "source": "src-6"
      },
      {
        "platform": "West Shore Home",
        "sponsor": "Leonard Green & Partners",
        "thesis": "Build a national one-day bath/shower and window replacement brand via greenfield market expansion plus tuck-in acquisitions, standardized installation model and centralized lead generation.",
        "notableAddOns": "Greenfield market launches across 40+ markets / 20+ states plus regional tuck-in acquisitions (acquisition program led internally).",
        "link": "https://westshorehome.com",
        "linkType": "company",
        "source": "src-4"
      }
    ],
    "fragmentation": {
      "score": 5,
      "rationale": "Highly fragmented. NAICS 236118 (residential remodelers) shows ~127,824 establishments per US Census 2020 County Business Patterns (as surfaced via SICCODE; note the same source also lists a narrower 50,846 'verified active companies' figure). Even the largest pure-play bath remodeler (West Shore Home, ~$1.2B) holds only low-single-digit share of a ~$45B US bath market, and top players combined control well under ~5%. Market is dominated by small (<10 employee) and mid-size regional contractors.",
      "source": "src-1"
    },
    "rollupIntensity": {
      "score": 4,
      "rationale": "Very active consolidation. Multiple well-capitalized PE platforms are rolling up bath/replacement remodelers (Greenbriar/Renuity, Leonard Green/West Shore Home), and Qualified Remodeler Top 500 volume rose ~8.8% to $24.6B (2025, confirmed) led by acquisitive players; franchise/dealer networks (Jacuzzi, Bath Planet, Re-Bath) extend reach. Held at 4 rather than 5 because execution risk is real and confirmed - the Audax-formed Renovo Home Partners roll-up ceased operations ~Oct 29, 2025 and filed Chapter 7 liquidation Nov 3, 2025 (liabilities $100M-$500M) - and consolidated share remains low."
    },
    "sources": [
      {
        "id": "src-1",
        "publisher": "US Census Bureau (via SICCODE)",
        "title": "NAICS 236118 Residential Remodelers - establishment count",
        "url": "https://siccode.com/naics-code/236118/residential-remodelers",
        "type": "government",
        "dateAccessed": "2026-06-24"
      },
      {
        "id": "src-2",
        "publisher": "NKBA / John Burns Research and Consulting",
        "title": "2025 Kitchen & Bath Market Outlook",
        "url": "https://nkba.org/research/2025-kitchen-bath-market-outlook/",
        "type": "trade-association",
        "dateAccessed": "2026-06-24"
      },
      {
        "id": "src-3",
        "publisher": "Global Market Insights",
        "title": "Bathroom Remodeling Market Size & Share, Growth Report 2034 (US figure $45.1B, 2025)",
        "url": "https://www.gminsights.com/industry-analysis/bathroom-remodeling-market",
        "type": "market-research",
        "dateAccessed": "2026-06-24"
      },
      {
        "id": "src-4",
        "publisher": "BusinessWire / West Shore Home",
        "title": "How One Home Remodeling Company Is Using AI to Build a Billion-Dollar Company ($1.2B revenue, 76,288 jobs, #5 QR Top 500)",
        "url": "https://www.businesswire.com/news/home/20250813028588/en/How-One-Home-Remodeling-Company-Is-Using-AI-to-Build-a-Billion-Dollar-Company",
        "type": "trade-press",
        "dateAccessed": "2026-06-24"
      },
      {
        "id": "src-6",
        "publisher": "Greenbriar Equity Group",
        "title": "Greenbriar Equity Group Announces Acquisition of Renuity (June 2024, from York Capital; terms not disclosed)",
        "url": "https://www.greenbriar.com/greenbriar-equity-group-announces-acquisition-of-renuity/",
        "type": "trade-press",
        "dateAccessed": "2026-06-24"
      },
      {
        "id": "src-7",
        "publisher": "PR.com",
        "title": "Bath Experts Named to Qualified Remodeler TOP 500 for 2025 (exclusive Jacuzzi Bath Remodel dealer, #64)",
        "url": "https://www.pr.com/press-release/945733",
        "type": "trade-press",
        "dateAccessed": "2026-06-24"
      },
      {
        "id": "src-9",
        "publisher": "Qualified Remodeler",
        "title": "2025 Top 500 Rankings: Fast Times, Fast Companies ($24.6B total revenue, +8.8%, 2.2M jobs)",
        "url": "https://www.qualifiedremodeler.com/2025-top-500-rankings-fast-times-fast-companies/",
        "type": "trade-press",
        "dateAccessed": "2026-06-24"
      },
      {
        "id": "src-10",
        "publisher": "Qualified Remodeler",
        "title": "Renovo Home Partners Collapse Heads to Liquidation as States Move to Protect Homeowners",
        "url": "https://www.qualifiedremodeler.com/renovo-home-services-reportedly-shutters-operations-ownership-brands-and-financial-status-unclear/",
        "type": "trade-press",
        "dateAccessed": "2026-06-24"
      }
    ]
  },
  "flooring": {
    "dataStatus": "complete",
    "confidence": "medium",
    "tam": {
      "total": {
        "value": 76,
        "unit": "billion",
        "source": "src-1"
      },
      "newConstruction": {
        "value": 15,
        "unit": "billion",
        "assumption": "New residential construction (single-family + multifamily builder channel) modeled at ~20% of the residential flooring end-market. Anchored to Floor Covering News / Market Insights STATS data showing new-home construction fell to ~20% of category sales in 2024 (from 33.5% in 2018), corroborated directionally by hardwood's elevated builder share. Applied as 20% x $76B residential installed TAM. MODELED estimate - no source publishes the new-vs-reno dollar split directly.",
        "modeledEstimate": true,
        "source": "src-3"
      },
      "renovationRepair": {
        "value": 61,
        "unit": "billion",
        "assumption": "Residential replacement / remodel / repair modeled as the residual ~80% of the residential flooring end-market (1 - new-construction share). Consistent with JCHS LIRA showing homeowner improvement & repair spending of ~$463B in 2024 (of which flooring is a single-digit-percent line item) and with Market Insights / Floor Daily noting residential consumption fell ~8% in 2024. Applied as 80% x $76B residential installed TAM. MODELED estimate.",
        "modeledEstimate": true,
        "source": "src-3"
      },
      "methodology": "Top-down. Total US residential flooring INSTALLED market (materials + installation labor, retail/end-market value). Total flooring market (all segments, retail-installed value) estimated at ~$117-124B for 2025-2026 (Market Data Forecast: $117.31B 2025 / $123.90B 2026 - single-vendor figure, treated as one data point), of which the residential segment = 61.2% of share in 2024 (same vendor), yielding ~$76B residential. MEASUREMENT-BASIS NOTE: industry mill/manufacturer-level figures (Market Insights: $24.29B total at mill sell 2024; Catalina/STATS: $23.955B wholesale, ~$16.9B residential / $7.02B commercial) measure wholesale dollars at first point of sale and EXCLUDE retail markup and installation labor; the installed end-market value used for this TAM is roughly 2.5-3x the mill figure. The new-vs-reno split is MODELED (no source publishes the dollar split directly) using FCNews/Market Insights category-share data (~20% new construction, down from 33.5% in 2018). Confidence is MEDIUM because the $76B residential anchor derives from applying a single vendor's share (61.2%) to that same vendor's total.",
      "confidence": "medium",
      "year": 2024
    },
    "topPlayers": [
      {
        "name": "Floor & Decor Holdings, Inc.",
        "approxRevenue": {
          "value": 4.456,
          "unit": "billion",
          "source": "src-4"
        },
        "ownership": "public",
        "sponsor": "",
        "note": "NYSE: FND. Largest US specialty hard-surface flooring retailer (250+ warehouse stores); sells flooring materials plus connects customers to installation via its referral network, skewed heavily residential R&R and pro/builder. FY2024 net sales $4,455.8M (SEC 10-K confirmed). Largest revenue base in the space but is primarily retail/distribution rather than a pure installation contractor.",
        "website": "https://www.flooranddecor.com",
        "source": "src-4"
      },
      {
        "name": "Empire Today, LLC",
        "approxRevenue": {
          "value": 0.82,
          "unit": "billion",
          "source": "src-5"
        },
        "ownership": "PE-backed",
        "sponsor": "Charlesbank Capital Partners (control since Aug 2021; H.I.G. Capital minority). New majority equity from Invesco/Fortress lender group announced May 2026 amid second restructuring.",
        "note": "Largest US direct-to-consumer, shop-at-home residential flooring + installation company; 70+ metros, carpet/hardwood/LVP/tile fully installed. LTM revenue ~$820M as of mid-2024 (peak ~$880M in 2022); first liability-management exercise Nov 2024, second restructuring process from Feb 2026, Invesco/Fortress recapitalization May 2026 (confirmed via Pari Passu / S&P).",
        "website": "https://www.empiretoday.com",
        "source": "src-5"
      },
      {
        "name": "50 Floor, Inc.",
        "approxRevenue": {
          "value": null,
          "unit": "million",
          "source": null
        },
        "ownership": "PE-backed",
        "sponsor": "AEA Investors (Enterprise / SBF group; invested Dec 2020)",
        "note": "Direct-to-consumer, shop-at-home residential repair-and-remodel flooring installer; Atlanta HQ with offices in Charlotte, Raleigh, Dallas, Nashville. A distant #3 pure-play residential installer behind Empire Today; exact revenue not credibly disclosed (third-party scraper estimates ~$50M but unverified, so left null). Included as the clearest PE-backed national residential installation platform after Empire. AEA portfolio page confirmed live, 12/2020 investment date.",
        "website": "https://www.50floor.com",
        "source": "src-6"
      }
    ],
    "rollups": [
      {
        "platform": "Empire Today (Charlesbank Capital Partners)",
        "sponsor": "Charlesbank Capital Partners (H.I.G. Capital minority)",
        "thesis": "National direct-to-consumer shop-at-home residential flooring installation platform; scale buying + branded lead-gen across 70+ metros. Now in lender-led restructuring (Invesco/Fortress majority recapitalization, May 2026) after over-leverage, illustrating the cyclicality risk of consumer-flooring roll-ups.",
        "notableAddOns": "Built primarily organically; legacy roll-up of regional shop-at-home installers under the Empire brand. (No disclosed bolt-on acquisitions under Charlesbank.)",
        "link": "https://www.prnewswire.com/news-releases/empire-today-acquired-by-hig-capital-300365496.html",
        "linkType": "press-release",
        "source": "src-5"
      },
      {
        "platform": "50 Floor (AEA Investors)",
        "sponsor": "AEA Investors",
        "thesis": "Consolidate the fragmented residential shop-at-home repair-and-remodel flooring installation market into a multi-metro branded platform with centralized marketing, sales, and install logistics.",
        "notableAddOns": "Organic multi-metro expansion (Atlanta, Charlotte, Raleigh, Dallas, Nashville) rather than disclosed bolt-on acquisitions.",
        "link": "https://www.aeainvestors.com/portfolio/50-floor-inc/",
        "linkType": "company",
        "source": "src-6"
      },
      {
        "platform": "SCI Flooring (Rainier Partners)",
        "sponsor": "Rainier Partners",
        "thesis": "Roll up regional flooring providers serving the multifamily tenant-turnover, commercial, and retail channels; buy-and-build across the Midwest and East Coast. Residential-adjacent (multifamily/commercial/property services) rather than pure consumer-retail residential install.",
        "notableAddOns": "Flooring Partners (Baltimore; MD/DC/PA/DE/NJ) announced Aug 5, 2025 as the platform's third add-on; Flooring Partners had itself acquired Flooring Edge (Ohio), extending SCI's footprint into Ohio. SCI operates as SCI Floor Covering, MC Flooring, Eastpointe Interiors, United Carpet, and Carpetbaggers across the Midwest.",
        "link": "https://www.rainierpartners.com/rainier-backed-sci-flooring-acquires-flooring-partners/",
        "linkType": "press-release",
        "source": "src-7"
      }
    ],
    "fragmentation": {
      "score": 5,
      "rationale": "Highly fragmented. NAICS 238330 (flooring contractors) comprises ~13,000-18,000 establishments averaging under 5 employees each (Census CBP / IBISWorld), with no single installation contractor holding >5% national share. The largest revenue bases (Floor & Decor, Home Depot, Lowe's) are retailers that subcontract installation to thousands of independent local crews; the largest pure-play installer (Empire Today, ~$820M) is well under 2% of the ~$76B residential installed market. Demand is hyper-local and reputation-driven.",
      "source": "src-2"
    },
    "rollupIntensity": {
      "score": 3,
      "rationale": "Moderate and rising, but concentrated in adjacent channels. Most 2024-2025 PE activity targeted commercial flooring, distribution, and multifamily/commercial-services installers (SCI Flooring/Rainier) rather than pure consumer-residential install. Consumer-residential roll-ups exist (Empire Today/Charlesbank, 50 Floor/AEA) but the flagship platform (Empire) is in restructuring (Invesco/Fortress recap May 2026), dampening the thesis. Pure residential-installation roll-up activity remains early-stage versus more mature trades like HVAC."
    },
    "sources": [
      {
        "id": "src-1",
        "publisher": "Market Data Forecast",
        "title": "U.S. Flooring Market Size, Share, Growth & Trend Report (total $117.31B 2025 / $123.90B 2026; residential = 61.2% of 2024 share)",
        "url": "https://www.marketdataforecast.com/market-reports/us-flooring-market",
        "type": "market-research",
        "dateAccessed": "2026-06-24"
      },
      {
        "id": "src-2",
        "publisher": "IBISWorld",
        "title": "Flooring Contractors in the US (NAICS 238330) - establishments, employment, fragmentation (industry revenue ~$34B)",
        "url": "https://www.ibisworld.com/classifications/naics/238330/flooring-contractors/",
        "type": "market-research",
        "dateAccessed": "2026-06-24"
      },
      {
        "id": "src-3",
        "publisher": "Floor Covering News",
        "title": "Scoring flooring: Industry stats for 2024 (Market Insights/Catalina STATS; new-construction share vs replacement; residential vs commercial split)",
        "url": "https://www.fcnews.net/2025/06/scoring-flooring-industry-stats-for-2024/",
        "type": "trade-press",
        "dateAccessed": "2026-06-24"
      },
      {
        "id": "src-4",
        "publisher": "U.S. Securities and Exchange Commission (Floor & Decor Holdings, Inc.)",
        "title": "Floor & Decor Holdings, Inc. Form 10-K, FY2024 (net sales $4,455.8M)",
        "url": "https://www.sec.gov/Archives/edgar/data/0001507079/000150707925000013/fnd-20241226.htm",
        "type": "filing",
        "dateAccessed": "2026-06-24"
      },
      {
        "id": "src-5",
        "publisher": "Pari Passu (Restructuring Newsletter)",
        "title": "Empire Today: Floored by the Market (revenue ~$820M LTM mid-2024, ~$880M peak; Charlesbank/H.I.G. ownership; Nov 2024 + Feb 2026 restructurings)",
        "url": "https://restructuringnewsletter.com/p/empire-today-floored-by-the-market",
        "type": "trade-press",
        "dateAccessed": "2026-06-24"
      },
      {
        "id": "src-6",
        "publisher": "AEA Investors",
        "title": "50 Floor, Inc. - portfolio company profile (residential shop-at-home flooring; AEA invested Dec 2020)",
        "url": "https://www.aeainvestors.com/portfolio/50-floor-inc/",
        "type": "trade-press",
        "dateAccessed": "2026-06-24"
      },
      {
        "id": "src-7",
        "publisher": "Rainier Partners",
        "title": "Rainier-Backed SCI Flooring Acquires Flooring Partners (multifamily/commercial flooring roll-up; Flooring Partners third add-on; Flooring Edge sub-acquisition)",
        "url": "https://www.rainierpartners.com/rainier-backed-sci-flooring-acquires-flooring-partners/",
        "type": "trade-press",
        "dateAccessed": "2026-06-24"
      },
      {
        "id": "src-8",
        "publisher": "Joint Center for Housing Studies of Harvard University",
        "title": "Leading Indicator of Remodeling Activity (LIRA) - homeowner improvement & repair spending ~$463B 2024 ($451B forward)",
        "url": "https://www.jchs.harvard.edu/research-areas/remodeling/lira",
        "type": "trade-association",
        "dateAccessed": "2026-06-24"
      },
      {
        "id": "src-9",
        "publisher": "Floor Daily (Floor Focus)",
        "title": "Annual Report: A year of cautious spending led to a 4% decline in 2024 flooring (Market Insights: $24.29B at mill sell; residential -8%)",
        "url": "https://www.floordaily.net/floorfocus/annual-report-a-year-of-cautious-spending-particularly-on-the-residential-side-led-to-a-4",
        "type": "trade-press",
        "dateAccessed": "2026-06-24"
      },
      {
        "id": "src-10",
        "publisher": "Floor Covering News",
        "title": "Scoring flooring: Industry stats for 2024 - total industry $23.955B wholesale; commercial $7.02B; residential ~$16.9B (measurement-basis reconciliation)",
        "url": "https://www.fcnews.net/2025/06/scoring-flooring-industry-stats-for-2024/",
        "type": "trade-press",
        "dateAccessed": "2026-06-24"
      }
    ]
  },
  "painting": {
    "dataStatus": "complete",
    "confidence": "medium",
    "tam": {
      "total": {
        "value": 28.1,
        "unit": "billion",
        "source": "src-1"
      },
      "newConstruction": {
        "value": 7,
        "unit": "billion",
        "modeledEstimate": true,
        "assumption": "No source directly splits residential painting into new vs. repaint. Modeled at ~25% new-construction / ~75% renovation-repaint. Rationale: residential painting demand is dominated by the recurring repaint/maintenance cycle on the existing housing stock rather than first-paint of new units. New single-family completions run ~1M/year and new-construction painting is a thin per-unit line item; JCHS reports owner-occupied improvement spending reached $405B in 2023 (verified). 25% is a deliberately conservative upper bound for the new-build share.",
        "source": "src-1"
      },
      "renovationRepair": {
        "value": 21.1,
        "unit": "billion",
        "modeledEstimate": true,
        "assumption": "Modeled as the residual ~75% of the IBISWorld House Painting & Decorating Contractors total. Supported by the structurally large home-improvement/repaint market: JCHS Improving America's Housing 2025 reports owner-occupied improvement spending of $405B in 2023 (verified), two-thirds of total remodeling spend. Repaint cycles (~5-10yr interior, ~5-7yr exterior) make renovation/repair the dominant demand driver for residential painting contractors. Split is modeled, not reported.",
        "source": "src-2"
      },
      "methodology": "Top-down. Anchored on IBISWorld 'House Painting & Decorating Contractors in the US' (OD5738). VERIFIED: IBISWorld page confirms $28.2B for 2025; $28.1B for 2024 is consistent with the reported 0.4% 2025 growth. Industry definition is residential painting for homes and apartment buildings, taken as the US residential painting TAM. The new-vs-renovation split is NOT reported by IBISWorld and is therefore modeled (~25% new / ~75% renovation-repaint), corroborated directionally by JCHS Improving America's Housing 2025 (owner improvement spending $405B in 2023, verified). Note: a portion of this contractor revenue is light-commercial/apartment work; treated as residential per the industry definition. Single market-research vendor anchor - treat as one data point.",
      "year": 2024,
      "confidence": "medium"
    },
    "topPlayers": [
      {
        "name": "CertaPro Painters",
        "approxRevenue": {
          "value": 700,
          "unit": "million",
          "source": "src-3"
        },
        "ownership": "public",
        "sponsor": "FirstService Corporation (NASDAQ/TSX: FSV)",
        "note": "North America's largest franchised residential and commercial painting company; ~370-488 franchise units (sources vary). Recorded ~$700M in system-wide sales in 2023 and over $700M in 2024 (corroborated by trade press). Owned by FirstService Brands, a subsidiary of publicly traded FirstService Corporation. VERIFIED: ownership, scale, and largest-painting-franchise claim confirmed; $700M is a company/trade-press figure, directionally corroborated.",
        "website": "https://certapro.com",
        "source": "src-3"
      },
      {
        "name": "Five Star Painting (Neighborly)",
        "approxRevenue": {
          "value": null,
          "unit": "million",
          "source": null
        },
        "ownership": "PE-backed",
        "sponsor": "KKR",
        "note": "Residential/commercial painting franchise; part of Neighborly, the home-services franchisor in which KKR acquired a controlling stake in 2021 (VERIFIED). Neighborly acquired Five Star Painting in 2015. System-wide painting revenue not separately disclosed.",
        "website": "https://www.fivestarpainting.com",
        "source": "src-4"
      },
      {
        "name": "360 Painting (Premium Service Brands)",
        "approxRevenue": {
          "value": null,
          "unit": "million",
          "source": null
        },
        "ownership": "PE-backed",
        "sponsor": "Susquehanna Private Capital / Susquehanna Growth Equity",
        "note": "CORRECTED: prior record stated 'The Riverside Company' - this is WRONG. Premium Service Brands' PE backer is Susquehanna Private Capital (Susquehanna Growth Equity), which invested in March 2021 (verified via Boxwood Partners deal announcement, BusinessWire, and SGE portfolio page). 360 Painting is the flagship painting brand of PSB (a multi-brand home-services franchisor, 1,000+ total units across all brands). Painting-brand revenue not separately disclosed.",
        "website": "https://www.360painting.com",
        "source": "src-6"
      }
    ],
    "rollups": [
      {
        "platform": "Premium Service Brands (360 Painting)",
        "sponsor": "Susquehanna Private Capital / Susquehanna Growth Equity",
        "thesis": "Multi-brand home-services franchise consolidation, with 360 Painting as the flagship painting concept, cross-selling franchisees across Maid Right, ProLift Garage Doors, Kitchen Wise and others. CORRECTED sponsor: backed by Susquehanna (invested 2021), NOT The Riverside Company.",
        "notableAddOns": "Maid Right, ProLift Garage Doors, Kitchen Wise, Rubbish Works, Renew Crew, Handyman Pro (within the PSB platform); 360 Painting is the original flagship brand.",
        "link": "https://premiumservicebrands.com/360-painting",
        "linkType": "company",
        "source": "src-6"
      },
      {
        "platform": "Neighborly (Five Star Painting)",
        "sponsor": "KKR",
        "thesis": "Roll-up of residential home-services franchise brands under one umbrella; Five Star Painting is the painting concept. KKR took a controlling stake in 2021 to scale the multi-brand franchisor (VERIFIED).",
        "notableAddOns": "Five Star Painting, Mr. Handyman, and 30+ other Neighborly home-services brands.",
        "link": "https://franchise.neighborly.com/five-star-painting",
        "linkType": "company",
        "source": "src-4"
      }
    ],
    "fragmentation": {
      "score": 5,
      "rationale": "Highly fragmented. IBISWorld reports ~220,891 House Painting & Decorating Contractor businesses in 2024 (~223,209 in 2025, verified) with no single company holding more than ~5% share. The largest player, CertaPro, holds under 2% of the combined US/Canada painting market (verified). Low capital requirements and minimal licensing barriers keep the field dominated by small owner-operators.",
      "source": "src-1"
    },
    "rollupIntensity": {
      "score": 3,
      "rationale": "Moderate and rising. Consolidation occurs primarily through franchise platforms rather than direct PE buy-and-build of independents: Susquehanna (Premium Service Brands / 360 Painting - CORRECTED from Riverside), KKR (Neighborly / Five Star Painting), and publicly traded FirstService (CertaPro). Unlike HVAC/plumbing, there is no dominant pure-play painting buy-and-build platform aggressively acquiring independents at scale; activity is franchise-led, and most of the ~221k-firm base remains independent."
    },
    "sources": [
      {
        "id": "src-1",
        "publisher": "IBISWorld",
        "title": "House Painting & Decorating Contractors in the US - Market Size Statistics",
        "url": "https://www.ibisworld.com/united-states/market-size/house-painting-decorating-contractors/5738/",
        "type": "market-research",
        "dateAccessed": "2026-06-24"
      },
      {
        "id": "src-2",
        "publisher": "Joint Center for Housing Studies of Harvard University",
        "title": "Improving America's Housing 2025 - Homeowner Improvement Expenditures by Project Type",
        "url": "https://www.jchs.harvard.edu/iah-2025-homeowner-expenditures-by-project",
        "type": "trade-association",
        "dateAccessed": "2026-06-24"
      },
      {
        "id": "src-3",
        "publisher": "CertaPro Painters / FirstService Corporation",
        "title": "CertaPro Painters - About Us (company history, ownership, scale)",
        "url": "https://certapro.com/about-us/",
        "type": "trade-press",
        "dateAccessed": "2026-06-24"
      },
      {
        "id": "src-4",
        "publisher": "Franchise Times",
        "title": "KKR Makes Winning Bid for Home-Services Franchisor Neighborly (Five Star Painting parent)",
        "url": "https://www.franchisetimes.com/franchise_mergers_and_acquisitions/kkr-makes-winning-bid-for-home-services-franchisor-neighborly/article_00a6419e-e015-11eb-849a-9fe8f7c8cea4.html",
        "type": "trade-press",
        "dateAccessed": "2026-06-24"
      },
      {
        "id": "src-5",
        "publisher": "Premium Service Brands",
        "title": "360 Painting (Premium Service Brands platform)",
        "url": "https://premiumservicebrands.com/360-painting",
        "type": "trade-press",
        "dateAccessed": "2026-06-24"
      },
      {
        "id": "src-6",
        "publisher": "BusinessWire / Susquehanna Growth Equity",
        "title": "Susquehanna Private Capital Announces Investment in Home Services Franchisor Premium Service Brands (March 2021)",
        "url": "https://www.businesswire.com/news/home/20210323005702/en/Susquehanna-Private-Capital-Announces-Investment-in-Home-Services-Franchisor-Premium-Service-Brands",
        "type": "trade-press",
        "dateAccessed": "2026-06-24"
      }
    ]
  },
  "cabinetry-countertops": {
    "dataStatus": "complete",
    "confidence": "medium",
    "tam": {
      "total": {
        "value": 80,
        "unit": "billion",
        "source": "src-1"
      },
      "year": 2024,
      "methodology": "Top-down build of two adjacent residential product categories. (1) US residential CABINETS: ResearchAndMarkets/Arizton (GlobeNewsWire/BusinessWire, Apr-Jun 2024) sized the US residential cabinet market at $37.5B in 2023, projected to reach $51.48B by 2029 at a 5.42% CAGR; interpolating gives ~$40-42B for 2024 from that single vendor. (Prior draft cited a '$47.48B 2024 Straits cut' that could NOT be corroborated and has been removed.) We anchor residential cabinetry at ~$40-47B for 2024 from this one market-research source. (2) US COUNTERTOPS: Grand View Research sized the total US countertops market at $32.09B in 2024 (all end-uses, verified); applying an estimated ~80% residential share yields ~$26B residential. Summing residential cabinetry (~$42-47B) + residential countertops (~$26B), then trimming for definitional overlap/commercial leakage, gives a residential cabinetry + countertop fabrication & installation TAM of roughly $70-85B; midpoint ~$80B. Cross-check: Lowe's (acquiring Artisan Design Group, 2025) independently characterized the interior-surfaces design/distribution/install market it serves as '~$50B', which is a narrower channel-specific cut and is directionally consistent. Confidence is MEDIUM because the cabinet anchor rests on a single market-research vendor (one data point), the residential split of the countertop figure is modeled (not reported), and the two source categories use different vendor methodologies.",
      "confidence": "medium",
      "newConstruction": {
        "value": 34,
        "unit": "billion",
        "source": "src-7",
        "modeledEstimate": true,
        "assumption": "Industry consensus and the ResearchAndMarkets/Arizton residential-cabinet report indicate Repair & Remodeling is the LARGER application segment for cabinets, with New Construction the smaller share. Census 2024 private residential construction (~$917.9B) grew faster in new single-family (+14% YoY) than in improvements (+3%), but the absolute improvements/repair base remains larger for fixtures like cabinets/tops. We MODEL New Construction at ~42% of the $80B TAM (~$34B). This is an estimate, not a directly reported figure."
      },
      "renovationRepair": {
        "value": 46,
        "unit": "billion",
        "source": "src-3",
        "modeledEstimate": true,
        "assumption": "MODELED as ~58% of the $80B TAM (~$46B). Anchored to JCHS LIRA, which put trailing US homeowner improvement & repair spending at ~$463B (as of the Apr-2024 LIRA reading, with ~$451-509B projected forward depending on release); kitchen/bath remodels are among the largest LIRA categories and cabinets + countertops are the highest-dollar line items within them. The ResearchAndMarkets/Arizton report names Repair & Remodeling as the largest US residential cabinet application segment, supporting reno/replacement > new construction. The 58/42 split itself is an estimate."
      }
    },
    "topPlayers": [
      {
        "name": "MasterBrand, Inc.",
        "approxRevenue": {
          "value": 2.7,
          "unit": "billion",
          "source": "src-4"
        },
        "ownership": "public",
        "sponsor": "",
        "note": "Largest residential cabinet manufacturer in North America (NYSE: MBC). VERIFIED: full-year 2024 net sales ~$2.70B (down ~1% YoY; Supreme acquisition added ~4%), reported Feb 18, 2025. Acquired Supreme Cabinetry Brands for $520M (closed mid-2024). Agreed Aug 6, 2025 to an all-stock merger with American Woodmark (pro forma EV $3.6B, equity $2.4B, combined TTM adj. EBITDA ~$639M incl. synergies, ~$4.5B combined revenue); merger subsequently cleared FTC review.",
        "website": "https://masterbrand.com",
        "source": "src-4"
      },
      {
        "name": "Cabinetworks Group",
        "approxRevenue": {
          "value": 2,
          "unit": "billion",
          "source": "src-6"
        },
        "ownership": "PE-backed",
        "sponsor": "Platinum Equity",
        "note": "One of the largest US residential cabinet manufacturers (Ann Arbor, MI); the largest INDEPENDENTLY OWNED US kitchen/bath cabinet maker. Built from ACProducts' 2020 acquisition of Masco Cabinetry, rebranded Cabinetworks. Brands include KraftMaid, Merillat, Medallion, Yorktowne, Echelon, etc. Acquired by Platinum Equity from American Industrial Partners/GIC in 2021. Revenue ~$2B is an ESTIMATE (private; not separately disclosed).",
        "website": "https://www.cabinetworksgroup.com",
        "source": "src-6"
      },
      {
        "name": "American Woodmark Corporation",
        "approxRevenue": {
          "value": 1.85,
          "unit": "billion",
          "source": "src-5"
        },
        "ownership": "public",
        "sponsor": "",
        "note": "Major US residential cabinet maker (Nasdaq: AMWD). VERIFIED: fiscal year ended 4/30/2024 net sales $1,847.5M (down 10.6% YoY), net income $116.2M, adj. EBITDA $252.8M. Sells through home centers, builders and independent dealers. Agreed Aug 6, 2025 to merge into MasterBrand in an all-stock deal (AMWD holders receive 5.150 MBC shares each); merger cleared FTC review.",
        "website": "https://www.americanwoodmark.com",
        "source": "src-5"
      }
    ],
    "rollups": [
      {
        "platform": "Cabinetworks Group",
        "sponsor": "Platinum Equity",
        "thesis": "Scale national residential cabinet manufacturing/distribution; consolidate stock-to-premium cabinet brands across home-center, builder and dealer channels.",
        "notableAddOns": "Built from ACProducts + Masco Cabinetry combination (2020); operates ten major cabinet brands incl. KraftMaid, Merillat, Medallion, Yorktowne, Echelon. Platinum Equity acquired the platform in 2021 from American Industrial Partners/GIC.",
        "link": "https://www.prnewswire.com/news-releases/platinum-equity-to-acquire-the-cabinetworks-group-a-leading-manufacturer-of-kitchen-cabinets-301261940.html",
        "linkType": "press-release",
        "source": "src-6"
      },
      {
        "platform": "Artisan Design Group (ADG)",
        "sponsor": "The Sterling Group (exited to Lowe's, 2025)",
        "thesis": "Roll up regional design/distribution/INSTALLATION providers for interior surfaces (flooring, cabinets, countertops) serving national/regional homebuilders and property managers.",
        "notableAddOns": "Grew under Sterling to ~$1.8B FY2024 revenue, 3,200+ specialized installers, national footprint. Sold to Lowe's for $1.325B (completed June 2, 2025) - now strategic-owned, no longer an active PE platform. Lowe's framed ADG's market as a fragmented ~$50B interior-surfaces opportunity.",
        "link": "https://corporate.lowes.com/newsroom/press-releases/sterling-group-agrees-sell-artisan-design-group-lowes-companies-inc-04-14-25",
        "linkType": "press-release",
        "source": "src-8"
      },
      {
        "platform": "Construction Resources (International Designs Group)",
        "sponsor": "Mill Point Capital (exited to Home Depot, 2023)",
        "thesis": "Consolidate design-oriented surfaces distribution + countertop fabrication/install + appliances for Pro renovation/remodel and homebuilder channels in the Southeast/East Coast.",
        "notableAddOns": "IDG portfolio incl. Construction Resources, United Materials, European Granite & Marble, Marva, Cancos Tile & Stone. The Home Depot agreed to acquire IDG from Mill Point Capital (announced Nov 20, 2023; expected close end of 2023); now a Home Depot subsidiary (strategic, not PE).",
        "link": "https://ir.homedepot.com/news-releases/2023/11-20-2023-211025962",
        "linkType": "press-release",
        "source": "src-9"
      }
    ],
    "fragmentation": {
      "score": 4,
      "rationale": "Bifurcated structure. MANUFACTURING is moderately consolidated: MasterBrand, Cabinetworks and American Woodmark together hold meaningful share of factory-made residential cabinets, and the MasterBrand/American Woodmark merger (announced Aug 2025, FTC-cleared) further concentrates the top. But the FABRICATION & INSTALLATION layer - local countertop fabricators and cabinet installers - is highly fragmented: NAICS 327991 (cut stone & stone product mfg) has ~1,099 establishments (figure from third-party NAICS aggregators; Census CBP gives a comparable count), thousands of local countertop/cabinet install contractors nationwide, and no installer holding dominant national share. Weighting the residential installed market toward the fragmented fab/install tail, overall fragmentation is high (4/5).",
      "source": "src-10"
    },
    "rollupIntensity": {
      "score": 4,
      "rationale": "Very active, notably at the strategic-exit stage. Two of the largest PE-built installation/distribution platforms in this exact space - Artisan Design Group (Sterling Group) and Construction Resources/IDG (Mill Point Capital) - were both acquired by big-box retailers (Lowe's $1.325B, completed June 2025; Home Depot, announced Nov 2023), validating the consolidation thesis and demonstrating clear exit paths. On the manufacturing side, Platinum Equity owns Cabinetworks, MasterBrand acquired Supreme Cabinetry ($520M, 2024) and agreed to merge with American Woodmark (Aug 2025, FTC-cleared). Heavy strategic + PE activity at the platform level; intensity is high (4/5) but not maximum 5 because the long tail of small local fabricators/installers remains largely unconsolidated and the dedicated PE platforms have already exited to strategics."
    },
    "sources": [
      {
        "id": "src-1",
        "publisher": "Grand View Research",
        "title": "U.S. Countertops Market Size & Share Report (US, ~$32.09B in 2024)",
        "url": "https://www.grandviewresearch.com/industry-analysis/us-countertops-market-report",
        "dateAccessed": "2026-06-24",
        "type": "market-research"
      },
      {
        "id": "src-2",
        "publisher": "ResearchAndMarkets / Arizton (GlobeNewsWire / BusinessWire)",
        "title": "U.S. Residential Cabinet Market - Focused Insights 2024-2029 ($37.5B in 2023; $51.48B by 2029; 5.42% CAGR)",
        "url": "https://www.globenewswire.com/news-release/2024/04/10/2860833/0/en/United-States-Residential-Cabinet-Focused-Insights-Report-2024-A-51-48-Billion-Market-by-2029-with-Arclinea-American-Woodmark-Cabinetworks-Group-MasterBrand-and-PORCELANOSA-Dominat.html",
        "dateAccessed": "2026-06-24",
        "type": "market-research"
      },
      {
        "id": "src-3",
        "publisher": "Harvard Joint Center for Housing Studies (JCHS)",
        "title": "Leading Indicator of Remodeling Activity (LIRA) - homeowner improvement & repair spending (~$463B trailing as of Apr-2024 reading)",
        "url": "https://www.jchs.harvard.edu/research-areas/remodeling/lira",
        "dateAccessed": "2026-06-24",
        "type": "trade-association"
      },
      {
        "id": "src-4",
        "publisher": "MasterBrand, Inc. (NYSE: MBC)",
        "title": "MasterBrand Reports Fourth Quarter and Full Year 2024 Financial Results - FY2024 net sales ~$2.70B (Feb 18, 2025)",
        "url": "https://www.businesswire.com/news/home/20250218224651/en/MasterBrand-Reports-Fourth-Quarter-and-Full-Year-2024-Financial-Results",
        "dateAccessed": "2026-06-24",
        "type": "filing"
      },
      {
        "id": "src-5",
        "publisher": "American Woodmark Corporation (Nasdaq: AMWD)",
        "title": "American Woodmark FY2024 Annual Report - net sales $1,847.5M (fiscal year ended 4/30/2024)",
        "url": "https://www.sec.gov/Archives/edgar/data/0000794619/000079461924000064/americanwoodmark2024annual.pdf",
        "dateAccessed": "2026-06-24",
        "type": "filing"
      },
      {
        "id": "src-6",
        "publisher": "Platinum Equity / PR Newswire",
        "title": "Platinum Equity to Acquire The Cabinetworks Group, a Leading Manufacturer of Kitchen Cabinets (2021)",
        "url": "https://www.prnewswire.com/news-releases/platinum-equity-to-acquire-the-cabinetworks-group-a-leading-manufacturer-of-kitchen-cabinets-301261940.html",
        "dateAccessed": "2026-06-24",
        "type": "trade-press"
      },
      {
        "id": "src-7",
        "publisher": "US Census Bureau",
        "title": "Monthly Construction Spending, December 2024 (private residential ~$917.9B; new single-family +14% YoY, improvements +3%)",
        "url": "https://www.census.gov/construction/c30/pdf/pr202412.pdf",
        "dateAccessed": "2026-06-24",
        "type": "government"
      },
      {
        "id": "src-8",
        "publisher": "Lowe's Companies, Inc. / The Sterling Group",
        "title": "The Sterling Group Agrees to Sell Artisan Design Group to Lowe's Companies, Inc. ($1.325B; completed June 2025)",
        "url": "https://corporate.lowes.com/newsroom/press-releases/sterling-group-agrees-sell-artisan-design-group-lowes-companies-inc-04-14-25",
        "dateAccessed": "2026-06-24",
        "type": "trade-press"
      },
      {
        "id": "src-9",
        "publisher": "The Home Depot",
        "title": "The Home Depot Enters into Agreement to Acquire Construction Resources Parent Company, International Designs Group (from Mill Point Capital, Nov 20, 2023)",
        "url": "https://ir.homedepot.com/news-releases/2023/11-20-2023-211025962",
        "dateAccessed": "2026-06-24",
        "type": "trade-press"
      },
      {
        "id": "src-10",
        "publisher": "NAICS aggregator data (siccode.com) / US Census Bureau NAICS 327991",
        "title": "NAICS 327991 Cut Stone and Stone Product Manufacturing - ~1,099 active establishments (fragmentation reference)",
        "url": "https://www.census.gov/naics/?input=327991&year=2022&details=327991",
        "dateAccessed": "2026-06-24",
        "type": "government"
      },
      {
        "id": "src-11",
        "publisher": "MasterBrand, Inc. / BusinessWire",
        "title": "MasterBrand and American Woodmark to Combine in an All-Stock Transaction (Aug 6, 2025; pro forma EV $3.6B, equity $2.4B, TTM adj. EBITDA ~$639M, 5.150 exchange ratio)",
        "url": "https://www.businesswire.com/news/home/20250806123960/en/MasterBrand-and-American-Woodmark-to-Combine-in-an-All-Stock-Transaction-to-Accelerate-Value-Delivery-Through",
        "dateAccessed": "2026-06-24",
        "type": "filing"
      }
    ]
  },
  "closets-organization": {
    "dataStatus": "complete",
    "confidence": "medium",
    "tam": {
      "total": {
        "value": 11.5,
        "unit": "billion",
        "source": "src-1"
      },
      "year": 2024,
      "methodology": "Top-down. Anchored on Mordor Intelligence's US Home Organizers & Storage Market sizing, which reports USD 12.05B for 2025 at a 4.78% CAGR (both figures confirmed on the report page). Back-solving 2025 by the stated CAGR implies ~USD 11.5B for 2024. This definition spans both retail storage/organization products and installed/custom closet systems across bedroom closet, pantry/kitchen, laundry, home office and garage applications. Cross-checked directionally against Verified Market Research's global Home Organization Products figure (USD ~13.13B for 2024, confirmed) and the existence of a Freedonia Group US Home Organization Products study; these cluster in the same order of magnitude, with the global figure naturally a bit higher than the US-only figure. Treated as a single-vendor primary data point (medium confidence) given no US government statistic isolates this category.",
      "confidence": "medium",
      "newConstruction": {
        "value": 2.3,
        "unit": "billion",
        "modeledEstimate": true,
        "assumption": "Modeled at ~20% of total. No source reports a new-construction vs renovation split for home organization. Residential closet/organization demand is overwhelmingly tied to existing homes (consumers organizing/remodeling space they already occupy) and to retail product purchases; builder-installed wire/wood closet systems in new construction represent a minority. 20% reflects the share attributable to ~1.4M annual new housing completions receiving entry-level installed closet systems vs the much larger installed base of ~145M existing housing units driving replacement/upgrade and retail product demand.",
        "source": null
      },
      "renovationRepair": {
        "value": 9.2,
        "unit": "billion",
        "modeledEstimate": true,
        "assumption": "Modeled at ~80% of total (residual after new construction). Consistent with the renovation-led nature of the category: the market is dominated by homeowners upgrading closets/pantries/garages in existing homes plus DIY/retail organization product purchases, against a backdrop of large US renovation/remodeling spending. Directionally aligned with JCHS LIRA framing that home-improvement-and-repair spend on existing owner- and renter-occupied homes vastly exceeds the new-build component for interior fit-out categories. Modeled, not source-reported.",
        "source": null
      }
    },
    "topPlayers": [
      {
        "name": "California Closets",
        "approxRevenue": {
          "value": null,
          "unit": "million",
          "source": null
        },
        "ownership": "public",
        "sponsor": "",
        "note": "Largest US custom-closet/home-organization brand; a brand within FirstService Brands (parent FirstService Corporation, NASDAQ/TSX: FSV), operating a mix of company-owned and franchised studios. Brand-level revenue is NOT separately disclosed. The FirstService 6-K confirms the FirstService Brands SEGMENT (which also includes restoration, painting, fire protection, etc.) reported $836.5M in Q3 2024 alone, up 44% y/y, with California Closets a prominent brand within it. The ~$400M system-size shown is an approximate industry-cited estimate, NOT an SEC line item, and NOT the segment figure; third-party aggregators (Growjo/ZoomInfo) give wildly divergent and unreliable numbers ($1.27B-$5B) and were rejected. Source set to null because no cited document supports the specific $400M brand-level figure.",
        "website": "https://www.californiaclosets.com",
        "source": "src-2"
      },
      {
        "name": "The Container Store (Custom Spaces / Elfa)",
        "approxRevenue": {
          "value": 847.8,
          "unit": "million",
          "source": "src-3"
        },
        "ownership": "public",
        "sponsor": "",
        "note": "Publicly traded specialty retailer (ticker TCS; later TCSGQ) during the reporting period; total consolidated net sales ~$847.8M for fiscal year ended March 30, 2024 (confirmed; down ~19% y/y). Its Custom Spaces business (Elfa, Preston, Avera custom closet systems) is the most relevant residential-organization segment; the figure shown is TOTAL company revenue, not Custom Spaces alone. Filed prepackaged Chapter 11 on Dec 22, 2024 (confirmed) and emerged ~Jan 28, 2025 after cutting ~$88M debt.",
        "website": "https://www.containerstore.com",
        "source": "src-3"
      },
      {
        "name": "Closets by Design",
        "approxRevenue": {
          "value": null,
          "unit": "million",
          "source": null
        },
        "ownership": "franchise",
        "sponsor": "",
        "note": "Privately held franchisor (parent Home Organizers, Inc. / CBD Franchising, Inc., Garden Grove CA), founded 1982, franchising since 1998; custom closets, garage, office and pantry systems across North America. No PE backing identified. System-wide revenue not publicly disclosed. Parent/location/founding-year all confirmed.",
        "website": "https://www.closetsbydesign.com",
        "source": "src-4"
      }
    ],
    "rollups": [
      {
        "platform": "Artisan Custom Closets",
        "sponsor": "Georgia Oak Partners",
        "thesis": "Build a vertically integrated, multi-region custom-closet/home-storage platform in the Southeast by consolidating fragmented local designer-manufacturer-installers, riding Southeast population growth, rising home values and aging-housing/reinvestment tailwinds.",
        "notableAddOns": "Spacemakers & Carolina Closets (Jun 2023), Chattanooga Closet Company (Apr 2024), Queen City Closets (Feb 2026)",
        "link": "https://www.georgiaoak.com/insights/press-releases/georgia-oak-partners-invests-in-artisan-custom-closets",
        "linkType": "press-release",
        "source": "src-5"
      },
      {
        "platform": "Renuity (Closet America)",
        "sponsor": "Renuity (multi-brand residential home-improvement platform)",
        "thesis": "Add the fast-growing home-organization/custom-closet category to a multi-brand residential home-improvement platform, cross-selling closets alongside bath, window, kitchen-refacing and garage services to homeowners across Renuity markets.",
        "notableAddOns": "Closet America (Apr 2023; Mid-Atlantic custom closets serving DC, Northern Virginia, Maryland)",
        "link": "https://www.businesswire.com/news/home/20230406005757/en/Renuity-Enters-Fast-Growing-Home-Organization-Category-With-Closet-America-Acquisition",
        "linkType": "press-release",
        "source": "src-6"
      }
    ],
    "fragmentation": {
      "score": 4,
      "rationale": "Highly fragmented. Aside from a few recognized national brands (California Closets, operated largely via franchised studios; The Container Store/Elfa; and franchisor Closets by Design), the installed custom-closet market is dominated by thousands of small local/regional designer-manufacturer-installers. The largest brand's estimated system size (~$400M, soft estimate) is a low-single-digit share of an ~$11.5B category, with franchise/independent operators holding the bulk. Not a 5 only because a couple of established national brands and franchise networks provide some structure.",
      "source": "src-1"
    },
    "rollupIntensity": {
      "score": 3,
      "rationale": "Moderate and rising. Active PE-backed consolidation exists (Georgia Oak's Artisan Custom Closets has executed multiple regional add-ons through Feb 2026; Renuity acquired Closet America to enter the category and roll it across its markets), and adjacent home-services roll-up appetite is spilling into home organization. But closets-specific platforms remain few and regional versus the more mature HVAC/plumbing/garage-door roll-up waves, so intensity is mid-scale rather than frenzied."
    },
    "sources": [
      {
        "id": "src-1",
        "publisher": "Mordor Intelligence",
        "title": "United States Home Organizers and Storage Market - Size, Share & Industry Analysis",
        "url": "https://www.mordorintelligence.com/industry-reports/united-states-home-organizers-and-storage-market",
        "dateAccessed": "2026-06-24",
        "type": "market-research"
      },
      {
        "id": "src-2",
        "publisher": "U.S. Securities and Exchange Commission (FirstService Corporation Form 6-K)",
        "title": "FirstService Corp - Form 6-K - Q3 2024 (FirstService Brands segment results; California Closets is a brand within the segment)",
        "url": "https://www.sec.gov/Archives/edgar/data/0001637810/000117184324005804/exh_991.htm",
        "dateAccessed": "2026-06-24",
        "type": "filing"
      },
      {
        "id": "src-3",
        "publisher": "U.S. Securities and Exchange Commission (Container Store Group, Inc.)",
        "title": "Container Store Group, Inc. - FY2023 results (fiscal year ended March 30, 2024; total net sales ~$847.8M; Custom Spaces/Elfa)",
        "url": "https://www.sec.gov/Archives/edgar/data/0001411688/000162828024023055/tcs-20240514xex991xpressre.htm",
        "dateAccessed": "2026-06-24",
        "type": "filing"
      },
      {
        "id": "src-4",
        "publisher": "Closets by Design",
        "title": "Own a Custom Design Franchise Opportunity | Closets by Design (ownership and franchise network)",
        "url": "https://www.closetsbydesign.com/franchise",
        "dateAccessed": "2026-06-24",
        "type": "trade-press"
      },
      {
        "id": "src-5",
        "publisher": "Georgia Oak Partners",
        "title": "Georgia Oak Partners Invests in Artisan Custom Closets",
        "url": "https://www.georgiaoak.com/insights/press-releases/georgia-oak-partners-invests-in-artisan-custom-closets",
        "dateAccessed": "2026-06-24",
        "type": "trade-press"
      },
      {
        "id": "src-6",
        "publisher": "Business Wire (Renuity)",
        "title": "Renuity Enters Fast-Growing Home Organization Category With Closet America Acquisition",
        "url": "https://www.businesswire.com/news/home/20230406005757/en/Renuity-Enters-Fast-Growing-Home-Organization-Category-With-Closet-America-Acquisition",
        "dateAccessed": "2026-06-24",
        "type": "trade-press"
      }
    ]
  },
  "restoration": {
    "dataStatus": "complete",
    "confidence": "medium",
    "tam": {
      "total": {
        "value": 115,
        "unit": "billion",
        "source": "src-3"
      },
      "year": 2025,
      "newConstruction": {
        "value": 0,
        "unit": "billion",
        "modeledEstimate": true,
        "assumption": "Restoration is inherently a repair/remediation/reconstruction service triggered by water, fire, smoke, mold, or storm damage to existing structures. There is no meaningful new-construction component; set to ~0.",
        "source": null
      },
      "renovationRepair": {
        "value": 115,
        "unit": "billion",
        "modeledEstimate": true,
        "assumption": "Essentially the entire restoration TAM is repair/remediation/reconstruction of existing property. Modeled as residential ~55% of the widely-cited ~$210B total US property restoration and remediation market (~$115B residential). Insurance-funded, non-discretionary demand.",
        "source": "src-3"
      },
      "methodology": "The prior ~$7.2B figure was IBISWorld's narrow 'Damage Restoration Services' US category (src-1: $7.1B in 2024, $7.2B in 2025), a thin contractor sub-segment that is logically inconsistent with top players (Servpro $4.5B system-wide franchise sales, BELFOR ~$2.5 to 2.7B global) operating in a market also described as fragmented. Reconciled by using the broader US property restoration and remediation market. Triangulation across scope definitions: (a) narrow mitigation contracting ~$7.2B US (IBISWorld, src-1); (b) global 'disaster restoration services' ~$43B in 2025 with North America ~40.6%, so ~$17.4B NA (Mordor, src-2); (c) full US property restoration and remediation including reconstruction ~$210B, residential ~55% (src-3/src-4). TAM set to ~$115B, the residential ~55% slice of the broad ~$210B US total, which is internally consistent with system-wide and global player revenues and high fragmentation (top-3 US-residential combined revenue is a low-single-digit % of TAM). Value carries medium confidence given the wide spread between scope definitions.",
      "confidence": "medium"
    },
    "topPlayers": [
      {
        "name": "Servpro",
        "approxRevenue": {
          "value": 4.5,
          "unit": "billion",
          "source": "src-5"
        },
        "ownership": "franchise",
        "sponsor": "Blackstone (majority recapitalization, 2019; Isaacson family retains stake)",
        "note": "Revenue is 2024 SYSTEM-WIDE franchise sales across ~2,300+ independently owned and operated locations (global, but overwhelmingly US residential + commercial), NOT corporate revenue and NOT US-residential-only. Largest restoration franchise.",
        "website": "https://www.servpro.com",
        "source": "src-5"
      },
      {
        "name": "BELFOR Holdings",
        "approxRevenue": {
          "value": 2.7,
          "unit": "billion",
          "source": "src-6"
        },
        "ownership": "PE-backed",
        "sponsor": "American Securities (acquired 2019); Yellen family leadership (CEO Sheldon Yellen)",
        "note": "Revenue is GLOBAL company-wide (~34 countries, 14,000+ employees), spanning commercial + residential. US-residential share is a fraction of this. Largest single-company (non-franchise) restoration operator.",
        "website": "https://www.belfor.com",
        "source": "src-6"
      },
      {
        "name": "First Onsite Property Restoration",
        "approxRevenue": {
          "value": 1.5,
          "unit": "billion",
          "source": "src-7"
        },
        "ownership": "public",
        "sponsor": "FirstService Corporation (NASDAQ/TSX: FSV; ~$4.3B total corp revenue 2024)",
        "note": "Revenue is approximate/estimated North America (US + Canada) restoration-segment scale, primarily COMMERCIAL/institutional. US-residential is a minority of this. Acquisitive tuck-under platform.",
        "website": "https://firstonsite.com",
        "source": "src-7"
      },
      {
        "name": "ATI Restoration",
        "approxRevenue": {
          "value": null,
          "unit": "billion",
          "source": "src-8"
        },
        "ownership": "PE-backed",
        "sponsor": "TSG Consumer Partners (invested 2020); Moore family retains ownership",
        "note": "Largest family-owned US disaster recovery provider; ~2,600 employees; 15+ acquisitions Nov 2020 to Apr 2024. Disclosed revenue not available, value nulled. Commercial + residential.",
        "website": "https://atirestoration.com",
        "source": "src-8"
      },
      {
        "name": "BluSky Restoration Contractors",
        "approxRevenue": {
          "value": null,
          "unit": "billion",
          "source": "src-9"
        },
        "ownership": "PE-backed",
        "sponsor": "Partners Group and Kohlberg & Company (acquired 2021)",
        "note": "Leading US provider, but primarily COMMERCIAL/industrial/healthcare/multifamily, limited US-residential. Disclosed revenue not available, value nulled.",
        "website": "https://www.goblusky.com",
        "source": "src-9"
      }
    ],
    "rollups": [
      {
        "platform": "BELFOR Holdings",
        "sponsor": "American Securities",
        "thesis": "National and global buy-and-build consolidation of the fragmented restoration market; largest single-company operator scaling commercial + residential coverage.",
        "notableAddOns": "10+ acquisitions adding 30+ locations across 2023-2024",
        "link": "https://www.belfor.com/us/en/about/",
        "linkType": "company",
        "source": "src-6"
      },
      {
        "platform": "First Onsite Property Restoration",
        "sponsor": "FirstService Corporation (public)",
        "thesis": "Public-company tuck-under roll-up building the #2 independent North American commercial restoration platform via geographic in-fill acquisitions.",
        "notableAddOns": "DryPatrol (Dayton OH) and All Restoration Solutions (Atlanta GA) acquired 2024",
        "link": "https://www.globenewswire.com/news-release/2024/01/10/2807019/36351/en/FirstService-Adds-Restoration-Tuck-Under-Acquisitions.html",
        "linkType": "press-release",
        "source": "src-7"
      },
      {
        "platform": "ATI Restoration",
        "sponsor": "TSG Consumer Partners",
        "thesis": "PE-backed national roll-up of regional disaster-recovery firms while retaining founding-family ownership.",
        "notableAddOns": "15 companies acquired Nov 2020 to Apr 2024",
        "link": "https://atirestoration.com/press-releases/ati-announces-investment-from-tsg-consumer-partners/",
        "linkType": "press-release",
        "source": "src-8"
      },
      {
        "platform": "BluSky Restoration Contractors",
        "sponsor": "Partners Group + Kohlberg & Company",
        "thesis": "PE roll-up of commercial/industrial/healthcare/multifamily restoration providers into a leading US commercial platform.",
        "notableAddOns": "Acquired by Partners Group and Kohlberg (2021); active add-on program",
        "link": "https://www.kohlberg.com/partners-group-and-kohlberg-company-acquire-blusky-a-leading-us-provider-of-commercial-restoration-services/",
        "linkType": "press-release",
        "source": "src-9"
      }
    ],
    "fragmentation": {
      "score": 5,
      "rationale": "Highly fragmented. On the reconciled ~$115B US-residential TAM, the three largest restoration brands' US-residential revenue is a low-single-digit % of the total, and even Servpro's entire $4.5B global system-wide franchise sales is under 4% of TAM. Even on the narrower ~$17.4B North America 'disaster restoration services' denominator, no single firm exceeds ~15% and the long tail of thousands of small regional and local contractors dominates. This resolves the original inconsistency (top-3 appeared to exceed a too-narrow $7.2B TAM): the players' revenues are system-wide or global, and the true addressable TAM is far larger.",
      "source": "src-3"
    },
    "rollupIntensity": {
      "score": 4,
      "rationale": "Active, well-funded PE consolidation: Blackstone (Servpro), American Securities (BELFOR), TSG Consumer (ATI), Partners Group + Kohlberg (BluSky), and public FirstService (First Onsite) are all running buy-and-build programs, with dozens of add-ons annually. Insurance-funded, non-discretionary, recession-resilient demand makes it a favored roll-up sector, but extreme fragmentation means consolidation is still early, so intensity is high rather than maxed."
    },
    "sources": [
      {
        "id": "src-1",
        "publisher": "IBISWorld",
        "title": "Damage Restoration Services in the US - Market Size (2025)",
        "url": "https://www.ibisworld.com/united-states/market-size/damage-restoration-services/6278/",
        "dateAccessed": "2026-06-24",
        "type": "market-research"
      },
      {
        "id": "src-2",
        "publisher": "Mordor Intelligence",
        "title": "Disaster Restoration Services Market Size & Growth (to 2031); North America ~40.6% share",
        "url": "https://www.mordorintelligence.com/industry-reports/disaster-restoration-services-market",
        "dateAccessed": "2026-06-24",
        "type": "market-research"
      },
      {
        "id": "src-3",
        "publisher": "L.E.K. Consulting",
        "title": "Claim to Know the Restoration and Remediation Industry? Not So Fast",
        "url": "https://www.lek.com/insights/ind/us/ei/claim-know-restoration-and-remediation-industry-not-so-fast",
        "dateAccessed": "2026-06-24",
        "type": "trade-press"
      },
      {
        "id": "src-4",
        "publisher": "1-800 Water Damage (franchise research summary citing industry data)",
        "title": "How Big Is the Restoration Industry (~$210B total; residential ~55%)",
        "url": "https://1800waterdamagefranchise.com/research/how-big-is-the-restoration-industry/",
        "dateAccessed": "2026-06-24",
        "type": "trade-press"
      },
      {
        "id": "src-5",
        "publisher": "Franchise Times",
        "title": "City Wide, CRDN Led Cleaning and Restoration Sales Growth in Top 400 (Servpro $4.5B 2024 system-wide sales)",
        "url": "https://www.franchisetimes.com/franchise_news/city-wide-crdn-led-cleaning-and-restoration-sales-growth-in-top-400/article_1d08f9df-d17d-4fb4-9242-700e755592bf.html",
        "dateAccessed": "2026-06-24",
        "type": "trade-press"
      },
      {
        "id": "src-6",
        "publisher": "Qualified Remodeler (Top 500 Insurance Restoration) / BELFOR",
        "title": "2025 Top 500 Insurance Restoration (BELFOR ~$2.5 to 2.7B global; American Securities ownership; Yellen leadership)",
        "url": "https://www.belfor.com/us/wp-content/uploads/sites/2/2025/08/Qualified-Remodeler-2025-Top-500-Insurance-Restoration-Value-in-Service-Sheldon-Yellen-August-14-2025.pdf",
        "dateAccessed": "2026-06-24",
        "type": "trade-press"
      },
      {
        "id": "src-7",
        "publisher": "FirstService Corporation / GlobeNewswire",
        "title": "FirstService Adds Restoration Tuck-Under Acquisitions (First Onsite; FirstService ~$4.3B corp revenue 2024)",
        "url": "https://www.globenewswire.com/news-release/2024/01/10/2807019/36351/en/FirstService-Adds-Restoration-Tuck-Under-Acquisitions.html",
        "dateAccessed": "2026-06-24",
        "type": "filing"
      },
      {
        "id": "src-8",
        "publisher": "ATI Restoration / Business Wire",
        "title": "ATI Announces Investment from TSG Consumer Partners; largest family-owned US disaster recovery provider",
        "url": "https://atirestoration.com/press-releases/ati-announces-investment-from-tsg-consumer-partners/",
        "dateAccessed": "2026-06-24",
        "type": "trade-press"
      },
      {
        "id": "src-9",
        "publisher": "Kohlberg & Company",
        "title": "Partners Group and Kohlberg & Company Acquire BluSky, a Leading US Provider of Commercial Restoration Services",
        "url": "https://www.kohlberg.com/partners-group-and-kohlberg-company-acquire-blusky-a-leading-us-provider-of-commercial-restoration-services/",
        "dateAccessed": "2026-06-24",
        "type": "press-release"
      }
    ]
  },
  "pet-services": {
    "dataStatus": "complete",
    "confidence": "medium",
    "tam": {
      "total": {
        "value": 2.0,
        "unit": "billion",
        "source": "src-1"
      },
      "year": 2025,
      "newConstruction": {
        "value": 0,
        "unit": "billion",
        "modeledEstimate": true,
        "assumption": "Residential pet services (dog walking, pet sitting, in-home pet care, pet waste removal) is a pure recurring service category with no construction component. New construction is structurally zero.",
        "source": null
      },
      "renovationRepair": {
        "value": 2.0,
        "unit": "billion",
        "modeledEstimate": true,
        "assumption": "The entire TAM is recurring residential service revenue, shown in the renovation/repair field as the recurring-service TAM. Built from IBISWorld US Dog Walking Services (which includes pet sitting) at $1.3B in 2025 (src-1) plus a modeled US pet waste removal component of roughly $0.7B derived from third-party global pet waste pickup estimates of $1.8 to 2.1B (src-5, src-6) scaled to a US share. Rounded to $2.0B.",
        "source": "src-1"
      },
      "methodology": "TAM is built from two sourced legs. Leg 1: IBISWorld classifies US Dog Walking Services at $1.3B in 2025; this classification explicitly includes both dog walking and in-home pet sitting (src-1, src-2). Grand View independently sizes global pet sitting at $2.69B in 2024 with the US at 27.1%, implying roughly $0.73B of US pet sitting alone, consistent with IBISWorld's combined $1.3B walking-plus-sitting figure (src-3). Leg 2: pet waste removal (poop scooping) is tracked separately by IBISWorld as Pet Waste Management Services; precise US revenue is paywalled, so we model roughly $0.7B for the US by scaling third-party global pet waste pickup estimates of $1.8 to 2.1B (src-5, src-6) to a US share. Combined recurring residential TAM rounds to about $2.0B. Consistency check: the category is extremely fragmented (35,349 US dog walking and sitting businesses, none above 5% share, per src-2). The largest sourced corporate revenues are small relative to TAM and concentrate in tech-enabled marketplaces that also span boarding and daycare: Rover total revenue was about $235M in 2023 (src-7) and Wag total revenue was $70.5M in 2024 with only its Services segment of $21.6M representing walking and sitting (src-8). Top in-scope corporate revenue is a low-single-digit-percent slice of the $2.0B TAM, consistent with a fragmentation score of 5.",
      "confidence": "medium"
    },
    "topPlayers": [
      {
        "name": "Rover (Rover Group)",
        "approxRevenue": {
          "value": 235,
          "unit": "million",
          "source": "src-7"
        },
        "ownership": "PE-backed",
        "sponsor": "Blackstone (acquired for about $2.3B, closed February 2024)",
        "note": "Tech-enabled marketplace, not a roll-up. The $235M is total 2023 company revenue (take-rate on gross bookings) and spans boarding, in-home pet sitting, doggy daycare, dog walking, and drop-in visits, so only a portion is in-scope residential walking and sitting.",
        "website": "https://www.rover.com",
        "source": "src-7"
      },
      {
        "name": "Wag! (Wag! Group Co.)",
        "approxRevenue": {
          "value": 70.5,
          "unit": "million",
          "source": "src-8"
        },
        "ownership": "public",
        "sponsor": "Publicly traded (NASDAQ: PET); filed Chapter 11 in July 2025",
        "note": "On-demand marketplace, not a roll-up. $70.5M is total 2024 revenue; only the Services segment of $21.6M is dog walking, sitting, and training, the rest is Wellness ($42.7M) and Pet Food and Treats ($6.2M).",
        "website": "https://wagwalking.com",
        "source": "src-8"
      },
      {
        "name": "DoodyCalls",
        "approxRevenue": {
          "value": null,
          "unit": "million",
          "source": null
        },
        "ownership": "franchise",
        "sponsor": "Authority Brands (acquired February 2021; Authority Brands is owned by Apax Partners since 2018)",
        "note": "Largest pet-waste-removal franchise system. System-wide and corporate revenue not publicly disclosed; per-unit initial investment is roughly $36,000 to $53,000. Mix of residential and HOA/commercial pickup.",
        "website": "https://www.doodycalls.com",
        "source": "src-9"
      },
      {
        "name": "Scoop Soldiers",
        "approxRevenue": {
          "value": null,
          "unit": "million",
          "source": null
        },
        "ownership": "franchise",
        "sponsor": "Independent franchisor (began franchising 2019); growing via tuck-in acquisitions of local operators",
        "note": "Pet waste removal franchise; about 96 franchised territories across 16 states by 2023. Revenue undisclosed. Primarily residential recurring pickup.",
        "website": "https://scoopsoldiers.com",
        "source": "src-10"
      },
      {
        "name": "Pet Butler",
        "approxRevenue": {
          "value": null,
          "unit": "million",
          "source": null
        },
        "ownership": "franchise",
        "sponsor": "Spring-Green Enterprises (acquired 2017)",
        "note": "Pet waste removal franchise founded 1988. Revenue undisclosed. Residential and commercial pickup.",
        "website": "https://www.petbutler.com",
        "source": "src-11"
      }
    ],
    "rollups": [
      {
        "platform": "Authority Brands (DoodyCalls, Woofie's)",
        "sponsor": "Apax Partners (majority since 2018)",
        "thesis": "Multi-brand home and pet services franchise platform that adds recurring pet-services brands alongside 12+ home-services franchisors, cross-selling shared marketing, technology, and operations to franchisees.",
        "notableAddOns": "DoodyCalls (pet waste removal, acquired 2021) and Woofie's (mobile pet care, grooming, and dog walking)",
        "link": "https://www.prnewswire.com/news-releases/authority-brands-acquires-doodycalls-301231568.html",
        "linkType": "press-release",
        "source": "src-9"
      },
      {
        "platform": "Scoop Soldiers",
        "sponsor": "Independent franchisor (founder-led)",
        "thesis": "Consolidate fragmented local pet-waste-removal operators by acquiring established neighborhood scoopers and converting them to franchised territories with national support and brand standards.",
        "notableAddOns": "Acquisition of Dog Waste Management (Cleveland, Ohio) to enter that market",
        "link": "https://www.einpresswire.com/article/888044630/scoop-soldiers-expands-into-cleveland-ohio-through-acquisition-of-dog-waste-management",
        "linkType": "press-release",
        "source": "src-10"
      },
      {
        "platform": "Blackstone (Rover Group)",
        "sponsor": "Blackstone (private equity)",
        "thesis": "Take-private of the largest tech-enabled pet-care marketplace to scale a recurring residential pet-services demand engine (walking, sitting, boarding, daycare). Platform consolidation rather than franchise roll-up.",
        "notableAddOns": "Rover had previously acquired DogVacay (2017) and international platforms; Blackstone deal closed February 2024 at about $2.3B.",
        "link": "https://www.blackstone.com/news/press/blackstone-completes-acquisition-of-rover/",
        "linkType": "press-release",
        "source": "src-7"
      }
    ],
    "fragmentation": {
      "score": 5,
      "rationale": "Extremely fragmented. IBISWorld reports 35,349 US dog walking and pet sitting businesses in 2025 with no single company holding more than 5% market share; most operators are small and serve single neighborhoods because geographic expansion is logistically hard. Pet waste removal is similarly fragmented across thousands of local scoopers. Even the largest players (Rover, Wag, the franchise systems) collectively hold a low-single-digit share of the in-scope recurring TAM.",
      "source": "src-2"
    },
    "rollupIntensity": {
      "score": 3,
      "rationale": "Moderate and rising. Franchise consolidators (Authority Brands/DoodyCalls, Scoop Soldiers tuck-ins, Pet Butler under Spring-Green) are actively franchising and acquiring local pet-waste operators, and Blackstone took Rover private in 2024. However, most consolidation to date is in pet waste removal and marketplace platforms rather than systematic buy-and-build of independent dog-walking and sitting operators, which remain hard to roll up due to hyper-local, low-asset, owner-operator economics."
    },
    "sources": [
      {
        "id": "src-1",
        "publisher": "IBISWorld",
        "title": "Dog Walking Services in the US - Market Size Statistics (2025)",
        "url": "https://www.ibisworld.com/united-states/market-size/dog-walking-services/4350/",
        "dateAccessed": "2026-06-24",
        "type": "market-research"
      },
      {
        "id": "src-2",
        "publisher": "IBISWorld",
        "title": "Dog Walking Services in the US - Industry Analysis (fragmentation, business counts)",
        "url": "https://www.ibisworld.com/united-states/industry/dog-walking-services/4350/",
        "dateAccessed": "2026-06-24",
        "type": "market-research"
      },
      {
        "id": "src-3",
        "publisher": "Grand View Research",
        "title": "Pet Sitting Market Size, Share and Trends Report (global $2.69B 2024, US 27.1% share)",
        "url": "https://www.grandviewresearch.com/industry-analysis/pet-sitting-market",
        "dateAccessed": "2026-06-24",
        "type": "market-research"
      },
      {
        "id": "src-5",
        "publisher": "Dataintelo",
        "title": "Pet Waste Pickup Service Market Research Report (global pet waste removal market)",
        "url": "https://dataintelo.com/report/global-pet-waste-removal-services-market",
        "dateAccessed": "2026-06-24",
        "type": "market-research"
      },
      {
        "id": "src-6",
        "publisher": "Verified Market Research",
        "title": "Pet Waste Removal Services Market Size, Scope and Forecast",
        "url": "https://www.verifiedmarketresearch.com/product/pet-waste-removal-services-market/",
        "dateAccessed": "2026-06-24",
        "type": "market-research"
      },
      {
        "id": "src-7",
        "publisher": "Blackstone",
        "title": "Blackstone Completes Acquisition of Rover (~$2.3B; Rover 2023 revenue context)",
        "url": "https://www.blackstone.com/news/press/blackstone-completes-acquisition-of-rover/",
        "dateAccessed": "2026-06-24",
        "type": "press-release"
      },
      {
        "id": "src-8",
        "publisher": "GlobeNewswire (Wag! Group Co.)",
        "title": "Wag! Reports Fourth Quarter and Full Year 2024 Results",
        "url": "https://www.globenewswire.com/news-release/2025/03/24/3047690/0/en/Wag-Reports-Fourth-Quarter-and-Full-Year-2024-Results.html",
        "dateAccessed": "2026-06-24",
        "type": "filing"
      },
      {
        "id": "src-9",
        "publisher": "PR Newswire (Authority Brands)",
        "title": "Authority Brands Acquires DoodyCalls",
        "url": "https://www.prnewswire.com/news-releases/authority-brands-acquires-doodycalls-301231568.html",
        "dateAccessed": "2026-06-24",
        "type": "press-release"
      },
      {
        "id": "src-10",
        "publisher": "EIN Presswire (Scoop Soldiers)",
        "title": "Scoop Soldiers Expands into Cleveland, Ohio Through Acquisition of Dog Waste Management",
        "url": "https://www.einpresswire.com/article/888044630/scoop-soldiers-expands-into-cleveland-ohio-through-acquisition-of-dog-waste-management",
        "dateAccessed": "2026-06-24",
        "type": "press-release"
      },
      {
        "id": "src-11",
        "publisher": "Pet Butler Franchise",
        "title": "Pet Care Franchise Opportunities With Pet Butler (ownership: Spring-Green Enterprises since 2017)",
        "url": "https://petbutlerfranchise.com/",
        "dateAccessed": "2026-06-24",
        "type": "trade-press"
      }
    ]
  },
  "chimney-fireplace": {
    "dataStatus": "complete",
    "confidence": "medium",
    "tam": {
      "total": {
        "value": 0.71,
        "unit": "billion",
        "source": "src-1"
      },
      "year": 2024,
      "newConstruction": {
        "value": 0.04,
        "unit": "billion",
        "modeledEstimate": true,
        "assumption": "IBISWorld Fireplace Services ($710.1M, 2024) is a services industry covering chimney/fireplace cleaning, inspection, maintenance, relining, waterproofing and hearth-appliance service primarily on the existing installed base. New-construction chimney/fireplace install work is mostly captured by masonry and HVAC trades outside this NAICS, so only a small new-build service/install component sits here. Modeled at ~5% of total (~$36M) given the multi-decade decline in fireplaces in new homes and that most new fireplaces are factory-built units installed by builders/HVAC rather than this services industry. No source splits this directly.",
        "source": null
      },
      "renovationRepair": {
        "value": 0.67,
        "unit": "billion",
        "modeledEstimate": true,
        "assumption": "Modeled as the residual ~95% of the $710.1M total. The industry is overwhelmingly recurring service, inspection, cleaning, repair, relining and component replacement on the existing US homes with fireplaces/chimneys. Demand is driven by the installed base and fire-safety maintenance, not new construction.",
        "source": "src-1"
      },
      "methodology": "Top-down. Primary anchor is IBISWorld's US 'Fireplace Services' industry revenue of $710.1M for 2024 (confirmed via IBISWorld industry and market-size pages), the cleanest US-specific services TAM, covering chimney/fireplace cleaning and maintenance across single and multi-unit dwellings. New-vs-renovation split is modeled (not directly reported by IBISWorld or Census) on the basis that this is an installed-base service industry; ~95% renovation/repair/maintenance vs ~5% new-install service. Note this is a single-vendor anchor (IBISWorld) with no independent corroboration of the dollar figure, so confidence is held at medium. Global 'hearth' and 'chimney sweeping' vendor PDFs were reviewed but cover different (broader, global, product) scopes and were NOT used as the anchor.",
      "confidence": "medium"
    },
    "topPlayers": [
      {
        "name": "Endura Services (Endura Pro Partners)",
        "approxRevenue": {
          "value": null,
          "unit": "million",
          "source": null
        },
        "ownership": "PE-backed",
        "sponsor": "Argosy Private Equity",
        "note": "Self-described 'nation's largest provider of chimney & hearth services'; PE roll-up formed Dec 2024, launched Mar 2025. Site claims 150+ employees, 50,000+ clients, 150,000+ chimneys served. Revenue not publicly disclosed.",
        "website": "https://www.endurapropartners.com/",
        "source": "src-4"
      },
      {
        "name": "Lindemann Chimney & Fireplace",
        "approxRevenue": {
          "value": null,
          "unit": "million",
          "source": null
        },
        "ownership": "private",
        "sponsor": "",
        "note": "Long-established (est. ~1969, 'over 50 years') Lake Bluff IL / Chicagoland chimney, fireplace and HVAC service company; one of the larger independent regional operators. Revenue not publicly disclosed.",
        "website": "https://www.lindemann.com/",
        "source": "src-6"
      },
      {
        "name": "Chimney Solutions, Inc.",
        "approxRevenue": {
          "value": null,
          "unit": "million",
          "source": null
        },
        "ownership": "private",
        "sponsor": "",
        "note": "Established (20+ yrs) Greater Atlanta / Alpharetta GA chimney and hearth service company; CSIA-certified. Regional (metro-Atlanta) operator, not national despite earlier characterization. Revenue not publicly disclosed.",
        "website": "https://chimneysolutions.com/",
        "source": null
      }
    ],
    "rollups": [
      {
        "platform": "Endura Services",
        "sponsor": "Argosy Private Equity",
        "thesis": "Buy-and-build consolidation of fragmented local chimney & hearth service operators into a national platform, preserving local brands while adding shared scale; published buy-box $2M+ revenue / $500K+ EBITDA.",
        "notableAddOns": "Chim Chimney Inc (Hermitage/Nashville TN, Mar 2025 - first platform acquisition, confirmed by PE Hub); A Merrie Sweepe (Portsmouth NH, 2025).",
        "link": "https://www.pehub.com/argosy-private-equity-forms-chimney-and-hearth-services-acquisition-platform-endura-services/",
        "linkType": "press-release",
        "source": "src-3"
      }
    ],
    "fragmentation": {
      "score": 5,
      "rationale": "IBISWorld reports the US Fireplace Services industry comprises ~6,313 businesses (confirmed via IBISWorld), a count declining ~6.3% CAGR 2019-2024, with no company holding more than ~5% market share - extreme fragmentation typical of a local, owner-operator service trade. The 'no firm >5%' specific is IBISWorld's characterization and was not independently re-confirmed, but the 6,313-business count and the small-operator structure are well supported.",
      "source": "src-1"
    },
    "rollupIntensity": {
      "score": 2,
      "rationale": "PE interest is nascent. Endura Services (Argosy PE), formed Dec 2024 and launched Mar 2025, is the only pure-play chimney/hearth roll-up of meaningful scale, with just a couple of disclosed add-ons so far (Chim Chimney, A Merrie Sweepe). Disclosed chimney-services transactions across 2024-2025 are few and mostly sub-$10M. Activity is early but accelerating relative to a historically un-consolidated trade."
    },
    "sources": [
      {
        "id": "src-1",
        "publisher": "IBISWorld",
        "title": "Fireplace Services in the US - Industry Analysis (2024)",
        "url": "https://www.ibisworld.com/united-states/industry/fireplace-services/6303/",
        "dateAccessed": "2026-06-24",
        "type": "market-research"
      },
      {
        "id": "src-2",
        "publisher": "IBISWorld",
        "title": "Fireplace Services in the US - Market Size Statistics",
        "url": "https://www.ibisworld.com/united-states/market-size/fireplace-services/6303/",
        "dateAccessed": "2026-06-24",
        "type": "market-research"
      },
      {
        "id": "src-3",
        "publisher": "PE Hub",
        "title": "Argosy Private Equity forms chimney and hearth services acquisition platform Endura Services",
        "url": "https://www.pehub.com/argosy-private-equity-forms-chimney-and-hearth-services-acquisition-platform-endura-services/",
        "dateAccessed": "2026-06-24",
        "type": "trade-press"
      },
      {
        "id": "src-4",
        "publisher": "Endura Services (Endura Pro Partners)",
        "title": "Endura - The Nation's Largest Provider of Chimney & Hearth Services",
        "url": "https://www.endurapropartners.com/",
        "dateAccessed": "2026-06-24",
        "type": "trade-press"
      },
      {
        "id": "src-5",
        "publisher": "MarketsandMarkets",
        "title": "Hearth Market - Global Forecast (global hearth PRODUCTS market, ~$10.94B 2024; NOT US chimney services)",
        "url": "https://www.marketsandmarkets.com/Market-Reports/hearth-market-37538589.html",
        "dateAccessed": "2026-06-24",
        "type": "market-research"
      },
      {
        "id": "src-6",
        "publisher": "Lindemann Chimney & Fireplace",
        "title": "Lindemann Chimney & Fireplace, Heating & Cooling - official site",
        "url": "https://www.lindemann.com/",
        "dateAccessed": "2026-06-24",
        "type": "trade-press"
      }
    ]
  },
  "septic": {
    "dataStatus": "complete",
    "confidence": "medium",
    "tam": {
      "total": {
        "value": 5.5,
        "unit": "billion",
        "source": "src-1"
      },
      "year": 2026,
      "methodology": "Top-down, anchored to IBISWorld's 'Septic, Drain & Sewer Cleaning Services in the US' industry (verified: $8.7bn revenue 2026, 7,717 businesses, no company >5% share, 5.8% CAGR 2021-26; src-1). That industry bundles septic with drain/sewer cleaning and serves residential AND commercial/municipal clients, so it overstates pure residential septic. To isolate residential septic services (pumping, repair, installation), the $8.7bn was adjusted downward. A corroborating vendor report (src-4) puts the narrower 'septic tank cleaning & pumping' segment at $4.2bn in 2024 (VERIFIED), but does NOT publish a residential-vs-commercial dollar split - the earlier '~45-50% residential' figure could NOT be confirmed in the source and has been removed; residential share is now treated as a modeling assumption, not a sourced fact. Layering back septic repair, system installation/replacement and inspection (not in the pumping-only figure) and applying a judgment residential share to the IBISWorld base yields a modeled ~$5.0-6.0bn residential septic TAM; midpoint $5.5bn used. EPA confirms the demand base: more than one in five US households (60M+ people) rely on septic/decentralized systems (src-2). Confidence medium: no single government source measures 'residential septic services' directly, source definitions overlap, and the residential share is a modeled assumption.",
      "confidence": "medium",
      "newConstruction": {
        "value": 1.1,
        "unit": "billion",
        "modeledEstimate": true,
        "assumption": "Modeled at ~20% of the $5.5bn residential TAM. New-construction septic = new-home onsite system design + installation. EPA notes about one-third of new development is served by septic/decentralized systems (src-2, confirmed via EPA septic-systems-overview), but new installs are a small slice of total service dollars because the large installed base of existing septic households drives recurring pumping/repair demand. New-build installs (high per-unit cost ~$5k-$20k, low annual volume relative to installed base) estimated at ~$1.1bn. No government source isolates this; flagged modeled.",
        "source": "src-2"
      },
      "renovationRepair": {
        "value": 4.4,
        "unit": "billion",
        "modeledEstimate": true,
        "assumption": "Modeled as the residual ~80% of the $5.5bn residential TAM (~$4.4bn). Captures recurring pumping/cleaning, inspections, drainfield and tank repair, and full system replacement on the existing installed base. This is the bulk of the market because septic service is dominated by recurring maintenance and aging-infrastructure replacement rather than new installs. IBISWorld notes sustained maintenance-driven demand (src-1). Flagged modeled; no government source isolates the split.",
        "source": "src-1"
      }
    },
    "topPlayers": [
      {
        "name": "Wind River Environmental",
        "approxRevenue": {
          "value": null,
          "unit": "million",
          "source": null
        },
        "ownership": "PE-backed",
        "sponsor": "Gryphon Investors",
        "note": "Largest US residential/commercial septic & liquid-waste services consolidator; 100+ acquisitions, ~1,100 staff, 1,000 vehicles, ~100 local teams, locations in 16 states across the East Coast (VERIFIED via company acquisitions page). Gryphon Investors majority owner CONFIRMED via Gryphon and press; CEO/management retained equity. Reliable revenue not publicly disclosed (third-party estimates conflict widely, left null).",
        "website": "https://www.wrenvironmental.com/",
        "source": "src-3"
      },
      {
        "name": "P3 Services (Peltram Plumbing Holdings)",
        "approxRevenue": {
          "value": null,
          "unit": "million",
          "source": null
        },
        "ownership": "PE-backed",
        "sponsor": "Stellex Capital Management",
        "note": "National plumbing + septic + rooter platform serving multi-family/single-family/light-commercial across Southeast, Southwest, Pacific NW; six 2024 acquisitions including Forsyth Septic & Rooter (VERIFIED via PR Newswire). Stellex AUM ~$2.8bn. Revenue not publicly disclosed.",
        "website": "https://www.p3services.com/",
        "source": "src-5"
      },
      {
        "name": "Chuck's Septic Tank & Drain Cleaning / CST Utilities",
        "approxRevenue": {
          "value": null,
          "unit": "million",
          "source": null
        },
        "ownership": "PE-backed",
        "sponsor": "MFG Partners",
        "note": "Founded 1969, Grove City OH. MFG Partners' eighth platform investment (with PNC Mezzanine, Centerfield Capital) - CONFIRMED. CAVEAT: MFG describes CST as providing excavation, boring, drain cleaning and pumping primarily to UTILITIES and TELECOM customers (B2B underground/utility services), so the fit with a pure RESIDENTIAL septic thesis is weaker than Wind River or P3. Revenue not disclosed.",
        "website": "https://mfgpartners.com/",
        "source": "src-6"
      }
    ],
    "rollups": [
      {
        "platform": "Wind River Environmental",
        "sponsor": "Gryphon Investors",
        "thesis": "Buy-and-build consolidation of the highly fragmented East Coast residential/commercial septic & liquid-waste services market via serial tuck-in acquisitions.",
        "notableAddOns": "100+ acquisitions including Koberlein Environmental, Drummac Septic, Cooke's Plumbing and Septic, Brockwell's Septic (Aug 2024), Felix Septic, Jim LeBoeuf Septic",
        "link": "https://www.wrenvironmental.com/about-us/acquisitions/",
        "linkType": "company",
        "source": "src-3"
      },
      {
        "platform": "P3 Services (Peltram Plumbing Holdings)",
        "sponsor": "Stellex Capital Management",
        "thesis": "National plumbing-and-septic roll-up offering install-to-repair services across high-growth Sun Belt and Pacific NW metros.",
        "notableAddOns": "Forsyth Septic & Rooter (2024), plus plumbing add-ons Schrader Plumbing, Rolland Reash, 2 Sons Plumbing, The Plumbing & Drain Company, Bob's Backflow",
        "link": "https://www.prnewswire.com/news-releases/p3-services-accelerates-national-expansion-with-multiple-strategic-acquisitions-across-the-us-over-the-last-year-302388605.html",
        "linkType": "press-release",
        "source": "src-5"
      },
      {
        "platform": "Chuck's Septic / CST Utilities",
        "sponsor": "MFG Partners",
        "thesis": "Acquire founder/management-owned septic and underground/utility-services businesses and grow them as a platform for complementary add-ons. NOTE: skews B2B utility/telecom underground services rather than residential septic.",
        "notableAddOns": "Platform investment in Chuck's Septic Tank & Drain Cleaning, CST Utilities, I-Bore (with PNC Mezzanine, Centerfield Capital)",
        "link": "https://mfgpartners.com/news-article/mfg-partners-makes-eighth-platform-investment/",
        "linkType": "press-release",
        "source": "src-6"
      }
    ],
    "fragmentation": {
      "score": 5,
      "rationale": "Highly fragmented (VERIFIED). IBISWorld states no company holds more than 5% market share, with 7,717 businesses in the broader septic/drain/sewer cleaning industry (2026). The market is dominated by thousands of small, local, owner-operated firms. Even the largest consolidator (Wind River) operates in only 16 states with low single-digit national share. Textbook fragmented home-services trade ripe for roll-up.",
      "source": "src-1"
    },
    "rollupIntensity": {
      "score": 4,
      "rationale": "Active and accelerating. Wind River (Gryphon) has completed 100+ tuck-ins and continued acquiring through 2024-2025 (and per ION Analytics reporting has been explored for sale); Stellex's P3 Services and MFG Partners run parallel septic/plumbing/underground platforms; and broader industrial & environmental services M&A rose double-digits YoY in 2024-2025 (PE platform and add-on volume up 33.3% and 23.3% respectively, water & wastewater deals +41.7% YoY, per Capstone - VERIFIED, src-7). Not yet a saturated national-champion race like HVAC/plumbing, hence 4 rather than 5, but clearly heating up with multiple credible PE sponsors."
    },
    "sources": [
      {
        "id": "src-1",
        "publisher": "IBISWorld",
        "title": "Septic, Drain & Sewer Cleaning Services in the US - Market Size & Industry Analysis (2026)",
        "url": "https://www.ibisworld.com/united-states/industry/septic-drain-sewer-cleaning-services/4710/",
        "type": "market-research"
      },
      {
        "id": "src-2",
        "publisher": "US Environmental Protection Agency (EPA)",
        "title": "About Septic Systems / Septic Systems Overview (>1 in 5 US households; 60M+ people; ~1/3 of new development on septic)",
        "url": "https://www.epa.gov/septic/about-septic-systems",
        "type": "government"
      },
      {
        "id": "src-3",
        "publisher": "Wind River Environmental",
        "title": "Acquisitions - Growing Network of Brands (100+ acquisitions, 16 states, 1,100 staff)",
        "url": "https://www.wrenvironmental.com/about-us/acquisitions/",
        "type": "trade-press"
      },
      {
        "id": "src-4",
        "publisher": "Verified Market Research",
        "title": "Septic Tank Cleaning and Pumping Market Size ($4.2bn 2024; residential split NOT disclosed in source)",
        "url": "https://www.verifiedmarketresearch.com/product/septic-tank-cleaning-and-pumping-market/",
        "type": "market-research"
      },
      {
        "id": "src-5",
        "publisher": "PR Newswire / P3 Services (Stellex Capital)",
        "title": "P3 Services Accelerates National Expansion with Multiple Strategic Acquisitions (incl. Forsyth Septic & Rooter)",
        "url": "https://www.prnewswire.com/news-releases/p3-services-accelerates-national-expansion-with-multiple-strategic-acquisitions-across-the-us-over-the-last-year-302388605.html",
        "type": "trade-press"
      },
      {
        "id": "src-6",
        "publisher": "MFG Partners",
        "title": "MFG Partners Makes Eighth Platform Investment (Chuck's Septic / CST Utilities / I-Bore)",
        "url": "https://mfgpartners.com/news-article/mfg-partners-makes-eighth-platform-investment/",
        "type": "trade-press"
      },
      {
        "id": "src-7",
        "publisher": "Capstone Partners",
        "title": "Industrial & Environmental Services Market Update (PE platform +33.3% / add-on +23.3% YoY; water/wastewater +41.7%)",
        "url": "https://www.capstonepartners.com/insights/article-industrial-environmental-services-market-update/",
        "type": "trade-press"
      }
    ]
  }
}
