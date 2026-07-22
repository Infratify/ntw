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
- Q&A runs 15-30 min; point at the three icons and say how to ask: type in Zoom chat, press raise-hand, or unmute and speak; read each chat question aloud before answering, so everyone hears what was asked
- expect:
  - is Docker free? the engine is free and open source; Docker Desktop is free for personal use, learning and small companies
  - container vs virtual machine again? a VM carries a whole spare operating system, a container borrows the machine's own Linux; both matter, and today's cloud machine itself was a VM, the diagram slide showed both side by side
  - does my app have to be special? anything that runs on Linux can be boxed; Windows containers exist but are niche
  - what is Kubernetes? a manager for many containers across many machines; docker is the alphabet, learn it first
  - is Docker Hub safe? prefer the images marked official, like python and redis; anyone can upload, the same caution as app stores
  - can containers break my laptop? they are isolated, and stop plus rm remove them completely; today's stack left the laptop unchanged
  - was the AI really offline? yes: the model file downloaded the night before, and the answers were computed on this laptop's processor; no account, no subscription, questions never leave the machine
  - do I need a gaming PC for AI? the 1.3 GB brain from today runs on an ordinary laptop processor at reading speed; bigger brains want a graphics card, start small
  - is that AI as good as ChatGPT? no, today's brain is a small free one; bigger free models exist for stronger machines, and the point is the packaging: any of them arrives the same one-command way
-->
