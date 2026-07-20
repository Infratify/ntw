---
layout: default
transition: slide-up
---

<p class="eyebrow font-mono"><span class="text-purple-600 dark:text-purple-400">bonus</span> &middot; working with agents</p>

<div class="flex items-center gap-3 mb-2">
  <LiveBadge />
  <h3 class="!m-0">Review every change</h3>
</div>

<div class="grid grid-cols-2 gap-10 mt-6 items-center">

<div>
<TermWindow title="opencode: free open-source AI agent">
<div><span class="text-green-400">$</span> opencode</div>
<div class="text-purple-300 mt-1">&gt; add a contact section to index.html</div>
<div v-click="1" class="mt-1 opacity-70">✻ edited index.html</div>
<div v-click="1" class="mt-2"><span class="text-green-400">$</span> git diff</div>
<div v-click="1" class="text-green-400">+ &lt;p&gt;Call 012-3456789&lt;/p&gt;</div>
</TermWindow>
</div>

<div class="space-y-7">
  <div v-click="2" class="note-row items-center">
    <mdi-file-compare class="note-ico text-purple-600 dark:text-purple-400" />
    <p><b>every change, listed</b></p>
  </div>
  <div v-click="3" class="note-row items-center">
    <mdi-undo-variant class="note-ico text-purple-600 dark:text-purple-400" />
    <p><b>one command undoes it</b></p>
  </div>
  <div v-click="4" class="note-row items-center">
    <mdi-message-text-outline class="note-ico text-purple-600 dark:text-purple-400" />
    <p><b>it writes the message</b></p>
  </div>
</div>

</div>

<div v-click="5" class="mark-safe mt-6 text-center text-lg opacity-85">
git shows <span v-mark="{ at: 5, color: '#7c3aed', type: 'underline' }">every line</span> the agent changed.
</div>

<!--
Frame before click 1:
- gloss "AI agent": program you instruct in plain language, edits your files by itself
- yesterday's attendees watched one build a whole page; if you missed it, that is all you need today
- the question that bites later: it changed my files, so WHAT exactly changed?

Labels to narrate:
- [click] ask for contact section, agent edits, git diff prints the exact lines touched
  - nothing hidden; I read it before I keep it
- [click] disagree? git restore throws the whole edit away
  - same command that rescued the sabotaged page in part 1
- [click] small daily win: it reads the diff, writes the commit message
  - the thing beginners freeze on
- [click] honest pitch for career-switchers, spoken:
  - agents change a lot quickly; the skill that keeps you in control = reading a diff + knowing how to undo
  - that is this session; why git matters more now

ACTIVITY (step 4, before running git diff):
- chat: "the agent added a contact section on its own. Guess how many lines it changed, type a number"
- run the diff, count the plus lines aloud, name the closest guess
- count unknowable in advance = exactly why the diff matters

DEMO SCRIPT (~5 min), same stall-page repo, still open from the finale:
1. opencode, then the prompt: add a contact section with a phone number to index.html
2. let it work, quit back to the shell; say aloud: nothing accepted yet
3. git status   (index.html modified)
4. git diff   (read added lines aloud; this IS the review, the whole point of the segment)
5. git add -A, then ask opencode: write a one-line commit message for the staged change
6. git commit -m "<the message it wrote>" → git log --oneline (agent's work = one line in the same history)
7. safety net, if time allows: ask for something bad on purpose (rewrite all the prices) → git diff shows the damage → git restore index.html undoes it in one command
8. optional tie-back: git push, refresh the public URL from the finale, contact section is live

Night before:
- opencode already on demo server from Monday: confirm opencode --version, sign in
- select a free-tier model (gloss: model the provider lets you use at no cost = today's bill is zero)
- reset stall-page to its post-finale state
- run both prompts once (timing + model behaviour known)

FALLBACK:
- keep branch ai-rehearsal holding the agent's edit from the dry run
- model stalls or free tier throttles: git diff main ai-rehearsal shows the identical review, every point still lands
-->
