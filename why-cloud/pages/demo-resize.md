---
layout: default
transition: fade-out
---

<div class="flex items-center gap-3 mb-2">
  <LiveBadge />
  <h3 class="!m-0">Watch it grow</h3>
</div>

<div class="grid grid-cols-2 gap-10 mt-10 items-center">

<div>
<TermWindow title="nproc: count the cores">
<div><span class="text-green-400">$</span> nproc</div>
<div class="opacity-80">2</div>
<div v-click="1" class="mt-1"><span class="text-green-400">$</span> nproc <span class="text-gray-500"># after the resize</span></div>
<div v-click="1" class="text-orange-300">8</div>
</TermWindow>
</div>

<div class="space-y-7">
  <div v-click="2" class="note-row items-center">
    <mdi-server class="note-ico text-orange-600 dark:text-orange-400" />
    <p><b>the same machine</b></p>
  </div>
  <div v-click="3" class="note-row items-center">
    <mdi-timer-outline class="note-ico text-orange-600 dark:text-orange-400" />
    <p><b>about two minutes</b></p>
  </div>
  <div v-click="4" class="note-row items-center">
    <mdi-arrow-down-bold-circle-outline class="note-ico text-orange-600 dark:text-orange-400" />
    <p><b>and back down later</b></p>
  </div>
</div>

</div>

<!--
Labels to narrate:
[click] nproc asks the machine how many processor cores it has; it prints a single number. Two before, eight after: the transcript is the whole story of this demo.
[click] same files, same page, same address; only the size changed.
[click] and after the session it goes back down the same way, because the big size costs about 16 times more per hour. Renting big for one busy afternoon, then shrinking, is the point.

DEMO SCRIPT (~7 min), console + terminal side by side:
1. terminal, on ntw-demo: nproc → 2, then free -h → total under 1 GB
2. console: Instance state → Stop instance; wait for Stopped, about 30 seconds
3. Actions → Instance settings → Change instance type → t3.2xlarge
4. Instance state → Start instance; ssh back in once running
5. nproc → 8, free -h → about 31 Gi; uptime shows the fresh boot
6. browser: refresh http://<IP> → the stall page still there, untouched
Night before: check Service Quotas → EC2 → "Running On-Demand Standard instances" allows at least 8 vCPUs (new accounts can start lower; request the raise days ahead); rehearse one stop-resize-start cycle. nproc and free are preinstalled in Ubuntu 24.04, nothing to install.
FALLBACK: the ntw-backup twin is already a t3.2xlarge; ssh into it, nproc → 8, and narrate the console steps over the stopped original.
-->
