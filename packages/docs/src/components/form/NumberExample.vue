<script setup lang="ts">
import DocsHeader from '../zcomp/DocsHeader.vue'
import DocsContainer from '../zcomp/DocsContainer.vue'
import DocsSection from '../zcomp/DocsSection.vue'
import ApiReference from '../zcomp/ApiReference.vue'

const apiClasses = [
  {
    category: '基础',
    className: 'input-number',
    description: '数字输入框的基础容器样式，包含按钮与输入框布局。',
    isCategoryStart: true,
  },

  {
    category: '尺寸变体',
    className: 'input-xs',
    description: '超小尺寸（按钮与输入框更紧凑）。',
    isCategoryStart: true,
  },
  {
    category: '尺寸变体',
    className: 'input-sm',
    description: '小号尺寸。',
    isCategoryStart: false,
  },
  {
    category: '尺寸变体',
    className: 'input-md',
    description: '中等尺寸（默认）。',
    isCategoryStart: false,
  },
  {
    category: '尺寸变体',
    className: 'input-lg',
    description: '大号尺寸。',
    isCategoryStart: false,
  },
  {
    category: '尺寸变体',
    className: 'input-xl',
    description: '超大尺寸。',
    isCategoryStart: false,
  },

  {
    category: '颜色变体',
    className: 'input-primary',
    description: '主色调边框与聚焦状态。',
    isCategoryStart: true,
  },
  {
    category: '颜色变体',
    className: 'input-secondary',
    description: '次级色样式。',
    isCategoryStart: false,
  },
  {
    category: '颜色变体',
    className: 'input-destructive',
    description: '错误/警告状态样式。',
    isCategoryStart: false,
  },

  {
    category: '修饰类',
    className: 'input-number-disabled',
    description: '禁用状态，样式淡化并禁止交互。',
    isCategoryStart: true,
  },

  {
    category: '修饰类',
    className: 'input-number-separated',
    description: '分离式按钮布局（按钮独立在输入框外）。',
    isCategoryStart: false,
  },
]
</script>

<template>
  <DocsContainer>
    <DocsHeader
      title="Input Number 数字输入框组件"
      description="用于输入与调整数字值的组件，支持多种尺寸、配色与布局样式。"
    />

    <ApiReference :data="apiClasses" />

    <!-- 基础示例 -->
    <DocsSection title="基础示例">
      <div class="flex flex-col gap-4">
        <div class="flex flex-nowrap items-center gap-4">
          <div class="input-number">
            <button>-</button>
            <input type="number" value="1" />
            <button>+</button>
          </div>
          <input type="text" class="input" value="正常的input" />
        </div>

        <div class="input-number input-primary">
          <button>-</button>
          <input type="number" value="5" />
          <button>+</button>
        </div>
      </div>
    </DocsSection>

    <!-- 尺寸变体 -->
    <DocsSection title="尺寸变体">
      <div class="flex flex-col gap-3">
        <div class="input-number input-xs">
          <button>-</button><input type="number" value="1" /><button>+</button>
        </div>
        <div class="input-number input-sm">
          <button>-</button><input type="number" value="2" /><button>+</button>
        </div>
        <div class="input-number input-md">
          <button>-</button><input type="number" value="3" /><button>+</button>
        </div>
        <div class="input-number input-lg">
          <button>-</button><input type="number" value="4" /><button>+</button>
        </div>
        <div class="input-number input-xl">
          <button>-</button><input type="number" value="5" /><button>+</button>
        </div>
      </div>
    </DocsSection>

    <!-- 颜色变体 -->
    <DocsSection title="颜色变体">
      <div class="flex flex-col gap-3">
        <div class="input-number input-primary">
          <button>-</button><input type="number" value="8" /><button>+</button>
        </div>
        <div class="input-number input-secondary">
          <button>-</button><input type="number" value="9" /><button>+</button>
        </div>
        <div class="input-number input-destructive">
          <button>-</button><input type="number" value="10" /><button>+</button>
        </div>
      </div>
    </DocsSection>

    <!-- 修饰类 -->
    <DocsSection title="修饰样式" description="外置按钮">
      <div class="flex flex-col gap-4">
        <div class="input-number input-xs input-number-separated">
          <button>-</button>
          <input type="number" value="8" />
          <button>+</button>
        </div>
        <div class="input-number input-sm input-number-separated">
          <button>-</button>
          <input type="number" value="8" />
          <button>+</button>
        </div>

        <div class="input-number input-md input-number-separated">
          <button>-</button>
          <input type="number" value="8" />
          <button>+</button>
        </div>
        <div class="input-number input-lg input-number-separated">
          <button>-</button>
          <input type="number" value="8" />
          <button>+</button>
        </div>

        <div class="input-number input-xl input-number-separated">
          <button>-</button>
          <input type="number" value="8" />
          <button>+</button>
        </div>
      </div>
    </DocsSection>

    <!-- 禁用状态 -->
    <DocsSection title="禁用状态">
      <div class="input-number input-number-disabled">
        <button disabled>-</button>
        <input type="number" value="0" disabled />
        <button disabled>+</button>
      </div>
    </DocsSection>
  </DocsContainer>
</template>
