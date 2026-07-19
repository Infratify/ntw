---
layout: default
transition: slide-up
---

<div class="flex items-center gap-3 mb-2">
  <LiveBadge />
  <h3 class="!m-0">Click vs type</h3>
</div>

<!-- One panel that v-switches: the Windows install wizard advances click by
     click, then the final state swaps the whole window to a terminal. The
     v-switch is the ONLY click driver and nothing static follows it, so none
     of the earlier v-switch suppression bugs apply. -->
<div class="max-w-2xl mx-auto mt-8">
<div class="relative min-h-[270px]">

<v-switch>

<template #0>
<div class="absolute inset-0 pop-in">
  <div v-motion :initial="{ x: -30, opacity: 0 }" :enter="{ x: 0, opacity: 1, transition: { type: 'spring', stiffness: 90 } }" class="rounded-xl overflow-hidden border border-gray-400/40 shadow-lg bg-gray-100 text-gray-700">
    <div class="flex items-center gap-1.5 px-4 py-2.5 bg-gray-200 border-b border-gray-300"><span class="w-3 h-3 rounded-full bg-red-400"></span><span class="w-3 h-3 rounded-full bg-yellow-400"></span><span class="w-3 h-3 rounded-full bg-green-400"></span><span class="ml-3 text-xs text-gray-500">Install VLC on Windows</span></div>
    <div class="px-6 py-6 flex flex-col items-center text-center min-h-[200px]">
      <mdi-web class="text-4xl text-gray-400" />
      <p class="text-sm mt-3 mb-3">videolan.org &middot; pick your Windows version</p>
      <span class="px-4 py-1.5 rounded bg-blue-500 text-white text-xs">Download</span>
      <div class="mt-auto flex items-center gap-1 text-amber-500 text-lg"><mdi-cursor-default-click /></div>
    </div>
  </div>
</div>
</template>

<template #1>
<div class="absolute inset-0 pop-in">
  <div class="rounded-xl overflow-hidden border border-gray-400/40 shadow-lg bg-gray-100 text-gray-700">
    <div class="flex items-center gap-1.5 px-4 py-2.5 bg-gray-200 border-b border-gray-300"><span class="w-3 h-3 rounded-full bg-red-400"></span><span class="w-3 h-3 rounded-full bg-yellow-400"></span><span class="w-3 h-3 rounded-full bg-green-400"></span><span class="ml-3 text-xs text-gray-500">Install VLC on Windows</span></div>
    <div class="px-6 py-6 flex flex-col items-center text-center min-h-[200px]">
      <mdi-file-download-outline class="text-4xl text-gray-400" />
      <p class="text-sm mt-3 mb-3">vlc-3.0-win64.exe</p>
      <span class="px-4 py-1.5 rounded bg-blue-500 text-white text-xs">Run</span>
      <div class="mt-auto flex items-center gap-1 text-amber-500 text-lg"><mdi-cursor-default-click /><mdi-cursor-default-click /></div>
    </div>
  </div>
</div>
</template>

<template #2>
<div class="absolute inset-0 pop-in">
  <div class="rounded-xl overflow-hidden border border-gray-400/40 shadow-lg bg-gray-100 text-gray-700">
    <div class="flex items-center gap-1.5 px-4 py-2.5 bg-gray-200 border-b border-gray-300"><span class="w-3 h-3 rounded-full bg-red-400"></span><span class="w-3 h-3 rounded-full bg-yellow-400"></span><span class="w-3 h-3 rounded-full bg-green-400"></span><span class="ml-3 text-xs text-gray-500">Install VLC on Windows</span></div>
    <div class="px-6 py-6 flex flex-col items-center text-center min-h-[200px]">
      <mdi-shield-alert-outline class="text-4xl text-amber-500" />
      <p class="text-sm mt-3 mb-3">Allow this app to make changes?</p>
      <div class="flex gap-2"><span class="px-4 py-1.5 rounded bg-blue-500 text-white text-xs">Yes</span><span class="px-4 py-1.5 rounded border border-gray-400 text-gray-500 text-xs">No</span></div>
      <div class="mt-auto flex items-center gap-1 text-amber-500 text-lg"><mdi-cursor-default-click /><mdi-cursor-default-click /><mdi-cursor-default-click /></div>
    </div>
  </div>
</div>
</template>

<template #3>
<div class="absolute inset-0 pop-in">
  <div class="rounded-xl overflow-hidden border border-gray-400/40 shadow-lg bg-gray-100 text-gray-700">
    <div class="flex items-center gap-1.5 px-4 py-2.5 bg-gray-200 border-b border-gray-300"><span class="w-3 h-3 rounded-full bg-red-400"></span><span class="w-3 h-3 rounded-full bg-yellow-400"></span><span class="w-3 h-3 rounded-full bg-green-400"></span><span class="ml-3 text-xs text-gray-500">Install VLC on Windows</span></div>
    <div class="px-6 py-6 flex flex-col items-center text-center min-h-[200px]">
      <mdi-vlc class="text-4xl text-orange-500" />
      <p class="text-sm mt-3 mb-3">VLC Setup &middot; choose components</p>
      <span class="px-4 py-1.5 rounded bg-blue-500 text-white text-xs">Install</span>
      <div class="mt-auto flex items-center gap-1 text-amber-500 text-lg"><mdi-cursor-default-click /><mdi-cursor-default-click /><mdi-cursor-default-click /><mdi-cursor-default-click /></div>
    </div>
  </div>
</div>
</template>

<template #4>
<div class="absolute inset-0 pop-in">
  <div class="rounded-xl overflow-hidden border border-gray-400/40 shadow-lg bg-gray-100 text-gray-700">
    <div class="flex items-center gap-1.5 px-4 py-2.5 bg-gray-200 border-b border-gray-300"><span class="w-3 h-3 rounded-full bg-red-400"></span><span class="w-3 h-3 rounded-full bg-yellow-400"></span><span class="w-3 h-3 rounded-full bg-green-400"></span><span class="ml-3 text-xs text-gray-500">Install VLC on Windows</span></div>
    <div class="px-6 py-6 flex flex-col items-center text-center min-h-[200px]">
      <mdi-progress-download class="text-4xl text-gray-400" />
      <p class="text-sm mt-3 mb-3">Installing&hellip;</p>
      <div class="w-40 h-2 rounded-full bg-gray-300 overflow-hidden"><div class="h-full w-3/5 bg-blue-500"></div></div>
      <div class="mt-auto flex items-center gap-1 text-amber-500 text-lg"><mdi-cursor-default-click /><mdi-cursor-default-click /><mdi-cursor-default-click /><mdi-cursor-default-click /><mdi-cursor-default-click /></div>
    </div>
  </div>
</div>
</template>

<template #5>
<div class="absolute inset-0 pop-in">
  <div class="rounded-xl overflow-hidden border border-gray-400/40 shadow-lg bg-gray-100 text-gray-700">
    <div class="flex items-center gap-1.5 px-4 py-2.5 bg-gray-200 border-b border-gray-300"><span class="w-3 h-3 rounded-full bg-red-400"></span><span class="w-3 h-3 rounded-full bg-yellow-400"></span><span class="w-3 h-3 rounded-full bg-green-400"></span><span class="ml-3 text-xs text-gray-500">Install VLC on Windows</span></div>
    <div class="px-6 py-6 flex flex-col items-center text-center min-h-[200px]">
      <mdi-check-circle class="text-4xl text-green-500" />
      <p class="text-sm mt-3 mb-3">Installation complete</p>
      <span class="px-4 py-1.5 rounded bg-blue-500 text-white text-xs">Finish</span>
      <div class="mt-auto flex items-center gap-1 text-amber-600 text-lg font-700"><mdi-cursor-default-click /><span class="text-sm">six clicks</span></div>
    </div>
  </div>
</div>
</template>

<template #6>
<div class="absolute inset-0 pop-in">
<TermWindow title="terminal">
<div class="mt-1">
  <div><span class="text-green-400">$</span> sudo apt install vlc</div>
  <div class="opacity-50 text-xs mb-3">found, fetched, installed from Ubuntu's servers</div>
  <div><span class="text-green-400">$</span> vlc --version</div>
  <div class="opacity-50 text-xs">installed and ready, same window, no mouse</div>
</div>
</TermWindow>
<div class="mark-safe mt-5 text-center text-lg opacity-85">
The same app installs in <span v-mark="{ at: 6, color: '#d97706', type: 'underline' }">one line</span>.
</div>
</div>
</template>

</v-switch>

</div>
</div>

<!--
Everyone has installed VLC, or a player like it, on Windows, so walk the room through it. We start on the download page.
[click] run the vlc.exe you downloaded. [click] Windows asks "allow this app to make changes?", click Yes. [click] the VLC setup opens, pick components, click Install. [click] wait for the bar to fill. [click] finally click Finish. That is six clicks and a website hunt for one media player.
[click] Now the same job on Linux, and the whole window becomes a terminal. One line, sudo apt install vlc, finds VLC in Ubuntu's official store, downloads it, installs it. "sudo" means "as the administrator", the password prompt is normal. vlc --version then proves it is installed and ready, in the same window, no mouse. Landing line to say out loud as the underline lands: same program, one typed line instead of six clicks.

DEMO SCRIPT (~8 min), on the server:
1. sudo apt install vlc          (narrate the fetch; vlc pulls a fair few libraries, so talk over the download, ~20-40s on a fresh box)
2. vlc --version                 (prints the VLC version banner: proof it installed and runs; run as the normal user, vlc refuses to launch playback as root)
3. optional if a sound file is present: cvlc --play-and-exit sample.mp3   (headless servers usually have no audio device; only do this if you tested it the night before, else skip)
Point made out loud: found and installed with one typed line, no website, no wizard, no mouse.
Night before / prep: run sudo apt update so the install resolves instantly; vlc is in Ubuntu's universe repo on every current release (22.04 / 24.04), package name is simply vlc. Pre-download the .deb sets for both vlc and the htop fallback (apt-get install --download-only vlc htop) as an offline safety net; cached debs install even if the network stalls mid-demo. Do a dry run of vlc --version so you know the exact output.
FALLBACK: if vlc is slow or the network stalls, kill it and install a tiny package live instead (e.g. sudo apt install htop, then run htop) and narrate it as the same one-line idea; the point is the single command, not the specific app.
-->
