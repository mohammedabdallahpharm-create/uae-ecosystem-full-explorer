# Audit and Remediation Plan

**Scope:** Second-pass review of the current repository and the related Vercel projects. This is a portfolio research prototype, not a regulated production system.

## Findings and actions

### P0 — Keep source and deployment identity clear

- The repository contains a multi-page UAE insurance explorer.
- The Vercel project named `gcc-insurance-ecosystem-explorer` has a production deployment marked `READY`, but its deployment file tree contains only `src/index.html`. It is a separate artifact and should not be described as a deployment of all pages in this repository without confirming the Git source/commit.
- The `uae-ecosystem-evidence-lab` Vercel project has the expected domain assigned and a ready production deployment, but the Vercel project metadata returned `live: false`. The domain-to-commit mapping and external runtime access still need a smoke test.
- **Action taken:** README now distinguishes the GCC gateway from this repository and avoids claiming a verified one-to-one deployment link.
- **Next verification:** Confirm each production domain loads, test direct navigation to every HTML page, and compare deployed HTML against the current `main` commit before announcing a release.

### P1 — Repository documentation was stale

- Previous README title and instructions described the old health-only map, omitted the current multi-page insurance system, and used an old project structure.
- **Action taken:** Replaced README with the current page inventory, usage guidance, limitations and links to the audit plan.

### P1 — Main page overstated the time-to-understand claim

- The hero says the experience is designed for five-minute orientation, while the adjacent statistic said “15 sec to grasp the market structure”. These claims pull in different directions.
- **Action taken:** Changed the statistic to “5 min to orient yourself” to match the product promise.

### P1 — 2025 market statistics need source-aware presentation

- Sector Intelligence links its market-level signal to the CBUAE Annual Report 2025, which reports AED 75.2bn gross written premiums (+15.5%) and AED 46.2bn gross paid claims (+11%).
- A separate CBUAE annual statistical report was reported by WAM as AED 74.8bn premiums (+14.9%). That discrepancy should not be silently collapsed into a single number.
- **Action:** Retain the existing Annual Report figures only when the linked Annual Report table is the intended source; add a note in the signal or evidence log that a separate annual statistical publication reports a different premium total. Confirm definitions, revisions and source table before comparing or combining them.
- Official references:
  - [CBUAE Annual Report 2025 (PDF)](https://centralbank.ae/media/4qbn11cl/annual-report-2025-en.pdf)
  - [WAM report on the annual statistical report (24 August 2026)](https://www.wam.ae/en/article/c1w8zuq-uae-insurance-sector-assets-reach-aed1649-billion)

### P1 — Claim-level traceability

- The main market signal includes a direct link to the CBUAE Annual Report PDF, and the specialist-line cards generally link to specific rulebook pages.
- **Next improvement:** Keep one source link beside each factual claim, include source publication date and effective date separately where relevant, and avoid using a general regulator homepage as the only citation for a specific legal or numerical statement.

### P2 — Analytical scoring and false precision

- The current market intelligence page states that it excludes unsupported scores and unverified ROI claims. Preserve that guardrail.
- If any opportunity score is reintroduced, label its inputs as expert judgement, explain the ordinal scale and sensitivity, and never present the result as measured financial impact.

### P2 — Navigation and language quality

- Shared navigation code provides Back/Home and a five-minute guide on supporting pages. Smoke-test each page's language toggle and verify that the global language preference is applied consistently, rather than merely changing navigation labels.
- **Next improvement:** Keyboard-test the market-map nodes, confirm visible focus states, verify SVG labels at mobile widths, and review all Arabic strings with a native speaker.

### P2 — Accessibility, automated checks and maintenance

- The project is static HTML with no package manifest or automated test workflow currently identified at repository root.
- Add a lightweight link/asset checker and HTML/JavaScript smoke test before adding a heavier build system. Include tests for missing local links, duplicate IDs, console errors, language switching, and direct page loads.
- Add a clear license only if the author intends to grant reuse rights; do not assume a public repository automatically grants permission to reuse the code.

## What is and is not verified

**Verified from repository/Vercel metadata:** repository page inventory, stale README, main-page time mismatch, configured Vercel domains, latest deployment states, and the single-file artifact in the GCC deployment tree.

**Not yet verified in a real browser:** every live page's runtime behaviour, cross-page language persistence, responsive visual quality, keyboard accessibility, exact Git commit behind each deployment, and external availability from the user's network.

## Release gate

Before posting a “live” project link publicly:

- [ ] Open the canonical domain in a private browser session.
- [ ] Load each page directly (not only by clicking from the home page).
- [ ] Check every internal link and image/social metadata URL.
- [ ] Confirm deployed commit matches the intended GitHub commit.
- [ ] Reconcile the 2025 premium figure discrepancy in the market signal.
- [ ] Complete native Arabic review and mobile/keyboard smoke tests.
