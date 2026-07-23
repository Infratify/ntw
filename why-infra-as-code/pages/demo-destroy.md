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
ASK: spoken A/B/C vote before typing destroy
- "how long until the server is completely gone: A a few seconds, B about a minute, C five minutes?"
- say the three aloud, let the letters flood in, read the top pick; the live unwind settles it (~40s)

- base screen, destroy: the mirror of the build; unwinds the same three resources, ends on its own summary
  - watch the console: server flips to terminated, address released, page URL stops answering
  - terminated = bills nothing = teams tear whole test environments down every evening, rebuild every morning
  - apply again = ~2 min later the same page is up at a fresh address; destroyed on purpose, rebuilt on demand, no runbook, no memory, no fear
- [click] the drift wow: someone changes the server by hand in the console, off the record
  - next terraform plan compares file vs reality, flags the difference; industry word = drift
  - apply pulls reality back to match the file; the written recipe always wins

DEMO SCRIPT (~10 min), same terminal and console tab:
1. terraform destroy. Read the confirmation aloud: lists exactly what dies, waits for a typed yes. Type yes. Narrate the unwind; the instance is the slow one (~40s). Console refresh: terminated. Reload the page URL: times out
2. terraform apply, yes; talk over the ~2 min rebuild: the snowflake slide's fear, deleted. A 3 am disk failure = one command, not reconstructing years of undocumented tweaks. Refresh the console: a fresh instance at a new address, same server rebuilt from the file
3. the drift screen: in the AWS console change the running instance by hand (stop it, or edit a tag). Terminal, terraform plan: reports the resource changed outside Terraform, offers to fix. terraform apply, yes: reality pulled back to match the file
Night before: covered by the plan-demo prep; nothing extra to install. Rehearse one destroy-apply cycle, then a console hand-edit + the plan that catches it, so drift output + timings match the account
FALLBACK: the backup workspace from the rehearsal can be destroyed live instead if the main folder misbehaves; the tmux transcript of the morning cycle (including the drift plan) covers a network failure
-->
