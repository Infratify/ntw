---
layout: default
transition: fade-out
---

<div class="flex items-center gap-3 mb-2">
  <LiveBadge />
  <h3 class="!m-0">Six commands</h3>
</div>

<div class="term-print max-w-2xl mx-auto mt-8">
<TermWindow title="today's whole vocabulary">
<div class="grid grid-cols-2 gap-x-8 mt-1">
  <div v-click="1" class="py-1"><span class="text-amber-300 font-700 inline-block w-36">docker run</span><span class="text-gray-400">start a container</span></div>
  <div v-click="1" class="py-1"><span class="text-amber-300 font-700 inline-block w-36">docker ps</span><span class="text-gray-400">list live boxes</span></div>
  <div v-click="2" class="py-1"><span class="text-amber-300 font-700 inline-block w-36">docker stop</span><span class="text-gray-400">stop a container</span></div>
  <div v-click="2" class="py-1"><span class="text-amber-300 font-700 inline-block w-36">docker pull</span><span class="text-gray-400">fetch an image</span></div>
  <div v-click="3" class="py-1"><span class="text-amber-300 font-700 inline-block w-36">docker exec</span><span class="text-gray-400">type inside a box</span></div>
  <div v-click="3" class="py-1"><span class="text-amber-300 font-700 inline-block w-36">docker compose</span><span class="text-gray-400">start a stack</span></div>
</div>
<div v-click="4" class="mt-3"><span class="text-green-400">$</span> <span class="animate-pulse">▌</span></div>
</TermWindow>
</div>

<div v-click="4" class="mark-safe mt-8 text-center text-lg opacity-85">
Today's demos use only <span v-mark="{ at: 4, color: '#2563eb', type: 'underline' }">these six</span>.
</div>

<!--
- narrate in pairs as they print:
- [click] run you have already watched: starts a box, fetching the image first if the machine lacks it; ps lists every box currently running, a task manager for containers
- [click] stop halts a box, and the machine is instantly clean again; pull fetches an image without starting it, for later
- [click] exec types a command inside a box that is already running, like reaching in through its window; compose reads one file and starts a whole team of boxes; both appear in the AI demos ahead
- [click] everything I type today is these six, typed slowly; screenshot this one

DEMO SCRIPT (~4 min), continuing on the same VM:
1. docker ps: the chat-app box from the last demo, still up
2. ACTIVITY: the chat page is still open on your phones; when I run docker stop, what does refresh show? type A same page, B error; run docker stop ID, everyone refreshes: gone; a whole app stopped in about a second
3. rerun the docker run command (up arrow): the image is already on the machine, so it is up in a second; refresh, the page returns
4. docker ps: a NEW ID; containers are disposable, the image is what you keep
- FALLBACK: if anything wedges, docker rm -f $(docker ps -aq) clears every container and the cheatsheet still stands on its own without the aside
-->
