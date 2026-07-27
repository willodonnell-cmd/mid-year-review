export type NavigationItem = { path: string; label: string; id: string; sourceSection?: string }
export type Metric = { value: string; label?: string; format?: 'metric' | 'text' }
export type MetricGroup = { title: string; metrics: Metric[] }
export const reportManifest = { navigation: [
  { path: '/', id: 'executive-summary', label: 'Executive Summary' },
  { path: 'https://pldv-portfolio-dashboard-jul27.prologis.chatgpt.site/', id: 'pldv-portfolio-returns', label: 'PLDV Portfolio Returns' },
  { path: '/portfolio', id: 'key-portfolio-updates', label: 'Key Portfolio Updates' },
  { path: '/business-unit-acceleration', id: 'business-unit-acceleration', label: 'Business Unit Acceleration' },
  { path: '/customer-impact', id: 'customer-access-commercial-impact', label: 'Customer Access & Commercial Impact' },
  { path: '/business-building', id: 'business-building-incubation', label: 'Business Building & Incubation' },
  { path: '/scaling-innovation', id: 'scaling-commercializing-innovation', label: 'Scaling & Commercializing Innovation' },
  { path: '/appendix', id: 'appendix', label: 'Appendix' },
] as NavigationItem[] }
