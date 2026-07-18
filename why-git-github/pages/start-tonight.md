---
layout: default
transition: slide-left
---

### Start tonight

<div class="mt-12 max-w-2xl mx-auto space-y-10">

<div v-click="1" class="flex items-center gap-6">
  <logos-github-icon class="text-4xl flex-shrink-0 dark:invert" />
  <div>
    <div class="font-mono text-base"><span class="type-line"><a href="https://github.com/signup" target="_blank">github.com/signup</a></span></div>
    <p class="text-sm opacity-65 mt-1 mb-0">the profile is the portfolio</p>
  </div>
</div>

<div v-click="2" class="flex items-center gap-6">
  <logos-microsoft-windows-icon class="text-4xl flex-shrink-0" />
  <div>
    <div class="font-mono text-base"><span class="text-blue-600 dark:text-blue-400">PS C:\&gt;</span> <span class="type-line">winget install Git.Git</span></div>
    <p class="text-sm opacity-65 mt-1 mb-0">git in one command</p>
  </div>
</div>

<div v-click="3" class="flex items-center gap-6">
  <logos-apple class="text-4xl flex-shrink-0 dark:invert" />
  <div>
    <div class="font-mono text-base"><span class="text-gray-500 dark:text-gray-400">~ %</span> <span class="type-line">git --version</span></div>
    <p class="text-sm opacity-65 mt-1 mb-0">macOS offers the install</p>
  </div>
</div>

</div>

<div v-click="4" class="mark-safe mt-12 text-center text-lg opacity-85">
Tonight's setup is one account and <span v-mark="{ at: 4, color: '#dc2626', type: 'highlight' }">one install</span>.
</div>

<!--
Captions to narrate: the GitHub account is free, no card, no trial, and the profile you saw earlier starts existing the moment you sign up. On Windows, one command in PowerShell installs git; if you set up WSL after yesterday's session, Ubuntu inside it comes with git ready. On a Mac, just typing git --version makes macOS offer to install its command line tools; accept and you're done.
Landing lines to say out loud: your first commit doesn't need the terminal at all; github.com has a built-in editor, and GitHub Desktop is a friendly mouse-first app if typing isn't home yet. Commit anything tomorrow: notes, a recipe, your CV. The graph doesn't care what it is, only that you saved it.
-->
