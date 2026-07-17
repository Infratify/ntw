<!-- ARCHETYPE: diagram — one animated SVG component IS the slide; words stay out of its way.
     Budgets: ≤3 gutter items · each item = icon + bold LABEL ≤3 words + optional dim TAIL ≤4 words.
     Set `clicks:` in frontmatter to the component's stage count. No boxes around gutter items.
     Components: LayerStack (stacks), RequestPath (request hops), FlowGraph (flowcharts).
     Reference: why-linux/pages/stack.md, every-tap.md -->
---
layout: default
transition: slide-left
clicks: {{COMPONENT_STAGES}}
---

### {{TITLE ≤4 words}}

<div class="grid grid-cols-2 gap-10 mt-8 items-center">

<div>
  <{{COMPONENT}} />
</div>

<div class="space-y-7">
  <div v-click="1" class="note-row items-center">
    <mdi-{{ICON_1}} class="note-ico text-amber-600 dark:text-amber-400" />
    <p><b>{{LABEL_1}}</b> <span class="opacity-60">&middot; {{TAIL_1}}</span></p>
  </div>
  <!-- …up to 3 items… -->
</div>

</div>

<!--
Labels to narrate:
[click] {{FULL_SENTENCE_BEHIND_LABEL_1}}
[click] {{FULL_SENTENCE_BEHIND_LABEL_2}}
-->
