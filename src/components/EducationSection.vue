<template>
  <section id="education" class="py-32 relative">
    <div class="container mx-auto px-6 md:px-16 lg:px-24">

      <!-- Section header -->
      <div class="max-w-2xl mb-24 reveal">
        <div class="text-[11px] font-label tracking-[0.25em] text-sky-400/50 uppercase mb-6">Pendidikan</div>
        <h2 class="font-heading text-4xl md:text-5xl font-light text-white/80 tracking-tight leading-snug">
          Tempat fondasi dibangun.
        </h2>
      </div>

      <!-- Education entries (same editorial two-column) -->
      <div class="divide-y divide-white/[0.04]">
        <div
          v-for="(edu, index) in education"
          :key="edu.institution"
          class="reveal group py-12 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 items-start -mx-6 px-6 md:-mx-16 md:px-16 lg:-mx-24 lg:px-24 hover:bg-white/[0.01] transition-colors duration-500"
          :style="{ transitionDelay: (index * 100) + 'ms' }"
        >
          <!-- Left: Level + Year indicator -->
          <div class="md:col-span-3 pt-1 space-y-2">
            <span
              class="inline-block text-[9px] font-label tracking-[0.15em] uppercase px-2.5 py-1 rounded-full border border-white/10 text-white/20"
            >
              {{ edu.level }}
            </span>
          </div>

          <!-- Right: Institution details -->
          <div class="md:col-span-9 space-y-4">
            <div class="space-y-1.5">
              <h3 class="font-heading text-2xl md:text-3xl font-light text-white/75 tracking-tight group-hover:text-white transition-colors duration-500">
                {{ edu.institution }}
              </h3>
              <p class="text-[12px] font-label tracking-[0.1em] text-sky-400/40 uppercase">
                {{ edu.program }}
              </p>
            </div>

            <!-- GPA / Score badge -->
            <div class="flex items-center gap-4 pt-2">
              <div v-if="edu.gpa" class="flex items-center gap-2">
                <span class="text-[10px] font-mono text-white/15 tracking-widest">GPA</span>
                <span class="text-lg font-semibold text-white/60 tracking-tight">{{ edu.gpa }}</span>
                <span class="text-[10px] font-mono text-white/15">/4.00</span>
              </div>
              <div v-if="edu.score" class="flex items-center gap-2">
                <span class="text-[10px] font-mono text-white/15 tracking-widest">Score</span>
                <span class="text-lg font-semibold text-white/60 tracking-tight">{{ edu.score }}</span>
              </div>
            </div>

            <!-- Quote -->
            <p class="font-body text-sm text-white/20 leading-[1.75] italic border-l border-white/10 pl-4">
              "Algorithms, systems, and the discipline of engineering."
            </p>
          </div>
        </div>
      </div>

      <!-- GPA highlight block at bottom -->
      <div class="mt-24 reveal">
        <div class="max-w-sm glass-panel rounded-2xl p-8 border border-white/5 space-y-2">
          <div class="text-[10px] font-label tracking-[0.2em] text-white/20 uppercase">Cumulative GPA</div>
          <div class="flex items-baseline gap-2">
            <span class="font-heading text-6xl font-light text-white/80 tracking-tight">3.94</span>
            <span class="text-base font-light text-white/20">/4.00</span>
          </div>
          <div class="text-[10px] font-label tracking-[0.15em] text-sky-400/40 uppercase">UPN Veteran Jawa Timur · Informatics</div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue'
import { education } from '../data.js'

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('visible')
    })
  }, { threshold: 0.05 })
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el))
})
</script>
