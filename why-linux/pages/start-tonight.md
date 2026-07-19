---
layout: default
transition: slide-right
---

### Start tonight

<div class="mt-12 max-w-2xl mx-auto space-y-10">

<div v-click="1" class="flex items-center gap-6">
  <logos-microsoft-windows-icon class="text-4xl flex-shrink-0" />
  <div>
    <div class="font-mono text-base"><span class="text-blue-600 dark:text-blue-400">PS C:\&gt;</span> <span class="type-line">wsl --install</span></div>
    <p class="text-sm opacity-65 mt-1 mb-0">a full Ubuntu inside Windows</p>
  </div>
</div>

<div v-click="2" class="flex items-center gap-6">
  <logos-apple class="text-4xl flex-shrink-0 dark:invert" />
  <div>
    <div class="font-mono text-base"><span class="text-gray-500 dark:text-gray-400">&#8984; space</span> <span class="type-line">terminal</span></div>
    <p class="text-sm opacity-65 mt-1 mb-0">macOS is Unix underneath</p>
  </div>
</div>

<div v-click="3" class="flex items-center gap-6">
  <logos-linux-tux class="text-4xl flex-shrink-0" />
  <div>
    <div class="font-mono text-base"><span class="type-line"><a href="https://ubuntu.com/download" target="_blank">ubuntu.com/download</a></span></div>
    <p class="text-sm opacity-65 mt-1 mb-0">old laptops make great labs</p>
  </div>
</div>

</div>

<div v-click="4" class="mark-safe mt-12 text-center text-lg opacity-85">
Repeat the eight commands until they feel <span v-mark="{ at: 4, color: '#d97706', type: 'highlight' }">boring</span>.
</div>

<!--
Captions to narrate: one command in PowerShell installs a full, official, free Ubuntu inside Windows. On a Mac, press command-space and type "terminal": the app is already there, because macOS is built on Unix, the older system Linux was modelled on, so today's commands already work in it. And Linux loves old hardware: a 10-year-old laptop makes a great lab.
Landing line to say out loud: boring means fluent.
Lean on WSL hard: most of this audience is on Windows and doesn't know Linux is one command away. "Will it break my Windows?" No, WSL doesn't touch it.
-->
