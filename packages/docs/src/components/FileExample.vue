<script setup lang="ts">
import DocsHeader from '@/components/zcomp/DocsHeader.vue'
import DocsSection from '@/components/zcomp/DocsSection.vue'
import ApiReference from '@/components/zcomp/ApiReference.vue'
import DocsContainer from '@/components/zcomp/DocsContainer.vue'

const apiClasses = [
  {
    category: '基础',
    className: 'input-file',
    description: '文件输入容器',
    isCategoryStart: true,
  },
  {
    category: '尺寸',
    className: 'input-file-xs',
    description: '超小',
    isCategoryStart: false,
  },
  {
    category: '尺寸',
    className: 'input-file-sm',
    description: '小',
    isCategoryStart: false,
  },
  {
    category: '尺寸',
    className: 'input-file-md',
    description: '中',
    isCategoryStart: false,
  },
  {
    category: '尺寸',
    className: 'input-file-lg',
    description: '大',
    isCategoryStart: false,
  },
  {
    category: '尺寸',
    className: 'input-file-xl',
    description: '超大',
    isCategoryStart: false,
  },
  {
    category: '样式',
    className: 'input-file-floating',
    description: '浮动标签样式',
    isCategoryStart: false,
  },
]
</script>

<template>
  <DocsContainer>
    <DocsHeader title="File Input" description="文件输入组件，用于用户选择文件。" />

    <ApiReference :data="apiClasses"></ApiReference>

    <DocsSection title="基础文件输入">
      <input type="file" class="input p-0 input-bordered input-file" />
    </DocsSection>

    <DocsSection title="尺寸">
      <div class="space-y-4">
        <div>
          <p class="text-sm text-base-content/60 mb-2">超小 (xs)</p>
          <input type="file" class="input input-bordered input-file input-file-xs" />
        </div>
        <div>
          <p class="text-sm text-base-content/60 mb-2">小 (sm)</p>
          <input type="file" class="input input-bordered input-file input-file-sm" />
        </div>
        <div>
          <p class="text-sm text-base-content/60 mb-2">中 (md)</p>
          <input type="file" class="input input-bordered input-file input-file-md" />
        </div>
        <div>
          <p class="text-sm text-base-content/60 mb-2">大 (lg)</p>
          <input type="file" class="input input-bordered input-file input-file-lg" />
        </div>
        <div>
          <p class="text-sm text-base-content/60 mb-2">超大 (xl)</p>
          <input type="file" class="input input-bordered input-file input-file-xl" />
        </div>
      </div>
    </DocsSection>

    <DocsSection title="浮动标签样式">
      <input type="file" class="input input-bordered input-file input-file-floating" />
    </DocsSection>

    <DocsSection title="多文件选择">
      <input type="file" class="input input-bordered input-file" multiple />
    </DocsSection>

    <DocsSection title="特定文件类型">
      <div class="space-y-4">
        <div>
          <p class="text-sm text-base-content/60 mb-2">仅图片</p>
          <input type="file" class="input input-bordered input-file" accept="image/*" />
        </div>
        <div>
          <p class="text-sm text-base-content/60 mb-2">仅 PDF</p>
          <input type="file" class="input input-bordered input-file" accept=".pdf" />
        </div>
        <div>
          <p class="text-sm text-base-content/60 mb-2">多种类型</p>
          <input
            type="file"
            class="input input-bordered input-file"
            accept=".jpg,.jpeg,.png,.pdf"
          />
        </div>
      </div>
    </DocsSection>

    <DocsSection title="禁用状态">
      <input type="file" class="input input-bordered input-file" disabled />
    </DocsSection>
  </DocsContainer>
</template>
