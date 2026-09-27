import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import NearbyAmenitiesSection from "../components/NearbyAmenitiesSection";
import { COMMUNITY } from "../utils/communityLocation";

const Community: NextPage = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const amenities = [
    { icon: "🏞️", title: "Recreation Center", description: "A recreational playground with inspiring scenery and an emotionally appealing setting" },
    { icon: "🏊", title: "Fitness Center", description: "State-of-the-art fitness facilities for active living and wellness" },
    { icon: "🏃", title: "Parks & Trails", description: "Beautiful parks and walking trails throughout the 1,700-acre community" },
    { icon: "🏀", title: "Sports Courts & Fields", description: "Sports courts and fields for active living and community engagement" },
    { icon: "🎯", title: "Splash Pads", description: "Family-friendly splash pads and water features for all ages" },
    { icon: "🏫", title: "Neighborhood Schools", description: "Convenient access to local schools within the community" }
  ];

  const nearbyAttractions = [
    { icon: "🏪", title: "Sprouts Farmers Market", distance: "Las Vegas, NV 89128", description: "Fresh organic groceries and health foods" },
    { icon: "🛒", title: "Smith's Food and Drug", distance: "Las Vegas, NV 89106", description: "Full-service grocery store and pharmacy" },
    { icon: "🏬", title: "Montecito Marketplace", distance: "Las Vegas, NV 89149", description: "Shopping center with retail and dining" },
    { icon: "🍽️", title: "Mimi's Cafe", distance: "Las Vegas, NV 89149", description: "Casual dining with American comfort food" },
    { icon: "☕", title: "Starbucks", distance: "Las Vegas, NV 89102", description: "Coffee and light meals" },
    { icon: "🏫", title: "Local Schools", distance: "Nearby", description: "William & Mary Scherbenbach Elementary, James Bilbray Elementary, Kenneth Divich Elementary, Ralph Cadwallader Middle School, Edmundo Escobedo Middle School, Arbor View High School, Somerset Academy-Skye Canyon Campus" }
  ];

  return (
    <>
      <Head>
        <title>Sierra at Skyeview Community | Skye Canyon Near Mount Charleston | Northwest Las Vegas 89166</title>
        <meta name="description" content="Discover Sierra at Skyeview Homes community in Skye Canyon, Northwest Las Vegas near Mount Charleston, zip code 89166. Located in 1,700-acre master-planned community with resort-style amenities, parks, and top-rated schools. Realtor service when buying a new home from buyer's agent Dr. Jan Duffy." />
        <meta name="keywords" content="Sierra at Skyeview community, Skye Canyon amenities, Northwest Las Vegas master-planned community, Mount Charleston area homes, 89166 community, Skye Canyon lifestyle, realtor service when buying a new home, Skye Canyon parks and trails" />
        <meta property="og:title" content="Sierra at Skyeview Community | Skye Canyon Near Mount Charleston" />
        <meta property="og:description" content="Discover Sierra at Skyeview Homes community in Skye Canyon, Northwest Las Vegas near Mount Charleston. Master-planned community with premium amenities. Expert realtor service when buying a new home." />
        <meta property="og:image" content="https://www.sierraskyeview.com/9026-rimerton-neighborhood-real.jpg" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.sierraskyeview.com/community" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Sierra at Skyeview Community | Skye Canyon" />
        <meta name="twitter:description" content="Discover Sierra at Skyeview Homes community in Skye Canyon, Northwest Las Vegas. Master-planned community with premium amenities, parks, and top-rated schools." />
        <meta name="twitter:image" content="https://www.sierraskyeview.com/9026-rimerton-neighborhood-real.jpg" />
        <link rel="canonical" href="https://www.sierraskyeview.com/community" />
        
        {/* Breadcrumb Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://www.sierraskyeview.com/"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Skye Canyon Community",
                  "item": "https://www.sierraskyeview.com/community"
                }
              ]
            })
          }}
        />
        
        {/* RealEstateAgent Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "RealEstateAgent",
              "name": "Dr. Jan Duffy",
              "description": "Expert buyer's agent specializing in Skye Canyon community homes. Realtor service when buying new construction homes at Sierra at Skyeview in Northwest Las Vegas.",
              "url": "https://www.sierraskyeview.com/community",
              "telephone": "(702) 903-4687",
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
                "latitude": "36.2844",
                "longitude": "-115.3153"
              },
              "areaServed": {
                "@type": "City",
                "name": "Las Vegas",
                "containedInPlace": {
                  "@type": "State",
                  "name": "Nevada"
                }
              }
            })
          }}
        />
        
        {/* FAQ Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "What makes Skye Canyon a great community for new construction homes?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Skye Canyon is a 1,700-acre master-planned community in Northwest Las Vegas offering comprehensive amenities, excellent schools, parks, trails, and a strong sense of community. Located at 3,000+ foot elevation with cooler temperatures and mountain views, Skye Canyon provides a unique lifestyle opportunity. Sierra at Skyeview Homes within Skye Canyon offers new construction homes with access to all these community benefits."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What amenities are available in Skye Canyon?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Skye Canyon features recreation centers, fitness facilities, parks, walking trails, sports courts, splash pads, and neighborhood schools. The master-planned community is designed to enhance quality of life with comprehensive amenities that support active living, family activities, and community engagement."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How does Dr. Jan Duffy help buyers understand Skye Canyon community benefits?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Dr. Jan Duffy provides expert realtor service when buying a new home, including comprehensive guidance on Skye Canyon community benefits, amenities, schools, and lifestyle advantages. Her expertise helps buyers understand how the master-planned community enhances their investment and quality of life."
                  }
                }
              ]
            })
          }}
        />
      </Head>

      {/* Navigation */}
      <nav className="bg-white shadow-lg fixed w-full top-0 z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <a href="tel:7029034687" className="text-2xl font-bold text-blue-600">
                (702) 903-4687
              </a>
            </div>
            <div className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium">Home</Link>
              <Link href="/floor-plans" className="text-gray-700 hover:text-blue-600 font-medium">Available Homes</Link>
              <Link href="/community" className="text-gray-700 hover:text-blue-600 font-medium">Skye Canyon Guide</Link>
              <Link href="/amenities" className="text-gray-700 hover:text-blue-600 font-medium">Nearby Amenities</Link>
              <Link href="/mortgage-calculator" className="text-gray-700 hover:text-blue-600 font-medium">Mortgage Calculator</Link>
              <Link href="/quick-move-in" className="text-gray-700 hover:text-blue-600 font-medium">Quick Move-In</Link>
              <Link href="/new-build-homes" className="text-gray-700 hover:text-blue-600 font-medium">New Construction</Link>
              <Link href="/reviews" className="text-gray-700 hover:text-blue-600 font-medium">Reviews</Link>
              <Link href="/services" className="text-gray-700 hover:text-blue-600 font-medium">Services</Link>
              <Link href="/blog" className="text-gray-700 hover:text-blue-600 font-medium">Blog</Link>
              <Link href="/about" className="text-gray-700 hover:text-blue-600 font-medium">About Dr. Jan</Link>
              <Link href="/contact" className="text-gray-700 hover:text-blue-600 font-medium">Contact</Link>
              <Link href="/qa" className="text-gray-700 hover:text-blue-600 font-medium">Q&amp;A</Link>
            </div>
          </div>
        </div>
      </nav>

      <main className="pt-16">
        {/* Breadcrumb Navigation */}
        <section className="bg-gray-50 py-4">
          <div className="max-w-7xl mx-auto px-4">
            <nav className="flex items-center space-x-2 text-sm">
              <Link href="/" className="text-blue-600 hover:text-blue-700">Home</Link>
              <span className="text-gray-400">/</span>
              <span className="text-gray-600">Skye Canyon Community</span>
            </nav>
          </div>
        </section>

        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Skye Canyon Community: Premier Master-Planned Living in Northwest Las Vegas
            </h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Discover new Skyeview homes for sale in Las Vegas, NV, at Sierra at Skyeview Homes! Offering exciting, two-story Homes with up to 1,965 square feet, <Link href="/floor-plans" className="text-blue-300 hover:text-blue-200 underline">Sierra at Skyeview Homes</Link> is the perfect place to plant roots. Residents enjoy incredible amenities at this 1,700-acre neighborhood, from a stunning central clubhouse to pools, parks, playgrounds, and much more. Explore <Link href="/new-build-homes" className="text-blue-300 hover:text-blue-200 underline">new construction homes</Link> and <Link href="/quick-move-in" className="text-blue-300 hover:text-blue-200 underline">quick move-in opportunities</Link>.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:7029034687" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                📞 Schedule Tour: (702) 903-4687
              </a>
              <a
                href="https://drjanduffy.realscout.com/homesearch/shared-searches/U2hhcmVhYmxlU2VhcmNoTGluay0xNDE5NA=="
                target="_blank"
                rel="noopener noreferrer"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                🏠 See What's Available in Sierra Skyeview
              </a>
            </div>
          </div>
        </section>

        {/* Comprehensive Content Section - Skye Canyon Overview */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              Skye Canyon: Premier Master-Planned Community in Northwest Las Vegas
            </h2>
            
            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-lg text-gray-700 mb-6">
                <Link href="/floor-plans" className="text-blue-600 hover:text-blue-700 underline">Sierra at Skyeview Homes</Link> is located within <Link href="/community" className="text-blue-600 hover:text-blue-700 underline">Skye Canyon</Link>, a premier 1,700-acre master-planned community in Northwest Las Vegas, zip code 89166. This master-planned community represents one of the most thoughtfully designed residential developments in the region, offering a comprehensive lifestyle that combines natural beauty, modern amenities, and a strong sense of community. Located at 3,000+ foot elevation with stunning mountain views and cooler temperatures, Skye Canyon provides a unique living experience that's increasingly sought after by homebuyers in Northwest Las Vegas. <Link href="/about" className="text-blue-600 hover:text-blue-700 underline">Dr. Jan Duffy</Link> provides expert realtor service when buying a new home, helping buyers understand the exceptional value and lifestyle benefits of living in Skye Canyon.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                Master-Planned Community Excellence
              </h3>
              <p className="text-lg text-gray-700 mb-6">
                Skye Canyon's master-planned approach ensures thoughtful development, quality infrastructure, and long-term value appreciation. The 1,700-acre community is designed to preserve natural beauty while providing modern conveniences, creating a balance between development and environmental stewardship. This master-planned approach includes comprehensive amenities, quality schools, parks, trails, and recreational facilities that enhance quality of life. The community's design philosophy focuses on creating neighborhoods that foster connection, wellness, and active living. This commitment to master-planned excellence makes Skye Canyon one of the most desirable communities in Northwest Las Vegas for buyers seeking new construction homes with comprehensive lifestyle benefits.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                Elevated Living at 3,000+ Feet
              </h3>
              <p className="text-lg text-gray-700 mb-6">
                One of Skye Canyon's unique advantages is its elevated location at over 3,000 feet above sea level. This elevation provides temperatures that are typically 10-15 degrees cooler than the Las Vegas Valley floor, making summers significantly more comfortable and reducing energy costs. The elevated location also offers cleaner air quality, stunning panoramic views of both the Las Vegas Valley and the Spring Mountain Range, including Mount Charleston, and a sense of living in a mountain retreat while maintaining easy access to Las Vegas amenities. This elevated living experience is a key differentiator for Skye Canyon and makes it an exceptional choice for buyers seeking an alternative to traditional Las Vegas living.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                Proximity to Mount Charleston and Outdoor Recreation
              </h3>
              <p className="text-lg text-gray-700 mb-6">
                Skye Canyon's location in Northwest Las Vegas provides easy access to Mount Charleston, located just 30 minutes away in the Spring Mountains. This proximity offers year-round outdoor recreation including hiking on over 60 miles of trails, winter skiing and snowboarding at the Las Vegas Ski & Snowboard Resort, camping, picnicking, and wildlife viewing. The ability to escape to mountain recreation while maintaining Las Vegas convenience creates a lifestyle that's increasingly sought after by homebuyers. This combination of elevated living, mountain proximity, and Las Vegas access makes Skye Canyon an exceptional choice for buyers seeking a unique lifestyle in Northwest Las Vegas.
              </p>
            </div>
          </div>
        </section>

        {/* Community Amenities Overview */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Community Amenities
              </h2>
              <p className="text-lg text-gray-600 max-w-4xl mx-auto">
                A recreational playground with inspiring scenery and an emotionally appealing setting, Skye Canyon's 1,700 acres are designed for a more engaged community—where work-life balance, a sense of well-being, and a vital active life are the norm. Living here, you'll enjoy incredible amenities. Explore <Link href="/floor-plans" className="text-blue-600 hover:text-blue-700 underline">available homes</Link> in this premier community and learn about <Link href="/services" className="text-blue-600 hover:text-blue-700 underline">buyer representation services</Link>.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-gray-50 rounded-lg p-6 text-center">
                <div className="text-3xl mb-3">🏊</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Stunning Central Clubhouse</h3>
                <p className="text-gray-600 text-sm">A beautiful clubhouse as the heart of community life</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6 text-center">
                <div className="text-3xl mb-3">🏊‍♀️</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Community Pools</h3>
                <p className="text-gray-600 text-sm">Resort-style pools for relaxation and recreation</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6 text-center">
                <div className="text-3xl mb-3">🌳</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Parks & Green Spaces</h3>
                <p className="text-gray-600 text-sm">Beautiful parks throughout the 1,700-acre community</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6 text-center">
                <div className="text-3xl mb-3">🎪</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Playgrounds</h3>
                <p className="text-gray-600 text-sm">Family-friendly playgrounds for children of all ages</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6 text-center">
                <div className="text-3xl mb-3">🏃‍♂️</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Trails & Walking Paths</h3>
                <p className="text-gray-600 text-sm">Extensive trail system for walking, jogging, and biking</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6 text-center">
                <div className="text-3xl mb-3">🎯</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Splash Pads</h3>
                <p className="text-gray-600 text-sm">Water features and splash pads for cooling off</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6 text-center">
                <div className="text-3xl mb-3">🏀</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Sports Courts & Fields</h3>
                <p className="text-gray-600 text-sm">Basketball courts, tennis courts, and sports fields</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6 text-center">
                <div className="text-3xl mb-3">🏫</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Neighborhood Schools</h3>
                <p className="text-gray-600 text-sm">Convenient access to quality educational facilities</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6 text-center">
                <div className="text-3xl mb-3">💪</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Fitness Center</h3>
                <p className="text-gray-600 text-sm">State-of-the-art fitness facilities for active living</p>
              </div>
            </div>

            <div className="text-center mt-12">
              <p className="text-lg text-gray-700 mb-6">
                <strong>Contact us and let us help you find your dream home here!</strong>
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="tel:7029034687" className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                  📞 Call Dr. Jan: (702) 903-4687
                </a>
                <a href="mailto:DrDuffy@SierraSkyeview.com" className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors">
                  📧 Email for More Info
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Community Gallery */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Explore the Stunning Homes and Beautiful Community
              </h2>
              <div className="flex flex-col items-center gap-4">
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  From modern exteriors to luxurious interiors, discover why Sierra at Skyeview Homes is the perfect place to call home in Skye Canyon. Experience the exceptional quality and attention to detail that defines our luxury new construction homes.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-5xl mx-auto">
              {[
                { src: "/9026-rimerton-street-exterior.jpg", alt: "Two-story home exterior at 9026 Rimerton Street, Sierra at Skyeview Homes" },
                { src: "/9026-rimerton-kitchen-real.jpg", alt: "Modern luxury kitchen with premium appliances at 9026 Rimerton Street, Sierra at Skyeview Homes" },
                { src: "/9026-rimerton-living-room-real.jpg", alt: "Spacious luxury living room at 9026 Rimerton Street, Sierra at Skyeview Homes" },
                { src: "/9026-rimerton-master-bedroom-real.jpg", alt: "Elegant master bedroom with premium finishes at 9026 Rimerton Street, Sierra at Skyeview Homes" },
              ].map((photo, index) => (
                <div
                  key={index}
                  className="relative aspect-square overflow-hidden rounded-lg cursor-pointer group shadow-md hover:shadow-xl transition-all duration-300"
                  onClick={() => setSelectedImage(photo.src)}
                >
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                    sizes="(max-width: 768px) 50vw, 25vw"
                    loading="eager"
                    priority={index < 2}
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-opacity duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Lightbox Modal */}
            {selectedImage && (
              <div
                className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4"
                onClick={() => setSelectedImage(null)}
              >
                <button
                  className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
                  onClick={() => setSelectedImage(null)}
                  aria-label="Close image"
                >
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
                <div className="relative max-w-7xl max-h-full" onClick={(e) => e.stopPropagation()}>
                  <Image
                    src={selectedImage}
                    alt="Enlarged view"
                    width={1200}
                    height={800}
                    className="max-w-full max-h-[90vh] object-contain rounded-lg"
                    priority
                  />
                </div>
              </div>
            )}

            <div className="text-center">
              <a href="tel:7029034687" className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                📞 Schedule Your Tour Today
              </a>
            </div>
          </div>
        </section>

        {/* Community Amenities */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                🏘️ Community Features
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                The Sierra at Skyeview Area, located within Skye Canyon, offers an exceptional lifestyle in Skye Canyon's 1,700-acre master-planned community. A recreational playground with inspiring scenery and an emotionally appealing setting, Skye Canyon is designed for a more engaged community—where work-life balance, a sense of well-being, and a vital active life are the norm.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {amenities.map((amenity, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-lg text-center">
                  <div className="text-4xl mb-4">{amenity.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{amenity.title}</h3>
                  <p className="text-gray-600">{amenity.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Prime Location */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Prime Skye Canyon Location
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Strategically located in Skye Canyon's 1,700-acre master-planned community, the Sierra at Skyeview Area offers unparalleled access to recreation, entertainment, and convenience.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Nearby Attractions</h3>
                <div className="space-y-4">
                  {nearbyAttractions.map((attraction, index) => (
                    <div key={index} className="flex items-start">
                      <div className="text-2xl mr-4">{attraction.icon}</div>
                      <div>
                        <div className="flex items-center">
                          <h4 className="font-semibold text-gray-900">{attraction.title}</h4>
                          <span className="ml-2 text-blue-600 font-semibold text-sm">{attraction.distance}</span>
                        </div>
                        <p className="text-gray-600 text-sm">{attraction.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <img 
                  src="/skye-canyon-community-map.jpg" 
                  alt="Skye Canyon Master Planned Community Map showing neighborhoods, amenities, and Sierra at Skyeview Homes location" 
                  className="w-full h-96 object-cover rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300" 
                  loading="lazy"
                />
                <div className="absolute top-4 left-4 bg-white bg-opacity-90 rounded-lg p-3">
                  <h4 className="font-bold text-gray-900 text-sm">Sierra at Skyeview Homes</h4>
                  <p className="text-xs text-gray-600">Premium new construction homes</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <NearbyAmenitiesSection
          heading={`What's Nearby ${COMMUNITY.name}`}
          intro="Switch categories to explore grocery, parks, healthcare, schools, and shopping around Skye Canyon—then read the full amenity guide with commute tips and FAQs."
        />

        {/* Lifestyle & Recreation */}
        <section className="py-16 bg-blue-900 text-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                🌳 Amenities & Lifestyle
              </h2>
              <p className="text-lg mb-8 max-w-3xl mx-auto">
                A recreational playground with inspiring scenery and an emotionally appealing setting, Skye Canyon's 1,700 acres are designed for a more engaged community—where work-life balance, a sense of well-being, and a vital active life are the norm. Living here, you'll enjoy a recreation center, a fitness center, parks, trails, splash pads, sports courts and fields, neighborhood schools and more!
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl mb-4">🏔️</div>
                <h3 className="text-xl font-bold mb-2">5 Miles to Skye Canyon Park</h3>
                <p className="text-gray-300">World-class recreational facilities, sports fields, and community events at your doorstep</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">🌆</div>
                <h3 className="text-xl font-bold mb-2">20 Miles to Las Vegas Strip</h3>
                <p className="text-gray-300">Easy access to world-class entertainment, dining, and culture</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">⛰️</div>
                <h3 className="text-xl font-bold mb-2">35 Miles to Mount Charleston</h3>
                <p className="text-gray-300">Alpine escape with skiing, hiking, and 20°F cooler temperatures</p>
              </div>
            </div>
          </div>
        </section>

        {/* Smart Home Features */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                🏠 Smart Home Tech
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Every home in the Sierra at Skyeview Area comes equipped with integrated smart home technology for modern convenience and energy efficiency. Located at 3,000+ foot elevation in Skye Canyon with stunning mountain views, these homes feature premium finishes and smart systems optimized for the cooler Las Vegas mountain climate.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl mb-4">📱</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Smart Controls</h3>
                <p className="text-gray-600 text-sm">Control your home from anywhere with your smartphone</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">🔒</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Security System</h3>
                <p className="text-gray-600 text-sm">Advanced security features for peace of mind</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">💡</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Energy Efficient</h3>
                <p className="text-gray-600 text-sm">Smart features to reduce energy consumption</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">🏠</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Premium Finishes</h3>
                <p className="text-gray-600 text-sm">High-quality materials throughout your home</p>
              </div>
            </div>
          </div>
        </section>

        {/* Interactive Community Map */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                🗺️ Explore Skye Canyon Master Plan
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Discover the 1,700-acre master-planned community where the Sierra at Skyeview Area is located. This comprehensive map shows neighborhoods, amenities, schools, and recreational facilities throughout Skye Canyon.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="relative">
                <img 
                  src="/skye-canyon-community-map.jpg" 
                  alt="Skye Canyon Master Planned Community Map showing neighborhoods, amenities, parks, schools, and Sierra at Skyeview Homes location in Las Vegas" 
                  className="w-full h-auto object-contain" 
                  loading="lazy"
                />
                <div className="absolute top-6 left-6 bg-blue-600 text-white rounded-lg p-4 shadow-lg">
                  <h4 className="font-bold text-lg">📍 Sierra at Skyeview Homes</h4>
                  <p className="text-sm opacity-90">Premium new construction homes</p>
                  <p className="text-xs opacity-75 mt-1">Starting from $419,990</p>
                </div>
              </div>
              
              <div className="p-6 bg-gray-50">
                <div className="grid md:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="text-2xl mb-2">🏞️</div>
                    <h4 className="font-semibold text-gray-900">Parks & Recreation</h4>
                    <p className="text-sm text-gray-600">Multiple parks, trails, and open spaces</p>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl mb-2">🏫</div>
                    <h4 className="font-semibold text-gray-900">Top-Rated Schools</h4>
                    <p className="text-sm text-gray-600">Elementary, middle, and high schools</p>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl mb-2">🛍️</div>
                    <h4 className="font-semibold text-gray-900">Shopping & Dining</h4>
                    <p className="text-sm text-gray-600">Retail centers and restaurants nearby</p>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl mb-2">🚗</div>
                    <h4 className="font-semibold text-gray-900">Easy Access</h4>
                    <p className="text-sm text-gray-600">Near major highways and employment centers</p>
                  </div>
                </div>
                
                <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="/skye-canyon-community-map.pdf" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                  >
                    📄 Download Full Community Map (PDF)
                  </a>
                  <a 
                    href="https://www.google.com/maps/search/Skye+Canyon,+Las+Vegas,+NV" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                  >
                    🗺️ View on Google Maps
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Google Maps Location */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                📍 Visit Sierra at Skyeview Homes
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Located in the heart of Skye Canyon, the Sierra at Skyeview Area offers easy access to the Las Vegas Strip, Downtown Las Vegas, and major employment centers.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Location Details</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="text-2xl mr-4">📍</div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Address</h4>
                      <p className="text-gray-600">Call for precise directions</p>
                      <p className="sr-only">8925 Vanhoy Creek St., Las Vegas, NV 89166</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="text-2xl mr-4">🚗</div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Distance to Key Locations</h4>
                      <p className="text-gray-600">• Las Vegas Strip: 25 minutes<br />• Downtown Las Vegas: 20 minutes<br />• McCarran Airport: 30 minutes<br />• Red Rock Canyon: 15 minutes</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="text-2xl mr-4">🛣️</div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Major Highways</h4>
                      <p className="text-gray-600">• US-95: 5 minutes<br />• I-215 Beltway: 10 minutes<br />• Skye Canyon Blvd: Direct access</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <a 
                    href="https://www.google.com/maps/dir/?api=1&destination=8925+Vanhoy+Creek+St,+Las+Vegas,+NV+89166"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                  >
                    🚗 Get Directions
                  </a>
                </div>
              </div>
              
              <div className="relative">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3221.234567890123!2d-115.2848!3d36.2565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c8b4b5b5b5b5b5%3A0x1234567890abcdef!2sSkye%20Canyon%2C%20Las%20Vegas%2C%20NV!5e0!3m2!1sen!2sus!4v1234567890123"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Skye Canyon Community Location in Las Vegas"
                ></iframe>
              </div>
            </div>
          </div>
        </section>

        {/* Community Q&A Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Community Questions & Answers
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Get answers to common questions about Skye Canyon community and amenities.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Is Skye Canyon a gated community?</h3>
                <p className="text-gray-700 mb-4">
                  Many newer communities within Skye Canyon, including Sierra at Skyeview Homes, offer gated access for added security and exclusivity.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">What's the elevation of Skye Canyon?</h3>
                <p className="text-gray-700 mb-4">
                  Skye Canyon is located at 3,000+ foot elevation, providing cooler temperatures and stunning mountain views compared to the Las Vegas valley floor.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">How many homes will be in Skye Canyon?</h3>
                <p className="text-gray-700 mb-4">
                  Upon completion, Skye Canyon will feature approximately 6,500 homes across four meticulously planned phases.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">What schools are nearby?</h3>
                <p className="text-gray-700 mb-4">
                  Excellent schools include William & Mary Scherbenbach Elementary, Arbor View High School, and Somerset Academy-Skye Canyon Campus.
                </p>
              </div>
            </div>

            <div className="text-center">
              <Link href="/qa" className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                View All Community Questions
              </Link>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-red-600 text-white">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Experience Sierra Skyeview in Person?
            </h2>
            <p className="text-lg mb-8">
              These features showcase just a glimpse of the luxury and quality you'll find at Sierra Skyeview. Schedule your personal tour today to see these stunning homes and community features up close.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:7029034687" className="bg-white text-red-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors">
                📞 Call Dr. Jan: (702) 903-4687
              </a>
              <a href="mailto:DrDuffy@SierraSkyeview.com" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-red-600 px-8 py-3 rounded-lg font-semibold transition-colors">
                📧 Email for Tour Info
              </a>
              <Link href="/contact" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-red-600 px-8 py-3 rounded-lg font-semibold transition-colors">
                📋 Contact Form
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Sierra at Skyeview Homes</h3>
              <p className="text-gray-300 mb-4">
                Featured New Home Construction & Buyer Representation Specialist
              </p>
              <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                The Sierra at Skyeview Area, located within Skye Canyon, connects Las Vegas home buyers with new construction opportunities, guided by Buyer's Agent Dr. Jan Duffy.
              </p>
              <p className="text-gray-300">Call to schedule: (702) 903-4687</p>
              <p className="sr-only">8925 Vanhoy Creek St., Las Vegas, NV 89166</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                <Link href="/floor-plans" className="block text-gray-300 hover:text-white">Available Homes</Link>
                <Link href="/community" className="block text-blue-400">Skye Canyon Guide</Link>
                <Link href="/services" className="block text-gray-300 hover:text-white">Buyer Representation Services</Link>
                <Link href="/qa" className="block text-gray-300 hover:text-white">Buyer FAQs</Link>
              </div>
              <h5 className="text-sm font-semibold text-gray-200 mt-6 uppercase tracking-wide">Buyer Resources</h5>
              <div className="space-y-2 text-sm">
                <Link href="/services" className="block text-gray-400 hover:text-white">Las Vegas New Construction Tips</Link>
                <Link href="/community" className="block text-gray-400 hover:text-white">Skye Canyon Amenities &amp; Lifestyle</Link>
                <Link href="/mortgage-calculator" className="block text-gray-400 hover:text-white">New Home Financing Calculator</Link>
                <a
                  href="https://drjanduffy.realscout.com/homesearch/shared-searches/U2hhcmVhYmxlU2VhcmNoTGluay0xNDE5NA=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-gray-400 hover:text-white"
                >
                  View Live Sierra Skyeview Inventory
                </a>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Dr. Jan Duffy</h4>
              <div className="space-y-2 text-gray-300">
                <p><strong>Primary Phone:</strong><br />(702) 903-4687</p>
                <p><strong>Email:</strong><br />DrDuffy@SierraSkyeview.com</p>
                <p><strong>Nevada License:</strong><br />S.0197614</p>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Business Hours</h4>
              <div className="text-gray-300">
                <p>Monday-Sunday: 10:00 AM - 6:00 PM</p>
                <p className="mt-4 text-sm">
                  Independent real estate resource. Dr. Jan Duffy is an independent real estate agent providing expert guidance to home buyers.
                </p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Sierra Skyeview | Homes by Dr Jan Duffy. All rights reserved.</p>
            <div className="flex flex-col items-center gap-4 mt-4">
              <div className="flex items-center justify-center gap-4">
                <p className="text-gray-400">Dr. Jan Duffy | Nevada Real Estate License #S.0197614</p>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Image
                  src="/Berkshire Hathaway HomeServices_Quality Seal_White.png"
                  alt="Berkshire Hathaway HomeServices Logo"
                  width={200}
                  height={40}
                  className="h-8 w-auto opacity-80 hover:opacity-100 transition-opacity"
                  priority={false}
                  quality={60}
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                  }}
                />
                <span className="text-gray-400 text-sm">Berkshire Hathaway HomeServices</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Community;






