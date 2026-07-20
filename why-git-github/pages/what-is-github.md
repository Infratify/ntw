---
layout: default
transition: slide-down
clicks: 4
---

<p class="eyebrow font-mono"><span class="text-red-600 dark:text-red-400">part 2</span> &middot; team ready</p>

### What is GitHub?

<div class="grid grid-cols-2 gap-10 mt-4 items-center">

<div>
  <FlowGraph
    :width="300"
    :height="260"
    :nodes="[
      { shape: 'rect', cx: 150, cy: 220, w: 170, h: 52, icon: 'laptop', color: 'cyan', label: 'your laptop', at: 0 },
      { shape: 'rect', cx: 150, cy: 55, w: 170, h: 52, icon: 'github', color: 'blue', label: 'github.com', at: 1 },
    ]"
    :edges="[
      { at: 2, d: 'M185 194 V81', ax: 185, ay: 81, adeg: -90, label: 'git push', lx: 248, ly: 138, lw: 64, lc: 'green' },
      { at: 3, d: 'M115 81 V194', ax: 115, ay: 194, adeg: 90, label: 'git pull', lx: 54, ly: 138, lw: 60, lc: 'blue' },
    ]"
  />
</div>

<div class="space-y-7">
  <div v-click="1" class="note-row items-center">
    <mdi-cloud-outline class="note-ico text-blue-600 dark:text-blue-400" />
    <p><b>a shared copy</b> <span class="opacity-60">&middot; always online</span></p>
  </div>
  <div v-click="2" class="note-row items-center">
    <mdi-cloud-upload-outline class="note-ico text-green-600 dark:text-green-400" />
    <p><b>push</b> <span class="opacity-60">&middot; send new commits</span></p>
  </div>
  <div v-click="3" class="note-row items-center">
    <mdi-cloud-download-outline class="note-ico text-blue-600 dark:text-blue-400" />
    <p><b>pull</b> <span class="opacity-60">&middot; bring commits down</span></p>
  </div>
</div>

</div>

<div v-click="4" class="mark-safe mt-4 text-center text-lg opacity-85">
git runs on your laptop; GitHub keeps the <span v-mark="{ at: 4, color: '#dc2626', type: 'highlight' }">shared copy</span>.
</div>

<!--
ASK: before the first click, spoken vote: "where does your team keep the one true copy of a shared file? A, on someone's laptop. B, in a WhatsApp or email thread. C, on a shared drive." Read the top letter back; whichever wins, the pain is the same, nobody is ever sure which copy is real, and this slide is the developers' answer to it.
The session title has two names for a reason, and this diagram is the whole difference.

[click] GitHub is a website. You make a free account, and it stores a copy of your project's folder plus its entire history, online, around the clock. Think of the jump from a Word file on one laptop to a Google Doc everyone can open.
[click] push is you sending your newest commits up to that shared copy.
[click] pull is you bringing down whatever teammates sent up while you were away.
[click] so: git is the tool on your machine, GitHub is the place where the copies meet. Numbers for the curious, spoken only: GitHub started in 2008, belongs to Microsoft, and passed 100 million accounts years ago. Alternatives like GitLab and Bitbucket work the same way, which is why learning this one transfers.
-->
