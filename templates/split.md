<!-- ARCHETYPE: split — two worlds side by side; the visual contrast is the argument.
     Left = GUI window mock (always light), right = TermWindow (always dark).
     Budgets: 3 row pairs · left rows ≤5 words · right rows = command + ≤6-word dim comment.
     Rows reveal in pairs (same v-click index left and right). One payoff sentence allowed.
     Reference: why-linux/pages/click-vs-type.md -->
---
layout: default
transition: slide-left
---

<p class="eyebrow font-mono"><span class="text-amber-600 dark:text-amber-400">part {{N}}</span> &middot; {{SEGMENT_THEME}}</p>

### {{TITLE ≤4 words}}

<div class="grid grid-cols-2 gap-8 mt-6 items-stretch">

<div v-motion :initial="{ x: -40, opacity: 0 }" :enter="{ x: 0, opacity: 1, transition: { type: 'spring', stiffness: 90, delay: 150 } }">
<div class="from-left rounded-xl overflow-hidden border border-gray-400/40 shadow-lg bg-gray-100 text-gray-700 h-full">
  <div class="flex items-center gap-1.5 px-4 py-2.5 bg-gray-200 border-b border-gray-300">
    <span class="w-3 h-3 rounded-full bg-red-400"></span>
    <span class="w-3 h-3 rounded-full bg-yellow-400"></span>
    <span class="w-3 h-3 rounded-full bg-green-400"></span>
    <span class="ml-3 text-xs text-gray-500">{{GUI_APP_NAME}}</span>
  </div>
  <div class="px-5 py-4 space-y-4 text-sm">
    <div v-click="1" class="flex items-center gap-3">
      <mdi-{{ICON}} class="text-lg text-gray-400 flex-shrink-0" />
      <span>{{LEFT_ROW_1 ≤5 words}}</span>
    </div>
    <!-- …rows 2-3… -->
  </div>
</div>
</div>

<div v-motion :initial="{ x: 40, opacity: 0 }" :enter="{ x: 0, opacity: 1, transition: { type: 'spring', stiffness: 90, delay: 150 } }">
<div class="from-right h-full">
<TermWindow title="terminal">
<div v-click="1" class="mt-1">
  <div><span class="text-green-400">$</span> {{COMMAND_1}}</div>
  <div class="opacity-50 text-xs">{{COMMENT_1 ≤6 words}}</div>
</div>
<!-- …rows 2-3… -->
</TermWindow>
</div>
</div>

</div>

<div v-click="4" class="mark-safe mt-8 text-center text-lg opacity-85">
{{PAYOFF: one factual sentence; v-mark the key span}}
</div>

<!--
{{SPOKEN_SCRIPT}}
-->
