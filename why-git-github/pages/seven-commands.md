---
layout: default
transition: fade-out
---

<div class="flex items-center gap-3 mb-2">
  <LiveBadge />
  <h3 class="!m-0">Seven commands</h3>
</div>

<div class="term-print max-w-2xl mx-auto mt-8">
<TermWindow title="cheatsheet.txt">
<div><span class="text-green-400">$</span> cat cheatsheet.txt</div>
<div class="grid grid-cols-2 gap-x-8 mt-2">
  <div v-click="1" class="py-1"><span class="text-amber-300 font-700 inline-block w-28">git init</span><span class="text-gray-400">start the history</span></div>
  <div v-click="1" class="py-1"><span class="text-amber-300 font-700 inline-block w-28">git status</span><span class="text-gray-400">what changed?</span></div>
  <div v-click="2" class="py-1"><span class="text-amber-300 font-700 inline-block w-28">git add</span><span class="text-gray-400">choose what to save</span></div>
  <div v-click="2" class="py-1"><span class="text-amber-300 font-700 inline-block w-28">git commit</span><span class="text-gray-400">save a snapshot</span></div>
  <div v-click="3" class="py-1"><span class="text-amber-300 font-700 inline-block w-28">git log</span><span class="text-gray-400">list every snapshot</span></div>
  <div v-click="3" class="py-1"><span class="text-amber-300 font-700 inline-block w-28">git diff</span><span class="text-gray-400">show the edits</span></div>
  <div v-click="4" class="py-1"><span class="text-amber-300 font-700 inline-block w-28">git restore</span><span class="text-gray-400">bring it back</span></div>
</div>
<div v-click="5" class="mt-3"><span class="text-green-400">$</span> <span class="animate-pulse">▌</span></div>
</TermWindow>
</div>

<div v-click="5" class="mark-safe mt-8 text-center text-lg opacity-85">
These seven run today's whole demo, so <span v-mark="{ at: 5, color: '#dc2626', type: 'underline' }">screenshot this one</span>.
</div>

<!--
Narrate in pairs as they print:
[click] init starts the history for a folder, once. status answers "what changed since my last save?"; it's the command you'll type most.
[click] add picks which changes go into the next snapshot, like choosing what's in the photo. commit takes the snapshot and attaches your note.
[click] log lists every snapshot. diff shows the exact edited lines before you save them.
[click] and restore is the time travel: bring any file back to the last saved version.
[click] everything I demo today is these seven, typed slowly.

DEMO SCRIPT (~12 min), on the demo laptop, terminal + editor side by side:
1. mkdir stall-page && cd stall-page && git init
2. create index.html in the editor: a heading for a nasi lemak stall + one tagline line
3. git status   (untracked, red) → git add index.html → git status (green) → git commit -m "first draft"
4. edit: add a short menu list → git diff (green + lines) → git add -A && git commit -m "add menu"
5. edit: add opening hours → git add -A && git commit -m "add opening hours"
6. git log --oneline   (three lines, read the messages aloud, newest on top)
7. sabotage: delete half the file in the editor, save, show the broken page in the browser
8. git diff   (red minus lines: git saw everything) → git restore index.html → file is whole again
Narrate 8 as the "never forget" proof and name each command as it appears on this cheatsheet.
Night before: sudo apt install git gh (both in Ubuntu 24.04); git config --global user.name + user.email; gh auth login on the demo GitHub account (parts 2 and 3 need it).
FALLBACK: keep a finished twin repo (stall-page-backup) one cd away; if live typing derails, switch and continue from its log.
-->
