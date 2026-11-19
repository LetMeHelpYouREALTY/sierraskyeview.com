import type { NextPage } from "next";
import Link from "next/link";
import SeoLandingLayout from "../components/seo/SeoLandingLayout";
import { buildServiceSchema } from "../lib/schemaBuilders";

const faqs = [
  {
    question: "What does a buyer’s agent do on Sierra at Skyeview new construction?",
    answer:
      "Dr. Jan Duffy reviews Century Communities pricing and incentives, compares lots, coaches design-center spend, coordinates inspections/walkthroughs, and negotiates terms that protect the buyer—not the builder.",
  },
  {
    question: "Does hiring a buyer’s agent cost more at Sierra at Skyeview?",
    answer:
      "Typically no. Builder commissions are usually built into the price. Independent representation often improves net terms through incentives, credits, and clearer contract language.",
  },
  {
    question: "When should I call a Skye Canyon buyer’s agent?",
    answer:
      "Before your first builder appointment. Early representation preserves leverage on lot holds, QMI stickers, and addenda that are harder to unwind later.",
  },
  {
    question: "Can Dr. Jan help if I am selling another home to buy in Skye Canyon?",
    answer:
      "Yes. See the sell-to-buy guide for timing strategies that align a resale with Sierra inventory and Century releases.",
  },
];

const BuyersAgentSkyeCanyon: NextPage = () => (
  <SeoLandingLayout
    title="Buyer’s Agent Skye Canyon | Sierra at Skyeview New Construction"
    description="Independent buyer’s agent for Sierra at Skyeview in Skye Canyon. Dr. Jan Duffy negotiates Century Communities terms, lots, and walkthroughs for ZIP 89166 buyers."
    path="/buyers-agent-skye-canyon"
    h1="Buyer’s agent for Sierra at Skyeview in Skye Canyon"
    answerFirst="Dr. Jan Duffy is an independent buyer’s agent for Century Communities’ Sierra at Skyeview collection in Skye Canyon (89166). She represents your interests exclusively—lot choice, incentives, upgrades, and closing milestones."
    breadcrumbs={[
      { name: "Home", path: "/" },
      { name: "Services", path: "/services" },
      { name: "Buyer’s Agent Skye Canyon", path: "/buyers-agent-skye-canyon" },
    ]}
    faqs={faqs}
    hyperlocalVariant="services"
    extraSchemas={[
      buildServiceSchema({
        name: "Buyer representation for Sierra at Skyeview",
        description:
          "Independent new-construction buyer representation in Skye Canyon, Las Vegas NV 89166.",
        path: "/buyers-agent-skye-canyon",
      }),
    ]}
  >
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">What you get</h2>
          <ul className="space-y-3 text-gray-700 list-disc pl-5">
            <li>Live Sierra inventory and QMI comparison</li>
            <li>Incentive and rate-special review against comps</li>
            <li>Homesite orientation and premium tradeoff coaching</li>
            <li>Design-center ROI guidance for 89166 resale reality</li>
            <li>Walkthrough and punch-list advocacy through closing</li>
          </ul>
        </div>
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Related resources</h2>
          <ul className="space-y-3">
            <li>
              <Link href="/services" className="text-blue-700 underline font-medium">
                Full services overview
              </Link>
            </li>
            <li>
              <Link href="/how-to-buy-sierra-skyeview" className="text-blue-700 underline font-medium">
                How to buy step-by-step
              </Link>
            </li>
            <li>
              <Link href="/sell-your-home-to-buy-at-sierra-skyeview" className="text-blue-700 underline font-medium">
                Sell your home to buy Sierra
              </Link>
            </li>
            <li>
              <Link href="/qa" className="text-blue-700 underline font-medium">
                Buyer Q&amp;A
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  </SeoLandingLayout>
);

export default BuyersAgentSkyeCanyon;
