<script setup lang="ts">
import { ref } from 'vue'
import DocsHeader from '../zcomp/DocsHeader.vue'
import ApiReference from '../zcomp/ApiReference.vue'
import DocsContainer from '../zcomp/DocsContainer.vue'
import DocsSection from '../zcomp/DocsSection.vue'

/**
 * Progress API Reference
 * ✅ 所有 class 均在 CSS 中真实存在
 * 按照新的变量提取方式组织
 */
const apiClasses = [
  // ========================================
  // 基础类
  // ========================================
  {
    category: '基础',
    className: 'progress',
    description: '基础进度条容器，使用 var(--progress-height-md)。',
    isCategoryStart: true,
  },
  {
    category: '基础',
    className: 'progress-bar',
    description: '进度条 bar，填充宽度表示进度百分比。',
  },

  // ========================================
  // 高度变体 - Progress Height
  // ========================================
  {
    category: '高度变体',
    className: 'progress-xs',
    description: '极小进度条（h: var(--progress-height-xs) = 0.25rem）。',
    isCategoryStart: true,
  },
  {
    category: '高度变体',
    className: 'progress-sm',
    description: '小进度条（h: var(--progress-height-sm) = 0.375rem）。',
  },
  {
    category: '高度变体',
    className: 'progress-md',
    description: '标准进度条（h: var(--progress-height-md) = 0.5rem）。',
  },
  {
    category: '高度变体',
    className: 'progress-lg',
    description: '大进度条（h: var(--progress-height-lg) = 0.75rem）。',
  },
  {
    category: '高度变体',
    className: 'progress-xl',
    description: '特大进度条（h: var(--progress-height-xl) = 1rem）。',
  },

  // ========================================
  // 颜色变体 - Progress Colors
  // ========================================
  {
    category: '颜色变体',
    className: 'progress-primary',
    description: '主色进度条（background: var(--progress-color-primary)）。',
    isCategoryStart: true,
  },
  {
    category: '颜色变体',
    className: 'progress-secondary',
    description: '次色进度条（background: var(--progress-color-secondary)）。',
  },
  {
    category: '颜色变体',
    className: 'progress-success',
    description: '成功色进度条（background: var(--progress-color-success)）。',
  },
  {
    category: '颜色变体',
    className: 'progress-warning',
    description: '警告色进度条（background: var(--progress-color-warning)）。',
  },
  {
    category: '颜色变体',
    className: 'progress-error',
    description: '错误色进度条（background: var(--progress-color-error)）。',
  },
  {
    category: '颜色变体',
    className: 'progress-info',
    description: '信息色进度条（background: var(--progress-color-info)）。',
  },

  // ========================================
  // 动画变体 - Progress Animations
  // ========================================
  {
    category: '动画变体',
    className: 'progress-striped',
    description: '条纹效果（不动画）。',
    isCategoryStart: true,
  },
  {
    category: '动画变体',
    className: 'progress-striped-animated',
    description: '条纹动画（animation: progress-stripe）。',
  },
  {
    category: '动画变体',
    className: 'progress-pulsing',
    description: '脉冲动画（animation: progress-pulse）。',
  },
  {
    category: '动画变体',
    className: 'progress-wave',
    description: '波浪动画（animation: progress-wave）。',
  },

  // ========================================
  // 带标签 - Progress with Label
  // ========================================
  {
    category: '带标签',
    className: 'progress-labeled',
    description: '带标签的进度条容器。',
    isCategoryStart: true,
  },
  {
    category: '带标签',
    className: 'progress-label',
    description: '进度条标签（font-size: var(--progress-label-font-size)）。',
  },
  {
    category: '带标签',
    className: 'progress-label-value',
    description: '进度值标签（绝对定位在进度条上）。',
  },

  // ========================================
  // 进度段 - Progress Segment
  // ========================================
  {
    category: '进度段',
    className: 'progress-segmented',
    description: '分段进度条（gap: var(--progress-segment-gap)）。',
    isCategoryStart: true,
  },

  // ========================================
  // 堆叠进度条 - Progress Stacked
  // ========================================
  {
    category: '堆叠进度条',
    className: 'progress-stacked',
    description: '堆叠进度条容器（flex-direction: column）。',
    isCategoryStart: true,
  },

  // ========================================
  // 容器 - Progress Container
  // ========================================
  {
    category: '容器',
    className: 'progress-container',
    description: '进度条容器（padding: var(--progress-container-padding)）。',
    isCategoryStart: true,
  },
  {
    category: '容器',
    className: 'progress-container-compact',
    description: '紧凑容器（padding: 50%）。',
  },
  {
    category: '容器',
    className: 'progress-container-spacious',
    description: '宽松容器（padding: 150%）。',
  },

  // ========================================
  // 状态 - Progress States
  // ========================================
  {
    category: '状态变体',
    className: 'progress-disabled',
    description: '禁用状态（opacity: 0.6）。',
    isCategoryStart: true,
  },
  {
    category: '状态变体',
    className: 'progress-indeterminate',
    description: '不确定状态（动画效果）。',
  },

  // ========================================
  // 响应式 - Progress Responsive
  // ========================================
  {
    category: '响应式',
    className: 'progress-responsive',
    description: '响应式进度条（根据屏幕宽度调整高度）。',
    isCategoryStart: true,
  },

  // ========================================
  // 圆形进度条 - Progress Circle
  // ========================================
  {
    category: '圆形进度条',
    className: 'progress-circle',
    description: '圆形进度条基础（size: var(--progress-indicator-size)）。',
    isCategoryStart: true,
  },
  {
    category: '圆形进度条',
    className: 'progress-circle-xs',
    description: '极小圆形进度条（size: 2rem）。',
  },
  {
    category: '圆形进度条',
    className: 'progress-circle-sm',
    description: '小圆形进度条（size: 3rem）。',
  },
  {
    category: '圆形进度条',
    className: 'progress-circle-md',
    description: '标准圆形进度条（size: 4rem）。',
  },
  {
    category: '圆形进度条',
    className: 'progress-circle-lg',
    description: '大圆形进度条（size: 5rem）。',
  },
  {
    category: '圆形进度条',
    className: 'progress-circle-xl',
    description: '特大圆形进度条（size: 6rem）。',
  },
  {
    category: '圆形进度条',
    className: 'progress-circle-bar',
    description: '圆形进度条 bar（conic-gradient 绘制）。',
  },
  {
    category: '圆形进度条',
    className: 'progress-circle-text',
    description: '圆形进度条文本（相对定位）。',
  },

  // ========================================
  // 进度点 - Progress Dots
  // ========================================
  {
    category: '进度点',
    className: 'progress-dots',
    description: '进度点容器（flex, gap: 0.5rem）。',
    isCategoryStart: true,
  },
  {
    category: '进度点',
    className: 'progress-dot',
    description: '单个进度点（size: 0.5rem）。',
  },
  {
    category: '进度点',
    className: 'progress-dot-active',
    description: '激活的进度点（background: var(--progress-color-primary)）。',
  },

  // ========================================
  // 步骤进度条 - Progress Steps
  // ========================================
  {
    category: '步骤进度条',
    className: 'progress-steps',
    description: '步骤进度条容器（带连接线）。',
    isCategoryStart: true,
  },
  {
    category: '步骤进度条',
    className: 'progress-step',
    description: '单个步骤（带圆形指示器）。',
  },
  {
    category: '步骤进度条',
    className: 'progress-step-active',
    description: '激活的步骤。',
  },
  {
    category: '步骤进度条',
    className: 'progress-step-completed',
    description: '完成的步骤（显示 ✓）。',
  },

  // ========================================
  // 无障碍 - Progress Accessibility
  // ========================================
  {
    category: '无障碍',
    className: 'progress-a11y',
    description: '为屏幕阅读器提供进度信息。',
    isCategoryStart: true,
  },
]

// 动态进度演示
const progress = ref(0)

const incrementProgress = () => {
  if (progress.value < 100) {
    progress.value += 10
  }
}

const currentStep = ref(1)
const nextStep = () => {
  if (currentStep.value < 5) {
    currentStep.value++
  }
}
</script>

<template>
  <DocsContainer>
    <DocsHeader
      title="Progress 进度条"
      description="多种形式的进度条组件。完全变量驱动，易于定制。"
    />

    <!-- API 参考 -->
    <ApiReference :data="apiClasses" />

    <!-- 基础用法 -->
    <DocsSection title="基础用法">
      <div class="bg-card p-6 rounded-lg space-y-4">
        <div>
          <p class="text-sm font-semibold text-muted-foreground mb-2">0%</p>
          <div class="progress">
            <div class="progress-bar" style="width: 0%"></div>
          </div>
        </div>
        <div>
          <p class="text-sm font-semibold text-muted-foreground mb-2">25%</p>
          <div class="progress">
            <div class="progress-bar" style="width: 25%"></div>
          </div>
        </div>
        <div>
          <p class="text-sm font-semibold text-muted-foreground mb-2">50%</p>
          <div class="progress">
            <div class="progress-bar" style="width: 50%"></div>
          </div>
        </div>
        <div>
          <p class="text-sm font-semibold text-muted-foreground mb-2">75%</p>
          <div class="progress">
            <div class="progress-bar" style="width: 75%"></div>
          </div>
        </div>
        <div>
          <p class="text-sm font-semibold text-muted-foreground mb-2">100%</p>
          <div class="progress">
            <div class="progress-bar" style="width: 100%"></div>
          </div>
        </div>
      </div>
    </DocsSection>

    <!-- 高度变体 -->
    <DocsSection title="高度变体">
      <div class="bg-card p-6 rounded-lg space-y-6">
        <div>
          <p class="text-xs font-semibold text-muted-foreground mb-2">XS</p>
          <div class="progress-xs">
            <div class="progress-bar" style="width: 50%"></div>
          </div>
        </div>
        <div>
          <p class="text-xs font-semibold text-muted-foreground mb-2">SM</p>
          <div class="progress-sm">
            <div class="progress-bar" style="width: 50%"></div>
          </div>
        </div>
        <div>
          <p class="text-xs font-semibold text-muted-foreground mb-2">MD</p>
          <div class="progress-md">
            <div class="progress-bar" style="width: 50%"></div>
          </div>
        </div>
        <div>
          <p class="text-xs font-semibold text-muted-foreground mb-2">LG</p>
          <div class="progress-lg">
            <div class="progress-bar" style="width: 50%"></div>
          </div>
        </div>
        <div>
          <p class="text-xs font-semibold text-muted-foreground mb-2">XL</p>
          <div class="progress-xl">
            <div class="progress-bar" style="width: 50%"></div>
          </div>
        </div>
      </div>
    </DocsSection>

    <!-- 颜色变体 -->
    <DocsSection title="颜色变体">
      <div class="bg-card p-6 rounded-lg space-y-6">
        <div>
          <p class="text-xs font-semibold text-muted-foreground mb-2">主色</p>
          <div class="progress progress-primary progress-rounded-full">
            <div class="progress-bar" style="width: 50%"></div>
          </div>
        </div>
        <div>
          <p class="text-xs font-semibold text-muted-foreground mb-2">次色</p>
          <div class="progress progress-secondary progress-rounded-full">
            <div class="progress-bar" style="width: 50%"></div>
          </div>
        </div>
        <div>
          <p class="text-xs font-semibold text-muted-foreground mb-2">成功</p>
          <div class="progress progress-success progress-rounded-full">
            <div class="progress-bar" style="width: 50%"></div>
          </div>
        </div>
        <div>
          <p class="text-xs font-semibold text-muted-foreground mb-2">警告</p>
          <div class="progress progress-warning progress-rounded-full">
            <div class="progress-bar" style="width: 50%"></div>
          </div>
        </div>
        <div>
          <p class="text-xs font-semibold text-muted-foreground mb-2">错误</p>
          <div class="progress progress-error progress-rounded-full">
            <div class="progress-bar" style="width: 50%"></div>
          </div>
        </div>
        <div>
          <p class="text-xs font-semibold text-muted-foreground mb-2">信息</p>
          <div class="progress progress-info progress-rounded-full">
            <div class="progress-bar" style="width: 50%"></div>
          </div>
        </div>
      </div>
    </DocsSection>

    <!-- 动画变体 -->
    <DocsSection title="动画变体">
      <div class="bg-card p-6 rounded-lg space-y-6">
        <div>
          <p class="text-xs font-semibold text-muted-foreground mb-2">条纹</p>
          <div class="progress progress-rounded-full progress-striped">
            <div class="progress-bar" style="width: 75%"></div>
          </div>
        </div>
        <div>
          <p class="text-xs font-semibold text-muted-foreground mb-2">条纹动画</p>
          <div class="progress progress-rounded-full progress-striped-animated">
            <div class="progress-bar" style="width: 75%"></div>
          </div>
        </div>
        <div>
          <p class="text-xs font-semibold text-muted-foreground mb-2">脉冲</p>
          <div class="progress progress-rounded-full progress-pulsing">
            <div class="progress-bar" style="width: 75%"></div>
          </div>
        </div>
        <div>
          <p class="text-xs font-semibold text-muted-foreground mb-2">波浪</p>
          <div class="progress progress-rounded-full progress-wave">
            <div class="progress-bar" style="width: 75%"></div>
          </div>
        </div>
      </div>
    </DocsSection>

    <!-- 带标签 -->
    <DocsSection title="带标签的进度条">
      <div class="bg-card p-6 rounded-lg space-y-6">
        <div class="progress-labeled">
          <div class="flex justify-between items-center">
            <span class="progress-label">上传中</span>
            <span class="progress-label">{{ progress }}%</span>
          </div>
          <div class="progress progress-rounded-full">
            <div class="progress-bar" :style="{ width: progress + '%' }"></div>
          </div>
        </div>

        <div class="flex gap-2">
          <button
            @click="incrementProgress"
            class="px-4 py-2 bg-primary text-primary-foreground rounded-md text-sm font-semibold hover:opacity-90 transition-opacity"
          >
            增加 10%
          </button>
          <button
            @click="() => (progress = 0)"
            class="px-4 py-2 bg-muted text-foreground rounded-md text-sm font-semibold hover:opacity-90 transition-opacity"
          >
            重置
          </button>
        </div>
      </div>
    </DocsSection>

    <!-- 分段进度条 -->
    <DocsSection title="分段进度条">
      <div class="bg-card p-6 rounded-lg space-y-4">
        <div>
          <p class="text-xs font-semibold text-muted-foreground mb-2">2 段</p>
          <div class="progress-segmented">
            <div class="progress">
              <div class="progress-bar" style="width: 100%"></div>
            </div>
            <div class="progress">
              <div class="progress-bar" style="width: 50%"></div>
            </div>
          </div>
        </div>
        <div>
          <p class="text-xs font-semibold text-muted-foreground mb-2">3 段</p>
          <div class="progress-segmented">
            <div class="progress progress-success">
              <div class="progress-bar" style="width: 100%"></div>
            </div>
            <div class="progress progress-warning">
              <div class="progress-bar" style="width: 100%"></div>
            </div>
            <div class="progress progress-error">
              <div class="progress-bar" style="width: 50%"></div>
            </div>
          </div>
        </div>
      </div>
    </DocsSection>

    <!-- 堆叠进度条 -->
    <DocsSection title="堆叠进度条">
      <div class="bg-card p-6 rounded-lg">
        <div class="progress-stacked">
          <div>
            <p class="text-xs font-semibold text-muted-foreground mb-2">进度 1: 30%</p>
            <div class="progress progress-rounded-full progress-primary">
              <div class="progress-bar" style="width: 30%"></div>
            </div>
          </div>
          <div>
            <p class="text-xs font-semibold text-muted-foreground mb-2">进度 2: 50%</p>
            <div class="progress progress-rounded-full progress-success">
              <div class="progress-bar" style="width: 50%"></div>
            </div>
          </div>
          <div>
            <p class="text-xs font-semibold text-muted-foreground mb-2">进度 3: 20%</p>
            <div class="progress progress-rounded-full progress-warning">
              <div class="progress-bar" style="width: 20%"></div>
            </div>
          </div>
        </div>
      </div>
    </DocsSection>

    <!-- 圆形进度条 -->
    <DocsSection title="圆形进度条">
      <div class="bg-card p-6 rounded-lg">
        <div class="flex flex-wrap gap-8 justify-center">
          <div class="text-center">
            <p class="text-xs font-semibold text-muted-foreground mb-4">XS (2rem)</p>
            <div class="progress-circle-xs">
              <div class="progress-circle-bar" style="--progress-value: 75%"></div>
              <span class="progress-circle-text">75%</span>
            </div>
          </div>
          <div class="text-center">
            <p class="text-xs font-semibold text-muted-foreground mb-4">SM (3rem)</p>
            <div class="progress-circle-sm">
              <div class="progress-circle-bar" style="--progress-value: 60%"></div>
              <span class="progress-circle-text">60%</span>
            </div>
          </div>
          <div class="text-center">
            <p class="text-xs font-semibold text-muted-foreground mb-4">MD (4rem)</p>
            <div class="progress-circle-md">
              <div class="progress-circle-bar" style="--progress-value: 45%"></div>
              <span class="progress-circle-text">45%</span>
            </div>
          </div>
          <div class="text-center">
            <p class="text-xs font-semibold text-muted-foreground mb-4">LG (5rem)</p>
            <div class="progress-circle-lg">
              <div class="progress-circle-bar" style="--progress-value: 90%"></div>
              <span class="progress-circle-text">90%</span>
            </div>
          </div>
          <div class="text-center">
            <p class="text-xs font-semibold text-muted-foreground mb-4">XL (6rem)</p>
            <div class="progress-circle-xl">
              <div class="progress-circle-bar" style="--progress-value: 30%"></div>
              <span class="progress-circle-text">30%</span>
            </div>
          </div>
        </div>
      </div>
    </DocsSection>

    <!-- 进度点 -->
    <DocsSection title="进度点">
      <div class="bg-card p-6 rounded-lg space-y-6">
        <div>
          <p class="text-xs font-semibold text-muted-foreground mb-4">3 步</p>
          <div class="progress-dots">
            <div class="progress-dot progress-dot-active"></div>
            <div class="progress-dot progress-dot-active"></div>
            <div class="progress-dot"></div>
          </div>
        </div>
        <div>
          <p class="text-xs font-semibold text-muted-foreground mb-4">5 步</p>
          <div class="progress-dots">
            <div class="progress-dot progress-dot-active"></div>
            <div class="progress-dot progress-dot-active"></div>
            <div class="progress-dot progress-dot-active"></div>
            <div class="progress-dot"></div>
            <div class="progress-dot"></div>
          </div>
        </div>
      </div>
    </DocsSection>

    <!-- 步骤进度条 -->
    <DocsSection title="步骤进度条">
      <div class="bg-card p-6 rounded-lg space-y-8">
        <div>
          <div class="progress-steps">
            <div class="progress-step" :class="{ 'progress-step-completed': currentStep > 1 }">
              <div class="text-xs font-semibold text-muted-foreground">步骤 1</div>
              <div class="text-xs text-muted-foreground mt-1">选择方案</div>
            </div>
            <div
              class="progress-step"
              :class="{
                'progress-step-active': currentStep === 2,
                'progress-step-completed': currentStep > 2,
              }"
            >
              <div class="text-xs font-semibold text-muted-foreground">步骤 2</div>
              <div class="text-xs text-muted-foreground mt-1">填写信息</div>
            </div>
            <div
              class="progress-step"
              :class="{
                'progress-step-active': currentStep === 3,
                'progress-step-completed': currentStep > 3,
              }"
            >
              <div class="text-xs font-semibold text-muted-foreground">步骤 3</div>
              <div class="text-xs text-muted-foreground mt-1">确认支付</div>
            </div>
            <div
              class="progress-step"
              :class="{
                'progress-step-active': currentStep === 4,
                'progress-step-completed': currentStep > 4,
              }"
            >
              <div class="text-xs font-semibold text-muted-foreground">步骤 4</div>
              <div class="text-xs text-muted-foreground mt-1">完成</div>
            </div>
          </div>
        </div>

        <div class="flex gap-2">
          <button
            @click="nextStep"
            class="px-4 py-2 bg-primary text-primary-foreground rounded-md text-sm font-semibold hover:opacity-90 transition-opacity"
          >
            下一步
          </button>
          <button
            @click="() => (currentStep = 1)"
            class="px-4 py-2 bg-muted text-foreground rounded-md text-sm font-semibold hover:opacity-90 transition-opacity"
          >
            重置
          </button>
        </div>
      </div>
    </DocsSection>

    <!-- 不确定状态 -->
    <DocsSection title="不确定状态">
      <div class="bg-card p-6 rounded-lg">
        <p class="text-xs font-semibold text-muted-foreground mb-4">加载中...</p>
        <div class="progress progress-indeterminate progress-rounded-full">
          <div class="progress-bar"></div>
        </div>
      </div>
    </DocsSection>

    <!-- 禁用状态 -->
    <DocsSection title="禁用状态">
      <div class="bg-card p-6 rounded-lg space-y-4">
        <div>
          <p class="text-xs font-semibold text-muted-foreground mb-2">禁用</p>
          <div class="progress progress-disabled progress-rounded-full">
            <div class="progress-bar" style="width: 50%"></div>
          </div>
        </div>
        <div>
          <p class="text-xs font-semibold text-muted-foreground mb-2">禁用 + 动画</p>
          <div class="progress progress-disabled progress-rounded-full progress-wave">
            <div class="progress-bar" style="width: 50%"></div>
          </div>
        </div>
      </div>
    </DocsSection>

    <!-- 响应式 -->
    <DocsSection title="响应式进度条">
      <div class="bg-card p-6 rounded-lg">
        <p class="text-xs font-semibold text-muted-foreground mb-4">在不同屏幕宽度自动调整高度</p>
        <div class="progress-responsive progress-rounded-full">
          <div class="progress-bar" style="width: 65%"></div>
        </div>
      </div>
    </DocsSection>

    <!-- 实际场景 -->
    <DocsSection title="实际场景">
      <!-- 文件上传 -->
      <div class="mb-8">
        <h3 class="text-lg font-semibold mb-4">文件上传</h3>
        <div class="bg-card p-6 rounded-lg space-y-4">
          <div>
            <div class="flex justify-between items-center mb-2">
              <span class="text-sm font-semibold">document.pdf</span>
              <span class="text-xs text-muted-foreground">65%</span>
            </div>
            <div class="progress progress-rounded-full">
              <div class="progress-bar" style="width: 65%"></div>
            </div>
          </div>
          <div>
            <div class="flex justify-between items-center mb-2">
              <span class="text-sm font-semibold">image.png</span>
              <span class="text-xs text-muted-foreground">100%</span>
            </div>
            <div class="progress progress-rounded-full progress-success">
              <div class="progress-bar" style="width: 100%"></div>
            </div>
          </div>
        </div>
      </div>

      <!-- 技能等级 -->
      <div class="mb-8">
        <h3 class="text-lg font-semibold mb-4">技能等级</h3>
        <div class="bg-card p-6 rounded-lg space-y-4">
          <div>
            <div class="flex justify-between items-center mb-2">
              <span class="text-sm font-semibold">Vue.js</span>
              <span class="text-xs text-muted-foreground">90%</span>
            </div>
            <div class="progress progress-rounded-full">
              <div class="progress-bar" style="width: 90%"></div>
            </div>
          </div>
          <div>
            <div class="flex justify-between items-center mb-2">
              <span class="text-sm font-semibold">React</span>
              <span class="text-xs text-muted-foreground">75%</span>
            </div>
            <div class="progress progress-rounded-full">
              <div class="progress-bar" style="width: 75%"></div>
            </div>
          </div>
          <div>
            <div class="flex justify-between items-center mb-2">
              <span class="text-sm font-semibold">Node.js</span>
              <span class="text-xs text-muted-foreground">85%</span>
            </div>
            <div class="progress progress-rounded-full">
              <div class="progress-bar" style="width: 85%"></div>
            </div>
          </div>
        </div>
      </div>

      <!-- 系统性能 -->
      <div>
        <h3 class="text-lg font-semibold mb-4">系统性能</h3>
        <div class="bg-card p-6 rounded-lg">
          <div class="progress-stacked">
            <div>
              <div class="flex justify-between items-center mb-2">
                <span class="text-sm font-semibold">CPU</span>
                <span class="text-xs text-muted-foreground">72%</span>
              </div>
              <div class="progress progress-rounded-full progress-warning">
                <div class="progress-bar" style="width: 72%"></div>
              </div>
            </div>
            <div>
              <div class="flex justify-between items-center mb-2">
                <span class="text-sm font-semibold">内存</span>
                <span class="text-xs text-muted-foreground">58%</span>
              </div>
              <div class="progress progress-rounded-full progress-primary">
                <div class="progress-bar" style="width: 58%"></div>
              </div>
            </div>
            <div>
              <div class="flex justify-between items-center mb-2">
                <span class="text-sm font-semibold">磁盘</span>
                <span class="text-xs text-muted-foreground">89%</span>
              </div>
              <div class="progress progress-rounded-full progress-error">
                <div class="progress-bar" style="width: 89%"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DocsSection>
  </DocsContainer>
</template>
