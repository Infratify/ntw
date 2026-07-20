---
layout: default
transition: slide-right
clicks: 5
---

<div class="flex items-center gap-3 mb-1">
  <LiveBadge />
  <h3 class="!m-0">Work in parallel</h3>
</div>

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
Setup:
- the team question: two people, one project, same afternoon
- copies over email fork into chaos; git's answer = branches
- walk the graph: blue line = main, the version of the stall page everyone agrees on

- [click] main moves forward as I commit
- [click] teammate Ali wants to redesign the menu without breaking the page: starts a branch
  - his own line of snapshots, split off from main; experiments freely, main never notices
- [click] meanwhile I keep committing to main; both lines grow at the same time = the parallel part
- [click] Ali's menu ready: merge weaves his line back into main, both change-sets in one history
- [click] both changed the very same line? git pauses, asks a human to pick
  - called a conflict; a conversation, never lost work; good chat question for the break
- then switch screens: this drawing is about to draw itself
  - say plainly once: practice sandbox in a browser tab; real git on a real laptop behaves the same
  - still a terminal, just one with the picture attached

ACTIVITY (two chat moments inside the script):
- step 5: chat picks Ali's dish ("type one dish for the menu"), echo the most-typed instead of rendang
- step 7: merge typed, not run: "two separate lines on screen. Type in the chat what happens to them now"
  - run it, point at the green dot as the answer

DEMO SCRIPT (~6 min), gitverse in a shared browser tab, graph + terminal both visible.
Say first: same stall page from part 1, rebuilt small, so the shape of the work is visible while it happens.
1. git init   (prompt shows main, graph empty)
2. echo "nasi lemak stall" > index.html → git add index.html → git commit -m "draft"
3. echo "open 7am" >> index.html → git commit -am "add hours"   (two dots on the blue line)
4. git switch -c ali/menu   (name it aloud as Ali's own line; graph not split yet, main unchanged)
5. echo "menu: rendang" >> index.html → git commit -am "add menu"   (purple line splits off, live)
6. git switch main → echo "promo" >> index.html → git commit -am "add promo"   (both lines grow; the parallel part, pause here)
7. git merge ali/menu   ("Merge made by the 'ort' strategy"); green dot joins both lines
8. git log --oneline   (Ali's commit and mine in one history)
- point at the slide picture and the browser picture: same shape
- only these commands run; -am shorthand = the commit from the part 1 cheatsheet

Night before:
- open https://opariffazman.com/gitverse/ in a pinned tab, run the whole script once
- reset the sandbox so the live run starts empty
- zoom browser to ~150% (terminal readable at 300 seats)

FALLBACK:
- offline-capable page: a dropped connection still loads the pinned tab
- misbehaves anyway: stay on this slide, walk the diagram click by click,
  run the same branch + merge in the plain terminal on the part 1 repo, narrating the graph from this slide
-->
