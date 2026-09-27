import { useCallback, useEffect, useId, useRef, useState } from "react";
import Link from "next/link";
import { loadGoogleMaps, mapsAuthFailed } from "../lib/google-maps-loader";
import {
  AMENITY_CATEGORIES,
  type AmenityCategoryId,
  getCategoryById,
} from "../utils/amenityCategories";
import { searchCategoryPlaces } from "../utils/amenityPlacesSearch";
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

function directionsUrl(lat: number, lng: number, label?: string): string {
  const destination = label
    ? encodeURIComponent(label)
    : `${lat},${lng}`;
  return `https://www.google.com/maps/dir/?api=1&destination=${destination}`;
}

function buildInfoWindowContent(options: {
  name: string;
  address: string;
  lat: number;
  lng: number;
}): HTMLElement {
  const wrap = document.createElement("div");
  wrap.style.maxWidth = "240px";
  wrap.style.fontFamily = "system-ui, sans-serif";

  const title = document.createElement("strong");
  title.textContent = options.name;
  wrap.appendChild(title);

  if (options.address) {
    const addr = document.createElement("p");
    addr.style.margin = "4px 0";
    addr.style.fontSize = "13px";
    addr.textContent = options.address;
    wrap.appendChild(addr);
  }

  const link = document.createElement("a");
  link.href = directionsUrl(options.lat, options.lng, options.name);
  link.target = "_blank";
  link.rel = "noopener noreferrer";
  link.textContent = "Directions";
  wrap.appendChild(link);

  return wrap;
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
        Featured places for {getCategoryById(category).label.toLowerCase()} near{" "}
        {COMMUNITY.name} are listed on our full amenities guide.
      </p>
    );
  }
  return (
    <ul className="space-y-3" aria-label={`Featured ${getCategoryById(category).label}`}>
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

function MapFallbackFrame({ compact }: { compact: boolean }) {
  const mapHeightClass = compact ? "h-[360px] md:h-[420px]" : "h-[420px] md:h-[520px]";
  const { lat, lng } = COMMUNITY.center;
  return (
    <div className={`w-full ${mapHeightClass} rounded-lg overflow-hidden border border-gray-200`}>
      <iframe
        title={`Map of ${COMMUNITY.name} and Northwest Las Vegas`}
        className="w-full h-full border-0"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        src={`https://www.google.com/maps?q=${lat},${lng}&z=14&output=embed`}
      />
    </div>
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
  const [useFallback, setUseFallback] = useState(
    !apiKey || (typeof window !== "undefined" && mapsAuthFailed),
  );
  const [mapStatus, setMapStatus] = useState<"idle" | "loading" | "ready" | "error">(
    !apiKey ? "error" : "idle",
  );
  const [livePlacesCount, setLivePlacesCount] = useState(0);
  const [showCuratedForCategory, setShowCuratedForCategory] = useState(false);

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

  const destroyInteractiveMap = useCallback(() => {
    clearPlaceMarkers();
    communityMarkerRef.current?.setMap(null);
    communityMarkerRef.current = null;
    infoWindowRef.current?.close();
    infoWindowRef.current = null;
    mapRef.current = null;
    if (mapContainerRef.current) {
      mapContainerRef.current.replaceChildren();
    }
  }, [clearPlaceMarkers]);

  const activateFallback = useCallback(() => {
    destroyInteractiveMap();
    setUseFallback(true);
    setMapStatus("error");
    setLivePlacesCount(0);
  }, [destroyInteractiveMap]);

  useEffect(() => {
    if (mapsAuthFailed) {
      activateFallback();
    }
    const onAuthFail = () => activateFallback();
    window.addEventListener("gmaps:auth-failure", onAuthFail);
    return () => window.removeEventListener("gmaps:auth-failure", onAuthFail);
  }, [activateFallback]);

  const showInfo = useCallback(
    (options: {
      name: string;
      address: string;
      lat: number;
      lng: number;
    }) => {
      if (!mapRef.current) return;
      if (!infoWindowRef.current) {
        infoWindowRef.current = new google.maps.InfoWindow();
      }
      infoWindowRef.current.setContent(buildInfoWindowContent(options));
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

  const loadCategoryMarkers = useCallback(
    async (categoryId: AmenityCategoryId) => {
      if (!mapRef.current || useFallback) return;
      setMapStatus("loading");
      setShowCuratedForCategory(false);
      clearPlaceMarkers();
      try {
        const places = await searchCategoryPlaces(categoryId);
        places.forEach((place) => {
          const { name, address, lat, lng } = place;
          const marker = new google.maps.Marker({
            map: mapRef.current,
            position: { lat, lng },
            title: name,
          });
          marker.addListener("click", () => {
            showInfo({ name, address, lat, lng });
          });
          placeMarkersRef.current.push(marker);
        });
        setLivePlacesCount(places.length);
        setShowCuratedForCategory(places.length === 0);
        setMapStatus("ready");
      } catch {
        setLivePlacesCount(0);
        setShowCuratedForCategory(true);
        setMapStatus("ready");
      }
    },
    [clearPlaceMarkers, showInfo, useFallback],
  );

  useEffect(() => {
    if (!isVisible || useFallback || !apiKey) return;
    if (mapsAuthFailed) {
      activateFallback();
      return;
    }
    let cancelled = false;

    async function initMap() {
      setMapStatus("loading");
      try {
        await loadGoogleMaps(apiKey);
        if (cancelled || mapsAuthFailed) {
          if (!cancelled) activateFallback();
          return;
        }
        if (!mapContainerRef.current) return;
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
        await loadCategoryMarkers(activeCategory);
      } catch {
        if (!cancelled) {
          activateFallback();
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
    loadCategoryMarkers(activeCategory);
  }, [activeCategory, loadCategoryMarkers, useFallback]);

  const curatedForCategory = curatedPlacesForCategory(activeCategory);
  const categoriesToShow = singleCategory
    ? AMENITY_CATEGORIES.filter((c) => c.id === singleCategory)
    : AMENITY_CATEGORIES;

  const listPlaces =
    showCuratedForCategory || useFallback || !apiKey
      ? curatedForCategory
      : curatedForCategory;

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
            <MapFallbackFrame compact={compact} />
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
          {!useFallback && livePlacesCount > 0 ? (
            <p className="text-xs text-gray-500 mt-2">
              Showing {livePlacesCount} nearby{" "}
              {getCategoryById(activeCategory).label.toLowerCase()} on the map.
            </p>
          ) : null}
          {!useFallback && showCuratedForCategory ? (
            <p className="text-xs text-gray-500 mt-2">
              Live results unavailable for this category — see featured places in the list.
            </p>
          ) : null}
        </div>

        {showCuratedList ? (
          <aside className="bg-gray-50 rounded-lg p-5 border border-gray-100">
            <h3 className="text-lg font-bold text-gray-900 mb-3">
              Featured places near {COMMUNITY.masterPlan}
            </h3>
            <CuratedList category={activeCategory} places={listPlaces} />
            {listPlaces.length === 0 ? (
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
