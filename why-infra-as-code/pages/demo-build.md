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
      <mdi-cloud-check-outline class="note-ico text-purple-600 dark:text-purple-400" />
      <p><b>a real server appears</b></p>
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
- [click] init reaches the registry, downloads the module we copied; that download line = the leverage made real, maintained code arriving on the machine
  - apply reads it, ends on the green summary: a real server exists that did not a minute ago, plus the firewall + key the module set up, nobody opened a console wizard
  - end to end ~2 min, most of it booting
- [click] terraform graph turns the same text file into a picture: the server + what it depends on. The file is a blueprint, this is it drawn

PROP: at the apply beat
- turn the shared screen to the live AWS console (or hold a phone on it), refresh as the instance flips to running
- the machine appearing with nobody touching the launch wizard = the proof, shown not told

DEMO SCRIPT (~10 min), terminal, console tab ready:
1. terraform init: narrate module + provider downloading from the registry, then terraform apply. Read the printed plan aloud; it wants a typed yes before touching anything. Type yes
2. narrate the create order as it scrolls: supporting pieces first, then the instance (~40s); another moment to finish booting
3. while it boots, refresh the EC2 console: an instance appears, born from code; nobody opened the launch wizard
4. outputs print the instance's public address. Point at it, back at the console: a real server, its firewall + key, each traceable to a line in the copied module
5. second screen, the graph wow: terraform graph | dot -Tsvg > graph.svg, open graph.svg. Slide shows a tidy version; the real one proves the same file is a dependency map. Point at server + firewall, key, subnet it needs
Night before: same as the plan demo (Terraform via HashiCorp apt repo, terraform init cached so module + AWS provider local, credentials exported, full rehearsal in ap-southeast-1); also apt install graphviz so terraform graph | dot renders. Allow the full 2 min to boot
FALLBACK: morning rehearsal's environment left running in a second folder (workspace "backup"); live apply fails = switch terminals, show its console state + tmux transcript; a pre-rendered graph.svg covers the graph screen if dot misbehaves
-->
