# Phase 1 conflict and ambiguity register

The DOCX body text is the authority for visible report content. The items below are not resolved in this phase; no source wording, value, asset, link, or comment was changed.

| ID | Source blocks / artifact | Finding | Required handling |
| --- | --- | --- | --- |
| CR-001 | Existing `src/content/executive-summary.ts` vs. DOCX | The existing app uses a different report title, rewritten executive copy, and different dashboard values (for example `$301M`, `1.44x`, `11%+`, `~$23M+`, and `$76.3M`). | The DOCX supersedes this app content for any future implementation. Do not merge or reconcile values. |
| CR-002 | SRC-010--SRC-013; EMB-001; EMB-002 | The dashboard reports `$332M`, `$474M`, `1.43x`, and `9.1%+`; the embedded financial graphics show different investment/current-value totals. The document does not provide a common definition that reconciles them. | Preserve each statement in its original location and format; add no reconciliation. |
| CR-003 | SRC-019; SRC-040; EMB-001; EMB-002 | Portfolio counts differ by framing: `56 Total Investments`, `42 active companies`, fund positions, RIPs, exits, and graphic transaction/company counts. | Preserve the stated denominator and label with each source block. |
| CR-004 | SRC-005, SRC-015, SRC-030, SRC-063, SRC-104, SRC-110--SRC-111 | The source spells related company/product names differently: `Fulfillment IQ`/`FulfillmentIQ`, `FiQ`/`FIQ`, and `Waresight`/`WareSight`. | Preserve source spelling in every block; do not standardize. |
| CR-005 | SRC-006, SRC-048, SRC-055, SRC-070 | The source uses both `XNERGY` and `XNRGY`. | Preserve source spelling in every block; do not standardize. |
| CR-006 | SRC-028, SRC-040, SRC-053 | `Workstep`, `WorkStep`, `Learningpool`, `LearningPool`, and `Learning Pool` appear in the DOCX. | Preserve source spelling/capitalization in every block; do not standardize. |
| CR-007 | SRC-007; SRC-077 | Customer-organization count is stated as `50` in narrative and `50+` in the dashboard. | Preserve both statements; do not normalize. |
| CR-008 | SRC-009 | `Dashboard (Insert Rajeev Codex Site)` is an explicit source placeholder. | Render only an honest labeled placeholder unless an approved dashboard source is supplied. |
| CR-009 | SRC-014, SRC-080 | The DOCX refers to a 2026-investment logo treatment and an organizations-engaged logo graphic, but no corresponding logo assets are embedded. | Keep text-only labeled placeholders; do not source or generate logos. |
| CR-010 | SRC-041, EMB-001; SRC-042, EMB-002 | The DOCX contains two source-supplied embedded graphics rather than native Word tables. Both have no alternative text. | Preserve the images if approved; obtain accessible descriptions before implementation. Do not recreate their values as invented tables. |
| CR-011 | SRC-083 | The display text `here.` is linked to the Box URL recorded in `source-ledger.json`. | Preserve the exact display text and target URL. |
| CR-012 | SRC-085, SRC-099, SRC-123 | `Click here`, `found here`, and `Learn more ... here` have no matching hyperlink relationship in the DOCX. | Keep as labeled unresolved placeholders or obtain target URLs; do not guess destinations. |
| CR-013 | SRC-050--SRC-051 | `Top of Form` / `Bottom of Form` are present in extracted body text and may be authoring artifacts. | Do not silently remove; obtain approval before treating them as non-content. |
| CR-014 | Embedded DOCX comments (21) | The DOCX includes review comments that propose edits, request fact checks, question links/assets, and suggest presentation changes. They are not visible report body content and conflict with the immutable-body instruction if adopted without approval. | Do not render or action comments as source copy. Treat as approval dependencies. |
| CR-015 | SRC-046--SRC-049, SRC-055, SRC-089--SRC-095, SRC-107, SRC-111, SRC-113 | The DOCX contains forward-looking, transaction, valuation, LOI, prospective-exit, and customer-commitment statements. | Preserve their wording exactly; flag for appropriate legal, communications, and executive review before any external publication. |

## DOCX comment inventory (non-visible annotations)

`CMT-0`, `CMT-1`, `CMT-2`, `CMT-3`, `CMT-4`, `CMT-5`, `CMT-6`, `CMT-18`, `CMT-19`, `CMT-22`, `CMT-23`, `CMT-24`, `CMT-25`, `CMT-26`, `CMT-27`, `CMT-28`, `CMT-35`, `CMT-47`, `CMT-48`, `CMT-49`, and `CMT-1925522850` remain unresolved review annotations. Notable open requests include fact-checking, the non-working link, missing stronger photos/video, exit-outcome ranges, and proposed additional commercial claims. None is adopted into the canonical ledger.
