/** Hand-maintained last-modified dates for sitemap and blog schema (YYYY-MM-DD). */
export const CONTENT_LAST_MODIFIED: Record<string, string> = {
  "/": "2026-10-17",
  "/floor-plans": "2026-10-12",
  "/community": "2026-10-12",
  "/new-build-homes": "2026-10-17",
  "/quick-move-in": "2026-10-17",
  "/reviews": "2026-10-12",
  "/services": "2026-10-12",
  "/contact": "2026-10-12",
  "/about": "2026-10-12",
  "/qa": "2026-10-17",
  "/mortgage-calculator": "2026-06-01",
  "/blog": "2026-10-12",
  "/blog/complete-guide-buying-new-construction-las-vegas": "2026-10-17",
  "/blog/why-choose-skye-canyon-buyers-guide": "2026-10-17",
  "/blog/understanding-hoa-fees-what-to-know": "2026-06-01",
  "/blog/new-construction-vs-resale-which-right-for-you": "2026-06-01",
  "/blog/buyers-agent-advantage-independent-representation": "2026-06-01",
  "/homes-near-mount-charleston": "2026-10-17",
  "/northwest-las-vegas-new-homes": "2026-10-17",
  "/model-1602": "2026-10-17",
  "/model-1708": "2026-10-17",
  "/model-1965": "2026-10-17",
  "/sell-your-home-to-buy-at-sierra-skyeview": "2026-10-12",
};

export function lastModForPath(path: string): string {
  return CONTENT_LAST_MODIFIED[path] ?? "2026-10-12";
}
