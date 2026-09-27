import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

const CONTACT_ERROR_MESSAGE =
  "Sorry, something went wrong sending your message. Please call or text Dr. Jan Duffy at (702) 903-4687.";

const Contact: NextPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">(
    "idle"
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          sourceUrl:
            typeof window !== "undefined" ? window.location.href : undefined,
        }),
      });

      if (!response.ok) {
        setSubmitStatus("error");
        return;
      }

      setSubmitStatus("success");
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      <Head>
        <title>Contact Realtor Service When Buying a New Home | Sierra at Skyeview | Dr. Jan Duffy</title>
        <meta name="description" content="Contact realtor service when buying a new home at Sierra at Skyeview Homes in Northwest Las Vegas. Located in Skye Canyon near Mount Charleston, zip code 89166. Buyer's agent Dr. Jan Duffy provides expert real estate guidance. Call (702) 903-4687 or email DrDuffy@SierraSkyeview.com." />
        <meta name="keywords" content="contact Dr. Jan Duffy, realtor service when buying a new home, Sierra at Skyeview contact, buyer's agent contact, Skye Canyon realtor contact, Northwest Las Vegas real estate agent, 89166 realtor phone" />
        <meta property="og:title" content="Contact Realtor Service When Buying a New Home | Sierra at Skyeview" />
        <meta property="og:description" content="Contact realtor service when buying a new home at Sierra at Skyeview Homes in Northwest Las Vegas. Located in Skye Canyon near Mount Charleston. Buyer's agent Dr. Jan Duffy provides expert real estate guidance." />
        <meta property="og:image" content="https://www.sierraskyeview.com/design%2004_new%202.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact Dr. Jan Duffy - Sierra at Skyeview Homes" />
        <meta name="twitter:description" content="Call or email Dr. Jan Duffy for Sierra at Skyeview Homes buyer representation." />
        <meta name="twitter:image" content="https://www.sierraskyeview.com/design%2004_new%202.jpg" />
        <link rel="canonical" href="https://www.sierraskyeview.com/contact" />
        
        {/* Contact Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "RealEstateAgent",
              "name": "Dr. Jan Duffy",
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
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "36.2565",
                "longitude": "-115.2848"
              },
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  "opens": "09:00",
                  "closes": "18:00"
                },
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": "Saturday",
                  "opens": "10:00",
                  "closes": "16:00"
                },
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": "Sunday",
                  "opens": "12:00",
                  "closes": "16:00"
                }
              ],
              "areaServed": {
                "@type": "City",
                "name": "Las Vegas",
                "containedInPlace": {
                  "@type": "State",
                  "name": "Nevada"
                }
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
                  "name": "Contact",
                  "item": "https://www.sierraskyeview.com/contact"
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
                  "name": "How can I contact Dr. Jan Duffy for realtor service when buying a new home?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "You can contact Dr. Jan Duffy by calling (702) 903-4687 or emailing DrDuffy@SierraSkyeview.com. She provides expert realtor service when buying a new home at Sierra at Skyeview Homes in Skye Canyon, Northwest Las Vegas. Office hours are Monday-Friday 9am-6pm, Saturday 10am-4pm, and Sunday 12pm-4pm."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What is Dr. Jan Duffy's office address?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Dr. Jan Duffy's office is located at 8925 Vanhoy Creek St., Las Vegas, NV 89166. This location serves buyers interested in Sierra at Skyeview Homes in Skye Canyon, Northwest Las Vegas."
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
              <Link href="/about" className="text-gray-700 hover:text-blue-600 font-medium">About Dr. Jan</Link>
              <Link href="/contact" className="text-blue-600 font-semibold">Contact</Link>
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
              <span className="text-gray-600">Contact</span>
            </nav>
          </div>
        </section>

        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Contact Dr. Jan Duffy for Expert Realtor Service When Buying a New Home
            </h1>
              <p className="text-xl mb-8 max-w-3xl mx-auto">
                Ready to start your new home journey? Get in touch with Dr. Jan Duffy for expert realtor service when buying a new home at Sierra at Skyeview Homes in Skye Canyon, Northwest Las Vegas. Get VIP access and expert guidance throughout your new construction purchase.
              </p>
            <div className="flex justify-center mb-8">
              <Image
                src="/design 04_new 2.jpg"
                alt="Contact portrait of Dr. Jan Duffy"
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
              Get Expert Realtor Service When Buying a New Home in Northwest Las Vegas
            </h2>
            
            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-lg text-gray-700 mb-6">
                Contact <Link href="/about" className="text-blue-600 hover:text-blue-700 underline">Dr. Jan Duffy</Link> today to get expert realtor service when buying a new home at <Link href="/floor-plans" className="text-blue-600 hover:text-blue-700 underline">Sierra at Skyeview Homes</Link> in <Link href="/community" className="text-blue-600 hover:text-blue-700 underline">Skye Canyon</Link>, Northwest Las Vegas, zip code 89166. Dr. Jan provides independent buyer representation, meaning she represents YOUR interests exclusively, not the builder's. Her realtor service when buying a new home includes comprehensive market analysis, lot selection guidance, negotiation expertise, and advocacy throughout the entire new construction process.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                Why Contact Dr. Jan Duffy for Your New Home Purchase?
              </h3>
              <p className="text-lg text-gray-700 mb-6">
                Dr. Jan Duffy's realtor service when buying a new home provides independent buyer representation that protects your interests and ensures you get the best value for your investment. With 20+ years of Las Vegas real estate expertise and deep knowledge of Skye Canyon's 3,000+ foot elevation community, she helps buyers navigate the new construction process with confidence. Her realtor service when buying a new home includes early access to the best lots, expert negotiation on pricing and incentives, and guidance throughout construction and closing.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                Office Hours and Availability
              </h3>
              <p className="text-lg text-gray-700 mb-6">
                Dr. Jan Duffy is available to provide realtor service when buying a new home Monday through Friday from 9:00 AM to 6:00 PM, Saturday from 10:00 AM to 4:00 PM, and Sunday from 12:00 PM to 4:00 PM. She understands that buying a new home is a significant decision, and she's committed to being available when you need her. Whether you prefer to call, email, or schedule an in-person meeting, Dr. Jan is ready to help you with your Sierra at Skyeview Homes purchase in Skye Canyon, Northwest Las Vegas.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                Location and Service Area
              </h3>
              <p className="text-lg text-gray-700 mb-6">
                Dr. Jan Duffy's office is located at 8925 Vanhoy Creek St., Las Vegas, NV 89166, serving buyers interested in Sierra at Skyeview Homes in Skye Canyon, Northwest Las Vegas. Her realtor service when buying a new home focuses on this premier master-planned community, where she has deep knowledge of the elevated location, proximity to Mount Charleston, and community amenities. Whether you're a first-time buyer or experienced investor, Dr. Jan provides the expert guidance you need for your new construction purchase.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Send Dr. Jan a Message</h2>
                {submitStatus === "success" && (
                  <p
                    className="mb-4 rounded-lg border border-green-200 bg-green-50 px-4 py-3 text-green-800"
                    role="status"
                  >
                    Thank you for your message! Dr. Jan Duffy will contact you soon.
                  </p>
                )}
                {submitStatus === "error" && (
                  <p
                    className="mb-4 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-red-800"
                    role="alert"
                  >
                    {CONTACT_ERROR_MESSAGE}
                  </p>
                )}
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Your full name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="(702) 555-1234"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Tell us about your new home needs..."
                    />
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </button>
                </form>
              </div>

              {/* Contact Details */}
              <div>
                <div className="flex flex-col items-center mb-6">
                  <Image
                    src="/design 04_new 2.jpg"
                    alt="Dr. Jan Duffy - Professional Real Estate Agent"
                    width={200}
                    height={200}
                    className="w-40 h-40 rounded-full object-cover border-4 border-blue-600 shadow-lg mb-4"
                    priority={false}
                    loading="lazy"
                    unoptimized
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                    }}
                  />
                  <h2 className="text-3xl font-bold text-gray-900">Get In Touch</h2>
                </div>
                
                <div className="space-y-8">
                  <div className="flex items-start">
                    <div className="text-2xl mr-4">📞</div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Phone</h3>
                      <p className="text-gray-600 mb-2">Dr. Jan Duffy: (702) 903-4687</p>
                      <p className="text-gray-600">Urgent: (702) 222-1964</p>
                      <a href="tel:7029034687" className="text-blue-600 hover:text-blue-700 font-semibold">
                        Call Now
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="text-2xl mr-4">📧</div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Email</h3>
                      <p className="text-gray-600 mb-2">DrDuffy@SierraSkyeview.com</p>
                      <a href="mailto:DrDuffy@SierraSkyeview.com" className="text-blue-600 hover:text-blue-700 font-semibold">
                        Send Email
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="text-2xl mr-4">📍</div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Address</h3>
                      <p className="text-gray-600">Call for location details</p>
                      <p className="sr-only">Sierra Skyeview Sales Office, 8925 Vanhoy Creek St., Las Vegas, NV 89166</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="text-2xl mr-4">🕒</div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Business Hours</h3>
                      <p className="text-gray-600">
                        Monday - Sunday: 10:00 AM - 6:00 PM<br />
                        <span className="text-sm text-gray-500">Model Home Hours</span>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="text-2xl mr-4">🏆</div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">License</h3>
                      <p className="text-gray-600">Nevada License: S.0197614</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-blue-50 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Quick Response Guarantee</h3>
                  <p className="text-gray-600 text-sm">
                    Dr. Jan Duffy responds to all inquiries within 2 hours during business hours. 
                    For urgent matters, call the urgent line at (702) 222-1964.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="mb-12 text-center">
              <Image
                src="/9026-rimerton-street-exterior.jpg"
                alt="Two-story home exterior at Sierra at Skyeview Homes in Skye Canyon - Visit our community"
                width={800}
                height={400}
                className="w-full max-w-4xl mx-auto h-64 md:h-80 object-cover rounded-lg shadow-lg mb-8"
                priority
              />
            </div>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Visit Sierra at Skyeview Homes
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Located in beautiful <Link href="/community" className="text-blue-600 hover:text-blue-700 underline">Skye Canyon's 1,700-acre master-planned community</Link>, the <Link href="/floor-plans" className="text-blue-600 hover:text-blue-700 underline">Sierra at Skyeview Area</Link> offers easy access to all that Las Vegas has to offer. Explore <Link href="/services" className="text-blue-600 hover:text-blue-700 underline">buyer representation services</Link> and <Link href="/about" className="text-blue-600 hover:text-blue-700 underline">learn more about Dr. Jan Duffy</Link>.
              </p>
            </div>

            <div className="rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3221.2!2d-115.2848!3d36.2565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzYuMjU2NSAtMTE1LjI4NDg!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Sierra at Skyeview Homes Location - Skye Canyon, Las Vegas"
                className="w-full"
              ></iframe>
              <div className="bg-white p-4 text-center border-t border-gray-200">
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Skye+Canyon+Las+Vegas+NV+89166"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold"
                >
                  🗺️ Open in Google Maps - Get Directions
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-red-600 text-white">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Start Your New Home Journey?
            </h2>
            <p className="text-lg mb-8">
              Don't wait! Sierra at Skyeview Homes is selling fast. Contact Dr. Jan Duffy today for VIP access and expert guidance.
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
                <p>Dr. Jan Duffy: Monday-Sunday 10:00 AM - 6:00 PM</p>
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

export default Contact;






