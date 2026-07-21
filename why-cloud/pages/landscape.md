---
layout: default
transition: slide-left
clicks: 3
---

<script setup>
const base = import.meta.env.BASE_URL
</script>

### The big landlords

<div class="pop grid grid-cols-3 gap-x-8 gap-y-8 mt-8 max-w-3xl mx-auto text-center">

<div v-click="1">
  <div class="h-12 flex items-center justify-center"><logos-aws class="text-5xl dark:invert dark:hue-rotate-180" /></div>
  <p class="text-sm font-700 mt-3 mb-0">AWS</p>
</div>

<div v-click="1">
  <div class="h-12 flex items-center justify-center"><logos-microsoft-azure class="text-4xl" /></div>
  <p class="text-sm font-700 mt-3 mb-0">Microsoft Azure</p>
</div>

<div v-click="1">
  <div class="h-12 flex items-center justify-center"><logos-google-cloud class="text-4xl" /></div>
  <p class="text-sm font-700 mt-3 mb-0">Google Cloud</p>
</div>

<div v-click="2">
  <div class="h-12 flex items-center justify-center"><logos-digital-ocean class="text-4xl" /></div>
  <p class="text-sm font-700 mt-3 mb-0">DigitalOcean</p>
</div>

<div v-click="2">
  <div class="h-12 flex items-center justify-center"><img :src="`${base}logos/tencent-cloud.svg`" class="max-h-10 max-w-[130px] w-auto" alt="" /></div>
  <p class="text-sm font-700 mt-3 mb-0">Tencent Cloud</p>
</div>

<div v-click="2">
  <div class="h-12 flex items-center justify-center"><img :src="`${base}logos/alibaba-cloud.svg`" class="max-h-8 max-w-[150px] w-auto" alt="" /></div>
  <p class="text-sm font-700 mt-3 mb-0">Alibaba Cloud</p>
</div>

</div>

<div v-click="3" class="mark-safe mt-8 text-center text-lg opacity-85">
Six landlords rent <span v-mark="{ at: 3, color: '#ea580c', type: 'underline' }">the same thing</span>.
</div>

<!--
The clouds themselves: the landlords renting out those datacenters. Everyone knows Amazon's AWS, Microsoft's Azure and Google Cloud.

[click] DigitalOcean is the smallest and simplest of these, a favourite for people just starting out.
[click] closer to home, Tencent Cloud and Alibaba Cloud are the giants of Asia, with datacenters in the region and big share in China. A.M.S: same rental shop, different signboard.
[click] the point: six different landlords, all renting the same thing, a computer by the hour.

ASK: before naming it, get them guessing. Say: "The National Training Week page you registered on, the one behind the poster QR: which of these clouds do you think is hosting it? Type your guess in the chat." Let the guesses pile up, read a few back. Then reveal: it is on GitHub Pages, the free publishing tool from Tuesday's session, not a paid server at all. And GitHub is owned by Microsoft and runs on cloud, so even our little page sits on someone else's computers. This ties the whole week together and lands one slide early, keeping the room active.
-->
