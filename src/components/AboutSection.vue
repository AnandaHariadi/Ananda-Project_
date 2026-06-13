<template>
  <section id="about" class="py-28 md:py-36 relative z-10 overflow-hidden">
    <!-- Abstract dark glow -->
    <div class="absolute top-1/3 -right-32 w-[600px] h-[600px] bg-purple-900/10 rounded-full blur-[150px] pointer-events-none mix-blend-screen animate-float" style="animation-delay: 1s"></div>

    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">

      <!-- ===================== Header ===================== -->
      <div class="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
        <div v-reveal class="max-w-3xl relative">
          <div class="flex items-center gap-4 mb-6">
            <div class="w-16 h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"></div>
            <h2 class="text-purple-400 font-bold tracking-[0.2em] uppercase text-sm">About Me</h2>
          </div>
          <h3 class="text-5xl md:text-7xl font-outfit font-black text-white tracking-tight leading-tight drop-shadow-lg">
            Behind the <span class="gradient-text">Code.</span>
          </h3>
          <p class="mt-8 text-xl md:text-2xl text-gray-400 font-light leading-relaxed">
            {{ aboutIntro }}
          </p>
        </div>

        <div class="shrink-0 pb-2">
          <button
            v-reveal="120"
            @click="openAbout"
            class="hidden md:inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white/5 border border-white/10 text-white font-semibold hover:bg-white/10 hover:border-purple-400/50 transition-all shadow-[0_8px_30px_rgba(0,0,0,0.5)] group"
          >
            More about me
            <span class="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:translate-x-1 transition-transform">
              <svg class="w-4 h-4 text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
            </span>
          </button>
        </div>
      </div>

      <!-- ===================== Creative Timeline ===================== -->
      <div class="relative space-y-12">
        <!-- Vertical connecting line -->
        <div class="absolute left-8 top-8 bottom-8 w-px bg-gradient-to-b from-purple-500/50 via-blue-500/20 to-transparent hidden md:block"></div>

        <div
          v-for="(exp, i) in experiences"
          :key="i"
          v-reveal="i * 120"
          class="relative flex flex-col md:flex-row gap-8 md:gap-16 items-start group"
        >
          <!-- Timeline Node -->
          <div class="hidden md:flex flex-col items-center mt-2 relative z-10 shrink-0 w-16">
            <div class="w-4 h-4 rounded-full bg-black border-2 border-purple-400 shadow-[0_0_15px_rgba(167,139,250,0.6)] group-hover:scale-150 group-hover:bg-purple-400 transition-all duration-500"></div>
          </div>

          <!-- Content Card -->
          <button
            @click="openAbout"
            class="w-full text-left relative rounded-[2rem] overflow-hidden bg-[#0a051c]/60 backdrop-blur-xl border border-white/5 shadow-[0_8px_30px_rgba(0,0,0,0.5)] hover:border-purple-500/30 hover:shadow-[0_20px_50px_rgba(109,40,217,0.15)] transition-all duration-500 hover:-translate-y-1 flex flex-col sm:flex-row"
          >
            <!-- visual side -->
            <div :class="['sm:w-1/3 relative p-8 flex flex-col justify-center overflow-hidden bg-gradient-to-br', exp.gradient]">
              <div class="absolute inset-0 bg-[radial-gradient(circle,_rgba(255,255,255,0.2)_1px,_transparent_1px)] [background-size:16px_16px] opacity-40"></div>
              
              <div class="relative z-10 flex flex-col items-start gap-4">
                <span class="px-3 py-1 rounded-full bg-black/30 backdrop-blur-md border border-white/10 text-white text-xs font-bold uppercase tracking-wider shadow-lg">
                  {{ exp.tag }}
                </span>
                <div class="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white group-hover:scale-110 group-hover:rotate-12 transition-transform duration-500 shadow-xl">
                  <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="exp.icon"></path></svg>
                </div>
              </div>
            </div>

            <!-- text side -->
            <div class="p-8 sm:w-2/3 flex flex-col justify-center relative">
              <div class="absolute right-8 top-8 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300">
                <svg class="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </div>

              <p class="text-xs font-bold uppercase tracking-[0.2em] text-purple-300 mb-2">{{ exp.period }}</p>
              <h4 class="text-2xl font-outfit font-bold text-white leading-snug mb-1">{{ exp.org }}</h4>
              <p class="text-base font-medium text-gray-300">{{ exp.role }}</p>
              <p class="text-sm text-gray-400 mt-4 leading-relaxed max-w-lg">{{ exp.summary }}</p>
            </div>
          </button>
        </div>
      </div>

      <!-- mobile "open" button -->
      <div v-reveal class="md:hidden mt-12">
        <button
          @click="openAbout"
          class="w-full inline-flex items-center justify-center gap-3 px-6 py-4 rounded-2xl bg-white/10 border border-white/20 text-white font-semibold shadow-lg backdrop-blur-md"
        >
          More about me
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
        </button>
      </div>

    </div>
  </section>
</template>

<script setup>
import { aboutIntro, experiences } from '../data.js';
import { openAbout } from '../store.js';
</script>
