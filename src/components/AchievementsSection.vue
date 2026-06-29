<template>
  <section id="achievements" class="py-28 md:py-32 relative z-20 overflow-hidden">
    <!-- brand accent glows -->
    <div class="absolute -right-40 top-1/4 w-[520px] h-[520px] bg-purple-900/10 rounded-full blur-[150px] pointer-events-none mix-blend-screen animate-float" style="animation-delay: 1s"></div>
    <div class="absolute -left-40 bottom-1/4 w-[480px] h-[480px] bg-blue-900/10 rounded-full blur-[150px] pointer-events-none mix-blend-screen animate-float" style="animation-delay: 3s"></div>

    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">

      <!-- Header -->
      <div class="text-center max-w-2xl mx-auto mb-14 md:mb-16" v-reveal>
        <div class="inline-flex items-center gap-4 mb-5">
          <div class="w-10 h-px bg-gradient-to-r from-transparent to-indigo-500"></div>
          <h2 class="text-indigo-400 font-bold tracking-[0.2em] uppercase text-sm">Gallery</h2>
          <div class="w-10 h-px bg-gradient-to-l from-transparent to-indigo-500"></div>
        </div>
        <h3 class="whitespace-nowrap font-display font-extrabold tracking-tight leading-[1.15] text-[clamp(1.3rem,6vw,3.75rem)] min-h-[1.2em] px-1">
          <span class="gradient-text">{{ typed }}</span><span class="type-caret" aria-hidden="true">|</span>
        </h3>
        <p class="mt-5 text-gray-400 font-light text-base md:text-lg">
          A collection of certificates, programs, and milestones I've picked up along the way. Tap any card to open its documentation.
        </p>
      </div>

      <!-- Image-first gallery grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
        <template v-for="(a, i) in achievements" :key="i">

          <!-- ===== Gallery card (image-first) ===== -->
          <article
            v-reveal="(i % 3) * 90"
            @click="view(a)"
            class="group relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 cursor-pointer shadow-[0_10px_40px_rgba(0,0,0,0.4)] transition-all duration-500 hover:-translate-y-1.5 hover:border-indigo-400/40"
          >
            <!-- visual: certificate image, or branded fallback -->
            <img
              v-if="a.image"
              :src="a.image"
              :alt="a.title"
              loading="lazy"
              class="absolute inset-0 w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-700 ease-out"
            />
            <div v-else class="absolute inset-0 bg-gradient-to-br from-[#1a0b2e] via-[#0a051c] to-[#0a192f] flex items-center justify-center">
              <div class="absolute inset-0 bg-[radial-gradient(circle,_rgba(255,255,255,0.04)_1px,_transparent_1px)] [background-size:22px_22px]"></div>
              <svg class="w-20 h-20 text-white/10 group-hover:text-white/20 group-hover:scale-110 transition-all duration-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round">
                <template v-if="a.type === 'Championship'"><path d="M8 21h8M12 17v4M7 4h10v5a5 5 0 01-10 0V4z" /><path d="M7 6H4v1a3 3 0 003 3M17 6h3v1a3 3 0 01-3 3" /></template>
                <template v-else-if="a.type === 'Scholarship'"><path d="M12 4L2 9l10 5 10-5-10-5z" /><path d="M6 11v4c0 1.2 2.7 2.5 6 2.5s6-1.3 6-2.5v-4" /></template>
                <template v-else-if="a.type === 'Program'"><path d="M13 3L4 14h7l-1 7 9-11h-7l1-7z" /></template>
                <template v-else><circle cx="12" cy="9" r="5" /><path d="M9.5 9l1.7 1.7L15 7M9 13.5L7.5 21l4.5-2.2L16.5 21 15 13.5" /></template>
              </svg>
            </div>

            <!-- dark overlay for legibility -->
            <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent"></div>

            <!-- top row: type + year -->
            <div class="absolute top-3 inset-x-3 flex items-center justify-between">
              <span class="px-2.5 py-1 rounded-full text-[0.6rem] font-bold uppercase tracking-wider text-white bg-black/40 backdrop-blur border border-white/10">{{ a.type }}</span>
              <span v-if="a.year" class="px-2 py-0.5 rounded-full text-[0.65rem] font-semibold text-white/80 bg-black/40 backdrop-blur border border-white/10 tabular-nums">{{ a.year }}</span>
            </div>

            <!-- bottom content -->
            <div class="absolute bottom-0 inset-x-0 p-5">
              <h4 class="font-outfit font-bold text-white text-base md:text-lg leading-snug line-clamp-2">{{ a.title }}</h4>
              <p class="text-sm text-indigo-300/90 mt-0.5 line-clamp-1">{{ a.issuer }}</p>

              <!-- reveal-on-hover action -->
              <div class="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-500 ease-out">
                <div class="overflow-hidden">
                  <div class="flex items-center gap-2 pt-3 text-sm font-semibold" :class="(a.file || a.image) ? 'text-white' : 'text-gray-400'">
                    {{ a.file ? 'View certificate' : (a.image ? 'View documentation' : 'Documentation soon') }}
                    <svg v-if="a.file || a.image" class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </template>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { achievements } from '../data.js';
import { openDetail } from '../store.js';

/* typewriter heading — types in, pauses, types out, loops (gently) */
const fullTitle = 'Certificates & Credentials.';
const typed = ref('');
let timer = null;

onMounted(() => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    typed.value = fullTitle;
    return;
  }
  let i = 0;
  let dir = 1; // 1 = typing, -1 = deleting
  const tick = () => {
    i += dir;
    typed.value = fullTitle.slice(0, i);
    if (i >= fullTitle.length) {
      dir = -1;
      timer = setTimeout(tick, 1900); // hold full text
    } else if (i <= 0) {
      dir = 1;
      timer = setTimeout(tick, 650); // brief pause when empty
    } else {
      timer = setTimeout(tick, dir > 0 ? 95 : 45);
    }
  };
  timer = setTimeout(tick, 400);
});
onUnmounted(() => clearTimeout(timer));

function view(a) {
  // If a certificate file is attached, open it directly in a new tab.
  if (a.file) {
    window.open(a.file, '_blank', 'noopener');
    return;
  }
  openDetail({
    title: a.title,
    tag: a.type,
    period: a.year,
    role: a.issuer,
    description: a.description,
    image: a.image,
    gradient: 'from-violet-600 to-blue-600',
  });
}
</script>

<style scoped>
.type-caret {
  display: inline-block;
  margin-left: 0.06em;
  font-weight: 300;
  color: #a78bfa;
  animation: caret-blink 1s steps(1) infinite;
}
@keyframes caret-blink {
  50% { opacity: 0; }
}
@media (prefers-reduced-motion: reduce) {
  .type-caret { display: none; }
}
</style>
