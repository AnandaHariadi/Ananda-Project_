<template>
  <section id="contact" class="py-24 md:py-32 relative overflow-hidden z-10">
    <!-- Center animated background -->
    <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-[#030014] to-[#030014] pointer-events-none blur-3xl opacity-50 animate-pulse"></div>

    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
      <!-- Centered Header -->
      <div class="text-center mb-12" v-reveal>
        <div class="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 transition-colors cursor-default mb-6">
          <span class="relative flex h-2 w-2">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span class="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span class="text-gray-300 text-sm font-medium tracking-wide">Available for new opportunities</span>
        </div>
        
        <h2 class="text-3xl md:text-4xl lg:text-5xl font-outfit font-black tracking-tight text-white mb-5">
          Let's build <br class="hidden sm:block" />
          <span class="bg-gradient-to-r from-blue-400 via-purple-400 to-fuchsia-400 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(192,132,252,0.4)]">something extraordinary.</span>
        </h2>

        <p class="text-gray-400 font-light max-w-xl mx-auto text-base md:text-lg">
          Whether it's engineering, AI, robotics, or leading a team — I'd love to collaborate or simply trade ideas about the future.
        </p>
      </div>

      <!-- Bento Grid Layout -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-float" style="animation-delay: 0.5s" v-reveal="150">
        
        <!-- Big Contact Card (Spans 2 cols on lg) -->
        <a href="mailto:anandahariadi1@gmail.com" class="lg:col-span-2 group relative p-8 md:p-12 glass-card overflow-hidden hover:border-purple-500/50 transition-all duration-500 text-left block">
          <div class="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div class="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
          
          <div class="relative z-10 flex flex-col h-full justify-between">
            <div>
              <p class="text-purple-400 text-sm font-bold uppercase tracking-widest mb-2">Drop an Email</p>
              <h3 class="text-2xl md:text-3xl font-outfit font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">anandahariadi1@gmail.com</h3>
              <p class="text-gray-400 max-w-sm">The best way to reach me. I usually respond within 24 hours.</p>
            </div>
            <div class="mt-8 flex items-center gap-3 text-white font-semibold group-hover:translate-x-2 transition-transform">
              Say Hello
              <svg class="w-6 h-6 group-hover:rotate-12 transition-transform text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </div>
          </div>
        </a>

        <!-- Location Card -->
        <div class="group relative p-8 glass-card overflow-hidden hover:border-blue-500/50 transition-all duration-500 flex flex-col justify-between">
          <div class="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div class="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-30 transition-opacity group-hover:scale-110 duration-500 pointer-events-none">
            <svg class="w-32 h-32 text-blue-400" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
          </div>
          
          <div class="relative z-10 mt-auto pt-16">
            <p class="text-blue-400 text-sm font-bold uppercase tracking-widest mb-1">Base of Operations</p>
            <h3 class="text-2xl font-outfit font-bold text-white group-hover:text-blue-200 transition-colors">Sidoarjo,<br/>Indonesia</h3>
          </div>
        </div>

        <!-- Resume Card -->
        <a href="/assets/CV_Muhammad_Ananda_Hariadi_2026.pdf" target="_blank" class="group relative p-8 glass-card overflow-hidden hover:border-emerald-500/50 transition-all duration-500 flex flex-col justify-between items-start text-left block">
          <div class="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div class="w-12 h-12 rounded-full bg-white/10 border border-white/10 flex items-center justify-center text-emerald-400 mb-8 group-hover:scale-110 transition-transform">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
          </div>
          <div class="relative z-10">
            <p class="text-emerald-400 text-sm font-bold uppercase tracking-widest mb-1">Curriculum Vitae</p>
            <h3 class="text-2xl font-outfit font-bold text-white group-hover:text-emerald-300 transition-colors">Download Resume</h3>
          </div>
        </a>

        <!-- Socials Card (Spans 2 cols on lg) -->
        <div class="lg:col-span-2 group relative p-8 glass-card overflow-hidden transition-all duration-500 flex flex-col md:flex-row items-center justify-between gap-6 border border-white/10 hover:border-fuchsia-500/40">
          <div class="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          <div class="relative z-10 text-center md:text-left">
            <p class="text-fuchsia-400 text-sm font-bold uppercase tracking-widest mb-1">Stay Connected</p>
            <h3 class="text-xl font-outfit font-bold text-white">Follow me across the web</h3>
          </div>
          
          <div class="relative z-10 flex gap-4">
            <a
              v-for="s in socials"
              :key="s.name"
              :href="s.href"
              target="_blank"
              :aria-label="s.name"
              class="group/social flex items-center justify-center w-14 h-14 rounded-2xl bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:border-fuchsia-400/50 hover:bg-white/10 hover:-translate-y-2 transition-all shadow-sm"
            >
              <svg class="w-6 h-6 group-hover/social:scale-110 group-hover/social:rotate-3 transition-transform text-fuchsia-400" fill="currentColor" viewBox="0 0 24 24"><path :d="s.icon" /></svg>
            </a>
          </div>
        </div>

      </div>

      <!-- footer -->
      <div v-reveal class="mt-16 pt-8 border-t border-white/10 flex items-center justify-center text-gray-500 text-sm font-medium relative z-20">
        <p>&copy; 2026 Muhammad Ananda Hariadi.</p>
      </div>
    </div>
  </section>
</template>

<script setup>
const socials = [
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/anandahariadi/',
    icon: 'M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z',
  },
  {
    name: 'GitHub',
    href: 'https://github.com/AnandaHariadi',
    icon: 'M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z',
  },
];
</script>
