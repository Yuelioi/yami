<script setup lang="ts">
import DocsHeader from '@/components/zcomp/DocsHeader.vue'
import DocsSection from '@/components/zcomp/DocsSection.vue'
import ApiReference from '@/components/zcomp/ApiReference.vue'
import DocsContainer from '@/components/zcomp/DocsContainer.vue'

const apiClasses = [
  {
    category: '基础',
    className: 'skeleton',
    description: '骨架屏',
    isCategoryStart: true,
  },
  {
    category: '动画',
    className: 'skeleton-animated',
    description: '动画效果',
    isCategoryStart: false,
  },
  {
    category: '样式',
    className: 'skeleton-striped',
    description: '条纹样式',
    isCategoryStart: false,
  },
]
</script>

<template>
  <DocsContainer>
    <DocsHeader title="Skeleton" description="骨架屏组件，用于加载状态占位符。" />

    <ApiReference :data="apiClasses"></ApiReference>

    <DocsSection title="基础骨架屏">
      <div class="skeleton h-32 w-32 rounded-full"></div>
    </DocsSection>

    <DocsSection title="带动画">
      <div class="skeleton skeleton-animated h-32 w-32 rounded-full"></div>
    </DocsSection>

    <DocsSection title="条纹样式">
      <div class="skeleton skeleton-striped h-32 w-32 rounded-full"></div>
    </DocsSection>

    <DocsSection title="文本加载">
      <div class="space-y-4">
        <div class="skeleton skeleton-animated h-4 w-full"></div>
        <div class="skeleton skeleton-animated h-4 w-5/6"></div>
        <div class="skeleton skeleton-animated h-4 w-4/5"></div>
      </div>
    </DocsSection>

    <DocsSection title="卡片加载">
      <div class="card card-bordered">
        <figure class="skeleton skeleton-animated h-64 w-full"></figure>
        <div class="card-body space-y-4">
          <div class="skeleton skeleton-animated h-6 w-3/4"></div>
          <div class="space-y-2">
            <div class="skeleton skeleton-animated h-4 w-full"></div>
            <div class="skeleton skeleton-animated h-4 w-5/6"></div>
            <div class="skeleton skeleton-animated h-4 w-4/5"></div>
          </div>
          <div class="card-actions">
            <div class="skeleton skeleton-animated h-10 w-24"></div>
          </div>
        </div>
      </div>
    </DocsSection>

    <DocsSection title="头像和用户信息">
      <div class="flex items-center gap-4">
        <div class="skeleton skeleton-animated h-16 w-16 rounded-full shrink-0"></div>
        <div class="space-y-2 flex-1">
          <div class="skeleton skeleton-animated h-5 w-32"></div>
          <div class="skeleton skeleton-animated h-4 w-48"></div>
        </div>
      </div>
    </DocsSection>

    <DocsSection title="列表项加载">
      <div class="space-y-3">
        <div v-for="i in 3" :key="i" class="flex items-center gap-3">
          <div class="skeleton skeleton-animated h-12 w-12 rounded"></div>
          <div class="space-y-2 flex-1">
            <div class="skeleton skeleton-animated h-4 w-32"></div>
            <div class="skeleton skeleton-animated h-3 w-48"></div>
          </div>
        </div>
      </div>
    </DocsSection>

    <DocsSection title="表格加载">
      <div class="overflow-x-auto">
        <table class="table">
          <thead>
            <tr>
              <th class="skeleton skeleton-animated h-4"></th>
              <th class="skeleton skeleton-animated h-4"></th>
              <th class="skeleton skeleton-animated h-4"></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="i in 4" :key="i">
              <td class="skeleton skeleton-animated h-4 w-full"></td>
              <td class="skeleton skeleton-animated h-4 w-full"></td>
              <td class="skeleton skeleton-animated h-4 w-full"></td>
            </tr>
          </tbody>
        </table>
      </div>
    </DocsSection>

    <DocsSection title="网格布局加载">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div v-for="i in 6" :key="i" class="card card-bordered">
          <figure class="skeleton skeleton-animated h-48 w-full"></figure>
          <div class="card-body space-y-2">
            <div class="skeleton skeleton-animated h-5 w-3/4"></div>
            <div class="skeleton skeleton-animated h-4 w-full"></div>
            <div class="skeleton skeleton-animated h-4 w-5/6"></div>
          </div>
        </div>
      </div>
    </DocsSection>

    <DocsSection title="表单加载">
      <div class="space-y-4">
        <div>
          <div class="skeleton skeleton-animated h-4 w-20 mb-2"></div>
          <div class="skeleton skeleton-animated h-10 w-full"></div>
        </div>
        <div>
          <div class="skeleton skeleton-animated h-4 w-20 mb-2"></div>
          <div class="skeleton skeleton-animated h-10 w-full"></div>
        </div>
        <div class="flex gap-2">
          <div class="skeleton skeleton-animated h-10 w-24"></div>
          <div class="skeleton skeleton-animated h-10 w-24"></div>
        </div>
      </div>
    </DocsSection>

    <DocsSection title="聊天气泡加载">
      <div class="space-y-4">
        <div class="flex gap-2">
          <div class="skeleton skeleton-animated h-10 w-10 rounded-full"></div>
          <div class="space-y-2 flex-1">
            <div class="skeleton skeleton-animated h-4 w-48"></div>
            <div class="skeleton skeleton-animated h-4 w-32"></div>
          </div>
        </div>
        <div class="flex gap-2 justify-end">
          <div class="space-y-2 flex-1">
            <div class="skeleton skeleton-animated h-4 w-40 ml-auto"></div>
            <div class="skeleton skeleton-animated h-4 w-32 ml-auto"></div>
          </div>
          <div class="skeleton skeleton-animated h-10 w-10 rounded-full"></div>
        </div>
      </div>
    </DocsSection>

    <DocsSection title="条纹和普通组合">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <p class="text-sm text-base-content/60 mb-3">普通动画</p>
          <div class="space-y-3">
            <div class="skeleton skeleton-animated h-20 w-full"></div>
            <div class="skeleton skeleton-animated h-4 w-3/4"></div>
          </div>
        </div>

        <div>
          <p class="text-sm text-base-content/60 mb-3">条纹样式</p>
          <div class="space-y-3">
            <div class="skeleton skeleton-striped h-20 w-full"></div>
            <div class="skeleton skeleton-striped h-4 w-3/4"></div>
          </div>
        </div>
      </div>
    </DocsSection>

    <DocsSection title="完整页面加载">
      <div class="space-y-6">
        <!-- Header -->
        <div class="flex items-center justify-between">
          <div class="skeleton skeleton-animated h-8 w-32"></div>
          <div class="skeleton skeleton-animated h-10 w-24"></div>
        </div>

        <!-- Main Content -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <!-- Sidebar -->
          <div class="space-y-3">
            <div class="skeleton skeleton-animated h-6 w-20"></div>
            <div v-for="i in 3" :key="i" class="skeleton skeleton-animated h-10 w-full"></div>
          </div>

          <!-- Main -->
          <div class="md:col-span-2 space-y-4">
            <div class="skeleton skeleton-animated h-64 w-full"></div>
            <div class="space-y-2">
              <div class="skeleton skeleton-animated h-6 w-1/2"></div>
              <div class="skeleton skeleton-animated h-4 w-full"></div>
              <div class="skeleton skeleton-animated h-4 w-5/6"></div>
            </div>
          </div>
        </div>
      </div>
    </DocsSection>
  </DocsContainer>
</template>
