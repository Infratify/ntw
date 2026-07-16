---
layout: default
transition: slide-left
---

### Start tonight

<div class="mt-12 max-w-2xl mx-auto space-y-10">

<div v-click="1" class="flex items-center gap-6">
  <logos-microsoft-windows-icon class="text-4xl flex-shrink-0" />
  <div>
    <div class="font-mono text-base"><span class="text-blue-600 dark:text-blue-400">PS C:\&gt;</span> <span class="type-line">wsl --install</span></div>
    <p class="text-sm opacity-65 mt-1 mb-0">One command in PowerShell. A full Ubuntu inside Windows, free and official.</p>
  </div>
</div>

<div v-click="2" class="flex items-center gap-6">
  <logos-apple class="text-4xl flex-shrink-0 dark:invert" />
  <div>
    <div class="font-mono text-base"><span class="text-gray-500 dark:text-gray-400">~ %</span> <span class="type-line">open Terminal</span></div>
    <p class="text-sm opacity-65 mt-1 mb-0">macOS is Unix underneath. Today's commands already work.</p>
  </div>
</div>

<div v-click="3" class="flex items-center gap-6">
  <logos-linux-tux class="text-4xl flex-shrink-0" />
  <div>
    <div class="font-mono text-base"><span class="type-line"><a href="https://ubuntu.com/download" target="_blank">ubuntu.com/download</a></span></div>
    <p class="text-sm opacity-65 mt-1 mb-0">Linux loves old hardware. A 10-year-old laptop makes a great lab.</p>
  </div>
</div>

</div>

<div v-click="4" class="mark-safe mt-12 text-center text-lg opacity-85">
Then repeat the eight commands until they feel boring.
<span v-mark="{ at: 4, color: '#d97706', type: 'highlight' }">Boring means fluent.</span>
</div>

<!--
Lean on WSL hard: most of this audience is on Windows and doesn't know Linux is one command away. "Will it break my Windows?" No, WSL doesn't touch it.
-->
