import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import NearbyAmenitiesSection from "../components/NearbyAmenitiesSection";
import { useState, useEffect } from "react";

const HomesNearMountCharleston: NextPage = () => {
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
      question: "Why choose homes near Mount Charleston in Northwest Las Vegas?",
      answer: "Homes near Mount Charleston offer a unique lifestyle at 3,000+ foot elevation with cooler temperatures, stunning mountain views, and easy access to outdoor recreation. Sierra at Skyeview Homes in Skye Canyon provides this elevated living experience just 30 minutes from Mount Charleston, making it perfect for those who want mountain proximity while staying close to Las Vegas amenities."
    },
    {
      question: "What makes Sierra at Skyeview Homes ideal for Mount Charleston area living?",
      answer: "Sierra at Skyeview Homes is located at 3,000+ foot elevation in Skye Canyon, Northwest Las Vegas, offering cooler temperatures year-round compared to the Las Vegas Valley floor. The community provides easy access to Mount Charleston for hiking, skiing, and outdoor activities, while maintaining proximity to Las Vegas shopping, dining, and entertainment. Dr. Jan Duffy specializes in helping buyers find the perfect home in this unique elevated community."
    },
    {
      question: "How does Dr. Jan Duffy help buyers find homes near Mount Charleston?",
      answer: "As your buyer's agent for Sierra at Skyeview Homes, Dr. Jan Duffy provides expert guidance on homes near Mount Charleston in Northwest Las Vegas. She understands the unique benefits of elevated living at 3,000+ feet, including cooler temperatures, mountain views, and outdoor recreation access. Her realtor service when buying a new home includes market analysis, negotiation, and representation focused on protecting your interests in this premier location."
    },
    {
      question: "What are the benefits of living at 3,000+ foot elevation near Mount Charleston?",
      answer: "Living at 3,000+ foot elevation near Mount Charleston offers significantly cooler temperatures (often 10-15 degrees cooler than Las Vegas Valley), cleaner air quality, stunning mountain and valley views, and easy access to Mount Charleston's hiking trails, ski resort, and outdoor recreation. Sierra at Skyeview Homes in Skye Canyon provides this elevated lifestyle while maintaining easy access to Las Vegas amenities and services."
    },
    {
      question: "Are there new construction homes available near Mount Charleston?",
      answer: "Yes, Sierra at Skyeview Homes offers new construction homes near Mount Charleston in Skye Canyon, Northwest Las Vegas. These homes are available in three floor plans: 1,602 sq ft, 1,708 sq ft, and 1,965 sq ft, starting from $420,240. Dr. Jan Duffy provides expert buyer representation and realtor service when buying these new construction homes, ensuring you get the best lot selection, pricing, and terms."
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
        "name": "Homes Near Mount Charleston",
        "item": "https://www.sierraskyeview.com/homes-near-mount-charleston"
      }
    ]
  };

  const realEstateAgentSchema = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    "name": "Dr. Jan Duffy",
    "description": "Expert buyer's agent specializing in homes near Mount Charleston in Northwest Las Vegas. Realtor service when buying new construction homes at Sierra at Skyeview in Skye Canyon.",
    "url": "https://www.sierraskyeview.com/homes-near-mount-charleston",
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
      "Homes near Mount Charleston",
      "Sierra at Skyeview Homes",
      "Skye Canyon Northwest Las Vegas",
      "Realtor service when buying a new home",
      "3,000+ foot elevation living"
    ]
  };

  return (
    <>
      <Head>
        <title>Homes Near Mount Charleston | Sierra at Skyeview | Northwest Las Vegas 89166</title>
        <meta name="description" content="Homes near Mount Charleston at Sierra at Skyeview in Skye Canyon, Northwest Las Vegas 89166. New construction homes at 3,000+ foot elevation with mountain views and cooler temperatures. Expert realtor service when buying a new home from buyer's agent Dr. Jan Duffy." />
        <meta name="keywords" content="homes near Mount Charleston, Sierra at Skyeview Homes, Northwest Las Vegas homes, Skye Canyon 89166, 3,000 foot elevation homes, mountain view homes Las Vegas, realtor service when buying a new home, buyer's agent Mount Charleston area" />
        <meta property="og:title" content="Homes Near Mount Charleston | Sierra at Skyeview Northwest Las Vegas" />
        <meta property="og:description" content="Discover new construction homes near Mount Charleston at Sierra at Skyeview in Skye Canyon. Elevated living at 3,000+ feet with mountain views and cooler temperatures. Expert buyer representation from Dr. Jan Duffy." />
        <meta property="og:image" content="https://www.sierraskyeview.com/9026-rimerton-street-exterior.jpg" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.sierraskyeview.com/homes-near-mount-charleston" />
        <link rel="canonical" href="https://www.sierraskyeview.com/homes-near-mount-charleston" />
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
                Homes Near Mount Charleston | Sierra at Skyeview Northwest Las Vegas
              </h1>
              <p className="text-xl mb-8 max-w-3xl mx-auto">
                Discover elevated living at 3,000+ feet in Skye Canyon, Northwest Las Vegas. New construction homes near Mount Charleston with cooler temperatures, stunning mountain views, and easy access to outdoor recreation. Expert realtor service when buying a new home from buyer's agent Dr. Jan Duffy.
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
              <span className="text-gray-600">Homes Near Mount Charleston</span>
            </nav>
          </div>
        </section>

        {/* Main Content - Why Choose Homes Near Mount Charleston */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              Why Choose Homes Near Mount Charleston in Northwest Las Vegas?
            </h2>
            
            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-lg text-gray-700 mb-6">
                Living near Mount Charleston in Northwest Las Vegas offers a unique lifestyle opportunity that combines the best of mountain living with Las Vegas convenience. <Link href="/floor-plans" className="text-blue-600 hover:text-blue-700 underline">Sierra at Skyeview Homes</Link> in <Link href="/community" className="text-blue-600 hover:text-blue-700 underline">Skye Canyon</Link> provides this elevated living experience at 3,000+ foot elevation, just 30 minutes from Mount Charleston's hiking trails, ski resort, and outdoor recreation areas.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                Elevated Living at 3,000+ Feet in Skye Canyon
              </h3>
              <p className="text-lg text-gray-700 mb-6">
                Sierra at Skyeview Homes is strategically located in Skye Canyon, Northwest Las Vegas, at an elevation of over 3,000 feet. This elevation provides significant advantages over homes in the Las Vegas Valley floor, including temperatures that are typically 10-15 degrees cooler year-round. During hot Las Vegas summers, this temperature difference makes a substantial impact on comfort and energy costs. The elevated location also offers cleaner air quality and stunning panoramic views of both the Las Vegas Valley and the Spring Mountain Range, including Mount Charleston.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                Easy Access to Mount Charleston Recreation
              </h3>
              <p className="text-lg text-gray-700 mb-6">
                One of the primary benefits of choosing homes near Mount Charleston is the easy access to outdoor recreation. Mount Charleston, located in the Spring Mountains just 30 minutes from Sierra at Skyeview Homes, offers year-round activities including hiking on over 60 miles of trails, winter skiing and snowboarding at the Las Vegas Ski & Snowboard Resort, camping, picnicking, and wildlife viewing. The proximity to Mount Charleston makes it easy to escape the city for weekend adventures while maintaining the convenience of Las Vegas living.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                Mountain Views and Natural Beauty
              </h3>
              <p className="text-lg text-gray-700 mb-6">
                Homes near Mount Charleston in Skye Canyon offer breathtaking mountain views that change with the seasons. From snow-capped peaks in winter to wildflower displays in spring, the natural beauty surrounding Sierra at Skyeview Homes creates a peaceful, resort-like atmosphere. Many homesites are positioned to maximize these views, creating a sense of living in a mountain retreat while remaining close to Las Vegas amenities, shopping, dining, and entertainment.
              </p>
            </div>
          </div>
        </section>

        {/* Sierra at Skyeview Homes Near Mount Charleston */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              Sierra at Skyeview Homes: Your Gateway to Mount Charleston Living
            </h2>

            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-lg text-gray-700 mb-6">
                <Link href="/floor-plans" className="text-blue-600 hover:text-blue-700 underline">Sierra at Skyeview Homes</Link> represents the premier new construction opportunity for buyers seeking homes near Mount Charleston in Northwest Las Vegas. Located in the master-planned <Link href="/community" className="text-blue-600 hover:text-blue-700 underline">Skye Canyon community</Link> at zip code 89166, these homes offer the perfect combination of elevated living, mountain proximity, and Las Vegas convenience.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                New Construction Homes Designed for Elevated Living
              </h3>
              <p className="text-lg text-gray-700 mb-6">
                Sierra at Skyeview Homes offers three distinct floor plans designed to take advantage of the elevated location near Mount Charleston. The 1,602 sq ft homes start at $420,240, the 1,708 sq ft homes start at $429,990, and the 1,965 sq ft homes start at $449,990. Each home features premium finishes, smart home technology, and energy-efficient systems optimized for the cooler mountain climate. Large windows and outdoor living spaces are designed to maximize mountain views and natural light.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                Skye Canyon Community Amenities Near Mount Charleston
              </h3>
              <p className="text-lg text-gray-700 mb-6">
                Living in Skye Canyon near Mount Charleston means access to world-class community amenities. The master-planned community features parks, walking trails, recreational facilities, neighborhood schools, and a central clubhouse. These amenities complement the outdoor recreation available at Mount Charleston, creating a lifestyle that balances community living with mountain adventure. The <Link href="/community" className="text-blue-600 hover:text-blue-700 underline">Skye Canyon community</Link> is designed to enhance the natural beauty of the area while providing modern conveniences and social opportunities.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                Investment Value of Homes Near Mount Charleston
              </h3>
              <p className="text-lg text-gray-700 mb-6">
                Homes near Mount Charleston in Northwest Las Vegas have shown strong appreciation potential due to their unique location advantages. The combination of elevated living, mountain views, cooler temperatures, and proximity to outdoor recreation creates a desirable lifestyle that attracts buyers seeking an alternative to traditional Las Vegas living. Sierra at Skyeview Homes in Skye Canyon represents an opportunity to invest in this growing market with new construction homes that offer modern features and energy efficiency.
              </p>
            </div>
          </div>
        </section>

        {/* Dr. Jan Duffy's Realtor Service for Mount Charleston Area Homes */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              Expert Realtor Service When Buying Homes Near Mount Charleston
            </h2>

            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-lg text-gray-700 mb-6">
                <Link href="/about" className="text-blue-600 hover:text-blue-700 underline">Dr. Jan Duffy</Link> specializes in providing expert realtor service when buying new construction homes near Mount Charleston in Northwest Las Vegas. As your buyer's agent for <Link href="/floor-plans" className="text-blue-600 hover:text-blue-700 underline">Sierra at Skyeview Homes</Link> in Skye Canyon, Dr. Jan understands the unique considerations of elevated living and mountain proximity. Her realtor service when buying a new home includes comprehensive market analysis, lot selection guidance, negotiation expertise, and representation focused exclusively on protecting your interests.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                Understanding Elevated Living and Mountain Proximity
              </h3>
              <p className="text-lg text-gray-700 mb-6">
                Dr. Jan Duffy's expertise in homes near Mount Charleston includes understanding how elevation affects home design, energy efficiency, and lifestyle. She helps buyers evaluate lots based on mountain views, sun exposure, and proximity to community amenities. Her realtor service when buying a new home includes guidance on which homesites offer the best views, how to maximize natural light for the cooler climate, and what upgrades provide the best value for elevated living. This specialized knowledge ensures buyers make informed decisions about their investment in homes near Mount Charleston.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                Market Analysis for Northwest Las Vegas Elevated Homes
              </h3>
              <p className="text-lg text-gray-700 mb-6">
                As a buyer's agent specializing in homes near Mount Charleston, Dr. Jan Duffy provides comprehensive market analysis comparing Sierra at Skyeview Homes to other elevated communities in Northwest Las Vegas. Her realtor service when buying a new home includes evaluating comparable properties, understanding pricing trends for elevated homes, and identifying the best value opportunities. This market expertise helps buyers understand the investment potential of homes near Mount Charleston and make confident purchasing decisions.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                Negotiation and Buyer Representation Services
              </h3>
              <p className="text-lg text-gray-700 mb-6">
                Dr. Jan Duffy's realtor service when buying a new home near Mount Charleston includes expert negotiation to secure the best terms, pricing, and incentives. As your buyer's agent, she represents your interests exclusively—not the builder's. Her negotiation expertise covers lot premiums, upgrade packages, closing costs, and builder incentives. This independent representation ensures buyers get maximum value when purchasing homes near Mount Charleston at Sierra at Skyeview Homes in Skye Canyon.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Frequently Asked Questions About Homes Near Mount Charleston
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

        <NearbyAmenitiesSection compact heading="Life Near Mount Charleston & Skye Canyon Amenities" />

        {/* Call to Action */}
        <section className="py-16 bg-red-600 text-white">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Find Your Home Near Mount Charleston?
            </h2>
            <p className="text-lg mb-8">
              Contact Dr. Jan Duffy today for expert realtor service when buying new construction homes near Mount Charleston in Northwest Las Vegas. Discover elevated living at Sierra at Skyeview Homes in Skye Canyon.
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
              <p className="text-sm font-semibold">Find Your Mountain Home</p>
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

export default HomesNearMountCharleston;

