<template>
  <section id="projects" class="py-28 md:py-32 relative z-20 overflow-hidden">
    <!-- Subtle Background Elements -->
    <div class="absolute -left-40 top-1/3 w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[150px] pointer-events-none mix-blend-screen animate-float" style="animation-delay: 0s"></div>
    <div class="absolute -right-40 bottom-1/4 w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[150px] pointer-events-none mix-blend-screen animate-float" style="animation-delay: 2s"></div>

    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">

      <!-- Header -->
      <div class="flex flex-col md:flex-row justify-between items-end mb-14 md:mb-16 gap-6">
        <div v-reveal:left>
          <div class="flex items-center gap-4 mb-5">
            <div class="w-12 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
            <h2 class="text-blue-400 font-semibold tracking-[0.2em] uppercase text-sm">Portfolio</h2>
          </div>
          <h3 class="text-5xl md:text-7xl font-outfit font-black text-white tracking-tight drop-shadow-lg">
            Featured <span class="gradient-text">Works.</span>
          </h3>
        </div>
        <a href="https://github.com/AnandaHariadi" target="_blank" v-reveal:right="120" class="px-7 py-3.5 rounded-full bg-white/5 border border-white/10 text-white font-semibold hover:bg-white/10 hover:border-purple-300/50 hover:shadow-[0_8px_30px_rgba(91,33,182,0.3)] transition-all flex items-center gap-3 group">
          View GitHub
          <svg class="w-5 h-5 text-purple-300 group-hover:rotate-12 transition-transform" fill="currentColor" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" /></svg>
        </a>
      </div>

      <!-- Project cards grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-7">
        <article
          v-for="(project, index) in projects"
          :key="index"
          v-reveal:zoom="index * 90"
          @click="openDetail(project)"
          @mousemove="onCardMove"
          @mouseleave="onCardLeave"
          class="group relative cursor-pointer rounded-3xl overflow-hidden border border-white/10 bg-[#0a051c]/60 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-white/20"
        >
          <!-- Gradient glow that follows the cursor -->
          <div
            :class="['pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br', project.gradient]"
            style="mask-image: radial-gradient(220px circle at var(--mx,50%) var(--my,50%), black, transparent); -webkit-mask-image: radial-gradient(220px circle at var(--mx,50%) var(--my,50%), black, transparent);"
          ></div>

          <!-- Inner content (sits above glow) -->
          <div class="relative h-full flex flex-col rounded-3xl bg-[#0a051c]/80 m-px overflow-hidden">
            <!-- Image -->
            <div class="relative overflow-hidden aspect-[16/10]">
              <img
                :src="project.image"
                :alt="project.title"
                loading="lazy"
                :class="['absolute inset-0 w-full h-full transition-transform duration-700 ease-out', project.imageClass || 'object-cover scale-105 group-hover:scale-110']"
              />
              <!-- darkening overlay -->
              <div class="absolute inset-0 bg-gradient-to-t from-[#0a051c] via-[#0a051c]/30 to-transparent"></div>
              <!-- colored wash on hover -->
              <div :class="['absolute inset-0 opacity-0 group-hover:opacity-25 transition-opacity duration-500 mix-blend-overlay bg-gradient-to-br', project.gradient]"></div>

              <!-- category chip -->
              <span :class="['absolute top-4 left-4 px-3 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-wider text-white shadow-lg backdrop-blur-sm bg-gradient-to-r', project.gradient]">
                {{ project.event }}
              </span>

              <!-- index number -->
              <span class="absolute top-4 right-4 font-outfit font-black text-2xl text-white/30 tabular-nums">
                {{ String(index + 1).padStart(2, '0') }}
              </span>
            </div>

            <!-- Text -->
            <div class="relative flex-1 flex flex-col p-5 md:p-6">
              <h4 class="font-outfit font-bold tracking-tight text-white transition-colors duration-300 text-xl">
                {{ project.title }}
              </h4>
              <p class="mt-2 text-sm text-gray-400 leading-relaxed line-clamp-2">
                {{ project.description }}
              </p>

              <!-- tags -->
              <div class="flex flex-wrap gap-2 mt-4">
                <span
                  v-for="tag in project.tags"
                  :key="tag"
                  class="px-2.5 py-1 rounded-md text-[11px] font-medium text-gray-300 bg-white/5 border border-white/10 group-hover:border-white/20 transition-colors"
                >
                  {{ tag }}
                </span>
              </div>

              <!-- footer / CTA -->
              <div class="flex items-center justify-between mt-auto pt-5">
                <span class="text-xs font-semibold uppercase tracking-wider text-gray-500 group-hover:text-purple-300 transition-colors">
                  View details
                </span>
                <span :class="['shrink-0 w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/60 group-hover:text-white group-hover:border-transparent transition-all duration-300 group-hover:bg-gradient-to-br', project.gradient]">
                  <svg class="w-4 h-4 -rotate-45 group-hover:rotate-0 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                </span>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
import { openDetail } from '../store.js';

// Track cursor position inside a card so the gradient glow can follow it.
function onCardMove(e) {
  const r = e.currentTarget.getBoundingClientRect();
  e.currentTarget.style.setProperty('--mx', `${e.clientX - r.left}px`);
  e.currentTarget.style.setProperty('--my', `${e.clientY - r.top}px`);
}
function onCardLeave(e) {
  e.currentTarget.style.removeProperty('--mx');
  e.currentTarget.style.removeProperty('--my');
}

const projects = [
  {
    title: 'Portal Kuisioner Juned',
    event: 'Web App',
    description: 'A comprehensive, modern portal designed for efficient distribution and data collection of questionnaires, tailored specifically for structured surveys and user responses.',
    tags: ['Vue.js', 'Web App', 'Survey System'],
    gradient: 'from-blue-600 to-indigo-500',
    link: 'https://portal-kuisioner-juned.vercel.app/',
    image: '/assets/portal-kuisioner.png',
    imageClass: 'object-cover object-bottom scale-[1.1] group-hover:scale-[1.15] origin-bottom'
  },
  {
    title: 'Juned System',
    event: 'Web App',
    description: 'A dedicated scalable system platform built to handle complex integrations and robust data serving. Focuses on high availability and responsive UI.',
    tags: ['Architecture', 'Platform', 'Fullstack'],
    gradient: 'from-blue-600 to-indigo-500',
    link: 'https://juned.nxx.my.id/',
    image: '/assets/juned-system.png',
    imageClass: 'object-cover object-bottom scale-[1.1] group-hover:scale-[1.15] origin-bottom'
  },
  {
    title: 'NDA Property',
    event: 'Web App',
    description: 'An elegant real estate web application built for seamless property browsing, featuring an intuitive modern interface and high-performance image rendering.',
    tags: ['Real Estate', 'UI/UX', 'Frontend'],
    gradient: 'from-blue-600 to-indigo-500',
    link: 'https://ndaproperty26.vercel.app/',
    image: '/assets/nda-property.png',
    imageClass: 'object-cover object-bottom scale-[1.1] group-hover:scale-[1.15] origin-bottom'
  },
  {
    title: 'Koen Chips',
    event: 'Web App',
    description: 'A lively, high-performance e-commerce landing page crafted for the Koen Chips brand, emphasizing brand identity, fast loading times, and engaging animations.',
    tags: ['E-Commerce', 'Branding', 'Animation'],
    gradient: 'from-blue-600 to-indigo-500',
    link: 'https://koenchips-id.vercel.app/',
    image: '/assets/koen-chips.png',
    imageClass: 'object-cover object-bottom scale-[1.1] group-hover:scale-[1.15] origin-bottom'
  },
  {
    title: 'AquaMesh',
    event: 'Prototype Machine',
    description: 'An IoT and AI-based system for monitoring and managing water quality, using cloud infrastructure for real-time analysis and predictive maintenance.',
    tags: ['IoT', 'Data Analytics', 'Cloud', 'Python'],
    gradient: 'from-cyan-600 to-blue-500',
    link: 'https://github.com/AnandaHariadi',
    image: '/assets/aquamesh-1.jpeg',
    imageClass: 'object-cover group-hover:scale-105'
  },
  {
    title: 'ELVANOR',
    event: 'Parfume Product',
    description: 'Leading UI/UX design and business analysis for a standardized natural ingredient product platform, driving institutional and commercial scalability.',
    tags: ['UI/UX', 'Business Analysis', 'React'],
    gradient: 'from-purple-600 to-fuchsia-500',
    link: 'https://github.com/AnandaHariadi',
    image: '/assets/elvanor-featured.jpeg',
    imageClass: 'object-cover scale-[1.15] group-hover:scale-[1.25]'
  },
  {
    title: 'Jagaya Monitoring',
    event: 'Web App',
    description: 'A web application built for monitoring flood disasters in Demak, providing real-time data and early warnings.',
    tags: ['Web App', 'Monitoring', 'Disaster Management'],
    gradient: 'from-blue-600 to-indigo-500',
    link: 'https://jagaya.vercel.app/',
    image: '/assets/jagaya.png',
    imageClass: 'object-cover object-bottom scale-[1.1] group-hover:scale-[1.15] origin-bottom'
  },
  {
    title: 'Tameng Muda',
    event: 'Center of Excellence',
    description: 'Innovative drone design for climate change detection and pollution reduction in Sidoarjo, using computer vision for real-time environmental analysis.',
    tags: ['Robotics', 'ROS', 'Computer Vision'],
    gradient: 'from-teal-600 to-blue-500',
    link: 'https://github.com/AnandaHariadi',
    image: '/assets/tameng-muda.png'
  },
  {
    title: 'Pacilkom AI',
    event: 'Web App',
    description: 'An AI module navigation dashboard featuring Crop Prediction (MLP / RF), Apple Quality (CNN Vision), Consumer Perception (NLP), Macro Integration (GNN), and Selling Price Calculation.',
    tags: ['AI', 'Dashboard', 'Machine Learning'],
    gradient: 'from-blue-600 to-indigo-500',
    link: 'https://pacilkom-ai-poncokusumo.streamlit.app/',
    image: '/assets/pacilkom-ai.png',
    imageClass: 'object-cover object-bottom scale-[1.1] group-hover:scale-[1.15] origin-bottom'
  }
];
</script>
