<script setup lang="ts">
import DocsHeader from '@/components/zcomp/DocsHeader.vue'
import DocsSection from '@/components/zcomp/DocsSection.vue'
import ApiReference from '@/components/zcomp/ApiReference.vue'
import DocsContainer from '@/components/zcomp/DocsContainer.vue'

const apiClasses = [
  {
    category: '基础',
    className: 'tooltip',
    description: '工具提示容器，配合 data-tip 属性使用',
    isCategoryStart: true,
  },
  {
    category: '方向',
    className: 'tooltip-top',
    description: '向上（默认）',
    isCategoryStart: true,
  },
  { category: '方向', className: 'tooltip-bottom', description: '向下', isCategoryStart: false },
  { category: '方向', className: 'tooltip-left', description: '向左', isCategoryStart: false },
  { category: '方向', className: 'tooltip-right', description: '向右', isCategoryStart: false },
  { category: '颜色', className: 'tooltip-primary', description: '主色', isCategoryStart: true },
  { category: '颜色', className: 'tooltip-secondary', description: '次色', isCategoryStart: false },
  { category: '颜色', className: 'tooltip-accent', description: '强调色', isCategoryStart: false },
  { category: '颜色', className: 'tooltip-info', description: '信息色', isCategoryStart: false },
  { category: '颜色', className: 'tooltip-success', description: '成功色', isCategoryStart: false },
  { category: '颜色', className: 'tooltip-warning', description: '警告色', isCategoryStart: false },
  { category: '颜色', className: 'tooltip-error', description: '错误色', isCategoryStart: false },
  {
    category: '样式',
    className: 'tooltip-open',
    description: '常显，不需要 hover',
    isCategoryStart: true,
  },
  {
    category: '样式',
    className: 'tooltip-no-arrow',
    description: '隐藏箭头',
    isCategoryStart: false,
  },
  {
    category: 'data 属性',
    className: 'data-tip',
    description: '提示文字内容',
    isCategoryStart: true,
  },
]
</script>

<template>
  <DocsContainer>
    <DocsHeader
      title="Tooltip"
      description="工具提示组件，鼠标悬停时显示附加信息。纯 CSS 实现，无需 JS，通过 data-tip 属性定义内容。"
    />

    <ApiReference :data="apiClasses" />

    <!-- 基础 -->
    <DocsSection title="基础">
      <div class="flex flex-wrap gap-8 items-center py-4">
        <div class="tooltip" data-tip="这是一段提示文字">
          <button class="btn">悬停查看提示</button>
        </div>
        <div class="tooltip" data-tip="支持较长的提示文字，会自动换行处理，最大宽度 16rem">
          <button class="btn btn-outline">长文字提示</button>
        </div>
        <div class="tooltip" data-tip="提示文字">
          <span class="underline decoration-dotted cursor-help text-sm">文字元素</span>
        </div>
      </div>
    </DocsSection>

    <!-- 方向 -->
    <DocsSection title="方向">
      <div class="flex flex-wrap gap-8 items-center justify-center py-8">
        <div class="tooltip tooltip-top" data-tip="向上（默认）">
          <button class="btn btn-sm w-28">Top</button>
        </div>
        <div class="tooltip tooltip-bottom" data-tip="向下">
          <button class="btn btn-sm w-28">Bottom</button>
        </div>
        <div class="tooltip tooltip-left" data-tip="向左">
          <button class="btn btn-sm w-28">Left</button>
        </div>
        <div class="tooltip tooltip-right" data-tip="向右">
          <button class="btn btn-sm w-28">Right</button>
        </div>
      </div>
    </DocsSection>

    <!-- 颜色 -->
    <DocsSection title="颜色">
      <div class="flex flex-wrap gap-6 items-center py-4">
        <div class="tooltip tooltip-primary" data-tip="Primary">
          <button class="btn btn-primary btn-sm">Primary</button>
        </div>
        <div class="tooltip tooltip-secondary" data-tip="Secondary">
          <button class="btn btn-secondary btn-sm">Secondary</button>
        </div>
        <div class="tooltip tooltip-accent" data-tip="Accent">
          <button class="btn btn-accent btn-sm">Accent</button>
        </div>
        <div class="tooltip tooltip-info" data-tip="Info">
          <button class="btn btn-info btn-sm">Info</button>
        </div>
        <div class="tooltip tooltip-success" data-tip="Success">
          <button class="btn btn-success btn-sm">Success</button>
        </div>
        <div class="tooltip tooltip-warning" data-tip="Warning">
          <button class="btn btn-warning btn-sm">Warning</button>
        </div>
        <div class="tooltip tooltip-error" data-tip="Error">
          <button class="btn btn-error btn-sm">Error</button>
        </div>
      </div>
    </DocsSection>

    <!-- 常显 -->
    <DocsSection title="常显">
      <div class="flex flex-wrap gap-12 items-center justify-center py-8">
        <div class="tooltip tooltip-open tooltip-top" data-tip="始终显示（Top）">
          <button class="btn btn-sm">Top</button>
        </div>
        <div class="tooltip tooltip-open tooltip-bottom" data-tip="始终显示（Bottom）">
          <button class="btn btn-sm">Bottom</button>
        </div>
        <div class="tooltip tooltip-open tooltip-left" data-tip="始终显示（Left）">
          <button class="btn btn-sm">Left</button>
        </div>
        <div class="tooltip tooltip-open tooltip-right" data-tip="始终显示（Right）">
          <button class="btn btn-sm">Right</button>
        </div>
      </div>
    </DocsSection>

    <!-- 无箭头 -->
    <DocsSection title="无箭头">
      <div class="flex flex-wrap gap-6 items-center py-4">
        <div class="tooltip tooltip-no-arrow" data-tip="没有小箭头">
          <button class="btn btn-sm">无箭头</button>
        </div>
        <div class="tooltip tooltip-no-arrow tooltip-primary" data-tip="Primary 无箭头">
          <button class="btn btn-primary btn-sm">Primary 无箭头</button>
        </div>
        <div class="tooltip tooltip-no-arrow tooltip-bottom" data-tip="Bottom 无箭头">
          <button class="btn btn-sm">Bottom 无箭头</button>
        </div>
      </div>
    </DocsSection>

    <!-- 图标按钮 -->
    <DocsSection title="图标按钮">
      <div class="flex flex-wrap gap-4 items-center py-2">
        <div class="tooltip" data-tip="复制">
          <button class="btn btn-ghost btn-square btn-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="size-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            >
              <rect x="9" y="9" width="13" height="13" rx="2" />
              <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
            </svg>
          </button>
        </div>
        <div class="tooltip" data-tip="编辑">
          <button class="btn btn-ghost btn-square btn-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="size-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            >
              <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
              <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
            </svg>
          </button>
        </div>
        <div class="tooltip tooltip-error" data-tip="删除">
          <button class="btn btn-ghost btn-square btn-sm text-error">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="size-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            >
              <polyline points="3 6 5 6 21 6" />
              <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" />
              <path d="M10 11v6M14 11v6" />
              <path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2" />
            </svg>
          </button>
        </div>
        <div class="tooltip tooltip-info" data-tip="帮助说明">
          <button class="btn btn-ghost btn-circle btn-sm text-info">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="size-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
              <line x1="12" y1="17" x2="12.01" y2="17" />
            </svg>
          </button>
        </div>
        <div class="tooltip" data-tip="设置">
          <button class="btn btn-ghost btn-square btn-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="size-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            >
              <circle cx="12" cy="12" r="3" />
              <path
                d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"
              />
            </svg>
          </button>
        </div>
      </div>
    </DocsSection>

    <!-- 表单提示 -->
    <DocsSection title="表单提示">
      <div class="space-y-4 max-w-sm">
        <div>
          <div class="flex items-center gap-1.5 mb-1.5">
            <label class="label-text">用户名</label>
            <div
              class="tooltip tooltip-right tooltip-info"
              data-tip="3-20个字符，支持字母、数字和下划线"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="size-3.5 text-base-content/40 cursor-help"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                <line x1="12" y1="17" x2="12.01" y2="17" />
              </svg>
            </div>
          </div>
          <input type="text" placeholder="输入用户名" class="input input-bordered w-full" />
        </div>
        <div>
          <div class="flex items-center gap-1.5 mb-1.5">
            <label class="label-text">密码</label>
            <div
              class="tooltip tooltip-right tooltip-warning"
              data-tip="至少8位，包含大小写字母及特殊字符"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="size-3.5 text-base-content/40 cursor-help"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                <line x1="12" y1="17" x2="12.01" y2="17" />
              </svg>
            </div>
          </div>
          <input type="password" placeholder="输入密码" class="input input-bordered w-full" />
        </div>
      </div>
    </DocsSection>

    <!-- 禁用状态提示 -->
    <DocsSection title="禁用状态提示">
      <div class="flex flex-wrap gap-6 items-center py-2">
        <div class="tooltip tooltip-error" data-tip="权限不足，无法执行此操作">
          <!-- 包裹 span 因为 disabled 元素不触发鼠标事件 -->
          <span>
            <button class="btn btn-primary btn-sm" disabled>发布</button>
          </span>
        </div>
        <div class="tooltip tooltip-warning" data-tip="请先完成上一步">
          <span>
            <button class="btn btn-sm" disabled>下一步</button>
          </span>
        </div>
      </div>
      <p class="text-xs text-base-content/50 mt-2">
        提示：disabled 按钮不触发鼠标事件，需在外层包裹
        <code class="bg-base-200 px-1 rounded">&lt;span&gt;</code>
      </p>
    </DocsSection>
  </DocsContainer>
</template>
