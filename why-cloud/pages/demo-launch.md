---
layout: default
transition: fade-out
---

<div class="flex items-center gap-3 mb-2">
  <LiveBadge />
  <h3 class="!m-0">Rent one live</h3>
</div>

<div class="grid grid-cols-2 gap-8 mt-8 items-start">

<div>
<ConsoleWindow title="EC2 · launch instance">
  <div class="flex items-center gap-3">
    <mdi-ubuntu class="text-lg text-orange-600 flex-shrink-0" />
    <span>Ubuntu 24.04</span>
    <span class="ml-auto font-mono text-xs text-gray-500">t3.micro</span>
  </div>
  <div v-click="1" class="flex items-center gap-3">
    <mdi-circle class="text-xs text-green-500 flex-shrink-0" />
    <span>running</span>
    <span class="ml-auto font-mono text-xs bg-green-500/10 text-green-700 px-2 py-0.5 rounded">13.212.44.7</span>
  </div>
  <div v-click="1" class="text-xs text-gray-500 pl-7">a new public address</div>
</ConsoleWindow>
<p class="text-center text-sm opacity-60 mt-3">the click: launch</p>
</div>

<div v-click="2">
<TermWindow title="ssh: into a server born today">
<div><span class="text-green-400">$</span> ssh ubuntu@13.212.44.7</div>
<div class="opacity-80 mt-1">Welcome to Ubuntu 24.04 LTS</div>
<div><span class="text-green-400">ubuntu@ntw-demo</span>:<span class="text-blue-400">~</span>$ <span class="animate-pulse">▌</span></div>
</TermWindow>
<p class="text-center text-sm opacity-60 mt-3">the proof: a real login</p>
</div>

</div>

<!--
Labels to narrate:
[click] the console flips from pending to running in about a minute, and a public IP appears, a brand-new address on the internet for a machine that did not exist when I clicked launch.
[click] then the terminal is the proof: I log in over ssh, and it answers. It bills by the hour, a few sen for this size; the exact price gets its own slide next.

DEMO SCRIPT (~10 min), in the AWS console then the terminal:
1. console: EC2 (the rent-a-server service) → Launch instance
2. name: ntw-demo · image: Ubuntu Server 24.04 LTS · size: t3.micro · the prepared key pair and security group → Launch
3. narrate the state: pending → running, about a minute; a public IP appears, a brand-new address on the internet
4. ssh ubuntu@<the new IP> → uptime ("up 1 minute": this computer has existed for one minute")
5. give it a job: sudo apt update && sudo apt install -y nginx git
6. put Tuesday's page on it: sudo git clone https://github.com/<demo-account>/stall-page /tmp/stall && sudo cp /tmp/stall/index.html /var/www/html/index.html
7. browser: http://<IP> → the nasi lemak stall page from Tuesday, now served by a machine we rented minutes ago (for anyone who missed Tuesday: a one-page site we built in that session)
Night before: AWS account with a billing alarm set; key pair ntw-key created; security group ntw-open allowing 22, 80, 443; rehearse one full launch in ap-southeast-1 and terminate the rehearsal instance; confirm the Ubuntu 24.04 LTS image is offered in the launch wizard. nginx and git both install from Ubuntu 24.04's default repos, so the new server needs no other prep.
FALLBACK: a twin instance (ntw-backup) stays running from the rehearsal; if the console or network misbehaves, ssh into the twin and continue from step 4.
-->
