---
layout: default
transition: fade-out
---

<div class="flex items-center gap-3 mb-2">
  <LiveBadge />
  <h3 class="!m-0">Watch it grow</h3>
</div>

<div class="grid grid-cols-2 gap-8 mt-8 items-start">

<div>
<ConsoleWindow title="EC2 · change instance type">
  <div class="flex items-center gap-3">
    <mdi-memory class="text-lg text-gray-500 flex-shrink-0" />
    <span>now: t3.micro</span>
    <span class="ml-auto font-mono text-xs text-gray-500">2 cores</span>
  </div>
  <div v-click="1" class="flex items-center gap-3">
    <mdi-menu-down class="text-lg text-blue-600 flex-shrink-0" />
    <span>chosen: t3.2xlarge</span>
    <span class="ml-auto font-mono text-xs bg-blue-500/10 text-blue-700 px-2 py-0.5 rounded">8 cores</span>
  </div>
</ConsoleWindow>
<p class="text-center text-sm opacity-60 mt-3">the click: a bigger size</p>
</div>

<div v-click="2">
<TermWindow title="nproc: count the cores">
<div><span class="text-green-400">$</span> nproc</div>
<div class="opacity-80">2</div>
<div class="mt-1"><span class="text-green-400">$</span> nproc <span class="text-gray-500"># after the resize</span></div>
<div class="text-orange-300">8</div>
</TermWindow>
<p class="text-center text-sm opacity-60 mt-3">the proof: 2 became 8</p>
</div>

</div>

<!--
Labels to narrate:
[click] in the console I stop the machine, pick a bigger size from the dropdown, and start it again, about two minutes end to end. Nothing is reinstalled; same files, same page, same address.
[click] then the terminal, for proof: nproc asks the machine how many processor cores it has, and it reports two before, eight after. After the session it shrinks back the same way, because the big size costs about sixteen times more per hour.

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
