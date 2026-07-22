---
layout: default
transition: fade-out
---

<script setup>
const base = import.meta.env.BASE_URL
</script>

### Your trainer

<div class="relative w-full h-[390px] mt-2">

  <!-- Center: photo + name -->
  <div class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center z-10">
    <div v-motion
         :initial="{ scale: 0.8, opacity: 0 }"
         :enter="{ scale: 1, opacity: 1, transition: { type: 'spring', stiffness: 120, delay: 100 } }">
      <img :src="`${base}photos/ariff.png`"
           class="w-40 h-40 rounded-full object-cover border-4 border-blue-400/40 shadow-lg mx-auto" />
      <a href="https://trainer.opariffazman.com" target="_blank"
         class="inline-flex items-center gap-1.5 mt-3 text-xl !border-none group">
        Ts. Ariff Azman
        <mdi-open-in-new class="text-sm opacity-50 group-hover:opacity-100 transition-opacity" />
      </a>
    </div>
  </div>

  <!-- Orbit badges: neutral pills, colored icons -->
  <div v-motion
       :initial="{ x: -50, y: -30, opacity: 0 }"
       :enter="{ x: 0, y: 0, opacity: 1, transition: { type: 'spring', stiffness: 100, delay: 250 } }"
       class="absolute left-[3%] top-[8%] flex items-center gap-2 bg-gray-500/10 rounded-full px-4 py-2">
    <mdi-school class="text-blue-600 dark:text-blue-400 text-xl flex-shrink-0" />
    <span class="text-sm">BCS software engineering</span>
  </div>

  <div v-motion
       :initial="{ x: 50, y: -30, opacity: 0 }"
       :enter="{ x: 0, y: 0, opacity: 1, transition: { type: 'spring', stiffness: 100, delay: 350 } }"
       class="absolute right-[3%] top-[8%] flex items-center gap-2 bg-gray-500/10 rounded-full px-4 py-2">
    <mdi-clock-outline class="text-green-600 dark:text-green-400 text-xl flex-shrink-0" />
    <span class="text-sm">10 years in tech</span>
  </div>

  <div v-motion
       :initial="{ x: -60, opacity: 0 }"
       :enter="{ x: 0, opacity: 1, transition: { type: 'spring', stiffness: 100, delay: 450 } }"
       class="absolute left-[3%] top-1/2 -translate-y-1/2 flex items-center gap-2 bg-gray-500/10 rounded-full px-4 py-2">
    <mdi-certificate class="text-amber-600 dark:text-amber-400 text-xl flex-shrink-0" />
    <span class="text-sm">HRD Corp accredited trainer</span>
  </div>

  <div v-motion
       :initial="{ x: 60, opacity: 0 }"
       :enter="{ x: 0, opacity: 1, transition: { type: 'spring', stiffness: 100, delay: 450 } }"
       class="absolute right-[3%] top-1/2 -translate-y-1/2 flex items-center gap-2 bg-gray-500/10 rounded-full px-4 py-2">
    <mdi-badge-account class="text-purple-600 dark:text-purple-400 text-xl flex-shrink-0" />
    <span class="text-sm">MBOT professional technologist</span>
  </div>

  <div v-motion
       :initial="{ x: -50, y: 30, opacity: 0 }"
       :enter="{ x: 0, y: 0, opacity: 1, transition: { type: 'spring', stiffness: 100, delay: 550 } }"
       class="absolute left-[3%] bottom-[8%] flex items-center gap-2 bg-gray-500/10 rounded-full px-4 py-2">
    <mdi-rocket-launch class="text-red-600 dark:text-red-400 text-xl flex-shrink-0" />
    <span class="text-sm">Founder &middot; Double A Digital</span>
  </div>

  <div v-motion
       :initial="{ x: 50, y: 30, opacity: 0 }"
       :enter="{ x: 0, y: 0, opacity: 1, transition: { type: 'spring', stiffness: 100, delay: 550 } }"
       class="absolute right-[3%] bottom-[8%] flex items-center gap-2 bg-gray-500/10 rounded-full px-4 py-2">
    <mdi-account-group class="text-cyan-600 dark:text-cyan-400 text-xl flex-shrink-0" />
    <span class="text-sm">150+ people trained</span>
  </div>

</div>

<!--
- 30 seconds max; the demos carry the credibility
- mention: I teach the full DevOps bootcamp; today is a free taster of its Docker session
-->
