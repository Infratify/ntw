---
layout: default
transition: slide-right
---

<div class="flex items-center gap-3 mb-2">
  <LiveBadge />
  <h3 class="!m-0">Destroy, then rebuild</h3>
</div>

<div class="grid grid-cols-2 gap-10 mt-10 items-center">

<div>
<TermWindow title="terraform destroy: remove everything">
<div><span class="text-green-400">$</span> terraform destroy</div>
<div v-click="1" class="opacity-80 mt-1">aws_instance.web: Destroying...</div>
<div v-click="1" class="text-green-400">Destroy complete! Resources: 3 destroyed.</div>
<div v-click="1"><span class="text-green-400">$</span> <span class="animate-pulse">▌</span></div>
</TermWindow>
</div>

<div class="space-y-7">
  <div v-click="2" class="note-row items-center">
    <mdi-timer-sand class="note-ico text-purple-600 dark:text-purple-400" />
    <p><b>gone within a minute</b></p>
  </div>
  <div v-click="3" class="note-row items-center">
    <mdi-cash-remove class="note-ico text-purple-600 dark:text-purple-400" />
    <p><b>the billing stops</b></p>
  </div>
  <div v-click="4" class="note-row items-center">
    <mdi-backup-restore class="note-ico text-purple-600 dark:text-purple-400" />
    <p><b>back with one command</b></p>
  </div>
</div>

</div>

<!--
Labels to narrate:
[click] the transcript is the mirror of the build: destroy unwinds the same three resources and ends on its own summary line.
[click] the instance takes the longest and it is still under a minute. Watch the console with me: the server flips to terminated, its address is released, and the page URL stops answering. The machine genuinely no longer exists anywhere.
[click] a terminated server bills nothing. This is why teams tear whole test environments down every evening: an environment you can rebuild is an environment you can afford to switch off.
[click] and here is part 2's whole argument: run apply again, and two minutes later the same page is up at a fresh address. Destroyed on purpose, rebuilt on demand, no runbook, no memory, no fear.

DEMO SCRIPT (~8 min), same terminal and console tab:
1. terraform destroy. Read the confirmation aloud: it lists exactly what will die, and waits for a typed yes. Type yes.
2. Narrate the unwind, reverse order of the build; the instance is the slow one at about forty seconds.
3. Console refresh: terminated. Reload the page URL: it times out. Let that sit for a beat.
4. terraform apply, yes, and talk over the two-minute rebuild: this is the snowflake slide's fear, deleted. A 3 am disk failure now means running one command, not reconstructing years of undocumented tweaks.
5. Open the fresh web_url: same page, new address. If the chat asks, run the cycle again; the second run is identical, which is exactly the point.
Night before: covered by the plan-demo prep; nothing extra to install. Rehearse one destroy-apply cycle so the timings quoted above match the account.
FALLBACK: the backup workspace from the rehearsal can be destroyed live instead if the main folder misbehaves; otherwise scroll the tmux transcript of the morning cycle and narrate.
-->
