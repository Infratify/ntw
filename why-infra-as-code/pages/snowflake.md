---
layout: default
transition: slide-down
---

<p class="eyebrow font-mono"><span class="text-purple-600 dark:text-purple-400">part 2</span> &middot; rebuild anytime</p>

### The irreplaceable server

<div class="pop grid grid-cols-2 gap-x-16 gap-y-12 mt-12 max-w-3xl mx-auto">

<div v-click="1" class="flex items-start gap-4">
  <mdi-hammer-wrench class="text-3xl text-red-600 dark:text-red-400 flex-shrink-0 mt-1" />
  <div>
    <p class="font-700 text-lg m-0">built by hand</p>
    <p class="text-sm opacity-70 mt-1 mb-0">clicks, tweaks, patches</p>
  </div>
</div>

<div v-click="2" class="flex items-start gap-4">
  <mdi-history class="text-3xl text-red-600 dark:text-red-400 flex-shrink-0 mt-1" />
  <div>
    <p class="font-700 text-lg m-0">years of changes</p>
    <p class="text-sm opacity-70 mt-1 mb-0">written down nowhere</p>
  </div>
</div>

<div v-click="3" class="flex items-start gap-4">
  <mdi-account-off-outline class="text-3xl text-red-600 dark:text-red-400 flex-shrink-0 mt-1" />
  <div>
    <p class="font-700 text-lg m-0">the builder resigned</p>
    <p class="text-sm opacity-70 mt-1 mb-0">the knowledge left too</p>
  </div>
</div>

<div v-click="4" class="flex items-start gap-4">
  <mdi-power-plug-off-outline class="text-3xl text-red-600 dark:text-red-400 flex-shrink-0 mt-1" />
  <div>
    <p class="font-700 text-lg m-0">one disk failure</p>
    <p class="text-sm opacity-70 mt-1 mb-0">and nothing comes back</p>
  </div>
</div>

</div>

<div v-click="5" class="mt-12 text-center text-base opacity-80">
Ops teams call this a snowflake server.
</div>

<!--
- nearly every company has one; describe it, watch the chat light up with recognition

ASK: pulse check
- "type 1 if your workplace has a machine nobody dares to restart"
- the wall of 1s = the recognition; name it back as the snowflake

- [click] a server set up by hand years ago, patched by hand ever since
- [click] hundreds of small changes over the years: a setting here, a workaround there, none written down
- [click] the person who built it moved on; every unwritten detail went with them
- [click] disk dies = no runbook, no recipe, no faithful copy; the business finds out how much lived on that one machine
- [click] the industry name = snowflake server: unique like a snowflake, once it melts that exact one never exists again
  - gloss ops: the team that keeps systems running
  - if the machine is described in a file, the fear disappears, any machine becomes rebuildable; we prove it now by killing ours on purpose
-->
