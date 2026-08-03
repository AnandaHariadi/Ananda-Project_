<template>
  <section class="py-32">
    <div class="container mx-auto px-6">
      <div class="max-w-4xl mx-auto text-center space-y-8">
        <h2 class="text-4xl md:text-5xl font-heading">{{ title }}</h2>
        <p class="text-xl text-slate-400 leading-relaxed">{{ description }}</p>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  title: String,
  description: String
})
</script>

