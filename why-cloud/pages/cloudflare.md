---
layout: default
transition: slide-up
clicks: 3
---

### Cloudflare in front

<div class="mt-12">
  <RequestPath
    :hops="[
      { label: 'a fan, London', icon: 'cellphone', color: 'cyan' },
      { label: 'Cloudflare, London', icon: 'cloud-outline', color: 'green' },
      { label: 'our server, Singapore', icon: 'server', color: 'blue' },
    ]"
    :group="{ from: 1, to: 1, label: 'one of 330 cities', at: 1 }"
  />
</div>

<div v-click="3" class="mark-safe mt-12 text-center text-lg opacity-85">
A copy of the page waits in <span v-mark="{ at: 3, color: '#ea580c', type: 'underline' }">330 cities</span>.
</div>

<!--
Same fan, same tap, one new company in the middle.

[click] Cloudflare runs computers in more than 330 cities, London included, and you point your web address at them instead of at your server. Now her request stops in her own city.
[click] Cloudflare keeps a copy of the page there, so most visits are answered from a few kilometres away in a few milliseconds; only when the copy needs refreshing does Cloudflare fetch from Singapore, once, for everyone. The technical name, said once: a CDN, a content delivery network.
[click] a copy near London, a copy near Tokyo, a copy near São Paulo: every visitor gets a nearby answer while we still run one server. Also spoken, not shown: Cloudflare inspects traffic on the way in and drops known attack junk before it ever reaches our machine, and the starter plan costs nothing, including the https padlock. About one in five websites on Earth sits behind it, the NTW hub included in spirit; the next demo puts our stall page there for real.
-->
