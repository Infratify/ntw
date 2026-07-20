# NTW 2026 deck authoring rules

Slidev decks for the five National Training Week "Why X?" taster webinars.
`README.md` holds the locked facts: schedule, banner copy per session, session
blurbs, audience, and the demo-is-the-proof rule (every "Why?" is answered by
a live demo, never argued in slides). Read it before authoring a deck.
`why-linux/` is the reference implementation; copy patterns from there, not
from scratch.

**Who is watching (write for them, always).** Each deck serves a ~2-hour
free live introduction session on Zoom with up to 300 participants:
absolute beginners and career-switchers, many non-technical, from any
industry. Assume zero prior IT background — someone who has never opened a
terminal must be able to follow every slide and every spoken line. Gloss
jargon the first time it is spoken, anchor concepts to everyday things
(file managers, WhatsApp, Ctrl+F), and never lean on knowledge a slide
hasn't introduced. Attendees install nothing and only watch; questions
arrive through Zoom chat and are batched at breaks.

## Deck anatomy

- `slides.md` is headmatter + a `src:` manifest only. One slide per
  `pages/<slug>.md` (the first page is imported via `src:` inside the
  headmatter itself). Slide content, per-slide frontmatter (layout,
  transition, clicks) and presenter notes live in the page file.
- **Every slide starts from an archetype in `templates/`** (title, beat, map,
  icon-grid, diagram, demo-signpost, terminal-content, split, quadrants,
  prompt-paths, thanks). Map each outline beat to an archetype, copy the
  file, fill the `{{SLOT}}`s within their stated budgets. Don't invent a new
  layout mid-deck; if no archetype fits, design it once and add it to
  `templates/` first.
- `scripts/lint-deck.mjs` machine-checks the laws below on every page
  (`pnpm lint:decks`); it runs in CI before the build, so a violation fails
  the deploy. Run it before calling any slide done.
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

**Copy: the show/tell law.** The slide shows, the trainer tells. On-slide
text is labels of 4 words or fewer; at most ONE full sentence per slide (the
payoff), and it must state an observable fact ("a real remote server"),
never a verdict or punchline ("the terminal proved it"). Every sentence the
audience should hear goes in the presenter notes, which are mandatory on
every page and carry the spoken script (`[click]`-prefixed lines for
click-timed narration). Every claim must be provable in the live demo.
Notes narrate the same example the slide shows (payoff says WhatsApp →
script says WhatsApp, not TikTok), and gloss any jargon the audience will
hear ("the green 200 OK means done, here you go") — the spoken script is
for absolute beginners too.

**Copy: banned rhetorical moves.** These are the structural tells that
survive word-level cleanup, so they are banned outright:
- meta-narrative about the session, poster, or deck ("the poster made three
  promises", "we test each one live") — state what happens, don't narrate
  the deck as a story;
- personification of artifacts (posters that promise, terminals that prove);
- setup→payoff callback arcs and victory-lap recaps — a recap lists facts;
- staccato punchlines and drama-by-negation ("It moved in.", "didn't lie",
  "not X, it's Y");
- fake-candid hooks and marketing register ("the deal", "cool again",
  "superpowers", "magic");
- em/en dashes, Title Case headers, rule-of-three padding.
The lint enforces the mechanical subset; the rest is on the author.

**Visual.** Must pass BOTH color schemes; verify with screenshots in dark
and light at final click state before calling a deck done (jump clicks via
`?clicks=N`, but confirm v-mark slides at natural click pacing too —
rough-notation marks often skip drawing on URL jumps; step with arrow keys).
In a scripted browser, force a scheme with
`localStorage.setItem('slidev-color-schema', 'dark'|'light')` then reload.
`mdi-*`/`logos-*` icon components render a **1.2em box**; a custom inline
SVG sharing an icon row must use `width="1.2em" height="1.2em"` plus the
same `text-<size>` class, or its labels sit off-baseline.
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
rotate `slide-left`/`slide-right`/`slide-up`/`slide-down` inside a segment
(never the same direction twice in a row), `fade-out` on beats and segment
closers.
Gotchas: `v-mark` highlight only on spans of 3 words or fewer; any v-click
element containing a `v-mark` needs the `mark-safe` class (translate
transforms break the annotation's position); content inside a `v-switch`
template can't use `v-click` reveals, use the `.pop-in` mount animation;
a `v-switch` last template needs an explicit range (`#2-4`) to survive
later clicks.

**Links and CTA.** Every visible URL is a styled clickable `<a href>`
(styling comes from `style.css`), never plain text. No bootcamp hard sell
anywhere. Registration for the week is closed, so the closing slide carries
no hub link, no next-session plug and no trainer link: it is Q&A only, with
the three ways to ask as icon columns. `why-linux` closes on an extra
attendance slide (Google Form QR in `public/qr-attendance.png`); the other
decks do not.

**Demo slides.** Open with `<LiveBadge />` + title in a flex row. The
TermWindow shows a signpost transcript of what the audience is about to
watch for real. The notes' DEMO SCRIPT ends with a night-before prep line
that installs every tool the script runs — verify each package exists in
the demo server's Ubuntu release (fastfetch is NOT in 24.04; use the
GitHub .deb) — plus a fallback. A transcript caption states what the
command really prints; run it first (`du -ah | sort -rh` surfaces
directories, not just files).

## Scaffold checklist for a new deck

1. Copy `components/`, `style.css`, `global-bottom.vue`, `public/logo*.svg`
   from `why-linux/`; match its `package.json` (adjust `--base`).
2. Map the session outline to archetypes, copy each from `templates/` into
   `pages/<slug>.md`, fill the slots; wire them in `slides.md`.
3. `pnpm lint:decks` must pass (titles, prose budget, banned phrasing,
   notes present).
4. `pnpm dev`, screenshot every slide in both color schemes at final click
   state, fix contrast; re-check v-mark slides at natural click pacing.
5. `pnpm build` must pass.
