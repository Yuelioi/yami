<script setup lang="ts">
import { ref } from "vue";

import DocsHeader from "../zcomp/DocsHeader.vue";
import ApiReference from "../zcomp/ApiReference.vue";
import DocsContainer from "../zcomp/DocsContainer.vue";
import DocsSection from "../zcomp/DocsSection.vue";

const isLoading = ref(false);

const handleClick = () => {
  isLoading.value = true;
  // 模拟异步操作
  setTimeout(() => {
    isLoading.value = false;
  }, 1500);
};

const apiClasses = [
  {
    category: "核心样式",
    className: "btn",
    description: "按钮基础样式，包含布局、大小、圆角、过渡和禁用状态。",
    isCategoryStart: true,
  },
  {
    category: "配色样式",
    className: "btn-primary",
    description: "主题色按钮。",
    isCategoryStart: true,
  },
  {
    category: "配色样式",
    className: "btn-secondary",
    description: "次要色按钮。",
    isCategoryStart: false,
  },
  {
    category: "配色样式",
    className: "btn-destructive",
    description: "危险/警告色按钮。",
    isCategoryStart: false,
  },
  {
    category: "配色样式",
    className: "btn-muted",
    description: "弱色/静音按钮。",
    isCategoryStart: false,
  },
  {
    category: "配色样式",
    className: "btn-accent",
    description: "强调色按钮。",
    isCategoryStart: false,
  },
  {
    category: "配色样式",
    className: "btn-link",
    description: "链接样式按钮。",
    isCategoryStart: false,
  },
  {
    category: "样式变体",
    className: "btn-outline",
    description: "描边样式按钮。",
    isCategoryStart: true,
  },
  {
    category: "样式变体",
    className: "btn-ghost",
    description: "透明背景按钮 (悬停时有背景)。",
    isCategoryStart: false,
  },
  {
    category: "尺寸/宽度",
    className: "btn-xs",
    description: "额外小尺寸 (h-6, px-2, text-xs)。",
    isCategoryStart: true,
  },
  {
    category: "尺寸/宽度",
    className: "btn-sm",
    description: "小尺寸 (h-8, px-3, text-sm)。",
    isCategoryStart: false,
  },
  {
    category: "尺寸/宽度",
    className: "btn-md",
    description: "中等尺寸 (h-10, px-4, text-sm) - 默认。",
    isCategoryStart: false,
  },
  {
    category: "尺寸/宽度",
    className: "btn-lg",
    description: "大尺寸 (h-12, px-5, text-base)。",
    isCategoryStart: false,
  },
  {
    category: "尺寸/宽度",
    className: "btn-xl",
    description: "额外大尺寸 (h-14, px-6, text-base)。",
    isCategoryStart: false,
  },

  {
    category: "尺寸/宽度",
    className: "btn-wide",
    description: "固定宽度的按钮 (max-w-64)。",
    isCategoryStart: false,
  },
  {
    category: "形状",
    className: "btn-square",
    description: "方形按钮 (移除横向内边距)。",
    isCategoryStart: true,
  },
  {
    category: "形状",
    className: "btn-circle",
    description: "圆形按钮 (rounded-full)。",
    isCategoryStart: false,
  },
  {
    category: "图标尺寸",
    className: "btn-icon-sm",
    description: "图标按钮-小尺寸 (size-8, p-0)。",
    isCategoryStart: true,
  },
  {
    category: "图标尺寸",
    className: "btn-icon",
    description: "图标按钮-默认尺寸 (size-10, p-0)。",
    isCategoryStart: false,
  },
  {
    category: "图标尺寸",
    className: "btn-icon-lg",
    description: "图标按钮-大尺寸 (size-12, p-0)。",
    isCategoryStart: false,
  },
  {
    category: "图标尺寸",
    className: "btn-icon-xl",
    description: "图标按钮-特大尺寸 (size-14, p-0)。",
    isCategoryStart: false,
  },
  {
    category: "扩展",
    className: "btn-hover",
    description: "悬停放大动画效果。",
    isCategoryStart: true,
  },
  {
    category: "扩展",
    className: "btn-spinner",
    description: "用于加载状态的 Spinner 动画。",
    isCategoryStart: false,
  },
];
</script>

<template>
  <DocsContainer>
    <DocsHeader title="按钮" description="允许用户执行操作或做出选择">
    </DocsHeader>

    <ApiReference :data="apiClasses"></ApiReference>

    <DocsSection title="基础用法与配色" class="w-64">
      <button class="btn btn-primary">Primary Button</button>
      <button class="btn btn-secondary">Secondary</button>
      <button class="btn btn-destructive">Destructive</button>
      <button class="btn btn-muted">Muted</button>
      <button class="btn btn-accent">Accent</button>
      <button class="btn btn-link">Link Button</button>
    </DocsSection>

    <DocsSection title="变体样式">
      <div class="space-y-4">
        <div class="flex flex-wrap items-end gap-4 p-6 border">
          <h3 class="w-full text-lg font-medium text-gray-600 mb-2">
            Outline 描边
          </h3>
          <button class="btn btn-outline">Outline Default</button>
          <button class="btn btn-outline btn-primary">Outline + Primary</button>
          <button class="btn btn-outline btn-destructive">
            Outline + Destructive
          </button>
        </div>

        <div class="flex flex-wrap items-end gap-4 p-6 border">
          <h3 class="w-full text-lg font-medium text-gray-600 mb-2">
            Ghost 透明 (+Primary = hover:primary)
          </h3>
          <button class="btn btn-ghost">Ghost Default</button>
          <button class="btn btn-ghost btn-primary">Ghost Primary</button>
          <button class="btn btn-ghost btn-destructive">
            Ghost Destructive
          </button>
        </div>
      </div>
    </DocsSection>

    <DocsSection title="尺寸/宽度">
      <div class="flex flex-wrap items-end gap-4 p-6">
        <button class="btn btn-primary btn-xs">Extra Small</button>
        <button class="btn btn-primary btn-sm">Small</button>
        <button class="btn btn-primary">Default</button>
        <button class="btn btn-primary btn-lg">Large</button>
        <button class="btn btn-primary btn-xl">Extra Large</button>
        <button class="btn btn-primary btn-wide">Wide</button>
      </div>
    </DocsSection>

    <DocsSection title="图标与扩展">
      <div class="flex flex-wrap items-end gap-4">
        <h3 class="w-full text-lg font-medium text-gray-600 mb-2">
          图标按钮 (Icon Buttons) / sm / md / lg / xl
        </h3>
        <button class="btn btn-primary btn-icon-sm">⚡</button>
        <button class="btn btn-primary btn-icon btn-icon-md">⭐</button>
        <button class="btn btn-primary btn-icon-lg">✨</button>
        <button class="btn btn-primary btn-icon-xl">🚀</button>
      </div>

      <div class="flex flex-wrap items-end gap-4 mt-6">
        <h3 class="w-full text-lg font-medium text-gray-600 mb-2">
          带图标的普通按钮
        </h3>
        <button class="btn btn-secondary">
          <svg
            class="size-4 rotate-180"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
          Go Back
        </button>
        <button class="btn btn-primary">
          Submit
          <svg
            class="size-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </DocsSection>

    <DocsSection title="拓展" class="w-64">
      <button class="btn btn-primary btn-hover">
        Hover Effect (.btn-hover)
      </button>

      <button
        class="btn btn-primary"
        :disabled="isLoading"
        @click="handleClick"
      >
        <template v-if="isLoading">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="btn-spinner size-4"
          >
            <path d="M21 12a9 9 0 1 1-6.219-8.56" />
          </svg>

          Loading...
        </template>
        <template v-else> Click to Load </template>
      </button>
    </DocsSection>
  </DocsContainer>
</template>
