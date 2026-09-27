import dynamic from "next/dynamic";
import Link from "next/link";
import { COMMUNITY } from "../utils/communityLocation";

const AmenityMap = dynamic(() => import("./AmenityMap"), {
  ssr: false,
  loading: () => (
    <div
      className="w-full h-[420px] rounded-lg bg-gray-100 animate-pulse border border-gray-200"
      aria-hidden="true"
    />
  ),
});

type NearbyAmenitiesSectionProps = {
  compact?: boolean;
  heading?: string;
  intro?: string;
};

export default function NearbyAmenitiesSection({
  compact = true,
  heading = `Life Near ${COMMUNITY.name}`,
  intro,
}: NearbyAmenitiesSectionProps) {
  const defaultIntro = `Explore restaurants, grocery, parks, healthcare, and more within minutes of ${COMMUNITY.name} in ${COMMUNITY.masterPlan}, Northwest Las Vegas (89166).`;

  return (
    <section className="py-16 bg-gray-50" aria-labelledby="nearby-amenities-heading">
      <div className="max-w-7xl mx-auto px-4">
        <div className="max-w-3xl mb-8">
          <h2 id="nearby-amenities-heading" className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {heading}
          </h2>
          <p className="text-lg text-gray-700">{intro ?? defaultIntro}</p>
        </div>
        <AmenityMap compact={compact} showCuratedList={!compact} />
        <div className="mt-8 text-center">
          <Link
            href="/amenities"
            className="inline-flex items-center justify-center min-h-[44px] px-8 py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors"
          >
            Nearby Amenities in {COMMUNITY.masterPlan}
          </Link>
        </div>
      </div>
    </section>
  );
}
