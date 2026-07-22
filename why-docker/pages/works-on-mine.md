---
layout: default
transition: slide-up
---

<p class="eyebrow font-mono"><span class="text-blue-600 dark:text-blue-400">part 1</span> &middot; works everywhere</p>

### It works on mine

<div class="grid grid-cols-2 gap-8 mt-6 items-stretch">

<!-- GUI window: fixed light, the laptop where everything is fine -->
<div v-motion :initial="{ x: -40, opacity: 0 }" :enter="{ x: 0, opacity: 1, transition: { type: 'spring', stiffness: 90, delay: 150 } }">
<div class="from-left rounded-xl overflow-hidden border border-gray-400/40 shadow-lg bg-gray-100 text-gray-700 h-full">
  <div class="flex items-center gap-1.5 px-4 py-2.5 bg-gray-200 border-b border-gray-300">
    <span class="w-3 h-3 rounded-full bg-red-400"></span>
    <span class="w-3 h-3 rounded-full bg-yellow-400"></span>
    <span class="w-3 h-3 rounded-full bg-green-400"></span>
    <span class="ml-3 text-xs text-gray-500">my laptop</span>
  </div>
  <div class="px-5 py-4 space-y-4 text-sm">
    <div v-click="1" class="flex items-center gap-3">
      <mdi-language-python class="text-lg text-gray-400 flex-shrink-0" />
      <span class="font-mono text-xs">Python 3.12</span>
    </div>
    <div v-click="2" class="flex items-center gap-3">
      <mdi-package-variant class="text-lg text-gray-400 flex-shrink-0" />
      <span class="font-mono text-xs">open-webui installed</span>
    </div>
    <div v-click="3" class="flex items-center gap-3">
      <mdi-check-circle-outline class="text-lg text-green-500 flex-shrink-0" />
      <span class="font-mono text-xs">the chat loads</span>
    </div>
  </div>
</div>
</div>

<!-- Terminal: fixed dark, the office server where the same app breaks -->
<div v-motion :initial="{ x: 40, opacity: 0 }" :enter="{ x: 0, opacity: 1, transition: { type: 'spring', stiffness: 90, delay: 150 } }">
<div class="from-right h-full">
<TermWindow title="the office server, same app">
<div v-click="1" class="mt-1">
  <div><span class="text-green-400">$</span> python3 --version</div>
  <div class="opacity-60">Python 3.8.10</div>
</div>
<div v-click="2" class="mt-2">
  <div><span class="text-green-400">$</span> pip install open-webui</div>
  <div class="text-red-400">No matching distribution found</div>
</div>
<div v-click="3" class="mt-2">
  <div><span class="text-green-400">$</span> curl localhost:8080</div>
  <div class="text-red-400">curl: (7) connection refused</div>
</div>
</TermWindow>
</div>
</div>

</div>

<div v-click="4" class="mark-safe mt-8 text-center text-lg opacity-85">
The same code <span v-mark="{ at: 4, color: '#dc2626', type: 'highlight' }">fails</span> on the second machine.
</div>

<!--
- ASK: type 1 if you have ever heard, or said, "but it works on my machine"; read the flood back
- pose the pain: today's running example is Open WebUI, a free ChatGPT-style chat app anyone can run on their own computer; on the laptop it purrs; then try the office server
- [click] laptop has Python 3.12; Python = the language the app is written in; the server has an older one
- [click] laptop has open-webui installed via pip, Python's library fetcher; the server's old Python refuses the same install outright
- [click] laptop: chat loads; server: nothing to start, so asking it for the page gets "connection refused"; curl = a way to request a page from the terminal
- [click] the famous sentence; every team says it, because every machine collects its own versions and settings over time; the app was never broken, the machines disagree; docker exists to end this argument
- STORY: land = the machines disagreed, not the code; pick a real moment when something you built ran at home and died in front of someone else (client demo, teammate's laptop, deployment day); beats: ordinary setup, the failure in the moment, what it cost in hours or face, how a container would change the ending; 60 to 90 seconds; close by naming the point
-->
