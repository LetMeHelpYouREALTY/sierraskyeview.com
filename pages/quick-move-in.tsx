import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

const QuickMoveIn: NextPage = () => {
  const [showMobileCTA, setShowMobileCTA] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      setShowMobileCTA(scrollPosition > windowHeight * 0.5);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <>
      <Head>
        <title>Sierra at Skyeview Quick Move-In Homes | Available Now | Northwest Las Vegas 89166</title>
        <meta name="description" content="Sierra at Skyeview quick move-in homes available now in Northwest Las Vegas, zip code 89166. Located in Skye Canyon near Mount Charleston. New homes ready now starting at $420,240. 1,602 sq ft homes available for immediate occupancy. Realtor service when buying a new home from buyer's agent Dr. Jan Duffy." />
        <meta property="og:title" content="Sierra at Skyeview Quick Move-In Homes | Available Now" />
        <meta property="og:description" content="Sierra at Skyeview quick move-in homes available now in Northwest Las Vegas. Located in Skye Canyon near Mount Charleston. New construction homes ready for immediate occupancy. Expert realtor service when buying a new home." />
        <meta property="og:image" content="https://www.sierraskyeview.com/9026-rimerton-street-exterior.jpg" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.sierraskyeview.com/quick-move-in" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Sierra at Skyeview Quick Move-In Homes | Available Now" />
        <meta name="twitter:description" content="Sierra at Skyeview quick move-in homes available now in Northwest Las Vegas. New construction homes ready for immediate occupancy starting at $420,240." />
        <meta name="twitter:image" content="https://www.sierraskyeview.com/9026-rimerton-street-exterior.jpg" />
        <meta name="keywords" content="Sierra at Skyeview quick move-in homes, Sierra at Skyeview Homes available now, homes for sale Northwest Las Vegas ready, realtor service when buying a new home, Sierra at Skyeview 89166, Mount Charleston area homes, Northwest Las Vegas new construction" />
        <link rel="canonical" href="https://www.sierraskyeview.com/quick-move-in" />
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
                  "name": "Quick Move-In Homes",
                  "item": "https://www.sierraskyeview.com/quick-move-in"
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
              "description": "Expert buyer's agent specializing in quick move-in homes at Sierra at Skyeview. Realtor service when buying new construction homes in Northwest Las Vegas.",
              "url": "https://www.sierraskyeview.com/quick-move-in",
              "telephone": "(702) 903-4687",
              "email": "DrDuffy@SierraSkyeview.com",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "8925 Vanhoy Creek St.",
                "addressLocality": "Las Vegas",
                "addressRegion": "NV",
                "postalCode": "89166",
                "addressCountry": "US"
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
                  "name": "Are there quick move-in homes available at Sierra at Skyeview?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, Sierra at Skyeview Homes in Skye Canyon, Northwest Las Vegas, offers quick move-in homes for immediate occupancy. These homes are available in 1,602 sq ft, 1,708 sq ft, and 1,965 sq ft floor plans starting from $420,240. Dr. Jan Duffy tracks availability and helps buyers secure quick move-in homes with expert buyer representation."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How does Dr. Jan Duffy help buyers find quick move-in homes?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Dr. Jan Duffy provides expert realtor service when buying a new home, including tracking quick move-in availability, helping buyers evaluate homes for immediate occupancy, and negotiating the best terms for quick move-in purchases. Her realtor service when buying a new home ensures buyers get the best value and terms for their quick move-in home purchase."
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
              <Link href="/quick-move-in" className="text-blue-600 font-medium">Quick Move-In</Link>
              <Link href="/new-build-homes" className="text-gray-700 hover:text-blue-600 font-medium">New Construction</Link>
              <Link href="/reviews" className="text-gray-700 hover:text-blue-600 font-medium">Reviews</Link>
              <Link href="/services" className="text-gray-700 hover:text-blue-600 font-medium">Services</Link>
              <Link href="/blog" className="text-gray-700 hover:text-blue-600 font-medium">Blog</Link>
              <Link href="/about" className="text-gray-700 hover:text-blue-600 font-medium">About Dr. Jan</Link>
              <Link href="/contact" className="text-gray-700 hover:text-blue-600 font-medium">Contact</Link>
              <Link href="/qa" className="text-gray-700 hover:text-blue-600 font-medium">Q&amp;A</Link>
            </div>
            <div className="md:hidden">
              <button className="text-gray-700" aria-label="Open menu">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
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
              <span className="text-gray-600">Quick Move-In Homes</span>
            </nav>
          </div>
        </section>

        {/* Comprehensive Content Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              Quick Move-In Homes at Sierra at Skyeview: Immediate Occupancy in Northwest Las Vegas
            </h2>
            
            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-lg text-gray-700 mb-6">
                Sierra at Skyeview Homes in <Link href="/community" className="text-blue-600 hover:text-blue-700 underline">Skye Canyon</Link>, Northwest Las Vegas, zip code 89166, offers quick move-in homes for buyers who want immediate occupancy without waiting for construction completion. These move-in ready homes are available in 1,602 sq ft, 1,708 sq ft, and 1,965 sq ft floor plans starting from $420,240, featuring premium finishes, smart home technology, and access to world-class community amenities. <Link href="/about" className="text-blue-600 hover:text-blue-700 underline">Dr. Jan Duffy</Link> provides expert realtor service when buying a new home, helping buyers secure quick move-in homes with the best terms and value.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                Benefits of Quick Move-In Homes in Skye Canyon
              </h3>
              <p className="text-lg text-gray-700 mb-6">
                Quick move-in homes at Sierra at Skyeview offer numerous advantages for buyers who want to start enjoying their new home immediately. These homes allow you to move in right away without waiting months for construction, avoid potential construction delays or supply chain issues, see exactly what you're buying before you purchase, and start enjoying Skye Canyon's amenities and elevated living at 3,000+ feet immediately. Located near Mount Charleston in Northwest Las Vegas, these quick move-in homes provide immediate access to the unique lifestyle that Skye Canyon offers.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                Available Quick Move-In Homes
              </h3>
              <p className="text-lg text-gray-700 mb-6">
                Sierra at Skyeview Homes currently offers quick move-in homes in various floor plans, including 1,602 sq ft homes starting at $420,240, 1,708 sq ft homes starting at $429,990, and 1,965 sq ft homes starting at $449,990. Each quick move-in home features premium finishes, integrated smart home technology, energy-efficient systems, and designs that maximize natural light and mountain views. Dr. Jan Duffy's realtor service when buying a new home includes tracking quick move-in availability and helping buyers evaluate these homes for immediate occupancy.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                Expert Realtor Service for Quick Move-In Purchases
              </h3>
              <p className="text-lg text-gray-700 mb-6">
                Dr. Jan Duffy's realtor service when buying a new home includes specialized guidance for quick move-in purchases. She helps buyers evaluate quick move-in homes, understand what's included versus what can be customized, negotiate the best terms for immediate occupancy, and ensure the home meets quality standards before closing. Her expertise in Northwest Las Vegas new construction and Skye Canyon ensures buyers make informed decisions about their quick move-in home purchase.
              </p>
            </div>
          </div>
        </section>

        {/* Hero Section */}
        <section className="bg-gradient-to-r from-green-600 to-green-700 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Sierra at Skyeview Quick Move-In Homes Available Now
            </h1>
            <div className="flex flex-col items-center gap-4 mb-8">
              <p className="text-xl max-w-3xl mx-auto">
                Don't wait months for construction! Discover move-in ready homes in the <Link href="/community" className="text-green-300 hover:text-green-200 underline">Sierra at Skyeview Area, located within Skye Canyon, Las Vegas</Link>. Currently available: <Link href="/model-1602" className="text-green-300 hover:text-green-200 underline">1,602 sq ft homes</Link> starting at $420,240. Get expert guidance from <Link href="/about" className="text-green-300 hover:text-green-200 underline">Dr. Jan Duffy</Link> for new homes available for immediate occupancy. Browse all <Link href="/floor-plans" className="text-green-300 hover:text-green-200 underline">available homes</Link> and <Link href="/new-build-homes" className="text-green-300 hover:text-green-200 underline">new construction opportunities</Link>.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:7029034687" className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                📞 Check Availability: (702) 903-4687
              </a>
              <Link href="/contact" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-green-600 px-8 py-3 rounded-lg font-semibold transition-colors">
                Schedule Tour Today
              </Link>
            </div>
          </div>
        </section>

        {/* Available Homes - Home Search Widgets */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Move-In Ready Homes at Sierra at Skyeview Homes
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Explore these carefully selected homes available for quick move-in in the <Link href="/community" className="text-blue-600 hover:text-blue-700 underline">Sierra at Skyeview Area in Skye Canyon</Link>. Each home features premium finishes, smart home technology, and access to world-class <Link href="/community" className="text-blue-600 hover:text-blue-700 underline">community amenities</Link>. Learn more about <Link href="/services" className="text-blue-600 hover:text-blue-700 underline">buyer representation services</Link> and <Link href="/new-build-homes" className="text-blue-600 hover:text-blue-700 underline">new construction homes</Link>.
                <span className="sr-only">Community address: 8925 Vanhoy Creek St., Las Vegas, NV 89166</span>
              </p>
            </div>

            {/* 8990 Rimerton Street - Home Listing Widget */}
            <div className="mb-12">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="p-6 border-b">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">8990 Rimerton Street</h3>
                  <p className="text-gray-600">1,602 sq ft | Lot SRA024</p>
                </div>
                <div className="px-6 py-4 text-sm text-gray-600">
                  This home listing is updated in real time with status notes, pricing changes, and incentive callouts curated by Dr. Jan. Use it alongside the{" "}
                  <Link href="/model-1602" className="text-blue-600 hover:text-blue-700 underline">
                    1,602 sq ft homes tracker
                  </Link>{" "}
                  to monitor upcoming releases.
                </div>
                <div className="bg-gray-50" style={{ minHeight: '700px' }}>
                  <iframe
                    src="https://drjanduffy.realscout.com/homesearch/listings/p-8990-rimerton-street-las-vegas-89166-glvartrestle-875"
                    width="100%"
                    height="700"
                    style={{ border: 0 }}
                    title="Home Listing - 8990 Rimerton Street"
                    allowFullScreen
                    loading="lazy"
                    className="w-full"
                  ></iframe>
                </div>
              </div>
            </div>

            {/* 9026 Rimerton Street - Home Listing Widget */}
            <div className="mb-12">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="p-6 border-b">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">9026 Rimerton Street</h3>
                  <p className="text-gray-600">1,602 sq ft | Lot SRA015</p>
                </div>
                <div className="px-6 py-4 text-sm text-gray-600">
                  Compare this release with other lots in Skye Canyon. Notes from Dr. Jan highlight which upgrades are builder-selected and how close the home is to the{" "}
                  <a
                    href="https://skyecanyon.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-700 underline"
                  >
                    Skye Canyon amenities
                  </a>
                  .
                </div>
                <div className="bg-gray-50" style={{ minHeight: '700px' }}>
                  <iframe
                    src="https://drjanduffy.realscout.com/homesearch/listings/p-9026-rimerton-street-las-vegas-89166-glvartrestle-6"
                    width="100%"
                    height="700"
                    style={{ border: 0 }}
                    title="Home Listing - 9026 Rimerton Street"
                    allowFullScreen
                    loading="lazy"
                    className="w-full"
                  ></iframe>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Home Search Widget */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                🏠 Explore All Available Homes
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Use Dr. Jan Duffy's private home finder to explore all available homes, pricing, photos, lot statuses, and incentive notes in real time. Every search result is tagged with buyer-only commentary you won’t see on public portals.
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg shadow-lg overflow-hidden" style={{ minHeight: '800px' }}>
              <iframe
                src="https://drjanduffy.realscout.com/homesearch/shared-searches/U2hhcmVhYmxlU2VhcmNoTGluay0xNDE5NA=="
                width="100%"
                height="800"
                style={{ border: 0 }}
                title="Home Search - All Available Homes"
                allowFullScreen
                loading="lazy"
                className="w-full"
              ></iframe>
            </div>
          </div>
        </section>

        {/* Why Choose Quick Move-In */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Benefits of Quick Move-In Homes at Sierra at Skyeview Homes
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Quick move-in homes offer numerous advantages for buyers who want to start enjoying their new home immediately without waiting for construction completion.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl mb-4">🏠</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Immediate Occupancy</h3>
                <p className="text-gray-600">Move in right away and start enjoying your new home in the Sierra at Skyeview Area without waiting months for construction to complete.</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">💰</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">No Construction Delays</h3>
                <p className="text-gray-600">Avoid potential construction delays, weather issues, or supply chain problems that can extend your move-in timeline.</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">🎨</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Premium Finishes</h3>
                      <p className="text-gray-600">These homes feature carefully selected upgrades and finishes that showcase the quality and craftsmanship of Sierra at Skyeview Homes.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Sierra at Skyeview Homes Community Details */}
        <section className="py-16 bg-blue-900 text-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Sierra at Skyeview Homes at Skye Canyon - New Homes in Las Vegas
              </h2>
              <p className="text-lg mb-8">
                Located at 8925 Vanhoy Creek St., Las Vegas, NV 89166, the Sierra at Skyeview Area offers exceptional new homes within the prestigious Skye Canyon master-planned community.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold mb-6">Community Features</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="text-2xl mr-4">🏞️</div>
                    <div>
                      <h4 className="text-lg font-semibold mb-2">Skye Canyon Master-Planned Community</h4>
                      <p className="text-gray-300">Part of a 1,700-acre master-planned community with parks, trails, recreational facilities, and neighborhood schools.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="text-2xl mr-4">🏊</div>
                    <div>
                      <h4 className="text-lg font-semibold mb-2">World-Class Amenities</h4>
                      <p className="text-gray-300">Access to pools, clubhouse, sports courts, playgrounds, and community events throughout the year.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="text-2xl mr-4">🏫</div>
                    <div>
                      <h4 className="text-lg font-semibold mb-2">Excellent Schools</h4>
                      <p className="text-gray-300">Neighborhood schools provide quality education for families with children of all ages.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold mb-6">Floor Plan Options</h3>
                <div className="space-y-4">
                  <div className="bg-gray-800 rounded-lg p-4">
                    <h4 className="text-lg font-semibold mb-2">1,602 sq ft Homes</h4>
                    <p className="text-gray-300">3 bed, 2.5 bath - Starting from $420,240</p>
                  </div>
                  <div className="bg-gray-800 rounded-lg p-4">
                    <h4 className="text-lg font-semibold mb-2">1,708 sq ft Homes</h4>
                    <p className="text-gray-300">3 bed, 2.5 bath - Starting from $429,990</p>
                  </div>
                  <div className="bg-gray-800 rounded-lg p-4">
                    <h4 className="text-lg font-semibold mb-2">1,965 sq ft Homes</h4>
                    <p className="text-gray-300">3 bed, 2.5 bath - Starting from $449,990</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* Dr. Jan Duffy Buyer Representation */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Work With Dr. Jan Duffy for Quick Move-In Homes
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Dr. Jan Duffy's buyer representation provides early insight into quick move-in homes in the Sierra at Skyeview Area and expert guidance throughout the home buying process. Located at 3,000+ foot elevation in Skye Canyon with access to Mount Charleston, this premier community offers a unique Las Vegas lifestyle. As your Buyer's Agent, Dr. Jan represents YOUR interests exclusively—not the builder's.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Sierra at Skyeview Homes Buyer Benefits</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="text-2xl mr-4">🤝</div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">Exclusive Access</h4>
                      <p className="text-gray-600">Get first access to quick move-in homes before they're listed publicly, ensuring you have the best selection available.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="text-2xl mr-4">💰</div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">Better Pricing</h4>
                      <p className="text-gray-600">Access to special pricing, incentives, and upgrades that may not be available to other buyers thanks to Dr. Jan's buyer-focused advocacy.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="text-2xl mr-4">📋</div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">Streamlined Process</h4>
                      <p className="text-gray-600">Buyer's Agent representation ensures a smooth, efficient home buying experience for quick move-in homes in the Sierra at Skyeview Area.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg p-8 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Contact Dr. Jan Duffy</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="text-2xl mr-4">📞</div>
                    <div>
                      <p className="font-semibold text-gray-900">Phone</p>
                      <a href="tel:7029034687" className="text-blue-600 hover:text-blue-700">(702) 903-4687</a>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="text-2xl mr-4">📧</div>
                    <div>
                      <p className="font-semibold text-gray-900">Email</p>
                      <a href="mailto:DrDuffy@SierraSkyeview.com" className="text-blue-600 hover:text-blue-700">DrDuffy@SierraSkyeview.com</a>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="text-2xl mr-4">📍</div>
                    <div>
                      <p className="font-semibold text-gray-900">Address</p>
                      <p className="text-gray-600">8925 Vanhoy Creek St.<br />Las Vegas, NV 89166</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="text-2xl mr-4">🏛️</div>
                    <div>
                      <p className="font-semibold text-gray-900">License</p>
                      <p className="text-gray-600">Nevada License S.0197614</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-green-600 text-white">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Don't Miss Out on Quick Move-In Homes!
            </h2>
            <p className="text-lg mb-8">
              Quick move-in homes in the Sierra at Skyeview Area are in high demand. Contact Dr. Jan Duffy today to check availability and secure your new home.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:7029034687" className="bg-white text-green-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors">
                📞 CHECK AVAILABILITY: (702) 903-4687
              </a>
              <a href="mailto:DrDuffy@SierraSkyeview.com" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-green-600 px-8 py-3 rounded-lg font-semibold transition-colors">
                📧 EMAIL DR. JAN
              </a>
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
                <Link href="/community" className="block text-gray-300 hover:text-white">Skye Canyon Guide</Link>
                <Link href="/quick-move-in" className="block text-gray-300 hover:text-white">Quick Move-In Homes</Link>
                <Link href="/services" className="block text-gray-300 hover:text-white">Buyer Representation Services</Link>
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

      {/* Sticky Mobile CTA */}
      <div
        className={`fixed bottom-0 left-0 right-0 bg-green-600 text-white shadow-2xl z-50 transition-transform duration-300 md:hidden ${
          showMobileCTA ? 'translate-y-0' : 'translate-y-full'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between gap-3">
            <div className="flex-1">
              <p className="text-sm font-semibold">Check Availability Now</p>
              <p className="text-xs text-green-100">Call Dr. Jan</p>
            </div>
            <a
              href="tel:7029034687"
              className="bg-white text-green-600 hover:bg-gray-100 px-6 py-2 rounded-lg font-bold transition-colors whitespace-nowrap"
            >
              📞 (702) 903-4687
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default QuickMoveIn;





