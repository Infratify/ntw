---
layout: default
transition: fade-out
---

<div class="flex items-center gap-3 mb-2">
  <LiveBadge />
  <h3 class="!m-0">Change one number</h3>
</div>

<div class="term-print max-w-2xl mx-auto mt-6">
<TermWindow title="terraform: one line, three servers">
<div v-click="1" class="py-0.5 flex items-center justify-between"><span><span class="text-green-400">$</span> nano main.tf</span><mdi-pencil-outline class="text-gray-500" /></div>
<div v-click="1" class="py-0.5 opacity-60">&nbsp;&nbsp;count = 3</div>
<div v-click="2" class="py-0.5 flex items-center justify-between"><span><span class="text-green-400">$</span> terraform apply</span><mdi-play class="text-gray-500" /></div>
<div v-click="2" class="py-0.5 opacity-60">Apply complete! Resources: 2 added, 0 changed, 0 destroyed.</div>
<div v-click="3" class="py-0.5 flex items-center justify-between"><span><span class="text-green-400">$</span> terraform destroy</span><mdi-delete-outline class="text-gray-500" /></div>
<div v-click="3" class="py-0.5 opacity-60">Destroy complete! Resources: 5 destroyed.</div>
</TermWindow>
</div>

<div v-click="4" class="mark-safe mt-8 text-center text-lg opacity-85">
Three servers ran from a <span v-mark="{ at: 4, color: '#7c3aed', type: 'highlight' }">one-number edit</span>.
</div>

<!--
The pull request from the last slide, done live by hand so everyone sees what the pipeline would see.

ACTIVITY: before the edit, ask the chat to predict how many lines change to turn one server into three. Take the guesses, then reveal it is a single number; the screen proves it seconds later as two new machines appear.

[click] the edit: count is how many copies of the server should exist. One becomes three; save; that is the entire change.
[click] apply works out the difference by itself: two to add, because one already runs. Two new servers appear and the console jumps to three machines, all three from the one file.
[click] and the finale of the week: destroy the whole fleet. Five resources unwind, the console is empty, and over the weekend this account bills RM 0. The folder still holds every detail, so Monday morning one apply would bring all three back.

DEMO SCRIPT (~8 min), same terminal, console tab ready:
1. nano main.tf; change count = 1 to count = 3; save. Gloss count on screen before saving.
2. terraform plan first: it prints 2 to add, proof the tool compared the file against what already exists.
3. terraform apply, yes. Console: three instances running, every one from the single edit.
4. terraform destroy, yes. Watch all five resources unwind; refresh the console until it is empty.
5. Land the week's arc, factually: Monday a terminal, Tuesday a page with history, Wednesday a rented server, Thursday a container, and today the whole setup written as text, built, multiplied and removed on command.
Night before: no new tools beyond the plan-demo prep (Terraform, git, tmux); confirm the account's vCPU quota in ap-southeast-1 allows three t3.micro instances; rehearse the count = 3 apply and the full destroy.
FALLBACK: the tmux transcript from the morning rehearsal shows the same edit, apply and destroy; scroll and narrate it.
-->
