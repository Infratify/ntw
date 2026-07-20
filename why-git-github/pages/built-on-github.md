---
layout: default
transition: fade-out
---

### Built on GitHub

<div class="pop grid grid-cols-4 gap-x-6 gap-y-6 mt-6 max-w-3xl mx-auto text-center">

<div v-click="1">
  <logos-visual-studio-code class="text-5xl mx-auto" />
  <p class="text-base font-700 mt-3 mb-1"><a href="https://github.com/microsoft/vscode" target="_blank" class="!border-none inline-flex items-center gap-1 group">VS Code<mdi-open-in-new class="text-xs opacity-40 group-hover:opacity-100 transition-opacity" /></a></p>
  <p class="text-xs opacity-60 m-0">the editor itself</p>
</div>

<div v-click="1">
  <logos-firefox class="text-5xl mx-auto" />
  <p class="text-base font-700 mt-3 mb-1"><a href="https://github.com/mozilla-firefox/firefox" target="_blank" class="!border-none inline-flex items-center gap-1 group">Firefox<mdi-open-in-new class="text-xs opacity-40 group-hover:opacity-100 transition-opacity" /></a></p>
  <p class="text-xs opacity-60 m-0">the whole browser</p>
</div>

<div v-click="2">
  <logos-wordpress-icon class="text-5xl mx-auto dark:invert" />
  <p class="text-base font-700 mt-3 mb-1"><a href="https://github.com/WordPress/WordPress" target="_blank" class="!border-none inline-flex items-center gap-1 group">WordPress<mdi-open-in-new class="text-xs opacity-40 group-hover:opacity-100 transition-opacity" /></a></p>
  <p class="text-xs opacity-60 m-0">4 in 10 websites</p>
</div>

<div v-click="2">
  <logos-telegram class="text-5xl mx-auto" />
  <p class="text-base font-700 mt-3 mb-1"><a href="https://github.com/TelegramMessenger/Telegram-iOS" target="_blank" class="!border-none inline-flex items-center gap-1 group">Telegram<mdi-open-in-new class="text-xs opacity-40 group-hover:opacity-100 transition-opacity" /></a></p>
  <p class="text-xs opacity-60 m-0">its official apps</p>
</div>

<div v-click="3">
  <logos-python class="text-5xl mx-auto" />
  <p class="text-base font-700 mt-3 mb-1"><a href="https://github.com/python/cpython" target="_blank" class="!border-none inline-flex items-center gap-1 group">Python<mdi-open-in-new class="text-xs opacity-40 group-hover:opacity-100 transition-opacity" /></a></p>
  <p class="text-xs opacity-60 m-0">the language itself</p>
</div>

<div v-click="3">
  <logos-nodejs-icon class="text-5xl mx-auto" />
  <p class="text-base font-700 mt-3 mb-1"><a href="https://github.com/nodejs/node" target="_blank" class="!border-none inline-flex items-center gap-1 group">Node.js<mdi-open-in-new class="text-xs opacity-40 group-hover:opacity-100 transition-opacity" /></a></p>
  <p class="text-xs opacity-60 m-0">runs many websites</p>
</div>

<div v-click="4">
  <logos-linux-tux class="text-5xl mx-auto" />
  <p class="text-base font-700 mt-3 mb-1"><a href="https://github.com/torvalds/linux" target="_blank" class="!border-none inline-flex items-center gap-1 group">Linux<mdi-open-in-new class="text-xs opacity-40 group-hover:opacity-100 transition-opacity" /></a></p>
  <p class="text-xs opacity-60 m-0">the core program</p>
</div>

<div v-click="4">
  <logos-bitcoin class="text-5xl mx-auto" />
  <p class="text-base font-700 mt-3 mb-1"><a href="https://github.com/bitcoin/bitcoin" target="_blank" class="!border-none inline-flex items-center gap-1 group">Bitcoin<mdi-open-in-new class="text-xs opacity-40 group-hover:opacity-100 transition-opacity" /></a></p>
  <p class="text-xs opacity-60 m-0">every line public</p>
</div>

</div>

<div v-click="5" class="mark-safe mt-8 text-center text-lg opacity-85">
Their code sits on GitHub for <span v-mark="{ at: 5, color: '#dc2626', type: 'underline' }">anyone to read</span>.
</div>

<!--
Zoom out from our little stall page: the same site hosts the world's software, in the open.
Every name here is a live link to its actual repo. Click one or two while talking, ideally VS Code or Bitcoin, and just scroll: real files, real commit messages, real people arguing in the history. Say it plainly, because beginners assume otherwise: none of this needs an account, and nobody is going to stop you reading it.

[click] the editor most developers type in, and the browser some of you are using right now: full source code, public.
[click] WordPress powers roughly 4 in 10 websites on Earth; Telegram publishes the code of its official apps.
[click] the Python language and Node.js, the engine behind many of the web services you touch daily.
[click] the Linux kernel, the core program at the heart of yesterday's session, keeps an official live copy on GitHub, and Bitcoin's entire rulebook is a public repo; its money moves because people trust code they can read.
ASK: after the last name lands, ask the chat: "type the name on this slide that surprises you most." Open the winner's repo and scroll it, even if you already clicked another while talking; the audience's pick lands harder than a rehearsed one.
[click] most of these accept improvements from outsiders through a review page on GitHub, where a maintainer reads every changed line before it goes in; it is called a pull request, and making your first one is a rite of passage. The kernel keeps its own older process, but the code is there for anyone to study. Spoken numbers: GitHub hosts hundreds of millions of repos from over 100 million people. The tools we used today are the same ones these projects use; there is no separate "professional" git.
-->
