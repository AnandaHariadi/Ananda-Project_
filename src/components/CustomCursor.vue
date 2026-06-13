<template>
  <div v-if="enabled">
    <div ref="dot" class="cursor-dot" :style="{ opacity: hidden ? 0 : 1 }"></div>
    <div ref="ring" class="cursor-ring" :class="{ 'is-hover': hovering }" :style="{ opacity: hidden ? 0 : 1 }"></div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const enabled = ref(false);
const hidden = ref(true);
const hovering = ref(false);
const dot = ref(null);
const ring = ref(null);

let mouseX = 0, mouseY = 0;
let ringX = 0, ringY = 0;
let raf = null;

const interactiveSelector = 'a, button, [data-cursor], input, textarea, .group';

function onMove(e) {
  hidden.value = false;
  mouseX = e.clientX;
  mouseY = e.clientY;
  if (dot.value) dot.value.style.transform = `translate(${mouseX - 4}px, ${mouseY - 4}px)`;
}

function onOver(e) {
  hovering.value = !!(e.target.closest && e.target.closest(interactiveSelector));
}

function onLeaveWindow() {
  hidden.value = true;
}

function loop() {
  ringX += (mouseX - ringX) * 0.18;
  ringY += (mouseY - ringY) * 0.18;
  if (ring.value) ring.value.style.transform = `translate(${ringX - 19}px, ${ringY - 19}px)`;
  raf = requestAnimationFrame(loop);
}

onMounted(() => {
  // desktop / fine-pointer only
  if (window.matchMedia('(pointer: fine)').matches) {
    enabled.value = true;
    document.body.classList.add('has-custom-cursor');
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseover', onOver);
    document.addEventListener('mouseleave', onLeaveWindow);
    loop();
  }
});

onUnmounted(() => {
  document.body.classList.remove('has-custom-cursor');
  window.removeEventListener('mousemove', onMove);
  window.removeEventListener('mouseover', onOver);
  document.removeEventListener('mouseleave', onLeaveWindow);
  if (raf) cancelAnimationFrame(raf);
});
</script>
