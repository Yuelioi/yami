<script setup lang="ts">
import DocsHeader from '../zcomp/DocsHeader.vue'
import DocsContainer from '../zcomp/DocsContainer.vue'
import DocsSection from '../zcomp/DocsSection.vue'
import ApiReference from '../zcomp/ApiReference.vue'

const apiClasses = [
  {
    category: '基础',
    className: 'divider',
    description: '基础分割线，默认水平。',
    isCategoryStart: true,
  },
  {
    category: '方向',
    className: 'divider-horizontal',
    description: '水平分割线（默认方向）。',
    isCategoryStart: true,
  },
  {
    category: '方向',
    className: 'divider-vertical',
    description: '垂直分割线。',
    isCategoryStart: false,
  },
  {
    category: '颜色',
    className: 'divider-primary',
    description: '主色分割线。',
    isCategoryStart: true,
  },
  {
    category: '颜色',
    className: 'divider-muted',
    description: '灰色分割线。',
    isCategoryStart: false,
  },
  {
    category: '颜色',
    className: 'divider-accent',
    description: '强调色分割线。',
    isCategoryStart: false,
  },
  {
    category: '颜色',
    className: 'divider-destructive',
    description: '危险色分割线。',
    isCategoryStart: false,
  },
  {
    category: '位置',
    className: 'divider-start',
    description: '仅显示后半部分。',
    isCategoryStart: true,
  },
  {
    category: '位置',
    className: 'divider-end',
    description: '仅显示前半部分。',
    isCategoryStart: false,
  },
]
</script>

<template>
  <DocsContainer>
    <DocsHeader
      title="Divider 分割线组件"
      description="用于在布局中分隔内容的线条组件，支持水平/垂直方向、颜色变体及显示位置控制。"
    />

    <ApiReference :data="apiClasses" />

    <!-- 基础示例 -->
    <DocsSection title="基础分割线">
      <div class="flex flex-col gap-4">
        <div class="divider">分割文本</div>
        <div class="divider"></div>
      </div>
    </DocsSection>

    <!-- 方向 -->
    <DocsSection title="方向变体">
      <div class="flex items-center gap-4">
        <div class="divider-horizontal">水平分割</div>
        <div class="divider-vertical h-12">垂直分割</div>
      </div>
    </DocsSection>

    <!-- 颜色 -->
    <DocsSection title="颜色变体">
      <div class="flex flex-col gap-4">
        <div class="divider divider-primary">Primary</div>
        <div class="divider divider-muted">Muted</div>
        <div class="divider divider-accent">Accent</div>
        <div class="divider divider-destructive">Destructive</div>
      </div>
    </DocsSection>

    <!-- 位置 -->
    <DocsSection title="位置变体">
      <div class="flex flex-col gap-4">
        <div class="divider divider-start">仅显示后半部分</div>
        <div class="divider divider-end">仅显示前半部分</div>
      </div>
    </DocsSection>
  </DocsContainer>
</template>
