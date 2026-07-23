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
  <mdi-terraform class="text-8xl text-purple-600 dark:text-purple-400 opacity-80" />
</div>

<div v-motion :initial="{ y: 22, opacity: 0 }" :enter="{ y: 0, opacity: 1, transition: { type: 'spring', stiffness: 90, delay: 350 } }">

# Why Infrastructure as Code?

</div>

<div class="mt-9 text-sm opacity-50 font-mono">
<span class="type-mount"><span class="type-mount-text" style="animation-delay: 650ms">devops for beginners</span></span>
</div>

<!--
Welcome everyone as they join. Note the earlier start: today runs at 10:00 am, half an hour before the rest of the week, and it is the last session of the five. Housekeeping: about 1h45 of sharing and live demos, then Q&A. Questions go in the Zoom chat anytime; I batch them at each break. Nothing to install; everything happens on my screen.

ASK: as they settle in, a pulse check, "type 1 in the chat if you have never typed a command into a black terminal window." Read the flood of 1s back and reassure them: today is built for exactly that person, nobody needs to memorise anything.
-->
