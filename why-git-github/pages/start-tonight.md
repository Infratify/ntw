---
layout: default
transition: slide-right
---

### Start tonight

<div class="mt-10 max-w-3xl mx-auto grid grid-cols-2 gap-x-10 gap-y-10">

<div v-click="1" class="flex items-center gap-5">
  <mdi-graph-outline class="text-3xl flex-shrink-0 text-red-600 dark:text-red-400" />
  <div>
    <div class="font-mono text-base"><span class="type-line"><a href="https://opariffazman.com/gitverse/" target="_blank">opariffazman.com/gitverse</a></span></div>
    <p class="text-sm opacity-65 mt-1 mb-0">practice, nothing to install</p>
  </div>
</div>

<div v-click="2" class="flex items-center gap-5">
  <logos-github-icon class="text-3xl flex-shrink-0 dark:invert" />
  <div>
    <div class="font-mono text-base"><span class="type-line"><a href="https://github.com/signup" target="_blank">github.com/signup</a></span></div>
    <p class="text-sm opacity-65 mt-1 mb-0">the profile is the portfolio</p>
  </div>
</div>

<div v-click="3" class="flex items-center gap-5">
  <logos-microsoft-windows-icon class="text-3xl flex-shrink-0" />
  <div>
    <div class="font-mono text-base"><span class="text-blue-600 dark:text-blue-400">PS C:\&gt;</span> <span class="type-line">winget install Git.Git</span></div>
    <p class="text-sm opacity-65 mt-1 mb-0">git in one command</p>
  </div>
</div>

<div v-click="4" class="flex items-center gap-5">
  <logos-apple class="text-3xl flex-shrink-0 dark:invert" />
  <div>
    <div class="font-mono text-base"><span class="text-gray-500 dark:text-gray-400">~ %</span> <span class="type-line">git --version</span></div>
    <p class="text-sm opacity-65 mt-1 mb-0">macOS offers the install</p>
  </div>
</div>

</div>

<div v-click="5" class="mark-safe mt-14 text-center text-lg opacity-85">
The first step needs <span v-mark="{ at: 5, color: '#dc2626', type: 'highlight' }">no install</span>.
</div>

<!--
Captions to narrate:
- gitverse = the sandbox from part 2, the one that drew the branch graph while I typed
  - a web page: no account, no download, nothing to break; open it tonight, repeat today's commands until the shapes feel obvious
  - runs every cheatsheet command except push (nothing there leaves your browser)
  - worth saying: the sandbox is itself a GitHub Pages site on a public repo, hosted free, exactly how our stall page went live twenty minutes ago
- GitHub account: free, no card, no trial; the profile you saw earlier starts existing the moment you sign up
- Windows: one command in PowerShell (the terminal Windows ships with) installs git
  - WSL from yesterday's session: Ubuntu inside it comes with git ready
- Mac: typing git --version makes macOS offer its command line tools; accept and you're done
- anyone the agent demo hooked: opencode is free, installs on Windows, Mac and Linux, runs in the same terminal you just installed git into
  - point it at a folder you have committed FIRST, never one you have not; the whole safety net is git diff and git restore

ASK (as the captions land):
- chat: "type the first thing you would commit tomorrow. Notes, a recipe, your CV, anything"
- read a handful aloud; a first commit named out loud happens, a vague plan does not

Landing lines to say out loud:
- your first commit doesn't need the terminal: github.com has a built-in editor; GitHub Desktop is a friendly mouse-first app if typing isn't home yet
- commit anything tomorrow: notes, a recipe, your CV; the graph only cares that you saved it
-->
