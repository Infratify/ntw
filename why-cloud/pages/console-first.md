---
layout: default
transition: fade-out
clicks: 2
---

### Point and click

<div class="grid grid-cols-2 gap-8 mt-10 items-center">

<ConsoleWindow title="aws console">
  <div class="flex items-center gap-3">
    <mdi-cursor-default-click-outline class="text-lg text-blue-600 flex-shrink-0" />
    <span>launch, resize, connect</span>
    <span class="ml-auto text-xs bg-blue-500/10 text-blue-700 px-2 py-0.5 rounded">buttons</span>
  </div>
  <div class="flex items-center gap-3">
    <mdi-web class="text-lg text-gray-500 flex-shrink-0" />
    <span>runs in your browser</span>
  </div>
</ConsoleWindow>

<div v-click="1">
<TermWindow title="terminal">
<div><span class="text-green-400">$</span> ssh ubuntu@...</div>
<div><span class="text-green-400">ubuntu@ntw-demo</span>:<span class="text-blue-400">~</span>$ <span class="animate-pulse">▌</span></div>
</TermWindow>
</div>

</div>

<div v-click="2" class="mt-8 text-center text-lg opacity-85">
The console is a web page in a browser.
</div>

<!--
Reassure them straight away: nothing to install, nothing to memorise, and this is not real coding.
Almost everything today happens by clicking in a normal web browser, on Amazon's control panel called the console. Gloss it: the console is the dashboard where you rent and manage servers with buttons and menus, like an online banking screen.

[click] the black window, the terminal, appears only twice today: to log in to the rented server, and to give it its jobs. So it is mostly clicking, with a little typing.
[click] one line to land it: the console is a web page like any other, opened in the same browser they use for email.
-->
