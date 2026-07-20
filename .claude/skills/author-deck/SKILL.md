---
name: author-deck
description: Author or revise an NTW "Why X?" Slidev deck (why-git-github, why-cloud, why-docker, why-infra-as-code). Use when scaffolding a new deck, writing or editing slides, or running the pre-done verification pass. Encodes the scaffold → archetype-map → author → verify pipeline; CLAUDE.md holds the laws, this holds the procedure.
---

# Author an NTW deck

Argument: the deck directory (e.g. `why-cloud`). All laws live in
`CLAUDE.md`; locked facts (schedule, banner triad, blurbs, wow moment) live
in `README.md`. Read both before touching anything. `why-linux/` is the
reference implementation — copy its patterns.

Hold this context on every slide: a ~2-hour free beginner introduction,
live on Zoom, up to 300 participants, many non-technical and from any
industry. Every label, payoff, and spoken line must land for someone who
has never opened a terminal — gloss jargon on first mention, anchor new
ideas to everyday equivalents, and let the live demo carry the proof.

## 1. Scaffold (skip if the deck exists)

- Copy from `why-linux/`: `components/`, `style.css`, `global-bottom.vue`,
  `public/logo.svg` + `logo-dark.svg`, `package.json` (change `--base` to
  `/ntw/<deck-dir>/` and the `name`).
- Headmatter: copy `why-linux/slides.md` headmatter; keep `routerMode: hash`
  (GitHub Pages 404s history-mode deep links); update `title`/`info`, theme
  color accents to the session's banner color.

## 2. Map the outline

- The deck skeleton mirrors why-linux: title (banner triad) → trainer →
  plan (triad as parts) → parts 1..N (each opens with an `.eyebrow` chip)
  → recap (proof mirrors plan) → start-tonight equivalent → thanks (next
  day's session plug with the correct time from README).
- One outline beat = one `pages/<slug>.md`, started from a `templates/`
  archetype. If no archetype fits, design it once, add it to `templates/`
  first, then use it.
- Wire every page into `slides.md` via `src:` (first page inside the
  headmatter itself).

## 3. Author

- Fill `{{SLOT}}`s within their stated budgets; never leave a slot marker.
- Notes are the full spoken script: `[click]`-prefixed lines timed to
  reveals, jargon glossed for a non-technical audience, the same example
  the slide shows.
- Demo slides: DEMO SCRIPT with numbered steps, a night-before prep line
  installing every tool the script runs (verified against the demo
  server's Ubuntu release), and a FALLBACK line.

## 4. Verify (all of it, before calling the deck done)

1. `pnpm lint:decks` — must be clean.
2. `pnpm build` in the deck dir — must pass.
3. `pnpm dev --port 3031` in the deck dir, then screenshot EVERY slide in
   BOTH schemes at final click state with the Playwright tools:
   - slide N is `http://localhost:3031/#/N?clicks=<final>`;
   - force scheme: `localStorage.setItem('slidev-color-schema', 'dark')`
     (or `'light'`) via browser_evaluate, then reload;
   - v-mark slides: marks often skip drawing on `?clicks=N` jumps — load
     `?clicks=0` and step with ArrowRight presses, then screenshot;
   - check contrast, label baselines across tiles, and that nothing
     overflows or wraps oddly.
4. Cross-deck consistency: dates/times/triad wording match `README.md`
   exactly; the closing slide is Q&A only (registration closed: no hub link,
   no next-session plug, no trainer link).
5. Kill the dev server and delete any screenshots saved into the repo.
