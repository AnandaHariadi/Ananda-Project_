<template>
  <section id="skills" class="py-36 relative overflow-hidden">
    <div class="container mx-auto px-6 md:px-16 lg:px-24 relative z-10">

      <!-- Section Header -->
      <div class="max-w-3xl mb-16 reveal">
        <div class="flex items-center gap-3 mb-4">
          <span class="w-8 h-px bg-sky-400/60"></span>
          <span class="text-[11px] font-label tracking-[0.25em] text-sky-400/80 uppercase">3D Interactive Journal</span>
        </div>
        <h2 class="font-heading text-4xl md:text-6xl font-light text-white/90 tracking-tight leading-tight">
          Skills & Technical Compendium.
        </h2>
        <p class="font-body text-base text-white/40 mt-4 max-w-xl">
          Buka buku interaktif 3D ini untuk mengeksplorasi catatan keahlian, teknologi, dan kompetensi teknis saya.
        </p>
      </div>

      <!-- Category Tabs (Chapter Selection) -->
      <div class="flex flex-wrap gap-3 mb-12 reveal">
        <button
          v-for="(cat, idx) in skillCategories"
          :key="cat.id"
          @click="selectChapter(idx)"
          class="px-5 py-2.5 rounded-full text-xs font-label tracking-[0.15em] uppercase transition-all duration-500 backdrop-blur-md flex items-center gap-2"
          :class="activeBookIndex === idx
            ? 'text-white bg-sky-500/20 border border-sky-400/50 shadow-[0_0_25px_rgba(56,189,248,0.25)]'
            : 'text-white/30 hover:text-white/70 border border-white/5 hover:border-white/20 bg-white/[0.02]'"
        >
          <span>{{ cat.icon }}</span>
          <span>Chapter 0{{ idx + 1 }}: {{ cat.title }}</span>
        </button>
      </div>

      <!-- =========================================================================
           3D FLIPPING BOOK INTERFACE
      ========================================================================= -->
      <div class="reveal perspective-2000 py-10 flex justify-center items-center">
        <!-- The 3D Book Container -->
        <div
          class="relative w-full max-w-5xl min-h-[560px] rounded-3xl transition-transform duration-700 ease-out preserve-3d"
          :class="{ 'rotate-y-12': isHoveredBook }"
          @mouseenter="isHoveredBook = true"
          @mouseleave="isHoveredBook = false"
        >
          <!-- Book Outer Shadow & Ambient Glow -->
          <div class="absolute inset-0 bg-sky-500/10 rounded-3xl blur-3xl pointer-events-none transform translate-z-[-50px]"></div>

          <!-- Book Spine Line (Center Crease) -->
          <div class="absolute left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-white/20 via-sky-400/40 to-white/20 -translate-x-1/2 z-30 hidden md:block shadow-[0_0_15px_rgba(56,189,248,0.5)]"></div>

          <!-- Book Open Pages Wrapper (Grid 2 Columns Layout for Left & Right Pages) -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-0 bg-[#061224] rounded-3xl border border-white/15 overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.8)] relative z-20">

            <!-- LEFT PAGE: Chapter Overview & Core Philosophy -->
            <div class="p-8 md:p-12 bg-gradient-to-br from-white/[0.04] to-transparent border-b md:border-b-0 md:border-r border-white/10 flex flex-col justify-between relative overflow-hidden">
              <!-- Watermark Chapter Number -->
              <span class="absolute right-6 top-6 text-9xl font-heading font-light text-white/[0.03] pointer-events-none select-none">
                0{{ activeBookIndex + 1 }}
              </span>

              <div class="space-y-6 relative z-10">
                <div class="flex items-center justify-between border-b border-white/10 pb-4">
                  <span class="text-[10px] font-mono text-sky-400 tracking-widest uppercase">LEFT PAGE // CHAPTER {{ activeBookIndex + 1 }}</span>
                  <span class="text-xs font-mono text-white/30">{{ currentCategory.skills.length }} ENTRIES</span>
                </div>

                <div class="flex items-center gap-4">
                  <div class="w-12 h-12 rounded-2xl bg-sky-400/10 border border-sky-400/30 flex items-center justify-center text-2xl text-sky-400 shadow-lg">
                    {{ currentCategory.icon }}
                  </div>
                  <div>
                    <h3 class="font-heading text-3xl font-light text-white tracking-tight">
                      {{ currentCategory.title }}
                    </h3>
                    <p class="text-xs font-mono text-white/40">Technical Domain Guide</p>
                  </div>
                </div>

                <p class="font-body text-sm text-white/50 leading-relaxed italic border-l-2 border-sky-400/40 pl-4 py-1">
                  "{{ currentCategory.quote }}"
                </p>
              </div>

              <!-- Flip Navigation Controls at Bottom Left -->
              <div class="pt-8 flex items-center justify-between border-t border-white/10 relative z-10 mt-8">
                <button
                  @click="prevChapter"
                  class="px-4 py-2 rounded-full border border-white/10 text-white/40 hover:text-white hover:border-sky-400/40 transition-all text-xs font-label uppercase tracking-widest flex items-center gap-2"
                >
                  ← Prev Page
                </button>
                <span class="text-[10px] font-mono text-white/30">PAGE {{ activeBookIndex * 2 + 1 }} OF {{ skillCategories.length * 2 }}</span>
              </div>
            </div>

            <!-- RIGHT PAGE: Detailed Interactive Skill Bars & Gauges -->
            <div class="p-8 md:p-12 bg-gradient-to-bl from-white/[0.03] to-transparent flex flex-col justify-between relative overflow-hidden">
              <div class="space-y-6 relative z-10">
                <div class="flex items-center justify-between border-b border-white/10 pb-4">
                  <span class="text-[10px] font-mono text-sky-400 tracking-widest uppercase">RIGHT PAGE // COMPETENCY SPECIFICATION</span>
                  <span class="text-xs font-mono text-emerald-400 flex items-center gap-1.5">
                    <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                    VERIFIED
                  </span>
                </div>

                <!-- Skill List with Animated Hologram Bar -->
                <div class="space-y-5">
                  <div
                    v-for="(skill, sIdx) in currentCategory.skills"
                    :key="skill.name"
                    class="space-y-2 group/item"
                  >
                    <div class="flex items-center justify-between text-xs">
                      <span class="font-label text-white/80 group-hover/item:text-white transition-colors">
                        {{ skill.name }}
                      </span>
                      <span class="font-mono text-sky-400 font-bold">
                        {{ skill.level }}%
                      </span>
                    </div>

                    <div class="h-2 w-full bg-white/5 rounded-full overflow-hidden p-[1px] border border-white/10">
                      <div
                        class="h-full bg-gradient-to-r from-sky-500 via-indigo-400 to-cyan-300 rounded-full transition-all duration-1000 ease-out shadow-[0_0_12px_rgba(56,189,248,0.8)]"
                        :style="{ width: skill.level + '%' }"
                      ></div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Flip Navigation Controls at Bottom Right -->
              <div class="pt-8 flex items-center justify-between border-t border-white/10 relative z-10 mt-8">
                <span class="text-[10px] font-mono text-white/30">PAGE {{ activeBookIndex * 2 + 2 }} OF {{ skillCategories.length * 2 }}</span>
                <button
                  @click="nextChapter"
                  class="px-5 py-2 rounded-full bg-sky-500/20 border border-sky-400/40 text-white hover:bg-sky-400 hover:text-slate-950 transition-all text-xs font-label uppercase tracking-widest flex items-center gap-2 font-semibold shadow-lg"
                >
                  Next Page →
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'

const activeBookIndex = ref(0)
const isHoveredBook = ref(false)

const skillCategories = [
  {
    id: 'dev',
    title: 'Software Development',
    icon: '⚡',
    quote: 'Membangun arsitektur perangkat lunak yang scalable, responsif, dan siap produksi dengan teknologi terkini.',
    skills: [
      { name: 'Web Development (Vue / React / Next.js)', level: 90 },
      { name: 'Backend & APIs (Node.js / Express)', level: 85 },
      { name: 'JavaScript / TypeScript', level: 90 },
      { name: 'Databases & Cloud Architecture', level: 75 }
    ]
  },
  {
    id: 'design',
    title: 'UI/UX & Product Design',
    icon: '🎨',
    quote: 'Mendesain antarmuka berbasis kebutuhan manusia yang memadukan estetika visual tinggi dan interaksi intuitif.',
    skills: [
      { name: 'Figma & Interactive Prototyping', level: 88 },
      { name: 'Design Systems Architecture', level: 85 },
      { name: 'Responsive / Interaction Design', level: 90 },
      { name: 'User Research & Journey Mapping', level: 75 }
    ]
  },
  {
    id: 'ai',
    title: 'AI & Data Science',
    icon: '🧠',
    quote: 'Memanfaat algoritma kecerdasan buatan dan analisis data untuk memecahkan masalah kompleks dan otomatisasi.',
    skills: [
      { name: 'Python Systems Development', level: 85 },
      { name: 'Algorithms & Problem Solving', level: 85 },
      { name: 'Data Analytics & Visualization', level: 80 },
      { name: 'Machine Learning Fundamentals', level: 75 }
    ]
  },
  {
    id: 'leadership',
    title: 'Leadership & Strategy',
    icon: '🚀',
    quote: 'Memimpin tim dengan visi strategis, berpikir kritis, dan mengeksekusi proyek sesuai sasaran bisnis.',
    skills: [
      { name: 'Team Leadership & Mentorship', level: 90 },
      { name: 'Agile Project Management', level: 85 },
      { name: 'Business & Process Analysis', level: 85 },
      { name: 'Critical Thinking & Strategy', level: 90 }
    ]
  }
]

const currentCategory = computed(() => skillCategories[activeBookIndex.value])

const selectChapter = (idx) => {
  activeBookIndex.value = idx
}

const nextChapter = () => {
  activeBookIndex.value = (activeBookIndex.value + 1) % skillCategories.length
}

const prevChapter = () => {
  activeBookIndex.value = (activeBookIndex.value - 1 + skillCategories.length) % skillCategories.length
}

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('visible')
    })
  }, { threshold: 0.05 })
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el))
})
</script>

<style scoped>
.perspective-2000 {
  perspective: 2000px;
}
.preserve-3d {
  transform-style: preserve-3d;
}
.rotate-y-12 {
  transform: rotateY(-6deg) rotateX(2deg);
}
</style>
