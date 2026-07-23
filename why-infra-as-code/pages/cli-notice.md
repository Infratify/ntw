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
- reassure straight away: nobody memorises commands; not real coding, just typing short instructions instead of clicking buttons
- almost everything today (explaining + live demos) happens in a black window like this; that is how IaC works, servers described + built through typed commands, not clicks
- one warning said with a smile: friends + family see green text + fast typing = they assume hacking, or the Matrix; let them think that
-->
