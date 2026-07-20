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
Q&A runs 15-30 min. Expected questions, short answers:
- "is GitHub free?": yes, including private repos
- "git vs GitHub again?": git = the tool on your machine; GitHub = the website hosting the shared copy
- "do I need to code first?": no; git tracks any files, writers and designers version their work too
- "is everything I put there public?": only repos you mark public; private is the default choice on creation
- "what about GitLab or Bitbucket?": same idea, different host; skills transfer
- "can Pages host a full app?": static pages only; tomorrow's cloud session shows real servers
- "if AI writes the code, why learn this?": someone has to read what it changed and undo it when it is wrong = the diff and restore we just used
- "is opencode really free?": the tool is open source; ships with free-tier models, pay for stronger ones later if you ever want

Close:
- point at the three icons, say how to ask: type into the Zoom chat, press the raise-hand button, or unmute and speak
- read each chat question out loud before answering, so everyone hears what was asked
-->