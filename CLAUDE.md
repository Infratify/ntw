# NTW 2026 deck authoring rules

Slidev decks for the five National Training Week "Why X?" taster webinars.
`README.md` holds the locked facts: schedule, banner copy per session, session
blurbs, audience (absolute beginners, max 100 pax on Zoom), and the
demo-is-the-proof rule (every "Why?" is answered by a live demo, never argued
in slides). Read it before authoring a deck. `why-linux/` is the reference
implementation; copy patterns from there, not from scratch.

## Deck anatomy

- `slides.md` is headmatter + a `src:` manifest only. One slide per
  `pages/<slug>.md` (the first page is imported via `src:` inside the
  headmatter itself). Slide content, per-slide frontmatter (layout,
  transition, clicks) and presenter notes live in the page file.
- Presenter notes carry the demo scripts (steps, prep commands, fallbacks)
  and timing hints. Never delete them when editing a slide.
- Shared pieces: `components/` (LayerStack, RequestPath, FlowGraph,
  TermWindow, LiveBadge, DiagIcon + diagram-icons.ts), `style.css` (links,
  eyebrows, note gutters, reveal grammar), `global-bottom.vue` (footer).
  Copy these from `why-linux/` when scaffolding a new deck.
- Deps per deck: `@iconify-json/mdi` + `@iconify-json/logos`. Build script:
  `slidev build --base /ntw/<deck-dir>/`.

## Hard rules

**Budget.** Under 20 slides. Titles are 4 words or fewer, sentence case.
Card captions ~6 words. Icons carry meaning; sentences are for payoff lines.
No section-divider slides: segment openers get an `.eyebrow` part chip
(`part N · theme`) instead.

**Copy.** Spoken register, aimed at a beginner listening, not reading.
No em or en dashes anywhere in visible copy. No Title Case headers. No
rule-of-three padding, no "it's not X, it's Y" constructions. Every claim on
a slide must be provable in the live demo.

**Visual.** Must pass BOTH color schemes; verify with screenshots in dark
and light at final click state before calling a deck done (jump clicks via
`?clicks=N`, but confirm v-mark slides at natural click pacing too).
Never use `border-l-*` accent bars. Vary container treatments across slides
(typographic beats, icon medallions, terminal-as-content, split screens,
ghost numerals) instead of repeating one rounded tinted card. Diagram colors
come from the DIAG grammar in `components/diagram-icons.ts` (red pain, green
win, cyan local, blue remote, amber caution, purple alt). No hardcoded
black/white text or backgrounds outside TermWindow (the terminal is always
dark by design; a GUI window mock is always light). Slide text inherits the
theme color; accents use `text-<color>-600 dark:text-<color>-400`.

**Motion.** Every slide gets one deliberate reveal: `v-click` with the
`style.css` reveal grammar (`.pop`, `.from-left/right`, `.term-print`),
`v-motion` for on-enter beats, `v-switch` for content swaps. Transitions:
`slide-left` inside a segment, `fade-out` on beats and segment closers.
Gotchas: `v-mark` highlight only on spans of 3 words or fewer; any v-click
element containing a `v-mark` needs the `mark-safe` class (translate
transforms break the annotation's position); content inside a `v-switch`
template can't use `v-click` reveals, use the `.pop-in` mount animation;
a `v-switch` last template needs an explicit range (`#2-4`) to survive
later clicks.

**Links and CTA.** Every visible URL is a styled clickable `<a href>`
(styling comes from `style.css`), never plain text. No bootcamp hard sell
anywhere; the single soft CTA is the hub, https://infratify.github.io/ntw/,
plus a plug for the next day's session on the closing slide.

**Demo slides.** Open with `<LiveBadge />` + title in a flex row. The
TermWindow shows a signpost transcript of what the audience is about to
watch for real.

## Scaffold checklist for a new deck

1. Copy `components/`, `style.css`, `global-bottom.vue`, `public/logo*.svg`
   from `why-linux/`; match its `package.json` (adjust `--base`).
2. Write `pages/<slug>.md` files; wire them in `slides.md`.
3. `pnpm dev`, screenshot every slide in both color schemes, fix contrast.
4. `pnpm build` must pass. Grep pages for `border-l-` and `—` (both must be
   absent) before finishing.
