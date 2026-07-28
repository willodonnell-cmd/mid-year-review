import type { NavigationItem } from '../content/report-manifest'

const dashboardUrl = 'https://pldv-portfolio-dashboard-jul27.prologis.chatgpt.site/'
// The toolkit is a report-owned static experience, sourced from Box file 2362469606121.
const innovationAcceleratorUrl = '/innovation-accelerator/index.html'
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

const chapterDirectory = [
  { path: '/portfolio', label: 'Portfolio Update', external: false },
  { path: dashboardUrl, label: 'Portfolio Performance', external: true },
  { path: '/business-building', label: 'Launched New Businesses', external: false },
  { path: '/business-unit-acceleration', label: 'Supporting Growth Across Prologis', external: false },
  { path: '/customer-impact', label: 'Driving Customer Engagement', external: false },
  { path: '/scaling-innovation', label: 'Accelerating Innovation', external: false },
  { path: '/appendix', label: 'Appendix', external: false },
] as const

const chapterFlow = [
  { path: '/', label: 'Executive Overview' },
  ...chapterDirectory,
] as const

const customerOrganizations = [
  { name: 'NVIDIA', sources: ['https://cdn.simpleicons.org/nvidia/76B900', 'https://www.google.com/s2/favicons?domain=nvidia.com&sz=128'] },
  { name: 'PepsiCo', sources: ['https://commons.wikimedia.org/wiki/Special:FilePath/Pepsico%20logo%20%282%29.svg', 'https://www.google.com/s2/favicons?domain=pepsico.com&sz=128'] },
  { name: 'DHL', sources: ['https://cdn.simpleicons.org/dhl/D40511', 'https://www.google.com/s2/favicons?domain=dhl.com&sz=128'] },
  { name: 'Barrett Distribution Centers', sources: ['https://www.google.com/s2/favicons?domain=barrettdistribution.com&sz=128', 'https://logo.clearbit.com/barrettdistribution.com?size=512'] },
  { name: 'DSV', sources: ['https://commons.wikimedia.org/wiki/Special:FilePath/DSV%20Logo.svg', 'https://www.google.com/s2/favicons?domain=dsv.com&sz=128'] },
  { name: 'GEODIS', sources: ['https://www.google.com/s2/favicons?domain=geodis.com&sz=128', 'https://logo.clearbit.com/geodis.com?size=512'] },
  { name: 'Glossier', sources: ['https://www.google.com/s2/favicons?domain=glossier.com&sz=128', 'https://logo.clearbit.com/glossier.com?size=512'] },
  { name: 'ID Logistics', sources: ['https://images.seeklogo.com/logo-png/50/1/id-logistics-logo-png_seeklogo-502829.png', 'https://www.google.com/s2/favicons?domain=id-logistics.com&sz=128'] },
  { name: 'IKEA', sources: ['https://cdn.simpleicons.org/ikea/0058A3', 'https://www.google.com/s2/favicons?domain=ikea.com&sz=128'] },
  { name: 'NFI', sources: ['https://cdn.freebiesupply.com/logos/large/2x/nfi-industries-logo-png-transparent.png', 'https://www.google.com/s2/favicons?domain=nfiindustries.com&sz=128'] },
  { name: 'Ashley Furniture', sources: ['https://commons.wikimedia.org/wiki/Special:FilePath/Ashley%20logo%202022.svg', 'https://www.google.com/s2/favicons?domain=ashleyfurniture.com&sz=128'] },
  { name: 'Averitt', sources: ['https://www.averitt.com/hs-fs/hubfs/Averitt_logo_250_PNG.png?name=Averitt_logo_250_PNG.png&width=250', 'https://www.google.com/s2/favicons?domain=averitt.com&sz=128'] },
  { name: 'Ryder', sources: ['/ryder-logo.png'] },
  { name: 'WESCO', sources: ['https://www.google.com/s2/favicons?domain=wesco.com&sz=128', 'https://logo.clearbit.com/wesco.com?size=512'] },
  { name: 'GXO', sources: ['https://www.google.com/s2/favicons?domain=gxo.com&sz=128', 'https://logo.clearbit.com/gxo.com?size=512'] },
  { name: 'Chobani', sources: ['https://commons.wikimedia.org/wiki/Special:FilePath/Chobani%20logo.svg', 'https://www.google.com/s2/favicons?domain=chobani.com&sz=128'] },
  { name: 'Dell', sources: ['https://cdn.simpleicons.org/dell/0672CB', 'https://www.google.com/s2/favicons?domain=dell.com&sz=128'] },
  { name: 'Maersk', sources: ['https://cdn.simpleicons.org/maersk/42B0D5', 'https://www.google.com/s2/favicons?domain=maersk.com&sz=128'] },
] as const

export function ChapterControls({ activePath }: { activePath: string }) {
  const activeIndex = chapterFlow.findIndex((chapter) => chapter.path === activePath)
  const previous = activeIndex > 0 ? chapterFlow[activeIndex - 1] : undefined
  const next = activeIndex >= 0 && activeIndex < chapterFlow.length - 1 ? chapterFlow[activeIndex + 1] : undefined

  return <nav className="chapter-controls" aria-label="Chapter navigation">
    <a href="/" aria-current={activePath === '/' ? 'page' : undefined}>Executive Overview</a>
    {previous ? <a href={previous.path}>Previous chapter</a> : <span aria-disabled="true">Previous chapter</span>}
    {next ? <a href={next.path}>Next chapter</a> : <span aria-disabled="true">Next chapter</span>}
  </nav>
}

export function ChapterDirectory({ activePath }: { activePath: string }) {
  return <nav className="chapter-directory" aria-label="All report chapters">
    <p>Explore the Report</p>
    <ol>
      {chapterDirectory.map((chapter, index) => <li key={chapter.path}>
        <a href={chapter.path} aria-current={chapter.path === activePath ? 'page' : undefined} target={chapter.external ? '_blank' : undefined} rel={chapter.external ? 'noreferrer' : undefined}>
          <span>{String(index + 1).padStart(2, '0')}</span>{chapter.label}
        </a>
      </li>)}
    </ol>
  </nav>
}

const portfolioUpdateOpening = 'During the first half of 2026, we have committeed $56.4M, comprised of five new investments (FiQ, Unit AI, Walden Robotics, Paebbl, Anori), two follow-on investment (Gideon, Fort), three fund investments (TMV Logistics, Rethink Ventures, and Schematic Ventures Fund III). We have 44 active companies, 5 fund positions, 7 RIPs, and 5 exits with Workstep bring acquired by LearningPool in Q1. Excitingly, several portfolio companies are advancing toward potential liquidity events, positioning our portfolio for the strongest exit environment in several years.'

const fundComparisonRows = [
  ['Fund I', '2016–2018', '16', '34', '$87.97M', '$160.49M', '1.82×', '11%', '$72.52M'],
  ['Fund II', '2019–2021', '19', '24', '$118.48M', '$164.43M', '1.39×', '9%', '$45.95M'],
  ['Fund III', '2022–2024', '18', '14', '$89.45M', '$110.69M', '1.24×', '8%', '$21.24M'],
  ['Fund IV', '2025–2027', '9', '0', '$36.44M', '$36.32M', '1.00×', '0%', '–$0.12M'],
] as const

const transactionBridgeRows = [
  ['Fund I', '14', '48', '$68.80M', '$138.24M', '2.01×'],
  ['Fund II', '18', '42', '$110.95M', '$152.68M', '1.38×'],
  ['Fund III', '18', '32', '$89.45M', '$110.69M', '1.24×'],
  ['Fund IV', '6', '6', '$35.94M', '$35.82M', '1.00×'],
  ['PLDV total', '56', '128', '$305.14M', '$437.44M', '1.43×'],
] as const

const fundInvestmentRows = [
  ['TMV Logistics', "TMV Logistics expands Prologis' connectivity into maritime, ports, and intermodal logistics, sectors that influence a significant share of customer supply chains before freight reaches the Prologis network."],
  ['Rethink Ventures', 'Rethink Ventures, which gives us earlier entry points into European supply chain innovation'],
  ['Schematic Ventures Fund III', 'Schematic Ventures Fund III, which allows us to continue to get early insight into some of the best supply chain and automation companies exiting seed stage.'],
] as const

const exitOutlookRows = [
  ['Kolors and SVT Robotics', 'Kolors and SVT Robotics are currently in market for sale, with strategic buyers actively evaluating the businesses (expected ~3x on Kolors, ~1.5x on SVT). Both companies have reached a level of commercial maturity that aligns with improving M&A activity across the venture market.'],
  ['XNRGY', "XNRGY continues to build momentum as demand for AI infrastructure and data center capacity accelerates. With our data center team, Prologis advanced a large LOI for HVAC-related equipment, validating the company's technology while strengthening its commercial position within one of Prologis' fastest-growing business lines. The company has received significant acquisition interest that we expect to see materialize later this year"],
  ['Locus Robotics and FORT Robotics', 'Locus Robotics and Fort Robotics, two of our automation portfolio companies, have exits on the horizon. Locus Robotics is preparing for a potential IPO, while FORT Robotics continues advancing through its SPAC process.'],
] as const

const portfolioWins = [
  ['WorkStep', 'was acquired by Learning Pool.'],
  ['Locus Robotics', 'launched its new autonomous robot, Array.'],
  ['XNRGY', 'inked LOI with Prologis, supporting approximately 2 GW of potential projects.'],
  ['SOLARCYCLE and Prologis Energy', 'announced exclusive recycling agreement.'],
  ['Anori', 'completed spinout from Google X and recorded $1.8M in booked revenue from Google’s Data Center business.'],
  ['Gideon', 'expanded customer deployments with GM, FedEx, and DHL.'],
  ['FORT Robotics', 'acquired Mapless AI and is preparing to go public via SPAC.'],
  ['Relay', 'received a term sheet valuing the business at $400M pre-money, a ~3.5x on our investments to-date, as well as signed another lease with Prologis.'],
  ['Platform Science', 'finalizing JV structure with Daimler and PACCAR to create universal operating system for Trucking Industry. Completed integration of Trimble’s Telematics business which we acquired last year.'],
] as const

function PortfolioTable({ title, subtitle, badge, headers, rows, totalRow = false }: {
  title: string
  subtitle: string
  badge?: string
  headers: readonly string[]
  rows: readonly (readonly string[])[]
  totalRow?: boolean
}) {
  return <section className="portfolio-update__data-section" aria-labelledby={sectionId(title)}>
    <div className="portfolio-update__section-intro">
      <div>
        <h2 id={sectionId(title)}>{title}</h2>
        <p>{subtitle}</p>
      </div>
      {badge && <span className="portfolio-update__badge">{badge}</span>}
    </div>
    <div className="portfolio-update__table-scroll">
      <table className="portfolio-update__table">
        <thead><tr>{headers.map((header) => <th key={header} scope="col">{header}</th>)}</tr></thead>
        <tbody>{rows.map((row, rowIndex) => <tr className={totalRow && rowIndex === rows.length - 1 ? 'is-total' : undefined} key={row[0]}>
          {row.map((cell, cellIndex) => <td className={cell.includes('–$') ? 'is-negative' : cell.includes('×') ? 'is-multiple' : undefined} key={`${cellIndex}-${cell}`}>{cellIndex === 0 ? <strong>{cell}</strong> : cell}</td>)}
        </tr>)}</tbody>
      </table>
    </div>
  </section>
}

export function PortfolioUpdate() {
  return <main className="portfolio-update">
    <section className="portfolio-update__opening" aria-labelledby="portfolio-update-title">
      <div className="portfolio-update__opening-copy">
        <h1 id="portfolio-update-title">Portfolio Update</h1>
        <p>{portfolioUpdateOpening}</p>
      </div>
      <figure className="portfolio-update__gideon">
        <img src="/gideon-warehouse.png" alt="Gideon vehicle in a warehouse" />
        <figcaption>Gideon</figcaption>
      </figure>
    </section>

    <PortfolioTable
      title="Fund comparison"
      subtitle="Reporting-tab subtotals, including fund investments where applicable"
      badge="Consolidated reporting"
      headers={['Fund', 'Vintage', 'New', 'Follow-ons', 'Invested', 'Current value', 'Gross MOIC', 'IRR', 'Value creation']}
      rows={fundComparisonRows}
    />

    <PortfolioTable
      title="PLDV transaction bridge"
      subtitle="Bottom-up sums of every direct-equity transaction; these four rows roll to the audited PLDV total"
      badge="128 transactions"
      headers={['Fund', 'Companies', 'Transactions', 'Displayed principal sum', 'Displayed current value', 'Gross MOIC']}
      rows={transactionBridgeRows}
      totalRow
    />

    <section className="portfolio-update__funds" aria-labelledby="fund-investments-title">
      <div className="portfolio-update__reading-copy">
        <h2 id="fund-investments-title">Fund Investments</h2>
        <p>Our fund strategy continues to expand Prologis Ventures' access to emerging technologies, strategic relationships, and differentiated deal flow beyond our core investment focus. During the first half of the year we approved commitments to three funds:</p>
      </div>
      <dl className="portfolio-update__fund-list">
        {fundInvestmentRows.map(([name, copy]) => <div key={name}><dt>{name}</dt><dd>{copy}</dd></div>)}
      </dl>
    </section>

    <section className="portfolio-update__exit" aria-labelledby="exit-outlook-title">
      <div className="portfolio-update__exit-inner">
        <h2 id="exit-outlook-title">Exit Outlook</h2>
        <p className="portfolio-update__disclaimer">This section contains forward looking statements, as several portfolio companies are now in active liquidity processes with potential outcomes anticipated over the next six to twelve months, but of course not guaranteed.</p>
        <div className="portfolio-update__exit-list">
          {exitOutlookRows.map(([name, copy]) => <article key={name}><h3>{name}</h3><p>{copy}</p></article>)}
        </div>
      </div>
    </section>

    <section className="portfolio-update__wins" aria-labelledby="portfolio-wins-title">
      <h2 id="portfolio-wins-title">Portfolio Wins</h2>
      <ol>{portfolioWins.map(([name, copy]) => <li key={name}><strong>{name}</strong> {copy}</li>)}</ol>
    </section>

    <footer className="portfolio-update__footer"><ChapterDirectory activePath="/portfolio" /></footer>
  </main>
}

const supportingGrowthContent = {
  operatingEssentials: [
    "After investing in FulfillmentIQ (FIQ) in January, Prologis formalized a strategic partnership that combines FIQ's supply chain consulting, technology development, and automation expertise with Operating Essentials' scale and infrastructure capabilities. The partnership expands Prologis' ability to engage customers earlier in their supply chain transformation efforts by offering strategy, implementation, software development, and infrastructure through a single customer engagement model.",
    'During the first half of the year, Prologis Ventures introduced Essentials to Albertsons, leading to discussions with CLD around a four-site cold chain build-to-suit opportunity, automation, yard operations, energy resilience, and network optimization. Albertsons expects to invest ~$4B in material handling and automation across 22 distribution centers over the next five years, creating opportunities that span real estate, Operating Essentials, Energy, and future technology solutions.',
    'Ventures is also expanding customer access to early warehouse automation. Ventures introduced customers to autonomous forklift technology through Gideon, with Essentials establishing a referral relationship with Gideon. Unit AI has a growing pipeline of Prologis customers who want to participate in early deployments, demonstrating customer demand for return logistics solutions. Finally, our most recent investment in Walden Robotics will allow us to create a customer cohort to help shape the first logistics use cases of human-agentic technology based on shared warehouse pain points.',
  ],
  development: [
    'Our portfolio company Anori, an AI platform that streamlines development and entitlement workflows, completed its nine-month spinout from Google X at the start of the year. Since then, Ventures has led working sessions with Prologis Development, Capital Deployment, Government Affairs, and Data Centers to identify the highest-value development challenges for Anori to prioritize solving. The team has helped shape the platform around entitlement analysis, zoning and permitting workflows, site feasibility, regulatory review, community sentiment, and development planning.',
    'Anori has now developed its first product, and structured validation is now underway using 2–3 Prologis projects to measure speed, accuracy, completeness, actionability, and workflow fit before determining the first repeatable production workflow. The long-term objective is to improve entitlement preparedness, reduce manual research, strengthen underwriting assumptions, and fundamentally change how development teams evaluate and prioritize projects across the portfolio.',
    'Additionally, Ventures continues working with Development and Prologis Labs/IT to identify where AI can create durable advantages across the development lifecycle. After evaluating more than 100 AI-native real estate companies, the team concluded that the greatest opportunity is not automating individual tasks, but building AI-enabled workflows that improve capital allocation, compress project timelines, strengthen underwriting, reduce entitlement and cost risk, and continuously improve decision-making across future developments. Current work includes a proof of concept with Ventures portfolio company Tangible as part of the Cost IQ initiative. The pilot will test whether AI can reduce by 50–90% the up to 40 hours development teams currently spend estimating construction material quantities, enabling faster project evaluation and more accurate early-stage cost forecasting.',
  ],
  dataCenters: [
    "Prologis' relationship with Ventures portfolio company XNRGY has progressed into a strategic operating partnership. Ventures worked with the Data Center team to execute a signed LOI that positions Prologis within XNRGY's production planning for approximately 2 GW of potential projects where XNRGY's technology could be deployed. The partnership creates access to mission-critical cooling infrastructure at a time when manufacturing capacity has become one of the largest constraints facing hyperscale development.",
    'In parallel, Ventures continues to evaluate AI infrastructure and cooling technologies with the Data Center team, including SF Compute, Together AI, and Electio, to better understand the data center transaction landscape and strengthen the long-term execution strategy of the Data Center platform.',
  ],
  energyAndSustainability: [
    "Prologis OnPrem Power delivers dispatchable on-site power that enables customers to bring facilities online faster. Over the last year, Ventures helped transition OnPrem from an incubation into an operating business by helping with commercial strategy, governance model, customer offering, and transaction framework. We also supported the Energy team's first major commercial opportunity this year with Quanta, an engineering and infrastructure customer evaluating OnPrem as part of a large-scale power deployment. That work validated the commercial model and established underwriting processes. We continue to support this new business as it expands its commercial pipeline including Walmart, Amazon, and Prologis' Data Centers platform.",
    "With the Prologis Sustainability team, Ventures invested in Paebbl to expand access to low-carbon concrete technologies for future European developments. Already, Paebbl conducted a recent pour with Amazon where Paebbl was determined to have achieved better performance standards than the current preferred concrete provided. Our other sustainable concrete investment, TerraCO2, is progressing quickly on its manufacturing facility in Cleburne, TX and is exploring opportunities with the construction team to test at nearby warehouses once complete. Also, Ventures helped expand Prologis' partnership with SOLARCYCLE at the start of the year by executing an exclusivity agreement for end-of-life solar panel recycling, strengthening both Prologis' and our customers' circularity strategy.",
  ],
} as const

function GrowthReadingSection({ title, children }: { title: string; children: React.ReactNode }) {
  return <section className="supporting-growth__section" aria-labelledby={sectionId(title)}>
    <h2 id={sectionId(title)}>{title}</h2>
    <div className="supporting-growth__section-body">{children}</div>
  </section>
}

export function SupportingGrowth() {
  return <main className="supporting-growth">
    <header className="supporting-growth__intro">
      <p className="supporting-growth__eyebrow">Supporting Growth Across Prologis</p>
      <h1>Supporting Growth Across Prologis</h1>
    </header>

    <GrowthReadingSection title="Operating Essentials">
      {supportingGrowthContent.operatingEssentials.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
    </GrowthReadingSection>

    <GrowthReadingSection title="Development">
      <div className="supporting-growth__development-layout">
        <div>{supportingGrowthContent.development.slice(0, 2).map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
        <figure className="supporting-growth__anori-animation">
          <div><strong>Anori animation</strong><span>Animation supplied by Anori</span></div>
          <figcaption>Anori</figcaption>
        </figure>
      </div>
      <p>{supportingGrowthContent.development[2]}</p>
    </GrowthReadingSection>

    <GrowthReadingSection title="Data Centers">
      {supportingGrowthContent.dataCenters.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
    </GrowthReadingSection>

    <GrowthReadingSection title="Energy & Sustainability">
      <figure className="supporting-growth__paebbl">
        <img src="/paebbl-facility.png" alt="Paebbl low-carbon concrete facility" />
        <figcaption>Paebbl</figcaption>
      </figure>
      {supportingGrowthContent.energyAndSustainability.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
    </GrowthReadingSection>

    <footer className="supporting-growth__footer"><ChapterDirectory activePath="/business-unit-acceleration" /></footer>
  </main>
}

const buildingNewBusinessesContent = {
  introduction: [
    'Building on prior incubation success, Prologis Ventures is creating an engine to develop new businesses that strengthen customer offerings and generate revenue. The investment in FulfillmentIQ established CrossDock Studios, combining Prologis’ understanding of customer challenges with FulfillmentIQ’s product-development capabilities.',
    'Each initiative moves through customer problem definition, discovery, rapid prototyping, design-partner validation, and iteration. Depending on the opportunity, products may become venture-backed companies, Prologis Ventures investments, Operating Essentials offerings, or consulting solutions. Three incubations are currently in progress.',
  ],
  workbench: [
    'Warehouse design often requires months of engineering analysis across facility layouts, labor planning, automation design, and financial modeling before a customer can make an investment decision. Workbench brings warehouse design, simulation, and AI into a single platform. Its initial release is designed to help 3PLs convert customer warehouse requirements into optimized facility designs in hours rather than months.',
    'NFI has signed as the first paying design partner with a $200k annual commitment. GXO, DHL, Geodis, and Yusen are finalizing design agreements. Phase One is scheduled for delivery in October 2026.',
    'Over time, Workbench will become a digital twin and simulation engine for warehouse operations. Developed alongside NVIDIA on the Omniverse platform, it will enable Prologis and its customers to simulate automation strategies, layouts, labor models, throughput, and network decisions before making physical investments. As customer and operational data are added, Workbench can support network modeling, scenario comparison, and operational simulation before infrastructure or automation spending. This creates a software and advisory opportunity while increasing pull-through across Operating Essentials.',
  ],
  wareSight: [
    'Every customer facility assessment and Operating Essentials recommendation depends on the experience of the ESM conducting the walkthrough. WareSight turns that process into an AI-powered operational assessment. As an ESM walks a facility with a customer, the platform records the conversation, creates a voice-enabled assessment in real time, analyzes operational observations, and recommends solutions across Operating Essentials offerings.',
    'WareSight is designed to operate in low-connectivity environments, allowing recommendations to be generated during the customer visit. Live customer pilots are expected to begin this fall.',
  ],
  zynque: [
    'Zynque demonstrates CrossDock Studios’ ability to incubate venture-backable standalone businesses. It is a logistics-native integration and orchestration platform designed to connect warehouse management systems, transportation systems, robotics, ERP platforms, and other warehouse technologies through a common integration layer built for logistics environments.',
    'Prologis Ventures is working with FIQ to spin Zynque out of the business and take it to market for an initial venture-capital raise from institutional and strategic investors.',
  ],
} as const

export function BuildingNewBusinesses() {
  return <main className="building-businesses">
    <header className="building-businesses__intro">
      <h1>Building New Businesses</h1>
      {buildingNewBusinessesContent.introduction.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
    </header>

    <section className="building-businesses__section" aria-labelledby="workbench-title">
      <h2 id="workbench-title">Workbench</h2>
      <div className="building-businesses__workbench-layout">
        <div>
          {buildingNewBusinessesContent.workbench.slice(0, 2).map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </div>
        <figure className="building-businesses__animation">
          <div><strong>Workbench animation</strong><span>Animation placeholder</span></div>
          <figcaption>Workbench</figcaption>
        </figure>
      </div>
      <p>{buildingNewBusinessesContent.workbench[2]}</p>
    </section>

    <section className="building-businesses__section" aria-labelledby="waresight-title">
      <h2 id="waresight-title">WareSight</h2>
      {buildingNewBusinessesContent.wareSight.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
    </section>

    <section className="building-businesses__section" aria-labelledby="zynque-title">
      <h2 id="zynque-title">Zynque</h2>
      {buildingNewBusinessesContent.zynque.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
    </section>

    <footer className="building-businesses__footer"><ChapterDirectory activePath="/business-building" /></footer>
  </main>
}

const innovationFoundation = [
  ['Self-Service Resources', 'The team developed a library of self-service resources that all employees can access at will. Resources include Innovation GPTs, project templates, pilot planning guides, business case frameworks, and structured workflows that support teams from idea through execution while improving visibility into related work across the enterprise.'],
  ['Supporting Enterprise AI', 'The Innovation Accelerator is supporting the wider enterprise AI initiative by providing a common process for developing AI use cases before implementation. Teams can use the Accelerator self-service resources and GPTs to define business problems, document expected outcomes, identify stakeholders, and evaluate implementation approaches using a shared framework before projects advance through enterprise AI governance.'],
  ['Elevating High Impact Initiatives', 'The launch also included formalizing the Global Innovation Collective, 15+ VP-level leaders from across the business to create a forum for sharing innovation initiatives across the company, connecting teams working on similar challenges, and coordinating expertise to help employees move high-potential ideas into execution.'],
] as const

const innovationDecisionFramework = [
  ['Stop', 'Protect time and capital. End work when the evidence, economics, ownership, or operating model do not support moving forward.'],
  ['Sharpen', 'Fix the problem before solving it. Reframe ideas when the stated issue is not the real business problem.'],
  ['Test', 'Run the smallest useful proof. Design pilots that answer a decision, rather than pilots that create activity without a clear next step.'],
  ['Scale', 'Move only when the case, ownership, stakeholder alignment, and operating model are clear enough to support adoption.'],
] as const

const innovationExamples = [
  {
    label: 'Stop with evidence',
    title: 'Pringle floor sweeping',
    image: '/innovation-impact-pringle.jpg',
    alt: 'Autonomous floor sweeping robots operating in a warehouse aisle.',
    problem: 'Can autonomous or technology-enabled floor sweeping create enough operational value to justify broader deployment across relevant sites?',
    copy: 'The team piloted the concept, evaluated ROI and operating feasibility, and killed the idea when the economics were not strong enough.',
    impact: 'Prevented a weak scale path and created a reusable example of responsible validation.',
  },
  {
    label: 'Sharpen the real problem',
    title: 'Fiber-reinforced asphalt',
    image: '/innovation-impact-asphalt.jpg',
    alt: 'Close-up view of cracked asphalt pavement.',
    problem: 'The team originally framed the issue as poor adoption of fiber-reinforced asphalt. The issue appears to be how Prologis evaluates upfront cost against lifecycle durability in underwriting.',
    copy: 'The Accelerator helped shift the work from selling a material to clarifying the decision logic needed to evaluate durability, payback, and standard-work implications.',
    impact: 'Changed where the organization needs to act.',
  },
  {
    label: 'Turn capability into use case',
    title: 'Interior scanning',
    image: '/innovation-impact-interior-scan.jpg',
    alt: 'Interior scanning app producing a digital floor plan from a mobile phone scan.',
    problem: 'Many older or acquired buildings may lack clean, current, usable plans. The business needs to know whether scanning can create better property information faster and at lower cost.',
    copy: 'The work moved from whether a vendor can scan a building to where better plans create value for leasing, marketing, development, operations, or customer-facing teams.',
    impact: 'Narrowed a broad technology into a practical standard-work opportunity.',
  },
] as const

const securityExamples = [
  {
    label: 'Scaling',
    title: 'Corporate security',
    decision: 'Define the corporate security role, clarify standards, and support broader adoption where the operating model is working.',
    points: [
      'Current status is strong and moving in the right direction.',
      'The work is shifting from exploration to scale and operating discipline.',
      'The Accelerator is helping keep the work connected to the broader security strategy.',
    ],
    impact: 'Turns a broad security need into a scalable internal capability.',
  },
  {
    label: 'New revenue opportunity',
    title: 'Security cameras and Essentials solution',
    decision: 'Determine whether a security camera solution can become an Essentials offering with a clear customer value proposition, operating model, and commercial path.',
    points: [
      'The work is in a good position and ready for the next step.',
      'The next question is how the solution becomes an Essentials offering.',
      'The Accelerator is helping separate customer demand, technical feasibility, pricing, ownership, and support requirements.',
    ],
    impact: 'Moves from customer pain to a potential offer that can be tested responsibly.',
  },
  {
    label: 'Likely pause or stop',
    title: 'ProYard',
    decision: 'Determine whether the opportunity has enough evidence, ownership, and value to keep moving or whether it should be paused.',
    points: [
      'This workstream is likely heading toward pause or stop.',
      'The value is making that decision clearly instead of letting the work continue without a strong path.',
      'The Accelerator creates a place to capture the learning and revisit only if conditions change.',
    ],
    impact: 'Protects focus by separating promising work from work that is not ready to continue.',
  },
] as const

export function AcceleratingInnovation() {
  return <main className="accelerating-innovation">
    <header className="accelerating-innovation__intro">
      <p className="accelerating-innovation__eyebrow">Accelerating Innovation</p>
      <h1>Taking Ideas to Execution</h1>
      <p>Prologis Ventures partnered with Operational Excellence to launch the Innovation Accelerator at the January Global Town Hall. The Innovation Accelerator was created to help Prologis identify and develop opportunities that drive new revenue, improve operational efficiency, solve customer pain points, and strengthen the business. By providing a structured process for evaluating and advancing ideas, the program helps teams focus resources on the highest-impact opportunities and accelerate successful initiatives toward implementation. <a className="accelerating-innovation__guided-tour" href={innovationAcceleratorUrl}>Explore the guided tour.</a></p>
    </header>

    <section className="accelerating-innovation__foundation" aria-label="Innovation Accelerator program areas">
      {innovationFoundation.map(([title, copy]) => <article key={title}><h2>{title}</h2><p>{copy}</p></article>)}
    </section>

    <section className="accelerating-innovation__framework" aria-labelledby="decision-framework-title">
      <div className="accelerating-innovation__section-heading"><p>Decision framework</p><h2 id="decision-framework-title">Stop. Sharpen. Test. Scale.</h2></div>
      <ol>{innovationDecisionFramework.map(([title, copy]) => <li key={title}><h3>{title}</h3><p>{copy}</p></li>)}</ol>
    </section>

    <section className="accelerating-innovation__examples" aria-labelledby="how-it-works-title">
      <div className="accelerating-innovation__section-heading"><p>How it works</p><h2 id="how-it-works-title">Evidence before expansion.</h2></div>
      <div className="accelerating-innovation__example-grid">
        {innovationExamples.map((example) => <article key={example.title} className="accelerating-innovation__example-card">
          <img src={example.image} alt={example.alt} />
          <div><p className="accelerating-innovation__label">{example.label}</p><h3>{example.title}</h3><p><strong>Problem statement:</strong> {example.problem}</p><p>{example.copy}</p><p className="accelerating-innovation__impact"><strong>Material difference:</strong> {example.impact}</p></div>
        </article>)}
      </div>
    </section>

    <section className="accelerating-innovation__security" aria-labelledby="security-title">
      <div className="accelerating-innovation__section-heading"><p>Spotlight on security</p><h2 id="security-title">Coordinated workstreams, clearer decisions.</h2><span>Security is a clear customer and operating priority, but it touches multiple teams, risk questions, customer expectations, technology choices, and commercial models. The Accelerator helped break the work into three clearer paths with different owners, decisions, and next steps.</span></div>
      <div className="accelerating-innovation__security-grid">
        {securityExamples.map((example) => <article key={example.title}>
          <p className="accelerating-innovation__label">{example.label}</p><h3>{example.title}</h3><p><strong>Decision path:</strong> {example.decision}</p>
          <ul>{example.points.map((point) => <li key={point}>{point}</li>)}</ul>
          <p className="accelerating-innovation__impact"><strong>Impact:</strong> {example.impact}</p>
        </article>)}
      </div>
    </section>

    <footer className="accelerating-innovation__footer"><ChapterDirectory activePath="/scaling-innovation" /></footer>
  </main>
}

const appendixTakeaways = [
  ['Warehouse operators are investing in AI where it saves time today.', 'The most common use cases were reporting and analytics, document automation, and labor planning, while more advanced applications remain in the evaluation stage.'],
  ['Customers are becoming more confident in AI and automation, but they expect measurable results.', 'Nearly two-thirds of respondents said they are more optimistic than they were a year ago, citing improvements in safety, throughput, and labor productivity.'],
  ['Customers continue to see significant room to expand automation.', 'Even among large operators, a median of only 40% of warehouse facilities have deployed automation, indicating substantial opportunity as solutions become easier to implement across diverse operations.'],
] as const

export function Appendix() {
  return <main className="appendix-page">
    <header className="appendix-page__intro">
      <h1>Appendix</h1>
    </header>

    <section className="appendix-page__sources" aria-label="Articles">
      <ol>
        <li><a href="https://www.dcvelocity.com/material-handling/robotics/walden-robotics-launches-humanoid-robots-for-manufacturing-and-logistics" target="_blank" rel="noreferrer">Walden Investment Article</a></li>
        <li><a href="https://www.wsj.com/logistics-report/venture-fund-launches-200-million-bet-on-u-s-maritime-revival-640f94a4" target="_blank" rel="noreferrer">PLDV Invests in TMV WSJ Article</a></li>
        <li><a href="https://www.svb.com/trends-insights/reports/physical-ai-robotics/" target="_blank" rel="noreferrer">SVB x Prologis Ventures Physical AI and the Future of Robotics Report</a></li>
      </ol>
    </section>

    <section className="appendix-page__research" aria-labelledby="physical-ai-title">
      <h2 id="physical-ai-title">SVB x Prologis Ventures Physical AI and the Future of Robotics Report</h2>
      <p>Ventures worked with Prologis Research and Silicon Valley Bank to produce the SVB x Prologis Ventures Physical AI and the Future of Robotics Report, extending many of the themes heard throughout the first half of the year to a broader survey of PrologisNext executives. Their anonymous contributions on AI adoption, barriers to scaling automation, and unmet technology needs complement SVB&apos;s analysis of venture funding and broader market trends.</p>
      <p>The findings provide insight into enterprise technology investment priorities and innovation roadmaps. The full summary of executive responses is available in the <a href="https://www.svb.com/trends-insights/reports/physical-ai-robotics/" target="_blank" rel="noreferrer">report</a>.</p>
      <div className="appendix-page__takeaways">
        {appendixTakeaways.map(([title, copy]) => <article key={title}><h3>{title}</h3><p>{copy}</p></article>)}
      </div>
    </section>

    <footer className="appendix-page__footer"><ChapterDirectory activePath="/appendix" /></footer>
  </main>
}

const summitInsights = [
  ['Automation investments are becoming more disciplined.', 'Customers are increasingly evaluating automation based on throughput, reliability, and financial return rather than technical capabilities. Operators also emphasized the need to involve operations teams earlier in technology evaluations to improve implementation success.'],
  ['The first 90 days after opening a facility represent one of the highest operational risk periods.', 'Customers consistently cited the gap between planning assumptions and operational reality as a leading cause of launch delays. Many see simulation and pre-launch testing as opportunities to identify issues before operations begin and accelerate stabilization.'],
  ['Retail compliance and chargebacks are becoming a growing source of operational cost.', 'Customers described spending significant time and resources resolving compliance disputes with retailers, increasing interest in technologies such as computer vision and automated documentation to improve shipment accuracy and reduce chargebacks.'],
] as const

const summitOutcomes = [
  ['NVIDIA', "The Summit expanded NVIDIA's view of Prologis from a real estate provider to a strategic AI and innovation partner. NVIDIA subsequently proposed that Prologis become its primary partner for building an edge and cloud platform to enable agentic supply chain operations."],
  ['ID Logistics', 'Summit relationships led to discussions among ID Logistics, Unit AI, and select customers on reverse logistics. Those discussions expanded to include LEGO and brought Prologis into conversations about up to two build-to-suit opportunities totaling 600K–1M square feet in Texas and California.'],
  ['DHL', 'PrologisNext relationships have evolved into recurring technology strategy discussions with DHL’s CIO and operations leadership. Earlier engagement introduced SVT Robotics, which DHL announced it would expand across its 100+ site global warehouse network, enabling robotics integrations up to 12 times faster. The Summit also introduced DHL to Gideon, leading to a 70-unit LOI for autonomous forklifts.'],
  ['Additional follow-up', 'DSV signed an MSA and KAA with Prologis Essentials, enabling Essentials to participate in future RFPs. NFI brought Prologis Essentials into multiple infrastructure discussions, including two used-racking deals. Ashley Furniture engagement continues, with Marv Cunningham planning a fall visit to its headquarters to discuss automation and AI opportunities with the CTO.'],
  ['Barrett Distribution', 'Summit relationships led Barrett to sign a commercial agreement with Unit AI, with deployment planned across 25 U.S. warehouses beginning in 2027—an early signal of customer demand for returns automation.'],
] as const

export function DrivingCustomerEngagement() {
  return <main className="customer-engagement">
    <header className="customer-engagement__intro">
      <h1>Driving Customer Engagement</h1>
      <dl>
        <div><dt>308</dt><dd>executive participants</dd></div>
        <div><dt>50+</dt><dd>strategic customer organizations engaged</dd></div>
        <div><dt>10 of 11</dt><dd>Dark Green CLS customers participated</dd></div>
        <div><dt>14+</dt><dd>documented follow-up opportunities generated from the PrologisNext Innovators Summit</dd></div>
      </dl>
    </header>

    <section className="customer-engagement__organizations" aria-labelledby="organizations-title">
      <h2 id="organizations-title">Sample Organizations Engaged Through PrologisNext YTD</h2>
      <div className="customer-engagement__logo-garden">
        {customerOrganizations.map(({ name, sources }) => <div key={name} className="customer-engagement__logo">
          <img src={sources[0]} data-fallbacks={sources.slice(1).join('|')} alt={`${name} logo`} onLoad={(event) => event.currentTarget.parentElement?.classList.add('has-logo')} onError={(event) => {
            const fallbacks = event.currentTarget.dataset.fallbacks?.split('|').filter(Boolean) ?? []
            const nextSource = fallbacks.shift()
            if (nextSource) {
              event.currentTarget.dataset.fallbacks = fallbacks.join('|')
              event.currentTarget.src = nextSource
            } else {
              event.currentTarget.style.display = 'none'
            }
          }} />
          <span>{name}</span>
        </div>)}
      </div>
    </section>

    <section className="customer-engagement__section" aria-labelledby="ai-forum-title">
      <div className="customer-engagement__section-copy">
        <h2 id="ai-forum-title">PrologisNext Scaling AI Forum</h2>
        <p>Through the first half of the year, PrologisNext engaged senior supply chain and innovation leaders across our customer base, creating opportunities across Ventures, CLS, and Essentials. These engagements generated portfolio company introductions, technology evaluations, commercial agreements, strategic account expansion, and insight into how customers are approaching AI, automation, and supply chain transformation.</p>
        <p>In February, the Executive AI Scaling Forum convened leaders from NVIDIA, PepsiCo, IKEA, DHL, DSV, GXO, ID Logistics, NFI, Glossier, Barrett Distribution, FulfillmentIQ, and SVT Robotics to discuss scaling AI across warehouse and supply chain operations. While many organizations have proven AI in pilot environments, the shared challenge is deploying solutions consistently across facilities. Participants emphasized high-quality data, clearly defined operational problems, and repeatable implementation processes as critical to success.</p>
        <p>The full discussion summary can be found here.</p>
        <blockquote><p>“Based on these discussions, I realized we’re trying to start too big. I need to rethink my entire AI strategy.”</p><footer>Frank Kantner, Chief Supply Chain Officer, IKEA</footer></blockquote>
      </div>
      <figure className="customer-engagement__photo"><img src="/prologisnext-forum.jpg" alt="PrologisNext Executive AI Scaling Forum" /></figure>
    </section>

    <section className="customer-engagement__section customer-engagement__section--summit" aria-labelledby="summit-title">
      <figure className="customer-engagement__photo"><img src="/prologisnext-summit-panel.jpg" alt="PrologisNext Innovators Summit panel" /></figure>
      <div className="customer-engagement__section-copy">
        <h2 id="summit-title">PrologisNext Innovators Summit</h2>
        <p>In May, Ventures hosted the PrologisNext Innovators Summit in Charleston, SC alongside CLS and Essentials. The Summit brought together senior supply chain and innovation leaders from customer organizations, portfolio companies, and media partners to discuss operational challenges and emerging technologies shaping the future of supply chain. The mix of operators, technology leaders, innovators, and founders created an environment for customers to compare approaches and build peer relationships.</p>
        <p>Click here to read the PrologisNext Innovators Summit Summary.</p>
      </div>
    </section>

    <section className="customer-engagement__insights" aria-labelledby="insights-title">
      <h2 id="insights-title">Key Summit Insights</h2>
      {summitInsights.map(([title, copy]) => <article key={title}><h3>{title}</h3><p>{copy}</p></article>)}
    </section>

    <section className="customer-engagement__outcomes" aria-labelledby="outcomes-title">
      <h2 id="outcomes-title">Customer Engagement Resulting from the Summit in H1</h2>
      {summitOutcomes.map(([name, copy]) => <article key={name}><h3>{name}</h3><p>{copy}</p></article>)}
    </section>

    <footer className="customer-engagement__footer"><ChapterDirectory activePath="/customer-impact" /></footer>
  </main>
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

type ExecutiveOverviewRoute = { number: string; label: string; summary: string; href: string; external?: boolean }

const executiveOverviewRoutes: readonly ExecutiveOverviewRoute[] = [
  {
    number: '01',
    label: 'Portfolio Update',
    summary: 'An update on H1 commitments, portfolio performance, portfolio wins, and emerging liquidity opportunities.',
    href: '/portfolio',
  },
  {
    number: '02',
    label: 'Portfolio Performance',
    summary: 'Portfolio value, returns, and performance by fund and investment type.',
    href: dashboardUrl,
    external: true,
  },
  {
    number: '03',
    label: 'Launched New Businesses',
    summary: 'CrossDock Studios is building new products from defined customer needs.',
    href: '/business-building',
  },
  {
    number: '04',
    label: 'Supporting Growth Across Prologis',
    summary: 'Invest in technologies to support our business lines.',
    href: '/business-unit-acceleration',
  },
  {
    number: '05',
    label: 'Driving Customer Engagement',
    summary: 'PrologisNext is expanding customer engagement and opening commercial opportunities.',
    href: '/customer-impact',
  },
  {
    number: '06',
    label: 'Accelerating Innovation',
    summary: 'The Innovation Accelerator has created a scalable approach to taking ideas to execution.',
    href: '/scaling-innovation',
  },
]

const executiveOverviewCommitments = [
  ['New VC Investments', 'Walden · Unit · Anori · Paebbl'],
  ['Fund Investments', 'Schematic III · Rethink · TMV Logistics'],
  ['Follow-on Investments', 'Gideon · Fort'],
  ['Corporate Development JV', 'FiQ'],
  ['Launched New Businesses', 'Workbench · WareSight · Zynque'],
] as const

export function ExecutiveOverview() {
  return <main className="executive-overview">
    <header className="executive-overview__masthead">
      <a className="executive-overview__identity" href="/">
        <img src="/prologis-ventures-logo.png" alt="Prologis Ventures" />
        <span>2026 Mid-Year Report</span>
      </a>
      <div className="executive-overview__masthead-actions">
        <ChapterControls activePath="/" />
      </div>
    </header>

    <section className="executive-overview__intro" aria-labelledby="executive-overview-title">
      <div className="executive-overview__intro-copy">
        <p className="executive-overview__eyebrow">Executive Overview</p>
        <h1 id="executive-overview-title">Mid-Year Report - H1 2026</h1>
        <p>Prologis Ventures is pleased to present our 2026 Mid-Year Update Report, spotlighting the investment returns and strategic value across the enterprise in the first half of the year.</p>
      </div>
      <figure className="executive-overview__hero-image">
        <img src="/walden-humanoid.jpg" alt="Walden humanoid robot in a workshop" />
        <figcaption>Walden Humanoid</figcaption>
      </figure>
    </section>

    <section className="executive-overview__commitments" aria-labelledby="commitments-title">
      <div className="executive-overview__commitment-total">
        <p id="commitments-title" className="executive-overview__eyebrow">Commitments in H1 2026</p>
        <strong>$56.4M</strong>
        <span>committed in H1</span>
      </div>
      <dl className="executive-overview__commitment-list">
        {executiveOverviewCommitments.map(([label, value], index) => <div className={index === 4 ? 'is-new-businesses' : undefined} key={label}>
          <dt>{label}</dt>
          <dd>{value}</dd>
        </div>)}
      </dl>
    </section>

    <nav id="explore-the-report" className="executive-overview__route" aria-label="Explore the report">
      <p className="executive-overview__eyebrow">Explore the Report</p>
      <ol>
        {executiveOverviewRoutes.map((route) => <li key={route.number}>
          <a href={route.href} target={route.external ? '_blank' : undefined} rel={route.external ? 'noreferrer' : undefined}>
            <span>{route.number}</span>
            <strong>{route.label}</strong>
            <small>{route.summary}</small>
          </a>
        </li>)}
      </ol>
    </nav>
  </main>
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
