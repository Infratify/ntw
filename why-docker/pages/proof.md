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
  <p class="text-lg font-700 mt-4 mb-1">works everywhere</p>
  <p class="text-sm opacity-65 m-0">one command, one server</p>
</div>

<div v-click="2">
  <svg viewBox="0 0 24 24" class="w-12 h-12 mx-auto">
    <path class="check-path" d="M4.5 12.5 L10 18 L19.5 6.5" fill="none" stroke="#16a34a" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
  </svg>
  <p class="text-lg font-700 mt-4 mb-1">ship anywhere</p>
  <p class="text-sm opacity-65 m-0">built here, ran there</p>
</div>

<div v-click="3">
  <svg viewBox="0 0 24 24" class="w-12 h-12 mx-auto">
    <path class="check-path" d="M4.5 12.5 L10 18 L19.5 6.5" fill="none" stroke="#16a34a" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
  </svg>
  <p class="text-lg font-700 mt-4 mb-1">blazingly fast</p>
  <p class="text-sm opacity-65 m-0">three copies in seconds</p>
</div>

</div>

<!--
Recap by pointing back at what actually happened on screen: nginx served from a machine that never had nginx installed, one typed command; the stall page was built into an image on the laptop, pushed once, and pulled down running on the cloud server, identical; and three copies started on ports 8081 to 8083 with the stopwatch reading well under two seconds each, then one line removed them all. Keep it factual, no victory lap. Then pivot: "so how do you start tonight?"
-->
