<template>
  <section class="py-24 relative overflow-hidden">
    <!-- Left Side: Geometric Hologram (Cyan/Blue) -->
    <div class="hidden lg:flex absolute left-8 top-1/2 -translate-y-1/2 w-48 h-48 justify-center items-center z-0 opacity-50 pointer-events-none">
      <div class="cube-wrapper">
        <div class="cube cube-left">
          <div class="face front"></div>
          <div class="face back"></div>
          <div class="face right"></div>
          <div class="face left"></div>
          <div class="face top"></div>
          <div class="face bottom"></div>
        </div>
        <!-- Inner Cube -->
        <div class="cube cube-left-inner">
          <div class="face front-inner"></div>
          <div class="face back-inner"></div>
          <div class="face right-inner"></div>
          <div class="face left-inner"></div>
          <div class="face top-inner"></div>
          <div class="face bottom-inner"></div>
        </div>
      </div>
    </div>

    <!-- Right Side: Geometric Hologram (Purple/Fuchsia) -->
    <div class="hidden lg:flex absolute right-8 top-1/2 -translate-y-1/2 w-48 h-48 justify-center items-center z-0 opacity-50 pointer-events-none">
      <div class="cube-wrapper">
        <div class="cube cube-right">
          <div class="face front-purple"></div>
          <div class="face back-purple"></div>
          <div class="face right-purple"></div>
          <div class="face left-purple"></div>
          <div class="face top-purple"></div>
          <div class="face bottom-purple"></div>
        </div>
        <!-- Inner Cube -->
        <div class="cube cube-right-inner">
          <div class="face front-inner-purple"></div>
          <div class="face back-inner-purple"></div>
          <div class="face right-inner-purple"></div>
          <div class="face left-inner-purple"></div>
          <div class="face top-inner-purple"></div>
          <div class="face bottom-inner-purple"></div>
        </div>
      </div>
    </div>

    <!-- Header -->
    <div class="flex flex-col items-center justify-center text-center mb-16 relative z-20" v-reveal>
      <div class="flex items-center gap-4 mb-4">
        <div class="w-8 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
        <h2 class="text-blue-400 font-semibold tracking-[0.2em] uppercase text-sm">Skills</h2>
        <div class="w-8 h-1 bg-gradient-to-l from-blue-500 to-purple-500 rounded-full"></div>
      </div>
      <h3 class="text-5xl md:text-6xl font-outfit font-black text-white tracking-tight drop-shadow-lg">
        Tools &amp; <span class="gradient-text">Technologies.</span>
      </h3>
    </div>

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

/* Hologram Cube CSS */
.cube-wrapper {
  perspective: 1000px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.cube {
  position: absolute;
  transform-style: preserve-3d;
}

.cube-left {
  width: 140px;
  height: 140px;
  animation: rotate-cube 12s infinite linear;
}
.cube-left-inner {
  width: 70px;
  height: 70px;
  animation: rotate-cube-reverse 8s infinite linear;
}

.cube-right {
  width: 140px;
  height: 140px;
  animation: rotate-cube-reverse 15s infinite linear;
}
.cube-right-inner {
  width: 70px;
  height: 70px;
  animation: rotate-cube 10s infinite linear;
}

.face {
  position: absolute;
  width: 100%;
  height: 100%;
  border-width: 1.5px;
  border-style: solid;
  backdrop-filter: blur(2px);
}

/* Left Cube (Cyan/Blue) */
.cube-left .face {
  border-color: rgba(56, 189, 248, 0.4); /* sky-400 */
  background: rgba(56, 189, 248, 0.02);
  box-shadow: 0 0 20px rgba(56, 189, 248, 0.2) inset;
}
.cube-left-inner .face {
  border-color: rgba(96, 165, 250, 0.6); /* blue-400 */
  background: rgba(96, 165, 250, 0.05);
  box-shadow: 0 0 10px rgba(96, 165, 250, 0.3) inset;
}

/* Right Cube (Purple/Fuchsia) */
.cube-right .face {
  border-color: rgba(192, 132, 252, 0.4); /* purple-400 */
  background: rgba(192, 132, 252, 0.02);
  box-shadow: 0 0 20px rgba(192, 132, 252, 0.2) inset;
}
.cube-right-inner .face {
  border-color: rgba(232, 121, 249, 0.6); /* fuchsia-400 */
  background: rgba(232, 121, 249, 0.05);
  box-shadow: 0 0 10px rgba(232, 121, 249, 0.3) inset;
}

/* Transforms for Outer Cubes (140px) */
.cube-left .front, .cube-right .front-purple { transform: translateZ(70px); }
.cube-left .back, .cube-right .back-purple { transform: rotateY(180deg) translateZ(70px); }
.cube-left .right, .cube-right .right-purple { transform: rotateY(90deg) translateZ(70px); }
.cube-left .left, .cube-right .left-purple { transform: rotateY(-90deg) translateZ(70px); }
.cube-left .top, .cube-right .top-purple { transform: rotateX(90deg) translateZ(70px); }
.cube-left .bottom, .cube-right .bottom-purple { transform: rotateX(-90deg) translateZ(70px); }

/* Transforms for Inner Cubes (70px) */
.cube-left-inner .front-inner, .cube-right-inner .front-inner-purple { transform: translateZ(35px); }
.cube-left-inner .back-inner, .cube-right-inner .back-inner-purple { transform: rotateY(180deg) translateZ(35px); }
.cube-left-inner .right-inner, .cube-right-inner .right-inner-purple { transform: rotateY(90deg) translateZ(35px); }
.cube-left-inner .left-inner, .cube-right-inner .left-inner-purple { transform: rotateY(-90deg) translateZ(35px); }
.cube-left-inner .top-inner, .cube-right-inner .top-inner-purple { transform: rotateX(90deg) translateZ(35px); }
.cube-left-inner .bottom-inner, .cube-right-inner .bottom-inner-purple { transform: rotateX(-90deg) translateZ(35px); }

@keyframes rotate-cube {
  0% { transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg); }
  100% { transform: rotateX(360deg) rotateY(360deg) rotateZ(360deg); }
}

@keyframes rotate-cube-reverse {
  0% { transform: rotateX(360deg) rotateY(360deg) rotateZ(0deg); }
  100% { transform: rotateX(0deg) rotateY(0deg) rotateZ(360deg); }
}
</style>
