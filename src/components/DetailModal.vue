<template>
  <Transition name="modal">
    <div v-if="ui.detailModalOpen && ui.activeDetailItem" class="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6" @keydown.esc="close">
      <!-- Backdrop -->
      <div class="absolute inset-0 bg-[#030014]/80 backdrop-blur-sm transition-opacity" @click="close"></div>

      <!-- Modal Content -->
      <div class="relative w-full max-w-3xl bg-[#0a051c] rounded-[2.5rem] shadow-2xl border border-white/10 overflow-hidden transform transition-all flex flex-col max-h-[90vh]">
        <!-- Header Image / Gradient -->
        <div :class="['relative h-48 md:h-64 flex-shrink-0 bg-gradient-to-br', ui.activeDetailItem.gradient || 'from-purple-600 to-blue-600']">
          <div class="absolute inset-0 bg-[radial-gradient(circle,_rgba(255,255,255,0.2)_1px,_transparent_1px)] [background-size:20px_20px] opacity-30"></div>
          
          <!-- Image if available -->
          <img v-if="ui.activeDetailItem.image" :src="ui.activeDetailItem.image" :alt="ui.activeDetailItem.title || ui.activeDetailItem.org" class="absolute inset-0 w-full h-full object-cover" />
          <!-- legibility fade so the close button + rounded header read cleanly -->
          <div v-if="ui.activeDetailItem.image" class="absolute inset-0 bg-gradient-to-t from-[#0a051c] via-transparent to-black/20"></div>
          
          <button @click="close" class="absolute top-4 right-4 md:top-6 md:right-6 w-10 h-10 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center text-white/80 hover:text-white hover:bg-black/60 transition-colors border border-white/10">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M6 18L18 6M6 6l12 12"></path></svg>
          </button>
        </div>

        <!-- Body -->
        <div class="p-6 md:p-10 overflow-y-auto custom-scrollbar">
          <div class="flex flex-wrap gap-2 mb-4">
            <span class="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-bold text-purple-300 uppercase tracking-wider">
              {{ ui.activeDetailItem.tag || ui.activeDetailItem.event || 'Detail' }}
            </span>
            <span v-if="ui.activeDetailItem.period" class="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-gray-400">
              {{ ui.activeDetailItem.period }}
            </span>
          </div>

          <h2 class="text-3xl md:text-5xl font-outfit font-black text-white mb-2 leading-tight">
            {{ ui.activeDetailItem.title || ui.activeDetailItem.org }}
          </h2>
          
          <p v-if="ui.activeDetailItem.role" class="text-xl text-purple-400 font-medium mb-6">
            {{ ui.activeDetailItem.role }}
          </p>

          <div class="prose prose-invert prose-lg max-w-none mb-8">
            <p class="text-gray-300 leading-relaxed font-light whitespace-pre-wrap">{{ ui.activeDetailItem.description || ui.activeDetailItem.summary }}</p>
          </div>

          <div v-if="ui.activeDetailItem.tags" class="flex flex-wrap gap-2 mb-8">
            <span v-for="tag in ui.activeDetailItem.tags" :key="tag" class="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-gray-300 text-sm font-semibold">
              {{ tag }}
            </span>
          </div>

          <div v-if="ui.activeDetailItem.link" class="pt-6 border-t border-white/10">
            <a :href="ui.activeDetailItem.link" target="_blank" class="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-brand text-white font-bold text-lg shadow-[0_10px_30px_rgba(109,40,217,0.3)] hover:shadow-[0_15px_40px_rgba(109,40,217,0.5)] transition-shadow group">
              View Live Project
              <svg class="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue';
import { ui, closeDetail } from '../store.js';

function close() {
  closeDetail();
}

function onKey(e) {
  if (e.key === 'Escape' && ui.detailModalOpen) close();
}

onMounted(() => {
  window.addEventListener('keydown', onKey);
});
onUnmounted(() => {
  window.removeEventListener('keydown', onKey);
});
</script>

<style scoped>
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.4s ease;
}
.modal-enter-active .transform,
.modal-leave-active .transform {
  transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.4s ease;
}
.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}
.modal-enter-from .transform {
  opacity: 0;
  transform: scale(0.95) translateY(20px);
}
.modal-leave-to .transform {
  opacity: 0;
  transform: scale(0.95) translateY(20px);
}

.custom-scrollbar::-webkit-scrollbar { width: 8px; }
.custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
.custom-scrollbar::-webkit-scrollbar-thumb {
  background: rgba(255,255,255,0.1);
  border-radius: 9999px;
}
.custom-scrollbar::-webkit-scrollbar-thumb:hover {
  background: rgba(255,255,255,0.2);
}
</style>
