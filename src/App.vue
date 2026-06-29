<script setup>
import { ref, watch, onMounted, onUnmounted } from 'vue';
import AppLoader from './components/AppLoader.vue';
import ScrollProgress from './components/ScrollProgress.vue';
import Navbar from './components/Navbar.vue';
import HeroSection from './components/HeroSection.vue';
import AboutSection from './components/AboutSection.vue';
import AboutDeep from './components/AboutDeep.vue';
import TechMarquee from './components/TechMarquee.vue';
import SkillsSection from './components/SkillsSection.vue';
import ProjectsSection from './components/ProjectsSection.vue';

import ContactSection from './components/ContactSection.vue';
import DetailModal from './components/DetailModal.vue';
import { ui } from './store.js';

const loaded = ref(false);

// Lock body scroll while the deep About page is open.
watch(
  () => ui.aboutOpen,
  (open) => {
    document.body.style.overflow = open ? 'hidden' : '';
  }
);

// Browser Back button closes the deep page (it was opened with history.pushState).
function onPopState() {
  if (ui.aboutOpen) ui.aboutOpen = false;
}
onMounted(() => window.addEventListener('popstate', onPopState));
onUnmounted(() => window.removeEventListener('popstate', onPopState));
</script>

<template>
  <AppLoader @done="loaded = true" />
  <ScrollProgress />

  <div class="relative min-h-screen text-white bg-[#030014] overflow-hidden" :class="loaded ? 'content-ready' : 'content-hold'">
    <!-- Global Dark Gradient Background (animated) -->
    <div class="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-br from-[#1a0b2e] via-[#030014] to-[#0a192f] opacity-80"></div>
      <!-- drifting aurora blobs -->
      <div class="aurora aurora-1"></div>
      <div class="aurora aurora-2"></div>
      <div class="aurora aurora-3"></div>
      <div class="absolute top-0 right-0 w-[800px] h-[800px] bg-purple-900/20 rounded-full blur-[150px] mix-blend-screen bg-drift"></div>
      <div class="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-900/20 rounded-full blur-[150px] mix-blend-screen bg-drift-alt"></div>
      <div class="absolute inset-0 bg-[radial-gradient(circle,_rgba(255,255,255,0.03)_1px,_transparent_1px)] [background-size:32px_32px]"></div>
    </div>

    <Navbar />

    <main class="relative z-10">
      <HeroSection :start="loaded" />
      <AboutSection />
      <TechMarquee />
      <SkillsSection />
      <ProjectsSection />

      <ContactSection />
    </main>
  </div>

  <!-- Deep "About me" page -->
  <Transition name="deep">
    <AboutDeep v-if="ui.aboutOpen" />
  </Transition>

  <!-- Detail Modal Overlay -->
  <DetailModal />
</template>

<style>
/* ---------- animated page background ---------- */
.aurora {
  position: absolute;
  border-radius: 9999px;
  filter: blur(130px);
  mix-blend-mode: screen;
  opacity: 0.35;
  will-change: transform;
}
.aurora-1 {
  width: 620px;
  height: 620px;
  top: -8%;
  left: 12%;
  background: radial-gradient(circle, #7c3aed, transparent 62%);
  animation: aurora-1 30s ease-in-out infinite;
}
.aurora-2 {
  width: 540px;
  height: 540px;
  bottom: -10%;
  right: 8%;
  background: radial-gradient(circle, #2563eb, transparent 62%);
  animation: aurora-2 38s ease-in-out infinite;
}
.aurora-3 {
  width: 460px;
  height: 460px;
  top: 40%;
  left: 55%;
  background: radial-gradient(circle, #db2777, transparent 65%);
  opacity: 0.22;
  animation: aurora-3 34s ease-in-out infinite;
}
.bg-drift { animation: bg-drift 26s ease-in-out infinite; will-change: transform; }
.bg-drift-alt { animation: bg-drift-alt 32s ease-in-out infinite; will-change: transform; }

@keyframes aurora-1 {
  0%, 100% { transform: translate(0, 0) scale(1); }
  33%      { transform: translate(120px, 60px) scale(1.12); }
  66%      { transform: translate(-80px, 100px) scale(0.95); }
}
@keyframes aurora-2 {
  0%, 100% { transform: translate(0, 0) scale(1); }
  33%      { transform: translate(-100px, -70px) scale(1.1); }
  66%      { transform: translate(90px, -40px) scale(0.92); }
}
@keyframes aurora-3 {
  0%, 100% { transform: translate(0, 0) scale(1); }
  50%      { transform: translate(-140px, -90px) scale(1.18); }
}
@keyframes bg-drift {
  0%, 100% { transform: translate(0, 0); }
  50%      { transform: translate(-70px, 60px); }
}
@keyframes bg-drift-alt {
  0%, 100% { transform: translate(0, 0); }
  50%      { transform: translate(60px, -50px); }
}
@media (prefers-reduced-motion: reduce) {
  .aurora, .bg-drift, .bg-drift-alt { animation: none !important; }
}

/* Hold page motion until the loader finishes, then let the hero animate in. */
.content-hold {
  opacity: 0;
}
.content-ready {
  opacity: 1;
  transition: opacity 0.5s ease;
}

/* Deep About page transition */
.deep-enter-active,
.deep-leave-active {
  transition: opacity 0.5s ease, transform 0.55s cubic-bezier(0.16, 1, 0.3, 1);
}
.deep-enter-from,
.deep-leave-to {
  opacity: 0;
  transform: translateY(40px);
}
</style>
