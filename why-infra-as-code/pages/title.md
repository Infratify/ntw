---
class: text-center
transition: fade-out
---

<script setup>
const base = import.meta.env.BASE_URL
</script>

<div v-motion :initial="{ y: -14, opacity: 0 }" :enter="{ y: 0, opacity: 1, transition: { duration: 500 } }" class="flex justify-center mb-10">
  <img :src="`${base}logo.svg`" class="h-10 dark:hidden" alt="Infratify" />
  <img :src="`${base}logo-dark.svg`" class="h-10 hidden dark:block" alt="Infratify" />
</div>

<div v-motion :initial="{ y: 22, opacity: 0 }" :enter="{ y: 0, opacity: 1, transition: { type: 'spring', stiffness: 90, delay: 150 } }">

# Why Infrastructure as Code?

</div>

<div v-motion :initial="{ opacity: 0 }" :enter="{ opacity: 1, transition: { delay: 450, duration: 500 } }" class="mt-5 text-lg opacity-60">
Friday 24 July 2026 &middot; 10:00 am MYT
</div>

<div v-motion :initial="{ opacity: 0 }" :enter="{ opacity: 1, transition: { delay: 700, duration: 500 } }" class="mt-9 text-xl">
<span class="text-purple-600 dark:text-purple-400 font-600">perfectly repeatable</span>
<span class="opacity-40 mx-2">&middot;</span>
<span class="text-purple-600 dark:text-purple-400 font-600">rebuild anytime</span>
<span class="opacity-40 mx-2">&middot;</span>
<span class="text-purple-600 dark:text-purple-400 font-600">fully automated</span>
</div>

<div v-motion :initial="{ opacity: 0 }" :enter="{ opacity: 1, transition: { delay: 950, duration: 500 } }" class="mt-9 text-lg opacity-75">
<i>Ts. Ariff Azman &middot; Infratify</i>
</div>

<div v-motion :initial="{ opacity: 0 }" :enter="{ opacity: 1, transition: { delay: 1200, duration: 500 } }" class="mt-8 text-sm opacity-50 font-mono">
for beginners &middot; nothing to install &middot; just watch
</div>

<!--
Welcome everyone as they join. Note the earlier start: today runs at 10:00 am, half an hour before the rest of the week, and it is the last session of the five. Housekeeping: about 1h45 of sharing and live demos, then Q&A. Questions go in the Zoom chat anytime; I batch them at each break. Nothing to install; everything happens on my screen.
-->
