---
layout: default
transition: slide-left
---

<div class="flex items-center gap-3 mb-2">
  <LiveBadge />
  <h3 class="!m-0">Eight commands</h3>
</div>

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
DEMO SCRIPT (~10 min), on the server:
pwd → ls → cd /var/log → ls → cd ~ → mkdir ntw-demo → cd ntw-demo → touch hello.txt →
echo "hello NTW" > hello.txt → cat hello.txt → mv hello.txt greeting.txt → ls → rm greeting.txt
Narrate each as the GUI action it replaces. Emphasise Tab completion and the up-arrow history: the two comfort tricks.
-->
