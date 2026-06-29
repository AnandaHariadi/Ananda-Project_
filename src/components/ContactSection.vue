<template>
  <section id="contact" class="py-24 md:py-32 relative overflow-hidden z-10">
    <!-- Center animated background -->
    <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-fuchsia-900/20 via-[#030014] to-[#030014] pointer-events-none blur-[120px] opacity-60 animate-pulse"></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
      
      <!-- Section Header -->
      <div class="text-center mb-16 md:mb-24" v-reveal>
        <div class="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-white/5 backdrop-blur-md border border-white/10 mb-6 shadow-[0_0_15px_rgba(255,255,255,0.02)]">
          <span class="relative flex h-2 w-2">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span class="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span class="text-gray-300 text-sm font-medium tracking-wide uppercase">Open to Opportunities</span>
        </div>
        <h2 class="text-4xl md:text-5xl font-outfit font-black tracking-tight text-white mb-4">
          Let's <span class="bg-gradient-to-r from-fuchsia-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">Connect</span>
        </h2>
        <div class="w-16 h-1.5 bg-gradient-to-r from-fuchsia-500 to-indigo-500 mx-auto rounded-full mb-6"></div>
        <p class="text-gray-400 font-light text-lg max-w-2xl mx-auto">
          I'm currently available for new projects, roles, or collaborations. Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>
      </div>

      <!-- Main Layout: 2 Columns -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start" v-reveal="150">
        
        <!-- Left Column: Contact Info & Cards -->
        <div class="lg:col-span-5 flex flex-col gap-10">
          
          <!-- Socials -->
          <div>
            <h3 class="text-xl font-semibold text-white mb-6 font-outfit">Connect With Me</h3>
            <div class="flex gap-4">
              <a
                v-for="s in socials"
                :key="s.name"
                :href="s.href"
                target="_blank"
                :aria-label="s.name"
                class="group flex items-center justify-center w-14 h-14 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-110 hover:-translate-y-1 shadow-lg"
              >
                <svg class="w-6 h-6 group-hover:drop-shadow-[0_0_8px_currentColor]" fill="currentColor" viewBox="0 0 24 24"><path :d="s.icon" /></svg>
              </a>
            </div>
          </div>

          <!-- CV Download Card -->
          <a href="/assets/CV_Muhammad_Ananda_Hariadi_2026.pdf" target="_blank" class="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-900/40 to-purple-900/40 border border-white/10 p-6 flex items-center justify-between hover:border-indigo-400/50 transition-all duration-300 shadow-xl">
            <div class="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-indigo-400/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div class="relative z-10">
              <h4 class="text-lg font-semibold text-white mb-1 group-hover:text-indigo-300 transition-colors">Resume</h4>
              <p class="text-indigo-200/70 text-sm">View my detailed experience.</p>
            </div>
            <div class="relative z-10 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white group-hover:bg-indigo-500 group-hover:scale-110 transition-all duration-300 shadow-lg">
              <svg class="w-5 h-5 group-hover:translate-y-0.5 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
            </div>
          </a>

          <!-- Location / Availability Card (Fills space) -->
          <div class="group relative overflow-hidden rounded-2xl bg-white/5 border border-white/10 p-6 flex flex-col hover:bg-white/10 transition-all duration-300 shadow-lg mt-2">
            <div class="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            
            <div class="relative z-10 flex items-center justify-between mb-4">
              <h4 class="text-xs font-semibold text-gray-400 uppercase tracking-widest">Current Location</h4>
              <div class="flex items-center gap-2 px-2 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                <span class="relative flex h-2 w-2">
                  <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span class="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span class="text-[10px] text-emerald-400 font-bold uppercase tracking-wide">Available</span>
              </div>
            </div>
            
            <div class="relative z-10 flex items-end gap-3 mt-1">
              <span class="text-2xl font-bold text-white tracking-wide drop-shadow-md">Sidoarjo</span>
              <span class="text-emerald-400 font-medium mb-1 text-sm">Indonesia</span>
            </div>
            
            <p class="relative z-10 text-gray-500 text-sm mt-4 flex items-center gap-2">
              <svg class="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              GMT+7 / WIB Timezone
            </p>
          </div>

        </div>

        <!-- Right Column: Form -->
        <div class="lg:col-span-7">
          <div class="bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-3xl p-8 sm:p-10 shadow-2xl relative overflow-hidden group/form">
            
            <h3 class="text-2xl font-bold text-white mb-8 font-outfit">
              Send a Message
            </h3>

            <form @submit.prevent="submitForm" class="space-y-6 relative z-10">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <!-- Name -->
                <div class="space-y-2">
                  <label for="name" class="block text-sm font-medium text-gray-300">Your Name</label>
                  <input type="text" id="name" required class="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-fuchsia-500/50 focus:border-fuchsia-500/50 transition-all duration-300 hover:border-white/20" placeholder="John Doe">
                </div>
                <!-- Email -->
                <div class="space-y-2">
                  <label for="email" class="block text-sm font-medium text-gray-300">Email Address</label>
                  <input type="email" id="email" required class="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-fuchsia-500/50 focus:border-fuchsia-500/50 transition-all duration-300 hover:border-white/20" placeholder="john@example.com">
                </div>
              </div>

              <!-- Subject -->
              <div class="space-y-2">
                <label for="subject" class="block text-sm font-medium text-gray-300">Subject</label>
                <input type="text" id="subject" required class="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-fuchsia-500/50 focus:border-fuchsia-500/50 transition-all duration-300 hover:border-white/20" placeholder="How can we collaborate?">
              </div>

              <!-- Message -->
              <div class="space-y-2">
                <label for="message" class="block text-sm font-medium text-gray-300">Message</label>
                <textarea id="message" rows="5" required class="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-fuchsia-500/50 focus:border-fuchsia-500/50 transition-all duration-300 resize-none hover:border-white/20" placeholder="Tell me about your project..."></textarea>
              </div>

              <!-- Submit Button -->
              <button type="submit" :disabled="isSubmitting" class="w-full relative overflow-hidden rounded-xl bg-gradient-to-r from-fuchsia-600 to-indigo-600 p-[1px] group/btn mt-4 shadow-lg hover:shadow-fuchsia-500/25 transition-shadow duration-300 disabled:opacity-70 disabled:cursor-not-allowed">
                <div class="absolute inset-0 bg-gradient-to-r from-fuchsia-500 to-indigo-500 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                <div class="relative bg-[#030014] rounded-xl px-6 py-4 flex items-center justify-center gap-3 transition-all duration-300 group-hover/btn:bg-opacity-0">
                  <span class="font-semibold text-white tracking-wide" v-if="!isSubmitting">Send Message</span>
                  <span class="font-semibold text-white tracking-wide" v-else>Sending...</span>
                  
                  <svg v-if="!isSubmitting" class="w-5 h-5 text-white group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path></svg>
                  
                  <svg v-else class="animate-spin w-5 h-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                </div>
              </button>
              
              <!-- Form Success Message -->
              <div v-if="showSuccess" class="mt-4 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm flex items-center gap-3 animate-fade-in">
                <svg class="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                Message sent successfully! I'll get back to you soon.
              </div>
            </form>

          </div>
        </div>

      </div>

      <!-- footer -->
      <div v-reveal class="mt-20 pt-8 border-t border-white/10 flex items-center justify-center text-gray-500 text-sm font-medium relative z-20">
        <p>&copy; 2026 Muhammad Ananda Hariadi.</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';

const isSubmitting = ref(false);
const showSuccess = ref(false);

const submitForm = () => {
  isSubmitting.value = true;
  setTimeout(() => {
    isSubmitting.value = false;
    showSuccess.value = true;
    setTimeout(() => {
      showSuccess.value = false;
    }, 5000);
    document.querySelectorAll('#contact input, #contact textarea').forEach(el => el.value = '');
  }, 1500);
};

const socials = [
  {
    name: 'Gmail',
    href: 'mailto:anandahariadi88@gmail.com',
    icon: 'M20 18h-2V9.25L12 13 6 9.25V18H4V6h1.2l6.8 4.25L18.8 6H20m0-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2z',
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/anandahariadi/',
    icon: 'M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z',
  },
  {
    name: 'GitHub',
    href: 'https://github.com/AnandaHariadi',
    icon: 'M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z',
  },
];
</script>

<style scoped>
.animate-fade-in {
  animation: fadeIn 0.4s ease-out forwards;
}
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>
