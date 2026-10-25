# UAE Insurance Ecosystem Explorer

A static, bilingual (English/Arabic) portfolio prototype for understanding the UAE insurance market: start with the market map, open an insurance line, explore its member-centred ecosystem, and distinguish official evidence from interpretation and open questions.

**Start here:** [Open the UAE Insurance Ecosystem Explorer](https://uae-ecosystem-evidence-lab.vercel.app/) · [View the source repository](https://github.com/mohammedabdallahpharm-create/uae-ecosystem-full-explorer)

> **Deployment note:** The [GCC Insurance Ecosystem Explorer](https://gcc-insurance-ecosystem-explorer.vercel.app/) gateway source is now stored at \`gcc-gateway/index.html\` in this repository. It is deployed separately from the UAE multi-page explorer and compares UAE and Saudi Arabia across five dimensions; the other four GCC markets are explicitly marked as not yet mapped.

## What is in this repository

| Page | Purpose |
|---|---|
| `index.html` | Market-level map of insurance lines, with links into sector experiences |
| `insurance-line-explorer.html` | Browse 19 exploratory insurance categories and compare sector-level ecosystem structures |
| `intelligence-hub.html` | Navigate the insurance value chain and the research approach |
| `sector-intelligence.html` | Evidence-linked signals, interpretations, validation questions and decision implications |
| `health-insurance.html` | Detailed health-insurance ecosystem explorer |
| `travel-insurance.html` | Travel-insurance ecosystem and synthetic, human-reviewed claims workflow |
| `social-preview.svg` | 1200 × 630 social-preview artwork |

## How to explore

1. Start with the market map.
2. Select an insurance line and follow the link into its sector view.
3. Use the **Back** and **Home** controls on the supporting pages.
4. Switch between English and Arabic where the page provides a language control.
5. In Sector Intelligence, read each signal in order: **source fact → interpretation → validation question → decision implication**.

## Evidence and limitations

- Official regulatory text or official statistics support the factual claim only to the extent described by the linked source. A regulatory classification does not prove market size, demand, claims performance or a commercial opportunity.
- Strategic interpretations and validation questions are analytical hypotheses, not confirmed market findings.
- The travel-claims workflow uses synthetic examples. It is not connected to an insurer, does not process real claims, and does not make automatic coverage decisions.
- Market-level statistics should be read with their source, reporting period and definition. Where official publications differ, record the discrepancy and verify the underlying table before relying on the number.
- The explorer is a portfolio/research prototype, not legal, regulatory, insurance or investment advice. Check current official requirements before operational use.
- Arabic copy should receive native-speaker review before being treated as publication-ready.

## Run locally

No build step, package manager or server is required for basic use. Download the HTML files and keep them in the same directory, then open `index.html` in a browser. For more representative local testing, run:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## Current quality priorities

See [Audit and remediation plan](AUDIT-AND-REMEDIATION.md) for the second-pass review, evidence checks and the remaining verification work.
