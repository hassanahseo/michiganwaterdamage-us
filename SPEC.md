# Rank & Rent Rebuild Plan + Antigravity Build Instructions

Nov 2, 2026 · @taibi

## 1. Diagnosis: why the current site underperforms

The site is not thin-looking. It fails on **trust and scale**: it makes claims a referral site cannot back, and it spreads templated pages across 540+ cities with visible data errors. Google's scaled content abuse and doorway policies target exactly this pattern.

| Problem | Evidence on michiganwaterdamage.us | Fix in the rebuild |
| --- | --- | --- |
| Unbackable operational claims | "Avg 45-min arrival to all 83 counties", "14 dispatch hubs along I-75/I-94", "IICRC-certified crews", "Licensed & Insured Field Crews", "Direct Insurance Billing (Xactimate)" | Referral-network wording only. No arrival times, fleets, certifications or billing you don't control. |
| Fake trust pages | "Customer Reviews (4.9★)", "Our Certified Team", "Careers & Hiring", "About Our Fleet" | Delete. Replace with How It Works, Disclosure, Editorial Policy. |
| Scaled location pages | "540+ cities" directory generated from one template | Launch \~6 cities deep, expand only where data supports it. |
| Auto-generated data errors | "Ann Arbor County", "Flint County", "Metro North County" (none exist) | All local data in verified JSON files; build fails on missing or unverified fields. |
| Keyword cannibalization | "Ceiling & Wall Water Damage Repair" and "Ceiling Water Damage Restoration" as separate pages | One page per search intent. |
| No referral disclosure | Site presents itself as the contractor | Clear disclosure on every page footer + call CTA area. |
| Two verticals missing | Mold is one page; fire, biohazard, plumbing barely exist although you have numbers for them | Full service silos for each paid vertical. |

Bottom line: rebuilding with *more* pages on the same template repeats the problem. The rebuild must be smaller, deeper and verifiably local first.

## 2. Strategic decisions

**Recommendation: rebuild this domain as Michigan-only, launch with 6 cities, and do nationwide later on a separate brandable domain using the same codebase.** A Michigan exact-match domain cannot rank nationally, and a nationwide launch would recreate the scaled-page problem 50 times over.

| Decision | Choice | Why |
| --- | --- | --- |
| Michigan now or nationwide now? | Michigan now (6 cities), nationwide later | The domain says Michigan. Depth beats breadth for a site Google already distrusts. Prove the template earns calls, then clone it. |
| Which verticals on this domain? | Water damage, mold, fire & smoke, biohazard/sewage (restoration number) + water-related plumbing (plumbing number) | All are water/property-damage intent. Leak detection (548 calls) and burst pipes overlap water damage searches. |
| Pest control? | Separate site (own domain), same codebase | Rodents and wasps on a "water damage" domain dilute topical relevance. Your pest data (rodents 500, general 478, stinging insects 360) justifies its own site. |
| Nationwide site? | Phase 3, brandable domain (e.g. a neutral "home emergency help" style name) | Reuse templates + data pipeline; only the data files change. |
| What to do with old URLs? | 301 to nearest new page, keep URLs that have GSC impressions | Preserve whatever equity exists. |

Open question for you: export the last 16 months of Google Search Console pages + queries before the rebuild. Pages with impressions keep their URL.

## 3. Site architecture and URL structure

Ten page types, one URL pattern each, all lowercase with trailing slash. Service slugs are reserved so a neighborhood can never collide with a service.

| Page type | URL pattern | Example |
| --- | --- | --- |
| Home | `/` | `/` |
| Service pillar (statewide) | `/{service}/` | `/water-damage/` |
| Sub-service (statewide) | `/{service}/{sub}/` | `/water-damage/basement-flooding/` |
| City hub | `/{city}-mi/` | `/detroit-mi/` |
| City × service | `/{city}-mi/{service}/` | `/detroit-mi/mold-remediation/` |
| City × sub-service | `/{city}-mi/{service}/{sub}/` | `/detroit-mi/plumbing/leak-detection/` |
| Neighborhood | `/{city}-mi/{neighborhood}/` | `/detroit-mi/corktown/` |
| Cost guide | `/cost/{topic}/` | `/cost/water-damage-restoration-michigan/` |
| Problem guide | `/guides/{topic}/` | `/guides/basement-flooded-what-to-do/` |
| Trust / utility | `/how-it-works/`, `/disclosure/`, `/editorial-policy/`, `/privacy/`, `/terms/`, `/contact/`, `/sitemap/` | — |

Reserved service slugs: `water-damage`, `mold-remediation`, `fire-damage`, `biohazard-cleanup`, `plumbing`.

Rules:

- One page per search intent. Never two pages targeting the same phrase (e.g. "ceiling water damage" lives only at `/water-damage/ceiling-leak/`).
- Self-referencing canonical on every page. No parameter URLs indexed.
- Breadcrumbs mirror the URL: Home › Detroit › Plumbing › Leak Detection.
- Pest control is NOT in this URL tree. It gets its own site with the same pattern.

## 4. Page inventory and phased rollout

**Phase 1 launches about 175 pages, not thousands.** Every page earns its place with local facts or a distinct search intent. Deeper combinations unlock only when Search Console shows demand.

Why not every service × sub-service × neighborhood: 4 cities × \~10 neighborhoods × \~28 sub-services = 1,100+ near-identical pages. That is the doorway pattern that is likely holding the current site down.

| Page type | Phase 1 count | Rule |
| --- | --- | --- |
| Home | 1 | Links to every hub (see section 7) |
| Service pillars | 5 | Water damage, mold, fire & smoke, biohazard, plumbing |
| Sub-services (statewide) | 28 | Full list in section 11 |
| City hubs | 6 | Detroit, Grand Rapids, Warren, Sterling Heights, Ann Arbor, Lansing |
| City × service | 30 | 6 cities × 5 services |
| City × priority sub-service | 48 | 6 cities × 8 priority subs (marked ★ in section 11) |
| Neighborhoods | \~38 | Detroit, Grand Rapids, Ann Arbor, Lansing only; one page per neighborhood covering all services |
| Cost guides | 6 | Water damage, mold, fire, sewage, leak detection, sump pump (Michigan ranges) |
| Problem guides | 6 | Built from caller questions (section 6) |
| Trust / utility | 7 | How it works, disclosure, editorial policy, privacy, terms, contact, HTML sitemap |
| **Total** | **\~175** |  |

Warren and Sterling Heights get no neighborhood pages: they have no widely searched named neighborhoods. Their city hubs list ZIP areas and adjacent communities instead.

Rollout:

1. **Phase 1 (weeks 1–4):** build and launch the \~175 pages. Submit sitemap. Track calls per page.
2. **Gate 1 (after 60–90 days):** a city × service page with 200+ impressions in 28 days unlocks its remaining sub-service pages in that city.
3. **Phase 2 (months 3–6):** add 12–15 Michigan cities (Dearborn, Livonia, Troy, Southfield, Farmington Hills, Royal Oak, Novi, Canton, Westland, Rochester Hills, Wyoming, Kentwood, Flint, Kalamazoo), each with the same Phase 1 depth.
4. **Gate 2:** a neighborhood page that gets impressions for a specific service unlocks a neighborhood × service page. Never before.
5. **Phase 3 (month 6+):** pest control site and nationwide brandable site, cloned from this codebase with new data files.

## 5. Page templates and content requirements

**Each page type has a fixed section order, a word range and a minimum amount of verified local data; a page that lacks its data is not generated.** Templates give structure; the data files give uniqueness.

| Page type | Words | Required sections (in order) | Must contain |
| --- | --- | --- | --- |
| Home | 1,200–1,600 | Hero + 2 call buttons · "Pick your problem" tiles · how the referral line works · city grid · service grid · Michigan seasonal risks · FAQ · disclosure | Correct number per tile (restoration vs plumbing) |
| Service pillar | 1,800–2,500 | Direct answer · signs you need this · what to do in the next hour · how the job usually works · Michigan cost ranges · insurance basics · Michigan risk factors · sub-service grid · city grid · FAQ · CTA | Cost ranges with cited source; 6+ FAQs from call data |
| Sub-service (statewide) | 1,200–1,800 | Direct answer · causes · DIY vs pro line · process · cost range · Michigan angle · cities served · FAQ · CTA | One unique scenario that matches real caller wording |
| City hub | 1,200–1,800 | Direct answer · local risk profile · seasonal calendar · services in {city} · neighborhoods / ZIP areas · local utility & permit contacts · nearby cities · FAQ · CTA | 8+ verified local facts from `cities.json` |
| City × service | 1,000–1,500 | How this problem shows up in {city} · what to do now · process · {city} cost notes · sub-services · neighborhoods · FAQ · CTA | 4+ city facts used in body; ≤ 30% overlap with same service in other cities |
| City × sub-service | 800–1,200 | Direct answer · local cause · steps · cost · related · FAQ · CTA | 3+ city facts; ≤ 30% overlap |
| Neighborhood | 700–1,100 | Housing & building profile · common water/mold issues there · services (links to city × service) · nearby neighborhoods · CTA | 5+ neighborhood facts from `neighborhoods.json` |
| Cost guide | 1,500–2,200 | Answer range up top · cost factors · range table by job size · insurance notes · how to get a fair estimate · FAQ | Every number cited to a public source |
| Problem guide | 1,200–1,800 | Answer · step-by-step · when to call · FAQ | Built around one caller question |

Writing rules for every page:

- First sentence answers the query. Paragraphs ≤ 3 sentences. Reading level grade 7–8.
- Write for someone with water on the floor right now: short steps, safety first, then the call.
- No filler openers ("When disaster strikes…", "In today's world…"), no keyword stuffing, city name used naturally (2–4 times).
- No invented statistics, arrival times, certifications, reviews, team members or office addresses.
- Cost figures and local facts must come from the data files, each with a source URL stored beside it.
- Images: real photos of damage types or diagrams, captioned neutrally. Never present stock photos as "our crew".
- Author byline = the site's editorial team, linked to `/editorial-policy/`. No fake named experts.

## 6. Call data insights → content and conversion rules

**Callers describe symptoms and ask price first; pages must answer both in the caller's own words.** Leak detection (548 calls) is your biggest plumbing intent, and mold (70) leads restoration.

| What the data shows | Example caller words | Rule for the site |
| --- | --- | --- |
| Price is the first question | "how much would it cost", "just getting an estimate first", "what do you charge for leak detection" | Cost section in the top third of every service page; CTA copy "Call to ask about pricing and estimates" |
| Symptoms, not service names | "water bill tripled", "meter is running with the water off", "wet spot in my son's closet", "strong smell from the ducts" | Symptom-based H2s and FAQs; problem guides named after symptoms |
| Real estate & lending triggers | "won't issue the loan until that mold is removed", "buyer's inspector saw rodents", "house is for sale" | Sections + guide for mold found at inspection / before closing |
| Landlords & property managers | "tenant says", "rental property", "four-unit building", "third-party maintenance company" | Landlord block on every city hub; one landlord guide |
| "Find it, I'll fix it" | "probably going to repair it ourselves", "need somebody with the equipment" | Leak detection pages explain locate-only vs locate-and-repair |
| Leak-caused mold | "upstairs toilet leak", "condensation line backing up", "closet where I had a leak" | Interlink plumbing leak pages ↔ mold and water damage pages |
| Wrong-brand calls | callers asking for "Terminix" or a named local company | Clear referral disclosure near every call button (reduces bad calls) |
| Vague "do you do X?" calls end as no sale | "do you guys do leak detection?" | Each page states plainly what is and isn't covered |

Six problem guides for Phase 1:

1. Water bill suddenly doubled? How to check for a hidden leak
2. Water meter running with everything off: what it means
3. Mold found during a home inspection or before closing in Michigan
4. Basement flooded: what to do in the first hour
5. Ceiling dripping or a wet spot from upstairs: what to do
6. Landlord guide: tenant reports water damage or mold

Conversion rules:

- Sticky call bar on mobile; phone number in header; `tel:` links everywhere.
- Number shown = the page's vertical (section 11). Never mix numbers on one page except the homepage tiles.
- Above the fold: H1, one-line answer, call button, three true statements (answered 24/7 · connects you with independent local providers · ask about pricing on the call).
- All three campaigns answer 24/7, so "24/7" is allowed everywhere. Nothing is free: never write "free estimate", "free inspection", "free quote", "free referral" or "no cost".
- Track every `tel:` click as a GA4 event with page type, city and service.

## 7. Internal linking: every page linked from the homepage

**Every page is linked from the homepage within two clicks: hubs directly in the body, and every single page through an HTML sitemap linked in the footer.** Dumping 175 (later 500+) links into the homepage body looks spammy and splits link value; a hub-and-spoke tree plus a sitemap meets the goal cleanly.

Homepage links directly to: 5 service pillars, 6 city hubs, all 28 sub-services (grouped under their service tile), 6 cost guides, 6 problem guides, trust pages, and `/sitemap/` in the footer.

&#91;embedded content: internal linking tree · hubs in 1 click, every page in 2 via sitemap\]

Hubs sit one click from the homepage; through the footer sitemap every page, including city × sub-service pages, is two clicks away.

| From | Links to |
| --- | --- |
| Service pillar | Its sub-services · its 6 city × service pages · related cost guide · 1–2 related services |
| Sub-service (statewide) | Parent pillar · its city × sub-service pages · 2–3 sibling sub-services · related guide |
| City hub | Its 5 city × service pages · its neighborhoods · 3–5 nearby city hubs · statewide pillars |
| City × service | City hub · statewide pillar · its city × sub-service pages · its neighborhoods · same service in up to 3 nearby cities |
| City × sub-service | City × service parent · statewide sub-service · 2 sibling subs in same city |
| Neighborhood | City hub · city × service pages · 3–5 adjacent neighborhoods |
| Guide | The 2–4 service or sub-service pages it relates to |
| `/sitemap/` (HTML) | Every indexable page, grouped Services › Cities › Neighborhoods › Guides |

Rules:

- Anchor text describes the target naturally ("leak detection in Lansing", "what mold testing costs"). Never repeat the same exact-match anchor sitewide.
- Breadcrumbs on every page, with BreadcrumbList schema.
- Build fails if any page has fewer than 3 internal inlinks or is missing from `/sitemap/` and `sitemap.xml`.
- Header nav: Services (mega menu) · Cities · Cost Guides · How It Works · call button.

## 8. Tech stack and technical SEO

**Astro static site, data-driven from JSON files, with build-time quality checks that block thin or duplicate pages from shipping.** Static HTML is fast, cheap to host, and easy to clone for the pest and nationwide sites later.

| Area | Spec |
| --- | --- |
| Framework | Astro 5 + TypeScript + Tailwind CSS, zero client JS except the mobile call bar and menu |
| Hosting | Cloudflare Pages (or Netlify); redirects via `_redirects` |
| Data | `src/data/*.json`: services, subservices, cities, neighborhoods, phones, costs, faqs, sources |
| Page bodies | One stored MDX file per page in `src/content/` (written once, committed, reviewed) — never regenerated randomly at build |
| Schema (JSON-LD) | Organization + WebSite (home) · BreadcrumbList (all) · Service with `areaServed` (service pages) · FAQPage (where FAQs exist) · Article (guides). No LocalBusiness with a fake address. |
| Meta | Unique title ≤ 60 chars, description ≤ 155 chars, OG image per page type, self canonical |
| Sitemaps | `sitemap-index.xml` split by page type; HTML `/sitemap/`; `robots.txt` |
| Performance | LCP < 2.0 s mobile, CLS < 0.05, images AVIF/WebP with width/height, self-hosted font |
| Analytics | GA4 + Search Console; `tel:` click event with `page_type`, `city`, `service`, `phone_line` |
| Migration | Old URL → new URL map in `redirects.csv`, compiled to 301s. Legacy /services/\* → matching new sub-service; legacy /service-areas/\* and old city pages → nearest Phase 1 city hub, else /water-damage/; /reviews, /team, /careers, /about, /certifications, /insurance → /how-it-works/. URLs with GSC impressions override these defaults. |

Build-time checks (`npm run qa`, must pass before deploy):

1. **Data validation:** every city and neighborhood fact has a non-empty value and a `source_url`.
2. **Duplicate check:** 5-word shingle Jaccard similarity between any two pages of the same type ≤ 0.30.
3. **Thin check:** body word count within the range in section 5.
4. **Links:** no broken internal links; every page has ≥ 3 inlinks and appears in both sitemaps.
5. **Banned phrases:** fail on "45-minute", "minute arrival", "our crew", "our technicians", "our fleet", "IICRC-certified", "licensed and insured", "4.9", "reviews", "certified team", "direct insurance billing", "guaranteed", "free estimate", "free inspection", "free quote", "free referral", "no cost".
6. **Phone routing:** every page shows exactly the number mapped to its vertical.

## 9. Compliance and trust rules

**The site must say plainly that it is a referral service, and must never claim work, people, reviews or credentials it does not have.** This protects rankings (trust signals), call quality (fewer wrong-brand callers) and you legally (the FTC's consumer reviews rule, in force since October 2024, bans fake reviews and testimonials).

Brand: "Michigan Water Damage Referral Network" in disclosure, schema and legal pages; header logo shows "Michigan Water Damage" with the tagline "Referral Network". Never the bare domain as the brand.

Disclosure text (footer of every page + small line under each call button):

> Michigan Water Damage Referral Network is a referral service available 24/7. We do not perform restoration, plumbing or any other work. Your call is connected to an independent, third-party provider who may pay us for the referral. Providers set their own prices, hours, licensing and insurance — please confirm these with them before work begins. Calls may be recorded for quality.

Rules:

- No reviews, star ratings, testimonials, team bios, "our trucks", arrival-time promises or certification logos.
- No Google Business Profile with a virtual or fake address.
- Never use a real company's name or logo in content, titles or ads (callers already confuse you with named brands).
- Insurance content is general ("many policies cover sudden water damage; check your policy"), never a promise of coverage.
- Health content (mold, sewage) gives safety basics and points to EPA / CDC guidance; no medical claims.
- Pages: `/disclosure/`, `/editorial-policy/` (how content is researched and updated, sources used), `/privacy/`, `/terms/`.
- Every page shows a "Last reviewed" date that changes only when the content is actually updated.

## 10. Antigravity master prompt (copy-paste)

**Paste this whole block into Antigravity as the first message, and attach this doc (exported as Markdown) as `SPEC.md` in the project root.** It forces milestone-by-milestone work with a stop for your review after each one, which plays to Antigravity's strength (following instructions) and removes the planning it is weak at.

```markdown
# ROLE
You are a senior SEO engineer and content lead. You will rebuild michiganwaterdamage.us
as a Michigan-only, pay-per-call REFERRAL site. Follow SPEC.md exactly. When SPEC.md and
your own preference differ, SPEC.md wins. Do not plan beyond what is written; execute it.

# HARD RULES (never break)
1. The site is a 24/7 referral service. It never claims to do the work itself.
   Nothing is free: never use "free estimate", "free inspection", "free quote",
   "free referral" or "no cost".
2. Never write: arrival times, fleets, crews, technicians, certifications, licensing,
   insurance claims, reviews, ratings, testimonials, team members, office addresses.
3. Never invent a fact, number, neighborhood, statistic or source. If you cannot verify a
   fact with a public source URL, leave the field empty and add it to /qa/missing-facts.md.
4. Never generate a page whose required data is missing. Log it instead.
5. One page per search intent. No near-duplicate pages.
6. Phone routing (from src/data/phones.json):
   - restoration (877) 422-0329 tel:+18774220329 -> water-damage, mold-remediation,
     fire-damage, biohazard-cleanup
   - plumbing (866) 487-0556 tel:+18664870556 -> plumbing
   Each page shows ONLY its vertical's number. Homepage tiles show the tile's number.
7. Every page footer carries the disclosure text from SPEC.md section 9.

# STACK
Astro 5 + TypeScript + Tailwind. Static output. Cloudflare Pages. No client JS except
mobile sticky call bar and nav menu. Self-hosted font. AVIF/WebP images with dimensions.

# FILE STRUCTURE
src/data/        services.json subservices.json cities.json neighborhoods.json
                 phones.json costs.json faqs.json
src/content/     one MDX body per page, path mirrors the URL
src/components/  Header Footer CallBar CallButton Breadcrumbs Faq ServiceGrid CityGrid
                 NeighborhoodGrid CostTable Disclosure JsonLd LastReviewed
src/layouts/     Base ServicePage CityPage NeighborhoodPage GuidePage
src/pages/       dynamic routes built from data (patterns in SPEC.md section 3)
scripts/qa/      validate-data similarity thin links banned-phrases phones
qa/              reports written by QA scripts
redirects.csv    old URL -> new URL

# DATA SCHEMAS (every fact = {value, source_url})
cities.json item:
{ "slug":"detroit", "name":"Detroit", "county":{"value":"","source_url":""},
  "population":{"value":"","source_url":""}, "zip_codes":[],
  "water_utility":{"value":"","source_url":""}, "sewer_system":{"value":"","source_url":""},
  "housing_age":{"value":"","source_url":""}, "flood_events":[{"value":"","source_url":""}],
  "climate_risks":[{"value":"","source_url":""}], "permit_office":{"value":"","source_url":""},
  "nearby_cities":[], "neighborhoods":[],
  "local_angles":{ "water-damage":"", "mold-remediation":"", "fire-damage":"",
                   "biohazard-cleanup":"", "plumbing":"" } }
neighborhoods.json item:
{ "slug":"corktown", "city":"detroit", "name":"Corktown",
  "facts":[{"value":"","source_url":""}], "housing_profile":{"value":"","source_url":""},
  "adjacent":[] }
subservices.json item:
{ "slug":"basement-flooding", "service":"water-damage", "name":"Basement Flooding Cleanup",
  "priority":true, "primary_keyword":"", "secondary_keywords":[], "caller_phrases":[] }
costs.json item: { "topic":"", "low":0, "high":0, "unit":"", "source_url":"", "as_of":"" }

# MILESTONES - STOP after each and wait for my "approved"
M0  Read SPEC.md. Reply with: file tree, list of every URL to be built (grouped by page
    type, with counts), and questions. Build nothing yet.
M1  Scaffold Astro, layouts, components, routes from data, header/footer/disclosure,
    call bar, breadcrumbs. Use placeholder bodies. Show me 1 example of each page type.
M2  Fill src/data: services + subservices (SPEC section 11), then research and fill
    cities.json, neighborhoods.json, costs.json with verified facts + source URLs.
    Write local_angles (2-4 sentences per service per city) ONLY from those facts.
    Output qa/missing-facts.md.
M3  Write scripts/qa (SPEC section 8 checks) and wire `npm run qa`.
M4  Write page bodies in this order, running `npm run qa` after each batch and fixing
    failures before continuing:
    a) 5 service pillars  b) 28 statewide sub-services  c) 6 city hubs
    d) 30 city x service  e) 48 city x priority sub-service  f) neighborhoods
    g) 6 cost guides  h) 6 problem guides  i) trust pages
    Section order, word ranges and data minimums: SPEC section 5.
    Use caller wording and FAQs from SPEC section 6.
M5  SEO layer: titles, meta, canonicals, JSON-LD (SPEC section 8), sitemaps, HTML
    /sitemap/, robots.txt, 301s from redirects.csv, GA4 tel: click events.
M6  Final: npm run qa all green, Lighthouse mobile >= 95 SEO/Best Practices and >= 90
    Performance on one page of each type, internal link report, list of pages per type.

# CONTENT STYLE
First sentence answers the query. Paragraphs <= 3 sentences. Grade 7-8 reading level.
Safety first, then steps, then the call. City name 2-4 times, naturally. No filler openers,
no keyword stuffing, no "in today's world", no "look no further". Each city page must read
as written for that city: use its facts (sewer type, housing age, flood history, utility,
seasonal risks). Same-type pages must stay <= 30% similar (QA enforces it).

# CTA COPY
Primary: "Call {number} - 24/7 connection to a local {service} provider"
Under button: short disclosure line. "24/7" is allowed: all lines answer 24/7. Never use the word "free" - it
applies to nothing on these campaigns.
```

## 11. Seed data: services, cities, neighborhoods, phone routing

**28 sub-services across 5 services, 6 cities, 38 neighborhoods, 2 phone lines.** ★ = priority sub-service that gets a page in every Phase 1 city. Neighborhood names and local leads below are starting points from memory: Antigravity must verify each one with a source URL before use.

### Phone routing

| Line | Number | `tel:` | Used on |
| --- | --- | --- | --- |
| Restoration | (877) 422-0329 | +18774220329 | water-damage, mold-remediation, fire-damage, biohazard-cleanup (all their sub, city and neighborhood pages); neighborhood pages default here |
| Plumbing | (866) 487-0556 | +18664870556 | plumbing and all its sub/city pages |
| Pest | (833) 588-3897 | +18335883897 | Not on this site — reserved for the pest site |

### Services and sub-services

| Service (slug) | Sub-services (slug) |
| --- | --- |
| Water Damage Restoration (`water-damage`) | ★ Emergency Water Removal (`emergency-water-removal`) · ★ Basement Flooding Cleanup (`basement-flooding`) · ★ Burst & Frozen Pipe Water Damage (`burst-pipe-water-damage`) · Ceiling & Wall Leak Damage (`ceiling-leak`) · Sump Pump Failure Cleanup (`sump-pump-failure`) · Appliance & Water Heater Leak Damage (`appliance-leak`) · Storm & Flood Damage (`storm-flood-damage`) |
| Mold Remediation (`mold-remediation`) | ★ Mold Inspection & Testing (`mold-inspection-testing`) · Basement Mold (`basement-mold`) · Attic Mold (`attic-mold`) · Bathroom Mold (`bathroom-mold`) · Mold After a Leak (`mold-after-leak`) · Mold Clearance for Home Sales & Lenders (`real-estate-mold-clearance`) |
| Fire & Smoke Damage (`fire-damage`) | Smoke & Soot Cleanup (`smoke-soot-cleanup`) · Smoke Odor Removal (`smoke-odor-removal`) |
| Biohazard Cleanup (`biohazard-cleanup`) | ★ Sewage Backup Cleanup (`sewage-backup-cleanup`) · Rodent Droppings Cleanup (`rodent-droppings-cleanup`) · Trauma & Crime Scene Cleanup (`trauma-cleanup`) |
| Plumbing (`plumbing`) | ★ Leak Detection (`leak-detection`) · ★ Emergency Plumber (`emergency-plumber`) · ★ Drain Cleaning (`drain-cleaning`) · Slab Leak Repair (`slab-leak`) · Water Service Line Leak (`water-line-leak`) · High Water Bill Leak (`high-water-bill-leak`) · Frozen Pipe Repair (`frozen-pipe-repair`) · Sump Pump Repair & Install (`sump-pump-repair`) · Sewer Line Repair (`sewer-line-repair`) · Water Heater Repair (`water-heater-repair`) |

Intent split to avoid cannibalization: `burst-pipe-water-damage` = cleanup after the burst; `frozen-pipe-repair` = fixing the pipe. `sump-pump-failure` = flooded basement cleanup; `sump-pump-repair` = the pump itself. Each page links to its twin.

### Cities and neighborhoods

| City (slug) | County | Neighborhoods / areas (verify) | Local leads to verify |
| --- | --- | --- | --- |
| Detroit (`detroit`) | Wayne | Downtown, Midtown, Corktown, Southwest Detroit incl. Mexicantown (slug southwest-detroit), Boston-Edison, Indian Village, Palmer Woods, Rosedale Park, Grandmont, East English Village, Jefferson-Chalmers, University District (12) | Combined sewer system; June 2021 basement flooding; DWSD water utility; pre-1940 housing stock |
| Grand Rapids (`grand-rapids`) | Kent | Heritage Hill, Eastown, East Hills, Midtown, Creston, Belknap Lookout, Garfield Park, Alger Heights, Ottawa Hills, Roosevelt Park (10) | Grand River; April 2013 river flood; city water system; older Victorian homes in Heritage Hill |
| Ann Arbor (`ann-arbor`) | Washtenaw | Kerrytown, Old West Side, Burns Park, Water Hill, Lower Town, Ann Arbor Hills, Bryant, Georgetown (8) | Huron River; Allen Creek floodplain; many rentals (student housing) |
| Lansing (`lansing`) | Ingham | Old Town, REO Town, Downtown, Eastside, Westside, Moores Park, Groesbeck, Colonial Village (8) | Grand and Red Cedar rivers; Board of Water & Light utility |
| Warren (`warren`) | Macomb | No neighborhood pages. ZIP areas 48088, 48089, 48091, 48092, 48093; adjacent: Center Line, Roseville, Eastpointe, Madison Heights | Post-war ranch homes with basements; regional water via GLWA |
| Sterling Heights (`sterling-heights`) | Macomb | No neighborhood pages. ZIP areas 48310–48314; adjacent: Troy, Utica, Shelby Township, Clinton Township | Clinton River; 1960s–80s subdivisions with finished basements |

## 12. Launch checklist and KPIs

**Launch only when QA is green and the old URLs redirect; then judge the site on calls per page type, not page count.**

Before launch:

- [ ] Export GSC pages + queries (16 months) and build `redirects.csv`
- [ ] Confirm service area with each campaign buyer (hours confirmed 24/7; no free estimates or inspections)
- [ ] `npm run qa` all green; `qa/missing-facts.md` empty or those pages held back
- [ ] Spot-read 10 random pages: any page that reads like a city-name swap gets rewritten
- [ ] Every `tel:` link dials the right line on mobile
- [ ] GA4 call-click event firing; GSC property verified; sitemap submitted
- [ ] Old fake pages (reviews, team, careers, fleet) removed and 301'd to `/how-it-works/`

After launch:

| KPI | Target by day 90 | Where |
| --- | --- | --- |
| Indexed pages | ≥ 85% of submitted | GSC › Pages |
| Pages with impressions | ≥ 60% | GSC › Performance |
| Call clicks per day | Track weekly trend by page type | GA4 event |
| Paid (billable) call rate | Above current baseline | Campaign dashboard |
| Top earners | List top 20 pages by calls | GA4 + campaign data |

Monthly loop: pages with impressions but no calls get CTA and answer-first fixes; city × service pages that pass Gate 1 unlock their sub-service pages (section 4); pages with zero impressions after 120 days get improved or merged, never multiplied.
