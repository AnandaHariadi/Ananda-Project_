<template>
  <nav :class="['fixed w-full z-50 transition-all duration-500', scrolled ? 'glass-nav py-3' : 'bg-transparent py-6']">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center">
        <!-- Logo -->
        <a href="#home" class="font-outfit font-bold text-2xl tracking-tighter group">
          <span class="text-white">Ananda</span><span class="text-purple-500 group-hover:text-blue-400 transition-colors">.</span>
        </a>

        <!-- Desktop Menu -->
        <div class="hidden md:flex items-center gap-1 px-2 py-1.5 rounded-full bg-[#0a051c]/60 backdrop-blur-md border border-white/10 shadow-[0_4px_20px_rgba(0,0,0,0.3)]">
          <a
            v-for="item in navItems"
            :key="item.name"
            :href="item.href"
            :class="[
              'relative px-5 py-2 text-sm font-medium rounded-full transition-colors',
              active === item.id ? 'text-white' : 'text-gray-400 hover:text-white'
            ]"
          >
            <span
              v-if="active === item.id"
              class="absolute inset-0 rounded-full bg-white/10 shadow-[0_0_10px_rgba(255,255,255,0.05)] border border-white/5"
            ></span>
            <span class="relative z-10">{{ item.name }}</span>
          </a>
        </div>

        <div class="hidden md:flex items-center gap-4">
          <a
            href="/assets/CV_Muhammad_Ananda_Hariadi_2026.pdf"
            target="_blank"
            class="px-5 py-2.5 rounded-full text-sm font-semibold text-gray-300 border border-white/10 hover:border-purple-400/50 hover:text-white hover:shadow-[0_0_15px_rgba(167,139,250,0.3)] transition-all bg-white/5 backdrop-blur-sm"
          >
            Resume
          </a>
          <a
            href="#contact"
            v-magnetic="0.3"
            class="px-6 py-2.5 rounded-full bg-white text-black text-sm font-bold hover:bg-gray-200 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)]"
          >
            Let's Talk
          </a>
        </div>

        <!-- Mobile Menu Button -->
        <button @click="isOpen = !isOpen" class="md:hidden text-white focus:outline-none p-2 rounded-lg hover:bg-white/5 transition-colors" aria-label="Toggle menu">
          <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path v-if="!isOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
            <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile Menu -->
    <Transition name="slide">
      <div v-show="isOpen" class="md:hidden absolute top-full left-0 w-full border-t border-white/10 bg-[#0a051c]/95 backdrop-blur-xl shadow-2xl">
        <div class="px-4 pt-4 pb-8 space-y-2">
          <a
            v-for="item in navItems"
            :key="item.name"
            :href="item.href"
            @click="isOpen = false"
            :class="[
              'block px-5 py-3.5 text-base font-semibold rounded-xl transition-all',
              active === item.id ? 'text-white bg-white/10 border border-white/5' : 'text-gray-400 hover:text-white hover:bg-white/5'
            ]"
          >
            {{ item.name }}
          </a>
          <div class="pt-4 mt-2 border-t border-white/10 flex flex-col gap-3">
            <a
              href="/assets/CV_Muhammad_Ananda_Hariadi_2026.pdf"
              target="_blank"
              @click="isOpen = false"
              class="block text-center px-5 py-3.5 rounded-xl border border-white/10 text-gray-300 font-semibold hover:bg-white/5"
            >
              Resume
            </a>
            <a
              href="#contact"
              @click="isOpen = false"
              class="block text-center px-5 py-3.5 rounded-xl bg-white text-black font-bold shadow-[0_0_20px_rgba(255,255,255,0.2)]"
            >
              Let's Talk
            </a>
          </div>
        </div>
      </div>
    </Transition>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const isOpen = ref(false);
const scrolled = ref(false);
const active = ref('home');

const navItems = [
  { name: 'Home', href: '#home', id: 'home' },
  { name: 'About', href: '#about', id: 'about' },
  { name: 'Projects', href: '#projects', id: 'projects' },
  { name: 'Contact', href: '#contact', id: 'contact' },
];

const handleScroll = () => {
  scrolled.value = window.scrollY > 40;
};

let sectionObserver = null;

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) active.value = entry.target.id;
      });
    },
    { rootMargin: '-45% 0px -50% 0px' }
  );
  ['home', 'about', 'projects', 'contact'].forEach((id) => {
    const el = document.getElementById(id);
    if (el) sectionObserver.observe(el);
  });
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
  if (sectionObserver) sectionObserver.disconnect();
});
</script>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}
.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
