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
<TermWindow title="git is here, gh is one install">
<div><span class="text-green-400">$</span> git --version</div>
<div class="opacity-70">git version 2.43.0</div>
<div v-click="1" class="mt-2"><span class="text-green-400">$</span> sudo apt install gh</div>
<div v-click="2" class="mt-2"><span class="text-green-400">$</span> gh repo create stall-page <span class="opacity-60">\</span></div>
<div v-click="2"><span class="opacity-60">&nbsp;&nbsp;--public --source=. --push</span></div>
<div v-click="2" class="text-green-400">✓ Created Infratify/stall-page</div>
</TermWindow>
</div>

<div class="space-y-7">
  <div v-click="3" class="note-row items-center">
    <mdi-cloud-check-outline class="note-ico text-red-600 dark:text-red-400" />
    <p><b>the history goes too</b></p>
  </div>
  <div v-click="4" class="note-row items-center">
    <mdi-pencil-outline class="note-ico text-red-600 dark:text-red-400" />
    <p><b>edits flow both ways</b></p>
  </div>
  <div v-click="5" class="note-row items-center">
    <mdi-account-multiple-plus-outline class="note-ico text-red-600 dark:text-red-400" />
    <p><b>teammates join by link</b></p>
  </div>
</div>

</div>

<!--
Before any click (the first two lines answer "what do I have to install?"):
- git is already on this machine; Ubuntu and most Linux systems ship with it
- asking any program for its version = how you check it is there at all

Labels to narrate:
- [click] gh is new, introduce plainly: GitHub's own command, made by GitHub, the only thing today that needs installing
  - gloss apt: Ubuntu's app store from the terminal; this line = tapping install on a phone
  - Windows and Mac: one command too; optional, everything gh does can be clicked on the website
- [click] the payoff: one command sends the stall page up, the files AND every commit from part 1, messages included
  - gloss: GitHub calls this online home a repository, repo for short; constant word from here on
- [click] once up, changes travel both directions: edit on the website, teammate pushes from their laptop, pull syncs everyone
- [click] adding a collaborator = sending a link; no USB sticks, no "which version do you have?"

ACTIVITY (step 5, git pull typed but not run):
- chat: "the promo line exists only on the website so far. Type in the chat what you think this command does to the file on my laptop"
- run it, then cat the file so the screen answers

DEMO SCRIPT (~8 min), same repo from the part 1 demo:
0. git --version, then sudo apt install gh, then gh auth login if the login has expired; narrate: the only install of the day
1. gh repo create stall-page --public --source=. --push
2. browser: open the new repo page; files + commit list = the same messages we typed in part 1, now online
3. click a commit: GitHub shows the exact changed lines, the web version of git diff
4. play the teammate: edit index.html in the browser (pencil icon), add a promo line, commit from the web with a message
5. terminal: git pull → the promo line lands in the local file; cat index.html to prove it
6. git log --oneline → the web commit is part of the one history

Night before:
- gh auth login on the demo account with access to the Infratify org
- gh repo delete Infratify/stall-page --yes if a rehearsal copy exists (the create must be fresh)
- leave gh genuinely installed; be ready to narrate the apt line rather than run it (no download stall)

FALLBACK: rehearsal twin (stall-page-rehearsal) already on GitHub in a pinned tab; network or auth misbehaves: walk the same steps on it, narrate the push output from the rehearsal
-->
