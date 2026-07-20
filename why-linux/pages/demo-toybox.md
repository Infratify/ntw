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
<div v-click="2" class="py-0.5 flex items-center justify-between"><span><span class="text-green-400">$</span> curl myr.rate.sx</span><mdi-cash-multiple class="text-gray-500" /></div>
<div v-click="2" class="py-0.5 flex items-center justify-between"><span><span class="text-green-400">$</span> figlet FREE <span class="text-purple-400">|</span> lolcat</span><mdi-format-color-highlight class="text-gray-500" /></div>
<div v-click="3" class="py-0.5 flex items-center justify-between"><span><span class="text-green-400">$</span> fortune <span class="text-purple-400">|</span> cowsay <span class="text-purple-400">|</span> lolcat</span><mdi-cow class="text-gray-500" /></div>
<div v-click="3" class="py-0.5 flex items-center justify-between"><span><span class="text-green-400">$</span> cmatrix</span><mdi-sunglasses class="text-gray-500" /></div>
<div v-click="4" class="py-0.5 flex items-center justify-between"><span><span class="text-green-400">$</span> sl</span><mdi-train class="text-gray-500" /></div>
<div v-click="4" class="py-0.5 flex items-center justify-between"><span><span class="text-green-400">$</span> curl qrenco.de/ml.my/op-tp</span><mdi-qrcode class="text-gray-500" /></div>
</TermWindow>
</div>

<div v-click="5" class="mark-safe mt-8 text-center text-lg opacity-85">
<span v-mark="{ at: 5, color: '#16a34a', type: 'highlight' }">All RM0</span>, from a catalogue of about 60,000 packages.
</div>

<div v-click="6" class="mt-5 text-center text-sm opacity-70">
Hundreds more:
<a href="https://github.com/chubin/awesome-console-services" target="_blank" class="inline-flex items-center gap-1.5">
  awesome-console-services
  <mdi-open-in-new class="text-xs opacity-60" />
</a>
</div>

<!--
Gloss "package" first, before the lines appear: a package is just an app from Ubuntu's free catalogue, the same store apt pulled VLC from earlier. Everything installed here comes from that one catalogue with one apt command, and the curl lines are websites that answer in plain text, so there is nothing else to set up.
What each line is, to narrate as it appears: live weather (take 2-3 cities from the chat!), the cheat.sh lookup from the eight-commands demo, now for tar, crypto prices in ringgit as a drawn table, rainbow banners, a cow reading out a random quote, the green rain from the Matrix, a steam train for anyone who types sl instead of ls, and a QR code made of text characters.
Call back to the pipes slide on the cow line: fortune writes a quote, the pipe hands it to cowsay, cowsay hands it to lolcat. Three tiny programs, one line, nobody had to change anyone's code.
[click] the link is a curated list of services like these, hundreds of them, all reachable with plain curl. Worth saying out loud: wttr.in, cheat.sh, rate.sx and qrenco.de are all built by the same person, Igor Chubin, who also keeps that list.

DEMO SCRIPT (~15 min), pace it like a fireworks show:
1. figlet "FREE FOREVER" | lolcat    ← open with the banner
2. curl wttr.in/kuala-lumpur         ← then take 2-3 cities from the chat
3. curl cheat.sh/tar
4. curl myr.rate.sx                  ← prices in ringgit; scroll back up to the table
5. fortune | cowsay | lolcat         ← run it 3-4 times, the quote changes each time
6. cmatrix                           ← let it run ~10 seconds, quit with q
7. sl                                ← the train ignores Ctrl+C by design, just let it finish
8. curl qrenco.de/https://ml.my/op-tp    ← scannable QR to my page, drawn in the terminal; tell them to scan it off the screen
9. Open the awesome-console-services page and scroll it for ten seconds, then close it.
FALLBACK: pre-record the sequence with asciinema in case wttr.in, cheat.sh or rate.sx are down.
The night before: sudo apt install curl figlet lolcat cowsay fortune-mod cmatrix sl asciinema, every one of them from Ubuntu 24.04's own repos, no second package manager anywhere in this session. Check that fortune, cowsay and sl run by name: they install into /usr/games, which is on the default PATH but drops off some minimal server images, and if it has, add it with export PATH=$PATH:/usr/games before the session. Dry-run every line once end to end; the dry run doubles as the asciinema recording for the fallback.
-->
