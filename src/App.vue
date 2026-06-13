<script setup>
import { ref, watch, onMounted, onUnmounted } from 'vue';
import AppLoader from './components/AppLoader.vue';
import CustomCursor from './components/CustomCursor.vue';
import ScrollProgress from './components/ScrollProgress.vue';
import Navbar from './components/Navbar.vue';
import HeroSection from './components/HeroSection.vue';
import AboutSection from './components/AboutSection.vue';
import AboutDeep from './components/AboutDeep.vue';
import TechMarquee from './components/TechMarquee.vue';
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
  <CustomCursor />
  <ScrollProgress />

  <div class="relative min-h-screen text-white bg-[#030014] overflow-hidden" :class="loaded ? 'content-ready' : 'content-hold'">
    <!-- Global Dark Gradient Background -->
    <div class="fixed inset-0 z-0 pointer-events-none">
      <div class="absolute inset-0 bg-gradient-to-br from-[#1a0b2e] via-[#030014] to-[#0a192f] opacity-80"></div>
      <div class="absolute top-0 right-0 w-[800px] h-[800px] bg-purple-900/20 rounded-full blur-[150px] mix-blend-screen"></div>
      <div class="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-900/20 rounded-full blur-[150px] mix-blend-screen"></div>
      <div class="absolute inset-0 bg-[radial-gradient(circle,_rgba(255,255,255,0.03)_1px,_transparent_1px)] [background-size:32px_32px]"></div>
    </div>

    <Navbar />

    <main class="relative z-10">
      <HeroSection :start="loaded" />
      <AboutSection />
      <TechMarquee />
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
