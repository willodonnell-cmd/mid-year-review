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

  const ArrowIcon = ({ direction }: { direction: 'previous' | 'next' }) => <svg aria-hidden="true" viewBox="0 0 24 24">
    {direction === 'previous'
      ? <path d="M15.5 5 8.5 12l7 7M9 12h10" />
      : <path d="m8.5 5 7 7-7 7M15 12H5" />}
  </svg>

  return <nav className="chapter-controls" aria-label="Chapter navigation">
    <div className="chapter-progress" aria-label={`Chapter ${activeIndex + 1} of ${chapterFlow.length}`}>
      <span>Chapter {activeIndex + 1} of {chapterFlow.length}</span>
      <i aria-hidden="true">
        {chapterFlow.map((chapter, index) => <b className={index <= activeIndex ? 'is-complete' : undefined} key={chapter.path} />)}
      </i>
    </div>
    <div className="chapter-controls__arrows">
      {previous
        ? <ReportLink className="chapter-control-arrow" href={previous.path} aria-label={`Previous chapter: ${previous.label}`} title={`Previous chapter: ${previous.label}`}><ArrowIcon direction="previous" /></ReportLink>
        : <span className="chapter-control-arrow" aria-disabled="true"><ArrowIcon direction="previous" /></span>}
      {next
        ? <ReportLink className="chapter-control-arrow" href={next.path} aria-label={`Next chapter: ${next.label}`} title={`Next chapter: ${next.label}`}><ArrowIcon direction="next" /></ReportLink>
        : <span className="chapter-control-arrow" aria-disabled="true"><ArrowIcon direction="next" /></span>}
    </div>
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
