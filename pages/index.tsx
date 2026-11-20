import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import {
  AreaFacts,
  BookButton,
  DrJanTake,
  FactsFootnote,
  HomesForSaleNearYou,
  MeetDrJan,
  QABlock,
  type QA,
} from "../components/standard";
import { SiteFooter, SiteHeader } from "../components/standard/SiteChrome";

const CAMPAIGN = "home";

const QA_ITEMS: QA[] = [
  {
    q: "How much are homes at Sierra at Skyeview?",
    a: "Century Communities lists Residence 1602 from $421,990, Residence 1708 from $436,990 and Residence 1965 from $456,990 (read November 20, 2026). Starting prices are for the base plan on the least expensive lot, so compare the final contract price, not the advertised one.",
  },
  {
    q: "What have Skye Canyon homes sold for lately?",
    a: "Skye Canyon closed 309 homes at a $535,000 median and $263 per square foot in the 12 months ending September 18, 2026, according to MLS records published by Nevada Real Estate Group. About 45% of those closings were homes built in 2025 or later.",
  },
  {
    q: "Are there HOA dues or special assessments?",
    a: "Every Skye Canyon home pays the master association. Some parcels also sit in City of Las Vegas special improvement districts 609 and 610, billed separately, with final payments in 2047 and 2048. Ask for the lot's assessment and the association budget before you write an offer.",
  },
  {
    q: "How long is the drive to the Strip and the airport?",
    a: "From Skye Canyon Park, Caesars Palace is 19.8 miles and about 22 to 28 minutes without traffic, and Harry Reid International Terminal 1 is 24.8 miles and about 27 to 34 minutes, by Nevada Real Estate Group's road model. Drive it at your own commute hour before you commit.",
  },
  {
    q: "Which schools are zoned for Skye Canyon homes?",
    a: "On CCSD's 2026-27 zoning data, the Skye Canyon plats Nevada Real Estate Group checked were zoned to Kenneth Divich Elementary, Edmundo Escobedo Sr. Middle and Arbor View High School. CCSD assigns schools by address, so check the exact home on CCSD's zoning search.",
  },
  {
    q: "Do I need my own agent to buy from the builder?",
    a: "The builder's sales team works for the builder. Dr. Jan works for you: she compares the builder's price with nearby resales, reviews the contract and lot charges, and attends the walk-throughs. Ask the builder about its agent-registration rule before your first visit.",
  },
];

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://www.sierraskyeview.com/" }],
};

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Sierra at Skyeview Homes | Skye Canyon, NV</title>
        <meta
          name="description"
          content="Sierra at Skyeview new homes in Skye Canyon, Las Vegas 89166: builder prices, recent sales, commute and schools, with buyer's agent Dr. Jan Duffy."
        />
        <meta property="og:title" content="Sierra at Skyeview Homes in Skye Canyon, Las Vegas 89166" />
        <meta
          property="og:description"
          content="Builder prices, recent Skye Canyon sales and buyer representation from Dr. Jan Duffy."
        />
        <meta property="og:image" content="https://www.sierraskyeview.com/9026-rimerton-street-exterior.jpg" />
        <meta property="og:url" content="https://www.sierraskyeview.com/" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://www.sierraskyeview.com/" />
        <link rel="preload" as="image" href="/9026-rimerton-street-exterior.jpg" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      </Head>

      <SiteHeader campaign={CAMPAIGN} />

      <main className="pt-16 bg-white text-stone-800">
        {/* Hero */}
        <section className="relative min-h-[78vh] flex items-end overflow-hidden">
          <Image
            src="/9026-rimerton-street-exterior.jpg"
            alt="Two-story home on a Skye Canyon street in northwest Las Vegas"
            fill
            priority
            sizes="100vw"
            quality={70}
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
          <div className="relative z-10 max-w-6xl mx-auto px-4 pb-16 md:pb-24 text-white w-full">
            <p className="text-xs uppercase tracking-[0.25em] mb-4 text-stone-200">Skye Canyon · Las Vegas · 89166</p>
            <h1 className="lux-h1 max-w-4xl">Sierra at Skyeview homes in Skye Canyon, with buyer&apos;s agent Dr. Jan Duffy</h1>
            <p className="text-lg md:text-xl max-w-2xl text-stone-100 mb-8">
              New two-story homes from $421,990 (Century Communities, read November 20, 2026), 1,602 to 1,965 square
              feet, in a 1,000-acre master plan off U.S. 95. Dr. Jan represents you, not the builder.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <BookButton campaign={CAMPAIGN} medium="hero">Book a buyer consultation</BookButton>
              <a href="#homes-for-sale" className="lux-btn-outline">See homes for sale</a>
            </div>
          </div>
        </section>

        <div id="homes-for-sale">
          <HomesForSaleNearYou campaign={CAMPAIGN} />
        </div>

        {/* Prices */}
        <section className="lux-section bg-stone-50">
          <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-start">
            <div>
              <p className="lux-eyebrow">Prices</p>
              <h2 className="lux-h2">What a Sierra at Skyeview home costs</h2>
              <p className="lux-lead mb-6">
                Sierra is the lowest-priced single-family collection Century builds in Skye Canyon, starting at $421,990.
                Across all of Skye Canyon, new and resale homes closed at a $535,000 median over the 12 months to September 18, 2026.
              </p>
              <ul className="space-y-3 text-stone-700">
                <li><strong className="text-stone-900">Residence 1602:</strong> 1,602 sq ft, 3 bedrooms, 2.5 baths, from $421,990</li>
                <li><strong className="text-stone-900">Residence 1708:</strong> 1,708 sq ft, 3 to 4 bedrooms, 2.5 baths, from $436,990</li>
                <li><strong className="text-stone-900">Residence 1965:</strong> 1,965 sq ft, 3 to 5 bedrooms, 2.5 to 3 baths, from $456,990</li>
              </ul>
              <p className="text-sm text-stone-500 mt-4">
                Source: Century Communities Sierra at Skyeview page, read November 20, 2026. Prices change with lot,
                options and incentives.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link href="/floor-plans" className="lux-btn-outline">Compare floor plans</Link>
                <BookButton campaign={CAMPAIGN} medium="prices">Get a price check from Dr. Jan</BookButton>
              </div>
            </div>
            <div>
              <DrJanTake />
              <p className="text-stone-700 leading-relaxed">
                The other Skyeview collections give you a yardstick: Arroyo townhomes start in the $370s, and Mesa
                (single-story) and Terra start in the $480s, per Century&apos;s Skye Canyon page. Dr. Jan lays the
                builder&apos;s offer next to recent resales on nearby streets so you can see what the lot premium and
                options really cost.
              </p>
            </div>
          </div>
        </section>

        {/* Location */}
        <section className="lux-section bg-white">
          <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-[4/3] rounded-sm overflow-hidden">
              <Image
                src="/skye-canyon-master-plan.jpg"
                alt="Skye Canyon entry monument in northwest Las Vegas"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                quality={65}
                className="object-cover"
              />
            </div>
            <div>
              <p className="lux-eyebrow">Location</p>
              <h2 className="lux-h2">Where Skye Canyon sits, and how long the drives are</h2>
              <p className="lux-lead mb-6">
                Skye Canyon is at U.S. 95 and Skye Canyon Park Drive, near the turn to Mount Charleston. The Strip is about 20 miles south.
              </p>
              <ul className="space-y-3 text-stone-700">
                <li>Caesars Palace: 19.8 miles, 22 to 28 minutes without traffic</li>
                <li>Harry Reid International, Terminal 1: 24.8 miles, 27 to 34 minutes</li>
                <li>Downtown Summerlin: 12.9 miles, 15 to 22 minutes</li>
                <li>Mount Charleston: State Route 157 runs 21.6 miles up Kyle Canyon; Skye Canyon&apos;s site puts it about 30 minutes away</li>
              </ul>
              <p className="text-sm text-stone-500 mt-4">
                Drive times: Nevada Real Estate Group road model, updated November 1, 2026. Route 157 distance: Nevada
                Real Estate Group, updated November 15, 2026.
              </p>
              <div className="mt-8">
                <BookButton campaign={CAMPAIGN} medium="location">Tour Skye Canyon with Dr. Jan</BookButton>
              </div>
            </div>
          </div>
        </section>

        {/* Amenities */}
        <section className="lux-section bg-stone-50">
          <div className="max-w-6xl mx-auto px-4">
            <p className="lux-eyebrow">Daily life</p>
            <h2 className="lux-h2">Parks, the Skye Center and groceries</h2>
            <p className="lux-lead mb-10 max-w-3xl">
              The 15-acre Skye Canyon Park is the center of the community, with the 8,142-square-foot Skye Center and
              the 9,663-square-foot Skye Fitness beside it at 10111 W. Skye Canyon Park Drive.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h3 className="font-serif text-2xl text-stone-900 mb-2">Skye Canyon Park</h3>
                <p className="text-stone-700">
                  Six pickleball courts, a roller hockey rink, two dog parks, a splash pad and a half-mile walking path,
                  open 6 a.m. to 9 p.m.
                </p>
              </div>
              <div>
                <h3 className="font-serif text-2xl text-stone-900 mb-2">Seven parks in all</h3>
                <p className="text-stone-700">
                  Skye Canyon Park, Eagle Canyon, Skye View, Big Skye, Starlight, Liberty Skye and Knight Skye.
                </p>
              </div>
              <div>
                <h3 className="font-serif text-2xl text-stone-900 mb-2">Skye Canyon Marketplace</h3>
                <p className="text-stone-700">
                  A 124,000-square-foot Smith&apos;s Marketplace anchors 250,000 square feet of shops at Skye Canyon Park
                  Drive and Grand Canyon Drive.
                </p>
              </div>
            </div>
            <p className="text-sm text-stone-500 mt-6">Source: skyecanyon.com facts and parks pages, read November 20, 2026.</p>
            <div className="mt-8">
              <Link href="/community" className="lux-btn-outline">Read the Skye Canyon guide</Link>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="lux-section bg-white">
          <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12">
            <div>
              <p className="lux-eyebrow">Buying</p>
              <h2 className="lux-h2">What Dr. Jan does for Sierra at Skyeview buyers</h2>
              <p className="lux-lead">
                Dr. Jan represents the buyer through the whole new-home purchase, from the first sales-office visit to the
                final walk-through.
              </p>
            </div>
            <ul className="space-y-5 text-stone-700">
              <li><strong className="text-stone-900">Price check.</strong> Builder price against recent 89166 resales of similar size.</li>
              <li><strong className="text-stone-900">Lot review.</strong> Lot premium, orientation, and whether the parcel sits in SID 609 or 610.</li>
              <li><strong className="text-stone-900">Incentives.</strong> Which builder incentive fits your loan, and what it costs you in price.</li>
              <li><strong className="text-stone-900">Walk-throughs.</strong> Construction and final walk-throughs with you, and the punch list.</li>
              <li className="pt-2">
                <BookButton campaign={CAMPAIGN} medium="services">Book a buyer consultation</BookButton>
              </li>
            </ul>
          </div>
        </section>

        {/* Selling */}
        <section className="lux-section bg-stone-50">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <p className="lux-eyebrow">Selling to buy</p>
            <h2 className="lux-h2">Selling a home to buy at Sierra?</h2>
            <p className="lux-lead mb-8">
              Plan the sale and the new-home contract together, so the closing dates line up. Dr. Jan prices your home
              against recent sales and times the listing with the builder&apos;s completion date.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <BookButton campaign={CAMPAIGN} medium="sell" event="seller">Book a listing consultation</BookButton>
              <Link href="/sell-your-home-to-buy-at-sierra-skyeview" className="lux-btn-outline">How sell-to-buy works</Link>
            </div>
          </div>
        </section>

        <AreaFacts campaign={CAMPAIGN} />

        <QABlock items={QA_ITEMS} campaign={CAMPAIGN} />

        <MeetDrJan campaign={CAMPAIGN} />

        <div className="max-w-6xl mx-auto px-4 py-6">
          <FactsFootnote />
        </div>
      </main>

      <SiteFooter />
    </>
  );
};

export default Home;
