---
layout: default
transition: slide-right
---

<div class="flex items-center gap-3 mb-2">
  <LiveBadge />
  <h3 class="!m-0">One command, one server</h3>
</div>

<div class="grid grid-cols-2 gap-10 mt-10 items-center">

<div>
<TermWindow title="docker run, on a cloud VM">
<div><span class="text-green-400">$</span> docker run -d -p 80:8080 <span class="opacity-60">\</span></div>
<div><span class="opacity-60">&nbsp;&nbsp;&nbsp;&nbsp;</span>-e WEBUI_AUTH=false <span class="opacity-60">\</span></div>
<div><span class="opacity-60">&nbsp;&nbsp;&nbsp;&nbsp;</span>ghcr.io/open-webui/open-webui:main</div>
<div class="mt-1"><span class="text-green-400">$</span> <span class="animate-pulse">▌</span></div>
</TermWindow>
</div>

<div class="space-y-7">
  <div v-click="1" class="note-row items-center">
    <mdi-content-copy class="note-ico text-blue-600 dark:text-blue-400" />
    <p><b>the laptop's exact box</b></p>
  </div>
  <div v-click="2" class="note-row items-center">
    <mdi-server class="note-ico text-blue-600 dark:text-blue-400" />
    <p><b>on a rented computer</b></p>
  </div>
  <div v-click="3" class="note-row items-center">
    <mdi-cellphone class="note-ico text-blue-600 dark:text-blue-400" />
    <p><b>open on your phone</b></p>
  </div>
</div>

</div>

<!--
- labels to narrate; the command on screen is the exact line typed live in a moment
- gloss VM on first mention: a virtual machine, a computer rented from a cloud company, lives in a data centre, reached through the terminal
- [click] byte for byte the same box that ran on the laptop a minute ago; nobody installed Python, pip or the app on this VM
- [click] the VM is a real rented computer with a public address, switched on around the clock
- [click] a public address means every phone in this Zoom can open it, and does, right now
- when the live run prints a long code, gloss it: the new container's full ID; docker ps shows a short version

DEMO SCRIPT (~8 min), SSH'd into the cloud VM (any Ubuntu VM works):
1. docker run hello-world, and read its printed note aloud: docker's own proof the setup works; the pull lines print live, the shelf it fetched from gets a name in part 2
2. open-webui: "command not found"; the chat app is genuinely not installed here
3. ASK: spoken vote before Enter: nobody ever installed the chat app here, will docker run work? A works, B fails; read the chat, then press Enter
4. run the slide's command; the box was copied here in prep, about 7 GB, so it starts straight away; gloss -d "run in the background" and -p 80:8080 "connect the VM's front door to the box's door 8080"
5. browser: http://VM_IP, the same chat page the laptop showed
6. docker ps: the table of running boxes: ID, image, "Up X seconds", ports
7. ACTIVITY: paste http://VM_IP into the Zoom chat; everyone opens the chat app on their phone, type 1 when the page loads
- Night before: an Ubuntu 24.04 VM with ports 22 and 80 open in its security group, at least 2 CPUs and 4 GB memory so three hundred phones can load the page; sudo apt install docker.io (docker.io is in Ubuntu 24.04's universe repo); sudo usermod -aG docker ubuntu, then log out and back in; docker pull ghcr.io/open-webui/open-webui:main (about 7 GB, do it on the VM's fast line); rehearse the run, then docker rm -f the container (keep the image) and docker rmi hello-world so its live pull is genuine
- FALLBACK: if the VM misbehaves, the laptop still has the same image from the last demo; docker run it locally on -p 8080:8080 and the narration continues, minus the phones
-->
