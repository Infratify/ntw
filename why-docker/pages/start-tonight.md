---
layout: default
transition: slide-down
---

### Start tonight

<div class="mt-12 max-w-2xl mx-auto space-y-10">

<div v-click="1" class="flex items-center gap-6">
  <logos-microsoft-windows-icon class="text-4xl flex-shrink-0" />
  <div>
    <div class="font-mono text-base"><span class="text-blue-600 dark:text-blue-400">PS C:\&gt;</span> <span class="type-line wide">winget install Docker.DockerDesktop</span></div>
    <p class="text-sm opacity-65 mt-1 mb-0">Docker Desktop in one command</p>
  </div>
</div>

<div v-click="2" class="flex items-center gap-6">
  <logos-apple class="text-4xl flex-shrink-0 dark:invert" />
  <div>
    <div class="font-mono text-base"><span class="type-line"><a href="https://www.docker.com/get-started/" target="_blank">docker.com/get-started</a></span></div>
    <p class="text-sm opacity-65 mt-1 mb-0">Docker Desktop for Mac</p>
  </div>
</div>

<div v-click="3" class="flex items-center gap-6">
  <logos-linux-tux class="text-4xl flex-shrink-0" />
  <div>
    <div class="font-mono text-base"><span class="text-green-600 dark:text-green-400">$</span> <span class="type-line xwide">curl -fsSL https://get.docker.com | sudo sh</span></div>
    <p class="text-sm opacity-65 mt-1 mb-0">Docker on Linux, one line</p>
  </div>
</div>

</div>

<div v-click="4" class="mark-safe mt-12 text-center text-lg opacity-85">
The first command tonight is <span v-mark="{ at: 4, color: '#2563eb', type: 'highlight' }">docker run hello-world</span>.
</div>

<!--
- captions to narrate: on Windows, one PowerShell command installs Docker Desktop, the app with the whale icon; it bundles everything used today
- on a Mac, the same Docker Desktop comes from the download page, Apple Silicon and Intel both fine
- on Linux, one copied line from docker's own website installs the engine, the same engine today's rented VM ran; sudo runs it with admin rights, the password prompt is normal
- for the AI from today: ollama and open-webui are both free and open source on GitHub; the exact commands from today's slides work on any machine with docker; the brain file downloads once, then everything runs offline
- landing line to say out loud: wherever you land, type docker run hello-world; it fetches a tiny image and prints a short note confirming everything works; tonight's setup is one install
- honest sizing note to say with it: the hello-world box is tiny; the AI boxes from today are several gigabytes, so start those on home wifi, not a hotspot
- ASK: type 1 if you will try docker run hello-world tonight; read the count back warmly
-->
