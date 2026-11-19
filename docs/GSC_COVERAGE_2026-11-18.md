# GSC Coverage — sierraskyeview.com (2026-11-18)

Source export: `sierraskyeview.com-Coverage-2026-11-18.xlsx`

## Snapshot (through 2026-11-12)

| Metric | Approx. |
| --- | ---: |
| Indexed | 8 |
| Not indexed | 19 |
| Daily impressions | ~7–47 |

## Critical issues (from export)

| Reason | Pages | Site match |
| --- | ---: | --- |
| Page with redirect | 3 | `/model-residence-1602`, `/model-residence-1708`, `/model-residence-1965` → `/model-*` (308) |
| Not found (404) | 1 | Likely legacy/orphan path; soft-404 recoveries added for common mistypes |
| Crawled — currently not indexed | 3 | Quality/uniqueness — hyperlocal sections added sitewide |
| Discovered — currently not indexed | 12 | Same; sitemap lists 23 canonical www URLs |

## Code actions in this PR

1. Keep permanent redirects for `model-residence-*`; remove redundant client redirect pages.
2. Add permanent redirects for common dead paths (`/homes`, `/skye-canyon`, `/home`, etc.).
3. Prefer www via `vercel.json` + `next.config.js` host redirect.
4. Wire `HyperlocalServiceSection` on every marketing page for unique 89166 / buyer-service copy.
5. Bump sitemap `lastmod` to 2026-11-18; show NAP address on Contact.

## Manual GSC follow-up

1. Open Page indexing → validate “Page with redirect” and “Not found” after deploy.
2. Request indexing for key www URLs: `/`, `/floor-plans`, `/community`, `/services`, `/model-1602`.
3. Confirm sitemap property uses `https://www.sierraskyeview.com/sitemap.xml` (not apex-only).
