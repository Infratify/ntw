<!-- ARCHETYPE: thanks — Q&A invite + next-session plug + the single soft CTA (the NTW hub).
     Budgets: no bootcamp pitch, ever · every URL is a styled <a href> · ≤1 prose segment.
     Reference: why-linux/pages/thanks.md -->
---
layout: statement
transition: fade-out
---

<div v-motion :initial="{ y: 18, opacity: 0 }" :enter="{ y: 0, opacity: 1, transition: { type: 'spring', stiffness: 90, delay: 100 } }">

# Thank you!

</div>

<div v-motion :initial="{ opacity: 0 }" :enter="{ opacity: 1, transition: { delay: 500, duration: 500 } }" class="mt-6 text-2xl opacity-80">
Questions? The floor is yours.
</div>

<div v-motion :initial="{ opacity: 0 }" :enter="{ opacity: 1, transition: { delay: 900, duration: 500 } }" class="mt-12 text-base opacity-85">
{{NEXT_SESSION_DAY}} at {{TIME}}: <b>{{NEXT_SESSION_TITLE}}</b><br />
<span class="opacity-75">{{NEXT_SESSION_WOW: one sentence}}</span>
</div>

<div v-motion :initial="{ opacity: 0 }" :enter="{ opacity: 1, transition: { delay: 1300, duration: 500 } }" class="mt-10 text-lg">
All five free sessions this week:
<a href="https://infratify.github.io/ntw/" target="_blank" class="inline-flex items-center gap-1.5">
  infratify.github.io/ntw
  <mdi-open-in-new class="text-sm opacity-60" />
</a>
</div>

<!--
{{QA_PREP: the questions to expect and the answers}}
-->
