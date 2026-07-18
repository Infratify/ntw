---
layout: fact
transition: fade-out
---

<div v-motion :initial="{ scale: 0.4, opacity: 0 }" :enter="{ scale: 1, opacity: 1, transition: { type: 'spring', stiffness: 80, delay: 200 } }">

# Two minutes

</div>

<div v-motion :initial="{ opacity: 0 }" :enter="{ opacity: 1, transition: { delay: 700, duration: 500 } }" class="text-2xl opacity-70 mt-2">
from empty cloud to live page
</div>

<div v-motion :initial="{ opacity: 0 }" :enter="{ opacity: 1, transition: { delay: 1100, duration: 500 } }" class="mt-8 text-lg opacity-60">
repeat as many times as needed
</div>

<!--
Name the number honestly: both applies today took about two minutes end to end, and we timed them together. Put it next to the other numbers from this week: the forty-step runbook that has to be followed by a careful human, and Wednesday's click-through, which filled a whole demo segment.

Two minutes changes behaviour, and that is the real lesson of part 2. A dead server at 3 am stops being a crisis and becomes one command and a short wait. A test environment stops being precious: teams destroy theirs every evening and rebuild it every morning, because rebuilding costs two minutes and RM 0 while it is off. Spell the connection out: cheap rebuilds only exist because the environment is written down; the file is the insurance policy.
-->
