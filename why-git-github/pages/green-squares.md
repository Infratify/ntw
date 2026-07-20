---
layout: default
transition: slide-left
---

<script setup>
// Real contribution levels for github.com/opariffazman, 26 weeks to 2026-07-20,
// scraped from the profile and frozen here so the slide never depends on network.
// Row-major: one row per weekday, 26 columns of weeks.
const LEVELS = ['#ebedf0', '#9be9a8', '#40c463', '#30a14e', '#216e39']
const cells = [
  1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 2, 1, 2, 1, 1, 1, 1, 1, 2, 2, 2, 1, 2, 2, 1, 1,
  1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 2, 1, 4, 1, 1, 1, 2, 1, 3, 1, 3, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 1, 1, 1, 0, 2, 1, 1, 2, 0, 0, 1, 1, 1, 2, 1, 4, 2, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 2, 2, 1, 0, 4, 3, 1, 3, 1, 3, 1, 1, 1, 1, 1,
  1, 2, 0, 0, 1, 1, 1, 1, 0, 1, 0, 3, 0, 1, 1, 3, 3, 4, 1, 2, 1, 1, 0, 1, 2, 1,
  1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 2, 0, 1, 2, 4, 2, 1, 3, 1, 3, 1, 1, 2, 1,
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 2, 0, 2, 1, 2, 1, 1, 1, 1, 2, 1, 2, 1, 1,
]
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
        <p class="font-700 text-sm m-0 flex items-center gap-2">
          Ariff Azman
          <a href="https://github.com/opariffazman" target="_blank" class="inline-flex items-center gap-1 font-mono text-xs font-400 !text-blue-700 !border-none group">
            github.com/opariffazman
            <mdi-open-in-new class="text-[0.7rem] opacity-50 group-hover:opacity-100 transition-opacity" />
          </a>
        </p>
        <p class="text-xs opacity-60 m-0">126 repositories &middot; joined 2015</p>
      </div>
    </div>
    <div v-click="2" class="grid gap-[3px] justify-center" style="grid-template-columns: repeat(26, 11px)">
      <span v-for="(c, i) in cells" :key="i" class="w-[11px] h-[11px] rounded-[2px]" :style="{ background: LEVELS[c] }" />
    </div>
    <div v-click="3" class="text-xs opacity-60 text-center">
      8,214 contributions in the last year
    </div>
  </div>
</div>
</div>

<div v-click="4" class="mark-safe mt-6 text-center text-lg opacity-85">
One square per day; <span v-mark="{ at: 4, color: '#16a34a', type: 'highlight' }">greener</span> means more commits.
</div>

<!--
Setup: part 3 = what all this work adds up to for YOU.

- [click] every GitHub account gets a public profile page listing your public repos
  - this is mine; address = github.com + username; opens without logging in; drop the link in the chat
- [click] the grid is the famous part: one square for every day of the past year; my real graph, not a drawing
- [click] the counter totals a year of my saved work; fills up by itself as you commit, nothing extra to maintain

STORY (60 to 90 seconds):
- land = a public profile with dated commits is proof a CV cannot fake
- pick: a real hiring-side or job-hunting moment of your own
- beats: the claim on paper, then what the profile showed (or failed to show), then which of the two decided it
- no hiring story yours to tell? use the day your own graph made a skill visible to someone who mattered
- close by naming the point

- [click] a square turns green on any day you committed; darker green = more
  - why it matters for career-switchers: many tech recruiters and hiring managers open a candidate's GitHub
  - a CV says "I'm learning web development"; a profile with three months of commits + readable messages SHOWS it, with dates
  - account is free; everything committed from tonight onward starts painting this graph
-->
