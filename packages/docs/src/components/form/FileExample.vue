<script setup lang="ts">
import { ref } from 'vue'
import DocsHeader from '../zcomp/DocsHeader.vue'
import ApiReference from '../zcomp/ApiReference.vue'
import DocsContainer from '../zcomp/DocsContainer.vue'
import DocsSection from '../zcomp/DocsSection.vue'

const apiClasses = [
  // 基础类
  {
    category: '基础类',
    className: 'file-input',
    description: '基础文件输入框，支持标准的 input[type=file] 元素。',
    isCategoryStart: true,
  },
  {
    category: '基础类',
    className: 'file-input-full',
    description: '全宽文件输入框。',
    isCategoryStart: false,
  },

  // 配色方案
  {
    category: '配色方案',
    className: 'file-input-primary',
    description: '主色文件按钮样式（蓝色）。',
    isCategoryStart: true,
  },
  {
    category: '配色方案',
    className: 'file-input-secondary',
    description: '次色文件按钮样式。',
    isCategoryStart: false,
  },

  // 尺寸变体
  {
    category: '尺寸变体',
    className: 'file-input-sm',
    description: '小尺寸（32px 高）。',
    isCategoryStart: true,
  },
  {
    category: '尺寸变体',
    className: 'file-input-md',
    description: '中等尺寸（40px 高）- 默认。',
    isCategoryStart: false,
  },
  {
    category: '尺寸变体',
    className: 'file-input-lg',
    description: '大尺寸（48px 高）。',
    isCategoryStart: false,
  },

  // 圆角变体
  {
    category: '圆角变体',
    className: 'file-input-rounded-none',
    description: '无圆角。',
    isCategoryStart: true,
  },
  {
    category: '圆角变体',
    className: 'file-input-rounded-sm',
    description: '小圆角。',
    isCategoryStart: false,
  },
  {
    category: '圆角变体',
    className: 'file-input-rounded-lg',
    description: '大圆角。',
    isCategoryStart: false,
  },
  {
    category: '圆角变体',
    className: 'file-input-rounded-full',
    description: '完全圆形。',
    isCategoryStart: false,
  },

  // 自定义样式
  {
    category: '自定义样式',
    className: 'file-input-custom',
    description: '自定义标签样式（隐藏原生输入）。',
    isCategoryStart: true,
  },

  // 拖放区
  {
    category: '拖放区',
    className: 'file-input-dropzone',
    description: '拖放上传区域。',
    isCategoryStart: true,
  },
  {
    category: '拖放区',
    className: 'file-input-dropzone-compact',
    description: '紧凑型拖放区。',
    isCategoryStart: false,
  },

  // 按钮样式
  {
    category: '按钮样式',
    className: 'file-input-button',
    description: '按钮触发式文件选择。',
    isCategoryStart: true,
  },
  {
    category: '按钮样式',
    className: 'file-input-button-primary',
    description: '主色按钮。',
    isCategoryStart: false,
  },
  {
    category: '按钮样式',
    className: 'file-input-button-secondary',
    description: '次色按钮。',
    isCategoryStart: false,
  },

  // 状态
  {
    category: '状态',
    className: 'file-input-error',
    description: '错误状态（红色边框）。',
    isCategoryStart: true,
  },
  {
    category: '状态',
    className: 'file-input-success',
    description: '成功状态（绿色边框）。',
    isCategoryStart: false,
  },
]

// ==================== 数据 ====================
const basicFile = ref<File | null>(null)
const customFile = ref<File | null>(null)
const dropzoneFiles = ref<File[]>([])
const isDragging = ref(false)
const dropzoneCompactFiles = ref<File[]>([])
const isCompactDragging = ref(false)
const buttonFile = ref<File | null>(null)
const buttonPrimaryInput = ref<HTMLInputElement>()
const buttonSecondaryInput = ref<HTMLInputElement>()

// ==================== 事件处理 ====================
const handleBasicFileChange = (e: Event) => {
  const target = e.target as HTMLInputElement
  basicFile.value = target.files?.[0] || null
}

const handleCustomFileChange = (e: Event) => {
  const target = e.target as HTMLInputElement
  customFile.value = target.files?.[0] || null
}

const handleDragOver = (e: DragEvent) => {
  e.preventDefault()
  isDragging.value = true
}

const handleDragLeave = () => {
  isDragging.value = false
}

const handleDrop = (e: DragEvent) => {
  e.preventDefault()
  isDragging.value = false
  const files = Array.from(e.dataTransfer?.files || [])
  dropzoneFiles.value = files
}

const handleDropzoneFileChange = (e: Event) => {
  const target = e.target as HTMLInputElement
  const files = Array.from(target.files || [])
  dropzoneFiles.value = files
}

const handleCompactDragOver = (e: DragEvent) => {
  e.preventDefault()
  isCompactDragging.value = true
}

const handleCompactDragLeave = () => {
  isCompactDragging.value = false
}

const handleCompactDrop = (e: DragEvent) => {
  e.preventDefault()
  isCompactDragging.value = false
  const files = Array.from(e.dataTransfer?.files || [])
  dropzoneCompactFiles.value = files
}

const handleCompactFileChange = (e: Event) => {
  const target = e.target as HTMLInputElement
  const files = Array.from(target.files || [])
  dropzoneCompactFiles.value = files
}

const handleButtonFileChange = (e: Event) => {
  const target = e.target as HTMLInputElement
  buttonFile.value = target.files?.[0] || null
}

const triggerButtonPrimary = () => {
  buttonPrimaryInput.value?.click()
}

const triggerButtonSecondary = () => {
  buttonSecondaryInput.value?.click()
}

// ==================== 工具函数 ====================
const formatFileSize = (bytes: number): string => {
  if (bytes === 0) return '0 B'
  const k = 1024
  const sizes = ['B', 'KB', 'MB', 'GB']
  const i = Math.floor(Math.log(bytes) / Math.log(k))
  return Math.round((bytes / Math.pow(k, i)) * 100) / 100 + ' ' + sizes[i]
}
</script>

<template>
  <DocsContainer>
    <!-- ===== 标题 ===== -->
    <DocsHeader
      title="File Input - 文件输入框"
      description="用于上传文件或图片的灵活组件。支持标准输入、自定义标签、拖放区和按钮式触发等多种使用方式。"
      componentName="FileInput"
      cssFile="file-input.css"
    />

    <!-- ===== API 参考 ===== -->
    <DocsSection title="API 参考">
      <ApiReference :data="apiClasses" />
    </DocsSection>

    <!-- ===== 基础用法 ===== -->
    <DocsSection title="基础用法">
      <p>最简单的文件输入框，使用原生 input[type=file]。</p>
      <div class="demo-section">
        <div class="file-input file-input-primary file-input-full">
          <input type="file" @change="handleBasicFileChange" />
        </div>
        <p v-if="basicFile" class="demo-info">
          ✓ 已选择: {{ basicFile.name }} ({{ formatFileSize(basicFile.size) }})
        </p>
      </div>
    </DocsSection>

    <!-- ===== 尺寸变体 ===== -->
    <DocsSection title="尺寸变体">
      <p>提供三种尺寸选项。</p>
      <div class="demo-section" style="display: flex; flex-direction: column; gap: 1rem">
        <div class="file-input file-input-sm file-input-primary file-input-full">
          <input type="file" />
        </div>
        <div class="file-input file-input-md file-input-primary file-input-full">
          <input type="file" />
        </div>
        <div class="file-input file-input-lg file-input-primary file-input-full">
          <input type="file" />
        </div>
      </div>
    </DocsSection>

    <!-- ===== 配色方案 ===== -->
    <DocsSection title="配色方案">
      <p>支持主色和次色。</p>
      <div class="demo-section" style="display: flex; flex-direction: column; gap: 1rem">
        <div class="file-input file-input-primary file-input-full">
          <input type="file" />
        </div>
        <div class="file-input file-input-secondary file-input-full">
          <input type="file" />
        </div>
      </div>
    </DocsSection>

    <!-- ===== 圆角变体 ===== -->
    <DocsSection title="圆角变体">
      <p>支持多种圆角选项。</p>
      <div class="demo-section" style="display: flex; flex-direction: column; gap: 1rem">
        <div class="file-input file-input-primary file-input-rounded-none file-input-full">
          <input type="file" />
        </div>
        <div class="file-input file-input-primary file-input-rounded-sm file-input-full">
          <input type="file" />
        </div>
        <div class="file-input file-input-primary file-input-rounded-lg file-input-full">
          <input type="file" />
        </div>
        <div class="file-input file-input-primary file-input-rounded-full file-input-full">
          <input type="file" />
        </div>
      </div>
    </DocsSection>

    <!-- ===== 自定义标签 ===== -->
    <DocsSection title="自定义标签样式">
      <p>使用自定义标签替代原生输入框。</p>
      <div class="demo-section">
        <div class="file-input-custom file-input-full">
          <input type="file" id="custom-input" @change="handleCustomFileChange" />
          <label for="custom-input" class="file-input-label">选择文件上传</label>
        </div>
        <p v-if="customFile" class="demo-info">
          ✓ 已选择: {{ customFile.name }} ({{ formatFileSize(customFile.size) }})
        </p>
      </div>
    </DocsSection>

    <!-- ===== 拖放区 ===== -->
    <DocsSection title="拖放上传区">
      <p>支持拖放上传的大区域。</p>
      <div class="demo-section">
        <div
          :class="['file-input-dropzone file-input-full', { 'file-input-dragging': isDragging }]"
          @dragover="handleDragOver"
          @dragleave="handleDragLeave"
          @drop="handleDrop"
        >
          <input type="file" multiple @change="handleDropzoneFileChange" />
          <div class="file-input-dropzone-area">
            <div class="file-input-dropzone-text">拖放文件到此处</div>
            <div class="file-input-dropzone-hint">或点击选择</div>
          </div>
        </div>
        <div v-if="dropzoneFiles.length > 0" class="demo-info">
          ✓ 已选择 {{ dropzoneFiles.length }} 个文件
        </div>
      </div>
    </DocsSection>

    <!-- ===== 紧凑拖放区 ===== -->
    <DocsSection title="紧凑拖放区">
      <p>更小的拖放上传区，适合表单中使用。</p>
      <div class="demo-section">
        <div
          :class="[
            'file-input-dropzone file-input-dropzone-compact file-input-full',
            { 'file-input-dragging': isCompactDragging },
          ]"
          @dragover="handleCompactDragOver"
          @dragleave="handleCompactDragLeave"
          @drop="handleCompactDrop"
        >
          <input type="file" multiple @change="handleCompactFileChange" />
          <div class="file-input-dropzone-area">
            <div class="file-input-dropzone-text">拖放或点击</div>
          </div>
        </div>
        <p v-if="dropzoneCompactFiles.length > 0" class="demo-info">
          ✓ 已选择 {{ dropzoneCompactFiles.length }} 个文件
        </p>
      </div>
    </DocsSection>

    <!-- ===== 按钮式上传 ===== -->
    <DocsSection title="按钮式上传">
      <p>使用按钮触发文件选择。</p>
      <div class="demo-section" style="display: flex; flex-direction: column; gap: 1rem">
        <div class="file-input-button file-input-button-primary">
          <input
            ref="buttonPrimaryInput"
            type="file"
            id="button-primary"
            @change="handleButtonFileChange"
          />
          <button class="file-input-button-trigger" @click="triggerButtonPrimary">
            <span v-if="buttonFile">{{ buttonFile.name }}</span>
            <span v-else>选择文件</span>
          </button>
        </div>
        <div class="file-input-button file-input-button-secondary">
          <input
            ref="buttonSecondaryInput"
            type="file"
            id="button-secondary"
            @change="
              (e) => {
                const target = e.target as HTMLInputElement
                const file = target.files?.[0]
                if (file) console.log('Secondary:', file.name)
              }
            "
          />
          <button class="file-input-button-trigger" @click="triggerButtonSecondary">
            选择文件
          </button>
        </div>
      </div>
    </DocsSection>

    <!-- ===== 错误状态 ===== -->
    <DocsSection title="错误状态">
      <p>显示文件验证错误。</p>
      <div class="demo-section">
        <div class="file-input file-input-primary file-input-error file-input-full">
          <input type="file" />
        </div>
        <div class="file-input-error-message">文件大小不能超过 10MB</div>
      </div>
    </DocsSection>

    <!-- ===== 成功状态 ===== -->
    <DocsSection title="成功状态">
      <p>文件验证成功。</p>
      <div class="demo-section">
        <div class="file-input file-input-primary file-input-success file-input-full">
          <input type="file" disabled />
        </div>
        <div class="file-input-success-message">✓ 文件上传成功</div>
      </div>
    </DocsSection>

    <!-- ===== 禁用状态 ===== -->
    <DocsSection title="禁用状态">
      <p>禁用文件选择。</p>
      <div class="demo-section" style="display: flex; flex-direction: column; gap: 1rem">
        <div class="file-input file-input-primary file-input-full">
          <input type="file" disabled />
        </div>
      </div>
    </DocsSection>
  </DocsContainer>
</template>

<style scoped>
.demo-section {
  margin: 1.5rem 0;
  padding: 1.5rem;
  background-color: var(--color-card);
  border: 1px solid var(--color-border);
  border-radius: calc(var(--radius) + 4px);
}

.demo-info {
  margin-top: 1rem;
  padding: 0.75rem;
  font-size: 0.875rem;
  color: var(--color-success);
  background-color: color-mix(in oklch, var(--color-success) 10%, var(--color-background));
  border-radius: calc(var(--radius) + 2px);
}
</style>
