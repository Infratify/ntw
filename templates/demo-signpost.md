<!-- ARCHETYPE: demo-signpost — announces a screen switch to the real terminal.
     LiveBadge + a short fake transcript of what's about to happen for real + ≤3 gutter labels.
     Budgets: transcript ≤4 lines · gutter labels ≤4 words. The demo script lives in the notes.
     Reference: why-linux/pages/demo-ssh.md, demo-agent.md -->
---
layout: default
transition: slide-left
---

<div class="flex items-center gap-3 mb-2">
  <LiveBadge />
  <h3 class="!m-0">{{TITLE ≤4 words}}</h3>
</div>

<div class="grid grid-cols-2 gap-10 mt-10 items-center">

<div>
<TermWindow title="{{TOOL}}: {{ONE_LINE_WHAT_IT_IS}}">
<div><span class="text-green-400">$</span> {{COMMAND}}</div>
<div v-click="1" class="opacity-80 mt-1">{{EXPECTED_OUTPUT_LINE}}</div>
</TermWindow>
</div>

<div class="space-y-7">
  <div v-click="2" class="note-row items-center">
    <mdi-{{ICON_1}} class="note-ico text-amber-600 dark:text-amber-400" />
    <p><b>{{LABEL_1 ≤4 words}}</b></p>
  </div>
  <!-- …up to 3 items… -->
</div>

</div>

<!--
Labels to narrate:
[click] {{FULL_SENTENCE_BEHIND_EACH_LABEL}}

DEMO SCRIPT (~{{MINUTES}} min):
1. {{STEP}}
FALLBACK: {{WHAT_TO_DO_IF_IT_BREAKS}}
-->
