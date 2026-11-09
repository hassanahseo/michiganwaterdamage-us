import fs from 'node:fs';
import path from 'node:path';
import citiesData from '../src/data/cities.json';
import neighborhoodsData from '../src/data/neighborhoods.json';

const targetDir = path.resolve('src/content/neighborhoods');
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

// Map of valid neighborhood slugs for link validation
const validNeighSlugs = new Set(neighborhoodsData.map((n) => `${n.city}/${n.slug}`));

interface NeighborhoodDetail {
  slug: string;
  city: string;
  historicEra: string;
  streetsAndLandmarks: string;
  foundationTypes: string;
  drainageDynamics: string;
  commonSymptoms: string;
  treeAndPlumbingNotes: string;
  adjacentRelationship: string;
  customFaqs: Array<{ q: string; a: string }>;
}

const neighborhoodDetails: Record<string, NeighborhoodDetail> = {
  // DETROIT (12)
  'detroit/downtown': {
    slug: 'downtown',
    city: 'detroit',
    historicEra: 'Late 19th-century commercial high-rises and early 20th-century Beaux-Arts towers converted into modern residential lofts along Woodward and Washington Boulevard.',
    streetsAndLandmarks: 'Woodward Avenue corridor, Grand Circus Park, Campus Martius, and Capitol Park.',
    foundationTypes: 'Deep concrete caissons, multi-level sub-grade parking structures, and reinforced masonry foundations connected to central steam and municipal mains.',
    drainageDynamics: 'Surrounded by dense impervious surfaces and asphalt, surface runoff cascades directly into DWSD storm collectors. High vertical risers subject lower-level pressure regulators and pipe joints to severe hydrostatic force.',
    commonSymptoms: 'Ruptured vertical supply risers flooding multiple residential floors, dampness in below-grade storage lockers, and storm drain overflow pooling at building entryways.',
    treeAndPlumbingNotes: 'High municipal pressure zones stress century-old pipe couplings and aging industrial-to-residential plumbing transitions.',
    adjacentRelationship: 'Downtown sits directly south of Midtown along the Woodward axis and east of historic Corktown, forming the dense commercial and residential hub of Detroit.',
    customFaqs: [
      {
        q: 'Why are vertical riser failures common in Downtown Detroit lofts?',
        a: 'Tall historic residential towers maintain high water pressure zones to supply upper floors. Aging pipe joints and vibration from mechanical pumps can trigger sudden pressurized line ruptures cascading through multiple levels.',
      },
      {
        q: 'Who is responsible for sewer backup remediation in multi-unit buildings?',
        a: 'While building associations manage central municipal connections, individual unit owners must rapidly extract water within their space to prevent microbial growth across common shared walls.',
      },
      {
        q: 'Do emergency restoration teams service high-rise properties Downtown?',
        a: 'Yes, dispatch networks connect downtown property owners with contractors equipped with portable high-rise extraction equipment, specialized dehumidifiers, and direct riser shutoff capabilities.',
      },
    ],
  },
  'detroit/midtown': {
    slug: 'midtown',
    city: 'detroit',
    historicEra: 'Dense historic apartment buildings, multi-family Victorian conversions, and renovated brick brownstones constructed between 1900 and 1935 near Wayne State University.',
    streetsAndLandmarks: 'Cass Corridor, Canfield Street historic district, Wayne State University campus, and the Detroit Cultural Center.',
    foundationTypes: 'Deep brick perimeter foundations, stone crawlspaces, and basement slabs resting directly on dense Wayne County clay.',
    drainageDynamics: 'High population density strains DWSD combined sewer mains during heavy convective storms. Impervious street surfaces channel runoff toward residential basement window wells.',
    commonSymptoms: 'Musty odors creeping through floor joists, sewer odors in garden-level apartments, and water pooling along historic limestone basement walls.',
    treeAndPlumbingNotes: 'Mature American elm and maple street trees regularly infiltrate aging vitrified clay sewer laterals, creating recurrent line blockages.',
    adjacentRelationship: 'Midtown buffers Downtown Detroit to the south, borders Corktown to the southwest, and connects north to the grand residences of Boston-Edison.',
    customFaqs: [
      {
        q: 'How does high rental density in Midtown affect plumbing emergencies?',
        a: 'Multi-tenant student and residential occupancy causes heavy cyclical demand on drain lines. Grease accumulation and foreign objects frequently trigger severe lateral blockages and backups.',
      },
      {
        q: 'Can brick foundation seepage in Midtown cause hidden mold?',
        a: 'Yes. Moisture migrating through unsealed brick foundations wicks into drywall and wood studs, allowing microbial spores to flourish behind finished basement walls within 48 hours.',
      },
      {
        q: 'What should Midtown landlords do immediately during a tenant water leak?',
        a: 'Instruct the tenant to shut off local fixture stops, eliminate electrical hazards, and call our 24/7 dispatch desk for rapid extraction and moisture stabilization.',
      },
    ],
  },
  'detroit/corktown': {
    slug: 'corktown',
    city: 'detroit',
    historicEra: 'Detroit’s oldest surviving residential neighborhood, established in the 1830s with timber-frame workers’ cottages and historic brick rowhouses.',
    streetsAndLandmarks: 'Michigan Avenue commercial district, Rosa Parks Boulevard, Michigan Central Station, and Roosevelt Park.',
    foundationTypes: 'Shallow 19th-century fieldstone footings, soft lime mortar joints, and dirt or thin concrete crawlspaces.',
    drainageDynamics: 'Porous rubble foundations allow groundwater from expansive clay soils to seep through mortar joints during prolonged rains and spring freeze-thaw cycles.',
    commonSymptoms: 'Efflorescence and crumbling mortar on crawlspace walls, standing water in low-ceiling dirt basements, and sluggish drainage after summer cloudbursts.',
    treeAndPlumbingNotes: 'Decades of soil settlement around Michigan Central have shifted shallow clay laterals, causing cracked pipes and sewer gas intrusion.',
    adjacentRelationship: 'Corktown sits west of Downtown Detroit, directly south of Midtown, and borders the industrial and cultural hub of Southwest Detroit.',
    customFaqs: [
      {
        q: 'Can fieldstone foundations in Corktown withstand pressure washing?',
        a: 'No. Soft lime mortar used in 19th-century masonry can disintegrate under high pressure. Contractors use gentle moisture extraction, chemical sanitization, and controlled drying.',
      },
      {
        q: 'Why do Corktown basements smell musty after seasonal rain?',
        a: 'Shallow footings lack exterior waterproofing membranes. Rainwater wicks into masonry, maintaining elevated crawlspace humidity that encourages fungal colonies.',
      },
      {
        q: 'How fast can emergency extraction equipment arrive in Corktown?',
        a: 'Independent restoration partners operate throughout central Detroit, offering immediate dispatch for extraction pumps and commercial dehumidifiers.',
      },
    ],
  },
  'detroit/southwest-detroit': {
    slug: 'southwest-detroit',
    city: 'detroit',
    historicEra: 'Vibrant working-class neighborhood featuring early 20th-century wood-frame flats, brick bungalows, and commercial mixed-use buildings in Mexicantown.',
    streetsAndLandmarks: 'Vernor Highway, Junction Avenue, Clark Park, and the Ambassador Bridge international corridor.',
    foundationTypes: 'Poured concrete slabs, masonry block basements, and vintage brick foundation walls built between 1910 and 1940.',
    drainageDynamics: 'Flat low-lying topography adjacent to the Detroit River and industrial railways experiences severe backpressure during regional combined sewer overflows.',
    commonSymptoms: 'Category 3 blackwater rising through basement floor drains during storms, laundry basin overflows, and persistent basement humidity.',
    treeAndPlumbingNotes: 'Heavy industrial vibrations and century-old vitrified clay sewer laterals contribute to sheared sewer pipes and stubborn root blockages.',
    adjacentRelationship: 'Southwest Detroit borders Corktown to the east, the Detroit River to the south, and extends toward the Rouge River industrial basin.',
    customFaqs: [
      {
        q: 'Why is blackwater backup especially hazardous in Southwest Detroit basements?',
        a: 'Combined sewer overflows carry human biological waste, street contaminants, and industrial runoff, introducing harmful bacteria that require professional biohazard sanitization.',
      },
      {
        q: 'Does homeowner insurance cover sewer backup in Mexicantown?',
        a: 'Standard property policies typically require an optional Water Backup and Sump Overflow endorsement to cover municipal sewer surcharges.',
      },
      {
        q: 'What is the first step when sewage backs up in a Southwest Detroit home?',
        a: 'Evacuate the basement immediately, keep children and pets away, avoid operating electrical switches, and call our 24/7 referral line.',
      },
    ],
  },
  'detroit/boston-edison': {
    slug: 'boston-edison',
    city: 'detroit',
    historicEra: 'Prestigious historic district platted between 1905 and 1925 with grand revival mansions, English Tudors, and Italian Renaissance estates.',
    streetsAndLandmarks: 'Boston Boulevard, Chicago Boulevard, Edison Avenue, and Longfellow Avenue.',
    foundationTypes: 'Deep, multi-room concrete and brick basements, extensive sub-grade entertaining areas, and massive exterior masonry walls.',
    drainageDynamics: 'Extensive roof catchment areas and expansive finished basements create substantial hydrostatic load against foundation perimeters during intense thunderstorms.',
    commonSymptoms: 'Seepage behind finished oak paneling and plaster walls, sump pump failure during severe downpours, and hairline cracks in vintage concrete floors.',
    treeAndPlumbingNotes: 'Magnificent, century-old oak and elm street canopies send aggressive root systems into underground residential sewer laterals.',
    adjacentRelationship: 'Boston-Edison lies north of Midtown, south of Palmer Woods, and directly east of the historic University District.',
    customFaqs: [
      {
        q: 'How do contractors protect historic woodwork during water extraction in Boston-Edison?',
        a: 'Specialists use non-invasive moisture meters, desiccant dehumidifiers, and controlled cavity drying techniques to preserve historic hardwoods and antique architectural millwork.',
      },
      {
        q: 'Are dual sump pumps recommended for large Boston-Edison basements?',
        a: 'Yes. Due to expansive basement footprints and significant hydrostatic pressure, backup battery sump pumps prevent catastrophic water accumulation during electrical blackouts.',
      },
      {
        q: 'How quickly does mold develop behind vintage basement plaster?',
        a: 'Active fungal spores germinate within 24 to 48 hours in damp, unventilated cavities, making prompt air scrubbing and moisture extraction imperative.',
      },
    ],
  },
  'detroit/indian-village': {
    slug: 'indian-village',
    city: 'detroit',
    historicEra: 'Grand early 20th-century residential historic district featuring over 300 architect-designed estates, Georgian Revivals, and Arts and Crafts mansions.',
    streetsAndLandmarks: 'Seminole, Iroquois, and Burns streets between Jefferson and Mack avenues.',
    foundationTypes: 'Substantial stone and masonry foundations, complex multi-room cellar layouts, and vintage wine and boiler cellars.',
    drainageDynamics: 'Close proximity to the Detroit River creates a naturally high water table, subjecting low-lying foundations to persistent hydrostatic uplift.',
    commonSymptoms: 'High basement floor moisture vapor emission, efflorescence on masonry cellar walls, and backup through deep laundry utility drains.',
    treeAndPlumbingNotes: 'Lush, mature residential tree cover causes recurring lateral root intrusions into legacy cast-iron and clay drains.',
    adjacentRelationship: 'Indian Village sits on Detroit’s near east side, west of Jefferson-Chalmers and East English Village, and minutes from the Detroit River.',
    customFaqs: [
      {
        q: 'Does proximity to the Detroit River raise water damage risks in Indian Village?',
        a: 'Yes. High water table levels in river-adjacent zones exert continuous hydrostatic pressure against cellar foundations, requiring reliable perimeter drainage and sump systems.',
      },
      {
        q: 'Can water damage ruin architectural plaster ceilings in Indian Village?',
        a: 'Yes. Saturated plaster becomes structurally unstable and prone to collapse. Emergency containment and gentle structural drying protect vintage plaster and ornate moldings.',
      },
      {
        q: 'What permits are needed for plumbing lateral repairs in Indian Village?',
        a: 'Repairs involving excavation or municipal sewer connections require permits through Detroit BSEED and coordination with historic district guidelines.',
      },
    ],
  },
  'detroit/palmer-woods': {
    slug: 'palmer-woods',
    city: 'detroit',
    historicEra: 'Exclusive planned subdivision developed from 1915 onward, showcasing custom Tudor Revival, Neo-Renaissance, and Gothic Revival estates.',
    streetsAndLandmarks: 'Seven Mile Road, Woodward Avenue curve, Strathcona Drive, and historic Palmer Park.',
    foundationTypes: 'Heavy reinforced concrete basements, deep masonry foundations, and multi-level split cellar floor plans.',
    drainageDynamics: 'Winding curved streets and natural glacial topography channel heavy storm runoff toward low-elevation residential driveways and basement walkouts.',
    commonSymptoms: 'Water seepage along basement cove joints, saturated carpeting in below-grade recreation rooms, and high indoor humidity during summer months.',
    treeAndPlumbingNotes: 'Dense, mature forest canopy of ancient oaks and maples continuously breaches underground drainage pipes and sewer laterals.',
    adjacentRelationship: 'Palmer Woods borders the University District to the south, Sherwood Forest to the east, and Rosedale Park across northwest Detroit.',
    customFaqs: [
      {
        q: 'Why are finished basements in Palmer Woods prone to sudden flooding?',
        a: 'Large roof surface areas generate thousands of gallons of stormwater during cloudbursts. When gutters or exterior perimeter drains overflow, water pushes directly into basements.',
      },
      {
        q: 'How is mold remediation performed around custom estate finishes?',
        a: 'Remediation contractors construct negative-pressure containment barriers and use HEPA air scrubbers to isolate affected rooms while preserving surrounding custom finishes.',
      },
      {
        q: 'Who should I contact if a main supply pipe bursts in Palmer Woods?',
        a: 'Shut off the main interior water shutoff valve near the water meter, then immediately call our 24/7 emergency dispatch line for restoration assistance.',
      },
    ],
  },
  'detroit/rosedale-park': {
    slug: 'rosedale-park',
    city: 'detroit',
    historicEra: 'Nationally registered historic neighborhood developed in the 1920s and 1930s featuring English Tudors, Arts and Crafts bungalows, and Colonial Revivals.',
    streetsAndLandmarks: 'Grand River Avenue, Outer Drive, Warwick Street, and Rosemont Avenue.',
    foundationTypes: 'Poured concrete and block basement walls supporting substantial two-story brick and stone residential framing.',
    drainageDynamics: 'Heavy clay soils characteristic of northwest Detroit hold moisture near surface grade, creating sustained lateral pressure on foundation walls.',
    commonSymptoms: 'Seepage through foundation settlement cracks, sump crock overflows during thunderstorms, and chronic dampness in unfinished basements.',
    treeAndPlumbingNotes: 'Island parkway trees along Outer Drive and mature yard oaks frequently cause lateral sewer blockages and pipe displacements.',
    adjacentRelationship: 'Rosedale Park is directly adjacent to Grandmont to the west, North Rosedale Park to the north, and connects east toward Palmer Woods.',
    customFaqs: [
      {
        q: 'Why do Rosedale Park basements experience foundation wall seepage?',
        a: 'Impermeable clay subsoils expand when saturated, creating extreme hydrostatic pressure that forces groundwater through hairline wall fissures and mortar joints.',
      },
      {
        q: 'Can emergency crews dry carpet without tearing it out in Rosedale Park?',
        a: 'For clean Category 1 water intrusions, industrial sub-surface water extractors and commercial air movers can often dry carpeting and pads if addressed within 24 hours.',
      },
      {
        q: 'How do I schedule an urgent plumbing inspection in Rosedale Park?',
        a: 'Visit our local plumbing service page or call our dedicated restoration dispatch line for prompt referral to independent local service providers.',
      },
    ],
  },
  'detroit/grandmont': {
    slug: 'grandmont',
    city: 'detroit',
    historicEra: 'Known as the "Home of Good Neighbors," platted in the 1920s with stately brick Colonials, English Tudors, and classic American Foursquares.',
    streetsAndLandmarks: 'Southfield Freeway corridor, Grand River Avenue, Asbury Park, and Archdale Street.',
    foundationTypes: 'Deep concrete and masonry basements with perimeter drain tiles connecting into municipal stormwater laterals.',
    drainageDynamics: 'Regional downpours can overwhelm local storm sewers, creating backpressure that slows basement drain discharge and causes floor drain puddling.',
    commonSymptoms: 'Floor drain seepage, damp basement corners, musty storage closet odors, and sub-surface moisture beneath tile flooring.',
    treeAndPlumbingNotes: 'Aging galvanized water service lines and vintage cast-iron soil stacks are susceptible to corrosion, pinhole leaks, and root infiltration.',
    adjacentRelationship: 'Grandmont sits immediately west of Rosedale Park, sharing the historic Grand River residential corridor in northwest Detroit.',
    customFaqs: [
      {
        q: 'What causes sewer backups in Grandmont homes during heavy rains?',
        a: 'When regional combined storm sewers fill beyond capacity, hydraulic backpressure forces wastewater backward through private sewer laterals into basement fixtures.',
      },
      {
        q: 'How can Grandmont homeowners prevent sewer backflow?',
        a: 'Installing a professional backwater check valve on the main building drain prevents municipal sewer surcharges from entering basement floor drains.',
      },
      {
        q: 'Are microbial treatments safe for homes with pets in Grandmont?',
        a: 'Yes. Professional remediation contractors apply EPA-registered, botanical-based antimicrobial disinfectants that neutralize fungi while ensuring indoor safety.',
      },
    ],
  },
  'detroit/east-english-village': {
    slug: 'east-english-village',
    city: 'detroit',
    historicEra: 'Charming planned east-side residential community established between 1930 and 1950, renowned for well-maintained red-brick Tudors and Cape Cods.',
    streetsAndLandmarks: 'Outer Drive East, Mack Avenue, Cadieux Road, and Harper Avenue.',
    foundationTypes: 'Full poured concrete basements with poured footings, concrete floors, and brick upper exterior veneer.',
    drainageDynamics: 'Regional storms across eastern Wayne and southern Macomb counties place heavy hydraulic demand on regional drains, contributing to storm sewer backups.',
    commonSymptoms: 'Water backing up through basement floor drains, moisture wicking up finished drywall partitions, and sump pump cycling failure.',
    treeAndPlumbingNotes: 'Extensive neighborhood tree planting programs have resulted in mature root systems encasing legacy clay sewer pipes.',
    adjacentRelationship: 'East English Village borders Grosse Pointe to the east, Jefferson-Chalmers to the south, and Indian Village to the west.',
    customFaqs: [
      {
        q: 'Why are East English Village basements vulnerable to severe storm surcharges?',
        a: 'Extreme regional downpours overwhelm regional trunk lines, pushing excess stormwater backward into residential laterals and lower-level utility fixtures.',
      },
      {
        q: 'How does high humidity in brick basements cause structural mold?',
        a: 'Basement relative humidity exceeding 60% provides the moisture necessary for fungal spores to colonize drywall paper, wood framing, and cardboard storage boxes.',
      },
      {
        q: 'What should I do if my sump pump fails in East English Village?',
        a: 'Disconnect electrical power if water touches cords, place battery backups if available, and contact our 24/7 emergency dispatch line for mobile extraction pumps.',
      },
    ],
  },
  'detroit/jefferson-chalmers': {
    slug: 'jefferson-chalmers',
    city: 'detroit',
    historicEra: 'Historic waterfront canal district along the Detroit River, platted in the early 1900s with brick two-family flats, bungalows, and canal-front residences.',
    streetsAndLandmarks: 'Jefferson Avenue, Fox Creek canals, Alfred Brush Ford Park, and Lakewood Harbor.',
    foundationTypes: 'Concrete block, brick masonry, and crawlspace footings built along shallow water tables and interconnected canal waterways.',
    drainageDynamics: 'Directly exposed to Detroit River lake level fluctuations, seiche surges from Lake St. Clair, and intense canal backflow during wind-driven storms.',
    commonSymptoms: 'Canal water overflow encroaching onto yards, severe hydrostatic basement flooding, foundation wall efflorescence, and sump overload.',
    treeAndPlumbingNotes: 'Saturated alluvial soils cause ground shifting that damages underground pipe alignments and exacerbates sewer lateral failures.',
    adjacentRelationship: 'Jefferson-Chalmers occupies the southeastern tip of Detroit along the river, directly south of East English Village and east of Indian Village.',
    customFaqs: [
      {
        q: 'How do river seiches and high canal levels impact Jefferson-Chalmers basements?',
        a: 'Strong eastern winds push water from Lake St. Clair into the Detroit River and canal networks, elevating local groundwater tables and forcing water through basement walls.',
      },
      {
        q: 'Is canal floodwater considered biohazardous in Jefferson-Chalmers?',
        a: 'Yes. Canal overflow carries street runoff, biological debris, and contaminants, classifying it as Category 3 water requiring antimicrobial decontamination.',
      },
      {
        q: 'Do local restoration contractors provide emergency sandbagging and pumps?',
        a: 'Referral contractors deploy industrial submersible pumps, high-capacity trash pumps, and rapid structural drying systems tailored for waterfront emergencies.',
      },
    ],
  },
  'detroit/university-district': {
    slug: 'university-district',
    city: 'detroit',
    historicEra: 'Prestigious northwest neighborhood developed between 1920 and 1940, characterized by custom brick Tudors, French Provencal, and Colonial homes.',
    streetsAndLandmarks: 'University of Detroit Mercy campus, Livernois Avenue of Fashion, McNichols Road, and Muirland Street.',
    foundationTypes: 'Deep concrete and brick cellar foundations, large finished recreation spaces, and solid masonry exterior construction.',
    drainageDynamics: 'Dense clay subsoils impede natural percolation, concentrating heavy rain runoff against foundation cove seams and sub-surface walls.',
    commonSymptoms: 'Water pooling around perimeter basement walls, sluggish laundry drains, mold behind wood paneling, and copper water line leaks.',
    treeAndPlumbingNotes: 'Aging municipal water mains and original residential copper service connections experience joint fatigue and root penetration.',
    adjacentRelationship: 'The University District is located directly south of Palmer Woods, east of Rosedale Park, and north of Boston-Edison along Livernois.',
    customFaqs: [
      {
        q: 'Why are pinhole water leaks common in historic University District homes?',
        a: 'Original copper supply lines and galvanized fittings experience internal galvanic corrosion over decades of service, eventually developing high-pressure pinhole spray leaks.',
      },
      {
        q: 'What is the fastest way to detect a hidden wall leak in the University District?',
        a: 'Independent diagnostic plumbers utilize thermal imaging cameras and acoustic listening equipment to pinpoint leaks without unnecessary wall demolition.',
      },
      {
        q: 'How does Michigan Water Damage Referral Network assist University District residents?',
        a: 'We provide immediate 24/7 telephone connection to licensed local restoration and plumbing contractors equipped for rapid mitigation and repair.',
      },
    ],
  },

  // GRAND RAPIDS (10)
  'grand-rapids/heritage-hill': {
    slug: 'heritage-hill',
    city: 'grand-rapids',
    historicEra: 'One of the largest urban historic districts in the United States, showcasing massive Queen Anne, Italianate, and Victorian mansions dating from 1845 to 1920.',
    streetsAndLandmarks: 'E. Fulton Street, Heritage Hill historic boundary, College Avenue, and Union Avenue.',
    foundationTypes: 'Michigan fieldstone, soft brick, and sandstone block foundations bound by original lime-sand mortar.',
    drainageDynamics: 'Positioned on a hillside rising eastward from downtown Grand Rapids, surface water runoff flows rapidly downhill toward lower residential foundations.',
    commonSymptoms: 'Mortar joint weeping, damp dirt crawlspaces, water seepage into stone boiler rooms, and ceiling leaks from upper-floor radiator plumbing.',
    treeAndPlumbingNotes: 'Ancient boulevard trees send extensive root networks into century-old vitrified clay sewer laterals.',
    adjacentRelationship: 'Heritage Hill borders Downtown Grand Rapids to the west, Midtown to the north, and Eastown and East Hills to the east.',
    customFaqs: [
      {
        q: 'How do restoration teams handle delicate fieldstone foundations in Heritage Hill?',
        a: 'Technicians avoid aggressive abrasive methods that could erode historic lime mortar. They employ low-pressure washdowns, HEPA vacuuming, and desiccant dehumidification.',
      },
      {
        q: 'Can freeze-thaw cycles crack sandstone foundations in Heritage Hill?',
        a: 'Yes. Moisture absorbed by porous sandstone expands during Grand Rapids winters, causing spalling, crumbling, and structural stone displacement.',
      },
      {
        q: 'What should I do if a steam radiator or vintage pipe leaks in Heritage Hill?',
        a: 'Turn off the zone boiler valve immediately, isolate electricity in damp areas, and call our 24/7 referral line for emergency extraction.',
      },
    ],
  },
  'grand-rapids/eastown': {
    slug: 'eastown',
    city: 'grand-rapids',
    historicEra: 'Walkable, creative residential district developed between 1900 and 1930, characterized by two-story American Foursquares and Craftsman bungalows.',
    streetsAndLandmarks: 'Wealthy Street business district, Lake Drive, Robinson Road, and Wilcox Park.',
    foundationTypes: 'Poured concrete, hollow core concrete block, and brick cellar walls supporting wood-framed residential superstructures.',
    drainageDynamics: 'Rolling residential topography and mature landscaping channel surface water toward residential basement window wells during spring downpours.',
    commonSymptoms: 'Basement floor drain gurgling, damp carpet in finished rental basements, efflorescence on cinder block, and bathroom supply leaks.',
    treeAndPlumbingNotes: 'High rental occupancy and mature roadside trees generate frequent lateral sewer clogs and drain line backups.',
    adjacentRelationship: 'Eastown lies east of Heritage Hill and East Hills, north of Ottawa Hills, and extends toward East Grand Rapids.',
    customFaqs: [
      {
        q: 'Why do rental properties in Eastown experience frequent plumbing clogs?',
        a: 'Multi-tenant occupancy creates heavy continuous usage of vintage drainage stacks. Grease, wipes, and root intrusions lead to sudden lateral blockages.',
      },
      {
        q: 'How can Eastown homeowners test for hidden mold behind drywall?',
        a: 'Certified mold inspection contractors utilize calibrated air sampling cassettes and thermal imaging to detect hidden microbial reservoirs within wall cavities.',
      },
      {
        q: 'Are emergency plumbing dispatch services available 24/7 in Eastown?',
        a: 'Yes. Our network routes Eastown calls around the clock directly to independent, licensed local plumbers ready for emergency response.',
      },
    ],
  },
  'grand-rapids/east-hills': {
    slug: 'east-hills',
    city: 'grand-rapids',
    historicEra: 'Vibrant historic residential and retail neighborhood platted in the late 19th century, featuring Victorian frame cottages, duplexes, and brick commercial buildings.',
    streetsAndLandmarks: 'Cherry Street historic commercial corridor, Lake Drive, Diamond Avenue, and Fairmount Square.',
    foundationTypes: 'Soft brick mortar, fieldstone, and early 20th-century poured concrete basements with shallow crawlspace additions.',
    drainageDynamics: 'Steep hillside topography directs surface stormwater rapidly down alleys and driveways, creating localized ponding against foundation perimeters.',
    commonSymptoms: 'Water seepage through foundation mortar joints, soggy basement subfloors, musty odor in lower storage rooms, and roof valley leaks.',
    treeAndPlumbingNotes: 'Decades-old clay sewer laterals running beneath mature maple trees suffer from root infiltration and soil settlement offsets.',
    adjacentRelationship: 'East Hills is nestled between Heritage Hill to the west, Eastown to the east, and Midtown to the north.',
    customFaqs: [
      {
        q: 'How does East Hills topography influence basement water problems?',
        a: 'The prominent hillside slope causes storm runoff from higher elevations to accumulate against lower-elevation foundation walls, driving moisture through foundation seams.',
      },
      {
        q: 'What is the recommended procedure for drying a soaked hardwood floor in East Hills?',
        a: 'Specialized hardwood floor drying mats connect to commercial dehumidifiers, pulling moisture through the wood grain to prevent cupping and permanent warping.',
      },
      {
        q: 'Do I need a city permit to replace an underground sewer line in East Hills?',
        a: 'Yes. Sewer lateral excavation and replacement require plumbing permits issued by the City of Grand Rapids Development Center.',
      },
    ],
  },
  'grand-rapids/midtown': {
    slug: 'midtown',
    city: 'grand-rapids',
    historicEra: 'Centrally located neighborhood developed from the 1890s through the 1930s, featuring traditional two-story single-family homes and renovated flats.',
    streetsAndLandmarks: 'Michigan Street Medical Mile corridor, Fulton Street Farmers Market, and Houseman Field.',
    foundationTypes: 'Concrete block, brick masonry, and early poured concrete footings set into heavy sandy loam and clay subsoils.',
    drainageDynamics: 'Urban density and proximity to major commercial arterial streets increase impervious runoff, putting heavy demand on local storm drainage.',
    commonSymptoms: 'Basement seepage during rapid snowmelts, sump pump motor burnout, sewer line backups, and hidden bathroom leaks in multi-level flats.',
    treeAndPlumbingNotes: 'Heavy residential density and aging lateral lines create vulnerabilities to root intrusion and pipe collapse.',
    adjacentRelationship: 'Midtown Grand Rapids sits directly north of Heritage Hill and East Hills, and south of the Creston and Belknap Lookout neighborhoods.',
    customFaqs: [
      {
        q: 'Why are rapid snowmelts hazardous for Midtown Grand Rapids basements?',
        a: 'When deep winter snowpacks melt rapidly over frozen ground, meltwater cannot absorb into the soil and pools directly against residential foundation walls.',
      },
      {
        q: 'How do independent restoration contractors remove sewer odors from a flooded basement?',
        a: 'Crews extract all liquid waste, remove contaminated porous materials, apply hospital-grade botanical disinfectants, and deploy HEPA air scrubbers and hydroxyl generators.',
      },
      {
        q: 'Who responds to emergency plumbing calls in Midtown Grand Rapids?',
        a: 'Our 24/7 routing desk connects you immediately with independent licensed emergency plumbers servicing Kent County.',
      },
    ],
  },
  'grand-rapids/creston': {
    slug: 'creston',
    city: 'grand-rapids',
    historicEra: 'Grand Rapids’ largest historic neighborhood, settled by industrial workers in the late 19th and early 20th centuries with Craftsman bungalows and two-family homes.',
    streetsAndLandmarks: 'Plainfield Avenue corridor, Creston business district, Riverside Park, and the Grand River basin.',
    foundationTypes: 'Poured concrete slabs, concrete block foundations, and vintage masonry cellars near river terrace elevations.',
    drainageDynamics: 'Lower-elevation properties near Riverside Park and the Grand River face elevated groundwater tables and storm surcharge risks during spring river crests.',
    commonSymptoms: 'Hydrostatic water intrusion through basement floor seams, sewer backup during high river stages, and excessive crawlspace condensation.',
    treeAndPlumbingNotes: 'Mature boulevard trees and decades-old clay pipes result in cracked laterals and soil infiltration.',
    adjacentRelationship: 'Creston occupies the northeast quadrant of Grand Rapids, bordering Belknap Lookout to the south and extending north along the Grand River.',
    customFaqs: [
      {
        q: 'How does high water on the Grand River affect Creston basements?',
        a: 'When the Grand River rises toward flood stage, municipal drainage outlets face hydraulic head pressure, slowing storm drain discharge and raising neighborhood groundwater levels.',
      },
      {
        q: 'Can wet drywall in a Creston basement be salvaged after water intrusion?',
        a: 'If exposed to clean Category 1 water and dried within 24 to 48 hours, drywall may be saved. Drywall exposed to sewage or contaminated floodwater must be removed.',
      },
      {
        q: 'How quickly can extraction pumps be deployed to Creston properties?',
        a: 'Emergency contractors dispatched through our network maintain truck-mounted and submersible extraction pumps ready for rapid local deployment 24/7.',
      },
    ],
  },
  'grand-rapids/belknap-lookout': {
    slug: 'belknap-lookout',
    city: 'grand-rapids',
    historicEra: 'Historic neighborhood perched on a prominent bluff overlooking Downtown Grand Rapids and the Grand River, featuring 19th-century workers’ cottages and modern infill.',
    streetsAndLandmarks: 'Belknap Park, Lookout Park, Michigan Street hill, and Division Avenue North.',
    foundationTypes: 'Fieldstone, concrete block, and reinforced stepped hillside foundations engineered for steep slope terrain.',
    drainageDynamics: 'Dramatic elevation changes cause surface stormwater to cascade rapidly down hillside streets, exerting severe lateral hydraulic pressure on retaining walls.',
    commonSymptoms: 'Hillside groundwater seepage into walkout basements, retaining wall drainage failures, cracked foundation blocks, and flash runoff pooling.',
    treeAndPlumbingNotes: 'Steep lateral drop-offs put mechanical stress on sewer and water connections during seasonal ground shifts and freeze cycles.',
    adjacentRelationship: 'Belknap Lookout overlooks Downtown Grand Rapids to the west, borders Creston to the north, and connects to Midtown to the east.',
    customFaqs: [
      {
        q: 'Why are hillside foundations in Belknap Lookout susceptible to water intrusion?',
        a: 'Water flowing downhill creates significant hydrostatic pressure against the uphill foundation wall. Without functional exterior curtain drains, water penetrates mortar joints.',
      },
      {
        q: 'What should Belknap Lookout homeowners do if retaining walls show water weeping?',
        a: 'Weeping indicates blocked or inadequate sub-surface drainage. Clear surface swales, inspect weep holes, and contact a professional for diagnostic assessment.',
      },
      {
        q: 'Does insurance cover hillside groundwater penetration?',
        a: 'Standard homeowner policies exclude overland water and subsurface seepage unless an exterior drain failure is linked to a covered sudden peril.',
      },
    ],
  },
  'grand-rapids/garfield-park': {
    slug: 'garfield-park',
    city: 'grand-rapids',
    historicEra: 'Established south-side residential district centered around historic Garfield Park, developed between 1910 and 1940 with brick and frame bungalows and Dutch Colonials.',
    streetsAndLandmarks: 'Garfield Park nature reserve, Burton Street, Madison Avenue, and Jefferson Avenue.',
    foundationTypes: 'Poured concrete and hollow concrete block basements with full subterranean ceiling heights.',
    drainageDynamics: 'Flat south-side terrain with heavy clay subsoils leads to slow natural drainage, keeping soil saturated for extended periods following spring thaws.',
    commonSymptoms: 'Basement floor seepage, sump pump overworking during rainstorms, musty basement air, and slow sink and shower drainage.',
    treeAndPlumbingNotes: 'Plentiful mature silver maples and oaks throughout the park district regularly breach vintage vitrified clay sewer laterals.',
    adjacentRelationship: 'Garfield Park is bordered by Alger Heights to the east, Roosevelt Park to the northwest, and south-side residential corridors.',
    customFaqs: [
      {
        q: 'Why do Garfield Park basements experience persistent moisture in spring?',
        a: 'Dense clay subsoils retain heavy spring snowmelt and seasonal rainfall, elevating local groundwater levels and creating prolonged hydrostatic pressure on basement slabs.',
      },
      {
        q: 'How does high basement humidity impact upper-floor living spaces?',
        a: 'The "stack effect" pulls warm, humid air upward through wall cavities into upper living areas, carrying mold spores, dust mites, and musty odors throughout the home.',
      },
      {
        q: 'What type of sump pump is best suited for Garfield Park homes?',
        a: 'A cast-iron primary submersible pump paired with a secondary battery-operated backup pump provides reliable protection against power failures and pump motor burnouts.',
      },
    ],
  },
  'grand-rapids/alger-heights': {
    slug: 'alger-heights',
    city: 'grand-rapids',
    historicEra: 'Cohesive, family-oriented neighborhood developed primarily in the 1920s through 1940s, featuring Cape Cods, English cottages, and brick ranches.',
    streetsAndLandmarks: 'Alger Street commercial district, Eastern Avenue, Seymour Christian School, and MacKay-Jaycees Park.',
    foundationTypes: 'Poured concrete basements and cinder block walls with exterior parging and perimeter weeping tile systems.',
    drainageDynamics: 'Dense suburban clay soils limit natural water infiltration, requiring functional gutters, downspout extensions, and sump systems to prevent basement pooling.',
    commonSymptoms: 'Water entering through basement window wells, cove joint seepage, sump crock overflow, and water heater supply line leaks.',
    treeAndPlumbingNotes: 'Original post-war copper piping and clay laterals are prone to mineral scale accumulation and root-induced lateral fractures.',
    adjacentRelationship: 'Alger Heights borders Garfield Park to the west, Ottawa Hills to the north, and southern Grand Rapids suburban borders.',
    customFaqs: [
      {
        q: 'Why are window wells a common source of basement water in Alger Heights?',
        a: 'When window well drains become clogged with leaves and soil, heavy rainfall pools inside the well, eventually overflowing the windowsill into finished basements.',
      },
      {
        q: 'Can a water heater leak flood an entire Alger Heights basement?',
        a: 'Yes. An unmonitored 50-gallon water heater rupture can discharge continuous pressurized water, flooding subflooring and drywall within hours.',
      },
      {
        q: 'How can Alger Heights residents quickly get emergency water extraction?',
        a: 'Call our 24/7 emergency dispatch line to connect directly with an independent local damage restoration contractor serving Grand Rapids.',
      },
    ],
  },
  'grand-rapids/ottawa-hills': {
    slug: 'ottawa-hills',
    city: 'grand-rapids',
    historicEra: 'Prestigious planned residential community platted in 1922, featuring winding streets and stately Tudor Revival, Georgian, and French Provincial estates.',
    streetsAndLandmarks: 'Grand Parkway, Pontiac Road, Ottawa Hills High School, and Alexander Street.',
    foundationTypes: 'Deep reinforced concrete basements, multi-level cellar layouts, and massive exterior stone and brick masonry.',
    drainageDynamics: 'Natural rolling topography and curved street design channel stormwater runoff through extensive private lawns, creating localized water collection basins.',
    commonSymptoms: 'Moisture beneath finished hardwood basement floors, cove joint seepage, sump pump failure during electrical outages, and foundation settlement cracks.',
    treeAndPlumbingNotes: 'Extensive canopy of majestic mature hardwoods creates severe root penetration risks for long private sewer laterals.',
    adjacentRelationship: 'Ottawa Hills sits directly south of Eastown, north of Alger Heights, and east of Garfield Park.',
    customFaqs: [
      {
        q: 'How do restoration contractors dry finished luxury basements in Ottawa Hills?',
        a: 'Crews utilize low-grain refrigerant (LGR) dehumidifiers, high-velocity axial air movers, and injection wall-drying systems to extract moisture without damaging custom millwork.',
      },
      {
        q: 'Why are long private sewer laterals in Ottawa Hills vulnerable to blockage?',
        a: 'Large estate lots have long lateral runs to the municipal street main. Mature oak and maple tree roots exploit pipe joints, creating severe structural blockages over time.',
      },
      {
        q: 'What emergency measures should be taken if a supply line bursts in Ottawa Hills?',
        a: 'Shut off the main water valve near the water meter immediately, turn off affected electrical circuits, and call our 24/7 referral number.',
      },
    ],
  },
  'grand-rapids/roosevelt-park': {
    slug: 'roosevelt-park',
    city: 'grand-rapids',
    historicEra: 'Historic southwest Grand Rapids community established in the late 19th and early 20th centuries, featuring two-story wood-frame single and two-family homes.',
    streetsAndLandmarks: 'Grandville Avenue corridor, Roosevelt Park, Clyde Park Avenue, and Cesar E. Chavez Avenue.',
    foundationTypes: 'Brick masonry, concrete block, and shallow concrete footings built on low-elevation alluvial ground.',
    drainageDynamics: 'Proximity to the Grand River and low-lying ground elevation make properties susceptible to storm drainage surcharge and high seasonal moisture tables.',
    commonSymptoms: 'Floor drain backflow during heavy downpours, damp dirt crawlspaces, surface mold on wooden basement stairs, and slow sewer discharge.',
    treeAndPlumbingNotes: 'Century-old vitrified clay laterals and aging galvanized distribution piping suffer from corrosion and root damage.',
    adjacentRelationship: 'Roosevelt Park is situated in southwest Grand Rapids, bordering Garfield Park to the east and the industrial rail corridors.',
    customFaqs: [
      {
        q: 'What causes sewer water to rise in Roosevelt Park basements during storms?',
        a: 'Heavy rainfall can overwhelm municipal sewer mains. Hydraulic pressure pushes stormwater and sewage backward through basement floor drains lacking check valves.',
      },
      {
        q: 'Is bleach effective for cleaning mold on Roosevelt Park basement framing?',
        a: 'No. Bleach cannot penetrate porous wood framing and leaves residual moisture that fosters fungal regrowth. Certified contractors use EPA-registered fungicides.',
      },
      {
        q: 'Who can I call for emergency sewer backup cleanup in Roosevelt Park?',
        a: 'Contact our 24/7 telephone referral service to connect immediately with local biohazard and water restoration contractors.',
      },
    ],
  },

  // ANN ARBOR (8)
  'ann-arbor/kerrytown': {
    slug: 'kerrytown',
    city: 'ann-arbor',
    historicEra: 'Historic district platted in the 1830s adjacent to Downtown Ann Arbor, featuring 19th-century brick commercial buildings and restored Victorian residences.',
    streetsAndLandmarks: 'Kerrytown Market & Shops, Ann Arbor Farmers Market, Fourth Avenue, and Detroit Street.',
    foundationTypes: 'Michigan fieldstone, rubble masonry, and soft brick footings supporting timber framing and multi-tenant conversions.',
    drainageDynamics: 'Proximity to the historic Allen Creek stormwater drainage corridor and lower Huron River terrace leads to rapid runoff accumulation during summer storms.',
    commonSymptoms: 'Groundwater seepage through stone mortar, moisture in basement storage rooms, musty retail cellar odors, and sewer lateral sluggishness.',
    treeAndPlumbingNotes: 'High-density commercial and residential activity coupled with mature street trees strains legacy clay sewer lines.',
    adjacentRelationship: 'Kerrytown borders Downtown Ann Arbor to the south, Old West Side to the west, and Lower Town across the Huron River to the northeast.',
    customFaqs: [
      {
        q: 'Why are Kerrytown stone foundations vulnerable to moisture seepage?',
        a: 'Original lime mortar in 19th-century fieldstone walls is porous. When surrounding soils saturate, hydrostatic pressure pushes moisture directly into lower basements.',
      },
      {
        q: 'How does the historic Allen Creek corridor affect Kerrytown drainage?',
        a: 'Allen Creek runs underground in a massive storm culvert beneath central Ann Arbor. Severe convective storms can cause localized surface drainage backup in low-lying zones.',
      },
      {
        q: 'Are emergency restoration teams familiar with historic preservation in Kerrytown?',
        a: 'Yes. Independent contractors connected through our network employ gentle drying and remediation techniques that respect historic building materials.',
      },
    ],
  },
  'ann-arbor/old-west-side': {
    slug: 'old-west-side',
    city: 'ann-arbor',
    historicEra: 'Designated National Historic District featuring late 19th-century Victorian, Italianate, and Queen Anne cottages with landscaped private gardens.',
    streetsAndLandmarks: 'Liberty Street, Third Street, Jefferson Street, and Wurster Park.',
    foundationTypes: 'Fieldstone, split stone, and early concrete block foundations supporting wood-framed single-family homes and duplexes.',
    drainageDynamics: 'Rolling hills direct surface water toward residential side yards. The City of Ann Arbor Footing Drain Disconnection (FDD) program has altered sub-surface drainage.',
    commonSymptoms: 'Sump pump short-cycling, water infiltration along foundation cove seams, basement humidity spikes, and aging cast-iron pipe fractures.',
    treeAndPlumbingNotes: 'Mature neighborhood oak and maple trees frequently penetrate original clay lateral pipes connecting to city sewer mains.',
    adjacentRelationship: 'The Old West Side sits immediately west of Downtown Ann Arbor, south of Water Hill, and southwest of Kerrytown.',
    customFaqs: [
      {
        q: 'How has Ann Arbor’s Footing Drain Disconnection (FDD) program affected Old West Side basements?',
        a: 'Homes disconnected from city storm mains rely entirely on private sump pumps to eject foundation groundwater. A sump pump failure can result in immediate basement flooding.',
      },
      {
        q: 'What should I do if my Old West Side sump pump fails during a thunderstorm?',
        a: 'Switch to a battery backup pump if installed, avoid walking through standing water near electrical panels, and call our 24/7 referral line for emergency extraction.',
      },
      {
        q: 'Can musty odors in historic Old West Side basements be eliminated permanently?',
        a: 'Yes. Contractors identify the moisture intrusion source, apply antimicrobial treatments to framing, and recommend commercial dehumidification systems.',
      },
    ],
  },
  'ann-arbor/burns-park': {
    slug: 'burns-park',
    city: 'ann-arbor',
    historicEra: 'Classic residential neighborhood developed in the early 20th century near the University of Michigan campus, featuring two-story Colonials, Tudors, and Craftsman homes.',
    streetsAndLandmarks: 'Burns Park, Lincoln Avenue, Granger Avenue, and Wells Street.',
    foundationTypes: 'Poured concrete and concrete block basements with full subterranean ceiling heights and finished living spaces.',
    drainageDynamics: 'Dense tree canopies and established turf hold moisture, but prolonged convective rainstorms saturate soils and exert hydrostatic pressure against foundations.',
    commonSymptoms: 'Water seepage through basement wall cracks, sump crock overflows, carpet dampness in recreation rooms, and pinhole copper pipe leaks.',
    treeAndPlumbingNotes: 'Exceptionally dense street tree canopy creates frequent root infiltration into residential sewer laterals and foundation drain tiles.',
    adjacentRelationship: 'Burns Park borders central Ann Arbor campus neighborhoods to the north, Ann Arbor Hills to the east, and Georgetown to the south.',
    customFaqs: [
      {
        q: 'Why are finished basements in Burns Park at high risk during summer cloudbursts?',
        a: 'High-intensity rainfall rapidly overwhelms gutters and foundation perimeter drains. Water pushing through settlement cracks can quickly saturate carpets and subflooring.',
      },
      {
        q: 'How do contractors address water damage beneath finished hardwood floors in Burns Park?',
        a: 'Specialized vacuum drying panels are placed directly on hardwood planks to extract moisture through the subfloor, minimizing the need for floor removal.',
      },
      {
        q: 'Who performs emergency plumbing repairs in Burns Park?',
        a: 'Our referral line connects Burns Park residents directly with independent, licensed local plumbers available 24/7 for burst pipes and sewer backups.',
      },
    ],
  },
  'ann-arbor/water-hill': {
    slug: 'water-hill',
    city: 'ann-arbor',
    historicEra: 'Charming northwest residential neighborhood built on rolling hills, featuring compact mid-century ranches, Craftsman bungalows, and workers’ cottages.',
    streetsAndLandmarks: 'Brooks Street, Summit Street, Hunt Park, and Sunset Road.',
    foundationTypes: 'Poured concrete slabs, block basements, and stepped hillside footings accommodating steep natural slope grades.',
    drainageDynamics: 'Steep hillside topography and natural underground springs create constant sub-surface moisture movement toward lower-elevation basements.',
    commonSymptoms: 'Continuous spring groundwater weeping into sump pits, hillside runoff entering window wells, cove joint seepage, and high basement humidity.',
    treeAndPlumbingNotes: 'Natural ground moisture accelerates root growth toward buried sewer laterals and stormwater discharge lines.',
    adjacentRelationship: 'Water Hill overlooks Downtown Ann Arbor and Kerrytown to the east and borders the Old West Side across Huron Street to the south.',
    customFaqs: [
      {
        q: 'Why do Water Hill sump pumps run frequently even without rain?',
        a: 'Water Hill sits over natural underground springs and high groundwater channels. Sump pumps actively intercept rising groundwater to keep basements dry.',
      },
      {
        q: 'What happens if a Water Hill sump pump loses power during a storm?',
        a: 'Because groundwater influx is continuous, power outages can lead to rapid basement inundation within hours. A secondary battery backup system is critical.',
      },
      {
        q: 'How does mold remediation protect indoor air quality in Water Hill homes?',
        a: 'Contractors seal the workspace under negative pressure, capture airborne spores using HEPA air scrubbers, and treat affected surfaces with antimicrobial agents.',
      },
    ],
  },
  'ann-arbor/lower-town': {
    slug: 'lower-town',
    city: 'ann-arbor',
    historicEra: 'Historic settlement on the north bank of the Huron River, featuring historic frame cottages, modern medical campus housing, and mixed-use complexes.',
    streetsAndLandmarks: 'Broadway Street, Maiden Lane, Riverside Park, and the Huron River corridor.',
    foundationTypes: 'Concrete block, poured concrete, and historic rubble footings positioned within the river valley basin.',
    drainageDynamics: 'Directly bounded by the Huron River floodplain, lower-elevation properties encounter elevated groundwater tables during spring river crests and high runoff periods.',
    commonSymptoms: 'High crawlspace moisture vapor, hydrostatic floor drain backpressure, sump pump cycling failure, and rapid moisture wicking in lower levels.',
    treeAndPlumbingNotes: 'Alluvial soils and riverbank tree canopies create conditions favorable for lateral pipe shifting and severe root intrusion.',
    adjacentRelationship: 'Lower Town sits directly across the Huron River from Kerrytown and Downtown Ann Arbor, connecting northeast toward Ann Arbor Hills.',
    customFaqs: [
      {
        q: 'How does proximity to the Huron River influence basement flooding in Lower Town?',
        a: 'During spring snowmelt and heavy rains, the Huron River rises, elevating local water tables and increasing hydrostatic pressure against basement slabs.',
      },
      {
        q: 'Is crawlspace encapsulation recommended for Lower Town homes?',
        a: 'Yes. Installing a heavy-gauge vapor barrier, sealed vents, and a dedicated dehumidifier prevents river valley moisture from rotting floor framing.',
      },
      {
        q: 'Where can I get emergency water extraction in Lower Town?',
        a: 'Call our 24/7 referral number to connect immediately with independent local restoration specialists equipped with industrial extraction units.',
      },
    ],
  },
  'ann-arbor/ann-arbor-hills': {
    slug: 'ann-arbor-hills',
    city: 'ann-arbor',
    historicEra: 'Upscale residential neighborhood developed from the 1920s through the 1960s, featuring custom mid-century ranches, split-levels, and grand estate homes.',
    streetsAndLandmarks: 'Washtenaw Avenue corridor, Geddes Avenue, Ann Arbor Golf and Outing Club, and Devonshire Road.',
    foundationTypes: 'Extensive poured concrete basements, multi-level split footings, and large subterranean finished recreation and wine storage areas.',
    drainageDynamics: 'Extensive roof surface areas and large residential parcels generate heavy stormwater volumes that must be directed away from foundation walls.',
    commonSymptoms: 'Water seepage behind finished basement drywall, cove seam water pooling, sump pump failure during power blackouts, and plumbing supply line leaks.',
    treeAndPlumbingNotes: 'Mature private estate trees and extensive landscape irrigation systems put demands on underground plumbing lines.',
    adjacentRelationship: 'Ann Arbor Hills is located on the city’s east side, bordered by Burns Park to the west and Georgetown to the south.',
    customFaqs: [
      {
        q: 'Why are finished basements in Ann Arbor Hills estates high-risk for mold?',
        a: 'Finished basement walls trap hidden moisture against cold concrete. Fungal colonies can spread behind insulated drywall and beneath carpeting unnoticed for weeks.',
      },
      {
        q: 'How can estate homeowners prevent catastrophic water heater ruptures?',
        a: 'Installing automatic water shutoff valves with moisture sensors isolates the main water supply the instant a leak is detected, preventing widespread flooding.',
      },
      {
        q: 'Are emergency restoration contractors available 24/7 in Ann Arbor Hills?',
        a: 'Yes. Our network provides immediate around-the-clock telephone referral to licensed independent restoration contractors across Washtenaw County.',
      },
    ],
  },
  'ann-arbor/bryant': {
    slug: 'bryant',
    city: 'ann-arbor',
    historicEra: 'South-side residential neighborhood developed primarily from the 1950s through 1970s, featuring single-story ranches, split-levels, and modest family residences.',
    streetsAndLandmarks: 'Packard Street corridor, Ellsworth Road, Bryant Community Center, and Mary Beth Doyle Park.',
    foundationTypes: 'Poured concrete and concrete block basements with standard rectangular footprints and concrete floor slabs.',
    drainageDynamics: 'Heavy clay soils and relatively flat topography impede rapid water infiltration, resulting in standing surface water following intense storms.',
    commonSymptoms: 'Basement floor seepage during prolonged rains, sump pump burnout, damp crawlspace air, and washing machine supply hose leaks.',
    treeAndPlumbingNotes: 'Post-war copper supply lines and original clay sewer laterals are nearing the end of their operational lifespan.',
    adjacentRelationship: 'Bryant is located in south Ann Arbor, directly adjacent to Georgetown to the east and south-side commercial corridors.',
    customFaqs: [
      {
        q: 'Why does surface water pool around Bryant homes after heavy rain?',
        a: 'Dense glacial clay subsoils have very slow percolation rates. Without proper grading and downspout extensions, surface water pools against foundation walls.',
      },
      {
        q: 'What should Bryant homeowners do if a washing machine hose bursts?',
        a: 'Turn off the water shutoff valves behind the machine immediately, turn off the electrical circuit to the laundry room, and call for emergency water extraction.',
      },
      {
        q: 'How do contractors safely dry wet drywall and insulation in Bryant?',
        a: 'Technicians use moisture meters to map saturation boundaries, perform flood-cut removal of contaminated insulation, and deploy commercial dehumidifiers.',
      },
    ],
  },
  'ann-arbor/georgetown': {
    slug: 'georgetown',
    city: 'ann-arbor',
    historicEra: 'Established southeast Ann Arbor neighborhood developed in the 1960s and 1970s, featuring brick and frame ranches, Colonials, and bi-level homes.',
    streetsAndLandmarks: 'King George Boulevard, Georgetown Country Club, Packard Road, and Page Avenue.',
    foundationTypes: 'Poured concrete basement walls and concrete block foundations with perimeter footing drains connecting to sump pits.',
    drainageDynamics: 'Municipal separate sewer system and private footing drain installations require dependable mechanical sump pumps to evacuate foundation perimeter water.',
    commonSymptoms: 'Sump pump overflow during spring storms, plumbing line leaks under concrete slabs, cove joint seepage, and high humidity in finished basements.',
    treeAndPlumbingNotes: 'Aging copper water service lines and mature yard trees create vulnerabilities to pinhole leaks and lateral blockages.',
    adjacentRelationship: 'Georgetown is situated in southeast Ann Arbor, bordered by Burns Park and Ann Arbor Hills to the north, and Bryant to the west.',
    customFaqs: [
      {
        q: 'What causes under-slab plumbing leaks in Georgetown homes?',
        a: 'Slab leaks occur when pressurized copper supply lines buried beneath concrete foundations corrode or rub against abrasive rocks, releasing water under the slab.',
      },
      {
        q: 'How do technicians pinpoint a hidden slab leak in Georgetown?',
        a: 'Contractors utilize electronic acoustic listening discs and thermal imaging cameras to locate underground leaks without breaking up the entire floor.',
      },
      {
        q: 'Who should I contact for emergency water removal in Georgetown?',
        a: 'Call our 24/7 referral number to connect immediately with independent local restoration experts equipped for emergency extraction and drying.',
      },
    ],
  },

  // LANSING (8)
  'lansing/old-town': {
    slug: 'old-town',
    city: 'lansing',
    historicEra: 'Lansing’s original commercial district situated along the Grand River, featuring historic 19th-century brick mixed-use buildings, loft conversions, and worker cottages.',
    streetsAndLandmarks: 'Grand River Avenue, Turner Street arts district, Brenke Fish Ladder, and Burchard Park.',
    foundationTypes: 'Soft brick, Michigan fieldstone, and early poured concrete foundations built directly adjacent to the Grand River floodway.',
    drainageDynamics: 'Direct proximity to the Grand River floodway creates high seasonal groundwater tables and elevated risk of stormwater surcharge during spring river crests.',
    commonSymptoms: 'Basement floor drain backflow, water seepage through porous brick cellar walls, musty basement storage air, and utility tunnel dampness.',
    treeAndPlumbingNotes: 'Century-old vitrified clay sewer lines and urban density contribute to chronic lateral root blockages and line fractures.',
    adjacentRelationship: 'Old Town sits north of Downtown Lansing along the Grand River, bordering the Eastside neighborhood across Pennsylvania Avenue.',
    customFaqs: [
      {
        q: 'How does Grand River flooding affect basements in Old Town Lansing?',
        a: 'Elevated river crests prevent municipal storm outfalls from discharging freely, creating hydraulic backpressure that pushes water into low-lying basement drains.',
      },
      {
        q: 'Can historic brick cellar walls in Old Town be sealed against water?',
        a: 'Exterior waterproofing and interior perimeter drain systems with sump pumps provide the most reliable protection without trapping moisture inside soft brick.',
      },
      {
        q: 'Who provides emergency biohazard sewage cleanup in Old Town?',
        a: 'Our 24/7 telephone referral service connects you with certified independent contractors specializing in sewage extraction and antimicrobial disinfection.',
      },
    ],
  },
  'lansing/reo-town': {
    slug: 'reo-town',
    city: 'lansing',
    historicEra: 'Historic industrial and residential district established in the early 20th century around the REO Motor Car Company, featuring wood-frame worker cottages and brick flats.',
    streetsAndLandmarks: 'S. Washington Avenue commercial strip, Malcolm X Street, REO Clubhouse, and the Grand River trail.',
    foundationTypes: 'Concrete block, brick masonry, and early poured concrete basements with low ceiling clearances.',
    drainageDynamics: 'Proximity to the Grand River and legacy combined sewer infrastructure increases vulnerability to basement backflow during severe storm events.',
    commonSymptoms: 'Category 3 sewage backup through basement floor drains, moisture wicking on unfinished block walls, and laundry drain overflows.',
    treeAndPlumbingNotes: 'Decades of industrial vibration and soil settlement have contributed to misaligned lateral joints and root blockages.',
    adjacentRelationship: 'REO Town sits directly south of Downtown Lansing along Washington Avenue and borders Moores Park to the southwest.',
    customFaqs: [
      {
        q: 'Why are sewage backups common in REO Town basements during downpours?',
        a: 'Heavy rainfall overtaxes municipal combined sewer mains, forcing storm runoff and sanitary waste backward through residential floor drains lacking check valves.',
      },
      {
        q: 'How dangerous is standing sewage in an unfinished REO Town basement?',
        a: 'Raw sewage contains dangerous pathogens including E. coli, parasites, and hepatitis. Contact certified biohazard specialists and avoid touching contaminated materials.',
      },
      {
        q: 'How quickly can emergency extraction units reach REO Town?',
        a: 'Independent restoration contractors maintain mobile units ready for 24/7 dispatch throughout Lansing and Ingham County.',
      },
    ],
  },
  'lansing/downtown': {
    slug: 'downtown',
    city: 'lansing',
    historicEra: 'State capital core containing government office complexes, historic multi-story brick apartment buildings, and modern residential mid-rises.',
    streetsAndLandmarks: 'Michigan State Capitol, Capitol Avenue, Washington Square, and the Grand River waterfront.',
    foundationTypes: 'Deep reinforced concrete basements, sub-grade utility vaults, and concrete foundations connected to central municipal networks.',
    drainageDynamics: 'High percentage of impervious surfaces channels intense stormwater into Lansing BWL and municipal drainage systems, stressing storm intakes.',
    commonSymptoms: 'Vertical riser pipe leaks flooding multiple floors, water pooling in underground storage areas, and sump pump failures.',
    treeAndPlumbingNotes: 'High-density commercial plumbing infrastructure requires specialized diagnostic cameras and acoustic leak detection.',
    adjacentRelationship: 'Downtown Lansing forms the central civic hub, bordered by Old Town to the north, REO Town to the south, Eastside to the east, and Westside to the west.',
    customFaqs: [
      {
        q: 'Who is responsible for water damage in Downtown Lansing residential leases?',
        a: 'Landlords must maintain structural integrity and central plumbing, while tenants should carry renter insurance for personal property and notify management immediately.',
      },
      {
        q: 'What causes sudden pipe ruptures in Downtown multi-story buildings?',
        a: 'High municipal supply pressure, aging valve fittings, and mechanical pump vibration can trigger sudden pressurized pipe joint separations.',
      },
      {
        q: 'How do contractors handle structural drying in Downtown commercial and loft spaces?',
        a: 'Specialists deploy commercial desiccant dehumidifiers, high-capacity air movers, and moisture mapping sensors to dry materials without business interruption.',
      },
    ],
  },
  'lansing/eastside': {
    slug: 'eastside',
    city: 'lansing',
    historicEra: 'Vibrant, densely populated residential community developed between 1900 and 1940, featuring American Foursquares, Craftsman bungalows, and brick homes.',
    streetsAndLandmarks: 'Michigan Avenue corridor connecting to East Lansing, Sparrow Hospital campus, and Foster Community Center.',
    foundationTypes: 'Poured concrete, cinder block, and brick foundations with full subterranean basements and finished living areas.',
    drainageDynamics: 'Intense rainstorms test aging storm sewers along the Michigan Avenue corridor, causing temporary surface ponding and basement hydrostatic pressure.',
    commonSymptoms: 'Floor drain seepage, damp basement carpets, foundation settlement cracks weeping water, and bathroom plumbing leaks.',
    treeAndPlumbingNotes: 'Lush residential tree canopy of mature maples regularly invades aging vitrified clay sewer laterals.',
    adjacentRelationship: 'The Eastside lies directly east of Downtown Lansing, bordering Old Town to the northwest and Groesbeck to the northeast.',
    customFaqs: [
      {
        q: 'Why do Eastside Lansing homes experience frequent sewer lateral clogs?',
        a: 'Mature neighborhood trees seek out moisture in vintage clay sewer pipes, creating dense root masses that snag waste and cause severe backups.',
      },
      {
        q: 'Can water damage near Sparrow Hospital area homes be dried quickly?',
        a: 'Yes. Emergency response teams operate continuously throughout the Eastside, deploying commercial extraction pumps within hours of your call.',
      },
      {
        q: 'How do I know if mold in my Eastside basement requires professional removal?',
        a: 'Mold covering more than 10 square feet, persistent musty odors, or mold resulting from contaminated water require professional containment and remediation.',
      },
    ],
  },
  'lansing/westside': {
    slug: 'westside',
    city: 'lansing',
    historicEra: 'Established, well-preserved historic residential neighborhood directly west of the Capitol, showcasing Victorian, Craftsman, and Colonial homes built from 1890 to 1930.',
    streetsAndLandmarks: 'St. Joseph Street, Saginaw Street corridor, Westside historic district, and St. Casimir area.',
    foundationTypes: 'Concrete block, brick masonry, and poured concrete basements with full subterranean utility layouts.',
    drainageDynamics: 'Natural gentle slope toward the Grand River basin creates steady sub-surface water migration during wet spring months.',
    commonSymptoms: 'Cove joint seepage, efflorescence on block walls, sump pump failure during electrical outages, and aging pipe leaks.',
    treeAndPlumbingNotes: 'Substantial mature tree canopy contributes to clay sewer lateral cracking and joint displacement.',
    adjacentRelationship: 'The Westside sits immediately west of Downtown Lansing and the Capitol, bordering Colonial Village to the southwest.',
    customFaqs: [
      {
        q: 'Why does white powdery efflorescence form on Westside basement walls?',
        a: 'Efflorescence occurs when mineral-rich water seeps through concrete blocks. As the water evaporates into the basement air, crystalline mineral salts remain behind.',
      },
      {
        q: 'How can Westside homeowners prevent basement flooding during power outages?',
        a: 'Installing a high-capacity battery backup sump pump ensures continuous water evacuation even when severe storms knock out electrical power.',
      },
      {
        q: 'Who should I call if a pipe freezes and bursts in the Westside neighborhood?',
        a: 'Shut off the main water valve immediately and call our 24/7 emergency dispatch line for immediate water extraction and structural drying.',
      },
    ],
  },
  'lansing/moores-park': {
    slug: 'moores-park',
    city: 'lansing',
    historicEra: 'Historic south-side riverfront neighborhood centered around scenic Moores Park, developed in the 1910s and 1920s with bungalows and American Foursquares.',
    streetsAndLandmarks: 'Moores River Drive, historic Moores Park and pool, Frances Park, and the Grand River waterway.',
    foundationTypes: 'Concrete block, poured concrete, and vintage brick footings supporting single-family residential framing.',
    drainageDynamics: 'Low-elevation properties along Moores River Drive and the Grand River experience high groundwater tables and storm runoff pooling.',
    commonSymptoms: 'Basement floor seepage during spring snowmelts, sump pump continuous cycling, damp crawlspaces, and sewer line backpressure.',
    treeAndPlumbingNotes: 'Riverbank moisture and dense street trees encourage aggressive root infiltration into residential sewer laterals.',
    adjacentRelationship: 'Moores Park is nestled along the Grand River in southwest Lansing, bordering REO Town to the northeast and Colonial Village to the west.',
    customFaqs: [
      {
        q: 'How does high water in the Grand River affect Moores Park basements?',
        a: 'When river levels rise, neighborhood groundwater tables rise in tandem, exerting intense hydrostatic pressure against basement floors and walls.',
      },
      {
        q: 'Can a continuously running sump pump burn out in Moores Park?',
        a: 'Yes. Sump pump motors operating without pause during high groundwater conditions can overheat. Dual-pump configurations provide essential redundancy.',
      },
      {
        q: 'What should I do if raw sewage backs up into my Moores Park basement?',
        a: 'Evacuate contaminated areas immediately, keep family members away from blackwater, and call our 24/7 hotline for professional biohazard cleanup.',
      },
    ],
  },
  'lansing/groesbeck': {
    slug: 'groesbeck',
    city: 'lansing',
    historicEra: 'Post-war northeast neighborhood developed in the 1950s and 1960s, featuring mid-century brick and frame ranches, split-levels, and manicured yards.',
    streetsAndLandmarks: 'Groesbeck Golf Course, Lake Lansing Road, Wood Street, and Post Oak Elementary area.',
    foundationTypes: 'Poured concrete and concrete block basements with standard rectangular footprints and concrete floor slabs.',
    drainageDynamics: 'Heavy clay soils and flat topography require reliable perimeter drain tiles and sump systems to prevent standing surface water from entering basements.',
    commonSymptoms: 'Sump pump overflow during spring rainstorms, seepage through concrete block mortar joints, damp recreation room carpets, and water heater failures.',
    treeAndPlumbingNotes: 'Post-war copper supply lines and clay laterals are reaching the age where pinhole leaks and joint offsets occur frequently.',
    adjacentRelationship: 'Groesbeck occupies northeast Lansing, bordering the Eastside neighborhood to the southwest and Lake Lansing commercial corridors.',
    customFaqs: [
      {
        q: 'Why are Groesbeck ranches vulnerable to basement water during spring storms?',
        a: 'Impermeable clay soils prevent rapid drainage. Saturated ground surrounding the foundation exerts hydrostatic pressure that pushes water through block joints.',
      },
      {
        q: 'How quickly will mold grow on damp basement carpet in Groesbeck?',
        a: 'Mold spores germinate within 24 to 48 hours in damp cellulose materials. Rapid water extraction and industrial dehumidification prevent widespread colonization.',
      },
      {
        q: 'Are emergency restoration contractors licensed in Ingham County?',
        a: 'Our network connects you with verified independent local contractors who adhere to Michigan building safety and restoration trade standards.',
      },
    ],
  },
  'lansing/colonial-village': {
    slug: 'colonial-village',
    city: 'lansing',
    historicEra: 'Established southwest Lansing neighborhood developed from the 1930s through the 1950s, characterized by Colonial Revival, Cape Cod, and brick ranch homes.',
    streetsAndLandmarks: 'Mt. Hope Avenue, Boston Boulevard, Ingham County fairgrounds area, and Pleasant Grove Road.',
    foundationTypes: 'Poured concrete basements and cinder block walls supporting single-family residential framing.',
    drainageDynamics: 'Dense clay subsoils hold seasonal moisture near foundation footings, creating persistent hydrostatic load during spring snowmelts.',
    commonSymptoms: 'Water entering through floor-wall cove seams, sump pump motor failure, musty basement odors, and pinhole copper line leaks.',
    treeAndPlumbingNotes: 'Sub-slab copper supply lines and original clay laterals are prone to corrosion, soil settlement stresses, and tree root invasion.',
    adjacentRelationship: 'Colonial Village is located in southwest Lansing, bordered by Westside to the north and Moores Park to the east.',
    customFaqs: [
      {
        q: 'What causes water to seep through the floor-wall seam in Colonial Village basements?',
        a: 'The cove joint where the concrete floor meets the block wall is a natural cold joint. Rising groundwater exerts hydrostatic pressure that pushes water through this seam.',
      },
      {
        q: 'How do contractors repair hidden pinhole leaks in Colonial Village supply lines?',
        a: 'Independent plumbers use electronic leak detectors to trace acoustic vibrations from pinhole leaks, allowing precise spot repairs without gutting walls.',
      },
      {
        q: 'Who can I contact for emergency water damage referral in Colonial Village?',
        a: 'Call our 24/7 telephone dispatch line at (877) 422-0329 to connect immediately with a qualified local disaster restoration provider.',
      },
    ],
  },
};

// Combinatorial generator: each neighborhood index gets unique headings, intros, hazards, services, and action steps
function generateCombinatorialNeighborhood(
  n: any,
  city: any,
  detail: NeighborhoodDetail,
  index: number
): string {
  const adjLinks: string[] = [];
  if (Array.isArray(n.adjacent)) {
    for (const adjSlug of n.adjacent) {
      const adjKey = `${n.city}/${adjSlug}`;
      if (validNeighSlugs.has(adjKey)) {
        const adjObj = neighborhoodsData.find((x) => x.city === n.city && x.slug === adjSlug);
        const adjName = adjObj ? adjObj.name : adjSlug;
        adjLinks.push(`- [${adjName} Property Damage & Plumbing](/${n.city}-mi/${adjSlug}/) – Adjacent neighborhood emergency referral.`);
      }
    }
  }

  const nFacts = n.facts.map((f: any) => `- **Local Infrastructure Note:** ${f.value}`).join('\n');

  // 1. Headings (12 variations)
  const h1Options = [
    `Architectural Heritage & Structural Profiles in ${n.name}`,
    `Building Characteristics & Residential Profiles Across ${n.name}`,
    `Structural Foundations & Architectural Context in ${n.name}`,
    `Housing Profiles & Infrastructure Overview for ${n.name}`,
    `Residential Real Estate & Construction Typologies in ${n.name}`,
    `Architectural Anatomy & Construction Periods in ${n.name}`,
    `Neighborhood Housing Anatomy & Building History: ${n.name}`,
    `Structural Form, Materials & Foundation Types in ${n.name}`,
    `Residential Footprints & Property Profiles in ${n.name}`,
    `Housing Stock & Historical Construction Around ${n.name}`,
    `Community Architectural Fabric & Foundation Profiles: ${n.name}`,
    `Building Styles & Sub-Grade Infrastructure in ${n.name}`,
  ];

  const h2Options = [
    `Subsurface Hydrology, Moisture Risks & Foundation Vulnerabilities`,
    `Environmental Moisture, Clay Subsoils & Seasonal Challenges`,
    `Drainage Dynamics, Subsoil Profiles & Moisture Hazards`,
    `Hydrostatic Pressure, Soil Saturation & Seasonal Hazards`,
    `Groundwater Movement, Runoff Vectors & Foundation Hazards`,
    `Soil Permeability, Flood Vulnerabilities & Basement Seepage`,
    `Hydrological Dynamics & Seasonal Water Threats in ${n.name}`,
    `Sub-Surface Water Tables, Soil Compaction & Lateral Stress`,
    `Foundation Hydrostatic Pressure & Watershed Infiltration`,
    `Runoff Vectors, Groundwater Swelling & Drainage Issues`,
    `Moisture Migration Vectors & Subterranean Saturation Risks`,
    `Seasonal Weather Transitions, Runoff & Foundation Integrity`,
  ];

  const h3Options = [
    `Dedicated 24/7 Emergency Dispatch Services for ${n.name}`,
    `Emergency Property Referral Network Available 24/7 in ${n.name}`,
    `24/7 Disaster Referral Network for ${n.name} Properties`,
    `Professional 24/7 Restoration Referral Services for ${n.name}`,
    `Immediate 24/7 Trade Referral Solutions for ${n.name}`,
    `24/7 On-Call Restoration Routing Desk for ${n.name}`,
    `Round-the-Clock Emergency Connection Services in ${n.name}`,
    `Rapid Disaster Referral & Contractor Dispatch in ${n.name}`,
    `24/7 Immediate Restoration Support for ${n.name} Owners`,
    `Direct Emergency Referral Desk Serving ${n.name}`,
    `On-Demand Referral Network for Urgent Property Damage in ${n.name}`,
    `Local Property Restoration Dispatch Options for ${n.name}`,
  ];

  const h4Options = [
    `Immediate Emergency Containment Steps for ${n.name} Residents`,
    `Critical Response Protocol for ${n.name} Homeowners`,
    `First-Hour Containment Guidelines for ${n.name} Residents`,
    `Emergency Action Protocol for ${n.name} Property Emergencies`,
    `Emergency First-Aid Measures for Property Disasters`,
    `Emergency Priority Steps During a Property Crisis`,
    `Crucial Containment Actions for First-Hour Recovery`,
    `Step-by-Step Emergency Response for ${n.name} Occupants`,
    `Decisive Property Safety Actions When Water Strikes`,
    `Immediate Steps to Protect Property and Occupants in ${n.name}`,
    `Safety-First Crisis Management Steps for ${n.name} Residents`,
    `Critical Response Procedures Following Sudden Water Ingress`,
  ];

  const h5Options = [
    `Geographic Connections to Neighboring Districts`,
    `Adjacent Communities & Regional Watershed Transitions`,
    `Surrounding Districts & Neighboring Property Connections`,
    `Bordering Communities & Geographic Watershed Links`,
    `Regional Connectivity & Adjacent Neighborhood Networks`,
    `Surrounding Neighborhoods & Watershed Associations`,
    `Neighboring Community Links & Geographic Overview`,
    `Contiguous Enclaves & Regional Drainage Relationships`,
    `Adjoining Neighborhood Relationships in ${city.name}`,
    `Adjacent Communities & Shared Watershed Dynamics`,
    `Bordering Municipal Zones & Sibling Communities`,
    `Surrounding District Transitions & Local Geography`,
  ];

  const h1 = h1Options[index % 12];
  const h2 = h2Options[(index * 5) % 12];
  const h3 = h3Options[(index * 7) % 12];
  const h4 = h4Options[(index * 11) % 12];
  const h5 = h5Options[(index * 3) % 12];

  // 2. Intros (12 variations)
  const introOpeners = [
    `${n.name} stands as an integral residential enclave within ${city.name}, distinguished by ${detail.historicEra} Neighborhood real estate along ${detail.streetsAndLandmarks} showcases ${detail.foundationTypes} Many of these properties reflect the regional building era of ${city.housing_age.value}`,
    `Located in the heart of ${city.name}, ${n.name} features a rich architectural landscape defined by ${detail.historicEra} Homes situated along ${detail.streetsAndLandmarks} rely on ${detail.foundationTypes} Structural framing throughout this community is representative of ${city.housing_age.value}`,
    `Serving as a prominent residential district of ${city.name}, ${n.name} is widely recognized for ${detail.historicEra} Properties framing ${detail.streetsAndLandmarks} are anchored by ${detail.foundationTypes} Many neighborhood homes were constructed during the era characterized by ${city.housing_age.value}`,
    `${n.name} represents a distinguished residential quarter of ${city.name}, noted for ${detail.historicEra} Real estate across ${detail.streetsAndLandmarks} incorporates ${detail.foundationTypes} Many of these private residences date back to the construction era of ${city.housing_age.value}`,
    `Within the municipal fabric of ${city.name}, ${n.name} is characterized by an enduring architectural legacy defined by ${detail.historicEra} Streetscapes spanning ${detail.streetsAndLandmarks} feature ${detail.foundationTypes} A substantial proportion of these properties align with ${city.housing_age.value}`,
    `Positioned prominently in ${city.name}, ${n.name} exhibits unique structural identities shaped by ${detail.historicEra} Residences established across ${detail.streetsAndLandmarks} depend on ${detail.foundationTypes} Much of the local housing fabric traces to ${city.housing_age.value}`,
    `Among the diverse neighborhoods of ${city.name}, ${n.name} is celebrated for its distinctive period character featuring ${detail.historicEra} Residential parcels bordering ${detail.streetsAndLandmarks} are constructed with ${detail.foundationTypes} Buildings here predominantly reflect ${city.housing_age.value}`,
    `${n.name} forms a historic and architectural anchor in ${city.name}, showcasing fine craftsmanship centered on ${detail.historicEra} Structures lining ${detail.streetsAndLandmarks} are grounded by ${detail.foundationTypes} The prevailing building vintage matches ${city.housing_age.value}`,
    `Characterized by timeless residential charm, ${n.name} in ${city.name} reflects historic development patterns featuring ${detail.historicEra} Building structures throughout ${detail.streetsAndLandmarks} utilize ${detail.foundationTypes} Residential foundations closely mirror the regional development epoch of ${city.housing_age.value}`,
    `An established district with deep roots in ${city.name}, ${n.name} boasts exceptional property variety highlighted by ${detail.historicEra} Estates and homes across ${detail.streetsAndLandmarks} are built over ${detail.foundationTypes} A large percentage of these parcels correspond to ${city.housing_age.value}`,
    `As one of the most recognizable historic sections of ${city.name}, ${n.name} features distinctive domestic styling rooted in ${detail.historicEra} Properties constructed along ${detail.streetsAndLandmarks} are supported by ${detail.foundationTypes} Architectural profiles are indicative of ${city.housing_age.value}`,
    `The established residential avenues of ${n.name} provide a classic cross-section of ${city.name} building history, highlighted by ${detail.historicEra} Homes situated near ${detail.streetsAndLandmarks} depend on ${detail.foundationTypes} Structural assemblies correlate directly with ${city.housing_age.value}`,
  ];

  const introMiddle = [
    `${n.housing_profile.value} Because parcels throughout ${n.name} were developed across shifting eras of municipal expansion, foundation footings and utility laterals display substantial structural variance:`,
    `${n.housing_profile.value} As municipal utility standards developed across ${city.name}, neighborhood properties integrated varied plumbing assemblies and sub-slab configurations:`,
    `${n.housing_profile.value} Due to varied phases of residential subdivision development in ${city.name}, foundation footings, crawlspace vents, and plumbing stacks reflect diverse construction methods:`,
    `${n.housing_profile.value} As building practices evolved throughout ${city.name}, residential parcels adopted various foundation waterproofing methods and interior piping configurations:`,
    `${n.housing_profile.value} Across multiple decades of residential platting in ${city.name}, builders introduced changing mechanical piping layouts and basement drainage standards:`,
    `${n.housing_profile.value} Through successive eras of local building code changes in ${city.name}, domestic water risers and sub-surface footings reflect evolving engineering practices:`,
    `${n.housing_profile.value} Given the chronological progression of home construction across ${city.name}, foundation moisture barriers and private sewer connections differ notably:`,
    `${n.housing_profile.value} The evolutionary growth of residential real estate in ${city.name} resulted in distinct sub-grade masonry systems and domestic plumbing materials:`,
    `${n.housing_profile.value} Over the decades of regional expansion in ${city.name}, structural masonry footings and supply distribution channels were engineered under diverse standards:`,
    `${n.housing_profile.value} Because infrastructure guidelines modernized progressively throughout ${city.name}, home foundations and private water services incorporate varying materials:`,
    `${n.housing_profile.value} Across sequential construction cycles in ${city.name}, neighborhood builders deployed differing cellar waterproofing techniques and sanitary plumbing stacks:`,
    `${n.housing_profile.value} The historical sequence of residential platting in ${city.name} created localized variations in foundation damp-proofing and underground lateral alignments:`,
  ];

  const intro = `${introOpeners[index % 12]}\n\n${introMiddle[index % 12]}\n\n${nFacts}\n- **Municipal Water Service:** Supplied under pressure by the ${city.water_utility.value}.\n- **Collection Infrastructure:** Discharged into the regional ${city.sewer_system.value}.`;

  // 3. Hazards (12 variations)
  const hazardIntros = [
    `Subterranean water dynamics and dense local subsoils subject structures in ${n.name} to persistent hydro-mechanical stress. ${detail.drainageDynamics} Extreme weather episodes—including the landmark ${city.flood_events[0].value}—produce swift groundwater accumulation surrounding subterranean footings.`,
    `Natural terrain slopes and local soil compositions make ${n.name} structures vulnerable to seasonal hydrostatic accumulation. ${detail.drainageDynamics} Major historic storms—particularly the severe ${city.flood_events[0].value}—test the limits of private foundation drains and municipal mains.`,
    `Groundwater movement and regional geology place noticeable hydrostatic pressure on ${n.name} basements. ${detail.drainageDynamics} Intense convective cloudbursts—such as the recorded ${city.flood_events[0].value}—saturate backfill soils and push water through exterior foundation seams.`,
    `Local topography and regional soil conditions subject ${n.name} properties to noticeable moisture strain. ${detail.drainageDynamics} Regional weather crises—including the documented ${city.flood_events[0].value}—frequently push groundwater levels above basement floor slabs.`,
    `Seasonal hydro-geological shifts and low-permeability soils generate substantial hydrostatic loading against ${n.name} foundations. ${detail.drainageDynamics} Noteworthy regional precipitation events—such as the intense ${city.flood_events[0].value}—trigger rapid sub-surface water pooling.`,
    `Subsurface water tables and regional soil profiles create persistent moisture challenges across ${n.name} real estate. ${detail.drainageDynamics} Catastrophic storm systems—most notably the historic ${city.flood_events[0].value}—overwhelm perimeter footing drains.`,
    `Hydrodynamic pressure cycles coupled with local geological characteristics place significant seasonal strain on ${n.name} properties. ${detail.drainageDynamics} Heavy seasonal downpours—including the severe ${city.flood_events[0].value}—elevate groundwater tables rapidly.`,
    `Topographical elevation changes and clay-heavy subsoils concentrate surface water runoff toward residential foundations in ${n.name}. ${detail.drainageDynamics} Major recorded rainstorms—exemplified by the ${city.flood_events[0].value}—challenge residential drainage capacity.`,
    `Localized groundwater elevation and impermeable clay deposits exert severe lateral hydrostatic forces across ${n.name}. ${detail.drainageDynamics} Landmark storm emergencies—such as the devastating ${city.flood_events[0].value}—cause sudden foundation cove weeping.`,
    `Surface runoff dynamics and seasonal freeze-thaw cycles subject residential masonry throughout ${n.name} to structural water stress. ${detail.drainageDynamics} Regional flooding benchmarks—specifically the recorded ${city.flood_events[0].value}—highlight private drainage vulnerabilities.`,
    `Hydrological forces interacting with compacted urban subsoils create heightened basement moisture risks in ${n.name}. ${detail.drainageDynamics} Significant meteorological events—such as the historic ${city.flood_events[0].value}—test foundation waterproofing limits.`,
    `Low-percolation subsoils and natural watershed slopes guide substantial storm runoff toward low-elevation foundations in ${n.name}. ${detail.drainageDynamics} Documented regional storm emergencies—especially the ${city.flood_events[0].value}—lead to basement water intrusions.`,
  ];

  const hazardBullets = [
    `- **Primary Physical Indicators:** ${detail.commonSymptoms}\n- **Sub-Grade Lateral Integrity:** ${detail.treeAndPlumbingNotes}\n- **Fungal Colony Escalation:** Damp, enclosed cellars lacking continuous dehumidification allow fungal spores to germinate across drywall paper and base framing within 24 to 48 hours.`,
    `- **Reported Symptom Patterns:** ${detail.commonSymptoms}\n- **Underground Lateral Vulnerabilities:** ${detail.treeAndPlumbingNotes}\n- **Air Quality & Microbial Risks:** Without rapid mechanical drying, moisture trapped behind wood baseboards and carpet pads triggers aggressive mold blooms within 24 to 48 hours.`,
    `- **Observed Water Symptoms:** ${detail.commonSymptoms}\n- **Sub-Grade Lateral Concerns:** ${detail.treeAndPlumbingNotes}\n- **Hidden Mold Growth:** When moisture wicks into drywall or insulation, microbial colonies multiply inside wall cavities within 24 to 48 hours, creating persistent indoor odors.`,
    `- **Frequent Incident Patterns:** ${detail.commonSymptoms}\n- **Private Lateral Complications:** ${detail.treeAndPlumbingNotes}\n- **Microbial Colonization Risks:** Trapped moisture in cellulose materials triggers rapid fungal proliferation, establishing viable mold colonies within 24 to 48 hours of initial water contact.`,
    `- **Noted Infiltration Symptoms:** ${detail.commonSymptoms}\n- **Sub-Surface Lateral Conditions:** ${detail.treeAndPlumbingNotes}\n- **Biohazard & Mold Hazards:** Elevated cellar relative humidity above 60% fosters microbial spores on baseboards and structural subflooring in as little as 24 to 48 hours.`,
    `- **Common Distress Indicators:** ${detail.commonSymptoms}\n- **Drainage Stack Vulnerabilities:** ${detail.treeAndPlumbingNotes}\n- **Fungal Spore Amplification:** Trapped water within wall framing creates ideal incubation environments for mold colonies to proliferate within 24 to 48 hours.`,
    `- **Frequent Moisture Indicators:** ${detail.commonSymptoms}\n- **Underground Pipe Stress:** ${detail.treeAndPlumbingNotes}\n- **Microbial Infiltration:** Unchecked moisture inside enclosed crawlspaces causes active fungal colonies to develop on structural joists within 24 to 48 hours.`,
    `- **Documented Inundation Clues:** ${detail.commonSymptoms}\n- **Private Lateral Challenges:** ${detail.treeAndPlumbingNotes}\n- **Secondary Air Quality Hazards:** Hidden moisture pockets behind drywall partitions foster aggressive fungal colonies within 24 to 48 hours.`,
    `- **Observable Property Symptoms:** ${detail.commonSymptoms}\n- **Subterranean Lateral Wear:** ${detail.treeAndPlumbingNotes}\n- **Airborne Microbial Threats:** Elevated humidity within poorly ventilated cellars allows fungal mycelia to anchor to subflooring and studs within 24 to 48 hours.`,
    `- **Identified Damage Signals:** ${detail.commonSymptoms}\n- **Under-Slab Pipe Age:** ${detail.treeAndPlumbingNotes}\n- **Structural Spore Outbreaks:** Saturated cellulose framing combined with ambient warmth provides fertile ground for mold growth within 24 to 48 hours.`,
    `- **Characteristic Warning Signs:** ${detail.commonSymptoms}\n- **Lateral Joint Displacements:** ${detail.treeAndPlumbingNotes}\n- **Microbial Degradation:** Uncontrolled moisture wicking through perimeter masonry leads to mold colonization across basement studs within 24 to 48 hours.`,
    `- **Recognized Trouble Signs:** ${detail.commonSymptoms}\n- **Sewer Connection Integrity:** ${detail.treeAndPlumbingNotes}\n- **Fungal Contamination Vectors:** High moisture levels retained in damp wall assemblies trigger rapid fungal germination within 24 to 48 hours.`,
  ];

  const hazards = `${hazardIntros[index % 12]}\n\nProperty owners and occupants frequently observe specific warning indicators:\n\n${hazardBullets[index % 12]}`;

  // 4. Services (12 variations)
  const serviceIntros = [
    `When severe water penetration or broken pipes strike in ${n.name}, rapid intervention curtails secondary losses. Michigan Water Damage Referral Network connects owners directly with independent local trade specialists:`,
    `Immediate containment halts catastrophic water damage. Michigan Water Damage Referral Network coordinates 24/7 connections between ${n.name} residents and independent trade contractors:`,
    `Fast professional action limits structural decay. Michigan Water Damage Referral Network routes emergency calls 24/7 to independent certified contractors across ${city.name}:`,
    `Quick structural stabilization limits long-term property impairment. Michigan Water Damage Referral Network pairs ${n.name} property owners with licensed independent restoration providers 24/7:`,
    `Rapid emergency dispatch halts escalating property degradation. Michigan Water Damage Referral Network provides uninterrupted 24/7 routing to vetted independent restoration experts:`,
    `Timely emergency intervention prevents progressive structural weakening. Michigan Water Damage Referral Network facilitates immediate 24/7 connections with qualified local contractors:`,
    `Expedited emergency triage prevents cascading building damage in ${n.name}. Michigan Water Damage Referral Network maintains round-the-clock telephone dispatch to independent professionals:`,
    `Immediate damage stabilization preserves architectural value across ${n.name}. Michigan Water Damage Referral Network connects local owners with independent licensed restoration firms 24/7:`,
    `Urgent disaster containment protects residential investments in ${n.name}. Michigan Water Damage Referral Network provides immediate 24/7 referral connections to local trade contractors:`,
    `Decisive physical mitigation halts compound structural deterioration in ${n.name}. Michigan Water Damage Referral Network operates continuous 24/7 telephone routing to local contractors:`,
    `Swift professional containment reduces remediation expenses in ${n.name}. Michigan Water Damage Referral Network links property owners with independent restoration contractors 24/7:`,
    `Immediate structural extraction protects living spaces in ${n.name}. Michigan Water Damage Referral Network delivers 24/7 phone routing to licensed independent service technicians:`,
  ];

  const serviceBullets = [
    `- **Emergency Extraction & Drying:** High-volume submersible pumps and industrial desiccant driers deployed through [${city.name} Water Damage Restoration](/${city.slug}-mi/water-damage/) stabilize flooded premises.\n- **Certified Microbial Remediation:** Safe physical containment and HEPA-filtered vacuuming delivered by [${city.name} Mold Remediation](/${city.slug}-mi/mold-remediation/) eliminate indoor air hazards.\n- **Soot Removal & Structural Cleaning:** Thermal deodorization and acid soot encapsulation executed via [${city.name} Fire Damage Restoration](/${city.slug}-mi/fire-damage/) protect smoke-damaged framing.\n- **Sanitary Decontamination:** Dangerous municipal sewer surcharges require hospital-grade disinfection through [${city.name} Biohazard & Sewage Cleanup](/${city.slug}-mi/biohazard-cleanup/).\n- **Diagnostic Leak Pinpointing:** Underground pipe fractures beneath driveways or concrete require licensed [${city.name} Emergency Plumbing Services](/${city.slug}-mi/plumbing/).`,
    `- **Floodwater Evacuation:** Urgent basement water pumping and cavity drying are executed through [${city.name} Water Damage Restoration](/${city.slug}-mi/water-damage/).\n- **Indoor Environmental Remediation:** HEPA air scrubbing and safe surface treatment are managed via [${city.name} Mold Remediation](/${city.slug}-mi/mold-remediation/).\n- **Smoke Residue & Fire Cleanout:** Soot mitigation and structural deodorization are handled by [${city.name} Fire Damage Restoration](/${city.slug}-mi/fire-damage/).\n- **Biohazard Blackwater Sanitation:** Category 3 sewer backflow cleanout and chemical disinfection are provided by [${city.name} Biohazard & Sewage Cleanup](/${city.slug}-mi/biohazard-cleanup/).\n- **Sub-Surface Plumbing Diagnostics:** Acoustic listening equipment and sewer video scoping are offered through [${city.name} Emergency Plumbing Services](/${city.slug}-mi/plumbing/).`,
    `- **Rapid Water Removal:** Deploying commercial truck-mounted extractors and LGR dehumidifiers via [${city.name} Water Damage Restoration](/${city.slug}-mi/water-damage/) protects floor framing.\n- **Mold Eradication & Air Scrubbing:** Controlled negative-pressure containment and antimicrobial cleaning through [${city.name} Mold Remediation](/${city.slug}-mi/mold-remediation/) preserve indoor air quality.\n- **Soot Mitigation & Fire Recovery:** Removing corrosive soot and eliminating protein smoke odors with [${city.name} Fire Damage Restoration](/${city.slug}-mi/fire-damage/) prevents lasting stains.\n- **Biohazard & Blackwater Sanitization:** Neutralizing toxic sewer backups and bacterial contaminants through [${city.name} Biohazard & Sewage Cleanup](/${city.slug}-mi/biohazard-cleanup/) safeguards health.\n- **Emergency Plumbing & Leak Mapping:** Resolving hidden pipe bursts and blocked laterals using [${city.name} Emergency Plumbing Services](/${city.slug}-mi/plumbing/) restores sanitary flow.`,
    `- **High-Velocity Water Extraction:** Commercial drying equipment and deep suction extraction provided by [${city.name} Water Damage Restoration](/${city.slug}-mi/water-damage/) protect structural lumber.\n- **Targeted Mold Eradication:** Safe containment barriers and HEPA filtration through [${city.name} Mold Remediation](/${city.slug}-mi/mold-remediation/) eliminate microbial reservoirs.\n- **Fire Residue & Soot Mitigation:** Thermal deodorization and acid soot removal via [${city.name} Fire Damage Restoration](/${city.slug}-mi/fire-damage/) restore smoke-damaged rooms.\n- **Blackwater Sanitation Protocol:** Complete bacterial neutralization following sewer backups handled through [${city.name} Biohazard & Sewage Cleanup](/${city.slug}-mi/biohazard-cleanup/).\n- **Sewer Lateral & Pipe Diagnostics:** Electronic pipe locating and video inspections through [${city.name} Emergency Plumbing Services](/${city.slug}-mi/plumbing/) clear stubborn blockages.`,
    `- **Structural Moisture Control:** Rapid industrial water removal and structural drying through [${city.name} Water Damage Restoration](/${city.slug}-mi/water-damage/) halt rot.\n- **Microbial Air Quality Restoration:** Isolation containment and spore removal managed via [${city.name} Mold Remediation](/${city.slug}-mi/mold-remediation/) safeguard respiratory health.\n- **Post-Fire Deodorization:** Surface thermal chemical cleaning and smoke washing executed with [${city.name} Fire Damage Restoration](/${city.slug}-mi/fire-damage/) neutralize acidity.\n- **Pathogenic Waste Decontamination:** Complete eradication of Category 3 blackwater pathogens delivered by [${city.name} Biohazard & Sewage Cleanup](/${city.slug}-mi/biohazard-cleanup/).\n- **Concealed Leak Isolation:** Pinpointing non-visible pressurized supply fissures utilizing [${city.name} Emergency Plumbing Services](/${city.slug}-mi/plumbing/) preserves building slabs.`,
    `- **Deep Moisture Evacuation:** Industrial pumping and controlled chamber drying using [${city.name} Water Damage Restoration](/${city.slug}-mi/water-damage/) stabilize soaked substructures.\n- **Certified Fungal Remediation:** Environmental safety enclosures and HEPA sanitization provided by [${city.name} Mold Remediation](/${city.slug}-mi/mold-remediation/) clear air passages.\n- **Fire Damage Mitigation:** Removal of volatile soot particles and acid smoke washing conducted through [${city.name} Fire Damage Restoration](/${city.slug}-mi/fire-damage/).\n- **Hazardous Effluent Neutralization:** Deep biohazard sanitization and waste extraction managed by [${city.name} Biohazard & Sewage Cleanup](/${city.slug}-mi/biohazard-cleanup/).\n- **Sewer Line Unclogging & Repair:** Clearing root intrusions and repairing cracked laterals via [${city.name} Emergency Plumbing Services](/${city.slug}-mi/plumbing/).`,
    `- **Structural Drying Procedures:** Industrial suction extraction and cavity dehumidification through [${city.name} Water Damage Restoration](/${city.slug}-mi/water-damage/) prevent dry rot.\n- **Fungal Hazard Eradication:** Safe barrier isolation and antimicrobial fogging via [${city.name} Mold Remediation](/${city.slug}-mi/mold-remediation/) cleanse building materials.\n- **Thermal Smoke Neutralization:** Acid soot washing and hydroxyl deodorization with [${city.name} Fire Damage Restoration](/${city.slug}-mi/fire-damage/) eliminate lingering odors.\n- **Blackwater Containment:** Extraction of unsanitary sewer overflows and surface disinfection by [${city.name} Biohazard & Sewage Cleanup](/${city.slug}-mi/biohazard-cleanup/).\n- **Pipeline Diagnostics:** Non-invasive acoustic line tracing and hydro-jetting with [${city.name} Emergency Plumbing Services](/${city.slug}-mi/plumbing/) clear lateral lines.`,
    `- **Targeted Water Extraction:** High-capacity pumps and structural drying systems via [${city.name} Water Damage Restoration](/${city.slug}-mi/water-damage/) protect masonry.\n- **Microbial Barrier Systems:** Complete containment zones and negative air filtration through [${city.name} Mold Remediation](/${city.slug}-mi/mold-remediation/) purify air.\n- **Structural Soot Decontamination:** Specialized chemical sponging and air scrubbing with [${city.name} Fire Damage Restoration](/${city.slug}-mi/fire-damage/) restore interior finishes.\n- **Pathogen Neutralization:** Thorough extraction and sanitation of blackwater contamination managed by [${city.name} Biohazard & Sewage Cleanup](/${city.slug}-mi/biohazard-cleanup/).\n- **Acoustic Leak Detection:** Video camera line inspections and supply line repairs through [${city.name} Emergency Plumbing Services](/${city.slug}-mi/plumbing/).`,
    `- **Moisture Extraction & Stabilization:** Deploying low-grain dehumidifiers and axial fans with [${city.name} Water Damage Restoration](/${city.slug}-mi/water-damage/) safeguards floorings.\n- **Microbial Inspection & Cleanup:** Safe physical removal of active colonies and HEPA scrubbing via [${city.name} Mold Remediation](/${city.slug}-mi/mold-remediation/).\n- **Soot & Smoke Remediation:** Neutralizing acidic soot deposits and smoke films through [${city.name} Fire Damage Restoration](/${city.slug}-mi/fire-damage/).\n- **Hazardous Sewage Removal:** Full biological decontamination of toilet and drain overflows using [${city.name} Biohazard & Sewage Cleanup](/${city.slug}-mi/biohazard-cleanup/).\n- **Emergency Lateral Clearing:** Clearing root masses and repairing broken sewer piping through [${city.name} Emergency Plumbing Services](/${city.slug}-mi/plumbing/).`,
    `- **Comprehensive Water Evacuation:** Fast-acting submersible pumping and moisture mapping with [${city.name} Water Damage Restoration](/${city.slug}-mi/water-damage/) preserve joists.\n- **Airborne Spore Mitigation:** Constructing negative-pressure zones and applying botanicals via [${city.name} Mold Remediation](/${city.slug}-mi/mold-remediation/).\n- **Thermal Smoke Restoration:** Detailed structural soot washing and deodorization handled by [${city.name} Fire Damage Restoration](/${city.slug}-mi/fire-damage/).\n- **Category 3 Waste Decontamination:** Complete sanitization and disposal of biohazardous floodwater by [${city.name} Biohazard & Sewage Cleanup](/${city.slug}-mi/biohazard-cleanup/).\n- **Slab Leak Pinpointing:** Electronic listening devices and pressurized line testing through [${city.name} Emergency Plumbing Services](/${city.slug}-mi/plumbing/).`,
    `- **Critical Moisture Extraction:** Powerful extraction units and controlled heat drying via [${city.name} Water Damage Restoration](/${city.slug}-mi/water-damage/) protect foundations.\n- **Mold Colony Abatement:** HEPA vacuuming and eco-friendly fungicide applications through [${city.name} Mold Remediation](/${city.slug}-mi/mold-remediation/).\n- **Structural Fire Washing:** Thermal deodorization and soot sealants applied with [${city.name} Fire Damage Restoration](/${city.slug}-mi/fire-damage/) prevent staining.\n- **Biological Wastewater Sanitizing:** Complete antimicrobial sanitization of flooded lower levels through [${city.name} Biohazard & Sewage Cleanup](/${city.slug}-mi/biohazard-cleanup/).\n- **Drain & Supply Restoration:** High-pressure jetting and burst pipe repairs executed by [${city.name} Emergency Plumbing Services](/${city.slug}-mi/plumbing/).`,
    `- **Priority Water Pumping:** Rapid removal of standing water and structural cavity drying via [${city.name} Water Damage Restoration](/${city.slug}-mi/water-damage/).\n- **Certified Fungal Eradication:** Complete containment and airborne spore extraction delivered through [${city.name} Mold Remediation](/${city.slug}-mi/mold-remediation/).\n- **Fire Residue Cleaning:** Soot removal and smoke odor neutralization completed via [${city.name} Fire Damage Restoration](/${city.slug}-mi/fire-damage/).\n- **Sewer Overflow Cleanout:** Sanitizing and deodorizing Category 3 blackwater backups with [${city.name} Biohazard & Sewage Cleanup](/${city.slug}-mi/biohazard-cleanup/).\n- **Emergency Pipe Interventions:** Precision electronic leak detection and lateral clearing through [${city.name} Emergency Plumbing Services](/${city.slug}-mi/plumbing/).`,
  ];

  const services = `${serviceIntros[index % 12]}\n\n${serviceBullets[index % 12]}`;

  // 5. Action Steps (12 variations)
  const actionStepLists = [
    `1. **Verify Electrical Isolation:** Never enter standing water near basement electrical breakers or submerged wiring. Shut off power from an upper-level disconnect or call your electric utility before stepping onto wet concrete.\n2. **Close the Main Water Valve:** Locate your main domestic shutoff valve—generally mounted near where the municipal line from ${city.water_utility.value} penetrates the basement foundation wall—and rotate it fully clockwise.\n3. **Isolate Damp Air Cavities:** Shut interior hallway and basement doors to prevent elevated vapor and airborne mold spores from migrating into finished upper living rooms.\n4. **Call Emergency Referral Dispatch:** Call **(877) 422-0329** for 24/7 connection to an independent local restoration team servicing ${n.name}. For urgent plumbing inspections, visit our [${city.name} Plumbing Hub](/${city.slug}-mi/plumbing/).`,
    `1. **Avoid Submerged Electrical Hazards:** Do not step into flooded basements or rooms where electrical wiring or outlets are submerged. Cut electrical power from a safe upper-floor breaker box.\n2. **Stop Inflowing Water:** Turn off the main supply valve where municipal service piping from ${city.water_utility.value} enters the home. Keep the valve closed until a contractor inspects the pipework.\n3. **Prevent Odor & Spore Migration:** Block off heating vents and shut basement entry doors to prevent contaminated damp air from spreading into upper bedrooms.\n4. **Initiate Contractor Dispatch:** Call **(877) 422-0329** to route your call immediately to an independent restoration contractor serving ${n.name}. For drain augering or pipe fixes, check our [${city.name} Plumbing Directory](/${city.slug}-mi/plumbing/).`,
    `1. **De-Energize Wet Areas:** If standing water reaches electrical appliances or baseboard outlets, turn off power at the main electrical panel from a dry location.\n2. **Isolate the Inflow:** Shut off the incoming water supply at the main entrance valve connected to ${city.water_utility.value}. Turn the valve handwheel or lever until water flow ceases.\n3. **Contain Contaminated Air:** Keep basement access doors closed to stop humid air, sewer gases, and airborne fungal spores from traveling into upper living quarters.\n4. **Connect with Dispatch:** Call **(877) 422-0329** to connect directly with an independent damage restoration specialist servicing ${n.name}. For sewer cleaning and valve rebuilds, see our [${city.name} Plumbing Hub](/${city.slug}-mi/plumbing/).`,
    `1. **Cut Electrical Circuits:** Never step into standing basement water if cords or outlets are submerged. Shut off power at the main electrical panel while standing on dry flooring.\n2. **Close the Domestic Water Supply:** Turn off the main water shutoff valve near where municipal piping from ${city.water_utility.value} enters the basement to stop active leaks.\n3. **Seal Unaffected Rooms:** Keep interior doors closed to prevent moisture vapor, mold spores, and sewer fumes from migrating into upper residential living areas.\n4. **Call Emergency Referral Support:** Call **(877) 422-0329** for 24/7 connection to an independent restoration contractor serving ${n.name}. For dedicated plumbing emergencies, consult our [${city.name} Plumbing Hub](/${city.slug}-mi/plumbing/).`,
    `1. **Eliminate Shock Danger:** Avoid contacting wet flooring if submerged cords or fixtures are active. De-energize relevant branch circuits at the master panel before inspection.\n2. **Secure the Service Stop:** Close the master interior water valve near the foundation wall where municipal piping from ${city.water_utility.value} enters.\n3. **Isolate Contaminated Zones:** Close interior connecting doorways to prevent high humidity and fungal spores from infiltrating upper living levels.\n4. **Activate Referral Dispatch:** Dial **(877) 422-0329** for immediate 24/7 access to independent restoration professionals in ${n.name}. For pipe repairs, refer to our [${city.name} Plumbing Directory](/${city.slug}-mi/plumbing/).`,
    `1. **Check Power Safety First:** Do not walk across saturated floors near low-lying electrical boxes. Disconnect main power at the central distribution panel if safe.\n2. **Halt Main Water Volume:** Locate and tighten the primary building shutoff valve near where water from ${city.water_utility.value} enters the cellar.\n3. **Prevent Airflow Contamination:** Close basement stair doors and cover cold air returns to stop sewer smells and spores from migrating upstairs.\n4. **Reach Out to Referral Dispatch:** Call **(877) 422-0329** to reach local independent damage restoration providers 24/7. For licensed plumbers, visit our [${city.name} Plumbing Resource](/${city.slug}-mi/plumbing/).`,
    `1. **Prevent Electrocution Risks:** Disconnect electricity to affected rooms from an upper dry distribution box before touching standing water or wet baseboards.\n2. **Rotate Master Valve Closed:** Shut the primary water stop valve situated along the basement exterior wall where supply lines enter from ${city.water_utility.value}.\n3. **Block Vapor Distribution:** Keep passageway doors closed to contain airborne moisture, bacterial aerosols, and mold spores inside the affected space.\n4. **Call 24/7 Dispatch Desk:** Contact **(877) 422-0329** to dispatch an independent local restoration team to ${n.name}. For drain augering and leaks, view our [${city.name} Plumbing Page](/${city.slug}-mi/plumbing/).`,
    `1. **Isolate Power Feeds:** Switch off electrical power serving flooded rooms at the main breaker box prior to entering any area with pooled moisture.\n2. **Shut Down Inflow Lines:** Close the incoming main shutoff valve connected to ${city.water_utility.value} to stop pressurized domestic pipe leaks.\n3. **Enclose Affected Chambers:** Shut access doors to prevent rising humidity, damp odors, and airborne fungal particles from moving into furnished spaces.\n4. **Contact 24/7 Emergency Line:** Phone **(877) 422-0329** for rapid connection with an independent restoration specialist in ${n.name}. For plumbing clogs, see our [${city.name} Plumbing Hub](/${city.slug}-mi/plumbing/).`,
    `1. **Secure Electrical Controls:** Power down active basement electrical circuits at the main panel from a dry vantage point before entering damp areas.\n2. **Tighten Main Supply Cock:** Locate your incoming service stop valve connected to ${city.water_utility.value} and rotate clockwise to halt pressure.\n3. **Barrier Damaged Areas:** Shut cellar access doors to prevent migrating humidity and airborne microbial contaminants from entering upstairs bedrooms.\n4. **Engage Referral Hotline:** Dial **(877) 422-0329** for 24/7 connection with independent restoration specialists in ${n.name}. For plumbing issues, review our [${city.name} Plumbing Guide](/${city.slug}-mi/plumbing/).`,
    `1. **Prioritize Circuit Safety:** Do not walk into standing water where wiring is submerged. Switch off power at the main circuit breaker box.\n2. **Cut Off Domestic Inflow:** Fully turn off the main water shutoff valve near where municipal water from ${city.water_utility.value} enters the basement.\n3. **Isolate Airborne Hazards:** Close all interior doors connecting to wet areas to keep sewer odors and fungal spores out of living quarters.\n4. **Call 24/7 Dispatch Service:** Call **(877) 422-0329** to reach an independent restoration contractor servicing ${n.name}. For leak fixes, visit our [${city.name} Plumbing Hub](/${city.slug}-mi/plumbing/).`,
    `1. **Deactivate Electrical Panels:** Disconnect electrical feeds to lower-level areas from an upper breaker before touching pooled floodwater.\n2. **Halt Main Water Flow:** Close the main interior gate or ball valve near where water from ${city.water_utility.value} enters through the foundation.\n3. **Contain Moisture Spores:** Keep stairway doors shut tight to stop moisture vapor and musty smells from circulating through heating vents.\n4. **Dispatch Emergency Support:** Telephone **(877) 422-0329** for 24/7 routing to an independent restoration contractor in ${n.name}. For plumbing needs, see our [${city.name} Plumbing Page](/${city.slug}-mi/plumbing/).`,
    `1. **Ensure Electrical Protection:** Shut down main or branch electrical breakers serving water-damaged rooms before stepping on damp subfloors.\n2. **Stop Incoming Pressure:** Rotate the main water shutoff handle clockwise until domestic flow from ${city.water_utility.value} completely stops.\n3. **Seal Living Areas:** Close doors separating wet lower levels from upper bedrooms to block airborne moisture and sewer gases.\n4. **Contact 24/7 Routing Line:** Phone **(877) 422-0329** to connect immediately with a qualified restoration contractor in ${n.name}. For drain line snaking, consult our [${city.name} Plumbing Hub](/${city.slug}-mi/plumbing/).`,
  ];

  const permitNotes = [
    `All extensive structural framing rebuilds and sewer excavation projects in ${n.name} require building permits from the ${city.permit_office.value}.`,
    `Permits for sewer lateral repairs, structural wall modifications, and major electrical restorations in ${n.name} are overseen by the ${city.permit_office.value}.`,
    `Trade permits for subterranean sewer excavation, structural reframing, and electrical rewiring in ${n.name} are granted through the ${city.permit_office.value}.`,
    `Major structural repairs, panel replacements, and underground lateral replacements in ${n.name} must comply with building codes administered by the ${city.permit_office.value}.`,
    `Municipal trade permits covering structural framing, panel rewiring, and sewer excavation in ${n.name} must be pulled through the ${city.permit_office.value}.`,
    `Required permits for structural repairs, private sewer trenching, and service upgrades in ${n.name} are administered by the ${city.permit_office.value}.`,
    `All permanent plumbing alterations, sewer trenching, and structural repairs in ${n.name} must adhere to safety codes governed by the ${city.permit_office.value}.`,
    `Excavation for private sewer lateral lines and structural header rebuilds in ${n.name} require official inspection by the ${city.permit_office.value}.`,
    `Official trade permits for sewer lateral replacements and major structural restorations in ${n.name} are managed by the ${city.permit_office.value}.`,
    `Structural reframing and underground sewer repairs conducted within ${n.name} must be inspected and permitted through the ${city.permit_office.value}.`,
    `Homeowners and contractors must pull required trade permits for structural work and sewer lateral repairs through the ${city.permit_office.value}.`,
    `Permitting for extensive sewer lateral excavation and structural restoration across ${n.name} is handled directly by the ${city.permit_office.value}.`,
  ];

  const steps = `${actionStepLists[index % 12]}\n\n${permitNotes[index % 12]}`;

  return `## ${h1}

${intro}

---

## ${h2}

${hazards}

---

## ${h3}

${services}

---

## ${h4}

${steps}

---

## ${h5}

${detail.adjacentRelationship} Moisture migration patterns and sewer demands frequently connect with adjacent neighborhoods:

${adjLinks.length > 0 ? adjLinks.join('\n') : `- [${city.name} Citywide Emergency Overview](/${city.slug}-mi/) – Comprehensive municipal guide.`}

---

## Frequently Asked Questions for ${n.name} Property Owners

${detail.customFaqs.map((faq) => `### ${faq.q}\n\n${faq.a}`).join('\n\n')}
`;
}

let count = 0;
// Track index per city so neighboring parcels alternate combinatorial options
const cityIndex: Record<string, number> = {};

for (const n of neighborhoodsData) {
  const city = citiesData.find((c) => c.slug === n.city);
  if (!city) continue;

  const key = `${n.city}/${n.slug}`;
  const detail = neighborhoodDetails[key];
  if (!detail) {
    console.error(`Missing neighborhood detail for ${key}`);
    continue;
  }

  if (cityIndex[n.city] === undefined) cityIndex[n.city] = 0;
  const localIndex = cityIndex[n.city];
  cityIndex[n.city]++;

  const filename = `${n.city}--${n.slug}.mdx`;
  const filepath = path.join(targetDir, filename);

  const content = generateCombinatorialNeighborhood(n, city, detail, localIndex);

  fs.writeFileSync(filepath, content.trim() + '\n', 'utf8');
  count++;
}

console.log(`Successfully generated ${count} neighborhood MDX files across full combinatorial variations in ${targetDir}`);
