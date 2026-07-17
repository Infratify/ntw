#!/usr/bin/env node
// Deck lint — enforces the authoring laws in CLAUDE.md on pages/*.md so slide
// quality is machine-checked, not taste-dependent.
//
//   node scripts/lint-deck.mjs [deckDir ...]     e.g. node scripts/lint-deck.mjs why-linux
//   (no args: lints every why-*/ that has a pages/ directory)
//
// Checks per page:
//   1. slide title (first #/##/### or <h1-3>) is 4 words or fewer
//   2. at most ONE prose segment: a run of PROSE_WORDS+ words in visible copy,
//      after stripping frontmatter, notes, tags and TermWindow transcripts
//      (the show/tell law: labels on the slide, sentences in the notes)
//   3. no banned surface patterns or rhetorical-register phrases
//   4. a presenter-notes <!-- --> block exists (the spoken script lives there)

import { readdirSync, readFileSync, existsSync, statSync } from 'node:fs'
import { join, relative } from 'node:path'
import process from 'node:process'

const MAX_TITLE_WORDS = 4
const PROSE_WORDS = 8 // a text run with this many words counts as prose
const MAX_PROSE_SEGMENTS = 1

const BANNED = [
  [/—|–/, 'em/en dash in visible copy'],
  [/border-l-/, 'border-l accent bar'],
  [/\bthe deal\b/i, 'fake-candid hook ("the deal")'],
  [/\bcool again\b/i, 'marketing register ("cool again")'],
  [/didn'?t lie/i, 'drama-by-negation ("didn\'t lie")'],
  [/\bpromises?\b/i, 'poster-narrative framing ("promise")'],
  [/\bsuperpowers?\b/i, 'marketing register ("superpowers")'],
  [/\bmagic(al)?\b/i, 'marketing register ("magic")'],
  [/\bnot (just|merely|only)\b/i, 'negative parallelism ("not just X")'],
]

const wordsIn = (s) =>
  s.split(/\s+/).filter((w) => /[\p{L}\p{N}]/u.test(w)).length

function lintPage(file, src) {
  const problems = []

  if (!/<!--[\s\S]*?-->/.test(src)) {
    problems.push('missing presenter notes (<!-- ... --> block with the spoken script)')
  }

  let body = src
    .replace(/^---\n[\s\S]*?\n---\n/, '') // frontmatter
    .replace(/<!--[\s\S]*?-->/g, '') // presenter notes / comments
    .replace(/<script[\s\S]*?<\/script>/g, '') // script setup
    .replace(/<TermWindow[\s\S]*?<\/TermWindow>/g, '<TermWindow />') // transcripts are exempt

  const title =
    body.match(/^#{1,3}\s+(.+)$/m)?.[1] ?? body.match(/<h[123][^>]*>([^<]+)</)?.[1]
  if (title && wordsIn(title) > MAX_TITLE_WORDS) {
    problems.push(`title "${title.trim()}" is ${wordsIn(title)} words (max ${MAX_TITLE_WORDS})`)
  }

  for (const [re, why] of BANNED) {
    const hit = body.match(re)
    if (hit) problems.push(`banned: ${why} → "${hit[0]}"`)
  }

  const text = body
    .replace(/\{\{[\s\S]*?\}\}/g, ' ') // vue interpolations
    .replace(/:\w+(-\w+)*="[^"]*"/g, ' ') // bound attributes (diagram props)
    // inline formatting doesn't break a sentence — strip it so prose can't
    // hide behind <b>/<span v-mark>/icon tags
    .replace(/<\/?(?:a|b|i|em|strong|code|span|small|sub|sup|mdi-[\w-]+|logos-[\w-]+)\b[^>]*\/?>/g, '')
    .replace(/<[^>]+>/g, '\n') // block tags split text nodes
    .replace(/&[a-z]+;/g, ' ')
  const prose = text
    .split(/\n+/)
    .map((s) => s.trim())
    .filter((s) => wordsIn(s) >= PROSE_WORDS)
  if (prose.length > MAX_PROSE_SEGMENTS) {
    problems.push(
      `${prose.length} prose segments (max ${MAX_PROSE_SEGMENTS}) — move sentences to presenter notes:` +
        prose.map((p) => `\n      · "${p.length > 60 ? p.slice(0, 60) + '…' : p}"`).join(''),
    )
  }

  return problems
}

const root = process.cwd()
const decks = process.argv.slice(2).length
  ? process.argv.slice(2)
  : readdirSync(root).filter(
      (d) => d.startsWith('why-') && existsSync(join(root, d, 'pages')) && statSync(join(root, d)).isDirectory(),
    )

let failures = 0
let pageCount = 0
for (const deck of decks) {
  const pagesDir = join(root, deck, 'pages')
  if (!existsSync(pagesDir)) {
    console.error(`skip ${deck}: no pages/ directory`)
    continue
  }
  for (const f of readdirSync(pagesDir).filter((f) => f.endsWith('.md')).sort()) {
    pageCount++
    const file = join(pagesDir, f)
    const problems = lintPage(file, readFileSync(file, 'utf8'))
    if (problems.length) {
      failures += problems.length
      console.error(`\n${relative(root, file)}`)
      for (const p of problems) console.error(`  ✗ ${p}`)
    }
  }
}

if (failures) {
  console.error(`\n${failures} problem(s) across ${pageCount} page(s).`)
  process.exit(1)
}
console.log(`✓ ${pageCount} page(s) clean (${decks.join(', ')})`)
