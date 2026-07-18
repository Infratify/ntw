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
  <p class="text-lg font-700 mt-4 mb-1">perfectly repeatable</p>
  <p class="text-sm opacity-65 m-0">the same three resources</p>
</div>

<div v-click="2">
  <svg viewBox="0 0 24 24" class="w-12 h-12 mx-auto">
    <path class="check-path" d="M4.5 12.5 L10 18 L19.5 6.5" fill="none" stroke="#16a34a" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
  </svg>
  <p class="text-lg font-700 mt-4 mb-1">rebuild anytime</p>
  <p class="text-sm opacity-65 m-0">destroyed, rebuilt in minutes</p>
</div>

<div v-click="3">
  <svg viewBox="0 0 24 24" class="w-12 h-12 mx-auto">
    <path class="check-path" d="M4.5 12.5 L10 18 L19.5 6.5" fill="none" stroke="#16a34a" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
  </svg>
  <p class="text-lg font-700 mt-4 mb-1">fully automated</p>
  <p class="text-sm opacity-65 m-0">one edit, three servers</p>
</div>

</div>

<!--
Recap by pointing back at what actually happened on screen: the folder was read, rehearsed with plan, and applied, and the same three resources came out every time; the environment was destroyed live, the console emptied, and one command brought it back in about two minutes; and a one-number edit became two extra servers before the whole fleet was removed for the weekend. Keep it factual, no victory lap. Then pivot: "so how do you start tonight?"
-->
