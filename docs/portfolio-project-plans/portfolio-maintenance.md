# Portfolio Maintenance

## Owner and cadence

- Content owner: Marcell Varga.
- Cadence: review once each month during the job search and after every public
  release of Aperture or Wild Route.
- Health check: run `npm run check && npm run test:e2e` before publishing a
  portfolio change; use the release-evidence checklist for production changes.

## Single sources of truth

- Project placement, date, status, links, and card content live in
  `app/data/projects.ts`.
- The featured case-study evidence lives in `app/data/case-studies.ts`.
- `caseStudyId` joins the two records, so the evidence component reads status
  from the project record instead of duplicating it.
- Route metadata lives beside each route layout; global identity and structured
  data live in `app/seo.ts`.

## Stale-claim and link removal

1. When a demo, source, screenshot, or claim becomes stale, change its status
   or remove its public link in `app/data/projects.ts` immediately.
2. Update the relevant case-study limitation or verification text in
   `app/data/case-studies.ts` in the same change.
3. Replace or remove affected media and route copy; do not leave a broken image
   or a claim that cannot be substantiated.
4. Run `npm run check && npm run test:e2e`; for a deployed change, complete the
   release-evidence checklist as well.

## Change discipline

Add an article only when it materially deepens one of the three featured proof
points. Keep confidential work at the current level of abstraction and remove
anything that might disclose proprietary implementation, customer, or metric
data.
