/**
 * Hyperlocal Sierra at Skyeview / Skye Canyon facts researched via Parallel search
 * (session sierra-skyeview-hyperlocal, Nov 18, 2026). Prices and market stats move —
 * treat every figure as as-of the cited date and confirm before client advice.
 */

export const HYPERLOCAL_RESEARCH_AS_OF = "2026-11-18";

export const HYPERLOCAL_SOURCES = {
  centurySierra:
    "https://www.centurycommunities.com/find-your-new-home/nevada/las-vegas-metro/las-vegas/skye-canyon/skyeview---sierra",
  centurySkyeCanyon:
    "https://www.centurycommunities.com/find-your-new-home/nevada/las-vegas-metro/las-vegas/skye-canyon",
  skyeCanyonFacts: "https://skyecanyon.com/facts",
  skyeCanyonAmenities: "https://skyecanyon.com/amenities",
  skyeCanyonSierra: "https://skyecanyon.com/communities/sierra-at-skyeview",
  marketGuide2026:
    "https://www.nevadarealestategroup.com/blog/skye-canyon-northwest-las-vegas-master-plan-buyers-guide-2026/",
  vipSkyeCanyon: "https://www.viphomes.vegas/skye-canyon",
} as const;

/** Community & location (builder + master-plan facts). */
export const COMMUNITY_FACTS = {
  name: "Sierra at Skyeview",
  masterPlan: "Skye Canyon",
  builder: "Century Communities",
  zip: "89166",
  city: "Las Vegas",
  region: "Northwest Las Vegas",
  salesAddress: "8925 Vanhoy Creek St., Las Vegas, NV 89166",
  masterPlanAddress: "10111 W. Skye Canyon Park Drive, Las Vegas, NV 89166",
  highwayAccess: "U.S. Highway 95 and Skye Canyon Park Drive",
  acreageLabel: "1,700-acre master-planned community",
  acreageNote:
    "Century Communities describes Skye Canyon as about 1,700 acres; the community facts page also lists a 1,000-acre figure—confirm current marketing language with the developer when citing acreage.",
  elevationLabel: "3,000+ ft elevation",
  mountCharlestonDrive: "about 30 minutes via State Route 157 (~21.6 miles)",
  stripDrive: "about 22–30 minutes to the Las Vegas Strip (traffic-dependent)",
  airportDrive: "about 35 minutes to Harry Reid International Airport (traffic-dependent)",
  openedYear: "2016",
  siblingCollections:
    "Skyeview collections in Skye Canyon also include Arroyo townhomes, single-story Mesa, and Terra—Sierra is the two-story 1,602–1,965 sq ft collection.",
  sharedDriveNote:
    "Sierra residences share a private drive with a neighboring home for a lower-maintenance homesite pattern.",
} as const;

/** Amenity facts for section copy (avoid protected-class proxies). */
export const AMENITY_FACTS = {
  skyeCanyonPark:
    "Skye Canyon Park is a ~15-acre amenity hub with Skye Center and Skye Fitness.",
  skyeCenter:
    "Skye Center is an ~8,000 sq ft community clubhouse with Aspire Coffee House, indoor/outdoor gathering space, stone fireplaces, and patio seating overlooking the pool and splash pad.",
  skyeFitness:
    "Skye Fitness includes a junior Olympic pool, fitness studio, locker rooms, sports field, basketball court, tot lot, splash pad, and resident fitness programming (hours typically weekdays 6 a.m.–8 p.m.; confirm current schedule).",
  outdoor:
    "Parks, trails, dedicated bike lanes, sports courts/fields, splash pads, and tot lots run through the master plan.",
  marketplace: "Skye Canyon Marketplace supports everyday shopping inside the master plan footprint.",
} as const;

/** Market context — cite as-of dates; never invent live medians. */
export const MARKET_FACTS = {
  asOfLabel: "12 months ending ~Sept 2026 (MLS plats; builder-only sales may be undercounted)",
  skyeCanyonClosings: "309",
  skyeCanyonMedianSale: "$535,000",
  skyeCanyonMedianPsf: "$263",
  skyeCanyonMedianDom: "34",
  zip89166Closings: "712",
  zip89166MedianSale: "$510,000",
  newHomeShareOfClosings: "about 45%",
  monthsOfSupply: "about 4.8 months in Skye Canyon plats vs ~5.5 in ZIP 89166",
  hoaMlsMedianMonthly:
    "MLS association-cost samples around late Oct 2026 showed a ~$138/mo median total (many parcels $120–$160); some parcels run higher. Request the current association statement / public offering statement—do not budget from a listing alone.",
  sidNote:
    "Some parcels sit in City special improvement districts (e.g. SID 609/610) with long-dated assessment schedules—verify district charges on the specific lot before writing an offer.",
} as const;

/** Floor-plan snapshot aligned with Century Communities as of Oct 26, 2026 site pricing module. */
export const PLAN_FACTS = {
  plans: [
    {
      name: "Residence 1602",
      sqft: "1,602",
      beds: "3",
      baths: "2.5",
      fromUsd: 421_990,
    },
    {
      name: "Residence 1708",
      sqft: "1,708",
      beds: "3–4",
      baths: "2.5",
      fromUsd: 436_990,
    },
    {
      name: "Residence 1965",
      sqft: "1,965",
      beds: "3–5",
      baths: "2.5–3",
      fromUsd: 456_990,
    },
  ],
  qmiStreetsNote:
    "Quick move-in inventory commonly publishes on Barcroft Avenue and Damson Street lots inside Sierra at Skyeview; prices and incentives change frequently—verify the live Century Communities lot sheet before touring.",
} as const;

/** School names only (Fair Housing: no quality adjectives). */
export const SCHOOL_NAMES = [
  "William & Mary Scherkenbach Elementary",
  "James Bilbray Elementary",
  "Kenneth Divich Elementary",
  "Ralph Cadwallader Middle School",
  "Edmundo Escobedo Middle School",
  "Arbor View High School",
  "Somerset Academy — Skye Canyon Campus",
] as const;

/** Nearby everyday destinations closer to 89166 / NW corridor (verify hours before publishing as guarantees). */
export const NEARBY_DESTINATIONS = [
  {
    title: "Skye Canyon Marketplace",
    distance: "Inside Skye Canyon · 89166",
    description: "On-site retail and everyday shopping within the master plan.",
  },
  {
    title: "Skye Center & Aspire Coffee House",
    distance: "10111 W Skye Canyon Park Dr · 89166",
    description: "Community hub with coffee, Wi‑Fi, and gathering spaces overlooking amenity areas.",
  },
  {
    title: "Montecito Marketplace",
    distance: "Northwest Las Vegas · 89149",
    description: "Regional shopping and dining along the NW corridor.",
  },
  {
    title: "Mount Charleston / SR-157",
    distance: "~30 min via Kyle Canyon Rd",
    description: "Spring Mountains recreation access for hiking and seasonal outdoor use.",
  },
  {
    title: "U.S. 95 Freeway Access",
    distance: "Skye Canyon Park Drive interchange",
    description: "Direct northwest valley freeway access for Strip, airport, and employment corridors.",
  },
  {
    title: "CCSD & charter campuses by name",
    distance: "Within / near 89166",
    description: SCHOOL_NAMES.join("; ") + ".",
  },
] as const;

export type HyperlocalPageVariant =
  | "home"
  | "community"
  | "services"
  | "about"
  | "contact"
  | "reviews"
  | "floor-plans"
  | "quick-move-in"
  | "new-build"
  | "mount-charleston"
  | "northwest"
  | "sell"
  | "mortgage"
  | "qa"
  | "model"
  | "blog";

type VariantCopy = {
  headline: string;
  lead: string;
  bullets: string[];
  serviceFocus: string;
};

export const VARIANT_COPY: Record<HyperlocalPageVariant, VariantCopy> = {
  home: {
    headline: "Buyer representation for Sierra at Skyeview (89166)",
    lead: `Sierra at Skyeview is Century Communities’ two-story Skyeview collection in Skye Canyon—${COMMUNITY_FACTS.highwayAccess}, ZIP ${COMMUNITY_FACTS.zip}. Dr. Jan Duffy works this pocket daily: lot orientation, incentives, and contract terms that protect you—not the builder.`,
    bullets: [
      `${COMMUNITY_FACTS.acreageLabel} with ${AMENITY_FACTS.skyeCanyonPark}`,
      `Three plans from 1,602–1,965 sq ft; base pricing published from $421,990 (confirm live builder sheet).`,
      `Skye Canyon MLS plats closed ~${MARKET_FACTS.skyeCanyonClosings} homes at a ${MARKET_FACTS.skyeCanyonMedianSale} median (${MARKET_FACTS.asOfLabel}).`,
      `${COMMUNITY_FACTS.mountCharlestonDrive} to Mount Charleston recreation.`,
    ],
    serviceFocus:
      "Lot selection, builder incentive review, upgrade ROI coaching, and walkthrough advocacy for Sierra buyers in Skye Canyon.",
  },
  community: {
    headline: "Skye Canyon lifestyle intel your sales office will not volunteer",
    lead: `Living at Sierra means living inside Skye Canyon’s amenity grid—${AMENITY_FACTS.skyeCenter} ${AMENITY_FACTS.skyeFitness}`,
    bullets: [
      AMENITY_FACTS.outdoor,
      `Master-plan address: ${COMMUNITY_FACTS.masterPlanAddress}.`,
      `Association costs vary by parcel; ${MARKET_FACTS.hoaMlsMedianMonthly}`,
      MARKET_FACTS.sidNote,
    ],
    serviceFocus:
      "Dr. Jan maps amenity proximity, dues layers, and SID exposure onto the exact Sierra lot you are considering.",
  },
  services: {
    headline: "Realtor services built for this street grid—not generic Las Vegas",
    lead: "Independent buyer representation for Sierra at Skyeview means reading Century Communities offers against Skye Canyon comps, sibling Skyeview collections, and your total monthly cost (price + dues + any district charges).",
    bullets: [
      "New-construction contract review and incentive stacking for Century releases",
      "Homesite strategy on shared-drive Sierra lots (views, orientation, premium tradeoffs)",
      "Design-center spend coaching so upgrades match resale reality in 89166",
      "Inspection, walkthrough, and punch-list advocacy through closing",
    ],
    serviceFocus:
      "Every service deliverable is scoped to Sierra at Skyeview / Skye Canyon—not a valley-wide template.",
  },
  about: {
    headline: "A Skye Canyon–specialist buyer’s agent, not a builder desk",
    lead: "Dr. Jan Duffy focuses realtor service when buying a new home on Sierra at Skyeview inventory, Skyeview sister collections, and the 89166 northwest corridor.",
    bullets: [
      "Independent advocacy—your interests, not Century Communities’ quota",
      `Local fluency: ${COMMUNITY_FACTS.elevationLabel}, Spring Mountains access, and NW freeway timing`,
      "Process control from reservation through final walkthrough",
    ],
    serviceFocus:
      "Meet for a Sierra-specific buyer consult before you sit with the onsite sales team.",
  },
  contact: {
    headline: "Tour Sierra with a buyer’s agent who already knows the plats",
    lead: `Call (702) 903-4687 or visit the Sierra sales area at ${COMMUNITY_FACTS.salesAddress}. Model hours typically 10:00 a.m.–6:00 p.m. daily—confirm before you drive.`,
    bullets: [
      `Sales address: ${COMMUNITY_FACTS.salesAddress}`,
      `Community hub: ${COMMUNITY_FACTS.masterPlanAddress}`,
      "Ask for current QMI addresses on Barcroft Ave and Damson Street before your visit",
    ],
    serviceFocus:
      "Book a FaceTime or onsite tour with Dr. Jan so builder appointments start with your leverage intact.",
  },
  reviews: {
    headline: "What buyers hire a Sierra specialist to fix",
    lead: "Clients use Dr. Jan to pressure-test lot premiums, incentives, and timelines inside Skye Canyon—then stay represented through construction milestones.",
    bullets: [
      "Incentive discovery beyond the first sales-sheet offer",
      "Timeline and quality control on new construction",
      "Clear communication when the builder desk goes quiet",
    ],
    serviceFocus:
      "Read the reviews, then schedule a Sierra at Skyeview strategy call before your next model-home visit.",
  },
  "floor-plans": {
    headline: "Match the plan to the Skye Canyon lot—not the brochure photo",
    lead: "Residence 1602 / 1708 / 1965 span 1,602–1,965 sq ft with flexible bedroom counts. Shared-drive homesites change light, privacy, and outdoor use—plan choice and lot choice must be negotiated together.",
    bullets: [
      "1602: efficient 3-bed entry into Sierra pricing",
      "1708: added flexibility for 3–4 bedrooms",
      "1965: largest Sierra footprint with up to 5 bedrooms",
      PLAN_FACTS.qmiStreetsNote,
    ],
    serviceFocus:
      "Dr. Jan compares plan premiums to live QMI stickers and nearby Skyeview collections before you reserve.",
  },
  "quick-move-in": {
    headline: "QMI on Barcroft & Damson: speed without skipping buyer leverage",
    lead: "Move-in-ready Sierra homes publish with marked-down stickers that still need independent review—options packages, closing credits, and rate specials change week to week.",
    bullets: [
      PLAN_FACTS.qmiStreetsNote,
      "Confirm completion date, remaining buyer credits, and any non-standard addenda",
      "Walk the homesite for orientation, drainage, and neighboring build status",
    ],
    serviceFocus:
      "Use a buyer’s agent to compare QMI net cost against a to-be-built Sierra reservation on the same day.",
  },
  "new-build": {
    headline: "New-build process control inside one master plan",
    lead: "Century Communities builds multiple Skyeview collections in Skye Canyon. Sierra buyers still need independent sequencing: lot hold, design center, construction updates, and closing coordination.",
    bullets: [
      COMMUNITY_FACTS.siblingCollections,
      "Track stage inspections and change orders in writing",
      "Benchmark Sierra pricing against Mesa, Terra, and Arroyo when the use-case overlaps",
    ],
    serviceFocus:
      "Dr. Jan runs the new-build checklist so you are not relying on the builder’s project manager alone.",
  },
  "mount-charleston": {
    headline: "Homes positioned for Spring Mountains access—without guessing drive times",
    lead: `Sierra at Skyeview sits on the northwest edge toward the Spring Mountains. ${COMMUNITY_FACTS.mountCharlestonDrive}. Pair that with ${COMMUNITY_FACTS.elevationLabel} living inside Skye Canyon.`,
    bullets: [
      "SR-157 / Kyle Canyon corridor access for day trips",
      "Cooler elevation vs valley-floor communities",
      "Still ~22–30 minutes to Strip employment and entertainment corridors",
    ],
    serviceFocus:
      "Tour Sierra with outdoor-access priorities listed first so lot choice matches how you actually use Mount Charleston.",
  },
  northwest: {
    headline: "Northwest Las Vegas new homes—with Skye Canyon as the primary map pin",
    lead: "If you are comparing Skye Canyon, Skye Hills, Sunstone, and Providence, start with verified Sierra numbers: three two-story plans, Century builder, and amenity access through Skye Canyon Park.",
    bullets: [
      `ZIP ${COMMUNITY_FACTS.zip} median context: ${MARKET_FACTS.zip89166MedianSale} (${MARKET_FACTS.asOfLabel})`,
      `Skye Canyon plat median ${MARKET_FACTS.skyeCanyonMedianSale} with ${MARKET_FACTS.newHomeShareOfClosings} new-home share`,
      COMMUNITY_FACTS.siblingCollections,
    ],
    serviceFocus:
      "Dr. Jan builds a northwest shortlist that puts Sierra lot economics next to competing NW master plans.",
  },
  sell: {
    headline: "Sell your current home to buy Sierra—timed to Century releases",
    lead: "Contingent and bridge strategies only work when Sierra inventory, builder incentives, and your resale timeline are modeled together for 89166 / Skye Canyon.",
    bullets: [
      "Align list-to-contract timing with QMI vs to-be-built Sierra paths",
      "Stress-test net proceeds against Sierra all-in monthly cost (dues + any SID)",
      "Keep buyer representation on the Sierra contract even when selling elsewhere",
    ],
    serviceFocus:
      "One agent coordinating both sides reduces the risk of losing a Sierra lot while your sale is pending.",
  },
  mortgage: {
    headline: "Payment math for Sierra: price, dues, and district layers",
    lead: "A payment calculator is incomplete without Skye Canyon association dues and any SID/assessment on the specific parcel.",
    bullets: [
      MARKET_FACTS.hoaMlsMedianMonthly,
      MARKET_FACTS.sidNote,
      "Confirm current Century rate specials or closing credits on the exact QMI address",
    ],
    serviceFocus:
      "Bring Dr. Jan your pre-approval so Sierra offers include realistic total monthly ownership cost.",
  },
  qa: {
    headline: "Sierra / Skye Canyon answers with current local context",
    lead: "FAQs below are grounded in Century Communities plan data and 2026 Skye Canyon market samples—always re-verify before you write an offer.",
    bullets: [
      `Base plan pricing still publishes from $421,990 / $436,990 / $456,990 for 1602 / 1708 / 1965 (as of site pricing date).`,
      `Market: ${MARKET_FACTS.skyeCanyonMedianSale} Skye Canyon median vs ${MARKET_FACTS.zip89166MedianSale} in 89166.`,
      `Amenities: ${AMENITY_FACTS.skyeCanyonPark}`,
    ],
    serviceFocus:
      "Have a leftover question? That is a buyer-consult agenda item—not a builder sales script.",
  },
  model: {
    headline: "This floor plan only works if the Sierra lot works",
    lead: "Elevation, neighboring homes, and shared-drive orientation change how this plan lives day to day in Skye Canyon. Price the plan and the homesite as one decision.",
    bullets: [
      PLAN_FACTS.qmiStreetsNote,
      "Compare incentive-adjusted QMI stickers to base plan pricing",
      "Walk comparable Sierra elevations before you reserve",
    ],
    serviceFocus:
      "Dr. Jan tours this plan with a lot shortlist so you do not fall in love with a model that fights your homesite.",
  },
  blog: {
    headline: "Keep reading—then get Sierra-specific representation",
    lead: "Guides help you ask better questions. Closing a Century Communities home in Skye Canyon still needs a buyer’s agent who negotiates this inventory weekly.",
    bullets: [
      "Translate article takeaways into a Sierra offer checklist",
      "Benchmark claims against live builder pricing and HOA docs",
      "Schedule a consult before your next onsite appointment",
    ],
    serviceFocus:
      "Call (702) 903-4687 to turn this article into a Sierra at Skyeview action plan.",
  },
};

export function formatResearchFooter(): string {
  return `Local figures researched ${HYPERLOCAL_RESEARCH_AS_OF}; confirm live builder, HOA, and MLS data before relying on any number.`;
}
