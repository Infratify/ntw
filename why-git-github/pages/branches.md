---
layout: default
transition: slide-right
clicks: 5
---

### Work in parallel

<div class="grid grid-cols-2 gap-10 mt-8 items-center">

<div>
  <GitGraph
    :commits="[
      { id: 'draft', x: 90, y: 175, color: '#2563eb', at: 0 },
      { id: 'hours', x: 200, y: 175, color: '#2563eb', at: 1 },
      { id: 'menu', x: 300, y: 85, color: '#7c3aed', at: 2 },
      { id: 'promo', x: 330, y: 175, color: '#2563eb', at: 3 },
      { id: 'merge', x: 450, y: 175, color: '#16a34a', at: 4 },
    ]"
    :wires="[
      { d: 'M40 175 H90', color: '#2563eb', at: 0 },
      { d: 'M90 175 H200', color: '#2563eb', at: 1 },
      { d: 'M200 175 H330', color: '#2563eb', at: 3 },
      { d: 'M330 175 H450', color: '#2563eb', at: 4 },
      { d: 'M200 175 C 240 175,260 85,300 85', color: '#7c3aed', at: 2 },
      { d: 'M300 85 C 360 85,400 175,450 175', color: '#16a34a', at: 4 },
    ]"
    :labels="[
      { text: 'main', x: 40, y: 162, color: '#2563eb', at: 0 },
      { text: 'ali/menu', x: 242, y: 66, color: '#7c3aed', at: 2 },
    ]"
    :head="[[90, 175], [200, 175], [200, 175], [330, 175], [450, 175], [450, 175]]"
  />
</div>

<div class="space-y-7">
  <div v-click="2" class="note-row items-center">
    <mdi-source-branch class="note-ico text-purple-600 dark:text-purple-400" />
    <p><b>a branch</b> <span class="opacity-60">&middot; a safe side copy</span></p>
  </div>
  <div v-click="3" class="note-row items-center">
    <mdi-source-commit class="note-ico text-blue-600 dark:text-blue-400" />
    <p><b>main</b> <span class="opacity-60">&middot; keeps moving too</span></p>
  </div>
  <div v-click="4" class="note-row items-center">
    <mdi-source-merge class="note-ico text-green-600 dark:text-green-400" />
    <p><b>merge</b> <span class="opacity-60">&middot; both lines join</span></p>
  </div>
</div>

</div>

<div v-click="5" class="mark-safe mt-4 text-center text-lg opacity-85">
Two edits at once, <span v-mark="{ at: 5, color: '#dc2626', type: 'underline' }">both kept</span> after the merge.
</div>

<!--
Now the team question: two people, one project, same afternoon. Copies over email would fork into chaos. git's answer is branches.

Walk the graph: the blue line is main, the version of the stall page everyone agrees on.
[click] main moves forward as I commit.
[click] my teammate Ali wants to redesign the menu without breaking the page, so he starts a branch: his own line of snapshots, split off from main. On his branch he can experiment freely; main never notices.
[click] meanwhile I keep committing to main. Both lines grow at the same time; that's the parallel part.
[click] when Ali's menu is ready, merge weaves his line back into main. git combines both sets of changes into one history.
[click] if we both changed the very same line, git pauses and asks a human to pick; that's called a conflict, and it's a conversation, never lost work. Good chat question for the break.
-->
