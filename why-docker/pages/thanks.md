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
Tomorrow at 10:00 am: <b>Why Infra as Code?</b><br />
<span class="opacity-75">Infrastructure built from code, destroyed in seconds.</span>
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
Q&A runs 15-30 min. Expect: "is Docker free?" (the Docker engine is free and open source; Docker Desktop is free for personal use, learning and small companies), "container vs virtual machine again?" (a VM carries a whole spare operating system, a container borrows the machine's own Linux; both matter, and the cloud server itself is a VM), "does my app have to be special?" (anything that runs on Linux can be boxed; Windows containers exist but are niche), "what is Kubernetes?" (a manager for many containers across many machines; docker is the alphabet, learn it first), "is Docker Hub safe?" (prefer the images marked official, like nginx; anyone can upload, the same caution as app stores), "can containers break my laptop?" (they are isolated, and stop plus rm remove them completely; today's fleet left the laptop unchanged).
Plug tomorrow deliberately: the finale, and note the earlier start, 10:00 am, half an hour before the usual. Everything this week was built by hand or one command at a time; tomorrow the whole setup, server, network and containers, is written as a few files of code, built with one command, and destroyed with another.
-->
