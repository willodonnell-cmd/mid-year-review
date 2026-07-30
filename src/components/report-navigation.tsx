import { reportManifest, type NavigationItem } from '../content/report-manifest'

export const portfolioPerformancePath = '/portfolio-performance'

const internalReportPaths = new Set(
  reportManifest.navigation
    .filter((item) => item.path.startsWith('/'))
    .map((item) => item.path),
)

const chapterDirectory = reportManifest.navigation.filter((item) => item.id !== 'executive-summary')
const chapterFlow = reportManifest.navigation

export function ReportLink({ href, ...props }: React.AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }) {
  const normalizedPath = href.replace(/\/+$/, '') || '/'
  const routedHref = internalReportPaths.has(normalizedPath) ? `/#${normalizedPath}` : href
  return <a {...props} href={routedHref} />
}

export function SiteShell({ children }: { children: React.ReactNode }) {
  return <div id="top" className="site-shell">{children}</div>
}

export function ReportNavigation({ items, activePath }: { items: NavigationItem[]; activePath: string }) {
  return <nav className="report-nav" aria-label="Report sections">
    <ul>{items.map((item) => <li key={item.path}><ReportLink href={item.path} aria-current={item.path === activePath ? 'page' : undefined}>{item.label}</ReportLink></li>)}</ul>
  </nav>
}

export function ChapterControls({ activePath }: { activePath: string }) {
  const activeIndex = chapterFlow.findIndex((chapter) => chapter.path === activePath)
  const previous = activeIndex > 0 ? chapterFlow[activeIndex - 1] : undefined
  const next = activeIndex >= 0 && activeIndex < chapterFlow.length - 1 ? chapterFlow[activeIndex + 1] : undefined

  return <nav className="chapter-controls" aria-label="Chapter navigation">
    <ReportLink href="/" aria-current={activePath === '/' ? 'page' : undefined}>Executive Overview</ReportLink>
    {previous ? <ReportLink href={previous.path}>Previous chapter</ReportLink> : <span aria-disabled="true">Previous chapter</span>}
    {next ? <ReportLink href={next.path}>Next chapter</ReportLink> : <span aria-disabled="true">Next chapter</span>}
  </nav>
}

export function ChapterDirectory({ activePath }: { activePath: string }) {
  return <nav className="chapter-directory" aria-label="All report chapters">
    <p>Explore the Report</p>
    <ol>
      {chapterDirectory.map((chapter, index) => <li key={chapter.path}>
        <ReportLink href={chapter.path} aria-current={chapter.path === activePath ? 'page' : undefined}>
          <span>{String(index + 1).padStart(2, '0')}</span>{chapter.label}
        </ReportLink>
      </li>)}
    </ol>
  </nav>
}
