/**
 * Site standard v1: sourced, dated local facts for Sierra at Skyeview / Skye Canyon (89166).
 * Every figure here was retrieved on 2026-11-20 from the source named next to it.
 * Re-check each one before reusing it; prices and sales change.
 */
export const FACTS_RETRIEVED = "November 20, 2026";

export type AreaFact = {
  id: string;
  label: string;
  text: string;
  source: string;
  url: string;
  asOf: string;
};

export const AREA_FACTS: AreaFact[] = [
  {
    id: "sierra-prices",
    label: "Sierra at Skyeview prices",
    text: "Century Communities lists three two-story plans at Sierra at Skyeview: Residence 1602 from $421,990, Residence 1708 from $436,990 and Residence 1965 from $456,990, on cul-de-sac lots.",
    source: "Century Communities, Sierra at Skyeview page",
    url: "https://www.centurycommunities.com/find-your-new-home/nevada/las-vegas-metro/las-vegas/skye-canyon/skyeview---sierra/",
    asOf: "read November 20, 2026",
  },
  {
    id: "skyeview-collections",
    label: "The four Skyeview collections",
    text: "Century builds four collections in Skye Canyon: Arroyo townhomes from the $370s, Sierra from the $420s, and Mesa (single-story) and Terra from the $480s.",
    source: "Century Communities, Skye Canyon page",
    url: "https://www.centurycommunities.com/find-your-new-home/nevada/las-vegas-metro/las-vegas/skye-canyon",
    asOf: "read November 20, 2026",
  },
  {
    id: "recent-sales",
    label: "Recent sales",
    text: "Skye Canyon closed 309 homes at a $535,000 median and $263 per square foot in the 12 months ending September 18, 2026, and 45% of them were built in 2025 or later.",
    source: "Nevada Real Estate Group, Skye Canyon guide (MLS records)",
    url: "https://www.nevadarealestategroup.com/blog/skye-canyon-northwest-las-vegas-master-plan-buyers-guide-2026/",
    asOf: "updated November 15, 2026",
  },
  {
    id: "zip-september",
    label: "ZIP 89166 in September",
    text: "Single-family homes in ZIP 89166 closed 47 sales at a $533,000 median in September 2026, with 267 homes for sale and 4.9 months of supply.",
    source: "Jason Aguirre Real Estate, from Las Vegas REALTORS MLS (InfoSparks)",
    url: "https://jasonaguirrerealestate.com/las-vegas-housing-market-report",
    asOf: "pulled October 3, 2026",
  },
  {
    id: "master-plan",
    label: "The master plan",
    text: "Skye Canyon covers 1,000 acres at U.S. 95 and Skye Canyon Park Drive and is planned for 6,500 homes. Century Communities and Toll Brothers are the builders named on its facts page.",
    source: "Skye Canyon facts page",
    url: "https://skyecanyon.com/facts",
    asOf: "read November 20, 2026",
  },
  {
    id: "skye-center",
    label: "Skye Center and Skye Fitness",
    text: "Skye Center is 8,142 square feet and Skye Fitness is 9,663 square feet, with a Junior Olympic pool, both at 10111 W. Skye Canyon Park Drive.",
    source: "Skye Canyon facts page",
    url: "https://skyecanyon.com/facts",
    asOf: "read November 20, 2026",
  },
  {
    id: "parks",
    label: "Parks",
    text: "Skye Canyon lists seven parks. The 15-acre Skye Canyon Park has six pickleball courts, a roller hockey rink, two dog parks and a half-mile walking path, open 6 a.m. to 9 p.m.",
    source: "Skye Canyon parks page",
    url: "https://skyecanyon.com/amenities/parks",
    asOf: "read November 20, 2026",
  },
  {
    id: "marketplace",
    label: "Groceries",
    text: "Skye Canyon Marketplace, at the northwest corner of Skye Canyon Park Drive and Grand Canyon Drive, has 250,000 square feet of shops anchored by a 124,000-square-foot Smith's Marketplace.",
    source: "Skye Canyon facts page",
    url: "https://skyecanyon.com/facts",
    asOf: "read November 20, 2026",
  },
  {
    id: "commute",
    label: "Commute",
    text: "From Skye Canyon Park, Caesars Palace is 19.8 miles (22 to 28 minutes without traffic) and Harry Reid International Terminal 1 is 24.8 miles (27 to 34 minutes).",
    source: "Nevada Real Estate Group, Summerlin vs Skye Canyon (road model on OpenStreetMap)",
    url: "https://www.nevadarealestategroup.com/blog/summerlin-vs-skye-canyon-which-is-right-for-you-2026/",
    asOf: "updated November 1, 2026",
  },
  {
    id: "mount-charleston",
    label: "Mount Charleston",
    text: "State Route 157 runs 21.6 miles up Kyle Canyon toward Mount Charleston, which Skye Canyon's own site puts about 30 minutes away.",
    source: "Nevada Real Estate Group, Skye Canyon guide",
    url: "https://www.nevadarealestategroup.com/blog/skye-canyon-northwest-las-vegas-master-plan-buyers-guide-2026/",
    asOf: "updated November 15, 2026",
  },
  {
    id: "sid",
    label: "Special improvement districts",
    text: "Some Skye Canyon parcels sit in City of Las Vegas special improvement districts 609 and 610, with final payments in 2047 and 2048. Check the lot before you write an offer.",
    source: "Nevada Real Estate Group, Skye Canyon guide (Assessment Management Group schedule)",
    url: "https://www.nevadarealestategroup.com/blog/skye-canyon-northwest-las-vegas-master-plan-buyers-guide-2026/",
    asOf: "updated November 15, 2026",
  },
  {
    id: "schools",
    label: "Zoned schools (names only)",
    text: "On CCSD's 2026-27 zoning data, the Skye Canyon plats checked were zoned to Kenneth Divich Elementary, Edmundo Escobedo Sr. Middle and Arbor View High School. Confirm any address with CCSD.",
    source: "Nevada Real Estate Group, Summerlin vs Skye Canyon",
    url: "https://www.nevadarealestategroup.com/blog/summerlin-vs-skye-canyon-which-is-right-for-you-2026/",
    asOf: "checked November 1, 2026",
  },
];

/** Skye Canyon Park coordinates, from the map link on skyecanyon.com/amenities/skye-center (read 2026-11-20). */
export const SKYE_CANYON_PARK_GEO = { latitude: 36.3142721, longitude: -115.3144111 };

/** Approved "Dr. Jan's take" lines, word for word from Open Brain [DR-JAN-TAKE APPROVED] Skye Canyon (89166), 2026-11-19. */
export const DR_JAN_TAKE_LINES = [
  "Touring new homes in 89166? Ask the builder for a corner lot first.",
  "Toll Brothers homes here tend to hold their value well.",
];

export const PHONE_DISPLAY = "(702) 903-4687";
export const PHONE_TEL = "+17029034687";

export const CALENDLY = {
  buyer: "https://calendly.com/drjanduffy/buyer-consultation-30-min",
  seller: "https://calendly.com/drjanduffy/listing-consultation",
} as const;

export function calendlyUrl(event: keyof typeof CALENDLY, medium: string, campaign: string): string {
  const params = new URLSearchParams({
    hide_gdpr_banner: "1",
    utm_source: "sierraskyeview.com",
    utm_medium: medium,
    utm_campaign: campaign,
  });
  return `${CALENDLY[event]}?${params.toString()}`;
}

export const REALSCOUT_SEARCH_URL =
  "https://drjanduffy.realscout.com/homesearch/shared-searches/U2hhcmVhYmxlU2VhcmNoTGluay0xNDE5NA==";
