<!-- ARCHETYPE: map — the session plan (ghost-numeral variant) or the closing recap
     (check-stroke variant: swap the numeral span for the check SVG in why-linux/pages/proof.md).
     Budgets: 3 items · LABEL ≤3 words · CAPTION ≤4 words · payoff sentence optional (≤8 words, factual).
     Never narrate the deck itself ("we promised", "we test each one") — state what happens.
     Reference: why-linux/pages/plan.md, proof.md -->
---
layout: default
transition: slide-left
---

### {{TITLE ≤4 words}}

<div class="pop grid grid-cols-3 gap-8 mt-16 max-w-3xl mx-auto text-center">

<div v-click="1" class="relative pt-6">
  <span class="ghost-num font-mono">01</span>
  <mdi-{{ICON_1}} class="text-4xl text-amber-600 dark:text-amber-400 mx-auto" />
  <p class="text-lg font-700 mt-3 mb-1">{{LABEL_1}}</p>
  <p class="text-sm opacity-60 m-0">{{CAPTION_1}}</p>
</div>

<div v-click="2" class="relative pt-6">
  <span class="ghost-num font-mono">02</span>
  <mdi-{{ICON_2}} class="text-4xl text-amber-600 dark:text-amber-400 mx-auto" />
  <p class="text-lg font-700 mt-3 mb-1">{{LABEL_2}}</p>
  <p class="text-sm opacity-60 m-0">{{CAPTION_2}}</p>
</div>

<div v-click="3" class="relative pt-6">
  <span class="ghost-num font-mono">03</span>
  <mdi-{{ICON_3}} class="text-4xl text-amber-600 dark:text-amber-400 mx-auto" />
  <p class="text-lg font-700 mt-3 mb-1">{{LABEL_3}}</p>
  <p class="text-sm opacity-60 m-0">{{CAPTION_3}}</p>
</div>

</div>

<div v-click="4" class="mt-14 text-center text-base opacity-80">
{{PAYOFF: one factual sentence, ≤8 words, or delete this div}}
</div>

<!--
{{SPOKEN_SCRIPT incl. housekeeping the audience hears but never reads}}
-->
