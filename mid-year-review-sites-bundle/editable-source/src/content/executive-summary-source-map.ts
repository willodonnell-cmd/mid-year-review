export const executiveSummarySourceMap = {
  source: 'Full Report Draft.docx',
  sourceBlockRange: 'SRC-001--SRC-033',
  sourceRule: 'Visible Executive Summary copy must match the canonical DOCX ledger exactly. Semantic list markup may replace DOCX bullet formatting, but not bullet text or order.',
  fields: [
    'brand',
    'title',
    'paragraphs[0]',
    'paragraphs[1]',
    'paragraphs[2]',
    'paragraphs[3]',
    'paragraphs[4]',
    'paragraphs[5]',
    'dashboardLabel',
    'dashboardItems[0..22]',
  ],
} as const
