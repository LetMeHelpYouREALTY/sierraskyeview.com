import Script from "next/script";
import Image from "next/image";
import Link from "next/link";
import {
  AREA_FACTS,
  DR_JAN_TAKE_LINES,
  FACTS_RETRIEVED,
  PHONE_DISPLAY,
  PHONE_TEL,
  REALSCOUT_SEARCH_URL,
  calendlyUrl,
} from "../../lib/areaFacts";

/** A Calendly booking link styled as the site's one accent button. */
export function BookButton({
  campaign,
  medium = "button",
  event = "buyer",
  children = "Book a time with Dr. Jan",
  variant = "solid",
}: {
  campaign: string;
  medium?: string;
  event?: "buyer" | "seller";
  children?: React.ReactNode;
  variant?: "solid" | "outline";
}) {
  return (
    <a
      href={calendlyUrl(event, medium, campaign)}
      target="_blank"
      rel="noopener noreferrer"
      className={variant === "solid" ? "lux-btn" : "lux-btn-outline"}
    >
      {children}
    </a>
  );
}

/** Live listings, placed right below each page's hero. */
export function HomesForSaleNearYou({ campaign }: { campaign: string }) {
  return (
    <section className="lux-section bg-white" aria-labelledby={`listings-${campaign}`}>
      <Script
        id="realscout-web-components"
        src="https://em.realscout.com/widgets/realscout-web-components.umd.js"
        type="module"
        strategy="afterInteractive"
      />
      <div className="max-w-6xl mx-auto px-4">
        <h2 id={`listings-${campaign}`} className="lux-h2 text-center">
          Homes for sale near you
        </h2>
        <p className="lux-lead text-center max-w-2xl mx-auto mb-8">
          Single-family homes for sale through Dr. Jan&apos;s office, newest first. For every home for sale in
          Skye Canyon and ZIP 89166, open the full search.
        </p>
        <div
          className="min-h-[280px]"
          dangerouslySetInnerHTML={{
            __html:
              '<realscout-office-listings agent-encoded-id="QWdlbnQtMjI1MDUw" sort-order="NEWEST" listing-status="For Sale" property-types=",SFR" price-min="350000" price-max="800000"></realscout-office-listings>',
          }}
        />
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <a href={REALSCOUT_SEARCH_URL} target="_blank" rel="noopener noreferrer" className="lux-btn-outline">
            See every Skye Canyon home for sale
          </a>
          <BookButton campaign={campaign} medium="after-listings">
            Book a tour with Dr. Jan
          </BookButton>
        </div>
        <p className="mt-6 text-xs text-stone-500 text-center">
          Listing data from the Las Vegas REALTORS MLS, deemed reliable but not guaranteed.
        </p>
      </div>
    </section>
  );
}

/** Dr. Jan's own approved words. Never add a line here without an [DR-JAN-TAKE APPROVED] record. */
export function DrJanTake() {
  if (DR_JAN_TAKE_LINES.length === 0) return null;
  return (
    <aside className="lux-take" aria-label="Dr. Jan's take">
      <div className="flex items-center gap-3 mb-3">
        <Image
          src="/dr-jan-duffy-headshot.jpg"
          alt="Dr. Jan Duffy"
          width={48}
          height={48}
          className="rounded-full"
        />
        <p className="lux-eyebrow !mb-0">Dr. Jan&apos;s take</p>
      </div>
      {DR_JAN_TAKE_LINES.map((line) => (
        <p key={line} className="font-serif text-xl text-stone-800 leading-snug mb-2">
          &ldquo;{line}&rdquo;
        </p>
      ))}
    </aside>
  );
}

/** Dated, sourced local facts. */
export function AreaFacts({ ids, heading = "Skye Canyon by the numbers", campaign }: { ids?: string[]; heading?: string; campaign: string }) {
  const facts = ids ? AREA_FACTS.filter((f) => ids.includes(f.id)) : AREA_FACTS;
  return (
    <section className="lux-section bg-stone-50" aria-labelledby={`facts-${campaign}`}>
      <div className="max-w-6xl mx-auto px-4">
        <h2 id={`facts-${campaign}`} className="lux-h2">{heading}</h2>
        <p className="lux-lead mb-10 max-w-3xl">
          Skye Canyon is a 1,000-acre master plan in ZIP 89166 at the northwest edge of Las Vegas, off U.S. 95. These
          are the figures buyers ask about most, each with its source and date.
        </p>
        <dl className="grid md:grid-cols-2 gap-x-10 gap-y-8">
          {facts.map((f) => (
            <div key={f.id} className="border-t border-stone-200 pt-5">
              <dt className="lux-eyebrow">{f.label}</dt>
              <dd className="text-stone-800 leading-relaxed">
                {f.text}{" "}
                <span className="block mt-2 text-sm text-stone-500">
                  Source:{" "}
                  <a href={f.url} target="_blank" rel="noopener noreferrer" className="underline hover:text-stone-800">
                    {f.source}
                  </a>
                  , {f.asOf}.
                </span>
              </dd>
            </div>
          ))}
        </dl>
        <div className="mt-10">
          <BookButton campaign={campaign} medium="facts">Talk through these numbers with Dr. Jan</BookButton>
        </div>
      </div>
    </section>
  );
}

export type QA = { q: string; a: string };

/** Visible Q&A plus matching FAQPage markup (same text, word for word). */
export function QABlock({ items, campaign, heading = "Questions buyers ask" }: { items: QA[]; campaign: string; heading?: string }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((i) => ({
      "@type": "Question",
      name: i.q,
      acceptedAnswer: { "@type": "Answer", text: i.a },
    })),
  };
  return (
    <section className="lux-section bg-white" aria-labelledby={`qa-${campaign}`}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <div className="max-w-4xl mx-auto px-4">
        <h2 id={`qa-${campaign}`} className="lux-h2">{heading}</h2>
        <div className="divide-y divide-stone-200 mt-8">
          {items.map((i) => (
            <div key={i.q} className="py-6">
              <h3 className="font-serif text-2xl text-stone-900 mb-2">{i.q}</h3>
              <p className="text-stone-700 leading-relaxed">{i.a}</p>
            </div>
          ))}
        </div>
        <div className="mt-8">
          <BookButton campaign={campaign} medium="qa">Ask Dr. Jan your question</BookButton>
        </div>
      </div>
    </section>
  );
}

/** About/contact strip with the headshot. */
export function MeetDrJan({ campaign }: { campaign: string }) {
  return (
    <section className="lux-section bg-stone-50" aria-labelledby={`meet-${campaign}`}>
      <div className="max-w-5xl mx-auto px-4 grid md:grid-cols-[180px_1fr] gap-8 items-center">
        <Image
          src="/dr-jan-duffy-headshot.jpg"
          alt="Dr. Jan Duffy, buyer's agent for Sierra at Skyeview"
          width={180}
          height={180}
          className="rounded-full mx-auto"
        />
        <div>
          <h2 id={`meet-${campaign}`} className="lux-h2">Work with Dr. Jan in Skye Canyon</h2>
          <p className="lux-lead mb-6">
            Dr. Jan Duffy represents buyers, not the builder, at Sierra at Skyeview and across ZIP 89166. She compares the
            builder&apos;s price with nearby resales, checks the lot for special improvement district charges, and walks
            the home with you before closing. Call {PHONE_DISPLAY} or book a time below.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <BookButton campaign={campaign} medium="meet">Book a buyer consultation</BookButton>
            <a href={`tel:${PHONE_TEL}`} className="lux-btn-outline">Call {PHONE_DISPLAY}</a>
          </div>
        </div>
      </div>
    </section>
  );
}

/** Small logo mark with the headshot beside the site name. */
export function LogoMark() {
  return (
    <Link href="/" className="flex items-center gap-3">
      <Image src="/headshot-32.png" alt="Dr. Jan Duffy" width={32} height={32} className="rounded-full" />
      <span className="font-serif text-lg text-stone-900">Sierra at Skyeview Homes</span>
    </Link>
  );
}

export function FactsFootnote() {
  return (
    <p className="text-xs text-stone-500">
      Figures on this page were retrieved {FACTS_RETRIEVED} from the sources named with them and can change.
    </p>
  );
}
