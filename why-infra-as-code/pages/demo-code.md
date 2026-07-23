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
[click] install is one line; the link is the official installer, and it covers every operating system. Prove it is already on this machine with terraform -version.
[click] the registry is the public catalogue of ready-made building blocks; open it and search ec2.
[click] the official AWS module for a server; open its page and copy the usage example. It is maintained in the open, it is free, and it has been installed millions of times.
[click] nothing on this slide is hand-written; every block is copied out of that catalogue.

DEMO SCRIPT (~8 min), split screen, browser left, terminal right:
1. terminal: terraform -version, proves it is installed. Say how it got here: on this Ubuntu machine it is the official HashiCorp apt repo, a couple of lines copied from the install page linked on the slide.
2. browser: open registry.terraform.io, search "ec2-instance", open terraform-aws-modules/ec2-instance. Point at the download count (millions) and the open-source authors: the whole world runs this same file, for free. This is the registry-leverage moment.
3. copy the usage example from the module's Provision Instructions. Paste it into main.tf. Keep name, instance_type = t3.micro, and the subnet; delete what we do not need. Say it plainly: I wrote none of this.
4. terraform plan: it prints the resources this module will create, then the counter line. Nothing is built yet.
Night before: install Terraform via the official HashiCorp apt repo on the demo laptop (Terraform is not in Ubuntu 24.04's own repos); the AWS provider needs >= 6.37 and the module needs Terraform >= 1.5.7; run terraform init once so the module and provider are cached; export the demo AWS credentials; rehearse plan, apply, destroy in ap-southeast-1.
FALLBACK: a tmux session from the morning rehearsal holds the full transcript of every command; if the network or the registry is slow, scroll it and narrate; the module is already cached locally from last night's init.
-->
