import fs from 'node:fs';
import path from 'node:path';
import { calculateReadability } from './readability.ts';
import { get5WordShingles, jaccardSimilarity, extractMdxBodyText } from './similarity.ts';

let plumb = `## Emergency Plumbing & Leak Detection in Grand Rapids, MI

Hidden pipe leaks, burst winter lines, and clogged sewer pipes cause fast water damage in Grand Rapids homes. Water pooling under foundations washes away support soil. It can also cause quarterly water bills to spike.

Michigan Water Damage Referral Network connects Kent County property owners with local plumbing contractors. The phone line operates 24/7. Call **(866) 487-0556** to speak with a local plumbing professional. Services can include acoustic leak location, pipe tracing, sewer camera checks, high-pressure jetting, and copper repiping. Independent plumbers explain emergency shutoff steps on the phone and can schedule an on-site visit.

---

## Grand Rapids Plumbing Challenges and Hillside Water Pressure

Plumbing problems in Grand Rapids depend on hilly local terrain, winter weather, and older pipe materials. Thousands of homes in central neighborhoods were built before 1950. These vintage homes rely on aging water supply pipes and clay sewer lines.

Neighborhoods situated on steep ridges, like Heritage Hill and Belknap Lookout, face distinct water pressure issues. Municipal water pumped from Lake Michigan through City of Grand Rapids mains enters homes at varying pressures depending on street elevation. High pressure puts mechanical strain on older solder joints, fixture shutoff valves, and washing machine supply hoses.

Internal water pipes in pre-1950 homes are mostly threaded galvanized iron or early rigid copper. Mineral scaling slowly narrows pipe diameters. This reduces flow to second-floor bathrooms. Over decades, rust creates thin spots in metal pipe walls.

Cold Michigan winters bring severe freeze risks. Lake-effect Arctic winds drop temperatures below zero. Freezing air chills uninsulated pipes routed through unheated crawlspaces or along exterior brick walls. Expanding ice splits pipe seams. Water then pours into living areas when ice thaws.

---

## Lake-Effect Freeze Cycles and Exterior Wall Plumbing in Grand Rapids

A plumbing hazard in historic areas like Eastown, Midtown, and Creston is pipe freezing along uninsulated exterior walls. Many vintage Victorian and Craftsman residences were built without wall cavity insulation.

Supply lines routed inside outside walls or beneath porch overhangs face sub-zero drafts. During multi-day winter freezes, standing water inside pipes turns to solid ice. Expanding ice exerts strong pressure against copper pipe walls and brass elbow joints.

When indoor heat or mild weather thaws the line, water sprays out inside wall voids. Because split pipes hide behind lath and plaster, leaks can run for hours before water stains show on ceilings. Unchecked pipe breaks ruin hardwood floors, soak plaster walls, and flood basements.

---

## Action Steps When You Discover a Plumbing Leak

Taking fast containment steps prevents major structural repairs and saves money:

1. **Close your primary intake valve.** Turn the shutoff valve clockwise where service pipes enter through the foundation wall from the City of Grand Rapids Water System.
2. **Check electrical safety first.** If water surrounds your breaker box in the cellar, stay out. Never step into standing water to reach switches. Call Consumers Energy or an electrician to cut power safely from outside.
3. **Empty residual water from fixtures.** Relieve water line pressure by running laundry room sink faucets or garden hose spigots on lower levels.
4. **Guard water heating equipment.** Turn electric circuit breakers off or switch gas dials to pilot mode on your water heater tank.
5. **Call for 24/7 plumbing help.** Dial **(866) 487-0556** to connect with an independent plumbing contractor serving Grand Rapids and Kent County.

---

## Diagnostic Leak Location and Line Repair Procedures

Local plumbing contractors use modern diagnostic tools and durable repair methods to fix hidden pipe problems without tearing up rooms unnecessarily:

- **Ground Microphone Leak Detection:** Plumbers isolate pressurized slab leaks using sensitive electronic listening discs. These tools pick up the faint sonic hiss of escaping water through solid concrete.
- **Infrared Wall Pipe Tracing:** Plumbers use high-resolution thermal cameras to display hot and cold temperature paths behind plaster. This pinpoints leak locations without cutting open drywall.
- **In-Line Video Camera Scoping:** Flexible fiber-optic cameras navigate through building drain laterals. Plumbers examine tree root intrusions and broken clay tiles on digital viewing monitors.
- **Hydro-Scouring Sewer Pipes:** High-velocity water jets scour away grease buildup, mineral scale, and root mats from main lines. This restores full gravity flow.
- **Upgrading Water Lines with PEX:** Ruptured copper and brittle galvanized sections are replaced with flexible PEX or type L copper tubing. Repaired sections undergo hydrostatic testing to confirm solid seals under city pressure.

---

## Grand Rapids Plumbing Costs and Trade Permitting

According to national cost data from Forbes Home, leak detection averages **$180 to $900**, while sump pump repairs and drain clearing run **$450 to $1,950**. Complex under-slab pipe repairs or main sewer line excavations cost more depending on dig depth and concrete work.

Cleanup and drying usually do not need a permit. Rebuilding, electrical, and plumbing work usually do. Check with the City of Grand Rapids Development Center for trade permit requirements on water heater replacements, service line repairs, or main drain stack alterations.

---

## Frequently Asked Questions About Grand Rapids Plumbing & Leak Detection

### Why do plumbing pipes freeze along outside walls in Grand Rapids Victorian homes?
Older homes frequently lack exterior wall insulation. North-facing winds chill wall cavities below freezing, causing water in stationary copper pipes to freeze and expand until pipe seams split.

### What should I do if my City of Grand Rapids water meter continues to spin with faucets closed?
A spinning meter triangle when all fixtures are off means water is actively escaping. Check for continuously running toilet flappers first. If toilets are quiet, you likely have an underground supply line leak or a broken pipe under your basement floor.

### Can tree roots be cleared from clay sewer laterals without tearing up the front lawn?
Yes. High-pressure hydro-jetting and mechanical augers scour roots out from inside the pipe through existing cleanout ports. When clay pipes have cracked seams, contractors evaluate trenchless epoxy lining to seal joints without digging trenches.

### How do plumbers locate pinhole water leaks under concrete basement slabs?
Plumbers use acoustic ground microphones and thermal imaging cameras. These tools locate the exact spot of the leak through concrete before any digging begins.

---

## Specialized Plumbing Services in Grand Rapids

Explore related emergency plumbing services and guides available to Grand Rapids property owners:

- [Leak Detection in Grand Rapids](/grand-rapids-mi/plumbing/leak-detection/)
- [Emergency Plumber in Grand Rapids](/grand-rapids-mi/plumbing/emergency-plumber/)
- [Drain Cleaning in Grand Rapids](/grand-rapids-mi/plumbing/drain-cleaning/)
- [Statewide Michigan Plumbing Services](/plumbing/)
- [Grand Rapids Emergency Services Hub](/grand-rapids-mi/)
- [Water Bill Suddenly Doubled Guide](/guides/water-bill-suddenly-doubled-hidden-leak/)
- [Water Meter Running Everything Off Guide](/guides/water-meter-running-everything-off/)

### Neighborhoods Served Across Grand Rapids

Our 24/7 telephone line connects residential and commercial property owners across Grand Rapids, including [Heritage Hill](/grand-rapids-mi/heritage-hill/), [Eastown](/grand-rapids-mi/eastown/), [East Hills](/grand-rapids-mi/east-hills/), [Midtown](/grand-rapids-mi/midtown/), [Creston](/grand-rapids-mi/creston/), [Belknap Lookout](/grand-rapids-mi/belknap-lookout/), [Garfield Park](/grand-rapids-mi/garfield-park/), [Alger Heights](/grand-rapids-mi/alger-heights/), [Ottawa Hills](/grand-rapids-mi/ottawa-hills/), and [Roosevelt Park](/grand-rapids-mi/roosevelt-park/).

---

## 24/7 Phone Connections for Grand Rapids Plumbing Emergencies

Do not let hidden pipe leaks or backed-up sewer drains damage your foundation. Call our Michigan referral desk at **(866) 487-0556**. Get connected 24/7 with an independent local plumbing professional ready to help your Grand Rapids property.
`;

const dir = path.resolve('src/content/city-services');
const detPlumb = extractMdxBodyText(fs.readFileSync(path.join(dir, 'detroit--plumbing.mdx'), 'utf-8'));
const grPlumbBody = extractMdxBodyText(plumb);

const sim = jaccardSimilarity(get5WordShingles(detPlumb), get5WordShingles(grPlumbBody));
const m = calculateReadability(grPlumbBody);
console.log('Tuned GR Plumbing:');
console.log('Grade:', m.fleschKincaidGrade, '| ASL:', m.avgSentenceLength, '| Words:', m.totalWords);
console.log('Similarity vs Detroit Plumbing:', (sim * 100).toFixed(1) + '%');
fs.writeFileSync(path.join(dir, 'grand-rapids--plumbing.mdx'), plumb, 'utf-8');
