---
layout: default
transition: slide-left
clicks: 3
---

### The stack

<div class="grid grid-cols-2 gap-10 mt-8 items-center">

<div>
  <LayerStack />
</div>

<div class="space-y-7">
  <div v-click="1" class="note-row items-center">
    <mdi-console-line class="note-ico text-amber-600 dark:text-amber-400" />
    <p><b>terminal</b> <span class="opacity-60">&middot; today's main character</span></p>
  </div>
  <div v-click="2" class="note-row items-center">
    <mdi-penguin class="note-ico text-blue-600 dark:text-blue-400" />
    <p><b>kernel</b> <span class="opacity-60">&middot; the actual Linux</span></p>
  </div>
  <div v-click="3" class="note-row items-center">
    <mdi-layers-triple-outline class="note-ico text-green-600 dark:text-green-400" />
    <p><b>every layer</b> <span class="opacity-60">&middot; yours to touch</span></p>
  </div>
</div>

</div>

<!--
Click through the four bars first (apps, shell, kernel, hardware), then the three labels, narrating each:
[click] the terminal is just an app for talking to the system in text, and it's today's main character.
[click] the kernel is the actual "Linux"; everything else is packaging around it.
[click] Windows and macOS stack up exactly the same way; the difference is Linux lets you see and touch every layer.
Keep it under 3 minutes; this is the only theory diagram of the day.
-->
