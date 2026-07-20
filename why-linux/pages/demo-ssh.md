---
layout: default
transition: slide-up
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

<div class="space-y-7">
  <div v-click="2" class="note-row items-center">
    <mdi-map-marker-radius class="note-ico text-amber-600 dark:text-amber-400" />
    <p><b>a real remote server</b></p>
  </div>
  <div v-click="3" class="note-row items-center">
    <mdi-monitor-off class="note-ico text-amber-600 dark:text-amber-400" />
    <p><b>no screen, no mouse</b></p>
  </div>
  <div v-click="4" class="note-row items-center">
    <mdi-key-variant class="note-ico text-amber-600 dark:text-amber-400" />
    <p><b>SSH</b> <span class="opacity-60">&middot; one command in</span></p>
  </div>
</div>

</div>

<!--
Labels to narrate:
[click] that's a real computer in a datacenter far from this room, rented for a few ringgit a month.
[click] it has no screen, no mouse, no desktop; text is the only way in.
[click] SSH is how professionals walk into any server on Earth: one command, secured by keys.

DEMO SCRIPT (~5 min): switch to the real terminal.
1. ssh ariff@my-server   (typed exactly as the slide shows)
2. fastfetch   (the server introduces itself)
3. uptime      ("this machine has been awake for X days")
4. Point out: everything for the rest of the session happens inside this machine.
Prep the night before: fastfetch is not in the Ubuntu 24.04 repos; install the .deb from its GitHub releases page. Add a Host my-server alias for the VM in ~/.ssh/config on the laptop so the typed line matches the slide exactly (and the real IP stays off screen).
FALLBACK: keep a second box ready (another cheap VM or a local multipass Ubuntu); if both are down, play the pre-recorded asciinema of this login and say so honestly.
-->
