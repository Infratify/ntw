---
layout: default
transition: slide-right
---

### Today's plan

<div class="pop grid grid-cols-3 gap-8 mt-16 max-w-3xl mx-auto text-center">

<div v-click="1" class="relative pt-6">
  <span class="ghost-num font-mono">01</span>
  <mdi-package-variant-closed class="text-4xl text-blue-600 dark:text-blue-400 mx-auto" />
  <p class="text-lg font-700 mt-3 mb-1">works everywhere</p>
  <p class="text-sm opacity-60 m-0">one box, any machine</p>
</div>

<div v-click="2" class="relative pt-6">
  <span class="ghost-num font-mono">02</span>
  <mdi-truck-delivery-outline class="text-4xl text-blue-600 dark:text-blue-400 mx-auto" />
  <p class="text-lg font-700 mt-3 mb-1">ship anywhere</p>
  <p class="text-sm opacity-60 m-0">push once, pull anywhere</p>
</div>

<div v-click="3" class="relative pt-6">
  <span class="ghost-num font-mono">03</span>
  <mdi-lightning-bolt class="text-4xl text-blue-600 dark:text-blue-400 mx-auto" />
  <p class="text-lg font-700 mt-3 mb-1">blazingly fast</p>
  <p class="text-sm opacity-60 m-0">servers in seconds</p>
</div>

</div>

<div v-click="4" class="mt-14 text-center text-base opacity-80">
One command starts the app on a cloud VM.
</div>

<!--
- session map; the recap slide mirrors it at the end
- housekeeping to SAY, not show: nothing to install, they just watch; questions in Zoom chat, batched at breaks
- ASK: type 1 if you were here Wednesday for Why Cloud; the volume decides how much a cloud VM needs re-introducing later
- [click] first the problem: an app that runs on one computer and crashes on another, and the sealed box docker packs to end that; today's example app is a ChatGPT-style chat you run yourself
- [click] then shipping: boxes live on a public shelf online, pulled onto any machine, identical every time; the shelf ships whole AI programs too, and we pull one live
- [click] and speed: a box starts in about a second, so the finale starts an entire AI stack, the chat app plus its brain, in one command
- [click] headline moment: one typed command puts the chat app on a real cloud VM, everyone opens it live on their phones; about 5 minutes in at this point
-->
