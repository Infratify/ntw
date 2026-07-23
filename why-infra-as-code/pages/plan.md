---
layout: default
transition: slide-down
---

### Today's plan

<div class="pop grid grid-cols-3 gap-8 mt-16 max-w-3xl mx-auto text-center">

<div v-click="1" class="relative pt-6">
  <span class="ghost-num font-mono">01</span>
  <mdi-content-copy class="text-4xl text-purple-600 dark:text-purple-400 mx-auto" />
  <p class="text-lg font-700 mt-3 mb-1">perfectly repeatable</p>
  <p class="text-sm opacity-60 m-0">the same server, twice</p>
</div>

<div v-click="2" class="relative pt-6">
  <span class="ghost-num font-mono">02</span>
  <mdi-backup-restore class="text-4xl text-purple-600 dark:text-purple-400 mx-auto" />
  <p class="text-lg font-700 mt-3 mb-1">rebuild anytime</p>
  <p class="text-sm opacity-60 m-0">destroyed, then rebuilt</p>
</div>

<div v-click="3" class="relative pt-6">
  <span class="ghost-num font-mono">03</span>
  <mdi-robot-outline class="text-4xl text-purple-600 dark:text-purple-400 mx-auto" />
  <p class="text-lg font-700 mt-3 mb-1">fully automated</p>
  <p class="text-sm opacity-60 m-0">one edit, three servers</p>
</div>

</div>

<div v-click="4" class="mt-14 text-center text-base opacity-80">
Everything today comes from one folder of text.
</div>

<!--
- session map; recap slide mirrors it at the end
- housekeeping to SAY, not show: nothing to install, they just watch; questions in Zoom chat anytime, batched at breaks

- [click] first: writing infrastructure down as code, why written beats memory + clicking; we read the code for a real server, live
- [click] then the poster's wow: whole environment built from that code in ~2 min, destroyed in front of everyone, rebuilt
- [click] the finish: change one number in the file, three servers appear on their own
- [click] one small folder of text files on my screen all session; every single thing comes out of it
- timing: ~5 minutes in at this point
-->
