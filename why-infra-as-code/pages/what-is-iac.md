---
layout: default
transition: slide-left
clicks: 4
---

### Infrastructure as code

<div class="grid grid-cols-2 gap-10 mt-4 items-center">

<div>
  <FlowGraph
    :width="300"
    :height="260"
    :nodes="[
      { shape: 'rect', cx: 150, cy: 220, w: 170, h: 52, icon: 'file-document-outline', color: 'cyan', label: 'one text file', at: 0 },
      { shape: 'rect', cx: 150, cy: 55, w: 170, h: 52, icon: 'server', color: 'blue', label: 'real servers', at: 1 },
    ]"
    :edges="[
      { at: 2, d: 'M185 194 V81', ax: 185, ay: 81, adeg: -90, label: 'apply', lx: 250, ly: 138, lw: 56, lc: 'green' },
      { at: 3, d: 'M115 81 V194', ax: 115, ay: 194, adeg: 90, label: 'destroy', lx: 50, ly: 138, lw: 68, lc: 'red' },
    ]"
  />
</div>

<div class="space-y-7">
  <div v-click="1" class="note-row items-center">
    <mdi-server class="note-ico text-blue-600 dark:text-blue-400" />
    <p><b>real things</b> <span class="opacity-60">&middot; servers, firewalls, addresses</span></p>
  </div>
  <div v-click="2" class="note-row items-center">
    <mdi-play class="note-ico text-green-600 dark:text-green-400" />
    <p><b>terraform apply</b> <span class="opacity-60">&middot; builds the list</span></p>
  </div>
  <div v-click="3" class="note-row items-center">
    <mdi-delete-outline class="note-ico text-red-600 dark:text-red-400" />
    <p><b>terraform destroy</b> <span class="opacity-60">&middot; removes it all</span></p>
  </div>
</div>

</div>

<div v-click="4" class="mark-safe mt-4 text-center text-lg opacity-85">
A <span v-mark="{ at: 4, color: '#7c3aed', type: 'highlight' }">text file</span> becomes a real server.
</div>

<!--
The fix for the runbook is almost silly in its simplicity: instead of writing instructions for a human to follow, write the end state in a file and let a program make it true. Anchor it to the kitchen: a recipe. Cook nasi lemak from memory and every batch drifts; hand the written recipe to any cook and the dish comes out the same. Infrastructure as Code, IaC for short, is exactly that recipe idea aimed at servers.

[click] the file lists real things that should exist: one server, its firewall, its public address, its startup script. Plain text, a screenful long.
[click] one command, apply, reads the list and makes the cloud match it. Run it once, run it fifty times: the same setup comes out, because a program never skips step 23.
[click] and the same tool can remove every single thing the file created, cleanly, with one opposite command. Nothing else on the account is touched.
[click] that is the whole idea of today. The tool doing it is called Terraform; meet it properly on the next slide.
-->
