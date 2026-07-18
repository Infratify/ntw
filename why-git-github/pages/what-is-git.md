---
layout: default
transition: slide-left
clicks: 4
---

### What is git?

<div class="grid grid-cols-2 gap-10 mt-8 items-center">

<div>
  <GitGraph
    :commits="[
      { id: 'first draft', x: 110, y: 140, color: '#2563eb', at: 0 },
      { id: 'add menu', x: 250, y: 140, color: '#2563eb', at: 1 },
      { id: 'add hours', x: 390, y: 140, color: '#2563eb', at: 2 },
    ]"
    :wires="[
      { d: 'M60 140 H110', color: '#2563eb', at: 0 },
      { d: 'M110 140 H250', color: '#2563eb', at: 1 },
      { d: 'M250 140 H390', color: '#2563eb', at: 2 },
    ]"
    :labels="[]"
    :head="[[110, 140], [250, 140], [390, 140], [390, 140], [390, 140]]"
  />
</div>

<div class="space-y-7">
  <div v-click="1" class="note-row items-center">
    <mdi-camera-plus-outline class="note-ico text-blue-600 dark:text-blue-400" />
    <p><b>a commit</b> <span class="opacity-60">&middot; one saved version</span></p>
  </div>
  <div v-click="2" class="note-row items-center">
    <mdi-message-text-outline class="note-ico text-green-600 dark:text-green-400" />
    <p><b>a message</b> <span class="opacity-60">&middot; why it changed</span></p>
  </div>
  <div v-click="3" class="note-row items-center">
    <mdi-pound class="note-ico text-amber-600 dark:text-amber-400" />
    <p><b>an ID</b> <span class="opacity-60">&middot; its short name</span></p>
  </div>
</div>

</div>

<div v-click="4" class="mark-safe mt-6 text-center text-lg opacity-85">
Each dot is a version you can <span v-mark="{ at: 4, color: '#dc2626', type: 'underline' }">return to</span>.
</div>

<!--
git is a small free program on your computer. You keep working in your folder as usual; whenever you reach a moment worth keeping, you ask git to save it. Think of your phone's photo gallery: this is a gallery for a folder of work.

[click] each saved moment is called a commit: a full snapshot of the folder at that instant. Here the stall page gets its menu.
[click] every commit carries a message you wrote: "add menu", "add hours". Future you reads these like a diary.
[click] and every commit gets a short ID, like f3a9c21 on the last slide, so you can point at any version by name.
The pulsing ring is git's bookmark for where you are right now; git calls it HEAD. It moves when you move.
[click] the payoff of the whole system: any dot on this line can be brought back in one command. Deleting something by accident stops being scary, and that changes how bravely you work.
-->
