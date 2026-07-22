---
layout: default
transition: fade-out
---

<div class="flex items-center gap-3 mb-2">
  <LiveBadge />
  <h3 class="!m-0">A stack in seconds</h3>
</div>

<div class="term-print max-w-2xl mx-auto mt-3">
<TermWindow title="two boxes, one file: compose.yaml">
<div v-click="1" class="py-0 opacity-40"># the hand-wired way</div>
<div v-click="1" class="py-0 opacity-40">$ docker network create ai-net</div>
<div v-click="1" class="py-0 opacity-40">$ docker run … --name brain …</div>
<div v-click="1" class="py-0 opacity-40">$ docker run … --name chat …</div>
<div v-click="2" class="py-0 mt-2 opacity-50"># the compose way: compose.yaml</div>
<div v-click="2" class="py-0"><span class="text-amber-300">services:</span></div>
<div v-click="2" class="py-0">&nbsp;&nbsp;<span class="text-amber-300">brain:</span></div>
<div v-click="2" class="py-0">&nbsp;&nbsp;&nbsp;&nbsp;image: ollama/ollama</div>
<div v-click="3" class="py-0">&nbsp;&nbsp;<span class="text-amber-300">chat:</span></div>
<div v-click="3" class="py-0">&nbsp;&nbsp;&nbsp;&nbsp;image: ghcr.io/open-webui/open-webui:main</div>
<div v-click="3" class="py-0">&nbsp;&nbsp;&nbsp;&nbsp;ports: <span class="opacity-70">["3000:8080"]</span></div>
<div v-click="3" class="py-0">&nbsp;&nbsp;&nbsp;&nbsp;depends_on: <span class="opacity-70">[brain]</span> <span class="opacity-40"># settings trimmed</span></div>
<div v-click="4" class="py-0 mt-2"><span class="text-green-400">$</span> time docker compose up -d</div>
</TermWindow>
</div>

<div v-click="5" class="mark-safe mt-4 text-center text-lg opacity-85">
One file starts the chat app <span v-mark="{ at: 5, color: '#2563eb', type: 'highlight' }">and its brain</span>.
</div>

<!--
- the finale: part 1's chat app finally meets part 2's brain
- [click] the dim lines: real apps are teams of boxes; hand-wiring the team means a network plus one long docker run per box, retyped in order, every time
- [click] compose.yaml is the team written down instead: a parts list; first entry, the brain, ollama again
- [click] second entry, the chat app, with its door and a line saying it waits for the brain; boxes find each other by name, chat simply calls it "brain"
- [click] one command reads the file and starts everything; time is a stopwatch wrapped around it, settling the vote from the last slide
- [click] payoff, then the live run

DEMO SCRIPT (~10 min), on the demo laptop, in the ai folder:
1. cat compose.yaml, walk the real file top to bottom slowly; the slide shows the trimmed shape, the file adds the model drawer and settings
2. the vote from the diagram slide is still open: press Enter on time docker compose up -d, read the real line aloud, name the winning letter (rehearsed: about half a second)
3. open localhost:3000: part 1's chat app again, and the model picker now shows llama3.2:1b
4. ACTIVITY: type a question for the AI in the Zoom chat; pick one, ask it in the browser, the answer streams on screen
5. docker compose ps: two rows, both Up; the whole stack in one glance
6. ACTIVITY: docker compose down removes the team; before Enter, predict how many rows docker compose ps shows after; run both: empty table, laptop clean
7. close: a chat app plus a working AI brain, started together, timed, removed; one file did the wiring
- Night before: copy the ready file from the repo, why-docker/demo/compose.yaml, into a folder named ai on the demo laptop; docker compose up -d, then docker compose exec brain ollama pull llama3.2:1b; open localhost:3000 once, close the What's New box, send one test question; docker compose down (the named volumes keep the model and settings, so show-time start is half a second and the dialog stays closed); images and model are all local, the live demo needs no internet
- FALLBACK: if compose or the browser wedges, part 2's terminal chat still proves the AI live: docker run -d -v ai:/root/.ollama --name brain ollama/ollama, then the exec chat; the compose.yaml on the slide still tells the story
-->
