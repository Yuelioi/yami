<script setup lang="ts">
import DocsHeader from '../zcomp/DocsHeader.vue'
import DocsContainer from '../zcomp/DocsContainer.vue'
import DocsSection from '../zcomp/DocsSection.vue'
import ApiReference from '../zcomp/ApiReference.vue'

const apiClasses = [
  /* ================= 基础 ================= */
  {
    category: '基础',
    className: 'btn',
    description:
      '按钮基础样式，定义布局、尺寸变量、交互状态（hover / active / disabled / focus）。',
    isCategoryStart: true,
  },

  /* ================= 尺寸 ================= */
  { category: '尺寸', className: 'btn-xs', description: '超小尺寸按钮。', isCategoryStart: true },
  { category: '尺寸', className: 'btn-sm', description: '小尺寸按钮。' },
  { category: '尺寸', className: 'btn-md', description: '中等尺寸按钮（默认）。' },
  { category: '尺寸', className: 'btn-lg', description: '大尺寸按钮。' },
  { category: '尺寸', className: 'btn-xl', description: '超大尺寸按钮。' },

  /* ================= 颜色（实心） ================= */
  {
    category: '颜色（实心）',
    className: 'btn-primary',
    description: '主色按钮。',
    isCategoryStart: true,
  },
  { category: '颜色（实心）', className: 'btn-secondary', description: '次要按钮。' },
  { category: '颜色（实心）', className: 'btn-success', description: '成功状态按钮。' },
  { category: '颜色（实心）', className: 'btn-info', description: '信息提示按钮。' },
  { category: '颜色（实心）', className: 'btn-warning', description: '警告按钮。' },
  { category: '颜色（实心）', className: 'btn-destructive', description: '危险操作按钮。' },
  { category: '颜色（实心）', className: 'btn-accent', description: '强调色按钮。' },

  /* ================= 视觉变体 ================= */
  {
    category: '视觉变体',
    className: 'btn-outline',
    description: '描边按钮（透明背景，继承颜色变量）。',
    isCategoryStart: true,
  },
  { category: '视觉变体', className: 'btn-dash', description: '虚线描边按钮。' },
  { category: '视觉变体', className: 'btn-ghost', description: '幽灵按钮（hover 显示轻背景）。' },
  { category: '视觉变体', className: 'btn-soft', description: '柔和填充按钮（低对比）。' },
  { category: '视觉变体', className: 'btn-link', description: '链接样式按钮。' },
  { category: '视觉变体', className: 'btn-text', description: '纯文本按钮（无边框）。' },
  { category: '视觉变体', className: 'btn-tint', description: '带轻背景色的描边按钮。' },

  /* ================= 图标 ================= */
  {
    category: '图标',
    className: 'btn-icon',
    description: '图标按钮，强制正方形比例。',
    isCategoryStart: true,
  },
  { category: '图标', className: 'btn-icon-sm', description: '小尺寸图标按钮内边距。' },
  { category: '图标', className: 'btn-icon-lg', description: '大尺寸图标按钮内边距。' },
  { category: '图标', className: 'btn-icon-tight', description: '紧凑图标与文字间距。' },
  { category: '图标', className: 'btn-icon-loose', description: '宽松图标与文字间距。' },
  { category: '图标', className: 'btn-icon-none', description: '移除图标与文字间距。' },

  /* ================= 形状 ================= */
  {
    category: '形状',
    className: 'btn-square',
    description: '正方形按钮。',
    isCategoryStart: true,
  },
  { category: '形状', className: 'btn-circle', description: '圆形按钮。' },

  /* ================= 宽度 ================= */
  {
    category: '宽度',
    className: 'btn-block',
    description: '按钮占满父容器宽度。',
    isCategoryStart: true,
  },
  { category: '宽度', className: 'btn-wide', description: '限制最大宽度的宽按钮。' },

  /* ================= 状态 ================= */
  {
    category: '状态',
    className: 'btn-loading',
    description: '加载中状态（隐藏内容，居中 spinner）。',
    isCategoryStart: true,
  },
  { category: '状态', className: 'btn-loading-with-text', description: '加载中状态（保留文字）。' },
  { category: '状态', className: 'btn-loading-center', description: 'spinner 居中显示。' },
  { category: '状态', className: 'btn-active', description: '强制激活态样式。' },
  { category: '状态', className: 'btn-pressed', description: '模拟按压状态。' },

  /* ================= 效果 / 动效 ================= */
  {
    category: '效果',
    className: 'btn-shadow',
    description: '添加基础阴影。',
    isCategoryStart: true,
  },
  { category: '效果', className: 'btn-lift', description: 'Hover 上浮效果。' },
  { category: '效果', className: 'btn-gradient', description: '渐变背景按钮。' },
  { category: '效果', className: 'btn-gradient-horizontal', description: '横向渐变按钮。' },
  { category: '效果', className: 'btn-pulse', description: '脉冲动画效果。' },
  { category: '效果', className: 'btn-pulse-primary', description: '基于按钮颜色的脉冲动画。' },
  { category: '效果', className: 'btn-ripple', description: '点击涟漪效果。' },
  { category: '效果', className: 'btn-3d', description: '3D 按压立体按钮效果。' },
  { category: '效果', className: 'btn-solid-border', description: '加粗边框样式。' },

  /* ================= 分组 ================= */
  {
    category: '分组',
    className: 'btn-group',
    description: '水平按钮组。',
    isCategoryStart: true,
  },
  { category: '分组', className: 'btn-group-vertical', description: '垂直按钮组。' },
]
</script>

<template>
  <DocsContainer>
    <DocsHeader
      title="Button 按钮"
      description="用于触发操作的核心交互组件。支持尺寸、颜色、形态、状态与动效的高度组合。"
    />

    <ApiReference :data="apiClasses" />

    <!-- 基础 -->
    <DocsSection title="基础用法">
      <div class="flex gap-2 flex-wrap">
        <button class="btn">Default</button>
        <button class="btn btn-primary">Primary</button>
        <button class="btn btn-secondary">Secondary</button>
        <button class="btn btn-destructive">Destructive</button>
      </div>
    </DocsSection>

    <!-- 尺寸 -->
    <DocsSection title="尺寸">
      <div class="flex gap-2 flex-wrap items-center">
        <button class="btn btn-xs btn-primary">XS</button>
        <button class="btn btn-sm btn-primary">SM</button>
        <button class="btn btn-md btn-primary">MD</button>
        <button class="btn btn-lg btn-primary">LG</button>
        <button class="btn btn-xl btn-primary">XL</button>
      </div>
    </DocsSection>

    <!-- 颜色 -->
    <DocsSection title="颜色（实心）">
      <div class="flex gap-2 flex-wrap">
        <button class="btn btn-primary">Primary</button>
        <button class="btn btn-success">Success</button>
        <button class="btn btn-info">Info</button>
        <button class="btn btn-warning">Warning</button>
        <button class="btn btn-destructive">Destructive</button>
        <button class="btn btn-accent">Accent</button>
      </div>
    </DocsSection>

    <!-- 视觉变体 -->
    <DocsSection title="视觉变体">
      <div class="flex flex-col gap-3">
        <div class="flex gap-2 flex-wrap">
          <button class="btn btn-outline btn-primary">Outline</button>
          <button class="btn btn-dash btn-primary">Dash</button>
          <button class="btn btn-ghost btn-primary">Ghost</button>
          <button class="btn btn-soft btn-primary">Soft</button>
          <button class="btn btn-tint btn-primary">Tint</button>
        </div>
        <div class="flex gap-2 flex-wrap">
          <button class="btn btn-text btn-primary">Text</button>
          <button class="btn btn-link btn-primary">Link</button>
        </div>
      </div>
    </DocsSection>

    <!-- 图标 -->
    <DocsSection title="图标按钮">
      <div class="flex gap-3 flex-wrap items-center">
        <button class="btn btn-icon btn-outline btn-primary">
          <span class="icon-[lucide--user] size-4" />
        </button>
        <button class="btn btn-icon btn-circle btn-primary">
          <span class="icon-[lucide--heart] size-4" />
        </button>
        <button class="btn btn-primary btn-icon-tight">
          <span class="icon-[lucide--plus] size-4" />
          Add
        </button>
        <button class="btn btn-primary btn-icon-loose">
          <span class="icon-[lucide--settings] size-4" />
          Settings
        </button>
      </div>
    </DocsSection>

    <!-- 状态 -->
    <DocsSection title="状态">
      <div class="flex gap-3 flex-wrap">
        <button class="btn btn-primary btn-active">Active</button>
        <button class="btn btn-primary btn-pressed">Pressed</button>
        <button class="btn btn-primary btn-loading"></button>
        <button class="btn btn-primary btn-loading-with-text">Loading</button>
        <button class="btn btn-primary" disabled>Disabled</button>
      </div>
    </DocsSection>

    <!-- 效果 -->
    <DocsSection title="增强效果">
      <div class="flex gap-3 flex-wrap">
        <button class="btn btn-primary btn-shadow">Shadow</button>
        <button class="btn btn-primary btn-lift">Lift</button>
        <button class="btn btn-primary btn-gradient">Gradient</button>
        <button class="btn btn-primary btn-gradient-horizontal">Gradient H</button>
        <button class="btn btn-primary btn-pulse-primary">Pulse</button>
        <button class="btn btn-primary btn-ripple">Ripple</button>
        <button class="btn btn-primary btn-3d">3D</button>
      </div>
    </DocsSection>

    <!-- 宽度 -->
    <DocsSection title="宽度">
      <div class="flex gap-3 flex-wrap">
        <button class="btn btn-primary btn-block">Block Button</button>
        <button class="btn btn-primary btn-wide">Wide Button</button>
      </div>
    </DocsSection>

    <!-- 分组 -->
    <DocsSection title="按钮分组">
      <div class="flex gap-6 flex-wrap">
        <div class="btn-group">
          <button class="btn btn-primary">Left</button>
          <button class="btn btn-primary">Middle</button>
          <button class="btn btn-primary">Right</button>
        </div>

        <div class="btn-group-vertical">
          <button class="btn btn-secondary">Top</button>
          <button class="btn btn-secondary">Center</button>
          <button class="btn btn-secondary">Bottom</button>
        </div>
      </div>
    </DocsSection>
  </DocsContainer>
</template>
