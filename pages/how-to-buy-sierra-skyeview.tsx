import type { NextPage } from "next";
import Link from "next/link";
import SeoLandingLayout from "../components/seo/SeoLandingLayout";
import { buildHowToSchema } from "../lib/schemaBuilders";
import { COMMUNITY_FACTS } from "../lib/hyperlocalContent";

const steps = [
  {
    name: "Hire independent buyer representation",
    text: "Contact Dr. Jan Duffy before the builder appointment so negotiations start with your interests represented.",
  },
  {
    name: "Tour Sierra plans and lots",
    text: "Compare Residence 1602, 1708, and 1965 against available Barcroft and Damson homesites or to-be-built options.",
  },
  {
    name: "Verify total monthly cost",
    text: "Model price, association dues, and any SID/assessment on the specific parcel—not just the sticker price.",
  },
  {
    name: "Negotiate incentives and contract terms",
    text: "Review Century Communities credits, rate specials, options packages, and addenda with your buyer’s agent.",
  },
  {
    name: "Design center and construction milestones",
    text: "Choose upgrades with resale context, then track inspections and walkthroughs through closing.",
  },
];

const faqs = [
  {
    question: "How long does it take to buy a Sierra at Skyeview home?",
    answer:
      "Quick move-in homes can close on a compressed timeline once financing and walkthroughs clear. To-be-built homes follow the builder’s construction schedule—confirm current phase timing with Dr. Jan before you reserve.",
  },
  {
    question: "What should I bring to the first Sierra tour?",
    answer:
      "Pre-approval letter, must-have list (beds, office, yard use), and questions about dues and district charges. Your buyer’s agent prepares a lot shortlist so the onsite visit stays efficient.",
  },
  {
    question: "Where is Sierra at Skyeview located?",
    answer: `${COMMUNITY_FACTS.salesAddress}, inside Skye Canyon near ${COMMUNITY_FACTS.highwayAccess}.`,
  },
];

const HowToBuy: NextPage = () => (
  <SeoLandingLayout
    title="How to Buy Sierra at Skyeview | Skye Canyon New Construction Steps"
    description="Step-by-step guide to buying a Century Communities home at Sierra at Skyeview in Skye Canyon with independent buyer representation from Dr. Jan Duffy."
    path="/how-to-buy-sierra-skyeview"
    h1="How to buy a home at Sierra at Skyeview"
    answerFirst="Buying Sierra at Skyeview works best when you secure a buyer’s agent first, compare plans to specific lots, verify dues and any district charges, then negotiate Century Communities incentives before you reserve."
    breadcrumbs={[
      { name: "Home", path: "/" },
      { name: "How to Buy Sierra at Skyeview", path: "/how-to-buy-sierra-skyeview" },
    ]}
    faqs={faqs}
    hyperlocalVariant="new-build"
    extraSchemas={[
      buildHowToSchema({
        name: "How to buy a Sierra at Skyeview home in Skye Canyon",
        description:
          "Practical steps for purchasing Century Communities new construction at Sierra at Skyeview with buyer representation.",
        steps,
      }),
    ]}
  >
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Step-by-step</h2>
        <ol className="space-y-6">
          {steps.map((step, index) => (
            <li key={step.name} className="flex gap-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-700 text-white font-bold">
                {index + 1}
              </span>
              <div>
                <h3 className="text-xl font-semibold text-gray-900">{step.name}</h3>
                <p className="text-gray-700 mt-1">{step.text}</p>
              </div>
            </li>
          ))}
        </ol>
        <p className="mt-10 text-gray-700">
          Next: review{" "}
          <Link href="/floor-plans" className="text-blue-700 underline">
            floor plans
          </Link>{" "}
          or call for a{" "}
          <Link href="/buyers-agent-skye-canyon" className="text-blue-700 underline">
            Skye Canyon buyer consult
          </Link>
          .
        </p>
      </div>
    </section>
  </SeoLandingLayout>
);

export default HowToBuy;
