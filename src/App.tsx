import reportSpecification from '../H1_2026_Mid_Year_Report_FINAL_CODEX_SPEC.md?raw'
import { reportManifest } from './content/report-manifest'
import { DashboardMetrics, FullReport, ReportNavigation, SiteShell } from './components/report'
import './App.css'

function App() {
  const activeSection = reportManifest.navigation.find((item) => item.path === window.location.pathname) ?? reportManifest.navigation[0]
  return <SiteShell>
    <header className="site-header">
      <div className="report-utility" aria-label="Report context">
        <a className="report-identity" href="/"><img className="report-identity__mark" src="/prologis-ventures-logo.png" alt="Prologis Ventures" /><span>2026 Mid-Year Report</span></a>
      </div>
      <ReportNavigation items={reportManifest.navigation} activePath={activeSection.path} />
    </header>
    {activeSection.id === 'dashboard-metrics'
      ? <DashboardMetrics />
      : <FullReport source={reportSpecification} section={activeSection.sourceSection ?? activeSection.label} />}
  </SiteShell>
}

export default App
