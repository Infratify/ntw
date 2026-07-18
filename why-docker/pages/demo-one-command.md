---
layout: default
transition: slide-left
---

<div class="flex items-center gap-3 mb-2">
  <LiveBadge />
  <h3 class="!m-0">One command, one server</h3>
</div>

<div class="grid grid-cols-2 gap-10 mt-10 items-center">

<div>
<TermWindow title="docker run, on Wednesday's cloud server">
<div><span class="text-green-400">$</span> docker run -d -p 80:80 nginx</div>
<div v-click="1" class="opacity-60 mt-1">Unable to find image 'nginx' locally</div>
<div v-click="1" class="opacity-60">latest: Pulling from library/nginx</div>
<div v-click="1">d8a1f0c93b2e <span class="opacity-50"># the container's ID</span></div>
</TermWindow>
</div>

<div class="space-y-7">
  <div v-click="2" class="note-row items-center">
    <mdi-download class="note-ico text-blue-600 dark:text-blue-400" />
    <p><b>downloads it, then starts</b></p>
  </div>
  <div v-click="3" class="note-row items-center">
    <mdi-server class="note-ico text-blue-600 dark:text-blue-400" />
    <p><b>a real web server</b></p>
  </div>
  <div v-click="4" class="note-row items-center">
    <mdi-cellphone class="note-ico text-blue-600 dark:text-blue-400" />
    <p><b>open on your phone</b></p>
  </div>
</div>

</div>

<!--
Labels to narrate:
[click] the transcript: docker looks for the nginx box on this machine, can't find it, fetches it from an online shelf, then starts it. The last line it prints is the running container's ID, its short name; part 2 names the shelf.
[click] fetching and starting are ONE typed command. Nobody ever installed nginx on this server, and nobody has to.
[click] nginx is not a toy: it is a production web server, the same program serving a huge share of the world's websites.
[click] the server has a public address, so the moment the box is up, every phone in this Zoom can open it.

DEMO SCRIPT (~8 min), SSH'd into the cloud server (Wednesday's machine; any Ubuntu server works):
1. docker run hello-world, and read its printed note aloud: docker's own proof the setup works
2. nginx -v: "command not found", nginx is genuinely not installed here
3. docker run -d -p 80:80 nginx: narrate the pull lines as they print, then the ID; gloss -d "run in the background" and -p 80:80 "connect the server's front door to the box's door 80"
4. browser: http://SERVER_IP, the "Welcome to nginx!" page
5. docker ps: the table of running boxes: ID, image, "Up X seconds", ports
6. paste http://SERVER_IP into the Zoom chat and let everyone open the container live
Night before: keep Wednesday's Ubuntu 24.04 server running with ports 22 and 80 open in its security group; sudo apt install docker.io (docker.io is in Ubuntu 24.04's universe repo); sudo usermod -aG docker ubuntu, then log out and back in; rehearse once, then docker rm -f every container and docker rmi nginx so the live pull is genuine.
FALLBACK: if the pull stalls, switch to the demo laptop where a rehearsal copy of the nginx image already exists; the same command serves the page on localhost and the narration continues unchanged.
-->
