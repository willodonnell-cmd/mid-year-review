import reportSpecification from '../H1_2026_Mid_Year_Report_FINAL_CODEX_SPEC.md?raw'
import { reportManifest } from './content/report-manifest'
import { AcceleratingInnovation, Appendix, BuildingNewBusinesses, ChapterControls, ChapterDirectory, DashboardMetrics, DrivingCustomerEngagement, ExecutiveOverview, FullReport, PortfolioUpdate, SiteShell, SupportingGrowth } from './components/report'
import './App.css'
import './components/executive-summary.css'
import './components/portfolio-update.css'
import './components/supporting-growth.css'
import './components/building-businesses.css'
import './components/appendix.css'
import './components/customer-engagement.css'
import './components/accelerating-innovation.css'

function App() {
  const activeSection = reportManifest.navigation.find((item) => item.path === window.location.pathname) ?? reportManifest.navigation[0]
  const isExecutiveOverview = activeSection.id === 'executive-summary'
  const isPortfolioUpdate = activeSection.id === 'key-portfolio-updates'
  const isSupportingGrowth = activeSection.id === 'business-unit-acceleration'
  const isBuildingNewBusinesses = activeSection.id === 'business-building-incubation'
  const isAppendix = activeSection.id === 'appendix'
  const isCustomerEngagement = activeSection.id === 'customer-access-commercial-impact'
  const isAcceleratingInnovation = activeSection.id === 'scaling-commercializing-innovation'
  return <SiteShell>
    {isExecutiveOverview ? <ExecutiveOverview /> : <>
      <header className="site-header">
        <div className="report-utility" aria-label="Report context">
          <a className="report-identity" href="/"><img className="report-identity__mark" src="/prologis-ventures-logo.png" alt="Prologis Ventures" /><span>2026 Mid-Year Report</span></a>
          <ChapterControls activePath={activeSection.path} />
        </div>
      </header>
      {isPortfolioUpdate ? <PortfolioUpdate /> : isSupportingGrowth ? <SupportingGrowth /> : isBuildingNewBusinesses ? <BuildingNewBusinesses /> : isAppendix ? <Appendix /> : isCustomerEngagement ? <DrivingCustomerEngagement /> : isAcceleratingInnovation ? <AcceleratingInnovation /> : <>
        {activeSection.id === 'dashboard-metrics'
          ? <DashboardMetrics />
          : <FullReport source={reportSpecification} section={activeSection.sourceSection ?? activeSection.label} />}
        <ChapterDirectory activePath={activeSection.path} />
      </>}
    </>}
  </SiteShell>
}

export default App
