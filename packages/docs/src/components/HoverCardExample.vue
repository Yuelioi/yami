<script setup lang="ts">
import DocsHeader from '@/components/zcomp/DocsHeader.vue'
import DocsSection from '@/components/zcomp/DocsSection.vue'
import ApiReference from '@/components/zcomp/ApiReference.vue'
import DocsContainer from '@/components/zcomp/DocsContainer.vue'

const apiClasses = [
  {
    category: '基础',
    className: 'hover-card',
    description: '悬浮卡片容器',
    isCategoryStart: true,
  },
  {
    category: '基础',
    className: 'hover-card-trigger',
    description: '触发元素',
    isCategoryStart: false,
  },
  {
    category: '基础',
    className: 'hover-card-content',
    description: '卡片内容面板',
    isCategoryStart: false,
  },
  {
    category: '位置',
    className: 'hover-card-top',
    description: '向上弹出',
    isCategoryStart: true,
  },
  {
    category: '位置',
    className: 'hover-card-start',
    description: '左对齐弹出',
    isCategoryStart: false,
  },
  {
    category: '位置',
    className: 'hover-card-end',
    description: '右对齐弹出',
    isCategoryStart: false,
  },
  {
    category: '尺寸',
    className: 'hover-card-sm',
    description: '小尺寸',
    isCategoryStart: true,
  },
  {
    category: '尺寸',
    className: 'hover-card-lg',
    description: '大尺寸',
    isCategoryStart: false,
  },
  {
    category: '样式',
    className: 'hover-card-bordered',
    description: '加粗描边',
    isCategoryStart: true,
  },
  {
    category: '样式',
    className: 'hover-card-glass',
    description: '毛玻璃效果',
    isCategoryStart: false,
  },
]
</script>

<template>
  <DocsContainer>
    <DocsHeader
      title="Hover Card"
      description="鼠标悬停时展示的浮层卡片，用于显示额外信息或预览内容。"
    />

    <ApiReference :data="apiClasses" />

    <DocsSection title="基础用法">
      <div class="flex flex-wrap gap-6">
        <div class="hover-card">
          <button class="btn hover-card-trigger">悬停查看</button>
          <div class="hover-card-content">
            <p class="text-sm font-medium">卡片标题</p>
            <p class="text-xs text-base-content/60 mt-1">这是一段简短的描述文字。</p>
          </div>
        </div>
        <div class="hover-card">
          <span class="hover-card-trigger underline cursor-pointer text-primary"
            >什么是悬浮卡片？</span
          >
          <div class="hover-card-content">
            <p class="text-xs text-base-content/70">
              悬浮卡片在鼠标经过触发元素时弹出，用于展示附加内容。
            </p>
          </div>
        </div>
      </div>
    </DocsSection>

    <DocsSection title="位置">
      <div class="flex flex-wrap gap-6 pb-4">
        <div>
          <p class="text-sm text-base-content/60 mb-8">默认（下方）</p>
          <div class="hover-card">
            <button class="btn btn-sm hover-card-trigger">下方弹出</button>
            <div class="hover-card-content">
              <p class="text-xs">从下方弹出的内容</p>
            </div>
          </div>
        </div>
        <div>
          <p class="text-sm text-base-content/60 mb-8">上方</p>
          <div class="hover-card hover-card-top">
            <button class="btn btn-sm hover-card-trigger">上方弹出</button>
            <div class="hover-card-content">
              <p class="text-xs">从上方弹出的内容</p>
            </div>
          </div>
        </div>
        <div>
          <p class="text-sm text-base-content/60 mb-8">左对齐</p>
          <div class="hover-card hover-card-start">
            <button class="btn btn-sm hover-card-trigger">左对齐</button>
            <div class="hover-card-content">
              <p class="text-xs">左侧对齐的内容</p>
            </div>
          </div>
        </div>
        <div>
          <p class="text-sm text-base-content/60 mb-8">右对齐</p>
          <div class="hover-card hover-card-end">
            <button class="btn btn-sm hover-card-trigger">右对齐</button>
            <div class="hover-card-content">
              <p class="text-xs">右侧对齐的内容</p>
            </div>
          </div>
        </div>
      </div>
    </DocsSection>

    <DocsSection title="尺寸">
      <div class="flex flex-wrap gap-6">
        <div>
          <p class="text-sm text-base-content/60 mb-3">小</p>
          <div class="hover-card hover-card-sm">
            <button class="btn btn-sm hover-card-trigger">小尺寸</button>
            <div class="hover-card-content">
              <p class="text-xs font-medium">小卡片</p>
              <p class="text-xs text-base-content/60 mt-0.5">紧凑的内容展示。</p>
            </div>
          </div>
        </div>
        <div>
          <p class="text-sm text-base-content/60 mb-3">默认</p>
          <div class="hover-card">
            <button class="btn btn-sm hover-card-trigger">默认尺寸</button>
            <div class="hover-card-content">
              <p class="text-sm font-medium">默认卡片</p>
              <p class="text-xs text-base-content/60 mt-1">标准内容展示区域。</p>
            </div>
          </div>
        </div>
        <div>
          <p class="text-sm text-base-content/60 mb-3">大</p>
          <div class="hover-card hover-card-lg">
            <button class="btn btn-sm hover-card-trigger">大尺寸</button>
            <div class="hover-card-content">
              <p class="text-sm font-medium">大卡片</p>
              <p class="text-xs text-base-content/60 mt-1">适合展示较多内容的场景。</p>
            </div>
          </div>
        </div>
      </div>
    </DocsSection>

    <DocsSection title="样式">
      <div class="flex flex-wrap gap-6">
        <div>
          <p class="text-sm text-base-content/60 mb-3">默认</p>
          <div class="hover-card">
            <button class="btn btn-sm hover-card-trigger">默认</button>
            <div class="hover-card-content">
              <p class="text-xs">默认卡片样式</p>
            </div>
          </div>
        </div>
        <div>
          <p class="text-sm text-base-content/60 mb-3">加粗描边</p>
          <div class="hover-card hover-card-bordered">
            <button class="btn btn-sm hover-card-trigger">描边</button>
            <div class="hover-card-content">
              <p class="text-xs">加粗描边卡片样式</p>
            </div>
          </div>
        </div>
        <div>
          <p class="text-sm text-base-content/60 mb-3">毛玻璃</p>
          <div class="hover-card hover-card-glass">
            <button class="btn btn-sm hover-card-trigger">玻璃</button>
            <div class="hover-card-content">
              <p class="text-xs">毛玻璃卡片样式</p>
            </div>
          </div>
        </div>
      </div>
    </DocsSection>

    <DocsSection title="用法">
      <div>
        <p class="text-sm text-base-content/60 mb-3">用户信息预览</p>
        <div class="hover-card hover-card-start hover-card-lg">
          <div class="flex items-center gap-2 cursor-pointer hover-card-trigger">
            <div
              class="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary text-sm font-bold"
            >
              张
            </div>
            <span class="text-sm font-medium">张三</span>
          </div>
          <div class="hover-card-content">
            <div class="flex items-center gap-3 mb-3">
              <div
                class="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold"
              >
                张
              </div>
              <div>
                <p class="font-semibold text-sm">张三</p>
                <p class="text-xs text-base-content/60">产品设计师</p>
              </div>
            </div>
            <p class="text-xs text-base-content/70">热爱设计与开发，专注于构建优雅的用户体验。</p>
            <div class="flex gap-2 mt-3">
              <span class="badge badge-sm badge-soft badge-primary">设计</span>
              <span class="badge badge-sm badge-soft badge-accent">前端</span>
            </div>
          </div>
        </div>
      </div>

      <div>
        <p class="text-sm text-base-content/60 mb-3">链接预览</p>
        <p class="text-sm">
          了解更多关于
          <span class="hover-card hover-card-lg inline-block">
            <a class="hover-card-trigger text-primary underline cursor-pointer">Tailwind CSS</a>
            <div class="hover-card-content">
              <p class="text-xs font-semibold mb-1">tailwindcss.com</p>
              <p class="text-xs text-base-content/60">
                一个功能优先的 CSS 框架，用于快速构建自定义用户界面。
              </p>
            </div>
          </span>
          的信息。
        </p>
      </div>

      <div>
        <p class="text-sm text-base-content/60 mb-3">操作提示</p>
        <div class="flex gap-2">
          <div class="hover-card hover-card-sm">
            <button class="btn btn-circle btn-sm btn-ghost hover-card-trigger">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15.232 5.232l3.536 3.536M9 13l6.586-6.586a2 2 0 112.828 2.828L11.828 15.828a2 2 0 01-2.828 0L9 13z"
                />
              </svg>
            </button>
            <div class="hover-card-content">
              <p class="text-xs">编辑</p>
            </div>
          </div>
          <div class="hover-card hover-card-sm">
            <button class="btn btn-circle btn-sm btn-ghost btn-error hover-card-trigger">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6M9 7h6m2 0a1 1 0 00-1-1h-4a1 1 0 00-1 1H5"
                />
              </svg>
            </button>
            <div class="hover-card-content">
              <p class="text-xs">删除</p>
            </div>
          </div>
        </div>
      </div>
    </DocsSection>
  </DocsContainer>
</template>
