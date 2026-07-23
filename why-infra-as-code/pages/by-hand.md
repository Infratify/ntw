---
layout: default
transition: slide-left
---

<p class="eyebrow font-mono"><span class="text-purple-600 dark:text-purple-400">part 1</span> &middot; perfectly repeatable</p>

### Wednesday, by hand

<div class="max-w-2xl mx-auto mt-8">
<div class="rounded-xl overflow-hidden border border-gray-400/40 shadow-lg bg-gray-100 text-gray-700">
  <div class="flex items-center gap-1.5 px-4 py-2.5 bg-gray-200 border-b border-gray-300">
    <span class="w-3 h-3 rounded-full bg-red-400"></span>
    <span class="w-3 h-3 rounded-full bg-yellow-400"></span>
    <span class="w-3 h-3 rounded-full bg-green-400"></span>
    <span class="ml-3 text-xs text-gray-500">Setup runbook &middot; internal wiki</span>
  </div>
  <div class="px-6 py-5 space-y-4 text-sm">
    <div v-click="1" class="flex items-center gap-3">
      <mdi-cursor-default-click-outline class="text-lg text-gray-500 flex-shrink-0" />
      <span>step 14: pick a size</span>
      <span class="ml-auto font-mono text-xs text-gray-500">t3.micro</span>
    </div>
    <div v-click="2" class="flex items-center gap-3">
      <mdi-shield-outline class="text-lg text-gray-500 flex-shrink-0" />
      <span>step 23: open the firewall</span>
      <span class="ml-auto font-mono text-xs text-gray-500">ports 22, 80</span>
    </div>
    <div v-click="3" class="flex items-center gap-3">
      <mdi-content-paste class="text-lg text-gray-500 flex-shrink-0" />
      <span>step 31: paste the script</span>
      <span class="ml-auto font-mono text-xs text-gray-500">install nginx&hellip;</span>
    </div>
    <div v-click="4" class="flex items-center gap-3">
      <mdi-clock-alert-outline class="text-lg text-red-500 flex-shrink-0" />
      <span>last reviewed</span>
      <span class="ml-auto text-xs bg-red-500/10 text-red-600 px-2 py-0.5 rounded font-600">14 months ago</span>
    </div>
  </div>
</div>
</div>

<div v-click="5" class="mark-safe mt-8 text-center text-lg opacity-85">
One skipped step builds a <span v-mark="{ at: 5, color: '#7c3aed', type: 'underline' }">different server</span>.
</div>

<!--
- Wednesday: a real server set up by clicking through the AWS console (pick a size, open the doors, paste a script); live + once = fine
- now picture a company running twenty of those, rebuilt every few months; the clicks have to live somewhere = a document like this
  - gloss runbook: a step-by-step instruction doc, usually a wiki page, sometimes a Word file with screenshots

- [click] forty-plus steps of menus + text boxes; step 14 picks the machine size
- [click] step 23 opens the firewall, Wednesday's two doors: 22 to log in, 80 for the web
- [click] step 31 pastes a setup script by hand; miss the paste, the server sits empty
- [click] the date at the bottom = the quiet problem: the console's screens changed since this was written, screenshots no longer match what the person sees
- [click] two careful people, same forty steps, two slightly different servers; the difference surfaces weeks later as a bug nobody can explain. Hold that; the fix is next slide

STORY: land = a hand-followed setup doc silently produces a different machine
- pick a real moment: a wiki runbook whose screenshots no longer matched the screen, or one handed to a colleague who got a subtly different result
- beat order: ordinary task (stand up one more server) into the doc that looked fine into the step that had quietly changed into the bug days later nobody could place
- 60-90s, close by naming it: the instructions drifted from reality, no one noticed
-->
