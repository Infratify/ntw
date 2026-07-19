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
Session map; the recap slide mirrors it at the end. Housekeeping to SAY, not show: nothing to install on their side, they just watch; questions go in the Zoom chat anytime and I batch them at each break.

[click] First: what it means to write infrastructure down as code, and why the written form beats memory and clicking. We read the code that describes a real server, live.
[click] Then the wow of the week's poster: the entire environment gets built from that code in about two minutes, destroyed in front of everyone, and rebuilt again.
[click] And the finish: changing one number in the file and watching the change do the work of many hands, three servers appearing on their own.
[click] One small folder of text files sits on my screen the entire session; every single thing you will see comes out of it. About 5 minutes in at this point.
-->
