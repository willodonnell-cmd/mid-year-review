import './design-review.css'
import './hybrid-review.css'
import './hybrid-clean.css'
import './header-review.css'

const lead = 'During the first half of the year, Ventures leveraged portfolio and network to help business teams evaluate, deploy, and commercialize new technologies across the company. From AI-enabled development workflows and data center infrastructure to customer-facing Essentials offerings and new energy capabilities, Ventures is helping turn market opportunities into operating capabilities that strengthen how Prologis serves customers and builds its business.'
const fiq = 'After completing our investment into supply chain consultancy FulfillmentIQ in Janaury, our partnership has expanded Prologis\' ability to engage customers earlier in their supply chain transformation efforts by combining supply chain consulting, implementation, software development, and Operating Essentials infrastructure capabilities into a single customer offering.'
const outcome = 'During the first half of the year, FIQ helped secure Prologis\' first lease with OFI, representing $74M in rent commitments and $4.6M in Operating Essentials gross revenue.'
const topics = ['Operating Essentials', 'Development & Data Centers', 'Energy & Sustainability']

export function NarrativeDesignReview({ option }: { option: string }) {
  const isMemo = option === 'memo'
  const isDigest = option === 'digest'
  const isBriefing = option === 'briefing'
  const isHybrid = option === 'hybrid'
  const isHeaderA = option === 'header-a'
  const isHeaderB = option === 'header-b' || option === 'header-b-evidence' || option === 'header-b-paper-white' || option === 'header-b-paper-warm' || option === 'header-b-width-760' || option === 'header-b-width-680' || option === 'header-b-width-780' || option === 'header-b-width-840' || option === 'header-b-approved'
  const isHeaderC = option === 'header-c'
  const label = isMemo ? 'A. Traditional IC memo' : isDigest ? 'B. Executive digest' : isBriefing ? 'C. Briefing book' : isHybrid ? 'Hybrid. IC memo with executive digest' : option === 'article' ? 'Previous A. Continuous executive article' : option === 'modules' ? 'Previous B. Editorial chapters' : 'Previous C. Dashboard-first narrative'
  if (isHeaderA || isHeaderB || isHeaderC) return <HeaderReview option={option} />
  return <main className="design-review">{!isHybrid && <><p className="section-label">Development-only design review</p><p className="review-label">{label}</p></>}
    {isMemo && <article className="memo-review"><header><p className="section-label">Business Unit Acceleration</p><h1>Business Unit Acceleration</h1><div /></header><p className="memo-lead">{lead}</p><hr /><h2>Operating Essentials</h2><p>{fiq}</p><p>{outcome}</p><h2>Development & Data Centers</h2><p>Helping Prologis leverage AI to modernize development workflows</p></article>}
    {isDigest && <article className="digest-review"><header><p className="section-label">Business Unit Acceleration</p><h1>Business Unit Acceleration</h1></header><section className="digest-summary"><div><h2>Executive summary</h2><p>{lead}</p></div><aside><p className="section-label">At a glance</p><dl><div><dt>$74M</dt><dd>rent commitments</dd></div><div><dt>$4.6M</dt><dd>Operating Essentials gross revenue</dd></div><div><dt>2 GW</dt><dd>potential HVAC opportunities</dd></div></dl></aside></section><section className="digest-section"><h2>Operating Essentials</h2><div><p>{fiq}</p><p>{outcome}</p></div></section></article>}
    {isBriefing && <article className="briefing-review"><header><p className="section-label">Business Unit Acceleration</p><h1>Business Unit Acceleration</h1></header><div className="briefing-layout"><aside><p className="section-label">In this section</p><ol>{topics.map((topic, index) => <li key={topic}><span>0{index + 1}</span>{topic}</li>)}</ol></aside><section><h2>Executive summary</h2><p className="memo-lead">{lead}</p><hr /><h2>Operating Essentials</h2><p>{fiq}</p><p>{outcome}</p></section></div></article>}
    {isHybrid && <article className="hybrid-review"><header><h1>Business Unit Acceleration</h1></header><p className="memo-lead">{lead}</p><section className="hybrid-evidence"><p className="section-label">Executive evidence</p><dl><div><dt>$74M</dt><dd>rent commitments</dd></div><div><dt>$4.6M</dt><dd>Operating Essentials gross revenue</dd></div><div><dt>2 GW</dt><dd>potential HVAC opportunities</dd></div></dl></section><hr /><h2>Operating Essentials</h2><p>{fiq}</p><p>{outcome}</p></article>}
    {!isMemo && !isDigest && !isBriefing && !isHybrid && <p>These earlier directions have been superseded by the executive-digest review.</p>}
  </main>
}

function HeaderReview({ option }: { option: string }) {
  const title = 'Prologis Ventures 2026 Mid-Year Investment Committee Report'
  const nav = ['Executive Summary', 'Portfolio & Financial Performance', 'Business Unit Acceleration', 'Customer Access & Commercial Impact', 'Business Building & Incubation', 'Scaling & Commercializing Innovation', 'Appendix']
  const isHeaderB = option === 'header-b' || option === 'header-b-evidence' || option === 'header-b-paper-white' || option === 'header-b-paper-warm' || option === 'header-b-width-760' || option === 'header-b-width-680' || option === 'header-b-width-780' || option === 'header-b-width-840' || option === 'header-b-approved'
  const showPaperComparison = option === 'header-b-paper-white' || option === 'header-b-paper-warm' || option === 'header-b-width-760' || option === 'header-b-width-680' || option === 'header-b-width-780' || option === 'header-b-width-840' || option === 'header-b-approved'
  const showEvidence = option === 'header-b-evidence' || showPaperComparison
  const warmPaper = option === 'header-b-paper-warm'
  const narrowMemo = option === 'header-b-width-680'
  const targetMemo = option === 'header-b-width-780'
  const wideMemo = option === 'header-b-width-840' || option === 'header-b-approved'
  const wideMemoStyle = wideMemo ? { maxWidth: '840px' } : targetMemo ? { maxWidth: '780px' } : undefined
  const label = option === 'header-a' ? 'A. Compact single-line report header' : isHeaderB ? 'B. Two-level masthead with section rail' : 'C. Memo-style report header with section index'
  return <div className={`header-review${warmPaper ? ' paper-warm' : ''}${narrowMemo ? ' memo-narrow' : ''}${wideMemo ? ' memo-wide' : ''}`}>{option !== 'header-b-approved' && <p className="review-note">Development-only design review · {label}</p>}
    {option === 'header-a' && <><header className="frame-a"><strong>PROLOGIS<span>.</span></strong><p>{title}</p><button>Sections</button></header><section className="frame-content"><h1>Business Unit Acceleration</h1><p>{lead}</p></section></>}
    {isHeaderB && <><header className="frame-b"><div><strong>PROLOGIS<span>.</span></strong><p>{title}</p></div><nav>{nav.map((item) => <span key={item}>{item}</span>)}<button type="button">More <span aria-hidden="true">+</span></button></nav></header><section className="frame-content" style={wideMemo ? { maxWidth: '1100px' } : targetMemo ? { maxWidth: '1040px' } : undefined}><h1>Business Unit Acceleration</h1><p style={wideMemoStyle}>{lead}</p>{showPaperComparison && <><h2>Operating Essentials</h2><p style={wideMemoStyle}>{fiq}</p><p style={wideMemoStyle}>{outcome}</p></>}{showEvidence && <section className="header-evidence" style={wideMemoStyle}><dl><div><dt>$74M</dt><dd>rent commitments</dd></div><div><dt>$4.6M</dt><dd>Operating Essentials gross revenue</dd></div><div><dt>2 GW</dt><dd>potential HVAC opportunities</dd></div></dl></section>}</section></>}
    {option === 'header-c' && <><header className="frame-c"><strong>PROLOGIS<span>.</span></strong><p>{title}</p></header><div className="memo-frame"><aside><p>Sections</p>{nav.map((item, index) => <div key={item}><span>0{index + 1}</span>{item}</div>)}</aside><section><h1>Business Unit Acceleration</h1><p>{lead}</p></section></div></>}
  </div>
}
