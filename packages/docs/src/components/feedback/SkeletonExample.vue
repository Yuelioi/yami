<script setup lang="ts">
import DocsHeader from '../zcomp/DocsHeader.vue'
import ApiReference from '../zcomp/ApiReference.vue'
import DocsContainer from '../zcomp/DocsContainer.vue'
import DocsSection from '../zcomp/DocsSection.vue'

/**
 * Skeleton API Reference
 * ✅ 所有 class 均在 CSS 中真实存在
 * 按照新的变量提取方式组织
 */
const apiClasses = [
  // ========================================
  // 动画基础类
  // ========================================
  {
    category: '动画基础',
    className: 'skeleton',
    description: '基础骨架（默认脉冲动画），使用 var(--skeleton-duration-pulse)。',
    isCategoryStart: true,
  },
  {
    category: '动画基础',
    className: 'skeleton-wave',
    description: '波浪渐变骨架，使用 var(--skeleton-duration-wave)。',
  },
  {
    category: '动画基础',
    className: 'skeleton-shimmer',
    description: '闪烁动画骨架，轻量级动画。',
  },
  {
    category: '动画基础',
    className: 'skeleton-static',
    description: '静态骨架（无动画），禁用动画时使用。',
  },

  // ========================================
  // 文本骨架 - Skeleton Text
  // ========================================
  {
    category: '文本骨架',
    className: 'skeleton-text-xs',
    description: '极小文本行（h: var(--skeleton-text-height-xs)）。',
    isCategoryStart: true,
  },
  {
    category: '文本骨架',
    className: 'skeleton-text-sm',
    description: '小文本行（h: var(--skeleton-text-height-sm)）。',
  },
  {
    category: '文本骨架',
    className: 'skeleton-text',
    description: '标准文本行（h: var(--skeleton-text-height-base)）。',
  },
  {
    category: '文本骨架',
    className: 'skeleton-text-base',
    description: '标准文本行别名（h: var(--skeleton-text-height-base)）。',
  },
  {
    category: '文本骨架',
    className: 'skeleton-text-lg',
    description: '大文本行（h: var(--skeleton-text-height-lg)）。',
  },
  {
    category: '文本骨架',
    className: 'skeleton-text-xl',
    description: '特大文本行（h: var(--skeleton-text-height-xl)）。',
  },
  {
    category: '文本骨架',
    className: 'skeleton-text-2xl',
    description: '超大文本行（h: var(--skeleton-text-height-2xl)）。',
  },

  // ========================================
  // 标题骨架 - Skeleton Title
  // ========================================
  {
    category: '标题骨架',
    className: 'skeleton-title-sm',
    description: '小标题（h: var(--skeleton-title-height-sm)，w: 66.666%）。',
    isCategoryStart: true,
  },
  {
    category: '标题骨架',
    className: 'skeleton-title',
    description:
      '标准标题（h: var(--skeleton-title-height-base)，w: var(--skeleton-title-width)）。',
  },
  {
    category: '标题骨架',
    className: 'skeleton-title-base',
    description: '标准标题别名（h: var(--skeleton-title-height-base)）。',
  },
  {
    category: '标题骨架',
    className: 'skeleton-title-lg',
    description: '大标题（h: var(--skeleton-title-height-lg)，w: 80%）。',
  },
  {
    category: '标题骨架',
    className: 'skeleton-title-xl',
    description: '特大标题（h: var(--skeleton-title-height-xl)，w: 85%）。',
  },

  // ========================================
  // 圆形骨架 - Skeleton Circle / Avatar
  // ========================================
  {
    category: '圆形骨架',
    className: 'skeleton-avatar-xs',
    description: '极小头像（size: var(--skeleton-circle-size-xs)）。',
    isCategoryStart: true,
  },
  {
    category: '圆形骨架',
    className: 'skeleton-avatar-sm',
    description: '小头像（size: var(--skeleton-circle-size-sm)）。',
  },
  {
    category: '圆形骨架',
    className: 'skeleton-avatar',
    description: '标准头像（size: var(--skeleton-circle-size-md)）。',
  },
  {
    category: '圆形骨架',
    className: 'skeleton-avatar-lg',
    description: '大头像（size: var(--skeleton-circle-size-lg)）。',
  },
  {
    category: '圆形骨架',
    className: 'skeleton-avatar-xl',
    description: '特大头像（size: var(--skeleton-circle-size-xl)）。',
  },
  {
    category: '圆形骨架',
    className: 'skeleton-avatar-2xl',
    description: '超大头像（size: var(--skeleton-circle-size-2xl)）。',
  },
  {
    category: '圆形骨架',
    className: 'skeleton-circle',
    description: '自定义圆形（aspect: 1，radius: var(--skeleton-border-radius-circle)）。',
  },

  // ========================================
  // 图片骨架 - Skeleton Image
  // ========================================
  {
    category: '图片骨架',
    className: 'skeleton-image',
    description: '视频比例图片（16:9，aspect: var(--skeleton-image-aspect-video)）。',
    isCategoryStart: true,
  },
  {
    category: '图片骨架',
    className: 'skeleton-image-square',
    description: '方形图片（1:1，aspect: var(--skeleton-image-aspect-square)）。',
  },
  {
    category: '图片骨架',
    className: 'skeleton-image-wide',
    description: '宽屏图片（21:9，aspect: var(--skeleton-image-aspect-wide)）。',
  },
  {
    category: '图片骨架',
    className: 'skeleton-image-portrait',
    description: '竖屏图片（3:4，aspect: var(--skeleton-image-aspect-portrait)）。',
  },
  {
    category: '图片骨架',
    className: 'skeleton-image-mobile',
    description: '手机竖屏（9:16，aspect: var(--skeleton-image-aspect-mobile)）。',
  },

  // ========================================
  // 按钮骨架 - Skeleton Button
  // ========================================
  {
    category: '按钮骨架',
    className: 'skeleton-button-xs',
    description:
      '极小按钮（h: var(--skeleton-button-height-xs)，w: var(--skeleton-button-width-xs)）。',
    isCategoryStart: true,
  },
  {
    category: '按钮骨架',
    className: 'skeleton-button-sm',
    description:
      '小按钮（h: var(--skeleton-button-height-sm)，w: var(--skeleton-button-width-sm)）。',
  },
  {
    category: '按钮骨架',
    className: 'skeleton-button',
    description:
      '标准按钮（h: var(--skeleton-button-height-md)，w: var(--skeleton-button-width-md)）。',
  },
  {
    category: '按钮骨架',
    className: 'skeleton-button-lg',
    description:
      '大按钮（h: var(--skeleton-button-height-lg)，w: var(--skeleton-button-width-lg)）。',
  },
  {
    category: '按钮骨架',
    className: 'skeleton-button-xl',
    description:
      '特大按钮（h: var(--skeleton-button-height-xl)，w: var(--skeleton-button-width-xl)）。',
  },

  // ========================================
  // 输入框骨架 - Skeleton Input
  // ========================================
  {
    category: '输入框骨架',
    className: 'skeleton-input-xs',
    description: '极小输入框（h: var(--skeleton-input-height-xs)，w: 100%）。',
    isCategoryStart: true,
  },
  {
    category: '输入框骨架',
    className: 'skeleton-input-sm',
    description: '小输入框（h: var(--skeleton-input-height-sm)，w: 100%）。',
  },
  {
    category: '输入框骨架',
    className: 'skeleton-input',
    description: '标准输入框（h: var(--skeleton-input-height-md)，w: 100%）。',
  },
  {
    category: '输入框骨架',
    className: 'skeleton-input-lg',
    description: '大输入框（h: var(--skeleton-input-height-lg)，w: 100%）。',
  },
  {
    category: '输入框骨架',
    className: 'skeleton-input-xl',
    description: '特大输入框（h: var(--skeleton-input-height-xl)，w: 100%）。',
  },

  // ========================================
  // 徽章骨架 - Skeleton Badge
  // ========================================
  {
    category: '徽章骨架',
    className: 'skeleton-badge-xs',
    description:
      '极小徽章（h: var(--skeleton-badge-height-xs)，w: var(--skeleton-badge-width-xs)）。',
    isCategoryStart: true,
  },
  {
    category: '徽章骨架',
    className: 'skeleton-badge-sm',
    description:
      '小徽章（h: var(--skeleton-badge-height-sm)，w: var(--skeleton-badge-width-sm)）。',
  },
  {
    category: '徽章骨架',
    className: 'skeleton-badge',
    description:
      '标准徽章（h: var(--skeleton-badge-height-md)，w: var(--skeleton-badge-width-md)）。',
  },
  {
    category: '徽章骨架',
    className: 'skeleton-badge-lg',
    description:
      '大徽章（h: var(--skeleton-badge-height-lg)，w: var(--skeleton-badge-width-lg)）。',
  },

  // ========================================
  // 进度条骨架 - Skeleton Progress
  // ========================================
  {
    category: '进度条骨架',
    className: 'skeleton-progress-xs',
    description: '极小进度条（h: var(--skeleton-progress-height-xs)，w: 100%）。',
    isCategoryStart: true,
  },
  {
    category: '进度条骨架',
    className: 'skeleton-progress-sm',
    description: '小进度条（h: var(--skeleton-progress-height-sm)，w: 100%）。',
  },
  {
    category: '进度条骨架',
    className: 'skeleton-progress',
    description: '标准进度条（h: var(--skeleton-progress-height-md)，w: 100%）。',
  },
  {
    category: '进度条骨架',
    className: 'skeleton-progress-lg',
    description: '大进度条（h: var(--skeleton-progress-height-lg)，w: 100%）。',
  },

  // ========================================
  // 段落骨架 - Skeleton Paragraph
  // ========================================
  {
    category: '段落骨架',
    className: 'skeleton-paragraph',
    description: '段落骨架（gap: var(--skeleton-paragraph-gap-normal)）。',
    isCategoryStart: true,
  },
  {
    category: '段落骨架',
    className: 'skeleton-paragraph-compact',
    description: '紧凑段落（gap: var(--skeleton-paragraph-gap-compact)）。',
  },
  {
    category: '段落骨架',
    className: 'skeleton-paragraph-loose',
    description: '宽松段落（gap: var(--skeleton-paragraph-gap-loose)）。',
  },

  // ========================================
  // 列表项骨架 - Skeleton List Item
  // ========================================
  {
    category: '列表项骨架',
    className: 'skeleton-list-item-sm',
    description:
      '小列表项（gap: var(--skeleton-list-item-gap-sm)，padding: var(--skeleton-list-item-padding-sm)）。',
    isCategoryStart: true,
  },
  {
    category: '列表项骨架',
    className: 'skeleton-list-item',
    description:
      '标准列表项（gap: var(--skeleton-list-item-gap-md)，padding: var(--skeleton-list-item-padding-md)）。',
  },
  {
    category: '列表项骨架',
    className: 'skeleton-list-item-lg',
    description:
      '大列表项（gap: var(--skeleton-list-item-gap-lg)，padding: var(--skeleton-list-item-padding-lg)）。',
  },
  {
    category: '列表项骨架',
    className: 'skeleton-list-content',
    description: '列表内容容器（flex-direction: column，gap: var(--skeleton-list-content-gap)）。',
  },

  // ========================================
  // 卡片骨架 - Skeleton Card
  // ========================================
  {
    category: '卡片骨架',
    className: 'skeleton-card',
    description:
      '标准卡片（gap: var(--skeleton-card-gap-default)，padding: var(--skeleton-card-padding-default)）。',
    isCategoryStart: true,
  },
  {
    category: '卡片骨架',
    className: 'skeleton-card-compact',
    description:
      '紧凑卡片（gap: var(--skeleton-card-gap-compact)，padding: var(--skeleton-card-padding-compact)）。',
  },
  {
    category: '卡片骨架',
    className: 'skeleton-card-spacious',
    description:
      '宽松卡片（gap: var(--skeleton-card-gap-spacious)，padding: var(--skeleton-card-padding-spacious)）。',
  },

  // ========================================
  // 表格骨架 - Skeleton Table
  // ========================================
  {
    category: '表格骨架',
    className: 'skeleton-table-header',
    description:
      '表格头（gap: var(--skeleton-table-header-gap)，padding: var(--skeleton-table-header-padding)）。',
    isCategoryStart: true,
  },
  {
    category: '表格骨架',
    className: 'skeleton-table-row',
    description:
      '表格行（gap: var(--skeleton-table-row-gap)，padding: var(--skeleton-table-row-padding)）。',
  },
  {
    category: '表格骨架',
    className: 'skeleton-table',
    description: '表格容器（border: 1px solid var(--border)）。',
  },

  // ========================================
  // 网格骨架 - Skeleton Grid
  // ========================================
  {
    category: '网格骨架',
    className: 'skeleton-grid-xs',
    description: '极小网格（gap: var(--skeleton-grid-gap-xs)）。',
    isCategoryStart: true,
  },
  {
    category: '网格骨架',
    className: 'skeleton-grid-sm',
    description: '小网格（gap: var(--skeleton-grid-gap-sm)）。',
  },
  {
    category: '网格骨架',
    className: 'skeleton-grid',
    description: '标准网格（gap: var(--skeleton-grid-gap-md)）。',
  },
  {
    category: '网格骨架',
    className: 'skeleton-grid-lg',
    description: '大网格（gap: var(--skeleton-grid-gap-lg)）。',
  },
  {
    category: '网格骨架',
    className: 'skeleton-grid-xl',
    description: '特大网格（gap: var(--skeleton-grid-gap-xl)）。',
  },

  // ========================================
  // 容器骨架 - Skeleton Container
  // ========================================
  {
    category: '容器骨架',
    className: 'skeleton-container',
    description: '标准容器（gap: var(--skeleton-container-gap-normal)）。',
    isCategoryStart: true,
  },
  {
    category: '容器骨架',
    className: 'skeleton-container-compact',
    description: '紧凑容器（gap: var(--skeleton-container-gap-compact)）。',
  },
  {
    category: '容器骨架',
    className: 'skeleton-container-loose',
    description: '宽松容器（gap: var(--skeleton-container-gap-loose)）。',
  },

  // ========================================
  // 无障碍
  // ========================================
  {
    category: '无障碍',
    className: 'skeleton-a11y',
    description: '为屏幕阅读器提供"加载中"文本。',
    isCategoryStart: true,
  },
]
</script>

<template>
  <DocsContainer>
    <DocsHeader
      title="Skeleton 骨架屏"
      description="用于内容加载前的结构占位系统。完全变量驱动，易于定制。"
    />

    <!-- API 参考 -->
    <ApiReference :data="apiClasses" />

    <!-- 基础用法 -->
    <DocsSection title="基础用法">
      <div class="bg-card p-6 rounded-lg space-y-4">
        <div class="skeleton w-full h-8"></div>
        <div class="skeleton-text"></div>
        <div class="skeleton-text w-4/5"></div>
      </div>
    </DocsSection>

    <!-- 动画变体 -->
    <DocsSection title="动画变体">
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4 bg-card p-6 rounded-lg">
        <!-- 脉冲动画 -->
        <div>
          <p class="text-sm font-semibold mb-2">脉冲</p>
          <div class="skeleton w-20 h-20"></div>
        </div>

        <!-- 波浪动画 -->
        <div>
          <p class="text-sm font-semibold mb-2">波浪</p>
          <div class="skeleton-wave w-20 h-20"></div>
        </div>

        <!-- 闪烁动画 -->
        <div>
          <p class="text-sm font-semibold mb-2">闪烁</p>
          <div class="skeleton-shimmer w-20 h-20"></div>
        </div>

        <!-- 静态 -->
        <div>
          <p class="text-sm font-semibold mb-2">静态</p>
          <div class="skeleton-static w-20 h-20"></div>
        </div>
      </div>
    </DocsSection>

    <!-- 文本骨架 -->
    <DocsSection title="文本骨架">
      <div class="bg-card p-6 rounded-lg space-y-4">
        <div>
          <p class="text-xs font-semibold text-muted-foreground mb-2">XS</p>
          <div class="skeleton-text-xs"></div>
        </div>
        <div>
          <p class="text-xs font-semibold text-muted-foreground mb-2">SM</p>
          <div class="skeleton-text-sm"></div>
        </div>
        <div>
          <p class="text-xs font-semibold text-muted-foreground mb-2">Base</p>
          <div class="skeleton-text"></div>
        </div>
        <div>
          <p class="text-xs font-semibold text-muted-foreground mb-2">LG</p>
          <div class="skeleton-text-lg"></div>
        </div>
        <div>
          <p class="text-xs font-semibold text-muted-foreground mb-2">XL</p>
          <div class="skeleton-text-xl"></div>
        </div>
        <div>
          <p class="text-xs font-semibold text-muted-foreground mb-2">2XL</p>
          <div class="skeleton-text-2xl"></div>
        </div>
      </div>
    </DocsSection>

    <!-- 标题骨架 -->
    <DocsSection title="标题骨架">
      <div class="bg-card p-6 rounded-lg space-y-4">
        <div>
          <p class="text-xs font-semibold text-muted-foreground mb-2">SM</p>
          <div class="skeleton-title-sm"></div>
        </div>
        <div>
          <p class="text-xs font-semibold text-muted-foreground mb-2">Base</p>
          <div class="skeleton-title"></div>
        </div>
        <div>
          <p class="text-xs font-semibold text-muted-foreground mb-2">LG</p>
          <div class="skeleton-title-lg"></div>
        </div>
        <div>
          <p class="text-xs font-semibold text-muted-foreground mb-2">XL</p>
          <div class="skeleton-title-xl"></div>
        </div>
      </div>
    </DocsSection>

    <!-- 头像骨架 -->
    <DocsSection title="头像骨架">
      <div class="flex flex-wrap gap-6 bg-card p-6 rounded-lg">
        <div class="text-center">
          <p class="text-xs font-semibold text-muted-foreground mb-2">XS</p>
          <div class="skeleton-avatar-xs"></div>
        </div>
        <div class="text-center">
          <p class="text-xs font-semibold text-muted-foreground mb-2">SM</p>
          <div class="skeleton-avatar-sm"></div>
        </div>
        <div class="text-center">
          <p class="text-xs font-semibold text-muted-foreground mb-2">Base</p>
          <div class="skeleton-avatar"></div>
        </div>
        <div class="text-center">
          <p class="text-xs font-semibold text-muted-foreground mb-2">LG</p>
          <div class="skeleton-avatar-lg"></div>
        </div>
        <div class="text-center">
          <p class="text-xs font-semibold text-muted-foreground mb-2">XL</p>
          <div class="skeleton-avatar-xl"></div>
        </div>
        <div class="text-center">
          <p class="text-xs font-semibold text-muted-foreground mb-2">2XL</p>
          <div class="skeleton-avatar-2xl"></div>
        </div>
      </div>
    </DocsSection>

    <!-- 图片骨架 -->
    <DocsSection title="图片骨架">
      <div class="space-y-6 bg-card p-6 rounded-lg">
        <div>
          <p class="text-xs font-semibold text-muted-foreground mb-2">视频（16:9）</p>
          <div class="skeleton-image"></div>
        </div>
        <div>
          <p class="text-xs font-semibold text-muted-foreground mb-2">方形（1:1）</p>
          <div class="skeleton-image-square"></div>
        </div>
        <div>
          <p class="text-xs font-semibold text-muted-foreground mb-2">宽屏（21:9）</p>
          <div class="skeleton-image-wide"></div>
        </div>
        <div>
          <p class="text-xs font-semibold text-muted-foreground mb-2">竖屏（3:4）</p>
          <div class="skeleton-image-portrait w-32"></div>
        </div>
      </div>
    </DocsSection>

    <!-- 按钮骨架 -->
    <DocsSection title="按钮骨架">
      <div class="flex flex-wrap gap-4 bg-card p-6 rounded-lg">
        <div class="text-center">
          <p class="text-xs font-semibold text-muted-foreground mb-2">XS</p>
          <div class="skeleton-button-xs"></div>
        </div>
        <div class="text-center">
          <p class="text-xs font-semibold text-muted-foreground mb-2">SM</p>
          <div class="skeleton-button-sm"></div>
        </div>
        <div class="text-center">
          <p class="text-xs font-semibold text-muted-foreground mb-2">MD</p>
          <div class="skeleton-button"></div>
        </div>
        <div class="text-center">
          <p class="text-xs font-semibold text-muted-foreground mb-2">LG</p>
          <div class="skeleton-button-lg"></div>
        </div>
        <div class="text-center">
          <p class="text-xs font-semibold text-muted-foreground mb-2">XL</p>
          <div class="skeleton-button-xl"></div>
        </div>
      </div>
    </DocsSection>

    <!-- 输入框骨架 -->
    <DocsSection title="输入框骨架">
      <div class="bg-card p-6 rounded-lg space-y-4">
        <div>
          <p class="text-xs font-semibold text-muted-foreground mb-2">XS</p>
          <div class="skeleton-input-xs"></div>
        </div>
        <div>
          <p class="text-xs font-semibold text-muted-foreground mb-2">SM</p>
          <div class="skeleton-input-sm"></div>
        </div>
        <div>
          <p class="text-xs font-semibold text-muted-foreground mb-2">Base</p>
          <div class="skeleton-input"></div>
        </div>
        <div>
          <p class="text-xs font-semibold text-muted-foreground mb-2">LG</p>
          <div class="skeleton-input-lg"></div>
        </div>
        <div>
          <p class="text-xs font-semibold text-muted-foreground mb-2">XL</p>
          <div class="skeleton-input-xl"></div>
        </div>
      </div>
    </DocsSection>

    <!-- 徽章骨架 -->
    <DocsSection title="徽章骨架">
      <div class="flex flex-wrap gap-4 bg-card p-6 rounded-lg">
        <div class="text-center">
          <p class="text-xs font-semibold text-muted-foreground mb-2">XS</p>
          <div class="skeleton-badge-xs"></div>
        </div>
        <div class="text-center">
          <p class="text-xs font-semibold text-muted-foreground mb-2">SM</p>
          <div class="skeleton-badge-sm"></div>
        </div>
        <div class="text-center">
          <p class="text-xs font-semibold text-muted-foreground mb-2">Base</p>
          <div class="skeleton-badge"></div>
        </div>
        <div class="text-center">
          <p class="text-xs font-semibold text-muted-foreground mb-2">LG</p>
          <div class="skeleton-badge-lg"></div>
        </div>
      </div>
    </DocsSection>

    <!-- 进度条骨架 -->
    <DocsSection title="进度条骨架">
      <div class="bg-card p-6 rounded-lg space-y-4">
        <div>
          <p class="text-xs font-semibold text-muted-foreground mb-2">XS</p>
          <div class="skeleton-progress-xs"></div>
        </div>
        <div>
          <p class="text-xs font-semibold text-muted-foreground mb-2">SM</p>
          <div class="skeleton-progress-sm"></div>
        </div>
        <div>
          <p class="text-xs font-semibold text-muted-foreground mb-2">Base</p>
          <div class="skeleton-progress"></div>
        </div>
        <div>
          <p class="text-xs font-semibold text-muted-foreground mb-2">LG</p>
          <div class="skeleton-progress-lg"></div>
        </div>
      </div>
    </DocsSection>

    <!-- 段落骨架 -->
    <DocsSection title="段落骨架">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 bg-card p-6 rounded-lg">
        <div>
          <p class="text-xs font-semibold text-muted-foreground mb-2">标准</p>
          <div class="skeleton-paragraph">
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
        <div>
          <p class="text-xs font-semibold text-muted-foreground mb-2">紧凑</p>
          <div class="skeleton-paragraph-compact">
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
        <div>
          <p class="text-xs font-semibold text-muted-foreground mb-2">宽松</p>
          <div class="skeleton-paragraph-loose">
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </DocsSection>

    <!-- 列表项骨架 -->
    <DocsSection title="列表项骨架">
      <div class="bg-card p-6 rounded-lg space-y-6">
        <div>
          <p class="text-xs font-semibold text-muted-foreground mb-2">小</p>
          <div class="skeleton-list-item-sm">
            <div class="skeleton-avatar-sm"></div>
            <div class="skeleton-list-content">
              <div class="skeleton-text-xs"></div>
              <div class="skeleton-text-xs w-3/4"></div>
            </div>
          </div>
        </div>
        <div>
          <p class="text-xs font-semibold text-muted-foreground mb-2">标准</p>
          <div class="skeleton-list-item">
            <div class="skeleton-avatar"></div>
            <div class="skeleton-list-content">
              <div class="skeleton-text"></div>
              <div class="skeleton-text-sm w-3/4"></div>
            </div>
          </div>
        </div>
        <div>
          <p class="text-xs font-semibold text-muted-foreground mb-2">大</p>
          <div class="skeleton-list-item-lg">
            <div class="skeleton-avatar-lg"></div>
            <div class="skeleton-list-content">
              <div class="skeleton-text-lg"></div>
              <div class="skeleton-text-sm w-3/4"></div>
            </div>
          </div>
        </div>
      </div>
    </DocsSection>

    <!-- 卡片骨架 -->
    <DocsSection title="卡片骨架">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 bg-card p-6 rounded-lg">
        <div>
          <p class="text-xs font-semibold text-muted-foreground mb-2">标准</p>
          <div class="skeleton-card">
            <div class="skeleton-image"></div>
            <div class="skeleton-title"></div>
            <div class="skeleton-text"></div>
          </div>
        </div>
        <div>
          <p class="text-xs font-semibold text-muted-foreground mb-2">紧凑</p>
          <div class="skeleton-card-compact">
            <div class="skeleton-image"></div>
            <div class="skeleton-title-sm"></div>
            <div class="skeleton-text-sm"></div>
          </div>
        </div>
        <div>
          <p class="text-xs font-semibold text-muted-foreground mb-2">宽松</p>
          <div class="skeleton-card-spacious">
            <div class="skeleton-image"></div>
            <div class="skeleton-title-lg"></div>
            <div class="skeleton-text"></div>
          </div>
        </div>
      </div>
    </DocsSection>

    <!-- 表格骨架 -->
    <DocsSection title="表格骨架">
      <div class="bg-card rounded-lg overflow-hidden border border-border">
        <div class="skeleton-table-header">
          <div class="skeleton-text flex-1"></div>
          <div class="skeleton-text flex-1"></div>
          <div class="skeleton-text flex-1"></div>
        </div>
        <div class="skeleton-table-row">
          <div class="skeleton-avatar-sm flex-shrink-0"></div>
          <div class="skeleton-text flex-1"></div>
          <div class="skeleton-text flex-1"></div>
        </div>
        <div class="skeleton-table-row">
          <div class="skeleton-avatar-sm flex-shrink-0"></div>
          <div class="skeleton-text flex-1"></div>
          <div class="skeleton-text flex-1"></div>
        </div>
        <div class="skeleton-table-row">
          <div class="skeleton-avatar-sm flex-shrink-0"></div>
          <div class="skeleton-text flex-1"></div>
          <div class="skeleton-text flex-1"></div>
        </div>
      </div>
    </DocsSection>

    <!-- 网格骨架 -->
    <DocsSection title="网格骨架">
      <div class="bg-card p-6 rounded-lg space-y-6">
        <div class="skeleton-grid grid-cols-2 md:grid-cols-4">
          <div class="skeleton-image-square"></div>
          <div class="skeleton-image-square"></div>
          <div class="skeleton-image-square"></div>
          <div class="skeleton-image-square"></div>
          <div class="skeleton-image-square"></div>
          <div class="skeleton-image-square"></div>
          <div class="skeleton-image-square"></div>
          <div class="skeleton-image-square"></div>
        </div>
      </div>
    </DocsSection>

    <!-- 容器骨架 -->
    <DocsSection title="容器骨架">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 bg-card p-6 rounded-lg">
        <div>
          <p class="text-xs font-semibold text-muted-foreground mb-2">紧凑</p>
          <div class="skeleton-container-compact">
            <div class="skeleton-text"></div>
            <div class="skeleton-text"></div>
            <div class="skeleton-text"></div>
          </div>
        </div>
        <div>
          <p class="text-xs font-semibold text-muted-foreground mb-2">标准</p>
          <div class="skeleton-container">
            <div class="skeleton-text"></div>
            <div class="skeleton-text"></div>
            <div class="skeleton-text"></div>
          </div>
        </div>
        <div>
          <p class="text-xs font-semibold text-muted-foreground mb-2">宽松</p>
          <div class="skeleton-container-loose">
            <div class="skeleton-text"></div>
            <div class="skeleton-text"></div>
            <div class="skeleton-text"></div>
          </div>
        </div>
      </div>
    </DocsSection>

    <!-- 实际场景示例 -->
    <DocsSection title="实际场景">
      <!-- 用户卡片 -->
      <div class="mb-8">
        <h3 class="text-lg font-semibold mb-4">用户卡片</h3>
        <div class="bg-card p-6 rounded-lg">
          <div class="flex gap-4">
            <div class="skeleton-avatar-lg flex-shrink-0"></div>
            <div class="flex-1">
              <div class="skeleton-title-sm mb-2"></div>
              <div class="skeleton-text-sm mb-4"></div>
              <div class="skeleton-paragraph-compact">
                <div></div>
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 文章列表 -->
      <div class="mb-8">
        <h3 class="text-lg font-semibold mb-4">文章列表</h3>
        <div class="bg-card rounded-lg overflow-hidden border border-border">
          <div class="p-4 flex gap-4 border-b border-border">
            <div class="skeleton-image-square w-24 flex-shrink-0"></div>
            <div class="flex-1">
              <div class="skeleton-title-sm mb-2"></div>
              <div class="skeleton-text-sm mb-2"></div>
              <div class="skeleton-text-xs w-2/3"></div>
            </div>
          </div>
          <div class="p-4 flex gap-4 border-b border-border">
            <div class="skeleton-image-square w-24 flex-shrink-0"></div>
            <div class="flex-1">
              <div class="skeleton-title-sm mb-2"></div>
              <div class="skeleton-text-sm mb-2"></div>
              <div class="skeleton-text-xs w-2/3"></div>
            </div>
          </div>
          <div class="p-4 flex gap-4">
            <div class="skeleton-image-square w-24 flex-shrink-0"></div>
            <div class="flex-1">
              <div class="skeleton-title-sm mb-2"></div>
              <div class="skeleton-text-sm mb-2"></div>
              <div class="skeleton-text-xs w-2/3"></div>
            </div>
          </div>
        </div>
      </div>

      <!-- 产品网格 -->
      <div>
        <h3 class="text-lg font-semibold mb-4">产品网格</h3>
        <div class="skeleton-grid md:grid-cols-3 lg:grid-cols-4">
          <div class="skeleton-card">
            <div class="skeleton-image-square"></div>
            <div class="skeleton-title-sm"></div>
            <div class="skeleton-text-sm w-3/4"></div>
          </div>
          <div class="skeleton-card">
            <div class="skeleton-image-square"></div>
            <div class="skeleton-title-sm"></div>
            <div class="skeleton-text-sm w-3/4"></div>
          </div>
          <div class="skeleton-card">
            <div class="skeleton-image-square"></div>
            <div class="skeleton-title-sm"></div>
            <div class="skeleton-text-sm w-3/4"></div>
          </div>
          <div class="skeleton-card">
            <div class="skeleton-image-square"></div>
            <div class="skeleton-title-sm"></div>
            <div class="skeleton-text-sm w-3/4"></div>
          </div>
        </div>
      </div>
    </DocsSection>
  </DocsContainer>
</template>
