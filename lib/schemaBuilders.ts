import { SIERRA_AT_SKYEVIEW_AREA_SERVED } from "./sierraAreaServed";
import {
  ORGANIZATION_ID,
  REAL_ESTATE_AGENT_ID,
  SITE_URL,
} from "./schemaIds";
import { SITE_CONTACT } from "./siteContact";

export type FaqItem = { question: string; answer: string };

export type BreadcrumbItem = { name: string; path: string };

export function buildFaqPageSchema(faqs: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function buildBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.path.startsWith("http")
        ? item.path
        : `${SITE_URL}${item.path === "/" ? "/" : item.path}`,
    })),
  };
}

export function buildWebPageSchema(opts: {
  path: string;
  name: string;
  description: string;
  speakableCssSelectors?: string[];
}) {
  const url = `${SITE_URL}${opts.path}`;
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${url}#webpage`,
    url,
    name: opts.name,
    description: opts.description,
    isPartOf: { "@id": `${SITE_URL}/#website` },
    about: { "@id": `${SITE_URL}/#sierra-at-skyeview-place` },
    primaryEntityOfPage: url,
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: opts.speakableCssSelectors ?? [
        "#page-h1",
        "#answer-first",
        "#faq-section h3",
      ],
    },
  };
}

/** GEO entity: Sierra at Skyeview Place inside Skye Canyon / 89166 */
export function buildSierraPlaceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Place",
    "@id": `${SITE_URL}/#sierra-at-skyeview-place`,
    name: "Sierra at Skyeview",
    description:
      "Century Communities two-story new-home collection in Skye Canyon, Northwest Las Vegas, ZIP 89166.",
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE_CONTACT.streetAddress,
      addressLocality: SITE_CONTACT.addressLocality,
      addressRegion: SITE_CONTACT.addressRegion,
      postalCode: SITE_CONTACT.postalCode,
      addressCountry: SITE_CONTACT.addressCountry,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: SITE_CONTACT.geo.latitude,
      longitude: SITE_CONTACT.geo.longitude,
    },
    containedInPlace: {
      "@type": "Place",
      "@id": `${SITE_URL}/#skye-canyon-place`,
      name: "Skye Canyon",
      address: {
        "@type": "PostalAddress",
        streetAddress: "10111 W. Skye Canyon Park Drive",
        addressLocality: "Las Vegas",
        addressRegion: "NV",
        postalCode: "89166",
        addressCountry: "US",
      },
    },
  };
}

export function buildLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    "@id": REAL_ESTATE_AGENT_ID,
    name: SITE_CONTACT.agentName,
    url: `${SITE_URL}/about`,
    telephone: SITE_CONTACT.phoneE164,
    email: SITE_CONTACT.email,
    image: `${SITE_URL}/design%2004_new%202.jpg`,
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE_CONTACT.streetAddress,
      addressLocality: SITE_CONTACT.addressLocality,
      addressRegion: SITE_CONTACT.addressRegion,
      postalCode: SITE_CONTACT.postalCode,
      addressCountry: SITE_CONTACT.addressCountry,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: SITE_CONTACT.geo.latitude,
      longitude: SITE_CONTACT.geo.longitude,
    },
    areaServed: SIERRA_AT_SKYEVIEW_AREA_SERVED,
    parentOrganization: { "@id": ORGANIZATION_ID },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: SITE_CONTACT.opens,
      closes: SITE_CONTACT.closes,
    },
  };
}

export function buildHowToSchema(opts: {
  name: string;
  description: string;
  steps: { name: string; text: string }[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: opts.name,
    description: opts.description,
    step: opts.steps.map((step, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name: step.name,
      text: step.text,
    })),
  };
}

export function buildServiceSchema(opts: {
  name: string;
  description: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: opts.name,
    description: opts.description,
    url: `${SITE_URL}${opts.path}`,
    provider: { "@id": REAL_ESTATE_AGENT_ID },
    areaServed: SIERRA_AT_SKYEVIEW_AREA_SERVED,
    serviceType: "Real estate buyer representation for new construction",
  };
}
