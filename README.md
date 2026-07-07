# National Training Week 2026 — DevOps Taster Series

A week of free, standalone live-demo webinars during **National Training Week (20–26 July 2026)**,
designed to funnel beginners and career-switchers into the next intake of the **Infratify** DevOps bootcamp.

Content is generalised (decoupled) from the bootcamp curriculum in
`../slides-devops-bootcamp/outlines/2026`. Learning outcomes there are distilled into
short, motivation-first "Why X?" tasters — nothing invented, just compressed.

**Live hub:** https://infratify.github.io/ntw/ · **Repo:** `Infratify/ntw`
The printed-poster QR code (`ml.my/infratify-ntw`) redirects to that hub page.

## At a glance (finalised on the banners)

| Aspect | Decision |
| --- | --- |
| Shape | Series of **5 standalone sessions**, one topic each |
| Format | **Instructor live demo** — attendees watch, zero setup |
| Channel | **Zoom webinar** |
| Audience | **Absolute beginners** ("FOR BEGINNERS" on every banner) |
| Naming | Per-session **"Why X?"** convention (motivation-first) |
| Brand | **Infratify** · Instructor **Ts. Ariff Azman** (Course Instructor) |
| Credentials | HRD Corp Accredited Trainer · MBOT Professional Technologist (PT26010105) · HRD Corp Registered Training Provider |
| Primary CTA | **Register interest / waitlist** for the next bootcamp intake |

**The demo-is-the-proof rule:** every "Why?" is answered *by the live demo*, not argued in
slides. Pose the painful manual way → then the tool does it live in one move. This keeps the
sessions out of the theory ditch (the reason the pure-DevOps-theory topic was dropped).

## Schedule (locked — matches the printed banners)

A viewer who attends all five watches one plain web page become global infrastructure.

| Day | Session | Time (MYT) | Banner theme | Live-demo wow moment |
| --- | --- | --- | --- | --- |
| **Mon 20 Jul** | **Why Linux?** | 10:30 AM | gold/black | live-tail a running server — "this is where pros live" |
| **Tue 21 Jul** | **Why Git & GitHub?** | 10:30 AM | red | the page goes live on the public internet in 2 min |
| **Wed 22 Jul** | **Why Cloud?** | 10:30 AM | orange | a real server on AWS, global via Cloudflare |
| **Thu 23 Jul** | **Why Docker?** | 10:30 AM | Docker blue | one command → running web server |
| **Fri 24 Jul** | **Why Infra as Code?** | **10:00 AM** | purple | entire infra built from code, then destroyed in seconds |

All sessions on Zoom. Sat/Sun 25–26 Jul: buffer / encore / office-hours for warm leads.

## Poster / banner copy (as shipped)

Pattern: **`why X?` → `BECAUSE` → icon + 2-word benefit ×3.** These are the finalized banners in
`assets/banners/` (web-optimized WebP + JPG fallback; full-res source stays in the `.rar`, gitignored).

### why Linux? because…
| Benefit | | Benefit | | Benefit |
| --- | --- | --- | --- | --- |
| powers everything | | full control | | free forever |

### why git & GitHub? because…
| Benefit | | Benefit | | Benefit |
| --- | --- | --- | --- | --- |
| never forget | | team ready | | career proof |

### why Cloud? because…
| Benefit | | Benefit | | Benefit |
| --- | --- | --- | --- | --- |
| no hardware | | scales instantly | | goes global |

### why docker? because…
| Benefit | | Benefit | | Benefit |
| --- | --- | --- | --- | --- |
| works everywhere | | ship anywhere | | blazingly fast |

### why Infra as Code? because…
| Benefit | | Benefit | | Benefit |
| --- | --- | --- | --- | --- |
| perfectly repeatable | | rebuild anytime | | fully automated |

## Session blurbs ("What you'll learn")

Fuller copy for registration detail (3 max, traceable to the outline LOs).

- **Why Linux?** — Why servers run Linux · Files without a mouse · SSH into servers
- **Why Git & GitHub?** — End version-name chaos · Build together, safely · Publish a live URL
- **Why Cloud?** — Rent servers, not hardware · Deploy to the world · Fast, secure, global
- **Why Docker?** — End "works on mine" · Ship anywhere, identically · One command, live server
- **Why Infra as Code?** — Stop clicking, start coding · Infrastructure from code · Build, configure, destroy

## Hub page (built)

`index.html` — a single static landing page, the funnel destination the poster QR points to.
It shows:

- **Week-at-a-glance schedule** — the five finalized banners as a responsive grid, each tinted with
  its own theme colour, with an accessible day/time caption.
- **The through-line story** (watch one page become global infrastructure).
- **A register/waitlist CTA** (the primary funnel to the next bootcamp intake).

Dogfooding angle: it's a static site shipped on **GitHub Pages** via `.github/workflows/deploy.yml` —
the exact thing demoed in *Why Git & GitHub?* and *Why Cloud?*.

## Links wired in

- **Both "Join the DevOps bootcamp" CTAs** (hero + panel) go to the official bootcamp page:
  `https://ml.my/infratify-devops-bootcamp` (redirects to `infratify.com/devops-bootcamp`).
- **Trainer profile** is linked from the footer name: `https://ml.my/op-tp` (redirects to
  `trainer.opariffazman.com`).
- The poster QR (`ml.my/infratify-ntw`) still lands on this hub, which then funnels to the bootcamp page.

Icons are inline MDI SVGs (no external font/CDN); copy has had a humanizer pass (no em/en dashes, no emoji).

## Still open

- **Free-session sign-up** — if the five Zoom webinars need their own registration (separate from the
  bootcamp), that link isn't on the page yet. Right now every CTA points at the bootcamp.
- **Language** — copy is English; a Bahasa Malaysia version may suit the NTW crowd (outlines are in BM).
- **Old repo** — `officialdad/ntw` was the initial scaffold host; superseded by `Infratify/ntw`. It can
  be archived/deleted separately (that Pages site is not referenced by any poster).

## Source

Derived from the bootcamp curriculum outlines and schedule in
`../slides-devops-bootcamp/outlines/2026/` (first-in-family sessions: DevOps, Linux 1–4,
Git 1–2, GitHub 1–2, AWS 1, Cloudflare 1, Docker 1).
