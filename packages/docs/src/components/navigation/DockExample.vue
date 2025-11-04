<script setup lang="ts">
import DocsHeader from '../zcomp/DocsHeader.vue'
import DocsContainer from '../zcomp/DocsContainer.vue'
import DocsSection from '../zcomp/DocsSection.vue'
import ApiReference from '../zcomp/ApiReference.vue'
import { Home, Search, Plus, Bell, User } from 'lucide-vue-next'

const apiClasses = [
  {
    category: '基础',
    className: 'dock',
    description: '底部固定导航栏容器。',
    isCategoryStart: true,
  },
  {
    category: '子元素',
    className: 'dock-label',
    description: '导航项标签文字。',
    isCategoryStart: true,
  },
  {
    category: '状态',
    className: 'dock-active',
    description: '高亮当前活跃的导航项。',
    isCategoryStart: true,
  },
  {
    category: '尺寸',
    className: 'dock-xs',
    description: '超小尺寸 Dock。',
    isCategoryStart: true,
  },
  {
    category: '尺寸',
    className: 'dock-sm',
    description: '小尺寸 Dock。',
    isCategoryStart: false,
  },
  {
    category: '尺寸',
    className: 'dock-md',
    description: '中等尺寸 Dock（默认）。',
    isCategoryStart: false,
  },
  {
    category: '尺寸',
    className: 'dock-lg',
    description: '大尺寸 Dock。',
    isCategoryStart: false,
  },
  {
    category: '尺寸',
    className: 'dock-xl',
    description: '超大尺寸 Dock。',
    isCategoryStart: false,
  },
]
</script>

<template>
  <DocsContainer>
    <DocsHeader
      title="Dock 底部导航栏"
      description="固定于屏幕底部的导航栏组件，常用于移动端底部菜单，支持多尺寸变体与激活状态。"
    />

    <ApiReference :data="apiClasses" />

    <!-- 基础 Dock -->
    <DocsSection title="基础 Dock">
      <div class="dock">
        <button>
          <Home class="size-5" />
          <span class="dock-label">首页</span>
        </button>
        <button>
          <Search class="size-5" />
          <span class="dock-label">搜索</span>
        </button>
        <button>
          <Plus class="size-5" />
          <span class="dock-label">发布</span>
        </button>
        <button>
          <Bell class="size-5" />
          <span class="dock-label">通知</span>
        </button>
        <button>
          <User class="size-5" />
          <span class="dock-label">我的</span>
        </button>
      </div>
    </DocsSection>

    <!-- 激活状态 -->
    <DocsSection title="激活状态">
      <div class="dock">
        <button class="dock-active">
          <Home class="size-5" />
          <span class="dock-label">首页</span>
        </button>
        <button>
          <Search class="size-5" />
          <span class="dock-label">搜索</span>
        </button>
        <button>
          <Plus class="size-5" />
          <span class="dock-label">发布</span>
        </button>
        <button>
          <Bell class="size-5" />
          <span class="dock-label">通知</span>
        </button>
        <button>
          <User class="size-5" />
          <span class="dock-label">我的</span>
        </button>
      </div>
    </DocsSection>

    <!-- 禁用状态 -->
    <DocsSection title="禁用状态">
      <div class="dock">
        <button class="dock-active">
          <Home class="size-5" />
          <span class="dock-label">首页</span>
        </button>
        <button aria-disabled="true">
          <Search class="size-5" />
          <span class="dock-label">搜索</span>
        </button>
        <button disabled>
          <Plus class="size-5" />
          <span class="dock-label">发布</span>
        </button>
        <button>
          <Bell class="size-5" />
          <span class="dock-label">通知</span>
        </button>
        <button>
          <User class="size-5" />
          <span class="dock-label">我的</span>
        </button>
      </div>
    </DocsSection>

    <!-- 尺寸变体 -->
    <DocsSection title="尺寸变体">
      <div class="flex flex-col gap-8">
        <div class="dock dock-xs">
          <button class="dock-active">
            <Home class="size-4" /><span class="dock-label">XS</span>
          </button>
          <button><Search class="size-4" /><span class="dock-label">XS</span></button>
        </div>

        <div class="dock dock-sm">
          <button class="dock-active">
            <Home class="size-5" /><span class="dock-label">SM</span>
          </button>
          <button><Search class="size-5" /><span class="dock-label">SM</span></button>
        </div>

        <div class="dock dock-md">
          <button class="dock-active">
            <Home class="size-5" /><span class="dock-label">MD</span>
          </button>
          <button><Search class="size-5" /><span class="dock-label">MD</span></button>
        </div>

        <div class="dock dock-lg">
          <button class="dock-active">
            <Home class="size-6" /><span class="dock-label">LG</span>
          </button>
          <button><Search class="size-6" /><span class="dock-label">LG</span></button>
        </div>

        <div class="dock dock-xl">
          <button class="dock-active">
            <Home class="size-6" /><span class="dock-label">XL</span>
          </button>
          <button><Search class="size-6" /><span class="dock-label">XL</span></button>
        </div>
      </div>
    </DocsSection>
  </DocsContainer>
</template>
