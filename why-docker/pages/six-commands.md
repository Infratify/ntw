---
layout: default
transition: fade-out
---

<div class="flex items-center gap-3 mb-2">
  <LiveBadge />
  <h3 class="!m-0">Six commands</h3>
</div>

<div class="term-print max-w-2xl mx-auto mt-8">
<TermWindow title="cheatsheet.txt">
<div><span class="text-green-400">$</span> cat cheatsheet.txt</div>
<div class="grid grid-cols-2 gap-x-8 mt-2">
  <div v-click="1" class="py-1"><span class="text-amber-300 font-700 inline-block w-32">docker run</span><span class="text-gray-400">start a container</span></div>
  <div v-click="1" class="py-1"><span class="text-amber-300 font-700 inline-block w-32">docker ps</span><span class="text-gray-400">list what's running</span></div>
  <div v-click="2" class="py-1"><span class="text-amber-300 font-700 inline-block w-32">docker stop</span><span class="text-gray-400">stop a container</span></div>
  <div v-click="2" class="py-1"><span class="text-amber-300 font-700 inline-block w-32">docker pull</span><span class="text-gray-400">fetch an image</span></div>
  <div v-click="3" class="py-1"><span class="text-amber-300 font-700 inline-block w-32">docker build</span><span class="text-gray-400">make your own image</span></div>
  <div v-click="3" class="py-1"><span class="text-amber-300 font-700 inline-block w-32">docker push</span><span class="text-gray-400">share it online</span></div>
</div>
<div v-click="4" class="mt-3"><span class="text-green-400">$</span> <span class="animate-pulse">▌</span></div>
</TermWindow>
</div>

<div v-click="4" class="mark-safe mt-8 text-center text-lg opacity-85">
Today's three demos use only <span v-mark="{ at: 4, color: '#2563eb', type: 'underline' }">these six</span>.
</div>

<!--
Narrate in pairs as they print:
[click] run you have already watched: it starts a box, fetching the image first if the machine lacks it. ps lists every box currently running, a task manager for containers.
[click] stop halts a box, and the machine is instantly clean again. pull fetches an image without starting it, for later.
[click] build and push belong to part 2: build turns YOUR app into an image, push puts it on the shelf for any machine to pull.
[click] everything I type today is these six, typed slowly. Screenshot this one.

DEMO SCRIPT (~4 min), continuing on the same server:
1. docker ps: the nginx box from the last demo, still up
2. docker stop ID: refresh the browser tab, the page is gone; a whole server program stopped in about a second
3. docker run -d -p 80:80 nginx: no download lines this time, the image is already on the machine, so it is up instantly; refresh, the page returns
4. docker ps: a NEW ID; containers are disposable, the image is what you keep
FALLBACK: if anything wedges, docker rm -f $(docker ps -aq) clears every container and the cheatsheet still stands on its own without the aside.
-->
