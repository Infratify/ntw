---
layout: default
transition: fade-out
---

### What you saw

<div class="grid grid-cols-3 gap-10 mt-16 max-w-3xl mx-auto text-center">

<div v-click="1">
  <svg viewBox="0 0 24 24" class="w-12 h-12 mx-auto">
    <path class="check-path" d="M4.5 12.5 L10 18 L19.5 6.5" fill="none" stroke="#16a34a" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
  </svg>
  <p class="text-lg font-700 mt-4 mb-1">no hardware</p>
  <p class="text-sm opacity-65 m-0">a server, rented live</p>
</div>

<div v-click="2">
  <svg viewBox="0 0 24 24" class="w-12 h-12 mx-auto">
    <path class="check-path" d="M4.5 12.5 L10 18 L19.5 6.5" fill="none" stroke="#16a34a" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
  </svg>
  <p class="text-lg font-700 mt-4 mb-1">scales instantly</p>
  <p class="text-sm opacity-65 m-0">two cores became eight</p>
</div>

<div v-click="3">
  <svg viewBox="0 0 24 24" class="w-12 h-12 mx-auto">
    <path class="check-path" d="M4.5 12.5 L10 18 L19.5 6.5" fill="none" stroke="#16a34a" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
  </svg>
  <p class="text-lg font-700 mt-4 mb-1">goes global</p>
  <p class="text-sm opacity-65 m-0">answered on five continents</p>
</div>

</div>

<!--
Recap by pointing back at what actually happened on screen: a machine that did not exist at 10:30 was rented in a datacenter overseas for about a minute of waiting and sen per hour; it served Tuesday's stall page; it was stopped, given four times the cores, and started again with everything intact; and through Cloudflare it answered pings from five continents in milliseconds. Keep it factual, no victory lap. The whole session's rental bill is under two ringgit. Then pivot: "so how do you start tonight?"
-->
