<template>
  <DocsContainer>
    <!-- 页面标题 -->
    <DocsHeader
      title="手风琴组件"
      description="特殊的折叠的容器组件，详情请看 collapse 组件文档。"
    />

    <ApiReference :data="apiClasses"></ApiReference>
    <section>
      <div class="mb-6">
        <h2 class="text-2xl font-semibold mb-2 flex items-center gap-2">
          <span class="text-primary">🎵</span>
          手风琴模式
        </h2>
        <p class="text-muted-foreground">
          使用
          <code class="px-2 py-0.5 bg-muted rounded text-sm font-mono">radio</code>
          实现手风琴效果，同时只能展开一个面板
        </p>
      </div>

      <div class="bg-card rounded-xl border border-border shadow-sm overflow-hidden">
        <div class="collapse-group collapse-group-compact">
          <div class="collapse collapse-plus collapse-secondary">
            <input type="radio" name="accordion" id="acc1" />
            <label for="acc1" class="collapse-title font-semibold"> 第一步：安装依赖 </label>
            <div class="collapse-content">
              <p class="text-sm text-muted-foreground pt-2">
                首先，请确保您的项目已经安装了 Tailwind CSS v4+ 和相关的 PostCSS 插件。使用 npm 或
                yarn 进行安装。
              </p>
              <pre class="mt-3 p-3 bg-muted rounded text-xs font-mono overflow-x-auto">
npm install tailwindcss@latest postcss autoprefixer</pre
              >
            </div>
          </div>

          <div class="collapse collapse-plus collapse-secondary border-t border-border">
            <input type="radio" name="accordion" id="acc2" />
            <label for="acc2" class="collapse-title font-semibold"> 第二步：配置主题色 </label>
            <div class="collapse-content">
              <p class="text-sm text-muted-foreground pt-2">
                在您的 CSS 文件中定义好颜色变量，包括
                <code class="px-1.5 py-0.5 bg-background rounded text-xs">--primary</code>、<code
                  class="px-1.5 py-0.5 bg-background rounded text-xs"
                  >--secondary</code
                >
                等，以配合组件的配色方案。
              </p>
            </div>
          </div>

          <div class="collapse collapse-plus collapse-secondary border-t border-border">
            <input type="radio" name="accordion" id="acc3" />
            <label for="acc3" class="collapse-title font-semibold"> 第三步：开始使用 </label>
            <div class="collapse-content">
              <p class="text-sm text-muted-foreground pt-2">
                直接在 HTML 元素上应用
                <code class="px-1.5 py-0.5 bg-background rounded text-xs">collapse</code>
                及其变体类名即可。支持多种交互方式和丰富的样式组合。
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-4 p-4 bg-accent/10 border border-accent/20 rounded-lg">
        <p class="text-sm">
          <strong class="text-secondary">💡 提示：</strong>
          手风琴模式需要给所有 radio input 设置相同的
          <code class="px-1.5 py-0.5 bg-muted rounded text-xs font-mono">name</code>
          属性，并且使用
          <code class="px-1.5 py-0.5 bg-muted rounded text-xs font-mono"
            >&lt;label for="..."&gt;</code
          >
          关联 input 的 id。
        </p>
      </div>
    </section>
  </DocsContainer>
</template>

<script setup lang="ts">
import DocsHeader from '../zcomp/DocsHeader.vue'
import ApiReference from '../zcomp/ApiReference.vue'
import DocsContainer from '../zcomp/DocsContainer.vue'
const apiClasses = [
  // 基础
  {
    category: '基础',
    className: 'collapse',
    description: 'Collapse 容器基础样式，支持 checkbox/radio/tabindex/details 控制展开。',
    isCategoryStart: true,
  },
  {
    category: '标题与内容',
    className: 'collapse-title',
    description: '折叠标题层样式，支持 CSS 变量控制颜色、背景。',
    isCategoryStart: false,
  },
  {
    category: '标题与内容',
    className: 'collapse-content',
    description: '折叠内容层样式，支持 CSS 变量控制颜色、背景。',
    isCategoryStart: false,
  },

  // 图标变体
  {
    category: '图标变体',
    className: 'collapse-arrow',
    description: '带箭头图标的展开折叠效果。',
    isCategoryStart: false,
  },
  {
    category: '图标变体',
    className: 'collapse-plus',
    description: '加号/减号图标变体。',
    isCategoryStart: false,
  },

  // 状态控制
  {
    category: '状态控制',
    className: 'collapse-open',
    description: '强制展开状态。',
    isCategoryStart: false,
  },
  {
    category: '状态控制',
    className: 'collapse-close',
    description: '强制关闭状态。',
    isCategoryStart: false,
  },

  // 配色方案
  {
    category: '配色方案',
    className: 'collapse-primary',
    description: '主色折叠组件。',
    isCategoryStart: false,
  },
  {
    category: '配色方案',
    className: 'collapse-secondary',
    description: '次色折叠组件。',
    isCategoryStart: false,
  },
  {
    category: '配色方案',
    className: 'collapse-accent',
    description: '强调色折叠组件。',
    isCategoryStart: false,
  },
  {
    category: '配色方案',
    className: 'collapse-destructive',
    description: '危险色折叠组件。',
    isCategoryStart: false,
  },
  {
    category: '配色方案',
    className: 'collapse-muted',
    description: '弱色折叠组件。',
    isCategoryStart: false,
  },

  // 边框与阴影
  {
    category: '边框与阴影',
    className: 'collapse-bordered',
    description: '带边框样式。',
    isCategoryStart: false,
  },
  {
    category: '边框与阴影',
    className: 'collapse-shadow',
    description: '阴影效果，悬停有放大阴影。',
    isCategoryStart: false,
  },

  // 尺寸变体
  {
    category: '尺寸变体',
    className: 'collapse-sm',
    description: '小尺寸折叠组件。',
    isCategoryStart: false,
  },
  {
    category: '尺寸变体',
    className: 'collapse-lg',
    description: '大尺寸折叠组件。',
    isCategoryStart: false,
  },

  // 手风琴组合
  {
    category: '组合样式',
    className: 'collapse-group',
    description: '手风琴组合容器。',
    isCategoryStart: false,
  },
  {
    category: '组合样式',
    className: 'collapse-group-compact',
    description: '紧凑手风琴组合。',
    isCategoryStart: false,
  },

  // 悬停与禁用
  {
    category: '交互效果',
    className: 'collapse-hover',
    description: '标题悬停效果。',
    isCategoryStart: false,
  },
  {
    category: '禁用状态',
    className: 'collapse-disabled',
    description: '禁用状态，降低透明度并禁止交互。',
    isCategoryStart: false,
  },
]
</script>
