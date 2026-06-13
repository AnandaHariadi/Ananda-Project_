<template>
  <section class="py-24 relative overflow-hidden">
    <!-- edge fades -->
    <div class="absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-[#030014] to-transparent z-10 pointer-events-none"></div>
    <div class="absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-[#030014] to-transparent z-10 pointer-events-none"></div>

    <p class="text-center text-xs font-bold uppercase tracking-[0.3em] text-purple-400 mb-16 relative z-20">
      Tools &amp; Technologies
    </p>

    <!-- Floating Galaxy Container -->
    <div class="relative w-full max-w-5xl mx-auto h-[400px] flex items-center justify-center">
      <!-- center glowing core -->
      <div class="absolute w-64 h-64 bg-purple-600/20 rounded-full blur-[80px] pointer-events-none mix-blend-screen animate-float"></div>

      <!-- Orbital Rings (decorative) -->
      <div class="absolute w-[300px] h-[300px] border border-white/5 rounded-full animate-spin-slow pointer-events-none" style="animation-duration: 40s;"></div>
      <div class="absolute w-[500px] h-[500px] border border-white/5 rounded-full animate-spin-slow pointer-events-none" style="animation-duration: 60s; animation-direction: reverse;"></div>
      <div class="absolute w-[700px] h-[700px] border border-white/5 rounded-full animate-spin-slow pointer-events-none" style="animation-duration: 80s;"></div>

      <!-- Floating Tech Nodes -->
      <div class="absolute inset-0 z-20">
        <div
          v-for="(t, i) in tools"
          :key="i"
          class="tech-node absolute flex flex-col items-center justify-center group"
          :style="`left: ${t.x}%; top: ${t.y}%; animation-delay: ${t.delay}s;`"
        >
          <div class="w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#0a051c]/80 backdrop-blur-md border border-purple-500/20 shadow-[0_8px_32px_rgba(109,40,217,0.2)] flex items-center justify-center transition-all duration-500 group-hover:scale-125 group-hover:border-purple-400 group-hover:shadow-[0_0_30px_rgba(167,139,250,0.6)] cursor-pointer relative z-10">
            <img :src="t.logo" :alt="t.name" :class="['w-7 h-7 md:w-8 md:h-8 object-contain transition-all duration-500', (t.name === 'Next.js' || t.name === 'Express') ? 'invert brightness-200' : '']" loading="lazy" />
          </div>
          <!-- Label pops up on hover -->
          <span class="absolute -bottom-8 opacity-0 group-hover:opacity-100 group-hover:-translate-y-2 text-white text-xs font-bold tracking-wider transition-all duration-300 pointer-events-none whitespace-nowrap bg-black/50 px-2 py-1 rounded-md backdrop-blur-md">
            {{ t.name }}
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Calculated positions to look like a dispersed galaxy
const tools = [
  { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg', x: 20, y: 30, delay: 0 },
  { name: 'TypeScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg', x: 75, y: 25, delay: 1.2 },
  { name: 'Vue.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg', x: 50, y: 15, delay: 0.5 },
  { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg', x: 35, y: 65, delay: 2.1 },
  { name: 'Next.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg', x: 80, y: 60, delay: 0.8 },
  { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg', x: 10, y: 55, delay: 1.5 },
  { name: 'Express', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original-wordmark.svg', x: 65, y: 75, delay: 0.3 },
  { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg', x: 45, y: 45, delay: 2.5 },
  { name: 'C++', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg', x: 25, y: 85, delay: 1.1 },
  { name: 'Java', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg', x: 90, y: 40, delay: 0.7 },
  { name: 'Docker', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg', x: 60, y: 35, delay: 1.9 },
  { name: 'Google Cloud', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecloud/googlecloud-original.svg', x: 30, y: 45, delay: 0.2 },
  { name: 'Git', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg', x: 85, y: 80, delay: 1.4 },
  { name: 'Figma', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg', x: 50, y: 85, delay: 2.2 },
  { name: 'ROS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ros/ros-original.svg', x: 15, y: 15, delay: 0.9 },
  { name: 'Tailwind CSS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg', x: 40, y: 20, delay: 1.7 }
];
</script>

<style scoped>
.tech-node {
  /* Subtle 3D floating effect independent of global animation */
  animation: tech-float 8s ease-in-out infinite alternate;
  will-change: transform;
}

@keyframes tech-float {
  0% {
    transform: translate(0px, 0px) rotate(0deg);
  }
  33% {
    transform: translate(10px, -15px) rotate(3deg);
  }
  66% {
    transform: translate(-10px, 10px) rotate(-3deg);
  }
  100% {
    transform: translate(0px, 0px) rotate(0deg);
  }
}
</style>
