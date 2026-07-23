---
layout: default
transition: slide-up
---

<p class="eyebrow font-mono"><span class="text-purple-600 dark:text-purple-400">part 3</span> &middot; fully automated</p>

### Reviewed like code

<div class="max-w-2xl mx-auto mt-8">
<div class="rounded-xl overflow-hidden border border-gray-400/40 shadow-lg bg-gray-100 text-gray-700">
  <div class="flex items-center gap-1.5 px-4 py-2.5 bg-gray-200 border-b border-gray-300">
    <span class="w-3 h-3 rounded-full bg-red-400"></span>
    <span class="w-3 h-3 rounded-full bg-yellow-400"></span>
    <span class="w-3 h-3 rounded-full bg-green-400"></span>
    <span class="ml-3 text-xs text-gray-500">GitHub &middot; pull request</span>
  </div>
  <div class="px-6 py-5 space-y-4 text-sm">
    <div v-click="1" class="flex items-center gap-3">
      <mdi-source-branch class="text-lg text-purple-600 flex-shrink-0" />
      <span>add two more web servers</span>
    </div>
    <div v-click="2" class="flex items-center gap-3 font-mono text-xs">
      <span class="px-2 py-0.5 rounded bg-red-500/10 text-red-600">- count = 1</span>
      <span class="px-2 py-0.5 rounded bg-green-600/10 text-green-700">+ count = 3</span>
    </div>
    <div v-click="3" class="flex items-center gap-3">
      <mdi-check-circle-outline class="text-lg text-green-600 flex-shrink-0" />
      <span>approved by a teammate</span>
    </div>
    <div v-click="4" class="flex items-center gap-3">
      <span class="px-2 py-0.5 rounded bg-purple-600 text-white text-xs font-600">Merge</span>
      <span>a pipeline runs the apply</span>
    </div>
  </div>
</div>
</div>

<div v-click="5" class="mark-safe mt-8 text-center text-lg opacity-85">
Every server change leaves a <span v-mark="{ at: 5, color: '#7c3aed', type: 'highlight' }">history</span>.
</div>

<!--
- the environment is a text file = it travels like Tuesday's code: branch, pull request, review, merge; this screen = how a real infra change looks at work

ASK: pulse check
- "type 1 if a change you made has ever gone live without anyone else looking first"
- most will; that is exactly the risk this step removes, one teammate reads it before a real machine changes

- [click] someone asks for two more web servers before a busy week; the request = a pull request, Tuesday's word for "please take my change"
- [click] the entire change is one number; nobody rewrites a runbook, count goes 1 to 3
- [click] a teammate reads the change before anything happens to a real machine; compare this one line vs forty console clicks nobody else saw
- [click] on merge, an automation runs terraform apply, nobody at a keyboard
  - gloss: the same GitHub machinery that published Tuesday's page runs commands after every merge; that is "fully automated" in a job ad
- [click] Git keeps the whole story forever: who changed the servers, when, why; in the demo we now make this exact edit + watch what the pipeline would watch
-->
