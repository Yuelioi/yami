<script setup lang="ts">
import DocsHeader from '@/components/zcomp/DocsHeader.vue'
import DocsContainer from '@/components/zcomp/DocsContainer.vue'
import DocsSection from '@/components/zcomp/DocsSection.vue'
import ApiReference from '@/components/zcomp/ApiReference.vue'

const apiClasses = [
  /* ================= Input ================= */
  {
    category: 'Input',
    className: 'input',
    description: '基础输入框，支持文本、数字、日期等类型，带聚焦高亮和禁用样式。',
    isCategoryStart: true,
  },
  {
    category: 'Input',
    className: 'input-floating',
    description: '浮动标签容器，用于实现占位文字浮动效果。',
  },
  {
    category: 'Input',
    className: 'input-floating-label',
    description: '浮动标签样式，随输入框聚焦或有值时上移。',
  },
  { category: 'Input', className: 'input-xs', description: '超小尺寸输入框。' },
  { category: 'Input', className: 'input-sm', description: '小尺寸输入框。' },
  { category: 'Input', className: 'input-md', description: '中等尺寸输入框（默认）。' },
  { category: 'Input', className: 'input-lg', description: '大尺寸输入框。' },
  { category: 'Input', className: 'input-xl', description: '超大尺寸输入框。' },
  { category: 'Input', className: 'no-focus', description: '禁用输入框聚焦时的边框和阴影效果。' },
]
</script>

<template>
  <DocsContainer>
    <DocsHeader
      title="Input 输入框组件"
      description="提供基础输入框样式，支持浮动标签、不同尺寸及禁用状态样式。"
    />

    <ApiReference :data="apiClasses" />

    <DocsSection title="基础用法">
      <div class="flex flex-col gap-4 w-80">
        <input class="input input-md" placeholder="请输入内容" />
        <input class="input input-md" placeholder="输入被禁用" disabled />
      </div>
    </DocsSection>

    <DocsSection title="浮动标签">
      <div class="input-floating w-80">
        <input class="input input-md" placeholder=" " type="text" />
        <span class="input-floating-label">用户名</span>
      </div>
    </DocsSection>

    <DocsSection title="尺寸示例">
      <div class="flex flex-col gap-3 w-80">
        <input class="input input-xs" placeholder="XS 尺寸" />
        <input class="input input-sm" placeholder="SM 尺寸" />
        <input class="input input-md" placeholder="MD 尺寸" />
        <input class="input input-lg" placeholder="LG 尺寸" />
        <input class="input input-xl" placeholder="XL 尺寸" />
      </div>
    </DocsSection>
    <DocsSection title="尺寸示例">
      <div class="flex flex-col gap-3 w-80">
        <div class="join max-w-sm">
          <input class="input join-item" placeholder="Search" />
          <button class="btn btn-outline btn-secondary join-item">Search</button>
        </div>

        <div class="join max-w-sm">
          <button class="btn btn-outline btn-secondary join-item">Search</button>
          <input class="input join-item" placeholder="Search" />
        </div>
      </div>
    </DocsSection>

    <DocsSection title="无聚焦效果">
      <input class="input input-md no-focus" placeholder="无聚焦样式" />
    </DocsSection>
  </DocsContainer>
</template>
