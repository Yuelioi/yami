<template>
  <!-- 主题切换下拉选择器 -->
  <div class="relative min-w-32">
    <select
      v-model="selectedTheme"
      @change="applyTheme"
      class="select select-sm select-bordered bg-base-100 border-border text-base-content pr-8 pl-3 w-full appearance-none cursor-pointer"
    >
      <option v-for="theme in themes" :key="theme.value" :value="theme.value">
        {{ theme.label }}
      </option>
    </select>
    <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2">
      <svg class="size-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
      </svg>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const THEME_KEY = 'user-theme'

// 主题列表
const themes = [
  { value: 'light', label: '浅色' },
  { value: 'dark', label: '深色' },
  { value: 'github', label: 'GitHub' },
  { value: 'figma', label: 'Figma' },
  { value: 'apple', label: 'Apple' },
  { value: 'airbnb', label: 'Airbnb' },
  { value: 'discord', label: 'Discord' },
  { value: 'material', label: 'Material' },
  { value: 'linear', label: 'Linear' },
  { value: 'claude', label: 'Claude' },
  { value: 'spotify-dark', label: 'Spotify (深色)' },
  { value: 'spotify-light', label: 'Spotify (浅色)' },
  { value: 'vscode', label: 'VSCode' },
  { value: 'x', label: 'X' },
  { value: 'notion-dark', label: 'Notion (深色)' },
  { value: 'notion-light', label: 'Notion (浅色)' },
  { value: 'slack-dark', label: 'Slack (深色)' },
  { value: 'slack-light', label: 'Slack (浅色)' },
  { value: 'stripe-dark', label: 'Stripe (深色)' },
  { value: 'stripe-light', label: 'Stripe (浅色)' },
  { value: 'vercel', label: 'Vercel' },
]

// 当前选中的主题
const selectedTheme = ref('light')

// 动态加载CSS主题文件
const loadThemeCSS = (theme: string) => {
  // 移除之前加载的主题CSS
  const existingLink = document.getElementById('theme-css')
  if (existingLink) {
    existingLink.remove()
  }

  // 动态创建link标签加载主题CSS
  const link = document.createElement('link')
  link.id = 'theme-css'
  link.rel = 'stylesheet'

  // 使用正确的路径 - 假设主题文件在public/themes目录下
  // 或者通过构建工具复制到dist目录
  link.href = `/themes/${theme}.css`
  document.head.appendChild(link)
}

// 应用主题
const applyTheme = () => {
  const el = document.documentElement
  if (!el) return

  // 添加禁用过渡的类名
  el.classList.add('theme-transitioning')

  // 加载对应的CSS文件
  loadThemeCSS(selectedTheme.value)

  // 设置data-theme属性
  el.setAttribute('data-theme', selectedTheme.value)

  // 根据主题设置light/dark类
  if (selectedTheme.value.includes('dark')) {
    el.className = 'dark theme-transitioning'
  } else if (selectedTheme.value.includes('light')) {
    el.className = 'light theme-transitioning'
  } else {
    // 对于其他主题，根据名称判断
    const isDarkTheme =
      selectedTheme.value === 'dark' ||
      selectedTheme.value.endsWith('-dark') ||
      ['spotify', 'vscode', 'x'].includes(selectedTheme.value)
    el.className = isDarkTheme ? 'dark theme-transitioning' : 'light theme-transitioning'
  }

  // localStorage 写入
  localStorage.setItem(THEME_KEY, selectedTheme.value)

  // 强制浏览器重绘，确保类名生效
  el.offsetHeight

  // 第一次 RAF：下一帧开始
  requestAnimationFrame(() => {
    // 第二次 RAF：再下一帧
    requestAnimationFrame(() => {
      // 现在可以安全地移除禁用类
      el.classList.remove('theme-transitioning')
    })
  })
}

// 初始化
onMounted(() => {
  const savedTheme = localStorage.getItem(THEME_KEY)
  if (savedTheme && themes.some((t) => t.value === savedTheme)) {
    selectedTheme.value = savedTheme
  }
  applyTheme()
})
</script>

<style>
/* 全局样式：禁用主题切换时的所有过渡 */
.theme-transitioning,
.theme-transitioning *,
.theme-transitioning *::before,
.theme-transitioning *::after {
  transition: none !important;
  animation: none !important;
}
</style>
