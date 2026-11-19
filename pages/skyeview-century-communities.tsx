import type { NextPage } from "next";
import Link from "next/link";
import SeoLandingLayout from "../components/seo/SeoLandingLayout";
import { COMMUNITY_FACTS, PLAN_FACTS } from "../lib/hyperlocalContent";
import {
  formatUsd,
  SIERRA_PRICING_AS_OF,
  SIERRA_PRICING_SOURCE,
} from "../lib/sierraPricing";

const faqs = [
  {
    question: "Which Century Communities collections are in Skye Canyon?",
    answer: COMMUNITY_FACTS.siblingCollections,
  },
  {
    question: "What is Sierra at Skyeview specifically?",
    answer: `Sierra is the two-story Skyeview collection with plans from 1,602–1,965 sq ft. Base pricing is published as of ${SIERRA_PRICING_AS_OF} on the Century Communities Sierra page; always confirm live numbers before writing an offer.`,
  },
  {
    question: "Where can I see official builder pricing?",
    answer: `Use the Century Communities Sierra page (${SIERRA_PRICING_SOURCE}) and have Dr. Jan Duffy cross-check incentives and lot premiums independently.`,
  },
  {
    question: "Do Sierra homes share driveways?",
    answer: COMMUNITY_FACTS.sharedDriveNote,
  },
];

const SkyeviewCentury: NextPage = () => (
  <SeoLandingLayout
    title="Century Communities Skyeview | Sierra at Skyeview Skye Canyon"
    description="Century Communities Skyeview collections in Skye Canyon with a deep dive on Sierra at Skyeview plans, shared-drive lots, and independent buyer representation."
    path="/skyeview-century-communities"
    h1="Century Communities Skyeview: Sierra and sister collections"
    answerFirst={`Century Communities builds multiple Skyeview collections in Skye Canyon. Sierra is the two-story 1,602–1,965 sq ft lineup at ${COMMUNITY_FACTS.salesAddress}—shop it with a buyer’s agent, not only the builder desk.`}
    breadcrumbs={[
      { name: "Home", path: "/" },
      { name: "New Build Homes", path: "/new-build-homes" },
      { name: "Century Communities Skyeview", path: "/skyeview-century-communities" },
    ]}
    faqs={faqs}
    hyperlocalVariant="new-build"
  >
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Sierra plan snapshot</h2>
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {PLAN_FACTS.plans.map((plan) => {
            const slug =
              plan.name === "Residence 1602"
                ? "/model-1602"
                : plan.name === "Residence 1708"
                  ? "/model-1708"
                  : "/model-1965";
            return (
              <div key={plan.name} className="border border-slate-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-700 mb-4">
                  {plan.sqft} sq ft · {plan.beds} beds · {plan.baths} baths
                </p>
                <p className="font-semibold text-blue-800 mb-4">From {formatUsd(plan.fromUsd)}</p>
                <Link href={slug} className="text-blue-700 font-medium underline">
                  View plan details →
                </Link>
              </div>
            );
          })}
        </div>
        <p className="text-gray-700 mb-4">{PLAN_FACTS.qmiStreetsNote}</p>
        <p className="text-gray-700">
          Official builder page:{" "}
          <a
            href={SIERRA_PRICING_SOURCE}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 underline"
          >
            Century Communities — Sierra at Skyeview
          </a>
          . Then get independent review via{" "}
          <Link href="/buyers-agent-skye-canyon" className="text-blue-700 underline">
            buyer representation
          </Link>
          .
        </p>
      </div>
    </section>
  </SeoLandingLayout>
);

export default SkyeviewCentury;
