---
layout: default
transition: slide-left
clicks: 4
---

### Image and container

<div class="grid grid-cols-2 gap-10 mt-4 items-center">

<div>
  <FlowGraph
    :width="340"
    :height="270"
    :nodes="[
      { shape: 'rect', cx: 170, cy: 55, w: 200, h: 52, icon: 'file-multiple', color: 'blue', label: 'stall-page image', at: 0 },
      { shape: 'hexagon', cx: 70, cy: 215, w: 96, h: 56, icon: 'cube-outline', color: 'green', label: 'copy 1', at: 2 },
      { shape: 'hexagon', cx: 170, cy: 215, w: 96, h: 56, icon: 'cube-outline', color: 'green', label: 'copy 2', at: 2 },
      { shape: 'hexagon', cx: 270, cy: 215, w: 96, h: 56, icon: 'cube-outline', color: 'green', label: 'copy 3', at: 3 },
    ]"
    :edges="[
      { at: 2, d: 'M130 81 C 105 120, 85 150, 74 183', ax: 73, ay: 185, adeg: 110 },
      { at: 2, d: 'M170 81 V 183', ax: 170, ay: 185, adeg: 90 },
      { at: 3, d: 'M210 81 C 235 120, 255 150, 266 183', ax: 267, ay: 185, adeg: 70, label: 'docker run', lx: 268, ly: 125, lw: 78, lc: 'green' },
    ]"
  />
</div>

<div class="space-y-7">
  <div v-click="1" class="note-row items-center">
    <mdi-file-multiple class="note-ico text-blue-600 dark:text-blue-400" />
    <p><b>an image</b> <span class="opacity-60">&middot; the recipe, frozen</span></p>
  </div>
  <div v-click="2" class="note-row items-center">
    <mdi-cube-outline class="note-ico text-green-600 dark:text-green-400" />
    <p><b>a container</b> <span class="opacity-60">&middot; one running copy</span></p>
  </div>
  <div v-click="3" class="note-row items-center">
    <mdi-play class="note-ico text-green-600 dark:text-green-400" />
    <p><b>docker run</b> <span class="opacity-60">&middot; starts another copy</span></p>
  </div>
</div>

</div>

<div v-click="4" class="mark-safe mt-4 text-center text-lg opacity-85">
One image starts as <span v-mark="{ at: 4, color: '#2563eb', type: 'highlight' }">many copies</span> as needed.
</div>

<!--
Two words carry the whole session, and a kuih mould explains both: one acuan, many identical kuih, and the mould itself is never eaten.

[click] the image is the mould: the box's contents written down and frozen. It sits on disk, does nothing, and never changes.
[click] a container is one kuih pressed from that mould: the image brought to life, actually running. This is the thing that serves the page.
[click] docker run presses the mould again. Each press takes about a second, every copy comes out identical, and the copies never share anything: stop copy 2 and copies 1 and 3 keep serving.
[click] why anyone cares: a busy day at the stall means pressing three more copies, not building three more servers. The demo after next does exactly this.
-->
