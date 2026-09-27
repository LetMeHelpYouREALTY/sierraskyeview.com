import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

const Model1708: NextPage = () => {
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
        <title>1,708 sq ft Homes for Sale Sierra at Skyeview | Starting $429,990 | Northwest Las Vegas 89166</title>
        <meta
          name="description"
          content="1,708 sq ft homes for sale at Sierra at Skyeview in Northwest Las Vegas, zip code 89166. Located in Skye Canyon near Mount Charleston. View live availability, pricing starting at $429,990, incentives, and lot releases. 3 bed, 2.5 bath new construction. Realtor service when buying a new home from buyer's agent Dr. Jan Duffy."
        />
        <meta name="keywords" content="1,708 sq ft homes for sale, Sierra at Skyeview homes, Northwest Las Vegas new construction, Skye Canyon homes, 89166 homes for sale, Mount Charleston area homes, 3 bedroom homes Las Vegas, new construction homes, realtor service when buying a new home" />
        <meta property="og:title" content="1,708 sq ft Homes for Sale at Sierra at Skyeview | Starting $429,990" />
        <meta
          property="og:description"
          content="1,708 sq ft homes for sale at Sierra at Skyeview in Northwest Las Vegas. Located in Skye Canyon near Mount Charleston. View real-time availability, pricing, and incentives. 3 bed, 2.5 bath new construction. Expert realtor service when buying a new home."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.sierraskyeview.com/model-1708" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="1,708 sq ft Homes for Sale at Sierra at Skyeview" />
        <meta name="twitter:description" content="View 1,708 sq ft new construction homes starting at $429,990 in Skye Canyon, Northwest Las Vegas. Expert buyer representation available." />
        <link rel="canonical" href="https://www.sierraskyeview.com/model-1708" />
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
                  "name": "Floor Plans",
                  "item": "https://www.sierraskyeview.com/floor-plans"
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "name": "1,708 sq ft Homes",
                  "item": "https://www.sierraskyeview.com/model-1708"
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
              "description": "Buyer's agent for 1,708 sq ft homes at Sierra at Skyeview in Northwest Las Vegas",
              "url": "https://www.sierraskyeview.com/model-1708",
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
                  "name": "What is the starting price for 1,708 sq ft homes at Sierra at Skyeview?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "1,708 sq ft homes at Sierra at Skyeview start at $429,990 with 3 bedrooms and 2.5 bathrooms. This two-story home features an open-concept design and premium finishes perfect for families seeking more space."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What makes 1,708 sq ft homes different from other floor plans?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "1,708 sq ft homes offer ideal space for families who need more room than 1,602 sq ft but don't need the largest option. They feature premium finishes and smart home technology."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Are there quick move-in 1,708 sq ft homes available?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, 1,708 sq ft quick move-in homes may be available. Dr. Jan Duffy tracks each release and can help you find available homes with immediate occupancy or preferred delivery dates."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How does Dr. Jan Duffy help with 1,708 sq ft home purchases?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Dr. Jan represents the buyer—not the builder. She provides unbiased guidance, negotiates incentives, surfaces exclusive lot information, and manages the build process through closing to protect your investment."
                  }
                }
              ]
            })
          }}
        />
        {/* Product Schema for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Product",
              "name": "1,708 sq ft Homes at Sierra at Skyeview",
              "description": "New construction 1,708 sq ft homes for sale at Sierra at Skyeview in Skye Canyon, Northwest Las Vegas. 3 bedrooms, 2.5 bathrooms, starting at $429,990.",
              "brand": {
                "@type": "Brand",
                "name": "Sierra at Skyeview"
              },
              "offers": {
                "@type": "AggregateOffer",
                "priceCurrency": "USD",
                "lowPrice": "429990",
                "highPrice": "550000",
                "priceValidUntil": "2025-12-31",
                "availability": "https://schema.org/InStock",
                "seller": {
                  "@type": "RealEstateAgent",
                  "name": "Dr. Jan Duffy"
                }
              },
              "areaServed": {
                "@type": "City",
                "name": "Las Vegas",
                "sameAs": "https://en.wikipedia.org/wiki/Las_Vegas"
              },
              "location": {
                "@type": "Place",
                "name": "Sierra at Skyeview",
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "Las Vegas",
                  "addressRegion": "NV",
                  "postalCode": "89166",
                  "addressCountry": "US"
                }
              }
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
        {/* Compact Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-8">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div className="flex-1">
                <h1 className="text-3xl md:text-4xl font-bold mb-3">
                  1,708 sq ft Homes Available
                </h1>
                <p className="text-lg text-blue-100 mb-4">
                  View real-time availability, pricing, and incentives for 1,708 sq ft homes at Sierra at Skyeview. Starting at $429,990 | 3 Bed | 2.5 Bath
                </p>
                <div className="flex flex-wrap gap-3">
                  <a href="tel:7029034687" className="btn-primary text-sm px-5 py-2">
                    📞 (702) 903-4687
                  </a>
                  <a href="mailto:DrDuffy@SierraSkyeview.com" className="btn-secondary text-sm px-5 py-2">
                    📧 Email Dr. Jan
                  </a>
                </div>
              </div>
              <div className="md:w-80">
                <div className="bg-white/10 backdrop-blur rounded-xl p-4 border border-white/20">
                  <p className="text-sm font-semibold mb-2">Real-Time Information Available</p>
                  <ul className="text-sm text-blue-100 space-y-1">
                    <li>✓ Premium view lots</li>
                    <li>✓ Incentive notes & status</li>
                    <li>✓ Real-time availability</li>
                    <li>✓ Curated by Dr. Jan Duffy</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Breadcrumb Navigation */}
        <section className="bg-gray-50 py-4">
          <div className="max-w-7xl mx-auto px-4">
            <nav className="flex items-center space-x-2 text-sm">
              <Link href="/" className="text-blue-600 hover:text-blue-700">Home</Link>
              <span className="text-gray-400">/</span>
              <Link href="/floor-plans" className="text-blue-600 hover:text-blue-700">Floor Plans</Link>
              <span className="text-gray-400">/</span>
              <span className="text-gray-600">1,708 sq ft Homes</span>
            </nav>
          </div>
        </section>

        {/* Comprehensive Content Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              1,708 sq ft Homes at Sierra at Skyeview: Spacious Living in Northwest Las Vegas
            </h2>
            
            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-lg text-gray-700 mb-6">
                The 1,708 sq ft homes at <Link href="/floor-plans" className="text-blue-600 hover:text-blue-700 underline">Sierra at Skyeview Homes</Link> in <Link href="/community" className="text-blue-600 hover:text-blue-700 underline">Skye Canyon</Link>, Northwest Las Vegas, zip code 89166, offer an ideal balance of space and value for buyers seeking new construction homes with room to grow. Starting at $429,990, these homes feature 3 bedrooms and 2.5 bathrooms in a thoughtfully designed two-story layout that maximizes both functionality and comfort. Located at 3,000+ foot elevation with stunning mountain views and cooler temperatures, these 1,708 sq ft homes provide exceptional value in Northwest Las Vegas. <Link href="/about" className="text-blue-600 hover:text-blue-700 underline">Dr. Jan Duffy</Link> provides expert realtor service when buying a new home, ensuring you get the best lot selection, pricing, and terms for your 1,708 sq ft home purchase.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                Thoughtful Design with Additional Space
              </h3>
              <p className="text-lg text-gray-700 mb-6">
                The 1,708 sq ft homes at Sierra at Skyeview feature a thoughtful design that provides additional space compared to the 1,602 sq ft model, making them ideal for families who need more room or those who want extra space for home offices, hobbies, or entertaining. The additional square footage is distributed throughout the home, creating more generous bedrooms, larger living areas, and enhanced storage. This thoughtful design ensures the 1,708 sq ft feels spacious and comfortable while maintaining efficient use of space. The layout is particularly well-suited for Northwest Las Vegas living, providing flexibility for various lifestyle needs.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                Enhanced Features and Premium Finishes
              </h3>
              <p className="text-lg text-gray-700 mb-6">
                The 1,708 sq ft homes at Sierra at Skyeview include enhanced features and premium finishes that take advantage of the additional space. These homes feature upgraded cabinetry, larger kitchen islands, more extensive counter space, and enhanced storage solutions. The premium finishes are designed to create a luxurious living experience while maintaining practicality for daily life. The additional square footage allows for more elaborate design elements and features that enhance both aesthetics and functionality. These enhanced features make the 1,708 sq ft homes an excellent choice for buyers seeking new construction homes with premium amenities in Northwest Las Vegas.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                Ideal for Growing Families in Northwest Las Vegas
              </h3>
              <p className="text-lg text-gray-700 mb-6">
                The 1,708 sq ft homes at Sierra at Skyeview are ideal for growing families in Northwest Las Vegas who need space for children, home offices, or multi-generational living. The three bedrooms provide comfortable accommodation, while the additional square footage allows for larger bedrooms, more storage, and flexible spaces that can adapt to changing needs. The layout supports family life with open living areas for gathering and more private spaces for individual activities. This makes the 1,708 sq ft homes perfect for families seeking new construction homes in Skye Canyon that can accommodate growth and changing lifestyle needs.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                Energy Efficiency and Smart Home Technology
              </h3>
              <p className="text-lg text-gray-700 mb-6">
                Like all Sierra at Skyeview Homes, the 1,708 sq ft homes feature energy-efficient systems and integrated smart home technology. The energy efficiency is particularly important for the elevated location at 3,000+ feet in Skye Canyon, where the cooler climate can be optimized for comfort and cost savings. The smart home technology allows homeowners to control lighting, temperature, security, and entertainment systems from anywhere, enhancing both convenience and energy management. These features, combined with the elevated location, create a modern living experience that's both comfortable and efficient for Northwest Las Vegas homeowners.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                Lot Selection for Maximum Value
              </h3>
              <p className="text-lg text-gray-700 mb-6">
                When purchasing a 1,708 sq ft home at Sierra at Skyeview, lot selection is crucial for maximizing views, natural light, and long-term value. Dr. Jan Duffy's realtor service when buying a new home includes expert lot selection guidance, helping buyers evaluate homesites based on mountain views, sun exposure, privacy, and proximity to Skye Canyon amenities. Many lots offer stunning views of Mount Charleston and the Spring Mountains, creating a sense of living in a mountain retreat. The elevated location in Skye Canyon provides opportunities for lots with panoramic valley views as well. Dr. Jan's expertise in Northwest Las Vegas new construction ensures buyers select lots that maximize both lifestyle enjoyment and investment value.
              </p>
            </div>
          </div>
        </section>

        {/* Home Search Widget - PRIMARY FOCUS */}
        <section className="py-6 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="bg-white rounded-xl shadow-large overflow-hidden">
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-4">
                <h2 className="text-2xl font-bold mb-1">
                  1,708 sq ft Homes for Sale
                </h2>
                <p className="text-blue-100 text-sm">
                  Browse current listings with pricing, lot details, and incentives curated by <Link href="/about" className="underline hover:text-white">Dr. Jan Duffy</Link> • Includes information not found on public portals
                </p>
              </div>
              <div className="bg-white" style={{ minHeight: '900px' }}>
                <iframe
                  src="https://drjanduffy.realscout.com/homesearch/shared-searches/U2hhcmVhYmxlU2VhcmNoTGluay0xNDE5NA=="
                  width="100%"
                  height="900"
                  style={{ border: 0 }}
                  title="1,708 sq ft Homes for Sale - Sierra at Skyeview"
                  allowFullScreen
                  loading="eager"
                  className="w-full"
                ></iframe>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Info Bar */}
        <section className="py-6 bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <p className="text-sm text-gray-600 mb-1">Starting Price</p>
                <p className="text-2xl font-bold text-gray-900">$429,990</p>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-1">Square Feet</p>
                <p className="text-2xl font-bold text-gray-900">1,708 sq ft</p>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-1">Perfect For</p>
                <p className="text-2xl font-bold text-gray-900">Growing Families</p>
              </div>
            </div>
          </div>
        </section>

        {/* Related Floor Plans - Compact */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Explore Other Floor Plans
            </h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <Link href="/model-1602" className="card p-5 hover:shadow-glow transition-all group">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600">1,602 sq ft Homes</h3>
                <p className="text-gray-600 mb-2">Starting at $420,240 | 3 Bed | 2.5 Bath</p>
                <p className="text-sm text-blue-600 font-semibold">View Available Homes →</p>
              </Link>
              <Link href="/model-1965" className="card p-5 hover:shadow-glow transition-all group">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600">1,965 sq ft Homes</h3>
                <p className="text-gray-600 mb-2">Starting at $449,990 | 3 Bed | 2.5 Bath</p>
                <p className="text-sm text-blue-600 font-semibold">View Available Homes →</p>
              </Link>
            </div>
            <div className="text-center mt-6">
              <Link href="/floor-plans" className="text-blue-600 hover:text-blue-700 font-semibold">
                View All Floor Plans →
              </Link>
            </div>
          </div>
        </section>

        {/* Contact CTA - Compact */}
        <section className="py-10 bg-gradient-to-r from-red-600 to-red-700 text-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold mb-3">
              Need Help Finding the Right Home?
            </h2>
            <p className="text-red-100 mb-6">
              Dr. Jan Duffy represents YOU—not the builder. Get expert guidance, negotiate incentives, and protect your investment. <Link href="/services" className="underline hover:text-white">Learn about buyer representation services</Link>. <Link href="/blog/complete-guide-buying-new-construction-las-vegas" className="underline hover:text-white">Read our complete guide to buying new construction</Link>.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href="tel:7029034687" className="btn-white text-red-600 hover:text-red-700">
                📞 Call: (702) 903-4687
              </a>
              <a href="mailto:DrDuffy@SierraSkyeview.com" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-red-600 px-6 py-2 rounded-lg font-semibold transition-all duration-300">
                📧 Email Dr. Jan
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
        className={`fixed bottom-0 left-0 right-0 bg-red-600 text-white shadow-2xl z-50 transition-transform duration-300 md:hidden ${
          showMobileCTA ? 'translate-y-0' : 'translate-y-full'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between gap-3">
            <div className="flex-1">
              <p className="text-sm font-semibold">Ready to Reserve?</p>
              <p className="text-xs text-red-100">Call Dr. Jan Now</p>
            </div>
            <a
              href="tel:7029034687"
              className="bg-white text-red-600 hover:bg-gray-100 px-6 py-2 rounded-lg font-bold transition-colors whitespace-nowrap"
            >
              📞 (702) 903-4687
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Model1708;






