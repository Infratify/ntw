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
Session five of five.<br />
<span class="opacity-75">One web page, five days, and the whole setup now lives in code.</span>
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
Q&A runs 15-30 min; this was the finale, so also thank the people who came all week. Expect: "Terraform or Ansible first?" (Terraform; it builds the machines, Ansible configures their insides, and today's whole demo was Terraform), "is destroy dangerous?" (it only touches what its own folder describes, lists every item, and waits for a typed yes; the rest of the account is untouched), "do companies really work like this?" (open any DevOps job ad and count how often Terraform appears; the console stays useful for exploring, code is for anything that must be rebuilt), "is Terraform free?" (free to download and use; the paid products are team conveniences), "what if someone edits the server by hand afterwards?" (the next plan flags the difference between file and reality, called drift, and apply puts the file back in charge), "I missed the earlier sessions" (each stands alone, and all five are listed on the hub page). If asked what to learn after the week: Linux and Git first, then the cloud session's material; the bootcamp on the hub page teaches the same path hands-on, mention it once and move on.
Close the week factually: Monday a terminal, Tuesday a page with history, Wednesday a rented server, Thursday a container, Friday all of it as code. Thank them, point at the hub link, end the call.
-->
