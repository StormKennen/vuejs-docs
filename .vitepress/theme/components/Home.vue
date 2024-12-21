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
    <section id="hero" class="min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
      <!-- 动态背景 -->
      <div class="absolute inset-0">
        <div class="cyber-grid"></div>
        <div class="cyber-particles"></div>
      </div>

      <!-- Logo 区域 -->
      <div class="relative mb-8 animate-float">
        <div class="logo-wrapper">
          <img src="/logo.svg" alt="Hunt API Logo" class="w-32 h-32 logo-image" />
          <div class="logo-scanner"></div>
        </div>
      </div>

      <!-- 标题 -->
      <h1 class="cyber-text text-5xl md:text-7xl font-bold text-center mb-6 relative">
        <span class="glitch-text" data-text="狩术 - 爬虫逆向常用 API">
          狩术 - 爬虫逆向常用 API
        </span>
      </h1>

      <!-- 描述文字 -->
      <p class="cyber-description text-xl text-slate-300 text-center max-w-2xl mb-12 relative">
        <span class="typing-text">专业的爬虫逆向工具集，让数据采集更简单</span>
      </p>

      <!-- 按钮组 -->
      <div class="flex flex-wrap gap-4 justify-center z-1">
        <a href="/guide/introduction.html" class="cyber-button primary">
          <span class="cyber-button-text">开始探索</span>
          <div class="cyber-button-glitch"></div>
        </a>
        <a href="/guide/quick-start.html" class="cyber-button secondary">
          <span class="cyber-button-text">快速安装</span>
          <div class="cyber-button-glitch"></div>
        </a>
      </div>

      <!-- 装饰性元素 -->
      <div class="tech-circles"></div>
    </section>

    <!-- Features Section -->
    <section class="py-20 px-4 features-section">
      <div class="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        <!-- 网络请求卡片 -->
        <div class="cyber-card">
          <div class="card-content">
            <div class="icon-container">
              <div class="hex-border">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
            </div>
            <h3 class="card-title">网络请求</h3>
            <p class="card-description">
              各种语言、各种框架、各种库的 GET、POST、添加代理、修改 TLS 指纹等
            </p>
            <div class="card-glow"></div>
            <div class="card-border"></div>
          </div>
        </div>

        <!-- 数据处理卡片 -->
        <div class="cyber-card">
          <div class="card-content">
            <div class="icon-container">
              <div class="hex-border">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                </svg>
              </div>
            </div>
            <h3 class="card-title">数据处理</h3>
            <p class="card-description">
              数据解析提取、清洗去重、自然语言处理、分词统计、绘图制表、各种数据库存储等
            </p>
            <div class="card-glow"></div>
            <div class="card-border"></div>
          </div>
        </div>

        <!-- 辅助查询卡片 -->
        <div class="cyber-card">
          <div class="card-content">
            <div class="icon-container">
              <div class="hex-border">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
              </div>
            </div>
            <h3 class="card-title">辅助查询</h3>
            <p class="card-description">
              JS Hook、Frida Api、ADB 命令、ARM 指令集、Linux 命令、浏览器指纹等
            </p>
            <div class="card-glow"></div>
            <div class="card-border"></div>
          </div>
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
  background-color: #0a0a0a;
}

:root[class~="dark"] .home-container {
  background-color: #0a0a0a;
}

.home-container {
  background-color: #f8f9fa;
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

.logo-container {
  margin: 2rem 0;
}

.text-logo {
  font-size: 4rem;
  font-weight: 800;
  line-height: 1.5;
  text-transform: lowercase;
  background: linear-gradient(45deg, #12c2e9, #c471ed, #f64f59);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  animation: glow 2s ease-in-out infinite alternate;
  text-shadow: 0 0 10px rgba(255,255,255,0.3);
}

@keyframes glow {
  from {
    filter: drop-shadow(0 0 2px rgba(196,113,237,0.6));
  }
  to {
    filter: drop-shadow(0 0 6px rgba(196,113,237,0.9));
  }
}

/* 赛博朋克网格背景 */
.cyber-grid {
  position: absolute;
  inset: 0;
  background-image: 
    linear-gradient(to right, #1a1a1a 1px, transparent 1px),
    linear-gradient(to bottom, #1a1a1a 1px, transparent 1px);
  background-size: 30px 30px;
  opacity: 0.3;
  animation: grid-move 20s linear infinite;
}

@keyframes grid-move {
  0% { transform: translateY(0); }
  100% { transform: translateY(30px); }
}

/* 粒子效果 */
.cyber-particles {
  position: absolute;
  inset: 0;
  background-image: radial-gradient(#2196f3 1px, transparent 1px);
  background-size: 50px 50px;
  animation: particles-float 10s linear infinite;
}

@keyframes particles-float {
  0% { transform: translateY(0); }
  100% { transform: translateY(-50px); }
}

/* Logo 样式 */
.logo-wrapper {
  position: relative;
  padding: 2rem;
}

.logo-glitch {
  font-size: 3.5rem;
  font-weight: 900;
  color: #2196f3;
  text-shadow: 
    0 0 10px rgba(33, 150, 243, 0.8),
    0 0 20px rgba(33, 150, 243, 0.4);
  position: relative;
}

.logo-glitch::before,
.logo-glitch::after {
  content: attr(data-text);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.logo-glitch::before {
  left: 2px;
  color: #ff0000;
  animation: glitch 2s infinite linear alternate-reverse;
}

.logo-glitch::after {
  left: -2px;
  color: #00ff00;
  animation: glitch 3s infinite linear alternate-reverse;
}

/* 扫描线效果 */
.logo-scanner {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(to right, transparent, #2196f3, transparent);
  animation: scan 2s ease-in-out infinite;
}

@keyframes scan {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(100%); }
}

/* 赛博朋克按钮 */
.cyber-button {
  position: relative;
  padding: 1rem 2rem;
  border: 2px solid;
  overflow: hidden;
  transition: all 0.3s;
  transform: skew(-10deg);
}

.cyber-button.primary {
  border-color: #2196f3;
  background: rgba(33, 150, 243, 0.1);
}

.cyber-button.secondary {
  border-color: #00bcd4;
  background: rgba(0, 188, 212, 0.1);
}

.cyber-button-text {
  display: block;
  transform: skew(10deg);
  font-weight: bold;
}

.cyber-button:hover {
  background: rgba(33, 150, 243, 0.2);
  box-shadow: 0 0 20px rgba(33, 150, 243, 0.5);
}

/* 打字机效果 */
.typing-text {
  border-right: 2px solid #2196f3;
  animation: typing 3.5s steps(40, end),
             blink-caret .75s step-end infinite;
  white-space: nowrap;
  overflow: hidden;
}

@keyframes typing {
  from { width: 0 }
  to { width: 100% }
}

@keyframes blink-caret {
  from, to { border-color: transparent }
  50% { border-color: #2196f3 }
}

/* 装���性圆圈 */
.tech-circles {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 200px;
  background: 
    radial-gradient(circle at 10% 90%, rgba(33, 150, 243, 0.1) 0%, transparent 60%),
    radial-gradient(circle at 90% 90%, rgba(0, 188, 212, 0.1) 0%, transparent 60%);
}

/* 故障效果 */
@keyframes glitch {
  0% { transform: translate(0); }
  20% { transform: translate(-2px, 2px); }
  40% { transform: translate(-2px, -2px); }
  60% { transform: translate(2px, 2px); }
  80% { transform: translate(2px, -2px); }
  100% { transform: translate(0); }
}

/* 新增的样式 */
.features-section {
  position: relative;
  z-index: 1;
}

:root[class~="dark"] .features-section {
  background-color: #0a0a0a;
}

.features-section {
  background-color: #f8f9fa;
}

.cyber-card {
  position: relative;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 12px;
  padding: 2rem;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  overflow: hidden;
  box-shadow: 0 8px 32px rgba(31, 38, 135, 0.15);
}

:root[class~="dark"] .cyber-card {
  background: rgba(16, 16, 16, 0.8);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
}

.card-content {
  position: relative;
  z-index: 2;
}

.icon-container {
  margin-bottom: 1.5rem;
}

.hex-border {
  width: 64px;
  height: 64px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #0056b3;
  background: rgba(0, 86, 179, 0.1);
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
  transition: all 0.3s ease;
}

:root[class~="dark"] .hex-border {
  color: #2196f3;
  background: rgba(33, 150, 243, 0.1);
}

.hex-border::before {
  content: '';
  position: absolute;
  inset: 1px;
  background: #ffffff;
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
  z-index: -1;
}

:root[class~="dark"] .hex-border::before {
  background: #0a0a0a;
}

.card-title {
  color: #0056b3;
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  text-shadow: 0 0 10px rgba(0, 86, 179, 0.3);
}

:root[class~="dark"] .card-title {
  color: #2196f3;
  text-shadow: 0 0 10px rgba(33, 150, 243, 0.5);
}

.card-description {
  color: #4a5568;
  line-height: 1.6;
  font-size: 1rem;
}

:root[class~="dark"] .card-description {
  color: #a0aec0;
}

.card-glow {
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at 50% 50%, 
    rgba(0, 86, 179, 0.1), 
    transparent 50%);
  opacity: 0;
  transition: opacity 0.3s ease;
}

:root[class~="dark"] .card-glow {
  background: radial-gradient(circle at 50% 50%, 
    rgba(33, 150, 243, 0.1), 
    transparent 50%);
}

.card-border {
  position: absolute;
  inset: 0;
  border: 2px solid transparent;
  border-radius: 12px;
  background: linear-gradient(45deg, 
    transparent 25%, 
    rgba(0, 86, 179, 0.3) 50%, 
    transparent 75%
  ) border-box;
  mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: destination-out;
  mask-composite: exclude;
}

:root[class~="dark"] .card-border {
  background: linear-gradient(45deg, 
    transparent 25%, 
    rgba(33, 150, 243, 0.3) 50%, 
    transparent 75%
  ) border-box;
}

.cyber-card:hover {
  transform: translateY(-5px);
}

:root[class~="dark"] .cyber-card:hover {
  box-shadow: 0 8px 32px rgba(33, 150, 243, 0.2);
}

.cyber-card:hover .card-glow {
  opacity: 1;
}

.cyber-card:hover .hex-border {
  background: rgba(0, 86, 179, 0.2);
}

:root[class~="dark"] .cyber-card:hover .hex-border {
  background: rgba(33, 150, 243, 0.2);
}

.cyber-card:hover .card-title {
  text-shadow: 0 0 20px rgba(0, 86, 179, 0.6);
}

:root[class~="dark"] .cyber-card:hover .card-title {
  text-shadow: 0 0 20px rgba(33, 150, 243, 0.8);
}

/* 添加扫描线动画 */
.cyber-card::after {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: linear-gradient(
    to bottom,
    transparent,
    transparent 50%,
    rgba(0, 86, 179, 0.1) 50%,
    transparent 51%,
    transparent
  );
  background-size: 100% 4px;
  animation: scan 4s linear infinite;
  opacity: 0;
  transition: opacity 0.3s ease;
}

:root[class~="dark"] .cyber-card::after {
  background: linear-gradient(
    to bottom,
    transparent,
    transparent 50%,
    rgba(33, 150, 243, 0.1) 50%,
    transparent 51%,
    transparent
  );
}

.cyber-card:hover::after {
  opacity: 1;
}

@keyframes scan {
  0% {
    transform: rotate(45deg) translateY(-100%);
  }
  100% {
    transform: rotate(45deg) translateY(0);
  }
}

.logo-image {
  filter: drop-shadow(0 0 10px rgba(33, 150, 243, 0.5));
  transition: filter 0.3s ease;
}

:root[class~="dark"] .logo-image {
  filter: drop-shadow(0 0 15px rgba(33, 150, 243, 0.7));
}

.logo-wrapper:hover .logo-image {
  filter: drop-shadow(0 0 20px rgba(33, 150, 243, 0.8));
}

:root[class~="dark"] .logo-wrapper:hover .logo-image {
  filter: drop-shadow(0 0 25px rgba(33, 150, 243, 1));
}
</style>
