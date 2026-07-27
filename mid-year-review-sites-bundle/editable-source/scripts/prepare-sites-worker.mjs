import { mkdirSync, writeFileSync } from 'node:fs'
import { resolve } from 'node:path'

const serverDirectory = resolve('dist/server')
mkdirSync(serverDirectory, { recursive: true })
writeFileSync(resolve(serverDirectory, 'index.js'), `export default {
  async fetch(request, env) {
    const response = await env.ASSETS.fetch(request)
    const { pathname } = new URL(request.url)
    if (response.status !== 404 || request.method !== 'GET' || pathname.includes('.')) return response
    return env.ASSETS.fetch(new Request(new URL('/index.html', request.url), request))
  },
}\n`)
