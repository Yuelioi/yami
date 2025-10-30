<script setup lang="ts">
import DocsHeader from "../zcomp/DocsHeader.vue";
import DocsSection from "../zcomp/DocsSection.vue";
import ApiReference from "../zcomp/ApiReference.vue";

const apiClasses = [
  // === 基础 ===
  {
    category: "基础",
    className: "toggle",
    description: "切换开关基类，定义轨道、按钮及选中状态动画。",
    isCategoryStart: true,
  },
  {
    category: "基础",
    className: "toggle::before",
    description: "开关按钮，圆形，支持动画移动。",
    isCategoryStart: false,
  },

  // === 配色方案 ===
  {
    category: "配色方案",
    className: "toggle-primary",
    description: "选中状态使用 Primary 主题色。",
    isCategoryStart: true,
  },
  {
    category: "配色方案",
    className: "toggle-secondary",
    description: "选中状态使用 Secondary 主题色。",
    isCategoryStart: false,
  },
  {
    category: "配色方案",
    className: "toggle-accent",
    description: "选中状态使用 Accent 主题色。",
    isCategoryStart: false,
  },

  // === 尺寸 ===
  {
    category: "尺寸",
    className: "toggle-xs",
    description: "超小尺寸切换开关。",
    isCategoryStart: true,
  },
  {
    category: "尺寸",
    className: "toggle-sm",
    description: "小号切换开关。",
    isCategoryStart: false,
  },
  {
    category: "尺寸",
    className: "toggle-md",
    description: "中号切换开关（默认）。",
    isCategoryStart: false,
  },
  {
    category: "尺寸",
    className: "toggle-lg",
    description: "大号切换开关。",
    isCategoryStart: false,
  },
];
</script>

<template>
  <div class="p-8 space-y-12 min-h-screen">
    <DocsHeader
      title="Toggle 切换开关组件"
      description="切换开关组件，用于开/关状态的选择，支持多种尺寸与颜色主题。"
    />

    <ApiReference :data="apiClasses" />

    <!-- 基础示例 -->
    <DocsSection title="基础示例">
      <div class="flex gap-6 items-center">
        <input type="checkbox" class="toggle" />
        <input type="checkbox" class="toggle toggle-primary" checked />
        <input type="checkbox" class="toggle toggle-secondary" />
        <input type="checkbox" class="toggle toggle-accent" checked />
        <input type="checkbox" class="toggle toggle-destructive" checked />
      </div>
    </DocsSection>

    <!-- 尺寸示例 -->
    <DocsSection title="尺寸示例">
      <div class="flex gap-6 items-center">
        <input type="checkbox" class="toggle toggle-xs" checked />
        <input type="checkbox" class="toggle toggle-sm" />
        <input type="checkbox" class="toggle toggle-md" checked />
        <input type="checkbox" class="toggle toggle-lg" />
      </div>
    </DocsSection>
  </div>
</template>
