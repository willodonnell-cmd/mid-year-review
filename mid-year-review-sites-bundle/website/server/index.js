export default {
  async fetch(request, env) {
    const response = await env.ASSETS.fetch(request)
    const { pathname } = new URL(request.url)
    if (response.status !== 404 || request.method !== 'GET' || pathname.includes('.')) return response
    return env.ASSETS.fetch(new Request(new URL('/index.html', request.url), request))
  },
}
