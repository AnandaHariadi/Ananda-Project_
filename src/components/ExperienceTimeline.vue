<template>
  <section id="experience" class="py-32 relative">
    <div class="container mx-auto px-6 md:px-16 lg:px-24">

      <!-- Section header -->
      <div class="max-w-2xl mb-24 reveal">
        <div class="text-[11px] font-label tracking-[0.25em] text-sky-400/50 uppercase mb-6">Riwayat kerja</div>
        <h2 class="font-heading text-4xl md:text-5xl font-light text-white/80 tracking-tight leading-snug">
          Pengalaman menunjukkan di mana saya menerapkan kemampuan saya.
        </h2>
      </div>

      <!-- Timeline entries (left: date, right: content — like fathurwithyou) -->
      <div class="divide-y divide-white/[0.04]">
        <div
          v-for="(exp, index) in experiences"
          :key="exp.role"
          class="reveal group py-12 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 items-start -mx-6 px-6 md:-mx-16 md:px-16 lg:-mx-24 lg:px-24 hover:bg-white/[0.01] transition-colors duration-600"
          :style="{ transitionDelay: (index * 80) + 'ms' }"
        >
          <!-- Left column: period (25%) -->
          <div class="md:col-span-3 pt-1">
            <span class="text-[11px] font-label tracking-[0.15em] text-white/25 uppercase">
              {{ exp.period }}
            </span>
          </div>

          <!-- Right column: content (75%) -->
          <div class="md:col-span-9 space-y-4">
            <div class="space-y-1">
              <h3 class="font-heading text-2xl md:text-3xl font-light text-white/75 tracking-tight group-hover:text-white transition-colors duration-500">
                {{ exp.role }}
              </h3>
              <p class="text-[12px] font-label tracking-[0.1em] text-sky-400/40 uppercase">
                {{ exp.company }}
              </p>
            </div>

            <!-- Bullet achievements -->
            <ul class="space-y-2 pt-2">
              <li
                v-for="(item, i) in exp.desc"
                :key="i"
                class="flex gap-3 items-baseline"
              >
                <span class="text-sky-500/30 text-xs shrink-0 mt-[2px]">–</span>
                <p class="font-body text-base text-white/30 leading-[1.75]">{{ item }}</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue'
import { experiences } from '../data.js'

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('visible')
    })
  }, { threshold: 0.05 })
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el))
})
</script>
