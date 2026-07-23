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
<div v-click="1" class="py-0.5 flex items-center justify-between"><span><span class="text-green-400">$</span> code main.tf</span><mdi-pencil-outline class="text-gray-500" /></div>
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
- the pull request from the last slide, done live by hand so everyone sees what the pipeline would see

ACTIVITY: before the edit
- chat predicts how many lines change to turn one server into three
- take the guesses, reveal it is a single number; screen proves it seconds later as two new machines appear

- [click] the edit: count = how many copies of the server should exist; one becomes three, save, that is the entire change
- [click] apply works out the difference itself: 2 to add (one already runs); two new servers appear, console jumps to three, all from the one file
- [click] the week's finale: destroy the whole fleet. Five resources unwind, console empty, weekend bills RM 0; the folder still holds every detail = Monday one apply brings all three back

DEMO SCRIPT (~8 min), same terminal, console tab ready:
1. code main.tf (opens the file in VS Code, the same editor most jobs use); count = 1 to count = 3; save. Gloss count on screen before saving
2. terraform plan first: prints 2 to add, proof the tool compared the file against what exists
3. terraform apply, yes. Console: three instances running, every one from the single edit
4. terraform destroy, yes. Watch all five resources unwind; refresh the console until empty
5. land the week's arc, factually: Monday a terminal, Tuesday a page with history, Wednesday a rented server, Thursday a container, today the whole setup as text, built + multiplied + removed on command
Night before: no new tools beyond the plan-demo prep (Terraform, git, tmux); confirm the account's vCPU quota in ap-southeast-1 allows three t3.micro instances; rehearse the count = 3 apply + the full destroy
FALLBACK: tmux transcript from the morning rehearsal shows the same edit, apply, destroy; scroll + narrate
-->
