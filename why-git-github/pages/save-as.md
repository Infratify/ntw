---
layout: default
transition: slide-right
---

<p class="eyebrow font-mono"><span class="text-red-600 dark:text-red-400">part 1</span> &middot; never forget</p>

### Two ways to remember

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
      <mdi-file-document-outline class="text-lg text-gray-400 flex-shrink-0" />
      <span class="font-mono text-xs">menu_final.docx</span>
    </div>
    <div v-click="2" class="flex items-center gap-3">
      <mdi-file-document-outline class="text-lg text-gray-400 flex-shrink-0" />
      <span class="font-mono text-xs">menu_final_v2.docx</span>
    </div>
    <div v-click="3" class="flex items-center gap-3">
      <mdi-file-alert-outline class="text-lg text-red-400 flex-shrink-0" />
      <span class="font-mono text-xs">menu_final_v2_FINAL(3).docx</span>
    </div>
  </div>
</div>
</div>

<!-- Terminal: fixed dark, the way git looks -->
<div v-motion :initial="{ x: 40, opacity: 0 }" :enter="{ x: 0, opacity: 1, transition: { type: 'spring', stiffness: 90, delay: 150 } }">
<div class="from-right h-full">
<TermWindow title="the same three versions, kept by git">
<div v-click="1" class="mt-1">
  <div><span class="text-green-400">$</span> git log --oneline --reverse</div>
  <div><span class="text-amber-300">f3a9c21</span> first draft</div>
</div>
<div v-click="2" class="mt-2">
  <div><span class="text-amber-300">8d2e657</span> add prices</div>
</div>
<div v-click="3" class="mt-2">
  <div><span class="text-amber-300">2c90b1e</span> fix the spelling</div>
</div>
</TermWindow>
</div>
</div>

</div>

<div v-click="4" class="mark-safe mt-8 text-center text-lg opacity-85">
Same three versions: three files, or <span v-mark="{ at: 4, color: '#dc2626', type: 'highlight' }">one history</span>.
</div>

<!--
ASK (before the first click), spoken vote: "how do you keep old versions of an important file today?"
- A: Save As with a new name / B: copies flying around on WhatsApp or email / C: overwrite and hope
- read the top letter back, explore it for a moment; every one of the three is this slide's left window

PROP: printed stack of pages, each sheet titled like the left window (menu_final, menu_final_v2, menu_final_v2_FINAL(3))
- hold the first sheet up at click 1, add one per click; the physical pile grows with the on-screen folder

Pose the pain first: two weeks on one document; every milestone save = Save As with a new name.

- [click] version one gets "final" in the name, out of pure optimism
- [click] then final_v2, because final wasn't
- [click] thirty versions later the folder is a minefield
  - no note says what changed; copies fly around on WhatsApp and email; nobody sure which file is real
  - every team invents this system, every team loses a file to it

STORY (here, minefield on screen, before the git side answers; 60 to 90 seconds):
- land = one file with a kept history beats a folder of copies
- pick: a real moment you, or someone you worked with, lost or overwrote the right version
- beats: ordinary day, then the wrong file sent or the good version gone, then what it cost (hours, a deadline, trust), then how the ending changes once every version is kept
- close by naming the point, then click

- [click] the right side = the exact same story kept by git: ONE file + a list of saved versions
  - each line = one save: a short ID + a note in your own words saying what changed
  - that list = the history; reading it is one command
  - gloss the terminal for Monday-skippers: the dark window is just a program where you type instructions; today you only watch me type
-->
