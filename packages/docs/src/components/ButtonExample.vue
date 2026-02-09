<script setup lang="ts">
import DocsHeader from '@/components/zcomp/DocsHeader.vue'
import DocsSection from '@/components/zcomp/DocsSection.vue'
import ApiReference from '@/components/zcomp/ApiReference.vue'
import DocsContainer from '@/components/zcomp/DocsContainer.vue'

const apiClasses = [
  {
    category: '基础',
    className: 'btn',
    description: '按钮容器',
    isCategoryStart: true,
  },
  {
    category: '基础',
    className: 'btn-active',
    description: '活跃状态',
    isCategoryStart: false,
  },
  {
    category: '颜色',
    className: 'btn-primary',
    description: '主色',
    isCategoryStart: false,
  },
  {
    category: '颜色',
    className: 'btn-secondary',
    description: '次色',
    isCategoryStart: false,
  },
  {
    category: '颜色',
    className: 'btn-accent',
    description: '强调色',
    isCategoryStart: false,
  },
  {
    category: '颜色',
    className: 'btn-neutral',
    description: '中性色',
    isCategoryStart: false,
  },
  {
    category: '颜色',
    className: 'btn-info',
    description: '信息色',
    isCategoryStart: false,
  },
  {
    category: '颜色',
    className: 'btn-success',
    description: '成功色',
    isCategoryStart: false,
  },
  {
    category: '颜色',
    className: 'btn-warning',
    description: '警告色',
    isCategoryStart: false,
  },
  {
    category: '颜色',
    className: 'btn-error',
    description: '错误色',
    isCategoryStart: false,
  },
  {
    category: '样式',
    className: 'btn-soft',
    description: '柔和样式',
    isCategoryStart: false,
  },
  {
    category: '样式',
    className: 'btn-outline',
    description: '描边样式',
    isCategoryStart: false,
  },
  {
    category: '样式',
    className: 'btn-text',
    description: '文本样式',
    isCategoryStart: false,
  },
  {
    category: '样式',
    className: 'btn-gradient',
    description: '渐变样式',
    isCategoryStart: false,
  },
  {
    category: '尺寸',
    className: 'btn-xs',
    description: '超小',
    isCategoryStart: false,
  },
  {
    category: '尺寸',
    className: 'btn-sm',
    description: '小',
    isCategoryStart: false,
  },
  {
    category: '尺寸',
    className: 'btn-md',
    description: '中',
    isCategoryStart: false,
  },
  {
    category: '尺寸',
    className: 'btn-lg',
    description: '大',
    isCategoryStart: false,
  },
  {
    category: '尺寸',
    className: 'btn-xl',
    description: '超大',
    isCategoryStart: false,
  },
  {
    category: '形状',
    className: 'btn-square',
    description: '正方形',
    isCategoryStart: false,
  },
  {
    category: '形状',
    className: 'btn-circle',
    description: '圆形',
    isCategoryStart: false,
  },
  {
    category: '宽度',
    className: 'btn-wide',
    description: '宽按钮，最大64',
    isCategoryStart: false,
  },
  {
    category: '宽度',
    className: 'btn-block',
    description: '全宽按钮',
    isCategoryStart: false,
  },
]
</script>

<template>
  <DocsContainer>
    <DocsHeader title="Button" description="可点击的交互元素，支持多种颜色、样式和尺寸。" />

    <ApiReference :data="apiClasses"></ApiReference>

    <DocsSection title="颜色">
      <div class="flex flex-wrap gap-2">
        <button class="btn">中性</button>
        <button class="btn btn-primary">Primary</button>
        <button class="btn btn-secondary">Secondary</button>
        <button class="btn btn-accent">Accent</button>
        <button class="btn btn-info">Info</button>
        <button class="btn btn-success">Success</button>
        <button class="btn btn-warning">Warning</button>
        <button class="btn btn-error">Error</button>
      </div>
    </DocsSection>

    <DocsSection title="样式">
      <div class="space-y-4">
        <div>
          <p class="text-sm text-base-content/60 mb-3">实心（默认）</p>
          <div class="flex flex-wrap gap-2">
            <button class="btn btn-primary">Primary</button>
            <button class="btn btn-success">Success</button>
            <button class="btn btn-error">Error</button>
          </div>
        </div>
        <div>
          <p class="text-sm text-base-content/60 mb-3">柔和</p>
          <div class="flex flex-wrap gap-2">
            <button class="btn btn-soft btn-primary">Primary</button>
            <button class="btn btn-soft btn-success">Success</button>
            <button class="btn btn-soft btn-error">Error</button>
          </div>
        </div>
        <div>
          <p class="text-sm text-base-content/60 mb-3">描边</p>
          <div class="flex flex-wrap gap-2">
            <button class="btn btn-outline btn-primary">Primary</button>
            <button class="btn btn-outline btn-success">Success</button>
            <button class="btn btn-outline btn-error">Error</button>
          </div>
        </div>
        <div>
          <p class="text-sm text-base-content/60 mb-3">虚线</p>
          <div class="flex flex-wrap gap-2">
            <button class="btn btn-outline border-dashed btn-primary">Primary</button>
            <button class="btn btn-outline border-dashed btn-secondary">Secondary</button>
            <button class="btn btn-outline border-dashed btn-accent">Accent</button>
            <button class="btn btn-outline border-dashed btn-info">Info</button>
            <button class="btn btn-outline border-dashed btn-success">Success</button>
            <button class="btn btn-outline border-dashed btn-warning">Warning</button>
            <button class="btn btn-outline border-dashed btn-error">Error</button>
          </div>
        </div>
        <div>
          <p class="text-sm text-base-content/60 mb-3">虚线浅色背景</p>
          <div class="flex flex-wrap gap-2">
            <button
              class="btn btn-outline border-dashed bg-primary/10 hover:bg-primary/30 btn-primary"
            >
              Primary
            </button>
            <button
              class="btn btn-outline border-dashed bg-secondary/10 hover:bg-secondary/30 btn-secondary"
            >
              Secondary
            </button>
            <button
              class="btn btn-outline border-dashed bg-accent/10 hover:bg-accent/30 btn-accent"
            >
              Accent
            </button>
            <button class="btn btn-outline border-dashed bg-info/10 hover:bg-info/30 btn-info">
              Info
            </button>
            <button
              class="btn btn-outline border-dashed bg-success/10 hover:bg-success/30 btn-success"
            >
              Success
            </button>
            <button
              class="btn btn-outline border-dashed bg-warning/10 hover:bg-warning/30 btn-warning"
            >
              Warning
            </button>
            <button class="btn btn-outline border-dashed bg-error/10 hover:bg-error/30 btn-error">
              Error
            </button>
          </div>
        </div>

        <div>
          <p class="text-sm text-base-content/60 mb-3">文本</p>
          <div class="flex flex-wrap gap-2">
            <button class="btn btn-text btn-primary">Primary</button>
            <button class="btn btn-text btn-success">Success</button>
            <button class="btn btn-text btn-error">Error</button>
          </div>
        </div>
        <div>
          <p class="text-sm text-base-content/60 mb-3">渐变</p>
          <div class="flex flex-wrap gap-2">
            <button class="btn btn-gradient btn-primary">Primary</button>
            <button class="btn btn-gradient btn-success">Success</button>
            <button class="btn btn-gradient btn-error">Error</button>
          </div>
        </div>
      </div>
    </DocsSection>

    <DocsSection title="尺寸">
      <div class="flex flex-wrap gap-2 items-center">
        <button class="btn btn-xs btn-primary">xs</button>
        <button class="btn btn-sm btn-primary">sm</button>
        <button class="btn btn-md btn-primary">md</button>
        <button class="btn btn-lg btn-primary">lg</button>
        <button class="btn btn-xl btn-primary">xl</button>
      </div>
    </DocsSection>

    <DocsSection title="形状">
      <div class="flex flex-wrap gap-4 items-center">
        <button class="btn btn-square btn-primary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            class="w-4 h-4 stroke-current"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>
        <button class="btn btn-circle btn-primary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            class="w-4 h-4 stroke-current"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>
      </div>
    </DocsSection>

    <DocsSection title="宽度">
      <div class="space-y-3">
        <button class="btn btn-wide btn-primary">Wide Button</button>
        <button class="btn btn-block btn-primary">Block Button</button>
      </div>
    </DocsSection>

    <DocsSection title="状态">
      <div class="space-y-4">
        <div>
          <p class="text-sm text-base-content/60 mb-3">活跃</p>
          <button class="btn btn-primary btn-active">Active</button>
        </div>
        <div>
          <p class="text-sm text-base-content/60 mb-3">禁用</p>
          <button class="btn btn-primary" disabled>Disabled</button>
        </div>
      </div>
    </DocsSection>

    <DocsSection title="带图标">
      <div class="flex flex-wrap gap-2">
        <button class="btn btn-primary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            class="w-4 h-4 stroke-current"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 4v16m8-8H4"
            ></path>
          </svg>
          新增
        </button>
        <button class="btn btn-secondary">
          编辑
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            class="w-4 h-4 stroke-current"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
            ></path>
          </svg>
        </button>
        <button class="btn btn-error">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            class="w-4 h-4 stroke-current"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>
      </div>
    </DocsSection>

    <DocsSection title="加载状态">
      <div class="flex flex-wrap gap-2">
        <button class="btn btn-primary" disabled>
          <span class="loading loading-spinner loading-sm"></span>
          加载中...
        </button>
        <button class="btn btn-success" disabled>
          <span class="loading loading-spinner loading-sm"></span>
          处理中...
        </button>
      </div>
    </DocsSection>
  </DocsContainer>
</template>
