import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import NearbyAmenitiesSection from "../components/NearbyAmenitiesSection";

const FloorPlans: NextPage = () => {
  return (
    <>
      <Head>
        <title>Sierra at Skyeview Floor Plans | Available Homes | Northwest Las Vegas 89166</title>
        <meta name="description" content="Browse Sierra at Skyeview Homes floor plans and available homes in Northwest Las Vegas. Located in Skye Canyon near Mount Charleston, zip code 89166. View all floor plans, quick move-in homes, pricing, and availability. Realtor service when buying a new home from Dr. Jan Duffy." />
        <meta property="og:title" content="Sierra at Skyeview Floor Plans | Available Homes | Northwest Las Vegas" />
        <meta property="og:description" content="Browse Sierra at Skyeview Homes floor plans and available homes. Located in Skye Canyon near Mount Charleston. View floor plans, quick move-in homes, pricing, and real-time availability. Expert realtor service when buying a new home." />
        <meta property="og:image" content="https://www.sierraskyeview.com/9026-rimerton-street-exterior.jpg" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.sierraskyeview.com/floor-plans" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Sierra at Skyeview Floor Plans | Available Homes" />
        <meta name="twitter:description" content="Browse Sierra at Skyeview Homes floor plans and available homes in Skye Canyon, Northwest Las Vegas. View all floor plans, pricing, and real-time availability." />
        <meta name="twitter:image" content="https://www.sierraskyeview.com/9026-rimerton-street-exterior.jpg" />
        <link rel="canonical" href="https://www.sierraskyeview.com/floor-plans" />
        
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
                  "name": "Homes",
                  "item": "https://www.sierraskyeview.com/floor-plans"
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
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Sierra at Skyeview Floor Plans & Available Homes
            </h1>
            <div className="flex flex-col items-center gap-4 mb-8">
              <p className="text-lg text-white max-w-3xl mx-auto leading-relaxed">
                Instantly see every available floor plan, elevation, <Link href="/quick-move-in" className="text-blue-300 hover:text-blue-200 underline">quick move-in opportunity</Link>, pricing update, and exclusive incentives for the <Link href="/community" className="text-blue-300 hover:text-blue-200 underline">Sierra at Skyeview Area in Skye Canyon</Link> using Dr. Jan Duffy's private home finder. Updated in real time with current availability for this premier 3,000+ foot elevation community. Explore <Link href="/new-build-homes" className="text-blue-300 hover:text-blue-200 underline">new construction homes</Link> and <Link href="/services" className="text-blue-300 hover:text-blue-200 underline">buyer representation services</Link>.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:7029034687" className="btn-primary">
                📞 Call NOW: (702) 903-4687
              </a>
              <a href="mailto:DrDuffy@SierraSkyeview.com" className="btn-secondary">
                📧 Email Dr. Jan
              </a>
              <a
                href="https://drjanduffy.realscout.com/homesearch/shared-searches/U2hhcmVhYmxlU2VhcmNoTGluay0xNDE5NA=="
                target="_blank"
                rel="noopener noreferrer"
                className="btn-white"
              >
                🔍 Explore Available Homes & Quick Closings
              </a>
            </div>
          </div>
        </section>

        {/* Home Search CTA */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-5xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              One Click to Every Home & Quick Move-In
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Skip outdated PDFs and static brochures. Dr. Jan's private home finder keeps you updated with real-time inventory for the Sierra at Skyeview Area in Skye Canyon, including:
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-left mb-10">
              <div className="card p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Live Availability</h3>
                <p className="text-gray-600">See which Homes, elevations, and lots are currently released or coming soon.</p>
              </div>
              <div className="card p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Pricing & Incentives</h3>
                <p className="text-gray-600">Track price changes, incentive updates, and lender promotions curated by Dr. Jan.</p>
              </div>
              <div className="card p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Tours & Alerts</h3>
                <p className="text-gray-600">Request a tour or set instant alerts when new inventory is released—right from the search.</p>
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

        {/* Floor Plan Comparison Table */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Compare Sierra at Skyeview Floor Plans
            </h2>
            <p className="text-lg text-gray-600 mb-10 text-center max-w-3xl mx-auto">
              All floor plans feature 3 bedrooms, 2.5 bathrooms, and premium finishes. Compare to find the perfect fit for your lifestyle.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse bg-white shadow-large rounded-xl overflow-hidden">
                <thead>
                  <tr className="bg-gradient-to-r from-blue-900 to-blue-700 text-white">
                    <th className="px-6 py-4 text-left font-semibold">Floor Plan</th>
                    <th className="px-6 py-4 text-center font-semibold">Square Feet</th>
                    <th className="px-6 py-4 text-center font-semibold">Bedrooms</th>
                    <th className="px-6 py-4 text-center font-semibold">Bathrooms</th>
                    <th className="px-6 py-4 text-center font-semibold">Starting Price</th>
                    <th className="px-6 py-4 text-center font-semibold">Best For</th>
                    <th className="px-6 py-4 text-center font-semibold">View Details</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200 hover:bg-blue-50 transition-colors">
                    <td className="px-6 py-4 font-semibold text-gray-900">
                      <Link href="/model-1602" className="text-blue-600 hover:text-blue-700">
                        1,602 sq ft Homes
                      </Link>
                    </td>
                    <td className="px-6 py-4 text-center text-gray-700">1,602 sq ft</td>
                    <td className="px-6 py-4 text-center text-gray-700">3</td>
                    <td className="px-6 py-4 text-center text-gray-700">2.5</td>
                    <td className="px-6 py-4 text-center font-semibold text-gray-900">$420,240</td>
                    <td className="px-6 py-4 text-center text-gray-600">First-time buyers, Downsizers</td>
                    <td className="px-6 py-4 text-center">
                      <Link href="/model-1602" className="btn-primary inline-block px-4 py-2 text-sm">
                        View →
                      </Link>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200 hover:bg-blue-50 transition-colors">
                    <td className="px-6 py-4 font-semibold text-gray-900">
                      <Link href="/model-1708" className="text-blue-600 hover:text-blue-700">
                        1,708 sq ft Homes
                      </Link>
                    </td>
                    <td className="px-6 py-4 text-center text-gray-700">1,708 sq ft</td>
                    <td className="px-6 py-4 text-center text-gray-700">3</td>
                    <td className="px-6 py-4 text-center text-gray-700">2.5</td>
                    <td className="px-6 py-4 text-center font-semibold text-gray-900">$429,990</td>
                    <td className="px-6 py-4 text-center text-gray-600">Growing families</td>
                    <td className="px-6 py-4 text-center">
                      <Link href="/model-1708" className="btn-primary inline-block px-4 py-2 text-sm">
                        View →
                      </Link>
                    </td>
                  </tr>
                  <tr className="hover:bg-blue-50 transition-colors">
                    <td className="px-6 py-4 font-semibold text-gray-900">
                      <Link href="/model-1965" className="text-blue-600 hover:text-blue-700">
                        1,965 sq ft Homes
                      </Link>
                    </td>
                    <td className="px-6 py-4 text-center text-gray-700">1,965 sq ft</td>
                    <td className="px-6 py-4 text-center text-gray-700">3</td>
                    <td className="px-6 py-4 text-center text-gray-700">2.5</td>
                    <td className="px-6 py-4 text-center font-semibold text-gray-900">$449,990</td>
                    <td className="px-6 py-4 text-center text-gray-600">Maximum space, Luxury</td>
                    <td className="px-6 py-4 text-center">
                      <Link href="/model-1965" className="btn-primary inline-block px-4 py-2 text-sm">
                        View →
                      </Link>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="mt-8 text-center">
              <p className="text-gray-600 mb-4">
                All prices subject to change. Lot premiums and incentives may apply.
              </p>
              <Link href="/services" className="text-blue-600 hover:text-blue-700 font-semibold">
                Learn about realtor service when buying a new home →
              </Link>
            </div>
          </div>
        </section>

        <NearbyAmenitiesSection compact />

        {/* Call to Action */}
        <section className="py-16 bg-red-600 text-white">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              ⚡ ACT NOW - LIMITED TIME OFFER!
            </h2>
            <p className="text-lg mb-8">
              Get VIP access to Sierra at Skyeview Homes with Dr. Jan Duffy's expert guidance. Schedule your private tour today!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:7029034687" className="bg-white text-red-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors">
                📞 CALL NOW: (702) 903-4687
              </a>
              <a href="mailto:DrDuffy@SierraSkyeview.com" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-red-600 px-8 py-3 rounded-lg font-semibold transition-colors">
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
                <Link href="/floor-plans" className="block text-blue-400">Available Homes</Link>
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
    </>
  );
};

export default FloorPlans;






