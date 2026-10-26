# UAE Insurance Ecosystem Explorer — Data Layer

This folder separates reusable data from the visual map. The registry now contains **19 dedicated sector explorer pages**, while the main market map in `index.html` intentionally presents **10 high-level nodes**. These are different navigation layers, not a count of officially recognized insurance classes. The 19-line taxonomy is exploratory and is not presented as an exhaustive official UAE classification.

## Files
- `sectors.json`: 19 bilingual sector records with conceptual summaries, generic roles, and links to dedicated pages.
- `entities.json`: named entities and participant-role categories. Categories are not companies.
- `relationships.json`: generic relationship patterns, not named-company contracts or affiliations.
- `sources.json`: official reference sources with retrieval dates and scope notes.
- `evidence_log.json`: claim-level records that distinguish facts from methodology notes and open verification work.

## Data quality rules
1. Separate facts, analysis, and items needing verification.
2. Every factual market claim should reference one or more `source_id` values.
3. A source's existence does not prove every claim about a named entity; record the relevant page/document and location.
4. Never infer a contract, network, TPA appointment, product offering, or licence from a generic ecosystem diagram.
5. Record jurisdiction and effective dates; UAE federal, emirate-level, and financial-free-zone regimes must not be conflated.
6. Use ISO dates (`YYYY-MM-DD`), stable IDs, bilingual names where available, and explicit unknowns rather than guesses.
7. Review current CBUAE instruments before relying on older guidance. This dataset supports market intelligence, not legal advice.
8. Treat sector summaries and role lists as conceptual workflow descriptions unless claim-level sources support a specific market assertion.

## Current scope and limitations
- `index.html` contains 10 high-level market-map nodes.
- `sectors.json` contains 19 sector records, each linked to a dedicated HTML explorer page. A dedicated page is evidence of prototype coverage, not proof that the sector's market participants, products, regulatory scope, or demand have been independently verified.
- `entities.json` currently contains 11 entity/category records; `relationships.json` contains 4 generic relationship patterns; `sources.json` contains 3 source records; and `evidence_log.json` contains 4 evidence/methodology records. This is a starter evidence layer, not a verified census of the UAE market.
- The 19-sector taxonomy must not be described as an official exhaustive classification. Check current official product classes and applicable instruments before making regulatory claims.

## Evidence Register v1 (2026-10-26)
- `evidence_register_v1.json` is the first expanded register: 7 source records, 11 evidence records, and research links for all 19 sector records, including 39 explicitly unvalidated research-opportunity hypotheses.
- Labels distinguish `FACT`, `ANALYSIS`, `HYPOTHESIS`, and `VERIFICATION_REQUIRED`. Health has the strongest starter evidence coverage; other sectors are not represented as fully researched merely because they are linked to market-wide context.
- The CBUAE 2025 market aggregates are source-backed. The 2026 entity list is identified but has not yet been normalized into a complete entity-level census. The located Abu Dhabi 2010 claims standard is not assumed current; applicability must be confirmed. DHA's September 2026 circular is an operational orientation notice, not a complete claims rulebook.

## Next evidence work
- Expand the official-source registry and attach source-specific evidence to each sector's applicable product/class definitions.
- Add current official registers for insurers and insurance-related professions.
- Add official emirate health-insurance authority/provider requirements for health insurance.
- Verify named-company offerings, licences, networks and contractual links independently before adding them.

Retrieved: 2026-10-25.
