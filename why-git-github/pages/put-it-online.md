---
layout: default
transition: slide-down
---

<div class="flex items-center gap-3 mb-2">
  <LiveBadge />
  <h3 class="!m-0">Put it online</h3>
</div>

<div class="grid grid-cols-2 gap-10 mt-10 items-center">

<div>
<TermWindow title="gh: GitHub from the terminal">
<div><span class="text-green-400">$</span> gh repo create stall-page <span class="opacity-60">\</span></div>
<div><span class="opacity-60">&nbsp;&nbsp;--public --source=. --push</span></div>
<div v-click="1" class="mt-1 text-green-400">✓ Created repository ariff/stall-page</div>
<div v-click="1" class="text-green-400">✓ Pushed commits to GitHub</div>
</TermWindow>
</div>

<div class="space-y-7">
  <div v-click="2" class="note-row items-center">
    <mdi-cloud-check-outline class="note-ico text-red-600 dark:text-red-400" />
    <p><b>the history goes too</b></p>
  </div>
  <div v-click="3" class="note-row items-center">
    <mdi-pencil-outline class="note-ico text-red-600 dark:text-red-400" />
    <p><b>edits flow both ways</b></p>
  </div>
  <div v-click="4" class="note-row items-center">
    <mdi-account-multiple-plus-outline class="note-ico text-red-600 dark:text-red-400" />
    <p><b>teammates join by link</b></p>
  </div>
</div>

</div>

<!--
Labels to narrate:
[click] one command sends the stall page up: the files AND every commit from part 1, messages included. GitHub calls this online home a repository, repo for short; you'll hear that word constantly from here on.
[click] once it's up, changes travel both directions: I can edit on the website, a teammate can push from their laptop, and pull syncs everyone.
[click] adding a collaborator is sending a link; no USB sticks, no "which version do you have?".

DEMO SCRIPT (~8 min), same repo from the part 1 demo:
1. gh repo create stall-page --public --source=. --push
2. browser: open the new repo page; show the files and the commit list: the same messages we typed in part 1, now online
3. click a commit: GitHub shows the exact changed lines, the web version of git diff
4. play the teammate: edit index.html in the browser (pencil icon), add a promo line, commit it from the web with a message
5. terminal: git pull → the promo line lands in the local file; cat index.html to prove it
6. git log --oneline → the web commit is part of the one history
Night before: gh auth login on the demo account; gh repo delete stall-page --yes if a rehearsal copy exists, so the create is fresh.
FALLBACK: keep a rehearsal twin (stall-page-rehearsal) already on GitHub in a pinned tab; if network or auth misbehaves, walk the same steps on it and narrate the push output from the rehearsal.
-->
