<!-- ARCHETYPE: cli-notice — one-time expectation-setting beat, right after the title
     slide, before the trainer slide. Budgets: TITLE ≤4 words · exactly one typed
     terminal line ($ prompt static green, rest types itself via .type-mount) · one
     payoff sentence below the window, an observable fact only, paired with a small
     mdi-incognito icon that carries the "you'll look like a hacker" wink wordlessly.
     The joke itself is spoken only, lives in presenter notes, never written on-slide
     (banned rhetorical register if it became a slide punchline).
     Reference: why-linux/pages/cli-notice.md -->
---
layout: fact
transition: fade-out
---

<div v-motion :initial="{ scale: 0.4, opacity: 0 }" :enter="{ scale: 1, opacity: 1, transition: { type: 'spring', stiffness: 80, delay: 200 } }">

# {{TITLE ≤4 words}}

</div>

<div v-motion :initial="{ opacity: 0, y: 16 }" :enter="{ opacity: 1, y: 0, transition: { delay: 650, duration: 500 } }" class="mt-8 max-w-lg mx-auto">
<TermWindow title="{{WINDOW_TITLE}}">
<span class="text-green-400">$</span> <span class="type-mount"><span class="type-mount-text" style="animation-delay: 900ms">{{TYPED_LINE}}</span></span>
</TermWindow>
</div>

<div v-motion :initial="{ opacity: 0 }" :enter="{ opacity: 1, transition: { delay: 1900, duration: 500 } }" class="mt-8 flex items-center justify-center gap-3">
<mdi-incognito class="text-2xl opacity-50 flex-shrink-0" />
<span class="text-lg opacity-85">{{PAYOFF: one factual sentence tying today's activity to this window}}</span>
</div>

<!--
{{REASSURANCE: no coding experience needed, nobody memorises commands, it is just typed instructions}}
{{PLAYFUL_WARNING: friendly, warm heads-up that a black screen with typed commands reads as "hacker" or "the Matrix" to onlookers}}
-->
