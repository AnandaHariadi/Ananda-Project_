<template>
  <div class="fixed top-0 left-0 w-full h-1 z-[60] pointer-events-none">
    <div
      class="h-full bg-gradient-to-r from-purple-600 via-blue-600 to-purple-500 origin-left"
      :style="{ transform: `scaleX(${progress})` }"
    ></div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const progress = ref(0);
let ticking = false;

function update() {
  const h = document.documentElement;
  const scrollable = h.scrollHeight - h.clientHeight;
  progress.value = scrollable > 0 ? h.scrollTop / scrollable : 0;
  ticking = false;
}

function onScroll() {
  if (!ticking) {
    ticking = true;
    requestAnimationFrame(update);
  }
}

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true });
  update();
});
onUnmounted(() => window.removeEventListener('scroll', onScroll));
</script>
