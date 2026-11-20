import type { GetServerSideProps } from "next";
import { SIERRA_PRICING_AS_OF, SIERRA_PRICING_SOURCE } from "../lib/sierraPricing";

const SITE = "https://www.sierraskyeview.com";

const LlmsTxt = () => null;

const buildLlmsTxt = () => `
# Sierra at Skyeview Homes — buyer resource site
# Curated by Dr. Jan Duffy, buyer's agent for Sierra at Skyeview and Skye Canyon. She represents buyers, not the builder.

> Sierra at Skyeview is a Century Communities neighborhood of two-story homes in Skye Canyon, Las Vegas, NV 89166.
> Builder page: ${SIERRA_PRICING_SOURCE}

## Contact (NAP)
- Name: Dr. Jan Duffy
- Phone: (702) 903-4687
- Email: DrDuffy@SierraSkyeview.com
- Community sales address: 8925 Vanhoy Creek St., Las Vegas, NV 89166 (Sierra at Skyeview at Skye Canyon)

## Primary pages
- ${SITE}/ : New construction buyer representation at Sierra at Skyeview
- ${SITE}/floor-plans : Floor plans and availability overview
- ${SITE}/quick-move-in : Quick move-in inventory
- ${SITE}/community : Skye Canyon community guide
- ${SITE}/qa : Buyer FAQs (pricing, HOA, buyer agent role)
- ${SITE}/sell-your-home-to-buy-at-sierra-skyeview : Sell current home to buy at Sierra at Skyeview
- ${SITE}/about : About Dr. Jan Duffy, buyer's agent

## Skye Canyon facts (retrieved 2026-11-20; sources on the home page)
- Skye Canyon: 1,000-acre master plan at U.S. 95 and Skye Canyon Park Drive, ZIP 89166, planned for 6,500 homes (skyecanyon.com/facts).
- Recent sales: 309 Skye Canyon closings at a $535,000 median, 12 months ending 2026-09-18 (Nevada Real Estate Group, MLS records).
- Amenities: 15-acre Skye Canyon Park, 8,142 sq ft Skye Center, 9,663 sq ft Skye Fitness, seven parks (skyecanyon.com).
- Some parcels sit in City of Las Vegas SIDs 609 and 610, final payments 2047 and 2048 (Nevada Real Estate Group).
- Zoned schools (names only, confirm by address with CCSD): Kenneth Divich Elementary, Edmundo Escobedo Sr. Middle, Arbor View High.

## Pricing note
Prices change often, so this file lists none. Site pages show Century Communities pricing as of ${SIERRA_PRICING_AS_OF}, subject to change; confirm current pricing on the builder page above before writing an offer.

## Crawling
See ${SITE}/robots.txt for AI crawler allowlist.
`.trim();

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  res.setHeader("Content-Type", "text/plain; charset=utf-8");
  res.write(buildLlmsTxt());
  res.end();
  return { props: {} };
};

export default LlmsTxt;
