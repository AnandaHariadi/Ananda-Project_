<template>
  <Transition name="loader">
    <div
      v-if="visible"
      class="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-white"
    >
      <!-- soft gradient glow -->
      <div class="absolute w-[420px] h-[420px] bg-gradient-to-tr from-purple-200/50 to-blue-200/40 rounded-full blur-[100px]"></div>

      <div class="relative flex flex-col items-center gap-8">
        <!-- spinning gradient ring -->
        <div class="relative w-20 h-20">
          <div class="absolute inset-0 rounded-full border-2 border-purple-100"></div>
          <div class="absolute inset-0 rounded-full border-2 border-transparent border-t-purple-600 border-r-blue-600 animate-spin-slow" style="animation-duration:1.1s"></div>
          <div class="absolute inset-0 flex items-center justify-center font-outfit font-black text-2xl gradient-text">A</div>
        </div>

        <p class="font-outfit font-bold text-lg tracking-[0.3em] uppercase shimmer-text">
          Loading
        </p>

        <!-- progress bar -->
        <div class="w-48 h-1 rounded-full bg-purple-100 overflow-hidden">
          <div
            class="h-full bg-gradient-to-r from-purple-600 to-blue-600 transition-[width] duration-200 ease-out"
            :style="{ width: progress + '%' }"
          ></div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const emit = defineEmits(['done']);
const visible = ref(true);
const progress = ref(0);

onMounted(() => {
  let value = 0;
  const tick = setInterval(() => {
    value += Math.max(4, (100 - value) * 0.18);
    progress.value = Math.min(100, Math.round(value));
    if (progress.value >= 100) {
      clearInterval(tick);
      setTimeout(() => {
        visible.value = false;
        emit('done');
      }, 350);
    }
  }, 90);
});
</script>

<style scoped>
.loader-leave-active {
  transition: opacity 0.6s ease, transform 0.6s ease;
}
.loader-leave-to {
  opacity: 0;
  transform: scale(1.04);
}
</style>
