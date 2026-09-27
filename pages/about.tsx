import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

const About: NextPage = () => {
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
        <title>Realtor Service When Buying a New Home | Sierra at Skyeview Buyer's Agent | Dr. Jan Duffy</title>
        <meta name="description" content="Meet Dr. Jan Duffy, your trusted realtor service when buying a new home at Sierra at Skyeview Homes in Northwest Las Vegas. Located in Skye Canyon near Mount Charleston, zip code 89166. Buyer's agent specializing in new home construction and independent advocacy." />
        <meta name="keywords" content="Dr. Jan Duffy, realtor service when buying a new home, buyer's agent Sierra at Skyeview, new construction specialist, Skye Canyon realtor, Northwest Las Vegas real estate agent, 89166 realtor, Mount Charleston area buyer's agent" />
        <meta property="og:title" content="Realtor Service When Buying a New Home | Sierra at Skyeview Buyer's Agent" />
        <meta property="og:description" content="Meet Dr. Jan Duffy, your trusted realtor service when buying a new home at Sierra at Skyeview Homes in Northwest Las Vegas. Located in Skye Canyon near Mount Charleston. Buyer's agent specializing in new home construction and independent advocacy." />
        <meta property="og:image" content="https://www.sierraskyeview.com/design%2004_new%202.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Dr. Jan Duffy - Sierra at Skyeview Homes" />
        <meta name="twitter:description" content="Meet Dr. Jan Duffy, Buyer's Agent for Sierra at Skyeview Homes in Skye Canyon." />
        <meta name="twitter:image" content="https://www.sierraskyeview.com/design%2004_new%202.jpg" />
        <link rel="canonical" href="https://www.sierraskyeview.com/about" />
        {/* RealEstateAgent Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "RealEstateAgent",
              "name": "Dr. Jan Duffy",
              "description": "Realtor service when buying a new home at Sierra at Skyeview Homes. Buyer's agent specializing in new home construction and independent advocacy in Northwest Las Vegas",
              "url": "https://www.sierraskyeview.com/about",
              "telephone": "(702) 903-4687",
              "email": "DrDuffy@SierraSkyeview.com",
              "image": "https://www.sierraskyeview.com/design%2004_new%202.jpg",
              "jobTitle": "Buyer's Agent & New Home Construction Specialist",
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
                "Realtor service when buying a new home",
                "New home construction",
                "Buyer's agent representation",
                "Skye Canyon real estate",
                "Northwest Las Vegas real estate"
              ],
              "worksFor": {
                "@type": "Organization",
                "name": "Sierra at Skyeview Homes | Dr. Jan Duffy Real Estate"
              }
            })
          }}
        />
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
                  "name": "About Dr. Jan Duffy",
                  "item": "https://www.sierraskyeview.com/about"
                }
              ]
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
                  "name": "Why should I use Dr. Jan Duffy as my buyer's agent for Sierra at Skyeview Homes?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Dr. Jan Duffy provides independent buyer representation, meaning she represents YOUR interests exclusively, not the builder's. With 20+ years of Las Vegas real estate expertise and deep knowledge of Skye Canyon's 3,000+ foot elevation community, she helps buyers get the best lots, negotiate incentives, and protect their investment throughout the new construction process."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What makes Dr. Jan Duffy different from builder sales agents?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Dr. Jan Duffy is an independent buyer's agent who represents your interests exclusively, not the builder's. Builder sales agents are compensated by and represent the builder, creating a conflict of interest. Dr. Jan provides honest market analysis, expert negotiation, and advocacy focused on protecting your investment and ensuring you get the best value."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Does it cost extra to use Dr. Jan Duffy as my buyer's agent?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "No, using Dr. Jan Duffy as your buyer's agent typically doesn't cost buyers extra. Builder commissions are typically built into the home price, and having a buyer's agent doesn't increase the cost. In fact, Dr. Jan's expert negotiation and market knowledge often saves buyers money through better terms, incentives, and lot selection."
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
              <Link href="/about" className="text-blue-600 font-semibold">About Dr. Jan</Link>
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
              <span className="text-gray-600">About Dr. Jan Duffy</span>
            </nav>
          </div>
        </section>

        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Dr. Jan Duffy: Expert Realtor Service When Buying a New Home in Northwest Las Vegas
            </h1>
            <p className="text-xl mb-6 max-w-3xl mx-auto">
              New construction at Sierra at Skyeview Homes in Skye Canyon moves fast. You need a Buyer's Agent who represents YOUR interests exclusively—not the builder's. With 20+ years of Las Vegas real estate expertise and deep knowledge of Skye Canyon's 3,000+ foot elevation community, Dr. Jan knows which lots appreciate fastest, what upgrades to fund versus skip, how to negotiate incentives, and why your contract matters more than any sales pitch. As your Buyer's Agent, she spots opportunities other buyers miss.
            </p>
            <p className="text-sm uppercase tracking-wide text-blue-100 mb-6">
              Nevada License S.0197614 | New Construction Specialist | Las Vegas Real Estate Expert
            </p>
            <div className="flex justify-center mb-6">
              <Image
                src="/design 04_new 2.jpg"
                alt="Portrait of Dr. Jan Duffy"
                width={220}
                height={220}
                className="w-40 h-40 md:w-48 md:h-48 rounded-full object-cover border-4 border-white shadow-xl"
                priority={false}
                loading="lazy"
                unoptimized
              />
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:7029034687" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                📞 Call NOW: (702) 903-4687
              </a>
              <a href="mailto:DrDuffy@SierraSkyeview.com" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg font-semibold transition-colors">
                📧 Email Dr. Jan
              </a>
            </div>
          </div>
        </section>

        {/* Comprehensive Content Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              Expert Realtor Service When Buying a New Home: Dr. Jan Duffy's Approach
            </h2>
            
            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-lg text-gray-700 mb-6">
                <Link href="/about" className="text-blue-600 hover:text-blue-700 underline">Dr. Jan Duffy</Link> is a Featured New Home Construction & Buyer Representation Specialist, proudly representing homebuyers interested in new homes at <Link href="/floor-plans" className="text-blue-600 hover:text-blue-700 underline">Sierra at Skyeview Homes</Link> in <Link href="/community" className="text-blue-600 hover:text-blue-700 underline">Skye Canyon</Link>, Northwest Las Vegas, zip code 89166. With 20+ years of Las Vegas real estate expertise and specialized knowledge of Skye Canyon's master-planned community, Dr. Jan provides expert realtor service when buying a new home, ensuring buyers get the best value, lot selection, and terms for their investment.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                Independent Buyer Representation for New Construction
              </h3>
              <p className="text-lg text-gray-700 mb-6">
                Dr. Jan Duffy's realtor service when buying a new home provides independent buyer representation, meaning she represents YOUR interests exclusively, not the builder's. This independent representation is crucial for new construction purchases because it ensures you receive honest market analysis, expert negotiation on pricing and terms, and advocacy throughout the construction and closing process. Unlike builder sales agents who represent the builder's interests, Dr. Jan's realtor service when buying a new home is focused entirely on protecting your investment and ensuring you get the best value, terms, and lot selection for your Sierra at Skyeview Homes purchase in Skye Canyon, Northwest Las Vegas.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                Deep Knowledge of Skye Canyon and Northwest Las Vegas
              </h3>
              <p className="text-lg text-gray-700 mb-6">
                Dr. Jan Duffy's expertise in Skye Canyon and Northwest Las Vegas includes understanding how the master-planned community enhances home value, the benefits of elevated living at 3,000+ feet, proximity to Mount Charleston, and market trends in the area. Her realtor service when buying a new home includes helping buyers understand which lots offer the best views and value, how community amenities enhance lifestyle, and what to consider when selecting a home in Skye Canyon. This specialized knowledge ensures buyers make informed decisions about their investment in this premier Northwest Las Vegas community.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                Market Analysis and Negotiation Expertise
              </h3>
              <p className="text-lg text-gray-700 mb-6">
                Dr. Jan Duffy's realtor service when buying a new home includes comprehensive market analysis to help buyers understand true market value for new construction homes in Northwest Las Vegas. She compares Sierra at Skyeview Homes pricing to similar new construction communities, evaluates lot premiums and their impact on value, and helps buyers understand which upgrades provide the best return on investment. Her negotiation expertise ensures buyers get maximum value when purchasing new construction, including securing the best terms, pricing, and incentives. This market expertise and negotiation power are key benefits of having independent buyer representation when purchasing new construction.
              </p>
            </div>
          </div>
        </section>

        {/* About Dr. Jan */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="lg:order-2">
                <div className="flex justify-center">
                  <Image
                    src="/design 04_new 2.jpg"
                    alt="Dr. Jan Duffy - Professional Real Estate Agent"
                    width={240}
                    height={240}
                    className="w-48 h-48 rounded-full object-cover border-4 border-blue-600 shadow-lg"
                    priority={false}
                    loading="lazy"
                    unoptimized
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                    }}
                  />
                </div>
              </div>
              <div className="lg:order-1">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Meet Dr. Jan Duffy
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  Dr. Jan Duffy is a Featured New Home Construction & Buyer Representation Specialist, proudly representing homebuyers interested in new homes at <Link href="/floor-plans" className="text-blue-600 hover:text-blue-700 underline">Sierra at Skyeview Homes</Link> in <Link href="/community" className="text-blue-600 hover:text-blue-700 underline">Skye Canyon, Las Vegas, NV</Link>.
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  With deep expertise in the Las Vegas real estate market and specialized knowledge of <Link href="/community" className="text-blue-600 hover:text-blue-700 underline">Skye Canyon's master-planned community</Link>, Dr. Jan Duffy provides expert guidance to homebuyers seeking luxury <Link href="/new-build-homes" className="text-blue-600 hover:text-blue-700 underline">new construction homes</Link> at Sierra at Skyeview Homes. Located at 3,000+ foot elevation with stunning mountain views and access to Mount Charleston, Sierra at Skyeview Area offers a unique lifestyle. Dr. Jan's collaborative approach with development teams gives clients early insight into the best lots, upcoming releases, and negotiation opportunities—all while she exclusively represents YOUR interests as your <Link href="/services" className="text-blue-600 hover:text-blue-700 underline">Buyer's Agent</Link>. <Link href="/reviews" className="text-blue-600 hover:text-blue-700 underline">Read client reviews</Link> to learn more.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <span className="text-green-600 mr-3">✓</span>
                    <span className="text-gray-700">Nevada License S.0197614</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-green-600 mr-3">✓</span>
                    <span className="text-gray-700">Buyer's Agent for Sierra at Skyeview Homes</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-green-600 mr-3">✓</span>
                    <span className="text-gray-700">Las Vegas Real Estate Expert</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-green-600 mr-3">✓</span>
                    <span className="text-gray-700">New Construction Specialist</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Expertise Areas */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Areas of Expertise
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Dr. Jan Duffy specializes in new home construction and provides comprehensive real estate services throughout the Las Vegas area.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg p-8 shadow-lg text-center">
                <div className="text-4xl mb-4">🏠</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">New Home Construction</h3>
                <p className="text-gray-600">Expert guidance through the entire <Link href="/new-build-homes" className="text-blue-600 hover:text-blue-700 underline">new construction process</Link> from lot selection to closing day.</p>
              </div>
              <div className="bg-white rounded-lg p-8 shadow-lg text-center">
                <div className="text-4xl mb-4">🤝</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Buyer Representation for Sierra at Skyeview Homes</h3>
                <p className="text-gray-600"><Link href="/services" className="text-blue-600 hover:text-blue-700 underline">Buyer's Agent representation</Link> providing insider knowledge of <Link href="/floor-plans" className="text-blue-600 hover:text-blue-700 underline">Sierra at Skyeview Homes</Link> while protecting your interests.</p>
              </div>
              <div className="bg-white rounded-lg p-8 shadow-lg text-center">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Buyer Representation</h3>
                <p className="text-gray-600">Comprehensive buyer representation to protect your interests and maximize your investment.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Dr. Jan */}
        <section className="py-16 bg-blue-900 text-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Why Choose Dr. Jan Duffy?
              </h2>
              <p className="text-lg mb-8">
                Get expert, unbiased guidance—I'm your trusted advisor, not the builder's sales agent
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl mb-4">🤝</div>
                <h3 className="text-xl font-bold mb-2">Buyer's Agent Representation</h3>
                <p className="text-gray-300">I represent YOU—not the builder. As your Buyer's Agent for Sierra at Skyeview Homes in Skye Canyon, I provide insider access while protecting your interests every step of the way.</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">📊</div>
                <h3 className="text-xl font-bold mb-2">Skye Canyon Market Expertise</h3>
                <p className="text-gray-300">I'll show you comparable Las Vegas communities and help you understand true market value for Skye Canyon homes—not just what sales teams tell you. My deep knowledge of the 3,000+ foot elevation community and proximity to Mount Charleston helps you make informed decisions.</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">💰</div>
                <h3 className="text-xl font-bold mb-2">Negotiation Power</h3>
                <p className="text-gray-300">Even with new construction, there's room to negotiate. I know how to maximize your leverage and protect your interests.</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-xl font-bold mb-2">Las Vegas Specialist</h3>
                <p className="text-gray-300">Nevada License S.0197614. Deep knowledge of Skye Canyon and the entire metro area.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                What Clients Say
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Hear from satisfied clients who have worked with Dr. Jan Duffy for their new home construction needs.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="text-yellow-400 mb-4">⭐⭐⭐⭐⭐</div>
                <p className="text-gray-600 mb-4">
                  "Dr. Jan Duffy made our new home buying process seamless. Her expertise with new construction and negotiation skills saved us thousands of dollars."
                </p>
                <p className="font-semibold text-gray-900">- Sarah & Mike Johnson</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="text-yellow-400 mb-4">⭐⭐⭐⭐⭐</div>
                <p className="text-gray-600 mb-4">
                  "We couldn't have asked for a better real estate agent. Dr. Jan's knowledge of Skye Canyon and the Las Vegas market, combined with her independent advocacy for Skye Canyon buyers, was invaluable."
                </p>
                <p className="font-semibold text-gray-900">- Robert & Lisa Chen</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="text-yellow-400 mb-4">⭐⭐⭐⭐⭐</div>
                <p className="text-gray-600 mb-4">
                  "Dr. Jan Duffy is the ultimate professional. She guided us through every step of the construction process and ensured we got the best deal possible."
                </p>
                <p className="font-semibold text-gray-900">- David & Maria Rodriguez</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Frequently Asked Questions About Dr. Jan Duffy
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Get answers to common questions about Dr. Jan Duffy's realtor service when buying a new home at Sierra at Skyeview Homes in Northwest Las Vegas.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Why should I use Dr. Jan Duffy as my buyer's agent for Sierra at Skyeview Homes?</h3>
                <p className="text-gray-700">
                  Dr. Jan Duffy provides independent buyer representation, meaning she represents YOUR interests exclusively, not the builder's. With 20+ years of Las Vegas real estate expertise and deep knowledge of Skye Canyon's 3,000+ foot elevation community, she helps buyers get the best lots, negotiate incentives, and protect their investment throughout the new construction process.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-3">What makes Dr. Jan Duffy different from builder sales agents?</h3>
                <p className="text-gray-700">
                  Dr. Jan Duffy is an independent buyer's agent who represents your interests exclusively, not the builder's. Builder sales agents are compensated by and represent the builder, creating a conflict of interest. Dr. Jan provides honest market analysis, expert negotiation, and advocacy focused on protecting your investment and ensuring you get the best value.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Does it cost extra to use Dr. Jan Duffy as my buyer's agent?</h3>
                <p className="text-gray-700">
                  No, using Dr. Jan Duffy as your buyer's agent typically doesn't cost buyers extra. Builder commissions are typically built into the home price, and having a buyer's agent doesn't increase the cost. In fact, Dr. Jan's expert negotiation and market knowledge often saves buyers money through better terms, incentives, and lot selection.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-3">What areas does Dr. Jan Duffy serve?</h3>
                <p className="text-gray-700">
                  Dr. Jan Duffy specializes in Northwest Las Vegas, particularly Skye Canyon and Sierra at Skyeview Homes. She has deep knowledge of the 3,000+ foot elevation community, proximity to Mount Charleston, and the master-planned community benefits. Her realtor service when buying a new home focuses on helping buyers in this premier Northwest Las Vegas location.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-red-600 text-white">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Work With Dr. Jan Duffy?
            </h2>
            <p className="text-lg mb-8">
              Experience the difference that expert guidance and Buyer's Agent representation can make in your new home buying journey. Get expert realtor service when buying a new home at Sierra at Skyeview Homes in Northwest Las Vegas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:7029034687" className="bg-white text-red-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors">
                📞 CALL NOW: (702) 903-4687
              </a>
              <a href="mailto:DrDuffy@SierraSkyeview.com" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-red-600 px-8 py-3 rounded-lg font-semibold transition-colors">
                📧 EMAIL DR. JAN
              </a>
              <Link href="/contact" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-red-600 px-8 py-3 rounded-lg font-semibold transition-colors">
                📋 CONTACT FORM
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
              <p className="text-sm font-semibold">Ready to Work Together?</p>
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

export default About;






