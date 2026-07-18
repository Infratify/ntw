---
layout: default
transition: slide-left
---

### Meet the tools

<div class="pop grid grid-cols-4 gap-x-6 gap-y-8 mt-14 max-w-3xl mx-auto text-center">

<div v-click="1">
  <div class="medallion bg-purple-500/10"><logos-terraform-icon class="text-3xl" /></div>
  <p class="text-sm font-600 mt-3 m-0">builds machines</p>
  <p class="text-xs opacity-55 mt-1 m-0">Terraform</p>
</div>

<div v-click="1">
  <div class="medallion bg-red-500/10"><logos-ansible class="text-3xl dark:invert" /></div>
  <p class="text-sm font-600 mt-3 m-0">installs software</p>
  <p class="text-xs opacity-55 mt-1 m-0">Ansible</p>
</div>

<div v-click="2">
  <div class="medallion bg-orange-500/10"><logos-git-icon class="text-3xl" /></div>
  <p class="text-sm font-600 mt-3 m-0">stores the recipe</p>
  <p class="text-xs opacity-55 mt-1 m-0">Git</p>
</div>

<div v-click="2">
  <div class="medallion bg-green-500/10"><mdi-open-source-initiative class="text-3xl text-green-600 dark:text-green-400" /></div>
  <p class="text-sm font-600 mt-3 m-0">free, open source</p>
  <p class="text-xs opacity-55 mt-1 m-0">both of them</p>
</div>

</div>

<div v-click="3" class="mark-safe mt-12 text-center text-lg opacity-85">
Both tools read <span v-mark="{ at: 3, color: '#7c3aed', type: 'highlight' }">plain text</span> files.
</div>

<!--
Two names come up in every job ad for this field, and they split the work like a construction site.

[click] Terraform, the purple one, is the builder: it reads the recipe and makes machines, firewalls and addresses exist in the cloud. Think architect plus contractor in one. Ansible is the fit-out crew: it steps inside machines that already exist and installs and configures the software, the same way on every machine. Today's demos are Terraform end to end; our server will configure itself with a small startup script, and at company scale that inside job is exactly what Ansible does.
[click] because both read plain text files, the recipe lives in Git, Tuesday's tool: every change has an author, a date and a reason, and teammates review it before it happens. And both tools cost nothing: free to download, free to run, from any laptop.
[click] plain text is the part that matters most, so say it carefully: no clicking, no screenshots, just short lines anyone can read out loud. We do exactly that right now, with the real file.
-->
