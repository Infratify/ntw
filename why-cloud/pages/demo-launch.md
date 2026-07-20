---
layout: default
transition: fade-out
---

<div class="flex items-center gap-3 mb-2">
  <LiveBadge />
  <h3 class="!m-0">Rent one live</h3>
</div>

<div class="grid grid-cols-2 gap-10 mt-10 items-center">

<div>
<TermWindow title="ssh: into a server born today">
<div><span class="text-green-400">$</span> ssh ubuntu@13.212.44.7</div>
<div v-click="1" class="opacity-80 mt-1">Welcome to Ubuntu 24.04 LTS</div>
<div v-click="1"><span class="text-green-400">ubuntu@ntw-demo</span>:<span class="text-blue-400">~</span>$ <span class="animate-pulse">▌</span></div>
</TermWindow>
</div>

<div class="space-y-7">
  <div v-click="2" class="note-row items-center">
    <mdi-map-marker-radius class="note-ico text-orange-600 dark:text-orange-400" />
    <p><b>a real remote machine</b></p>
  </div>
  <div v-click="3" class="note-row items-center">
    <mdi-timer-outline class="note-ico text-orange-600 dark:text-orange-400" />
    <p><b>running in a minute</b></p>
  </div>
  <div v-click="4" class="note-row items-center">
    <mdi-currency-usd class="note-ico text-orange-600 dark:text-orange-400" />
    <p><b>rented by the hour</b></p>
  </div>
</div>

</div>

<!--
Labels to narrate:
[click] the transcript shows the finish line: logging into a computer that does not exist yet as I say this sentence. It will live in an AWS datacenter, in the region closest to Malaysia.
[click] from the launch click to a working login is about a minute; we'll watch the state change in the console.
[click] and it bills by the hour, a few sen for this size; the exact price gets its own slide after the demo.

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
