<!-- ARCHETYPE: terminal-content — the list IS a terminal printout; the deck motif carries it.
     Budgets: ≤8 prompt lines · trailing hint = a dim mdi icon (preferred) or ≤3-word # comment.
     Reveal lines in pairs. One payoff sentence allowed below the window.
     Reference: why-linux/pages/eight-commands.md, demo-toybox.md -->
---
layout: default
transition: slide-left
---

<div class="flex items-center gap-3 mb-2">
  <LiveBadge />
  <h3 class="!m-0">{{TITLE ≤4 words}}</h3>
</div>

<div class="term-print max-w-2xl mx-auto mt-6">
<TermWindow title="{{WINDOW_TITLE}}">
<div v-click="1" class="py-0.5 flex items-center justify-between"><span><span class="text-green-400">$</span> {{COMMAND_1}}</span><mdi-{{HINT_ICON_1}} class="text-gray-500" /></div>
<!-- …repeat per line, two share a v-click index… -->
</TermWindow>
</div>

<div v-click="{{LAST}}" class="mark-safe mt-8 text-center text-lg opacity-85">
{{PAYOFF: one factual sentence; v-mark the key span}}
</div>

<!--
{{WHAT_EACH_LINE_IS, narrated as it appears}}
DEMO SCRIPT: {{STEPS_AND_PREP}}
-->
