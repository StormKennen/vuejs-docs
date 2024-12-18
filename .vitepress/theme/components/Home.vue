<script setup lang="ts">
import { onMounted } from 'vue'
import SiteMap from './SiteMap.vue'
// import NewsLetter from './NewsLetter.vue'
import { load, data, base } from './sponsors'
import SponsorsGroup from './SponsorsGroup.vue'
import { useData } from 'vitepress'

const data = useData()
const { lang } = data
console.log('!!!!!!!!!!!!!--lang', lang.value);

onMounted(load)
</script>

<!--
<script setup lang="ts">
import { onMounted } from 'vue'
import SiteMap from './SiteMap.vue'
import { useData } from 'vitepress'

const { lang } = useData()
</script> -->

<template>
  <div class="home-container">
    <!-- Hero Section -->
    <section id="hero" class="min-h-screen flex flex-col items-center justify-center relative">
      <!-- 背景动画效果 -->
      <div class="absolute inset-0 bg-gradient-to-br from-green-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
        <div class="absolute inset-0 bg-grid-slate-900/[0.04] dark:bg-grid-slate-400/[0.05]"></div>
      </div>

      <!-- Logo -->
      <div class="relative mb-8 animate-float">
        <div class="w-48 h-48 flex items-center justify-center">
          <img src="/logo.svg" alt="Vue.js Logo" class="w-full h-full" />
        </div>
      </div>

      <!-- 标题 -->
      <h1 class="text-6xl md:text-7xl font-bold text-center mb-6 relative">
        <span class="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-blue-500">
          The Progressive
        </span>
        <br />
        <span class="text-slate-800 dark:text-white">
          JavaScript Framework
        </span>
      </h1>

      <!-- 描述 -->
      <p class="text-xl text-slate-600 dark:text-slate-300 text-center max-w-2xl mb-12">
        An approachable, performant and versatile framework for building web user interfaces.
      </p>

      <!-- 按钮组 -->
      <div class="flex flex-wrap gap-4 justify-center z-1">
        <a href="/guide/introduction.html"
           class="px-6 py-3 rounded-full bg-gradient-to-r from-emerald-500 to-blue-500 text-white font-medium
                  hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center gap-2">
          Get Started
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
          </svg>
        </a>
        <a href="/guide/quick-start.html"
           class="px-6 py-3 rounded-full border-2 border-slate-200 dark:border-slate-700
                  hover:border-emerald-500 dark:hover:border-emerald-500
                  text-slate-600 dark:text-slate-300 font-medium
                  hover:text-emerald-500 dark:hover:text-emerald-500
                  hover:shadow-lg hover:scale-105 transition-all duration-300">
          Install
        </a>
      </div>

      <!-- 波浪动画 -->
      <div class="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-b from-transparent to-white dark:to-gray-900"></div>
    </section>

    <!-- Features Section -->
    <section class="py-20 px-4">
      <div class="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        <div class="feature-card">
          <div class="icon-wrapper bg-emerald-100 dark:bg-emerald-900">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h3 class="text-xl font-semibold mb-2">Approachable</h3>
          <p class="text-slate-600 dark:text-slate-400">
            Builds on top of standard HTML, CSS and JavaScript with intuitive API.
          </p>
        </div>
        <div class="feature-card">
          <div class="icon-wrapper bg-blue-100 dark:bg-blue-900">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h3 class="text-xl font-semibold mb-2">Performant</h3>
          <p class="text-slate-600 dark:text-slate-400">
            Truly reactive, compiler-optimized rendering system.
          </p>
        </div>
        <div class="feature-card">
          <div class="icon-wrapper bg-purple-100 dark:bg-purple-900">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h3 class="text-xl font-semibold mb-2">Versatile</h3>
          <p class="text-slate-600 dark:text-slate-400">
            A rich, incrementally adoptable ecosystem.
          </p>
        </div>
      </div>
    </section>

    <SiteMap />
  </div>
</template>

<style scoped>
.home-container {
  width: 100%;
  overflow-x: hidden;
}

.feature-card {
  @apply p-6 rounded-2xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300;
}

.icon-wrapper {
  @apply w-16 h-16 rounded-full flex items-center justify-center mb-4;
}

@keyframes float {
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
  100% {
    transform: translateY(0px);
  }
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}

/* 背景网格效果 */
.bg-grid-slate-900 {
  background-image: linear-gradient(currentColor 1px, transparent 1px),
    linear-gradient(to right, currentColor 1px, transparent 1px);
  background-size: 40px 40px;
}
</style>
