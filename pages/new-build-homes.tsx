import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import NearbyAmenitiesSection from "../components/NearbyAmenitiesSection";
import { useState, useEffect } from "react";

const NewBuildHomes: NextPage = () => {
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
  const constructionPhases = [
    {
      phase: "Foundation & Framing",
      duration: "4-6 weeks",
      description: "Site preparation, foundation pour, and structural framing completion",
      features: ["Excavation and grading", "Foundation installation", "Structural framing", "Roof installation"]
    },
    {
      phase: "Mechanical & Electrical",
      duration: "3-4 weeks", 
      description: "Installation of all mechanical, electrical, and plumbing systems",
      features: ["HVAC installation", "Electrical rough-in", "Plumbing installation", "Insulation"]
    },
    {
      phase: "Interior Finishes",
      duration: "4-5 weeks",
      description: "Drywall, flooring, cabinets, and final interior details",
      features: ["Drywall and texturing", "Flooring installation", "Cabinet installation", "Paint and trim"]
    },
    {
      phase: "Final Inspections",
      duration: "1-2 weeks",
      description: "Quality inspections, final walkthrough, and closing preparation",
      features: ["Quality control inspections", "Final walkthrough", "Punch list completion", "Closing preparation"]
    }
  ];

  return (
    <>
      <Head>
        <title>Sierra at Skyeview New Construction Homes | New Build Homes | Northwest Las Vegas 89166</title>
        <meta name="description" content="Sierra at Skyeview new construction homes for sale in Northwest Las Vegas. Located in Skye Canyon near Mount Charleston, zip code 89166. New build homes with custom options. Realtor service when buying a new home from expert buyer's agent Dr. Jan Duffy." />
        <meta property="og:title" content="Sierra at Skyeview New Construction Homes | New Build Homes" />
        <meta property="og:description" content="Sierra at Skyeview new construction homes for sale in Northwest Las Vegas. Located in Skye Canyon near Mount Charleston. New build homes with custom options. Expert realtor service when buying a new home." />
        <meta property="og:image" content="https://www.sierraskyeview.com/9026-rimerton-street-exterior.jpg" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.sierraskyeview.com/new-build-homes" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Sierra at Skyeview New Construction Homes" />
        <meta name="twitter:description" content="Sierra at Skyeview new construction homes for sale in Northwest Las Vegas. New build homes with custom options starting at $420,240." />
        <meta name="twitter:image" content="https://www.sierraskyeview.com/9026-rimerton-street-exterior.jpg" />
        <meta name="keywords" content="Sierra at Skyeview new construction, Sierra at Skyeview new build homes, Sierra at Skyeview Homes new construction, realtor service when buying a new home, Sierra at Skyeview 89166, Northwest Las Vegas new construction, homes near Mount Charleston, zip code 89166" />
        <link rel="canonical" href="https://www.sierraskyeview.com/new-build-homes" />
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
                  "name": "New Construction Homes",
                  "item": "https://www.sierraskyeview.com/new-build-homes"
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
              "description": "Expert buyer's agent specializing in new construction homes at Sierra at Skyeview. Realtor service when buying new build homes in Northwest Las Vegas.",
              "url": "https://www.sierraskyeview.com/new-build-homes",
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
                  "name": "What are the benefits of buying new construction homes at Sierra at Skyeview?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Buying new construction homes at Sierra at Skyeview in Skye Canyon, Northwest Las Vegas, offers modern home designs, energy-efficient systems, warranty coverage, customization opportunities, and access to master-planned community amenities. The elevated location at 3,000+ feet provides cooler temperatures, mountain views, and proximity to Mount Charleston."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How does Dr. Jan Duffy help buyers with new construction homes?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Dr. Jan Duffy provides expert realtor service when buying a new home, including lot selection guidance, market analysis, negotiation expertise, construction oversight, and independent buyer representation. Her realtor service when buying a new home ensures buyers get the best value, terms, and lot selection for their new construction purchase."
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
              <span className="text-gray-600">New Construction Homes</span>
            </nav>
          </div>
        </section>

        {/* Comprehensive Content Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              New Construction Homes at Sierra at Skyeview: Build Your Dream Home in Northwest Las Vegas
            </h2>
            
            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-lg text-gray-700 mb-6">
                Sierra at Skyeview Homes in <Link href="/community" className="text-blue-600 hover:text-blue-700 underline">Skye Canyon</Link>, Northwest Las Vegas, zip code 89166, offers exceptional new construction homes that allow you to build your dream home from the ground up. These new build homes are available in 1,602 sq ft, 1,708 sq ft, and 1,965 sq ft floor plans starting from $420,240, featuring modern designs, premium finishes, smart home technology, and customization opportunities. Located at 3,000+ foot elevation with stunning mountain views and cooler temperatures, these new construction homes provide a unique lifestyle opportunity in Northwest Las Vegas. <Link href="/about" className="text-blue-600 hover:text-blue-700 underline">Dr. Jan Duffy</Link> provides expert realtor service when buying a new home, ensuring you get the best lot selection, pricing, and terms for your new construction purchase.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                Benefits of New Construction Homes in Skye Canyon
              </h3>
              <p className="text-lg text-gray-700 mb-6">
                Buying new construction homes at Sierra at Skyeview offers numerous advantages including modern home designs with the latest architectural trends, energy-efficient systems that reduce utility costs, comprehensive warranty coverage for peace of mind, customization opportunities to create your perfect home, and access to master-planned community amenities in Skye Canyon. The elevated location at 3,000+ feet provides cooler temperatures, stunning mountain views, and proximity to Mount Charleston, creating a unique lifestyle that's increasingly sought after by homebuyers in Northwest Las Vegas.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                Customization and Design Options
              </h3>
              <p className="text-lg text-gray-700 mb-6">
                New construction homes at Sierra at Skyeview offer extensive customization opportunities through the design center process. Buyers can select premium finishes, upgrade packages, and design options to create their perfect home. Dr. Jan Duffy's realtor service when buying a new home includes guidance on which upgrades provide the best return on investment, which are essential for elevated living at 3,000+ feet, and which can be added later. Her expertise ensures buyers make smart decisions about customization that enhance both home value and livability.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                Construction Process and Timeline
              </h3>
              <p className="text-lg text-gray-700 mb-6">
                The new construction process at Sierra at Skyeview typically includes lot selection, design center appointments, construction phases, and final walkthrough. Dr. Jan Duffy's realtor service when buying a new home includes construction oversight, attending key milestones, and ensuring quality standards are met throughout the building process. Her expertise helps identify potential issues early, ensures specifications are followed, and provides peace of mind throughout construction. This construction oversight is essential for protecting your investment and ensuring your new home meets quality standards.
              </p>
            </div>
          </div>
        </section>

        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Sierra at Skyeview New Build Homes Available Now
            </h1>
            <div className="flex flex-col items-center gap-4 mb-8">
              <p className="text-xl max-w-3xl mx-auto">
                Discover exceptional new build homes in the Sierra at Skyeview Area, located within Skye Canyon, Las Vegas. New construction with Dr. Jan Duffy's expert guidance, VIP access, and exclusive benefits.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:7029034687" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                📞 Start Your Build: (702) 903-4687
              </a>
              <Link href="/contact" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg font-semibold transition-colors">
                Get VIP Access
              </Link>
              <a
                href="https://drjanduffy.realscout.com/homesearch/shared-searches/U2hhcmVhYmxlU2VhcmNoTGluay0xNDE5NA=="
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                🔍 Explore Available Homes & Quick Closings
              </a>
            </div>
          </div>
        </section>

        {/* New Build Benefits */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose New Build Homes in the Sierra at Skyeview Area
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                New build homes offer the latest in design, technology, and energy efficiency, perfectly tailored to modern living in Skye Canyon's master-planned community.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white rounded-lg p-6 shadow-lg text-center">
                <div className="text-4xl mb-4">🏠</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Customizable Design</h3>
                <p className="text-gray-600">Choose from premium finishes, upgrades, and design options to create your perfect home at Sierra at Skyeview Homes.</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-lg text-center">
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Modern Technology</h3>
                <p className="text-gray-600">Smart home features, energy-efficient systems, and latest building materials for optimal comfort and savings.</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-lg text-center">
                <div className="text-4xl mb-4">🛡️</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Warranty Coverage</h3>
                <p className="text-gray-600">Comprehensive warranty coverage for all new build homes in the Sierra at Skyeview Area, ensuring quality and peace of mind.</p>
              </div>
            </div>
            
            {/* New Construction Video - Only show if video is verified Sierra at Skyeview content */}
            {/* Video removed pending verification that it shows actual Sierra at Skyeview construction */}
          </div>
        </section>

        {/* Home Search Floor Plan Access */}
        <section className="py-16 bg-white">
          <div className="max-w-5xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Browse Every Home & Quick Move-In Opportunity
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Use Dr. Jan Duffy's private home finder to explore current releases, homes under construction, standing inventory, pricing changes, and exclusive incentives for the Sierra at Skyeview Area in Skye Canyon. No PDFs—just real-time data for this premier 3,000+ foot elevation community with access to Mount Charleston.
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-left mb-10">
              <div className="bg-gray-50 rounded-lg p-6 shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Live Inventory</h3>
                <p className="text-gray-600">See which Homes and elevations are available now or about to release.</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6 shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Photos & Tours</h3>
                <p className="text-gray-600">Browse gallery images, virtual tours, and lot-specific details to narrow your shortlist.</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6 shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Alerts & Follow-Up</h3>
                <p className="text-gray-600">Request showings or turn on alerts so you know the moment a new home matches your criteria.</p>
              </div>
            </div>
            <a
              href="https://drjanduffy.realscout.com/homesearch/shared-searches/U2hhcmVhYmxlU2VhcmNoTGluay0xNDE5NA=="
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              🔍 Launch the Live Home Finder
            </a>
          </div>
        </section>

        {/* Construction Process */}
        <section className="py-16 bg-blue-900 text-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                New Home Construction Process
              </h2>
              <p className="text-lg mb-8">
                New build homes in the Sierra at Skyeview Area follow a proven construction process to ensure quality, efficiency, and timely completion. Located at 3,000+ foot elevation in Skye Canyon with stunning mountain views, these homes are optimized for the cooler Las Vegas mountain climate.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {constructionPhases.map((phase, index) => (
                <div key={index} className="text-center">
                  <div className="bg-blue-800 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold">{index + 1}</span>
                  </div>
                  <h3 className="text-lg font-bold mb-2">{phase.phase}</h3>
                  <p className="text-sm text-blue-200 mb-2">{phase.duration}</p>
                  <p className="text-sm text-gray-300 mb-4">{phase.description}</p>
                  <ul className="text-xs text-gray-300 space-y-1">
                    {phase.features.map((feature, featureIndex) => (
                      <li key={featureIndex}>• {feature}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Sierra at Skyeview Homes Community Information */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Sierra at Skyeview Homes at Skye Canyon - New Homes in Las Vegas
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                The Sierra at Skyeview Area, located within <Link href="/community" className="text-blue-600 hover:text-blue-700 underline">Skye Canyon, Las Vegas</Link>, offers exceptional <Link href="/floor-plans" className="text-blue-600 hover:text-blue-700 underline">new build homes</Link> in Skye Canyon's prestigious master-planned community. Explore <Link href="/quick-move-in" className="text-blue-600 hover:text-blue-700 underline">quick move-in homes</Link> and <Link href="/services" className="text-blue-600 hover:text-blue-700 underline">buyer representation services</Link>.
                <span className="sr-only">Community address: 8925 Vanhoy Creek St., Las Vegas, NV 89166</span>
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Skye Canyon Master-Planned Community</h3>
                <p className="text-gray-600 mb-4">
                  The Sierra at Skyeview Area is part of <Link href="/community" className="text-blue-600 hover:text-blue-700 underline">Skye Canyon's 1,700-acre master-planned community</Link>, offering residents access to world-class amenities, beautiful mountain views, and a vibrant community lifestyle that's unmatched in the Las Vegas Valley.
                </p>
                <p className="text-gray-600 mb-6">
                  Sierra at Skyeview Area features parks, trails, recreational facilities, neighborhood schools, and a stunning central clubhouse. Residents enjoy a perfect balance of suburban tranquility and urban convenience, with easy access to shopping, dining, and entertainment throughout Las Vegas. Learn more about <Link href="/community" className="text-blue-600 hover:text-blue-700 underline">Skye Canyon community amenities</Link> and <Link href="/floor-plans" className="text-blue-600 hover:text-blue-700 underline">available homes</Link>.
                </p>
                <div className="bg-white rounded-lg p-6 shadow-lg">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Community Amenities Include:</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      Central Clubhouse
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      Swimming Pools & Water Features
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      Parks & Walking Trails
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      Sports Courts & Fields
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      Neighborhood Schools
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      Playgrounds & Recreation Areas
                    </li>
                  </ul>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Quality Construction & Warranty</h3>
                <p className="text-gray-600 mb-4">
                  All new build homes in the Sierra at Skyeview Area are constructed with quality materials and craftsmanship. Located at 3,000+ foot elevation in Skye Canyon with access to Mount Charleston, these homes feature premium finishes and smart home technology optimized for the cooler mountain climate.
                </p>
                <p className="text-gray-600 mb-6">
                  All new build homes in the Sierra at Skyeview Area come with comprehensive warranty coverage, including structural warranty, systems warranty, and workmanship warranty. These homes are backed by dedicated customer service and warranty support for Sierra at Skyeview Area's premier 3,000+ foot elevation location in Skye Canyon.
                </p>
                <div className="bg-white rounded-lg p-6 shadow-lg">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Warranty Coverage Includes:</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center">
                      <span className="text-blue-500 mr-2">🛡️</span>
                      Structural Warranty (10 years)
                    </li>
                    <li className="flex items-center">
                      <span className="text-blue-500 mr-2">🔧</span>
                      Systems Warranty (2 years)
                    </li>
                    <li className="flex items-center">
                      <span className="text-blue-500 mr-2">✨</span>
                      Workmanship Warranty (1 year)
                    </li>
                    <li className="flex items-center">
                      <span className="text-blue-500 mr-2">📞</span>
                      Dedicated Customer Service
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Dr. Jan Duffy Buyer Representation Benefits */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Dr. Jan Duffy for New Build Homes
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Dr. Jan Duffy's buyer representation provides exclusive benefits and expert guidance for new build home buyers in the Sierra at Skyeview Area. Located at 3,000+ foot elevation in Skye Canyon with stunning mountain views and access to Mount Charleston, this premier community offers a unique Las Vegas lifestyle. As your Buyer's Agent, Dr. Jan represents YOUR interests exclusively—not the builder's.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Exclusive Buyer Benefits</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="text-2xl mr-4">🎯</div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">Early Lot Selection</h4>
                      <p className="text-gray-600">Get first access to the best lots and home sites before they're released to the general public.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="text-2xl mr-4">💰</div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">Special Pricing & Incentives</h4>
                      <p className="text-gray-600">Access to exclusive pricing, incentives, and upgrade packages not always available to other buyers through Dr. Jan's buyer representation.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="text-2xl mr-4">📋</div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">Streamlined Process</h4>
                      <p className="text-gray-600">Buyer's Agent representation ensures smooth coordination throughout the build process in the Sierra at Skyeview Area.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="text-2xl mr-4">🤝</div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">Expert Negotiation</h4>
                      <p className="text-gray-600">Professional negotiation on your behalf to secure the best terms, pricing, and upgrade options.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Professional Guidance & Support</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="text-2xl mr-4">🏠</div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">New Construction Expertise</h4>
                      <p className="text-gray-600">Specialized knowledge of new home construction process, timelines, and what to expect at each phase.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="text-2xl mr-4">📍</div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">Local Market Knowledge</h4>
                      <p className="text-gray-600">Deep understanding of Las Vegas real estate market and Skye Canyon community development.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="text-2xl mr-4">📊</div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">Investment Guidance</h4>
                      <p className="text-gray-600">Expert advice on home features, upgrades, and market trends to maximize your investment value.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="text-2xl mr-4">🎓</div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">Licensed Professional</h4>
                      <p className="text-gray-600">Nevada real estate license S.0197614 with ongoing education and professional development.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <NearbyAmenitiesSection compact heading="What's Near Your New Build in Skye Canyon" />

        {/* Call to Action */}
        <section className="py-16 bg-blue-600 text-white">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Start Building Your Dream Home Today!
            </h2>
            <p className="text-lg mb-8">
              Don't wait! New build homes in the Sierra at Skyeview Area are in high demand. Contact Dr. Jan Duffy today to get VIP access and start your new home construction.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:7029034687" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors">
                📞 START BUILDING: (702) 903-4687
              </a>
              <a href="mailto:DrDuffy@SierraSkyeview.com" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg font-semibold transition-colors">
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
              <p className="text-gray-300 mb-4">Call to schedule: (702) 903-4687</p>
              <p className="sr-only">8925 Vanhoy Creek St., Las Vegas, NV 89166</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                <Link href="/floor-plans" className="block text-gray-300 hover:text-white">Available Homes</Link>
                <Link href="/community" className="block text-gray-300 hover:text-white">Skye Canyon Guide</Link>
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

      {/* Sticky Mobile CTA */}
      <div
        className={`fixed bottom-0 left-0 right-0 bg-blue-600 text-white shadow-2xl z-50 transition-transform duration-300 md:hidden ${
          showMobileCTA ? 'translate-y-0' : 'translate-y-full'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between gap-3">
            <div className="flex-1">
              <p className="text-sm font-semibold">Start Building Today</p>
              <p className="text-xs text-blue-100">Call Dr. Jan Now</p>
            </div>
            <a
              href="tel:7029034687"
              className="bg-white text-blue-600 hover:bg-gray-100 px-6 py-2 rounded-lg font-bold transition-colors whitespace-nowrap"
            >
              📞 (702) 903-4687
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewBuildHomes;





