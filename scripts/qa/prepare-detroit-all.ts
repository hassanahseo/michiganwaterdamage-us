import fs from 'node:fs';
import path from 'node:path';
import { calculateReadability } from './readability.ts';
import { get5WordShingles, jaccardSimilarity } from './similarity.ts';
import { BANNED_PATTERNS } from './banned-phrases.ts';

// 1. Water Damage Draft
const waterDamage = `## Water Damage Restoration in Detroit, MI

Indoor flooding from burst pipes or roof leaks needs fast action in Detroit. Water quickly damages old wood floors and plaster walls. Damp materials can also start growing mold within two days.

Michigan Water Damage Referral Network connects Wayne County property owners with local disaster recovery contractors. The referral line is open 24/7. Call **(877) 422-0329** to speak with a local restoration professional. They can extract standing water, trace moisture path lines, and set up drying equipment. Specialists take your call day or night and arrange prompt on-site service.

---

## How Water Damage Impacts Detroit Properties

Water trouble in Detroit often comes from old city pipes meeting historical home designs. More than 620,376 people live in Detroit. Most homes were built before 1950. These older homes have stone, brick, or hollow block foundations. Most lack modern exterior waterproofing. Heavy rain tests these old basement walls every summer.

The ground across Detroit is mostly heavy clay. Clay soil absorbs water very slowly. During heavy downpours, rain pools near foundation walls. Water presses hard against the outside of basement walls. This pressure pushes water through old mortar joints and floor cracks.

Detroit uses a combined sewer system. The Great Lakes Water Authority (GLWA) and local systems carry storm runoff and household sewage in the same pipes. During heavy rain, these large pipes fill up fast. Water backs up into private sewer laterals. It then rises through basement floor drains in neighborhoods like Jefferson-Chalmers and Rosedale Park.

Winter cold brings another big risk to Detroit homes. Polar vortex cold snaps drop temperatures below zero. Cold air freezes water pipes in unheated crawlspaces and exterior walls. When ice expands, metal pipes crack open. Pressurized water then floods the home until someone shuts the main valve.

---

## The Detroit Water Crisis: Combined Sewer Backups During Heavy Rain

A major problem unique to Detroit is its combined sewer network during heavy storms. Newer suburbs have two sets of pipes. They have one pipe for street runoff and another pipe for household sewage. Detroit routes both into one shared pipe.

When severe summer storms hit, the system fills up fast. In June 2021, a severe storm dropped over six inches of rain across Detroit. Freeway pumping stations could not keep up. The main sewer lines filled to the top. Water had nowhere to go. It backed up through private lateral pipes into thousands of Detroit basements.

Basement drains turned into geysers. Dirty storm water and sewage submerged furnaces, water heaters, and family belongings. Homes in low-lying areas near the Detroit River faced the worst flooding. In Jefferson-Chalmers, high river water slows gravity drainage. When river water is high, basements stay flooded longer. These homes need high-volume water extraction and thorough cleaning right away.

---

## What to Do in the First Hour After Water Enters Your Detroit Home

Taking the right steps in the first hour saves your property from deeper damage. It also keeps your family safe:

1. **Check electrical safety first.** If your electrical panel is in a wet basement, stay out. Never walk through standing water to reach the switches. Call DTE Energy or an electrician to shut off power from outside.
2. **Turn off the main water shutoff valve.** Find your main water valve where the pipe enters from the Detroit Water and Sewerage Department (DWSD). Turn the handle clockwise until water stops flowing.
3. **Lift furniture off wet floors.** Place foil or plastic wrap under wooden furniture legs. This stops wood stain from bleeding onto damp carpets.
4. **Keep doors to dry rooms closed.** High indoor humidity travels fast. Closing interior doors keeps damp air contained in the flooded area.
5. **Call for 24/7 restoration help.** Dial **(877) 422-0329** to reach an independent restoration contractor serving Detroit and Wayne County.

---

## How Professional Water Damage Restoration Works

Local restoration contractors follow clear steps to dry out flooded homes safely:

- **Thermal Imaging and Moisture Checks:** Contractors use infrared cameras and moisture meters. These tools find hidden water behind plaster walls and under hardwood floors without tearing down walls.
- **Water Extraction:** Truck-mounted vacuum pumps and submersible pumps remove standing water from basements. Weighted suction tools pull water out of carpet pads so carpets can often be saved.
- **Removing Damaged Materials:** Wet drywall and soaked insulation must be removed. Contractors make neat flood cuts twelve to twenty-four inches above the water line to open wall cavities for drying.
- **Antimicrobial Treatments:** Exposed wood studs and concrete floors are washed with EPA-registered botanical or antimicrobial sprays. This stops mold spores from germinating on damp lumber.
- **Structural Drying:** Commercial dehumidifiers and high-speed air movers run day and night. Contractors check moisture levels daily until wood studs reach safe dry standards.

---

## Detroit Repair Costs and City Building Permits

According to the Forbes Home Water Damage Cost Study, residential water restoration in Michigan averages **$1,250 to $5,500**. Small clean water jobs cost less. Large basement sewer backups cost more. Final costs depend on water depth, square footage, and total drying equipment runtime.

In Detroit, building safety rules are run by the Buildings, Safety Engineering, and Environmental Department (BSEED). Emergency water pumping and drying do not need city permits. Contractors can start extraction work right away. However, rebuilding walls, replacing submerged electrical panels, or replacing broken sewer laterals requires trade permits through BSEED.

---

## Frequently Asked Questions About Detroit Water Damage

### How fast does mold grow after a basement flood in Detroit?
Mold spores can start growing on damp drywall and wood framing in 24 to 48 hours. Fast water pumping and dehumidifier setup on the first day prevent widespread mold growth.

### Does homeowners insurance cover basement flooding in Detroit?
Standard home policies cover sudden pipe bursts inside the home. However, street flooding and sewer backups usually require an optional Water Backup endorsement. Check your policy papers or call your agent to confirm coverage limits.

### Can water damaged hardwood floors in old Detroit homes be saved?
Yes, if water is removed quickly. Contractors place vacuum drying mats over wet wood floors. These mats pull moisture out from underneath the planks before wood boards warp or buckle.

### What should I do if water backs up through my basement drain?
Do not walk in the water. Sewer backup water contains dangerous bacteria. If your breaker box is in the basement, stay upstairs. Call our phone line to connect with an emergency water mitigation contractor.

---

## Specialized Water Services in Detroit

We connect Detroit property owners with help for many specific water emergencies:

- [Emergency Water Removal in Detroit](/detroit-mi/water-damage/emergency-water-removal/)
- [Basement Flooding Cleanup in Detroit](/detroit-mi/water-damage/basement-flooding/)
- [Burst Pipe Water Damage in Detroit](/detroit-mi/water-damage/burst-pipe-water-damage/)
- [Statewide Michigan Water Damage Restoration](/water-damage/)
- [Detroit Emergency Services Hub](/detroit-mi/)
- [Basement Flooded First-Hour Guide](/guides/basement-flooded-what-to-do/)

### Neighborhoods Served Across Detroit

Our 24/7 phone line connects property owners in all Detroit neighborhoods, including [Downtown](/detroit-mi/downtown/), [Midtown](/detroit-mi/midtown/), [Corktown](/detroit-mi/corktown/), [Southwest Detroit](/detroit-mi/southwest-detroit/), [Palmer Woods](/detroit-mi/palmer-woods/), [Boston-Edison](/detroit-mi/boston-edison/), [Indian Village](/detroit-mi/indian-village/), [Rosedale Park](/detroit-mi/rosedale-park/), [Grandmont](/detroit-mi/grandmont/), [East English Village](/detroit-mi/east-english-village/), [Jefferson-Chalmers](/detroit-mi/jefferson-chalmers/), and [University District](/detroit-mi/university-district/).

---

## 24/7 Phone Connections for Detroit Water Emergencies

Do not let standing water damage your foundation or ruin your home. Call our Michigan referral desk at **(877) 422-0329**. Get connected 24/7 with an independent local water damage restoration contractor ready to help your Detroit property.
`;

// 2. Mold Remediation Draft
const moldRemediation = `## Mold Remediation in Detroit, MI

Musty smells and dark spots on walls mean mold is spreading in your Detroit home. Mold breaks down wood framing and lowers indoor air quality. It needs safe containment and removal before spores spread through living areas.

Michigan Water Damage Referral Network connects Wayne County property owners with local mold removal contractors. The phone line operates 24/7. Call **(877) 422-0329** to speak with a local mold professional. Contractors set up plastic isolation barriers, run HEPA air scrubbers, and clean affected building materials. Independent specialists answer questions on the phone and arrange prompt on-site inspections.

---

## Why Detroit Properties Face Significant Mold Growth

Mold problems in Detroit stem from old building foundations, local clay soils, and humid summer weather. Home to 620,376 people, Detroit has thousands of houses built before 1950. Most of these homes have foundations made from fieldstone, clay tile, or porous brick. These older foundation walls were built without plastic vapor barriers.

The ground around Detroit is heavy clay soil. This clay holds groundwater like a sponge instead of letting rain drain away quickly. Moisture sits against basement walls for days after summer storms. Water slowly seeps through old mortar seams. This raises humidity inside dark basements and crawlspaces above 70 percent.

Detroit summers bring hot, humid air from the Great Lakes. When warm outside air enters cool basements through drafty windows or rim joists, moisture condenses on cold walls. Water droplets form on organic surfaces like wood joists, cardboard boxes, and drywall paper. Mold spores land on these damp surfaces and start spreading rapidly.

Aging plumbing lines add to the problem. Many homes still use older galvanized pipes connected to Detroit Water and Sewerage Department (DWSD) mains. Tiny pinhole leaks inside hollow plaster walls can drip for months without being seen. By the time dark stains appear on living room baseboards, large mold colonies have already spread inside wall cavities.

---

## Historic Masonry Cellars and Chronic Foundation Dampness in Detroit

A unique problem in older Detroit neighborhoods is moisture moving through historic masonry cellars. Homes in Boston-Edison, Corktown, and Indian Village have deep basements built with stone or lime-mortar brick.

Decades of exposure to wet clay soil cause old lime mortar to soften. Water vapor moves right through the permeable masonry walls. This creates a damp underground climate where mold spores thrive. Trouble starts when property owners finish these cellars with wood paneling or drywall without installing interior drainage channels. Trapped moisture feeds mold colonies behind the finished walls.

These historic homes often have central heating systems with return air ducts running along basement ceilings. If duct joints have air leaks, furnace blowers pull mold spores right out of the damp basement ceiling. The heating system then blows these spores into bedrooms and living spaces upstairs.

---

## What to Do When Mold is Discovered in a Detroit Home

Disturbing mold colonies releases millions of microscopic spores into the air you breathe. Follow these safety rules when you spot mold:

1. **Do not scrape or scrub dry mold.** Scraping mold patches sends clouds of spores into the air. Keep hands off the affected area until containment barriers are up.
2. **Turn off the central heating and cooling fan.** Set your thermostat blower to the off position. This stops your furnace from circulating airborne spores through supply registers into clean rooms.
3. **Keep the door to the room closed.** Close doors between the moldy room and other living areas to block airflow. Cover air return grilles with plastic to contain spores.
4. **Do not spray household bleach.** Bleach cannot soak into porous wood or drywall. It only whitens the surface while adding moisture that feeds mold roots deeper in the lumber.
5. **Call for professional mold referral.** Dial **(877) 422-0329** to speak with an independent mold removal contractor serving Detroit and Wayne County.

---

## The Professional Mold Removal Process

Local mold removal contractors use strict safety steps to clear fungal growth without spreading spores to clean rooms:

- **Plastic Containment Barriers:** Contractors seal doorways and air vents with heavy plastic sheeting. They run commercial air scrubbers equipped with HEPA filters. This creates negative air pressure so airborne spores cannot drift into the rest of the home.
- **Finding the Moisture Source:** Contractors use infrared cameras and moisture meters. They trace where dampness is entering, such as a slow pipe leak, roof defect, or foundation crack, so the moisture problem is stopped for good.
- **Removing Contaminated Materials:** Unsalvageable drywall, ceiling tiles, and carpet padding are sealed in heavy disposal bags inside the containment zone. Structural wood studs and foundation walls are scrubbed clean with wire brushes and HEPA vacuums.
- **Antimicrobial Cleaning:** Contractors apply EPA-registered fungicidal washes to exposed wood surfaces. This kills remaining fungal roots and protects wood against future growth.
- **Post-Remediation Air Testing:** An independent environmental tester takes air samples inside the containment area. This test confirms indoor spore counts are back to clean outdoor levels before plastic walls come down.

---

## Detroit Mold Remediation Costs and City Permits

According to the Forbes Home Mold Cost Guide, residential mold cleanup in Michigan averages **$1,400 to $4,800**. Small attic or bathroom projects cost less. Large basement remediation with wall demolition costs more. Total project prices depend on square footage, containment setup, and required demolition.

In Detroit, building safety rules fall under the Buildings, Safety Engineering, and Environmental Department (BSEED). Setting up plastic containment, running air scrubbers, and cleaning mold do not require city building permits. Contractors can start right away. However, replacing load-bearing wood studs, rewiring rooms, or altering plumbing stacks requires standard trade permits from BSEED.

---

## Frequently Asked Questions About Detroit Mold Remediation

### Can I clean up black mold myself with bleach?
Bleach does not work on porous building materials like drywall and wood studs. It leaves moisture behind that helps mold roots grow deeper into the wood. Physical removal under containment is needed.

### How do I know if mold has spread into my air ducts?
Watch for musty odors whenever the heating or air conditioning runs. You might also notice black dust around ceiling vents or family members coughing indoors. A duct inspection checks inside the metal trunks.

### Will mold delay selling a home in Detroit?
Yes. Home buyers in Detroit hire home inspectors who check basements for dampness and visible mold. Unresolved mold often holds up bank mortgage approvals until professional remediation is completed.

### How long does mold remediation take in a Detroit house?
Most residential projects take two to four days. This includes setting up plastic containment, removing damaged drywall, HEPA cleaning, and running post-remediation air clearance tests.

---

## Related Restoration Services in Detroit

Explore related emergency services and guides available to Detroit property owners:

- [Mold Inspection and Testing in Detroit](/detroit-mi/mold-remediation/mold-inspection-testing/)
- [Basement Mold Remediation in Detroit](/detroit-mi/mold-remediation/basement-mold/)
- [Attic Mold Remediation in Detroit](/detroit-mi/mold-remediation/attic-mold/)
- [Statewide Michigan Mold Remediation](/mold-remediation/)
- [Detroit Emergency Services Hub](/detroit-mi/)
- [Mold at Home Inspection Guide](/guides/mold-home-inspection-closing-michigan/)

### Detroit Neighborhoods Covered

Our 24/7 telephone line connects residential and commercial property owners across all Detroit neighborhoods, including [Downtown](/detroit-mi/downtown/), [Midtown](/detroit-mi/midtown/), [Corktown](/detroit-mi/corktown/), [Southwest Detroit](/detroit-mi/southwest-detroit/), [Palmer Woods](/detroit-mi/palmer-woods/), [Boston-Edison](/detroit-mi/boston-edison/), [Indian Village](/detroit-mi/indian-village/), [Rosedale Park](/detroit-mi/rosedale-park/), [Grandmont](/detroit-mi/grandmont/), [East English Village](/detroit-mi/east-english-village/), [Jefferson-Chalmers](/detroit-mi/jefferson-chalmers/), and [University District](/detroit-mi/university-district/).

---

## 24/7 Phone Connections for Detroit Mold Problems

Do not let mold ruin your home framing or affect your family's comfort. Call our Michigan referral desk at **(877) 422-0329**. Get connected 24/7 with an independent local mold remediation contractor ready to help your Detroit property.
`;

// 3. Fire Damage Draft
const fireDamage = `## Fire Damage Restoration in Detroit, MI

House fires and kitchen grease blazes cause heavy structural damage, acidic soot stains, and pungent smoke odors across Detroit properties. Fire cleanup requires fast board-up and professional smoke deodorization before soot permanently etches household surfaces.

Michigan Water Damage Referral Network connects Wayne County property owners with local fire restoration contractors. The phone line is open 24/7. Call **(877) 422-0329** to speak with a local fire restoration specialist. Contractors provide emergency roof board-up, chemical soot cleaning, structural stabilization, and smoke odor removal. Independent specialists explain safety steps on the phone and arrange prompt on-site service.

---

## Structural Realities and Fire Hazards in Detroit Properties

Fire and smoke spread across Detroit properties are shaped by historical home construction. With a population of 620,376, Detroit has one of the highest numbers of pre-1950 homes in the Midwest. These properties are mostly wood-frame bungalows, brick Tudors, and large two-story Colonials.

Many older Detroit residences were built with balloon framing between 1880 and 1930. In balloon framing, wall studs run all the way from the foundation sill to the roofline without horizontal fire stops. If a fire starts on the first floor, hollow wall cavities act like chimneys. Flames and hot smoke rush upward through wall cavities within minutes. Fire spreads to second-floor bedrooms and attics before firefighters arrive.

Cold Michigan winters place heavy strain on older electrical wiring. Extended sub-zero cold snaps increase demand on vintage knob-and-tube or early cloth wiring. Space heaters and old boilers running near wood finishes create high fire risks across neighborhoods like Palmer Woods, Grandmont, and Southwest Detroit.

Firefighting operations create a secondary water hazard. Municipal firefighters pump thousands of gallons of city water supplied by the Detroit Water and Sewerage Department (DWSD) into burning rooms. Water soaks plaster ceilings and runs down into basements. Because Detroit subsoils consist of dense clay that drains slowly, extinguishing water pools in basements. This water must be pumped out immediately alongside fire cleanup to stop wood rot.

---

## Balloon-Frame Construction and Rapid Smoke Movement in Detroit

A serious hazard in pre-1950 Detroit homes is balloon-frame construction. Modern platform homes have wood plates between floors that slow fire spread. Older Detroit homes lack these horizontal fire stops inside walls.

During a room fire, hot smoke is pulled up through hollow wall cavities by natural chimney effects. Even if firefighters put out the main blaze on the first floor, hot acidic smoke moves through floor joists and attic rafters.

As smoke cools, it leaves an oily, acidic soot film on every hidden surface. In Detroit's cold winter months, this residue sticks tight to uninsulated exterior wall cavities. If contractors do not open these hollow walls, scrub the studs, and seal the wood with odor-blocking primers, smoke odors will return every summer when temperatures rise.

---

## Immediate Safety Protocol Following a Detroit Fire Loss

Entering a burned building before it is safe puts you at risk of structural collapse and toxic soot fumes. Follow these critical rules:

1. **Wait for official clearance.** Never enter a fire-damaged home until municipal fire officials or building inspectors declare the building structurally sound.
2. **Check electrical safety.** If the electrical panel is in a flooded basement or has burned wiring, stay out. Call DTE Energy to shut off power from the street.
3. **Do not touch soot-covered walls.** Oils on your hands react with acidic soot residues. Touching walls sets dark stains permanently into paint, wood, and drywall.
4. **Keep the furnace fan turned off.** Running your central heating fan pulls soot through ductwork into clean rooms. Keep ventilation fans off.
5. **Call for 24/7 fire restoration help.** Dial **(877) 422-0329** to speak with an independent fire restoration contractor serving Detroit and Wayne County.

---

## How Professional Fire and Smoke Restoration Works

Local fire restoration contractors follow organized phases to stabilize burned structures and clean salvageable belongings:

- **Emergency Board-Up and Roof Tarping:** Contractors cover broken windows, burned doors, and damaged roofs with exterior plywood and heavy tarps to protect against rain and intruders.
- **Water Extraction and Structural Drying:** Contractors pump out residual firefighting water from basements and run commercial dehumidifiers to stop secondary mold growth on damp framing.
- **Dry Chemical Sponge Soot Cleaning:** Contractors use natural rubber dry chemical sponges to lift loose soot from walls and ceilings without smearing. Heavy oily residues are washed with alkaline cleaners to neutralize acid.
- **Thermal Fogging and Hydroxyl Odor Removal:** Industrial thermal foggers and hydroxyl generators release deodorizing vapor. These tiny vapor particles follow the path of the smoke into wood pores to break down odor molecules.
- **Duct Cleaning and Wood Encapsulation:** Ventilation ducts are brushed and vacuumed under negative air pressure. Charred framing lumber is coated with shellac-based or oil-based sealer to trap lingering odors permanently.

---

## Detroit Fire Restoration Costs and BSEED Permits

According to the Forbes Home Fire Restoration Study, fire and smoke repair in Michigan averages **$3,000 to $14,000**. Small kitchen smoke jobs cost less. Severe structural fires cost more. Final costs depend on the amount of burned lumber removed, soot damage severity, and required rebuild work.

In Detroit, building safety rules are administered by the Buildings, Safety Engineering, and Environmental Department (BSEED). Emergency board-up, water pumping, and soot cleaning do not require municipal permits. Contractors can begin immediate stabilization work. However, structural reconstruction, replacing burned roof rafters, and rewiring rooms require standard trade permits from BSEED before residents can move back in.

---

## Frequently Asked Questions About Detroit Fire Damage

### Why is fire soot acidic and harmful to home surfaces?
When plastics and synthetic furniture burn, they create soot with acidic chlorides and sulfides. These acidic residues pit polished metal fixtures, discolor bathtubs, and etch glass within days if not washed off.

### Can clothing and furniture damaged by smoke be saved?
Yes. Many fabrics, clothing, and upholstered chairs can be saved through professional dry cleaning and commercial ozone treatment chambers that eliminate smoke smells without damaging fabrics.

### How do contractors get smoke odors out of old wood framing?
Contractors scrape charred wood down to clean lumber. They treat the wood with hydroxyl generators and apply shellac-based sealers that lock in smoke odors permanently.

### How long does fire restoration take on a Detroit house?
Emergency board-up and water removal take one to two days. Thorough soot cleaning and deodorization take one to two weeks. Full structural rebuilding depends on city permits and construction scope.

---

## Related Emergency Services in Detroit

Explore related emergency restoration services and guides available to Detroit property owners:

- [Statewide Michigan Fire Damage Overview](/fire-damage/)
- [Detroit Emergency Services Hub](/detroit-mi/)
- [Emergency Water Removal in Detroit](/detroit-mi/water-damage/emergency-water-removal/)
- [Basement Flooding Cleanup in Detroit](/detroit-mi/water-damage/basement-flooding/)
- [Basement Flooded First-Hour Guide](/guides/basement-flooded-what-to-do/)
- [Ceiling Dripping Guide](/guides/ceiling-dripping-wet-spot-upstairs/)

### Detroit Neighborhoods Served

Our 24/7 telephone line connects residential and commercial property owners across all Detroit neighborhoods, including [Downtown](/detroit-mi/downtown/), [Midtown](/detroit-mi/midtown/), [Corktown](/detroit-mi/corktown/), [Southwest Detroit](/detroit-mi/southwest-detroit/), [Palmer Woods](/detroit-mi/palmer-woods/), [Boston-Edison](/detroit-mi/boston-edison/), [Indian Village](/detroit-mi/indian-village/), [Rosedale Park](/detroit-mi/rosedale-park/), [Grandmont](/detroit-mi/grandmont/), [East English Village](/detroit-mi/east-english-village/), [Jefferson-Chalmers](/detroit-mi/jefferson-chalmers/), and [University District](/detroit-mi/university-district/).

---

## 24/7 Phone Connections for Detroit Fire Emergencies

Do not let corrosive soot and smoke odors permanently ruin your property. Call our Michigan referral desk at **(877) 422-0329**. Get connected 24/7 with an independent local fire restoration contractor ready to help your Detroit property.
`;

// 4. Biohazard Cleanup Draft
const biohazardCleanup = `## Biohazard & Sewage Cleanup in Detroit, MI

Raw sewage backflows, blackwater basement floods, and biological waste create dangerous indoor health hazards across Detroit properties. Wastewater carries harmful bacteria and viruses that require thorough decontamination before families can use their basements again.

Michigan Water Damage Referral Network connects Wayne County property owners with local biohazard and sewage cleanup contractors. The phone line operates 24/7. Call **(877) 422-0329** to speak with a local cleanup specialist. Contractors provide blackwater pumping, disposal of ruined porous materials, hospital-grade disinfection, and indoor cleanliness testing. Independent specialists provide immediate safety guidance on the phone and arrange prompt on-site service.

---

## Why Detroit Properties Face Severe Sewage and Biohazard Risks

Wastewater emergencies in Detroit come from an aging combined sewer network and historical home plumbing. Serving 620,376 residents, Detroit has thousands of homes built before 1950. These older homes have clay sewer laterals that connect basement floor drains directly to street sewer mains.

Under city streets, the Detroit Water and Sewerage Department (DWSD) and regional partners at GLWA operate a combined sewer system. Street rainwater and household toilet waste flow through the same large pipes. When heavy summer downpours hit Wayne County, storm volumes quickly overload the system.

Detroit's heavy clay subsoils make drainage worse. Because clay soil absorbs water slowly, rain rushes into street drains within minutes. Water pressure builds up inside overloaded city sewer mains. Untreated sewage, street oil, and wastewater back up through private laterals right into home basements.

Winter cold adds another threat. During freezing months, tree roots seeking water crack old clay sewer pipes. When a lateral pipe collapses or freezes near the foundation wall, drains back up. Raw sewage then overflows out of basement floor drains or laundry sinks whenever someone runs water upstairs.

---

## Severe Sewer Surcharges and Blackwater Flooding in Detroit Basements

A severe health hazard unique to Detroit is frequent sewage flooding during intense rainstorms. Newer suburbs have separate pipes for street runoff and sewage. Detroit routes both through one pipe network.

This vulnerability was proven during the June 2021 federally declared disaster (FEMA Disaster 4607). More than six inches of rain fell in just a few hours. Freeway pumping stations flooded, and city sewer mains overflowed across Wayne County. Untreated Category 3 blackwater backed up into thousands of Detroit basements.

Category 3 blackwater contains dangerous bacteria like E. coli and Salmonella, hepatitis viruses, and chemical road runoff. When this sewage floods a Detroit basement, it covers water heaters, furnaces, and storage boxes in dirty sludge. Porous building elements like wood studs, drywall, and concrete block foundations absorb this dirty water fast. Household cleaners cannot decontaminate these materials safely. Professional pumping and clinical-grade disinfection are required.

---

## Essential Safety Rules Following a Sewage Emergency in Detroit

Raw sewage creates serious contamination risks. Follow these safety steps before cleanup help arrives:

1. **Evacuate the flooded basement immediately.** Keep children and pets away from contaminated areas. Sewage odors and standing wastewater contain airborne pathogens.
2. **Check electrical safety first.** If your electrical breaker panel is in a flooded basement, stay out. Never walk through standing water to reach the switches. Call DTE Energy or an electrician to cut power safely.
3. **Do not use a household vacuum or mop.** Regular shop vacuums cannot filter out bacteria. Their exhaust blows dangerous germs into the air you breathe.
4. **Stop using household plumbing.** Do not flush toilets, run sinks, or run washing machines upstairs. Any drained water will back up out of basement floor drains.
5. **Call for 24/7 sewage cleanup help.** Dial **(877) 422-0329** to speak with an independent biohazard cleanup contractor serving Detroit and Wayne County.

---

## The Professional Sewage Cleanup Protocol

Local sewage remediation contractors use clear decontamination steps to make flooded homes safe again:

- **Quarantine Barriers and Protective Gear:** Contractors wear protective suits, heavy rubber boots, double gloves, and respirators. Plastic barriers seal off basement stairs so airborne bacteria cannot enter upper living areas.
- **Blackwater Extraction:** Contractors use heavy vacuum pumps and sealed hoses to pump out wastewater and sewage sludge. Extracted waste is transported away following Michigan environmental rules.
- **Removing Contaminated Porous Items:** Porous items like soaked carpet padding, damaged drywall, baseboards, and composite shelving cannot be sanitized. They are sealed into heavy-duty disposal bags and hauled away.
- **Hospital-Grade Disinfection:** Concrete floors and foundation walls are scrubbed with EPA-registered hospital-grade disinfectant washes. Contractors test surfaces to ensure all biological contaminants are gone before drying begins.
- **Structural Drying:** Commercial dehumidifiers and high-speed air movers run continuously until structural wood framing meets dry moisture standards.

---

## Detroit Sewage Cleanup Costs and City Building Permits

According to the Forbes Home Sewage Cleanup Study, professional sewage cleanup in Michigan averages **$1,750 to $7,000**. Small cleanups with minor water cost less. Large sewage backups with wall demolition and disposal cost more. Total costs depend on sewage volume, square footage, and equipment drying time.

In Detroit, building safety rules are governed by the Buildings, Safety Engineering, and Environmental Department (BSEED). Emergency wastewater extraction, removing ruined drywall, and surface disinfection do not require city building permits. Contractors can start right away. However, rebuilding walls, replacing flooded water heaters, or digging up broken sewer laterals requires trade permits from BSEED.

---

## Frequently Asked Questions About Detroit Sewage Cleanup

### What health dangers come with basement sewage backups in Detroit?
Raw sewage carries harmful pathogens like E. coli, Salmonella, and Hepatitis A. Skin contact or breathing airborne bacteria can cause serious stomach sickness, skin infections, and breathing problems.

### Can basement carpet soaked with sewage water be saved?
No. Porous materials like carpets and foam padding soaked with Category 3 blackwater cannot be disinfected safely. They must be removed and thrown away as contaminated waste.

### How do contractors get sewer smells out of Detroit basements?
Contractors remove all contaminated items, wash concrete floors with deep-cleaning disinfectant washes, and run hydroxyl generators and air scrubbers to break down odor molecules.

### Does homeowners insurance cover sewage backup cleanup in Detroit?
Standard home policies usually exclude sewer backups unless you have an optional Water Backup and Sump Overflow endorsement. Check your policy papers to see if you have this coverage.

---

## Related Emergency Services in Detroit

Explore related emergency restoration services and guides available to Detroit property owners:

- [Sewage Backup Cleanup in Detroit](/detroit-mi/biohazard-cleanup/sewage-backup-cleanup/)
- [Statewide Michigan Biohazard Overview](/biohazard-cleanup/)
- [Emergency Water Removal in Detroit](/detroit-mi/water-damage/emergency-water-removal/)
- [Basement Flooding Cleanup in Detroit](/detroit-mi/water-damage/basement-flooding/)
- [Detroit Emergency Services Hub](/detroit-mi/)
- [Basement Flooded First-Hour Guide](/guides/basement-flooded-what-to-do/)

### Detroit Neighborhoods Covered

Our 24/7 phone line connects residential and commercial property owners across all Detroit neighborhoods, including [Downtown](/detroit-mi/downtown/), [Midtown](/detroit-mi/midtown/), [Corktown](/detroit-mi/corktown/), [Southwest Detroit](/detroit-mi/southwest-detroit/), [Palmer Woods](/detroit-mi/palmer-woods/), [Boston-Edison](/detroit-mi/boston-edison/), [Indian Village](/detroit-mi/indian-village/), [Rosedale Park](/detroit-mi/rosedale-park/), [Grandmont](/detroit-mi/grandmont/), [East English Village](/detroit-mi/east-english-village/), [Jefferson-Chalmers](/detroit-mi/jefferson-chalmers/), and [University District](/detroit-mi/university-district/).

---

## 24/7 Phone Connections for Detroit Sewage Emergencies

Do not let dangerous sewage water put your family's health at risk. Call our Michigan referral desk at **(877) 422-0329**. Get connected 24/7 with an independent local sewage and biohazard cleanup contractor ready to help your Detroit property.
`;

// 5. Plumbing Draft
const plumbing = `## Emergency Plumbing & Leak Detection in Detroit, MI

Hidden pipe leaks under concrete slabs, sudden pipe bursts, and clogged main sewer drains need fast professional diagnostic checks in Detroit. Water leaking under foundations causes structural settlement and spikes quarterly water utility bills.

Michigan Water Damage Referral Network maintains an independent plumbing referral line for Wayne County property owners. The phone line operates 24/7. Call **(866) 487-0556** to speak with a local plumbing professional. Plumbers provide non-invasive acoustic leak detection, thermal pipe tracing, sewer camera scoping, drain snaking, and copper repiping. Independent plumbers explain emergency shutoff steps on the phone and arrange prompt on-site service.

---

## The Plumbing Infrastructure Landscape Across Detroit Homes

Plumbing problems across Detroit are shaped by old city utility lines, historical pipe materials, and local soil conditions. Serving 620,376 people, Detroit has thousands of houses built before 1950. These vintage homes rely on original plumbing lines that are past their intended lifespan.

Water supply lines in these pre-1950 homes are mostly threaded galvanized iron or early copper. Decades of contact with water supplied by the Detroit Water and Sewerage Department (DWSD) cause galvanized pipes to rust inside. Rust deposits narrow the inside diameter of pipes. This causes low water pressure at upper-floor faucets and leaves pipe walls thin and brittle.

Under foundation slabs and yards, old clay sewer pipes connect homes to city mains. Detroit's ground consists of heavy clay soil. This clay swells during wet seasons and shrinks during summer dry spells. Shifting soil puts heavy pressure on underground pipe joints. Soil movement cracks brittle clay pipes, allowing tree roots to grow inside and cause recurring drain clogs.

Michigan winter weather brings acute pipe freeze risks. Polar vortex cold snaps push frost deep into the ground. Cold air freezes uninsulated pipes entering through stone basement walls or running in drafty crawlspaces. Expanding ice splits pipe walls. Pressurized water floods the home when frozen pipes thaw out.

---

## Aging Galvanized Lines, City Lead Replacements & Frost Shifting in Detroit

A plumbing challenge common in older Detroit neighborhoods like Corktown, Midtown, and Southwest Detroit is aging service lines and winter frost movement. Thousands of pre-1950 homes were originally connected to DWSD mains through lead or galvanized steel service lines buried four to five feet underground.

DWSD is actively replacing lead service lines across Detroit neighborhoods. However, private plumbing lines inside the property line remain the homeowner's responsibility. As vintage galvanized interior lines corrode, they often develop hidden pinhole leaks under concrete basement floors.

Because Detroit's heavy clay soil is dense and impermeable, water leaking from an under-slab pipe cannot drain down into the ground. Instead, pressurized water spreads sideways under the concrete floor. This washes away support soil beneath foundation footings and creates warm damp spots on basement slabs. Left undetected, hidden slab leaks cause foundation cracks and spike quarterly DWSD water bills before water ever surfaces indoors.

---

## What to Do When an Emergency Plumbing Leak Strikes in Detroit

Taking fast action when a pipe breaks or a drain backs up prevents thousands of dollars in water damage:

1. **Turn off the main water shutoff valve.** Locate your main water shutoff valve where the DWSD supply pipe enters through the basement wall. Turn the valve clockwise until water stops flowing.
2. **Check electrical safety.** If the leak flooded a basement where your electrical breaker panel is located, stay out. Never walk through water to reach electrical panels. Call DTE Energy or an electrician to cut power safely.
3. **Open the lowest faucets.** Relieve leftover pressure in home pipes by opening basement sink taps or outside hose bibbs. This drains trapped water away from the leak.
4. **Turn off your water heater.** Switch the electrical breaker off or turn the gas valve to pilot mode on your water heater. This protects the tank from overheating while water is shut off.
5. **Call for 24/7 plumbing help.** Dial **(866) 487-0556** to connect with an independent master plumbing contractor serving Detroit and Wayne County.

---

## Professional Leak Detection and Repair Methods

Local plumbing contractors use modern diagnostic tools and durable repair methods to fix hidden pipe problems without unnecessary demolition:

- **Acoustic and Ultrasonic Leak Detection:** Plumbers find pressurized water leaks under concrete slabs using electronic ground microphones. These tools hear the faint hissing sound of escaping water through solid concrete.
- **Thermal Imaging Pipe Mapping:** Plumbers use high-resolution infrared cameras to see hot and cold temperature lines behind finished walls and under floors. This pinpoints hidden pipe breaks without cutting into plaster walls.
- **Sewer Camera Inspections:** Fiber-optic video cameras travel through underground sewer laterals. Plumbers see tree roots, cracked clay tiles, and pipe blockages on clear video screens.
- **Hydro-Jetting and Drain Cleaning:** High-pressure water jetters blast away tree roots, grease, and mineral scale from sewer lines. This restores full flow to sluggish main drains.
- **Copper and PEX Repiping:** Corroded galvanized pipes are replaced with durable copper or flexible PEX piping. New pipe assemblies undergo pressure testing to confirm zero leaks under full DWSD municipal water pressure.

---

## Detroit Plumbing Costs and BSEED Trade Permitting

According to the Forbes Home Plumbing Cost Guide, leak detection in Michigan typically averages **$180 to $900**, while sump pump repairs and drain clearing run **$450 to $1,950**. Complex under-slab pipe repairs or main sewer line excavations cost more depending on dig depth and concrete work.

In Detroit, plumbing codes are regulated by the Buildings, Safety Engineering, and Environmental Department (BSEED). Clearing clogged drains, fixing faucets, and non-invasive leak checks do not need city permits. Plumbers can start diagnostic work right away. However, replacing water heaters, installing new water service lines, or rebuilding main drain stacks requires standard plumbing permits and inspections through BSEED.

---

## Frequently Asked Questions About Detroit Plumbing & Leak Detection

### Why did my Detroit water bill suddenly double?
An unexplained jump in your DWSD water bill usually means a hidden pressurized leak. Common culprits include a running toilet, an underground yard line break, or a leaking pipe under your basement concrete slab.

### How do plumbers locate leaks under concrete slabs without breaking floors?
Plumbers use acoustic ground microphones and thermal imaging cameras. These tools locate the exact spot of the leak through concrete before any digging begins.

### Can tree roots in my sewer line be stopped permanently?
Drain snaking and hydro-jetting clear away roots to restore flow. However, roots grow back through cracked clay seams. Permanent repair requires trenchless pipe lining or replacing the cracked clay pipe with seamless PVC.

### What should I do if water pipes freeze during a Detroit cold snap?
Keep affected faucets open slightly to relieve pressure as ice melts. Warm exposed indoor pipes with a hairdryer or heating pad. Never use an open flame torch. If a pipe cracks, turn off the main water valve right away.

---

## Specialized Plumbing Services in Detroit

Explore related emergency plumbing services and guides available to Detroit property owners:

- [Leak Detection in Detroit](/detroit-mi/plumbing/leak-detection/)
- [Emergency Plumber in Detroit](/detroit-mi/plumbing/emergency-plumber/)
- [Drain Cleaning in Detroit](/detroit-mi/plumbing/drain-cleaning/)
- [Statewide Michigan Plumbing Services](/plumbing/)
- [Detroit Emergency Services Hub](/detroit-mi/)
- [Water Bill Suddenly Doubled Guide](/guides/water-bill-suddenly-doubled-hidden-leak/)
- [Water Meter Running Everything Off Guide](/guides/water-meter-running-everything-off/)

### Detroit Neighborhoods Served

Our 24/7 telephone line connects residential and commercial property owners across all Detroit neighborhoods, including [Downtown](/detroit-mi/downtown/), [Midtown](/detroit-mi/midtown/), [Corktown](/detroit-mi/corktown/), [Southwest Detroit](/detroit-mi/southwest-detroit/), [Palmer Woods](/detroit-mi/palmer-woods/), [Boston-Edison](/detroit-mi/boston-edison/), [Indian Village](/detroit-mi/indian-village/), [Rosedale Park](/detroit-mi/rosedale-park/), [Grandmont](/detroit-mi/grandmont/), [East English Village](/detroit-mi/east-english-village/), [Jefferson-Chalmers](/detroit-mi/jefferson-chalmers/), and [University District](/detroit-mi/university-district/).

---

## 24/7 Phone Connections for Detroit Plumbing Emergencies

Do not let hidden pipe leaks or backed-up sewer drains damage your foundation. Call our Michigan referral desk at **(866) 487-0556**. Get connected 24/7 with an independent local master plumbing professional ready to help your Detroit property.
`;

const drafts = [
  { name: 'detroit--water-damage.mdx', text: waterDamage },
  { name: 'detroit--mold-remediation.mdx', text: moldRemediation },
  { name: 'detroit--fire-damage.mdx', text: fireDamage },
  { name: 'detroit--biohazard-cleanup.mdx', text: biohazardCleanup },
  { name: 'detroit--plumbing.mdx', text: plumbing },
];

console.log('=== Readability & Metrics Audit of All 5 Rewritten Detroit Pages ===');
for (const d of drafts) {
  const m = calculateReadability(d.text);
  console.log(`${d.name}: Grade ${m.fleschKincaidGrade} | ASL ${m.avgSentenceLength} | Words ${m.totalWords}`);
}

console.log('\n=== Banned Phrases Audit for Drafts ===');
let bannedCount = 0;
for (const d of drafts) {
  for (const p of BANNED_PATTERNS) {
    const r = new RegExp(p.regex.source, p.regex.flags + (p.regex.flags.includes('g') ? '' : 'g'));
    let match;
    while ((match = r.exec(d.text)) !== null) {
      console.log(`[BANNED] ${d.name} matched "${p.phrase}": "${match[0]}"`);
      bannedCount++;
    }
  }
}
if (bannedCount === 0) {
  console.log('✅ ZERO banned phrases found in all 5 drafts!');
}

console.log('\n=== Pairwise Jaccard Similarity Audit ===');
for (let i = 0; i < drafts.length; i++) {
  for (let j = i + 1; j < drafts.length; j++) {
    const s1 = get5WordShingles(drafts[i].text);
    const s2 = get5WordShingles(drafts[j].text);
    const sim = (jaccardSimilarity(s1, s2) * 100).toFixed(1);
    console.log(`${drafts[i].name} vs ${drafts[j].name}: ${sim}%`);
  }
}

// Write the files to src/content/city-services/
const dir = path.resolve('src/content/city-services');
for (const d of drafts) {
  fs.writeFileSync(path.join(dir, d.name), d.text, 'utf-8');
  console.log(`\nWritten updated: ${d.name}`);
}
