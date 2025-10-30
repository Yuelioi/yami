<script setup lang="ts">
import DocsHeader from "../zcomp/DocsHeader.vue";
import ApiReference from "../zcomp/ApiReference.vue";
import DocsContainer from "../zcomp/DocsContainer.vue";
import DocsSection from "../zcomp/DocsSection.vue";

// Kbd API Classes
const apiClasses = [
  // 基础
  {
    category: "基础",
    className: "kbd",
    description: "键盘按键容器基础样式。",
    isCategoryStart: true,
  },

  // 样式变体
  {
    category: "样式变体",
    className: "kbd-muted",
    description: "默认浅色按键样式。",
    isCategoryStart: false,
  },
  {
    category: "样式变体",
    className: "kbd-secondary",
    description: "次色按键样式。",
    isCategoryStart: false,
  },
  {
    category: "样式变体",
    className: "kbd-primary",
    description: "主色按键样式。",
    isCategoryStart: false,
  },
  {
    category: "样式变体",
    className: "kbd-destructive",
    description: "危险色按键样式。",
    isCategoryStart: false,
  },
  {
    category: "样式变体",
    className: "kbd-flat",
    description: "扁平按键，无阴影和边框。",
    isCategoryStart: false,
  },

  // 尺寸
  {
    category: "尺寸",
    className: "kbd-xs",
    description: "超小按键。",
    isCategoryStart: false,
  },
  {
    category: "尺寸",
    className: "kbd-sm",
    description: "小按键。",
    isCategoryStart: false,
  },
  {
    category: "尺寸",
    className: "kbd-md",
    description: "中等按键。",
    isCategoryStart: false,
  },
  {
    category: "尺寸",
    className: "kbd-lg",
    description: "大按键。",
    isCategoryStart: false,
  },

  // 组合键
  {
    category: "组合键",
    className: "kbd-group",
    description: "组合多个按键，带分隔符。",
    isCategoryStart: false,
  },

  // 特殊按键图标
  {
    category: "特殊按键",
    className: "kbd-command",
    description: "⌘ Command 键。",
    isCategoryStart: false,
  },
  {
    category: "特殊按键",
    className: "kbd-shift",
    description: "⇧ Shift 键。",
    isCategoryStart: false,
  },
  {
    category: "特殊按键",
    className: "kbd-ctrl",
    description: "⌃ Ctrl 键。",
    isCategoryStart: false,
  },
  {
    category: "特殊按键",
    className: "kbd-alt",
    description: "⌥ Alt 键。",
    isCategoryStart: false,
  },
  {
    category: "特殊按键",
    className: "kbd-option",
    description: "⌥ Option 键。",
    isCategoryStart: false,
  },
  {
    category: "特殊按键",
    className: "kbd-enter",
    description: "↵ Enter 键。",
    isCategoryStart: false,
  },
  {
    category: "特殊按键",
    className: "kbd-delete",
    description: "⌫ Delete 键。",
    isCategoryStart: false,
  },
  {
    category: "特殊按键",
    className: "kbd-escape",
    description: "⎋ Escape 键。",
    isCategoryStart: false,
  },
  {
    category: "特殊按键",
    className: "kbd-tab",
    description: "⇥ Tab 键。",
    isCategoryStart: false,
  },
  {
    category: "特殊按键",
    className: "kbd-caps",
    description: "⇪ CapsLock 键。",
    isCategoryStart: false,
  },
  {
    category: "特殊按键",
    className: "kbd-up",
    description: "↑ 上方向键。",
    isCategoryStart: false,
  },
  {
    category: "特殊按键",
    className: "kbd-down",
    description: "↓ 下方向键。",
    isCategoryStart: false,
  },
  {
    category: "特殊按键",
    className: "kbd-left",
    description: "← 左方向键。",
    isCategoryStart: false,
  },
  {
    category: "特殊按键",
    className: "kbd-right",
    description: "→ 右方向键。",
    isCategoryStart: false,
  },
];
</script>

<template>
  <DocsContainer>
    <!-- 文档标题 -->
    <DocsHeader
      title="Kbd 键盘按键组件"
      description="用于显示键盘按键的可视化组件。"
    />

    <!-- API Reference -->
    <ApiReference :data="apiClasses" />

    <!-- 基础示例 -->
    <DocsSection title="基础用法">
      <div class=""><kbd class="kbd">A</kbd> <kbd class="kbd">B</kbd></div>
    </DocsSection>

    <!-- 样式变体 -->
    <DocsSection title="样式变体">
      <div class="flex gap-2">
        <kbd class="kbd kbd-default">Default</kbd>
        <kbd class="kbd kbd-secondary">Secondary</kbd>
        <kbd class="kbd kbd-primary">Primary</kbd>
        <kbd class="kbd kbd-destructive">Destructive</kbd>
        <kbd class="kbd kbd-flat">Flat</kbd>
      </div>
    </DocsSection>

    <!-- 尺寸 -->
    <DocsSection title="尺寸">
      <div class="flex gap-2 items-center">
        <kbd class="kbd kbd-xs">XS</kbd>
        <kbd class="kbd kbd-sm">SM</kbd>
        <kbd class="kbd kbd-md">MD</kbd>
        <kbd class="kbd kbd-lg">LG</kbd>
      </div>
    </DocsSection>

    <!-- 组合键 -->
    <DocsSection title="组合键">
      <kbd class="kbd-group">
        <kbd class="kbd kbd-sm">Ctrl</kbd>
        <span class="kbd-separator">+</span>
        <kbd class="kbd kbd-sm">C</kbd>
      </kbd>
    </DocsSection>

    <!-- 特殊按键 -->
    <DocsSection title="特殊按键">
      <div class="flex gap-2 flex-wrap">
        <kbd class="kbd kbd-command"></kbd>
        <kbd class="kbd kbd-shift"></kbd>
        <kbd class="kbd kbd-ctrl"></kbd>
        <kbd class="kbd kbd-alt"></kbd>
        <kbd class="kbd kbd-option"></kbd>
        <kbd class="kbd kbd-enter"></kbd>
        <kbd class="kbd kbd-delete"></kbd>
        <kbd class="kbd kbd-escape"></kbd>
        <kbd class="kbd kbd-tab"></kbd>
        <kbd class="kbd kbd-caps"></kbd>
        <kbd class="kbd kbd-up"></kbd>
        <kbd class="kbd kbd-down"></kbd>
        <kbd class="kbd kbd-left"></kbd>
        <kbd class="kbd kbd-right"></kbd>
      </div>
    </DocsSection>
  </DocsContainer>
</template>
