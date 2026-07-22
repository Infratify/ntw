---
layout: default
transition: slide-up
---

<div class="flex items-center gap-3 mb-2">
  <LiveBadge />
  <h3 class="!m-0">The manual way</h3>
</div>

<div class="term-print max-w-2xl mx-auto mt-6">
<TermWindow title="running an AI chat app without docker">
<div v-click="1" class="py-0.5"><span class="text-green-400">$</span> pip install open-webui</div>
<div v-click="1" class="py-0.5 text-red-400">pip: command not found</div>
<div v-click="2" class="py-0.5 mt-1 flex items-center justify-between"><span><span class="text-green-400">$</span> sudo apt install python3-pip</span><span class="opacity-50"># minutes pass</span></div>
<div v-click="2" class="py-0.5"><span class="text-green-400">$</span> pip install open-webui</div>
<div v-click="2" class="py-0.5 text-red-400">error: externally-managed-environment</div>
<div v-click="3" class="py-0.5 mt-1 flex items-center justify-between"><span><span class="text-green-400">$</span> python3 -m venv ai</span><span class="opacity-50"># one more workaround</span></div>
<div v-click="3" class="py-0.5 flex items-center justify-between"><span><span class="text-green-400">$</span> ai/bin/pip install open-webui</span><span class="opacity-50"># gigabytes later</span></div>
<div v-click="4" class="py-0.5 mt-3 opacity-50"># the docker way</div>
<div v-click="4" class="py-0.5"><span class="text-green-400">$</span> docker run -d -p 3000:8080 <span class="opacity-60">\</span></div>
<div v-click="4" class="py-0.5"><span class="opacity-60">&nbsp;&nbsp;&nbsp;&nbsp;</span>-e WEBUI_AUTH=false <span class="opacity-60">\</span></div>
<div v-click="4" class="py-0.5"><span class="opacity-60">&nbsp;&nbsp;&nbsp;&nbsp;</span>ghcr.io/open-webui/open-webui:main</div>
</TermWindow>
</div>

<div v-click="5" class="mark-safe mt-5 text-center text-lg opacity-85">
The same chat app starts from <span v-mark="{ at: 5, color: '#2563eb', type: 'highlight' }">one typed command</span>.
</div>

<!--
- the app: Open WebUI, the free ChatGPT-style app from the works-on-mine story; installing it by hand goes like this
- [click] pip, Python's library fetcher, is not even on the machine yet
- [click] install pip first, minutes of downloads; then the machine refuses: it protects its own Python from hand-installed packages
  - gloss the red line: the machine saying "not in my system folders, make a separate space"
- [click] the workaround: a venv, a separate Python room; then the install itself, gigabytes of libraries, ten-plus minutes
  - every teammate repeats every step; any step failing differently on their machine
- [click] the docker way: the whole app, its Python and every library, packed as one box; one command, and the demo runs it now
- [click] payoff, then the live run

DEMO SCRIPT (~3 min), on the demo laptop:
1. run the docker command from the slide; say it honestly: the box itself was downloaded last night, it is a big one; today we watch it START
2. narrate while it warms (about 30 s): no Python was installed on this laptop, no pip, no venv; everything the app needs rides inside the box
3. open localhost:3000: the chat app is up; a real app with a real interface, from one command
4. point at the empty model picker: the app is missing its brain; the shelf that ships brains is part 2
- Night before: docker pull ghcr.io/open-webui/open-webui:main at home, the image is about 7 GB on disk; rehearse the run once with the exact flags, keep the rehearsal container stopped under the name chat-solo, then docker rm -f the live-run copy so the on-stage start is fresh
- FALLBACK: if the live run wedges, docker start chat-solo brings up last night's rehearsal copy on the same port and the narration continues unchanged
-->
