---
layout: default
transition: slide-down
---

### Start tonight

<div class="mt-12 max-w-2xl mx-auto space-y-10">

<div v-click="1" class="flex items-center gap-6">
  <logos-docker-icon class="text-4xl flex-shrink-0" />
  <div>
    <div class="font-mono text-base"><span class="type-line"><a href="https://labs.play-with-docker.com" target="_blank">labs.play-with-docker.com</a></span></div>
    <p class="text-sm opacity-65 mt-1 mb-0">docker in the browser, free</p>
  </div>
</div>

<div v-click="2" class="flex items-center gap-6">
  <logos-microsoft-windows-icon class="text-4xl flex-shrink-0" />
  <div>
    <div class="font-mono text-base"><span class="text-blue-600 dark:text-blue-400">PS C:\&gt;</span> <span class="type-line wide">winget install Docker.DockerDesktop</span></div>
    <p class="text-sm opacity-65 mt-1 mb-0">Docker Desktop in one command</p>
  </div>
</div>

<div v-click="3" class="flex items-center gap-6">
  <logos-apple class="text-4xl flex-shrink-0 dark:invert" />
  <div>
    <div class="font-mono text-base"><span class="type-line"><a href="https://www.docker.com/get-started/" target="_blank">docker.com/get-started</a></span></div>
    <p class="text-sm opacity-65 mt-1 mb-0">Docker Desktop for Mac</p>
  </div>
</div>

</div>

<div v-click="4" class="mark-safe mt-12 text-center text-lg opacity-85">
The first command tonight is <span v-mark="{ at: 4, color: '#2563eb', type: 'highlight' }">docker run hello-world</span>.
</div>

<!--
Captions to narrate: play-with-docker is a free playground run by Docker itself: sign in with a free Docker Hub account and a Linux machine appears in the browser tab for a few hours. Nothing to install, works on any laptop, including the one you are watching this on.
On Windows, one PowerShell command installs Docker Desktop, the app with the whale icon; it bundles everything used today. On a Mac, the same Docker Desktop comes from the download page; both Apple Silicon and Intel are fine.
Landing line to say out loud: wherever you land, type docker run hello-world. It fetches a tiny image and prints a short note confirming everything works, the exact box that opened today's first demo. Tonight's setup is one account or one install.
-->
