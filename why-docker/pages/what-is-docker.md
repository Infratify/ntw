---
layout: default
transition: slide-down
clicks: 4
---

### What is a container?

<div class="grid grid-cols-2 gap-10 mt-8 items-center">

<div>
  <LayerStack
    :layers="[
      { ins: 'Your app', sub: 'the AI chat app', icon: 'application-outline', color: 'green' },
      { ins: 'Its Python', sub: 'the right version', icon: 'language-python', color: 'amber' },
      { ins: 'Its libraries', sub: 'every piece it borrows', icon: 'package-variant-closed', color: 'blue' },
      { ins: 'Its settings', sub: 'versions · ports · files', icon: 'cog', color: 'slate' },
    ]"
  />
</div>

<div class="space-y-7">
  <div v-click="1" class="note-row items-center">
    <mdi-package-variant-closed class="note-ico text-blue-600 dark:text-blue-400" />
    <p><b>one sealed box</b> <span class="opacity-60">&middot; app plus its needs</span></p>
  </div>
  <div v-click="2" class="note-row items-center">
    <mdi-content-copy class="note-ico text-green-600 dark:text-green-400" />
    <p><b>identical inside</b> <span class="opacity-60">&middot; on any machine</span></p>
  </div>
  <div v-click="3" class="note-row items-center">
    <mdi-shield-check-outline class="note-ico text-cyan-600 dark:text-cyan-400" />
    <p><b>kept separate</b> <span class="opacity-60">&middot; from other apps</span></p>
  </div>
</div>

</div>

<div v-click="4" class="mark-safe mt-6 text-center text-lg opacity-85">
The box holds the app and <span v-mark="{ at: 4, color: '#2563eb', type: 'underline' }">everything it needs</span>.
</div>

<!--
- PROP: hold a sealed food container to the camera: lunch packed at home, identical wherever it is opened; the whole slide in one object
- anchor: before steel shipping containers, cargo was loaded loose and every port did it differently; the sealed box made every ship, crane and truck compatible overnight; docker is that box, for software
- the stack on the left is what gets packed for the chat app
- [click] one sealed box: the app, the exact Python it wants, every library, every setting, all inside
- [click] everything travels inside, so the inside is identical wherever it lands: laptop, the office server from the last slide, the cloud; the Python-version argument from a minute ago cannot happen, the box brings its own
- [click] boxes keep to themselves: two containers on one machine can use two different Python versions and never meet; deleting a box leaves the machine exactly as it was
- [click] the whole idea in one line; part 1's demo puts a real one on a real server
-->
