import type { NextPage } from "next";
import Link from "next/link";
import SeoLandingLayout from "../components/seo/SeoLandingLayout";
import { AMENITY_FACTS, COMMUNITY_FACTS, MARKET_FACTS } from "../lib/hyperlocalContent";

const faqs = [
  {
    question: "What amenities are included when you live in Skye Canyon?",
    answer: `${AMENITY_FACTS.skyeCanyonPark} ${AMENITY_FACTS.skyeCenter} ${AMENITY_FACTS.skyeFitness}`,
  },
  {
    question: "How much are Skye Canyon HOA dues?",
    answer: MARKET_FACTS.hoaMlsMedianMonthly,
  },
  {
    question: "Are there special improvement districts (SIDs) in Skye Canyon?",
    answer: MARKET_FACTS.sidNote,
  },
  {
    question: "How far is Skye Canyon from Mount Charleston and the Strip?",
    answer: `${COMMUNITY_FACTS.mountCharlestonDrive}. Strip drives are ${COMMUNITY_FACTS.stripDrive}; airport timing is ${COMMUNITY_FACTS.airportDrive}.`,
  },
];

const LivingInSkyeCanyon: NextPage = () => (
  <SeoLandingLayout
    title="Living in Skye Canyon | Sierra at Skyeview Lifestyle Guide 89166"
    description="What living in Skye Canyon is like for Sierra at Skyeview buyers: amenities, dues context, drive times, and independent buyer representation."
    path="/living-in-skye-canyon"
    h1="Living in Skye Canyon with a Sierra at Skyeview home"
    answerFirst={`Skye Canyon is a master-planned community in Northwest Las Vegas (${COMMUNITY_FACTS.zip}) at ${COMMUNITY_FACTS.highwayAccess}. Sierra at Skyeview buyers get the Skye Canyon Park amenity grid plus ${COMMUNITY_FACTS.elevationLabel} living.`}
    breadcrumbs={[
      { name: "Home", path: "/" },
      { name: "Community", path: "/community" },
      { name: "Living in Skye Canyon", path: "/living-in-skye-canyon" },
    ]}
    faqs={faqs}
    hyperlocalVariant="community"
  >
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 space-y-8">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Daily life around Skye Canyon Park</h2>
          <p className="text-lg text-gray-700 mb-4">{AMENITY_FACTS.outdoor}</p>
          <p className="text-lg text-gray-700">{AMENITY_FACTS.marketplace}</p>
        </div>
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ownership cost layers to verify</h2>
          <p className="text-lg text-gray-700 mb-4">{MARKET_FACTS.hoaMlsMedianMonthly}</p>
          <p className="text-lg text-gray-700">{MARKET_FACTS.sidNote}</p>
        </div>
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">How Sierra fits the master plan</h2>
          <p className="text-lg text-gray-700 mb-4">
            {COMMUNITY_FACTS.siblingCollections} {COMMUNITY_FACTS.sharedDriveNote}
          </p>
          <p className="text-lg text-gray-700">
            Start with the{" "}
            <Link href="/community" className="text-blue-700 underline">
              community guide
            </Link>
            , then compare{" "}
            <Link href="/floor-plans" className="text-blue-700 underline">
              Sierra floor plans
            </Link>
            .
          </p>
        </div>
      </div>
    </section>
  </SeoLandingLayout>
);

export default LivingInSkyeCanyon;
