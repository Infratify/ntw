---
layout: default
transition: slide-right
clicks: 1
---

<div class="flex items-center gap-3 mb-2">
  <LiveBadge />
  <h3 class="!m-0">Destroy and drift</h3>
</div>

<v-switch>

<template #0>
<div class="grid grid-cols-2 gap-10 mt-10 items-center pop-in">
  <div>
  <TermWindow title="terraform destroy: remove everything">
  <div><span class="text-green-400">$</span> terraform destroy</div>
  <div class="opacity-80 mt-1">aws_instance.web: Destroying&hellip;</div>
  <div class="text-green-400">Destroy complete! Resources: 3 destroyed.</div>
  <div><span class="text-green-400">$</span> <span class="animate-pulse">&#9612;</span></div>
  </TermWindow>
  </div>
  <div class="space-y-7">
    <div class="note-row items-center">
      <mdi-timer-sand class="note-ico text-purple-600 dark:text-purple-400" />
      <p><b>gone within a minute</b></p>
    </div>
    <div class="note-row items-center">
      <mdi-cash-remove class="note-ico text-purple-600 dark:text-purple-400" />
      <p><b>the billing stops</b></p>
    </div>
    <div class="note-row items-center">
      <mdi-backup-restore class="note-ico text-purple-600 dark:text-purple-400" />
      <p><b>back with one command</b></p>
    </div>
  </div>
</div>
</template>

<template #1-3>
<div class="grid grid-cols-2 gap-10 mt-10 items-center pop-in">
  <div>
  <TermWindow title="terraform plan: someone changed it by hand">
  <div class="text-red-400">~ aws_instance.web  changed outside Terraform</div>
  <div class="opacity-80 mt-1">Plan: 0 to add, 1 to change, 0 to destroy.</div>
  <div class="mt-1"><span class="text-green-400">$</span> terraform apply</div>
  <div class="text-green-400">Apply complete! Resources: 1 changed.</div>
  </TermWindow>
  </div>
  <div class="space-y-7">
    <div class="note-row items-center">
      <mdi-account-alert-outline class="note-ico text-purple-600 dark:text-purple-400" />
      <p><b>a hand-edit in the console</b></p>
    </div>
    <div class="note-row items-center">
      <mdi-magnify-scan class="note-ico text-purple-600 dark:text-purple-400" />
      <p><b>the next plan spots it</b></p>
    </div>
    <div class="note-row items-center">
      <mdi-file-restore-outline class="note-ico text-purple-600 dark:text-purple-400" />
      <p><b>apply puts the file back</b></p>
    </div>
  </div>
</div>
</template>

</v-switch>

<!--
Labels to narrate:
Base screen, destroy: destroy is the mirror of the build. It unwinds the same three resources and ends on its own summary. Watch the console with me: the server flips to terminated, its address is released, the page URL stops answering. A terminated server bills nothing, which is why teams tear whole test environments down every evening and rebuild them every morning. Run apply again and two minutes later the same page is up at a fresh address. Destroyed on purpose, rebuilt on demand, no runbook, no memory, no fear.
[click] the drift wow: someone opens the console and changes the server by hand, off the record. The next terraform plan compares the file against reality and flags the difference; the industry word is drift. apply pulls reality back to match the file, so the written recipe always wins.

DEMO SCRIPT (~10 min), same terminal and console tab:
1. terraform destroy. Read the confirmation aloud: it lists exactly what will die and waits for a typed yes. Type yes. Narrate the unwind; the instance is the slow one at about forty seconds. Console refresh: terminated. Reload the page URL: it times out.
2. terraform apply, yes, and talk over the two-minute rebuild: this is the snowflake slide's fear, deleted. A 3 am disk failure now means running one command, not reconstructing years of undocumented tweaks. Open the fresh web_url: same page, new address.
3. The drift screen: in the AWS console, change the running instance by hand, for example stop it or edit a tag. Back in the terminal, terraform plan: it reports the resource changed outside Terraform and offers to fix it. terraform apply, yes: reality is pulled back to match the file.
Night before: covered by the plan-demo prep; nothing extra to install. Rehearse one destroy-apply cycle, then rehearse a console hand-edit and the plan that catches it, so the drift output and timings match the account.
FALLBACK: the backup workspace from the rehearsal can be destroyed live instead if the main folder misbehaves; the tmux transcript of the morning cycle, including the drift plan, covers a network failure.
-->
