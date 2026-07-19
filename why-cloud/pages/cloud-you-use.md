---
layout: default
transition: slide-up
---

### Cloud around you

<div class="pop grid grid-cols-4 gap-x-6 gap-y-6 mt-6 max-w-3xl mx-auto text-center">

<div v-click="1">
  <logos-netflix-icon class="text-5xl mx-auto" />
  <p class="text-base font-700 mt-2 mb-1">Netflix</p>
  <p class="text-xs opacity-60 m-0">streams from AWS</p>
</div>

<div v-click="1">
  <logos-spotify-icon class="text-5xl mx-auto" />
  <p class="text-base font-700 mt-2 mb-1">Spotify</p>
  <p class="text-xs opacity-60 m-0">plays from Google Cloud</p>
</div>

<div v-click="2">
  <logos-airbnb-icon class="text-5xl mx-auto" />
  <p class="text-base font-700 mt-2 mb-1">Airbnb</p>
  <p class="text-xs opacity-60 m-0">books stays on AWS</p>
</div>

<div v-click="2">
  <logos-slack-icon class="text-5xl mx-auto" />
  <p class="text-base font-700 mt-2 mb-1">Slack</p>
  <p class="text-xs opacity-60 m-0">work chat, on AWS</p>
</div>

<div v-click="3">
  <logos-shopify class="text-5xl mx-auto" />
  <p class="text-base font-700 mt-2 mb-1">Shopify</p>
  <p class="text-xs opacity-60 m-0">stores on Google Cloud</p>
</div>

<div v-click="3">
  <logos-pinterest class="text-5xl mx-auto" />
  <p class="text-base font-700 mt-2 mb-1">Pinterest</p>
  <p class="text-xs opacity-60 m-0">boards on AWS</p>
</div>

<div v-click="4">
  <logos-openai-icon class="text-5xl mx-auto dark:invert" />
  <p class="text-base font-700 mt-2 mb-1">ChatGPT</p>
  <p class="text-xs opacity-60 m-0">answers from Azure</p>
</div>

<div v-click="4">
  <logos-zoom-icon class="text-5xl mx-auto" />
  <p class="text-base font-700 mt-2 mb-1">Zoom</p>
  <p class="text-xs opacity-60 m-0">this call, on AWS</p>
</div>

</div>

<div v-click="5" class="mark-safe mt-6 text-center text-lg opacity-85">
They all rent computing from the <span v-mark="{ at: 5, color: '#ea580c', type: 'underline' }">same three clouds</span>.
</div>

<!--
Before the demo, the scale of this rental business, through apps everyone here already opened this week.

[click] Netflix runs its streaming empire on AWS; Spotify moved its music to Google Cloud years ago. Neither company builds server rooms for their core computing.
[click] Airbnb has run on AWS almost since day one; Slack, where much of the world's office chat lives, rents from AWS too.
[click] Shopify's online stores run on Google Cloud; Pinterest serves its billions of pins from AWS.
[click] ChatGPT answers from Microsoft's Azure datacenters. And the Zoom call you are inside right now: Zoom scaled through the pandemic by renting from AWS on top of its own machines.
[click] the pattern: even giants with billions in the bank choose renting. The three big landlords are AWS, Microsoft Azure and Google Cloud; AWS alone collects over a hundred billion US dollars of rent a year. Spoken nuance if asked: Netflix ships its own video-delivery boxes to internet providers, and Zoom keeps some datacenters, but their computing runs on rented cloud. Closer to home: Grab runs on AWS as well.
-->
