---
layout: default
transition: slide-left
clicks: 3
---

### Behind every tap

<div class="mt-12">
  <RequestPath
    :hops="[
      { label: 'your phone', icon: 'cellphone', color: 'cyan' },
      { label: 'DNS lookup', icon: 'dns', color: 'blue' },
      { label: 'load balancer', icon: 'scale-balance', color: 'blue' },
      { label: 'Linux server', icon: 'server', color: 'blue' },
    ]"
    :group="{ from: 1, to: 3, label: 'all servers', at: 1 }"
  />
</div>

<div v-click="3" class="mark-safe mt-12 text-center text-lg opacity-85">
Every WhatsApp text ends at <span v-mark="{ at: 3, color: '#d97706', type: 'underline' }">a Linux machine you'll never see</span>.
</div>

<!--
Narrate the packet as it hops.
[click] your phone asks DNS one question: "where is whatsapp.com". DNS is a computer in a rack whose job is answering that.
[click] the answer points at a load balancer, another computer, which picks a machine that isn't busy.
[click] it lands on a Linux server, and the reply comes back. The green 200 OK on screen is the web's way of saying "done, here you go".

The dashed box is the point of this slide: all three of those are servers. Computers in a rack with no screen and nobody sitting at them, exactly like the one we log into on the next slide. Say it plainly, and don't stop to explain what DNS or a load balancer do; the audience only needs "it's a computer, same as the others".

Say the last one runs Linux, not all three. Most DNS resolvers and load balancers do run Linux, but plenty are vendor appliances, and we can't prove any of it in the demo. The Linux-everywhere claim already has its own slide and its own proof.

Numbers to quote: about 90% of cloud workloads and all of the top-500 supercomputers run Linux.
-->
