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
Tomorrow at 10:30 am: <b>Why Git &amp; GitHub?</b><br />
<span class="opacity-75">Watch a web page go live on the public internet in two minutes.</span>
</div>

<div v-motion :initial="{ opacity: 0 }" :enter="{ opacity: 1, transition: { delay: 1300, duration: 500 } }" class="mt-10 text-lg">
All five free sessions this week:
<a href="https://infratify.github.io/ntw/" target="_blank" class="inline-flex items-center gap-1.5">
  infratify.github.io/ntw
  <mdi-open-in-new class="text-sm opacity-60" />
</a>
</div>

<div v-motion :initial="{ opacity: 0 }" :enter="{ opacity: 1, transition: { delay: 1600, duration: 500 } }" class="mt-8 text-sm opacity-60">
<a href="https://trainer.opariffazman.com" target="_blank" class="inline-flex items-center gap-1.5">
  <mdi-account-circle-outline /> trainer.opariffazman.com
</a>
</div>

<!--
Q&A runs 15-30 min. Expect: "will Linux break my Windows?" (WSL doesn't touch it), "do I need to code first?" (no, the terminal comes before coding), "which distro?" (Ubuntu, don't overthink it), "can I get a job with this?" (Linux is on virtually every DevOps and cloud job description).
-->
