export type DashboardFact = {
  blockId: string
  text: string
  value?: string
  label?: string
  kind?: 'metric' | 'ledger' | 'statement' | 'placeholder'
}

export type DashboardSection = {
  id: string
  label: string
  kind: 'performance' | 'activity' | 'strategic-value' | 'highlights'
  items: readonly DashboardFact[]
}

export const executiveSummary = {
  sourceBlockIds: [
    'SRC-001', 'SRC-002', 'SRC-003', 'SRC-004', 'SRC-005', 'SRC-006', 'SRC-007', 'SRC-008',
    'SRC-009', 'SRC-010', 'SRC-011', 'SRC-012', 'SRC-013', 'SRC-014', 'SRC-015', 'SRC-016',
    'SRC-017', 'SRC-018', 'SRC-019', 'SRC-020', 'SRC-021', 'SRC-023', 'SRC-024',
    'SRC-025', 'SRC-026', 'SRC-027', 'SRC-028', 'SRC-029', 'SRC-030', 'SRC-031', 'SRC-032', 'SRC-033',
  ],
  brand: 'Prologis Ventures ',
  title: 'Mid Year Report – H1 2026',
  paragraphs: [
    'Prologis Ventures is pleased to present our 2026 Mid-Year Update Report, spotlighting the investment returns and strategic value across the enterprise in the first half of the year.',
    'We had a strong start to the year, investing in companies that support our position across supply chain, development, and energy, including Unit AI, Walden Robotics,  Paebbl, and Anori (funded this year following spin out). We also expanded our fund strategy to strengthen our network in maritime through TMV Logistics’, expanded our pipeline of early-stage European deals through Rethink Ventures, and doubled down on Schematic Ventures with an investment in their third fund. Excitingly, several portfolio companies are advancing toward potential liquidity events, positioning our portfolio for the strongest exit environment in several years.',
    'Our investment in Fulfillment IQ at the start of the year has been one of our most strategic yet, deepening the partnership with Essentials and strengthening Prologis’ relationship with enterprise customers like OFI and Albertsons, both with near term opportunities on the horizon. With FiQ, we also strengthened our business-building capabilities with the launch of CrossDock Studios, establishing a repeatable approach for transforming customer pain points into software products and venture-backed companies. The studio is advancing Workbench, a simulation engine for warehouse operations, WareSight, an Ai-audit tool for Operating Essentials to streamline consulting, and Zynque, and integration and orchestration platform. ',
    'Beyond investing, Ventures helped business units evaluate, adopt, and commercialize technologies that support future growth. Anori officially spun out of Google X’s Moonshot division and has begun development work with Prologis teams to streamline development and entitlement workflows. We also worked closely with our data center team to complete an LOI with portfolio company XNERGY (roughly 2 GW of potential projects where XNRGY could be leveraged to ensure Prologis retains access to mission-critical cooling infrastructure, one of the largest constraints facing hyperscale development. ',
    'Customer engagement also expanded significantly through PrologisNext, where we have engaged 308 executives representing 50 strategic customer organizations, creating new relationships with supply chain, technology, and innovation leaders who influence operational decisions and spend and helping us get earlier insights around their technology and AI strategies. We are already seeing outcomes from these engagements in the form of multiple build-to-suit opportunities and follow up discussions with Essentials and Ventures portfolio companies, including DHL who recently signed an LOI with Gideon for 70+ units. ',
    'Finally, we continued building the systems needed to scale innovation across the enterprise with the launch of the Innovation Accelerator, which is both supporting the wider enterprise AI initiative and helping teams evaluate where to invest resources, connect related efforts across the company, and create repeatable pathways for moving validated opportunities into execution.',
  ],
  dashboardLabel: 'Dashboard (Insert Rajeev Codex Site)',
  dashboardSections: [
    {
      id: 'portfolio-performance', label: 'Portfolio performance', kind: 'performance',
      items: [
        { blockId: 'SRC-010', text: '$332M invested since 2016 ', value: '$332M', label: 'invested since 2016', kind: 'metric' },
        { blockId: 'SRC-011', text: '$474M current portfolio value', value: '$474M', label: 'current portfolio value', kind: 'metric' },
        { blockId: 'SRC-012', text: '1.43x MOIC ', value: '1.43x', label: 'MOIC', kind: 'metric' },
        { blockId: 'SRC-013', text: '9.1%+ IRR ', value: '9.1%+', label: 'IRR', kind: 'metric' },
      ],
    },
    {
      id: 'investment-activity', label: '2026 investment activity', kind: 'activity',
      items: [
        { blockId: 'SRC-014', text: '2026 Investments (logos): ', kind: 'placeholder' },
        { blockId: 'SRC-015', text: '5 New: FIQ, Paebbl, Walden, Unit AI, Anori', value: '5 New:', label: 'FIQ, Paebbl, Walden, Unit AI, Anori', kind: 'ledger' },
        { blockId: 'SRC-016', text: '1 Follow-On: Gideon ', value: '1 Follow-On:', label: 'Gideon', kind: 'ledger' },
        { blockId: 'SRC-017', text: '3 Funds: TMV, Rethink, Schematic', value: '3 Funds:', label: 'TMV, Rethink, Schematic', kind: 'ledger' },
      ],
    },
    {
      id: 'strategic-value', label: 'Strategic Value of Portfolio', kind: 'strategic-value',
      items: [
        { blockId: 'SRC-019', text: '56 Total Investments', value: '56', label: 'Total Investments', kind: 'ledger' },
        { blockId: 'SRC-020', text: '33+ Serving PLD Customers', value: '33+', label: 'Serving PLD Customers', kind: 'ledger' },
        { blockId: 'SRC-021', text: '24+ Serving PLD BU’s ', value: '24+', label: 'Serving PLD BU’s', kind: 'ledger' },
        { blockId: 'SRC-023', text: '8 Portcos on Essentials Marketplace', value: '8', label: 'Portcos on Essentials Marketplace', kind: 'ledger' },
        { blockId: 'SRC-024', text: '2 PLD Pilots Initiated with Portcos in 2026', value: '2', label: 'PLD Pilots Initiated with Portcos in 2026', kind: 'ledger' },
        { blockId: 'SRC-025', text: '3 Portfolio Companies Leasing Space from Prologis', value: '3', label: 'Portfolio Companies Leasing Space from Prologis', kind: 'ledger' },
      ],
    },
    {
      id: 'major-highlights', label: 'Major Highlights', kind: 'highlights',
      items: [
        { blockId: 'SRC-027', text: '308 Customers Engaged by PrologisNext', kind: 'statement' },
        { blockId: 'SRC-028', text: 'Workstep acquired by Learningpool', kind: 'statement' },
        { blockId: 'SRC-029-SRC-030', text: '3 Incubations in CrossDock Studios: Workbench, Waresight, Zynque', kind: 'statement' },
        { blockId: 'SRC-031', text: '9 Customers Co-invested: Toyota, NVIDIA, Samsung, CoreWeave, Amazon, General Motors, Koch Industries, Microsoft, Saint-Gobain', kind: 'statement' },
        { blockId: 'SRC-032', text: '161 Ideas Shared Since Innovation Accelerator Launch', kind: 'statement' },
      ],
    },
  ] satisfies DashboardSection[],
} as const
