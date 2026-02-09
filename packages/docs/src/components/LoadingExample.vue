<script setup lang="ts">
import DocsHeader from '@/components/zcomp/DocsHeader.vue'
import DocsContainer from '@/components/zcomp/DocsContainer.vue'
import DocsSection from '@/components/zcomp/DocsSection.vue'
import ApiReference from '@/components/zcomp/ApiReference.vue'

const apiClasses = [
  {
    category: 'Loading',
    className: 'loading',
    description: '基础加载器，使用 mask SVG 显示动画。',
  },
  { category: 'Loading', className: 'loading-spinner', description: '旋转圆环加载器。' },
  { category: 'Loading', className: 'loading-dots', description: '三个点跳动加载器。' },
  { category: 'Loading', className: 'loading-ring', description: '环形脉冲加载器。' },
  { category: 'Loading', className: 'loading-ball', description: '上下弹跳球加载器。' },
  { category: 'Loading', className: 'loading-bars', description: '条状上下跳动加载器。' },
  { category: 'Loading', className: 'loading-infinity', description: '无限符号循环加载器。' },
  { category: 'Loading', className: 'loading-xs', description: '超小尺寸。' },
  { category: 'Loading', className: 'loading-sm', description: '小尺寸。' },
  { category: 'Loading', className: 'loading-md', description: '中尺寸（默认）。' },
  { category: 'Loading', className: 'loading-lg', description: '大尺寸。' },
  { category: 'Loading', className: 'loading-xl', description: '超大尺寸。' },
]
</script>

<template>
  <DocsContainer>
    <DocsHeader
      title="Loading 加载组件"
      description="提供多种加载动画样式，可通过类名切换不同类型与尺寸。"
    />

    <ApiReference :data="apiClasses" />

    <DocsSection title="基础用法">
      <div class="flex gap-4">
        <span class="loading loading-spinner"></span>
        <span class="loading loading-dots"></span>
        <span class="loading loading-ring"></span>
        <span class="loading loading-ball"></span>
        <span class="loading loading-bars"></span>
        <span class="loading loading-infinity"></span>
      </div>
    </DocsSection>

    <DocsSection title="尺寸示例">
      <div class="flex gap-4 mt-2">
        <span class="loading loading-spinner loading-xs"></span>
        <span class="loading loading-spinner loading-sm"></span>
        <span class="loading loading-spinner loading-md"></span>
        <span class="loading loading-spinner loading-lg"></span>
        <span class="loading loading-spinner loading-xl"></span>
      </div>
    </DocsSection>
  </DocsContainer>
</template>
