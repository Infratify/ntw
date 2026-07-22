---
layout: default
transition: fade-out
---

<div class="flex items-center gap-3 mb-2">
  <LiveBadge />
  <h3 class="!m-0">AI from the shelf</h3>
</div>

<div class="grid grid-cols-2 gap-10 mt-10 items-center">

<div>
<TermWindow title="ollama: an AI runtime, boxed">
<div><span class="text-green-400">$</span> docker run -d -v ai:/root/.ollama <span class="opacity-60">\</span></div>
<div><span class="opacity-60">&nbsp;&nbsp;&nbsp;&nbsp;</span>--name brain ollama/ollama</div>
<div v-click="1" class="mt-1"><span class="text-green-400">$</span> docker exec -it brain <span class="opacity-60">\</span></div>
<div v-click="1"><span class="opacity-60">&nbsp;&nbsp;&nbsp;&nbsp;</span>ollama run llama3.2:1b</div>
<div v-click="2" class="mt-1"><span class="text-blue-400">&gt;&gt;&gt;</span> why is the sky blue?<span class="animate-pulse">▌</span></div>
</TermWindow>
</div>

<div class="space-y-7">
  <div v-click="3" class="note-row items-center">
    <mdi-brain class="note-ico text-blue-600 dark:text-blue-400" />
    <p><b>a brain from the shelf</b></p>
  </div>
  <div v-click="4" class="note-row items-center">
    <mdi-console-line class="note-ico text-blue-600 dark:text-blue-400" />
    <p><b>chat inside the terminal</b></p>
  </div>
  <div v-click="5" class="note-row items-center">
    <mdi-cloud-off-outline class="note-ico text-blue-600 dark:text-blue-400" />
    <p><b>private, on this laptop</b></p>
  </div>
</div>

</div>

<!--
- labels to narrate; the two commands on screen are the exact lines typed live next
- docker run starts ollama, a free program whose one job is running AI models; -v gives it a named storage drawer so the model file survives restarts
- [click] exec types a command inside an already-running box, like reaching in through its window; llama3.2:1b is the brain: a free model file from Meta, about 1.3 GB, fetched from a shelf of models the same way docker fetched hello-world
- [click] the three arrows are ollama's chat prompt: type a question there and an AI answers, live, in a moment
- [click] a brain pulled from a public shelf, like every box today
- [click] the whole conversation happens in a terminal window on one laptop
- [click] after the download, the internet is not involved: no account, no subscription, and the question never leaves the machine

DEMO SCRIPT (~8 min), on the demo laptop:
1. docker run -d -v ai:/root/.ollama --name brain ollama/ollama: instant, the image is already on the machine; say so: this box came off the shelf last night, it is about 8 GB
2. docker exec -it brain ollama run llama3.2:1b: the >>> prompt appears at once, the brain file was fetched in prep
3. ask the slide's question first: why is the sky blue?; read the streamed answer aloud, it types at a comfortable reading pace
4. ACTIVITY: type a short question for this machine in the chat; pick a simple factual one (small brains ramble on tricky ones), ask it live, read the answer back
5. say the privacy line plainly: that question went to this laptop's processor and nowhere else
6. /bye to leave the chat prompt; the box keeps running
- Night before: docker pull ollama/ollama at home, about 8 GB on disk; docker run the exact slide command, then docker exec brain ollama pull llama3.2:1b (1.3 GB into the ai drawer); rehearse one chat, then docker rm -f brain; the ai drawer keeps the model, so the live exec starts instantly
- FALLBACK: if exec or the model wedges, docker rm -f brain, rerun the two slide commands; worst case the browser stack demo in part 3 carries the AI proof on its own
-->
