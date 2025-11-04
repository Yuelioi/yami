<script setup lang="ts">
import DocsHeader from '../zcomp/DocsHeader.vue'
import DocsContainer from '../zcomp/DocsContainer.vue'
import DocsSection from '../zcomp/DocsSection.vue'
import ApiReference from '../zcomp/ApiReference.vue'

const apiClasses = [
  {
    category: '基础',
    className: 'file-input',
    description: '文件上传组件的基础容器，用于包裹 input[type=file]。',
    isCategoryStart: true,
  },

  {
    category: '配色方案',
    className: 'file-input-primary',
    description: '主色调文件上传样式。',
    isCategoryStart: true,
  },
  {
    category: '配色方案',
    className: 'file-input-secondary',
    description: '次色调文件上传样式。',
    isCategoryStart: false,
  },
  {
    category: '配色方案',
    className: 'file-input-accent',
    description: '强调色文件上传样式。',
    isCategoryStart: false,
  },
  {
    category: '配色方案',
    className: 'file-input-destructive',
    description: '危险操作色文件上传样式。',
    isCategoryStart: false,
  },

  {
    category: '尺寸',
    className: 'file-input-sm',
    description: '小号尺寸，适合紧凑布局。',
    isCategoryStart: true,
  },
  {
    category: '尺寸',
    className: 'file-input-md',
    description: '中号尺寸，默认样式。',
    isCategoryStart: false,
  },
  {
    category: '尺寸',
    className: 'file-input-lg',
    description: '大号尺寸，适合显著按钮。',
    isCategoryStart: false,
  },

  {
    category: '自定义样式',
    className: 'file-input-custom',
    description: '隐藏原始输入框，使用自定义 label 显示上传区域。',
    isCategoryStart: true,
  },
  {
    category: '自定义样式',
    className: 'file-input-dropzone',
    description: '拖拽上传区域样式，支持 drag & drop。',
    isCategoryStart: false,
  },
  {
    category: '自定义样式',
    className: 'file-input-button',
    description: '自定义按钮触发上传。',
    isCategoryStart: false,
  },

  {
    category: '圆角',
    className: 'file-input-rounded-none',
    description: '无圆角样式。',
    isCategoryStart: true,
  },
  {
    category: '圆角',
    className: 'file-input-rounded-sm',
    description: '小圆角样式。',
    isCategoryStart: false,
  },
  {
    category: '圆角',
    className: 'file-input-rounded-lg',
    description: '大圆角样式。',
    isCategoryStart: false,
  },
  {
    category: '圆角',
    className: 'file-input-rounded-full',
    description: '全圆角样式。',
    isCategoryStart: false,
  },

  {
    category: '状态',
    className: 'file-input-error',
    description: '错误状态样式。',
    isCategoryStart: true,
  },
  {
    category: '状态',
    className: 'file-input-success',
    description: '成功状态样式。',
    isCategoryStart: false,
  },

  {
    category: '布局',
    className: 'file-input-full',
    description: '让文件上传组件占据全宽。',
    isCategoryStart: true,
  },
]
</script>

<template>
  <DocsContainer>
    <DocsHeader
      title="File Input 文件上传组件"
      description="用于上传文件的交互组件，支持多种样式、尺寸、配色与自定义拖拽区域。"
    />

    <ApiReference :data="apiClasses" />

    <!-- 基础示例 -->
    <DocsSection title="基础示例">
      <div class="flex gap-4">
        <div class="file-input">
          <input type="file" />
        </div>
        <input type="text " class="input" value="正常input" />
      </div>
    </DocsSection>

    <!-- 配色方案 -->
    <DocsSection title="配色方案">
      <div class="flex flex-col gap-4">
        <div class="file-input file-input-primary">
          <input type="file" />
        </div>

        <div class="file-input file-input-secondary">
          <input type="file" />
        </div>

        <div class="file-input file-input-accent">
          <input type="file" />
        </div>

        <div class="file-input file-input-destructive">
          <input type="file" />
        </div>
      </div>
    </DocsSection>

    <!-- 尺寸示例 -->
    <DocsSection title="尺寸">
      <div class="flex flex-col gap-4">
        <div class="file-input file-input-sm">
          <input type="file" />
        </div>

        <div class="file-input file-input-md">
          <input type="file" />
        </div>

        <div class="file-input file-input-lg">
          <input type="file" />
        </div>
      </div>
    </DocsSection>

    <!-- 自定义样式 -->
    <DocsSection title="自定义样式">
      <div class="flex flex-col gap-6">
        <div class="file-input file-input-custom">
          <input id="customFile" type="file" />
          <label for="customFile" class="file-input-label">点击上传文件</label>
        </div>

        <div class="file-input file-input-dropzone">
          <input id="dropFile" type="file" />
          <label for="dropFile" class="file-input-dropzone-area">
            <div class="file-input-dropzone-text">拖拽文件到此处或点击上传</div>
            <div class="file-input-dropzone-hint">支持单个或多个文件</div>
          </label>
        </div>
      </div>
    </DocsSection>

    <!-- 状态 -->
    <DocsSection title="状态">
      <div class="flex flex-col gap-4">
        <div class="file-input file-input-error">
          <input type="file" />
          <div class="file-input-error-message">文件格式不正确</div>
        </div>

        <div class="file-input file-input-success">
          <input type="file" />
        </div>
      </div>
    </DocsSection>
  </DocsContainer>
</template>
