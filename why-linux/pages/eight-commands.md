---
layout: default
transition: slide-left
---

<p class="eyebrow font-mono"><span class="text-amber-600 dark:text-amber-400">part 3</span> &middot; full control</p>

<div class="flex items-center gap-3 mb-2">
  <LiveBadge />
  <h3 class="!m-0">Eight commands</h3>
</div>

<div class="term-print max-w-2xl mx-auto mt-8">
<TermWindow title="today's whole vocabulary">
<div class="grid grid-cols-2 gap-x-10 mt-1">
  <div v-click="1" class="py-1"><span class="text-amber-300 font-700 inline-block w-18">pwd</span><span class="text-gray-400">where am I?</span></div>
  <div v-click="1" class="py-1"><span class="text-amber-300 font-700 inline-block w-18">ls</span><span class="text-gray-400">what's here?</span></div>
  <div v-click="2" class="py-1"><span class="text-amber-300 font-700 inline-block w-18">cd</span><span class="text-gray-400">go somewhere</span></div>
  <div v-click="2" class="py-1"><span class="text-amber-300 font-700 inline-block w-18">cat</span><span class="text-gray-400">read a file</span></div>
  <div v-click="3" class="py-1"><span class="text-amber-300 font-700 inline-block w-18">mkdir</span><span class="text-gray-400">make a folder</span></div>
  <div v-click="3" class="py-1"><span class="text-amber-300 font-700 inline-block w-18">touch</span><span class="text-gray-400">make a file</span></div>
  <div v-click="4" class="py-1"><span class="text-amber-300 font-700 inline-block w-18">mv</span><span class="text-gray-400">move or rename</span></div>
  <div v-click="4" class="py-1"><span class="text-amber-300 font-700 inline-block w-18">rm</span><span class="text-gray-400">delete. no recycle bin!</span></div>
</div>
<div v-click="5" class="mt-3"><span class="text-green-400">$</span> <span class="animate-pulse">▌</span></div>
</TermWindow>
</div>

<div v-click="5" class="mark-safe mt-8 text-center text-lg opacity-85">
Eight words replace a file manager, so <span v-mark="{ at: 5, color: '#d97706', type: 'underline' }">screenshot this one</span>.
</div>

<!--
This is the whole vocabulary for today; every file-manager action maps to one of these words. Read them across: pwd is where am I, ls is what's here, cd is go somewhere, cat is read a file, mkdir is make a folder, touch is make an empty file, mv is move or rename, rm is delete with no recycle bin so it is gone for good. Reassure them: nobody memorises everything, pros know about 20 commands well and look up the rest, and the demo ends by showing exactly how they look things up. Tell them to screenshot this slide; we type exactly these words live right now.

DEMO SCRIPT (~6 min), on the server, narrating each word as it lands:
1. pwd                  ("where am I? my home folder")
2. ls                   ("what's here?" notes.txt and todo.txt show up)
3. cat todo.txt         ("read a file, straight into the screen")
4. mkdir demo
5. cd demo
6. touch draft.txt      (then ls to show it appeared)
7. mv draft.txt ideas.txt
8. rm ideas.txt         (then ls: gone, no recycle bin; cd .. to go home)
9. curl cheat.sh/ls     (the pro move: a community cheatsheet for any command, fetched live from the internet; gloss curl as "fetches a web page into the terminal")
Prep the night before: the eight commands are built-ins on every Ubuntu, nothing to install for them; sudo apt install curl, make sure notes.txt and todo.txt sit in the home folder with a line or two of text inside (the same files the pipes demo reuses), and run curl cheat.sh/ls once so the live call isn't cold.
FALLBACK: if cheat.sh is unreachable, skip step 9; the eight commands themselves need no network. If a typo derails a step, laugh, press the up arrow to recall the line, and fix it on screen. Recovering from a typo in public is itself the lesson.
-->
