---
layout: default
transition: slide-right
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
- two names in every job ad for this field; they split the work like a construction site

- [click] Terraform (purple) = the builder: reads the recipe, makes machines, firewalls, addresses exist in the cloud; architect + contractor in one
  - Ansible = the fit-out crew: steps inside existing machines, installs + configures software the same way every time
  - today's demos are Terraform end to end (standing the server up); the inside work is Ansible's job, same at company scale
- [click] both read plain text = the recipe lives in Git (Tuesday's tool): every change has author, date, reason; teammates review before it happens. Both free: download + run from any laptop
- [click] plain text is the part that matters most: no clicking, no screenshots, short lines anyone reads out loud; we do exactly that now with the real file
-->
