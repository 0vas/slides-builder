export function normalizeSiteBasePath(value) {
  const path = String(value ?? '').trim()

  if (!path || path === '/') {
    return '/'
  }

  return `/${path.replace(/^\/+|\/+$/g, '')}/`
}

export function deckBasePath({ slug, repoName, basePath, siteBasePath }) {
  if (String(basePath ?? '').trim()) {
    return normalizeSiteBasePath(basePath)
  }

  const siteBase = normalizeSiteBasePath(
    String(siteBasePath ?? '').trim() || `/${repoName}/`
  )

  return siteBase === '/' ? `/${slug}/` : `${siteBase}${slug}/`
}
