<template>
  <Transition name="loader">
    <div
      v-if="visible"
      class="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#030014]"
    >
      <div class="relative flex flex-col items-center">
        <!-- Minimal Logo / Text -->
        <div class="flex flex-col items-center mb-6">
          <span class="font-signature text-5xl md:text-6xl text-white mb-2 tracking-wide drop-shadow-md">
            Ananda
          </span>
          <span class="font-outfit text-[10px] font-bold uppercase tracking-[0.4em] text-blue-400 ml-1">
            Portofolio
          </span>
        </div>
        
        <!-- Ultra thin progress bar -->
        <div class="w-40 h-[1px] bg-white/10 overflow-hidden relative">
          <div
            class="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-[width] duration-200 ease-out"
            :style="{ width: progress + '%' }"
          ></div>
        </div>

        <!-- Elegant percentage -->
        <div class="font-mono text-[10px] text-gray-500 tracking-widest mt-4">
          {{ progress }}%
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
