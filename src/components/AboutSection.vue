<template>
  <section id="about" class="py-28 md:py-36 relative z-10 overflow-hidden">
    <!-- Abstract dark glow -->
    <div class="absolute top-1/3 -right-32 w-[600px] h-[600px] bg-purple-900/10 rounded-full blur-[150px] pointer-events-none mix-blend-screen animate-float" style="animation-delay: 1s"></div>
    <div class="absolute bottom-0 -left-32 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[150px] pointer-events-none mix-blend-screen animate-float" style="animation-delay: 3s"></div>

    <!-- Floating Code Animation Background -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none z-0">
      <div 
        v-for="(code, i) in codeSnippets" 
        :key="i"
        class="absolute font-mono text-white/[0.04] text-lg md:text-xl font-medium whitespace-nowrap animate-code-float"
        :style="{ top: code.top, left: code.left, right: code.right, animationDelay: code.delay, animationDuration: code.dur }"
      >
        {{ code.text }}
      </div>
    </div>

    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">

      <!-- ===================== Header ===================== -->
      <div v-reveal class="text-center max-w-2xl mx-auto mb-16 md:mb-20">
        <div class="inline-flex items-center gap-4 mb-5">
          <div class="w-10 h-px bg-gradient-to-r from-transparent to-indigo-500"></div>
          <h2 class="text-indigo-400 font-bold tracking-[0.2em] uppercase text-sm">About Me</h2>
          <div class="w-10 h-px bg-gradient-to-l from-transparent to-indigo-500"></div>
        </div>
        <h3 class="text-4xl md:text-6xl font-display font-black text-white tracking-tight leading-tight drop-shadow-lg">
          Behind the <span class="gradient-text">Code.</span>
        </h3>
      </div>

      <!-- ===================== About Me: photo left, text right ===================== -->
      <div class="grid grid-cols-1 lg:grid-cols-[400px_1fr] gap-10 lg:gap-16 items-center mb-24 md:mb-28">

        <!-- portrait (rectangular frame) -->
        <div v-reveal:left class="w-full max-w-sm mx-auto lg:mx-0">
          <div class="relative w-full aspect-[4/5] rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl group">
            <img src="/assets/behind-code.jpg" alt="Portrait" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" />
            <div class="absolute inset-0 bg-gradient-to-t from-[#0a051c]/80 via-transparent to-transparent pointer-events-none"></div>
            <span class="absolute bottom-6 left-6 flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/20 backdrop-blur border border-blue-400/30 text-[0.65rem] font-bold text-blue-300 tracking-wider">
              <span class="relative flex h-2 w-2"><span class="absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75 animate-ping"></span><span class="relative inline-flex rounded-full h-2 w-2 bg-blue-400"></span></span>
              OPEN TO WORK
            </span>
          </div>
        </div>

        <!-- intro copy + info blocks -->
        <div v-reveal:right class="flex flex-col justify-center">
          <p class="text-base md:text-lg text-gray-300 font-light leading-relaxed mb-4">
            Hi! 👋 I'm <span class="font-signature font-bold text-blue-400 text-2xl tracking-wide">Ananda Hariadi</span>, an Informatics student passionate about Software Engineering, Artificial Intelligence, and Robotics. I love building elegant systems, solving real-world problems, and exploring how technology can drive meaningful change.
          </p>
          <p class="text-base md:text-lg text-gray-300 font-light leading-relaxed mb-8">
            Beyond coding, I lead teams and shape culture, believing that the best products are built by people who care. I am actively looking for opportunities to contribute my skills and grow within a dynamic team.
          </p>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div
              v-for="(item, i) in info"
              :key="i"
              class="rounded-2xl border border-white/10 bg-white/5 p-5 transition-all duration-300 hover:-translate-y-1 hover:bg-white/10 hover:border-blue-500/30 shadow-lg"
            >
              <div class="flex items-center gap-2.5 mb-2">
                <svg class="w-5 h-5 text-blue-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path :d="item.icon" /></svg>
                <p class="text-white font-semibold tracking-wide">{{ item.label }}</p>
              </div>
              <p class="text-sm text-gray-400 leading-snug font-light">{{ item.value }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- ===================== Education ===================== -->
      <div class="mb-20 md:mb-24">
        <div v-reveal class="flex items-center gap-4 mb-8">
          <h3 class="text-2xl md:text-3xl font-display font-bold text-white tracking-tight">Education</h3>
          <div class="flex-1 h-px bg-gradient-to-r from-white/15 to-transparent"></div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          <article
            v-for="(e, i) in education"
            :key="i"
            v-reveal="i * 90"
            class="group relative rounded-2xl border border-white/10 bg-white/[0.03] p-6 overflow-hidden transition-all duration-500 hover:-translate-y-1.5 hover:border-indigo-400/40"
          >
            <div class="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-md -z-10 bg-gradient-to-br from-violet-600 to-blue-600"></div>
            <div class="flex items-center justify-between mb-4">
              <div class="w-12 h-12 rounded-xl flex items-center justify-center text-white shadow-lg bg-gradient-to-br from-violet-600 to-blue-600 group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-500">
                <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path :d="e.icon" /></svg>
              </div>
              <span v-if="e.period" class="text-xs font-semibold text-gray-500 tracking-wider tabular-nums">{{ e.period }}</span>
            </div>
            <h4 class="font-display font-bold text-white text-lg leading-snug group-hover:text-indigo-200 transition-colors">{{ e.org }}</h4>
            <p class="text-sm text-indigo-300/80 mt-1.5">{{ e.role }}</p>
            <p class="text-sm text-gray-400 mt-3 leading-relaxed">{{ e.summary }}</p>
          </article>
        </div>
      </div>

      <!-- ===================== Experience ===================== -->
      <div class="mb-20 md:mb-28">
        <div v-reveal class="flex items-center gap-4 mb-12">
          <h3 class="text-2xl md:text-3xl font-display font-bold text-white tracking-tight">Experience</h3>
          <div class="flex-1 h-px bg-gradient-to-r from-white/15 to-transparent"></div>
        </div>

        <div class="space-y-20 md:space-y-32">
          <div v-for="(w, i) in work" :key="i" v-reveal="i * 50" class="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            
            <!-- Text Side -->
            <div :class="[i % 2 !== 0 ? 'lg:order-2' : 'lg:order-1']">
              <div v-if="w.period" class="flex items-center gap-3 mb-5">
                <span class="px-3 py-1.5 rounded-full text-[0.7rem] font-bold text-indigo-200 bg-indigo-500/10 border border-indigo-400/20 tracking-wider tabular-nums uppercase">{{ cleanPeriod(w.period) }}</span>
              </div>
              <h4 class="font-display font-bold text-white text-3xl md:text-4xl leading-tight mb-2">{{ position(w.role) }}</h4>
              <p class="text-xl text-indigo-300/80 mb-6 font-light">{{ w.org }}<span v-if="location(w.role)" class="text-gray-500"> · {{ location(w.role) }}</span></p>
              
              <ul class="space-y-4">
                <li v-for="(m, mi) in milestones(w)" :key="mi" class="flex gap-3 text-base text-gray-300 leading-relaxed font-light">
                  <svg class="mt-1 shrink-0 w-5 h-5 text-indigo-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 13l4 4L19 7" /></svg>
                  <span>{{ m }}</span>
                </li>
              </ul>
            </div>

            <!-- Photos Side (2 photos) -->
            <div :class="[i % 2 !== 0 ? 'lg:order-1' : 'lg:order-2', 'grid grid-cols-2 gap-4 h-[280px] sm:h-[400px]']">
              <div class="rounded-3xl overflow-hidden border border-white/10 shadow-xl translate-y-4 md:translate-y-8 group relative bg-black/40 flex items-center justify-center">
                <img :src="getPhoto(w, i, 0)" :class="['w-full h-full transition-transform duration-700 ease-out', getPhoto(w, i, 0).includes('elvanor') ? 'object-contain scale-[1.25] group-hover:scale-[1.35]' : 'object-cover ' + (getPhoto(w, i, 0).includes('ggj-1') ? 'scale-[1.3] group-hover:scale-[1.45]' : 'group-hover:scale-110')]" />
                <div class="absolute inset-0 bg-gradient-to-t from-[#0a051c]/60 via-transparent to-transparent pointer-events-none"></div>
              </div>
              <div class="rounded-3xl overflow-hidden border border-white/10 shadow-xl -translate-y-4 md:-translate-y-8 group relative bg-black/40 flex items-center justify-center">
                <img :src="getPhoto(w, i, 1)" :class="['w-full h-full transition-transform duration-700 ease-out', getPhoto(w, i, 1).includes('elvanor') ? 'object-contain scale-[1.25] group-hover:scale-[1.35]' : 'object-cover ' + (getPhoto(w, i, 1).includes('humas-upn-2') ? 'scale-[1.3] group-hover:scale-[1.45]' : (getPhoto(w, i, 1).includes('ggj-1') ? 'scale-[1.3] group-hover:scale-[1.45]' : 'group-hover:scale-110'))]" />
                <div class="absolute inset-0 bg-gradient-to-t from-[#0a051c]/60 via-transparent to-transparent pointer-events-none"></div>
              </div>
            </div>
          </div>
        </div>

      </div>

      <!-- ===================== Organization ===================== -->
      <div class="mb-16">
        <div v-reveal class="flex items-center gap-4 mb-12">
          <h3 class="text-2xl md:text-3xl font-display font-bold text-white tracking-tight">Organization</h3>
          <div class="flex-1 h-px bg-gradient-to-r from-white/15 to-transparent"></div>
        </div>

        <div class="space-y-20 md:space-y-32">
          <div v-for="(o, i) in organization" :key="i" v-reveal="i * 50" class="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            
            <!-- Text Side -->
            <div :class="[i % 2 === 0 ? 'lg:order-2' : 'lg:order-1']">
              <div v-if="o.period" class="flex items-center gap-3 mb-5">
                <span class="px-3 py-1.5 rounded-full text-[0.7rem] font-bold text-indigo-200 bg-indigo-500/10 border border-indigo-400/20 tracking-wider tabular-nums uppercase">{{ cleanPeriod(o.period) }}</span>
              </div>
              <h4 class="font-display font-black text-white text-3xl md:text-4xl leading-tight mb-2">{{ o.org }}</h4>
              <p class="text-xl text-indigo-400 font-light mb-6">{{ position(o.role) }}</p>
              
              <ul class="space-y-4 mb-8">
                <li v-for="(m, mi) in milestones(o)" :key="mi" class="flex gap-3 text-base text-gray-300 leading-relaxed font-light">
                  <svg class="mt-1 shrink-0 w-5 h-5 text-indigo-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 13l4 4L19 7" /></svg>
                  <span>{{ m }}</span>
                </li>
              </ul>
              
              <!-- Metrics / Tags purely visual from milestones/data -->
              <div class="flex flex-wrap gap-2.5">
                <span class="px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-sm text-gray-300 font-medium tracking-wide backdrop-blur-sm shadow-sm">{{ ['Leadership', 'Technology', 'Innovation', 'Research'][i % 4] }}</span>
                <span class="px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-sm text-gray-300 font-medium tracking-wide backdrop-blur-sm shadow-sm">{{ ['Management', 'Development', 'Strategy', 'Design'][(i+1) % 4] }}</span>
              </div>
            </div>

            <!-- Photos Side (1 or 2 portrait photos, staggered) -->
            <div :class="[
              i % 2 === 0 ? 'lg:order-1' : 'lg:order-2',
              'h-[280px] sm:h-[400px] flex justify-center',
              (getPhotoCount(o, i) !== 1) ? 'grid grid-cols-2 gap-4' : ''
            ]">
              <!-- If only 1 photo exists -->
              <template v-if="getPhotoCount(o, i) === 1">
                <div :class="['rounded-3xl overflow-hidden border border-white/10 shadow-xl group relative bg-black/40 flex items-center justify-center', 
                  (getPhoto(o, i, 0).includes('duta-smanstar') || getPhoto(o, i, 0).includes('osis')) ? 'col-span-2 aspect-[21/9]' : 'aspect-square md:aspect-auto h-full']">
                  <img :src="getPhoto(o, i, 0)" :class="['w-full h-full transition-transform duration-700 ease-out', getPhoto(o, i, 0).includes('duta-smanstar') ? 'object-cover object-[center_40%] scale-105 group-hover:scale-110' : getPhoto(o, i, 0).includes('osis') || getPhoto(o, i, 0).includes('robotic') ? 'object-cover object-[center_30%] scale-105 group-hover:scale-110' : 'object-cover object-center group-hover:scale-110']" />
                  <div class="absolute inset-0 bg-gradient-to-t from-[#0a051c]/60 via-transparent to-transparent pointer-events-none"></div>
                </div>
              </template>
              <!-- If 2 or fallback photos -->
              <template v-else>
                <div class="rounded-3xl overflow-hidden border border-white/10 shadow-xl translate-y-4 md:translate-y-8 group relative bg-black/40 flex items-center justify-center">
                  <img :src="getPhoto(o, i, 0)" :class="['w-full h-full transition-transform duration-700 ease-out', getPhoto(o, i, 0).includes('robotic') ? 'object-cover scale-[1.25] group-hover:scale-[1.35] object-left' : 'object-cover object-center ' + (getPhoto(o, i, 0).includes('ikatandans-1') ? 'scale-[1.2] group-hover:scale-[1.35]' : 'group-hover:scale-110')]" />
                  <div class="absolute inset-0 bg-gradient-to-t from-[#0a051c]/60 via-transparent to-transparent pointer-events-none"></div>
                </div>
                <div class="rounded-3xl overflow-hidden border border-white/10 shadow-xl -translate-y-4 md:-translate-y-8 group relative bg-black/40 flex items-center justify-center">
                  <img :src="getPhoto(o, i, 1)" :class="['w-full h-full transition-transform duration-700 ease-out', getPhoto(o, i, 1).includes('robotic') ? 'object-cover scale-[1.25] group-hover:scale-[1.35] object-[30%_center]' : 'object-cover object-center ' + (getPhoto(o, i, 1).includes('ikatandans-2') ? 'scale-[1.1] group-hover:scale-[1.2]' : 'group-hover:scale-110')]" />
                  <div class="absolute inset-0 bg-gradient-to-t from-[#0a051c]/60 via-transparent to-transparent pointer-events-none"></div>
                </div>
              </template>
            </div>
          </div>
        </div>

      </div>

    </div>
  </section>
</template>

<script setup>
import { experiences } from '../data.js';
import { openAbout } from '../store.js';

/* short, friendly bio — background, passions, goal */
const description =
  "I'm a Software Engineering student who blends technical rigor with human-centered design. I move fluidly between web, AI, and robotics — not to collect tools, but to turn ideas into systems people can trust. Beyond the code, I lead teams and shape culture, because the best products are built by people who care. My goal is simple: build elegant systems, and the teams that make them last.";

/* quick-fact info blocks (minimalist icons) */
const info = [
  { label: 'Location', value: 'Surabaya, Indonesia', icon: 'M12 21s7-6.2 7-11a7 7 0 10-14 0c0 4.8 7 11 7 11zM12 12.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z' },
  { label: 'Education', value: 'S1 Informatics, UPNVJT', icon: 'M22 10L12 5 2 10l10 5 10-5zM6 12v5c0 1.1 2.7 2.5 6 2.5s6-1.4 6-2.5v-5' },
  { label: 'Interests', value: 'Web, AI, Robotics', icon: 'M12 3l1.9 4.8L19 9.7l-4.1 1.9L12 16l-1.9-4.4L6 9.7l5.1-1.9L12 3z' },
  { label: 'Goal', value: 'Human-centered systems', icon: 'M12 22a10 10 0 100-20 10 10 0 000 20zM12 16a4 4 0 100-8 4 4 0 000 8zM12 13a1 1 0 100-2 1 1 0 000 2z' },
];

/* animated floating code background snippets */
const codeSnippets = [
  { text: "const build = () => 'future';", top: "15%", left: "5%", delay: "0s", dur: "25s" },
  { text: "<SystemArchitecture />", top: "45%", right: "8%", delay: "2s", dur: "30s" },
  { text: "import { innovation } from 'mind';", top: "75%", left: "10%", delay: "5s", dur: "28s" },
  { text: "while(alive) { create(); }", top: "25%", right: "15%", delay: "8s", dur: "22s" },
  { text: "git commit -m 'deploy'", top: "85%", right: "10%", delay: "1s", dur: "26s" },
  { text: "{ ...ideas }", top: "60%", left: "20%", delay: "12s", dur: "35s" },
  { text: "npm run start", top: "35%", left: "30%", delay: "15s", dur: "20s" },
  { text: "class Future extends Now {}", top: "5%", right: "30%", delay: "7s", dur: "32s" },
];

/* chips that float around the portrait */
const chips = [
  { label: 'Leadership', cls: 'top-1 -left-6 md:-left-10', delay: '0s' },
  { label: 'Design', cls: 'top-1/3 -right-8 md:-right-14', delay: '1.2s' },
  { label: 'Robotics', cls: 'bottom-10 -left-10 md:-left-16', delay: '2.4s' },
  { label: 'AI', cls: '-bottom-2 right-2 md:right-0', delay: '0.6s' },
];

/* grouped experience */
const education = experiences.filter((e) => e.tag === 'Education');
const work = experiences.filter((e) => e.tag === 'Work');
const organization = experiences.filter((e) => e.tag === 'Organization');

/* alternating photos generator */
const fallbackPhotos = ['/assets/genbi.jpg', '/assets/formal-blue.jpg', '/assets/profile.jpg'];
function getPhoto(item, index, offsetIndex) {
  // explicit per-entry photos take priority
  if (item.photos && item.photos[offsetIndex]) return item.photos[offsetIndex];
  const hash = (item.org || '').length + (item.role || '').length;
  return fallbackPhotos[(hash + index + offsetIndex) % fallbackPhotos.length];
}

function getPhotoCount(item, index) {
  return item.photos ? item.photos.length : 2;
}

/* split "Role — Location" into separate pieces */
const position = (role) => (role || '').split('—')[0].trim();
const location = (role) => {
  const parts = (role || '').split('—');
  return parts.length > 1 ? parts.slice(1).join('—').trim() : '';
};

/* pull up to 3 milestone bullets from a description, falling back to the summary */
function milestones(item, max = 3) {
  const bullets = (item.description || '')
    .split('\n')
    .filter((l) => l.trim().startsWith('•'))
    .map((l) => l.replace(/^•\s*/, '').trim());
  return bullets.length ? bullets.slice(0, max) : [item.summary];
}

/* tidy "2024 — Present" -> "2024 → Present" (no dashes) */
const cleanPeriod = (p) => (p || '').replace(/\s*—\s*/g, ' → ');

/* professional / community icons, chosen per card from its title */
const ICONS = {
  briefcase: 'M3 7h18v12a1 1 0 01-1 1H4a1 1 0 01-1-1V7zM8 7V5a2 2 0 012-2h4a2 2 0 012 2v2M3 12h18',
  code: 'M8 9l-4 3 4 3M16 9l4 3-4 3M14 5l-4 14',
  robot: 'M9 3v2M15 3v2M7 7h10a2 2 0 012 2v7a2 2 0 01-2 2H7a2 2 0 01-2-2V9a2 2 0 012-2zM9 13h.01M15 13h.01M9 17h6',
  people: 'M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87m6-1.13a4 4 0 10-4-4 4 4 0 004 4zM7 10a4 4 0 108 0 4 4 0 00-8 0z',
  network: 'M12 6a2 2 0 100-4 2 2 0 000 4zM5 22a2 2 0 100-4 2 2 0 000 4zM19 22a2 2 0 100-4 2 2 0 000 4zM12 8v3M12 11l-5 5M12 11l5 5',
  globe: 'M12 3a9 9 0 100 18 9 9 0 000-18zM3.6 9h16.8M3.6 15h16.8M12 3c2.5 2.6 3.8 6 3.8 9s-1.3 6.4-3.8 9c-2.5-2.6-3.8-6-3.8-9s1.3-6.4 3.8-9z',
};

function workIcon(w) {
  const s = (w.org + ' ' + w.role).toLowerCase();
  if (/programmer|game|developer|engineer|ui\/ux|designer/.test(s)) return ICONS.code;
  if (/robot/.test(s)) return ICONS.robot;
  return ICONS.briefcase;
}
function orgIcon(o) {
  const s = (o.org + ' ' + o.role).toLowerCase();
  if (/robot|armadiro|krsbi|hanastawijaya|research|technology|architect/.test(s)) return ICONS.network;
  if (/delegat|ambassador|alfaction|pemimpin|genbi|national|regional/.test(s)) return ICONS.globe;
  return ICONS.people;
}
</script>

<style scoped>
/* ---------- floating code animation ---------- */
@keyframes code-float {
  0% { transform: translateY(20px); opacity: 0; }
  20% { opacity: 1; }
  80% { opacity: 1; }
  100% { transform: translateY(-100px); opacity: 0; }
}
.animate-code-float {
  animation: code-float linear infinite;
}

/* ---------- focus cards entrance ---------- */
.focus-card {
  animation: focus-in 0.6s cubic-bezier(0.16, 1, 0.3, 1) both;
}
@keyframes focus-in {
  from { opacity: 0; transform: translateY(16px) scale(0.96); }
  to   { opacity: 1; transform: translateY(0) scale(1); }
}

@media (prefers-reduced-motion: reduce) {
  .animate-code-float, .focus-card { animation: none !important; }
}
</style>
