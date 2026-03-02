<script setup lang="ts">
import DocsHeader from '@/components/zcomp/DocsHeader.vue'
import DocsSection from '@/components/zcomp/DocsSection.vue'
import ApiReference from '@/components/zcomp/ApiReference.vue'
import DocsContainer from '@/components/zcomp/DocsContainer.vue'

const apiClasses = [
  {
    category: '基础',
    className: 'skeleton',
    description: '骨架屏基础类（shimmer 动画）',
    isCategoryStart: true,
  },
  {
    category: '形状',
    className: 'skeleton-circle',
    description: '圆形（头像）',
    isCategoryStart: true,
  },
  {
    category: '形状',
    className: 'skeleton-square',
    description: '无圆角方形',
    isCategoryStart: false,
  },
  {
    category: '形状',
    className: 'skeleton-box',
    description: '大圆角（卡片/图片）',
    isCategoryStart: false,
  },
  {
    category: '形状',
    className: 'skeleton-text',
    description: '文字行（细长条）',
    isCategoryStart: false,
  },
  {
    category: '形状',
    className: 'skeleton-heading',
    description: '标题行（稍粗）',
    isCategoryStart: false,
  },
  { category: '形状', className: 'skeleton-btn', description: '按钮形', isCategoryStart: false },
  {
    category: '动画',
    className: 'skeleton-pulse',
    description: '脉冲呼吸动画',
    isCategoryStart: true,
  },
  { category: '动画', className: 'skeleton-static', description: '无动画', isCategoryStart: false },
]
</script>

<template>
  <DocsContainer>
    <DocsHeader
      title="Skeleton"
      description="骨架屏组件，在内容加载完成前展示占位形状，减少布局跳动感，提升感知性能。"
    />

    <ApiReference :data="apiClasses" />

    <!-- 文字段落 -->
    <DocsSection title="文字段落">
      <div class="flex flex-col gap-3 max-w-sm">
        <div class="skeleton skeleton-heading w-3/5" />
        <div class="skeleton skeleton-text w-full" />
        <div class="skeleton skeleton-text w-full" />
        <div class="skeleton skeleton-text w-4/5" />
        <div class="skeleton skeleton-text w-2/3" />
      </div>
    </DocsSection>

    <!-- 用户信息行 -->
    <DocsSection title="用户信息行">
      <div class="flex items-center gap-3 max-w-sm">
        <div class="skeleton skeleton-circle w-12 h-12 shrink-0" />
        <div class="flex flex-col gap-2 flex-1">
          <div class="skeleton skeleton-text w-1/3" />
          <div class="skeleton skeleton-text w-1/2" />
        </div>
      </div>
    </DocsSection>

    <!-- 卡片 -->
    <DocsSection title="卡片">
      <div class="flex flex-wrap gap-4">
        <!-- 图片卡片 -->
        <div class="flex flex-col gap-3 w-52">
          <div class="skeleton skeleton-box w-full h-36" />
          <div class="skeleton skeleton-heading w-3/4" />
          <div class="skeleton skeleton-text w-full" />
          <div class="skeleton skeleton-text w-5/6" />
          <div class="flex items-center gap-2 mt-1">
            <div class="skeleton skeleton-circle w-7 h-7 shrink-0" />
            <div class="skeleton skeleton-text w-20" />
          </div>
        </div>

        <!-- 横向卡片 -->
        <div class="flex items-start gap-3 w-72 p-4 border border-base-200 rounded-box">
          <div class="skeleton skeleton-box w-20 h-20 shrink-0" />
          <div class="flex flex-col gap-2 flex-1">
            <div class="skeleton skeleton-heading w-3/4" />
            <div class="skeleton skeleton-text w-full" />
            <div class="skeleton skeleton-text w-4/5" />
            <div class="skeleton skeleton-btn w-24 mt-1" />
          </div>
        </div>
      </div>
    </DocsSection>

    <!-- 列表 -->
    <DocsSection title="列表">
      <div
        class="flex flex-col divide-y divide-base-200 max-w-sm border border-base-200 rounded-box overflow-hidden"
      >
        <div v-for="i in 4" :key="i" class="flex items-center gap-3 px-4 py-3">
          <div class="skeleton skeleton-circle w-9 h-9 shrink-0" />
          <div class="flex flex-col gap-1.5 flex-1">
            <div class="skeleton skeleton-text w-1/3" />
            <div class="skeleton skeleton-text w-2/3" />
          </div>
          <div class="skeleton skeleton-btn w-16 h-7" />
        </div>
      </div>
    </DocsSection>

    <!-- 表格 -->
    <DocsSection title="表格">
      <div class="max-w-lg border border-base-200 rounded-box overflow-hidden">
        <!-- 表头 -->
        <div class="flex gap-4 px-4 py-3 bg-base-200/50 border-b border-base-200">
          <div class="skeleton skeleton-text w-8" />
          <div class="skeleton skeleton-text flex-1" />
          <div class="skeleton skeleton-text w-20" />
          <div class="skeleton skeleton-text w-16" />
        </div>
        <!-- 行 -->
        <div
          v-for="i in 5"
          :key="i"
          class="flex gap-4 px-4 py-3 border-b border-base-200 last:border-0"
        >
          <div class="skeleton skeleton-text w-8" />
          <div class="flex items-center gap-2 flex-1">
            <div class="skeleton skeleton-circle w-6 h-6 shrink-0" />
            <div class="skeleton skeleton-text flex-1" />
          </div>
          <div class="skeleton skeleton-text w-20" />
          <div class="skeleton skeleton-btn w-16 h-6" />
        </div>
      </div>
    </DocsSection>

    <!-- Navbar -->
    <DocsSection title="导航栏">
      <div
        class="flex items-center justify-between px-4 h-14 border border-base-200 rounded-box max-w-xl gap-4"
      >
        <div class="flex items-center gap-2">
          <div class="skeleton skeleton-circle w-7 h-7" />
          <div class="skeleton skeleton-text w-20" />
        </div>
        <div class="flex gap-2 flex-1 justify-center">
          <div v-for="i in 4" :key="i" class="skeleton skeleton-text w-12" />
        </div>
        <div class="flex gap-2">
          <div class="skeleton skeleton-btn w-14 h-8" />
          <div class="skeleton skeleton-btn w-16 h-8" />
        </div>
      </div>
    </DocsSection>

    <!-- 个人主页 -->
    <DocsSection title="个人主页">
      <div class="max-w-sm">
        <!-- 封面 -->
        <div class="skeleton skeleton-square w-full h-28" />
        <!-- 头像 -->
        <div class="px-4">
          <div class="skeleton skeleton-circle w-20 h-20 border-4 border-base-100 -mt-10" />
        </div>
        <!-- 信息 -->
        <div class="px-4 pt-2 flex flex-col gap-2">
          <div class="skeleton skeleton-heading w-1/3" />
          <div class="skeleton skeleton-text w-1/2" />
          <div class="skeleton skeleton-text w-4/5" />
          <div class="skeleton skeleton-text w-3/5" />
          <div class="flex gap-2 mt-2">
            <div class="skeleton skeleton-btn w-24" />
            <div class="skeleton skeleton-btn w-24" />
          </div>
        </div>
      </div>
    </DocsSection>

    <!-- 动画变体 -->
    <DocsSection title="动画变体">
      <div class="flex flex-col gap-6">
        <!-- shimmer（默认） -->
        <div>
          <p class="text-xs text-base-content/50 mb-3">shimmer（默认）</p>
          <div class="flex items-center gap-3 max-w-xs">
            <div class="skeleton skeleton-circle w-10 h-10 shrink-0" />
            <div class="flex flex-col gap-2 flex-1">
              <div class="skeleton skeleton-text w-2/5" />
              <div class="skeleton skeleton-text w-3/4" />
            </div>
          </div>
        </div>

        <!-- pulse -->
        <div>
          <p class="text-xs text-base-content/50 mb-3">skeleton-pulse</p>
          <div class="flex items-center gap-3 max-w-xs">
            <div class="skeleton skeleton-pulse skeleton-circle w-10 h-10 shrink-0" />
            <div class="flex flex-col gap-2 flex-1">
              <div class="skeleton skeleton-pulse skeleton-text w-2/5" />
              <div class="skeleton skeleton-pulse skeleton-text w-3/4" />
            </div>
          </div>
        </div>

        <!-- static -->
        <div>
          <p class="text-xs text-base-content/50 mb-3">skeleton-static（无动画）</p>
          <div class="flex items-center gap-3 max-w-xs">
            <div class="skeleton skeleton-static skeleton-circle w-10 h-10 shrink-0" />
            <div class="flex flex-col gap-2 flex-1">
              <div class="skeleton skeleton-static skeleton-text w-2/5" />
              <div class="skeleton skeleton-static skeleton-text w-3/4" />
            </div>
          </div>
        </div>
      </div>
    </DocsSection>

    <!-- 视频/媒体播放器 -->
    <DocsSection title="媒体播放器">
      <div class="max-w-sm flex flex-col gap-3">
        <div class="skeleton skeleton-box w-full h-48" />
        <div class="flex items-center gap-3">
          <div class="skeleton skeleton-circle w-10 h-10 shrink-0" />
          <div class="flex flex-col gap-1.5 flex-1">
            <div class="skeleton skeleton-text w-2/3" />
            <div class="skeleton skeleton-text w-1/3" />
          </div>
          <div class="skeleton skeleton-circle w-8 h-8 shrink-0" />
          <div class="skeleton skeleton-circle w-8 h-8 shrink-0" />
        </div>
        <!-- 进度条 -->
        <div class="skeleton skeleton-text w-full h-1.5" />
      </div>
    </DocsSection>
  </DocsContainer>
</template>
