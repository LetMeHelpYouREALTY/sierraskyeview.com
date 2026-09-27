import Document, { Head, Html, Main, NextScript } from "next/document";

const SITE_URL = "https://www.sierraskyeview.com";
const ORGANIZATION_ID = `${SITE_URL}/#organization`;
const REAL_ESTATE_AGENT_ID = `${SITE_URL}/#realestateagent`;

const ORGANIZATION_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": ORGANIZATION_ID,
  "name": "Sierra at Skyeview Homes",
  "url": SITE_URL,
  "logo": `${SITE_URL}/favicon.ico`,
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+1-702-903-4687",
    "contactType": "customer service",
    "areaServed": "US",
    "availableLanguage": ["English"]
  }
};

const WEBSITE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Sierra at Skyeview Homes",
  "url": SITE_URL,
  "publisher": { "@id": ORGANIZATION_ID }
};

const REAL_ESTATE_AGENT_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  "@id": REAL_ESTATE_AGENT_ID,
  "name": "Dr. Jan Duffy",
  "description":
    "Buyer's agent for Sierra at Skyeview new construction homes in Skye Canyon, Northwest Las Vegas.",
  "image": `${SITE_URL}/design%2004_new%202.jpg`,
  "jobTitle": "Buyer's Agent & New Home Construction Specialist",
  "url": `${SITE_URL}/about`,
  "worksFor": { "@id": ORGANIZATION_ID },
  "telephone": "+1-702-903-4687",
  "email": "DrDuffy@SierraSkyeview.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "8925 Vanhoy Creek St.",
    "addressLocality": "Las Vegas",
    "addressRegion": "NV",
    "postalCode": "89166",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "36.2565",
    "longitude": "-115.2848"
  },
  "areaServed": {
    "@type": "City",
    "name": "Las Vegas",
    "containedInPlace": {
      "@type": "State",
      "name": "Nevada"
    }
  },
  "knowsAbout": [
    "Sierra at Skyeview Homes",
    "Skye Canyon new construction",
    "Las Vegas real estate",
    "Buyer's agent representation"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+1-702-903-4687",
    "contactType": "sales",
    "areaServed": "US",
    "availableLanguage": "English"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Sierra at Skyeview Homes",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "House",
          "name": "1,602 sq ft Homes",
          "floorSize": "1602 sq ft",
          "numberOfRooms": "3 bedrooms, 2.5 bathrooms",
          "offers": {
            "@type": "Offer",
            "price": "419990",
            "priceCurrency": "USD"
          }
        }
      }
    ]
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5.0",
    "reviewCount": "6",
    "bestRating": "5",
    "worstRating": "1"
  }
};

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="robots" content="index, follow" />
          <link rel="icon" href="/favicon.ico" />
          <link rel="sitemap" type="application/xml" href="https://www.sierraskyeview.com/sitemap.xml" />
          
          {/* Google Search Console Verification */}
          {/* 
          INSTRUCTIONS:
          1. Go to https://search.google.com/search-console/
          2. Add property: https://www.sierraskyeview.com
          3. Choose "HTML tag" verification method
          4. Copy the content value from the meta tag
          5. Replace YOUR_VERIFICATION_CODE_HERE below
          6. Uncomment the meta tag
          7. Verify ownership in Search Console
          8. Submit sitemap: https://www.sierraskyeview.com/sitemap.xml
          */}
          {/* <meta name="google-site-verification" content="YOUR_VERIFICATION_CODE_HERE" /> */}
          
          {/* Google Analytics 4 */}
          {/* 
          INSTRUCTIONS:
          1. Go to https://analytics.google.com/
          2. Create new GA4 property for sierraskyeview.com
          3. Get Measurement ID (format: G-XXXXXXXXXX)
          4. Replace G-XXXXXXXXXX below with your Measurement ID
          5. Uncomment the scripts below
          6. Set up conversion goals in GA4:
             - Phone calls (tel: links)
             - Email clicks
             - Form submissions
             - RealScout widget interactions
          */}
          {/* 
          <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-XXXXXXXXXX', {
                  page_path: window.location.pathname,
                });
                // Track phone call clicks
                document.addEventListener('click', function(e) {
                  if (e.target.href && e.target.href.startsWith('tel:')) {
                    gtag('event', 'phone_click', {
                      'event_category': 'Contact',
                      'event_label': e.target.href
                    });
                  }
                });
                // Track email clicks
                document.addEventListener('click', function(e) {
                  if (e.target.href && e.target.href.startsWith('mailto:')) {
                    gtag('event', 'email_click', {
                      'event_category': 'Contact',
                      'event_label': e.target.href
                    });
                  }
                });
              `,
            }}
          />
          */}
          
          <meta
            name="description"
            content="New construction at Sierra at Skyeview in Skye Canyon, Northwest Las Vegas (89166). Buyer representation from Dr. Jan Duffy, Nevada REALTOR."
          />
          <meta property="og:site_name" content="Sierra at Skyeview Homes" />
          <meta
            property="og:description"
            content="Sierra at Skyeview Homes for sale in Northwest Las Vegas. New construction homes located in Skye Canyon near Mount Charleston with expert guidance from Dr. Jan Duffy."
          />
          <meta property="og:title" content="Sierra at Skyeview Homes - New Construction Northwest Las Vegas" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Sierra at Skyeview Homes - New Construction Northwest Las Vegas" />
          <meta
            name="twitter:description"
            content="Sierra at Skyeview Homes for sale in Northwest Las Vegas. Located in Skye Canyon near Mount Charleston. Buyer's Agent representation from Dr. Jan Duffy."
          />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(ORGANIZATION_SCHEMA) }}
          />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(WEBSITE_SCHEMA) }}
          />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(REAL_ESTATE_AGENT_SCHEMA) }}
          />
        </Head>
        <body className="bg-black antialiased">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;


