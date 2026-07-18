---
layout: default
transition: slide-left
---

<div class="flex items-center gap-3 mb-2">
  <LiveBadge />
  <h3 class="!m-0">Build it live</h3>
</div>

<div class="grid grid-cols-2 gap-10 mt-10 items-center">

<div>
<TermWindow title="terraform apply: the whole environment">
<div><span class="text-green-400">$</span> terraform apply</div>
<div v-click="1" class="opacity-80 mt-1">aws_instance.web: Creating...</div>
<div v-click="1" class="text-green-400">Apply complete! Resources: 3 added,</div>
<div v-click="1" class="text-green-400">0 changed, 0 destroyed.</div>
</TermWindow>
</div>

<div class="space-y-7">
  <div v-click="2" class="note-row items-center">
    <mdi-server class="note-ico text-purple-600 dark:text-purple-400" />
    <p><b>server, firewall, key</b></p>
  </div>
  <div v-click="3" class="note-row items-center">
    <mdi-web class="note-ico text-purple-600 dark:text-purple-400" />
    <p><b>the stall page returns</b></p>
  </div>
  <div v-click="4" class="note-row items-center">
    <mdi-timer-outline class="note-ico text-purple-600 dark:text-purple-400" />
    <p><b>about two minutes</b></p>
  </div>
</div>

</div>

<!--
Labels to narrate:
[click] the transcript shows the finish line: apply reads the same file we just walked through and ends on the green summary, three resources added.
[click] three real things get built while we watch: the login key, the firewall with Wednesday's two doors, and the server itself.
[click] the server's startup script installs Docker and starts the stall-page container, so the week's nasi lemak page comes back to life on a machine that did not exist a minute earlier. For anyone new today: it is a one-page site built on Tuesday, hosted on a rented server on Wednesday, boxed into a container on Thursday.
[click] end to end it takes about two minutes, and most of that is the server booting and downloading its software.

DEMO SCRIPT (~10 min), terminal, console tab ready:
1. terraform apply. Read the printed plan aloud; it asks for a typed yes before touching anything. Type yes.
2. Narrate the create order as it scrolls: key pair instantly, security group in seconds, then the instance, about forty seconds. The startup script runs for another minute after that.
3. While it boots, refresh the EC2 console: an instance appears, born from code; nobody opened the launch wizard.
4. The outputs print web_url. Open it in the browser: the stall page, served again.
5. Point back at main.tf in the editor: every visible thing on both screens traces back to a line in this file.
Night before: same prep as the plan demo (Terraform via the HashiCorp apt repo, git and tmux from Ubuntu 24.04's repos, credentials exported, terraform init cached, full rehearsal in ap-southeast-1); the startup script installs docker.io and git, both present in Ubuntu 24.04's default repos, and pulls the nginx image, so allow the full two minutes.
FALLBACK: the morning rehearsal's environment is left running in a second folder (workspace "backup"); if the live apply fails, switch terminals, show its page and its transcript in tmux, and narrate.
-->
