---
layout: default
transition: slide-left
---

<p class="eyebrow font-mono"><span class="text-blue-600 dark:text-blue-400">part 3</span> &middot; blazingly fast</p>

### Light and quick

<div class="pop grid grid-cols-2 gap-x-16 gap-y-12 mt-12 max-w-3xl mx-auto">

<div v-click="1" class="flex items-start gap-4">
  <mdi-timer-outline class="text-3xl text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" />
  <div>
    <p class="font-700 text-lg m-0">starts in seconds</p>
    <p class="text-sm opacity-70 mt-1 mb-0">no operating system to boot</p>
  </div>
</div>

<div v-click="2" class="flex items-start gap-4">
  <mdi-feather class="text-3xl text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" />
  <div>
    <p class="font-700 text-lg m-0">light to move</p>
    <p class="text-sm opacity-70 mt-1 mb-0">an image is megabytes</p>
  </div>
</div>

<div v-click="3" class="flex items-start gap-4">
  <mdi-engine-outline class="text-3xl text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" />
  <div>
    <p class="font-700 text-lg m-0">shares the engine</p>
    <p class="text-sm opacity-70 mt-1 mb-0">borrows the machine's Linux</p>
  </div>
</div>

<div v-click="4" class="flex items-start gap-4">
  <mdi-view-grid-outline class="text-3xl text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" />
  <div>
    <p class="font-700 text-lg m-0">dozens at once</p>
    <p class="text-sm opacity-70 mt-1 mb-0">a fleet on one laptop</p>
  </div>
</div>

</div>

<!--
Part 3 explains why the demos have felt instant, then measures it.

[click] a container doesn't boot an operating system, because it borrows the one already running underneath. Starting a box is closer to opening an app than to switching on a computer.
[click] images are small. The nginx box is a few dozen megabytes, about one WhatsApp video, which is why the pull this morning took seconds.
[click] the engine underneath is the machine's own Linux kernel, the core program from Monday's session. The heavier alternative, a virtual machine, carries an entire spare operating system per app, gigabytes each, minutes to boot.
[click] and because each box is so light, one ordinary laptop happily runs dozens side by side. The final demo starts a small fleet and then wipes it clean.
-->
