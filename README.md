# UAE Healthcare Ecosystem Explorer

An interactive, bilingual (English/Arabic) map of the UAE healthcare ecosystem — who regulates it, who pays for care, who administers claims, who delivers care, and where the operational friction and improvement opportunities sit.

**[Open the Explorer → `index.html`](./index.html)**

---

## What this is

A single self-contained web page (no install, no server, no external dependencies) that visualizes the UAE healthcare ecosystem as an interactive radial diagram. Entities are grouped into seven consistent functional clusters — **Regulators, Insurers, Brokers & Intermediaries, TPAs & Claims Administration, Providers, Digital Health Infrastructure, and Enablers (Payment, Audit)** — arranged around a central "Member" node, with a side panel that opens on click to show each entity's role, partners, member journey, claims flow, and operational impact.

It was built in stages: starting as a single Abu Dhabi map, merged with a Dubai map, then redesigned and expanded to cover **all seven emirates**, and finally extended with a fifth **Value & Opportunity** view that reframes the same ecosystem around value flow, operational friction, and where technology (including, but not limited to, AI) could realistically help. The full history of that evolution — including every factual correction made along the way — is documented separately (see [Evidence & Limitations](#evidence--limitations) below).

## What it covers

Five switchable views, all sharing the same visual system:

| View | What it shows |
|---|---|
| **National Overview** | ~21 of the most nationally relevant entities across the whole UAE — the flagship, portfolio-ready view |
| **Abu Dhabi** | ~18 entities specific to Abu Dhabi's regulatory and market structure (DOH, Thiqa, Daman, Malaffi, SEHA, etc.) |
| **Dubai** | ~18 entities specific to Dubai's structure (DHA, Enaya/Saada, Sukoon, NABIDH, Dubai Health, etc.) |
| **Northern Emirates** | ~17 entities covering Sharjah, Ajman, Umm Al Quwain, Ras Al Khaimah, and Fujairah under the federal framework that made health insurance mandatory there from 1 January 2025 |
| **Value & Opportunity** | The same ecosystem reframed as 19 value-flow/operational nodes (Prior Authorization, Claims Adjudication, Eligibility & Enrollment, etc.), with friction ratings, a transparent opportunity-scoring model, an opportunity matrix, and filters for "where AI genuinely fits" versus "no AI required" |

Every entity's detail panel also states **which emirate(s) it applies to**, and every view has its own footnote listing the regulatory sources it draws on.

## How to use it

1. Open `index.html` in any modern browser — double-click the file, or visit the deployed link if one is set up (see [Deployment readiness](#deployment-readiness)).
2. Use the view switcher at the top to move between National Overview, the three emirate views, and Value & Opportunity.
3. Click any node (bubble) to open its detail panel on the side; click the center "Member" node, press <kbd>Esc</kbd>, or click the panel's close button to dismiss it.
4. Use the filter chips to highlight a segment (Citizens, Residents, Cross-emirate commuters, Seasonal visitors on the ecosystem views; "Where AI fits" and "Who owns the problem" on the Value & Opportunity view) — matching entities stay full-opacity, everything else dims, nothing is hidden.
5. Use the **العربية / English** toggle at any time to switch language; the layout mirrors correctly for Arabic (right-to-left reading order, panel opens on the opposite side).
6. To print or export a page to PDF (e.g. for a deck or a printed handout), use your browser's native Print function — the page has dedicated print styling so filter buttons and other interactive-only chrome are hidden automatically.

No data is transmitted anywhere. Everything — including the language toggle and all node data — runs entirely inside the browser from this one file.

## Evidence & limitations

This tool simplifies a genuinely complex, multi-regulator system for clarity. A few things worth knowing before relying on it:

- **Node sizes reflect illustrative market relevance, not audited market share.** This is stated in the in-app legend.
- **Some entities are consolidated categories, not exhaustive lists** — e.g. "Major Private Hospital Groups" represents several real hospital brands rather than naming every one individually. Each such node says so in its own panel.
- **Not every figure is independently verified.** Where the Explorer cites something specific (e.g. a reported percentage of claims processed electronically), it's flagged in-panel with its evidence status, and treated as *reported*, not as independently confirmed.
- **A small number of items are explicitly marked "needs verification"** rather than stated as fact — most notably the exact current administration of Sharjah's separate citizen health scheme.
- **The Value & Opportunity view's scoring model is a transparent analytical framework, not a measured financial statistic.** The formula is shown in-app; no market sizes, ROI figures, transaction volumes, or savings numbers were invented anywhere in the tool.

The full account of what was changed, what was corrected, why, and what still needs verification — including a detailed QA/testing log — lives in the companion document:

**[`docs/redesign-corrections-report.md`](./docs/redesign-corrections-report.md)**

That report is intentionally kept out of the Explorer's user interface, so the tool itself stays clean and executive-facing.

## How to run it locally

No build step, no package manager, no server required.

- **Simplest:** download `index.html` and double-click it — it opens directly in your default browser.
- **Or, from a terminal**, from inside this folder:
  ```bash
  # Python 3
  python3 -m http.server 8000
  # then open http://localhost:8000 in your browser
  ```
  This step is optional — it's only useful if you want to test it the way it would behave when served from a real web address rather than opened as a local file.

## Deployment readiness

This is a static, single-file, dependency-free web page, so it is ready to deploy as-is to any static hosting service with no configuration:

- **GitHub Pages** — push this repository to GitHub, enable Pages on the `main` branch (root folder), and it will serve directly since the file is already named `index.html`.
- **Netlify, Vercel, Cloudflare Pages, or similar** — drag-and-drop deployment of this folder works with zero build settings.

Recommended before a fully public launch (see the companion report's QA section for the complete list):
- A native Arabic speaker should proofread the Arabic copy.
- A manual print/PDF export check across Chrome, Safari, Firefox, and Edge, since browsers render large SVGs slightly differently when printing.

## Repository structure

```
.
├── index.html                          # The Explorer — open this file to use the tool
├── README.md                           # This file
└── docs/
    └── redesign-corrections-report.md  # Companion report: full change log, corrections, evidence methodology, QA notes
```
