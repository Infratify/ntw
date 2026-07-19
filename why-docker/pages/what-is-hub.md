---
layout: default
transition: slide-down
clicks: 4
---

<p class="eyebrow font-mono"><span class="text-blue-600 dark:text-blue-400">part 2</span> &middot; ship anywhere</p>

### What is Docker Hub?

<div class="grid grid-cols-2 gap-10 mt-4 items-center">

<div>
  <FlowGraph
    :width="340"
    :height="275"
    :nodes="[
      { shape: 'rect', cx: 88, cy: 220, w: 152, h: 50, icon: 'laptop', color: 'cyan', label: 'your laptop', at: 0 },
      { shape: 'rect', cx: 170, cy: 55, w: 170, h: 52, icon: 'docker', color: 'blue', label: 'Docker Hub', at: 1 },
      { shape: 'rect', cx: 252, cy: 220, w: 152, h: 50, icon: 'server', color: 'green', label: 'any server', at: 3 },
    ]"
    :edges="[
      { at: 2, d: 'M110 195 C 118 150, 128 115, 138 84', ax: 139, ay: 82, adeg: -72, label: 'docker push', lx: 70, ly: 135, lw: 84, lc: 'green' },
      { at: 3, d: 'M202 84 C 212 115, 222 150, 230 194', ax: 231, ay: 196, adeg: 72, label: 'docker pull', lx: 272, ly: 135, lw: 80, lc: 'blue' },
    ]"
  />
</div>

<div class="space-y-7">
  <div v-click="1" class="note-row items-center">
    <mdi-cloud-outline class="note-ico text-blue-600 dark:text-blue-400" />
    <p><b>a public shelf</b> <span class="opacity-60">&middot; of ready images</span></p>
  </div>
  <div v-click="2" class="note-row items-center">
    <mdi-cloud-upload-outline class="note-ico text-green-600 dark:text-green-400" />
    <p><b>push</b> <span class="opacity-60">&middot; upload your image</span></p>
  </div>
  <div v-click="3" class="note-row items-center">
    <mdi-cloud-download-outline class="note-ico text-blue-600 dark:text-blue-400" />
    <p><b>pull</b> <span class="opacity-60">&middot; download it anywhere</span></p>
  </div>
</div>

</div>

<div v-click="4" class="mark-safe mt-4 text-center text-lg opacity-85">
Today's nginx image came from <span v-mark="{ at: 4, color: '#2563eb', type: 'highlight' }">Docker Hub</span>.
</div>

<!--
Tuesday, GitHub kept our code online. Docker Hub does the same job for boxes.

[click] Docker Hub is a free website: a public shelf of ready-made images, uploaded by their makers. nginx is there, databases are there, whole app kits are there.
[click] push uploads an image you built, from your laptop to the shelf. One account, one command.
[click] pull downloads it onto any machine: a teammate's laptop, an office server, a cloud machine. The box arrives byte-for-byte identical, which is why "works on mine" stops being an argument.
[click] and you have already seen the shelf in action: when docker run couldn't find nginx on our server this morning, it pulled it from Docker Hub by itself.
-->
