export type AmenityCategoryId =
  | "parks"
  | "grocery"
  | "fitness"
  | "restaurants"
  | "cafes"
  | "healthcare"
  | "pharmacies"
  | "shopping"
  | "golf"
  | "schools"
  | "parking";

export type AmenityCategory = {
  id: AmenityCategoryId;
  label: string;
  /** Google Places (New) includedPrimaryTypes for Place.searchNearby */
  placeTypes: string[];
};

/** Master-planned family community — parks, grocery, and recreation first. */
export const AMENITY_CATEGORIES: AmenityCategory[] = [
  { id: "parks", label: "Parks", placeTypes: ["park", "playground"] },
  { id: "grocery", label: "Grocery", placeTypes: ["grocery_store", "supermarket"] },
  { id: "fitness", label: "Fitness", placeTypes: ["gym", "fitness_center"] },
  { id: "restaurants", label: "Restaurants", placeTypes: ["restaurant"] },
  { id: "cafes", label: "Cafes", placeTypes: ["cafe", "coffee_shop"] },
  { id: "healthcare", label: "Healthcare", placeTypes: ["hospital", "doctor"] },
  { id: "pharmacies", label: "Pharmacies", placeTypes: ["pharmacy", "drugstore"] },
  { id: "shopping", label: "Shopping", placeTypes: ["shopping_mall", "department_store"] },
  { id: "golf", label: "Golf", placeTypes: ["golf_course"] },
  { id: "schools", label: "Schools", placeTypes: ["school", "primary_school", "secondary_school"] },
  { id: "parking", label: "Parking", placeTypes: ["parking"] },
];

export function getCategoryById(id: AmenityCategoryId): AmenityCategory {
  const found = AMENITY_CATEGORIES.find((c) => c.id === id);
  if (!found) {
    return AMENITY_CATEGORIES[0];
  }
  return found;
}
