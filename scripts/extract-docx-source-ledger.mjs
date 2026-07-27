import { createHash } from 'node:crypto'
import { execFileSync } from 'node:child_process'
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { basename, resolve } from 'node:path'

const [inputPath, outputDir = 'source-ledger'] = process.argv.slice(2)

if (!inputPath) {
  throw new Error('Usage: node scripts/extract-docx-source-ledger.mjs <source.docx> [output-dir]')
}

const sourcePath = resolve(inputPath)
const destination = resolve(outputDir)
const sourceBytes = readFileSync(sourcePath)
const sourceText = execFileSync('textutil', ['-convert', 'txt', '-stdout', sourcePath], {
  encoding: 'utf8',
})
  .replace(/\r\n/g, '\n')
  .replace(/^\uFEFF/, '')
  .trimEnd()

const sectionHeadings = new Set([
  'Portfolio & Financial Performance',
  'Business Unit Acceleration',
  'Customer Access & Commercial Impact',
  'Business Building & Incubation',
  'Scaling & Commercializing Innovation',
  'Appendix',
])

const subsectionHeadings = new Set([
  'Market Context and Strategic Positioning',
  'Fund Investments',
  'Exit Outlook',
  'Portfolio Wins',
  'Operating Essentials',
  'Development',
  'Data Centers',
  'Energy & Sustainability',
  'DashBoard',
  'PrologisNext',
  'Workbench',
  'WareSight',
  'Zynque',
  'Building a Repeatable Innovation Capability',
  'Self-Service Resources',
  'Supporting Enterprise AI',
  'Elevating High Impact Initiatives',
])

const embeddedAssets = new Map([
  ['Table 1: Investments by Year (Inclusive of Warrants, Excluding Fund Investments)', {
    id: 'EMB-001',
    description: 'Source-supplied embedded graphic: PLDV transaction bridge (image2.png).',
    status: 'approval_required',
    note: 'Graphic has no DOCX alternative text; its visible values must be retained if approved for implementation.',
  }],
  ['Table 2: Investments by Fund Vintage: Below is a table illustrating fund performance to-date.', {
    id: 'EMB-002',
    description: 'Source-supplied embedded graphic: Fund comparison (image1.png).',
    status: 'approval_required',
    note: 'Graphic has no DOCX alternative text; its visible values must be retained if approved for implementation.',
  }],
  ['But the larger opportunity for Workbench is far more significant. Workbench will become a true digital twin and simulation engine for warehouse operations. Developed alongside NVIDIA on the Omniverse platform, Prologis will be able to simulate automation strategies, warehouse layouts, labor models, throughput, and network decisions before making physical investments. As more customer and operational data is incorporated into the platform, Workbench will become the operating system for warehouse operations. Prologis can help a customer model their entire network, compare investment scenarios, and simulate operational performance before spending a dollar on infrastructure or automation. This positions Prologis as a trusted partner in helping customers make critical decisions, creating a significant new software and advisory revenue opportunity while increasing pull-through across Operations Essentials and more.', {
    id: 'EMB-003',
    description: 'Source-supplied embedded graphic: Workbench product visual (image3.png), anchored to this paragraph.',
    status: 'approval_required',
    note: 'Graphic has no DOCX alternative text; a faithful accessible description requires approval.',
  }],
])

function sha256(value) {
  return createHash('sha256').update(value).digest('hex')
}

function classify(text) {
  if (sectionHeadings.has(text)) return { presentationType: 'top_level_heading', status: 'ready' }
  if (subsectionHeadings.has(text)) return { presentationType: 'subsection_heading', status: 'ready' }
  if (text === 'Prologis Ventures' || text === 'Mid Year Report – H1 2026') return { presentationType: 'report_title', status: 'ready' }
  if (/^\s*•\s/.test(text)) return { presentationType: 'bullet', status: 'ready' }
  if (/Dashboard \(Insert Rajeev Codex Site\)|\(logos\)|logo graphic/.test(text)) return { presentationType: 'source_placeholder', status: 'missing_asset' }
  if (/Click here|found here\.$|Learn more .* here\.$|Top of Form|Bottom of Form/.test(text)) return { presentationType: 'source_placeholder', status: 'approval_required' }
  if (/^Table [12]:/.test(text)) return { presentationType: 'table_label', status: 'ready' }
  if (/^Key Summit insights:|^Customer engagement resulting from the Summit in H1:/.test(text)) return { presentationType: 'source_label', status: 'ready' }
  return { presentationType: 'paragraph', status: 'ready' }
}

const lines = sourceText.split('\n').filter((line) => line.trim() !== '')
let section = 'Executive Summary'
let order = 0
const entries = []

for (const text of lines) {
  if (sectionHeadings.has(text)) section = text
  order += 1
  const detail = classify(text)
  entries.push({
    blockId: `SRC-${String(order).padStart(3, '0')}`,
    sourceOrder: order,
    intendedWebsiteSection: section,
    presentationType: detail.presentationType,
    status: detail.status,
    exactSourceText: text,
  })

  const asset = embeddedAssets.get(text)
  if (asset) {
    order += 1
    entries.push({
      blockId: asset.id,
      sourceOrder: order,
      intendedWebsiteSection: section,
      presentationType: 'embedded_graphic',
      status: asset.status,
      exactSourceText: asset.description,
      note: asset.note,
    })
  }
}

const manifest = {
  schemaVersion: 1,
  source: {
    fileName: basename(sourcePath),
    sha256: sha256(sourceBytes),
    extractionMethod: 'macOS textutil -convert txt -stdout, normalized to LF line endings and no terminal newline',
    canonicalTextSha256: sha256(sourceText),
  },
  hyperlinks: [
    {
      displayText: 'here.',
      target: 'https://prologis.box.com/s/hlyiswwy8ncityn5p7g19fgkh9oyvz68',
      status: 'ready',
    },
    {
      displayText: 'Walden Investment Article URL',
      target: 'https://www.dcvelocity.com/material-handling/robotics/walden-robotics-launches-humanoid-robots-for-manufacturing-and-logistics',
      status: 'ready',
    },
    {
      displayText: 'PLDV Invests in TMV WSJ Article URL',
      target: 'https://www.wsj.com/logistics-report/venture-fund-launches-200-million-bet-on-u-s-maritime-revival-640f94a4',
      status: 'ready',
    },
  ],
  entries,
}

mkdirSync(destination, { recursive: true })
writeFileSync(resolve(destination, 'canonical-source.txt'), `${sourceText}\n`)
writeFileSync(resolve(destination, 'source-ledger.json'), `${JSON.stringify(manifest, null, 2)}\n`)
writeFileSync(resolve(destination, 'README.md'), `# Canonical source ledger\n\n- Source file: ${manifest.source.fileName}\n- DOCX SHA-256: \`${manifest.source.sha256}\`\n- Canonical plaintext SHA-256: \`${manifest.source.canonicalTextSha256}\`\n- Extracted blocks: ${entries.length}\n- Extraction method: ${manifest.source.extractionMethod}\n\nThis directory is a Phase 1 source-fidelity artifact. It is not report implementation content.\n`)

console.log(JSON.stringify({ outputDir: destination, blocks: entries.length, ...manifest.source }, null, 2))
