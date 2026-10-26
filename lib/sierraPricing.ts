/** Century Communities Sierra at Skyeview — prices on site pages were verified at this builder URL on the as-of date. */
export const SIERRA_PRICING_AS_OF = "2026-10-26";
export const SIERRA_PRICING_SOURCE =
  "https://www.centurycommunities.com/find-your-new-home/nevada/las-vegas-metro/las-vegas/skye-canyon/skyeview---sierra/";

export const SIERRA_COMMUNITY_FROM_USD = 421_990;
export const SIERRA_PLAN_1602_FROM_USD = 421_990;
export const SIERRA_PLAN_1708_FROM_USD = 436_990;
export const SIERRA_PLAN_1965_FROM_USD = 456_990;

export function formatUsd(amount: number): string {
  return amount.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  });
}

export const SIERRA_PRICING_SUMMARY = `Sierra at Skyeview new homes from ${formatUsd(SIERRA_COMMUNITY_FROM_USD)} (community); Residence 1602 from ${formatUsd(SIERRA_PLAN_1602_FROM_USD)}; Residence 1708 from ${formatUsd(SIERRA_PLAN_1708_FROM_USD)}; Residence 1965 from ${formatUsd(SIERRA_PLAN_1965_FROM_USD)}. As of ${SIERRA_PRICING_AS_OF}. Source: Century Communities.`;
