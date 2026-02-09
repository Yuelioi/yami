<script setup lang="ts">
import DocsHeader from '@/components/zcomp/DocsHeader.vue'
import DocsContainer from '@/components/zcomp/DocsContainer.vue'
import DocsSection from '@/components/zcomp/DocsSection.vue'
import ApiReference from '@/components/zcomp/ApiReference.vue'

const apiClasses = [
  /* ================= Filter ================= */
  {
    category: 'Filter',
    className: 'filter',
    description: '过滤器容器，用于动态显示/隐藏选项，支持单选、多选及重置操作。',
    isCategoryStart: true,
  },
  {
    category: 'Filter',
    className: 'filter-reset',
    description: '重置按钮，用于清空已选择的选项。',
  },
]
</script>

<template>
  <DocsContainer>
    <DocsHeader
      title="Filter 过滤器组件"
      description="用于展示可选择的过滤项，支持动态隐藏未选项和重置操作。"
    />

    <ApiReference :data="apiClasses" />

    <!-- 基础用法 -->
    <DocsSection title="单选按钮和重置按钮">
      <form class="filter">
        <input class="btn btn-square" type="reset" value="×" />
        <input class="btn" type="radio" name="drink" aria-label="Tea" />
        <input class="btn" type="radio" name="drink" aria-label="Coffee" />
        <input class="btn" type="radio" name="drink" aria-label="Smoothie" />
      </form>
    </DocsSection>

    <!-- 动态效果示意 -->
    <DocsSection title="无需 HTML 表单即可实现过滤器">
      <div class="filter">
        <input class="btn filter-reset" type="radio" name="destination" aria-label="All" />
        <input class="btn" type="radio" name="destination" aria-label="Jungle" />
        <input class="btn" type="radio" name="destination" aria-label="Beach" />
        <input class="btn" type="radio" name="destination" aria-label="Mountain" />
      </div>
    </DocsSection>
  </DocsContainer>
</template>
