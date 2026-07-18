---
layout: fact
transition: fade-out
---

<div v-motion :initial="{ scale: 0.4, opacity: 0 }" :enter="{ scale: 1, opacity: 1, transition: { type: 'spring', stiffness: 80, delay: 200 } }">

# Under two seconds

</div>

<div v-motion :initial="{ opacity: 0 }" :enter="{ opacity: 1, transition: { delay: 700, duration: 500 } }" class="text-2xl opacity-70 mt-2">
from typed command to running server
</div>

<div v-motion :initial="{ opacity: 0 }" :enter="{ opacity: 1, transition: { delay: 1100, duration: 500 } }" class="mt-8 text-lg opacity-60">
Wednesday's cloud server took about a minute
</div>

<!--
That is the claim, and the next demo times it live with the time command: a stopwatch that wraps any command and prints how long it really took.
The comparison, spoken honestly: on Wednesday we watched a brand-new cloud server come up in about a minute, and that already beat ordering hardware by weeks. A container starts in around a second because nothing boots; the program simply starts inside its box, on the machine that is already running.
Why the number changes habits: when a server costs a minute, you keep things running "just in case". When it costs a second, you start things the moment you need them and remove them the moment you don't.
-->
