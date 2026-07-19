<!-- ARCHETYPE: title — deck opener; typographic, no containers.
     Budgets: one big topic icon (mdi variant, accent-colored) is the only graphic, it
     is the sole carrier of "what this deck is about" · benefit triad and trainer name
     live on the plan/trainer slides, not here; date/time is dropped entirely (Zoom
     invite already carries it) · lowercase mono footer types itself on mount
     (.type-mount, no v-click) · logo swaps by color scheme.
     Reference: why-linux/pages/title.md -->
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
  <{{TOPIC_ICON}} class="text-8xl {{TOPIC_COLOR}} opacity-80" />
</div>

<div v-motion :initial="{ y: 22, opacity: 0 }" :enter="{ y: 0, opacity: 1, transition: { type: 'spring', stiffness: 90, delay: 350 } }">

# {{SESSION_TITLE}}

</div>

<div class="mt-9 text-sm opacity-50 font-mono">
<span class="type-mount"><span class="type-mount-text" style="animation-delay: 650ms">devops for beginners</span></span>
</div>

<!--
{{HOUSEKEEPING: welcome, session length, where questions go}}
-->
