<script setup lang="ts">
import { ref } from 'vue'
import DocsHeader from '../zcomp/DocsHeader.vue'
import DocsContainer from '../zcomp/DocsContainer.vue'
import DocsSection from '../zcomp/DocsSection.vue'
import ApiReference from '../zcomp/ApiReference.vue'

const rangeValue = ref(40)
const rangeValuePrimary = ref(60)
const rangeValueSecondary = ref(30)
const rangeValueAccent = ref(80)

const apiClasses = [
  {
    category: '基础',
    className: 'range',
    description: "基础滑块样式，用于 <input type='range'>。",
    isCategoryStart: true,
  },
  {
    category: '尺寸',
    className: 'range-xs',
    description: '超小尺寸滑块。',
    isCategoryStart: true,
  },
  {
    category: '尺寸',
    className: 'range-sm',
    description: '小尺寸滑块。',
    isCategoryStart: false,
  },
  {
    category: '尺寸',
    className: 'range-md',
    description: '中等尺寸滑块（默认）。',
    isCategoryStart: false,
  },
  {
    category: '尺寸',
    className: 'range-lg',
    description: '大尺寸滑块。',
    isCategoryStart: false,
  },
  {
    category: '尺寸',
    className: 'range-xl',
    description: '超大尺寸滑块。',
    isCategoryStart: false,
  },
  {
    category: '颜色',
    className: 'range-primary',
    description: '主色滑块。',
    isCategoryStart: true,
  },
  {
    category: '颜色',
    className: 'range-secondary',
    description: '次色滑块。',
    isCategoryStart: false,
  },
  {
    category: '颜色',
    className: 'range-destructive',
    description: '危险色滑块。',
    isCategoryStart: false,
  },
  {
    category: '颜色',
    className: 'range-accent',
    description: '强调色滑块。',
    isCategoryStart: false,
  },
  {
    category: '结构',
    className: 'range-wrapper',
    description: '滑块容器，通常包裹标签和值显示。',
    isCategoryStart: true,
  },
  {
    category: '结构',
    className: 'range-label',
    description: '显示滑块标题和当前值。',
    isCategoryStart: false,
  },
  {
    category: '结构',
    className: 'range-value',
    description: '当前滑块数值样式。',
    isCategoryStart: false,
  },
  {
    category: '刻度',
    className: 'range-marks',
    description: '刻度容器。',
    isCategoryStart: true,
  },
  {
    category: '刻度',
    className: 'range-mark',
    description: '单个刻度标记。',
    isCategoryStart: false,
  },
]
</script>

<template>
  <DocsContainer>
    <DocsHeader
      title="Range 滑块"
      description="用于通过滑动手柄选择数值的输入组件，支持尺寸、颜色、标签、刻度等多种样式。"
    />

    <ApiReference :data="apiClasses" />

    <!-- 基础滑块 -->
    <DocsSection title="基础滑块">
      <div class="range-wrapper max-w-md">
        <div class="range-label">
          <span>音量</span>
          <span class="range-value">{{ rangeValue }}</span>
        </div>
        <input v-model="rangeValue" type="range" min="0" max="100" class="range" />
      </div>
    </DocsSection>

    <!-- 尺寸变体 -->
    <DocsSection title="尺寸变体">
      <div class="flex flex-col gap-4 max-w-md">
        <input type="range" class="range range-xs" />
        <input type="range" class="range range-sm" />
        <input type="range" class="range range-md" />
        <input type="range" class="range range-lg" />
        <input type="range" class="range range-xl" />
      </div>
    </DocsSection>

    <!-- 颜色变体 -->
    <DocsSection title="颜色变体">
      <div class="flex flex-col gap-4 max-w-md">
        <input v-model="rangeValuePrimary" type="range" class="range range-primary" />
        <input v-model="rangeValueSecondary" type="range" class="range range-secondary" />
        <input v-model="rangeValueAccent" type="range" class="range range-accent" />
        <input v-model="rangeValueAccent" type="range" class="range range-destructive" />
      </div>
    </DocsSection>

    <!-- 带标签和数值 -->
    <DocsSection title="带标签和值显示">
      <div class="range-wrapper max-w-md">
        <div class="range-label">
          <span>亮度</span>
          <span class="range-value">{{ rangeValuePrimary }}</span>
        </div>
        <input
          v-model="rangeValuePrimary"
          type="range"
          min="0"
          max="100"
          class="range range-primary"
        />
      </div>
    </DocsSection>
  </DocsContainer>
</template>
