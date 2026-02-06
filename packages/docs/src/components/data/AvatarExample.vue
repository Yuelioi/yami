<script setup lang="ts">
import DocsHeader from '../zcomp/DocsHeader.vue'
import ApiReference from '../zcomp/ApiReference.vue'
import DocsContainer from '../zcomp/DocsContainer.vue'
import DocsSection from '../zcomp/DocsSection.vue'

/**
 * Avatar API Reference
 */
const apiClasses = [
  // ========================================
  // 基础
  // ========================================
  {
    category: '基础',
    className: 'avatar',
    description: 'Avatar 基础容器（display: inline-flex，width: var(--avatar-size) = 2.5rem）。',
    isCategoryStart: true,
  },

  // ========================================
  // 尺寸变体 - Avatar Sizes
  // ========================================
  {
    category: '尺寸',
    className: 'avatar-xs',
    description: '极小（size: 1.5rem，font-size: 0.625rem）。',
    isCategoryStart: true,
  },
  {
    category: '尺寸',
    className: 'avatar-sm',
    description: '小（size: 2rem，font-size: 0.75rem）。',
  },
  {
    category: '尺寸',
    className: 'avatar-lg',
    description: '大（size: 3.5rem，font-size: 1rem）。',
  },
  {
    category: '尺寸',
    className: 'avatar-xl',
    description: '特大（size: 4.5rem，font-size: 1.25rem）。',
  },
  {
    category: '尺寸',
    className: 'avatar-2xl',
    description: '超大（size: 5.5rem，font-size: 1.5rem）。',
  },

  // ========================================
  // 圆角变体 - Avatar Shapes
  // ========================================
  {
    category: '圆角',
    className: 'avatar-rounded',
    description: '圆形（border-radius: 9999px）。',
    isCategoryStart: true,
  },
  {
    category: '圆角',
    className: 'avatar-square',
    description: '方形（border-radius: 0）。',
  },
  {
    category: '圆角',
    className: 'avatar-lg-rounded',
    description: '大圆角（border-radius: var(--radius-lg)）。',
  },
  {
    category: '圆角',
    className: 'avatar-md-rounded',
    description: '中圆角（border-radius: var(--radius-md)）。',
  },

  // ========================================
  // 颜色变体 - Avatar Colors
  // ========================================
  {
    category: '颜色',
    className: 'avatar-primary',
    description: '主要颜色。',
    isCategoryStart: true,
  },
  {
    category: '颜色',
    className: 'avatar-secondary',
    description: '次要颜色。',
  },
  {
    category: '颜色',
    className: 'avatar-accent',
    description: '强调颜色。',
  },
  {
    category: '颜色',
    className: 'avatar-success',
    description: '成功颜色。',
  },
  {
    category: '颜色',
    className: 'avatar-warning',
    description: '警告颜色。',
  },
  {
    category: '颜色',
    className: 'avatar-destructive',
    description: '危险颜色。',
  },
  {
    category: '颜色',
    className: 'avatar-info',
    description: '信息颜色。',
  },

  // ========================================
  // 在线状态 - Avatar Status
  // ========================================
  {
    category: '状态',
    className: 'avatar-status-online',
    description: '在线状态（绿色）。',
    isCategoryStart: true,
  },
  {
    category: '状态',
    className: 'avatar-status-away',
    description: '离开状态（黄色）。',
  },
  {
    category: '状态',
    className: 'avatar-status-offline',
    description: '离线状态（灰色）。',
  },
  {
    category: '状态',
    className: 'avatar-status-busy',
    description: '忙碌状态（红色）。',
  },

  // ========================================
  // 环形和特殊 - Avatar Ring & Special
  // ========================================
  {
    category: '特殊',
    className: 'avatar-ring',
    description: '环形边框。',
    isCategoryStart: true,
  },
  {
    category: '特殊',
    className: 'avatar-interactive',
    description: '可点击（cursor: pointer，有悬停效果）。',
  },
  {
    category: '特殊',
    className: 'avatar-dismissible',
    description: '可删除（带删除按钮）。',
  },
  {
    category: '特殊',
    className: 'avatar-group',
    description: '头像组（多个头像重叠显示）。',
  },
]
</script>

<template>
  <DocsContainer>
    <DocsHeader
      title="Avatar 头像"
      description="高性能头像组件。支持图片和文字，6 种尺寸，7 种颜色，4 种圆角，4 种在线状态。"
    />

    <!-- API 参考 -->
    <ApiReference :data="apiClasses" />

    <!-- 基础用法 -->
    <DocsSection title="基础用法">
      <div class="bg-card p-6 rounded-lg flex gap-4">
        <!-- 图片头像 -->
        <div class="avatar avatar-rounded">
          <img src="https://avatar.vercel.sh/john" alt="John" />
        </div>

        <!-- 文字头像 -->
        <div class="avatar avatar-rounded avatar-primary">JD</div>

        <!-- 默认头像 -->
        <div class="avatar avatar-rounded">👤</div>
      </div>
    </DocsSection>

    <!-- 尺寸变体 -->
    <DocsSection title="尺寸变体">
      <div class="bg-card p-6 rounded-lg flex items-center gap-4">
        <div class="avatar avatar-xs avatar-rounded avatar-primary">XS</div>
        <div class="avatar avatar-sm avatar-rounded avatar-primary">SM</div>
        <div class="avatar avatar-rounded avatar-primary">MD</div>
        <div class="avatar avatar-lg avatar-rounded avatar-primary">LG</div>
        <div class="avatar avatar-xl avatar-rounded avatar-primary">XL</div>
        <div class="avatar avatar-2xl avatar-rounded avatar-primary">2XL</div>
      </div>
    </DocsSection>

    <!-- 圆角变体 -->
    <DocsSection title="圆角变体">
      <div class="bg-card p-6 rounded-lg flex gap-4">
        <div class="text-center">
          <p class="text-sm font-semibold mb-2">圆形</p>
          <div class="avatar avatar-rounded avatar-primary">AB</div>
        </div>
        <div class="text-center">
          <p class="text-sm font-semibold mb-2">方形</p>
          <div class="avatar avatar-square avatar-primary">AB</div>
        </div>
        <div class="text-center">
          <p class="text-sm font-semibold mb-2">大圆角</p>
          <div class="avatar avatar-lg-rounded avatar-primary">AB</div>
        </div>
        <div class="text-center">
          <p class="text-sm font-semibold mb-2">中圆角</p>
          <div class="avatar avatar-md-rounded avatar-primary">AB</div>
        </div>
      </div>
    </DocsSection>

    <!-- 颜色变体 -->
    <DocsSection title="颜色变体">
      <div class="bg-card p-6 rounded-lg flex flex-wrap gap-4">
        <div class="text-center">
          <div class="avatar avatar-rounded avatar-primary mb-2">P</div>
          <p class="text-xs text-muted-foreground">Primary</p>
        </div>
        <div class="text-center">
          <div class="avatar avatar-rounded avatar-secondary mb-2">S</div>
          <p class="text-xs text-muted-foreground">Secondary</p>
        </div>
        <div class="text-center">
          <div class="avatar avatar-rounded avatar-accent mb-2">A</div>
          <p class="text-xs text-muted-foreground">Accent</p>
        </div>
        <div class="text-center">
          <div class="avatar avatar-rounded avatar-success mb-2">✓</div>
          <p class="text-xs text-muted-foreground">Success</p>
        </div>
        <div class="text-center">
          <div class="avatar avatar-rounded avatar-warning mb-2">!</div>
          <p class="text-xs text-muted-foreground">Warning</p>
        </div>
        <div class="text-center">
          <div class="avatar avatar-rounded avatar-destructive mb-2">✕</div>
          <p class="text-xs text-muted-foreground">Destructive</p>
        </div>
        <div class="text-center">
          <div class="avatar avatar-rounded avatar-info mb-2">i</div>
          <p class="text-xs text-muted-foreground">Info</p>
        </div>
      </div>
    </DocsSection>

    <!-- 在线状态 -->
    <DocsSection title="在线状态">
      <div class="bg-card p-6 rounded-lg flex flex-wrap gap-6">
        <div class="text-center">
          <div class="avatar avatar-lg avatar-rounded avatar-primary avatar-status-online mb-2">
            👤
            <div class="avatar-status"></div>
          </div>
          <p class="text-xs text-muted-foreground">在线</p>
        </div>
        <div class="text-center">
          <div class="avatar avatar-lg avatar-rounded avatar-primary avatar-status-away mb-2">
            👤
            <div class="avatar-status"></div>
          </div>
          <p class="text-xs text-muted-foreground">离开</p>
        </div>
        <div class="text-center">
          <div class="avatar avatar-lg avatar-rounded avatar-primary avatar-status-offline mb-2">
            👤
            <div class="avatar-status"></div>
          </div>
          <p class="text-xs text-muted-foreground">离线</p>
        </div>
        <div class="text-center">
          <div class="avatar avatar-lg avatar-rounded avatar-primary avatar-status-busy mb-2">
            👤
            <div class="avatar-status"></div>
          </div>
          <p class="text-xs text-muted-foreground">忙碌</p>
        </div>
      </div>
    </DocsSection>

    <!-- 特殊功能 -->
    <DocsSection title="特殊功能">
      <!-- 环形边框 -->
      <div class="mb-8">
        <h3 class="text-lg font-semibold mb-4">环形边框</h3>
        <div class="bg-card p-6 rounded-lg flex gap-4">
          <div class="avatar avatar-rounded avatar-primary avatar-ring">JD</div>
          <div class="avatar avatar-rounded avatar-secondary avatar-ring">AB</div>
        </div>
      </div>

      <!-- 可点击头像 -->
      <div class="mb-8">
        <h3 class="text-lg font-semibold mb-4">可点击头像</h3>
        <div class="bg-card p-6 rounded-lg flex gap-4">
          <div class="avatar avatar-rounded avatar-primary avatar-interactive">JD</div>
          <div class="avatar avatar-rounded avatar-secondary avatar-interactive">AB</div>
        </div>
      </div>

      <!-- 可删除头像 -->
      <div class="mb-8">
        <h3 class="text-lg font-semibold mb-4">可删除头像</h3>
        <div class="bg-card p-6 rounded-lg flex gap-4">
          <div class="avatar avatar-rounded avatar-primary avatar-dismissible">
            JD
            <button class="avatar-dismiss" @click="(e) => e.target.closest('.avatar').remove()">
              ✕
            </button>
          </div>
          <div class="avatar avatar-rounded avatar-secondary avatar-dismissible">
            AB
            <button class="avatar-dismiss" @click="(e) => e.target.closest('.avatar').remove()">
              ✕
            </button>
          </div>
        </div>
      </div>

      <!-- 头像组 -->
      <div>
        <h3 class="text-lg font-semibold mb-4">头像组（重叠显示）</h3>
        <div class="bg-card p-6 rounded-lg">
          <div class="avatar-group">
            <div class="avatar avatar-rounded avatar-primary">JD</div>
            <div class="avatar avatar-rounded avatar-secondary">AB</div>
            <div class="avatar avatar-rounded avatar-accent">CD</div>
            <div class="avatar avatar-rounded avatar-success">+2</div>
          </div>
        </div>
      </div>
    </DocsSection>

    <!-- 实际应用场景 -->
    <DocsSection title="实际应用场景">
      <!-- 用户卡片 -->
      <div class="mb-8">
        <h3 class="text-lg font-semibold mb-4">用户卡片</h3>
        <div class="bg-card p-6 rounded-lg">
          <div class="flex items-center gap-3">
            <div class="avatar avatar-lg avatar-rounded avatar-primary avatar-status-online">
              JD
              <div class="avatar-status"></div>
            </div>
            <div>
              <p class="font-semibold">John Doe</p>
              <p class="text-sm text-muted-foreground">在线</p>
            </div>
          </div>
        </div>
      </div>

      <!-- 用户列表 -->
      <div class="mb-8">
        <h3 class="text-lg font-semibold mb-4">用户列表</h3>
        <div class="bg-card p-4 rounded-lg space-y-3">
          <div class="flex items-center gap-3 p-2">
            <div class="avatar avatar-rounded avatar-primary avatar-status-online">
              JD
              <div class="avatar-status"></div>
            </div>
            <div class="flex-1">
              <p class="font-semibold">John Doe</p>
              <p class="text-xs text-muted-foreground">@johndoe</p>
            </div>
          </div>
          <div class="flex items-center gap-3 p-2">
            <div class="avatar avatar-rounded avatar-secondary avatar-status-away">
              AB
              <div class="avatar-status"></div>
            </div>
            <div class="flex-1">
              <p class="font-semibold">Alice Brown</p>
              <p class="text-xs text-muted-foreground">@alice</p>
            </div>
          </div>
          <div class="flex items-center gap-3 p-2">
            <div class="avatar avatar-rounded avatar-accent avatar-status-offline">
              CD
              <div class="avatar-status"></div>
            </div>
            <div class="flex-1">
              <p class="font-semibold">Charlie Davis</p>
              <p class="text-xs text-muted-foreground">@charlie</p>
            </div>
          </div>
        </div>
      </div>

      <!-- 团队成员 -->
      <div class="mb-8">
        <h3 class="text-lg font-semibold mb-4">团队成员</h3>
        <div class="bg-card p-6 rounded-lg">
          <p class="text-sm text-muted-foreground mb-3">团队成员：</p>
          <div class="avatar-group">
            <div class="avatar avatar-lg avatar-rounded avatar-primary" title="John">JD</div>
            <div class="avatar avatar-lg avatar-rounded avatar-secondary" title="Alice">AB</div>
            <div class="avatar avatar-lg avatar-rounded avatar-accent" title="Charlie">CD</div>
            <div class="avatar avatar-lg avatar-rounded avatar-success" title="More">+3</div>
          </div>
        </div>
      </div>

      <!-- 评论头像 -->
      <div>
        <h3 class="text-lg font-semibold mb-4">评论区</h3>
        <div class="bg-card p-6 rounded-lg space-y-4">
          <div class="flex gap-3">
            <div class="avatar avatar-rounded avatar-primary flex-shrink-0">JD</div>
            <div class="flex-1">
              <p class="font-semibold text-sm">John Doe</p>
              <p class="text-sm text-muted-foreground">这是一条评论</p>
            </div>
          </div>
          <div class="flex gap-3">
            <div class="avatar avatar-rounded avatar-secondary flex-shrink-0">AB</div>
            <div class="flex-1">
              <p class="font-semibold text-sm">Alice Brown</p>
              <p class="text-sm text-muted-foreground">这是另一条评论</p>
            </div>
          </div>
        </div>
      </div>
    </DocsSection>

    <!-- 尺寸+颜色组合 -->
    <DocsSection title="尺寸和颜色组合">
      <div class="bg-card p-6 rounded-lg space-y-4">
        <div class="flex items-center gap-2">
          <div class="avatar avatar-xs avatar-rounded avatar-primary">XS</div>
          <div class="avatar avatar-sm avatar-rounded avatar-primary">SM</div>
          <div class="avatar avatar-rounded avatar-primary">MD</div>
          <div class="avatar avatar-lg avatar-rounded avatar-primary">LG</div>
          <div class="avatar avatar-xl avatar-rounded avatar-primary">XL</div>
        </div>
        <div class="flex items-center gap-2">
          <div class="avatar avatar-sm avatar-rounded avatar-secondary">AB</div>
          <div class="avatar avatar-sm avatar-rounded avatar-accent">CD</div>
          <div class="avatar avatar-sm avatar-rounded avatar-success">✓</div>
          <div class="avatar avatar-sm avatar-rounded avatar-warning">!</div>
          <div class="avatar avatar-sm avatar-rounded avatar-destructive">✕</div>
        </div>
      </div>
    </DocsSection>
  </DocsContainer>
</template>

<style scoped>
/* 样式作用域 */
</style>
