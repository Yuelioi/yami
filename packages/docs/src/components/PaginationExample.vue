<script setup lang="ts">
import DocsHeader from '@/components/zcomp/DocsHeader.vue'
import DocsSection from '@/components/zcomp/DocsSection.vue'
import ApiReference from '@/components/zcomp/ApiReference.vue'
import DocsContainer from '@/components/zcomp/DocsContainer.vue'

const apiClasses = [
  {
    category: '基础',
    className: 'pagination',
    description: '分页容器',
    isCategoryStart: true,
  },
  {
    category: '按钮',
    className: 'pagination-btn',
    description: '分页按钮',
    isCategoryStart: false,
  },
  {
    category: '按钮',
    className: 'pagination-link',
    description: '分页链接',
    isCategoryStart: false,
  },
  {
    category: '按钮',
    className: 'pagination-prev',
    description: '上一页按钮',
    isCategoryStart: false,
  },
  {
    category: '按钮',
    className: 'pagination-next',
    description: '下一页按钮',
    isCategoryStart: false,
  },
  {
    category: '特殊',
    className: 'pagination-ellipsis',
    description: '省略号',
    isCategoryStart: false,
  },
  {
    category: '特殊',
    className: 'pagination-info',
    description: '分页信息',
    isCategoryStart: false,
  },
  {
    category: '状态',
    className: 'pagination-active',
    description: '活跃状态',
    isCategoryStart: false,
  },
  {
    category: '尺寸',
    className: 'pagination-xs',
    description: '超小',
    isCategoryStart: false,
  },
  {
    category: '尺寸',
    className: 'pagination-sm',
    description: '小',
    isCategoryStart: false,
  },
  {
    category: '尺寸',
    className: 'pagination-md',
    description: '中',
    isCategoryStart: false,
  },
  {
    category: '尺寸',
    className: 'pagination-lg',
    description: '大',
    isCategoryStart: false,
  },
  {
    category: '尺寸',
    className: 'pagination-xl',
    description: '超大',
    isCategoryStart: false,
  },
  {
    category: '样式',
    className: 'pagination-compact',
    description: '紧凑模式',
    isCategoryStart: false,
  },
  {
    category: '样式',
    className: 'pagination-simple',
    description: '简单模式',
    isCategoryStart: false,
  },
]
</script>

<template>
  <DocsContainer>
    <DocsHeader title="Pagination" description="分页导航组件，用于翻页或数据浏览控制。" />

    <ApiReference :data="apiClasses"></ApiReference>

    <DocsSection title="基础分页">
      <nav class="pagination">
        <button class="pagination-btn" disabled>‹</button>
        <button class="pagination-btn">1</button>
        <button class="pagination-btn" aria-current="page">2</button>
        <button class="pagination-btn">3</button>
        <button class="pagination-next">›</button>
      </nav>
    </DocsSection>

    <DocsSection title="带省略号">
      <nav class="pagination">
        <button class="pagination-prev">‹</button>
        <button class="pagination-btn">1</button>
        <button class="pagination-btn">2</button>
        <span class="pagination-ellipsis">…</span>
        <button class="pagination-btn">8</button>
        <button class="pagination-btn">9</button>
        <button class="pagination-btn">10</button>
        <button class="pagination-next">›</button>
      </nav>
    </DocsSection>

    <DocsSection title="完整分页">
      <div class="space-y-4">
        <nav class="pagination justify-center">
          <button class="pagination-prev">上一页</button>
          <button class="pagination-btn">1</button>
          <button class="pagination-btn">2</button>
          <button class="pagination-btn" aria-current="page">3</button>
          <button class="pagination-btn">4</button>
          <button class="pagination-btn">5</button>
          <button class="pagination-next">下一页</button>
        </nav>

        <div class="flex justify-center">
          <span class="pagination-info">第 3 页，共 10 页</span>
        </div>
      </div>
    </DocsSection>

    <DocsSection title="尺寸变体">
      <div class="space-y-4">
        <div>
          <p class="text-sm text-base-content/60 mb-2">超小 (xs)</p>
          <nav class="pagination pagination-xs">
            <button class="pagination-btn" disabled>‹</button>
            <button class="pagination-btn">1</button>
            <button class="pagination-btn" aria-current="page">2</button>
            <button class="pagination-btn">3</button>
            <button class="pagination-btn">›</button>
          </nav>
        </div>

        <div>
          <p class="text-sm text-base-content/60 mb-2">小 (sm)</p>
          <nav class="pagination pagination-sm">
            <button class="pagination-btn" disabled>‹</button>
            <button class="pagination-btn">1</button>
            <button class="pagination-btn" aria-current="page">2</button>
            <button class="pagination-btn">3</button>
            <button class="pagination-btn">›</button>
          </nav>
        </div>

        <div>
          <p class="text-sm text-base-content/60 mb-2">中 (md) - 默认</p>
          <nav class="pagination pagination-md">
            <button class="pagination-btn" disabled>‹</button>
            <button class="pagination-btn">1</button>
            <button class="pagination-btn" aria-current="page">2</button>
            <button class="pagination-btn">3</button>
            <button class="pagination-btn">›</button>
          </nav>
        </div>

        <div>
          <p class="text-sm text-base-content/60 mb-2">大 (lg)</p>
          <nav class="pagination pagination-lg">
            <button class="pagination-btn" disabled>‹</button>
            <button class="pagination-btn">1</button>
            <button class="pagination-btn" aria-current="page">2</button>
            <button class="pagination-btn">3</button>
            <button class="pagination-btn">›</button>
          </nav>
        </div>

        <div>
          <p class="text-sm text-base-content/60 mb-2">超大 (xl)</p>
          <nav class="pagination pagination-xl">
            <button class="pagination-btn" disabled>‹</button>
            <button class="pagination-btn">1</button>
            <button class="pagination-btn" aria-current="page">2</button>
            <button class="pagination-btn">3</button>
            <button class="pagination-btn">›</button>
          </nav>
        </div>
      </div>
    </DocsSection>

    <DocsSection title="紧凑模式">
      <nav class="pagination pagination-compact">
        <button class="pagination-btn" disabled>‹</button>
        <button class="pagination-btn">1</button>
        <button class="pagination-btn" aria-current="page">2</button>
        <button class="pagination-btn">3</button>
        <button class="pagination-btn">4</button>
        <button class="pagination-btn">5</button>
        <button class="pagination-btn">›</button>
      </nav>
    </DocsSection>

    <DocsSection title="简单分页（仅上一页/下一页）">
      <nav class="pagination pagination-simple w-full">
        <button class="pagination-prev">← 上一页</button>
        <button class="pagination-next">下一页 →</button>
      </nav>
    </DocsSection>

    <DocsSection title="带链接的分页">
      <nav class="pagination">
        <a href="#" class="pagination-link">‹</a>
        <a href="#" class="pagination-link">1</a>
        <a href="#" class="pagination-link pagination-active">2</a>
        <a href="#" class="pagination-link">3</a>
        <a href="#" class="pagination-link">›</a>
      </nav>
    </DocsSection>

    <DocsSection title="禁用状态">
      <nav class="pagination">
        <button class="pagination-btn" disabled>‹ 上一页</button>
        <button class="pagination-btn">1</button>
        <button class="pagination-btn" aria-current="page">2</button>
        <button class="pagination-btn">3</button>
        <button class="pagination-next">下一页 ›</button>
      </nav>
    </DocsSection>
  </DocsContainer>
</template>
