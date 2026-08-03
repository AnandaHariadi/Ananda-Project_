<template>
  <section class="relative min-h-screen flex flex-col justify-center pt-40 pb-32 overflow-hidden">

    <div class="container mx-auto px-6 md:px-16 lg:px-24 relative z-10">
      <div class="max-w-3xl space-y-12">

        <!-- Eyebrow label -->
        <div class="reveal flex items-center gap-4">
          <div class="w-8 h-px bg-sky-500/50"></div>
          <span class="text-[11px] font-label tracking-[0.3em] text-sky-400/60 uppercase">
            Teknik Informatika · Semester 4
          </span>
        </div>

        <!-- Main editorial headline — Manrope 300 like fathurwithyou -->
        <div class="reveal space-y-2">
          <h1 class="font-heading text-6xl md:text-8xl font-light text-white/90 leading-[1.05] tracking-[-0.025em]">
            Muhammad<br/>
            <span class="text-gradient-electric" style="-webkit-text-fill-color: transparent;">Ananda</span><br/>
            Hariadi<span class="text-sky-400/70">.</span>
          </h1>
        </div>

        <!-- Editorial narrative body (like fathurwithyou's personal story) -->
        <div class="reveal space-y-5 max-w-xl">
          <p class="font-body text-lg text-white/40 leading-[1.85]">
            Membangun sistem digital yang menyelesaikan masalah nyata.
            Dari arsitektur web penuh hingga robotika dan pengembangan game.
          </p>
          <p class="font-body text-lg text-white/30 leading-[1.85]">
            Saya mulai dari pertanyaan. Kode menjadi cara untuk menjawabnya —
            bagi sistem yang saya rancang dan pengguna yang ingin saya layani.
          </p>
        </div>
        <!-- Stats row — minimal like fathurwithyou -->
        <div class="reveal flex items-center gap-10 pt-4 border-t border-white/5">
          <div v-for="stat in stats" :key="stat.label" class="space-y-1">
            <div class="text-2xl font-semibold text-white/80 tracking-tight">{{ stat.value }}</div>
            <div class="text-[10px] font-label tracking-[0.2em] text-white/25 uppercase">{{ stat.label }}</div>
          </div>
        </div>

        <!-- Social links row (like fathurwithyou.com hero) -->
        <div class="reveal flex flex-wrap items-center gap-6 pt-2">
          <a
            :href="profile.github"
            target="_blank"
            class="text-[11px] font-label tracking-[0.2em] text-white/30 hover:text-white uppercase transition-colors duration-400 flex items-center gap-1.5 group"
          >
            GitHub
            <span class="text-white/15 group-hover:text-white/50 transition-colors duration-400">→</span>
          </a>
          <a
            :href="profile.linkedin"
            target="_blank"
            class="text-[11px] font-label tracking-[0.2em] text-white/30 hover:text-white uppercase transition-colors duration-400 flex items-center gap-1.5 group"
          >
            LinkedIn
            <span class="text-white/15 group-hover:text-white/50 transition-colors duration-400">→</span>
          </a>
          <a
            :href="'mailto:' + profile.email"
            class="text-[11px] font-label tracking-[0.2em] text-white/30 hover:text-sky-400 uppercase transition-colors duration-400 flex items-center gap-1.5 group"
          >
            {{ profile.email }}
            <span class="text-white/15 group-hover:text-sky-400/50 transition-colors duration-400">→</span>
          </a>
        </div>

        <!-- Scroll indicator -->
        <div class="reveal pt-8">
          <a href="#projects" class="flex items-center gap-3 text-[10px] font-label tracking-[0.25em] text-white/20 uppercase hover:text-white/50 transition-colors duration-400 group w-fit">
            <span class="w-6 h-px bg-white/20 group-hover:w-10 transition-all duration-500"></span>
            Gulir untuk mengeksplorasi
          </a>
        </div>
      </div>
    </div>

    <!-- Decorative orbiting ring (right side, subtle) -->
    <div class="absolute top-[15%] right-[5%] w-[380px] h-[380px] opacity-[0.08] pointer-events-none hidden xl:block">
      <svg width="100%" height="100%" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="100" cy="100" r="90" stroke="#38bdf8" stroke-width="0.5" stroke-dasharray="3 6" class="animate-[spin_60s_linear_infinite]"/>
        <circle cx="100" cy="100" r="70" stroke="#6366f1" stroke-width="0.3" stroke-dasharray="2 8" class="animate-[spin_40s_linear_infinite_reverse]"/>
        <circle cx="100" cy="100" r="50" stroke="#38bdf8" stroke-width="0.5"/>
        <circle cx="100" cy="20" r="4" fill="#38bdf8" opacity="0.6"/>
        <circle cx="180" cy="100" r="3" fill="#6366f1" opacity="0.5"/>
      </svg>
    </div>

  </section>
</template>

<script setup>
import { onMounted } from 'vue'
import { stats, profile } from '../data.js'

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('visible'), 100)
      }
    })
  }, { threshold: 0.1 })
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el))
})
</script>
