<script setup lang="ts">
import DocsHeader from '../zcomp/DocsHeader.vue'
import ApiReference from '../zcomp/ApiReference.vue'
import DocsContainer from '../zcomp/DocsContainer.vue'
import DocsSection from '../zcomp/DocsSection.vue'

/**
 * Badge API Reference
 * ✅ 所有 class 均在 CSS 中真实存在
 * 完全按照变量提取方式组织
 */
const apiClasses = [
  // ========================================
  // 基础
  // ========================================
  {
    category: '基础',
    className: 'badge',
    description: 'Badge 基础容器（display: inline-flex，height: var(--badge-height)）。',
    isCategoryStart: true,
  },

  // ========================================
  // 尺寸变体 - Badge Sizes
  // ========================================
  {
    category: '尺寸',
    className: 'badge-xs',
    description: '极小尺寸（height: var(--badge-xs-height) = 1.125rem，font-size: 0.625rem）。',
    isCategoryStart: true,
  },
  {
    category: '尺寸',
    className: 'badge-sm',
    description: '小尺寸（height: var(--badge-sm-height) = 1.375rem，font-size: 0.75rem）。',
  },
  {
    category: '尺寸',
    className: 'badge-lg',
    description: '大尺寸（height: var(--badge-lg-height) = 1.875rem，font-size: 0.875rem）。',
  },

  // ========================================
  // 样式变体 - Badge Variants
  // ========================================
  {
    category: '样式',
    className: 'badge-solid',
    description: '实心样式（默认）。',
    isCategoryStart: true,
  },
  {
    category: '样式',
    className: 'badge-outline',
    description: '描边样式（background: transparent）。',
  },
  {
    category: '样式',
    className: 'badge-subtle',
    description: '柔和样式（background: color-mix 10%）。',
  },
  {
    category: '样式',
    className: 'badge-ghost',
    description: '幽灵样式（background 和 border 均透明）。',
  },

  // ========================================
  // 颜色变体 - Badge Colors
  // ========================================
  {
    category: '颜色',
    className: 'badge-primary',
    description: '主要颜色（bg: var(--badge-primary-solid-bg)）。',
    isCategoryStart: true,
  },
  {
    category: '颜色',
    className: 'badge-primary-outline',
    description: '主要颜色描边版本。',
  },
  {
    category: '颜色',
    className: 'badge-primary-subtle',
    description: '主要颜色柔和版本。',
  },

  {
    category: '颜色',
    className: 'badge-secondary',
    description: '次要颜色。',
  },
  {
    category: '颜色',
    className: 'badge-secondary-outline',
    description: '次要颜色描边版本。',
  },
  {
    category: '颜色',
    className: 'badge-secondary-subtle',
    description: '次要颜色柔和版本。',
  },

  {
    category: '颜色',
    className: 'badge-accent',
    description: '强调颜色。',
  },
  {
    category: '颜色',
    className: 'badge-accent-outline',
    description: '强调颜色描边版本。',
  },
  {
    category: '颜色',
    className: 'badge-accent-subtle',
    description: '强调颜色柔和版本。',
  },

  {
    category: '颜色',
    className: 'badge-success',
    description: '成功颜色（✓）。',
  },
  {
    category: '颜色',
    className: 'badge-success-outline',
    description: '成功颜色描边版本。',
  },
  {
    category: '颜色',
    className: 'badge-success-subtle',
    description: '成功颜色柔和版本。',
  },

  {
    category: '颜色',
    className: 'badge-warning',
    description: '警告颜色（⚠️）。',
  },
  {
    category: '颜色',
    className: 'badge-warning-outline',
    description: '警告颜色描边版本。',
  },
  {
    category: '颜色',
    className: 'badge-warning-subtle',
    description: '警告颜色柔和版本。',
  },

  {
    category: '颜色',
    className: 'badge-destructive',
    description: '危险颜色（🗑️）。',
  },
  {
    category: '颜色',
    className: 'badge-destructive-outline',
    description: '危险颜色描边版本。',
  },
  {
    category: '颜色',
    className: 'badge-destructive-subtle',
    description: '危险颜色柔和版本。',
  },

  {
    category: '颜色',
    className: 'badge-info',
    description: '信息颜色（ℹ️）。',
  },
  {
    category: '颜色',
    className: 'badge-info-outline',
    description: '信息颜色描边版本。',
  },
  {
    category: '颜色',
    className: 'badge-info-subtle',
    description: '信息颜色柔和版本。',
  },

  // ========================================
  // 特殊变体 - Badge Special
  // ========================================
  {
    category: '特殊',
    className: 'badge-dismissible',
    description: '可删除 Badge（带关闭按钮）。',
    isCategoryStart: true,
  },
  {
    category: '特殊',
    className: 'badge-interactive',
    description: '可点击 Badge（cursor: pointer，有悬停效果）。',
  },
  {
    category: '特殊',
    className: 'badge-pill',
    description: '圆形 Badge（border-radius: 9999px）。',
  },
  {
    category: '特殊',
    className: 'badge-pulse',
    description: '脉冲动画 Badge。',
  },
  {
    category: '特殊',
    className: 'badge-group',
    description: 'Badge 组容器（display: flex，gap: 0.375rem）。',
  },
]
</script>

<template>
  <DocsContainer>
    <DocsHeader
      title="Badge 徽章"
      description="轻量级徽章组件。用于标记、分类、状态和计数。4 种样式 × 7 种颜色 × 4 种尺寸 = 强大的组合。"
    />

    <!-- API 参考 -->
    <ApiReference :data="apiClasses" />

    <!-- 基础用法 -->
    <DocsSection title="基础用法">
      <div class="bg-card p-6 rounded-lg flex flex-wrap gap-2">
        <span class="badge badge-primary">Primary</span>
        <span class="badge badge-secondary">Secondary</span>
        <span class="badge badge-success">Success</span>
        <span class="badge badge-warning">Warning</span>
        <span class="badge badge-destructive">Destructive</span>
        <span class="badge badge-info">Info</span>
        <span class="badge badge-accent">Accent</span>
      </div>
    </DocsSection>

    <!-- 尺寸变体 -->
    <DocsSection title="尺寸变体">
      <div class="bg-card p-6 rounded-lg space-y-4">
        <div class="flex items-center gap-2">
          <span class="badge badge-xs badge-primary">XS</span>
          <span class="text-sm text-muted-foreground">极小（height: 1.125rem）</span>
        </div>
        <div class="flex items-center gap-2">
          <span class="badge badge-sm badge-primary">SM</span>
          <span class="text-sm text-muted-foreground">小（height: 1.375rem）</span>
        </div>
        <div class="flex items-center gap-2">
          <span class="badge badge-primary">MD</span>
          <span class="text-sm text-muted-foreground">默认（height: 1.5rem）</span>
        </div>
        <div class="flex items-center gap-2">
          <span class="badge badge-lg badge-primary">LG</span>
          <span class="text-sm text-muted-foreground">大（height: 1.875rem）</span>
        </div>
      </div>
    </DocsSection>

    <!-- 样式变体 -->
    <DocsSection title="样式变体">
      <div class="bg-card p-6 rounded-lg space-y-6">
        <!-- Solid -->
        <div>
          <h3 class="text-sm font-semibold mb-2">实心 (Solid) - 默认</h3>
          <div class="flex flex-wrap gap-2">
            <span class="badge badge-primary">Primary</span>
            <span class="badge badge-secondary">Secondary</span>
            <span class="badge badge-success">Success</span>
            <span class="badge badge-warning">Warning</span>
            <span class="badge badge-destructive">Destructive</span>
          </div>
        </div>

        <!-- Outline -->
        <div>
          <h3 class="text-sm font-semibold mb-2">描边 (Outline)</h3>
          <div class="flex flex-wrap gap-2">
            <span class="badge badge-primary-outline">Primary</span>
            <span class="badge badge-secondary-outline">Secondary</span>
            <span class="badge badge-success-outline">Success</span>
            <span class="badge badge-warning-outline">Warning</span>
            <span class="badge badge-destructive-outline">Destructive</span>
          </div>
        </div>

        <!-- Subtle -->
        <div>
          <h3 class="text-sm font-semibold mb-2">柔和 (Subtle)</h3>
          <div class="flex flex-wrap gap-2">
            <span class="badge badge-primary-subtle">Primary</span>
            <span class="badge badge-secondary-subtle">Secondary</span>
            <span class="badge badge-success-subtle">Success</span>
            <span class="badge badge-warning-subtle">Warning</span>
            <span class="badge badge-destructive-subtle">Destructive</span>
          </div>
        </div>

        <!-- Ghost -->
        <div>
          <h3 class="text-sm font-semibold mb-2">幽灵 (Ghost)</h3>
          <div class="flex flex-wrap gap-2">
            <span class="badge badge-ghost">Ghost Primary</span>
            <span class="badge badge-ghost">Ghost Secondary</span>
            <span class="badge badge-ghost">Ghost Success</span>
            <span class="badge badge-ghost">Ghost Warning</span>
          </div>
        </div>
      </div>
    </DocsSection>

    <!-- 颜色变体 -->
    <DocsSection title="颜色变体">
      <div class="bg-card p-6 rounded-lg space-y-4">
        <!-- 每种颜色的所有样式 -->
        <div>
          <h3 class="text-sm font-semibold mb-2 text-primary">Primary</h3>
          <div class="flex flex-wrap gap-2">
            <span class="badge badge-primary">Solid</span>
            <span class="badge badge-primary-outline">Outline</span>
            <span class="badge badge-primary-subtle">Subtle</span>
            <span class="badge badge-ghost">Ghost</span>
          </div>
        </div>

        <div>
          <h3 class="text-sm font-semibold mb-2 text-secondary">Secondary</h3>
          <div class="flex flex-wrap gap-2">
            <span class="badge badge-secondary">Solid</span>
            <span class="badge badge-secondary-outline">Outline</span>
            <span class="badge badge-secondary-subtle">Subtle</span>
            <span class="badge badge-ghost">Ghost</span>
          </div>
        </div>

        <div>
          <h3 class="text-sm font-semibold mb-2 text-accent">Accent</h3>
          <div class="flex flex-wrap gap-2">
            <span class="badge badge-accent">Solid</span>
            <span class="badge badge-accent-outline">Outline</span>
            <span class="badge badge-accent-subtle">Subtle</span>
            <span class="badge badge-ghost">Ghost</span>
          </div>
        </div>

        <div>
          <h3 class="text-sm font-semibold mb-2 text-green-600">Success</h3>
          <div class="flex flex-wrap gap-2">
            <span class="badge badge-success">✓ Solid</span>
            <span class="badge badge-success-outline">✓ Outline</span>
            <span class="badge badge-success-subtle">✓ Subtle</span>
          </div>
        </div>

        <div>
          <h3 class="text-sm font-semibold mb-2 text-yellow-600">Warning</h3>
          <div class="flex flex-wrap gap-2">
            <span class="badge badge-warning">⚠️ Solid</span>
            <span class="badge badge-warning-outline">⚠️ Outline</span>
            <span class="badge badge-warning-subtle">⚠️ Subtle</span>
          </div>
        </div>

        <div>
          <h3 class="text-sm font-semibold mb-2 text-red-600">Destructive</h3>
          <div class="flex flex-wrap gap-2">
            <span class="badge badge-destructive">🗑️ Solid</span>
            <span class="badge badge-destructive-outline">🗑️ Outline</span>
            <span class="badge badge-destructive-subtle">🗑️ Subtle</span>
          </div>
        </div>

        <div>
          <h3 class="text-sm font-semibold mb-2 text-blue-600">Info</h3>
          <div class="flex flex-wrap gap-2">
            <span class="badge badge-info">ℹ️ Solid</span>
            <span class="badge badge-info-outline">ℹ️ Outline</span>
            <span class="badge badge-info-subtle">ℹ️ Subtle</span>
          </div>
        </div>
      </div>
    </DocsSection>

    <!-- 特殊功能 -->
    <DocsSection title="特殊功能">
      <!-- 圆形徽章 -->
      <div class="mb-8">
        <h3 class="text-lg font-semibold mb-4">圆形徽章（Pill）</h3>
        <div class="bg-card p-6 rounded-lg flex flex-wrap gap-2">
          <span class="badge badge-pill badge-primary">5</span>
          <span class="badge badge-pill badge-secondary">12</span>
          <span class="badge badge-pill badge-success">99+</span>
          <span class="badge badge-pill badge-warning">⚠️</span>
          <span class="badge badge-pill badge-destructive">3</span>
        </div>
      </div>

      <!-- 可交互徽章 -->
      <div class="mb-8">
        <h3 class="text-lg font-semibold mb-4">可点击徽章（Interactive）</h3>
        <div class="bg-card p-6 rounded-lg">
          <div class="badge-group">
            <button class="badge badge-primary badge-interactive">点击我</button>
            <button class="badge badge-secondary badge-interactive">点击我</button>
            <button class="badge badge-accent badge-interactive">点击我</button>
            <button class="badge badge-success badge-interactive">点击我</button>
          </div>
        </div>
      </div>

      <!-- 可删除徽章 -->
      <div class="mb-8">
        <h3 class="text-lg font-semibold mb-4">可删除徽章（Dismissible）</h3>
        <div class="bg-card p-6 rounded-lg">
          <div class="badge-group">
            <span class="badge badge-primary badge-dismissible">
              React
              <button class="badge-dismiss" @click="(e) => e.target.closest('.badge').remove()">
                ✕
              </button>
            </span>
            <span class="badge badge-secondary badge-dismissible">
              Vue
              <button class="badge-dismiss" @click="(e) => e.target.closest('.badge').remove()">
                ✕
              </button>
            </span>
            <span class="badge badge-accent badge-dismissible">
              TypeScript
              <button class="badge-dismiss" @click="(e) => e.target.closest('.badge').remove()">
                ✕
              </button>
            </span>
          </div>
        </div>
      </div>

      <!-- 脉冲动画 -->
      <div class="mb-8">
        <h3 class="text-lg font-semibold mb-4">脉冲动画（Pulse）</h3>
        <div class="bg-card p-6 rounded-lg flex flex-wrap gap-4">
          <span class="badge badge-primary badge-pulse">Live</span>
          <span class="badge badge-success badge-pulse">New</span>
          <span class="badge badge-warning badge-pulse">Hot</span>
        </div>
      </div>

      <!-- 组合 -->
      <div>
        <h3 class="text-lg font-semibold mb-4">尺寸 + 样式 + 颜色组合</h3>
        <div class="bg-card p-6 rounded-lg">
          <div class="badge-group">
            <span class="badge badge-xs badge-primary">XS Primary</span>
            <span class="badge badge-sm badge-secondary-outline">SM Outline</span>
            <span class="badge badge-primary-subtle">MD Subtle</span>
            <span class="badge badge-lg badge-success">LG Success</span>
            <span class="badge badge-pill badge-lg badge-warning">99+</span>
          </div>
        </div>
      </div>
    </DocsSection>

    <!-- 实际应用场景 -->
    <DocsSection title="实际应用场景">
      <!-- 用户标签 -->
      <div class="mb-8">
        <h3 class="text-lg font-semibold mb-4">用户标签</h3>
        <div class="bg-card p-6 rounded-lg">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 bg-muted rounded-full"></div>
            <div>
              <p class="font-semibold">John Doe</p>
              <div class="badge-group mt-1">
                <span class="badge badge-primary badge-sm">Admin</span>
                <span class="badge badge-success badge-sm">Verified</span>
                <span class="badge badge-accent badge-sm">Pro</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 技能标签 -->
      <div class="mb-8">
        <h3 class="text-lg font-semibold mb-4">技能和标签</h3>
        <div class="bg-card p-6 rounded-lg">
          <div class="badge-group">
            <button class="badge badge-primary-subtle badge-interactive">React</button>
            <button class="badge badge-primary-subtle badge-interactive">Vue</button>
            <button class="badge badge-primary-subtle badge-interactive">TypeScript</button>
            <button class="badge badge-primary-subtle badge-interactive">Node.js</button>
            <button class="badge badge-primary-subtle badge-interactive">Tailwind</button>
          </div>
        </div>
      </div>

      <!-- 状态指示 -->
      <div class="mb-8">
        <h3 class="text-lg font-semibold mb-4">状态指示</h3>
        <div class="bg-card p-6 rounded-lg space-y-2">
          <div class="flex items-center gap-2">
            <span class="badge badge-success badge-pill">✓</span>
            <span>已完成</span>
          </div>
          <div class="flex items-center gap-2">
            <span class="badge badge-warning badge-pill">⏳</span>
            <span>处理中</span>
          </div>
          <div class="flex items-center gap-2">
            <span class="badge badge-destructive badge-pill">✕</span>
            <span>已失败</span>
          </div>
        </div>
      </div>

      <!-- 版本和版次 -->
      <div class="mb-8">
        <h3 class="text-lg font-semibold mb-4">版本标记</h3>
        <div class="bg-card p-6 rounded-lg">
          <div class="space-y-3">
            <div class="flex items-center gap-2">
              <span class="text-sm font-semibold">v1.0.0</span>
              <span class="badge badge-success badge-sm">Stable</span>
            </div>
            <div class="flex items-center gap-2">
              <span class="text-sm font-semibold">v2.0.0</span>
              <span class="badge badge-primary badge-pulse">Beta</span>
            </div>
            <div class="flex items-center gap-2">
              <span class="text-sm font-semibold">v3.0.0</span>
              <span class="badge badge-warning badge-sm">Dev</span>
            </div>
          </div>
        </div>
      </div>

      <!-- 通知和计数 -->
      <div>
        <h3 class="text-lg font-semibold mb-4">通知和计数</h3>
        <div class="bg-card p-6 rounded-lg">
          <div class="flex gap-6">
            <div class="relative">
              <button class="px-4 py-2 bg-primary text-primary-foreground rounded-md">消息</button>
              <span class="absolute -top-2 -right-2 badge badge-pill badge-destructive"> 5 </span>
            </div>
            <div class="relative">
              <button class="px-4 py-2 bg-secondary text-secondary-foreground rounded-md">
                通知
              </button>
              <span class="absolute -top-2 -right-2 badge badge-pill badge-warning"> 3 </span>
            </div>
            <div class="relative">
              <button class="px-4 py-2 bg-accent text-accent-foreground rounded-md">任务</button>
              <span class="absolute -top-2 -right-2 badge badge-pill badge-success"> ✓ </span>
            </div>
          </div>
        </div>
      </div>
    </DocsSection>

    <!-- 定制提示 -->
    <DocsSection title="定制与变量">
      <div class="bg-card p-6 rounded-lg">
        <p class="text-sm text-muted-foreground mb-4">
          所有样式都由 CSS 变量驱动，你可以轻松定制：
        </p>
        <div class="bg-muted p-4 rounded-md text-sm font-mono whitespace-pre-wrap overflow-x-auto">
          {`/* 修改默认尺寸 */ :root { --badge-padding-x: 0.75rem; --badge-font-size: 0.875rem; } /*
          修改颜色 */ :root { --badge-primary-solid-bg: #3b82f6; --badge-primary-solid-fg: #ffffff;
          } /* 修改圆角 */ :root { --badge-border-radius: 0.5rem; } /* 创建自定义大小 */ .badge-xl {
          padding: 0.5rem 0.75rem; height: 2.25rem; font-size: 0.95rem; } /* 创建自定义颜色 */
          .badge-custom { background-color: #f97316; color: white; border-color: #f97316; }`}
        </div>
      </div>
    </DocsSection>
  </DocsContainer>
</template>
