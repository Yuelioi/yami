<script setup lang="ts">
import DocsHeader from '../zcomp/DocsHeader.vue'
import DocsContainer from '../zcomp/DocsContainer.vue'
import DocsSection from '../zcomp/DocsSection.vue'
import ApiReference from '../zcomp/ApiReference.vue'

const apiClasses = [
  {
    category: '基础',
    className: 'alert',
    description: '警告容器，带圆角、背景、边框与图标布局。',
    isCategoryStart: true,
  },
  {
    category: '基础',
    className: 'alert-title',
    description: '警告标题文本。',
    isCategoryStart: false,
  },
  {
    category: '基础',
    className: 'alert-description',
    description: '警告描述内容。',
    isCategoryStart: false,
  },
  {
    category: '基础',
    className: 'alert-close',
    description: '关闭按钮，内置关闭图标。',
    isCategoryStart: false,
  },

  {
    category: '状态',
    className: 'alert-info',
    description: '信息提示（蓝色，使用 Primary 颜色）。',
    isCategoryStart: true,
  },
  {
    category: '状态',
    className: 'alert-success',
    description: '成功提示（绿色）。',
    isCategoryStart: false,
  },
  {
    category: '状态',
    className: 'alert-warning',
    description: '警告提示（琥珀色）。',
    isCategoryStart: false,
  },
  {
    category: '状态',
    className: 'alert-error',
    description: '错误提示（红色，Destructive）。',
    isCategoryStart: false,
  },

  {
    category: '填充样式',
    className: 'alert-filled',
    description: '去除边框的填充样式基类。',
    isCategoryStart: true,
  },
  {
    category: '填充样式',
    className: 'alert-info alert-filled',
    description: '信息提示的填充样式。',
    isCategoryStart: false,
  },
  {
    category: '填充样式',
    className: 'alert-success alert-filled',
    description: '成功提示的填充样式。',
    isCategoryStart: false,
  },
  {
    category: '填充样式',
    className: 'alert-warning alert-filled',
    description: '警告提示的填充样式。',
    isCategoryStart: false,
  },
  {
    category: '填充样式',
    className: 'alert-error alert-filled',
    description: '错误提示的填充样式。',
    isCategoryStart: false,
  },

  {
    category: '尺寸',
    className: 'alert-sm',
    description: '小号警告框，紧凑间距与字体。',
    isCategoryStart: true,
  },
  {
    category: '尺寸',
    className: 'alert-lg',
    description: '大号警告框，增加间距与字体。',
    isCategoryStart: false,
  },

  {
    category: '修饰类',
    className: 'alert-no-icon',
    description: '隐藏默认图标。',
    isCategoryStart: true,
  },
  {
    category: '修饰类',
    className: 'alert-borderless',
    description: '移除边框样式。',
    isCategoryStart: false,
  },
]
</script>

<template>
  <DocsContainer>
    <DocsHeader
      title="Alert 警告组件"
      description="用于显示状态提示、信息反馈的警告框组件，内置图标与关闭按钮，支持多种状态与样式。"
    />

    <ApiReference :data="apiClasses" />

    <DocsSection title="基础示例">
      <div class="flex flex-col gap-4">
        <div class="alert alert-info">
          <div>
            <div class="alert-title">信息提示</div>
            <div class="alert-description">这是一条信息提示内容。</div>
          </div>
          <div class="alert-close"></div>
        </div>

        <div class="alert alert-success">
          <div>
            <div class="alert-title">操作成功</div>
            <div class="alert-description">你的请求已成功处理。</div>
          </div>
          <div class="alert-close"></div>
        </div>

        <div class="alert alert-warning">
          <div>
            <div class="alert-title">警告提示</div>
            <div class="alert-description">请注意相关操作风险。</div>
          </div>
          <div class="alert-close"></div>
        </div>

        <div class="alert alert-error">
          <div>
            <div class="alert-title">错误提示</div>
            <div class="alert-description">发生了意外错误，请重试。</div>
          </div>
          <div class="alert-close"></div>
        </div>
      </div>
    </DocsSection>

    <DocsSection title="填充样式">
      <div class="flex flex-col gap-4">
        <div class="alert-info alert-filled">
          <div>
            <div class="alert-title">信息提示</div>
            <div class="alert-description">浅色填充样式，适合卡片背景。</div>
          </div>
          <div class="alert-close"></div>
        </div>

        <div class="alert-success alert-filled">
          <div>
            <div class="alert-title">成功提示</div>
            <div class="alert-description">操作已成功完成。</div>
          </div>
          <div class="alert-close"></div>
        </div>

        <div class="alert-warning alert-filled">
          <div>
            <div class="alert-title">警告提示</div>
            <div class="alert-description">请谨慎执行此操作。</div>
          </div>
          <div class="alert-close"></div>
        </div>

        <div class="alert-error alert-filled">
          <div>
            <div class="alert-title">错误提示</div>
            <div class="alert-description">操作失败，请稍后重试。</div>
          </div>
          <div class="alert-close"></div>
        </div>
      </div>
    </DocsSection>

    <DocsSection title="尺寸与修饰">
      <div class="flex flex-col gap-4">
        <div class="alert alert-info alert-sm">
          <div>
            <div class="alert-title">小号提示</div>
            <div class="alert-description">适合紧凑布局。</div>
          </div>
          <div class="alert-close"></div>
        </div>

        <div class="alert alert-success alert-lg alert-no-icon">
          <div>
            <div class="alert-title">无图标提示</div>
            <div class="alert-description">图标已隐藏。</div>
          </div>
          <div class="alert-close"></div>
        </div>

        <div class="alert alert-warning alert-borderless">
          <div>
            <div class="alert-title">无边框样式</div>
            <div class="alert-description">更简洁的视觉风格。</div>
          </div>
          <div class="alert-close"></div>
        </div>
      </div>
    </DocsSection>
  </DocsContainer>
</template>
