<script setup lang="ts">
import DocsHeader from '@/components/zcomp/DocsHeader.vue'
import DocsSection from '@/components/zcomp/DocsSection.vue'
import ApiReference from '@/components/zcomp/ApiReference.vue'
import DocsContainer from '@/components/zcomp/DocsContainer.vue'

const apiClasses = [
  {
    category: '基础',
    className: 'card',
    description: '卡片容器',
    isCategoryStart: true,
  },
  {
    category: '基础',
    className: 'card-border',
    description: '边框样式',
    isCategoryStart: false,
  },
  {
    category: '基础',
    className: 'card-title',
    description: '卡片标题',
    isCategoryStart: false,
  },
  {
    category: '基础',
    className: 'card-header',
    description: '卡片头部',
    isCategoryStart: false,
  },
  {
    category: '基础',
    className: 'card-body',
    description: '卡片内容',
    isCategoryStart: false,
  },
  {
    category: '基础',
    className: 'card-footer',
    description: '卡片页脚',
    isCategoryStart: false,
  },
  {
    category: '基础',
    className: 'card-actions',
    description: '操作按钮组',
    isCategoryStart: false,
  },
  {
    category: '样式',
    className: 'card-image-full',
    description: '全图背景',
    isCategoryStart: false,
  },
  {
    category: '样式',
    className: 'card-side',
    description: '横向布局',
    isCategoryStart: false,
  },
  {
    category: '样式',
    className: 'card-group',
    description: '卡片组',
    isCategoryStart: false,
  },
  {
    category: '尺寸',
    className: 'card-xs',
    description: '超小',
    isCategoryStart: false,
  },
  {
    category: '尺寸',
    className: 'card-sm',
    description: '小',
    isCategoryStart: false,
  },
  {
    category: '尺寸',
    className: 'card-md',
    description: '中',
    isCategoryStart: false,
  },
  {
    category: '尺寸',
    className: 'card-lg',
    description: '大',
    isCategoryStart: false,
  },
  {
    category: '尺寸',
    className: 'card-xl',
    description: '超大',
    isCategoryStart: false,
  },
]
</script>

<template>
  <DocsContainer>
    <DocsHeader title="Card" description="内容容器，用于组织和展示相关信息。" />

    <ApiReference :data="apiClasses"></ApiReference>

    <DocsSection title="基础">
      <div class="card bg-base-100 border rounded-lg">
        <div class="card-body">
          <h2 class="card-title">卡片标题</h2>
          <p>卡片内容在这里。可以包含任何类型的内容。</p>
        </div>
      </div>
    </DocsSection>

    <DocsSection title="带标题和操作">
      <div class="card bg-base-100 border rounded-lg">
        <div class="card-header">
          <h2 class="card-title">卡片标题</h2>
        </div>
        <div class="card-body">
          <p>这是卡片的主要内容区域。</p>
        </div>
        <div class="card-footer">
          <div class="card-actions w-full">
            <button class="btn btn-primary flex-1">确定</button>
            <button class="btn flex-1">取消</button>
          </div>
        </div>
      </div>
    </DocsSection>

    <DocsSection title="带图片">
      <div class="card bg-base-100 border rounded-lg overflow-hidden">
        <figure>
          <img
            src="https://images.unsplash.com/photo-1506157786151-b8491531f063?w=400&h=300&fit=crop"
            alt="Card image"
            class="h-48 w-full object-cover"
          />
        </figure>
        <div class="card-body">
          <h2 class="card-title">图片卡片</h2>
          <p>这个卡片包含一个图片和描述文本。</p>
          <div class="card-actions justify-end">
            <button class="btn btn-primary btn-sm">查看更多</button>
          </div>
        </div>
      </div>
    </DocsSection>

    <DocsSection title="横向布局">
      <div class="card card-side bg-base-100 border rounded-lg">
        <figure class="w-48">
          <img
            src="https://images.unsplash.com/photo-1506157786151-b8491531f063?w=300&h=200&fit=crop"
            alt="Card image"
          />
        </figure>
        <div class="card-body">
          <h2 class="card-title">横向卡片</h2>
          <p>图片在左边，内容在右边的卡片布局。</p>
          <div class="card-actions justify-end">
            <button class="btn btn-primary btn-sm">了解更多</button>
          </div>
        </div>
      </div>
    </DocsSection>

    <DocsSection title="全图背景">
      <div class="card border sm:max-w-sm">
        <figure>
          <img
            src="https://images.unsplash.com/photo-1506157786151-b8491531f063?fit=crop"
            alt="Watch"
          />
        </figure>
        <div class="card-body">
          <h5 class="card-title mb-2.5">Apple Smart Watch</h5>
          <p class="mb-4">Stay connected, motivated, and healthy with the latest Apple Watch.</p>
          <div class="card-actions">
            <button class="btn btn-primary">Buy Now</button>
            <button class="btn btn-secondary btn-soft">Add to cart</button>
          </div>
        </div>
      </div>
    </DocsSection>

    <DocsSection title="尺寸">
      <div class="space-y-4">
        <div class="card card-xs bg-base-100 border rounded-lg">
          <div class="card-body">
            <h2 class="card-title">超小卡片</h2>
            <p>xs 尺寸</p>
          </div>
        </div>
        <div class="card card-sm bg-base-100 border rounded-lg">
          <div class="card-body">
            <h2 class="card-title">小卡片</h2>
            <p>sm 尺寸</p>
          </div>
        </div>
        <div class="card card-md bg-base-100 border rounded-lg">
          <div class="card-body">
            <h2 class="card-title">中等卡片</h2>
            <p>md 尺寸</p>
          </div>
        </div>
        <div class="card card-lg bg-base-100 border rounded-lg">
          <div class="card-body">
            <h2 class="card-title">大卡片</h2>
            <p>lg 尺寸</p>
          </div>
        </div>
        <div class="card card-xl bg-base-100 border rounded-lg">
          <div class="card-body">
            <h2 class="card-title">超大卡片</h2>
            <p>xl 尺寸</p>
          </div>
        </div>
      </div>
    </DocsSection>

    <DocsSection title="卡片组">
      <div class="card-group">
        <div class="card bg-base-100">
          <div class="card-body">
            <h2 class="card-title">卡片 1</h2>
            <p>这是第一个卡片。</p>
          </div>
        </div>
        <div class="card bg-base-100">
          <div class="card-body">
            <h2 class="card-title">卡片 2</h2>
            <p>这是第二个卡片。</p>
          </div>
        </div>
        <div class="card bg-base-100">
          <div class="card-body">
            <h2 class="card-title">卡片 3</h2>
            <p>这是第三个卡片。</p>
          </div>
        </div>
      </div>
    </DocsSection>

    <DocsSection title="边框卡片">
      <div class="card card-border bg-base-100 rounded-lg">
        <div class="card-body">
          <h2 class="card-title">带边框的卡片</h2>
          <p>使用 card-border 类添加边框。</p>
        </div>
      </div>
    </DocsSection>
  </DocsContainer>
</template>
