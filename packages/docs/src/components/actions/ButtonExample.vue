<script setup lang="ts">
import DocsHeader from '../zcomp/DocsHeader.vue'
import DocsContainer from '../zcomp/DocsContainer.vue'
import DocsSection from '../zcomp/DocsSection.vue'
import ApiReference from '../zcomp/ApiReference.vue'

const apiClasses = [
  {
    category: '基础',
    className: 'btn',
    description: '按钮基础样式，包含布局、边框、交互、尺寸等定义。',
    isCategoryStart: true,
  },

  // 尺寸
  { category: '尺寸', className: 'btn-xs', description: '超小尺寸按钮。', isCategoryStart: true },
  { category: '尺寸', className: 'btn-sm', description: '小尺寸按钮。' },
  { category: '尺寸', className: 'btn-md', description: '中等尺寸按钮 (默认)。' },
  { category: '尺寸', className: 'btn-lg', description: '大尺寸按钮。' },
  { category: '尺寸', className: 'btn-xl', description: '超大尺寸按钮。' },

  // 实心
  {
    category: '实心',
    className: 'btn-primary',
    description: '默认主色按钮。',
    isCategoryStart: true,
  },
  { category: '实心', className: 'btn-secondary', description: '次要按钮。' },
  { category: '实心', className: 'btn-destructive', description: '危险操作按钮。' },
  { category: '实心', className: 'btn-muted', description: '灰色按钮。' },

  // 描边
  {
    category: '描边',
    className: 'btn-outline',
    description: '默认描边按钮。',
    isCategoryStart: true,
  },
  { category: '描边', className: 'btn-outline btn-primary', description: '主色描边按钮。' },
  { category: '描边', className: 'btn-outline btn-secondary', description: '次色描边按钮。' },
  { category: '描边', className: 'btn-outline btn-destructive', description: '危险描边按钮。' },

  // 幽灵
  {
    category: '幽灵',
    className: 'btn-ghost',
    description: '默认幽灵按钮。',
    isCategoryStart: true,
  },
  { category: '幽灵', className: 'btn-ghost btn-primary', description: '主色幽灵按钮。' },
  { category: '幽灵', className: 'btn-ghost btn-secondary', description: '次色幽灵按钮。' },
  { category: '幽灵', className: 'btn-ghost btn-destructive', description: '危险幽灵按钮。' },

  // 特殊
  { category: '特殊', className: 'btn-link', description: '链接样式按钮。', isCategoryStart: true },

  // 图标
  {
    category: '图标',
    className: 'btn-icon',
    description: '正方形图标按钮基础样式。',
    isCategoryStart: true,
  },
  { category: '图标', className: 'btn-icon-sm', description: '小号图标按钮。' },
  { category: '图标', className: 'btn-icon-md', description: '中号图标按钮 (默认)。' },
  { category: '图标', className: 'btn-icon-lg', description: '大号图标按钮。' },

  // 形状
  { category: '形状', className: 'btn-pill', description: '全圆角按钮。', isCategoryStart: true },
  { category: '形状', className: 'btn-square', description: '无圆角按钮。' },

  // 宽度
  {
    category: '宽度',
    className: 'btn-full',
    description: '占满容器宽度。',
    isCategoryStart: true,
  },
  { category: '宽度', className: 'btn-wide', description: '限制最大宽度的宽按钮。' },

  // 效果
  {
    category: '效果',
    className: 'btn-shadow',
    description: '带阴影的按钮。',
    isCategoryStart: true,
  },
  { category: '效果', className: 'btn-lift', description: '悬浮上移按钮。' },

  // 状态
  {
    category: '状态',
    className: 'btn-loading',
    description: '加载中按钮，显示旋转动画。',
    isCategoryStart: true,
  },
]
</script>

<template>
  <DocsContainer>
    <DocsHeader
      title="Button 按钮"
      description="按钮组件，用于触发操作。支持尺寸、颜色、形状、状态与特效等多种变体。"
    />

    <ApiReference :data="apiClasses" />

    <!-- 基础按钮 -->
    <DocsSection title="基础按钮">
      <div class="flex gap-2 flex-wrap">
        <button class="btn">默认按钮</button>
        <button class="btn btn-primary">主色按钮</button>
        <button class="btn btn-secondary">次色按钮</button>
        <button class="btn btn-destructive">危险按钮</button>
      </div>
    </DocsSection>

    <!-- 尺寸变体 -->
    <DocsSection title="尺寸变体">
      <div class="flex gap-2 flex-wrap items-center">
        <button class="btn btn-xs btn-primary">XS</button>
        <button class="btn btn-sm btn-primary">SM</button>
        <button class="btn btn-md btn-primary">MD</button>
        <button class="btn btn-lg btn-primary">LG</button>
        <button class="btn btn-xl btn-primary">XL</button>
      </div>
    </DocsSection>

    <!-- 配色变体 -->
    <DocsSection title="配色变体">
      <div class="flex flex-col gap-4">
        <div class="flex gap-2 flex-wrap">
          <button class="btn btn-primary">默认</button>
          <button class="btn btn-secondary">次要</button>
          <button class="btn btn-destructive">警告</button>
          <button class="btn btn-muted">灰色</button>
        </div>

        <div class="flex gap-2 flex-wrap">
          <button class="btn btn-outline">描边</button>
          <button class="btn btn-outline btn-primary">主色描边</button>
          <button class="btn btn-outline btn-secondary">次色描边</button>
          <button class="btn btn-outline btn-destructive">危险描边</button>
        </div>

        <div class="flex gap-2 flex-wrap">
          <button class="btn btn-ghost">幽灵</button>
          <button class="btn btn-ghost btn-primary">主色幽灵</button>
          <button class="btn btn-ghost btn-secondary">次色幽灵</button>
          <button class="btn btn-ghost btn-destructive">危险幽灵</button>
        </div>
      </div>
    </DocsSection>

    <!-- 图标按钮 -->
    <DocsSection title="图标按钮">
      <div class="flex gap-3 flex-wrap items-center">
        <button class="btn btn-icon btn-icon-sm btn-primary">
          <i class="i-lucide:star"></i>
        </button>
        <button class="btn btn-icon btn-icon-md btn-secondary">
          <i class="i-lucide:heart"></i>
        </button>
        <button class="btn btn-icon btn-icon-lg btn-destructive">
          <i class="i-lucide:trash"></i>
        </button>
      </div>
    </DocsSection>

    <!-- 形状 -->
    <DocsSection title="形状与宽度">
      <div class="flex gap-4 flex-wrap">
        <button class="btn btn-primary btn-pill">圆角</button>
        <button class="btn btn-primary btn-square">方形</button>
        <button class="btn btn-primary btn-full">整行按钮</button>
        <button class="btn btn-primary btn-wide">宽按钮</button>
      </div>
    </DocsSection>

    <!-- 增强效果 -->
    <DocsSection title="增强效果">
      <div class="flex gap-3 flex-wrap">
        <button class="btn btn-primary btn-shadow">阴影按钮</button>
        <button class="btn btn-primary btn-lift">悬浮按钮</button>
      </div>
    </DocsSection>

    <!-- 加载状态 -->
    <DocsSection title="加载状态">
      <div class="flex gap-3 flex-wrap">
        <button class="btn btn-primary btn-loading">加载中...</button>
        <button class="btn btn-secondary btn-loading">处理中</button>
      </div>
    </DocsSection>
  </DocsContainer>
</template>
