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
  <logos-apple class="text-4xl flex-shrink-0 dark:invert" />
  <div>
    <div class="font-mono text-base"><span class="text-gray-500 dark:text-gray-400">~ %</span> <span class="type-line">brew install terraform</span></div>
    <p class="text-sm opacity-65 mt-1 mb-0">one line on macOS</p>
  </div>
</div>

<div v-click="3" class="flex items-center gap-6">
  <logos-terraform-icon class="text-4xl flex-shrink-0" />
  <div>
    <div class="font-mono text-base"><span class="type-line"><a href="https://developer.hashicorp.com/terraform" target="_blank">developer.hashicorp.com/terraform</a></span></div>
    <p class="text-sm opacity-65 mt-1 mb-0">guides for first steps</p>
  </div>
</div>

</div>

<div v-click="4" class="mark-safe mt-12 text-center text-lg opacity-85">
Terraform also builds <span v-mark="{ at: 4, color: '#7c3aed', type: 'highlight' }">Docker containers</span>, locally.
</div>

<!--
Captions to narrate: winget is Windows' built-in installer, the same one-line idea as Monday's wsl command; one line and Terraform is on the laptop. On a Mac it is one brew line. And the official site's get-started guides walk the exact plan-apply-destroy loop from today in an evening.
The reassurance behind the last line: you do not need a paid cloud to practise. Point Terraform at Docker Desktop from Thursday and it builds and destroys containers on your own laptop: RM 0, no account, no card. When you are ready for the real thing, Wednesday's free-credit AWS account covers everything shown today.
Landing line to say out loud: every tool in this week's toolchain is free.
-->
