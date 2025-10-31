<script setup lang="ts">
import DocsHeader from '../zcomp/DocsHeader.vue'
import DocsContainer from '../zcomp/DocsContainer.vue'
import DocsSection from '../zcomp/DocsSection.vue'
import ApiReference from '../zcomp/ApiReference.vue'

const apiClasses = [
  {
    category: '基础',
    className: 'badge',
    description: '徽章基础样式，包含布局、文本、边框、交互。',
    isCategoryStart: true,
  },
  {
    category: '配色',
    className: 'badge-primary',
    description: '主色实心徽章。',
    isCategoryStart: true,
  },
  {
    category: '配色',
    className: 'badge-secondary',
    description: '次色实心徽章。',
    isCategoryStart: false,
  },
  {
    category: '配色',
    className: 'badge-destructive',
    description: '危险/错误色实心徽章。',
    isCategoryStart: false,
  },
  {
    category: '配色',
    className: 'badge-muted',
    description: '低调灰色实心徽章。',
    isCategoryStart: false,
  },
  {
    category: '配色',
    className: 'badge-accent',
    description: '强调色实心徽章。',
    isCategoryStart: false,
  },
  {
    category: '描边/幽灵',
    className: 'badge-outline',
    description: '描边徽章。',
    isCategoryStart: true,
  },
  {
    category: '描边/幽灵',
    className: 'badge-ghost',
    description: '幽灵徽章（透明背景）。',
    isCategoryStart: false,
  },
  {
    category: '尺寸',
    className: 'badge-xs',
    description: '超小徽章。',
    isCategoryStart: true,
  },
  {
    category: '尺寸',
    className: 'badge-sm',
    description: '小号徽章。',
    isCategoryStart: false,
  },
  {
    category: '尺寸',
    className: 'badge-md',
    description: '中号徽章（默认）。',
    isCategoryStart: false,
  },
  {
    category: '尺寸',
    className: 'badge-lg',
    description: '大号徽章。',
    isCategoryStart: false,
  },
  {
    category: '尺寸',
    className: 'badge-xl',
    description: '超大徽章。',
    isCategoryStart: false,
  },
  {
    category: '形状',
    className: 'badge-pill',
    description: '圆角徽章（胶囊形）。',
    isCategoryStart: true,
  },
  {
    category: '形状',
    className: 'badge-square',
    description: '方角徽章。',
    isCategoryStart: false,
  },
  {
    category: '扩展',
    className: 'badge-dot',
    description: '带点徽章。',
    isCategoryStart: true,
  },
  {
    category: '扩展',
    className: 'badge-closable',
    description: '可关闭徽章（需 JS 配合）。',
    isCategoryStart: false,
  },
]
</script>

<template>
  <DocsContainer>
    <DocsHeader
      title="Badge 徽章组件"
      description="用于标识状态、数量或提醒信息的小型标记，支持多种颜色、尺寸、形状和扩展功能。"
    />

    <ApiReference :data="apiClasses" />

    <!-- 基础徽章 -->
    <DocsSection title="基础徽章">
      <div class="flex gap-2">
        <span class="badge">默认徽章</span>
        <span class="badge badge-primary">Primary</span>
        <span class="badge badge-secondary">Secondary</span>
        <span class="badge badge-destructive">Destructive</span>
        <span class="badge badge-muted">Muted</span>
        <span class="badge badge-accent">Accent</span>
      </div>
    </DocsSection>

    <!-- 描边与幽灵徽章 -->
    <DocsSection title="描边与幽灵徽章（颜色联动）">
      <div class="flex flex-col gap-2">
        <!-- 描边徽章 -->
        <div class="flex gap-2 items-center">
          <span class="badge badge-outline badge-primary">Primary</span>
          <span class="badge badge-outline badge-secondary">Secondary</span>
          <span class="badge badge-outline badge-destructive">Destructive</span>
          <span class="badge badge-outline badge-muted">Muted</span>
          <span class="badge badge-outline badge-accent">Accent</span>
        </div>

        <!-- 幽灵徽章 -->
        <div class="flex gap-2 items-center">
          <span class="badge badge-ghost badge-primary">Primary</span>
          <span class="badge badge-ghost badge-secondary">Secondary</span>
          <span class="badge badge-ghost badge-destructive">Destructive</span>
          <span class="badge badge-ghost badge-muted">Muted</span>
          <span class="badge badge-ghost badge-accent">Accent</span>
        </div>
      </div>
    </DocsSection>

    <!-- 尺寸变体 -->
    <DocsSection title="尺寸变体">
      <div class="flex gap-2 items-center">
        <span class="badge badge-xs">XS</span>
        <span class="badge badge-sm">SM</span>
        <span class="badge badge-md">MD</span>
        <span class="badge badge-lg">LG</span>
        <span class="badge badge-xl">XL</span>
      </div>
    </DocsSection>

    <!-- 形状变体 -->
    <DocsSection title="形状变体">
      <div class="flex gap-2 items-center">
        <span class="badge badge-pill">Pill</span>
        <span class="badge badge-square">Square</span>
      </div>
    </DocsSection>

    <!-- 扩展功能 -->
    <DocsSection title="扩展功能">
      <div class="flex gap-2 items-center">
        <span class="badge badge-dot badge-primary">Dot</span>
        <span class="badge badge-closable badge-secondary">
          Closable
          <button class="ml-1 text-xs">×</button>
        </span>
      </div>
    </DocsSection>
  </DocsContainer>
</template>
