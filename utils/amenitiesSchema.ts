import { AGENT, COMMUNITY } from "./communityLocation";
import { CURATED_PLACES } from "./curatedAmenities";

export const AMENITIES_FAQ = [
  {
    question: `What grocery stores are near ${COMMUNITY.name}?`,
    answer: `Smith's Marketplace at 9710 W Skye Canyon Park Dr anchors Skye Canyon Marketplace about five minutes from ${COMMUNITY.name}, with Sprouts Farmers Market and additional grocers along North Durango Drive in Centennial Hills.`,
  },
  {
    question: `How far is ${COMMUNITY.name} from the Las Vegas Strip?`,
    answer: `From Skye Canyon, the Las Vegas Strip is approximately 30–35 minutes by car via US-95 and I-15 in typical daytime traffic (approximate; verify with your navigation app).`,
  },
  {
    question: `Are there hospitals near ${COMMUNITY.name}?`,
    answer: `Centennial Hills Hospital at 6900 N Durango Dr is roughly 10–15 minutes from Sierra at Skyeview in Northwest Las Vegas, with additional valley hospitals reachable via US-95.`,
  },
  {
    question: `What schools serve the Skye Canyon area?`,
    answer: `Clark County School District schools near Skye Canyon include Somerset Academy Skye Canyon Campus, William & Mary Scherbenbach Elementary, Ralph Cadwallader Middle School, and Arbor View High School—confirm attendance zones with CCSD before purchasing.`,
  },
  {
    question: `How far is Harry Reid International Airport from Skye Canyon?`,
    answer: `Harry Reid International Airport is approximately 35–40 minutes from Sierra at Skyeview via US-95 and the 215 Beltway in typical traffic (approximate).`,
  },
  {
    question: `Where do Skye Canyon residents shop and dine locally?`,
    answer: `Skye Canyon Marketplace on West Skye Canyon Park Drive offers Smith's Marketplace, Starbucks, services, and restaurants; Montecito Marketplace on North Durango Drive adds more retail and dining about 15 minutes away.`,
  },
  {
    question: `Is golf available near ${COMMUNITY.name}?`,
    answer: `Las Vegas Paiute Golf Resort and other Northwest Las Vegas courses are within a short drive of Skye Canyon; Skye Canyon also offers parks, trails, and recreation centers within the master plan.`,
  },
];

export function buildAmenitiesFaqSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: AMENITIES_FAQ.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function buildAmenitiesBreadcrumbSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: `${COMMUNITY.siteUrl}/`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Nearby Amenities",
        item: `${COMMUNITY.siteUrl}/amenities`,
      },
    ],
  };
}

export function buildAmenitiesItemListSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `Places near ${COMMUNITY.name}`,
    itemListElement: CURATED_PLACES.map((place, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": place.schemaType,
        name: place.name,
        address: {
          "@type": "PostalAddress",
          streetAddress: place.address.split(",")[0]?.trim(),
          addressLocality: COMMUNITY.city,
          addressRegion: COMMUNITY.region,
          postalCode: place.address.match(/\b89\d{3}\b/)?.[0] ?? COMMUNITY.postalCode,
          addressCountry: "US",
        },
      },
    })),
  };
}

export function buildCommunityPlaceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Place",
    name: COMMUNITY.name,
    description: `New construction homes in ${COMMUNITY.masterPlan}, Northwest Las Vegas.`,
    address: {
      "@type": "PostalAddress",
      streetAddress: COMMUNITY.streetAddress,
      addressLocality: COMMUNITY.city,
      addressRegion: COMMUNITY.region,
      postalCode: COMMUNITY.postalCode,
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: COMMUNITY.center.lat,
      longitude: COMMUNITY.center.lng,
    },
    containedInPlace: {
      "@type": "Place",
      name: COMMUNITY.masterPlan,
    },
  };
}

export function buildAmenitiesAgentSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    name: AGENT.name,
    description: `Buyer's agent for ${COMMUNITY.name} in ${COMMUNITY.masterPlan}, Northwest Las Vegas.`,
    url: `${COMMUNITY.siteUrl}/amenities`,
    telephone: AGENT.telephone,
    email: AGENT.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: COMMUNITY.streetAddress,
      addressLocality: COMMUNITY.city,
      addressRegion: COMMUNITY.region,
      postalCode: COMMUNITY.postalCode,
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: COMMUNITY.center.lat,
      longitude: COMMUNITY.center.lng,
    },
    areaServed: {
      "@type": "Place",
      name: `${COMMUNITY.name}, ${COMMUNITY.masterPlan}`,
      address: {
        "@type": "PostalAddress",
        addressLocality: COMMUNITY.city,
        addressRegion: COMMUNITY.region,
        postalCode: COMMUNITY.postalCode,
        addressCountry: "US",
      },
    },
  };
}
