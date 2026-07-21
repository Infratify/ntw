---
layout: default
transition: fade-out
---

<div class="flex items-center gap-3 mb-2">
  <LiveBadge />
  <h3 class="!m-0">Ping the planet</h3>
</div>

<div class="grid grid-cols-2 gap-8 mt-8 items-start">

<div>
<ConsoleWindow title="Cloudflare · DNS">
  <div class="flex items-center gap-3">
    <mdi-record-circle-outline class="text-lg text-gray-500 flex-shrink-0" />
    <span class="font-mono text-xs">A &middot; demo</span>
    <span class="ml-auto font-mono text-xs text-gray-500">13.212.44.7</span>
  </div>
  <div v-click="1" class="flex items-center gap-3">
    <mdi-cloud class="text-lg text-orange-500 flex-shrink-0" />
    <span>proxy on</span>
    <span class="ml-auto text-xs bg-orange-500/10 text-orange-700 px-2 py-0.5 rounded">stand in front</span>
  </div>
</ConsoleWindow>
<p class="text-center text-sm opacity-60 mt-3">the click: the orange cloud</p>
</div>

<div v-click="2">
<TermWindow title="globalping: test from anywhere">
<div><span class="text-green-400">$</span> globalping ping demo.infratify.com</div>
<div class="mt-1"><span class="text-purple-400">&gt;</span> London, GB &middot; <span class="text-green-400">7.2 ms</span></div>
<div><span class="text-purple-400">&gt;</span> Tokyo, JP &middot; <span class="text-green-400">3.8 ms</span></div>
</TermWindow>
<p class="text-center text-sm opacity-60 mt-3">the proof: fast everywhere</p>
</div>

</div>

<!--
Labels to narrate:
[click] in the Cloudflare dashboard I add one DNS record for our address and flip the proxy toggle to the orange cloud. Grey means just point at our server; orange means stand in front of it, keeping a copy near every visitor.
[click] the terminal proves the reach: globalping borrows volunteer machines worldwide and pings our address from each city. Single-digit milliseconds everywhere, because each probe hits the nearby Cloudflare copy, never our one server in part 1.

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
