import type { NextPage } from "next";
import dynamic from "next/dynamic";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { AGENT, COMMUNITY } from "../utils/communityLocation";
import {
  AMENITIES_FAQ,
  buildAmenitiesAgentSchema,
  buildAmenitiesBreadcrumbSchema,
  buildAmenitiesFaqSchema,
  buildAmenitiesItemListSchema,
  buildCommunityPlaceSchema,
} from "../utils/amenitiesSchema";

const AmenityMap = dynamic(() => import("../components/AmenityMap"), {
  ssr: false,
  loading: () => (
    <div
      className="w-full h-[520px] rounded-lg bg-gray-100 animate-pulse border border-gray-200"
      aria-hidden="true"
    />
  ),
});

const pageTitle = `Nearby Amenities in ${COMMUNITY.name}, Las Vegas | Skye Canyon 89166`;
const pageDescription = `Interactive map and local guide to grocery, dining, parks, healthcare, schools, and shopping near ${COMMUNITY.name} in Skye Canyon, Northwest Las Vegas 89166. Buyer representation from ${AGENT.name}.`;

const AmenitiesPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta
          name="keywords"
          content="Skye Canyon amenities, Sierra at Skyeview nearby, Northwest Las Vegas grocery, 89166 restaurants, Skye Canyon schools, Dr. Jan Duffy"
        />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:url" content={`${COMMUNITY.siteUrl}/amenities`} />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://www.sierraskyeview.com/9026-rimerton-neighborhood-real.jpg"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <link rel="canonical" href={`${COMMUNITY.siteUrl}/amenities`} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(buildAmenitiesBreadcrumbSchema()) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(buildAmenitiesFaqSchema()) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(buildAmenitiesItemListSchema()) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(buildCommunityPlaceSchema()) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(buildAmenitiesAgentSchema()) }}
        />
      </Head>

      <nav className="bg-white shadow-lg fixed w-full top-0 z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <a href={AGENT.telHref} className="text-2xl font-bold text-blue-600">
                {AGENT.telephone}
              </a>
            </div>
            <div className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium">Home</Link>
              <Link href="/floor-plans" className="text-gray-700 hover:text-blue-600 font-medium">Available Homes</Link>
              <Link href="/community" className="text-gray-700 hover:text-blue-600 font-medium">Skye Canyon Guide</Link>
              <Link href="/amenities" className="text-blue-600 font-medium">Nearby Amenities</Link>
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
        <section className="bg-gray-50 py-4">
          <div className="max-w-7xl mx-auto px-4">
            <nav className="flex items-center space-x-2 text-sm" aria-label="Breadcrumb">
              <Link href="/" className="text-blue-600 hover:text-blue-700">Home</Link>
              <span className="text-gray-400">/</span>
              <span className="text-gray-600">Nearby Amenities</span>
            </nav>
          </div>
        </section>

        <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
          <div className="max-w-7xl mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Nearby Amenities in {COMMUNITY.name}, Las Vegas
            </h1>
            <p className="text-xl max-w-3xl">
              {COMMUNITY.name} sits in {COMMUNITY.masterPlan} at Northwest Las Vegas zip code{" "}
              {COMMUNITY.postalCode}. Use the map to explore verified grocery, dining, parks,
              healthcare, and schools—then connect with {AGENT.name} for buyer representation on
              new construction homes.
            </p>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Interactive amenity map</h2>
            <p className="text-lg text-gray-700 mb-8 max-w-3xl">
              Filter by category to see places near {COMMUNITY.fullAddress}. Map data comes from
              Google Places when your site API key is configured; otherwise a static map and curated
              list still load for visitors and search engines.
            </p>
            <AmenityMap compact={false} showCuratedList />
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-gray-900">Dining &amp; coffee</h2>
            <p className="text-gray-700">
              Skye Canyon Marketplace on West Skye Canyon Park Drive includes Starbucks and several
              fast-casual and sit-down options steps from many Skye Canyon neighborhoods. For
              additional choices, Montecito Marketplace on North Durango Drive hosts Mimi&apos;s Cafe
              and other national brands about 15 minutes from {COMMUNITY.name}.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12">Parks &amp; recreation</h2>
            <p className="text-gray-700">
              The 1,700-acre {COMMUNITY.masterPlan} master plan includes parks, trails, sports
              courts, splash pads, and a central recreation campus. Residents of {COMMUNITY.name}{" "}
              also enjoy cooler 3,000+ foot elevation air and quick access to Mount Charleston for
              hiking and seasonal snow play.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12">Grocery &amp; daily errands</h2>
            <p className="text-gray-700">
              Smith&apos;s Marketplace at 9710 W Skye Canyon Park Dr anchors daily shopping inside
              the community. Sprouts Farmers Market at Montecito Marketplace adds organic and
              specialty items along North Durango Drive.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12">Healthcare &amp; pharmacies</h2>
            <p className="text-gray-700">
              Centennial Hills Hospital at 6900 N Durango Dr provides emergency and specialty care
              roughly 10–15 minutes from Sierra at Skyeview. Smith&apos;s Pharmacy at Skye Canyon
              Marketplace fills routine prescriptions close to home.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12">Shopping</h2>
            <p className="text-gray-700">
              Skye Canyon Marketplace and Montecito Marketplace combine groceries, services, and
              retail. Downtown Summerlin offers additional regional shopping approximately 20–25
              minutes away (approximate drive time).
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12">Golf</h2>
            <p className="text-gray-700">
              Las Vegas Paiute Golf Resort on West Lake Mead Boulevard is a well-known public course
              northwest of the valley. Several private and resort courses are reachable via US-95
              toward Summerlin and the Strip corridor.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12">Schools</h2>
            <p className="text-gray-700">
              Clark County School District options near Skye Canyon include Somerset Academy Skye
              Canyon Campus, William &amp; Mary Scherbenbach Elementary, Ralph Cadwallader Middle
              School, and Arbor View High School. Always confirm current attendance boundaries with
              CCSD before you choose a homesite.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12">Commute &amp; regional access</h2>
            <p className="text-gray-700">
              Skye Canyon connects to US-95 at the Skye Canyon interchange less than a mile from
              the community. Approximate drive times in typical traffic: Las Vegas Strip 30–35
              minutes; Harry Reid International Airport 35–40 minutes; Downtown Summerlin 20–25
              minutes. Verify routes with your navigation app before committing to a commute schedule.
            </p>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Nearby amenities FAQ</h2>
            <div className="space-y-6">
              {AMENITIES_FAQ.map((item) => (
                <article key={item.question} className="border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.question}</h3>
                  <p className="text-gray-700">{item.answer}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-blue-900 text-white">
          <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Your hyperlocal buyer&apos;s agent</h2>
              <p className="text-lg text-blue-100 mb-4">
                {AGENT.name} represents buyers—not the builder—at {COMMUNITY.name}. Get lot
                selection help, incentive negotiation, and Skye Canyon market insight from a
                licensed Nevada REALTOR® affiliated with {AGENT.brokerage}.
              </p>
              <ul className="space-y-2 text-blue-100">
                <li>Phone: {AGENT.telephone}</li>
                <li>Email: {AGENT.email}</li>
                <li>Nevada License #{AGENT.license}</li>
                <li>{COMMUNITY.fullAddress}</li>
              </ul>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={AGENT.telHref}
                className="inline-flex items-center justify-center min-h-[44px] px-8 py-3 rounded-lg bg-white text-blue-900 font-semibold hover:bg-gray-100"
              >
                Call {AGENT.telephone}
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center min-h-[44px] px-8 py-3 rounded-lg border-2 border-white font-semibold hover:bg-white hover:text-blue-900"
              >
                Contact form
              </Link>
              <Link
                href="/floor-plans"
                className="inline-flex items-center justify-center min-h-[44px] px-8 py-3 rounded-lg border-2 border-white font-semibold hover:bg-white hover:text-blue-900"
              >
                View available homes
              </Link>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">{COMMUNITY.name}</h3>
              <p className="text-gray-300 mb-4 text-sm">{COMMUNITY.fullAddress}</p>
              <p className="text-gray-300">{AGENT.telephone}</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                <Link href="/floor-plans" className="block text-gray-300 hover:text-white">Available Homes</Link>
                <Link href="/community" className="block text-gray-300 hover:text-white">Skye Canyon Guide</Link>
                <Link href="/amenities" className="block text-blue-400">Nearby Amenities</Link>
                <Link href="/contact" className="block text-gray-300 hover:text-white">Contact</Link>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact {AGENT.name}</h4>
              <p className="text-gray-300">{AGENT.email}</p>
              <p className="text-gray-300 mt-2">License {AGENT.license}</p>
            </div>
            <div>
              <p className="text-gray-400 text-sm">{AGENT.brokerage}</p>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <div className="flex items-center justify-center gap-2">
              <Image
                src="/Berkshire Hathaway HomeServices_Quality Seal_White.png"
                alt="Berkshire Hathaway HomeServices Logo"
                width={200}
                height={40}
                className="h-8 w-auto opacity-80"
              />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default AmenitiesPage;
