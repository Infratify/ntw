---
layout: default
transition: fade-out
---

<div class="flex items-center gap-3 mb-2">
  <LiveBadge />
  <h3 class="!m-0">Snap them together</h3>
</div>

<div class="term-print max-w-2xl mx-auto mt-6 space-y-4">

<div v-click="1">
<TermWindow title="the pipe | passes output to the next command">
<div><span class="text-green-400">$</span> ls <span class="text-purple-400">|</span> grep txt</div>
<div class="opacity-50 text-xs mt-1">only the text files, out of everything in here</div>
</TermWindow>
</div>

<div v-click="2">
<TermWindow title="find looks deeper than ls can see">
<div><span class="text-green-400">$</span> find . -name <span class="text-amber-300">"*.txt"</span></div>
<div class="opacity-50 text-xs mt-1">the same text files, even ones tucked in subfolders</div>
</TermWindow>
</div>

<div v-click="3">
<TermWindow title="top: a live dashboard, one word">
<div><span class="text-green-400">$</span> top</div>
<div class="opacity-50 text-xs mt-1">everything running on this machine, updating live</div>
</TermWindow>
</div>

</div>

<div v-click="4" class="mark-safe mt-8 text-center text-lg opacity-85">
Small commands snap together like <span v-mark="{ at: 4, color: '#d97706', type: 'highlight' }">LEGO bricks</span>.
</div>

<!--
[click] ls | grep txt: same ls from the cheatsheet, piped into a new command, grep, that keeps only the lines matching a word. The | key (shift + backslash) hands the first command's output straight into the second, no typing it out again.
[click] find . -name "*.txt": one command, no pipe needed, but it searches every subfolder underneath, not just the one you're standing in. Same question as before, deeper reach.
[click] top: one word, no arguments, and it opens a live, updating dashboard, process names, CPU, memory. Press q to quit it.
Landing line to say out loud: small tools, each doing one job, combined on the fly. This is why pros live in the terminal: nothing else gives this much control per keystroke.

DEMO SCRIPT (~7 min), on the server:
1. ls | grep txt
2. find . -name "*.txt"
3. top                     ← let it sit for a few seconds, then press q
Prep the night before: a couple of .txt files sitting in the home directory (notes.txt and todo.txt, already placed for the eight-commands demo) so ls | grep and find return real matches; sudo apt install btop for the finale.
Segment finale: btop. "This is mission control for a machine; sysadmins stare at this instead of Task Manager." Let it breathe on screen for 30 seconds.
Beat after btop: breathe, invite chat reactions. Around the 55-minute mark; offer a 2-minute stretch if energy dips.
FALLBACK: if the .txt files are missing, touch one live first (the same touch from the eight-commands demo) or search somewhere guaranteed to match, like find /etc -name "*.conf".
-->
