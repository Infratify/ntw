<script setup>
const base = import.meta.env.BASE_URL
</script>

<template>
  <div class="fixed bottom-0 left-0 right-0 flex items-center justify-between px-3 py-1.5 bg-black/50 backdrop-blur-sm">
    <!-- Left side: Logo + Disclaimer -->
    <div class="flex items-center gap-2">
      <img :src="`${base}logo-dark.svg`" alt="Infratify" class="h-4 object-contain" />
      <div class="footer-text opacity-100">
        © Infratify and Inframesia Technologies (JM1000894-W) or its affiliates. All rights reserved.
      </div>
    </div>

    <!-- Right side: event info -->
    <div class="footer-text opacity-100">
      National Training Week 2026 | www.infratify.com
    </div>
  </div>
</template>

<style scoped>
/* Ensure footer doesn't interfere with slide content */
div {
  pointer-events: none;
}

.footer-text {
  font-size: 0.6rem;
  line-height: 1.2;
  color: white;
}

/* Make the logo and text even smaller on smaller screens */
@media (max-width: 768px) {
  .footer-text {
    font-size: 0.5rem;
  }

  img {
    height: 0.75rem;
  }
}
</style>
