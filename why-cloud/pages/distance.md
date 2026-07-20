---
layout: default
transition: slide-down
clicks: 2
---

<p class="eyebrow font-mono"><span class="text-orange-600 dark:text-orange-400">part 3</span> &middot; goes global</p>

### The distance problem

<div class="mt-12">
  <RequestPath
    :hops="[
      { label: 'a fan, London', icon: 'cellphone', color: 'cyan' },
      { label: 'undersea cables', icon: 'web', color: 'blue' },
      { label: 'our server, overseas', icon: 'server', color: 'blue' },
    ]"
  />
</div>

<div v-click="2" class="mark-safe mt-12 text-center text-lg opacity-85">
Every click crosses <span v-mark="{ at: 2, color: '#ea580c', type: 'underline' }">11,000 kilometres</span>, twice.
</div>

<!--
Our stall page is doing well: it has a fan in London now. Watch what her tap actually does.

[click] her phone's request leaves London and rides undersea fibre optic cables, the real pipes of the internet, laid along the ocean floor between continents.
[click] it lands on our one server, on the other side of the world, which answers, and the reply swims all the way back. The green 200 OK is the web's standard "done, here you go".
That round trip is physics: roughly 11,000 kilometres each way, about a fifth of a second for one request even on good routes. A modern page makes dozens of requests, so far-away visitors feel every one of them stack up. From Malaysia the same server feels instant; from London it feels heavy. One server can only be close to one part of the world, and that is the problem part 3 solves.
-->
