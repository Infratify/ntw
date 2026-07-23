---
layout: default
transition: slide-up
---

<div class="text-center">

### Mark your attendance

</div>

<div v-motion :initial="{ scale: 0.85, opacity: 0 }" :enter="{ scale: 1, opacity: 1, transition: { type: 'spring', stiffness: 80, delay: 300 } }" class="mt-10 flex justify-center">
  <div class="rounded-2xl p-4 shadow-lg" style="background: #ffffff">
    <img src="/qr-attendance.png" alt="Attendance form QR code" class="w-52 h-52 block" />
  </div>
</div>

<div v-motion :initial="{ opacity: 0 }" :enter="{ opacity: 1, transition: { delay: 800, duration: 500 } }" class="mt-8 flex items-center justify-center gap-3">
  <mdi-cellphone-check class="text-2xl opacity-55 flex-shrink-0" />
  <span class="text-lg opacity-85">Camera on the code, tap the link.</span>
</div>

<!--
Last thing before we close, and it takes ten seconds: point your phone camera at this code, a link pops up, tap it, fill in your name and email. That is the attendance record for today's session.
Leave this slide up while the last questions come in, and say the instruction twice: some people are watching on the same phone they need to scan with. For those, tell them the form link is also being dropped in the Zoom chat right now, so they can tap it there instead.
The white panel behind the code is deliberate: phone scanners fail on a dark or low-contrast code.
PREP: paste the form link into Zoom chat at the start of Q&A so phone-only viewers are covered.
FALLBACK: if the projected code will not scan, read out the Zoom chat link and keep the chat message pinned.
-->
