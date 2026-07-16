---
layout: fact
transition: fade-out
---

<div v-motion :initial="{ scale: 0.4, opacity: 0 }" :enter="{ scale: 1, opacity: 1, transition: { type: 'spring', stiffness: 80, delay: 200 } }">

# RM 0

</div>

<div v-motion :initial="{ opacity: 0 }" :enter="{ opacity: 1, transition: { delay: 700, duration: 500 } }" class="text-2xl opacity-70 mt-2">
the software bill for everything you watched today
</div>

<div v-motion :initial="{ opacity: 0 }" :enter="{ opacity: 1, transition: { delay: 1100, duration: 500 } }" class="mt-8 text-lg opacity-60">
The OS, the tools, the server software, the AI agent coming up next.<br />
Free when you're a student. Still free when you're a bank.
</div>

<!--
Contrast gently: one proprietary OS plus office plus creative suite easily runs to thousands of ringgit per seat per year. Linux removed the paywall between curiosity and capability.
-->
