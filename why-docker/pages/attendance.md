---
layout: default
transition: slide-up
---

<script setup>
const base = import.meta.env.BASE_URL
</script>

<div class="text-center">

### Mark your attendance

</div>

<div v-motion :initial="{ scale: 0.85, opacity: 0 }" :enter="{ scale: 1, opacity: 1, transition: { type: 'spring', stiffness: 80, delay: 300 } }" class="mt-10 flex justify-center">
  <div class="rounded-2xl p-4 shadow-lg" style="background: #ffffff">
    <img :src="`${base}qr-attendance.png`" alt="Attendance form QR code" class="w-52 h-52 block" />
  </div>
</div>

<div v-motion :initial="{ opacity: 0 }" :enter="{ opacity: 1, transition: { delay: 800, duration: 500 } }" class="mt-8 flex items-center justify-center gap-3">
  <mdi-cellphone-check class="text-2xl opacity-55 flex-shrink-0" />
  <span class="text-lg opacity-85">Camera on the code, tap the link.</span>
</div>

<!--
Say:
- last thing before close, ten seconds: phone camera at the code, link pops up, tap, name + email
- that is the attendance record for TODAY's session
- code is today-only (Docker); another session's code will not count for today
- leave slide up while last questions come in; say the instruction twice
- watching on the same phone they need to scan with: form link also dropping in Zoom chat, tap it there
- white panel behind the code is deliberate: phone scanners fail on dark or low-contrast codes

PREP: qr-attendance.png is the real Thursday form QR (decoded with zbarimg, form ID confirmed unique vs the other decks); if the form ever changes, re-export and re-verify the same way
PREP: paste the form link into Zoom chat at the start of Q&A (covers phone-only viewers)
FALLBACK: projected code will not scan: read the Zoom chat link aloud, keep the message pinned
-->
