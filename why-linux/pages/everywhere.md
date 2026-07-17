---
layout: default
transition: slide-left
---

<p class="eyebrow font-mono"><span class="text-amber-600 dark:text-amber-400">part 2</span> &middot; powers everything</p>

### Linux around you

<div class="pop grid grid-cols-4 gap-x-6 gap-y-8 mt-10 max-w-3xl mx-auto text-center">

<div v-click="1">
  <div class="medallion bg-cyan-500/10"><mdi-cellphone class="text-3xl text-cyan-600 dark:text-cyan-400" /></div>
  <p class="text-sm font-600 mt-3 m-0">Android phones</p>
</div>

<div v-click="1">
  <div class="medallion bg-cyan-500/10"><mdi-router-wireless class="text-3xl text-cyan-600 dark:text-cyan-400" /></div>
  <p class="text-sm font-600 mt-3 m-0">home routers</p>
</div>

<div v-click="2">
  <div class="medallion bg-cyan-500/10"><mdi-television class="text-3xl text-cyan-600 dark:text-cyan-400" /></div>
  <p class="text-sm font-600 mt-3 m-0">smart TVs</p>
</div>

<div v-click="2">
  <div class="medallion bg-cyan-500/10"><mdi-car-electric class="text-3xl text-cyan-600 dark:text-cyan-400" /></div>
  <p class="text-sm font-600 mt-3 m-0">modern cars</p>
</div>

<div v-click="3">
  <div class="medallion bg-blue-500/10"><mdi-server class="text-3xl text-blue-600 dark:text-blue-400" /></div>
  <p class="text-sm font-600 mt-3 m-0">web servers</p>
</div>

<div v-click="3">
  <div class="medallion bg-blue-500/10"><mdi-cloud-outline class="text-3xl text-blue-600 dark:text-blue-400" /></div>
  <p class="text-sm font-600 mt-3 m-0">the big clouds</p>
</div>

<div v-click="4">
  <div class="medallion bg-amber-500/10"><mdi-space-station class="text-3xl text-amber-600 dark:text-amber-400" /></div>
  <p class="text-sm font-600 mt-3 m-0">the Space Station</p>
</div>

<div v-click="4">
  <div class="medallion bg-amber-500/10"><mdi-quadcopter class="text-3xl text-amber-600 dark:text-amber-400" /></div>
  <p class="text-sm font-600 mt-3 m-0">a Mars helicopter</p>
</div>

</div>

<div v-click="5" class="mark-safe mt-10 text-center text-lg opacity-85">
You've used Linux for years <span v-mark="{ at: 5, color: '#d97706', type: 'underline' }">without ever seeing a login screen</span>.
</div>

<!--
Fun facts to narrate: ISS crew laptops moved to Debian in 2013; Ingenuity, the Mars helicopter, flew on Linux; SpaceX rockets run it too. Android ships a Linux kernel, roughly 7 in 10 smartphones worldwide.
-->
