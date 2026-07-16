---
layout: default
transition: slide-left
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
Watch the log while it works: <code>mkdir</code>, <code>cat</code>, pipes.
<span v-mark="{ at: 3, color: '#7c3aed', type: 'underline' }">Your eight commands, just faster.</span>
</div>

<!--
DEMO SCRIPT (~8 min): run opencode with a free-tier model, give it the one prompt above, let everyone watch it create and serve, then open the page in a browser.
Point at the tool-use log every time a familiar command scrolls by. Rehearse beforehand; keep the finished page ready as a fallback.
-->
