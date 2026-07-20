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
Q&A runs 15-30 min; this was the finale, so also thank the people who came all week. Expect: "Terraform or Ansible first?" (Terraform; it builds the machines, Ansible configures their insides, and today's whole demo was Terraform), "is destroy dangerous?" (it only touches what its own folder describes, lists every item, and waits for a typed yes; the rest of the account is untouched), "do companies really work like this?" (open any DevOps job ad and count how often Terraform appears; the console stays useful for exploring, code is for anything that must be rebuilt), "is Terraform free?" (free to download and use; the paid products are team conveniences), "what if someone edits the server by hand afterwards?" (the next plan flags the difference between file and reality, called drift, and apply puts the file back in charge), "I missed the earlier sessions" (each stands alone). If asked what to learn after the week: Linux and Git first, then the cloud session's material.
Point at the three icons and say how to ask: type it into the Zoom chat, press the raise-hand button, or unmute and speak. Read each chat question out loud before answering it, so everyone hears what was asked.
Close the week factually: Monday a terminal, Tuesday a page with history, Wednesday a rented server, Thursday a container, Friday all of it as code. Thank them and end the call.
-->
