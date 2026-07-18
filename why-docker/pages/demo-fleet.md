---
layout: default
transition: fade-out
---

<div class="flex items-center gap-3 mb-2">
  <LiveBadge />
  <h3 class="!m-0">A fleet in seconds</h3>
</div>

<div class="grid grid-cols-2 gap-10 mt-10 items-center">

<div>
<TermWindow title="time: a stopwatch for one command">
<div><span class="text-green-400">$</span> time docker run -d -p 8081:80 <span class="opacity-60">\</span></div>
<div><span class="opacity-60">&nbsp;&nbsp;</span>ariff/stall-page</div>
<div v-click="1" class="text-green-400">real  0m0.61s</div>
<div v-click="1"><span class="text-green-400">$</span> docker ps <span class="opacity-50"># three rows, all "Up"</span></div>
</TermWindow>
</div>

<div class="space-y-7">
  <div v-click="2" class="note-row items-center">
    <mdi-timer-outline class="note-ico text-blue-600 dark:text-blue-400" />
    <p><b>under two seconds</b></p>
  </div>
  <div v-click="3" class="note-row items-center">
    <mdi-content-copy class="note-ico text-blue-600 dark:text-blue-400" />
    <p><b>three copies, three ports</b></p>
  </div>
  <div v-click="4" class="note-row items-center">
    <mdi-broom class="note-ico text-blue-600 dark:text-blue-400" />
    <p><b>one command cleans up</b></p>
  </div>
</div>

</div>

<!--
Labels to narrate:
[click] the transcript: time wraps any command and prints how long it really took. The "real" line is the wall-clock answer, and it lands far under the two seconds the last slide claimed, because the image already sits on the machine.
[click] three copies of the stall page get three doors: ports 8081, 8082, 8083. Same image, one fleet, one laptop.
[click] and when the demo ends, one line stops every box at once. The laptop leaves the session exactly as clean as it entered.

DEMO SCRIPT (~6 min), on the demo laptop (the image is cached from part 2):
1. time docker run -d -p 8081:80 ariff/stall-page: read the "real" line aloud
2. repeat for 8082 and 8083: up-arrow, edit the port, enter; each lands well under two seconds
3. docker ps: three rows, every STATUS "Up"
4. open localhost:8081, 8082 and 8083 in three tabs: the same stall page, three servers
5. docker stop $(docker ps -q): gloss it as "stop everything ps lists"; docker ps again: empty table
6. close the arc: three web servers started, shown and removed inside a minute, machine unchanged
Night before: nothing new to install; docker.io from part 1 and the ariff/stall-page image from part 2 cover every command here. If the part 2 build was skipped in rehearsal, docker pull ariff/stall-page on the laptop.
FALLBACK: if the laptop misbehaves, the same commands run on the cloud server; open ports 8081 to 8083 in its security group the night before and localhost becomes the server address.
-->
