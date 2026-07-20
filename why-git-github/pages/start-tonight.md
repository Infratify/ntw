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
Captions to narrate: the first line is the sandbox from part 2, the one that drew the branch graph while I typed. It is a web page, so there is no account, no download and nothing to break; open it tonight and repeat today's commands until the shapes feel obvious. It runs every command from the cheatsheet except push, because nothing there leaves your browser. Worth saying: that sandbox is itself a GitHub Pages site on a public repo, hosted free, exactly the way our stall page went live twenty minutes ago.
The GitHub account is free, no card, no trial, and the profile you saw earlier starts existing the moment you sign up. On Windows, one command in PowerShell, the terminal Windows ships with, installs git; if you set up WSL after yesterday's session, Ubuntu inside it comes with git ready. On a Mac, just typing git --version makes macOS offer to install its command line tools; accept and you're done.
For anyone the agent demo hooked: opencode is free, it installs on Windows, Mac and Linux, and it runs in the same terminal you just installed git into. Point it at a folder you have committed first, never one you have not, because the whole safety net is git diff and git restore.
Landing lines to say out loud: your first commit doesn't need the terminal at all; github.com has a built-in editor, and GitHub Desktop is a friendly mouse-first app if typing isn't home yet. Commit anything tomorrow: notes, a recipe, your CV. The graph doesn't care what it is, only that you saved it.
-->
