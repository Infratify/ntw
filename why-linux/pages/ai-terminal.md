---
layout: default
transition: slide-left
---

<p class="eyebrow font-mono"><span class="text-purple-600 dark:text-purple-400">bonus</span> &middot; the terminal renaissance</p>

### AI moved in

<div class="grid grid-cols-2 gap-10 mt-8 items-center">

<div class="term-print">
<TermWindow title="where AI coding actually happens">
<div v-click="1"><span class="text-green-400">$</span> claude <span class="text-gray-500"># Claude Code</span></div>
<div v-click="1"><span class="text-green-400">$</span> opencode <span class="text-gray-500"># opencode</span></div>
<div v-click="1"><span class="text-green-400">$</span> codex <span class="text-gray-500"># OpenAI Codex CLI</span></div>
<div v-click="1"><span class="text-green-400">$</span> gemini <span class="text-gray-500"># Gemini CLI</span></div>
</TermWindow>
</div>

<div class="space-y-7">
  <div v-click="2" class="note-row items-center">
    <mdi-robot-outline class="note-ico text-purple-600 dark:text-purple-400" />
    <p><b>terminal apps first</b></p>
  </div>
  <div v-click="3" class="note-row items-center">
    <mdi-microsoft-windows class="note-ico text-purple-600 dark:text-purple-400" />
    <p><b>WSL</b> <span class="opacity-60">&middot; Linux inside Windows</span></p>
  </div>
  <div v-click="4" class="note-row items-center">
    <mdi-lightning-bolt class="note-ico text-purple-600 dark:text-purple-400" />
    <p><b>agents type commands</b></p>
  </div>
</div>

</div>

<div v-click="5" class="mark-safe mt-8 text-center text-lg opacity-85">
These agents type <span v-mark="{ at: 5, color: '#7c3aed', type: 'underline' }">the same commands you just learned</span>.
</div>

<!--
Labels to narrate:
[click] every serious AI coding agent ships as a terminal app first, not a website.
[click] Windows developers install WSL, a Linux inside Windows, largely to run these tools well.
[click] agents work by running commands, the same ones from earlier today.
The pitch to career-switchers: the skill that unlocks AI-assisted development is exactly the one this session previews. This is the "why now" argument for learning Linux in 2026.
-->
