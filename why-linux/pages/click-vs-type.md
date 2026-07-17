---
layout: default
transition: slide-left
---

<p class="eyebrow font-mono"><span class="text-amber-600 dark:text-amber-400">part 3</span> &middot; full control</p>

### Click vs type

<div class="grid grid-cols-2 gap-8 mt-6 items-stretch">

<!-- GUI window: fixed light, the way desktop apps look -->
<div v-motion :initial="{ x: -40, opacity: 0 }" :enter="{ x: 0, opacity: 1, transition: { type: 'spring', stiffness: 90, delay: 150 } }">
<div class="from-left rounded-xl overflow-hidden border border-gray-400/40 shadow-lg bg-gray-100 text-gray-700 h-full">
  <div class="flex items-center gap-1.5 px-4 py-2.5 bg-gray-200 border-b border-gray-300">
    <span class="w-3 h-3 rounded-full bg-red-400"></span>
    <span class="w-3 h-3 rounded-full bg-yellow-400"></span>
    <span class="w-3 h-3 rounded-full bg-green-400"></span>
    <span class="ml-3 text-xs text-gray-500">File Manager</span>
  </div>
  <div class="px-5 py-4 space-y-4 text-sm">
    <div v-click="1" class="flex items-center gap-3">
      <mdi-menu class="text-lg text-gray-400 flex-shrink-0" />
      <span>only what the menus offer</span>
    </div>
    <div v-click="2" class="flex items-center gap-3">
      <mdi-cursor-default-click class="text-lg text-gray-400 flex-shrink-0" />
      <span>50 files, 50 clicks</span>
    </div>
    <div v-click="3" class="flex items-center gap-3">
      <mdi-history class="text-lg text-gray-400 flex-shrink-0" />
      <span>no save, no replay</span>
    </div>
  </div>
</div>
</div>

<!-- Terminal: fixed dark, the way terminals look -->
<div v-motion :initial="{ x: 40, opacity: 0 }" :enter="{ x: 0, opacity: 1, transition: { type: 'spring', stiffness: 90, delay: 150 } }">
<div class="from-right h-full">
<TermWindow title="terminal">
<div v-click="1" class="mt-1">
  <div><span class="text-green-400">$</span> mv draft.txt final.txt</div>
  <div class="opacity-50 text-xs">you say exactly what you want</div>
</div>
<div v-click="2" class="mt-3">
  <div><span class="text-green-400">$</span> mv *.txt archive/</div>
  <div class="opacity-50 text-xs">all 50 files, same effort as one</div>
</div>
<div v-click="3" class="mt-3">
  <div><span class="text-green-400">$</span> ./tidy-up.sh</div>
  <div class="opacity-50 text-xs">saved as a script, repeat forever</div>
</div>
</TermWindow>
</div>
</div>

</div>

<div v-click="4" class="mark-safe mt-8 text-center text-lg opacity-85">
Our server has no mouse; <span v-mark="{ at: 4, color: '#d97706', type: 'underline' }">typing is the only way in</span>.
</div>

<!--
Reassure them: nobody memorises everything. Pros know about 20 commands well and look up the rest (we'll meet tldr and cheat.sh soon).
-->
