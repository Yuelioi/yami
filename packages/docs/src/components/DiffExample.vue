<script setup lang="ts">
import DocsHeader from '@/components/zcomp/DocsHeader.vue'
import DocsSection from '@/components/zcomp/DocsSection.vue'
import ApiReference from '@/components/zcomp/ApiReference.vue'
import DocsContainer from '@/components/zcomp/DocsContainer.vue'

const apiClasses = [
  {
    category: '基础',
    className: 'diff',
    description: '图片对比容器',
    isCategoryStart: true,
  },
  {
    category: '基础',
    className: 'diff-resizer',
    description: '可拖动的调整滑块',
    isCategoryStart: false,
  },
  {
    category: '基础',
    className: 'diff-item-1',
    description: '左侧/前景图片',
    isCategoryStart: false,
  },
  {
    category: '基础',
    className: 'diff-item-2',
    description: '右侧/背景图片',
    isCategoryStart: false,
  },
]
</script>

<template>
  <DocsContainer>
    <DocsHeader title="Diff" description="图片对比组件，用于展示两张图片的差异。" />

    <ApiReference :data="apiClasses"></ApiReference>

    <DocsSection title="基础对比">
      <div class="diff h-64 w-full overflow-hidden rounded-lg">
        <div class="diff-item-1">
          <img
            src="https://images.unsplash.com/photo-1506157786151-b8491531f063?w=600&h=400&fit=crop&q=80"
            alt="Before"
          />
        </div>
        <div class="diff-item-2">
          <img
            src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&h=400&fit=crop&q=80"
            alt="After"
          />
        </div>
        <div class="diff-resizer"></div>
      </div>
    </DocsSection>

    <DocsSection title="编辑前后对比">
      <div class="diff h-80 w-full overflow-hidden rounded-lg">
        <div class="diff-item-1">
          <img
            src="https://images.unsplash.com/photo-1506157786151-b8491531f063?w=600&h=400&fit=crop&q=50"
            alt="Original"
          />
        </div>
        <div class="diff-item-2">
          <img
            src="https://images.unsplash.com/photo-1506157786151-b8491531f063?w=600&h=400&fit=crop&q=90"
            alt="Enhanced"
          />
        </div>
        <div class="diff-resizer"></div>
      </div>
    </DocsSection>

    <DocsSection title="建筑改造对比">
      <div class="diff h-96 w-full overflow-hidden rounded-lg">
        <div class="diff-item-1">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop"
            alt="Before renovation"
          />
        </div>
        <div class="diff-item-2">
          <img
            src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&h=400&fit=crop"
            alt="After renovation"
          />
        </div>
        <div class="diff-resizer"></div>
      </div>
    </DocsSection>

    <DocsSection title="季节变化对比">
      <div class="diff h-80 w-full overflow-hidden rounded-lg">
        <div class="diff-item-1">
          <img
            src="https://images.unsplash.com/photo-1464207687429-7505649dae38?w=600&h=400&fit=crop"
            alt="Winter"
          />
        </div>
        <div class="diff-item-2">
          <img
            src="https://images.unsplash.com/photo-1495616811223-4d98c6e9c869?w=600&h=400&fit=crop"
            alt="Summer"
          />
        </div>
        <div class="diff-resizer"></div>
      </div>
    </DocsSection>

    <DocsSection title="小尺寸对比">
      <div class="diff h-48 w-full overflow-hidden rounded-lg">
        <div class="diff-item-1">
          <img
            src="https://images.unsplash.com/photo-1506157786151-b8491531f063?w=400&h=300&fit=crop"
            alt="Before"
          />
        </div>
        <div class="diff-item-2">
          <img
            src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=400&h=300&fit=crop"
            alt="After"
          />
        </div>
        <div class="diff-resizer"></div>
      </div>
    </DocsSection>

    <DocsSection title="响应式对比">
      <div class="diff h-64 w-full overflow-hidden rounded-lg sm:h-96">
        <div class="diff-item-1">
          <img
            src="https://images.unsplash.com/photo-1506157786151-b8491531f063?w=800&h=600&fit=crop"
            alt="Version 1"
          />
        </div>
        <div class="diff-item-2">
          <img
            src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&h=600&fit=crop"
            alt="Version 2"
          />
        </div>
        <div class="diff-resizer"></div>
      </div>
    </DocsSection>
  </DocsContainer>
</template>
