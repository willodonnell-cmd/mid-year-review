import { useEffect, useState, type ComponentType } from 'react'
import reportSpecification from '../H1_2026_Mid_Year_Report_FINAL_CODEX_SPEC.md?raw'
import { reportManifest } from './content/report-manifest'
import { AcceleratingInnovation, Appendix, BuildingNewBusinesses, ChapterControls, ChapterDirectory, DashboardMetrics, DrivingCustomerEngagement, ExecutiveOverview, FullReport, PortfolioPerformance, PortfolioUpdate, ReportLink, SiteShell, SupportingGrowth } from './components/report'
import './App.css'
import './components/executive-summary.css'
import './components/portfolio-update.css'
import './components/supporting-growth.css'
import './components/building-businesses.css'
import './components/appendix.css'
import './components/customer-engagement.css'
import './components/accelerating-innovation.css'
import './components/chapter-pages.css'

function currentReportPath() {
  const hashPath = window.location.hash.startsWith('#/') ? window.location.hash.slice(1) : ''
  return (hashPath || window.location.pathname).replace(/\/+$/, '') || '/'
}

const chapterComponents: Partial<Record<string, ComponentType>> = {
  'key-portfolio-updates': PortfolioUpdate,
  'pldv-portfolio-returns': PortfolioPerformance,
  'business-unit-acceleration': SupportingGrowth,
  'business-building-incubation': BuildingNewBusinesses,
  appendix: Appendix,
  'customer-access-commercial-impact': DrivingCustomerEngagement,
  'scaling-commercializing-innovation': AcceleratingInnovation,
}

function App() {
  const [requestedPath, setRequestedPath] = useState(currentReportPath)

  useEffect(() => {
    const syncPath = () => setRequestedPath(currentReportPath())
    window.addEventListener('hashchange', syncPath)
    window.addEventListener('popstate', syncPath)
    return () => {
      window.removeEventListener('hashchange', syncPath)
      window.removeEventListener('popstate', syncPath)
    }
  }, [])

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [requestedPath])

  const activeSection = reportManifest.navigation.find((item) => item.path === requestedPath) ?? reportManifest.navigation[0]
  const Chapter = chapterComponents[activeSection.id]
  return <SiteShell>
    {activeSection.id === 'executive-summary' ? <ExecutiveOverview /> : <>
      <header className="site-header">
        <div className="report-utility" aria-label="Report context">
          <ReportLink className="report-identity" href="/"><img className="report-identity__mark" src="/prologis-ventures-logo.png" alt="Prologis Ventures" /><span>2026 Mid-Year Report</span></ReportLink>
          <ChapterControls activePath={activeSection.path} />
        </div>
      </header>
      {Chapter ? <Chapter /> : <>
        {activeSection.id === 'dashboard-metrics' ? <DashboardMetrics /> : <FullReport source={reportSpecification} section={activeSection.sourceSection ?? activeSection.label} />}
        <ChapterDirectory activePath={activeSection.path} />
      </>}
    </>}
  </SiteShell>
}

export default App
