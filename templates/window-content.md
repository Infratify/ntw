<!-- ARCHETYPE: window-content — a light GUI window mock IS the slide (the counterpart of
     terminal-content for things that live in a browser or desktop app: a GitHub PR page,
     a cloud console, a settings screen). The window is ALWAYS light (GUI mocks are light
     by design); rows inside reveal with v-click. No real URLs in the title bar (visible
     URLs must be styled links, so mocks name the app instead).
     Budgets: ≤4 rows · each row ≤5 words of text (icons + chips carry the rest) ·
     one payoff sentence allowed below the window.
     Reference: why-git-github/pages/pull-request.md, green-squares.md -->
---
layout: default
transition: slide-left
---

### {{TITLE ≤4 words}}

<div class="max-w-2xl mx-auto mt-8">
<div class="rounded-xl overflow-hidden border border-gray-400/40 shadow-lg bg-gray-100 text-gray-700">
  <div class="flex items-center gap-1.5 px-4 py-2.5 bg-gray-200 border-b border-gray-300">
    <span class="w-3 h-3 rounded-full bg-red-400"></span>
    <span class="w-3 h-3 rounded-full bg-yellow-400"></span>
    <span class="w-3 h-3 rounded-full bg-green-400"></span>
    <span class="ml-3 text-xs text-gray-500">{{APP_NAME, no URLs}}</span>
  </div>
  <div class="px-6 py-5 space-y-4 text-sm">
    <div v-click="1" class="flex items-center gap-3">
      <mdi-{{ICON_1}} class="text-lg text-{{COLOR}}-600 flex-shrink-0" />
      <span>{{ROW_1 ≤5 words}}</span>
    </div>
    <!-- …rows 2-4; chips/buttons are tinted spans, e.g.
         <span class="px-2 py-0.5 rounded bg-green-600 text-white text-xs font-600">Merge</span> -->
  </div>
</div>
</div>

<div v-click="{{LAST}}" class="mark-safe mt-8 text-center text-lg opacity-85">
{{PAYOFF: one factual sentence; v-mark ≤3-word span}}
</div>

<!--
{{SPOKEN_SCRIPT: the full sentence behind each row, [click]-timed}}
-->
