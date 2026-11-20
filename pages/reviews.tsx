import type { NextPage } from "next";
import Head from "next/head";
import {
  BookButton,
  HomesForSaleNearYou,
  MeetDrJan,
  QABlock,
  type QA,
} from "../components/standard";
import { SiteFooter, SiteHeader } from "../components/standard/SiteChrome";

const CAMPAIGN = "reviews";

const PROFILES = [
  {
    name: "Realtor.com",
    href: "https://www.realtor.com/realestateagents/63340593275bf055fedf5ff1",
    note: "Ratings, reviews and testimonials posted by clients on Realtor.com.",
  },
  {
    name: "Zillow",
    href: "https://www.zillow.com/profile/DrJanDuffy",
    note: "Team reviews and recent sales on Zillow.",
  },
];

const QA_ITEMS: QA[] = [
  {
    q: "Where can I read reviews of Dr. Jan Duffy?",
    a: "Clients post reviews of Dr. Jan on Realtor.com and Zillow. Both sites are linked on this page, so you read the reviews where they were written.",
  },
  {
    q: "What should I ask a buyer's agent before touring Sierra at Skyeview?",
    a: "Ask how they will compare the builder's price with recent Skye Canyon resales, whether they will review the lot's special improvement district charges, and whether they will attend the walk-throughs with you.",
  },
  {
    q: "Does the builder's sales team represent me?",
    a: "No. The builder's sales team works for the builder. A buyer's agent works for you. Ask the builder about its agent-registration rule before your first visit.",
  },
  {
    q: "How do I book time with Dr. Jan?",
    a: "Use the booking buttons on this page to pick a time, or call (702) 903-4687.",
  },
];

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.sierraskyeview.com/" },
    { "@type": "ListItem", position: 2, name: "Reviews", item: "https://www.sierraskyeview.com/reviews" },
  ],
};

const Reviews: NextPage = () => (
  <>
    <Head>
      <title>Reviews of Dr. Jan Duffy | Sierra at Skyeview Buyer&apos;s Agent</title>
      <meta
        name="description"
        content="Read client reviews of Dr. Jan Duffy on Realtor.com and Zillow, then book a buyer consultation for Sierra at Skyeview in Skye Canyon, Las Vegas 89166."
      />
      <link rel="canonical" href="https://www.sierraskyeview.com/reviews" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
    </Head>

    <SiteHeader campaign={CAMPAIGN} />

    <main className="pt-16 bg-white text-stone-800">
      <section className="lux-section bg-stone-50">
        <div className="max-w-4xl mx-auto px-4">
          <p className="lux-eyebrow">Reviews</p>
          <h1 className="lux-h1 text-stone-900">Reviews of Dr. Jan Duffy, buyer&apos;s agent for Sierra at Skyeview</h1>
          <p className="lux-lead mb-8">
            Read what clients wrote about Dr. Jan on the sites where they posted it. Then book a time to talk about
            buying at Sierra at Skyeview or anywhere in Skye Canyon.
          </p>
          <BookButton campaign={CAMPAIGN} medium="hero">Book a buyer consultation</BookButton>
        </div>
      </section>

      <HomesForSaleNearYou campaign={CAMPAIGN} />

      <section className="lux-section bg-stone-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="lux-h2">Where to read client reviews</h2>
          <p className="lux-lead mb-8">Two public profiles carry reviews from Dr. Jan&apos;s clients.</p>
          <div className="grid md:grid-cols-2 gap-6">
            {PROFILES.map((p) => (
              <a
                key={p.name}
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-white border border-stone-200 p-6 hover:border-stone-400"
              >
                <p className="font-serif text-2xl text-stone-900 mb-2">{p.name}</p>
                <p className="text-stone-600">{p.note}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <QABlock items={QA_ITEMS} campaign={CAMPAIGN} />

      <MeetDrJan campaign={CAMPAIGN} />
    </main>

    <SiteFooter />
  </>
);

export default Reviews;
