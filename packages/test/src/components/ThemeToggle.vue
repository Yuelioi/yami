<template>
  <!-- 主题切换 -->
  <label class="cursor-pointer inline-flex items-center">
    <input type="checkbox" class="hidden" v-model="checked" />

    <div v-if="checked">
      <!-- Sun icon -->
      <svg
        class="size-5 fill-current"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <g
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
        >
          <circle cx="12" cy="12" r="4" />
          <path
            d="M12 3v1m0 16v1m-9-9h1m16 0h1m-2.636-6.364l-.707.707M6.343 17.657l-.707.707m0-12.728l.707.707m11.314 11.314l.707.707"
          />
        </g>
      </svg>
    </div>

    <div v-else>
      <!-- Moon icon -->
      <svg
        class="size-5 fill-current"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"
        />
      </svg>
    </div>
  </label>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";

const THEME_KEY = "user-theme";
const savedTheme = localStorage.getItem(THEME_KEY);

// 初始化主题状态：true = dark, false = light
const checked = ref(savedTheme === "light" ? false : true);

// DOM 更新函数
const applyTheme = (isDark: boolean) => {
  const el = document.documentElement;
  if (!el) return;

  // 添加禁用过渡的类名
  el.classList.add("theme-transitioning");

  // 切换主题
  el.className = isDark
    ? "dark theme-transitioning"
    : "light theme-transitioning";
  el.setAttribute("data-theme", isDark ? "dark" : "light");

  // localStorage 写入
  localStorage.setItem(THEME_KEY, isDark ? "dark" : "light");

  // 强制浏览器重绘，确保类名生效
  el.offsetHeight;

  // 第一次 RAF：下一帧开始
  requestAnimationFrame(() => {
    // 这一帧：浏览器计算样式、布局
    // 主题切换的 DOM 更新发生

    // 第二次 RAF：再下一帧
    requestAnimationFrame(() => {
      // 这一帧：主题已经完全渲染完成
      // 现在可以安全地移除禁用类
      el.classList.remove("theme-transitioning");
    });
  });
};

// 初始应用主题
applyTheme(checked.value);

// 监听 checked.value 变化，自动更新 DOM
watch(checked, (newVal) => {
  applyTheme(newVal);
});
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
