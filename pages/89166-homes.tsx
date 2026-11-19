import type { NextPage } from "next";
import Link from "next/link";
import SeoLandingLayout from "../components/seo/SeoLandingLayout";
import {
  COMMUNITY_FACTS,
  MARKET_FACTS,
  PLAN_FACTS,
} from "../lib/hyperlocalContent";
import {
  formatUsd,
  SIERRA_PLAN_1602_FROM_USD,
  SIERRA_PRICING_AS_OF,
} from "../lib/sierraPricing";

const faqs = [
  {
    question: "What new construction is available in ZIP 89166?",
    answer: `Sierra at Skyeview by Century Communities sits in ZIP ${COMMUNITY_FACTS.zip} inside Skye Canyon. Three two-story plans (1,602–1,965 sq ft) publish from ${formatUsd(SIERRA_PLAN_1602_FROM_USD)} as of ${SIERRA_PRICING_AS_OF}; confirm live builder pricing before offering.`,
  },
  {
    question: "How does 89166 market pricing compare to Skye Canyon plats?",
    answer: `Recent MLS samples show a Skye Canyon plat median around ${MARKET_FACTS.skyeCanyonMedianSale} vs about ${MARKET_FACTS.zip89166MedianSale} for ZIP 89166 overall (${MARKET_FACTS.asOfLabel}). New homes were roughly ${MARKET_FACTS.newHomeShareOfClosings} of Skye Canyon closings in that window.`,
  },
  {
    question: "Where is the Sierra at Skyeview sales address in 89166?",
    answer: `The Sierra sales area is at ${COMMUNITY_FACTS.salesAddress}. Skye Canyon’s amenity hub is at ${COMMUNITY_FACTS.masterPlanAddress}.`,
  },
  {
    question: "Should I use a buyer’s agent for 89166 new construction?",
    answer:
      "Yes. Builder desks represent the seller. Dr. Jan Duffy provides independent buyer representation for Sierra at Skyeview—lot strategy, incentives, upgrades, and walkthrough advocacy—without increasing the typical buyer commission structure on new construction.",
  },
];

const Zip89166Homes: NextPage = () => (
  <SeoLandingLayout
    title="89166 Homes for Sale | Sierra at Skyeview Skye Canyon Las Vegas"
    description="ZIP 89166 new construction at Sierra at Skyeview in Skye Canyon: plans, market context, and buyer representation from Dr. Jan Duffy."
    path="/89166-homes"
    h1="89166 homes: Sierra at Skyeview in Skye Canyon"
    answerFirst={`ZIP ${COMMUNITY_FACTS.zip} covers Skye Canyon and nearby Northwest Las Vegas. Sierra at Skyeview is Century Communities’ two-story Skyeview collection here—${COMMUNITY_FACTS.highwayAccess}—with buyer representation from Dr. Jan Duffy.`}
    breadcrumbs={[
      { name: "Home", path: "/" },
      { name: "89166 Homes", path: "/89166-homes" },
    ]}
    faqs={faqs}
    hyperlocalVariant="northwest"
  >
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 prose prose-lg max-w-none">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Why 89166 buyers look at Sierra first</h2>
        <p className="text-gray-700 mb-6">
          Sierra sits inside a {COMMUNITY_FACTS.acreageLabel} with {COMMUNITY_FACTS.elevationLabel} living and {COMMUNITY_FACTS.mountCharlestonDrive} to Mount Charleston recreation. Plans share a drive with a neighboring home for lower-maintenance lots—see {PLAN_FACTS.qmiStreetsNote}
        </p>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Floor plans in this ZIP</h2>
        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
          {PLAN_FACTS.plans.map((plan) => {
            const slug =
              plan.name === "Residence 1602"
                ? "/model-1602"
                : plan.name === "Residence 1708"
                  ? "/model-1708"
                  : "/model-1965";
            return (
              <li key={plan.name}>
                <Link href={slug} className="text-blue-700 underline">
                  {plan.name}
                </Link>
                : {plan.sqft} sq ft · {plan.beds} beds · from {formatUsd(plan.fromUsd)}
              </li>
            );
          })}
        </ul>
        <p className="text-gray-700">
          Compare inventory on <Link href="/floor-plans" className="text-blue-700 underline">floor plans</Link>,{" "}
          <Link href="/quick-move-in" className="text-blue-700 underline">quick move-in</Link>, and{" "}
          <Link href="/northwest-las-vegas-new-homes" className="text-blue-700 underline">Northwest Las Vegas new homes</Link>.
        </p>
      </div>
    </section>
  </SeoLandingLayout>
);

export default Zip89166Homes;
