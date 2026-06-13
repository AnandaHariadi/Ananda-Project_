<template>
  <div class="fixed inset-0 z-[90] bg-[#030014] overflow-hidden" @keydown.esc="close">
    <!-- ambient background -->
    <div class="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-purple-900/30 to-blue-900/20 rounded-full blur-[150px] pointer-events-none"></div>
    <div class="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-blue-900/20 to-purple-900/30 rounded-full blur-[150px] pointer-events-none"></div>

    <!-- sticky top bar -->
    <div class="absolute top-0 w-full z-20 px-6 py-6 flex items-center justify-between pointer-events-none">
      <span class="font-outfit font-bold text-xl tracking-tight text-white pointer-events-auto">
        <span class="text-white">Ananda</span><span class="text-purple-500">.</span>
        <span class="text-gray-500 font-medium text-sm ml-2 hidden sm:inline">/ The Story</span>
      </span>
      <button
        @click="close"
        class="pointer-events-auto inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-white text-sm font-semibold hover:bg-white/10 hover:border-purple-500/50 transition-all group shadow-lg"
      >
        Close Book
        <svg class="w-4 h-4 group-hover:rotate-90 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M6 18L18 6M6 6l12 12"></path></svg>
      </button>
    </div>

    <!-- The Book Container (Horizontal Scroll) -->
    <div class="h-full w-full flex items-center overflow-x-auto overflow-y-hidden snap-x snap-mandatory custom-scrollbar relative z-10 pt-20 pb-10">
      
      <!-- Page 1: Cover / Intro -->
      <div class="snap-center shrink-0 w-screen max-w-[100vw] h-full flex items-center justify-center px-4 md:px-12">
        <div class="w-full max-w-5xl h-[85vh] md:h-[80vh] flex flex-col md:flex-row bg-[#0a051c]/80 backdrop-blur-xl border border-white/10 rounded-[2rem] md:rounded-[3rem] shadow-[0_20px_60px_rgba(0,0,0,0.8)] overflow-hidden relative">
          <!-- Book Spine Line -->
          <div class="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent shadow-[0_0_10px_rgba(255,255,255,0.1)]"></div>
          
          <div class="flex-1 p-8 md:p-16 flex flex-col justify-center relative">
            <h1 class="text-5xl md:text-7xl font-outfit font-black tracking-tighter text-white leading-[1.05] mb-6 drop-shadow-lg">
              Behind the <span class="gradient-text">Code.</span>
            </h1>
            <p class="text-lg md:text-xl text-gray-400 font-light leading-relaxed max-w-md">
              {{ aboutIntro }}
            </p>
            <div class="mt-8 text-purple-400/50 flex items-center gap-2 animate-pulse">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
              <span class="text-sm tracking-widest uppercase font-bold">Scroll to turn page</span>
            </div>
          </div>
          
          <div class="flex-1 relative bg-gradient-to-br from-purple-900/20 to-blue-900/20 flex items-center justify-center p-8">
            <div class="absolute inset-0 bg-[radial-gradient(circle,_rgba(255,255,255,0.1)_1px,_transparent_1px)] [background-size:20px_20px]"></div>
            <div class="relative w-64 h-80 rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl rotate-3">
              <img src="/assets/profile.jpg" alt="Ananda" class="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
            </div>
          </div>
        </div>
      </div>

      <!-- Page 2: Experience -->
      <div class="snap-center shrink-0 w-screen max-w-[100vw] h-full flex items-center justify-center px-4 md:px-12">
        <div class="w-full max-w-5xl h-[85vh] md:h-[80vh] flex flex-col md:flex-row bg-[#0a051c]/80 backdrop-blur-xl border border-white/10 rounded-[2rem] md:rounded-[3rem] shadow-[0_20px_60px_rgba(0,0,0,0.8)] overflow-hidden relative">
          <div class="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent"></div>
          
          <div class="w-full md:w-1/2 p-8 md:p-12 h-full overflow-y-auto custom-scrollbar-thin">
            <h2 class="text-4xl font-outfit font-black text-white mb-8 sticky top-0 bg-[#0a051c]/90 backdrop-blur-md pb-4 z-10">Chapter I: <span class="text-purple-400">Experience</span></h2>
            
            <div class="space-y-6">
              <button
                v-for="(exp, i) in experiences"
                :key="i"
                @click="openDetail(exp)"
                class="w-full text-left group p-6 rounded-3xl border border-white/5 bg-white/5 hover:bg-white/10 hover:border-purple-500/30 transition-all duration-300"
              >
                <div class="flex items-center justify-between mb-2">
                  <span :class="['px-3 py-1 rounded-full bg-gradient-to-r text-white text-[0.65rem] font-bold uppercase tracking-wider', exp.gradient]">{{ exp.tag }}</span>
                  <span class="text-xs font-semibold text-gray-500">{{ exp.period }}</span>
                </div>
                <h3 class="text-xl font-outfit font-bold text-white group-hover:text-purple-300 transition-colors">{{ exp.org }}</h3>
                <p class="text-gray-400 text-sm mt-1 mb-3">{{ exp.role }}</p>
                <p class="text-gray-500 text-xs line-clamp-2 leading-relaxed">{{ exp.description }}</p>
              </button>
            </div>
          </div>
          
          <div class="w-full md:w-1/2 p-8 md:p-12 h-full overflow-y-auto custom-scrollbar-thin border-t md:border-t-0 border-white/5">
            <h2 class="text-4xl font-outfit font-black text-white mb-8 sticky top-0 bg-[#0a051c]/90 backdrop-blur-md pb-4 z-10">Chapter II: <span class="text-blue-400">Education</span></h2>
            
            <div class="space-y-6">
              <button
                v-for="(edu, i) in education"
                :key="i"
                @click="openDetail({...edu, title: edu.school, description: edu.detail, tag: 'Education', gradient: 'from-blue-600 to-indigo-500'})"
                class="w-full text-left group p-6 rounded-3xl border border-white/5 bg-white/5 hover:bg-white/10 hover:border-blue-500/30 transition-all duration-300"
              >
                <p class="text-xs font-bold uppercase tracking-wider text-blue-400 mb-2">{{ edu.period }}</p>
                <h3 class="text-xl font-outfit font-bold text-white group-hover:text-blue-300 transition-colors">{{ edu.school }}</h3>
                <p class="text-gray-400 text-sm mt-2">{{ edu.detail }}</p>
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Page 3: Skills & End -->
      <div class="snap-center shrink-0 w-screen max-w-[100vw] h-full flex items-center justify-center px-4 md:px-12">
        <div class="w-full max-w-5xl h-[85vh] md:h-[80vh] flex flex-col md:flex-row bg-[#0a051c]/80 backdrop-blur-xl border border-white/10 rounded-[2rem] md:rounded-[3rem] shadow-[0_20px_60px_rgba(0,0,0,0.8)] overflow-hidden relative">
          <div class="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent"></div>
          
          <div class="w-full md:w-1/2 p-8 md:p-12 h-full overflow-y-auto custom-scrollbar-thin">
            <h2 class="text-4xl font-outfit font-black text-white mb-8">Chapter III: <span class="text-emerald-400">Skills</span></h2>
            
            <div class="space-y-8">
              <div v-for="(category, idx) in skillCategories" :key="idx">
                <h3 class="text-sm uppercase tracking-widest font-bold text-gray-500 mb-4">{{ category.title }}</h3>
                <div class="flex flex-wrap gap-2">
                  <span
                    v-for="skill in category.skills"
                    :key="skill"
                    class="px-3 py-1.5 rounded-lg bg-white/5 border border-white/5 text-gray-300 text-sm font-medium hover:bg-white/10 hover:text-white transition-colors cursor-default"
                  >
                    {{ skill }}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div class="w-full md:w-1/2 p-8 md:p-12 h-full flex flex-col justify-center items-center text-center bg-gradient-to-br from-purple-900/10 to-blue-900/10 relative">
             <h2 class="text-4xl md:text-5xl font-outfit font-black text-white tracking-tight mb-4">Let's build something great.</h2>
            <p class="text-gray-400 font-light max-w-sm mb-8">Open for collaborations, opportunities, or a chat about technology and robotics.</p>
            <button
              @click="goContact"
              class="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-brand text-white font-bold text-lg hover:scale-105 transition-transform shadow-[0_10px_30px_rgba(109,40,217,0.5)]"
            >
              Get in touch
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
            </button>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted, nextTick } from 'vue';
import { aboutIntro, experiences, education, skillCategories } from '../data.js';
import { closeAbout, openDetail } from '../store.js';

function close() {
  closeAbout();
}

function goContact() {
  closeAbout();
  nextTick(() => {
    setTimeout(() => {
      const el = document.getElementById('contact');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 300);
  });
}

function onKey(e) {
  if (e.key === 'Escape') close();
}

onMounted(() => {
  window.addEventListener('keydown', onKey);
  document.body.style.overflow = 'hidden';
});
onUnmounted(() => {
  window.removeEventListener('keydown', onKey);
  document.body.style.overflow = '';
});
</script>

<style scoped>
.custom-scrollbar::-webkit-scrollbar { height: 8px; width: 8px; }
.custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
.custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.1); border-radius: 9999px; }
.custom-scrollbar::-webkit-scrollbar-thumb:hover { background: rgba(255,255,255,0.2); }

.custom-scrollbar-thin::-webkit-scrollbar { width: 4px; }
.custom-scrollbar-thin::-webkit-scrollbar-track { background: transparent; }
.custom-scrollbar-thin::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.05); border-radius: 9999px; }
.custom-scrollbar-thin::-webkit-scrollbar-thumb:hover { background: rgba(255,255,255,0.2); }
</style>
