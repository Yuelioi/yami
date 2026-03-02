<script setup lang="ts">
import DocsHeader from '@/components/zcomp/DocsHeader.vue'
import DocsSection from '@/components/zcomp/DocsSection.vue'
import ApiReference from '@/components/zcomp/ApiReference.vue'
import DocsContainer from '@/components/zcomp/DocsContainer.vue'

const apiClasses = [
  {
    category: '基础',
    className: 'badge',
    description: '徽章容器',
    isCategoryStart: true,
  },
  {
    category: '颜色',
    className: 'badge-primary',
    description: '主色',
    isCategoryStart: true,
  },
  {
    category: '颜色',
    className: 'badge-secondary',
    description: '次色',
    isCategoryStart: false,
  },
  {
    category: '颜色',
    className: 'badge-accent',
    description: '强调色',
    isCategoryStart: false,
  },
  {
    category: '颜色',
    className: 'badge-neutral',
    description: '中性色',
    isCategoryStart: false,
  },
  {
    category: '颜色',
    className: 'badge-info',
    description: '信息色',
    isCategoryStart: false,
  },
  {
    category: '颜色',
    className: 'badge-success',
    description: '成功色',
    isCategoryStart: false,
  },
  {
    category: '颜色',
    className: 'badge-warning',
    description: '警告色',
    isCategoryStart: false,
  },
  {
    category: '颜色',
    className: 'badge-error',
    description: '错误色',
    isCategoryStart: false,
  },
  {
    category: '样式',
    className: 'badge-soft',
    description: '淡色背景',
    isCategoryStart: true,
  },
  {
    category: '样式',
    className: 'badge-outline',
    description: '描边样式',
    isCategoryStart: false,
  },
  {
    category: '样式',
    className: 'badge-ghost',
    description: '无背景无边框',
    isCategoryStart: false,
  },
  {
    category: '尺寸',
    className: 'badge-xs',
    description: '超小',
    isCategoryStart: true,
  },
  {
    category: '尺寸',
    className: 'badge-sm',
    description: '小',
    isCategoryStart: false,
  },
  {
    category: '尺寸',
    className: 'badge-md',
    description: '中（默认）',
    isCategoryStart: false,
  },
  {
    category: '尺寸',
    className: 'badge-lg',
    description: '大',
    isCategoryStart: false,
  },
  {
    category: '尺寸',
    className: 'badge-xl',
    description: '特大',
    isCategoryStart: false,
  },
  {
    category: '形状',
    className: 'badge-pill',
    description: '胶囊形（完全圆角）',
    isCategoryStart: true,
  },
  {
    category: '形状',
    className: 'badge-square',
    description: '方形（等宽等高）',
    isCategoryStart: false,
  },
  {
    category: '形状',
    className: 'badge-dot',
    description: '圆点徽标',
    isCategoryStart: false,
  },
]

const colors = [
  'primary',
  'secondary',
  'accent',
  'neutral',
  'info',
  'success',
  'warning',
  'error',
] as const
</script>

<template>
  <DocsContainer>
    <DocsHeader title="Badge" description="徽章用于展示状态、标签、计数或分类信息。" />

    <ApiReference :data="apiClasses" />

    <!-- 颜色 -->
    <DocsSection title="颜色">
      <div class="flex flex-wrap gap-2">
        <span class="badge">中性</span>
        <span v-for="c in colors" :key="c" class="badge" :class="`badge-${c}`">
          {{
            {
              primary: 'Primary',
              secondary: 'Secondary',
              accent: 'Accent',
              neutral: 'Neutral',
              info: 'Info',
              success: 'Success',
              warning: 'Warning',
              error: 'Error',
            }[c]
          }}
        </span>
      </div>
    </DocsSection>

    <!-- 样式 -->
    <DocsSection title="样式">
      <div>
        <p class="text-sm text-base-content/60 mb-3">实色（默认）</p>
        <div class="flex flex-wrap gap-2">
          <span
            v-for="c in ['primary', 'success', 'warning', 'error']"
            :key="c"
            class="badge"
            :class="`badge-${c}`"
          >
            {{ c }}
          </span>
        </div>
      </div>
      <div>
        <p class="text-sm text-base-content/60 mb-3">柔和（soft）</p>
        <div class="flex flex-wrap gap-2">
          <span
            v-for="c in ['primary', 'success', 'warning', 'error']"
            :key="c"
            class="badge badge-soft"
            :class="`badge-${c}`"
          >
            {{ c }}
          </span>
        </div>
      </div>
      <div>
        <p class="text-sm text-base-content/60 mb-3">描边（outline）</p>
        <div class="flex flex-wrap gap-2">
          <span
            v-for="c in ['primary', 'success', 'warning', 'error']"
            :key="c"
            class="badge badge-outline"
            :class="`badge-${c}`"
          >
            {{ c }}
          </span>
        </div>
      </div>
      <div>
        <p class="text-sm text-base-content/60 mb-3">幽灵（ghost）</p>
        <div class="flex flex-wrap gap-2">
          <span class="badge badge-ghost">ghost</span>
          <span class="badge badge-ghost">标签</span>
          <span class="badge badge-ghost">分类</span>
        </div>
      </div>
    </DocsSection>

    <!-- 尺寸 -->
    <DocsSection title="尺寸">
      <div class="flex flex-wrap items-center gap-3">
        <span class="badge badge-primary badge-xs">xs</span>
        <span class="badge badge-primary badge-sm">sm</span>
        <span class="badge badge-primary badge-md">md</span>
        <span class="badge badge-primary badge-lg">lg</span>
        <span class="badge badge-primary badge-xl">xl</span>
      </div>
    </DocsSection>

    <!-- 形状 -->
    <DocsSection title="形状">
      <div>
        <p class="text-sm text-base-content/60 mb-3">胶囊（pill）</p>
        <div class="flex flex-wrap gap-2">
          <span class="badge badge-pill badge-primary">Primary</span>
          <span class="badge badge-pill badge-soft badge-success">Success</span>
          <span class="badge badge-pill badge-outline badge-warning">Warning</span>
        </div>
      </div>
      <div>
        <p class="text-sm text-base-content/60 mb-3">方形（square）</p>
        <div class="flex flex-wrap items-center gap-2">
          <span class="badge badge-square badge-primary badge-xs">1</span>
          <span class="badge badge-square badge-secondary badge-sm">2</span>
          <span class="badge badge-square badge-accent badge-md">3</span>
          <span class="badge badge-square badge-success badge-lg">4</span>
        </div>
      </div>
      <div>
        <p class="text-sm text-base-content/60 mb-3">圆点（dot）</p>
        <div class="flex flex-wrap items-center gap-3">
          <span
            v-for="c in ['primary', 'success', 'warning', 'error']"
            :key="c"
            class="badge badge-dot"
            :class="`badge-${c}`"
          />
        </div>
      </div>
    </DocsSection>

    <!-- 用法 -->
    <DocsSection title="用法">
      <div>
        <p class="text-sm text-base-content/60 mb-3">技术标签</p>
        <div class="flex flex-wrap gap-2">
          <span class="badge badge-soft badge-primary badge-pill">Vue</span>
          <span class="badge badge-soft badge-secondary badge-pill">React</span>
          <span class="badge badge-soft badge-accent badge-pill">TypeScript</span>
          <span class="badge badge-soft badge-neutral badge-pill">Tailwind</span>
        </div>
      </div>

      <div>
        <p class="text-sm text-base-content/60 mb-3">状态</p>
        <div class="flex flex-wrap gap-2">
          <span class="badge badge-soft badge-success badge-pill">
            <span class="badge badge-dot badge-success badge-sm" />
            已激活
          </span>
          <span class="badge badge-soft badge-warning badge-pill">
            <span class="badge badge-dot badge-warning badge-sm" />
            待处理
          </span>
          <span class="badge badge-soft badge-error badge-pill">
            <span class="badge badge-dot badge-error badge-sm" />
            已禁用
          </span>
          <span class="badge badge-soft badge-neutral badge-pill">
            <span class="badge badge-dot badge-neutral badge-sm" />
            已归档
          </span>
        </div>
      </div>

      <div>
        <p class="text-sm text-base-content/60 mb-3">按钮内计数</p>
        <div class="flex flex-wrap gap-3">
          <button class="btn btn-sm">
            消息
            <span class="badge badge-sm badge-primary">3</span>
          </button>
          <button class="btn btn-sm btn-outline btn-error">
            通知
            <span class="badge badge-sm badge-error">12</span>
          </button>
          <button class="btn btn-sm btn-soft btn-success">
            任务
            <span class="badge badge-sm badge-soft badge-success">5</span>
          </button>
        </div>
      </div>

      <div>
        <p class="text-sm text-base-content/60 mb-3">角标（叠加定位）</p>
        <div class="flex flex-wrap gap-6">
          <div class="relative inline-flex">
            <button class="btn btn-sm">收件箱</button>
            <span class="badge badge-xs badge-error badge-pill absolute -top-1.5 -right-1.5"
              >9</span
            >
          </div>
          <div class="relative inline-flex">
            <button class="btn btn-circle btn-sm btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
            </button>
            <span class="badge badge-dot badge-error absolute -top-0.5 -right-0.5" />
          </div>
        </div>
      </div>

      <div>
        <p class="text-sm text-base-content/60 mb-3">文章分类</p>
        <div class="p-4 rounded-box border border-base-200 max-w-sm">
          <div class="flex gap-2 mb-2">
            <span class="badge badge-soft badge-info badge-sm">教程</span>
            <span class="badge badge-soft badge-accent badge-sm">前端</span>
          </div>
          <p class="font-semibold text-sm">Tailwind CSS 4.0 新特性解析</p>
          <p class="text-xs text-base-content/60 mt-1">
            深入了解最新版本带来的 CSS 变量原生支持与性能优化。
          </p>
        </div>
      </div>
    </DocsSection>
  </DocsContainer>
</template>
