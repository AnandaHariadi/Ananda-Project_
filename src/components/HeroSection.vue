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
            <h1 class="font-bold font-signature tracking-tighter text-white leading-[1.05] text-[2.8rem] sm:text-[4rem] lg:text-[5.5rem] drop-shadow-2xl name-line" style="--i:2">
              <span class="name-typed">{{ typedName }}</span><span class="name-glitch gradient-text">{{ typedAccent }}</span><span class="name-caret" aria-hidden="true">|</span>
            </h1>
          </div>

          <p class="text-lg md:text-2xl font-outfit text-gray-300 max-w-xl leading-[1.5] font-light" style="--i:3">
            A Software Engineering student crafting <span class="font-semibold text-white">elegant systems</span> and
            <span class="font-semibold text-white">digital experiences</span> across the web, AI, and robotics.
          </p>

          <div class="flex flex-wrap gap-4 pt-4" style="--i:4">
            <a href="#projects" class="px-8 py-4 rounded-full bg-brand text-white font-bold text-lg shadow-[0_10px_30px_rgba(109,40,217,0.5)] hover:shadow-[0_14px_40px_rgba(109,40,217,0.7)] transition-shadow">
              Explore Work
            </a>
            <a href="#contact" class="px-8 py-4 rounded-full bg-transparent border border-white/20 text-white font-bold text-lg hover:border-white/50 hover:bg-white/5 transition-all">
              Get in Touch
            </a>
          </div>
        </div>

        <!-- Profile Photo -->
        <div class="relative flex justify-center lg:justify-end" :class="['stagger', { 'stagger-go': start }]" style="--i:3">
          <div
            ref="tiltWrap"
            class="relative w-full max-w-sm animate-float [perspective:1100px]"
            @pointermove="onTilt"
            @pointerleave="resetTilt"
          >
            <!-- Glow behind photo -->
            <div class="absolute -inset-6 bg-gradient-to-tr from-purple-500/30 to-blue-500/20 rounded-[3rem] blur-[80px]"></div>

            <!-- 3D tilting card -->
            <div
              class="relative transition-transform duration-200 ease-out [transform-style:preserve-3d] will-change-transform"
              :style="tiltStyle"
            >
              <!-- Floating code snippets around the frame -->
              <div class="pointer-events-none absolute inset-0 z-20 [transform:translateZ(60px)]" aria-hidden="true">
                <span
                  v-for="(c, ci) in codeChips"
                  :key="ci"
                  class="code-chip absolute font-mono text-[0.62rem] sm:text-xs whitespace-nowrap px-2 py-1 rounded-md bg-[#0a051c]/70 backdrop-blur-sm border border-white/10 text-indigo-300/90 shadow-lg"
                  :style="{ top: c.top, left: c.left, right: c.right, bottom: c.bottom, animationDelay: c.delay, animationDuration: c.dur }"
                >{{ c.text }}</span>
              </div>

              <!-- Photo Card with Animated Colorful Frame -->
              <div class="relative p-1.5 rounded-[2.5rem] bg-[#0a051c]/40 shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden group">
                <!-- Animated gradient border -->
                <div class="absolute -inset-[50%] opacity-70 group-hover:opacity-100 transition-opacity duration-500 animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#000000_0%,#4c1d95_20%,#3b82f6_40%,#db2777_60%,#4c1d95_80%,#000000_100%)]"></div>

                <!-- Inner content -->
                <div class="relative rounded-[2.3rem] overflow-hidden aspect-[4/5] bg-[#0a051c] z-10">
                  <img
                    src="/assets/profile-ananda.jpeg"
                    alt="Muhammad Ananda Hariadi"
                    class="w-full h-full object-cover object-center scale-[1.15] group-hover:scale-[1.25] transition-transform duration-700"
                  />
                  <!-- Subtle vignette overlay -->
                  <div class="absolute inset-0 bg-gradient-to-t from-[#0a051c]/60 via-transparent to-transparent pointer-events-none"></div>
                </div>
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
import { ref, onMounted, onUnmounted } from 'vue';

defineProps({
  start: { type: Boolean, default: false },
});

/* Typewriter name — types in, holds, deletes, loops */
const FIRST = 'Ananda ';
const ACCENT = 'Hariadi.';
const FULL = FIRST + ACCENT;
const typedName = ref('');
const typedAccent = ref('');
let nameTimer = null;

function applyName(n) {
  typedName.value = FULL.slice(0, Math.min(n, FIRST.length));
  typedAccent.value = n > FIRST.length ? FULL.slice(FIRST.length, n) : '';
}

onMounted(() => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    applyName(FULL.length);
    return;
  }
  let n = 0;
  let dir = 1; // 1 typing, -1 deleting
  const tick = () => {
    n += dir;
    applyName(n);
    if (n >= FULL.length) {
      dir = -1;
      nameTimer = setTimeout(tick, 2200); // hold full name
    } else if (n <= 0) {
      dir = 1;
      nameTimer = setTimeout(tick, 700); // pause when empty
    } else {
      nameTimer = setTimeout(tick, dir > 0 ? 120 : 55);
    }
  };
  nameTimer = setTimeout(tick, 600);
});
onUnmounted(() => clearTimeout(nameTimer));

/* Floating code snippets that orbit the photo frame */
const codeChips = [
  { text: '<Developer />', top: '6%', left: '-8%', delay: '0s', dur: '6s' },
  { text: 'const skills = []', top: '22%', right: '-12%', delay: '1.2s', dur: '7s' },
  { text: 'while(true){ build() }', bottom: '26%', left: '-12%', delay: '0.6s', dur: '8s' },
  { text: 'git push origin main', bottom: '8%', right: '-6%', delay: '2s', dur: '6.5s' },
  { text: 'AI · Robotics', top: '48%', left: '-14%', delay: '1.8s', dur: '7.5s' },
  { text: '{ ...ideas }', bottom: '46%', right: '-13%', delay: '0.3s', dur: '6.8s' },
];

/* 3D tilt on pointer move / drag */
const tiltWrap = ref(null);
const tiltStyle = ref('transform: rotateX(0deg) rotateY(0deg);');

function onTilt(e) {
  const el = tiltWrap.value;
  if (!el) return;
  const r = el.getBoundingClientRect();
  const px = (e.clientX - r.left) / r.width - 0.5;  // -0.5 .. 0.5
  const py = (e.clientY - r.top) / r.height - 0.5;
  const max = 16; // degrees
  const ry = px * max * 2;
  const rx = -py * max * 2;
  tiltStyle.value = `transform: rotateX(${rx.toFixed(2)}deg) rotateY(${ry.toFixed(2)}deg) scale(1.02);`;
}

function resetTilt() {
  tiltStyle.value = 'transform: rotateX(0deg) rotateY(0deg);';
}
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

/* Floating code chips around the photo */
.code-chip {
  animation-name: chip-float;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
  opacity: 0.9;
}
@keyframes chip-float {
  0%, 100% { transform: translateY(0) translateX(0); }
  50% { transform: translateY(-10px) translateX(4px); }
}

@media (prefers-reduced-motion: reduce) {
  .code-chip { animation: none; }
}

/* ---- Animated name: caret, glitch, lightning ---- */
.name-line {
  position: relative;
  min-height: 1.15em;
}
.name-caret {
  display: inline-block;
  margin-left: 0.04em;
  font-weight: 300;
  color: #a78bfa;
  animation: name-caret-blink 0.9s steps(1) infinite;
}
@keyframes name-caret-blink {
  50% { opacity: 0; }
}

/* subtle glitch flicker on the accent part */
.name-glitch {
  animation: name-flicker 5.5s ease-in-out infinite;
}
@keyframes name-flicker {
  0%, 92%, 100% { opacity: 1; text-shadow: none; }
  93% { opacity: 0.7; text-shadow: 2px 0 #3b82f6, -2px 0 #db2777; }
  94% { opacity: 1; text-shadow: -2px 0 #3b82f6, 2px 0 #db2777; }
  95% { opacity: 0.85; text-shadow: 1px 0 #60a5fa; }
  96% { opacity: 1; text-shadow: none; }
}

@media (prefers-reduced-motion: reduce) {
  .name-glitch { animation: none; }
}
</style>
