import type { AmenityCategoryId } from "./amenityCategories";

export type CuratedPlace = {
  name: string;
  category: AmenityCategoryId;
  address: string;
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

/** Verified names and addresses — used for fallback UI and JSON-LD ItemList. */
export const CURATED_PLACES: CuratedPlace[] = [
  {
    name: "Sierra at Skyeview Homes",
    category: "parks",
    address: "8925 Vanhoy Creek St., Las Vegas, NV 89166",
    schemaType: "Place",
    note: "New construction sales office and model homes in Skye Canyon.",
  },
  {
    name: "Skye Canyon Marketplace",
    category: "shopping",
    address: "9700 W Skye Canyon Park Dr, Las Vegas, NV 89166",
    schemaType: "ShoppingCenter",
    note: "Retail hub within the Skye Canyon master plan, anchored by Smith's Marketplace.",
  },
  {
    name: "Smith's Marketplace",
    category: "grocery",
    address: "9710 W Skye Canyon Park Dr, Las Vegas, NV 89166",
    schemaType: "GroceryStore",
  },
  {
    name: "Sprouts Farmers Market",
    category: "grocery",
    address: "7150 N Durango Dr, Las Vegas, NV 89149",
    schemaType: "GroceryStore",
  },
  {
    name: "Montecito Marketplace",
    category: "shopping",
    address: "7120 N Durango Dr, Las Vegas, NV 89149",
    schemaType: "ShoppingCenter",
  },
  {
    name: "Centennial Hills Hospital",
    category: "healthcare",
    address: "6900 N Durango Dr, Las Vegas, NV 89149",
    schemaType: "Hospital",
  },
  {
    name: "Mimi's Cafe",
    category: "restaurants",
    address: "7170 N Durango Dr, Las Vegas, NV 89149",
    schemaType: "Restaurant",
  },
  {
    name: "Starbucks",
    category: "cafes",
    address: "9710 W Skye Canyon Park Dr, Las Vegas, NV 89166",
    schemaType: "CafeOrCoffeeShop",
  },
  {
    name: "Arbor View High School",
    category: "schools",
    address: "8100 Arby Ave, Las Vegas, NV 89129",
    schemaType: "School",
  },
  {
    name: "Somerset Academy Skye Canyon Campus",
    category: "schools",
    address: "8151 N Shaumber Rd, Las Vegas, NV 89166",
    schemaType: "School",
  },
  {
    name: "Las Vegas Paiute Golf Resort",
    category: "golf",
    address: "10325 W Lake Mead Blvd, Las Vegas, NV 89134",
    schemaType: "GolfCourse",
  },
];

export function curatedPlacesForCategory(category: AmenityCategoryId): CuratedPlace[] {
  return CURATED_PLACES.filter((p) => p.category === category);
}
