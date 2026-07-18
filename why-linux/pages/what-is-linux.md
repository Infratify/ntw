---
layout: default
transition: slide-left
---

<p class="eyebrow font-mono"><span class="text-amber-600 dark:text-amber-400">part 1</span> &middot; meet linux</p>

### What is Linux?

<div class="relative h-[270px] mt-10">

<v-switch>

<template #0>
<div class="grid grid-cols-3 gap-8 text-center absolute inset-x-0 top-0">
  <div v-motion :initial="{ y: 24, opacity: 0 }" :enter="{ y: 0, opacity: 1, transition: { type: 'spring', stiffness: 110, delay: 100 } }">
    <logos-microsoft-windows-icon class="text-7xl mx-auto" />
    <p class="text-lg font-700 mt-4 mb-1">Windows</p>
    <p class="text-sm opacity-60 m-0">runs your office PC</p>
  </div>
  <div v-motion :initial="{ y: 24, opacity: 0 }" :enter="{ y: 0, opacity: 1, transition: { type: 'spring', stiffness: 110, delay: 250 } }">
    <logos-apple class="text-7xl mx-auto dark:invert" />
    <p class="text-lg font-700 mt-4 mb-1">macOS</p>
    <p class="text-sm opacity-60 m-0">runs your MacBook</p>
  </div>
  <div v-motion :initial="{ y: 24, opacity: 0 }" :enter="{ y: 0, opacity: 1, transition: { type: 'spring', stiffness: 110, delay: 400 } }">
    <logos-linux-tux class="text-7xl mx-auto" />
    <p class="text-lg font-700 mt-4 mb-1">Linux</p>
    <p class="text-sm opacity-60 m-0">runs almost everything else</p>
  </div>
</div>
</template>

<template #2-4>
<div class="grid grid-cols-4 gap-4 text-center absolute inset-x-0 top-0">
  <div class="pop-in">
    <logos-ubuntu class="text-6xl mx-auto" />
    <p class="text-base font-700 mt-4 mb-1">Ubuntu</p>
    <p class="text-xs opacity-60 m-0">the friendly default</p>
  </div>
  <div class="pop-in" style="animation-delay: .1s">
    <logos-redhat-icon class="text-6xl mx-auto" />
    <p class="text-base font-700 mt-4 mb-1">Red Hat</p>
    <p class="text-xs opacity-60 m-0">the enterprise suit</p>
  </div>
  <div class="pop-in" style="animation-delay: .2s">
    <logos-archlinux class="text-6xl mx-auto" />
    <p class="text-base font-700 mt-4 mb-1">Arch</p>
    <p class="text-xs opacity-60 m-0">the hobbyist hot rod</p>
  </div>
  <div class="pop-in" style="animation-delay: .3s">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 4.28 63.99 55.43" width="1.2em" height="1.2em" class="text-6xl mx-auto text-[#0d597f] dark:text-[#6cb8dd]" fill="currentColor">
      <path d="M23.25 38.81v-6.745l-4.855 4.864q.712.5 1.48.906c.463.243.87.434 1.303.58s.782.24 1.13.304.66.093.95.096m24.822-.562q.067.055.142.1a3 3 0 0 0 .385.203 3 3 0 0 0 .637.194q.446.09.9.087c.3 0 .608-.03.955-.087a7 7 0 0 0 1.138-.301 10 10 0 0 0 1.32-.579q.78-.411 1.503-.918l-3.685-3.6-12.21-12.258-5.356 5.356-7.23-7.455L8.439 36.93a14 14 0 0 0 1.5.918c.47.246.91.434 1.317.58a7 7 0 0 0 1.135.301 5.5 5.5 0 0 0 .955.087 4.5 4.5 0 0 0 .9-.087 3.3 3.3 0 0 0 .637-.194 2.5 2.5 0 0 0 .385-.197l.145-.104 8.193-8.193 2.924-2.808 8.106 8.106 2.837 2.912a1 1 0 0 0 .145.101 2.5 2.5 0 0 0 .385.2q.31.128.637.194c.255.052.556.087.903.087.3 0 .608-.03.955-.087a7 7 0 0 0 1.138-.301 10 10 0 0 0 1.32-.579q.78-.411 1.503-.918l-6.508-6.37 1.2-1.2 5.63 5.63 3.283 3.254m-.07-33.96 15.998 27.714L48.003 59.71H15.996L-.002 31.997 15.996 4.283z"/>
      <path d="m38.02 30.65-4.262-4.256.304-.304 4.3 4.244z"/>
    </svg>
    <p class="text-base font-700 mt-4 mb-1">Alpine</p>
    <p class="text-xs opacity-60 m-0">the featherweight</p>
  </div>
</div>
</template>

</v-switch>

</div>

<div v-click="1" class="text-center text-base opacity-80">
An operating system <b>nobody owns</b>, born 1991.
</div>

<div v-click="2" class="mark-safe mt-3 text-center text-base opacity-80">
Distros are its flavours; today's demos run on <span v-mark="{ at: 3, color: '#d97706', type: 'highlight' }">Ubuntu</span>.
</div>

<!--
An OS is the manager between your apps and the machine. Windows and macOS you know; Linux is the third sibling that quietly took over the back rooms of the internet.

[click] Nobody owns it: thousands of people build it together in the open.

[click] Don't be confused by the many names. Ubuntu, Red Hat, Arch, Alpine: all Linux inside.

[click] Everything today runs on Ubuntu, the one you'll most likely start with.
-->
