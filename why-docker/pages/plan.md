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
One command starts a real web server.
</div>

<!--
Session map; the recap slide mirrors it at the end. Housekeeping to SAY, not show: nothing to install on their side, they just watch; questions go in the Zoom chat anytime and I batch them at each break.

[click] First, the problem: an app that runs on one computer and crashes on another, and the sealed box Docker packs to end that.
[click] Then shipping: the same box pushed to a public shelf online, and pulled down onto any machine, identical every time.
[click] And speed: a box starts in about a second, so one ordinary laptop can run a whole fleet of them.
[click] The headline moment: one typed command gives us a running web server on a real cloud machine, and everyone here opens it live. About 5 minutes in at this point.
-->
