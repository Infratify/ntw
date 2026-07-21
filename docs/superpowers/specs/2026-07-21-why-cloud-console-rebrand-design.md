# Why Cloud? — console-first rebrand + provider landscape

Date: 2026-07-21
Deck: `why-cloud/`
Status: design approved, ready for implementation plan

## Problem

The deck sells itself as terminal work. Slide `cli-notice.md` is titled
**"Mostly typing today"** and tells the room *"every live demo runs inside a
black window."* But the real Why Cloud? demos are console-heavy: the EC2
Launch-instance wizard, the Change-instance-type dropdown, and the Cloudflare
DNS proxy toggle are all point-and-click. The framing fights the demo. The
terminal only shows up to *prove* a server exists; the AWS/Cloudflare consoles
are where the work happens.

Second gap: the deck names only AWS + Cloudflare (plus AWS/GCP/Azure inside
`cloud-you-use`). Beginners should see that AWS is one door of several,
including the Asia-relevant clouds (Tencent, Alibaba) a Malaysian audience may
meet at work.

## Goals

1. Stop promising an all-terminal session. Reframe as console-first: the
   console is the dashboard, the terminal is the proof.
2. Make the demo signpost slides *show* the point-and-click reality (console
   GUI mock beside the terminal transcript).
3. Expose the wider cloud landscape (6 landlords) without adding a second live
   demo, and add one audience-guessing engagement.

## Non-goals / locked facts (do not touch)

- **AWS stays the single live-demo provider; Cloudflare stays the global
  layer.** This is the README wow moment ("a real server on AWS, global via
  Cloudflare"). No second provider gets demoed live.
- Demo *scripts* (the DEMO SCRIPT / PREP / FALLBACK note blocks) stay as-is.
  This is a framing + signpost-visual change, not a demo rewrite.
- Other four decks untouched.
- Attendance QR slide is **out of scope** (why-cloud has none today; only Linux
  does — separate task).

## Design

### A. Kill the "typing" framing

**`cli-notice.md` → rename to `console-first.md`** (update `slides.md`
manifest).

- Title: **"Point and click"** (4 words, sentence case; alt "Click and type").
- Visual: replace the terminal-only mount with a **light console-window mock**
  as the lead, a small terminal beside/under it. Uses the shared
  `ConsoleWindow` component (section B5).
- Payoff (one observable-fact sentence): *"The console is a web page; the
  terminal only proves it's real."*
- Notes: reframe — most of today is a web console you click through; the black
  window appears only to prove the rented server exists and to give it its
  jobs. Drop the "friends will think it's hacking / Matrix" line (it was
  terminal-only framing).
- Keep the one deliberate reveal (motion mount) and `fade-out` transition.

### B. Reskin the three demo signposts (console + terminal)

Each demo-signpost slide keeps `<LiveBadge/> + title` and gains a **light
console-window mock** as the lead visual (the click), keeping the existing
`TermWindow` transcript as the **proof** half. Layout: two windows side by side
(`grid-cols-2`), console left, terminal right; the old three `note-row` labels
compress into 2–3 word captions under each window (labels ≤4 words, per
show/tell law). One deliberate reveal: `v-click` reveals the terminal (proof)
after the console (action).

2. **`demo-launch.md` ("Rent one live")** — console mock: AWS EC2 **Launch
   instance**, state `pending → running`, a public IP appears. Terminal:
   existing `ssh ubuntu@…` login.
3. **`demo-resize.md` ("Watch it grow")** — console mock: EC2 **Change instance
   type** dropdown `t3.micro → t3.2xlarge`. Terminal: existing `nproc 2 → 8`.
4. **`demo-global.md` ("Ping the planet")** — console mock: **Cloudflare
   dashboard** DNS A-record with the orange-cloud proxy toggle ON. Terminal:
   existing `globalping` transcript.

5. **Extract `components/ConsoleWindow.vue`** — a light GUI window chrome
   (traffic-light dots + title bar + white body) matching the mock currently
   inlined in `server-shopping.md` and `more-power.md`. Refactor those two to
   use it, and use it for the three signposts. One mock, five call sites,
   instead of copy-pasted markup. Always light (GUI mock is always light, per
   CLAUDE.md). Slot-based body so each caller fills its own rows.

Verify at screenshot pass: two windows must fit the slide without overflow in
both schemes; if cramped, fall back to console-lead-with-terminal-revealed via
`v-click` in a single column.

### C. Provider landscape + guessing engagement

6. **New slide `landscape.md`** (icon-grid archetype), inserted in the manifest
   **after `what-is-cloud.md`, before `cloud-you-use.md`**. Six cloud landlords
   in a **2×3 medallion grid**, each a logo above a theme-colored name caption:
   - AWS — `logos-aws`
   - Microsoft Azure — `logos-microsoft-azure`
   - Google Cloud — `logos-google-cloud`
   - DigitalOcean — `logos-digital-ocean`
   - Tencent Cloud — vendored SVG (see below)
   - Alibaba Cloud — vendored SVG (see below)

   Distinct treatment from `cloud-you-use` (big 2×3 landlord tiles vs the 4-col
   small app grid) so the two logo grids don't read as duplicates.
   Payoff (one fact): *"Six landlords rent the same thing."*
   One deliberate reveal: staggered `v-click` per row (or `.pop` grid).

   **Vendored SVGs** → `why-cloud/public/logos/tencent-cloud.svg`,
   `why-cloud/public/logos/alibaba-cloud.svg` (sources: Wikimedia Commons —
   Tencent_Cloud_Logo.svg, AlibabaCloudLogo.svg).
   - Render each at a **fixed height** (match the iconify logos' visual size,
     e.g. `h-8`/`h-10`) with **auto width** and centered — Alibaba is a wide
     7.9:1 wordmark, Tencent ~1.46:1; a fixed-height slot handles both. Not the
     inline-1.2em rule (that governs SVGs inside a text row; these are block
     logo tiles).
   - **Tencent grey text** (`#949495`) may go faint on dark. If the dark
     screenshot shows it faint, inline the SVG and swap the grey path to
     `currentColor` (or crop to the icon mark). Decide at the verify pass. The
     name caption below every tile means identity holds regardless.
   - Alibaba is single-color orange (`#ED6B1E`), visible both schemes.

7. **`ASK:` engagement in `landscape.md` notes** (presenter-notes only, never
   slide content, per engagement grammar). Script shape: ask the room to guess
   which cloud hosts the National Training Week page they registered on; let
   guesses flood the Zoom chat; read the top guess back; reveal it is **GitHub
   Pages** — the free tool from Tuesday's Git & GitHub session — *"and even that
   sits on someone else's cloud."* Verified: the NTW hub deploys to
   `infratify.github.io/ntw` via `.github/workflows/deploy.yml`, no custom
   domain. This is the deck's early engagement fire (~one per 10 min cadence).

8. **`start-tonight.md`** — add a **DigitalOcean** row as the beginner-friendly
   first pick (AWS stays primary/top). Icon `logos-digital-ocean`, link
   `https://www.digitalocean.com`, caption e.g. "simplest console to start".
   Three rows → four; existing `space-y-10 max-w-2xl` layout absorbs it. Keep
   the payoff line and one reveal.

### D. Manifest + verification

9. Update `why-cloud/slides.md`: rename `cli-notice` → `console-first`, insert
   `landscape` src after `what-is-cloud`.
10. `pnpm lint:decks` must pass (title ≤4 words, prose budget, banned phrasing,
    notes present on every page).
11. Screenshot every changed slide in **dark and light** at final click state;
    re-step v-mark slides at natural click pacing (URL jumps skip rough-notation
    draws). Fix contrast — especially the Tencent grey and the two-window demo
    signposts.
12. `pnpm build` must pass.

## Slide inventory after change

17 → **18** slides (under the 20 budget):
title · **console-first** (was cli-notice) · trainer · plan · server-shopping ·
what-is-cloud · **landscape** (new) · cloud-you-use · demo-launch · rm36 ·
more-power · demo-resize · distance · cloudflare · demo-global · proof ·
start-tonight · thanks.

## Risks / watch items

- Two-window demo signposts may overflow at some zoom; fallback noted (B).
- Two adjacent logo grids reading as duplicates; mitigated by distinct
  treatments (C6), confirm visually.
- Tencent grey-on-dark contrast; mitigated by caption + verify-pass fix (C6).
- `ConsoleWindow` refactor must not change how `server-shopping`/`more-power`
  render (regression check those two slides in both schemes).
