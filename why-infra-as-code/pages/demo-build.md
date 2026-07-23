---
layout: default
transition: slide-left
clicks: 2
---

<div class="flex items-center gap-3 mb-2">
  <LiveBadge />
  <h3 class="!m-0">Build it live</h3>
</div>

<div class="grid grid-cols-2 gap-10 mt-10 items-center">

<div>
<TermWindow title="terraform: registry module to running server">
<div><span class="text-green-400">$</span> terraform init</div>
<div v-click="1" class="opacity-80 mt-1">Downloading terraform-aws-modules/ec2-instance&hellip;</div>
<div v-click="1"><span class="text-green-400">$</span> terraform apply</div>
<div v-click="1" class="text-green-400">Apply complete! Resources: 3 added.</div>
</TermWindow>
</div>

<div>
<v-switch>
  <template #1>
  <div class="pop-in space-y-7">
    <div class="note-row items-center">
      <mdi-cloud-download-outline class="note-ico text-purple-600 dark:text-purple-400" />
      <p><b>module pulled from the registry</b></p>
    </div>
    <div class="note-row items-center">
      <mdi-web class="note-ico text-purple-600 dark:text-purple-400" />
      <p><b>the stall page returns</b></p>
    </div>
    <div class="note-row items-center">
      <mdi-timer-outline class="note-ico text-purple-600 dark:text-purple-400" />
      <p><b>about two minutes</b></p>
    </div>
  </div>
  </template>
  <template #2-4>
  <div class="pop-in text-center">
    <div class="inline-flex items-center gap-2 rounded-md border border-blue-400/50 bg-blue-500/10 px-3 py-1.5 font-mono text-xs text-blue-600 dark:text-blue-400"><mdi-server class="text-sm" />aws_instance</div>
    <div class="flex justify-center my-1.5 opacity-40"><mdi-arrow-down-thin /></div>
    <div class="flex justify-center gap-2.5">
      <div class="inline-flex items-center gap-1.5 rounded-md border border-amber-400/50 bg-amber-500/10 px-2.5 py-1.5 font-mono text-xs text-amber-600 dark:text-amber-400"><mdi-shield-outline class="text-sm" />firewall</div>
      <div class="inline-flex items-center gap-1.5 rounded-md border border-purple-400/50 bg-purple-500/10 px-2.5 py-1.5 font-mono text-xs text-purple-600 dark:text-purple-400"><mdi-key-outline class="text-sm" />key</div>
      <div class="inline-flex items-center gap-1.5 rounded-md border border-cyan-400/50 bg-cyan-500/10 px-2.5 py-1.5 font-mono text-xs text-cyan-600 dark:text-cyan-400"><mdi-lan class="text-sm" />subnet</div>
    </div>
    <p class="text-sm opacity-60 mt-4 m-0">the same file, drawn as a blueprint</p>
  </div>
  </template>
</v-switch>
</div>

</div>

<!--
Labels to narrate:
[click] init reaches out to the registry and downloads the module we copied; that download line is the leverage made real, the maintained code arriving on the machine. apply then reads it and ends on the green summary, three resources added: the server, its firewall, its key. The startup script installs Docker and starts a container serving the stall page, so the week's nasi lemak page comes back to life on a machine that did not exist a minute earlier. For anyone new today: it is a one-page site built on Tuesday, hosted on a rented server on Wednesday, and packaged with Docker, Thursday's tool. End to end, about two minutes.
[click] terraform graph turns the same text file into a picture: the server and the three things it depends on. The file is a blueprint, and this is the blueprint drawn.

DEMO SCRIPT (~10 min), terminal, console tab ready:
1. terraform init: narrate the module and provider downloading from the registry, then terraform apply. Read the printed plan aloud; it asks for a typed yes before touching anything. Type yes.
2. Narrate the create order as it scrolls: key pair instantly, security group in seconds, then the instance, about forty seconds. The startup script runs for another minute after that.
3. While it boots, refresh the EC2 console: an instance appears, born from code; nobody opened the launch wizard.
4. The outputs print web_url. Open it in the browser: the stall page, served again.
5. Second screen, the graph wow: terraform graph | dot -Tsvg > graph.svg, then open graph.svg. The slide shows a tidy version; the real one proves the same file is a dependency map. Point at the server and the firewall, key and subnet it needs.
Night before: same prep as the plan demo (Terraform via the HashiCorp apt repo, terraform init cached so the registry module and AWS provider are local, credentials exported, full rehearsal in ap-southeast-1); also apt install graphviz so terraform graph | dot renders; the startup script installs docker.io and git from Ubuntu 24.04's default repos and pulls the nginx image, so allow the full two minutes.
FALLBACK: the morning rehearsal's environment is left running in a second folder (workspace "backup"); if the live apply fails, switch terminals, show its page and its transcript in tmux; a pre-rendered graph.svg from the rehearsal covers the graph screen if dot misbehaves.
-->
