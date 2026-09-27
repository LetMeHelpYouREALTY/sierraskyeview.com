import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

const Reviews: NextPage = () => {
  const [activeTab, setActiveTab] = useState('all');

  const reviews = [
    {
      id: 1,
      name: "Sarah & Michael Johnson",
      rating: 5,
      date: "December 2024",
      source: "Google Reviews",
      content: "Dr. Jan Duffy made our home buying experience at Skye Canyon absolutely seamless. Her expertise in new construction and deep market insight gave us insider access to the best lots and pricing. She negotiated upgrades that saved us thousands and guided us through every step. We couldn't be happier with our new home at Skye Canyon!",
      verified: true,
      floorPlan: "1,965 sq ft",
      purchasePrice: "$449,990"
    },
    {
      id: 2,
      name: "Jennifer Martinez",
      rating: 5,
      date: "November 2024",
      source: "Google Reviews",
      content: "Working with Dr. Jan Duffy was the best decision we made when buying at Skye Canyon. As our Buyer's Agent, her deep knowledge of Skye Canyon's 3,000+ foot elevation community is unmatched. She showed us comparable Las Vegas communities and helped us understand the true value of living near Mount Charleston. Her buyer representation gave us early access to the best lots and VIP treatment. Highly recommend!",
      verified: true,
      floorPlan: "1,708 sq ft",
      purchasePrice: "$429,990"
    },
    {
      id: 3,
      name: "David & Lisa Chen",
      rating: 5,
      date: "October 2024",
      source: "Google Reviews",
      content: "Dr. Jan Duffy's expertise as our Buyer's Agent for new home construction is incredible. She helped us navigate the entire process from lot selection to closing at Skye Canyon. Her buyer representation gave us access to upgrades and incentives we wouldn't have gotten otherwise. Our new home at this premier 3,000+ foot elevation community exceeds our expectations, and Dr. Jan made it all possible.",
      verified: true,
      floorPlan: "1,602 sq ft",
      purchasePrice: "$419,990"
    },
    {
      id: 4,
      name: "Robert Thompson",
      rating: 5,
      date: "September 2024",
      source: "Facebook",
      content: "Dr. Jan Duffy is a true professional. Her guidance through the new home buying process at Skye Canyon was invaluable. She helped us understand the construction timeline, negotiated better terms, and ensured we got the best value. The Skye Canyon location is perfect, and our new home is everything we dreamed of.",
      verified: true,
      floorPlan: "1,965 sq ft",
      purchasePrice: "$449,990"
    },
    {
      id: 5,
      name: "Amanda Rodriguez",
      rating: 5,
      date: "August 2024",
      source: "Google Reviews",
      content: "Dr. Jan Duffy's focus on Skye Canyon gave us incredible advantages when buying our new home. She secured early access to the best lots, negotiated upgrades, and provided expert guidance throughout the process. Her knowledge of the Las Vegas market and Skye Canyon community is exceptional. We love our new home!",
      verified: true,
      floorPlan: "1,708 sq ft",
      purchasePrice: "$429,990"
    },
    {
      id: 6,
      name: "Mark & Susan Williams",
      rating: 5,
      date: "July 2024",
      source: "Zillow",
      content: "Dr. Jan Duffy made buying our new home at Skye Canyon a breeze. Her expertise in new construction and market knowledge gave us insider information and better pricing. She guided us through lot selection, floor plan choices, and all the details. The Skye Canyon location is amazing, and we couldn't be happier with our decision.",
      verified: true,
      floorPlan: "1,602 sq ft",
      purchasePrice: "$419,990"
    }
  ];

  const totalReviews = reviews.length;
  const averageRating = totalReviews
    ? reviews.reduce((sum, review) => sum + review.rating, 0) / totalReviews
    : 0;

  const reviewStructuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Dr. Jan Duffy Real Estate",
    "description": "Expert real estate agent specializing in new home construction and independent advocacy for Sierra at Skyeview Homes buyers in Las Vegas",
    "url": "https://www.sierraskyeview.com",
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
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": averageRating.toFixed(1),
      "reviewCount": totalReviews.toString(),
      "bestRating": "5",
      "worstRating": "1"
    },
    "itemReviewed": {
      "@type": "Person",
      "name": "Dr. Jan Duffy",
      "image": "https://www.sierraskyeview.com/design%2004_new%202.jpg",
      "jobTitle": "Buyer's Agent",
      "url": "https://www.sierraskyeview.com/about"
    },
    "review": reviews.map(review => ({
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": review.name
      },
      "datePublished": review.date,
      "reviewBody": review.content,
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": review.rating.toString(),
        "bestRating": "5",
        "worstRating": "1"
      }
    }))
  };

  return (
    <>
      <Head>
        <title>Sierra at Skyeview Customer Reviews | Realtor Service When Buying a New Home | Dr. Jan Duffy</title>
        <meta name="description" content="Read authentic customer reviews and testimonials for Sierra at Skyeview Homes in Northwest Las Vegas. Located in Skye Canyon near Mount Charleston, zip code 89166. See why realtor service when buying a new home from buyer's agent Dr. Jan Duffy is trusted for new construction homes." />
        <meta property="og:title" content="Sierra at Skyeview Customer Reviews | Realtor Service" />
        <meta property="og:description" content="Read authentic customer reviews and testimonials for Sierra at Skyeview Homes in Northwest Las Vegas. Located in Skye Canyon near Mount Charleston. Trusted realtor service when buying a new home." />
        <meta property="og:image" content="https://www.sierraskyeview.com/design%2004_new%202.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Customer Reviews - Sierra at Skyeview Homes" />
        <meta name="twitter:description" content="See why buyers trust Dr. Jan Duffy for Sierra at Skyeview Homes." />
        <meta name="twitter:image" content="https://www.sierraskyeview.com/design%2004_new%202.jpg" />
        <meta name="keywords" content="Sierra at Skyeview Homes reviews, Skye Canyon new homes, Dr. Jan Duffy testimonials, Las Vegas new construction, Skye Canyon homes for sale" />
        <link rel="canonical" href="https://www.sierraskyeview.com/reviews" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewStructuredData) }}
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
              <Link href="/reviews" className="text-blue-600 font-semibold">Reviews</Link>
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
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
          <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 items-center gap-10">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center md:text-left">
                Sierra at Skyeview Homes Customer Reviews
              </h1>
              <p className="text-xl mb-8 max-w-3xl text-center md:text-left">
                Read authentic testimonials from satisfied homeowners who chose Dr. Jan Duffy as their trusted Buyer's Agent for new homes at Sierra at Skyeview Homes in Skye Canyon.
              </p>
              <div className="flex items-center justify-center md:justify-start space-x-4 mb-8">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <div className="text-left">
                  <span className="text-2xl font-bold">{averageRating.toFixed(1)}</span>
                  <span className="text-lg">({totalReviews} reviews)</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <a href="tel:7029034687" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                  📞 Call Dr. Jan: (702) 903-4687
                </a>
                <Link href="/contact" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg font-semibold transition-colors">
                  Get Your Free Consultation
                </Link>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="bg-white/10 backdrop-blur rounded-3xl p-6 text-center shadow-2xl border border-white/20">
                <Image
                  src="/design 04_new 2.jpg"
                  alt="Dr. Jan Duffy portrait for testimonials"
                  width={260}
                  height={260}
                  className="w-48 h-48 md:w-56 md:h-56 rounded-full object-cover border-4 border-white shadow-lg mx-auto mb-4"
                  priority={false}
                  loading="lazy"
                  unoptimized
                />
                <p className="text-lg font-semibold">Dr. Jan Duffy</p>
                <p className="text-sm text-blue-100 mb-2">Buyer's Agent | Sierra at Skyeview Homes</p>
                <p className="text-sm text-blue-100">
                  “Every five-star review represents a homeowner whose interests came first. I stay beside you from lot selection to final walk-through.”
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Reviews Overview */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="mb-12 text-center">
              <Image
                src="/customer-testimonials.jpg"
                alt="Happy customers and testimonials for Dr. Jan Duffy real estate services"
                width={800}
                height={256}
                className="w-full max-w-4xl mx-auto h-64 object-cover rounded-lg shadow-lg mb-8"
                priority
              />
            </div>
            <div className="text-center mb-12">
              <div className="flex justify-center mb-6">
                <Image
                  src="/design 04_new 2.jpg"
                  alt="Dr. Jan Duffy - Professional Real Estate Agent"
                  width={200}
                  height={200}
                  className="w-48 h-48 rounded-full object-cover border-4 border-blue-600 shadow-xl"
                  priority={false}
                  loading="lazy"
                  unoptimized
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                  }}
                />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Homebuyers Choose Dr. Jan Duffy at Sierra at Skyeview Homes
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Dr. Jan Duffy has built a reputation as the go-to <Link href="/services" className="text-blue-600 hover:text-blue-700 underline">Buyer's Agent</Link> for new homes in the <Link href="/floor-plans" className="text-blue-600 hover:text-blue-700 underline">Sierra at Skyeview Area</Link>. Located at 3,000+ foot elevation in <Link href="/community" className="text-blue-600 hover:text-blue-700 underline">Skye Canyon</Link> with stunning mountain views and access to Mount Charleston, this master-planned community offers a unique Las Vegas lifestyle. Dr. Jan's buyer representation provides clients with exclusive access, better pricing, and expert guidance throughout the home buying process—all while she exclusively represents YOUR interests, not the builder's. <Link href="/about" className="text-blue-600 hover:text-blue-700 underline">Learn more about Dr. Jan Duffy</Link>.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white rounded-lg p-6 shadow-lg text-center">
                <div className="text-4xl mb-4">🤝</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Buyer's Agent Representation</h3>
                <p className="text-gray-600">Exclusive access to premier lots in the <Link href="/floor-plans" className="text-blue-600 hover:text-blue-700 underline">Sierra at Skyeview Area</Link>, early phase releases, and informed pricing strategies through Dr. Jan Duffy's <Link href="/services" className="text-blue-600 hover:text-blue-700 underline">buyer representation</Link>. As your Buyer's Agent, she represents YOU—not the builder—protecting your interests in Sierra at Skyeview Area's premier 3,000+ foot elevation location in <Link href="/community" className="text-blue-600 hover:text-blue-700 underline">Skye Canyon</Link>.</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-lg text-center">
                <div className="text-4xl mb-4">📊</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Skye Canyon Market Expertise</h3>
                <p className="text-gray-600">Deep knowledge of Las Vegas real estate market and <Link href="/community" className="text-blue-600 hover:text-blue-700 underline">Skye Canyon's unique 3,000+ foot elevation community</Link>, helping clients understand the value of living near Mount Charleston and make informed decisions about their new home investment.</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-lg text-center">
                <div className="text-4xl mb-4">💰</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Negotiation Power</h3>
                <p className="text-gray-600">Expert negotiation skills that save clients thousands on upgrades, incentives, and closing costs while ensuring they get the best value for their investment. <Link href="/services" className="text-blue-600 hover:text-blue-700 underline">Learn more about Dr. Jan's services</Link>.</p>
              </div>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Sierra at Skyeview Homes at Skye Canyon - New Homes in Las Vegas</h3>
              <p className="text-lg text-gray-600 mb-6">
                The Sierra at Skyeview Area, located within <Link href="/community" className="text-blue-600 hover:text-blue-700 underline">Skye Canyon</Link>, represents the pinnacle of <Link href="/new-build-homes" className="text-blue-600 hover:text-blue-700 underline">new home construction</Link> in Las Vegas, offering three thoughtfully designed two-story Homes in Skye Canyon's prestigious master-planned community. Sierra at Skyeview Area provides residents with access to world-class amenities, beautiful mountain views, and a vibrant community lifestyle that's unmatched in the Las Vegas Valley.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Nestled in Skye Canyon, the Sierra at Skyeview Area offers <Link href="/floor-plans" className="text-blue-600 hover:text-blue-700 underline">new homes starting from $420,240</Link>. The community features three floor plans: <Link href="/model-1602" className="text-blue-600 hover:text-blue-700 underline">1,602 sq ft homes</Link> (3 bed, 2.5 bath), <Link href="/model-1708" className="text-blue-600 hover:text-blue-700 underline">1,708 sq ft homes</Link> (3 bed, 2.5 bath), and <Link href="/model-1965" className="text-blue-600 hover:text-blue-700 underline">1,965 sq ft homes</Link> (3 bed, 2.5 bath). Each home includes modern finishes, smart home technology, and access to <Link href="/community" className="text-blue-600 hover:text-blue-700 underline">Skye Canyon's incredible amenities</Link> including parks, trails, recreational facilities, and neighborhood schools.
                <span className="sr-only">Community address: 8925 Vanhoy Creek St., Las Vegas, NV 89166</span>
              </p>
              <p className="text-lg text-gray-600">
                Dr. Jan Duffy's independent representation ensures that homebuyers receive VIP treatment, early insight into the best lots, and expert guidance throughout the entire home buying process. Her Nevada real estate license (S.0197614) and deep knowledge of the Las Vegas market make her the ideal choice for anyone considering a new home in the Sierra at Skyeview Area. <Link href="/services" className="text-blue-600 hover:text-blue-700 underline">Explore buyer representation services</Link> and <Link href="/contact" className="text-blue-600 hover:text-blue-700 underline">contact Dr. Jan</Link> today.
              </p>
            </div>
          </div>
        </section>

        {/* Customer Reviews */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Authentic Customer Testimonials
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Read real reviews from homeowners who chose Dr. Jan Duffy as their trusted real estate expert for their new home at Skye Canyon.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {reviews.map((review) => (
                <div key={review.id} className="bg-gray-50 rounded-lg p-6 shadow-lg">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">{review.name}</h3>
                      <div className="flex items-center space-x-2">
                        <div className="flex items-center">
                          {[...Array(review.rating)].map((_, i) => (
                            <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                        <span className="text-sm text-gray-500">{review.date}</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full mb-2">
                        {review.source}
                      </span>
                      {review.verified && (
                        <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                          Verified
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <p className="text-gray-700 mb-4 italic">"{review.content}"</p>
                  
                  <div className="border-t pt-4">
                    <div className="flex justify-between text-sm text-gray-600">
                      <span><strong>Floor Plan:</strong> {review.floorPlan}</span>
                      <span><strong>Price:</strong> {review.purchasePrice}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Dr. Jan Duffy */}
        <section className="py-16 bg-blue-900 text-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Why Homebuyers Choose Dr. Jan Duffy
              </h2>
              <p className="text-lg mb-8">
                Dr. Jan Duffy's expertise and dedicated Buyer's Agent representation provide unmatched advantages for new home buyers at Sierra at Skyeview Homes.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold mb-6">Sierra at Skyeview Homes Buyer Benefits</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="text-2xl mr-4">🎯</div>
                    <div>
                      <h4 className="text-lg font-semibold mb-2">Early Access to Best Lots</h4>
                      <p className="text-gray-300">Get first pick of premium lots before they're released to the general public.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="text-2xl mr-4">💰</div>
                    <div>
                      <h4 className="text-lg font-semibold mb-2">Exclusive Upgrades & Incentives</h4>
                      <p className="text-gray-300">Access to special pricing on upgrades and builder incentives not available to other buyers.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="text-2xl mr-4">📋</div>
                    <div>
                      <h4 className="text-lg font-semibold mb-2">Streamlined Process</h4>
                      <p className="text-gray-300">Buyer's Agent representation ensures a smooth, efficient home buying experience focused on your best interests in the Sierra at Skyeview Area.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold mb-6">Expert Guidance & Support</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="text-2xl mr-4">🏠</div>
                    <div>
                      <h4 className="text-lg font-semibold mb-2">New Construction Expertise</h4>
                      <p className="text-gray-300">Specialized knowledge of new home construction process, timelines, and what to expect.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="text-2xl mr-4">📍</div>
                    <div>
                      <h4 className="text-lg font-semibold mb-2">Local Market Knowledge</h4>
                      <p className="text-gray-300">Deep understanding of Las Vegas real estate market and Skye Canyon community.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="text-2xl mr-4">🤝</div>
                    <div>
                      <h4 className="text-lg font-semibold mb-2">Personalized Service</h4>
                      <p className="text-gray-300">Dedicated support from initial consultation through closing and beyond.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-red-600 text-white">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Join Our Satisfied Homeowners?
            </h2>
            <p className="text-lg mb-8">
              Don't wait! Sierra at Skyeview Homes is selling fast. Get VIP access to the best lots and expert guidance from Dr. Jan Duffy today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:7029034687" className="bg-white text-red-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors">
                📞 CALL DR. JAN: (702) 903-4687
              </a>
              <a href="mailto:DrDuffy@SierraSkyeview.com" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-red-600 px-8 py-3 rounded-lg font-semibold transition-colors">
                📧 EMAIL FOR CONSULTATION
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
                <Link href="/reviews" className="block text-blue-400">Buyer Success Stories</Link>
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
    </>
  );
};

export default Reviews;





