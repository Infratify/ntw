---
layout: default
transition: fade-out
clicks: 6
---

### Container vs VM

<div class="grid grid-cols-2 gap-10 mt-4 max-w-3xl mx-auto">

<div>
  <p class="text-center text-sm font-700 tracking-wide opacity-70 mb-2">virtual machines</p>
  <div class="rounded-xl border border-dashed border-gray-400/40 p-2 flex flex-col-reverse gap-1.5" style="min-height: 15rem">
    <div v-click="1" class="pop h-9 shrink-0 rounded-md border border-gray-400/50 bg-gray-500/10 flex items-center justify-center gap-2 font-mono text-xs"><mdi-memory class="text-sm opacity-70" />hardware</div>
    <div v-click="2" class="pop h-9 shrink-0 rounded-md border border-blue-400/50 bg-blue-500/10 flex items-center justify-center gap-2 font-mono text-xs text-blue-600 dark:text-blue-400"><mdi-laptop class="text-sm" />host OS</div>
    <div v-click="3" class="pop h-9 shrink-0 rounded-md border border-amber-400/50 bg-amber-500/10 flex items-center justify-center gap-2 font-mono text-xs text-amber-600 dark:text-amber-400"><mdi-layers-outline class="text-sm" />hypervisor</div>
    <div v-click="4" class="pop grid grid-cols-3 gap-1.5 flex-1">
      <div v-for="n in 3" :key="n" class="flex flex-col gap-1 rounded-md border border-gray-400/30 p-1">
        <div class="flex-1 rounded border border-green-400/50 bg-green-500/10 flex items-center justify-center font-mono text-[10px] text-green-600 dark:text-green-400">app</div>
        <div class="flex-1 rounded border border-blue-400/40 bg-blue-500/10 flex items-center justify-center font-mono text-[10px] text-blue-600 dark:text-blue-400">libs</div>
        <div class="flex-1 rounded border border-red-400/50 bg-red-500/10 flex items-center justify-center font-mono text-[10px] text-red-600 dark:text-red-400">guest OS</div>
      </div>
    </div>
  </div>
</div>

<div>
  <p class="text-center text-sm font-700 tracking-wide opacity-70 mb-2">containers</p>
  <div class="rounded-xl border border-dashed border-gray-400/40 p-2 flex flex-col-reverse gap-1.5" style="min-height: 15rem">
    <div v-click="1" class="pop h-9 shrink-0 rounded-md border border-gray-400/50 bg-gray-500/10 flex items-center justify-center gap-2 font-mono text-xs"><mdi-memory class="text-sm opacity-70" />hardware</div>
    <div v-click="2" class="pop h-9 shrink-0 rounded-md border border-blue-400/50 bg-blue-500/10 flex items-center justify-center gap-2 font-mono text-xs text-blue-600 dark:text-blue-400"><mdi-laptop class="text-sm" />host OS</div>
    <div v-click="3" class="pop h-9 shrink-0 rounded-md border border-cyan-400/50 bg-cyan-500/10 flex items-center justify-center gap-2 font-mono text-xs text-cyan-600 dark:text-cyan-400"><mdi-docker class="text-sm" />docker engine</div>
    <div v-click="5" class="pop grid grid-cols-3 gap-1.5 flex-1">
      <div v-for="n in 3" :key="n" class="flex flex-col gap-1 rounded-md border border-green-400/40 p-1">
        <div class="flex-1 rounded border border-green-400/50 bg-green-500/10 flex items-center justify-center font-mono text-[10px] text-green-600 dark:text-green-400">app</div>
        <div class="flex-1 rounded border border-blue-400/40 bg-blue-500/10 flex items-center justify-center font-mono text-[10px] text-blue-600 dark:text-blue-400">libs</div>
      </div>
    </div>
  </div>
</div>

</div>

<div class="mt-4 text-center text-sm font-mono opacity-70 h-5">
<v-switch>
  <template #1><span class="pop-in">the physical computer</span></template>
  <template #2><span class="pop-in">one operating system</span></template>
  <template #3><span class="pop-in">hypervisor vs engine</span></template>
  <template #4><span class="pop-in">a spare OS each</span></template>
  <template #5-7><span class="pop-in">apps and libraries only</span></template>
</v-switch>
</div>

<div v-click="6" class="mark-safe mt-3 text-center text-lg opacity-85">
A container carries <span v-mark="{ at: 6, color: '#2563eb', type: 'highlight' }">no operating system</span>.
</div>

<!--
- both towers stand on the same ground; build them floor by floor, bottom up
- [click] the physical computer: processor, memory, disk; both sides start identical
- [click] its operating system, the one already running the machine
- [click] the fork: the left tower adds a hypervisor, a program that carves one computer into several pretend computers; the right adds the docker engine, the program that has been running every box today
- [click] each pretend computer needs its own guest operating system before the app even starts: gigabytes each, minutes to boot, three copies of an OS nobody asked for
- [click] the containers hold only the app and its libraries; the engine lends them the one OS already underneath, so nothing boots and nothing is duplicated
- [click] the whole comparison in one line
- anchor: a VM is a full separate house per app, own plumbing, own wiring; a container is a room in one shared house, private space, shared pipes
- ASK: spoken vote: the finale starts the chat app AND its AI brain together; from Enter to both running, how long? A under a second, B about ten seconds, C about a minute; read the top pick, the stopwatch on the next slide settles it
-->
