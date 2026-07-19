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
      <span class="font-mono text-xs">flask installed</span>
    </div>
    <div v-click="3" class="flex items-center gap-3">
      <mdi-check-circle-outline class="text-lg text-green-500 flex-shrink-0" />
      <span class="font-mono text-xs">the page loads</span>
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
  <div><span class="text-green-400">$</span> python3 app.py</div>
  <div class="text-red-400">ModuleNotFoundError: 'flask'</div>
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
Pose the pain first: you build a small app on your laptop, a page for the nasi lemak stall from Tuesday, and it runs beautifully. Then you copy it to the office server, or a friend's PC.

[click] the laptop has Python 3.12. Python is the language the app is written in; the server has an older one.
[click] the laptop has flask, a library, meaning ready-made code the app borrows. Nobody ever installed it on the server.
[click] so on the laptop the page loads, and on the server the exact same file crashes, and asking the server for the page gets "connection refused". curl is just a way to request a page from the terminal.
[click] this sentence is famous in software teams: "but it works on my machine". Every team says it, because every machine collects its own versions and settings over time. The app was never broken; the machines disagree. Docker exists to end this argument.
-->
