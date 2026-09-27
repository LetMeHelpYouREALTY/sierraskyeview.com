import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

const NorthwestLasVegasNewHomes: NextPage = () => {
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

  const faqItems = [
    {
      question: "Why choose Northwest Las Vegas for new construction homes?",
      answer: "Northwest Las Vegas offers a unique combination of suburban tranquility, master-planned communities, excellent schools, and easy access to both Las Vegas amenities and outdoor recreation. Sierra at Skyeview Homes in Skye Canyon represents the premier new construction opportunity in Northwest Las Vegas, featuring elevated living at 3,000+ feet with cooler temperatures and mountain views."
    },
    {
      question: "What makes Sierra at Skyeview Homes the best choice for Northwest Las Vegas new homes?",
      answer: "Sierra at Skyeview Homes in Skye Canyon, Northwest Las Vegas, offers new construction homes at 3,000+ foot elevation with premium finishes, smart home technology, and access to world-class community amenities. Located in zip code 89166, these homes provide elevated living with cooler temperatures, mountain views, and proximity to Mount Charleston, making them ideal for buyers seeking an alternative to traditional Las Vegas living."
    },
    {
      question: "How does Dr. Jan Duffy help buyers find new homes in Northwest Las Vegas?",
      answer: "As your buyer's agent specializing in Northwest Las Vegas new construction, Dr. Jan Duffy provides expert realtor service when buying a new home. She understands the Northwest Las Vegas market, including Skye Canyon, and helps buyers navigate new construction purchases with independent representation, market analysis, negotiation expertise, and guidance focused on protecting buyer interests."
    },
    {
      question: "What are the benefits of buying new construction in Northwest Las Vegas?",
      answer: "Buying new construction in Northwest Las Vegas offers modern home designs, energy-efficient systems, warranty coverage, customization opportunities, and access to master-planned communities with amenities. Sierra at Skyeview Homes in Skye Canyon provides these benefits plus elevated living at 3,000+ feet, making it an exceptional value for Northwest Las Vegas homebuyers."
    },
    {
      question: "Are there quick move-in homes available in Northwest Las Vegas?",
      answer: "Yes, Sierra at Skyeview Homes in Skye Canyon, Northwest Las Vegas, offers quick move-in homes for immediate occupancy. These homes are available in 1,602 sq ft, 1,708 sq ft, and 1,965 sq ft floor plans starting from $420,240. Dr. Jan Duffy tracks availability and helps buyers secure quick move-in homes with expert buyer representation."
    }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqItems.map((item) => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };

  const breadcrumbSchema = {
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
        "name": "Northwest Las Vegas New Homes",
        "item": "https://www.sierraskyeview.com/northwest-las-vegas-new-homes"
      }
    ]
  };

  const realEstateAgentSchema = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    "name": "Dr. Jan Duffy",
    "description": "Expert buyer's agent specializing in Northwest Las Vegas new construction homes. Realtor service when buying new homes at Sierra at Skyeview in Skye Canyon, zip code 89166.",
    "url": "https://www.sierraskyeview.com/northwest-las-vegas-new-homes",
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
    },
    "knowsAbout": [
      "Northwest Las Vegas new homes",
      "Sierra at Skyeview Homes",
      "Skye Canyon Northwest Las Vegas",
      "Realtor service when buying a new home",
      "New construction Northwest Las Vegas"
    ]
  };

  return (
    <>
      <Head>
        <title>Northwest Las Vegas New Homes | Sierra at Skyeview | Skye Canyon 89166</title>
        <meta name="description" content="Northwest Las Vegas new construction homes at Sierra at Skyeview in Skye Canyon, zip code 89166. New homes starting from $420,240 with premium finishes and elevated living at 3,000+ feet. Expert realtor service when buying a new home from buyer's agent Dr. Jan Duffy." />
        <meta name="keywords" content="Northwest Las Vegas new homes, Sierra at Skyeview Homes, new construction Northwest Las Vegas, Skye Canyon 89166, Northwest Las Vegas real estate, realtor service when buying a new home, buyer's agent Northwest Las Vegas" />
        <meta property="og:title" content="Northwest Las Vegas New Homes | Sierra at Skyeview Skye Canyon" />
        <meta property="og:description" content="Discover new construction homes in Northwest Las Vegas at Sierra at Skyeview in Skye Canyon. Elevated living at 3,000+ feet with premium finishes and expert buyer representation from Dr. Jan Duffy." />
        <meta property="og:image" content="https://www.sierraskyeview.com/9026-rimerton-street-exterior.jpg" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.sierraskyeview.com/northwest-las-vegas-new-homes" />
        <link rel="canonical" href="https://www.sierraskyeview.com/northwest-las-vegas-new-homes" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(realEstateAgentSchema) }} />
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
        <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Northwest Las Vegas New Homes | Sierra at Skyeview Skye Canyon
              </h1>
              <p className="text-xl mb-8 max-w-3xl mx-auto">
                Discover premier new construction homes in Northwest Las Vegas at Sierra at Skyeview in Skye Canyon, zip code 89166. Elevated living at 3,000+ feet with premium finishes, smart home technology, and expert realtor service when buying a new home from buyer's agent Dr. Jan Duffy.
              </p>
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
              <span className="text-gray-600">Northwest Las Vegas New Homes</span>
            </nav>
          </div>
        </section>

        {/* Main Content - Why Northwest Las Vegas */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              Why Choose Northwest Las Vegas for Your New Home?
            </h2>
            
            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-lg text-gray-700 mb-6">
                Northwest Las Vegas has emerged as one of the most desirable areas for new construction homes, offering a perfect balance of suburban tranquility, master-planned community living, excellent schools, and easy access to Las Vegas amenities. <Link href="/floor-plans" className="text-blue-600 hover:text-blue-700 underline">Sierra at Skyeview Homes</Link> in <Link href="/community" className="text-blue-600 hover:text-blue-700 underline">Skye Canyon</Link> represents the premier new construction opportunity in Northwest Las Vegas, combining elevated living at 3,000+ feet with modern home designs and world-class community amenities.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                Master-Planned Communities in Northwest Las Vegas
              </h3>
              <p className="text-lg text-gray-700 mb-6">
                Northwest Las Vegas is home to some of the region's finest master-planned communities, including Skye Canyon where Sierra at Skyeview Homes is located. These communities offer comprehensive amenities including parks, trails, recreational facilities, neighborhood schools, and social programming. The master-planned approach ensures thoughtful development, quality infrastructure, and long-term value appreciation. Skye Canyon, a 1,700-acre master-planned community, exemplifies this approach with its commitment to preserving natural beauty while providing modern conveniences.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                Elevated Living at 3,000+ Feet in Northwest Las Vegas
              </h3>
              <p className="text-lg text-gray-700 mb-6">
                Sierra at Skyeview Homes in Skye Canyon, Northwest Las Vegas, offers a unique advantage: elevated living at over 3,000 feet above sea level. This elevation provides temperatures that are typically 10-15 degrees cooler than the Las Vegas Valley floor, making summers more comfortable and reducing energy costs. The elevated location also offers cleaner air quality, stunning panoramic views of the Las Vegas Valley and Spring Mountains, and a sense of living in a mountain retreat while maintaining easy access to Las Vegas amenities.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                Excellent Schools and Family-Friendly Environment
              </h3>
              <p className="text-lg text-gray-700 mb-6">
                Northwest Las Vegas is known for its excellent school districts and family-friendly environment. The area features top-rated public and private schools, making it ideal for families with children. Skye Canyon includes neighborhood schools within the master-planned community, providing convenient access to quality education. This focus on education, combined with safe neighborhoods, parks, and recreational facilities, creates an ideal environment for raising families in Northwest Las Vegas.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                Proximity to Outdoor Recreation and Mount Charleston
              </h3>
              <p className="text-lg text-gray-700 mb-6">
                One of the unique advantages of Northwest Las Vegas new homes is proximity to outdoor recreation. Sierra at Skyeview Homes in Skye Canyon is located just 30 minutes from Mount Charleston, offering easy access to hiking trails, skiing, camping, and year-round outdoor activities. This proximity to natural recreation, combined with the elevated living environment, creates a lifestyle that balances suburban comfort with outdoor adventure—a combination that's increasingly sought after by homebuyers in Northwest Las Vegas.
              </p>
            </div>
          </div>
        </section>

        {/* Sierra at Skyeview Homes in Northwest Las Vegas */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              Sierra at Skyeview Homes: Premier Northwest Las Vegas New Construction
            </h2>

            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-lg text-gray-700 mb-6">
                <Link href="/floor-plans" className="text-blue-600 hover:text-blue-700 underline">Sierra at Skyeview Homes</Link> represents the premier new construction opportunity in Northwest Las Vegas, located in the master-planned <Link href="/community" className="text-blue-600 hover:text-blue-700 underline">Skye Canyon community</Link> at zip code 89166. These new homes offer modern designs, premium finishes, smart home technology, and elevated living at 3,000+ feet—all within one of Northwest Las Vegas's most desirable master-planned communities.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                New Construction Homes Designed for Northwest Las Vegas Living
              </h3>
              <p className="text-lg text-gray-700 mb-6">
                Sierra at Skyeview Homes offers three distinct floor plans designed for Northwest Las Vegas living. The 1,602 sq ft homes start at $420,240, featuring 3 bedrooms and 2.5 bathrooms with an open-concept layout. The 1,708 sq ft homes start at $429,990, offering additional space and flexibility. The 1,965 sq ft homes start at $449,990, providing the most spacious option. Each home features premium finishes, integrated smart home technology, energy-efficient systems optimized for the elevated climate, and designs that maximize natural light and mountain views.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                Skye Canyon Community: Northwest Las Vegas's Premier Master-Planned Community
              </h3>
              <p className="text-lg text-gray-700 mb-6">
                Skye Canyon, where Sierra at Skyeview Homes is located, represents Northwest Las Vegas's commitment to master-planned community excellence. This 1,700-acre community features comprehensive amenities including parks, walking trails, recreational facilities, neighborhood schools, and a central clubhouse. The community is designed to enhance the natural beauty of the area while providing modern conveniences, social opportunities, and a strong sense of community. This master-planned approach ensures long-term value and quality of life for residents.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                Investment Value of Northwest Las Vegas New Construction
              </h3>
              <p className="text-lg text-gray-700 mb-6">
                Northwest Las Vegas new construction homes have shown strong appreciation potential due to the area's growth, quality of master-planned communities, excellent schools, and unique lifestyle advantages. Sierra at Skyeview Homes in Skye Canyon offers an opportunity to invest in this growing market with new construction homes that feature modern designs, energy efficiency, and access to world-class amenities. The combination of elevated living, mountain proximity, and master-planned community benefits creates a compelling investment opportunity for Northwest Las Vegas homebuyers.
              </p>
            </div>
          </div>
        </section>

        {/* Dr. Jan Duffy's Realtor Service for Northwest Las Vegas */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              Expert Realtor Service When Buying Northwest Las Vegas New Homes
            </h2>

            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-lg text-gray-700 mb-6">
                <Link href="/about" className="text-blue-600 hover:text-blue-700 underline">Dr. Jan Duffy</Link> specializes in providing expert realtor service when buying new construction homes in Northwest Las Vegas. As your buyer's agent for <Link href="/floor-plans" className="text-blue-600 hover:text-blue-700 underline">Sierra at Skyeview Homes</Link> in Skye Canyon, Dr. Jan understands the Northwest Las Vegas market, including the unique advantages of elevated living, master-planned community benefits, and new construction considerations. Her realtor service when buying a new home includes comprehensive market analysis, lot selection guidance, negotiation expertise, and representation focused exclusively on protecting buyer interests.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                Northwest Las Vegas Market Expertise
              </h3>
              <p className="text-lg text-gray-700 mb-6">
                Dr. Jan Duffy's expertise in Northwest Las Vegas new construction includes deep knowledge of the area's master-planned communities, school districts, market trends, and lifestyle advantages. Her realtor service when buying a new home includes helping buyers understand how Northwest Las Vegas compares to other areas, what makes Skye Canyon unique, and how elevated living at 3,000+ feet affects home value and lifestyle. This market expertise ensures buyers make informed decisions about their Northwest Las Vegas new home purchase.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                New Construction Guidance for Northwest Las Vegas Homes
              </h3>
              <p className="text-lg text-gray-700 mb-6">
                As a buyer's agent specializing in Northwest Las Vegas new construction, Dr. Jan Duffy provides comprehensive guidance throughout the new home building process. Her realtor service when buying a new home includes helping buyers select the best lots for views and sun exposure, choose upgrades that provide the best value, understand construction timelines, and navigate the design center process. This guidance ensures buyers maximize their investment in Northwest Las Vegas new construction homes.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                Independent Buyer Representation for Northwest Las Vegas
              </h3>
              <p className="text-lg text-gray-700 mb-6">
                Dr. Jan Duffy's realtor service when buying a new home in Northwest Las Vegas includes independent buyer representation—meaning she represents your interests exclusively, not the builder's. This independent representation ensures buyers get honest market analysis, expert negotiation on pricing and terms, and advocacy throughout the construction and closing process. For Northwest Las Vegas new construction buyers, this independent representation is essential for protecting their investment and ensuring they get the best value.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Frequently Asked Questions About Northwest Las Vegas New Homes
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {faqItems.map((item, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{item.question}</h3>
                  <p className="text-gray-700">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-red-600 text-white">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Find Your Northwest Las Vegas New Home?
            </h2>
            <p className="text-lg mb-8">
              Contact Dr. Jan Duffy today for expert realtor service when buying new construction homes in Northwest Las Vegas. Discover Sierra at Skyeview Homes in Skye Canyon.
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
              <p className="text-gray-300 mb-4">Featured New Home Construction & Buyer Representation Specialist</p>
              <p className="text-gray-300">Call to schedule: (702) 903-4687</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                <Link href="/floor-plans" className="block text-gray-300 hover:text-white">Available Homes</Link>
                <Link href="/community" className="block text-gray-300 hover:text-white">Skye Canyon Guide</Link>
                <Link href="/services" className="block text-gray-300 hover:text-white">Buyer Representation Services</Link>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Dr. Jan Duffy</h4>
              <div className="space-y-2 text-gray-300">
                <p><strong>Phone:</strong><br />(702) 903-4687</p>
                <p><strong>Email:</strong><br />DrDuffy@SierraSkyeview.com</p>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Location</h4>
              <p className="text-gray-300">8925 Vanhoy Creek St.<br />Las Vegas, NV 89166</p>
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
              <p className="text-sm font-semibold">Find Your New Home</p>
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

export default NorthwestLasVegasNewHomes;

