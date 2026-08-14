# Portfolio Release Evidence Checklist

Use this checklist for the release candidate built from the current local
history. Do not mark an item complete until its evidence is recorded below.

## Candidate

| Field | Value |
| --- | --- |
| Candidate commit | Current `main` release candidate |
| Intended canonical URL | `https://marcellvarga.com` |
| Local gate | `npm run check && npm run test:e2e` |
| Local result | Passed 2026-08-07: `npm run check` and `PLAYWRIGHT_PORT=3110 npm run test:e2e` |
| Deployment URL | `https://marcellvarga.com` (Vercel production deployment `dpl_6XxAPMXKmVyRzfXUzukaFnLHpXhi`) |
| Release date | 2026-08-07 |

## Production quality targets

Record production-lab or real-user evidence for the homepage, Aperture, and
Wild Route. These thresholds are targets, not results claimed by this document.

| Metric | Target | Evidence link / date | Result |
| --- | --- | --- | --- |
| LCP | at or below 2.5 s at p75 | Pending | Pending |
| INP | at or below 200 ms at p75 | Pending | Pending |
| CLS | at or below 0.10 at p75 | Pending | Pending |
| JavaScript / route payload | record deployed audit output | Pending | Pending |

## Fresh-browser and device matrix

In a fresh profile, confirm the homepage positioning, each featured evidence
record, contact path, resume download, project imagery, navigation, and no
horizontal overflow. Record the browser/version and date for every row.

| Environment | Tester | Date | Result | Notes |
| --- | --- | --- | --- |
| Chrome desktop | Pending | Pending | Pending |  |
| Safari desktop | Pending | Pending | Pending |  |
| Firefox desktop | Pending | Pending | Pending |  |
| iOS Safari | Pending | Pending | Pending |  |
| Android Chrome | Pending | Pending | Pending |  |

## Contact, analytics, and privacy review

| Check | Expected result | Evidence | Result |
| --- | --- | --- | --- |
| Contact route | The mailto link opens a message addressed to `themarcellvarga@gmail.com` | Pending | Pending |
| Contact handling | A test message is received and can be replied to | Pending | Pending |
| Analytics configuration | PostHog, Vercel Analytics, and Speed Insights initialize only after explicit opt-in; PostHog autocapture and session recording are disabled | Restored 2026-08-14 | Pending production verification |
| Privacy sweep | No phone endpoint, private data, or unapproved identifier is publicly exposed | Pending | Pending |
| Public links | No unpublished or private repository is linked from public routes | Local link sweep 2026-08-07 | Pass |

## Reviewer task

Ask three to five engineers or hiring managers to spend sixty seconds on the
fresh-browser homepage, then answer without prompts:

1. What role does this person appear to be targeting?
2. Which three pieces of work are current evidence, and what does each prove?
3. What would you click next to contact or evaluate the work?

| Reviewer | Date | Role understood | Current work understood | Friction / requested change |
| --- | --- | --- | --- | --- |
| Pending | Pending | Pending | Pending | Pending |
| Pending | Pending | Pending | Pending | Pending |
| Pending | Pending | Pending | Pending | Pending |

## Release decision

Do not declare Phase 5 complete until every required row has evidence, the
production targets are met or an explicit remediation decision is recorded,
and any comprehension blocker from reviewers is resolved or consciously
accepted.
