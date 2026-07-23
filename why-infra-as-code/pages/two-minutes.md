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
- name the number honestly: both applies today took ~2 min end to end, timed together
- put it next to the week's other numbers: the 40-step runbook a careful human must follow, Wednesday's click-through that filled a whole demo segment

- two minutes changes behaviour = the real lesson of part 2
  - dead server at 3 am = one command + a short wait, not a crisis
  - test environment stops being precious: teams destroy every evening, rebuild every morning; ~2 min + RM 0 while off
  - spell it out: cheap rebuilds only exist because the environment is written down; the file is the insurance policy
-->
