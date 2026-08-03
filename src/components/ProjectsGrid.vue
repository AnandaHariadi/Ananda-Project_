<template>
  <section id="projects" class="py-32 relative overflow-hidden">
    <div class="container mx-auto px-6 md:px-16 lg:px-24">

      <!-- Section Header -->
      <div class="max-w-3xl mb-20 reveal">
        <div class="flex items-center gap-3 mb-4">
          <span class="w-8 h-px bg-sky-400/60"></span>
          <span class="text-[11px] font-label tracking-[0.25em] text-sky-400/70 uppercase">Featured Works & Projects</span>
        </div>
        <h2 class="font-heading text-4xl md:text-6xl font-light text-white/90 tracking-tight leading-tight">
          Selected Showcase & Systems Built
        </h2>
        <p class="font-body text-base text-white/40 mt-4 max-w-xl">
          Menampilkan koleksi proyek unggulan dengan perpaduan desain visual elegan, arsitektur sistem modern, dan pengalaman interaktif.
        </p>
      </div>

      <!-- View Switcher (Featured Real Estate Banner Style vs Visual Grid Cards) -->
      <div class="flex flex-wrap items-center justify-between gap-4 mb-14 reveal">
        <!-- Category Pills -->
        <div class="flex flex-wrap gap-2">
          <button
            v-for="cat in categories"
            :key="cat.id"
            @click="activeCategory = cat.id"
            class="px-5 py-2 text-[11px] font-label tracking-[0.15em] uppercase transition-all duration-500 rounded-full backdrop-blur-md"
            :class="activeCategory === cat.id
              ? 'text-white bg-sky-500/20 border border-sky-400/40 shadow-[0_0_20px_rgba(56,189,248,0.2)]'
              : 'text-white/30 hover:text-white/70 border border-white/5 hover:border-white/20 bg-white/[0.02]'"
          >
            {{ cat.name }}
          </button>
        </div>

        <!-- Mode Layout Switcher -->
        <div class="flex items-center gap-1 bg-white/[0.03] p-1 rounded-full border border-white/10 backdrop-blur-md">
          <button 
            @click="displayMode = 'featured'"
            class="px-4 py-1.5 rounded-full text-[10px] font-label tracking-[0.15em] uppercase transition-all duration-300 flex items-center gap-2"
            :class="displayMode === 'featured' ? 'bg-sky-500/30 text-white border border-sky-400/30' : 'text-white/40 hover:text-white'"
          >
            <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" /></svg>
            Editorial Banner
          </button>
          <button 
            @click="displayMode = 'cards'"
            class="px-4 py-1.5 rounded-full text-[10px] font-label tracking-[0.15em] uppercase transition-all duration-300 flex items-center gap-2"
            :class="displayMode === 'cards' ? 'bg-sky-500/30 text-white border border-sky-400/30' : 'text-white/40 hover:text-white'"
          >
            <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 14a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 14a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg>
            Visual Grid
          </button>
        </div>
      </div>

      <!-- =========================================================================
           MODE 1: EDITORIAL BANNER (Inspirasi Gambar 1 & 2 - findrealestate.com style)
      ========================================================================= -->
      <div v-if="displayMode === 'featured'" class="space-y-16">
        <div
          v-for="(project, index) in filteredProjects"
          :key="project.title"
          class="reveal group relative bg-gradient-to-br from-white/[0.04] to-white/[0.01] rounded-3xl border border-white/10 hover:border-sky-400/40 p-6 md:p-10 transition-all duration-700 hover:shadow-[0_20px_60px_rgba(14,165,233,0.15)] overflow-hidden"
        >
          <!-- Subtle Animated Ambient Glow -->
          <div class="absolute -right-20 -bottom-20 w-80 h-80 bg-sky-500/10 rounded-full blur-3xl group-hover:bg-sky-400/20 transition-all duration-1000 pointer-events-none"></div>

          <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center relative z-10">
            <!-- Left Info Panel -->
            <div class="lg:col-span-5 space-y-6 flex flex-col justify-between h-full">
              <div class="space-y-4">
                <!-- Date / Metadata & Edition -->
                <div class="flex items-center justify-between text-xs font-mono text-white/30 tracking-wider border-b border-white/5 pb-4">
                  <span>RELEASE // 2025.0{{ (index % 9) + 1 }}</span>
                  <span class="text-sky-400/80 font-bold uppercase tracking-widest text-[10px] bg-sky-400/10 border border-sky-400/20 px-2.5 py-0.5 rounded-full">
                    {{ project.category }}
                  </span>
                </div>

                <!-- Big Clean Headline (findrealestate style) -->
                <h3 class="font-heading text-3xl md:text-5xl font-light text-white/90 tracking-tight group-hover:text-white transition-colors duration-500 leading-tight">
                  {{ project.title }}
                </h3>

                <!-- Description -->
                <p class="font-body text-base text-white/40 leading-relaxed line-clamp-3">
                  {{ project.desc }}
                </p>

                <!-- Tags -->
                <div class="flex flex-wrap gap-2 pt-2">
                  <span
                    v-for="tag in project.tags"
                    :key="tag"
                    class="text-[10px] font-label tracking-widest uppercase text-white/50 bg-white/5 border border-white/10 px-3 py-1 rounded-full"
                  >
                    {{ tag }}
                  </span>
                </div>
              </div>

              <!-- Pill Shaped Button with Hover Arrow (findrealestate.com style) -->
              <div class="pt-6 flex items-center gap-4">
                <a
                  :href="project.links.live"
                  class="group/btn inline-flex items-center gap-3 px-7 py-3 rounded-full border border-white/20 bg-white/5 hover:bg-white hover:text-slate-950 transition-all duration-500 text-xs font-label tracking-[0.2em] uppercase font-semibold text-white shadow-lg"
                >
                  <span>Explore Showcase</span>
                  <svg class="w-4 h-4 transform group-hover/btn:translate-x-1.5 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>

                <a
                  :href="project.links.github"
                  class="px-5 py-3 rounded-full border border-white/10 text-white/40 hover:text-sky-400 hover:border-sky-400/40 transition-all text-xs font-label tracking-[0.15em] uppercase"
                >
                  Source
                </a>
              </div>
            </div>

            <!-- Right Image Frame (High Impact Image Showcase with Parallax Hover) -->
            <div class="lg:col-span-7 relative group/img overflow-hidden rounded-2xl aspect-[16/10] border border-white/10 bg-slate-900 shadow-2xl">
              <img
                :src="project.image"
                :alt="project.title"
                class="w-full h-full object-cover grayscale opacity-80 group-hover/img:grayscale-0 group-hover/img:opacity-100 group-hover/img:scale-105 transition-all duration-1000 ease-out"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-60 group-hover/img:opacity-20 transition-opacity duration-500"></div>

              <!-- Interactive Floating Pill Badge over image -->
              <div class="absolute bottom-6 right-6 px-4 py-2 rounded-full bg-slate-950/80 backdrop-blur-md border border-white/10 text-[10px] font-mono text-sky-400 flex items-center gap-2 shadow-2xl transform translate-y-2 opacity-0 group-hover/img:translate-y-0 group-hover/img:opacity-100 transition-all duration-500">
                <span class="w-2 h-2 rounded-full bg-sky-400 animate-pulse"></span>
                <span>INTERACTIVE SYSTEM</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- =========================================================================
           MODE 2: VISUAL GRID CARDS (Inspirasi Gambar 2 - 3 Columns Overlay Card)
      ========================================================================= -->
      <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="(project, index) in filteredProjects"
          :key="project.title"
          class="reveal group relative h-[480px] rounded-3xl overflow-hidden border border-white/10 hover:border-sky-400/50 transition-all duration-700 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(14,165,233,0.2)] flex flex-col justify-between p-8"
        >
          <!-- Background Image with Zoom and Grayscale Hover -->
          <img
            :src="project.image"
            :alt="project.title"
            class="absolute inset-0 w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-90 group-hover:scale-110 transition-all duration-1000 ease-out z-0"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent z-10"></div>

          <!-- Top Badge -->
          <div class="relative z-20 flex justify-between items-center">
            <span class="text-[10px] font-mono tracking-widest text-sky-400 uppercase bg-slate-950/70 border border-sky-400/30 px-3 py-1 rounded-full backdrop-blur-md">
              {{ project.category }}
            </span>
            <span class="text-[10px] font-mono text-white/40">0{{ index + 1 }}</span>
          </div>

          <!-- Bottom Card Content -->
          <div class="relative z-20 space-y-4">
            <h3 class="font-heading text-3xl font-light text-white tracking-tight leading-tight group-hover:text-sky-300 transition-colors duration-400">
              {{ project.title }}
            </h3>

            <p class="font-body text-sm text-white/60 line-clamp-2 leading-relaxed">
              {{ project.desc }}
            </p>

            <!-- Pill Button -->
            <div class="pt-4 flex items-center gap-3">
              <a
                :href="project.links.live"
                class="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-white/30 bg-slate-950/60 backdrop-blur-md hover:bg-white hover:text-slate-950 transition-all duration-400 text-[11px] font-label tracking-[0.15em] uppercase font-medium text-white"
              >
                <span>Learn More</span>
                <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- Footer Count -->
      <div class="mt-16 pt-8 border-t border-white/5 flex items-center justify-between text-xs font-label text-white/30 uppercase tracking-widest reveal">
        <span>Total {{ filteredProjects.length }} Projects Curated</span>
        <span>Muhammad Ananda Hariadi Showcase</span>
      </div>

    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { projects } from '../data.js'

const activeCategory = ref('all')
const displayMode = ref('featured') // 'featured' (findrealestate style) or 'cards'

const categories = [
  { id: 'all', name: 'All Works' },
  { id: 'systems', name: 'Systems' },
  { id: 'business', name: 'Startup & Biz' },
  { id: 'games', name: 'Games' },
  { id: 'robotics', name: 'Robotics' },
  { id: 'mobile', name: 'Mobile' },
]

const filteredProjects = computed(() =>
  activeCategory.value === 'all'
    ? projects
    : projects.filter(p => p.category === activeCategory.value)
)

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('visible')
    })
  }, { threshold: 0.05 })
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el))
})
</script>
