import type { AmenityCategoryId } from "./amenityCategories";
import { getCategoryById } from "./amenityCategories";
import { COMMUNITY } from "./communityLocation";

export type NearbyPlaceResult = {
  id: string;
  name: string;
  address: string;
  lat: number;
  lng: number;
  mapsUri?: string;
};

const cache = new Map<string, Promise<NearbyPlaceResult[]>>();

function placeToResult(place: google.maps.places.Place): NearbyPlaceResult | null {
  const loc = place.location;
  if (!loc) return null;
  const name =
    typeof place.displayName === "string"
      ? place.displayName
      : place.displayName?.text ?? "Nearby place";
  const lat = typeof loc.lat === "function" ? loc.lat() : loc.lat;
  const lng = typeof loc.lng === "function" ? loc.lng() : loc.lng;
  return {
    id: place.id ?? `${name}-${lat}-${lng}`,
    name,
    address: place.formattedAddress ?? "",
    lat,
    lng,
    mapsUri: place.googleMapsURI ?? undefined,
  };
}

export function searchCategoryPlaces(
  categoryId: AmenityCategoryId,
): Promise<NearbyPlaceResult[]> {
  let p = cache.get(categoryId);
  if (!p) {
    const category = getCategoryById(categoryId);
    p = (async () => {
      const { Place } = (await google.maps.importLibrary(
        "places",
      )) as google.maps.PlacesLibrary;
      const { places } = await Place.searchNearby({
        fields: ["displayName", "location", "formattedAddress", "googleMapsURI", "id"],
        locationRestriction: {
          center: COMMUNITY.center,
          radius: 5000,
        },
        includedPrimaryTypes: category.placeTypes,
        maxResultCount: 10,
        rankPreference: "POPULARITY" as any,
      });
      return places
        .map(placeToResult)
        .filter((item): item is NearbyPlaceResult => item != null);
    })();
    p.catch(() => cache.delete(categoryId));
    cache.set(categoryId, p);
  }
  return p;
}
