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

<div class="space-y-6">
  <div v-click="1" class="note-row">
    <mdi-console-line class="note-ico text-amber-600 dark:text-amber-400" />
    <p>The <b>terminal</b> is an app for talking to the system in text. Today's main character.</p>
  </div>
  <div v-click="2" class="note-row">
    <mdi-penguin class="note-ico text-blue-600 dark:text-blue-400" />
    <p>The <b>kernel</b> is the actual Linux. Everything else is wrapping.</p>
  </div>
  <div v-click="3" class="note-row">
    <mdi-layers-triple-outline class="note-ico text-green-600 dark:text-green-400" />
    <p>Windows and macOS stack up the same way. Linux lets you <b>see and touch every layer</b>.</p>
  </div>
</div>

</div>

<!--
Click through the four bars first (apps, shell, kernel, hardware), then the three notes. Keep it under 3 minutes; this is the only theory diagram of the day.
-->
