---
layout: default
transition: fade-out
---

<div class="flex items-center gap-3 mb-2">
  <LiveBadge />
  <h3 class="!m-0">The registry way</h3>
</div>

<div class="max-w-xl mx-auto mt-7 space-y-6">

  <div v-click="1" class="flex items-center gap-5">
    <mdi-download-box-outline class="text-3xl text-purple-600 dark:text-purple-400 flex-shrink-0" />
    <div>
      <p class="text-lg font-700 m-0">install once</p>
      <a href="https://developer.hashicorp.com/terraform/install" target="_blank" class="font-mono text-sm">developer.hashicorp.com/terraform/install</a>
    </div>
  </div>

  <div v-click="2" class="flex items-center gap-5">
    <logos-terraform-icon class="text-3xl flex-shrink-0" />
    <div>
      <p class="text-lg font-700 m-0">find the block</p>
      <a href="https://registry.terraform.io" target="_blank" class="font-mono text-sm">registry.terraform.io</a>
    </div>
  </div>

  <div v-click="3" class="flex items-center gap-5">
    <mdi-content-copy class="text-3xl text-purple-600 dark:text-purple-400 flex-shrink-0" />
    <div>
      <p class="text-lg font-700 m-0">copy the example</p>
      <a href="https://registry.terraform.io/modules/terraform-aws-modules/ec2-instance/aws/latest" target="_blank" class="font-mono text-sm">registry.terraform.io/&hellip;/ec2-instance</a>
      <p class="text-xs opacity-55 mt-1 m-0">community-maintained &middot; millions of installs</p>
    </div>
  </div>

</div>

<div v-click="4" class="mark-safe mt-9 text-center text-lg opacity-85">
Every block comes straight from the <span v-mark="{ at: 4, color: '#7c3aed', type: 'underline' }">registry</span>.
</div>

<!--
Labels to narrate:
- [click] install is one line; link = the official installer, covers every OS. Prove it is here already: terraform -version
- [click] the registry = public catalogue of ready-made building blocks; open it, search ec2
- [click] the official AWS module for a server; open its page, copy the usage example. Maintained in the open, free, installed millions of times
- [click] nothing here is hand-written; every block copied out of that catalogue

ACTIVITY: before pressing plan
- chat predicts how many real things this one copied block creates: 1, 3, or 10
- let guesses land, run plan, read the counter line back against them

DEMO SCRIPT (~8 min), split screen, browser left, terminal right:
1. terminal: terraform -version, proves it is installed. How it got here: official HashiCorp apt repo, a couple of lines from the install page linked on the slide
2. browser: registry.terraform.io, search "ec2-instance", open terraform-aws-modules/ec2-instance. Point at download count (millions) + open-source authors: the whole world runs this file, free. The registry-leverage moment
3. copy the usage example from Provision Instructions. Paste into main.tf. Keep name, instance_type = t3.micro, subnet; delete the rest. Say plainly: I wrote none of this
4. terraform plan: prints the resources this module will create, then the counter line. Nothing built yet
Night before: install Terraform via official HashiCorp apt repo (not in Ubuntu 24.04's repos); AWS provider needs >= 6.37, module needs Terraform >= 1.5.7; terraform init once so module + provider cached; export demo AWS credentials; rehearse plan, apply, destroy in ap-southeast-1
FALLBACK: tmux session from the morning rehearsal holds every command's transcript; network/registry slow = scroll + narrate; module already cached from last night's init
-->
