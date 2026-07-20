---
layout: default
transition: fade-out
---

<div class="flex items-center gap-3 mb-2">
  <LiveBadge />
  <h3 class="!m-0">Ping the planet</h3>
</div>

<div class="grid grid-cols-2 gap-10 mt-10 items-center">

<div>
<TermWindow title="globalping: test from anywhere">
<div><span class="text-green-400">$</span> globalping ping demo.infratify.com <span class="opacity-60">\</span></div>
<div><span class="opacity-60">&nbsp;&nbsp;</span>from Europe,Asia,Oceania <span class="opacity-60">--latency</span></div>
<div v-click="1" class="mt-1"><span class="text-purple-400">&gt;</span> London, GB &middot; <span class="text-green-400">Avg: 7.2 ms</span></div>
<div v-click="1"><span class="text-purple-400">&gt;</span> Tokyo, JP &middot; <span class="text-green-400">Avg: 3.8 ms</span></div>
</TermWindow>
</div>

<div class="space-y-7">
  <div v-click="2" class="note-row items-center">
    <mdi-earth class="note-ico text-orange-600 dark:text-orange-400" />
    <p><b>five continents, one command</b></p>
  </div>
  <div v-click="3" class="note-row items-center">
    <mdi-map-marker-radius class="note-ico text-orange-600 dark:text-orange-400" />
    <p><b>answered nearby</b></p>
  </div>
  <div v-click="4" class="note-row items-center">
    <mdi-server class="note-ico text-orange-600 dark:text-orange-400" />
    <p><b>still one remote server</b></p>
  </div>
</div>

</div>

<!--
Labels to narrate:
[click] globalping borrows volunteer machines around the world and pings our address from wherever we ask; the real output prints Min, Max and Avg per city, the transcript shows the city and its average.
[click] single-digit and low double-digit milliseconds, because each probe reaches the Cloudflare copy in its own region, never our own server.
[click] and behind all of it is still the one t3 machine we rented in part 1.

DEMO SCRIPT (~10 min), Cloudflare dashboard then terminal:
1. dashboard: DNS → Add record → type A, name demo, the server's IP, proxy status ON; narrate the orange cloud toggle: grey means "just point", orange means "stand in front"
2. browser: https://demo.infratify.com → the stall page, now with a padlock; the https certificate came free with the proxy
3. curl -I https://demo.infratify.com → HTTP/2 200 plus a "server: cloudflare" line: the answer came from Cloudflare's machine, not ours
4. browser: demo.infratify.com/cdn-cgi/trace → the colo= line names the Cloudflare city that answered; from here it says KUL, Kuala Lumpur
5. globalping ping demo.infratify.com from Europe,"North America","South America",Asia,Oceania --limit 5 --latency → read each city and average aloud
6. paste https://demo.infratify.com into the Zoom chat; everyone opens it on their phone right now
Night before: the demo domain's nameservers must already sit at Cloudflare (activation can take hours, never attempt it live); on the laptop install the globalping CLI: curl -s https://packagecloud.io/install/repositories/jsdelivr/globalping/script.deb.sh | sudo bash && sudo apt install globalping (it is not in Ubuntu's own repos); curl ships with Ubuntu 24.04; rehearse the DNS add on a scratch subdomain and delete the record after.
FALLBACK: globalping.io runs the same test in any browser with no install; and last night's rehearsal subdomain is still proxied if the fresh record is slow to answer.
-->
