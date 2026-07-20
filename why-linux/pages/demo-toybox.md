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
<div v-click="2" class="py-0.5 flex items-center justify-between"><span><span class="text-green-400">$</span> mapscii</span><mdi-earth class="text-gray-500" /></div>
<div v-click="2" class="py-0.5 flex items-center justify-between"><span><span class="text-green-400">$</span> figlet FREE <span class="text-purple-400">|</span> lolcat</span><mdi-format-color-highlight class="text-gray-500" /></div>
<div v-click="3" class="py-0.5 flex items-center justify-between"><span><span class="text-green-400">$</span> curl qrenco.de/ml.my/op-tp</span><mdi-qrcode class="text-gray-500" /></div>
<div v-click="3" class="py-0.5 flex items-center justify-between"><span><span class="text-green-400">$</span> asciiquarium</span><mdi-fish class="text-gray-500" /></div>
</TermWindow>
</div>

<div v-click="4" class="mark-safe mt-8 text-center text-lg opacity-85">
<span v-mark="{ at: 4, color: '#16a34a', type: 'highlight' }">All RM0</span>, from a catalogue of about 60,000 packages.
</div>

<!--
Gloss "package" first, before the lines appear: a package is just an app from Ubuntu's free catalogue, the same store apt pulled VLC from earlier.
What each line is, to narrate as it appears: live weather (take 2-3 cities from the chat!), the cheat.sh lookup from the eight-commands demo, now for tar, a zoomable world map in text, rainbow banners for pure joy, QR codes in the terminal, and an aquarium because why not.

DEMO SCRIPT (~15 min), pace it like a fireworks show:
1. figlet "FREE FOREVER" | lolcat    ← open with the banner
2. curl wttr.in/kuala-lumpur         ← then take 2-3 cities from the chat
3. curl cheat.sh/tar
4. mapscii                           ← zoom into Malaysia
5. curl qrenco.de/https://ml.my/op-tp    ← scannable QR to my page, drawn in the terminal; tell them to scan it off the screen
6. asciiquarium                      ← leave running while transitioning
FALLBACK: pre-record the sequence with asciinema in case wttr.in or mapscii are down.
The night before: sudo apt install curl figlet lolcat asciiquarium asciinema nodejs npm, then npm i -g mapscii (mapscii is an npm package, not an apt one). Dry-run every line once end to end; the dry run doubles as the asciinema recording for the fallback.
-->
