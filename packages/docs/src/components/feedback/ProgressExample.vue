<script setup lang="ts">
import DocsHeader from '../zcomp/DocsHeader.vue'
import ApiReference from '../zcomp/ApiReference.vue'
import DocsContainer from '../zcomp/DocsContainer.vue'
import DocsSection from '../zcomp/DocsSection.vue'

const apiClasses = [
  // 基础结构
  {
    category: '基础结构',
    className: 'progress',
    description: '进度条容器，圆角和背景。',
    isCategoryStart: true,
  },
  {
    category: '基础结构',
    className: 'progress-bar',
    description: '进度条填充条，支持宽度变化动画。',
    isCategoryStart: false,
  },

  // 配色
  {
    category: '配色方案',
    className: 'progress-primary',
    description: '主色进度条。',
    isCategoryStart: true,
  },
  {
    category: '配色方案',
    className: 'progress-secondary',
    description: '辅助色进度条。',
    isCategoryStart: false,
  },
  {
    category: '配色方案',
    className: 'progress-success',
    description: '成功状态（绿色）进度条。',
    isCategoryStart: false,
  },
  {
    category: '配色方案',
    className: 'progress-warning',
    description: '警告状态（黄色/琥珀）进度条。',
    isCategoryStart: false,
  },
  {
    category: '配色方案',
    className: 'progress-error',
    description: '错误状态（红色）进度条。',
    isCategoryStart: false,
  },
  {
    category: '配色方案',
    className: 'progress-info',
    description: '信息状态（蓝色/主色）进度条。',
    isCategoryStart: false,
  },
  {
    category: '配色方案',
    className: 'progress-accent',
    description: '强调色进度条。',
    isCategoryStart: false,
  },

  // 尺寸
  {
    category: '尺寸',
    className: 'progress-xs',
    description: '超小高度。',
    isCategoryStart: true,
  },
  {
    category: '尺寸',
    className: 'progress-sm',
    description: '小高度。',
    isCategoryStart: true,
  },
  {
    category: '尺寸',
    className: 'progress-md',
    description: '中等高度（默认）。',
    isCategoryStart: true,
  },
  {
    category: '尺寸',
    className: 'progress-lg',
    description: '大高度。',
    isCategoryStart: true,
  },
  {
    category: '尺寸',
    className: 'progress-xl',
    description: '超大高度。',
    isCategoryStart: true,
  },

  // 动画
  {
    category: '动画效果',
    className: 'progress-animated',
    description: '闪光动画效果。',
    isCategoryStart: true,
  },
  {
    category: '动画效果',
    className: 'progress-striped',
    description: '条纹背景。',
    isCategoryStart: true,
  },
  {
    category: '动画效果',
    className: 'progress-striped-animated',
    description: '条纹动画。',
    isCategoryStart: true,
  },
  {
    category: '动画效果',
    className: 'progress-indeterminate',
    description: '不确定状态动画。',
    isCategoryStart: true,
  },

  // 圆角
  {
    category: '圆角变体',
    className: 'progress-rounded-none',
    description: '无圆角。',
    isCategoryStart: true,
  },
  {
    category: '圆角变体',
    className: 'progress-rounded-sm',
    description: '小圆角。',
    isCategoryStart: true,
  },
  {
    category: '圆角变体',
    className: 'progress-rounded-md',
    description: '中等圆角。',
    isCategoryStart: true,
  },
  {
    category: '圆角变体',
    className: 'progress-rounded-lg',
    description: '大圆角。',
    isCategoryStart: true,
  },
  {
    category: '圆角变体',
    className: 'progress-rounded-full',
    description: '全圆角。',
    isCategoryStart: true,
  },

  // 边框
  {
    category: '边框',
    className: 'progress-bordered',
    description: '带边框样式。',
    isCategoryStart: true,
  },

  // 渐变
  {
    category: '渐变',
    className: 'progress-gradient',
    description: '主色到强调色渐变。',
    isCategoryStart: true,
  },
  {
    category: '渐变',
    className: 'progress-gradient-success',
    description: '绿色渐变。',
    isCategoryStart: true,
  },
  {
    category: '渐变',
    className: 'progress-gradient-warning',
    description: '黄色渐变。',
    isCategoryStart: true,
  },
  {
    category: '渐变',
    className: 'progress-gradient-error',
    description: '红色渐变。',
    isCategoryStart: true,
  },

  // 发光
  {
    category: '发光效果',
    className: 'progress-glow',
    description: '发光效果。',
    isCategoryStart: true,
  },

  // 纵向
  {
    category: '纵向',
    className: 'progress-vertical',
    description: '纵向进度条。',
    isCategoryStart: true,
  },
  {
    category: '纵向',
    className: 'progress-vertical-xs',
    description: '纵向超小宽度。',
    isCategoryStart: true,
  },
  {
    category: '纵向',
    className: 'progress-vertical-sm',
    description: '纵向小宽度。',
    isCategoryStart: true,
  },
  {
    category: '纵向',
    className: 'progress-vertical-md',
    description: '纵向中宽度。',
    isCategoryStart: true,
  },
  {
    category: '纵向',
    className: 'progress-vertical-lg',
    description: '纵向大宽度。',
    isCategoryStart: true,
  },
  {
    category: '纵向',
    className: 'progress-vertical-xl',
    description: '纵向超大宽度。',
    isCategoryStart: true,
  },

  // 带标签
  {
    category: '标签',
    className: 'progress-labeled',
    description: '显示中间文本标签。',
    isCategoryStart: true,
  },

  // 分段
  {
    category: '分段',
    className: 'progress-segmented',
    description: '多段进度条容器。',
    isCategoryStart: true,
  },
  {
    category: '分段',
    className: 'progress-segment',
    description: '单段进度条。',
    isCategoryStart: false,
  },
  {
    category: '分段',
    className: 'progress-segment active',
    description: '激活段。',
    isCategoryStart: false,
  },

  // 圆形
  {
    category: '圆形',
    className: 'progress-circle',
    description: '圆形进度条容器。',
    isCategoryStart: true,
  },
  {
    category: '圆形',
    className: 'progress-circle-sm',
    description: '圆形小尺寸。',
    isCategoryStart: true,
  },
  {
    category: '圆形',
    className: 'progress-circle-lg',
    description: '圆形大尺寸。',
    isCategoryStart: true,
  },
]
</script>

<template>
  <DocsContainer>
    <DocsHeader
      title="Progress 进度条组件"
      description="用于展示加载或完成进度，支持横向/纵向、圆形、分段和步骤条，多种动画、颜色与尺寸。"
    />

    <ApiReference :data="apiClasses" />

    <!-- 基础示例 -->
    <DocsSection title="基础用法">
      <div class="space-y-4">
        <div class="progress w-full">
          <div class="progress-bar w-1/2"></div>
        </div>

        <div class="progress progress-success w-full">
          <div class="progress-bar w-3/4"></div>
        </div>

        <div class="progress progress-error w-full">
          <div class="progress-bar w-1/4"></div>
        </div>
      </div>
    </DocsSection>

    <!-- 尺寸示例 -->
    <DocsSection title="尺寸示例">
      <div class="space-y-2">
        <div class="progress progress-xs w-full">
          <div class="progress-bar w-1/2"></div>
        </div>
        <div class="progress progress-sm w-full">
          <div class="progress-bar w-1/2"></div>
        </div>
        <div class="progress progress-md w-full">
          <div class="progress-bar w-1/2"></div>
        </div>
        <div class="progress progress-lg w-full">
          <div class="progress-bar w-1/2"></div>
        </div>
        <div class="progress progress-xl w-full">
          <div class="progress-bar w-1/2"></div>
        </div>
      </div>
    </DocsSection>

    <!-- 配色示例 -->
    <DocsSection title="配色示例">
      <div class="space-y-2">
        <div class="progress progress-primary w-full">
          <div class="progress-bar w-1/2"></div>
        </div>
        <div class="progress progress-secondary w-full">
          <div class="progress-bar w-1/2"></div>
        </div>
        <div class="progress progress-success w-full">
          <div class="progress-bar w-1/2"></div>
        </div>
        <div class="progress progress-warning w-full">
          <div class="progress-bar w-1/2"></div>
        </div>
        <div class="progress progress-error w-full">
          <div class="progress-bar w-1/2"></div>
        </div>
        <div class="progress progress-info w-full">
          <div class="progress-bar w-1/2"></div>
        </div>
        <div class="progress progress-accent w-full">
          <div class="progress-bar w-1/2"></div>
        </div>
      </div>
    </DocsSection>

    <!-- 动画示例 -->
    <DocsSection title="动画效果">
      <div class="space-y-2">
        <div class="progress progress-animated w-full">
          <div class="progress-bar w-2/3"></div>
        </div>
        <div class="progress progress-striped w-full">
          <div class="progress-bar w-1/2"></div>
        </div>
        <div class="progress progress-striped-animated w-full">
          <div class="progress-bar w-1/2"></div>
        </div>
        <div class="progress progress-indeterminate w-full">
          <div class="progress-bar"></div>
        </div>
      </div>
    </DocsSection>

    <!-- 圆形进度条 -->
    <DocsSection title="圆形进度条">
      <div class="flex gap-6 items-center">
        <div class="progress-circle">
          <svg viewBox="0 0 36 36">
            <circle class="progress-circle-bg" cx="18" cy="18" r="16"></circle>
            <circle
              class="progress-circle-bar"
              cx="18"
              cy="18"
              r="16"
              stroke-dasharray="100,100"
              stroke-dashoffset="25"
            ></circle>
          </svg>
          <div class="progress-circle-text">75%</div>
        </div>

        <div class="progress-circle progress-circle-sm">
          <svg viewBox="0 0 36 36">
            <circle class="progress-circle-bg" cx="18" cy="18" r="16"></circle>
            <circle
              class="progress-circle-bar"
              cx="18"
              cy="18"
              r="16"
              stroke-dasharray="100,100"
              stroke-dashoffset="50"
            ></circle>
          </svg>
          <div class="progress-circle-text">50%</div>
        </div>

        <div class="progress-circle progress-circle-lg">
          <svg viewBox="0 0 36 36">
            <circle class="progress-circle-bg" cx="18" cy="18" r="16"></circle>
            <circle
              class="progress-circle-bar"
              cx="18"
              cy="18"
              r="16"
              stroke-dasharray="100,100"
              stroke-dashoffset="80"
            ></circle>
          </svg>
          <div class="progress-circle-text">80%</div>
        </div>
      </div>
    </DocsSection>

    <!-- 纵向进度条 -->
    <DocsSection title="纵向进度条">
      <div class="flex gap-4 h-32">
        <div class="progress-vertical progress-vertical-xs">
          <div class="progress-bar h-1/2"></div>
        </div>
        <div class="progress-vertical progress-vertical-sm">
          <div class="progress-bar h-3/4"></div>
        </div>
        <div class="progress-vertical-md">
          <div class="progress-bar h-2/3"></div>
        </div>
        <div class="progress-vertical progress-vertical-lg">
          <div class="progress-bar h-1/2"></div>
        </div>
        <div class="progress-vertical progress-vertical-xl">
          <div class="progress-bar h-4/5"></div>
        </div>
      </div>
    </DocsSection>

    <!-- 带标签 -->
    <DocsSection title="带标签">
      <div class="progress progress-labeled w-full">
        <div class="progress-bar w-3/4"></div>
        <div class="progress-label">75%</div>
      </div>
    </DocsSection>

    <!-- 分段进度条 -->
    <DocsSection title="分段进度条">
      <div class="progress-segmented w-full h-3">
        <div class="progress-segment w-1/4"></div>
        <div class="progress-segment active w-1/4"></div>
        <div class="progress-segment w-1/4"></div>
        <div class="progress-segment w-1/4"></div>
      </div>
    </DocsSection>
  </DocsContainer>
</template>
