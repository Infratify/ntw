---
layout: default
transition: slide-left
---

### Where the box runs

<div class="pop grid grid-cols-4 gap-x-6 gap-y-6 mt-6 max-w-3xl mx-auto text-center">

<div v-click="1">
  <logos-microsoft-windows-icon class="text-5xl mx-auto" />
  <p class="text-base font-700 mt-3 mb-1">Windows</p>
  <p class="text-xs opacity-60 m-0">your laptop</p>
</div>

<div v-click="1">
  <logos-apple class="text-5xl mx-auto dark:invert" />
  <p class="text-base font-700 mt-3 mb-1">macOS</p>
  <p class="text-xs opacity-60 m-0">your Mac too</p>
</div>

<div v-click="2">
  <logos-linux-tux class="text-5xl mx-auto" />
  <p class="text-base font-700 mt-3 mb-1">Linux</p>
  <p class="text-xs opacity-60 m-0">every server</p>
</div>

<div v-click="2">
  <logos-raspberry-pi class="text-5xl mx-auto" />
  <p class="text-base font-700 mt-3 mb-1">Raspberry Pi</p>
  <p class="text-xs opacity-60 m-0">a palm-size computer</p>
</div>

<div v-click="3">
  <logos-aws class="text-5xl mx-auto dark:invert" />
  <p class="text-base font-700 mt-3 mb-1">AWS</p>
  <p class="text-xs opacity-60 m-0">Wednesday's cloud</p>
</div>

<div v-click="3">
  <logos-google-cloud class="text-5xl mx-auto" />
  <p class="text-base font-700 mt-3 mb-1">Google Cloud</p>
  <p class="text-xs opacity-60 m-0">same box there</p>
</div>

<div v-click="4">
  <logos-microsoft-azure class="text-5xl mx-auto" />
  <p class="text-base font-700 mt-3 mb-1">Azure</p>
  <p class="text-xs opacity-60 m-0">Microsoft's cloud</p>
</div>

<div v-click="4">
  <logos-chrome class="text-5xl mx-auto" />
  <p class="text-base font-700 mt-3 mb-1">the browser</p>
  <p class="text-xs opacity-60 m-0">no install at all</p>
</div>

</div>

<div v-click="5" class="mark-safe mt-8 text-center text-lg opacity-85">
One image runs on <span v-mark="{ at: 5, color: '#2563eb', type: 'underline' }">all of these</span>.
</div>

<!--
The point of the box is that the machine stops mattering. Same image, top to bottom of this wall.

[click] Docker Desktop, a free app, puts the engine on Windows and Mac laptops; that is how the build demo runs later today.
[click] Linux servers run containers natively, and a palm-sized Raspberry Pi, a computer about the price of a family dinner out, runs the very same images.
[click] every big cloud takes the same box with zero changes: the AWS machine we launched Wednesday,
[click] Google's cloud and Microsoft's too. And a free playground site runs docker entirely in a browser tab; it is on the last slide of today's deck, so nobody needs to note anything down yet.
[click] one image, no versions of it per machine. That is the "works everywhere" from the banner, and the next demo ships one for real.
-->
