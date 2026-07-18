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
Tomorrow at 10:30 am: <b>Why Docker?</b><br />
<span class="opacity-75">One command starts a running web server.</span>
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
Q&A runs 15-30 min. Expect: "is the server still running?" (yes; stopping it pauses the hourly cost, terminating deletes it; I terminate it after this call and the whole session cost under RM2), "will AWS charge my card?" (the free plan starts with credits and warning emails come long before charges; set the billing alarm on day one and experiments stay free), "AWS or Azure or Google?" (the same rental idea with a different landlord; skills transfer; Malaysian job ads ask for AWS most often, so it is the safe first pick), "is the cloud safe for my data?" (the provider guards the buildings and hardware; you guard your password and your settings; big banks and governments run on these clouds under stricter rules than any office server room), "can the cloud host my WordPress or online shop?" (yes, exactly like the stall page: rent, install, point a domain), "do I need yesterday's Git session for tomorrow?" (no, every session stands alone, though the demos connect when you attend several).
Tomorrow's plug, said plainly: Docker packs an app and everything it needs into one box, and one command runs it on any machine, including the server from today.
-->
