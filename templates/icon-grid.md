<!-- ARCHETYPE: icon-grid — "X is all around you": circular medallions, no rectangles.
     Budgets: 4-8 items · CAPTION ≤3 words · group medallion colors by DIAG meaning
     (cyan = the audience's own stuff, blue = remote infra, amber = the wow items).
     Reveal in pairs (two items per click). One payoff sentence allowed.
     Reference: why-linux/pages/everywhere.md -->
---
layout: default
transition: slide-left
---

<p class="eyebrow font-mono"><span class="text-amber-600 dark:text-amber-400">part {{N}}</span> &middot; {{SEGMENT_THEME}}</p>

### {{TITLE ≤4 words}}

<div class="pop grid grid-cols-4 gap-x-6 gap-y-8 mt-10 max-w-3xl mx-auto text-center">

<div v-click="1">
  <div class="medallion bg-{{COLOR}}-500/10"><mdi-{{ICON}} class="text-3xl text-{{COLOR}}-600 dark:text-{{COLOR}}-400" /></div>
  <p class="text-sm font-600 mt-3 m-0">{{CAPTION ≤3 words}}</p>
</div>

<!-- …repeat per item, two share a v-click index… -->

</div>

<div v-click="{{LAST}}" class="mark-safe mt-10 text-center text-lg opacity-85">
{{PAYOFF: one factual sentence; v-mark underline the key span}}
</div>

<!--
{{SPOKEN_SCRIPT: the story/fun-fact behind each medallion}}
-->
