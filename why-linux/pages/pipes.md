---
layout: default
transition: fade-out
---

<div class="flex items-center gap-3 mb-2">
  <LiveBadge />
  <h3 class="!m-0">Snap them together</h3>
</div>

<div class="term-print max-w-2xl mx-auto mt-8 space-y-5">

<div v-click="1">
<TermWindow title="the pipe | passes output to the next command">
<div><span class="text-green-400">$</span> du -ah . <span class="text-purple-400">|</span> sort -rh <span class="text-purple-400">|</span> head -5</div>
<div class="opacity-50 text-xs mt-1">the five biggest files in here, instantly</div>
</TermWindow>
</div>

<div v-click="2">
<TermWindow title="one line vs a giant log file">
<div><span class="text-green-400">$</span> grep "error" app.log <span class="text-purple-400">|</span> wc -l</div>
<div class="opacity-50 text-xs mt-1">every error counted before Ctrl+F even opens</div>
</TermWindow>
</div>

</div>

<div v-click="3" class="mark-safe mt-8 text-center text-base opacity-85">
Small commands snap together like <span v-mark="{ at: 3, color: '#d97706', type: 'highlight' }">LEGO bricks</span>. All of DevOps builds on this.
</div>

<div v-click="4" class="mark-safe mt-4 text-center text-xl">
This is why pros <span v-mark="{ at: 4, color: '#d97706', type: 'underline' }">live in the terminal</span>.
</div>

<!--
DEMO SCRIPT (~7 min): run both one-liners on the server (prepare an app.log beforehand).
Segment finale: btop. "This is mission control for a machine; sysadmins stare at this instead of Task Manager." Let it breathe on screen for 30 seconds.
Beat after btop: breathe, invite chat reactions. Around the 55-minute mark; offer a 2-minute stretch if energy dips.
-->
