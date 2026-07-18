---
layout: fact
transition: fade-out
---

<div v-motion :initial="{ scale: 0.4, opacity: 0 }" :enter="{ scale: 1, opacity: 1, transition: { type: 'spring', stiffness: 80, delay: 200 } }">

# 2 minutes

</div>

<div v-motion :initial="{ opacity: 0 }" :enter="{ opacity: 1, transition: { delay: 700, duration: 500 } }" class="text-2xl opacity-70 mt-2">
from this laptop to a public URL
</div>

<div v-motion :initial="{ opacity: 0 }" :enter="{ opacity: 1, transition: { delay: 1100, duration: 500 } }" class="mt-8 text-lg opacity-60">
hosted free by GitHub Pages
</div>

<!--
So far the stall page lives on my laptop and on github.com. The last step makes it a real website: a public URL, meaning a web address anyone's phone can open, anywhere on Earth.
GitHub Pages is a free feature of every repo: tell GitHub "serve this folder as a website" and it does, at no cost, no server to rent.
I claim the whole thing takes about two minutes, so I'm putting a stopwatch on screen and we'll time it together.
-->
