<template>
  <section id="skills" ref="sectionRef" class="py-28 md:py-32 relative z-20 overflow-hidden">
    <!-- accent glows -->
    <div class="absolute -left-40 top-1/4 w-[520px] h-[520px] bg-violet-900/10 rounded-full blur-[150px] pointer-events-none mix-blend-screen animate-float" style="animation-delay: 0.5s"></div>
    <div class="absolute -right-40 bottom-1/4 w-[480px] h-[480px] bg-cyan-900/10 rounded-full blur-[150px] pointer-events-none mix-blend-screen animate-float" style="animation-delay: 2.5s"></div>

    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">

      <!-- Header -->
      <div class="text-center max-w-2xl mx-auto mb-14 md:mb-16" v-reveal:zoom>
        <div class="inline-flex items-center gap-4 mb-5">
          <div class="w-10 h-px bg-gradient-to-r from-transparent to-purple-500"></div>
          <h2 class="text-purple-400 font-bold tracking-[0.2em] uppercase text-sm">Expertise</h2>
          <div class="w-10 h-px bg-gradient-to-l from-transparent to-purple-500"></div>
        </div>
        <h3 class="text-4xl md:text-6xl font-outfit font-black text-white tracking-tight leading-tight drop-shadow-lg">
          Skills &amp; <span class="gradient-text">Expertise.</span>
        </h3>
        <p class="mt-5 text-gray-400 font-light text-base md:text-lg">
          Specialized in cutting-edge technologies that shape the future of digital innovation.
        </p>
      </div>

      <!-- Expertise grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-7">
        <article
          v-for="(area, i) in expertiseAreas"
          :key="i"
          v-reveal:up="(i % 2) * 120"
          class="group relative rounded-3xl p-6 md:p-8 border border-white/10 bg-[#0a051c]/70 backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,0.4)] transition-all duration-500 hover:-translate-y-1 hover:border-white/20"
        >
          <!-- thin light on the left edge (subtle, not a full glow) -->
          <span :class="['absolute left-0 top-7 bottom-7 w-[3px] rounded-full origin-center scale-y-0 opacity-0 group-hover:scale-y-100 group-hover:opacity-100 transition-all duration-500 ease-out bg-gradient-to-b', area.accent]"></span>

          <!-- category header -->
          <div class="flex items-center gap-4 mb-7">
            <div :class="['w-12 h-12 rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 bg-gradient-to-br', area.accent]">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" :d="area.icon" />
              </svg>
            </div>
            <h4 class="font-outfit font-bold text-xl md:text-2xl text-white tracking-tight">{{ area.title }}</h4>
          </div>

          <!-- skill bars -->
          <div class="space-y-5">
            <div v-for="(skill, j) in area.skills" :key="j">
              <div class="flex items-center justify-between mb-1.5">
                <span class="text-sm font-medium text-gray-300">{{ skill.name }}</span>
                <span class="text-xs font-bold text-gray-400 tabular-nums">{{ skill.level }}%</span>
              </div>
              <div class="h-2 rounded-full bg-white/5 overflow-hidden">
                <div
                  :class="['relative h-full rounded-full overflow-hidden bg-gradient-to-r transition-[width] duration-1000 ease-out', area.accent]"
                  :style="{ width: revealed ? skill.level + '%' : '0%', transitionDelay: (i * 80 + j * 120) + 'ms' }"
                >
                  <!-- moving shimmer sweep -->
                  <span class="absolute inset-0 -translate-x-full animate-shine bg-gradient-to-r from-transparent via-white/40 to-transparent"></span>
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { expertiseAreas } from '../data.js';

// Fill the bars once the section scrolls into view.
const sectionRef = ref(null);
const revealed = ref(false);
let observer = null;

onMounted(() => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    revealed.value = true;
    return;
  }
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          revealed.value = true;
          observer.disconnect();
        }
      });
    },
    { threshold: 0.25 }
  );
  if (sectionRef.value) observer.observe(sectionRef.value);
});
onUnmounted(() => observer && observer.disconnect());
</script>
