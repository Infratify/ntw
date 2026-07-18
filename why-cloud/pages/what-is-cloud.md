---
layout: default
transition: slide-left
clicks: 4
---

### What is the cloud?

<div class="grid grid-cols-2 gap-10 mt-4 items-center">

<div>
  <FlowGraph
    :width="300"
    :height="260"
    :nodes="[
      { shape: 'rect', cx: 150, cy: 220, w: 170, h: 52, icon: 'laptop', color: 'cyan', label: 'your laptop', at: 0 },
      { shape: 'rect', cx: 150, cy: 55, w: 170, h: 52, icon: 'server', color: 'blue', label: 'a datacenter', at: 1 },
    ]"
    :edges="[
      { at: 2, d: 'M185 194 V81', ax: 185, ay: 81, adeg: -90, label: 'rent one', lx: 250, ly: 138, lw: 66, lc: 'green' },
      { at: 3, d: 'M115 81 V194', ax: 115, ay: 194, adeg: 90, label: 'an address', lx: 50, ly: 138, lw: 76, lc: 'blue' },
    ]"
  />
</div>

<div class="space-y-7">
  <div v-click="1" class="note-row items-center">
    <mdi-warehouse class="note-ico text-blue-600 dark:text-blue-400" />
    <p><b>a datacenter</b> <span class="opacity-60">&middot; rows of real computers</span></p>
  </div>
  <div v-click="2" class="note-row items-center">
    <mdi-cursor-default-click-outline class="note-ico text-green-600 dark:text-green-400" />
    <p><b>renting</b> <span class="opacity-60">&middot; a few clicks</span></p>
  </div>
  <div v-click="3" class="note-row items-center">
    <mdi-timer-outline class="note-ico text-orange-600 dark:text-orange-400" />
    <p><b>ready</b> <span class="opacity-60">&middot; in about a minute</span></p>
  </div>
</div>

</div>

<div v-click="4" class="mark-safe mt-4 text-center text-lg opacity-85">
The cloud is <span v-mark="{ at: 4, color: '#ea580c', type: 'highlight' }">someone else's computers</span>, rented by the hour.
</div>

<!--
The cloud sounds like weather, so pin it to the ground immediately: it is a building.

[click] a datacenter is a warehouse full of the exact rack servers from the last quote, tens of thousands of them, already bought, cooled, guarded and wired by a company like Amazon. Amazon Web Services, AWS for short, is the shopping company's computer-renting side; it grew into the biggest cloud on Earth. Microsoft calls theirs Azure, Google calls theirs Google Cloud.
[click] renting one is a web form: pick a size, pick a country, click launch. No purchase order, no delivery truck.
[click] and it's yours in about a minute, because the machine was already there, humming, waiting for a tenant.
[click] that's the whole idea. Everything from the quotation slide, someone else already paid for; you rent a slice by the hour and stop whenever you like. In part 1's demo we do exactly this, live.
-->
