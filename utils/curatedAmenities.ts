import type { AmenityCategoryId } from "./amenityCategories";

export type CuratedPlace = {
  name: string;
  category: AmenityCategoryId;
  /** Verified street address for display and JSON-LD */
  address: string;
  /** Official source used to verify name and address */
  sourceUrl: string;
  /** schema.org @type */
  schemaType:
    | "Place"
    | "Restaurant"
    | "CafeOrCoffeeShop"
    | "GroceryStore"
    | "Park"
    | "GolfCourse"
    | "Hospital"
    | "Pharmacy"
    | "ShoppingCenter"
    | "School"
    | "ExerciseGym";
  note?: string;
};

export const CURATED_PLACES: CuratedPlace[] = [
  {
    name: "Sierra at Skyeview Homes",
    category: "parks",
    address: "8925 Vanhoy Creek St., Las Vegas, NV 89166",
    sourceUrl: "https://www.sierraskyeview.com/",
    schemaType: "Place",
    note: "New construction sales office and model homes in Skye Canyon.",
  },
  {
    name: "Skye Canyon Park",
    category: "parks",
    address: "10111 W Skye Canyon Park Dr, Las Vegas, NV 89166",
    sourceUrl: "https://skyecanyon.com/amenities/parks/",
    schemaType: "Park",
    note: "15-acre community park with trails, splash pad, and sports courts.",
  },
  {
    name: "Skye Canyon Marketplace",
    category: "shopping",
    address: "9700 W Skye Canyon Park Dr, Las Vegas, NV 89166",
    sourceUrl: "https://skyecanyon.com/amenities/shopping/",
    schemaType: "ShoppingCenter",
    note: "Retail and dining hub anchored by Smith's Marketplace.",
  },
  {
    name: "Smith's Marketplace",
    category: "grocery",
    address: "9710 W Skye Canyon Park Dr, Las Vegas, NV 89166",
    sourceUrl:
      "https://www.smithsfoodanddrug.com/stores/grocery/nv/las-vegas/smiths-marketplace/706/00367",
    schemaType: "GroceryStore",
  },
  {
    name: "Smith's Food and Drug (Montecito Marketplace)",
    category: "grocery",
    address: "7130 N Durango Dr, Las Vegas, NV 89149",
    sourceUrl: "https://www.smithsfoodanddrug.com/",
    schemaType: "GroceryStore",
    note: "Grocery anchor at Montecito Marketplace, north on Durango Drive.",
  },
  {
    name: "Montecito Marketplace",
    category: "shopping",
    address: "7120 N Durango Dr, Las Vegas, NV 89149",
    sourceUrl: "https://jllipt.com/newsroom/press-release/jll-income-property-trust-acquires-grocery-anchored-retail-center-in-las-vegas",
    schemaType: "ShoppingCenter",
  },
  {
    name: "Centennial Hills Hospital Medical Center",
    category: "healthcare",
    address: "6900 N Durango Dr, Las Vegas, NV 89149",
    sourceUrl: "https://www.centennialhillshospital.com/patients-visitors/maps-directions",
    schemaType: "Hospital",
  },
  {
    name: "Smith's Pharmacy (Skye Canyon Marketplace)",
    category: "pharmacies",
    address: "9710 W Skye Canyon Park Dr, Las Vegas, NV 89166",
    sourceUrl: "https://skyecanyon.com/amenities/shopping/",
    schemaType: "Pharmacy",
    note: "Drive-through pharmacy inside Smith's Marketplace.",
  },
  {
    name: "Mimi's Cafe",
    category: "restaurants",
    address: "6760 N Durango Dr, Las Vegas, NV 89149",
    sourceUrl: "https://www.mimiscafe.com/locations/n-las-vegas/",
    schemaType: "Restaurant",
  },
  {
    name: "Starbucks",
    category: "cafes",
    address: "9710 W Skye Canyon Park Dr, Las Vegas, NV 89166",
    sourceUrl: "https://skyecanyon.com/amenities/shopping/",
    schemaType: "CafeOrCoffeeShop",
    note: "Inside Smith's Marketplace at Skye Canyon Marketplace.",
  },
  {
    name: "Skye Fitness",
    category: "fitness",
    address: "10111 W Skye Canyon Park Dr, Las Vegas, NV 89166",
    sourceUrl: "https://skyecanyon.com/amenities/",
    schemaType: "ExerciseGym",
    note: "Resident fitness center at Skye Canyon Park (Skye Canyon HOA).",
  },
  {
    name: "Somerset Academy of Las Vegas Skye Canyon",
    category: "schools",
    address: "8151 N Shaumber Rd, Las Vegas, NV 89166",
    sourceUrl: "https://www.somersetskyecanyon.org/apps/contact/",
    schemaType: "School",
  },
  {
    name: "Arbor View High School",
    category: "schools",
    address: "7500 Whispering Sands Dr, Las Vegas, NV 89131",
    sourceUrl: "https://www.arborviewhs.org/apps/contact/",
    schemaType: "School",
  },
  {
    name: "Las Vegas Paiute Golf Resort",
    category: "golf",
    address: "10325 Nu Wav Kaiv Blvd, Las Vegas, NV 89124",
    sourceUrl: "https://www.lvpaiutegolf.com/",
    schemaType: "GolfCourse",
    note: "Public golf resort northwest of the Las Vegas Valley (approximate 25-minute drive from Skye Canyon).",
  },
];

export function curatedPlacesForCategory(category: AmenityCategoryId): CuratedPlace[] {
  return CURATED_PLACES.filter((p) => p.category === category);
}
