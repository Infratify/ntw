---
layout: default
transition: slide-left
---

<p class="eyebrow font-mono"><span class="text-orange-600 dark:text-orange-400">part 2</span> &middot; scales instantly</p>

### Pick a bigger size

<div class="max-w-2xl mx-auto mt-8">
<div class="rounded-xl overflow-hidden border border-gray-400/40 shadow-lg bg-gray-100 text-gray-700">
  <div class="flex items-center gap-1.5 px-4 py-2.5 bg-gray-200 border-b border-gray-300">
    <span class="w-3 h-3 rounded-full bg-red-400"></span>
    <span class="w-3 h-3 rounded-full bg-yellow-400"></span>
    <span class="w-3 h-3 rounded-full bg-green-400"></span>
    <span class="ml-3 text-xs text-gray-500">EC2 console &middot; change instance type</span>
  </div>
  <div class="px-6 py-5 space-y-4 text-sm">
    <div v-click="1" class="flex items-center gap-3">
      <mdi-memory class="text-lg text-gray-500 flex-shrink-0" />
      <span>now: t3.micro</span>
      <span class="ml-auto font-mono text-xs text-gray-500">2 cores &middot; 1 GB</span>
    </div>
    <div v-click="2" class="flex items-center gap-3">
      <mdi-menu-down class="text-lg text-blue-600 flex-shrink-0" />
      <span>choose: t3.2xlarge</span>
      <span class="ml-auto font-mono text-xs bg-blue-500/10 text-blue-700 px-2 py-0.5 rounded">8 cores &middot; 32 GB</span>
    </div>
    <div v-click="3" class="flex items-center gap-3">
      <mdi-restart class="text-lg text-gray-500 flex-shrink-0" />
      <span class="px-3 py-1 rounded-md bg-orange-600 text-white text-xs font-700">Apply</span>
      <span class="ml-auto text-xs text-gray-500">one restart applies it</span>
    </div>
  </div>
</div>
</div>

<div v-click="4" class="mark-safe mt-8 text-center text-lg opacity-85">
The same machine restarts with <span v-mark="{ at: 4, color: '#ea580c', type: 'underline' }">four times</span> the cores.
</div>

<!--
Set the scene: launch day, your shop's ad goes viral, a thousand visitors a minute, and the site slows to a crawl. The old way: buy a second server, wait six weeks, miss the moment. The cloud way is this screen.

[click] the machine we just rented is the smallest size on the menu: two cores and 1 gigabyte of memory. Gloss cores: how many workers the processor has; more cores, more visitors served at once.
[click] the size menu goes from this up to machines with hundreds of cores; we pick one with eight cores and 32 gigabytes.
[click] applying it is a restart: stop, change size, start, about two minutes end to end. Nothing is reinstalled; the files, the page, everything stays.
[click] the same machine, four times the cores, thirty-two times the memory. Say it honestly: big sites automate this instead of clicking, adding whole extra copies when traffic spikes and dropping them after; that automation is what "scales instantly" means at company scale. Today we do the hands-on version live.
-->
