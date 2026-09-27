import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

const Services: NextPage = () => {
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
  const services = [
    {
      icon: "🏠",
      title: "New Home Construction Guidance",
      description: "Expert guidance through the entire new construction process from lot selection to closing.",
      features: [
        "Independent buyer negotiation and representation",
        "Construction timeline management",
        "Quality control inspections",
        "Design center assistance",
        "Closing coordination"
      ]
    },
    {
      icon: "💰",
      title: "Buyer Representation",
      description: "Comprehensive buyer representation to protect your interests and maximize your investment.",
      features: [
        "Market analysis and pricing",
        "Property inspections",
        "Contract negotiation",
        "Financing coordination",
        "Closing support"
      ]
    },
    {
      icon: "🎯",
      title: "Buyer Representation for Sierra at Skyeview Homes",
      description: "Buyer's Agent representation with deep insight into Sierra at Skyeview Homes to help you secure the right home.",
      features: [
        "Early phase updates for Sierra at Skyeview Homes",
        "Priority lot strategies in Skye Canyon",
        "Buyer's Agent representation",
        "Exclusive buyer incentives",
        "Negotiation exclusively focused on your interests"
      ]
    },
    {
      icon: "📊",
      title: "Market Expertise",
      description: "Deep knowledge of the Las Vegas real estate market, Skye Canyon's 3,000+ foot elevation community, and proximity to Mount Charleston.",
      features: [
        "Neighborhood analysis",
        "Investment potential assessment",
        "Comparable market studies",
        "Future development insights",
        "Property value projections"
      ]
    }
  ];

  const servicesStructuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Sierra at Skyeview Homes Real Estate Services",
    "itemListElement": services.map((service, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Service",
        "name": service.title,
        "description": service.description,
        "provider": {
          "@type": "LocalBusiness",
          "name": "Dr. Jan Duffy Real Estate",
          "areaServed": {
            "@type": "City",
            "name": "Las Vegas"
          },
          "serviceArea": {
            "@type": "AdministrativeArea",
            "name": "Nevada"
          }
        }
      }
    }))
  };

  return (
    <>
      <Head>
        <title>Realtor Service When Buying a New Home | Sierra at Skyeview Buyer's Agent | Dr. Jan Duffy</title>
        <meta name="description" content="Realtor service when buying a new home at Sierra at Skyeview Homes in Northwest Las Vegas from buyer's agent Dr. Jan Duffy. Located in Skye Canyon near Mount Charleston, zip code 89166. Expert new home construction guidance, buyer representation, and independent advocacy." />
        <meta name="keywords" content="realtor service when buying a new home, buyer's agent Sierra at Skyeview, new construction realtor, buyer representation Northwest Las Vegas, Skye Canyon realtor, 89166 real estate agent, Mount Charleston area realtor, new home construction guidance" />
        <meta property="og:title" content="Realtor Service When Buying a New Home | Sierra at Skyeview Buyer's Agent" />
        <meta property="og:description" content="Realtor service when buying a new home at Sierra at Skyeview Homes in Northwest Las Vegas from buyer's agent Dr. Jan Duffy. Located in Skye Canyon near Mount Charleston. Expert new home construction guidance and buyer representation." />
        <meta property="og:image" content="https://www.sierraskyeview.com/design%2004_new%202.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Services - Sierra at Skyeview Homes" />
        <meta name="twitter:description" content="Explore Dr. Jan Duffy's new construction services and buyer representation." />
        <meta name="twitter:image" content="https://www.sierraskyeview.com/design%2004_new%202.jpg" />
        <link rel="canonical" href="https://www.sierraskyeview.com/services" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesStructuredData) }}
        />
        {/* RealEstateAgent Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "RealEstateAgent",
              "name": "Dr. Jan Duffy",
              "description": "Realtor service when buying a new home at Sierra at Skyeview Homes. Expert buyer's agent specializing in new home construction and independent advocacy in Northwest Las Vegas",
              "url": "https://www.sierraskyeview.com/services",
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
                "Skye Canyon real estate"
              ]
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
                  "name": "Realtor Service When Buying a New Home",
                  "item": "https://www.sierraskyeview.com/services"
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
                  "name": "Why do I need realtor service when buying a new home?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Realtor service when buying a new home provides independent buyer representation, market expertise, and negotiation power that builder sales agents cannot offer. Dr. Jan Duffy's realtor service when buying a new home ensures you have an advocate who understands the Northwest Las Vegas market, knows how to negotiate with builders, and protects your interests throughout the construction and closing process."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What does realtor service when buying a new home include?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Dr. Jan Duffy's realtor service when buying a new home includes comprehensive market analysis, lot selection guidance, negotiation expertise, construction oversight, and advocacy throughout the entire process. Her realtor service when buying a new home ensures you get the best value, terms, and lot selection for your Sierra at Skyeview Homes purchase in Skye Canyon, Northwest Las Vegas."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How does Dr. Jan Duffy's realtor service when buying a new home differ from builder sales agents?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Dr. Jan Duffy's realtor service when buying a new home provides independent buyer representation, meaning she represents YOUR interests exclusively, not the builder's. Builder sales agents represent the builder's interests and are compensated by the builder, which creates a conflict of interest. Her realtor service when buying a new home ensures honest market analysis, expert negotiation, and advocacy focused on protecting your investment."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Does realtor service when buying a new home cost extra?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "No, realtor service when buying a new home typically doesn't cost buyers extra. Builder commissions are typically built into the home price, and having a buyer's agent doesn't increase the cost. In fact, Dr. Jan Duffy's realtor service when buying a new home often saves buyers money through expert negotiation, identifying incentives, and ensuring you get the best value for your purchase."
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
              <Link href="/services" className="text-blue-600 font-semibold">Services</Link>
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
        <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-col items-center text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Professional Real Estate Services
            </h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Expert guidance from Dr. Jan Duffy for all your real estate needs. Specializing in <Link href="/new-build-homes" className="text-blue-300 hover:text-blue-200 underline">new home construction</Link>, buyer representation, and Buyer's Agent services for <Link href="/floor-plans" className="text-blue-300 hover:text-blue-200 underline">Sierra at Skyeview Homes</Link> in <Link href="/community" className="text-blue-300 hover:text-blue-200 underline">Skye Canyon</Link>.
            </p>
              <div className="flex justify-center mb-8">
                <Image
                  src="/design 04_new 2.jpg"
                  alt="Dr. Jan Duffy portrait"
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
          </div>
        </section>

        {/* Breadcrumb Navigation */}
        <section className="bg-gray-50 py-4">
          <div className="max-w-7xl mx-auto px-4">
            <nav className="flex items-center space-x-2 text-sm">
              <Link href="/" className="text-blue-600 hover:text-blue-700">Home</Link>
              <span className="text-gray-400">/</span>
              <span className="text-gray-600">Realtor Service When Buying a New Home</span>
            </nav>
          </div>
        </section>

        {/* Comprehensive Content Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              Expert Realtor Service When Buying a New Home in Northwest Las Vegas
            </h2>
            
            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-lg text-gray-700 mb-6">
                When purchasing a new construction home at <Link href="/floor-plans" className="text-blue-600 hover:text-blue-700 underline">Sierra at Skyeview Homes</Link> in <Link href="/community" className="text-blue-600 hover:text-blue-700 underline">Skye Canyon</Link>, Northwest Las Vegas, having expert realtor service when buying a new home is essential for protecting your investment and ensuring you get the best value. <Link href="/about" className="text-blue-600 hover:text-blue-700 underline">Dr. Jan Duffy</Link> specializes in providing comprehensive realtor service when buying a new home, offering independent buyer representation that focuses exclusively on your interests, not the builder's. Her realtor service when buying a new home includes market analysis, lot selection guidance, negotiation expertise, construction oversight, and advocacy throughout the entire process.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                Why You Need Realtor Service When Buying a New Home
              </h3>
              <p className="text-lg text-gray-700 mb-6">
                Many buyers mistakenly believe that realtor service when buying a new home isn't necessary because they're working directly with the builder. However, this misconception can cost buyers thousands of dollars and result in less favorable terms. Realtor service when buying a new home provides independent representation, market expertise, and negotiation power that builder sales agents cannot offer. Dr. Jan Duffy's realtor service when buying a new home ensures you have an advocate who understands the Northwest Las Vegas market, knows how to negotiate with builders, and protects your interests throughout the construction and closing process.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                Independent Buyer Representation for New Construction
              </h3>
              <p className="text-lg text-gray-700 mb-6">
                The most important aspect of realtor service when buying a new home is independent buyer representation. Builder sales agents represent the builder's interests and are compensated by the builder, which creates a conflict of interest. Dr. Jan Duffy's realtor service when buying a new home provides independent representation, meaning she represents YOUR interests exclusively. This independent representation ensures you receive honest market analysis, expert negotiation on pricing and terms, and advocacy throughout the construction and closing process. Her realtor service when buying a new home is focused entirely on protecting your investment and ensuring you get the best value, terms, and lot selection for your Sierra at Skyeview Homes purchase.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                Market Analysis and Pricing Guidance
              </h3>
              <p className="text-lg text-gray-700 mb-6">
                Dr. Jan Duffy's realtor service when buying a new home includes comprehensive market analysis to help you understand true market value for new construction homes in Northwest Las Vegas. She compares Sierra at Skyeview Homes pricing to similar new construction communities in Skye Canyon and throughout Northwest Las Vegas, evaluates lot premiums and their impact on value, and helps you understand which upgrades provide the best return on investment. This market expertise ensures you make informed decisions about your purchase and understand the investment potential of your new home. Her realtor service when buying a new home includes helping you evaluate whether the pricing, lot selection, and upgrade packages represent good value in the Northwest Las Vegas market.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Comprehensive Real Estate Services
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Dr. Jan Duffy provides expert real estate services with a focus on <Link href="/new-build-homes" className="text-blue-600 hover:text-blue-700 underline">new home construction</Link> and <Link href="/about" className="text-blue-600 hover:text-blue-700 underline">buyer representation</Link>. Your trusted advisor throughout the entire process. <Link href="/reviews" className="text-blue-600 hover:text-blue-700 underline">Read client reviews</Link> and <Link href="/contact" className="text-blue-600 hover:text-blue-700 underline">contact Dr. Jan</Link> today. <Link href="/blog/buyers-agent-advantage-independent-representation" className="text-blue-600 hover:text-blue-700 underline">Learn why you need independent representation</Link> when buying new construction.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-8 shadow-lg">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  
                  <h4 className="font-semibold text-gray-900 mb-3">Services Include:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <span className="text-green-600 mr-2">✓</span>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Dr. Jan Duffy */}
        <section className="py-16 bg-blue-900 text-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <div className="flex justify-center mb-6">
                <Image
                  src="/design 04_new 2.jpg"
                  alt="Dr. Jan Duffy - Professional Real Estate Agent"
                  width={200}
                  height={200}
                  className="w-48 h-48 rounded-full object-cover border-4 border-white shadow-xl"
                  priority={false}
                  loading="lazy"
                  unoptimized
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                  }}
                />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Why Choose Dr. Jan Duffy?
              </h2>
              <p className="text-lg mb-8">
                Get expert, unbiased guidance—I'm your trusted advisor, not the builder's sales agent
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl mb-4">🤝</div>
                <h3 className="text-xl font-bold mb-2">Buyer's Agent Representation</h3>
                <p className="text-gray-300">I represent YOU—not the builder. As your Buyer's Agent for <Link href="/floor-plans" className="text-blue-300 hover:text-blue-200 underline">Sierra at Skyeview Homes</Link> in <Link href="/community" className="text-blue-300 hover:text-blue-200 underline">Skye Canyon</Link>, I protect your interests while providing insider access to this premier 3,000+ foot elevation community.</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">📊</div>
                <h3 className="text-xl font-bold mb-2">Skye Canyon Market Expertise</h3>
                <p className="text-gray-300">I'll show you comparable Las Vegas communities and help you understand true market value for <Link href="/community" className="text-blue-300 hover:text-blue-200 underline">Skye Canyon homes</Link>—not just what sales teams tell you. My expertise includes the unique benefits of 3,000+ foot elevation living and proximity to Mount Charleston.</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">💰</div>
                <h3 className="text-xl font-bold mb-2">Negotiation Power</h3>
                <p className="text-gray-300">Even with new construction, there's room to negotiate. I know how to maximize your leverage and protect your interests. <Link href="/about" className="text-blue-300 hover:text-blue-200 underline">Learn more about Dr. Jan Duffy</Link>.</p>
              </div>
            </div>
          </div>
        </section>

        {/* VIP Partnership Benefits */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="mb-12 text-center">
              <Image
                src="/real-estate-services.jpg"
                alt="Professional real estate services by Dr. Jan Duffy at Sierra at Skyeview Homes"
                width={800}
                height={256}
                className="w-full max-w-4xl mx-auto h-64 object-cover rounded-lg shadow-lg mb-8"
                priority
              />
            </div>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                ⭐ SIERRA AT SKYEVIEW INSIDER ACCESS ⭐
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Dr. Jan Duffy offers insider insight into Sierra at Skyeview Homes—with independent representation, priority lot strategies, and expert negotiation backed by trusted relationships.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg p-8 shadow-lg text-center">
                <div className="text-4xl mb-4">🚀</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Early Phase Access</h3>
                <p className="text-gray-600">First access to new phases before public release</p>
              </div>
              <div className="bg-white rounded-lg p-8 shadow-lg text-center">
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Priority Treatment</h3>
                <p className="text-gray-600">VIP status throughout the entire process</p>
              </div>
              <div className="bg-white rounded-lg p-8 shadow-lg text-center">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Expert Negotiation</h3>
                <p className="text-gray-600">Premier relationship-backed negotiation power</p>
              </div>
            </div>
          </div>
        </section>

        {/* Buyer Resources */}
        <section className="py-16 bg-blue-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Buyer Resources & Guides
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Expert guides and resources to help you navigate the home buying process. <Link href="/blog" className="text-blue-600 hover:text-blue-700 underline">View all blog posts</Link>.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Link href="/blog/complete-guide-buying-new-construction-las-vegas" className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Complete Guide to Buying New Construction</h3>
                <p className="text-gray-600 text-sm">Everything you need to know about buying new construction homes in Las Vegas.</p>
              </Link>
              <Link href="/blog/buyers-agent-advantage-independent-representation" className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Why You Need a Buyer's Agent</h3>
                <p className="text-gray-600 text-sm">Learn why independent representation is crucial when buying new construction.</p>
              </Link>
              <Link href="/blog/why-choose-skye-canyon-buyers-guide" className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Why Choose Skye Canyon</h3>
                <p className="text-gray-600 text-sm">Discover why Skye Canyon is one of Las Vegas's most desirable communities.</p>
              </Link>
              <Link href="/blog/understanding-hoa-fees-what-to-know" className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Understanding HOA Fees</h3>
                <p className="text-gray-600 text-sm">A comprehensive guide to HOA fees and what to expect before buying.</p>
              </Link>
            </div>
          </div>
        </section>

        {/* Comprehensive Realtor Service Details */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              Comprehensive Realtor Service When Buying a New Home: What to Expect
            </h2>
            
            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-lg text-gray-700 mb-6">
                Dr. Jan Duffy's realtor service when buying a new home at Sierra at Skyeview Homes in Skye Canyon, Northwest Las Vegas, is comprehensive and designed to protect your interests at every stage. Her realtor service when buying a new home begins with an initial consultation to understand your needs, budget, and preferences. This consultation includes market analysis, discussion of Northwest Las Vegas new construction options, and explanation of the benefits of elevated living at 3,000+ feet in Skye Canyon. Her realtor service when buying a new home ensures you have all the information needed to make informed decisions about your purchase.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                Lot Selection and Homesite Evaluation
              </h3>
              <p className="text-lg text-gray-700 mb-6">
                One of the most valuable aspects of Dr. Jan Duffy's realtor service when buying a new home is lot selection guidance. She helps buyers evaluate homesites at Sierra at Skyeview Homes based on mountain views, sun exposure, privacy, proximity to amenities, and future development plans. Her expertise in Skye Canyon and elevated living helps buyers understand which lots offer the best views, how elevation affects home design and energy efficiency, and what to consider when selecting a homesite. This guidance is essential for maximizing your investment and ensuring you choose a lot that meets your lifestyle needs and long-term goals. Her realtor service when buying a new home includes helping you understand lot premiums, their impact on value, and whether they represent good value for your investment.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                Negotiation and Builder Incentives
              </h3>
              <p className="text-lg text-gray-700 mb-6">
                Dr. Jan Duffy's realtor service when buying a new home includes expert negotiation to secure the best terms, pricing, and incentives. Even with new construction, there's room to negotiate on lot premiums, upgrade packages, closing costs, and builder incentives. Her negotiation expertise ensures you get maximum value when purchasing Sierra at Skyeview Homes. She understands builder pricing strategies, knows when incentives are available, and negotiates on your behalf to secure the best possible terms. This negotiation power is one of the key benefits of having independent buyer representation when purchasing new construction. Her realtor service when buying a new home includes identifying opportunities for savings and ensuring you get the best value for your investment.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                Construction Oversight and Quality Control
              </h3>
              <p className="text-lg text-gray-700 mb-6">
                Dr. Jan Duffy's realtor service when buying a new home extends throughout the construction process. She provides construction oversight, attends key construction milestones, and ensures quality standards are met. Her expertise helps identify potential issues early, ensures specifications are followed, and provides peace of mind throughout the building process. This construction oversight is essential for protecting your investment and ensuring your new home meets quality standards. Her realtor service when buying a new home includes being your advocate during walkthroughs, inspections, and the final closing process. She ensures that any issues are addressed promptly and that your new home meets the quality standards you expect.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                Design Center Guidance and Upgrade Selection
              </h3>
              <p className="text-lg text-gray-700 mb-6">
                Part of Dr. Jan Duffy's realtor service when buying a new home includes guidance through the design center process. She helps buyers understand which upgrades provide the best return on investment, which are essential for elevated living at 3,000+ feet, and which can be added later at potentially lower costs. Her expertise in new construction and Northwest Las Vegas market trends ensures you make smart decisions about upgrades that enhance your home's value and livability. Her realtor service when buying a new home includes helping you prioritize upgrades based on your budget and long-term goals, ensuring you get maximum value from your investment.
              </p>
            </div>
          </div>
        </section>

        {/* Process Timeline */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Your Home Buying Journey
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                From initial consultation to closing day, Dr. Jan Duffy guides you through every step of the process with expert realtor service when buying a new home.
              </p>
            </div>

            <div className="grid md:grid-cols-5 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">1</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Initial Consultation</h3>
                <p className="text-gray-600 text-sm">Discuss your needs, budget, and preferences</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">2</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Community Tour</h3>
                <p className="text-gray-600 text-sm">Explore Sierra Skyeview and available lots</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">3</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Contract & Design</h3>
                <p className="text-gray-600 text-sm">Secure your lot and design your home</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">4</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Construction</h3>
                <p className="text-gray-600 text-sm">Monitor progress and quality control</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">5</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Closing</h3>
                <p className="text-gray-600 text-sm">Final walkthrough and move-in day</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Frequently Asked Questions About Realtor Service When Buying a New Home
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Get answers to common questions about realtor service when buying a new home at Sierra at Skyeview Homes in Northwest Las Vegas.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-50 rounded-lg p-6 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Why do I need realtor service when buying a new home?</h3>
                <p className="text-gray-700">
                  Realtor service when buying a new home provides independent buyer representation, market expertise, and negotiation power that builder sales agents cannot offer. Dr. Jan Duffy's realtor service when buying a new home ensures you have an advocate who understands the Northwest Las Vegas market, knows how to negotiate with builders, and protects your interests throughout the construction and closing process.
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-3">What does realtor service when buying a new home include?</h3>
                <p className="text-gray-700">
                  Dr. Jan Duffy's realtor service when buying a new home includes comprehensive market analysis, lot selection guidance, negotiation expertise, construction oversight, and advocacy throughout the entire process. Her realtor service when buying a new home ensures you get the best value, terms, and lot selection for your Sierra at Skyeview Homes purchase in Skye Canyon, Northwest Las Vegas.
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-3">How does Dr. Jan Duffy's realtor service when buying a new home differ from builder sales agents?</h3>
                <p className="text-gray-700">
                  Dr. Jan Duffy's realtor service when buying a new home provides independent buyer representation, meaning she represents YOUR interests exclusively, not the builder's. Builder sales agents represent the builder's interests and are compensated by the builder, which creates a conflict of interest. Her realtor service when buying a new home ensures honest market analysis, expert negotiation, and advocacy focused on protecting your investment.
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Does realtor service when buying a new home cost extra?</h3>
                <p className="text-gray-700">
                  No, realtor service when buying a new home typically doesn't cost buyers extra. Builder commissions are typically built into the home price, and having a buyer's agent doesn't increase the cost. In fact, Dr. Jan Duffy's realtor service when buying a new home often saves buyers money through expert negotiation, identifying incentives, and ensuring you get the best value for your purchase.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-red-600 text-white">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Start Your Home Buying Journey?
            </h2>
            <p className="text-lg mb-8">
              Get expert guidance from Dr. Jan Duffy and discover why so many homebuyers choose her for their new construction needs. Experience the difference that expert realtor service when buying a new home can make.
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
              <Link href="/services" className="block text-blue-400">Buyer Representation Services</Link>
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
              <p className="text-sm font-semibold">Ready to Get Started?</p>
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

export default Services;






