/** Hand-maintained last-modified dates for sitemap and blog schema (YYYY-MM-DD). */
export const CONTENT_LAST_MODIFIED: Record<string, string> = {
  "/": "2026-11-18",
  "/floor-plans": "2026-11-18",
  "/community": "2026-11-18",
  "/new-build-homes": "2026-11-18",
  "/quick-move-in": "2026-11-18",
  "/reviews": "2026-11-18",
  "/services": "2026-11-18",
  "/contact": "2026-11-18",
  "/about": "2026-11-18",
  "/qa": "2026-11-18",
  "/mortgage-calculator": "2026-11-18",
  "/blog": "2026-11-18",
  "/blog/complete-guide-buying-new-construction-las-vegas": "2026-11-18",
  "/blog/why-choose-skye-canyon-buyers-guide": "2026-11-18",
  "/blog/understanding-hoa-fees-what-to-know": "2026-11-18",
  "/blog/new-construction-vs-resale-which-right-for-you": "2026-11-18",
  "/blog/buyers-agent-advantage-independent-representation": "2026-11-18",
  "/homes-near-mount-charleston": "2026-11-18",
  "/northwest-las-vegas-new-homes": "2026-11-18",
  "/model-1602": "2026-11-18",
  "/model-1708": "2026-11-18",
  "/model-1965": "2026-11-18",
  "/sell-your-home-to-buy-at-sierra-skyeview": "2026-11-18",
};

export function lastModForPath(path: string): string {
  return CONTENT_LAST_MODIFIED[path] ?? "2026-11-18";
}
