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
Frame it before the first click, and gloss the word: an AI agent is a program you give an instruction to in plain language, and it edits your files by itself. If you were at yesterday's session, you watched one build a whole page from nothing; if not, that is all you need to know about them today. The question nobody asks until it bites them is the one this session already answered: it changed my files, so what exactly did it change?

Labels to narrate:
[click] I ask for a contact section, it edits the file, and then git diff prints the exact lines it touched. Nothing is hidden, and I read it before I keep it.
[click] if I disagree with any of it, git restore throws the whole edit away, the same command that rescued the sabotaged page in part one.
[click] and the small daily win: it reads the diff and writes the commit message for me, which is the thing beginners freeze on.
[click] the honest pitch for career-switchers, spoken: agents make a lot of changes quickly, so the skill that keeps you in control is reading a diff and knowing how to undo. That is this session, and it is why git matters more now, not less.

ACTIVITY: at step 4, before running git diff, ask the chat: "the agent added a contact section on its own. Guess how many lines it changed, type a number." Run the diff, count the plus lines aloud, and name the closest guess. The count is unknowable in advance, which is exactly why the diff matters.
DEMO SCRIPT (~5 min), same stall-page repo, still open from the finale:
1. opencode, then the prompt: add a contact section with a phone number to index.html
2. let it work, then quit back to the shell; say out loud that we have not accepted anything yet
3. git status   (index.html modified)
4. git diff   (read the added lines aloud; this is the review, and it is the whole point of the segment)
5. git add -A, then ask opencode: write a one-line commit message for the staged change
6. git commit -m "<the message it wrote>" → git log --oneline (the agent's work is one line in the same history)
7. the safety net, if time allows: ask it for something bad on purpose (rewrite all the prices), git diff to show the damage, git restore index.html to undo it in one command
8. optional tie-back: git push, refresh the public URL from the finale, the contact section is live
Night before: opencode is already on the demo server from Monday, so just confirm opencode --version, sign in, and select a free-tier model (an AI model the provider lets you use at no cost, which is why today's bill is zero); reset stall-page to its post-finale state; run both prompts once so the timing and the model's behaviour are known.
FALLBACK: keep a branch ai-rehearsal holding the agent's edit from the dry run; if the model stalls or the free tier throttles live, git diff main ai-rehearsal shows the identical review and every point still lands.
-->
