# UAE Insurance Ecosystem Explorer — Data Layer

This folder separates reusable data from the visual map. The current dataset is a starter registry, not a complete verified census of UAE market participants. Audit finding: the current main-map sector array contains 10 sector nodes, although the UI copy refers to 19 insurance lines. Treat that as a content/data mismatch to resolve before presenting the map as covering 19 lines.

## Files
- `sectors.json`: the existing map's sector taxonomy, bilingual labels, summaries, and links.
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

## Known audit finding
- Main map source (`index.html`) currently defines 10 sector nodes: health, motor, travel, life, property, marine, aviation, liability, engineering, and reinsurance. UI copy says 19; this is not supported by the current array. Do not claim 19 live sector nodes until the map and sector registry are reconciled.

## Next ingestion
- Current official CBUAE registers for insurers and insurance-related professions.
- Official emirate health-insurance authority/provider requirements for health insurance.
- Official product/line definitions and applicable instruments for motor, travel, life, property, marine, aviation, liability, engineering and reinsurance.
- Source-specific evidence for named company offerings, licences, networks and contractual links.

Retrieved: 2026-10-20.
