<template>
  <section id="home" class="relative min-h-screen flex items-center overflow-hidden pt-28 pb-20">
    <!-- ===================== Faint marquee headline ===================== -->
    <div class="absolute top-[12%] left-0 w-full overflow-hidden z-0 opacity-[0.02] pointer-events-none -rotate-2">
      <div class="flex whitespace-nowrap animate-marquee">
        <h1 class="text-[11rem] font-black font-outfit uppercase tracking-tighter text-white pr-12">
          Software · AI · Robotics · Software · AI · Robotics ·
        </h1>
        <h1 class="text-[11rem] font-black font-outfit uppercase tracking-tighter text-white pr-12" aria-hidden="true">
          Software · AI · Robotics · Software · AI · Robotics ·
        </h1>
      </div>
    </div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
      <div class="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
        <!-- Text Content -->
        <div class="flex flex-col items-start space-y-7" :class="['stagger', { 'stagger-go': start }]">
          <div class="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/5 backdrop-blur-md border border-white/10 shadow-[0_4px_20px_rgba(0,0,0,0.5)]" style="--i:0">
            <span class="relative flex h-2.5 w-2.5">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span class="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span class="text-gray-300 font-medium text-sm tracking-wide">Available for new opportunities</span>
          </div>

          <div class="space-y-3">
            <h2 class="text-xl md:text-2xl text-gray-400 font-medium font-outfit tracking-wide" style="--i:1">
              <span class="animate-wave">👋</span> Hello, I'm
            </h2>
            <h1 class="font-black font-outfit tracking-tighter text-white leading-[1.05] text-[2.6rem] sm:text-6xl lg:text-[4.5rem] drop-shadow-2xl" style="--i:2">
              Ananda <span class="gradient-text">Hariadi.</span>
            </h1>
          </div>

          <p class="text-lg md:text-2xl font-outfit text-gray-300 max-w-xl leading-[1.5] font-light" style="--i:3">
            A Software Engineering student crafting <span class="font-semibold text-white">elegant systems</span> and
            <span class="font-semibold text-white">digital experiences</span> across the web, AI, and robotics.
          </p>

          <div class="flex flex-wrap gap-4 pt-4" style="--i:4">
            <a href="#projects" v-magnetic="0.25" class="px-8 py-4 rounded-full bg-brand text-white font-bold text-lg shadow-[0_10px_30px_rgba(109,40,217,0.5)] hover:shadow-[0_14px_40px_rgba(109,40,217,0.7)] transition-shadow">
              Explore Work
            </a>
            <a href="#contact" v-magnetic="0.2" class="px-8 py-4 rounded-full bg-transparent border border-white/20 text-white font-bold text-lg hover:border-white/50 hover:bg-white/5 transition-all">
              Get in Touch
            </a>
          </div>
        </div>

        <!-- Profile Photo -->
        <div class="relative flex justify-center lg:justify-end" :class="['stagger', { 'stagger-go': start }]" style="--i:3">
          <div class="relative w-full max-w-sm animate-float">
            <!-- Glow behind photo -->
            <div class="absolute -inset-6 bg-gradient-to-tr from-purple-500/30 to-blue-500/20 rounded-[3rem] blur-[80px]"></div>
            
            <!-- Photo Card with Animated Colorful Frame -->
            <div class="relative p-1.5 rounded-[2.5rem] bg-[#0a051c]/40 shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden group">
              <!-- Animated gradient border -->
              <div class="absolute -inset-[50%] opacity-70 group-hover:opacity-100 transition-opacity duration-500 animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#000000_0%,#4c1d95_20%,#3b82f6_40%,#db2777_60%,#4c1d95_80%,#000000_100%)]"></div>
              
              <!-- Inner content -->
              <div class="relative rounded-[2.3rem] overflow-hidden aspect-[4/5] bg-[#0a051c] z-10">
                <img
                  src="/assets/profile.jpg"
                  alt="Muhammad Ananda Hariadi"
                  class="w-full h-full object-cover object-center scale-105 group-hover:scale-110 transition-transform duration-700"
                />
                <!-- Subtle vignette overlay -->
                <div class="absolute inset-0 bg-gradient-to-t from-[#0a051c]/60 via-transparent to-transparent pointer-events-none"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- scroll cue -->
    <a href="#about" class="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500 hover:text-white transition-colors z-10">
      <span class="text-[0.7rem] font-semibold uppercase tracking-[0.25em]">Scroll</span>
      <span class="scroll-cue"></span>
    </a>
  </section>
</template>

<script setup>
defineProps({
  start: { type: Boolean, default: false },
});
</script>

<style scoped>
/* Staggered entrance */
.stagger > * {
  opacity: 0;
  transform: translateY(30px);
}
.stagger-go > * {
  animation: hero-in 0.9s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  animation-delay: calc(var(--i, 0) * 0.1s);
}
.stagger.stagger-go {
  opacity: 1;
  transform: none;
}

@keyframes hero-in {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
