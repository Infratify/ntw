---
layout: default
transition: slide-left
---

<p class="eyebrow font-mono"><span class="text-amber-600 dark:text-amber-400">part 3</span> &middot; full control</p>

### Eight commands

<div class="term-print max-w-2xl mx-auto mt-8">
<TermWindow title="cheatsheet.txt">
<div><span class="text-green-400">$</span> cat cheatsheet.txt</div>
<div class="grid grid-cols-2 gap-x-10 mt-2">
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
This is the whole vocabulary for today; every file-manager action maps to one of these words. Read them across: pwd is where am I, ls is what's here, cd is go somewhere, cat is read a file, mkdir is make a folder, touch is make an empty file, mv is move or rename, rm is delete with no recycle bin so it is gone for good. Reassure them: nobody memorises everything, pros know about 20 commands well and look up the rest (we'll meet tldr and cheat.sh soon). Tell them to screenshot this slide; we type exactly these words live in the next demo.
-->
