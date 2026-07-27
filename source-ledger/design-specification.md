# Phase 2 design specification — Prologis Ventures Mid Year Report – H1 2026

## Scope and authority

This specification governs presentation only. `canonical-source.txt` and `source-ledger.json` remain the authority for all visible report copy, order, values, links, source spelling, uncertainty, and placeholders. The design introduces only navigation, anchors, semantic labels, and plainly labeled interaction controls.

The report is one desktop-first, responsive, long-form internal web page. Its seven top-level sections are reached through anchor navigation; there are no separate report routes, application sidebar, analytics, invented data visualizations, public-marketing treatments, or replacement assets.

## Global page framework

### Masthead and navigation

1. **Utility masthead** — left: `Prologis Ventures`; right: an internal-report context label. This is a structural label, not report copy.
2. **Report masthead** — the exact source title blocks `SRC-001` and `SRC-002`, followed by the opening narrative blocks `SRC-003`--`SRC-008` in source order.
3. **Section navigation** — an accessible horizontal list, directly below the masthead, with exactly: Executive Summary; Portfolio & Financial Performance; Business Unit Acceleration; Customer Access & Commercial Impact; Business Building & Incubation; Scaling & Commercializing Innovation; Appendix.

On large screens, the two navigation levels remain visible at the top while reading. On narrow screens, the section list becomes a horizontally scrollable landmark with visible focus treatment; it must never become a hidden or icon-only menu.

### Visual language

- White page field; deep teal for primary type and dividers; restrained mint only for emphasis, active navigation, and small source-status labels.
- A generous single reading column for prose, centered within a wider desktop canvas. Narrative measure should remain comfortable rather than filling the full viewport.
- Editorial hierarchy: large compact title, medium-weight section headings, smaller tracked labels, normal-weight prose, thin rules, and deliberate whitespace.
- Use system-available sans and serif fallbacks only; no external font, stock photography, decorative illustration, or logo source is introduced.
- Avoid dashboard-card grids. A source-backed evidence band is permitted only for the exact Dashboard bullet groups; it is a structured reading aid, not a new KPI system.

### Reusable presentation patterns

| Pattern | Use | Source fidelity rule |
| --- | --- | --- |
| Editorial narrative | Introductory and long-form source paragraphs | Preserve paragraph boundaries and order. |
| Evidence band | Exact dashboard bullets, grouped only as the source already groups them | No new metrics, labels, totals, deltas, or chart claims. |
| Source bullet list | Portfolio wins, summit insights, customer engagement, appendix | Preserve bullet text and bullet order. |
| Source graphic figure | EMB-001, EMB-002, EMB-003 | Use the supplied image without recreating or interpreting values; add approved accessible text only. |
| Honest placeholder | Missing dashboard, missing logos, unresolved links, potential authoring artifacts | Explicitly label the unresolved source component; no substitute content. |

## Page and section specifications

### 1. Executive Summary

- **Source blocks:** SRC-001--SRC-033.
- **Order:** source title; opening narrative; exact `Dashboard (Insert Rajeev Codex Site)` label; dashboard bullets in source order.
- **Presentation:** a wide editorial title/lede followed by one evidence band. The dashboard's supplied grouping hierarchy is retained: performance, investment activity, strategic value, and major highlights. Do not convert it into a comparative chart or change the order of its bullets.
- **Placeholder treatment:** `SRC-009` displays as a visibly bounded, text-only source placeholder. `SRC-014` (`2026 Investments (logos)`) is a text-only item; no logos are added.
- **Responsive behavior:** title and narrative remain single column; evidence-band groups stack in source order; values never clip or abbreviate.
- **Dependencies:** preserve all spelling variants and the `$332M` / `$474M` / `1.43x` / `9.1%+` source values exactly.

### 2. Portfolio & Financial Performance

- **Source blocks:** SRC-034--SRC-060; EMB-001--EMB-002.
- **Order:** source top-level heading; Market Context and Strategic Positioning; Portfolio & Financial Performance; Table 1 label and EMB-001; Table 2 label and EMB-002; Fund Investments; Exit Outlook; Portfolio Wins.
- **Presentation:** narrative sections in the reading column; graphics as full-width figures aligned to the column edges; Portfolio Wins as the source bullet list. Use an unstyled, visible sensitivity marker near the Exit Outlook heading only if it exactly repeats the source's own forward-looking language—not a new warning or interpretation.
- **Placeholder treatment:** no native HTML table is inferred from the embedded images. `Top of Form` and `Bottom of Form` remain a plain, labeled review dependency until their status is approved.
- **Responsive behavior:** figures scale within the viewport without horizontal scrolling; provide a source-faithful accessible alternate only after approval. Bullets preserve line wrapping but not order changes.
- **Dependencies:** do not reconcile the dashboard values, embedded-graphic totals, or portfolio-count framings. Forward-looking and transaction statements need review before external publication.

### 3. Business Unit Acceleration

- **Source blocks:** SRC-061--SRC-074.
- **Order:** source heading; Operating Essentials; Development; Data Centers; Energy & Sustainability, each followed by its source narrative.
- **Presentation:** four editorial subsections separated by thin rules and substantial vertical spacing. No metric cards or supplemental diagrams are introduced.
- **Placeholder treatment:** none beyond normal source-aware rendering.
- **Responsive behavior:** a single reading column at all widths; headings do not detach from their following paragraphs.
- **Dependencies:** preserve company/product spelling exactly, including `XNRGY` / `XNERGY` and `FulfillmentIQ` / `FIQ` variants; retain LOI and projected-work language as written.

### 4. Customer Access & Commercial Impact

- **Source blocks:** SRC-075--SRC-103.
- **Order:** source heading; DashBoard bullets; PrologisNext narrative; Executive AI Scaling Forum narrative; quotation; Innovators Summit narrative; Key Summit insights; customer-engagement bullets; research narrative; research takeaways.
- **Presentation:** the DashBoard bullets use an evidence band; all remaining prose uses the editorial column. Set the source quotation as a typographic pull quote without altering its words or attribution. Use the two later bullet groups as source bullet lists.
- **Placeholder treatment:** SRC-080 remains a text-only logo-graphic placeholder. SRC-085, SRC-099, and any other unlinked `here` / `Click here` language remain visibly unresolved; no anchor is fabricated.
- **Responsive behavior:** evidence-band items stack, quotation maintains sufficient contrast and readable line length, and bullet lists retain order.
- **Dependencies:** no customer logo, company mark, or external destination is introduced. Preserve the differing `50` and `50+` organization statements.

### 5. Business Building & Incubation

- **Source blocks:** SRC-104--SRC-114; EMB-003.
- **Order:** section opening narrative; CrossDock Studios process narrative; Workbench heading and two source paragraphs; EMB-003 in its DOCX anchor position; WareSight heading/narrative; Zynque heading/narrative.
- **Presentation:** the opening establishes a long-form narrative; the three named incubations become sequential editorial subsections. EMB-003 is a full-width source figure, not a product-demo or interactive mockup.
- **Placeholder treatment:** EMB-003 requires approved accessible text before implementation; do not generate a description based on visual inference alone.
- **Responsive behavior:** the source image scales proportionally; its visual content does not become a horizontally scrollable canvas.
- **Dependencies:** preserve `Waresight` and `WareSight` exactly where each appears, and retain prospective language around product delivery and fundraising.

### 6. Scaling & Commercializing Innovation

- **Source blocks:** SRC-115--SRC-124.
- **Order:** source heading; Building a Repeatable Innovation Capability; Self-Service Resources; Supporting Enterprise AI; Elevating High Impact Initiatives; final `Learn more` line.
- **Presentation:** four editorial subsections, one source paragraph or block each, separated by thin rules. The final `Learn more` sentence is retained as text, with an honest unresolved-link label until the destination is supplied.
- **Responsive behavior:** standard single-column reading flow; no accordions are necessary because the source blocks are short.
- **Dependencies:** preserve the source's uncertainty and wording; no new resource list or GPT links are introduced.

### 7. Appendix

- **Source blocks:** SRC-125--SRC-128.
- **Order:** source heading followed by the exact source-provided URL bullets.
- **Presentation:** a compact, high-legibility source list. Display each URL exactly as supplied and preserve its link target; no preview cards, site metadata, or external summaries.
- **Responsive behavior:** long URLs wrap safely without horizontal overflow; links have descriptive accessible names formed from the adjacent source label plus the exact URL.
- **Dependencies:** source URLs remain unchanged.

## Interaction and accessibility specification

- Use `<header>`, `<nav aria-label="Report sections">`, `<main>`, one `<section>` per top-level report area, and `<footer>` for structural information only.
- Maintain one H1 (the source report title), H2 for top-level section headings, and H3 for source subsection headings. Navigation labels do not change heading levels.
- Every anchor target must have an offset that prevents the sticky masthead from obscuring its section heading.
- Provide visible keyboard focus for nav links and all source links. Navigation must support Tab, Shift+Tab, Enter, and Space where the control type requires it.
- Meet WCAG AA contrast for body text, rules, active state, focus indicator, and placeholder labels. Mint is never the sole signal of state.
- Source figures require alt text only when approved from an authoritative description. Until then, they remain visibly labeled review dependencies rather than receiving invented alternative text.
- Use responsive image sizing, `max-width: 100%`, safe URL wrapping, and no viewport-fixed content width. Horizontal overflow is prohibited except where an approved future source table specifically requires an accessible overflow wrapper.
- Do not use automatic carousels, auto-expanding details, animation-dependent meaning, hover-only controls, or icon-only navigation.

## Phase 3 implementation acceptance criteria

Implementation may begin only when the source map, conflict register, and this specification remain unchanged or an approved revision is recorded. Before handoff, validate that every canonical source block is rendered once in source order; every supplied URL retains its target; every missing asset/link is plainly labeled; no DOCX comment becomes visible copy; and no source discrepancy is silently normalized.
