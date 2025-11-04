<script setup lang="ts">
import DocsHeader from '../zcomp/DocsHeader.vue'
import DocsContainer from '../zcomp/DocsContainer.vue'
import DocsSection from '../zcomp/DocsSection.vue'
import ApiReference from '../zcomp/ApiReference.vue'
import { Plus, X, Share2, Edit, Trash2 } from 'lucide-vue-next'

const apiClasses = [
  {
    category: '基础',
    className: 'fab',
    description: 'FAB 主容器，固定在屏幕角落，支持展开多个操作项。',
    isCategoryStart: true,
  },
  {
    category: '变体',
    className: 'fab-flower',
    description: '花瓣布局，操作项围绕主按钮环形展开。',
    isCategoryStart: true,
  },
]
</script>

<template>
  <DocsContainer>
    <DocsHeader
      title="FAB 浮动操作按钮"
      description="用于快速触发主要或常用操作的悬浮按钮组件，支持垂直展开与花瓣式布局。"
    />

    <ApiReference :data="apiClasses" />

    <!-- 基础 FAB -->
    <DocsSection title="基础 FAB" description="垂直排列">
      <div class="relative bg-muted/20 rounded-xl overflow-hidden">
        <div class="fab right-48">
          <!-- 主按钮 -->
          <button tabindex="0" class="btn btn-primary rounded-full size-14 shadow-lg">
            <Plus class="w-6 h-6" />
          </button>

          <!-- 子操作项 -->
          <button class="btn btn-secondary rounded-full size-12 shadow-md">
            <Edit class="w-5 h-5" />
          </button>
          <button class="btn btn-accent rounded-full size-12 shadow-md">
            <Share2 class="w-5 h-5" />
          </button>
          <button class="btn btn-destructive rounded-full size-12 shadow-md">
            <Trash2 class="w-5 h-5" />
          </button>
        </div>
      </div>
    </DocsSection>

    <!-- 花瓣 FAB -->
    <DocsSection title="Flower 布局 FAB" description="散开布局">
      <div class="relative bg-muted/20 rounded-xl overflow-hidden">
        <div class="fab fab-flower">
          <!-- 主按钮 -->
          <button tabindex="0" class="btn btn-primary rounded-full size-14 shadow-lg">
            <Plus class="w-6 h-6" />
          </button>

          <!-- 关闭按钮 -->
          <button class="fab-close btn btn-primary rounded-full size-14 shadow-lg">
            <X class="w-6 h-6" />
          </button>

          <!-- 子项 -->
          <button class="btn btn-secondary rounded-full size-12 shadow-md">
            <Edit class="w-5 h-5" />
          </button>
          <button class="btn btn-accent rounded-full size-12 shadow-md">
            <Share2 class="w-5 h-5" />
          </button>
          <button class="btn btn-destructive rounded-full size-12 shadow-md">
            <Trash2 class="w-5 h-5" />
          </button>
        </div>
      </div>
    </DocsSection>

    <!-- 用法说明 -->
    <DocsSection title="用法提示">
      <ul class="list-disc pl-6 space-y-2 text-muted-foreground text-sm">
        <li>主按钮通常放在右下角，使用 <code>.fab</code> 类。</li>
        <li>当主按钮聚焦时（如点击或键盘导航），子操作项自动展开。</li>
        <li>可使用 <code>.fab-flower</code> 类让子项环绕主按钮展开。</li>
        <li><code>.fab-close</code> 或 <code>.fab-main-action</code> 可作为关闭 / 切换按钮。</li>
        <li>通过设置 <code>z-index</code>、<code>transition-delay</code> 控制展开动画层次。</li>
      </ul>
    </DocsSection>
  </DocsContainer>
</template>
