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
<div><span class="text-green-400">$</span> curl -I <span class="opacity-60">\</span></div>
<div><span class="opacity-60">&nbsp;&nbsp;</span>https://infratify.github.io/stall-page/</div>
<div v-click="1" class="mt-1 text-green-400">HTTP/2 200</div>
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
[click] the transcript shows the finish line: curl, a small program that knocks on a web address and reports what answers, asks the new page to respond. 200 is the web's standard "done, here you go", the same green code from Monday's session for those who were there.
[click] no hosting bill, no server to rent: GitHub Pages serves the page for free.
[click] and the address is truly public: every phone in this Zoom can open it the moment it exists.

ACTIVITY: two chat moments are already in the script; call both out as things THEY are doing, not watching. Step 6, everyone opens the brand-new URL on their own phones. Steps 8 to 13, the chat picks the new tagline, then watches their own phones update after the push.
PROP: your own phone, held up to the camera at step 4 or 6, refreshing the new URL. A second physical screen showing the page proves "public" in a way the browser tab on the shared screen cannot.
DEMO SCRIPT (~7 min), the timed finale:
1. start the prepared stopwatch tab, visible on screen
2. browser: stall-page repo → Settings → Pages → Source: Deploy from a branch → main, / (root) → Save
3. Actions tab: watch the "pages build and deployment" job run (~1 min); narrate what GitHub is doing
4. open https://infratify.github.io/stall-page/ → the nasi lemak page from part 1, live; stop the clock and read it out
5. terminal: curl -I the URL → HTTP/2 200
6. paste the URL into the Zoom chat and invite everyone to open it on their phones right now
7. mention the NTW hub page they registered on is hosted exactly this way, GitHub Pages on a public repo

Second lap, the closing beat: ask them to keep the page open on their phones.
8. editor: change the tagline on index.html to something the audience shouts out in the chat
9. git commit -am "new tagline"   (name it: this is the same commit from part 1)
10. git push   (the same push from part 2)
11. Actions tab: the pages job reruns by itself, nobody clicked deploy
12. when it goes green, refresh the public URL: the new tagline is there
13. tell them to pull down to refresh on their phones
Say what just happened, plainly: a word typed on this laptop is now on every phone in this room, and the trip took one minute. That is the whole session in one loop, the history from part 1 travelling through GitHub to a public address.
Night before: rehearse the full flow on a scratch repo, then delete it (gh repo delete) so the live run is genuinely fresh; prepare the stopwatch tab; confirm the demo account's Pages builds are running in under two minutes that week.
FALLBACK: if the Pages build queues slowly, show the hub repo's Settings → Pages as the finished example, take the break, and refresh the new URL after; the 200 check runs then. If the second lap queues too, take the tagline suggestion anyway, push it, and refresh the URL during Q&A so they still watch it change.
-->
