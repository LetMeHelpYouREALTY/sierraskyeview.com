import { useCallback, useEffect, useId, useRef, useState } from "react";
import Link from "next/link";
import {
  AMENITY_CATEGORIES,
  type AmenityCategoryId,
  getCategoryById,
} from "../utils/amenityCategories";
import { COMMUNITY } from "../utils/communityLocation";
import {
  CURATED_PLACES,
  curatedPlacesForCategory,
  type CuratedPlace,
} from "../utils/curatedAmenities";

type AmenityMapProps = {
  /** Shorter map on embedded sections */
  compact?: boolean;
  /** Show static curated list beside/below map */
  showCuratedList?: boolean;
  /** Hide category chips (use first category only) */
  singleCategory?: AmenityCategoryId;
  className?: string;
};

type MapPlaceResult = {
  id: string;
  name: string;
  address: string;
  lat: number;
  lng: number;
  rating?: number;
};

let mapsLoaderPromise: Promise<void> | null = null;

function loadGoogleMapsScript(apiKey: string): Promise<void> {
  if (typeof window === "undefined") {
    return Promise.reject(new Error("Maps can only load in the browser"));
  }
  if (window.google?.maps?.importLibrary) {
    return Promise.resolve();
  }
  if (mapsLoaderPromise) {
    return mapsLoaderPromise;
  }
  mapsLoaderPromise = new Promise((resolve, reject) => {
    const existing = document.querySelector<HTMLScriptElement>(
      'script[data-amenity-map="true"]',
    );
    if (existing) {
      existing.addEventListener("load", () => resolve());
      existing.addEventListener("error", () =>
        reject(new Error("Google Maps script failed to load")),
      );
      return;
    }
    const script = document.createElement("script");
    script.dataset.amenityMap = "true";
    script.async = true;
    script.src = `https://maps.googleapis.com/maps/api/js?key=${encodeURIComponent(
      apiKey,
    )}&loading=async`;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error("Google Maps script failed to load"));
    document.head.appendChild(script);
  });
  return mapsLoaderPromise;
}

function directionsUrl(lat: number, lng: number, label?: string): string {
  const destination = label
    ? encodeURIComponent(label)
    : `${lat},${lng}`;
  return `https://www.google.com/maps/dir/?api=1&destination=${destination}`;
}

function CuratedList({
  category,
  places,
}: {
  category: AmenityCategoryId;
  places: CuratedPlace[];
}) {
  if (places.length === 0) {
    return (
      <p className="text-sm text-gray-600">
        Explore nearby {getCategoryById(category).label.toLowerCase()} on the map
        or contact Dr. Jan for local recommendations.
      </p>
    );
  }
  return (
    <ul className="space-y-3" aria-label={`Nearby ${getCategoryById(category).label}`}>
      {places.map((place) => (
        <li key={`${place.name}-${place.address}`} className="text-sm text-gray-700">
          <span className="font-semibold text-gray-900">{place.name}</span>
          <br />
          <span>{place.address}</span>
          {place.note ? (
            <span className="block text-gray-600 mt-1">{place.note}</span>
          ) : null}
        </li>
      ))}
    </ul>
  );
}

export default function AmenityMap({
  compact = false,
  showCuratedList = true,
  singleCategory,
  className = "",
}: AmenityMapProps) {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ?? "";
  const mapId = process.env.NEXT_PUBLIC_GOOGLE_MAPS_MAP_ID;
  const rootRef = useRef<HTMLDivElement>(null);
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<google.maps.Map | null>(null);
  const communityMarkerRef = useRef<google.maps.Marker | null>(null);
  const placeMarkersRef = useRef<google.maps.Marker[]>([]);
  const infoWindowRef = useRef<google.maps.InfoWindow | null>(null);

  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState<AmenityCategoryId>(
    singleCategory ?? AMENITY_CATEGORIES[0].id,
  );
  const [useFallback, setUseFallback] = useState(!apiKey);
  const [mapStatus, setMapStatus] = useState<"idle" | "loading" | "ready" | "error">(
    !apiKey ? "error" : "idle",
  );
  const [livePlaces, setLivePlaces] = useState<MapPlaceResult[]>([]);

  const filterGroupId = useId();
  const mapHeightClass = compact ? "h-[360px] md:h-[420px]" : "h-[420px] md:h-[520px]";

  useEffect(() => {
    if (singleCategory) {
      setActiveCategory(singleCategory);
    }
  }, [singleCategory]);

  useEffect(() => {
    const node = rootRef.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        });
      },
      { rootMargin: "120px", threshold: 0.1 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const clearPlaceMarkers = useCallback(() => {
    placeMarkersRef.current.forEach((marker) => marker.setMap(null));
    placeMarkersRef.current = [];
  }, []);

  const showInfo = useCallback(
    (options: {
      name: string;
      address: string;
      lat: number;
      lng: number;
      rating?: number;
    }) => {
      if (!mapRef.current) return;
      if (!infoWindowRef.current) {
        infoWindowRef.current = new google.maps.InfoWindow();
      }
      const ratingLine =
        options.rating != null
          ? `<p style="margin:4px 0;font-size:13px;">Rating: ${options.rating.toFixed(1)}</p>`
          : "";
      infoWindowRef.current.setContent(`
        <div style="max-width:240px;font-family:system-ui,sans-serif;">
          <strong>${options.name}</strong>
          ${ratingLine}
          <p style="margin:4px 0;font-size:13px;">${options.address}</p>
          <a href="${directionsUrl(options.lat, options.lng, options.name)}" target="_blank" rel="noopener noreferrer">Directions</a>
        </div>
      `);
      infoWindowRef.current.open({
        map: mapRef.current,
        position: { lat: options.lat, lng: options.lng },
      });
    },
    [],
  );

  const ensureCommunityMarker = useCallback(() => {
    if (!mapRef.current) return;
    if (communityMarkerRef.current) return;
    communityMarkerRef.current = new google.maps.Marker({
      map: mapRef.current,
      position: COMMUNITY.center,
      title: COMMUNITY.name,
      label: {
        text: "★",
        color: "#ffffff",
        fontWeight: "700",
      },
      zIndex: 999,
    });
    communityMarkerRef.current.addListener("click", () => {
      showInfo({
        name: COMMUNITY.name,
        address: COMMUNITY.fullAddress,
        lat: COMMUNITY.center.lat,
        lng: COMMUNITY.center.lng,
      });
    });
  }, [showInfo]);

  const searchCategory = useCallback(
    async (categoryId: AmenityCategoryId) => {
      if (!mapRef.current || useFallback) return;
      const category = getCategoryById(categoryId);
      setMapStatus("loading");
      clearPlaceMarkers();
      try {
        const placesLibrary = (await google.maps.importLibrary(
          "places",
        )) as google.maps.PlacesLibrary;
        const { Place } = placesLibrary;
        const { places } = await Place.searchNearby({
          fields: [
            "displayName",
            "formattedAddress",
            "location",
            "rating",
            "id",
          ],
          locationRestriction: {
            center: COMMUNITY.center,
            radius: COMMUNITY.searchRadiusMeters,
          },
          includedPrimaryTypes: category.placeTypes,
          maxResultCount: 15,
          rankPreference: "DISTANCE" as google.maps.places.RankPreference,
        });

        const mapped: MapPlaceResult[] = [];
        places.forEach((place) => {
          const loc = place.location;
          if (!loc) return;
          const name =
            typeof place.displayName === "string"
              ? place.displayName
              : place.displayName?.text ?? "Nearby place";
          const address = place.formattedAddress ?? "";
          const lat = loc.lat();
          const lng = loc.lng();
          mapped.push({
            id: place.id ?? `${name}-${lat}`,
            name,
            address,
            lat,
            lng,
            rating: place.rating ?? undefined,
          });
          const marker = new google.maps.Marker({
            map: mapRef.current,
            position: { lat, lng },
            title: name,
          });
          marker.addListener("click", () => {
            showInfo({ name, address, lat, lng, rating: place.rating ?? undefined });
          });
          placeMarkersRef.current.push(marker);
        });
        setLivePlaces(mapped);
        setMapStatus("ready");
      } catch {
        setUseFallback(true);
        setMapStatus("error");
      }
    },
    [clearPlaceMarkers, showInfo, useFallback],
  );

  useEffect(() => {
    if (!isVisible || useFallback || !apiKey) return;
    let cancelled = false;

    async function initMap() {
      setMapStatus("loading");
      try {
        await loadGoogleMapsScript(apiKey);
        if (cancelled || !mapContainerRef.current) return;
        const mapsLibrary = (await google.maps.importLibrary(
          "maps",
        )) as google.maps.MapsLibrary;
        const options: google.maps.MapOptions = {
          center: COMMUNITY.center,
          zoom: 13,
          mapTypeControl: false,
          streetViewControl: false,
          fullscreenControl: !compact,
        };
        if (mapId) {
          options.mapId = mapId;
        }
        mapRef.current = new mapsLibrary.Map(mapContainerRef.current, options);
        ensureCommunityMarker();
        await searchCategory(activeCategory);
      } catch {
        if (!cancelled) {
          setUseFallback(true);
          setMapStatus("error");
        }
      }
    }

    initMap();
    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps -- init once when visible
  }, [isVisible, useFallback, apiKey]);

  useEffect(() => {
    if (!mapRef.current || useFallback) return;
    searchCategory(activeCategory);
  }, [activeCategory, searchCategory, useFallback]);

  const curatedForCategory = curatedPlacesForCategory(activeCategory);
  const categoriesToShow = singleCategory
    ? AMENITY_CATEGORIES.filter((c) => c.id === singleCategory)
    : AMENITY_CATEGORIES;

  return (
    <div ref={rootRef} className={className}>
      {!singleCategory ? (
        <div
          className="flex flex-wrap gap-2 mb-4"
          role="group"
          aria-labelledby={filterGroupId}
        >
          <span id={filterGroupId} className="sr-only">
            Filter nearby places by category
          </span>
          {categoriesToShow.map((cat) => {
            const selected = cat.id === activeCategory;
            return (
              <button
                key={cat.id}
                type="button"
                aria-pressed={selected}
                aria-label={`Show ${cat.label} near ${COMMUNITY.name}`}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3 py-2 rounded-full text-sm font-medium min-h-[44px] transition-colors ${
                  selected
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>
      ) : null}

      <div className={`grid gap-6 ${showCuratedList ? "lg:grid-cols-3" : ""}`}>
        <div className={showCuratedList ? "lg:col-span-2" : ""}>
          {useFallback ? (
            <div className={`w-full ${mapHeightClass} rounded-lg overflow-hidden border border-gray-200`}>
              <iframe
                title={`Map of ${COMMUNITY.name} and Northwest Las Vegas`}
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src={`https://www.google.com/maps?q=${COMMUNITY.mapEmbedQuery}&z=13&output=embed`}
              />
            </div>
          ) : (
            <div
              ref={mapContainerRef}
              className={`w-full ${mapHeightClass} rounded-lg overflow-hidden border border-gray-200 bg-gray-100`}
              role="application"
              aria-label={`Interactive map of amenities near ${COMMUNITY.name}`}
            />
          )}
          {mapStatus === "loading" && !useFallback ? (
            <p className="sr-only" aria-live="polite">
              Loading map results
            </p>
          ) : null}
          {!useFallback && livePlaces.length > 0 ? (
            <p className="text-xs text-gray-500 mt-2">
              Showing {livePlaces.length} nearby{" "}
              {getCategoryById(activeCategory).label.toLowerCase()} from Google Places.
            </p>
          ) : null}
        </div>

        {showCuratedList ? (
          <aside className="bg-gray-50 rounded-lg p-5 border border-gray-100">
            <h3 className="text-lg font-bold text-gray-900 mb-3">
              Curated near {COMMUNITY.masterPlan}
            </h3>
            <CuratedList category={activeCategory} places={curatedForCategory} />
            {curatedForCategory.length === 0 ? (
              <p className="text-sm text-gray-600 mt-3">
                See also:{" "}
                {CURATED_PLACES.slice(0, 4)
                  .map((p) => p.name)
                  .join(", ")}
                .
              </p>
            ) : null}
          </aside>
        ) : null}
      </div>

      <p className="text-sm text-gray-600 mt-4">
        <Link href="/amenities" className="text-blue-600 hover:text-blue-700 font-semibold underline">
          View full nearby amenities guide
        </Link>{" "}
        with dining, healthcare, schools, and commute tips for {COMMUNITY.name}.
      </p>
    </div>
  );
}
