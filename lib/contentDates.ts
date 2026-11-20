/** Hand-maintained last-modified dates for sitemap and blog schema (YYYY-MM-DD). */
export const CONTENT_LAST_MODIFIED: Record<string, string> = {
  "/": "2026-11-20",
  "/floor-plans": "2026-11-20",
  "/community": "2026-11-20",
  "/new-build-homes": "2026-11-20",
  "/quick-move-in": "2026-11-20",
  "/reviews": "2026-11-20",
  "/services": "2026-11-20",
  "/contact": "2026-11-20",
  "/about": "2026-11-20",
  "/qa": "2026-11-20",
  "/mortgage-calculator": "2026-06-01",
  "/blog": "2026-11-20",
  "/blog/complete-guide-buying-new-construction-las-vegas": "2026-11-20",
  "/blog/why-choose-skye-canyon-buyers-guide": "2026-11-20",
  "/blog/understanding-hoa-fees-what-to-know": "2026-11-20",
  "/blog/new-construction-vs-resale-which-right-for-you": "2026-11-20",
  "/blog/buyers-agent-advantage-independent-representation": "2026-11-20",
  "/homes-near-mount-charleston": "2026-11-20",
  "/northwest-las-vegas-new-homes": "2026-11-20",
  "/model-1602": "2026-11-20",
  "/model-1708": "2026-11-20",
  "/model-1965": "2026-11-20",
  "/sell-your-home-to-buy-at-sierra-skyeview": "2026-11-20",
};

export function lastModForPath(path: string): string {
  return CONTENT_LAST_MODIFIED[path] ?? "2026-11-20";
}
