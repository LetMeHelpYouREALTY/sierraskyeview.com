import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

const Blog: NextPage = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Complete Guide to Buying New Construction Homes in Las Vegas",
      excerpt: "Everything you need to know about buying new construction homes in Las Vegas, from lot selection to closing. Expert tips from buyer's agent Dr. Jan Duffy.",
      slug: "complete-guide-buying-new-construction-las-vegas",
      date: "January 2025",
      category: "Buyer's Guide",
      image: "/9026-rimerton-street-exterior.jpg",
      readTime: "8 min read"
    },
    {
      id: 2,
      title: "Why Choose Skye Canyon: A Buyer's Guide to Northwest Las Vegas",
      excerpt: "Discover why Skye Canyon is one of Las Vegas's most desirable master-planned communities. Learn about amenities, location, and lifestyle benefits.",
      slug: "why-choose-skye-canyon-buyers-guide",
      date: "January 2025",
      category: "Neighborhood Guide",
      image: "/9026-rimerton-neighborhood-real.jpg",
      readTime: "6 min read"
    },
    {
      id: 3,
      title: "Understanding HOA Fees: What to Know Before Buying",
      excerpt: "A comprehensive guide to HOA fees at Sierra at Skyeview Homes and Skye Canyon. Learn what's included, how fees are determined, and what to expect.",
      slug: "understanding-hoa-fees-what-to-know",
      date: "January 2025",
      category: "Buyer's Guide",
      image: "/9026-rimerton-kitchen-real.jpg",
      readTime: "5 min read"
    },
    {
      id: 4,
      title: "New Construction vs. Resale: Which is Right for You?",
      excerpt: "Compare the benefits of new construction homes versus resale properties. Learn which option best fits your needs, timeline, and budget.",
      slug: "new-construction-vs-resale-which-right-for-you",
      date: "January 2025",
      category: "Buyer's Guide",
      image: "/9026-rimerton-living-room-real.jpg",
      readTime: "7 min read"
    },
    {
      id: 5,
      title: "The Buyer's Agent Advantage: Why You Need Independent Representation",
      excerpt: "Learn why having an independent buyer's agent is crucial when purchasing new construction. Discover how Dr. Jan Duffy protects your interests.",
      slug: "buyers-agent-advantage-independent-representation",
      date: "January 2025",
      category: "Buyer's Guide",
      image: "/9026-rimerton-master-bedroom-real.jpg",
      readTime: "6 min read"
    }
  ];

  return (
    <>
      <Head>
        <title>Real Estate Blog & Resources | Sierra at Skyeview Homes | Dr. Jan Duffy</title>
        <meta name="description" content="Expert real estate guides, buyer resources, and neighborhood information for Sierra at Skyeview Homes in Northwest Las Vegas. Learn about new construction, Skye Canyon, and the home buying process from buyer's agent Dr. Jan Duffy." />
        <meta name="keywords" content="Las Vegas real estate blog, new construction buyer guide, Skye Canyon neighborhood guide, home buying resources, realtor service when buying a new home, buyer's agent Las Vegas" />
        <meta property="og:title" content="Real Estate Blog & Resources | Sierra at Skyeview Homes" />
        <meta property="og:description" content="Expert real estate guides and buyer resources for Sierra at Skyeview Homes. Learn about new construction, Skye Canyon, and the home buying process." />
        <meta property="og:image" content="https://www.sierraskyeview.com/9026-rimerton-street-exterior.jpg" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.sierraskyeview.com/blog" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Real Estate Blog & Resources | Sierra at Skyeview" />
        <meta name="twitter:description" content="Expert real estate guides and buyer resources for Sierra at Skyeview Homes in Northwest Las Vegas." />
        <meta name="twitter:image" content="https://www.sierraskyeview.com/9026-rimerton-street-exterior.jpg" />
        <link rel="canonical" href="https://www.sierraskyeview.com/blog" />
        
        {/* Blog Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Blog",
              "name": "Sierra at Skyeview Homes Blog",
              "description": "Expert real estate guides and buyer resources for Sierra at Skyeview Homes",
              "url": "https://www.sierraskyeview.com/blog",
              "publisher": {
                "@type": "Person",
                "name": "Dr. Jan Duffy",
                "url": "https://www.sierraskyeview.com/about"
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
              <Link href="/about" className="text-gray-700 hover:text-blue-600 font-medium">About Dr. Jan</Link>
              <Link href="/contact" className="text-gray-700 hover:text-blue-600 font-medium">Contact</Link>
              <Link href="/qa" className="text-gray-700 hover:text-blue-600 font-medium">Q&amp;A</Link>
            </div>
            <div className="md:hidden">
              <button className="text-gray-700 p-3 min-h-[44px] min-w-[44px] flex items-center justify-center" aria-label="Open menu">
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
        <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-16">
          <div className="max-w-7xl mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Real Estate Blog & Buyer Resources
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl">
              Expert guides, tips, and resources to help you navigate the home buying process at Sierra at Skyeview Homes in Skye Canyon, Northwest Las Vegas.
            </p>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <article key={post.id} className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow overflow-hidden">
                  <Link href={`/blog/${post.slug}`}>
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover hover:scale-110 transition-transform duration-300"
                        quality={75}
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-semibold text-blue-600">{post.category}</span>
                        <span className="text-sm text-gray-500">{post.readTime}</span>
                      </div>
                      <h2 className="text-xl font-bold text-gray-900 mb-2 hover:text-blue-600 transition-colors">
                        {post.title}
                      </h2>
                      <p className="text-gray-600 mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-500">{post.date}</span>
                        <span className="text-blue-600 font-semibold hover:text-blue-700">
                          Read More →
                        </span>
                      </div>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-blue-50">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Ready to Start Your Home Buying Journey?
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Get expert guidance from Dr. Jan Duffy and discover why so many homebuyers choose her for their new construction needs at Sierra at Skyeview Homes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:7029034687" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors min-h-[44px] inline-flex items-center justify-center">
                📞 CALL NOW: (702) 903-4687
              </a>
              <a href="mailto:DrDuffy@SierraSkyeview.com" className="bg-transparent border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors min-h-[44px] inline-flex items-center justify-center">
                📧 EMAIL DR. JAN
              </a>
              <Link href="/contact" className="bg-transparent border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors min-h-[44px] inline-flex items-center justify-center">
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
            </div>
            <div>
              <h5 className="text-sm font-semibold text-gray-200 mt-6 uppercase tracking-wide">Buyer Resources</h5>
              <div className="space-y-3 text-sm">
                <Link href="/blog" className="text-gray-400 hover:text-white py-2 min-h-[44px] flex items-center">Real Estate Blog</Link>
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
                <p className="text-sm text-gray-400 mt-4">
                  Nevada License S.0197614
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

export default Blog;

