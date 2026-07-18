---
layout: default
transition: fade-out
---

<div class="flex items-center gap-3 mb-2">
  <LiveBadge />
  <h3 class="!m-0">Ship the stall page</h3>
</div>

<div class="grid grid-cols-2 gap-10 mt-10 items-center">

<div>
<TermWindow title="docker build: your app becomes an image">
<div><span class="text-green-400">$</span> docker build -t ariff/stall-page .</div>
<div v-click="1" class="opacity-60 mt-1">=&gt; naming to ariff/stall-page</div>
<div v-click="1" class="mt-1"><span class="text-green-400">$</span> docker push ariff/stall-page</div>
<div v-click="1" class="opacity-60">latest: digest: sha256:9f2a…</div>
</TermWindow>
</div>

<div class="space-y-7">
  <div v-click="2" class="note-row items-center">
    <mdi-file-document-outline class="note-ico text-blue-600 dark:text-blue-400" />
    <p><b>a two-line recipe</b></p>
  </div>
  <div v-click="3" class="note-row items-center">
    <mdi-cloud-upload-outline class="note-ico text-blue-600 dark:text-blue-400" />
    <p><b>push once</b></p>
  </div>
  <div v-click="4" class="note-row items-center">
    <mdi-earth class="note-ico text-blue-600 dark:text-blue-400" />
    <p><b>pull on any machine</b></p>
  </div>
</div>

</div>

<!--
Labels to narrate:
[click] the transcript: build wraps the stall page into an image named after my account, and push puts that image on the Docker Hub shelf. The sha256 line is the shelf's receipt: a fingerprint of exactly what was uploaded.
[click] the recipe file is called a Dockerfile, and ours is two lines: start from the ready nginx box, copy our page inside. Making your own image is genuinely that small.
[click] push runs once, from the laptop.
[click] after that, any machine with docker pulls the exact same box. The demo pulls it onto the cloud server, and the page that lived on my laptop serves from the cloud, identical.

DEMO SCRIPT (~10 min), laptop first, then the cloud server:
1. laptop: cat Dockerfile: two lines, "FROM nginx:alpine" and "COPY index.html /usr/share/nginx/html/"; gloss both: start from the ready nginx box, put our page inside it. index.html is Tuesday's stall page; any HTML file works.
2. docker build -t ariff/stall-page . : finishes in seconds; docker images shows the new image
3. docker run -d -p 8080:80 ariff/stall-page, open localhost:8080: the stall page, boxed
4. docker push ariff/stall-page
5. browser: hub.docker.com, the image's public page now exists; anyone could pull it
6. SSH to the cloud server: docker run -d -p 8080:80 ariff/stall-page: it pulls, then serves; open http://SERVER_IP:8080: the SAME page, now from the cloud
7. say it plainly: the server received the page, the web server and every setting in one pull; nothing else was installed on it
Night before: docker login on the laptop with the demo Docker Hub account; docker.io installed on laptop and server (part 1 prep covers the server); open port 8080 in the server's security group; keep Tuesday's index.html in the build folder; rehearse the whole flow, then docker rmi ariff/stall-page on the server so the live pull is real (the pushed copy stays on Docker Hub).
FALLBACK: a rehearsal tag ariff/stall-page:backup stays pushed on Docker Hub; if the live build or push breaks, docker pull the backup tag on the server and continue from step 6.
-->
