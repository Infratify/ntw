---
layout: fact
transition: fade-out
---

<div v-motion :initial="{ scale: 0.4, opacity: 0 }" :enter="{ scale: 1, opacity: 1, transition: { type: 'spring', stiffness: 80, delay: 200 } }">

# Mostly typing today

</div>

<div v-motion :initial="{ opacity: 0, y: 16 }" :enter="{ opacity: 1, y: 0, transition: { delay: 650, duration: 500 } }" class="mt-8 max-w-lg mx-auto">
<TermWindow title="heads up">
<span class="text-green-400">$</span> <span class="type-mount"><span class="type-mount-text" style="animation-delay: 900ms">welcome, let's get typing</span></span>
</TermWindow>
</div>

<div v-motion :initial="{ opacity: 0 }" :enter="{ opacity: 1, transition: { delay: 1900, duration: 500 } }" class="mt-8 flex items-center justify-center gap-3">
<mdi-incognito class="text-2xl opacity-50 flex-shrink-0" />
<span class="text-lg opacity-85">Every live demo from here on runs inside a window exactly like this one.</span>
</div>

<!--
ASK (first minutes, warms the chat channel):
- "type 1 in the chat if you have never typed into a black window like this one"
- read the flood back, answer: perfect, this session assumes exactly that
- teaches everyone: the chat is where they take part today

Say:
- nobody needs to memorise commands; not real coding, just typing short instructions instead of clicking buttons
- almost everything today (explaining + live demos) happens inside a window like this: how developers use Git and GitHub day to day
- fair warning, with a smile: friends see black screen + green text + fast typing = assume hacking / the Matrix. Let them think that
- one later demo adds a picture beside the typing (live drawing of the project); commands still go into a window like this one
-->
