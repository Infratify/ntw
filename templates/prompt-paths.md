<!-- ARCHETYPE: prompt-paths — "here's how you start", one typed prompt line per platform/path.
     Budgets: 3 paths · typed line stays a real command or clickable URL · CAPTION ≤5 words.
     URLs are always <a href> links. The .type-line span types itself on reveal.
     Reference: why-linux/pages/start-tonight.md -->
---
layout: default
transition: slide-left
---

### {{TITLE ≤4 words}}

<div class="mt-12 max-w-2xl mx-auto space-y-10">

<div v-click="1" class="flex items-center gap-6">
  <logos-{{PLATFORM_LOGO}} class="text-4xl flex-shrink-0" />
  <div>
    <div class="font-mono text-base"><span class="text-blue-600 dark:text-blue-400">{{PROMPT}}</span> <span class="type-line">{{TYPED_COMMAND}}</span></div>
    <p class="text-sm opacity-65 mt-1 mb-0">{{CAPTION ≤5 words}}</p>
  </div>
</div>

<!-- …paths 2-3 (a URL path wraps the typed text in <a href>)… -->

</div>

<div v-click="4" class="mark-safe mt-12 text-center text-lg opacity-85">
{{PAYOFF: one factual sentence; v-mark ≤3-word span}}
</div>

<!--
{{SPOKEN_SCRIPT: the reassurance behind each path}}
-->
