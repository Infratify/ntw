---
layout: default
transition: fade-out
---

<div class="flex items-center gap-3 mb-2">
  <LiveBadge />
  <h3 class="!m-0">Read the recipe</h3>
</div>

<div class="grid grid-cols-2 gap-10 mt-10 items-center">

<div>
<TermWindow title="terraform plan: a dry run">
<div><span class="text-green-400">$</span> cat main.tf</div>
<div v-click="1" class="opacity-80 mt-1">resource "aws_instance" "web" { ... }</div>
<div v-click="1"><span class="text-green-400">$</span> terraform plan</div>
<div v-click="1" class="text-green-400">Plan: 3 to add, 0 to change, 0 to destroy.</div>
</TermWindow>
</div>

<div class="space-y-7">
  <div v-click="2" class="note-row items-center">
    <mdi-text-box-outline class="note-ico text-purple-600 dark:text-purple-400" />
    <p><b>the whole recipe, readable</b></p>
  </div>
  <div v-click="3" class="note-row items-center">
    <mdi-eye-outline class="note-ico text-purple-600 dark:text-purple-400" />
    <p><b>a preview, nothing built</b></p>
  </div>
  <div v-click="4" class="note-row items-center">
    <mdi-currency-usd-off class="note-ico text-purple-600 dark:text-purple-400" />
    <p><b>costs nothing to run</b></p>
  </div>
</div>

</div>

<!--
Labels to narrate:
[click] the transcript is the shape of what happens for real in a second: we open the file, then ask Terraform what it would do. The last line is the answer, and the green counts are the summary: three things to add, nothing to change, nothing to destroy.
[click] the whole environment is one file about a screen long; we read it top to bottom together.
[click] plan is a dry run, spoken plainly a rehearsal: Terraform describes what it would build and touches nothing. The AWS console stays exactly as empty as before.
[click] and a rehearsal is free: reading and planning cost RM 0; money only enters when something is actually built.

DEMO SCRIPT (~8 min), split screen, editor left, terminal right:
1. Open main.tf in VS Code. Walk it top to bottom: the provider block names AWS and ap-southeast-1, the Singapore region from Wednesday; a key pair for logging in; a security group opening ports 22 and 80, the same two doors clicked open on Wednesday; one server block: Ubuntu 24.04, t3.micro, and a startup script that installs Docker and runs the stall-page container from Thursday.
2. Read one line out loud to prove it reads like a list, and ask the chat to guess what instance_type = "t3.micro" means before glossing it.
3. Terminal: terraform plan. Scroll the output slowly; every planned thing maps to a block we just read. Finish on the counter line: Plan: 3 to add, 0 to change, 0 to destroy.
4. Point at the console in the other tab: still empty. Nothing was built; that is the whole point of plan.
Night before: on the demo laptop install Terraform from the HashiCorp apt repo (Terraform is not in Ubuntu 24.04's own repos), plus git and tmux from the standard repos; export the demo AWS credentials; run terraform init once so the AWS provider is cached; rehearse the full plan, apply, destroy cycle in ap-southeast-1.
FALLBACK: a tmux session from the morning rehearsal holds the full transcript of every command in today's script; if the network or AWS misbehaves, scroll it and narrate.
-->
