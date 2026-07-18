---
layout: default
transition: fade-out
---

<div class="flex items-center gap-3 mb-2">
  <LiveBadge />
  <h3 class="!m-0">Go live</h3>
</div>

<div class="grid grid-cols-2 gap-10 mt-10 items-center">

<div>
<TermWindow title="github pages: every repo can be a website">
<div><span class="text-green-400">$</span> git push</div>
<div v-click="1" class="mt-1"><span class="text-green-400">$</span> curl -I <span class="opacity-60">\</span></div>
<div v-click="1"><span class="opacity-60">&nbsp;&nbsp;</span>https://ariff.github.io/stall-page/</div>
<div v-click="1" class="text-green-400">HTTP/2 200</div>
</TermWindow>
</div>

<div class="space-y-7">
  <div v-click="2" class="note-row items-center">
    <mdi-timer-outline class="note-ico text-red-600 dark:text-red-400" />
    <p><b>about two minutes</b></p>
  </div>
  <div v-click="3" class="note-row items-center">
    <mdi-currency-usd-off class="note-ico text-red-600 dark:text-red-400" />
    <p><b>hosting costs nothing</b></p>
  </div>
  <div v-click="4" class="note-row items-center">
    <mdi-earth class="note-ico text-red-600 dark:text-red-400" />
    <p><b>a public URL</b></p>
  </div>
</div>

</div>

<!--
Labels to narrate:
[click] the transcript shows the finish line: asking the new address for its status. 200 is the web's standard "done, here you go", the same green code from Monday's session for those who were there.
[click] no hosting bill, no server to rent: GitHub Pages serves the page for free.
[click] and the address is truly public: every phone in this Zoom can open it the moment it exists.

DEMO SCRIPT (~7 min), the timed finale:
1. start the prepared stopwatch tab, visible on screen
2. browser: stall-page repo → Settings → Pages → Source: Deploy from a branch → main, / (root) → Save
3. Actions tab: watch the "pages build and deployment" job run (~1 min); narrate what GitHub is doing
4. open https://ariff.github.io/stall-page/ → the nasi lemak page from part 1, live; stop the clock and read it out
5. terminal: curl -I the URL → HTTP/2 200
6. paste the URL into the Zoom chat and invite everyone to open it on their phones right now
7. mention the NTW hub page they registered on is hosted exactly this way, GitHub Pages on a public repo
Night before: rehearse the full flow on a scratch repo, then delete it (gh repo delete) so the live run is genuinely fresh; prepare the stopwatch tab.
FALLBACK: if the Pages build queues slowly, show the hub repo's Settings → Pages as the finished example, take the break, and refresh the new URL after; the 200 check runs then.
-->
