<script setup lang="ts">
import DocsHeader from '../zcomp/DocsHeader.vue'
import DocsContainer from '../zcomp/DocsContainer.vue'
import DocsSection from '../zcomp/DocsSection.vue'
import ApiReference from '../zcomp/ApiReference.vue'

import { SearchIcon } from 'lucide-vue-next'

const apiClasses = [
  {
    category: '基础',
    className: 'input',
    description: '基础输入框样式，包含边框、内边距、焦点环等。',
    isCategoryStart: true,
  },
  {
    category: '基础',
    className: 'input-group',
    description: '输入框组容器，支持按钮或图标等组合。',
    isCategoryStart: false,
  },

  {
    category: '配色变体',
    className: 'input-primary',
    description: '主色输入框（Primary 边框与焦点环）。',
    isCategoryStart: true,
  },
  {
    category: '配色变体',
    className: 'input-secondary',
    description: '次级输入框样式。',
    isCategoryStart: false,
  },
  {
    category: '配色变体',
    className: 'input-destructive',
    description: '错误或警示输入框（红色边框）。',
    isCategoryStart: false,
  },
  {
    category: '配色变体',
    className: 'input-ghost',
    description: '透明背景的幽灵样式。',
    isCategoryStart: false,
  },
  {
    category: '配色变体',
    className: 'input-filled',
    description: '带背景填充样式。',
    isCategoryStart: false,
  },

  {
    category: '尺寸',
    className: 'input-xs',
    description: '超小输入框。',
    isCategoryStart: true,
  },
  {
    category: '尺寸',
    className: 'input-sm',
    description: '小号输入框。',
    isCategoryStart: false,
  },
  {
    category: '尺寸',
    className: 'input-md',
    description: '中号输入框（默认）。',
    isCategoryStart: false,
  },
  {
    category: '尺寸',
    className: 'input-lg',
    description: '大号输入框。',
    isCategoryStart: false,
  },
  {
    category: '尺寸',
    className: 'input-xl',
    description: '超大输入框。',
    isCategoryStart: false,
  },

  {
    category: '边框样式',
    className: 'input-bordered',
    description: '加粗边框样式。',
    isCategoryStart: true,
  },
  {
    category: '边框样式',
    className: 'input-borderless',
    description: '无边框样式。',
    isCategoryStart: false,
  },
]
</script>

<template>
  <DocsContainer>
    <DocsHeader
      title="Input 输入框组件"
      description="用于文本输入的基础表单组件，支持多种尺寸、样式与状态变体。"
    />

    <ApiReference :data="apiClasses" />

    <!-- 基础示例 -->
    <DocsSection title="基础示例">
      <div class="flex flex-col gap-4 w-full max-w-md">
        <input class="input" placeholder="请输入内容..." />
        <input class="input" value="默认值" />
        <input class="input" disabled placeholder="禁用状态" />
      </div>
    </DocsSection>

    <!-- 配色变体 -->
    <DocsSection title="配色变体">
      <div class="flex flex-col gap-4 w-full max-w-md">
        <input class="input input-primary" placeholder="Primary 输入框" />
        <input class="input input-secondary" placeholder="Secondary 输入框" />
        <input class="input input-destructive" placeholder="Destructive 输入框" />
        <input class="input input-ghost" placeholder="Ghost 输入框" />
        <input class="input input-filled" placeholder="Filled 输入框" />
      </div>
    </DocsSection>

    <!-- 尺寸变体 -->
    <DocsSection title="尺寸变体">
      <div class="flex flex-col gap-4 w-full max-w-md">
        <input class="input input-xs" placeholder="XS 尺寸" />
        <input class="input input-sm" placeholder="SM 尺寸" />
        <input class="input input-md" placeholder="MD 尺寸" />
        <input class="input input-lg" placeholder="LG 尺寸" />
        <input class="input input-xl" placeholder="XL 尺寸" />
      </div>
    </DocsSection>

    <!-- 边框样式 -->
    <DocsSection title="边框样式">
      <div class="flex flex-col gap-4 w-full max-w-md">
        <input class="input input-bordered" placeholder="加粗边框样式" />
        <input class="input input-borderless" placeholder="无边框样式" />
      </div>
    </DocsSection>

    <!-- 输入框组 -->
    <DocsSection title="输入框组">
      <div class="flex flex-col gap-4 w-full max-w-lg">
        <!-- 按钮组合 -->
        <div class="input-group">
          <input class="input" placeholder="搜索内容..." />
          <button class="px-4 bg-primary text-primary-foreground rounded-r">搜索</button>
        </div>

        <!-- 左右组合 -->
        <div class="input-group">
          <span class="px-3 bg-muted flex items-center text-sm">https://</span>
          <input class="input" placeholder="输入网址" />
          <span class="px-3 bg-muted flex items-center text-sm">.com</span>
        </div>

        <!-- 图标组合 -->
        <div class="relative">
          <SearchIcon
            class="absolute size-5 left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
          ></SearchIcon>

          <input class="input pl-10" placeholder="带图标输入框" />
        </div>
      </div>
    </DocsSection>
  </DocsContainer>
</template>
