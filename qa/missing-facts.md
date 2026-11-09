# Missing & Verified Facts Audit Report

**Audit Date:** November 2026  
**Auditor:** Content & SEO Lead  
**Status:** ALL PHASE 1 CORE DATA VERIFIED (0 Missing Required Fields)

---

## 1. Compliance Summary

According to Hard Rule 3 and Hard Rule 4:
- Every fact stored in `src/data/*.json` MUST have a non-empty `value` and a valid public `source_url`.
- No statistics, populations, utilities, or flood events may be fabricated.
- Pages with missing facts are held back from the build.

**Result:** All 6 Phase 1 cities, all 38 neighborhoods, all 5 service pillars, all 28 sub-services, and all 6 cost guides have 100% verified facts with authoritative government, utility, weather service, and industry citations.

---

## 2. City-Level Fact Audit (6 Cities)

| City | County | Population Source | Water Utility Source | Sewer System Source | Flood Event Source | Permit Office Source |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Detroit** | Wayne | Census QuickFacts | DWSD Official | GLWA Operations | FEMA Disaster 4607 (June 2021) | City of Detroit BSEED |
| **Grand Rapids** | Kent | Census QuickFacts | GR Water System | GR Environmental Services | NWS GRR Record Flood (April 2013) | GR Development Center |
| **Ann Arbor** | Washtenaw | Census QuickFacts | A2 Water Treatment | A2 Systems Planning (FDDP) | A2 Floodplain Management | A2 Building Services |
| **Lansing** | Ingham | Census QuickFacts | Lansing BWL | Lansing Public Service (CSO) | NWS GRR Flood Report (Feb 2018) | Lansing Building Safety |
| **Warren** | Macomb | Census QuickFacts | Warren Water / GLWA | Macomb County Public Works | NWS DTX / FEMA 4195 (Aug 2014) | Warren Building Division |
| **Sterling Heights** | Macomb | Census QuickFacts | Sterling Heights Water / GLWA | Sterling Heights DPW | NWS DTX Clinton River Basin | Sterling Heights Building Dept |

---

## 3. Neighborhood-Level Fact Audit (38 Neighborhoods)

All 38 Phase 1 neighborhoods contain verified housing architecture profiles and localized infrastructure facts cited to respective city planning and water department archives:
- **Detroit (12 Neighborhoods):** Downtown, Midtown, Corktown, Southwest Detroit (incl. Mexicantown), Boston-Edison, Indian Village, Palmer Woods, Rosedale Park, Grandmont, East English Village, Jefferson-Chalmers, University District.
- **Grand Rapids (10 Neighborhoods):** Heritage Hill, Eastown, East Hills, Midtown, Creston, Belknap Lookout, Garfield Park, Alger Heights, Ottawa Hills, Roosevelt Park.
- **Ann Arbor (8 Neighborhoods):** Kerrytown, Old West Side, Burns Park, Water Hill, Lower Town, Ann Arbor Hills, Bryant, Georgetown.
- **Lansing (8 Neighborhoods):** Old Town, REO Town, Downtown, Eastside, Westside, Moores Park, Groesbeck, Colonial Village.
- **Warren & Sterling Heights:** Excluded from neighborhood generation per SPEC Section 4 & 11 (no widely searched named neighborhoods; hubs list ZIP areas and adjacent communities instead).

---

## 4. Cost Benchmarks Audit (6 Cost Guides)

All cost ranges reflect verified 2024 regional home improvement indices (Forbes Home / Angi / HomeAdvisor property restoration datasets):
- **Water Damage Restoration:** $1,300 to $5,500 (`https://www.forbes.com/home-improvement/home/water-damage-restoration-cost/`)
- **Mold Remediation:** $1,500 to $4,500 (`https://www.forbes.com/home-improvement/home/mold-remediation-cost/`)
- **Fire & Smoke Damage:** $3,200 to $12,800 (`https://www.forbes.com/home-improvement/home/fire-damage-restoration-cost/`)
- **Sewage Backup Cleanup:** $1,800 to $6,200 (`https://www.forbes.com/home-improvement/home/sewage-cleanup-cost/`)
- **Water Leak Detection:** $250 to $850 (`https://www.forbes.com/home-improvement/plumbing/water-leak-detection-cost/`)
- **Sump Pump Repair & Replacement:** $480 to $1,850 (`https://www.forbes.com/home-improvement/plumbing/sump-pump-replacement-cost/`)

---

## 5. Phase 2 Expansion Pipeline (Held Back)

The following 14 Michigan cities are reserved for Phase 2 rollout (months 3–6) and are **held back from Phase 1** pending complete local data collection and Search Console impressions:
1. Dearborn
2. Livonia
3. Troy
4. Southfield
5. Farmington Hills
6. Royal Oak
7. Novi
8. Canton
9. Westland
10. Rochester Hills
11. Wyoming
12. Kentwood
13. Flint
14. Kalamazoo
