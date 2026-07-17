<!-- ARCHETYPE: quadrants — four parallel facts, boxless; icons carry the weight.
     Budgets: exactly 4 items · HEAD ≤3 words · LINE ≤5 words · one payoff sentence allowed.
     All four icons share one DIAG color (the segment's color).
     Reference: why-linux/pages/free.md -->
---
layout: default
transition: slide-left
---

<p class="eyebrow font-mono"><span class="text-amber-600 dark:text-amber-400">part {{N}}</span> &middot; {{SEGMENT_THEME}}</p>

### {{TITLE ≤4 words}}

<div class="pop grid grid-cols-2 gap-x-16 gap-y-12 mt-12 max-w-3xl mx-auto">

<div v-click="1" class="flex items-start gap-4">
  <mdi-{{ICON_1}} class="text-3xl text-{{COLOR}}-600 dark:text-{{COLOR}}-400 flex-shrink-0 mt-1" />
  <div>
    <p class="font-700 text-lg m-0">{{HEAD_1 ≤3 words}}</p>
    <p class="text-sm opacity-70 mt-1 mb-0">{{LINE_1 ≤5 words}}</p>
  </div>
</div>

<!-- …items 2-4… -->

</div>

<div v-click="5" class="mt-12 text-center text-base opacity-80">
{{PAYOFF: one factual sentence, ≤10 words}}
</div>

<!--
{{SPOKEN_SCRIPT: the full sentence behind each quadrant}}
-->
