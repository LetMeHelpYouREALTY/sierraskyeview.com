import type { GetServerSideProps } from "next";
import {
  SIERRA_PRICING_AS_OF,
  SIERRA_PRICING_SOURCE,
  SIERRA_PRICING_SUMMARY,
} from "../lib/sierraPricing";

const SITE = "https://www.sierraskyeview.com";

const LlmsTxt = () => null;

const buildLlmsTxt = () => `
# Sierra at Skyeview Homes — buyer resource site
# Curated by Dr. Jan Duffy, Nevada REALTOR (license S.0197614). Independent buyer's agent; not the builder.

> ${SIERRA_PRICING_SUMMARY}
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

## Pricing note
Prices change. As of ${SIERRA_PRICING_AS_OF}, confirm on Century Communities before publishing offers.

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
