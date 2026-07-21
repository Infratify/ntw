<!-- ConsoleWindow — a light browser/console window frame for GUI signpost
     slides (AWS console, Cloudflare dashboard, supplier quote). Put rows in
     the default slot; `title` names the fake tab. GUI mocks are always light
     by design (CLAUDE.md), so this stays light in both color schemes. -->
<script setup lang="ts">
withDefaults(defineProps<{ title?: string }>(), { title: 'console' })
</script>

<template>
  <div class="rounded-xl overflow-hidden border border-gray-400/40 shadow-lg bg-gray-100 text-gray-700 text-left">
    <div class="flex items-center gap-1.5 px-4 py-2.5 bg-gray-200 border-b border-gray-300">
      <span class="w-3 h-3 rounded-full bg-red-400"></span>
      <span class="w-3 h-3 rounded-full bg-yellow-400"></span>
      <span class="w-3 h-3 rounded-full bg-green-400"></span>
      <span class="ml-3 text-xs text-gray-500">{{ title }}</span>
    </div>
    <div class="px-6 py-5 space-y-4 text-sm">
      <slot />
    </div>
  </div>
</template>
