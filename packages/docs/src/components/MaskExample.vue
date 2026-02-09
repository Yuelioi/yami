<script setup lang="ts">
import DocsHeader from '@/components/zcomp/DocsHeader.vue'
import DocsContainer from '@/components/zcomp/DocsContainer.vue'
import DocsSection from '@/components/zcomp/DocsSection.vue'
import ApiReference from '@/components/zcomp/ApiReference.vue'

const apiClasses = [
  {
    category: 'Mask',
    className: 'mask',
    description: '基础遮罩类，用于设置 mask 属性，支持 center、contain、no-repeat。',
    isCategoryStart: true,
  },
  {
    category: 'Mask',
    className: 'mask-half-1',
    description: '遮罩显示左半部分（RTL 时为右半部分）。',
  },
  {
    category: 'Mask',
    className: 'mask-half-2',
    description: '遮罩显示右半部分（RTL 时为左半部分）。',
  },
  { category: 'Mask', className: 'mask-squircle', description: '圆角方形遮罩。' },
  { category: 'Mask', className: 'mask-decagon', description: '十边形遮罩。' },
  { category: 'Mask', className: 'mask-diamond', description: '菱形遮罩。' },
  { category: 'Mask', className: 'mask-heart', description: '心形遮罩。' },
  { category: 'Mask', className: 'mask-hexagon', description: '六边形遮罩。' },
  { category: 'Mask', className: 'mask-hexagon-2', description: '另一种六边形遮罩。' },
  { category: 'Mask', className: 'mask-circle', description: '圆形遮罩。' },
  { category: 'Mask', className: 'mask-parallelogram', description: '平行四边形遮罩。' },
  { category: 'Mask', className: 'mask-parallelogram-2', description: '另一种平行四边形遮罩。' },
  { category: 'Mask', className: 'mask-parallelogram-3', description: '纵向平行四边形遮罩。' },
  {
    category: 'Mask',
    className: 'mask-parallelogram-4',
    description: '另一种纵向平行四边形遮罩。',
  },
  { category: 'Mask', className: 'mask-pentagon', description: '五边形遮罩。' },
  { category: 'Mask', className: 'mask-square', description: '正方形遮罩。' },
  { category: 'Mask', className: 'mask-star', description: '星形遮罩。' },
  { category: 'Mask', className: 'mask-star-2', description: '另一种星形遮罩。' },
  { category: 'Mask', className: 'mask-triangle', description: '三角形遮罩。' },
  { category: 'Mask', className: 'mask-triangle-2', description: '另一种三角形遮罩。' },
  { category: 'Mask', className: 'mask-triangle-3', description: '纵向三角形遮罩。' },
  { category: 'Mask', className: 'mask-triangle-4', description: '另一种纵向三角形遮罩。' },
]
</script>

<template>
  <DocsContainer>
    <DocsHeader
      title="Mask 遮罩组件"
      description="提供各种 mask 形状类，可用于头像、图片或元素的自定义形状显示。"
    />

    <ApiReference :data="apiClasses" />

    <DocsSection title="基础用法">
      <div class="flex gap-4 flex-wrap">
        <div class="w-20 h-20 bg-primary mask mask-circle"></div>
        <div class="w-20 h-20 bg-secondary mask mask-squircle"></div>
        <div class="w-20 h-20 bg-accent mask mask-heart"></div>
        <div class="w-20 h-20 bg-success mask mask-diamond"></div>
        <div class="w-20 h-20 bg-warning mask mask-star"></div>
        <div class="w-20 h-20 bg-error mask mask-hexagon"></div>
      </div>
    </DocsSection>

    <DocsSection title="左右遮罩示例">
      <div class="flex gap-4">
        <div class="w-20 h-20 bg-primary mask mask-half-1"></div>
        <div class="w-20 h-20 bg-primary mask mask-half-2"></div>
      </div>
    </DocsSection>
  </DocsContainer>
</template>
