# Evidence Register — UAE Health Insurance Ecosystem Explorer (working copy)

**Working branch:** `evidence-strengthening-2026-10`  
**Purpose:** Strengthen and qualify the 19 opportunity claims without changing the existing `main` version.  
**Review date:** 2026-10-12

## Evidence rules
- An official rule proves that a process or obligation exists; it does not prove the size or frequency of operational pain.
- A technology opportunity is a hypothesis until validated with workflow data, interviews, or measured outcomes.
- Scores in the explorer are analyst prioritisation scores, not measured financial impact or proof of market-wide prevalence.
- Do not use unsupported market-wide claims such as “manual across the market,” “every emirate,” or a current e-claims percentage without a recent, direct source.

## Source register

| ID | Official source | What it supports | Limits |
|---|---|---|---|
| S1 | [DOH Shafafiya prices and adjudication rules](https://www.doh.gov.ae/en/Shafafiya/prices) | Abu Dhabi publishes claims/adjudication rules and tariff-related requirements. | Does not quantify rejection rates, delays, or avoidable cost. |
| S2 | [DOH claims and adjudication rules v2025](https://www.doh.gov.ae/-/media/Feature/shafifya/Prices/Adjudication-Rules/DOH-Claims-and-Adjudication-Rules-V2025.ashx) | Rules operate alongside tariffs, circulars, standards, and provider-payer contracts. | Does not prove a specific pain point is widespread. |
| S3 | [DOH Shafafiya reporting requirements](https://www.doh.gov.ae/en/shafafiya/reporting) | Reporting requirements and electronic transaction processes exist in Abu Dhabi. | Does not establish current market-wide processing performance. |
| S4 | [DOH prior-authorization dictionary](https://www.doh.gov.ae/en/shafafiya/dictionary/Prior%20Request%20Authorization) | Structured fields and rules exist for prior-authorization transactions. | Does not establish turnaround time or denial prevalence. |
| S5 | [DOH PBM dosage/frequency rules](https://www.doh.gov.ae/en/Shafafiya/notices/dose-frequency-and-rxinstruction-in-pbm-prior-authorisations-and-claims) | Specific validation rules apply to medication-related prior authorisations and claims. | Does not quantify how often errors occur or their cost. |
| S6 | [DOH Shafafiya web services](https://www.doh.gov.ae/en/Shafafiya/Costing/webservices) | Transaction search, upload, reconciliation, eligibility-history and prior-authorisation services are documented. | Availability of a service does not prove universal adoption or interoperability. |
| S7 | [MOHRE basic health insurance scheme](https://tasheel.mohre.gov.ae/en/media-center/awareness-and-guidance/health-insurance-scheme.aspx) | Basic insurance requirements apply to specified private-sector and domestic-worker categories in the northern emirates from 2025, subject to scheme terms and exceptions. | Does not prove enrolment/renewal failures are common. |
| S8 | [DHA Enaya service](https://dha.gov.ae/services/details?id=208&segment=individual_services) | Dubai government health coverage schemes are organised under Enaya, including named schemes. | Does not support claims of frequent confusion between schemes. |
| S9 | [CBUAE insurance brokers’ regulation](https://rulebook.centralbank.ae/en/rulebook/insurance-brokers%E2%80%99-regulation) and [conduct of business](https://rulebook.centralbank.ae/en/rulebook/article-12-conduct-business) | Broker licensing, governance, product comparison and client-needs obligations. | Does not prove distribution is inefficient or mostly manual. |
| S10 | [CBUAE pricing rules](https://rulebook.centralbank.ae/en/rulebook/article-5-pricing) | Insurance pricing should be supported by appropriate technical/actuarial bases and relevant data. | Does not quantify underwriting opportunity or margins. |
| S11 | [CBUAE Article 90 — provision of data and information](https://rulebook.centralbank.ae/en/rulebook/article-90-provision-data-and-information) | CBUAE can request data and inspect insurer records and transactions. | Does not prove current audit is only retrospective or sample-based. |
| S12 | [MOHAP Riayati](https://mohap.gov.ae/en/riayati) and [About NUMR](https://mohap.gov.ae/en/riayati/about-numr) | A national unified health-record initiative exists and integrates with Malaffi and NABIDH; published figures have update dates and should be dated when reused. | Do not claim there is no national unified health-record initiative. Current connectivity/coverage must be separately verified. |
| S13 | [Riayati e-Claims Post Office](https://mohap.gov.ae/en/riayati/e-claims-post-office) | A unified exchange for insurance claims and related data in the northern emirates, including eligibility, approvals, claims and e-prescriptions. | Published volumes/participants are historical as of the page’s stated update date, not current live counts. |
| S14 | [DHA professional conduct standards (2026)](https://www.dha.gov.ae/uploads/012026/Standards%20for%20Code%20of%20Ethics%20and%20Professional%20Conduct%20for%20Health%20Professionals%20V1%20202613351.pdf) | Accurate coding, complete documentation and appropriate claims conduct are professional requirements. | Does not establish prevalence of upcoding, duplicate claims, or documentation errors. |
| S15 | [DHA telehealth standards](https://dha.gov.ae/uploads/012023/Standards%20for%20Telehealth%20Services2023158613.pdf) | Eligibility checks, claim documentation and coding alignment are relevant to telehealth claims workflows. | The document is older; verify current applicability before using it as a current rule. |
| S16 | [Aani instant payments](https://aep.ae/en/services/aani/) | UAE instant-payment infrastructure exists. | Does not establish that Aani can or should be used for medical-insurance claims settlement without technical, contractual and regulatory validation. |

## Opportunity-by-opportunity disposition

| Node | Evidence currently supports | Unsupported / still to validate | Editorial decision |
|---|---|---|---|
| REG1 — Regulation & Standards | Multiple authorities publish rules and standards (S1–S3, S7, S9). | The scale of duplicate compliance burden and whether definitions can/should be harmonised. | Narrow: frame as a cross-regulator mapping opportunity, not a proven system-wide inefficiency. |
| REG2 — Compliance & Audit | Insurer records are subject to regulatory data requests and inspection (S11); professional claims conduct is governed (S14). | That audits are mainly retrospective/sample-based or that continuous analytics reduce recoupment. | Rewrite as a human-led audit-prioritisation hypothesis. |
| GOVCOV — Government-Funded Coverage | Named schemes and basic coverage rules exist (S7–S8). | Frequent scheme mix-ups, near-total cost-sharing, or system-wide eligibility errors. | Narrow: verify scheme eligibility at the point of service; prevalence unproven. |
| EMPCOV — Employer-Funded Coverage | Employer-related mandatory coverage exists for defined categories (S7). | “Largest segment,” mostly manual renewals, and staff being left uninsured due to timing gaps. | Rewrite; require enrolment/renewal workflow evidence. |
| COMCOV — Commercial Insurance Underwriting | CBUAE sets insurance pricing requirements (S10). | Relative segment size/margins and whether predictive analytics creates material value. | Keep as lower-priority hypothesis; no market-size claims without data. |
| SPON — Employers / Sponsors | Employer/sponsor responsibilities are relevant to insurance enrolment. | Frequency and cost of sponsor-side data errors. | Needs employer/insurer interviews or anonymised exception data. |
| DIST — Brokers & Distribution | Broker licensing and conduct obligations, including product comparison, exist (S9). | That broker workflows are inefficient or largely manual. | Narrow to compliant comparison and data handoff; validate actual friction. |
| ENR — Eligibility & Enrollment | Eligibility and insurance-history services are documented (S6); specified mandatory coverage categories exist (S7). | Cross-system mismatches, gaps, and their prevalence. | Keep as testable integration opportunity, not proven failure rate. |
| PA — Prior Authorization | Structured prior-authorisation fields and validation rules exist (S4–S5). | Approval turnaround, avoidable requests, denial rates, and potential savings. | Strong process evidence; quantify operational pain before claiming impact. |
| CSUB — Claims Submission | Electronic reporting and submission requirements are documented (S3, S6, S13). | High rates of incomplete/duplicate submissions and market-wide manual re-entry. | Narrow to rule validation and completeness checks; measure exception rates. |
| CADJ — Claims Adjudication | Formal claims/adjudication rules and tariffs are published (S1–S2). | The proportion of decisions that are delayed, inconsistent, or unnecessarily manual. | Strong process evidence; do not present friction score as measured outcome. |
| HOSP — Hospitals & Tertiary Care | Providers operate within regulated claims/documentation workflows (S1–S3, S14). | Hospital-specific denial burden, coding rework, and cost of delayed payment. | Needs provider-level operational evidence. |
| OPN — Outpatient, Diagnostic & Pharmacy Network | Rules and transaction services cover claims and medication-related checks (S3–S6). | Network-wide access gaps, pricing friction, or claim exception prevalence. | Narrow to measurable workflow exceptions by service category. |
| PHYS — Physicians / Clinical Workforce | Documentation and coding duties are explicit (S14–S15). | Physician time lost to administrative burden and the size of the burden. | Frame as a workflow hypothesis; require time study or provider interviews. |
| HIE — Health Information Exchange | Riayati exists and integrates with Malaffi and NABIDH; e-Claims Post Office supports exchange in northern emirates (S12–S13). | Gaps in facility connectivity, data completeness, access, timeliness or practical interoperability. | Correct prior framing: do not say there is no national unified record. Measure coverage and usability. |
| CTI — Claims & Transaction Infrastructure | Shafafiya web services and Riayati e-Claims infrastructure are documented (S6, S13). | Adoption coverage, reliability, latency and duplicate manual entry. | Keep as infrastructure opportunity; quantify adoption/performance. |
| GRD — Government & Regulatory Data | Regulators publish standards, rules and reporting requirements (S1–S3, S11–S12). | That regulatory data is broadly siloed, inaccessible or inconsistent in practice. | Narrow to a verified catalogue/data-access assessment. |
| PAY — Payment & Reconciliation | Claim-count reconciliation services are documented (S6); instant payments exist (S16). | Payment delays, reconciliation error rates, or suitability of Aani for insurance settlement. | Keep reconciliation as a hypothesis; do not imply Aani is a medical-claims settlement rail. |
| DEC — Decision & Care Outcomes | Claims and clinical governance standards create decision points (S2, S14–S15). | Demonstrated causal links between proposed AI interventions and improved care outcomes. | Keep only as a future measurement layer; no causal benefit claim without outcome data. |

## Evidence still needed across the whole explorer
1. Anonymised operational data: claim rejection/return rates by reason, prior-authorisation turnaround, resubmission counts, payment/reconciliation cycle time.
2. Workflow interviews or time studies with providers, payers, TPAs, brokers, employers and clinicians.
3. Dated and scoped adoption data for eligibility, e-claims, HIE connectivity and transaction infrastructure.
4. Pilot results comparing a baseline with a measured intervention, including human-review and safety controls.

**Scoring note:** the current friction/value/data/decision scores remain analyst judgements. They must not be described as measured market statistics or financial impact.


## October 2026 update log — reviewed 12 October 2026

This is a dated update to the evidence layer. It does **not** certify that every UAE regulator, emirate, policy, circular, or system was exhaustively reviewed. Only the changes below are treated as confirmed from the cited public sources.

### Newly reviewed sources

| ID | Source and date | What it supports | What it does not establish |
|---|---|---|---|
| S17 | DHA, **Electronic Claims Audit Orientation – Health Insurance**, circular CIR-2026-00000162, 2 Sep 2026. https://services.dha.gov.ae/sheryan/wps/portal/home/circular-details?circularRefNo=CIR-2026-00000162&fromHome=true&isPublicCircular=true | DHA has issued claims-audit awareness guidance to licensed healthcare facilities in its jurisdiction; it is relevant to documentation, coding, completeness and claims compliance workflows. | It does not quantify error rates, audit findings, recoveries, avoidable denials, or the business impact of AI. |
| S18 | CBUAE, **Insurance Company Licensing Regulation C 4/2026**, effective 14 Aug 2026. https://rulebook.centralbank.ae/en/entiresection/7304 | Current licensing framework for insurance companies, including governance, risk/internal controls, ICT/cybersecurity, and fair treatment/claims and complaints handling requirements described in the regulation. | It is not evidence of a new health-claims adjudication rule or a change to clinical claim coding rules. Apply it to insurer governance/licensing nodes, not as proof of a claims-processing mandate. |
| S19 | MoHRE guide on existing worker health-insurance procedures, reported by WAM on 23 Jul 2026. https://www.wam.ae/en/article/c1d74f5-mohre-issues-guide-existing-worker-health | The guide clarifies existing procedures linking valid health-insurance verification with issuance/renewal of certain work permits; the report says it did not introduce new employer obligations. | It does not quantify coverage gaps, manual workload, failed checks, or processing-time savings. |
| S20 | DOH Abu Dhabi, current Shafafiya prices/adjudication page, checked 12 Oct 2026. https://www.doh.gov.ae/en/Shafafiya/prices | The live page lists DOH Claims and Adjudication Rules V2025.1 and multiple addenda, alongside current tariff and reimbursement-reform materials. Treat the page as the index for the currently published materials. | The page listing alone does not establish that every listed item applies to every claim, nor does it establish operational pain or financial impact. Review each applicable addendum before implementing rule-specific claims. |

### Confirmed implications for the explorer

- **CADJ / CSUB / HOSP / REG2:** Include the September 2026 DHA claims-audit orientation as a current compliance signal. It strengthens the case for documenting claims checks and audit readiness, but not a claim that errors or losses are widespread.
- **DOH adjudication rules:** The live DOH page now visibly lists version **V2025.1** plus addenda 01–07, including IVF home-visit services, IFHAS 3.0, infusions/injections, stroke payment model, indicators, therapeutic apheresis and ART/PGT. The prior direct V2025 URL should not be treated as the sole source for the current rule set; use S20 as the current index and inspect applicable addenda.
- **Insurer governance / REG2:** CBUAE C 4/2026 is a current licensing/governance source. Do not imply it directly changed medical-claims adjudication without a relevant article or separate circular.
- **ENR / EMPCOV / SPON:** MoHRE's July guide clarifies an existing electronic verification workflow for specified work-permit processes. It supports the existence of a compliance integration point, not a measured eligibility mismatch problem.

### Checks still pending before calling the whole ecosystem “fully updated to October 2026”

1. Search and compare all relevant DOH Abu Dhabi circulars issued in 2026, including whether any affect claims, prior authorisation, tariffs, DRG, or health-information exchange.
2. Review DHA circulars through 12 Oct 2026 by topic, not just by newest date; the public list includes many non-claims circulars that should not be added to claims logic.
3. Check MOHAP/Riayati and emirate HIE sources for a dated 2026 operational update. Existing public Riayati page metrics may be stale and must not be reused as October 2026 figures without a newer dated source.
4. Re-check the relevant CBUAE insurance regulations and the applicable federal legal instruments for any health-insurance-specific amendments after the 2025 Central Bank law.
5. Validate all 19 opportunity cards and the full ecosystem map against the confirmed 2026 changes; avoid describing this commit as exhaustive until those checks are complete.

**Review date:** 12 October 2026. **Scope label:** confirmed update tranche; full-market source audit remains in progress.
