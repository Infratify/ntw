---
class: text-center
transition: fade-out
---

<script setup>
const base = import.meta.env.BASE_URL
</script>

<div v-motion :initial="{ y: -14, opacity: 0 }" :enter="{ y: 0, opacity: 1, transition: { duration: 500 } }" class="flex justify-center mb-8">
  <img :src="`${base}logo.svg`" class="h-10 dark:hidden" alt="Infratify" />
  <img :src="`${base}logo-dark.svg`" class="h-10 hidden dark:block" alt="Infratify" />
</div>

<div v-motion :initial="{ scale: 0.7, opacity: 0 }" :enter="{ scale: 1, opacity: 1, transition: { type: 'spring', stiffness: 90, delay: 150 } }" class="flex justify-center mb-6">
  <mdi-linux class="text-8xl text-amber-600 dark:text-amber-400 opacity-80" />
</div>

<div v-motion :initial="{ y: 22, opacity: 0 }" :enter="{ y: 0, opacity: 1, transition: { type: 'spring', stiffness: 90, delay: 350 } }">

# Why Linux?

</div>

<div class="mt-9 text-sm opacity-50 font-mono">
<span class="type-mount"><span class="type-mount-text" style="animation-delay: 650ms">devops for beginners</span></span>
</div>

<!--
Welcome everyone as they join. Housekeeping: ~1h45 of sharing and live demos, then Q&A. Questions go in the Zoom chat anytime; I batch them at each break.
-->
