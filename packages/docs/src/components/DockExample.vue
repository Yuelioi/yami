<script setup lang="ts">
import DocsHeader from '@/components/zcomp/DocsHeader.vue'
import DocsSection from '@/components/zcomp/DocsSection.vue'
import ApiReference from '@/components/zcomp/ApiReference.vue'
import DocsContainer from '@/components/zcomp/DocsContainer.vue'

const apiClasses = [
  { category: '基础', className: 'dock', description: '停靠栏容器', isCategoryStart: true },
  { category: '基础', className: 'dock-label', description: '标签样式', isCategoryStart: false },
  {
    category: '基础',
    className: 'dock-active',
    description: '活跃状态指示',
    isCategoryStart: false,
  },
  { category: '尺寸', className: 'dock-xs', description: '超小', isCategoryStart: false },
  { category: '尺寸', className: 'dock-sm', description: '小', isCategoryStart: false },
  { category: '尺寸', className: 'dock-md', description: '中', isCategoryStart: false },
  { category: '尺寸', className: 'dock-lg', description: '大', isCategoryStart: false },
  { category: '尺寸', className: 'dock-xl', description: '超大', isCategoryStart: false },
]
</script>

<template>
  <DocsContainer>
    <DocsHeader title="Dock" description="停靠栏组件，用于固定在页面底部的导航或工具栏。" />

    <ApiReference :data="apiClasses" />

    <DocsSection title="基础停靠栏">
      <div class="h-64 bg-base-200 rounded-lg flex items-center justify-center">
        <p class="text-base-content/60">停靠栏显示在底部（预览区域）</p>
      </div>
      <div class="dock relative dock-md">
        <button class="dock-active">
          <span class="icon-[lucide--home] w-6 h-6"></span>
          <span class="dock-label">首页</span>
        </button>
        <button>
          <span class="icon-[lucide--search] w-6 h-6"></span>
          <span class="dock-label">搜索</span>
        </button>
        <button>
          <span class="icon-[lucide--user] w-6 h-6"></span>
          <span class="dock-label">我的</span>
        </button>
      </div>
    </DocsSection>

    <DocsSection title="尺寸变体">
      <div class="space-y-8">
        <div>
          <p class="text-sm text-base-content/60 mb-2">xs（超小）</p>
          <div class="h-48 bg-base-200 rounded-lg flex items-center justify-center">
            <p class="text-xs text-base-content/60">预览</p>
          </div>
          <div class="dock relative dock-xs">
            <button class="dock-active">
              <span class="icon-[lucide--home] w-5 h-5"></span>
              <span class="dock-label">首页</span>
            </button>
            <button>
              <span class="icon-[lucide--search] w-5 h-5"></span>
              <span class="dock-label">搜索</span>
            </button>
          </div>
        </div>

        <div>
          <p class="text-sm text-base-content/60 mb-2">sm（小）</p>
          <div class="h-52 bg-base-200 rounded-lg flex items-center justify-center">
            <p class="text-xs text-base-content/60">预览</p>
          </div>
          <div class="dock relative dock-sm">
            <button class="dock-active">
              <span class="icon-[lucide--home] w-5 h-5"></span>
              <span class="dock-label">首页</span>
            </button>
            <button>
              <span class="icon-[lucide--search] w-5 h-5"></span>
              <span class="dock-label">搜索</span>
            </button>
          </div>
        </div>

        <div>
          <p class="text-sm text-base-content/60 mb-2">lg（大）</p>
          <div class="h-64 bg-base-200 rounded-lg flex items-center justify-center">
            <p class="text-xs text-base-content/60">预览</p>
          </div>
          <div class="dock relative dock-lg">
            <button class="dock-active">
              <span class="icon-[lucide--home] w-6 h-6"></span>
              <span class="dock-label">首页</span>
            </button>
            <button>
              <span class="icon-[lucide--search] w-6 h-6"></span>
              <span class="dock-label">搜索</span>
            </button>
          </div>
        </div>
      </div>
    </DocsSection>

    <DocsSection title="多个按钮">
      <div class="h-64 bg-base-200 rounded-lg flex items-center justify-center">
        <p class="text-base-content/60">停靠栏显示在底部</p>
      </div>
      <div class="dock relative dock-md">
        <button class="dock-active">
          <span class="icon-[lucide--home] w-6 h-6"></span>
          <span class="dock-label">首页</span>
        </button>
        <button>
          <span class="icon-[lucide--search] w-6 h-6"></span>
          <span class="dock-label">搜索</span>
        </button>
        <button>
          <span class="icon-[lucide--send] w-6 h-6"></span>
          <span class="dock-label">消息</span>
        </button>
        <button>
          <span class="icon-[lucide--settings] w-6 h-6"></span>
          <span class="dock-label">设置</span>
        </button>
        <button>
          <span class="icon-[lucide--user] w-6 h-6"></span>
          <span class="dock-label">我的</span>
        </button>
      </div>
    </DocsSection>

    <DocsSection title="禁用状态">
      <div class="h-64 bg-base-200 rounded-lg flex items-center justify-center">
        <p class="text-base-content/60">停靠栏显示在底部</p>
      </div>
      <div class="dock relative dock-md">
        <button class="dock-active">
          <span class="icon-[lucide--home] w-6 h-6"></span>
          <span class="dock-label">首页</span>
        </button>
        <button disabled>
          <span class="icon-[lucide--search] w-6 h-6"></span>
          <span class="dock-label">搜索</span>
        </button>
        <button>
          <span class="icon-[lucide--user] w-6 h-6"></span>
          <span class="dock-label">我的</span>
        </button>
      </div>
    </DocsSection>

    <DocsSection title="仅图标">
      <div class="h-64 bg-base-200 rounded-lg flex items-center justify-center">
        <p class="text-base-content/60">停靠栏显示在底部</p>
      </div>
      <div class="dock relative dock-md">
        <button class="dock-active">
          <span class="icon-[lucide--home] w-6 h-6"></span>
        </button>
        <button>
          <span class="icon-[lucide--search] w-6 h-6"></span>
        </button>
        <button>
          <span class="icon-[lucide--user] w-6 h-6"></span>
        </button>
      </div>
    </DocsSection>
  </DocsContainer>
</template>
