---
layout: default
transition: slide-left
---

<script setup>
// Deterministic mock of a GitHub contribution graph: 26 weeks x 7 days,
// weekday-weighted so it reads like a real habit, identical on every render.
const LEVELS = ['#ebedf0', '#9be9a8', '#40c463', '#30a14e', '#216e39']
const cells = Array.from({ length: 182 }, (_, i) => {
  const day = Math.floor(i / 26) // grid is row-major: one row per weekday
  const week = i % 26
  const h = (week * 37 + day * 13 + ((week * (day + 3)) % 11) * 7) % 29
  const quiet = day >= 5 ? 9 : 0 // weekends mostly rest
  const v = h - quiet
  return v < 8 ? 0 : v < 15 ? 1 : v < 21 ? 2 : v < 26 ? 3 : 4
})
</script>

<p class="eyebrow font-mono"><span class="text-red-600 dark:text-red-400">part 3</span> &middot; career proof</p>

### The green squares

<div class="max-w-2xl mx-auto mt-4">
<div class="rounded-xl overflow-hidden border border-gray-400/40 shadow-lg bg-gray-100 text-gray-700">
  <div class="flex items-center gap-1.5 px-4 py-2.5 bg-gray-200 border-b border-gray-300">
    <span class="w-3 h-3 rounded-full bg-red-400"></span>
    <span class="w-3 h-3 rounded-full bg-yellow-400"></span>
    <span class="w-3 h-3 rounded-full bg-green-400"></span>
    <span class="ml-3 text-xs text-gray-500">GitHub &middot; your profile</span>
  </div>
  <div class="px-6 py-5 space-y-4">
    <div v-click="1" class="flex items-center gap-3">
      <mdi-account-circle class="text-4xl text-gray-400 flex-shrink-0" />
      <div>
        <p class="font-700 text-sm m-0">Ariff Azman</p>
        <p class="text-xs opacity-60 m-0">14 repositories &middot; joined 2016</p>
      </div>
    </div>
    <div v-click="2" class="grid gap-[3px] justify-center" style="grid-template-columns: repeat(26, 11px)">
      <span v-for="(c, i) in cells" :key="i" class="w-[11px] h-[11px] rounded-[2px]" :style="{ background: LEVELS[c] }" />
    </div>
    <div v-click="3" class="text-xs opacity-60 text-center">
      1,247 contributions in the last year
    </div>
  </div>
</div>
</div>

<div v-click="4" class="mark-safe mt-6 text-center text-lg opacity-85">
One square per day; <span v-mark="{ at: 4, color: '#16a34a', type: 'highlight' }">greener</span> means more commits.
</div>

<!--
Part 3 is about what all this work adds up to for YOU.

[click] every GitHub account gets a public profile page, listing the repos you have made public.
[click] and this grid is the famous part: one square for every day of the past year.
[click] the counter underneath totals a year of your saved work. It fills up by itself as you commit; there is nothing extra to maintain.
[click] a square turns green on any day you committed, and darker green means more. Why this matters for career-switchers: many tech recruiters and hiring managers open a candidate's GitHub. A CV says "I'm learning web development"; a profile with three months of commits and readable messages shows it, with dates. Your account is free, and everything committed from tonight onward starts painting this graph.
-->
