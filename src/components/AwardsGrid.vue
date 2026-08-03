<template>
  <section id="awards" class="py-32 relative">
    <div class="container mx-auto px-6 md:px-16 lg:px-24">

      <!-- Section header -->
      <div class="max-w-2xl mb-24 reveal">
        <div class="text-[11px] font-label tracking-[0.25em] text-sky-400/50 uppercase mb-6">Penghargaan</div>
        <h2 class="font-heading text-4xl md:text-5xl font-light text-white/80 tracking-tight leading-snug">
          30+ penghargaan di tingkat nasional dan internasional.
        </h2>
      </div>

      <!-- Awards list (editorial row format like fathurwithyou) -->
      <div class="divide-y divide-white/[0.04]">
        <div
          v-for="(award, index) in awards"
          :key="award.title"
          class="reveal group py-8 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-10 items-baseline -mx-6 px-6 md:-mx-16 md:px-16 lg:-mx-24 lg:px-24 hover:bg-white/[0.01] transition-colors duration-500"
          :style="{ transitionDelay: (index * 60) + 'ms' }"
        >
          <!-- Left: Level badge + Year -->
          <div class="md:col-span-3 flex items-center gap-3">
            <span
              class="text-[9px] font-label tracking-[0.15em] uppercase px-2.5 py-1 rounded-full border"
              :class="award.level === 'int'
                ? 'border-sky-500/30 text-sky-400/70 bg-sky-500/10'
                : 'border-white/10 text-white/25 bg-white/[0.03]'"
            >
              {{ award.level === 'int' ? 'International' : 'National' }}
            </span>
            <span class="text-[10px] font-mono text-white/15 tracking-widest">{{ award.year }}</span>
          </div>

          <!-- Middle: Title + Org -->
          <div class="md:col-span-8 space-y-1">
            <h3 class="font-heading text-xl md:text-2xl font-light text-white/65 tracking-tight group-hover:text-white/85 transition-colors duration-500">
              {{ award.title }}
            </h3>
            <p class="text-[11px] font-label tracking-[0.1em] text-white/20 uppercase">
              {{ award.org }}
            </p>
          </div>

          <!-- Right: Arrow indicator -->
          <div class="md:col-span-1 md:justify-self-end">
            <span class="text-white/10 group-hover:text-sky-400/40 transition-colors duration-400 text-sm">→</span>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue'
import { awards } from '../data.js'

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('visible')
    })
  }, { threshold: 0.05 })
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el))
})
</script>
