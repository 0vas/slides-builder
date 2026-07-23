import assert from 'node:assert/strict'
import test from 'node:test'

import { deckBasePath, normalizeSiteBasePath } from './deployment-paths.mjs'

test('normalizes the site root and nested prefixes', () => {
  assert.equal(normalizeSiteBasePath('/'), '/')
  assert.equal(normalizeSiteBasePath('preview'), '/preview/')
  assert.equal(normalizeSiteBasePath('/preview/'), '/preview/')
})

test('uses the repository path when no deployment override is present', () => {
  assert.equal(
    deckBasePath({ slug: 'intro-devops-es', repoName: 'slides' }),
    '/slides/intro-devops-es/'
  )
})

test('publishes each deck below the custom-domain root', () => {
  assert.equal(
    deckBasePath({
      slug: 'intro-devops-es',
      repoName: 'slides',
      siteBasePath: '/'
    }),
    '/intro-devops-es/'
  )
})

test('keeps BASE_PATH as an exact per-deck compatibility override', () => {
  assert.equal(
    deckBasePath({
      slug: 'intro-devops-es',
      repoName: 'slides',
      basePath: '/preview/talk/'
    }),
    '/preview/talk/'
  )
})
