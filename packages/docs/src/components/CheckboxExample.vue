<script setup lang="ts">
import DocsHeader from '@/components/zcomp/DocsHeader.vue'
import DocsSection from '@/components/zcomp/DocsSection.vue'
import ApiReference from '@/components/zcomp/ApiReference.vue'
import DocsContainer from '@/components/zcomp/DocsContainer.vue'

const apiClasses = [
  {
    category: '基础',
    className: 'checkbox',
    description: '复选框容器',
    isCategoryStart: true,
  },
  {
    category: '颜色',
    className: 'checkbox-primary',
    description: '主色',
    isCategoryStart: false,
  },
  {
    category: '颜色',
    className: 'checkbox-secondary',
    description: '次色',
    isCategoryStart: false,
  },
  {
    category: '颜色',
    className: 'checkbox-accent',
    description: '强调色',
    isCategoryStart: false,
  },
  {
    category: '颜色',
    className: 'checkbox-info',
    description: '信息色',
    isCategoryStart: false,
  },
  {
    category: '颜色',
    className: 'checkbox-success',
    description: '成功色',
    isCategoryStart: false,
  },
  {
    category: '颜色',
    className: 'checkbox-warning',
    description: '警告色',
    isCategoryStart: false,
  },
  {
    category: '颜色',
    className: 'checkbox-error',
    description: '错误色',
    isCategoryStart: false,
  },
  {
    category: '尺寸',
    className: 'checkbox-xs',
    description: '超小',
    isCategoryStart: false,
  },
  {
    category: '尺寸',
    className: 'checkbox-sm',
    description: '小',
    isCategoryStart: false,
  },
  {
    category: '尺寸',
    className: 'checkbox-md',
    description: '中',
    isCategoryStart: false,
  },
  {
    category: '尺寸',
    className: 'checkbox-lg',
    description: '大',
    isCategoryStart: false,
  },
  {
    category: '尺寸',
    className: 'checkbox-xl',
    description: '超大',
    isCategoryStart: false,
  },
]
</script>

<template>
  <DocsContainer>
    <DocsHeader title="Checkbox" description="用于选择一个或多个选项的表单控件。" />

    <ApiReference :data="apiClasses"></ApiReference>

    <DocsSection title="基础">
      <div class="flex items-center gap-4">
        <label class="flex items-center gap-2 cursor-pointer">
          <input type="checkbox" class="checkbox" />
          <span>未选中</span>
        </label>
        <label class="flex items-center gap-2 cursor-pointer">
          <input type="checkbox" class="checkbox" checked />
          <span>已选中</span>
        </label>
        <label class="flex items-center gap-2 cursor-pointer">
          <input type="checkbox" class="checkbox" disabled />
          <span>禁用</span>
        </label>
      </div>
    </DocsSection>

    <DocsSection title="颜色">
      <div class="flex flex-wrap gap-4">
        <label class="flex items-center gap-2 cursor-pointer">
          <input type="checkbox" class="checkbox" checked />
          <span>中性</span>
        </label>
        <label class="flex items-center gap-2 cursor-pointer">
          <input type="checkbox" class="checkbox checkbox-primary" checked />
          <span>Primary</span>
        </label>
        <label class="flex items-center gap-2 cursor-pointer">
          <input type="checkbox" class="checkbox checkbox-secondary" checked />
          <span>Secondary</span>
        </label>
        <label class="flex items-center gap-2 cursor-pointer">
          <input type="checkbox" class="checkbox checkbox-accent" checked />
          <span>Accent</span>
        </label>
        <label class="flex items-center gap-2 cursor-pointer">
          <input type="checkbox" class="checkbox checkbox-info" checked />
          <span>Info</span>
        </label>
        <label class="flex items-center gap-2 cursor-pointer">
          <input type="checkbox" class="checkbox checkbox-success" checked />
          <span>Success</span>
        </label>
        <label class="flex items-center gap-2 cursor-pointer">
          <input type="checkbox" class="checkbox checkbox-warning" checked />
          <span>Warning</span>
        </label>
        <label class="flex items-center gap-2 cursor-pointer">
          <input type="checkbox" class="checkbox checkbox-error" checked />
          <span>Error</span>
        </label>
      </div>
    </DocsSection>

    <DocsSection title="尺寸">
      <div class="flex flex-wrap gap-6 items-center">
        <label class="flex items-center gap-2 cursor-pointer">
          <input type="checkbox" class="checkbox checkbox-xs checkbox-primary" checked />
          <span>xs</span>
        </label>
        <label class="flex items-center gap-2 cursor-pointer">
          <input type="checkbox" class="checkbox checkbox-sm checkbox-primary" checked />
          <span>sm</span>
        </label>
        <label class="flex items-center gap-2 cursor-pointer">
          <input type="checkbox" class="checkbox checkbox-md checkbox-primary" checked />
          <span>md</span>
        </label>
        <label class="flex items-center gap-2 cursor-pointer">
          <input type="checkbox" class="checkbox checkbox-lg checkbox-primary" checked />
          <span>lg</span>
        </label>
        <label class="flex items-center gap-2 cursor-pointer">
          <input type="checkbox" class="checkbox checkbox-xl checkbox-primary" checked />
          <span>xl</span>
        </label>
      </div>
    </DocsSection>

    <DocsSection title="不确定状态">
      <label class="flex items-center gap-2 cursor-pointer">
        <input type="checkbox" class="checkbox checkbox-primary" indeterminate />
        <span>不确定状态</span>
      </label>
    </DocsSection>

    <DocsSection title="表单示例">
      <form class="space-y-3">
        <div>
          <p class="font-semibold mb-2">选择您的兴趣</p>
          <div class="space-y-2">
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" class="checkbox checkbox-primary" />
              <span>Vue.js</span>
            </label>
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" class="checkbox checkbox-primary" checked />
              <span>React</span>
            </label>
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" class="checkbox checkbox-primary" />
              <span>Angular</span>
            </label>
            <label class="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" class="checkbox checkbox-primary" checked />
              <span>Svelte</span>
            </label>
          </div>
        </div>

        <div>
          <p class="font-semibold mb-2">同意条款</p>
          <label class="flex items-center gap-2 cursor-pointer">
            <input type="checkbox" class="checkbox checkbox-success" />
            <span>我同意服务条款和隐私政策</span>
          </label>
        </div>
      </form>
    </DocsSection>

    <DocsSection title="禁用状态">
      <div class="space-y-2">
        <label class="flex items-center gap-2 cursor-not-allowed opacity-50">
          <input type="checkbox" class="checkbox" disabled />
          <span>禁用未选中</span>
        </label>
        <label class="flex items-center gap-2 cursor-not-allowed opacity-50">
          <input type="checkbox" class="checkbox checkbox-primary" disabled checked />
          <span>禁用已选中</span>
        </label>
      </div>
    </DocsSection>
  </DocsContainer>
</template>
