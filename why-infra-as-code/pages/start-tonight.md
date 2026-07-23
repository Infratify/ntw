---
layout: default
transition: slide-left
---

### Start tonight

<div class="mt-12 max-w-2xl mx-auto space-y-10">

<div v-click="1" class="flex items-center gap-6">
  <logos-microsoft-windows-icon class="text-4xl flex-shrink-0" />
  <div>
    <div class="font-mono text-base"><span class="text-blue-600 dark:text-blue-400">PS C:\&gt;</span> <span class="type-line">winget install Hashicorp.Terraform</span></div>
    <p class="text-sm opacity-65 mt-1 mb-0">the official Windows install</p>
  </div>
</div>

<div v-click="2" class="flex items-center gap-6">
  <logos-ubuntu class="text-4xl flex-shrink-0" />
  <div>
    <div class="font-mono text-base"><span class="text-gray-500 dark:text-gray-400">$</span> <span class="type-line">sudo apt install terraform</span></div>
    <p class="text-sm opacity-65 mt-1 mb-0">via the official HashiCorp repo</p>
  </div>
</div>

<div v-click="3" class="flex items-center gap-6">
  <logos-terraform-icon class="text-4xl flex-shrink-0" />
  <div>
    <div class="font-mono text-base"><a href="https://developer.hashicorp.com/terraform/install" target="_blank">developer.hashicorp.com/terraform/install</a></div>
    <p class="text-sm opacity-65 mt-1 mb-0">official installer, macOS too</p>
  </div>
</div>

</div>

<div v-click="4" class="mark-safe mt-12 text-center text-lg opacity-85">
Every tool this week is <span v-mark="{ at: 4, color: '#7c3aed', type: 'highlight' }">free</span> to install.
</div>

<!--
Captions to narrate:
- winget = Windows' built-in installer, same one-line idea as Monday's wsl command; one line + Terraform is on the laptop
- Ubuntu = official HashiCorp apt repo, how this demo machine got it
- official installer page covers every OS (macOS too); its get-started guides walk today's exact plan-apply-destroy loop in an evening
- reassurance behind the last line: reading + planning cost nothing = install Terraform + practise the plan-apply loop free tonight
  - ready to build for real = Wednesday's free-credit AWS account covers everything shown today, no new signup

ACTIVITY: right now on your phone
- open registry.terraform.io (think app store, but for servers) and search a name you already know: WordPress, Minecraft, MySQL
- drop in chat what you found; every result is a ready-made block someone else maintains, same catalogue today's demo copied from

- landing line to say out loud: every tool in this week's toolchain is free
-->
