export type NavigationItem = { path: string; label: string; id: string; sourceSection?: string }
export type Metric = { value: string; label?: string; format?: 'metric' | 'text' }
export type MetricGroup = { title: string; metrics: Metric[] }
export const reportManifest = { navigation: [
  { path: '/', id: 'executive-summary', label: 'Executive Summary' },
  { path: '/portfolio-performance', id: 'pldv-portfolio-returns', label: 'Portfolio Performance' },
  { path: '/portfolio', id: 'key-portfolio-updates', label: 'Portfolio Update' },
  { path: '/business-unit-acceleration', id: 'business-unit-acceleration', label: 'Accelerating Prologis Growth' },
  { path: '/customer-impact', id: 'customer-access-commercial-impact', label: 'Engaging Prologis Customers' },
  { path: '/business-building', id: 'business-building-incubation', label: 'Building New Businesses' },
  { path: '/scaling-innovation', id: 'scaling-commercializing-innovation', label: 'Accelerating Innovation' },
  { path: '/appendix', id: 'appendix', label: 'Appendix' },
] as NavigationItem[] }
