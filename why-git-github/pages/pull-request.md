---
layout: default
transition: slide-left
---

### The pull request

<div class="max-w-2xl mx-auto mt-8">
<div class="rounded-xl overflow-hidden border border-gray-400/40 shadow-lg bg-gray-100 text-gray-700">
  <div class="flex items-center gap-1.5 px-4 py-2.5 bg-gray-200 border-b border-gray-300">
    <span class="w-3 h-3 rounded-full bg-red-400"></span>
    <span class="w-3 h-3 rounded-full bg-yellow-400"></span>
    <span class="w-3 h-3 rounded-full bg-green-400"></span>
    <span class="ml-3 text-xs text-gray-500">GitHub &middot; pull request</span>
  </div>
  <div class="px-6 py-5 space-y-4 text-sm">
    <div v-click="1" class="flex items-center gap-3">
      <mdi-source-branch class="text-lg text-purple-600 flex-shrink-0" />
      <span class="font-600">Add menu section</span>
      <span class="ml-auto font-mono text-xs bg-purple-500/10 text-purple-700 px-2 py-0.5 rounded">ali/menu → main</span>
    </div>
    <div v-click="2" class="flex items-center gap-3">
      <mdi-file-compare class="text-lg text-gray-400 flex-shrink-0" />
      <span>2 files changed</span>
      <span class="ml-auto font-mono text-xs"><span class="text-green-600 font-700">+38</span> <span class="text-red-500 font-700">-2</span></span>
    </div>
    <div v-click="3" class="flex items-center gap-3">
      <mdi-check-circle class="text-lg text-green-600 flex-shrink-0" />
      <span>Ariff approved</span>
      <span class="ml-auto text-xs bg-green-500/10 text-green-700 px-2 py-0.5 rounded font-600">Approved</span>
    </div>
    <div v-click="4" class="flex items-center gap-3">
      <mdi-source-merge class="text-lg text-gray-400 flex-shrink-0" />
      <span class="px-3 py-1 rounded-md bg-green-600 text-white text-xs font-700">Merge pull request</span>
    </div>
  </div>
</div>
</div>

<div v-click="5" class="mark-safe mt-8 text-center text-lg opacity-85">
A teammate reads every change <span v-mark="{ at: 5, color: '#dc2626', type: 'underline' }">before it lands</span>.
</div>

<!--
The merge from the last slide rarely happens silently on a team. On GitHub it goes through this page: a pull request, literally "please pull my branch in".

[click] Ali opens one: his branch on the left, main on the right, a title saying what he did.
[click] GitHub shows exactly what would change: 38 lines added, 2 removed, laid out side by side. Nothing hides.
[click] a teammate reads it and answers: approve, or request changes with comments on specific lines. Both are normal; asking for fixes is care, never an insult.
[click] only after the green light does the merge button fold Ali's work into main.
[click] this review loop is how strangers who have never met safely build the same software; the "team ready" from the banner is this page. It is also how beginners contribute to real projects: your first pull request to someone else's repo is a rite of passage.
-->
