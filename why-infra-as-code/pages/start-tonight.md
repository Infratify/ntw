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
Captions to narrate: winget is Windows' built-in installer, the same one-line idea as Monday's wsl command; one line and Terraform is on the laptop. On Ubuntu it is the official HashiCorp apt repo, the same way this demo machine got it. And the official installer page covers every operating system, macOS included, and its get-started guides walk the exact plan-apply-destroy loop from today in an evening.
The reassurance behind the last line: reading and planning cost nothing, so you can install Terraform and practise the plan-apply loop for free tonight. When you are ready to build for real, Wednesday's free-credit AWS account covers everything shown today, no new signup.
ACTIVITY: right now, on your phone, open registry.terraform.io and search for something you recognise, a database or a web server; it is the same catalogue today's demo copied from. Drop in chat what you found.
Landing line to say out loud: every tool in this week's toolchain is free.
-->
