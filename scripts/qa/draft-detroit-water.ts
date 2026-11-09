import { calculateReadability } from './readability.ts';

const text = `## Water Damage Restoration in Detroit, MI

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

const m = calculateReadability(text);
console.log('Water Damage Draft Readability:');
console.log('Grade:', m.fleschKincaidGrade);
console.log('ASL:', m.avgSentenceLength);
console.log('Words:', m.totalWords);
