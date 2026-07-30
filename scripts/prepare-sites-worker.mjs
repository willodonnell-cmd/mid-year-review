import { mkdirSync, readdirSync, renameSync, writeFileSync } from 'node:fs'
import { resolve } from 'node:path'

const outputDirectory = resolve('dist')
const clientDirectory = resolve(outputDirectory, 'client')
const serverDirectory = resolve('dist/server')
const workerName = 'mid-year-review'

mkdirSync(clientDirectory, { recursive: true })
for (const entry of readdirSync(outputDirectory, { withFileTypes: true })) {
  if (entry.name === 'client' || entry.name === 'server' || entry.name === '.openai') continue
  renameSync(resolve(outputDirectory, entry.name), resolve(clientDirectory, entry.name))
}

mkdirSync(serverDirectory, { recursive: true })
writeFileSync(resolve(serverDirectory, 'index.js'), `export default {
  async fetch(request, env) {
    const { pathname } = new URL(request.url)
    if (request.method === 'GET' && !pathname.includes('.')) {
      return env.ASSETS.fetch(new Request(new URL('/index.html', request.url), request))
    }
    return env.ASSETS.fetch(request)
  },
}\n`)

writeFileSync(resolve(serverDirectory, 'wrangler.json'), `${JSON.stringify({
  topLevelName: workerName,
  name: workerName,
  compatibility_date: '2026-05-15',
  compatibility_flags: ['nodejs_compat'],
  main: 'index.js',
  no_bundle: true,
  rules: [{ type: 'ESModule', globs: ['**/*.js', '**/*.mjs'] }],
  assets: {
    directory: '../client',
    binding: 'ASSETS',
    html_handling: 'none',
    not_found_handling: 'single-page-application',
    run_worker_first: true,
  },
  observability: { enabled: true },
})}\n`)
