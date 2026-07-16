---
layout: default
transition: slide-left
---

<div class="flex items-center gap-3 mb-2">
  <LiveBadge />
  <h3 class="!m-0">The toy box</h3>
</div>

<div class="term-print max-w-2xl mx-auto mt-6">
<TermWindow title="~ 60,000 packages, all RM0. a tiny sample:">
<div v-click="1" class="py-0.5"><span class="text-green-400">$</span> curl wttr.in <span class="text-gray-500"># live weather. type your city in the chat!</span></div>
<div v-click="1" class="py-0.5"><span class="text-green-400">$</span> curl cheat.sh/tar <span class="text-gray-500"># a cheatsheet for any command</span></div>
<div v-click="2" class="py-0.5"><span class="text-green-400">$</span> mapscii <span class="text-gray-500"># a zoomable world map, in text</span></div>
<div v-click="2" class="py-0.5"><span class="text-green-400">$</span> ffmpeg -i clip.mp4 clip.gif <span class="text-gray-500"># convert any video</span></div>
<div v-click="3" class="py-0.5"><span class="text-green-400">$</span> tldr rsync <span class="text-gray-500"># man pages, but human</span></div>
<div v-click="3" class="py-0.5"><span class="text-green-400">$</span> figlet FREE <span class="text-purple-400">|</span> lolcat <span class="text-gray-500"># rainbow banners, pure joy</span></div>
<div v-click="4" class="py-0.5"><span class="text-green-400">$</span> curl qrenco.de/ntw <span class="text-gray-500"># QR codes, in the terminal</span></div>
<div v-click="4" class="py-0.5"><span class="text-green-400">$</span> asciiquarium <span class="text-gray-500"># an aquarium. why not.</span></div>
</TermWindow>
</div>

<div v-click="5" class="mark-safe mt-8 text-center text-lg opacity-85">
Every one of these costs <span v-mark="{ at: 5, color: '#16a34a', type: 'highlight' }">RM0, forever</span>.
And there are about 60,000 more where they came from.
</div>

<!--
DEMO SCRIPT (~15 min), pace it like a fireworks show:
1. figlet "FREE FOREVER" | lolcat    ← open with the banner
2. curl wttr.in/kuala-lumpur         ← then take 2-3 cities from the chat
3. curl cheat.sh/tar
4. telnet mapscii.me                 ← zoom into Malaysia
5. ffmpeg -i clip.mp4 clip.gif       ← prepare clip.mp4 beforehand
6. tldr rsync
7. curl qrenco.de/https://infratify.github.io/ntw/    ← "even our registration QR comes from the terminal"
8. asciiquarium                      ← leave running while transitioning
FALLBACK: pre-record the sequence with asciinema in case wttr.in or mapscii are down.
The night before: sudo apt install figlet lolcat tldr ffmpeg, and npm i -g mapscii.
-->
