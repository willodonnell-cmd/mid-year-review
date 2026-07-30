import { readFileSync } from 'node:fs'

const app = readFileSync(new URL('../src/App.tsx', import.meta.url), 'utf8')
const specification = readFileSync(new URL('../H1_2026_Mid_Year_Report_FINAL_CODEX_SPEC.md', import.meta.url), 'utf8')
const reportComponent = readFileSync(new URL('../src/components/report.tsx', import.meta.url), 'utf8')
const manifest = readFileSync(new URL('../src/content/report-manifest.ts', import.meta.url), 'utf8')
const sourceMap = readFileSync(new URL('../src/content/executive-summary-source-map.ts', import.meta.url), 'utf8')
const requiredPaths = ['/', '/portfolio-performance', '/portfolio', '/business-unit-acceleration', '/customer-impact', '/business-building', '/scaling-innovation', '/appendix']
const requiredCopy = ['$332.40M', '$492.31M', '1.48x', '10.0%', '56 Total Investments', '161 Ideas Shared Since Innovation Accelerator Launch', 'NVIDIA', 'ID Logistics', 'Ashley Furniture', 'Open PLDV Dashboard', 'Explore the Innovation Accelerator Toolkit']
const requiredCustomerCards = ['NVIDIA', 'ID Logistics', 'DHL', 'DSV', 'Barrett Distribution', 'NFI', 'Ashley Furniture']

const failures = [
  ...requiredPaths.filter((path) => !manifest.includes(`path: '${path}'`)).map((path) => `Missing required route: ${path}`),
  ...requiredCopy.filter((text) => !specification.includes(text)).map((text) => `Missing locked copy: ${text}`),
  ...['Portfolio Performance'].filter((text) => !manifest.includes(text)).map((text) => `Missing required navigation label: ${text}`),
  ...requiredCustomerCards.filter((name) => !specification.includes(`**${name}**`)).map((name) => `Missing approved customer card: ${name}`),
  ...['#top', 'Back to top', 'DashboardMetrics', 'Exact visible copy', 'report-card-grid', 'customer-reach'].filter((value) => !reportComponent.includes(value)).map((value) => `Missing required report behavior: ${value}`),
  ...(app.includes('executiveSummary') ? ['App must render the locked final specification, not the superseded summary content'] : []),
  ...['SRC-001--SRC-033', 'Visible Executive Summary copy must match the canonical DOCX ledger exactly.'].filter((value) => !sourceMap.includes(value)).map((value) => `Missing source map assertion: ${value}`),
  ...['innovation-accelerator/index.html'].filter(() => !readFileSync(new URL('../public/innovation-accelerator/index.html', import.meta.url), 'utf8').includes('The Innovation Accelerator')).map((value) => `Missing report-owned toolkit page: ${value}`),
  ...(!reportComponent.includes("innovationAcceleratorUrl = '/innovation-accelerator/index.html'") ? ['Toolkit CTA must open the embedded Innovation Accelerator HTML page'] : []),
  ...['portfolio-performance/index.html'].filter(() => !readFileSync(new URL('../public/portfolio-performance/index.html', import.meta.url), 'utf8').includes('Prologis Ventures — Portfolio Dashboard')).map((value) => `Missing report-owned Portfolio Performance dashboard: ${value}`),
  ...(!reportComponent.includes("dashboardFrameUrl = '/portfolio-performance/index.html'") ? ['Portfolio Performance must use the report-owned dashboard artifact'] : []),
]

if (failures.length) {
  console.error(failures.join('\n'))
  process.exit(1)
}

console.log('Locked final report content validation passed.')
