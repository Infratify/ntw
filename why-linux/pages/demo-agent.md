---
layout: default
transition: slide-down
---

<div class="flex items-center gap-3 mb-2">
  <LiveBadge />
  <h3 class="!m-0">Watch it build</h3>
</div>

<div class="term-print max-w-2xl mx-auto mt-8">
<TermWindow title="opencode: open-source AI agent, free models included">
<div><span class="text-green-400">$</span> opencode</div>
<div v-click="1" class="mt-2 text-purple-300">&gt; build a one-page website for a nasi lemak stall,<br />&nbsp;&nbsp;then serve it so I can open it in a browser</div>
<div v-click="2" class="mt-2 opacity-70">✻ creating index.html&hellip;</div>
<div v-click="2" class="opacity-70">✻ running: python3 -m http.server 8000</div>
<div v-click="2" class="text-green-400">✓ live at http://localhost:8000</div>
</TermWindow>
</div>

<div v-click="3" class="mark-safe mt-8 text-center text-lg opacity-85">
Watch the log; it runs <span v-mark="{ at: 3, color: '#7c3aed', type: 'underline' }">your eight commands</span>, just faster.
</div>

<!--
DEMO SCRIPT (~8 min): run opencode with a free-tier model, give it the one prompt above, let everyone watch it create and serve, then open the page in a browser.
Point at the tool-use log every time a familiar command scrolls by. Gloss "free-tier model" when it comes up: an AI model whose provider lets you use it at no cost, which is why today's bill stays at RM0.
Prep the night before: install opencode on the server (curl -fsSL https://opencode.ai/install | bash), sign in and select a free-tier model, confirm python3 --version works (preinstalled on Ubuntu), then do one full dry run of the exact prompt so the timing is known.
IMPORTANT: localhost:8000 lives on the server, not the laptop. Connect the morning session with ssh -L 8000:localhost:8000 ariff@my-server; the tunnel makes http://localhost:8000 in the laptop browser show the server's page, exactly as the transcript says.
FALLBACK: keep the finished index.html from the dry run; if the model stalls live, serve that copy with python3 -m http.server 8000 and walk through the rehearsal log instead.
-->
