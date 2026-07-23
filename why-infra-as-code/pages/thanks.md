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
- Q&A runs 15-30 min; this was the finale = also thank the people who came all week
- point at the three icons for how to ask: Zoom chat, raise-hand button, or unmute + speak; read each chat question aloud before answering

Expect:
- "Terraform or Ansible first?" = Terraform builds the machines, Ansible configures their insides; today was all Terraform
- "is destroy dangerous?" = only touches what its own folder describes, lists every item, waits for a typed yes; the rest of the account untouched
- "do companies really work like this?" = open any DevOps job ad, count the Terraform; console for exploring, code for anything that must be rebuilt
- "is Terraform free?" = free to download + use; paid products are team conveniences
- "what if someone edits the server by hand after?" = next plan flags file vs reality (drift), apply puts the file back in charge
- "I missed the earlier sessions" = each stands alone
- what to learn after the week: Linux + Git first, then the cloud session's material

- close the week factually: Monday a terminal, Tuesday a page with history, Wednesday a rented server, Thursday a container, Friday all of it as code
- thank them, end the call
-->
