<script setup lang="ts">
import DocsHeader from '@/components/zcomp/DocsHeader.vue'
import ApiReference from '@/components/zcomp/ApiReference.vue'
import DocsContainer from '@/components/zcomp/DocsContainer.vue'
import DocsSection from '@/components/zcomp/DocsSection.vue'

const apiClasses = [
  {
    category: '基础结构',
    className: 'number',
    description: '数字输入容器。',
    isCategoryStart: true,
  },
  {
    category: '基础结构',
    className: 'number-input',
    description: '数字输入框本体。',
    isCategoryStart: false,
  },

  {
    category: '状态',
    className: 'number-error',
    description: '错误状态。',
    isCategoryStart: true,
  },
  {
    category: '状态',
    className: 'number-disabled',
    description: '禁用状态。',
    isCategoryStart: false,
  },

  {
    category: '控制',
    className: 'number-controls',
    description: '加减控制按钮容器。',
    isCategoryStart: true,
  },
  {
    category: '控制',
    className: 'number-control',
    description: '单个控制按钮。',
    isCategoryStart: false,
  },
]
</script>

<template>
  <DocsContainer>
    <DocsHeader
      title="Number 数字输入"
      description="用于输入数值的表单组件。支持错误、禁用状态，并可组合加减控制按钮。"
    />

    <ApiReference :data="apiClasses" />

    <!-- 基础用法 -->
    <DocsSection title="基础用法">
      <div class="number" style="max-width: 200px">
        <input type="number" class="number-input" placeholder="请输入数字" />
      </div>
    </DocsSection>

    <!-- 带控制按钮 -->
    <DocsSection title="加减控制">
      <div class="number" style="max-width: 200px">
        <input type="number" class="number-input" value="1" />
        <div class="number-controls">
          <div class="number-control">+</div>
          <div class="number-control">−</div>
        </div>
      </div>
    </DocsSection>

    <!-- 错误状态 -->
    <DocsSection title="错误状态">
      <div class="number number-error" style="max-width: 200px">
        <input type="number" class="number-input" value="999" />
      </div>
    </DocsSection>

    <!-- 禁用状态 -->
    <DocsSection title="禁用状态">
      <div class="number number-disabled" style="max-width: 200px">
        <input type="number" class="number-input" value="10" disabled />
      </div>
    </DocsSection>
  </DocsContainer>
</template>
