import type { NavigationItem } from '../content/report-manifest'

const dashboardUrl = 'https://pldv-portfolio-dashboard-jul27.prologis.chatgpt.site/'
const innovationAcceleratorUrl = 'https://prologis.app.box.com/file/2362469606121?s=hlyiswwy8ncityn5p7g19fgkh9oyvz68'
const layoutHeading = 'Layout'
const metadataHeadings = new Set(['Exact visible copy', 'Dashboard metric presentation', 'Innovation Accelerator Toolkit callout'])

export function SiteShell({ children }: { children: React.ReactNode }) {
  return <div id="top" className="site-shell">{children}</div>
}

export function ReportNavigation({ items, activePath }: { items: NavigationItem[]; activePath: string }) {
  return <nav className="report-nav" aria-label="Report sections">
    <ul>{items.map((item) => <li key={item.path}><a href={item.path} aria-current={item.path === activePath ? 'page' : undefined}>{item.label}</a></li>)}</ul>
  </nav>
}

const dashboardGroups = [
  {
    title: 'Portfolio Performance',
    kind: 'cards',
    metrics: [
      ['Ventures invested capital', '$332.40M', 'Ventures direct equity + reconciled LP calls'],
      ['Ventures current value', '$492.31M', '$159.91M value creation'],
      ['Ventures gross MOIC', '1.48x', 'Corporate Development excluded'],
      ['Ventures calculated XIRR', '10.0%', ''],
    ],
  },
  {
    title: '2026 Investment Activity',
    kind: 'cards',
    metrics: [
      ['', '5 New:', 'FIQ, Paebbl, Walden, Unit AI, Anori'],
      ['', '1 Follow-On:', 'Gideon'],
      ['', '3 Funds:', 'TMV, Rethink, Schematic'],
    ],
  },
  {
    title: 'Strategic Value of Portfolio',
    kind: 'compact',
    metrics: [
      ['56', 'Total Investments', ''], ['33+', 'Serving PLD Customers', ''], ['24+', 'Serving PLD BU’s', ''],
      ['2', 'Idle/Stealth', ''], ['8', 'Portcos on Essentials Marketplace', ''], ['2', 'PLD Pilots Initiated with Portcos in 2026', ''], ['3', 'Portfolio Companies Leasing Space from Prologis', ''],
    ],
  },
  {
    title: 'Major Highlights',
    kind: 'compact',
    metrics: [
      ['308', 'Customers Engaged by PrologisNext', ''], ['Workstep', 'acquired by Learningpool', ''], ['3', 'Incubations in CrossDock Studios: Workbench, Waresight, Zynque', ''],
      ['9', 'Customers Co-invested: Toyota, NVIDIA, Samsung, CoreWeave, Amazon, General Motors, Koch Industries, Microsoft, Saint-Gobain', ''], ['161', 'Ideas Shared Since Innovation Accelerator Launch', ''],
    ],
  },
] as const

export function DashboardMetrics() {
  return <main className="report-page report-document dashboard-page">
    <div className="report-section-heading"><h1>Dashboard Metrics</h1><a className="back-to-top" href="#top">Back to top</a></div>
    {dashboardGroups.map((group) => <section className={`dashboard-group dashboard-group--${group.kind}`} key={group.title}>
      <h2>{group.title}</h2>
      <div className="dashboard-group__metrics">
        {group.metrics.map(([label, value, detail]) => <article className="dashboard-metric" key={`${label}-${value}`}>
          {group.kind === 'cards' && label && <p className="dashboard-metric__label">{label}</p>}
          <strong>{value}</strong>
          <span>{group.kind === 'cards' ? detail : label}</span>
        </article>)}
      </div>
    </section>)}
  </main>
}

function inline(text: string): React.ReactNode[] {
  const parts = text.split(/(\[[^\]]+\]\([^)]+\)|\*\*[^*]+\*\*)/g)
  return parts.filter(Boolean).map((part, index) => {
    const link = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/)
    if (link) return <a key={index} href={link[2]}>{link[1]}</a>
    if (part.startsWith('**') && part.endsWith('**')) return <strong key={index}>{part.slice(2, -2)}</strong>
    return part
  })
}

function sectionId(title: string) {
  return title.toLowerCase().replace(/&/g, 'and').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')
}

function isInstruction(line: string) {
  return line.startsWith('**Button label:**') || line.startsWith('**Button URL:**') ||
    line.startsWith('**Linked-page requirement:**') || line.startsWith('**Source HTML:**') ||
    line.startsWith('**Rules for the linked page:**')
}

function CallToAction({ kind }: { kind: 'dashboard' | 'toolkit' }) {
  return <a className="report-button" href={kind === 'dashboard' ? dashboardUrl : innovationAcceleratorUrl}>{kind === 'dashboard' ? 'Open PLDV Dashboard' : 'Explore the Innovation Accelerator Toolkit'}</a>
}

function ToolkitCallout({ text }: { text: string }) {
  return <section className="toolkit-callout"><div><p>{inline(text)}</p><CallToAction kind="toolkit" /></div><img className="toolkit-callout__image" src="/innovation-accelerator-team.png" alt="Prologis team collaborating on an innovation initiative" /></section>
}

function MarkdownReport({ source, section }: { source: string; section: string }) {
  const lines = source.split('\n')
  const sectionStart = lines.findIndex((line) => line.replace(/^# \d+\.\s*/, '') === section)
  const nextSection = lines.findIndex((line, index) => index > sectionStart && /^# \d+\.\s/.test(line))
  const body = lines.slice(sectionStart, nextSection === -1 ? undefined : nextSection)
  const nodes: React.ReactNode[] = []
  const cardSections = new Set(['Portfolio Wins', 'Key Summit Insights', 'Customer Engagement Resulting from the Summit in H1'])
  const exitOutlookTitles = new Set(['Kolors and SVT Robotics', 'XNRGY', 'Locus Robotics and FORT Robotics'])
  let cardGrid: React.ReactNode[] | null = null
  let cardGridClass = 'report-card-grid'
  let activeCardSection: string | null = null
  let pendingCardTitle: string | null = null
  let pendingExitOutlookTitle: string | null = null
  let metricListKind: 'cards' | 'compact' | null = null
  let hideExecutiveDashboard = false
  let executiveParagraphCount = 0
  const flushCards = () => {
    if (cardGrid) nodes.push(<div className={cardGridClass} key={`cards-${nodes.length}`}>{cardGrid}</div>)
    cardGrid = null
    cardGridClass = 'report-card-grid'
    activeCardSection = null
    pendingCardTitle = null
    pendingExitOutlookTitle = null
  }
  let hidden = false
  let index = 0

  while (index < body.length) {
    const line = body[index]
    if (line === '# Acceptance criteria and final completion report') break
    const heading = line.match(/^(#{1,3})\s+(.+)$/)
    if (heading) {
      const level = heading[1].length
      let title = heading[2].replace(/^\d+\.\s*/, '').replace(/^Group \d+ —\s*/, '')
      const metadata = metadataHeadings.has(title)
      const instruction = title === layoutHeading || metadata
      if (!instruction) flushCards()
      if (title === 'Dashboard metric presentation') {
        hideExecutiveDashboard = true
        index += 1
        continue
      }
      if (hideExecutiveDashboard) { index += 1; continue }
      hidden = title === layoutHeading
      if (metadata) hidden = false
      if (!hidden && !metadata) {
        const Tag = level === 1 ? 'h1' : level === 2 ? 'h2' : 'h3'
        nodes.push(level === 1
          ? <div className="report-section-heading" key={`h-${index}`}><Tag id={sectionId(title)}>{title}</Tag><a className="back-to-top" href="#top">Back to top</a></div>
          : <Tag key={`h-${index}`}>{title}</Tag>)
        if (level === 2 && cardSections.has(title)) {
          cardGrid = []
          activeCardSection = title
          cardGridClass = title === 'Key Summit Insights'
            ? 'report-card-grid report-card-grid--three'
            : title === 'Portfolio Wins' ? 'report-card-grid report-card-grid--wins' : 'report-card-grid'
        }
        if (title === 'Portfolio & Financial Performance') {
          nodes.push(<figure className="portfolio-unit-bot" key={`unit-bot-${index}`}><img src="/unit-bot.avif" alt="Unit AI humanoid robot" /><figcaption>Unit Bot</figcaption></figure>)
        }
        if (title === 'Executive AI Scaling Forum') nodes.push(<figure className="report-photo report-photo--forum" key={`forum-${index}`}><img src="/prologisnext-forum.jpg" alt="PrologisNext Executive AI Scaling Forum" /></figure>)
        if (title === 'PrologisNext Innovators Summit') nodes.push(<figure className="report-photo report-photo--summit" key={`summit-${index}`}><img src="/prologisnext-summit-panel.jpg" alt="PrologisNext Innovators Summit panel" /></figure>)
        if (title === 'Workbench') nodes.push(<figure className="workbench-visual" key={`workbench-${index}`}><img src="/workbench-warehouse-software.png" alt="Warehouse software and Workbench visual" /></figure>)
      }
      metricListKind = title === 'Portfolio Performance' || title === '2026 Investment Activity'
        ? 'cards'
        : title === 'Strategic Value of Portfolio' || title === 'Major Highlights'
          ? 'compact'
          : level <= 2 ? null : metricListKind
      index += 1
      continue
    }
    if (hideExecutiveDashboard || hidden || !line.trim() || line === '---' || isInstruction(line)) { index += 1; continue }
    if (line.startsWith('|')) {
      const rows: string[][] = []
      while (index < body.length && body[index].startsWith('|')) {
        const cells = body[index].split('|').slice(1, -1).map((cell) => cell.trim())
        if (!cells.every((cell) => /^:?-{3,}:?$/.test(cell))) rows.push(cells)
        index += 1
      }
      nodes.push(<div className="customer-reach customer-reach--inline" key={`table-${index}`}>{rows.slice(1).map((row) => <div className="customer-reach__item" key={row[1]}><strong>{row[0]}</strong><span>{row[1]}</span></div>)}</div>)
      continue
    }
    if (line.startsWith('- ')) {
      const items: string[] = []
      while (index < body.length && body[index].startsWith('- ')) { items.push(body[index].slice(2)); index += 1 }
      const listClass = metricListKind ? `report-list report-list--${metricListKind}` : undefined
      nodes.push(<ul className={listClass} key={`list-${index}`}>{items.map((item, itemIndex) => <li key={itemIndex}>{inline(item)}</li>)}</ul>)
      continue
    }
    if (line.startsWith('>')) {
      const quote: string[] = []
      while (index < body.length && body[index].startsWith('>')) { const entry = body[index].replace(/^>\s?/, '').trim(); if (entry) quote.push(entry); index += 1 }
      const attribution = quote.find((entry) => entry.startsWith('—'))
      nodes.push(<blockquote key={`quote-${index}`}><p>{inline(quote.filter((entry) => !entry.startsWith('—')).join(' '))}</p>{attribution && <footer>{attribution}</footer>}</blockquote>)
      continue
    }
    const paragraph: string[] = []
    while (index < body.length && body[index].trim() && !body[index].startsWith('#') && !body[index].startsWith('|') && !body[index].startsWith('- ') && !body[index].startsWith('> ')) { paragraph.push(body[index]); index += 1 }
    // The approved report uses Markdown's two trailing spaces for line breaks.
    // Trim them before matching a bold company name as a Portfolio Wins card title.
    const text = paragraph.join(' ').trim()
    if (text.startsWith('NVIDIA · DHL · IKEA ·')) {
      const names = text.split(' · ')
      const domains: Record<string, string> = { NVIDIA: 'nvidia.com', DHL: 'dhl.com', IKEA: 'ikea.com', PepsiCo: 'pepsico.com', Dell: 'dell.com', Maersk: 'maersk.com', GXO: 'gxo.com', DSV: 'dsv.com', GEODIS: 'geodis.com', Ryder: 'ryder.com', NFI: 'nfiindustries.com', 'Ashley Furniture': 'ashleyfurniture.com', Chobani: 'chobani.com', WESCO: 'wesco.com', 'ID Logistics': 'id-logistics.com', Averitt: 'averitt.com', 'Barrett Distribution Centers': 'barrettdistribution.com', Glossier: 'glossier.com' }
      const logoSources: Record<string, string> = {
        NVIDIA: 'https://iprsoftwaremedia.com/219/files/202512/nvidia-logo-horiz-blk-16x9%201.png?download=true',
        DHL: 'https://www.dhl.com/content/dam/dhl/global/core/images/logos/dhl-logo.svg',
        Ryder: '/ryder-logo.png',
      }
      nodes.push(<div className="customer-logos" key={`logos-${index}`}>{names.map((name) => <div className="customer-logo" key={name}><img src={logoSources[name] ?? `https://logo.clearbit.com/${domains[name]}?size=512`} alt={`${name} logo`} onLoad={(event) => event.currentTarget.parentElement?.classList.add('customer-logo--with-image')} onError={(event) => {
        const image = event.currentTarget
        if (image.dataset.fallback === 'true') { image.style.display = 'none'; return }
        image.dataset.fallback = 'true'
        image.src = `https://www.google.com/s2/favicons?domain=${domains[name]}&sz=256`
      }} /><span>{name}</span></div>)}</div>)
      continue
    }
    const inlineCard = text.match(/^\*\*([^*]+)\*\*\s+(.+)$/)
    if (inlineCard && cardGrid && activeCardSection === 'Portfolio Wins') {
      const [, title, copy] = inlineCard
      const description = copy.replace(new RegExp(`^${title.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')},?\\s*`), '')
      cardGrid.push(<article className="report-card" key={`${title}-${index}`}><p className="portfolio-win-copy"><strong>{title}</strong>{' '}{inline(description)}</p></article>)
    } else {
      const cardTitle = text.match(/^\*\*([^*]+)\*\*$/)
      if (cardTitle && cardGrid) pendingCardTitle = cardTitle[1]
    else if (cardTitle && exitOutlookTitles.has(cardTitle[1])) pendingExitOutlookTitle = cardTitle[1]
    else if (cardTitle) {
      nodes.push(<h3 className="report-card-title" key={`card-${index}`}>{cardTitle[1]}</h3>)
    }
    else {
      if (pendingExitOutlookTitle) {
        const description = text.replace(new RegExp(`^${pendingExitOutlookTitle.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')},?\\s*`), '')
        nodes.push(<article className="exit-outlook-card" key={`${pendingExitOutlookTitle}-${index}`}><p><strong>{pendingExitOutlookTitle}</strong>{' '}{inline(description)}</p></article>)
        pendingExitOutlookTitle = null
      } else if (cardGrid && pendingCardTitle) {
        const isPortfolioWin = activeCardSection === 'Portfolio Wins'
        const description = isPortfolioWin
          ? text.replace(new RegExp(`^${pendingCardTitle.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')},?\\s*`), '')
          : text
        cardGrid.push(<article className="report-card" key={`${pendingCardTitle}-${index}`}>
          {isPortfolioWin
            ? <p className="portfolio-win-copy"><strong>{pendingCardTitle}</strong>{' '}{inline(description)}</p>
            : <><h3>{pendingCardTitle}</h3><p>{inline(description)}</p></>}
        </article>)
        pendingCardTitle = null
      } else {
        const callout = text.match(/^\*\*([^*]+)\*\*\s+(.+)$/)
        if (text.startsWith('With the Prologis Sustainability team,')) nodes.push(<figure className="report-photo report-photo--paebbl" key={`paebbl-${index}`}><img src="/paebbl-facility.png" alt="Paebbl low-carbon concrete facility" /></figure>)
        nodes.push(text.startsWith('Explore the Innovation Accelerator toolkit')
          ? <ToolkitCallout key={`toolkit-${index}`} text={text} />
          : callout ? <article className="readable-callout" key={`callout-${index}`}><h3>{callout[1]}</h3><p>{inline(callout[2])}</p></article> : <p key={`p-${index}`}>{inline(text)}</p>)
        if (!callout && section === 'Executive Summary') {
          executiveParagraphCount += 1
          if (executiveParagraphCount === 1) nodes.push(<figure className="report-photo report-photo--walden" key={`walden-${index}`}><img src="/walden-humanoid.jpg" alt="Walden humanoid robot" /><figcaption>Walden Humanoid</figcaption></figure>)
        }
      }
      if (text.startsWith('Detailed portfolio reporting,')) nodes.push(<CallToAction key={`dashboard-${index}`} kind="dashboard" />)
    }
    }
  }
  flushCards()
  return <main className="report-page report-document">{nodes}</main>
}

export function FullReport({ source, section }: { source: string; section: string }) {
  return <MarkdownReport source={source} section={section} />
}
