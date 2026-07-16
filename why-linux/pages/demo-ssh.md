---
layout: default
transition: slide-left
---

<div class="flex items-center gap-3 mb-2">
  <LiveBadge />
  <h3 class="!m-0">Let's visit one</h3>
</div>

<div class="grid grid-cols-2 gap-10 mt-10 items-center">

<div>
<TermWindow title="ssh: remote login">
<div><span class="text-green-400">ariff@laptop</span>:<span class="text-blue-400">~</span>$ ssh ariff@my-server</div>
<div v-click="1" class="opacity-80 mt-1">Welcome to Ubuntu 24.04 LTS</div>
<div v-click="1"><span class="text-green-400">ariff@server</span>:<span class="text-blue-400">~</span>$ <span class="animate-pulse">▌</span></div>
</TermWindow>
</div>

<div class="space-y-6">
  <div v-click="2" class="note-row">
    <mdi-map-marker-radius class="note-ico text-amber-600 dark:text-amber-400" />
    <p>A <b>real computer in a Singapore datacenter</b>. A few ringgit a month.</p>
  </div>
  <div v-click="3" class="note-row">
    <mdi-monitor-off class="note-ico text-amber-600 dark:text-amber-400" />
    <p>No screen. No mouse. <b>Text is the only door in.</b></p>
  </div>
  <div v-click="4" class="note-row">
    <mdi-key-variant class="note-ico text-amber-600 dark:text-amber-400" />
    <p><b>SSH</b> is how pros walk into any server on Earth. One command, secured by keys.</p>
  </div>
</div>

</div>

<!--
DEMO SCRIPT (~5 min): switch to the real terminal.
1. ssh into the demo VM
2. fastfetch   (the server introduces itself)
3. uptime      ("this machine has been awake for X days")
4. Point out: everything for the rest of the session happens inside this machine.
-->
