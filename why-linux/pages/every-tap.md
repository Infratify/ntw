---
layout: default
transition: slide-left
clicks: 3
---

### Behind every tap

<div class="mt-16">
  <RequestPath :hops="[
    { label: 'your phone', icon: 'cellphone', color: 'cyan' },
    { label: 'DNS lookup', icon: 'dns', color: 'blue' },
    { label: 'load balancer', icon: 'scale-balance', color: 'blue' },
    { label: 'Linux server', icon: 'server', color: 'blue' },
  ]" />
</div>

<div v-click="3" class="mark-safe mt-12 text-center text-lg opacity-85">
Every WhatsApp text ends at <span v-mark="{ at: 3, color: '#d97706', type: 'underline' }">a Linux machine you'll never see</span>.
</div>

<!--
Narrate the packet as it hops: the phone asks DNS "where is tiktok.com", traffic hits a load balancer, lands on a Linux server, and a 200 OK comes back. Numbers to quote: about 90% of cloud workloads and all of the top-500 supercomputers run Linux.
-->
