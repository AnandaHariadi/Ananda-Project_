<template>
  <div class="min-h-screen bg-[#030a16] text-white font-sans selection:bg-sky-500/30 selection:text-white relative">

    <!-- =========================================
         PAGE OPENING CURTAIN ANIMATION
    ========================================= -->
    <div
      class="fixed inset-0 z-[9999] flex items-center justify-center bg-[#030a16] transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] pointer-events-none"
      :class="curtainDone ? 'opacity-0' : 'opacity-100'"
    >
      <div class="text-center space-y-3">
        <div class="text-[11px] font-medium tracking-[0.35em] text-sky-400/60 uppercase font-label">
          Loading Portfolio
        </div>
        <div class="flex items-center gap-2 justify-center">
          <span
            v-for="n in 4"
            :key="n"
            class="w-1.5 h-1.5 rounded-full bg-sky-400/50 animate-bounce"
            :style="{ animationDelay: (n * 0.15) + 's' }"
          ></span>
        </div>
      </div>
    </div>

    <!-- =========================================
         FLOWING THREADS BACKGROUND (SVG Animated)
    ========================================= -->
    <div class="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-25">
      <svg class="absolute w-full h-full" viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
        <!-- Flowing horizontal wavy threads inspired by fathurwithyou.com -->
        <path d="M-100,150 C200,120 400,180 700,155 S1100,130 1540,160" fill="none" stroke="url(#thread1)" stroke-width="0.8" class="flowing-thread-svg" />
        <path d="M-100,280 C150,255 350,310 650,285 S950,260 1540,290" fill="none" stroke="url(#thread2)" stroke-width="0.6" class="flowing-thread-svg" style="animation-delay: 3s; animation-duration: 20s;" />
        <path d="M-100,400 C300,370 500,430 800,405 S1150,380 1540,410" fill="none" stroke="url(#thread1)" stroke-width="0.5" class="flowing-thread-svg" style="animation-delay: 6s; animation-duration: 18s;" />
        <path d="M-100,520 C200,495 450,555 750,530 S1100,500 1540,535" fill="none" stroke="url(#thread3)" stroke-width="0.7" class="flowing-thread-svg" style="animation-delay: 2s; animation-duration: 22s;" />
        <path d="M-100,650 C250,625 500,680 800,650 S1200,620 1540,660" fill="none" stroke="url(#thread2)" stroke-width="0.5" class="flowing-thread-svg" style="animation-delay: 8s; animation-duration: 17s;" />
        <path d="M-100,770 C180,742 380,800 680,772 S1050,745 1540,778" fill="none" stroke="url(#thread3)" stroke-width="0.4" class="flowing-thread-svg" style="animation-delay: 5s; animation-duration: 24s;" />
        <!-- Short secondary accent threads -->
        <path d="M-100,80 C350,60 600,100 1000,78 S1300,55 1540,82" fill="none" stroke="url(#thread1)" stroke-width="0.3" class="flowing-thread-svg" style="animation-delay: 10s; animation-duration: 28s;" />
        <path d="M-100,840 C280,815 520,860 820,838 S1180,812 1540,845" fill="none" stroke="url(#thread2)" stroke-width="0.3" class="flowing-thread-svg" style="animation-delay: 14s; animation-duration: 26s;" />
        <defs>
          <linearGradient id="thread1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stop-color="#38bdf8" stop-opacity="0" />
            <stop offset="35%" stop-color="#38bdf8" stop-opacity="1" />
            <stop offset="65%" stop-color="#6366f1" stop-opacity="1" />
            <stop offset="100%" stop-color="#6366f1" stop-opacity="0" />
          </linearGradient>
          <linearGradient id="thread2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stop-color="#0ea5e9" stop-opacity="0" />
            <stop offset="40%" stop-color="#0ea5e9" stop-opacity="1" />
            <stop offset="70%" stop-color="#7c3aed" stop-opacity="0.8" />
            <stop offset="100%" stop-color="#7c3aed" stop-opacity="0" />
          </linearGradient>
          <linearGradient id="thread3" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stop-color="#818cf8" stop-opacity="0" />
            <stop offset="30%" stop-color="#818cf8" stop-opacity="0.9" />
            <stop offset="60%" stop-color="#22d3ee" stop-opacity="1" />
            <stop offset="100%" stop-color="#22d3ee" stop-opacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>

    <!-- =========================================
         AMBIENT GLOW ORBS
    ========================================= -->
    <div class="fixed inset-0 pointer-events-none z-0">
      <div class="glow-orb orb-primary w-[700px] h-[700px] -top-[15%] -left-[15%] animate-float-slow"></div>
      <div class="glow-orb orb-secondary w-[500px] h-[500px] top-[35%] -right-[10%] animate-float-medium"></div>
      <div class="glow-orb orb-accent w-[600px] h-[600px] bottom-[5%] left-[25%] animate-float-slow" style="animation-delay: 4s;"></div>
    </div>

    <!-- =========================================
         TOP ACCENT LINE
    ========================================= -->
    <div class="fixed top-0 left-0 w-full h-[1px] z-[100] pointer-events-none"
      style="background: linear-gradient(90deg, transparent, rgba(56,189,248,0.6) 30%, rgba(99,102,241,0.6) 70%, transparent);">
    </div>

    <!-- =========================================
         INTERACTIVE MOUSE GLOW (Desktop)
    ========================================= -->
    <div
      class="hidden lg:block fixed w-80 h-80 rounded-full pointer-events-none z-[5] -translate-x-1/2 -translate-y-1/2 transition-all duration-700 ease-out"
      style="background: radial-gradient(circle, rgba(14,165,233,0.04), transparent 70%);"
      :style="{ left: mouseX + 'px', top: mouseY + 'px' }"
    ></div>

    <!-- =========================================
         NAVIGATION
    ========================================= -->
    <NavBar />

    <!-- =========================================
         MAIN CONTENT
    ========================================= -->
    <main class="relative z-10">
      <HeroSection />

      <div class="container mx-auto px-6 md:px-16 lg:px-24">
        <div class="glow-line-h my-4 opacity-30"></div>
      </div>

      <ProjectsGrid />

      <div class="container mx-auto px-6 md:px-16 lg:px-24">
        <div class="glow-line-h my-4 opacity-30"></div>
      </div>

      <SkillsSection />

      <div class="container mx-auto px-6 md:px-16 lg:px-24">
        <div class="glow-line-h my-4 opacity-30"></div>
      </div>

      <ExperienceTimeline />

      <div class="container mx-auto px-6 md:px-16 lg:px-24">
        <div class="glow-line-h my-4 opacity-30"></div>
      </div>

      <AwardsGrid />

      <div class="container mx-auto px-6 md:px-16 lg:px-24">
        <div class="glow-line-h my-4 opacity-30"></div>
      </div>

      <EducationSection />

      <!-- =========================================
           CONTACT SECTION (fathurwithyou editorial style)
      ========================================= -->
      <section id="contact" class="py-40 relative">
        <div class="container mx-auto px-6 md:px-16 lg:px-24">
          <div class="max-w-2xl mx-auto space-y-16 reveal">

            <!-- Section eyebrow -->
            <div class="text-[11px] font-label tracking-[0.25em] text-sky-400/60 uppercase">
              HUBUNGI
            </div>

            <!-- Editorial headline (weight 300 like fathurwithyou) -->
            <h2 class="font-heading text-5xl md:text-7xl font-light text-white/90 leading-tight tracking-tight">
              Saat kerja menjadi cocok.
            </h2>

            <!-- Narrative body -->
            <div class="space-y-6 font-body text-lg text-white/40 leading-[1.85]">
              <p>
                Karya saya berada di antara sistem perangkat lunak, pengembangan full-stack, dan inovasi startup.
                Jika sebuah proyek membutuhkan kejelasan, eksekusi, dan komitmen jangka panjang, saya siap.
              </p>
              <p>
                Jika proyeknya tepat, mari kita bicarakan.
              </p>
            </div>

            <!-- Links (editorial minimal style) -->
            <div class="space-y-4 pt-4 border-t border-white/5">
              <div class="text-[11px] font-label tracking-[0.2em] text-white/20 uppercase mb-6">
                Kontak langsung
              </div>
              <a
                :href="'mailto:' + profile.email"
                class="block text-2xl font-light text-white/70 hover:text-sky-400 transition-colors duration-500 font-heading tracking-tight"
              >
                {{ profile.email }}
              </a>

              <!-- Social links row -->
              <div class="flex flex-wrap gap-6 pt-8">
                <a
                  v-for="link in socialLinks"
                  :key="link.label"
                  :href="link.href"
                  target="_blank"
                  class="text-[11px] font-label tracking-[0.2em] text-white/30 hover:text-white uppercase transition-colors duration-400 flex items-center gap-1.5 group"
                >
                  {{ link.label }}
                  <span class="text-white/20 group-hover:text-white/60 transition-colors">→</span>
                </a>
              </div>
            </div>

            <!-- Footer note -->
            <div class="pt-16 border-t border-white/5 flex justify-between items-center text-[11px] font-label text-white/20">
              <span>Sidoarjo, Indonesia</span>
              <span>&copy; {{ new Date().getFullYear() }} Muhammad Ananda Hariadi</span>
            </div>
          </div>
        </div>
      </section>
    </main>

    <!-- =========================================
         BACK TO TOP BUTTON
    ========================================= -->
    <button
      @click="scrollToTop"
      class="fixed bottom-10 right-10 w-10 h-10 rounded-full border border-white/10 bg-[#030a16]/80 backdrop-blur-md text-sky-400/60 hover:text-sky-300 hover:border-sky-500/30 flex items-center justify-center transition-all duration-500 hover:-translate-y-1 z-50 text-sm"
      :class="showBackToTop ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0 pointer-events-none'"
      aria-label="Back to top"
    >
      ↑
    </button>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { profile } from './data.js'
import NavBar from './components/NavBar.vue'
import HeroSection from './components/HeroSection.vue'
import ProjectsGrid from './components/ProjectsGrid.vue'
import SkillsSection from './components/SkillsSection.vue'
import ExperienceTimeline from './components/ExperienceTimeline.vue'
import AwardsGrid from './components/AwardsGrid.vue'
import EducationSection from './components/EducationSection.vue'

const curtainDone = ref(false)
const showBackToTop = ref(false)
const mouseX = ref(0)
const mouseY = ref(0)

const socialLinks = [
  { label: 'GitHub', href: profile.github },
  { label: 'LinkedIn', href: profile.linkedin },
  { label: 'Email', href: 'mailto:' + profile.email },
]

const handleScroll = () => {
  showBackToTop.value = window.scrollY > 600
}

const handleMouseMove = (e) => {
  mouseX.value = e.clientX
  mouseY.value = e.clientY
}

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(() => {
  // Page opening curtain — lift after 900ms
  setTimeout(() => { curtainDone.value = true }, 900)

  window.addEventListener('scroll', handleScroll)
  window.addEventListener('mousemove', handleMouseMove)

  // Global scroll reveal observer
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('visible')
    })
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' })

  document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach(el => observer.observe(el))
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  window.removeEventListener('mousemove', handleMouseMove)
})
</script>
