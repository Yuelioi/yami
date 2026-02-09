<script setup lang="ts">
import DocsHeader from '@/components/zcomp/DocsHeader.vue'
import DocsSection from '@/components/zcomp/DocsSection.vue'
import ApiReference from '@/components/zcomp/ApiReference.vue'
import DocsContainer from '@/components/zcomp/DocsContainer.vue'

const apiClasses = [
  {
    category: '基础',
    className: 'badge',
    description: '徽章容器',
    isCategoryStart: true,
  },
  {
    category: '样式',
    className: 'badge-outline',
    description: '描边样式',
    isCategoryStart: false,
  },
  {
    category: '样式',
    className: 'badge-soft',
    description: '柔和样式',
    isCategoryStart: false,
  },
  {
    category: '颜色',
    className: 'badge-primary',
    description: '主色',
    isCategoryStart: false,
  },
  {
    category: '颜色',
    className: 'badge-secondary',
    description: '次色',
    isCategoryStart: false,
  },
  {
    category: '颜色',
    className: 'badge-accent',
    description: '强调色',
    isCategoryStart: false,
  },
  {
    category: '颜色',
    className: 'badge-info',
    description: '信息色',
    isCategoryStart: false,
  },
  {
    category: '颜色',
    className: 'badge-success',
    description: '成功色',
    isCategoryStart: false,
  },
  {
    category: '颜色',
    className: 'badge-warning',
    description: '警告色',
    isCategoryStart: false,
  },
  {
    category: '颜色',
    className: 'badge-error',
    description: '错误色',
    isCategoryStart: false,
  },

  {
    category: '尺寸',
    className: 'badge-sm',
    description: '小',
    isCategoryStart: false,
  },
  {
    category: '尺寸',
    className: 'badge-md',
    description: '中',
    isCategoryStart: false,
  },
  {
    category: '尺寸',
    className: 'badge-lg',
    description: '大',
    isCategoryStart: false,
  },
]
</script>

<template>
  <DocsContainer>
    <DocsHeader title="Badge" description="小标签用于显示状态、分类或计数。" />

    <ApiReference :data="apiClasses"></ApiReference>

    <DocsSection title="颜色">
      <div class="flex flex-wrap gap-3">
        <span class="badge">中性</span>
        <span class="badge badge-primary">Primary</span>
        <span class="badge badge-secondary">Secondary</span>
        <span class="badge badge-accent">Accent</span>
        <span class="badge badge-info">Info</span>
        <span class="badge badge-success">Success</span>
        <span class="badge badge-warning">Warning</span>
        <span class="badge badge-error">Error</span>
      </div>
    </DocsSection>

    <DocsSection title="样式">
      <div>
        <p class="text-sm text-base-content/60 mb-3">实心</p>
        <div class="flex flex-wrap gap-2">
          <span class="badge badge-primary">Primary</span>
          <span class="badge badge-success">Success</span>
          <span class="badge badge-error">Error</span>
        </div>
      </div>
      <div>
        <p class="text-sm text-base-content/60 mb-3">描边</p>
        <div class="flex flex-wrap gap-2">
          <span class="badge badge-outline badge-primary">Primary</span>
          <span class="badge badge-outline badge-success">Success</span>
          <span class="badge badge-outline badge-error">Error</span>
        </div>
      </div>
      <div>
        <p class="text-sm text-base-content/60 mb-3">柔和</p>
        <div class="flex flex-wrap gap-2">
          <span class="badge badge-soft badge-primary">Primary</span>
          <span class="badge badge-soft badge-success">Success</span>
          <span class="badge badge-soft badge-error">Error</span>
        </div>
      </div>
    </DocsSection>

    <DocsSection title="尺寸">
      <div class="flex flex-wrap gap-4 items-center">
        <span class="badge badge-sm badge-primary">sm</span>
        <span class="badge badge-md badge-primary">md</span>
        <span class="badge badge-lg badge-primary">lg</span>
      </div>
    </DocsSection>

    <DocsSection title="用法">
      <div>
        <p class="text-sm text-base-content/60 mb-3">标签</p>
        <div class="flex flex-wrap gap-2">
          <span class="badge badge-sm badge-primary">Vue</span>
          <span class="badge badge-sm badge-secondary">React</span>
          <span class="badge badge-sm badge-accent">Angular</span>
        </div>
      </div>
      <div>
        <p class="text-sm text-base-content/60 mb-3">状态</p>
        <div class="flex flex-wrap gap-2">
          <span class="badge badge-success">已激活</span>
          <span class="badge badge-warning">待处理</span>
          <span class="badge badge-error">已禁用</span>
        </div>
      </div>
      <div>
        <p class="text-sm text-base-content/60 mb-3">计数</p>
        <button class="btn btn-sm gap-2">
          消息
          <span class="badge badge-sm badge-primary">3</span>
        </button>
      </div>
    </DocsSection>
  </DocsContainer>
</template>
