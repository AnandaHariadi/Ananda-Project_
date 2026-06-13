<template>
  <section id="projects" class="py-28 md:py-32 relative z-20 overflow-hidden">
    <!-- Subtle Background Elements -->
    <div class="absolute -left-40 top-1/3 w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[150px] pointer-events-none mix-blend-screen animate-float" style="animation-delay: 0s"></div>
    <div class="absolute -right-40 bottom-1/4 w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[150px] pointer-events-none mix-blend-screen animate-float" style="animation-delay: 2s"></div>

    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">

      <!-- Header -->
      <div class="flex flex-col md:flex-row justify-between items-end mb-16 md:mb-20 gap-6">
        <div v-reveal>
          <div class="flex items-center gap-4 mb-5">
            <div class="w-12 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
            <h2 class="text-blue-400 font-semibold tracking-[0.2em] uppercase text-sm">Portfolio</h2>
          </div>
          <h3 class="text-5xl md:text-7xl font-outfit font-black text-white tracking-tight drop-shadow-lg">
            Featured <span class="gradient-text">Works.</span>
          </h3>
        </div>
        <a href="https://github.com/AnandaHariadi" target="_blank" v-reveal="120" class="px-7 py-3.5 rounded-full bg-white/5 border border-white/10 text-white font-semibold hover:bg-white/10 hover:border-purple-300/50 hover:shadow-[0_8px_30px_rgba(91,33,182,0.3)] transition-all flex items-center gap-3 group">
          View GitHub
          <svg class="w-5 h-5 text-purple-300 group-hover:rotate-12 transition-transform" fill="currentColor" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" /></svg>
        </a>
      </div>

      <!-- Grid of premium cards -->
      <div class="grid md:grid-cols-2 gap-7">
        <article
          v-for="(project, index) in projects"
          :key="index"
          v-reveal="(index % 2) * 120"
          class="group relative cursor-pointer"
          @click="openDetail(project)"
        >
          <!-- soft glow behind card on hover -->
          <div :class="['absolute -inset-1 rounded-[2rem] blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-700 bg-gradient-to-tr', project.gradient]"></div>

          <div class="relative h-full rounded-[1.75rem] bg-[#0a051c]/80 backdrop-blur-md border border-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.5)] overflow-hidden transition-all duration-500 group-hover:-translate-y-2 group-hover:border-purple-500/30">

            <!-- visual header -->
            <div :class="['relative h-52 overflow-hidden bg-gradient-to-br', project.gradient]">
              <!-- mesh dots -->
              <div class="absolute inset-0 bg-[radial-gradient(circle,_rgba(255,255,255,0.4)_1px,_transparent_1px)] [background-size:20px_20px] opacity-20"></div>
              
              <!-- Project Image -->
              <img v-if="project.image" :src="project.image" :alt="project.title" class="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-50 group-hover:opacity-70 group-hover:scale-110 transition-all duration-700" />

              <!-- shine sweep -->
              <div class="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

              <!-- event chip -->
              <span v-if="project.event" class="absolute top-5 right-5 px-3 py-1 rounded-full bg-black/30 backdrop-blur-md border border-white/10 text-white text-xs font-bold uppercase tracking-wider">
                {{ project.event }}
              </span>

              <!-- title -->
              <div class="absolute bottom-5 left-6 right-6">
                <h4 class="text-3xl md:text-4xl font-black font-outfit text-white drop-shadow-lg tracking-tight">{{ project.title }}</h4>
              </div>
            </div>

            <!-- body -->
            <div class="p-7 flex flex-col h-[calc(100%-13rem)]">
              <p class="text-gray-300 leading-relaxed font-light mb-5 line-clamp-3">{{ project.description }}</p>

              <div class="flex flex-wrap gap-2 mb-6 mt-auto">
                <span v-for="tag in project.tags" :key="tag" class="px-3 py-1.5 rounded-lg bg-white/5 text-purple-200 text-xs font-semibold border border-white/5 group-hover:border-purple-500/30 transition-colors">
                  {{ tag }}
                </span>
              </div>

              <div class="inline-flex items-center gap-2 font-semibold w-max group/link">
                <span class="gradient-text">Explore Project</span>
                <span class="w-8 h-8 rounded-full bg-brand flex items-center justify-center text-white group-hover/link:translate-x-1 transition-transform shadow-[0_0_15px_rgba(109,40,217,0.5)]">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
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

const projects = [
  {
    title: 'Portal Kuisioner Juned',
    event: 'Web App',
    description: 'A comprehensive, modern portal designed for efficient distribution and data collection of questionnaires, tailored specifically for structured surveys and user responses.',
    tags: ['Vue.js', 'Web App', 'Survey System'],
    gradient: 'from-fuchsia-600 to-pink-500',
    link: 'https://portal-kuisioner-juned.vercel.app/',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'Juned System',
    event: 'Platform',
    description: 'A dedicated scalable system platform built to handle complex integrations and robust data serving. Focuses on high availability and responsive UI.',
    tags: ['Architecture', 'Platform', 'Fullstack'],
    gradient: 'from-blue-600 to-indigo-500',
    link: 'https://juned.nxx.my.id/',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'NDA Property',
    event: 'Real Estate',
    description: 'An elegant real estate web application built for seamless property browsing, featuring an intuitive modern interface and high-performance image rendering.',
    tags: ['Real Estate', 'UI/UX', 'Frontend'],
    gradient: 'from-teal-500 to-emerald-400',
    link: 'https://ndaproperty26.vercel.app/',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'Koen Chips',
    event: 'E-Commerce',
    description: 'A lively, high-performance e-commerce landing page crafted for the Koen Chips brand, emphasizing brand identity, fast loading times, and engaging animations.',
    tags: ['E-Commerce', 'Branding', 'Animation'],
    gradient: 'from-orange-500 to-yellow-400',
    link: 'https://koenchips-id.vercel.app/',
    image: 'https://images.unsplash.com/photo-1528698827591-e19ccd7bc23d?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'AquaMesh',
    event: 'Young Ideas',
    description: 'An IoT and AI-based system for monitoring and managing water quality, using cloud infrastructure for real-time analysis and predictive maintenance.',
    tags: ['IoT', 'Data Analytics', 'Cloud', 'Python'],
    gradient: 'from-cyan-600 to-blue-500',
    link: 'https://github.com/AnandaHariadi',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'ELVANOR',
    event: 'PMW 2025',
    description: 'Leading UI/UX design and business analysis for a standardized natural ingredient product platform, driving institutional and commercial scalability.',
    tags: ['UI/UX', 'Business Analysis', 'React'],
    gradient: 'from-purple-600 to-fuchsia-500',
    link: 'https://github.com/AnandaHariadi',
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'BubbleGum',
    event: 'Global Game Jam',
    description: 'An interactive social educational game that combines casual and competitive gameplay with dynamic event triggers and real-time multiplayer.',
    tags: ['Game Development', 'C++', 'Architecture'],
    gradient: 'from-indigo-600 to-purple-600',
    link: 'https://github.com/AnandaHariadi',
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'Tameng Muda',
    event: 'Center of Excellence',
    description: 'Innovative drone design for climate change detection and pollution reduction in Sidoarjo, using computer vision for real-time environmental analysis.',
    tags: ['Robotics', 'ROS', 'Computer Vision'],
    gradient: 'from-teal-600 to-blue-500',
    link: 'https://github.com/AnandaHariadi',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800'
  }
];
</script>
