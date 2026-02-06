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
    <DocsSection title="基础用法" description="垂直排列">
      <div class="relative bg-muted/20 rounded-xl h-24">
        <div class="fab absolute">
          <div
            tabindex="0"
            role="button"
            class="btn btn-pill btn-primary size-12 shadow-lg"
          >
            <Plus class="w-6 h-6" />
          </div>

          <button class="btn btn-secondary btn-pill size-12 shadow-md">
            <Edit class="w-5 h-5" />
          </button>
          <button class="btn btn-accent btn-pill size-12 shadow-md">
            <Share2 class="w-5 h-5" />
          </button>
          <button class="btn btn-destructive btn-pill size-12 shadow-md">
            <Trash2 class="w-5 h-5" />
          </button>
        </div>
      </div>
    </DocsSection>

    <!-- 花瓣 FAB -->
    <DocsSection title="Flower 布局 FAB" description="散开布局">
      <div class="relative bg-muted/20 rounded-xl h-24">
        <div class="fab fab-flower absolute">
          <div
            tabindex="0"
            role="button"
            class="btn btn-pill btn-primary size-12 shadow-lg"
          >
            <Plus class="w-6 h-6" />
          </div>

          <div class="fab-close">
            <div class="btn btn-pill btn-primary size-12 shadow-lg">
              <X class="w-6 h-6" />
            </div>
          </div>

          <button class="btn btn-secondary size-12 shadow-md">
            <Edit class="w-5 h-5" />
          </button>
          <button class="btn btn-accent size-12 shadow-md">
            <Share2 class="w-5 h-5" />
          </button>
          <button class="btn btn-destructive size-12 shadow-md">
            <Trash2 class="w-5 h-5" />
          </button>
        </div>
      </div>
    </DocsSection>

    <!-- 用法说明 -->
    <DocsSection title="用法提示">
      <ul class="list-disc pl-6 space-y-2 text-muted-foreground text-sm">
        <li>主按钮使用 <code>&lt;div tabindex="0" role="button"&gt;</code> 而不是 <code>&lt;button&gt;</code>，以兼容 Safari。</li>
        <li>当主按钮获得焦点时（点击或键盘导航），子操作项自动展开。</li>
        <li>点击其他地方会失去焦点，子操作项自动收起。</li>
        <li>可使用 <code>.fab-flower</code> 类让子项环绕主按钮展开。</li>
        <li><code>.fab-close</code> 或 <code>.fab-main-action</code> 可作为关闭按钮。</li>
        <li>纯 CSS 实现，无需 JavaScript，支持键盘无障碍访问。</li>
      </ul>
    </DocsSection>
  </DocsContainer>
</template>
