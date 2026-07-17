<!-- ARCHETYPE: title — deck opener; typographic, no containers.
     Budgets: the three banner benefit words come verbatim from README's poster copy ·
     date line and mono footer line are fixed patterns · logo swaps by color scheme.
     Reference: why-linux/pages/title.md -->
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

# {{SESSION_TITLE}}

</div>

<div v-motion :initial="{ opacity: 0 }" :enter="{ opacity: 1, transition: { delay: 450, duration: 500 } }" class="mt-5 text-lg opacity-60">
{{DAY_DATE}} &middot; {{TIME}} MYT
</div>

<div v-motion :initial="{ opacity: 0 }" :enter="{ opacity: 1, transition: { delay: 700, duration: 500 } }" class="mt-9 text-xl">
<span class="text-amber-600 dark:text-amber-400 font-600">{{BENEFIT_1}}</span>
<span class="opacity-40 mx-2">&middot;</span>
<span class="text-amber-600 dark:text-amber-400 font-600">{{BENEFIT_2}}</span>
<span class="opacity-40 mx-2">&middot;</span>
<span class="text-amber-600 dark:text-amber-400 font-600">{{BENEFIT_3}}</span>
</div>

<div v-motion :initial="{ opacity: 0 }" :enter="{ opacity: 1, transition: { delay: 950, duration: 500 } }" class="mt-9 text-lg opacity-75">
<i>Ts. Ariff Azman &middot; Infratify</i>
</div>

<div v-motion :initial="{ opacity: 0 }" :enter="{ opacity: 1, transition: { delay: 1200, duration: 500 } }" class="mt-8 text-sm opacity-50 font-mono">
for beginners &middot; nothing to install &middot; just watch
</div>

<!--
{{HOUSEKEEPING: welcome, session length, where questions go}}
-->
