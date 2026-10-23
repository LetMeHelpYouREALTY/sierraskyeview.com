import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { PAGE_AGENT_REFERENCE, SITE_URL } from "../lib/schemaIds";
const LISTING_CONSULTATION_BASE =
  "https://calendly.com/drjanduffy/listing-consultation?utm_source=sierraskyeview.com&utm_medium=website&utm_content=";

const calendly = (placement: string) => `${LISTING_CONSULTATION_BASE}${placement}`;

const SellToBuySierra: NextPage = () => {
  return (
    <>
      <Head>
        <title>Sell Your Home to Buy at Sierra at Skyeview | Dr. Jan Duffy</title>
        <meta
          name="description"
          content="Coordinate your resale timeline with a new Century Communities home at Sierra at Skyeview in Skye Canyon (89166). Listing strategy from buyer's agent Dr. Jan Duffy."
        />
        <link
          rel="canonical"
          href={`${SITE_URL}/sell-your-home-to-buy-at-sierra-skyeview`}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(PAGE_AGENT_REFERENCE) }}
        />
      </Head>

      <nav className="bg-white shadow-lg fixed w-full top-0 z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <a href="tel:7029034687" className="text-2xl font-bold text-blue-600">
              (702) 903-4687
            </a>
            <div className="hidden md:flex space-x-6 text-sm">
              <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium">
                Home
              </Link>
              <Link
                href="/sell-your-home-to-buy-at-sierra-skyeview"
                className="text-blue-600 font-semibold"
              >
                Sell &amp; Buy
              </Link>
              <Link href="/floor-plans" className="text-gray-700 hover:text-blue-600 font-medium">
                Available Homes
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-blue-600 font-medium">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <main className="pt-24 pb-16 bg-gray-50">
        <article className="max-w-3xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Sell your current home to buy at Sierra at Skyeview
          </h1>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            When does your resale need to close so you can reserve a new two-story home at Sierra at
            Skyeview? Dr. Jan Duffy maps that date backward—listing prep, pricing, showings, and
            contract milestones—so your Century Communities purchase at 8925 Vanhoy Creek St., Las
            Vegas, NV 89166 stays on track inside Skye Canyon.
          </p>
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            Sierra at Skyeview offers three single-family floor plans (1,602, 1,708, and 1,965 square
            feet) with quick move-in options when inventory allows. Dr. Jan Duffy represents you as
            buyer&apos;s agent on the new-home side and coordinates listing strategy with your resale
            team so both transactions align.
          </p>

          <div className="bg-white rounded-xl shadow-md p-6 mb-10 border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              What Dr. Jan Duffy coordinates
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Resale pricing and net sheet review before you write a Sierra at Skyeview offer</li>
              <li>Contingency and closing-date language that matches builder timelines</li>
              <li>Communication between listing agent, lender, and Century Communities sales</li>
              <li>Buy-side negotiation and walkthrough support at Sierra at Skyeview</li>
            </ul>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <a
              href={calendly("seller-hero-cta")}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold text-center min-h-[44px] flex items-center justify-center"
            >
              Book a listing consultation with Dr. Jan Duffy
            </a>
            <a
              href="tel:7029034687"
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-lg font-semibold text-center min-h-[44px] flex items-center justify-center"
            >
              Call (702) 903-4687
            </a>
          </div>

          <p className="text-sm text-gray-500">
            Builder sales office for Sierra at Skyeview: Century Communities at 8925 Vanhoy Creek St.,
            Las Vegas, NV 89166. Dr. Jan Duffy is an independent buyer&apos;s agent, not employed by
            the builder.
          </p>
        </article>
      </main>

      <footer className="bg-gray-900 text-white py-10">
        <div className="max-w-7xl mx-auto px-4 text-center md:text-left">
          <div className="flex flex-col md:flex-row md:justify-between gap-6">
            <div>
              <p className="font-semibold">Sierra at Skyeview Homes — Dr. Jan Duffy</p>
              <p className="text-gray-300 mt-2">(702) 903-4687 · DrDuffy@SierraSkyeview.com</p>
            </div>
            <div className="space-y-2">
              <Link href="/" className="text-gray-300 hover:text-white block">
                Home
              </Link>
              <a href={calendly("seller-footer-cta")} className="text-gray-300 hover:text-white block">
                Listing consultation (Calendly)
              </a>
            </div>
          </div>
          <p className="text-gray-500 text-sm mt-8 text-center">
            &copy; 2025 Sierra Skyeview | Homes by Dr. Jan Duffy.<br />Berkshire Hathaway HomeServices Nevada Properties since September 2008 · License S.0197614.LLC
          </p>
        </div>
      </footer>
    </>
  );
};

export default SellToBuySierra;
