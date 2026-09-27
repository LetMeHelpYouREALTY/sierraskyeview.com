/**
 * Sierra at Skyeview Homes — community center for amenity map.
 * Coordinates sourced from OpenStreetMap Nominatim geocode of
 * 8925 Vanhoy Creek St, Las Vegas, NV 89166 (sales office / model homes).
 */
export const COMMUNITY = {
  name: "Sierra at Skyeview Homes",
  masterPlan: "Skye Canyon",
  city: "Las Vegas",
  region: "NV",
  postalCode: "89166",
  streetAddress: "8925 Vanhoy Creek St.",
  fullAddress: "8925 Vanhoy Creek St., Las Vegas, NV 89166",
  siteUrl: "https://www.sierraskyeview.com",
  center: {
    lat: 36.3150642,
    lng: -115.3296506,
  },
  mapEmbedQuery: "36.3150642,-115.3296506",
  searchRadiusMeters: 8000,
} as const;

export const AGENT = {
  name: "Dr. Jan Duffy",
  telephone: "(702) 903-4687",
  telHref: "tel:7029034687",
  email: "DrDuffy@SierraSkyeview.com",
  license: "S.0197614",
  brokerage: "Berkshire Hathaway HomeServices",
} as const;
