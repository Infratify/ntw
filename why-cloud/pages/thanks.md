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

<div class="mt-16 flex items-start justify-center gap-20">

  <div v-motion :initial="{ y: 20, opacity: 0 }" :enter="{ y: 0, opacity: 1, transition: { type: 'spring', stiffness: 80, delay: 900 } }" class="flex flex-col items-center gap-4">
    <mdi-message-text-outline class="text-6xl opacity-45" />
    <span class="text-base opacity-70">Zoom chat</span>
  </div>

  <div v-motion :initial="{ y: 20, opacity: 0 }" :enter="{ y: 0, opacity: 1, transition: { type: 'spring', stiffness: 80, delay: 1100 } }" class="flex flex-col items-center gap-4">
    <mdi-hand-back-left-outline class="text-6xl opacity-45" />
    <span class="text-base opacity-70">Raise hand</span>
  </div>

  <div v-motion :initial="{ y: 20, opacity: 0 }" :enter="{ y: 0, opacity: 1, transition: { type: 'spring', stiffness: 80, delay: 1300 } }" class="flex flex-col items-center gap-4">
    <mdi-microphone-outline class="text-6xl opacity-45" />
    <span class="text-base opacity-70">Unmute and ask</span>
  </div>

</div>

<!--
Q&A runs 15-30 min. Expect: "is the server still running?" (yes; stopping it pauses the hourly cost, terminating deletes it; I terminate it after this call and the whole session cost under RM2), "will AWS charge my card?" (the free plan starts with credits and warning emails come long before charges; set the billing alarm on day one and experiments stay free), "AWS or Azure or Google?" (the same rental idea with a different landlord; skills transfer; Malaysian job ads ask for AWS most often, so it is the safe first pick), "is the cloud safe for my data?" (the provider guards the buildings and hardware; you guard your password and your settings; big banks and governments run on these clouds under stricter rules than any office server room), "can the cloud host my WordPress or online shop?" (yes, exactly like the stall page: rent, install, point a domain), "do I need yesterday's Git session for tomorrow?" (no, every session stands alone, though the demos connect when you attend several).
Point at the three icons and say how to ask: type it into the Zoom chat, press the raise-hand button, or unmute and speak. Read each chat question out loud before answering it, so everyone hears what was asked.
-->
