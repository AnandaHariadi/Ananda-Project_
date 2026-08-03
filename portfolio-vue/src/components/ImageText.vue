<template>
  <section class="py-32">
    <div class="container mx-auto px-6">
      <div class="grid md:grid-cols-2 gap-16 items-center">
        <!-- Image -->
        <div class="relative group">
          <div class="aspect-[4/5] bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl overflow-hidden group-hover:scale-105 transition-all duration-500">
            <img 
              :src="image" 
              :alt="title"
              class="w-full h-full object-cover group-hover:grayscale-0 grayscale transition-all duration-500"
            >
            <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
        </div>
        
        <!-- Text -->
        <div class="space-y-6">
          <h3 class="text-4xl font-heading">{{ title }}</h3>
          <div v-html="content" class="text-slate-400 leading-relaxed space-y-4 prose prose-invert max-w-none"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  title: String,
  image: String,
  content: String
})
</script>

