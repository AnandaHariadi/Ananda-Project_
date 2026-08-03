<template>
  <nav
    class="fixed top-0 w-full z-50 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
    :class="isScrolled ? 'glass-nav py-4' : 'bg-transparent py-7'"
  >
    <div class="container mx-auto px-6 md:px-16 lg:px-24">
      <div class="flex items-center justify-between">

        <!-- Logo (minimal like fathurwithyou) -->
        <a href="/" class="text-base font-medium tracking-tight text-white/80 hover:text-white transition-colors duration-400 font-label">
          Ananda
        </a>

        <!-- Desktop nav links -->
        <div class="hidden md:flex items-center gap-10">
          <a
            v-for="link in navLinks"
            :key="link.name"
            :href="link.path"
            class="text-[12px] font-label tracking-[0.15em] text-white/35 hover:text-white/80 transition-colors duration-400 uppercase"
          >
            {{ link.name }}
          </a>

          <!-- Contact CTA -->
          <a
            href="#contact"
            class="btn-editorial px-5 py-2 rounded-full text-[11px] font-label tracking-[0.2em] text-white/50 uppercase hover:text-[#030a16]"
          >
            Hubungi
          </a>
        </div>

        <!-- Mobile menu toggle -->
        <button
          @click="isMenuOpen = !isMenuOpen"
          class="md:hidden flex flex-col gap-1.5 p-2 text-white/50 hover:text-white transition-colors"
          aria-label="Menu"
        >
          <span class="w-5 h-px bg-current transition-all duration-300" :class="{ 'rotate-45 translate-y-[7px]': isMenuOpen }"></span>
          <span class="w-5 h-px bg-current transition-all duration-300" :class="{ 'opacity-0': isMenuOpen }"></span>
          <span class="w-5 h-px bg-current transition-all duration-300" :class="{ '-rotate-45 -translate-y-[7px]': isMenuOpen }"></span>
        </button>
      </div>
    </div>

    <!-- Mobile overlay menu -->
    <Transition name="fade-menu">
      <div
        v-if="isMenuOpen"
        class="fixed inset-0 bg-[#030a16]/96 backdrop-blur-2xl z-[60] flex flex-col items-center justify-center gap-10"
      >
        <button @click="isMenuOpen = false" class="absolute top-7 right-8 text-[11px] font-label tracking-[0.25em] text-white/30 uppercase hover:text-white transition-colors">
          Tutup
        </button>
        <a
          v-for="link in navLinks"
          :key="link.name"
          :href="link.path"
          @click="isMenuOpen = false"
          class="font-heading text-4xl font-light text-white/60 hover:text-white transition-colors duration-400 tracking-tight"
        >
          {{ link.name }}
        </a>
        <a
          href="#contact"
          @click="isMenuOpen = false"
          class="mt-6 text-[11px] font-label tracking-[0.25em] text-sky-400/60 hover:text-sky-300 uppercase transition-colors"
        >
          Hubungi →
        </a>
      </div>
    </Transition>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isScrolled = ref(false)
const isMenuOpen = ref(false)

const navLinks = [
  { name: 'Projects', path: '#projects' },
  { name: 'Skills', path: '#skills' },
  { name: 'Experience', path: '#experience' },
  { name: 'Awards', path: '#awards' },
  { name: 'Education', path: '#education' },
]

const handleScroll = () => { isScrolled.value = window.scrollY > 40 }
onMounted(() => window.addEventListener('scroll', handleScroll))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>

<style scoped>
.fade-menu-enter-active,
.fade-menu-leave-active {
  transition: opacity 0.5s cubic-bezier(0.22, 1, 0.36, 1);
}
.fade-menu-enter-from,
.fade-menu-leave-to {
  opacity: 0;
}
</style>
