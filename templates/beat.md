<!-- ARCHETYPE: beat — a full-screen typographic moment (a fact, a number, a pause).
     Budgets: BIG_LINE ≤4 words · each SUB_LINE ≤7 words · max 2 sub-lines · no icons, no boxes.
     Reference: why-linux/pages/rm0.md -->
---
layout: fact
transition: fade-out
---

<div v-motion :initial="{ scale: 0.4, opacity: 0 }" :enter="{ scale: 1, opacity: 1, transition: { type: 'spring', stiffness: 80, delay: 200 } }">

# {{BIG_LINE}}

</div>

<div v-motion :initial="{ opacity: 0 }" :enter="{ opacity: 1, transition: { delay: 700, duration: 500 } }" class="text-2xl opacity-70 mt-2">
{{SUB_LINE_1}}
</div>

<div v-motion :initial="{ opacity: 0 }" :enter="{ opacity: 1, transition: { delay: 1100, duration: 500 } }" class="mt-8 text-lg opacity-60">
{{SUB_LINE_2}}
</div>

<!--
{{SPOKEN_SCRIPT: everything the trainer says over this beat, in full sentences}}
-->
