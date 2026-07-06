# National Training Week 2026 — DevOps Taster Series

A week of free, standalone live-demo webinars during **National Training Week (20–26 July 2026)**, designed to funnel beginners and career-switchers into the next intake of our DevOps bootcamp.

Content is generalised (decoupled) from the bootcamp curriculum in
`../slides-devops-bootcamp/outlines/2026`. Learning outcomes there are distilled into
short, motivation-first "Why X?" tasters — nothing invented, just compressed.

## At a glance (decided)

| Aspect | Decision |
| --- | --- |
| Shape | Series of **5 standalone sessions**, one topic each |
| Length | **~90 min** per session (~10 intro · ~65 demo · ~15 Q&A + CTA) |
| Format | **Instructor live demo** — attendees watch, zero setup |
| Channel | **Online webinar** |
| Audience | **Beginners / career-switchers** (matches bootcamp entry-level target) |
| Naming | Per-session **"Why X?"** convention (motivation-first) |
| Structure | **Approach B — connected through-line**: each session stands alone, but one artifact (a personal "profile card" web page) travels across the week |
| Primary CTA | **Register interest / waitlist** for the next bootcamp intake |

**The demo-is-the-proof rule:** every "Why?" is answered *by the live demo*, not argued in
slides. Pose the painful manual way → then the tool does it live in one move. This keeps the
sessions out of the theory ditch (the reason the pure-DevOps-theory topic was dropped).

## Sessions

Order is **wow-ascending** and also pedagogically sound; a viewer who attends all five watches
one file become global infrastructure.

| Day (proposed) | Session | Live-demo wow moment |
| --- | --- | --- |
| Mon 20 Jul | **Why Linux?** | live-tail a running server — "this is where pros live" |
| Tue 21 Jul | **Why Git & GitHub?** | the page goes live on the public internet in 2 min |
| Wed 22 Jul | **Why Docker?** | one command → running web server |
| Thu 23 Jul | **Why Cloud?** | a real server on AWS, global via Cloudflare |
| Fri 24 Jul | **Why Infrastructure as Code?** | entire infra built from code, then destroyed in seconds |

Sat/Sun 25–26 Jul: buffer / encore / office-hours for warm leads.

## Poster / banner copy

Pattern: **`Why X?` → `because` → icon + 2-word benefit ×3.** Icons are Material Design Icons
(`<mdi-… />`).

### Why Docker? because…
| Icon | Benefit |
| --- | --- |
| `mdi-lan-check` | Works everywhere |
| `mdi-truck-fast` | Ships anywhere |
| `mdi-flash` | Blazingly fast |

### Why Linux? because…
| Icon | Benefit |
| --- | --- |
| `mdi-server` | Powers everything |
| `mdi-console-line` | Full control |
| `mdi-open-source-initiative` | Free forever |

### Why Git & GitHub? because…
| Icon | Benefit |
| --- | --- |
| `mdi-history` | Never forgets |
| `mdi-account-group` | Team ready |
| `mdi-github` | Career proof |

### Why Cloud? because…
| Icon | Benefit |
| --- | --- |
| `mdi-server-off` | No hardware |
| `mdi-arrow-expand-all` | Scales instantly |
| `mdi-earth` | Goes global |

### Why Infrastructure as Code? because…
| Icon | Benefit |
| --- | --- |
| `mdi-content-copy` | Perfectly repeatable |
| `mdi-refresh` | Rebuild anytime |
| `mdi-robot` | Fully automated |

## Session blurbs ("What you'll learn")

Fuller copy for the hub page / registration detail (3 max, traceable to the outline LOs).

- **Why Linux?** — Why servers run Linux · Files without a mouse · SSH into servers
- **Why Git & GitHub?** — End version-name chaos · Build together, safely · Publish a live URL
- **Why Docker?** — End "works on mine" · Ship anywhere, identically · One command, live server
- **Why Cloud?** — Rent servers, not hardware · Deploy to the world · Fast, secure, global
- **Why Infrastructure as Code?** — Stop clicking, start coding · Infrastructure from code · Build, configure, destroy

## Hub page

A single NTW landing page — the one URL/QR dropped in every webinar chat, and the funnel
destination. It should compile:

- **Week-at-a-glance schedule** (5 sessions, dates/times, register + add-to-calendar links)
- **The through-line story** (watch one page become global infrastructure)
- **One waitlist form** (the primary CTA every session points to)
- **Replay / notes links** per session (recover people who missed a day)

Dogfooding angle: build it as a static site and ship it on **Cloudflare Pages or GitHub Pages** —
the exact thing demoed in *Why Git & GitHub?* and *Why Cloud?* ("this page? you'll learn to ship
it on Wednesday"). Can live in this repo alongside the assets.

## Open decisions

- **Umbrella / week name** — candidate: **"Why DevOps?"** with tagline *"Zero to Deployed — 5 questions, 5 live demos."* Not confirmed.
- **Schedule** — day order above is proposed, not locked.
- **Through-line artifact** — the "profile card" web page is proposed; confirm the exact artifact.
- **Asset availability** — confirm the `infratify/*` demo image is public/reusable, and that AWS + Cloudflare accounts are available for the live Cloud/IaC demos.
- **Language** — copy is English; a Bahasa Malaysia version may suit the NTW crowd (outlines are in BM).

## Source

Derived from the bootcamp curriculum outlines and schedule in
`../slides-devops-bootcamp/outlines/2026/` (first-in-family sessions: DevOps, Linux 1–4,
Git 1–2, GitHub 1–2, AWS 1, Cloudflare 1, Docker 1).
