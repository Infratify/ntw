---
layout: default
transition: slide-up
---

<div class="flex items-center gap-3 mb-2">
  <LiveBadge />
  <h3 class="!m-0">The toy box</h3>
</div>

<div class="term-print max-w-2xl mx-auto mt-6">
<TermWindow title="~ 60,000 packages, all RM0. a tiny sample:">
<div v-click="1" class="py-0.5 flex items-center justify-between"><span><span class="text-green-400">$</span> curl wttr.in</span><mdi-weather-partly-cloudy class="text-gray-500" /></div>
<div v-click="1" class="py-0.5 flex items-center justify-between"><span><span class="text-green-400">$</span> curl cheat.sh/tar</span><mdi-school-outline class="text-gray-500" /></div>
<div v-click="2" class="py-0.5 flex items-center justify-between"><span><span class="text-green-400">$</span> figlet FREE <span class="text-purple-400">|</span> lolcat</span><mdi-format-color-highlight class="text-gray-500" /></div>
<div v-click="2" class="py-0.5 flex items-center justify-between"><span><span class="text-green-400">$</span> curl qrenco.de/ml.my/op-tp</span><mdi-qrcode class="text-gray-500" /></div>
</TermWindow>
</div>

<div v-click="3" class="mark-safe mt-8 text-center text-lg opacity-85">
<span v-mark="{ at: 3, color: '#16a34a', type: 'highlight' }">All RM0</span>, from a catalogue of about 60,000 packages.
</div>

<div v-click="4" class="mt-5 text-center text-sm opacity-70">
Hundreds more:
<a href="https://github.com/chubin/awesome-console-services" target="_blank" class="inline-flex items-center gap-1.5">
  awesome-console-services
  <mdi-open-in-new class="text-xs opacity-60" />
</a>
</div>

<!--
Gloss "package" first, before the lines appear: a package is just an app from Ubuntu's free catalogue, the same store apt pulled VLC from earlier. Everything here installs with apt, one catalogue, one command, nothing else to learn.
What each line is, to narrate as it appears: live weather (take 2-3 cities from the chat!), the cheat.sh lookup from the eight-commands demo, now for tar, rainbow banners for pure joy, and a QR code drawn out of text characters.
[click] the link is a curated list of services like these, hundreds of them, all reachable with plain curl. Worth saying out loud: wttr.in, cheat.sh and qrenco.de are all built by the same person, Igor Chubin, who also keeps that list.

DEMO SCRIPT (~10 min), pace it like a fireworks show:
1. figlet "FREE FOREVER" | lolcat    ← open with the banner
2. curl wttr.in/kuala-lumpur         ← then take 2-3 cities from the chat
3. curl cheat.sh/tar
4. curl qrenco.de/https://ml.my/op-tp    ← scannable QR to my page, drawn in the terminal; tell them to scan it off the screen
5. Open the awesome-console-services page and scroll it for ten seconds, then close it.
FALLBACK: pre-record the sequence with asciinema in case wttr.in or cheat.sh are down.
The night before: sudo apt install curl figlet lolcat asciinema, all four from Ubuntu 24.04's own repos, no other package manager anywhere in this session. Dry-run every line once end to end; the dry run doubles as the asciinema recording for the fallback.
-->
