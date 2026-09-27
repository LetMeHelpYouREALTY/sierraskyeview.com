import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

const QA: NextPage = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const faqs = [
    {
      question: "How much are the HOA fees at Sierra at Skyeview Homes?",
      answer: "The monthly HOA fee for Skye Canyon master community is approximately $83. The Sierra at Skyeview Area may have additional sub-HOA fees. These fees contribute to maintaining community amenities including the recreation center, fitness center, parks, trails, sports courts, splash pads, and neighborhood schools. The exact fees can vary and may change annually based on community budget needs."
    },
    {
      question: "What are the starting prices for homes at Sierra at Skyeview Homes?",
      answer: "The Sierra at Skyeview Area offers three floor plans starting from $420,240. 1,602 sq ft homes start at $420,240, 1,708 sq ft homes start at $429,990, and 1,965 sq ft homes start at $449,990. These are two-story homes with 3 bedrooms and 2.5 bathrooms, featuring open-concept layouts and premium finishes."
    },
    {
      question: "Is Skye Canyon a gated community?",
      answer: "Skye Canyon offers an excellent blend of comfort, convenience, and natural beauty. Many of the newer communities within Skye Canyon, including Sierra at Skyeview Homes, offer gated access for added security. The master-planned community spans 1,700 acres and includes multiple neighborhoods with varying levels of security features."
    },
    {
      question: "What amenities are available in Skye Canyon?",
      answer: "Skye Canyon features a recreation center, fitness center, beautiful parks and walking trails throughout the 1,700-acre community, sports courts and fields, splash pads, and convenient access to neighborhood schools. The community is designed for active living with a focus on work-life balance, well-being, and outdoor recreation."
    },
    {
      question: "How many homes will be in Skye Canyon when completed?",
      answer: "Upon completion, Skye Canyon will feature approximately 6,500 homes across four meticulously planned phases. The community is currently in active development with Sierra at Skyeview Homes being one of the newer neighborhoods offering luxury two-story homes."
    },
    {
      question: "What schools are near Sierra at Skyeview Homes?",
      answer: "Sierra at Skyeview Homes is conveniently located near several excellent schools including William & Mary Scherbenbach Elementary School, James Bilbray Elementary School, Kenneth Divich Elementary School, Ralph Cadwallader Middle School, Edmundo Escobedo Middle School, Arbor View High School, and Somerset Academy-Skye Canyon Campus Charter School."
    },
    {
      question: "What smart home features are included at Sierra at Skyeview Homes?",
      answer: "Every home in the Sierra at Skyeview Area comes with integrated smart home technology, premium finishes, and energy-efficient features. Located at 3,000+ foot elevation in Skye Canyon's master-planned community, these homes include integrated smart home systems for convenience and energy efficiency, high-quality materials and finishes throughout the home, and modern construction techniques optimized for the cooler mountain climate."
    },
    {
      question: "Are there quick move-in homes available at Sierra at Skyeview Homes?",
      answer: "Yes! The Sierra at Skyeview Area has several quick move-in homes available. Currently available lots include SRA024 (8990 Rimerton ST) at $447,690, SRA015 (9026 Rimerton ST) at $453,940, and SRA017 (9018 Rimerton ST) at $488,290. Estimated completion dates range from November to December 2024."
    },
    {
      question: "What makes Sierra at Skyeview Homes different from other Las Vegas communities?",
      answer: "The Sierra at Skyeview Area offers thoughtfully designed two-story homes with shared private driveways that bring ease and connection to Sky Canyon living. Located at 3,000+ foot elevation in Skye Canyon, this community provides stunning mountain views, cooler temperatures, and access to Mount Charleston just 30 minutes away. The homes feature open-concept layouts, premium finishes, and smart home technology included."
    },
    {
      question: "How close is Sierra at Skyeview Homes to the Las Vegas Strip?",
      answer: "Sierra at Skyeview Homes is located approximately 20 miles from the Las Vegas Strip, providing easy access to world-class entertainment, dining, and culture while maintaining the tranquility of master-planned community living. The community offers the perfect balance of suburban comfort and urban excitement."
    },
    {
      question: "What is the elevation of Skye Canyon?",
      answer: "Skye Canyon is located at a 3,000+ foot elevation, which provides residents with cooler temperatures compared to the Las Vegas valley floor. This higher elevation location offers stunning mountain views and a more comfortable climate, especially during the hot summer months."
    },
    {
      question: "What shopping and dining options are available near Sierra at Skyeview Homes?",
      answer: "Sierra at Skyeview Homes residents enjoy convenient access to shopping and dining including Sprouts Farmers Market, Smith's Food and Drug, Montecito Marketplace, Lowe's Home Improvement, Mimi's Cafe, Market Grille Cafe, Buffalo Wild Wings, Baby Stacks Cafe, Michoacan Mexican Restaurant, Starbucks, Cafe Rio, Tropical Smoothie Cafe, Thai Spoon, and Menchie's Frozen Yogurt."
    },
    {
      question: "How does Dr. Jan Duffy help with the home buying process?",
      answer: "Dr. Jan Duffy provides expert, unbiased guidance as an independent real estate agent specializing in new home construction at Sierra at Skyeview Homes in Skye Canyon. She represents YOUR interests exclusively—not the builder's. With Nevada License S.0197614, she offers market expertise, negotiation power, and deep knowledge of Skye Canyon's unique 3,000+ foot elevation community, proximity to Mount Charleston, and the entire Las Vegas metro area."
    },
    {
      question: "What is the highest temperature ever recorded in Las Vegas?",
      answer: "The hottest temperature ever recorded in Las Vegas is 120°F (49°C), which occurred on July 7, 2024. This new record shattered the previous all-time high of 117°F. However, Sierra at Skyeview Homes's 3,000+ foot elevation provides residents with cooler temperatures and a more comfortable climate."
    },
    {
      question: "What is the coldest temperature ever recorded in Las Vegas?",
      answer: "The coldest temperature ever recorded in Las Vegas was 8°F (-13°C) on January 13, 1963. While winter nights can drop below freezing, this represents a severe and uncommon cold outbreak. The typical winter low for Las Vegas is around 37°F (3°C) in January."
    },
    {
      question: "Is Mount Charleston accessible from Sierra at Skyeview Homes?",
      answer: "Yes! Mount Charleston is easily accessible from Sierra at Skyeview Homes, located just 30 minutes away. This provides residents with access to alpine recreation including skiing, hiking, and temperatures that are 20°F cooler than the Las Vegas valley. The Spring Mountains National Recreation Area offers year-round outdoor activities."
    },
    {
      question: "What makes Skye Canyon different from Summerlin?",
      answer: "While both are master-planned communities, Skye Canyon is located north of Summerlin and west of North Las Vegas at a higher elevation (3,000+ feet). Skye Canyon offers a more natural, outdoor-focused lifestyle with direct access to Mount Charleston, while maintaining proximity to Las Vegas amenities. The community is newer and features more modern home designs and amenities."
    },
    {
      question: "Are there any environmental benefits to living at higher elevation?",
      answer: "Living at Skye Canyon's 3,000+ foot elevation provides several environmental benefits including cleaner air quality, cooler temperatures (reducing cooling costs), less air pollution, and access to natural landscapes. The higher elevation also provides stunning mountain views and a more pleasant year-round climate."
    },
    {
      question: "What financing options are available for Sierra at Skyeview Homes?",
      answer: "Sierra at Skyeview Homes works with various lenders and financing options. Dr. Jan Duffy can help connect buyers with pre-approval resources and financing specialists. The community accepts conventional loans, FHA loans, VA loans, and other financing programs. Contact Dr. Jan at (702) 903-4687 for personalized financing guidance."
    },
    {
      question: "What is the resale value potential for Sierra at Skyeview Homes?",
      answer: "Sierra at Skyeview Homes offer strong resale value potential due to their location in the growing Skye Canyon master-planned community, high-quality construction, desirable Homes, and access to premium amenities. The community's proximity to Mount Charleston and Las Vegas provides long-term appeal to both outdoor enthusiasts and urban professionals."
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <>
      <Head>
        <title>Sierra at Skyeview FAQs | Realtor Service When Buying a New Home | Dr. Jan Duffy</title>
        <meta name="description" content="Get answers to frequently asked questions about Sierra at Skyeview Homes in Northwest Las Vegas. Located in Skye Canyon near Mount Charleston, zip code 89166. HOA fees, amenities, pricing, and more. Expert realtor service when buying a new home from buyer's agent Dr. Jan Duffy." />
        <meta property="og:title" content="Sierra at Skyeview FAQs | Realtor Service" />
        <meta property="og:description" content="Get answers to frequently asked questions about Sierra at Skyeview Homes in Northwest Las Vegas. Located in Skye Canyon near Mount Charleston. HOA fees, amenities, pricing, and more. Expert realtor service when buying a new home." />
        <meta property="og:image" content="https://www.sierraskyeview.com/9026-rimerton-street-exterior.jpg" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.sierraskyeview.com/qa" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Sierra at Skyeview FAQs | Realtor Service" />
        <meta name="twitter:description" content="Get answers to frequently asked questions about Sierra at Skyeview Homes. HOA fees, amenities, pricing, and more. Expert realtor service when buying a new home." />
        <meta name="twitter:image" content="https://www.sierraskyeview.com/9026-rimerton-street-exterior.jpg" />
        <meta name="keywords" content="Sierra at Skyeview FAQ, Sierra at Skyeview Homes questions, realtor service when buying a new home, buyer's agent Sierra at Skyeview, HOA fees, Mount Charleston area homes, zip code 89166, Northwest Las Vegas new homes FAQ, Dr. Jan Duffy" />
        <link rel="canonical" href="https://www.sierraskyeview.com/qa" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
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
              <Link href="/qa" className="text-blue-600 font-semibold">Q&amp;A</Link>
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
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Get answers to the most common questions about <Link href="/floor-plans" className="text-blue-300 hover:text-blue-200 underline">Sierra at Skyeview Homes</Link>, <Link href="/community" className="text-blue-300 hover:text-blue-200 underline">community amenities</Link>, pricing, and the home buying process with <Link href="/about" className="text-blue-300 hover:text-blue-200 underline">Dr. Jan Duffy</Link>. Explore <Link href="/services" className="text-blue-300 hover:text-blue-200 underline">buyer representation services</Link> and <Link href="/new-build-homes" className="text-blue-300 hover:text-blue-200 underline">new construction homes</Link>.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:7029034687" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                📞 Call Dr. Jan: (702) 903-4687
              </a>
              <a href="mailto:DrDuffy@SierraSkyeview.com" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg font-semibold transition-colors">
                📧 Email Questions
              </a>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4">
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <button
                    className="w-full px-6 py-4 text-left hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset transition-colors"
                    onClick={() => toggleItem(index)}
                    aria-expanded={openItems.includes(index)}
                    aria-controls={`faq-answer-${index}`}
                  >
                    <div className="flex justify-between items-center">
                      <h3 className="text-lg font-semibold text-gray-900 pr-4">
                        {faq.question}
                      </h3>
                      <svg
                        className={`w-5 h-5 text-gray-500 transform transition-transform ${
                          openItems.includes(index) ? 'rotate-180' : ''
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </button>
                  {openItems.includes(index) && (
                    <div id={`faq-answer-${index}`} className="px-6 pb-4">
                      <div className="text-gray-700 leading-relaxed">
                        {faq.answer}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-16 bg-red-600 text-white">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Still Have Questions?
            </h2>
            <p className="text-lg mb-8">
              Dr. Jan Duffy is here to help! Get expert guidance on Sierra at Skyeview Homes and the home buying process.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:7029034687" className="bg-white text-red-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors">
                📞 CALL DR. JAN: (702) 903-4687
              </a>
              <a href="mailto:DrDuffy@SierraSkyeview.com" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-red-600 px-8 py-3 rounded-lg font-semibold transition-colors">
                📧 EMAIL QUESTIONS
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
                Sierra at Skyeview Homes connects Las Vegas home buyers with new construction opportunities in Skye Canyon, guided by Buyer's Agent Dr. Jan Duffy.
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
                <Link href="/qa" className="block text-blue-400">Buyer FAQs</Link>
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

export default QA;






