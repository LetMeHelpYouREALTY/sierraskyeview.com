import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";

const heroSlides = [
    {
      title: "Sierra at Skyeview Homes - Luxury New Homes in Skye Canyon",
      subtitle: "Now Selling! Starting at $420,240 - Luxury Homes in Gated Community",
      description: "Expert Guidance from Dr. Jan Duffy | Buyer's Agent for Sierra at Skyeview Homes",
      image: "/9026-rimerton-street-exterior.jpg"
    },
    {
      title: "Limited Availability - Act Fast!",
      subtitle: "New construction homes available now! Sierra at Skyeview Homes is selling fast.",
      description: "Get your VIP tour with Dr. Jan Duffy before these luxury homes are gone.",
      image: "/9002-rimerton-street-exterior.jpg"
    },
    {
      title: "Beautiful Skye Canyon Community",
      subtitle: "Master-planned community with resort-style amenities",
      description: "Experience the lifestyle that awaits you in Northwest Las Vegas",
      image: "/9026-rimerton-neighborhood-real.jpg"
    }
  ];

const faqSchemaItems = [
  {
    question: "What are the HOA fees?",
    answer:
      "Skye Canyon master community HOA fee is approximately $83 per month. The Sierra at Skyeview Area may have additional sub-HOA fees for enhanced amenities, so request the latest budget package before writing an offer."
  },
  {
    question: "What's included in the homes?",
    answer:
      "Every Sierra at Skyeview home includes integrated smart-home technology, premium finishes, and energy-efficient features tailored to the Las Vegas climate and 3,000+ foot elevation lifestyle."
  },
  {
    question: "Are there quick move-in homes?",
    answer:
      "Yes. 1,602 sq ft homes are available for immediate occupancy and new lots publish weekly. Dr. Jan tracks each release to help you reserve the right elevation and delivery date."
  },
  {
    question: "How does Dr. Jan Duffy help?",
    answer:
      "Dr. Jan represents the buyer—not the builder. She verifies pricing, negotiates incentives, and stays onsite for walkthroughs and contract milestones to protect your investment."
  }
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqSchemaItems.map((item) => ({
    "@type": "Question",
    "name": item.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": item.answer
    }
  }))
};

// Best 4 images for gallery showcase
const galleryPhotos = [
  { src: "/9026-rimerton-street-exterior.jpg", alt: "Two-story home exterior at 9026 Rimerton Street, Sierra at Skyeview Homes" },
  { src: "/9026-rimerton-kitchen-real.jpg", alt: "Modern luxury kitchen with premium appliances at 9026 Rimerton Street, Sierra at Skyeview Homes" },
  { src: "/9026-rimerton-living-room-real.jpg", alt: "Spacious luxury living room at 9026 Rimerton Street, Sierra at Skyeview Homes" },
  { src: "/9026-rimerton-master-bedroom-real.jpg", alt: "Elegant master bedroom with premium finishes at 9026 Rimerton Street, Sierra at Skyeview Homes" }
];

const Home: NextPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [showMobileCTA, setShowMobileCTA] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

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
        <title>Sierra at Skyeview Homes | Skye Canyon, NV</title>
        <meta name="description" content="New construction at Sierra at Skyeview in Skye Canyon, Northwest Las Vegas (89166). Buyer representation from Dr. Jan Duffy, Nevada REALTOR." />
        <meta name="keywords" content="Sierra at Skyeview Homes for sale, new construction Northwest Las Vegas, Skye Canyon homes, 89166 homes for sale, Mount Charleston area homes, realtor service when buying a new home, buyer's agent Sierra at Skyeview, Dr. Jan Duffy, Northwest Las Vegas new construction" />
        <meta property="og:title" content="Sierra at Skyeview Homes for Sale | New Construction Northwest Las Vegas" />
        <meta property="og:description" content="Sierra at Skyeview Homes for sale in Northwest Las Vegas. New construction homes starting at $420,240 located in Skye Canyon near Mount Charleston. Expert realtor service when buying a new home from buyer's agent Dr. Jan Duffy." />
        <meta property="og:image" content="https://www.sierraskyeview.com/design%2004_new%202.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:url" content="https://www.sierraskyeview.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Sierra at Skyeview Homes" />
        <meta property="og:locale" content="en_US" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@DrJanSells" />
        <meta name="twitter:title" content="Sierra at Skyeview Homes | Skye Canyon Las Vegas | Dr. Jan Duffy Real Estate" />
        <meta name="twitter:description" content="Luxury new homes at Sierra at Skyeview Homes in Skye Canyon, Las Vegas NV. New homes starting at $420,240." />
        <meta name="twitter:image" content="https://www.sierraskyeview.com/design%2004_new%202.jpg" />
        <link rel="canonical" href="https://www.sierraskyeview.com/" />
        {/* Preload critical hero image for faster Speed Index */}
        <link rel="preload" as="image" href="/9026-rimerton-street-exterior.jpg" />
        {/* Resource hints for faster DNS resolution */}
        <link rel="dns-prefetch" href="https://drjanduffy.realscout.com" />
        <link rel="preconnect" href="https://drjanduffy.realscout.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
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
              <button 
                className="text-gray-700 p-3 min-h-[44px] min-w-[44px] flex items-center justify-center" 
                aria-label="Open menu"
              >
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
        <section className="relative h-screen flex items-center overflow-hidden">
          {/* Background Image Carousel */}
          <div className="absolute inset-0">
            {heroSlides.map((slide, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ${
                  index === currentSlide ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  className="object-cover"
                  priority={index === 0}
                  loading={index === 0 ? "eager" : "lazy"}
                  sizes="100vw"
                  quality={index === 0 ? 75 : 70}
                  fetchPriority={index === 0 ? "high" : "auto"}
                />
              </div>
            ))}
          </div>
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 opacity-70"></div>
          <div className="absolute inset-0 bg-black opacity-30"></div>
          
          {/* Content */}
          <div className="relative z-10 max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center text-white">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Homes for Sale Skye Canyon | New Construction Near Mount Charleston
              </h1>
              <p className="text-xl md:text-2xl mb-4">
                {heroSlides[currentSlide].subtitle}
              </p>
              <div className="flex items-center gap-4 mb-8">
                <p className="text-lg">{heroSlides[currentSlide].description}</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="tel:7029034687" className="btn-primary min-h-[44px] flex items-center justify-center">
                  📞 Call NOW: (702) 903-4687
                </a>
                <a href="mailto:DrDuffy@SierraSkyeview.com" className="btn-secondary min-h-[44px] flex items-center justify-center">
                  📧 Email Dr. Jan
                </a>
                <a
                  href="https://drjanduffy.realscout.com/homesearch/shared-searches/U2hhcmVhYmxlU2VhcmNoTGluay0xNDE5NA=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-white min-h-[44px] flex items-center justify-center"
                >
                  🏠 Explore Active Homes & Quick Closings
                </a>
              </div>
              {/* Slide Indicators */}
              <div className="flex gap-3 mt-8">
                {heroSlides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`min-h-[44px] min-w-[44px] flex items-center justify-center rounded-full transition-all duration-300 ${
                      index === currentSlide ? 'bg-white w-8 h-2' : 'bg-white/50 w-2 h-2'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
            <div className="flex justify-center">
              <div className="bg-white/10 backdrop-blur rounded-3xl p-6 text-center shadow-2xl border border-white/20">
                <Image
                  src="/design 04_new 2.jpg"
                  alt="Portrait of Dr. Jan Duffy"
                  width={260}
                  height={260}
                  className="w-48 h-48 md:w-56 md:h-56 rounded-full object-cover border-4 border-white shadow-lg mx-auto mb-4"
                  priority
                  quality={75}
                />
                <p className="text-lg font-semibold">Dr. Jan Duffy</p>
                <p className="text-sm text-blue-100 mb-4">Buyer's Agent | Sierra at Skyeview Homes</p>
                <p className="text-sm leading-relaxed text-blue-100">
                  “I represent YOU—not the builder. Let's secure the right home,
                  negotiate incentives, and protect every detail from first visit through closing.”
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Limited Availability Alert */}
        <section className="bg-red-600 text-white py-8">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              🚨 LIMITED AVAILABILITY - ACT FAST!
            </h2>
            <p className="text-lg mb-4">
              Discover the most up-to-date Homes and quick-move opportunities curated by Dr. Jan Duffy&apos;s private home finder.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:7029034687" className="btn-white text-red-600 hover:text-red-700 min-h-[44px] flex items-center justify-center">
                📞 SECURE YOUR HOME: (702) 903-4687
              </a>
              <a
                href="https://drjanduffy.realscout.com/homesearch/shared-searches/U2hhcmVhYmxlU2VhcmNoTGluay0xNDE5NA=="
                target="_blank"
                rel="noopener noreferrer"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-red-600 px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 min-h-[44px] flex items-center justify-center"
              >
                👀 Browse Current Availability Online
              </a>
            </div>
          </div>
        </section>

        {/* Featured Testimonial */}
        <section className="py-16 bg-blue-50">
          <div className="max-w-5xl mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-8 card-featured p-8">
              <Image
                src="/design 04_new 2.jpg"
                alt="Dr. Jan Duffy headshot for testimonials"
                width={220}
                height={220}
                className="w-40 h-40 rounded-full object-cover border-4 border-blue-600 shadow-lg"
                priority={false}
                loading="lazy"
                quality={70}
              />
              <div>
                <p className="text-lg text-gray-700 italic mb-4">
                  "Dr. Jan Duffy is the ultimate professional. She guided us through every step of the construction process and negotiated incentives we didn't know existed. Her Skye Canyon expertise saved us time, money, and stress."
                </p>
                <p className="font-semibold text-gray-900">
                  Sarah & Michael Johnson · 1,965 sq ft Home · Closed December 2024
                </p>
                <Link
                  href="/reviews"
                  className="inline-flex items-center gap-2 mt-4 text-blue-600 font-semibold hover:text-blue-700"
                >
                  Read more verified testimonials →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Floor Plan Search CTA */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-5xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Explore Every Floor Plan & Homesite in One Place
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Access Dr. Jan Duffy&apos;s private home finder for Sierra at Skyeview Homes. See current Homes, elevations, quick move-in opportunities, photos, pricing, and availability updated in real time.
            </p>
            <a
              href="https://drjanduffy.realscout.com/homesearch/shared-searches/U2hhcmVhYmxlU2VhcmNoTGluay0xNDE5NA=="
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              🔍 Open the Live Home Finder
            </a>
          </div>
        </section>

        {/* Community Gallery */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Sierra at Skyeview Homes Gallery
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Explore the stunning homes and beautiful community at Sierra at Skyeview Homes. From modern exteriors to luxurious interiors, discover why Sierra at Skyeview Homes is the perfect place to call home in Skye Canyon. Compare amenities with the{" "}
                <a
                  href="https://skyecanyon.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700 underline"
                >
                  official Skye Canyon lifestyle guide
                </a>
                .
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
              {galleryPhotos.map((photo, index) => (
                <figure
                  key={photo.src}
                  className="relative aspect-square overflow-hidden rounded-lg cursor-pointer group shadow-md hover:shadow-xl transition-all duration-300 min-h-[120px] min-w-[120px]"
                  onClick={() => setSelectedImage(photo.src)}
                  role="button"
                  tabIndex={0}
                  aria-label={`View ${photo.alt}`}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setSelectedImage(photo.src);
                    }
                  }}
                >
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                    sizes="(max-width: 768px) 50vw, 25vw"
                    loading="lazy"
                    quality={70}
                  />
                  <figcaption className="sr-only">{photo.alt}</figcaption>
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-opacity duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                      </svg>
                    </div>
                  </div>
                </figure>
              ))}
            </div>

            {/* Lightbox Modal */}
            {selectedImage && (
              <div
                className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4"
                onClick={() => setSelectedImage(null)}
              >
                <button
                  className="absolute top-4 right-4 text-white hover:text-gray-300 z-10 min-h-[44px] min-w-[44px] flex items-center justify-center p-2"
                  onClick={() => setSelectedImage(null)}
                  aria-label="Close image"
                >
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
                <div className="relative max-w-7xl max-h-full" onClick={(e) => e.stopPropagation()}>
                  <Image
                    src={selectedImage}
                    alt="Enlarged view"
                    width={1200}
                    height={800}
                    className="max-w-full max-h-[90vh] object-contain rounded-lg"
                    priority
                  />
                </div>
              </div>
            )}

            <div className="text-center mt-8">
              <Link href="/community" className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors min-h-[44px] inline-flex items-center justify-center">
                Explore Community
              </Link>
            </div>
          </div>
        </section>

        {/* Breadcrumb Navigation */}
        <section className="bg-gray-50 py-4">
          <div className="max-w-7xl mx-auto px-4">
            <nav className="flex items-center space-x-2 text-sm">
              <Link href="/" className="text-blue-600 hover:text-blue-700">Home</Link>
            </nav>
          </div>
        </section>

        {/* Comprehensive Content Section - Sierra at Skyeview Homes Overview */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              Sierra at Skyeview Homes: Premier New Construction in Skye Canyon, Northwest Las Vegas
            </h2>
            
            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-lg text-gray-700 mb-6">
                <Link href="/floor-plans" className="text-blue-600 hover:text-blue-700 underline">Sierra at Skyeview Homes</Link> represents the premier new construction opportunity in <Link href="/community" className="text-blue-600 hover:text-blue-700 underline">Skye Canyon</Link>, Northwest Las Vegas, zip code 89166. Located at 3,000+ foot elevation with stunning mountain views and cooler temperatures, these new construction homes offer a unique lifestyle that combines elevated living with Las Vegas convenience. As your buyer's agent, <Link href="/about" className="text-blue-600 hover:text-blue-700 underline">Dr. Jan Duffy</Link> provides expert realtor service when buying a new home, ensuring you get the best lot selection, pricing, and terms for your Sierra at Skyeview Homes purchase.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                Elevated Living at 3,000+ Feet in Skye Canyon
              </h3>
              <p className="text-lg text-gray-700 mb-6">
                Sierra at Skyeview Homes in Skye Canyon, Northwest Las Vegas, offers a unique advantage: elevated living at over 3,000 feet above sea level. This elevation provides temperatures that are typically 10-15 degrees cooler than the Las Vegas Valley floor, making summers significantly more comfortable and reducing energy costs. The elevated location also offers cleaner air quality, stunning panoramic views of both the Las Vegas Valley and the Spring Mountain Range, including Mount Charleston, and a sense of living in a mountain retreat while maintaining easy access to Las Vegas amenities, shopping, dining, and entertainment.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                New Construction Homes with Premium Finishes
              </h3>
              <p className="text-lg text-gray-700 mb-6">
                Sierra at Skyeview Homes offers three distinct floor plans designed for modern living. The 1,602 sq ft homes start at $420,240, featuring 3 bedrooms and 2.5 bathrooms with an open-concept layout perfect for families. The 1,708 sq ft homes start at $429,990, offering additional space and flexibility. The 1,965 sq ft homes start at $449,990, providing the most spacious option with premium features throughout. Each home includes integrated smart home technology, premium finishes, energy-efficient systems optimized for the elevated climate, and designs that maximize natural light and mountain views. These new construction homes represent exceptional value for Northwest Las Vegas homebuyers seeking quality, modern living.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                Skye Canyon Master-Planned Community Benefits
              </h3>
              <p className="text-lg text-gray-700 mb-6">
                Sierra at Skyeview Homes is located within Skye Canyon, a 1,700-acre master-planned community in Northwest Las Vegas that offers comprehensive amenities and thoughtful development. The community features parks, walking trails, recreational facilities, neighborhood schools, and a central clubhouse. This master-planned approach ensures quality infrastructure, long-term value appreciation, and a strong sense of community. Living in Skye Canyon means access to world-class amenities while enjoying the natural beauty of the elevated location. The community is designed to enhance the lifestyle of residents while preserving the area's natural character and providing modern conveniences.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                Proximity to Mount Charleston and Outdoor Recreation
              </h3>
              <p className="text-lg text-gray-700 mb-6">
                One of the unique advantages of Sierra at Skyeview Homes in Skye Canyon is proximity to Mount Charleston, located just 30 minutes away in the Spring Mountains. This proximity provides easy access to year-round outdoor recreation including hiking on over 60 miles of trails, winter skiing and snowboarding at the Las Vegas Ski & Snowboard Resort, camping, picnicking, and wildlife viewing. The ability to escape to mountain recreation while maintaining Las Vegas convenience creates a lifestyle that's increasingly sought after by homebuyers. This combination of elevated living, mountain proximity, and Las Vegas access makes Sierra at Skyeview Homes an exceptional choice for buyers seeking a unique lifestyle in Northwest Las Vegas.
              </p>
            </div>
          </div>
        </section>

        {/* Why Work With Dr. Jan Duffy */}
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
                  quality={70}
                />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Why Work With Dr. Jan Duffy?
              </h2>
              <p className="text-lg mb-8">
                Get expert, unbiased guidance—I'm your trusted advisor, not the builder's sales agent
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl mb-4">🤝</div>
                <h3 className="text-xl font-bold mb-2">Buyer's Agent Representation</h3>
                <p className="text-gray-300">I represent YOU—not the builder. As your <Link href="/services" className="text-blue-300 hover:text-blue-200 underline">Buyer's Agent</Link> for the Sierra at Skyeview Area in Skye Canyon, I provide insider access to this premier 3,000+ foot elevation community while protecting your interests.</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">📊</div>
                <h3 className="text-xl font-bold mb-2">Skye Canyon Market Expertise</h3>
                <p className="text-gray-300">I'll show you comparable Las Vegas communities and help you understand true market value for <Link href="/community" className="text-blue-300 hover:text-blue-200 underline">Skye Canyon homes</Link>—not just what sales teams tell you. My expertise includes the unique benefits of 3,000+ foot elevation living and proximity to Mount Charleston.</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">💰</div>
                <h3 className="text-xl font-bold mb-2">Negotiation Power</h3>
                <p className="text-gray-300">Even with new construction, there's room to negotiate. I know how to maximize your leverage and protect your interests. Learn more about my <Link href="/services" className="text-blue-300 hover:text-blue-200 underline">buyer representation services</Link>.</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-xl font-bold mb-2">Las Vegas Specialist</h3>
                <p className="text-gray-300">Nevada License S.0197614. Deep knowledge of Skye Canyon and the entire metro area. <Link href="/about" className="text-blue-300 hover:text-blue-200 underline">Learn more about Dr. Jan Duffy</Link>.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Comprehensive Realtor Service Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              Expert Realtor Service When Buying a New Home at Sierra at Skyeview
            </h2>
            
            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-lg text-gray-700 mb-6">
                <Link href="/about" className="text-blue-600 hover:text-blue-700 underline">Dr. Jan Duffy</Link> specializes in providing expert realtor service when buying new construction homes at Sierra at Skyeview in Skye Canyon, Northwest Las Vegas. As your buyer's agent, Dr. Jan understands that purchasing a new construction home requires specialized knowledge and independent representation. Her realtor service when buying a new home includes comprehensive market analysis, lot selection guidance, negotiation expertise, construction oversight, and representation focused exclusively on protecting your interests throughout the entire process.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                Independent Buyer Representation for New Construction
              </h3>
              <p className="text-lg text-gray-700 mb-6">
                When you work with Dr. Jan Duffy for realtor service when buying a new home at Sierra at Skyeview Homes, you get independent buyer representation—meaning she represents YOUR interests exclusively, not the builder's. This independent representation is crucial for new construction purchases because it ensures you receive honest market analysis, expert negotiation on pricing and terms, and advocacy throughout the construction and closing process. Unlike builder sales agents who represent the builder's interests, Dr. Jan's realtor service when buying a new home is focused entirely on protecting your investment and ensuring you get the best value, terms, and lot selection.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                Market Analysis and Pricing Guidance
              </h3>
              <p className="text-lg text-gray-700 mb-6">
                Dr. Jan Duffy's realtor service when buying a new home includes comprehensive market analysis to help you understand true market value for Sierra at Skyeview Homes in Skye Canyon, Northwest Las Vegas. She compares pricing to similar new construction communities, evaluates lot premiums and their impact on value, and helps you understand which upgrades provide the best return on investment. This market expertise ensures you make informed decisions about your purchase and understand the investment potential of your new home. Her realtor service when buying a new home includes helping you evaluate whether the pricing, lot selection, and upgrade packages represent good value in the Northwest Las Vegas market.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                Lot Selection and Homesite Evaluation
              </h3>
              <p className="text-lg text-gray-700 mb-6">
                One of the most important aspects of Dr. Jan Duffy's realtor service when buying a new home is lot selection guidance. She helps buyers evaluate homesites based on mountain views, sun exposure, privacy, proximity to amenities, and future development plans. Her expertise in Skye Canyon and elevated living helps buyers understand which lots offer the best views, how elevation affects home design and energy efficiency, and what to consider when selecting a homesite. This guidance is essential for maximizing your investment and ensuring you choose a lot that meets your lifestyle needs and long-term goals.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                Negotiation and Builder Incentives
              </h3>
              <p className="text-lg text-gray-700 mb-6">
                Dr. Jan Duffy's realtor service when buying a new home includes expert negotiation to secure the best terms, pricing, and incentives. Even with new construction, there's room to negotiate on lot premiums, upgrade packages, closing costs, and builder incentives. Her negotiation expertise ensures you get maximum value when purchasing Sierra at Skyeview Homes. She understands builder pricing strategies, knows when incentives are available, and negotiates on your behalf to secure the best possible terms. This negotiation power is one of the key benefits of having independent buyer representation when purchasing new construction.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                Construction Oversight and Quality Control
              </h3>
              <p className="text-lg text-gray-700 mb-6">
                Dr. Jan Duffy's realtor service when buying a new home extends throughout the construction process. She provides construction oversight, attends key construction milestones, and ensures quality standards are met. Her expertise helps identify potential issues early, ensures specifications are followed, and provides peace of mind throughout the building process. This construction oversight is essential for protecting your investment and ensuring your new home meets quality standards. Her realtor service when buying a new home includes being your advocate during walkthroughs, inspections, and the final closing process.
              </p>
            </div>
          </div>
        </section>

        {/* Quick Q&A Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Get quick answers to common questions about Sierra at Skyeview Homes and community. For more detailed guides, <Link href="/blog" className="text-blue-600 hover:text-blue-700 underline">visit our blog</Link>.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="card p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">What are the HOA fees?</h3>
                <p className="text-gray-700 mb-4">
                  Skye Canyon master community HOA fee is approximately $83/month. The Sierra at Skyeview Area may have additional sub-HOA fees for enhanced amenities. Learn more about <Link href="/community" className="text-blue-600 hover:text-blue-700 underline">Skye Canyon community amenities</Link> and <Link href="/qa" className="text-blue-600 hover:text-blue-700 underline">HOA fees</Link>.
                </p>
                <Link href="/qa" className="text-blue-600 hover:text-blue-700 font-semibold">View all HOA questions →</Link>
              </div>

              <div className="card p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">What's included in the homes?</h3>
                <p className="text-gray-700 mb-4">
                  Every home in the Sierra at Skyeview Area comes with integrated smart home technology, premium finishes, and energy-efficient features. Located at 3,000+ foot elevation in Skye Canyon with access to Mount Charleston just 30 minutes away. Explore <Link href="/new-build-homes" className="text-blue-600 hover:text-blue-700 underline">new construction homes</Link> and <Link href="/floor-plans" className="text-blue-600 hover:text-blue-700 underline">available floor plans</Link>.
                </p>
                <Link href="/qa" className="text-blue-600 hover:text-blue-700 font-semibold">Learn more about features →</Link>
              </div>

              <div className="card p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Are there quick move-in homes?</h3>
                <p className="text-gray-700 mb-4">
                  Yes! Several <Link href="/quick-move-in" className="text-blue-600 hover:text-blue-700 underline">quick move-in homes</Link> are available starting from $447,690 with estimated completion dates in December 2024. Browse all <Link href="/floor-plans" className="text-blue-600 hover:text-blue-700 underline">available homes</Link> and <Link href="/new-build-homes" className="text-blue-600 hover:text-blue-700 underline">new construction opportunities</Link>.
                </p>
                <Link href="/quick-move-in" className="text-blue-600 hover:text-blue-700 font-semibold">View available homes →</Link>
              </div>

              <div className="card p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">How does Dr. Jan Duffy help?</h3>
                <p className="text-gray-700 mb-4">
                  As your <Link href="/services" className="text-blue-600 hover:text-blue-700 underline">Buyer's Agent</Link>, Dr. Jan represents YOUR interests exclusively—not the builder's. She provides expert guidance on the Sierra at Skyeview Area, deep market knowledge of <Link href="/community" className="text-blue-600 hover:text-blue-700 underline">Skye Canyon's 3,000+ foot elevation community</Link>, and negotiation power focused on protecting your investment. <Link href="/reviews" className="text-blue-600 hover:text-blue-700 underline">Read client reviews</Link> and <Link href="/about" className="text-blue-600 hover:text-blue-700 underline">learn more about Dr. Jan Duffy</Link>.
                </p>
                <Link href="/about" className="text-blue-600 hover:text-blue-700 font-semibold">Meet Dr. Jan Duffy →</Link>
              </div>
            </div>

            <div className="text-center">
              <Link href="/qa" className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors min-h-[44px] inline-flex items-center justify-center">
                View All Questions & Answers
              </Link>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-red-600 text-white">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              🚨 DON'T MISS OUT - SIERRA AT SKYEVIEW IS SELLING FAST!
            </h2>
            <p className="text-lg mb-8">
              Only 3 Homes remaining! Get VIP access to Sierra at Skyeview Homes with Dr. Jan Duffy's expert guidance. Schedule your private tour today before these homes are gone forever.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:7029034687" className="bg-white text-red-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors min-h-[44px] inline-flex items-center justify-center">
                📞 SECURE YOUR HOME NOW (702) 903-4687
              </a>
              <a href="mailto:DrDuffy@SierraSkyeview.com" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-red-600 px-8 py-3 rounded-lg font-semibold transition-colors min-h-[44px] inline-flex items-center justify-center">
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
              <p className="text-gray-300 mb-4">(702) 903-4687</p>
              <p className="sr-only">8925 Vanhoy Creek St., Las Vegas, NV 89166</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <div className="space-y-3">
                <Link href="/floor-plans" className="text-gray-300 hover:text-white py-2 min-h-[44px] flex items-center">Available Homes</Link>
                <Link href="/community" className="text-gray-300 hover:text-white py-2 min-h-[44px] flex items-center">Skye Canyon Guide</Link>
                <Link href="/services" className="text-gray-300 hover:text-white py-2 min-h-[44px] flex items-center">Buyer Representation Services</Link>
                <Link href="/qa" className="text-gray-300 hover:text-white py-2 min-h-[44px] flex items-center">Buyer FAQs</Link>
              </div>
              <h5 className="text-sm font-semibold text-gray-200 mt-6 uppercase tracking-wide">Buyer Resources</h5>
              <div className="space-y-3 text-sm">
                <Link href="/services" className="text-gray-400 hover:text-white py-2 min-h-[44px] flex items-center">Las Vegas New Construction Tips</Link>
                <Link href="/community" className="text-gray-400 hover:text-white py-2 min-h-[44px] flex items-center">Skye Canyon Amenities &amp; Lifestyle</Link>
                <Link href="/mortgage-calculator" className="text-gray-400 hover:text-white py-2 min-h-[44px] flex items-center">New Home Financing Calculator</Link>
                <a
                  href="https://drjanduffy.realscout.com/homesearch/shared-searches/U2hhcmVhYmxlU2VhcmNoTGluay0xNDE5NA=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white py-2 min-h-[44px] flex items-center"
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

export default Home;






