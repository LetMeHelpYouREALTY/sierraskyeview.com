import Head from "next/head";
import Link from "next/link";
import type { ReactNode } from "react";
import HyperlocalServiceSection from "../HyperlocalServiceSection";
import type { HyperlocalPageVariant } from "../../lib/hyperlocalContent";
import type { FaqItem } from "../../lib/schemaBuilders";
import {
  buildBreadcrumbSchema,
  buildFaqPageSchema,
  buildLocalBusinessSchema,
  buildSierraPlaceSchema,
  buildWebPageSchema,
} from "../../lib/schemaBuilders";
import { PAGE_AGENT_REFERENCE } from "../../lib/schemaIds";
import { SITE_CONTACT } from "../../lib/siteContact";
import FaqSection from "./FaqSection";
import JsonLd from "./JsonLd";
import NapBlock from "./NapBlock";

type SeoLandingLayoutProps = {
  title: string;
  description: string;
  path: string;
  h1: string;
  answerFirst: string;
  breadcrumbs: { name: string; path: string }[];
  faqs: FaqItem[];
  hyperlocalVariant?: HyperlocalPageVariant;
  extraSchemas?: Record<string, unknown>[];
  children: ReactNode;
};

export default function SeoLandingLayout({
  title,
  description,
  path,
  h1,
  answerFirst,
  breadcrumbs,
  faqs,
  hyperlocalVariant = "northwest",
  extraSchemas = [],
  children,
}: SeoLandingLayoutProps) {
  const canonical = `${SITE_CONTACT.siteUrl}${path}`;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={canonical} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={canonical} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={`${SITE_CONTACT.siteUrl}/9026-rimerton-street-exterior.jpg`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
      </Head>

      <JsonLd
        data={[
          buildBreadcrumbSchema(breadcrumbs),
          buildFaqPageSchema(faqs),
          buildWebPageSchema({ path, name: h1, description }),
          buildSierraPlaceSchema(),
          buildLocalBusinessSchema(),
          PAGE_AGENT_REFERENCE,
          ...extraSchemas,
        ]}
      />

      <nav className="bg-white shadow-lg fixed w-full top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center py-4">
          <a href={`tel:${SITE_CONTACT.phoneTel}`} className="text-2xl font-bold text-blue-600">
            {SITE_CONTACT.phoneDisplay}
          </a>
          <div className="hidden lg:flex space-x-6 text-sm">
            <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium">Home</Link>
            <Link href="/floor-plans" className="text-gray-700 hover:text-blue-600 font-medium">Homes</Link>
            <Link href="/community" className="text-gray-700 hover:text-blue-600 font-medium">Community</Link>
            <Link href="/services" className="text-gray-700 hover:text-blue-600 font-medium">Services</Link>
            <Link href="/89166-homes" className="text-gray-700 hover:text-blue-600 font-medium">89166</Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-600 font-medium">Contact</Link>
          </div>
        </div>
      </nav>

      <main className="pt-20">
        <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
          <div className="max-w-7xl mx-auto px-4">
            <h1 id="page-h1" className="text-4xl md:text-5xl font-bold mb-6 max-w-4xl">
              {h1}
            </h1>
            <p id="answer-first" className="text-lg md:text-xl max-w-3xl text-blue-50">
              {answerFirst}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={`tel:${SITE_CONTACT.phoneTel}`}
                className="inline-flex min-h-[44px] items-center rounded-lg bg-white px-6 py-3 font-semibold text-blue-800 hover:bg-blue-50"
              >
                Call {SITE_CONTACT.phoneDisplay}
              </a>
              <Link
                href="/contact"
                className="inline-flex min-h-[44px] items-center rounded-lg border-2 border-white px-6 py-3 font-semibold text-white hover:bg-white/10"
              >
                Talk with Dr. Jan Duffy
              </Link>
            </div>
          </div>
        </section>

        {children}

        <section className="py-16 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-8 items-start">
            <NapBlock />
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Explore Sierra at Skyeview</h2>
              <ul className="space-y-3 text-blue-800">
                <li><Link className="hover:underline font-medium" href="/floor-plans">Floor plans &amp; availability</Link></li>
                <li><Link className="hover:underline font-medium" href="/quick-move-in">Quick move-in homes</Link></li>
                <li><Link className="hover:underline font-medium" href="/community">Skye Canyon community guide</Link></li>
                <li><Link className="hover:underline font-medium" href="/services">Buyer representation services</Link></li>
                <li><Link className="hover:underline font-medium" href="/how-to-buy-sierra-skyeview">How to buy at Sierra at Skyeview</Link></li>
              </ul>
            </div>
          </div>
        </section>

        <FaqSection faqs={faqs} />
        <HyperlocalServiceSection variant={hyperlocalVariant} />

        <section className="py-16 bg-red-600 text-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to tour Sierra at Skyeview?</h2>
            <p className="text-lg mb-6">
              Independent buyer representation for Century Communities homes in Skye Canyon, ZIP 89166.
            </p>
            <a
              href={`tel:${SITE_CONTACT.phoneTel}`}
              className="inline-flex min-h-[44px] items-center rounded-lg bg-white px-8 py-3 font-semibold text-red-700 hover:bg-red-50"
            >
              Call {SITE_CONTACT.phoneDisplay}
            </a>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-gray-400 py-8 text-center text-sm">
        <p>{SITE_CONTACT.brokerage} since September 2008 · License {SITE_CONTACT.license}</p>
        <p className="mt-2">{SITE_CONTACT.fullAddress} · {SITE_CONTACT.phoneDisplay}</p>
      </footer>
    </>
  );
}
