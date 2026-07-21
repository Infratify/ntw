# Why Cloud? Console-First Rebrand Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Reframe the `why-cloud` deck off "mostly typing" so slides show the point-and-click AWS/Cloudflare console reality, and add a six-landlord provider landscape with an audience-guessing engagement.

**Architecture:** Slidev deck; one slide per `pages/<slug>.md`, wired in `slides.md`. A new light `ConsoleWindow.vue` component (mirrors the dark `TermWindow.vue`) supplies the GUI-window mock currently copy-pasted inline. Three demo-signpost slides gain a console mock beside the terminal transcript; the "Mostly typing" slide is reframed; a new `landscape.md` slide names six clouds; `start-tonight.md` gains DigitalOcean.

**Tech Stack:** Slidev (Vue 3 SFC + Markdown), UnoCSS/Tailwind utility classes, `@iconify-json/mdi` + `@iconify-json/logos`, pnpm.

## Global Constraints

Copied verbatim from CLAUDE.md and the spec. Every task's requirements implicitly include these:

- **Slide count:** deck stays under 20 slides (this change: 17 → 18).
- **Titles:** 4 words or fewer, sentence case. Card captions ~6 words.
- **Show/tell law:** on-slide text is labels of ≤4 words; **at most ONE** full sentence per slide (the payoff), and it states an **observable fact**, never a verdict. Every other sentence goes in presenter notes.
- **Banned in visible copy** (lint-enforced, `scripts/lint-deck.mjs`): em/en dashes (`—`/`–`); `border-l-*`; the words `promise(s)`, `superpower(s)`, `magic(al)`, `cool again`, `the deal`, `didn't lie`; negative parallelism `not just/merely/only X`. **Also banned by author rule (not lint):** personification of artifacts — never "the terminal proves", "the poster promises". Reword to an observable fact.
- **Lint mechanics:** a text run of **≥8 words** in visible copy counts as one "prose segment"; **max 1** per slide. `<TermWindow>` transcripts are exempt from this; **`<ConsoleWindow>` content is NOT exempt** — keep every console row's text under 8 words. Presenter-notes `<!-- -->` block is mandatory on every page.
- **Presenter notes:** never delete a DEMO SCRIPT / PREP (`Night before`) / FALLBACK block. `[click]`-prefixed lines are click-timed narration. Gloss every new term once with an everyday anchor (A.M.S).
- **Engagement markers** live in notes only, uppercase: `ASK:`, `PROP:`, `STORY:`, `ACTIVITY:`. Never on the slide.
- **Visual:** must pass BOTH color schemes. GUI window mock is always light; TermWindow is always dark. Slide text inherits theme; accents use `text-<color>-600 dark:text-<color>-400`. No hardcoded black/white outside those mocks. `mdi-*`/`logos-*` render a 1.2em box.
- **Motion:** one deliberate reveal per slide. Transitions rotate `slide-left/right/up/down` within a segment (never the same direction twice in a row); `fade-out` on beats/closers. `v-mark` only on spans ≤3 words; any v-click element containing a `v-mark` needs `mark-safe`.
- **Locked, do not touch:** AWS is the only live-demo provider; Cloudflare is the global layer; all DEMO SCRIPT/PREP/FALLBACK note blocks stay verbatim. Attendance QR slide is out of scope.
- **Verify commands:** `node scripts/lint-deck.mjs why-cloud` (lint), `cd why-cloud && pnpm build` (build). Screenshots: `cd why-cloud && pnpm dev`, force scheme with `localStorage.setItem('slidev-color-schema','dark'|'light')` then reload, jump clicks via `?clicks=N`, step v-mark slides with arrow keys at natural pacing.

Deck path root for all files: `/home/debian/repo/ntw`. Working branch: `why-cloud-console-rebrand` (already created; spec committed).

---

## File Structure

| File | Responsibility | Task |
| --- | --- | --- |
| `why-cloud/components/ConsoleWindow.vue` | Light GUI window frame (slot body + `title` prop) | T1 (create) |
| `why-cloud/pages/server-shopping.md` | Refactor inline mock → `<ConsoleWindow>` | T1 (modify) |
| `why-cloud/pages/more-power.md` | Refactor inline mock → `<ConsoleWindow>` | T1 (modify) |
| `why-cloud/pages/console-first.md` | Reframed "typing" slide (was `cli-notice.md`) | T2 (rename+rewrite) |
| `why-cloud/slides.md` | Manifest: rename src, insert landscape src | T2, T6 (modify) |
| `why-cloud/pages/demo-launch.md` | Signpost: EC2 launch console + ssh terminal | T3 (modify) |
| `why-cloud/pages/demo-resize.md` | Signpost: change-type console + nproc terminal | T4 (modify) |
| `why-cloud/pages/demo-global.md` | Signpost: Cloudflare DNS console + globalping | T5 (modify) |
| `why-cloud/public/logos/tencent-cloud.svg` | Vendored Tencent Cloud logo (grey→blue) | T6 (create) |
| `why-cloud/public/logos/alibaba-cloud.svg` | Vendored Alibaba Cloud logo | T6 (create) |
| `why-cloud/pages/landscape.md` | New: six-landlord grid + guess ASK | T6 (create) |
| `why-cloud/pages/start-tonight.md` | Add DigitalOcean row | T7 (modify) |

Each markdown task's "test" is: `node scripts/lint-deck.mjs why-cloud` passes, `pnpm build` passes, and (for visual tasks) a dark+light screenshot at final click state.

---

### Task 1: `ConsoleWindow` component + refactor the two existing mocks

**Files:**
- Create: `why-cloud/components/ConsoleWindow.vue`
- Modify: `why-cloud/pages/server-shopping.md` (the inline mock block)
- Modify: `why-cloud/pages/more-power.md` (the inline mock block)

**Interfaces:**
- Produces: `<ConsoleWindow title="…">…rows…</ConsoleWindow>` — auto-imported (Slidev `components/` auto-import, like `<TermWindow>`/`<LiveBadge>`). Renders a light window: traffic-light dots + `title` in the chrome bar, default slot in a `px-6 py-5 space-y-4 text-sm` body. Always light (both schemes).
- Consumes: nothing.

- [ ] **Step 1: Create the component**

Create `why-cloud/components/ConsoleWindow.vue`:

```vue
<!-- ConsoleWindow — a light browser/console window frame for GUI signpost
     slides (AWS console, Cloudflare dashboard, supplier quote). Put rows in
     the default slot; `title` names the fake tab. GUI mocks are always light
     by design (CLAUDE.md), so this stays light in both color schemes. -->
<script setup lang="ts">
withDefaults(defineProps<{ title?: string }>(), { title: 'console' })
</script>

<template>
  <div class="rounded-xl overflow-hidden border border-gray-400/40 shadow-lg bg-gray-100 text-gray-700 text-left">
    <div class="flex items-center gap-1.5 px-4 py-2.5 bg-gray-200 border-b border-gray-300">
      <span class="w-3 h-3 rounded-full bg-red-400"></span>
      <span class="w-3 h-3 rounded-full bg-yellow-400"></span>
      <span class="w-3 h-3 rounded-full bg-green-400"></span>
      <span class="ml-3 text-xs text-gray-500">{{ title }}</span>
    </div>
    <div class="px-6 py-5 space-y-4 text-sm">
      <slot />
    </div>
  </div>
</template>
```

- [ ] **Step 2: Refactor `server-shopping.md`**

In `why-cloud/pages/server-shopping.md`, replace this exact block:

```html
<div class="rounded-xl overflow-hidden border border-gray-400/40 shadow-lg bg-gray-100 text-gray-700">
  <div class="flex items-center gap-1.5 px-4 py-2.5 bg-gray-200 border-b border-gray-300">
    <span class="w-3 h-3 rounded-full bg-red-400"></span>
    <span class="w-3 h-3 rounded-full bg-yellow-400"></span>
    <span class="w-3 h-3 rounded-full bg-green-400"></span>
    <span class="ml-3 text-xs text-gray-500">Supplier quotation</span>
  </div>
  <div class="px-6 py-5 space-y-4 text-sm">
    <div v-click="1" class="flex items-center gap-3">
      <mdi-server class="text-lg text-gray-500 flex-shrink-0" />
      <span>1&times; rack server</span>
      <span class="ml-auto font-mono text-xs text-gray-500">RM 42,000</span>
    </div>
    <div v-click="2" class="flex items-center gap-3">
      <mdi-snowflake class="text-lg text-blue-500 flex-shrink-0" />
      <span>a cooled server room</span>
      <span class="ml-auto font-mono text-xs text-gray-500">RM 1,800 / month</span>
    </div>
    <div v-click="3" class="flex items-center gap-3">
      <mdi-account-wrench class="text-lg text-gray-500 flex-shrink-0" />
      <span>an engineer on call</span>
      <span class="ml-auto font-mono text-xs text-gray-500">one salary</span>
    </div>
    <div v-click="4" class="flex items-center gap-3">
      <mdi-truck-delivery-outline class="text-lg text-red-500 flex-shrink-0" />
      <span>delivery</span>
      <span class="ml-auto text-xs bg-red-500/10 text-red-600 px-2 py-0.5 rounded font-600">six weeks</span>
    </div>
  </div>
</div>
```

with:

```html
<ConsoleWindow title="Supplier quotation">
  <div v-click="1" class="flex items-center gap-3">
    <mdi-server class="text-lg text-gray-500 flex-shrink-0" />
    <span>1&times; rack server</span>
    <span class="ml-auto font-mono text-xs text-gray-500">RM 42,000</span>
  </div>
  <div v-click="2" class="flex items-center gap-3">
    <mdi-snowflake class="text-lg text-blue-500 flex-shrink-0" />
    <span>a cooled server room</span>
    <span class="ml-auto font-mono text-xs text-gray-500">RM 1,800 / month</span>
  </div>
  <div v-click="3" class="flex items-center gap-3">
    <mdi-account-wrench class="text-lg text-gray-500 flex-shrink-0" />
    <span>an engineer on call</span>
    <span class="ml-auto font-mono text-xs text-gray-500">one salary</span>
  </div>
  <div v-click="4" class="flex items-center gap-3">
    <mdi-truck-delivery-outline class="text-lg text-red-500 flex-shrink-0" />
    <span>delivery</span>
    <span class="ml-auto text-xs bg-red-500/10 text-red-600 px-2 py-0.5 rounded font-600">six weeks</span>
  </div>
</ConsoleWindow>
```

Leave the surrounding `<div class="max-w-2xl mx-auto mt-8">` wrapper, the eyebrow, the title, the payoff line, and the entire `<!-- -->` notes block untouched.

- [ ] **Step 3: Refactor `more-power.md`**

In `why-cloud/pages/more-power.md`, replace the inline mock wrapper the same way. Replace this exact block:

```html
<div class="rounded-xl overflow-hidden border border-gray-400/40 shadow-lg bg-gray-100 text-gray-700">
  <div class="flex items-center gap-1.5 px-4 py-2.5 bg-gray-200 border-b border-gray-300">
    <span class="w-3 h-3 rounded-full bg-red-400"></span>
    <span class="w-3 h-3 rounded-full bg-yellow-400"></span>
    <span class="w-3 h-3 rounded-full bg-green-400"></span>
    <span class="ml-3 text-xs text-gray-500">EC2 console &middot; change instance type</span>
  </div>
  <div class="px-6 py-5 space-y-4 text-sm">
    <div v-click="1" class="flex items-center gap-3">
      <mdi-memory class="text-lg text-gray-500 flex-shrink-0" />
      <span>now: t3.micro</span>
      <span class="ml-auto font-mono text-xs text-gray-500">2 cores &middot; 1 GB</span>
    </div>
    <div v-click="2" class="flex items-center gap-3">
      <mdi-menu-down class="text-lg text-blue-600 flex-shrink-0" />
      <span>choose: t3.2xlarge</span>
      <span class="ml-auto font-mono text-xs bg-blue-500/10 text-blue-700 px-2 py-0.5 rounded">8 cores &middot; 32 GB</span>
    </div>
    <div v-click="3" class="flex items-center gap-3">
      <mdi-restart class="text-lg text-gray-500 flex-shrink-0" />
      <span class="px-3 py-1 rounded-md bg-orange-600 text-white text-xs font-700">Apply</span>
      <span class="ml-auto text-xs text-gray-500">one restart applies it</span>
    </div>
  </div>
</div>
```

with:

```html
<ConsoleWindow title="EC2 console &middot; change instance type">
  <div v-click="1" class="flex items-center gap-3">
    <mdi-memory class="text-lg text-gray-500 flex-shrink-0" />
    <span>now: t3.micro</span>
    <span class="ml-auto font-mono text-xs text-gray-500">2 cores &middot; 1 GB</span>
  </div>
  <div v-click="2" class="flex items-center gap-3">
    <mdi-menu-down class="text-lg text-blue-600 flex-shrink-0" />
    <span>choose: t3.2xlarge</span>
    <span class="ml-auto font-mono text-xs bg-blue-500/10 text-blue-700 px-2 py-0.5 rounded">8 cores &middot; 32 GB</span>
  </div>
  <div v-click="3" class="flex items-center gap-3">
    <mdi-restart class="text-lg text-gray-500 flex-shrink-0" />
    <span class="px-3 py-1 rounded-md bg-orange-600 text-white text-xs font-700">Apply</span>
    <span class="ml-auto text-xs text-gray-500">one restart applies it</span>
  </div>
</ConsoleWindow>
```

Note: `&middot;` inside the `title` attribute renders literally as text via `{{ title }}` (Vue does not decode HTML entities in interpolation). Change it to a literal middot so it renders correctly: use `title="EC2 console · change instance type"`. Apply the same literal-`·` fix wherever a `title` prop needs a middot in later tasks.

- [ ] **Step 4: Verify lint + build**

Run: `cd /home/debian/repo/ntw && node scripts/lint-deck.mjs why-cloud`
Expected: `✓ N page(s) clean (why-cloud)` (no new failures).

Run: `cd /home/debian/repo/ntw/why-cloud && pnpm build`
Expected: build completes, no errors.

- [ ] **Step 5: Verify no visual regression**

Run: `cd /home/debian/repo/ntw/why-cloud && pnpm dev` (background), open the `server-shopping` and `more-power` slides in dark and light. Confirm both mocks render identically to before (light window, traffic dots, same rows, same click reveals). The refactor is behavior-preserving.

- [ ] **Step 6: Commit**

```bash
cd /home/debian/repo/ntw
git add why-cloud/components/ConsoleWindow.vue why-cloud/pages/server-shopping.md why-cloud/pages/more-power.md
git commit -m "$(cat <<'EOF'
feat(why-cloud): extract ConsoleWindow, refactor the two inline GUI mocks

Co-Authored-By: Claude Opus 4.8 (1M context) <noreply@anthropic.com>
EOF
)"
```

---

### Task 2: Reframe the "typing" slide (`cli-notice.md` → `console-first.md`)

**Files:**
- Rename: `why-cloud/pages/cli-notice.md` → `why-cloud/pages/console-first.md`
- Modify: `why-cloud/slides.md` (update the src path)

**Interfaces:**
- Consumes: `<ConsoleWindow>` (Task 1), `<TermWindow>`.

- [ ] **Step 1: Rename the file with git**

Run: `cd /home/debian/repo/ntw && git mv why-cloud/pages/cli-notice.md why-cloud/pages/console-first.md`

- [ ] **Step 2: Rewrite the slide body**

Replace the **entire** contents of `why-cloud/pages/console-first.md` with:

```md
---
layout: default
transition: fade-out
clicks: 2
---

### Point and click

<div class="grid grid-cols-2 gap-8 mt-10 items-center">

<ConsoleWindow title="aws console">
  <div class="flex items-center gap-3">
    <mdi-cursor-default-click-outline class="text-lg text-blue-600 flex-shrink-0" />
    <span>launch, resize, connect</span>
    <span class="ml-auto text-xs bg-blue-500/10 text-blue-700 px-2 py-0.5 rounded">buttons</span>
  </div>
  <div class="flex items-center gap-3">
    <mdi-web class="text-lg text-gray-500 flex-shrink-0" />
    <span>runs in your browser</span>
  </div>
</ConsoleWindow>

<div v-click="1">
<TermWindow title="terminal">
<div><span class="text-green-400">$</span> ssh ubuntu@...</div>
<div><span class="text-green-400">ubuntu@ntw-demo</span>:<span class="text-blue-400">~</span>$ <span class="animate-pulse">▌</span></div>
</TermWindow>
</div>

</div>

<div v-click="2" class="mt-8 text-center text-lg opacity-85">
The console is a web page in a browser.
</div>

<!--
Reassure them straight away: nothing to install, nothing to memorise, and this is not real coding.
Almost everything today happens by clicking in a normal web browser, on Amazon's control panel called the console. Gloss it: the console is the dashboard where you rent and manage servers with buttons and menus, like an online banking screen.

[click] the black window, the terminal, appears only twice today: to log in to the rented server, and to give it its jobs. So it is mostly clicking, with a little typing.
[click] one line to land it: the console is a web page like any other, opened in the same browser they use for email.
-->
```

Lint self-check: title "Point and click" = 3 words. ConsoleWindow rows ("launch, resize, connect" = 3, "runs in your browser" = 4) each < 8 words. Payoff "The console is a web page in a browser." = 1 prose segment (observable fact, no personification, no banned words). TermWindow is exempt. Notes block present. Two-click reveal = one deliberate motion beat.

- [ ] **Step 3: Update the manifest**

In `why-cloud/slides.md`, change the src line:

```yaml
src: ./pages/cli-notice.md
```

to:

```yaml
src: ./pages/console-first.md
```

- [ ] **Step 4: Verify lint + build**

Run: `cd /home/debian/repo/ntw && node scripts/lint-deck.mjs why-cloud`
Expected: `✓ N page(s) clean (why-cloud)`.

Run: `cd /home/debian/repo/ntw/why-cloud && pnpm build`
Expected: build completes, no errors.

- [ ] **Step 5: Screenshot dark + light**

Open the `console-first` slide in `pnpm dev` at `?clicks=2` in both schemes. Confirm: light console window + dark terminal both visible, payoff readable, no overflow.

- [ ] **Step 6: Commit**

```bash
cd /home/debian/repo/ntw
git add why-cloud/pages/console-first.md why-cloud/slides.md
git commit -m "$(cat <<'EOF'
feat(why-cloud): reframe the typing slide as console-first

Co-Authored-By: Claude Opus 4.8 (1M context) <noreply@anthropic.com>
EOF
)"
```

---

### Task 3: `demo-launch.md` — console mock beside the terminal

**Files:**
- Modify: `why-cloud/pages/demo-launch.md`

**Interfaces:**
- Consumes: `<LiveBadge>`, `<ConsoleWindow>`, `<TermWindow>`.

- [ ] **Step 1: Replace the content grid**

In `why-cloud/pages/demo-launch.md`, keep the `<div class="flex items-center gap-3 mb-2"> … LiveBadge … Rent one live …</div>` header. Replace the content grid (from `<div class="grid grid-cols-2 gap-10 mt-10 items-center">` through its closing `</div>` before the notes) with:

```html
<div class="grid grid-cols-2 gap-8 mt-8 items-start">

<div>
<ConsoleWindow title="EC2 · launch instance">
  <div class="flex items-center gap-3">
    <mdi-ubuntu class="text-lg text-orange-600 flex-shrink-0" />
    <span>Ubuntu 24.04</span>
    <span class="ml-auto font-mono text-xs text-gray-500">t3.micro</span>
  </div>
  <div v-click="1" class="flex items-center gap-3">
    <mdi-circle class="text-xs text-green-500 flex-shrink-0" />
    <span>running</span>
    <span class="ml-auto font-mono text-xs bg-green-500/10 text-green-700 px-2 py-0.5 rounded">13.212.44.7</span>
  </div>
  <div v-click="1" class="text-xs text-gray-500 pl-7">a new public address</div>
</ConsoleWindow>
<p class="text-center text-sm opacity-60 mt-3">the click: launch</p>
</div>

<div v-click="2">
<TermWindow title="ssh: into a server born today">
<div><span class="text-green-400">$</span> ssh ubuntu@13.212.44.7</div>
<div class="opacity-80 mt-1">Welcome to Ubuntu 24.04 LTS</div>
<div><span class="text-green-400">ubuntu@ntw-demo</span>:<span class="text-blue-400">~</span>$ <span class="animate-pulse">▌</span></div>
</TermWindow>
<p class="text-center text-sm opacity-60 mt-3">the proof: a real login</p>
</div>

</div>
```

- [ ] **Step 2: Update ONLY the click-narration lines in the notes**

The notes currently open with three `[click]` label lines, then `DEMO SCRIPT (~10 min)…`. Replace **only** the three `[click]` lines (the "Labels to narrate:" preamble and its three bullets) with these two, and **leave the `DEMO SCRIPT`, `Night before`, and `FALLBACK` blocks exactly as they are**:

```
Labels to narrate:
[click] the console flips from pending to running in about a minute, and a public IP appears, a brand-new address on the internet for a machine that did not exist when I clicked launch.
[click] then the terminal is the proof: I log in over ssh, and it answers. It bills by the hour, a few sen for this size; the exact price gets its own slide next.
```

- [ ] **Step 3: Verify lint + build**

Run: `cd /home/debian/repo/ntw && node scripts/lint-deck.mjs why-cloud`
Expected: `✓ N page(s) clean (why-cloud)`.
Run: `cd /home/debian/repo/ntw/why-cloud && pnpm build`
Expected: build completes.

- [ ] **Step 4: Screenshot dark + light**

Open `demo-launch` at `?clicks=2` both schemes. Confirm: two windows fit side by side without overflow; console (light) + terminal (dark) both legible; captions under each. If it overflows, collapse to single column: console on top, terminal revealed by `v-click="2"` below it.

- [ ] **Step 5: Commit**

```bash
cd /home/debian/repo/ntw
git add why-cloud/pages/demo-launch.md
git commit -m "$(cat <<'EOF'
feat(why-cloud): show the EC2 launch console beside the ssh proof

Co-Authored-By: Claude Opus 4.8 (1M context) <noreply@anthropic.com>
EOF
)"
```

---

### Task 4: `demo-resize.md` — change-type console beside `nproc`

**Files:**
- Modify: `why-cloud/pages/demo-resize.md`

**Interfaces:**
- Consumes: `<LiveBadge>`, `<ConsoleWindow>`, `<TermWindow>`.

- [ ] **Step 1: Replace the content grid**

Keep the LiveBadge + "Watch it grow" header. Replace the content grid (`<div class="grid grid-cols-2 gap-10 mt-10 items-center">` through its close) with:

```html
<div class="grid grid-cols-2 gap-8 mt-8 items-start">

<div>
<ConsoleWindow title="EC2 · change instance type">
  <div class="flex items-center gap-3">
    <mdi-memory class="text-lg text-gray-500 flex-shrink-0" />
    <span>now: t3.micro</span>
    <span class="ml-auto font-mono text-xs text-gray-500">2 cores</span>
  </div>
  <div v-click="1" class="flex items-center gap-3">
    <mdi-menu-down class="text-lg text-blue-600 flex-shrink-0" />
    <span>chosen: t3.2xlarge</span>
    <span class="ml-auto font-mono text-xs bg-blue-500/10 text-blue-700 px-2 py-0.5 rounded">8 cores</span>
  </div>
</ConsoleWindow>
<p class="text-center text-sm opacity-60 mt-3">the click: a bigger size</p>
</div>

<div v-click="2">
<TermWindow title="nproc: count the cores">
<div><span class="text-green-400">$</span> nproc</div>
<div class="opacity-80">2</div>
<div class="mt-1"><span class="text-green-400">$</span> nproc <span class="text-gray-500"># after the resize</span></div>
<div class="text-orange-300">8</div>
</TermWindow>
<p class="text-center text-sm opacity-60 mt-3">the proof: 2 became 8</p>
</div>

</div>
```

- [ ] **Step 2: Update ONLY the click-narration lines**

Replace **only** the "Labels to narrate:" preamble and its three `[click]` bullets with these two, leaving `DEMO SCRIPT`, `Night before`, and `FALLBACK` verbatim:

```
Labels to narrate:
[click] in the console I stop the machine, pick a bigger size from the dropdown, and start it again, about two minutes end to end. Nothing is reinstalled; same files, same page, same address.
[click] the terminal proves the change landed: nproc asks the machine how many processor cores it has. Two before, eight after. After the session it shrinks back the same way, because the big size costs about sixteen times more per hour.
```

- [ ] **Step 3: Verify lint + build**

Run: `cd /home/debian/repo/ntw && node scripts/lint-deck.mjs why-cloud` → clean.
Run: `cd /home/debian/repo/ntw/why-cloud && pnpm build` → completes.

- [ ] **Step 4: Screenshot dark + light**

`demo-resize` at `?clicks=2`, both schemes. Confirm fit + legibility. Note: this pairs with `more-power.md` (same t3.micro→t3.2xlarge dropdown). Confirm they read as concept-slide vs live-signpost, not accidental duplicates; the terminal-proof half differentiates this one.

- [ ] **Step 5: Commit**

```bash
cd /home/debian/repo/ntw
git add why-cloud/pages/demo-resize.md
git commit -m "$(cat <<'EOF'
feat(why-cloud): show the resize dropdown beside the nproc proof

Co-Authored-By: Claude Opus 4.8 (1M context) <noreply@anthropic.com>
EOF
)"
```

---

### Task 5: `demo-global.md` — Cloudflare DNS console beside `globalping`

**Files:**
- Modify: `why-cloud/pages/demo-global.md`

**Interfaces:**
- Consumes: `<LiveBadge>`, `<ConsoleWindow>`, `<TermWindow>`.

- [ ] **Step 1: Replace the content grid**

Keep the LiveBadge + "Ping the planet" header. Replace the content grid with:

```html
<div class="grid grid-cols-2 gap-8 mt-8 items-start">

<div>
<ConsoleWindow title="Cloudflare · DNS">
  <div class="flex items-center gap-3">
    <mdi-record-circle-outline class="text-lg text-gray-500 flex-shrink-0" />
    <span class="font-mono text-xs">A &middot; demo</span>
    <span class="ml-auto font-mono text-xs text-gray-500">13.212.44.7</span>
  </div>
  <div v-click="1" class="flex items-center gap-3">
    <mdi-cloud class="text-lg text-orange-500 flex-shrink-0" />
    <span>proxy on</span>
    <span class="ml-auto text-xs bg-orange-500/10 text-orange-700 px-2 py-0.5 rounded">stand in front</span>
  </div>
</ConsoleWindow>
<p class="text-center text-sm opacity-60 mt-3">the click: the orange cloud</p>
</div>

<div v-click="2">
<TermWindow title="globalping: test from anywhere">
<div><span class="text-green-400">$</span> globalping ping demo.infratify.com</div>
<div class="mt-1"><span class="text-purple-400">&gt;</span> London, GB &middot; <span class="text-green-400">7.2 ms</span></div>
<div><span class="text-purple-400">&gt;</span> Tokyo, JP &middot; <span class="text-green-400">3.8 ms</span></div>
</TermWindow>
<p class="text-center text-sm opacity-60 mt-3">the proof: fast everywhere</p>
</div>

</div>
```

- [ ] **Step 2: Update ONLY the click-narration lines**

Replace **only** the "Labels to narrate:" preamble and its three `[click]` bullets with these two, leaving `DEMO SCRIPT`, `Night before`, and `FALLBACK` verbatim:

```
Labels to narrate:
[click] in the Cloudflare dashboard I add one DNS record for our address and flip the proxy toggle to the orange cloud. Grey means just point at our server; orange means stand in front of it, keeping a copy near every visitor.
[click] the terminal proves the reach: globalping borrows volunteer machines worldwide and pings our address from each city. Single-digit milliseconds everywhere, because each probe hits the nearby Cloudflare copy, never our one server in part 1.
```

- [ ] **Step 3: Verify lint + build**

Run: `cd /home/debian/repo/ntw && node scripts/lint-deck.mjs why-cloud` → clean.
Run: `cd /home/debian/repo/ntw/why-cloud && pnpm build` → completes.

- [ ] **Step 4: Screenshot dark + light**

`demo-global` at `?clicks=2`, both schemes. Confirm fit + legibility.

- [ ] **Step 5: Commit**

```bash
cd /home/debian/repo/ntw
git add why-cloud/pages/demo-global.md
git commit -m "$(cat <<'EOF'
feat(why-cloud): show the Cloudflare proxy toggle beside globalping

Co-Authored-By: Claude Opus 4.8 (1M context) <noreply@anthropic.com>
EOF
)"
```

---

### Task 6: `landscape.md` — six-landlord grid + guess-the-host ASK

**Files:**
- Create: `why-cloud/public/logos/tencent-cloud.svg`
- Create: `why-cloud/public/logos/alibaba-cloud.svg`
- Create: `why-cloud/pages/landscape.md`
- Modify: `why-cloud/slides.md` (insert src after `what-is-cloud`, before `cloud-you-use`)

**Interfaces:**
- Consumes: `logos-aws`, `logos-microsoft-azure`, `logos-google-cloud`, `logos-digital-ocean` (all in `@iconify-json/logos`, verified present); the two vendored SVGs via `import.meta.env.BASE_URL`.

- [ ] **Step 1: Vendor the two SVGs**

```bash
mkdir -p /home/debian/repo/ntw/why-cloud/public/logos
curl -sL "https://upload.wikimedia.org/wikipedia/commons/b/b5/Tencent_Cloud_Logo.svg" -o /home/debian/repo/ntw/why-cloud/public/logos/tencent-cloud.svg
curl -sL "https://upload.wikimedia.org/wikipedia/commons/b/b3/AlibabaCloudLogo.svg" -o /home/debian/repo/ntw/why-cloud/public/logos/alibaba-cloud.svg
```

- [ ] **Step 2: Recolor the faint Tencent wordmark for dual-scheme legibility**

The Tencent SVG's `.st0{fill:#949495}` is the grey "Tencent Cloud" wordmark text, which goes faint on the dark slide. Recolor it to the brand blue so it reads on both schemes:

```bash
sed -i 's/\.st0{fill:#949495;}/.st0{fill:#006EFF;}/' /home/debian/repo/ntw/why-cloud/public/logos/tencent-cloud.svg
```

Verify the edit landed: `grep -o 'st0{fill:#006EFF' /home/debian/repo/ntw/why-cloud/public/logos/tencent-cloud.svg` should print `st0{fill:#006EFF`. (Alibaba is single-color orange `#ED6B1E`, legible on both schemes; leave it unchanged.)

- [ ] **Step 3: Create the slide**

Create `why-cloud/pages/landscape.md`:

```md
---
layout: default
transition: slide-left
clicks: 3
---

<script setup>
const base = import.meta.env.BASE_URL
</script>

### The big landlords

<div class="pop grid grid-cols-3 gap-x-8 gap-y-8 mt-8 max-w-3xl mx-auto text-center">

<div v-click="1">
  <div class="h-12 flex items-center justify-center"><logos-aws class="text-5xl" /></div>
  <p class="text-sm font-700 mt-3 mb-0">AWS</p>
</div>

<div v-click="1">
  <div class="h-12 flex items-center justify-center"><logos-microsoft-azure class="text-4xl" /></div>
  <p class="text-sm font-700 mt-3 mb-0">Microsoft Azure</p>
</div>

<div v-click="1">
  <div class="h-12 flex items-center justify-center"><logos-google-cloud class="text-4xl" /></div>
  <p class="text-sm font-700 mt-3 mb-0">Google Cloud</p>
</div>

<div v-click="2">
  <div class="h-12 flex items-center justify-center"><logos-digital-ocean class="text-4xl" /></div>
  <p class="text-sm font-700 mt-3 mb-0">DigitalOcean</p>
</div>

<div v-click="2">
  <div class="h-12 flex items-center justify-center"><img :src="`${base}logos/tencent-cloud.svg`" class="max-h-10 max-w-[130px] w-auto" alt="" /></div>
  <p class="text-sm font-700 mt-3 mb-0">Tencent Cloud</p>
</div>

<div v-click="2">
  <div class="h-12 flex items-center justify-center"><img :src="`${base}logos/alibaba-cloud.svg`" class="max-h-8 max-w-[150px] w-auto" alt="" /></div>
  <p class="text-sm font-700 mt-3 mb-0">Alibaba Cloud</p>
</div>

</div>

<div v-click="3" class="mark-safe mt-8 text-center text-lg opacity-85">
Six landlords rent <span v-mark="{ at: 3, color: '#ea580c', type: 'underline' }">the same thing</span>.
</div>

<!--
The clouds themselves: the landlords renting out those datacenters. Everyone knows Amazon's AWS, Microsoft's Azure and Google Cloud.

[click] DigitalOcean is the smallest and simplest of these, a favourite for people just starting out.
[click] closer to home, Tencent Cloud and Alibaba Cloud are the giants of Asia, with datacenters in the region and big share in China. A.M.S: same rental shop, different signboard.
[click] the point: six different landlords, all renting the same thing, a computer by the hour.

ASK: before naming it, get them guessing. Say: "The National Training Week page you registered on, the one behind the poster QR: which of these clouds do you think is hosting it? Type your guess in the chat." Let the guesses pile up, read a few back. Then reveal: it is on GitHub Pages, the free publishing tool from Tuesday's session, not a paid server at all. And GitHub is owned by Microsoft and runs on cloud, so even our little page sits on someone else's computers. This ties the whole week together and lands one slide early, keeping the room active.
-->
```

Lint self-check: title "The big landlords" = 3 words. Provider names are ≤2-word labels. Payoff "Six landlords rent the same thing." — the `v-mark` span "the same thing" = 3 words (≤3 rule OK); `mark-safe` present; sentence is an observable fact, no banned words. Notes present with the `ASK:` marker. Transition `slide-left` sits between `what-is-cloud` (slide-right) and `cloud-you-use` (slide-up) — no adjacent repeat.

- [ ] **Step 4: Insert into the manifest**

In `why-cloud/slides.md`, find the `what-is-cloud` src block and insert a `landscape` block immediately after it (before `cloud-you-use`):

```yaml
---
src: ./pages/what-is-cloud.md
---

---
src: ./pages/landscape.md
---

---
src: ./pages/cloud-you-use.md
---
```

- [ ] **Step 5: Verify lint + build**

Run: `cd /home/debian/repo/ntw && node scripts/lint-deck.mjs why-cloud`
Expected: `✓ N page(s) clean (why-cloud)` — page count now 18.
Run: `cd /home/debian/repo/ntw/why-cloud && pnpm build`
Expected: build completes; both SVGs copied into `dist/logos/`.

- [ ] **Step 6: Screenshot dark + light, step v-mark at natural pacing**

Open `landscape` in both schemes. Step with arrow keys (NOT a `?clicks=3` URL jump — rough-notation underlines skip drawing on jumps). Confirm: all six logos legible in BOTH schemes (especially Tencent blue text and Alibaba orange), the 2×3 grid is balanced, name captions aligned, the underline draws under "the same thing". Tune the two `max-w-[…]`/`max-h-…` values on the img tags if Alibaba's wide wordmark or Tencent's mark looks over/undersized relative to the four iconify logos.

- [ ] **Step 7: Commit**

```bash
cd /home/debian/repo/ntw
git add why-cloud/public/logos why-cloud/pages/landscape.md why-cloud/slides.md
git commit -m "$(cat <<'EOF'
feat(why-cloud): add the six-landlord landscape slide with guess-the-host ASK

Co-Authored-By: Claude Opus 4.8 (1M context) <noreply@anthropic.com>
EOF
)"
```

---

### Task 7: `start-tonight.md` — add the DigitalOcean row

**Files:**
- Modify: `why-cloud/pages/start-tonight.md`

**Interfaces:**
- Consumes: `logos-digital-ocean`.

- [ ] **Step 1: Add the DO row and renumber clicks**

In `why-cloud/pages/start-tonight.md`:

1. Change the list wrapper `<div class="mt-12 max-w-2xl mx-auto space-y-10">` to `space-y-8` (four rows need the tighter gap).
2. Insert this new row **immediately after the AWS row** (the `v-click="1"` block), before the Cloudflare row:

```html
<div v-click="2" class="flex items-center gap-6">
  <logos-digital-ocean class="text-4xl flex-shrink-0" />
  <div>
    <div class="font-mono text-base"><span class="type-line"><a href="https://www.digitalocean.com" target="_blank">digitalocean.com</a></span></div>
    <p class="text-sm opacity-65 mt-1 mb-0">simplest console to start</p>
  </div>
</div>
```

3. Renumber the following elements so the reveal order stays sequential: the **Cloudflare** row `v-click="2"` → `v-click="3"`; the **globalping** row `v-click="3"` → `v-click="4"`; the **payoff** block `v-click="4"` → `v-click="5"` **and** its inner `v-mark="{ at: 4, … }"` → `v-mark="{ at: 5, … }"`.

- [ ] **Step 2: Add a DO line to the notes**

The notes are one prose paragraph of captions. Add this sentence right after the AWS caption sentence (the one ending "…warning emails long before any charge."):

```
DigitalOcean is the gentlest place to start: one green Create button, a flat monthly price, and a free credit for new accounts; it is the easiest first console before AWS.
```

Leave the rest of the notes (Cloudflare, globalping, landing lines) unchanged.

- [ ] **Step 3: Verify lint + build**

Run: `cd /home/debian/repo/ntw && node scripts/lint-deck.mjs why-cloud` → clean.
Run: `cd /home/debian/repo/ntw/why-cloud && pnpm build` → completes.

- [ ] **Step 4: Screenshot dark + light, step v-mark at natural pacing**

Open `start-tonight`, step with arrow keys to the final click. Confirm four rows fit without overflow, the DO logo renders, all four URLs are styled clickable links, and the "nothing else" highlight still draws on the payoff. Reduce `space-y-8` to `space-y-6` if the fourth row overflows.

- [ ] **Step 5: Commit**

```bash
cd /home/debian/repo/ntw
git add why-cloud/pages/start-tonight.md
git commit -m "$(cat <<'EOF'
feat(why-cloud): add DigitalOcean as the easy-first pick in start-tonight

Co-Authored-By: Claude Opus 4.8 (1M context) <noreply@anthropic.com>
EOF
)"
```

---

### Task 8: Full-deck verification pass

**Files:** none (verification only).

- [ ] **Step 1: Full lint**

Run: `cd /home/debian/repo/ntw && node scripts/lint-deck.mjs why-cloud`
Expected: `✓ 18 page(s) clean (why-cloud)`.

- [ ] **Step 2: Full build**

Run: `cd /home/debian/repo/ntw/why-cloud && pnpm build`
Expected: build completes, no errors, no missing-asset warnings for `logos/*.svg`.

- [ ] **Step 3: Screenshot every changed slide, both schemes**

With `pnpm dev`, for each of `console-first`, `landscape`, `demo-launch`, `demo-resize`, `demo-global`, `start-tonight`, `server-shopping`, `more-power`: force dark then light (`localStorage.setItem('slidev-color-schema', …)` + reload), view at final click state. For the v-mark slides (`landscape`, `start-tonight`) step with arrow keys, not URL jumps. Confirm: no horizontal overflow, all text legible in both schemes, GUI mocks light + terminals dark, no hardcoded-color contrast failures.

- [ ] **Step 4: Confirm slide count and order**

Verify `why-cloud/slides.md` lists exactly 18 slides in order: title, console-first, trainer, plan, server-shopping, what-is-cloud, landscape, cloud-you-use, demo-launch, rm36, more-power, demo-resize, distance, cloudflare, demo-global, proof, start-tonight, thanks.

- [ ] **Step 5: Final commit (if any screenshot fixes were made)**

```bash
cd /home/debian/repo/ntw
git add -A why-cloud
git commit -m "$(cat <<'EOF'
fix(why-cloud): contrast and fit tweaks from the dark/light verify pass

Co-Authored-By: Claude Opus 4.8 (1M context) <noreply@anthropic.com>
EOF
)"
```

If no fixes were needed, skip this commit.

---

## Self-Review

**Spec coverage** (each spec section → task):
- A (kill "typing" framing) → Task 2. ✓
- B (reskin 3 signposts) → Tasks 3, 4, 5. ✓
- B5 (extract `ConsoleWindow`) → Task 1. ✓
- C6 (landscape slide, vendored SVGs, distinct treatment) → Task 6. ✓
- C7 (guess-the-host `ASK:` reveal = GitHub Pages) → Task 6, Step 3 notes. ✓
- C8 (DigitalOcean in start-tonight) → Task 7. ✓
- D9 (manifest rename + insert) → Tasks 2, 6. ✓
- D10–12 (lint, screenshots, build) → each task + Task 8. ✓
- Locked facts (AWS demo, Cloudflare layer, DEMO SCRIPT verbatim) → Tasks 3–5 preserve script blocks; no provider demo added. ✓
- Out of scope (attendance QR, other decks) → untouched. ✓

**Placeholder scan:** No TBD/TODO; every code step shows full markup; no "similar to Task N" (each signpost task repeats its own code). ✓

**Type/name consistency:** `<ConsoleWindow title="…">` signature identical across Tasks 1–5. `import.meta.env.BASE_URL` → `base`, used only in Task 6. v-click renumbering in Task 7 is internally consistent (DO=2, Cloudflare=3, globalping=4, payoff=5 with matching `v-mark at:5`). Transition directions checked for no adjacent repeat (Task 6). ✓
