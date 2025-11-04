<script setup lang="ts">
import DocsHeader from '../zcomp/DocsHeader.vue'
import DocsContainer from '../zcomp/DocsContainer.vue'
import DocsSection from '../zcomp/DocsSection.vue'
import ApiReference from '../zcomp/ApiReference.vue'

const apiClasses = [
  {
    category: '基础',
    className: 'hover-card',
    description: '悬浮卡片容器，用于包裹触发元素与内容。',
    isCategoryStart: true,
  },
  {
    category: '基础',
    className: 'hover-card-content',
    description: '卡片内容区域，悬停时显示。',
    isCategoryStart: false,
  },
  {
    category: '基础',
    className:
      'hover-card-header / hover-card-title / hover-card-description / hover-card-body / hover-card-footer',
    description: '卡片内部结构块。',
    isCategoryStart: false,
  },
  {
    category: '对齐方式',
    className: 'hover-card-center',
    description: '卡片内容水平居中显示。',
    isCategoryStart: true,
  },
  {
    category: '对齐方式',
    className: 'hover-card-right',
    description: '卡片内容靠右显示。',
    isCategoryStart: false,
  },
  {
    category: '宽度变体',
    className: 'hover-card-sm',
    description: '小尺寸卡片，220px 宽。',
    isCategoryStart: true,
  },
  {
    category: '宽度变体',
    className: 'hover-card-md',
    description: '中等尺寸卡片，320px 宽。',
    isCategoryStart: false,
  },
  {
    category: '宽度变体',
    className: 'hover-card-lg',
    description: '大尺寸卡片，400px 宽。',
    isCategoryStart: false,
  },
  {
    category: '显示控制',
    className: 'hover-card-delay',
    description: '延迟显示卡片（0.3s 延迟）。',
    isCategoryStart: true,
  },
  {
    category: '显示控制',
    className: 'hover-card-open',
    description: '强制显示卡片（始终可见）。',
    isCategoryStart: false,
  },
  {
    category: '布局修饰',
    className: 'hover-card-compact',
    description: '紧凑版卡片，减少内边距与字体。',
    isCategoryStart: true,
  },
  {
    category: '布局修饰',
    className: 'hover-card-simple',
    description: '仅内容区域样式，适合展示简短提示。',
    isCategoryStart: false,
  },
]
</script>

<template>
  <DocsContainer>
    <DocsHeader
      title="Hover Card 悬浮卡片组件"
      description="用于在悬停时展示额外信息、预览内容或操作提示。支持多种宽度、对齐、延迟与紧凑样式。"
    />

    <ApiReference :data="apiClasses" />

    <!-- 基础示例 -->
    <DocsSection title="基础示例">
      <div class="flex gap-8">
        <div class="hover-card">
          <button class="px-3 py-2 border rounded-md bg-background">悬停查看</button>
          <div class="hover-card-content">
            <div class="hover-card-header">
              <div class="hover-card-title">Hover Card 标题</div>
              <div class="hover-card-description">这是一个简单的悬浮卡片描述。</div>
            </div>
            <div class="hover-card-body">内容区域可以放置任意文字、图片或操作按钮。</div>
          </div>
        </div>

        <div class="hover-card hover-card-right">
          <button class="px-3 py-2 border rounded-md bg-background">靠右显示</button>
          <div class="hover-card-content">
            <div class="hover-card-header">
              <div class="hover-card-title">右对齐卡片</div>
              <div class="hover-card-description">卡片靠右边缘展示。</div>
            </div>
          </div>
        </div>
      </div>
    </DocsSection>

    <!-- 居中与延迟 -->
    <DocsSection title="居中与延迟显示">
      <div class="flex gap-8">
        <div class="hover-card hover-card-center">
          <button class="px-3 py-2 border rounded-md bg-background">居中显示</button>
          <div class="hover-card-content">
            <div class="hover-card-body">这是居中对齐的悬浮卡片。</div>
          </div>
        </div>

        <div class="hover-card hover-card-delay">
          <button class="px-3 py-2 border rounded-md bg-background">延迟显示</button>
          <div class="hover-card-content">
            <div class="hover-card-body">悬停 0.3 秒后出现。</div>
          </div>
        </div>
      </div>
    </DocsSection>

    <!-- 宽度与紧凑模式 -->
    <DocsSection title="宽度与紧凑模式">
      <div class="flex gap-8">
        <div class="hover-card hover-card-sm">
          <button class="px-3 py-2 border rounded-md bg-background">小号</button>
          <div class="hover-card-content">
            <div class="hover-card-body">220px 宽的小号卡片。</div>
          </div>
        </div>

        <div class="hover-card hover-card-lg hover-card-compact">
          <button class="px-3 py-2 border rounded-md bg-background">紧凑模式</button>
          <div class="hover-card-content">
            <div class="hover-card-header">
              <div class="hover-card-title">紧凑卡片</div>
            </div>
            <div class="hover-card-body">减少内边距，更轻量。</div>
            <div class="hover-card-footer">底部文字</div>
          </div>
        </div>
      </div>
    </DocsSection>

    <!-- 简化版与始终显示 -->
    <DocsSection title="简化版与始终显示">
      <div class="flex gap-8">
        <div class="hover-card hover-card-simple">
          <button class="px-3 py-2 border rounded-md bg-background">简化版</button>
          <div class="hover-card-content">只显示简单内容。</div>
        </div>

        <div class="hover-card hover-card-open">
          <button class="px-3 py-2 border rounded-md bg-background">始终显示</button>
          <div class="hover-card-content">
            <div class="hover-card-body">此卡片始终可见。</div>
          </div>
        </div>
      </div>
    </DocsSection>
  </DocsContainer>
</template>
