---
layout: default
transition: slide-down
---

<p class="eyebrow font-mono"><span class="text-orange-600 dark:text-orange-400">part 1</span> &middot; no hardware</p>

### The old way

<div class="max-w-2xl mx-auto mt-8">
<ConsoleWindow title="Supplier quotation">
  <div v-click="1" class="flex items-center gap-3">
    <mdi-server class="text-lg text-gray-500 flex-shrink-0" />
    <span>1&times; rack server</span>
    <span class="ml-auto font-mono text-xs text-gray-500">RM 42,000</span>
  </div>
  <div v-click="2" class="flex items-center gap-3">
    <mdi-snowflake class="text-lg text-blue-500 flex-shrink-0" />
    <span>a cooled server room</span>
    <span class="ml-auto font-mono text-xs text-gray-500">RM 1,800 / month</span>
  </div>
  <div v-click="3" class="flex items-center gap-3">
    <mdi-account-wrench class="text-lg text-gray-500 flex-shrink-0" />
    <span>an engineer on call</span>
    <span class="ml-auto font-mono text-xs text-gray-500">one salary</span>
  </div>
  <div v-click="4" class="flex items-center gap-3">
    <mdi-truck-delivery-outline class="text-lg text-red-500 flex-shrink-0" />
    <span>delivery</span>
    <span class="ml-auto text-xs bg-red-500/10 text-red-600 px-2 py-0.5 rounded font-600">six weeks</span>
  </div>
</ConsoleWindow>
</div>

<div v-click="5" class="mark-safe mt-8 text-center text-lg opacity-85">
Everything is paid before the <span v-mark="{ at: 5, color: '#ea580c', type: 'underline' }">first visitor</span> arrives.
</div>

<!--
Pose the pain first: you built a website, an app, a shop system, and now it needs to be on the internet around the clock. Until the mid-2000s that meant one thing: buying a server. Gloss the word: a server is a computer whose whole job is answering other computers, no screen, no keyboard, usually bolted into a rack.

[click] the machine itself. Real server hardware starts in the tens of thousands of ringgit; this quote is typical, and it's one machine.
[click] it can't sit under a desk: it needs a cooled, dust-free, locked room with backup power, and that room bills you every month whether the site is popular or empty.
[click] machines fail at 3 am, so someone has to be reachable at 3 am.
[click] and after signing all of that, you wait. Weeks for delivery, more days for setup.
[click] the worst part: every ringgit is spent up front, sized for the crowd you hope for, before a single visitor shows up. Guess too small and the site falls over; guess too big and the money sleeps in a rack. Hold this picture; the next slide is what replaced it.
-->
