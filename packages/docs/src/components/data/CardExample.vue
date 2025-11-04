<script setup lang="ts">
import DocsHeader from '../zcomp/DocsHeader.vue'
import ApiReference from '../zcomp/ApiReference.vue'
import DocsContainer from '../zcomp/DocsContainer.vue'
import DocsSection from '../zcomp/DocsSection.vue'

const apiClasses = [
  // === 基础 ===
  {
    category: '基础',
    className: 'card',
    description: '卡片容器基础样式，包含圆角、边框、背景和阴影。',
    isCategoryStart: true,
  },

  // === 内部结构 ===
  {
    category: '结构',
    className: 'card-header',
    description: '卡片头部区域，支持标题与描述。',
    isCategoryStart: false,
  },
  {
    category: '结构',
    className: 'card-title',
    description: '卡片标题样式。',
    isCategoryStart: false,
  },
  {
    category: '结构',
    className: 'card-title-deco',
    description: '带渐变装饰条和延伸线的标题样式。',
    isCategoryStart: false,
  },
  {
    category: '结构',
    className: 'card-title-deco-destructive',
    description: '使用 destructive 配色的标题装饰样式。',
    isCategoryStart: false,
  },
  {
    category: '结构',
    className: 'card-description',
    description: '卡片描述文本样式。',
    isCategoryStart: false,
  },
  {
    category: '结构',
    className: 'card-body',
    description: '卡片主要内容区域。',
    isCategoryStart: false,
  },
  {
    category: '结构',
    className: 'card-footer',
    description: '卡片底部区域，常用于操作按钮或状态信息。',
    isCategoryStart: false,
  },

  // === 变体 ===
  {
    category: '交互变体',
    className: 'card-hover',
    description: '悬浮提升与位移动画。',
    isCategoryStart: false,
  },
  {
    category: '交互变体',
    className: 'card-clickable',
    description: '可点击卡片样式，带按压反馈。',
    isCategoryStart: false,
  },
  {
    category: '外观变体',
    className: 'card-borderless',
    description: '无边框卡片样式。',
    isCategoryStart: false,
  },
  {
    category: '外观变体',
    className: 'card-primary',
    description: '主色卡片，标题文字使用主色。',
    isCategoryStart: false,
  },
  {
    category: '外观变体',
    className: 'card-secondary',
    description: '次色卡片。',
    isCategoryStart: false,
  },
  {
    category: '外观变体',
    className: 'card-destructive',
    description: '危险色卡片。',
    isCategoryStart: false,
  },
  {
    category: '外观变体',
    className: 'card-accent',
    description: '强调色卡片。',
    isCategoryStart: false,
  },
  {
    category: '外观变体',
    className: 'card-muted',
    description: '弱色卡片。',
    isCategoryStart: false,
  },

  // === 尺寸 ===
  {
    category: '尺寸',
    className: 'card-compact',
    description: '紧凑型卡片，内边距较小。',
    isCategoryStart: false,
  },
  {
    category: '尺寸',
    className: 'card-lg',
    description: '大型卡片，内边距较大，标题更大。',
    isCategoryStart: false,
  },

  // === 特殊样式 ===
  {
    category: '特殊效果',
    className: 'card-glass',
    description: '玻璃态模糊背景效果。',
    isCategoryStart: false,
  },
  {
    category: '特殊效果',
    className: 'card-gradient',
    description: '渐变边框卡片。',
    isCategoryStart: false,
  },
  {
    category: '特殊效果',
    className: 'card-shadow',
    description: '中等阴影效果。',
    isCategoryStart: false,
  },
  {
    category: '特殊效果',
    className: 'card-shadow-lg',
    description: '大型阴影效果。',
    isCategoryStart: false,
  },

  // === Header 变体 ===
  {
    category: '头部变体',
    className: 'card-header-bordered',
    description: '卡片头部带底边。',
    isCategoryStart: false,
  },
  {
    category: '头部变体',
    className: 'card-header-center',
    description: '卡片头部居中布局。',
    isCategoryStart: false,
  },
  {
    category: '头部变体',
    className: 'card-header-row',
    description: '卡片头部水平排列。',
    isCategoryStart: false,
  },

  // === Footer 变体 ===
  {
    category: '底部变体',
    className: 'card-footer-bordered',
    description: '底部带边框。',
    isCategoryStart: false,
  },
  {
    category: '底部变体',
    className: 'card-footer-center',
    description: '底部内容居中。',
    isCategoryStart: false,
  },
  {
    category: '底部变体',
    className: 'card-footer-between',
    description: '底部两端对齐。',
    isCategoryStart: false,
  },

  // === 图片 ===
  {
    category: '图片',
    className: 'card-image',
    description: '卡片顶部图片样式。',
    isCategoryStart: false,
  },
  {
    category: '图片',
    className: 'card-image-sm',
    description: '小图尺寸（h-32）。',
    isCategoryStart: false,
  },
  {
    category: '图片',
    className: 'card-image-lg',
    description: '大图尺寸（h-64）。',
    isCategoryStart: false,
  },

  // === 网格 ===
  {
    category: '网格布局',
    className: 'card-grid',
    description: '卡片网格布局。',
    isCategoryStart: false,
  },
  {
    category: '网格布局',
    className: 'card-grid-compact',
    description: '网格紧凑间距。',
    isCategoryStart: false,
  },
  {
    category: '网格布局',
    className: 'card-grid-relaxed',
    description: '网格宽松间距。',
    isCategoryStart: false,
  },
]
</script>

<template>
  <DocsContainer>
    <DocsHeader
      title="Card 卡片"
      description="用于承载信息或操作的内容容器，支持多种结构、尺寸和视觉变体。"
    />

    <ApiReference :data="apiClasses" />

    <DocsSection title="基础用法">
      <div class="card-grid">
        <div class="card">
          <div class="card-header">
            <h3 class="card-title">默认卡片</h3>
            <p class="card-description">最基础的卡片样式。</p>
          </div>
          <div class="card-body">这是卡片内容。</div>
          <div class="card-footer">
            <button class="btn btn-sm btn-primary">操作</button>
          </div>
          <p class="text-xs text-muted-foreground mt-2 px-6">使用类：<code>card</code></p>
        </div>

        <div class="card card-hover">
          <div class="card-header">
            <h3 class="card-title">悬浮卡片</h3>
          </div>
          <div class="card-body">悬浮时带阴影与轻微上移。</div>
          <p class="text-xs text-muted-foreground mt-2 px-6">
            使用类：<code>card card-hover</code>
          </p>
        </div>

        <div class="card card-clickable">
          <div class="card-header">
            <h3 class="card-title">可点击卡片</h3>
          </div>
          <div class="card-body">点击时有缩放反馈。</div>
          <p class="text-xs text-muted-foreground mt-2 px-6">
            使用类：<code>card card-clickable</code>
          </p>
        </div>
      </div>
    </DocsSection>

    <DocsSection title="颜色变体">
      <div class="card-grid">
        <div class="card card-primary">
          <div class="card-header"><h3 class="card-title">Primary</h3></div>
          <div class="card-body">主色主题卡片。</div>
          <p class="text-xs text-muted-foreground mt-2 px-6">
            使用类：<code>card card-primary</code>
          </p>
        </div>

        <div class="card card-secondary">
          <div class="card-header"><h3 class="card-title">Secondary</h3></div>
          <div class="card-body">次色主题卡片。</div>
          <p class="text-xs text-muted-foreground mt-2 px-6">
            使用类：<code>card card-secondary</code>
          </p>
        </div>

        <div class="card card-destructive">
          <div class="card-header"><h3 class="card-title">Destructive</h3></div>
          <div class="card-body">危险主题卡片。</div>
          <p class="text-xs text-muted-foreground mt-2 px-6">
            使用类：<code>card card-destructive</code>
          </p>
        </div>

        <div class="card card-accent">
          <div class="card-header"><h3 class="card-title">Accent</h3></div>
          <div class="card-body">强调主题卡片。</div>
          <p class="text-xs text-muted-foreground mt-2 px-6">
            使用类：<code>card card-accent</code>
          </p>
        </div>

        <div class="card card-muted">
          <div class="card-header"><h3 class="card-title">Muted</h3></div>
          <div class="card-body">弱化主题卡片。</div>
          <p class="text-xs text-muted-foreground mt-2 px-6">
            使用类：<code>card card-muted</code>
          </p>
        </div>
      </div>
    </DocsSection>

    <DocsSection title="特殊样式与尺寸">
      <div class="card-grid">
        <div class="card card-compact">
          <div class="card-header"><h3 class="card-title">紧凑卡片</h3></div>
          <div class="card-body">适合内容密集场景。</div>
          <p class="text-xs text-muted-foreground mt-2 px-6">
            使用类：<code>card card-compact</code>
          </p>
        </div>

        <div class="card card-lg">
          <div class="card-header"><h3 class="card-title">大卡片</h3></div>
          <div class="card-body">适合展示丰富内容。</div>
          <p class="text-xs text-muted-foreground mt-2 px-6">使用类：<code>card card-lg</code></p>
        </div>

        <div class="card card-glass">
          <div class="card-header"><h3 class="card-title">玻璃态卡片</h3></div>
          <div class="card-body">背景模糊效果。</div>
          <p class="text-xs text-muted-foreground mt-2 px-6">
            使用类：<code>card card-glass</code>
          </p>
        </div>

        <div class="card card-gradient">
          <div class="card-header"><h3 class="card-title">渐变边框</h3></div>
          <div class="card-body">渐变边框视觉强调。</div>
          <p class="text-xs text-muted-foreground mt-2 px-6">
            使用类：<code>card card-gradient</code>
          </p>
        </div>

        <div class="card card-shadow-lg">
          <div class="card-header"><h3 class="card-title">大阴影</h3></div>
          <div class="card-body">提升层次感。</div>
          <p class="text-xs text-muted-foreground mt-2 px-6">
            使用类：<code>card card-shadow-lg</code>
          </p>
        </div>
      </div>
    </DocsSection>

    <DocsSection title="卡片图片与网格">
      <div class="card-grid p-6 border">
        <div class="card">
          <img src="https://picsum.photos/400/200" class="card-image-sm" />
          <div class="card-header"><h3 class="card-title">图片卡片</h3></div>
          <p class="text-xs text-muted-foreground mt-2 px-6">
            使用类：<code>card card-image-sm</code>
          </p>
        </div>
        <div class="card">
          <img src="https://picsum.photos/400/200" class="card-image" />
          <div class="card-header"><h3 class="card-title">图片卡片</h3></div>
          <p class="text-xs text-muted-foreground mt-2 px-6">
            使用类：<code>card card-image</code>
          </p>
        </div>

        <div class="card">
          <img src="https://picsum.photos/400/300" class="card-image-lg" />
          <div class="card-header"><h3 class="card-title">大图卡片</h3></div>
          <p class="text-xs text-muted-foreground mt-2 px-6">
            使用类：<code>card card-image-lg</code>
          </p>
        </div>

        <div class="card card-hover">
          <div class="card-header"><h3 class="card-title">网格卡片</h3></div>
          <div class="card-body">在 card-grid 中排列。</div>
          <p class="text-xs text-muted-foreground mt-2 px-6">
            使用类：<code>card card-hover card-grid</code>
          </p>
        </div>
      </div>
    </DocsSection>
  </DocsContainer>
</template>
