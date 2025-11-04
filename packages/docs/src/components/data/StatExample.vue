<script setup lang="ts">
import DocsHeader from '../zcomp/DocsHeader.vue'
import ApiReference from '../zcomp/ApiReference.vue'
import DocsContainer from '../zcomp/DocsContainer.vue'
import DocsSection from '../zcomp/DocsSection.vue'
import { TrendingUp, TrendingDown, Users, DollarSign, ShoppingBag } from 'lucide-vue-next'

const apiClasses = [
  {
    category: '基础结构',
    className: 'stats',
    description: '统计容器，用于包裹一组统计项，默认水平布局。',
    isCategoryStart: true,
  },
  {
    category: '基础结构',
    className: 'stat',
    description: '单个统计项，内部采用网格布局。',
    isCategoryStart: false,
  },

  {
    category: '内容元素',
    className: 'stat-title',
    description: '统计标题。',
    isCategoryStart: true,
  },
  {
    category: '内容元素',
    className: 'stat-value',
    description: '统计值。',
    isCategoryStart: false,
  },
  {
    category: '内容元素',
    className: 'stat-desc',
    description: '统计描述或趋势说明。',
    isCategoryStart: false,
  },
  {
    category: '内容元素',
    className: 'stat-figure',
    description: '统计图形或图标。',
    isCategoryStart: false,
  },
  {
    category: '内容元素',
    className: 'stat-actions',
    description: '统计项下的操作区域。',
    isCategoryStart: false,
  },

  {
    category: '布局修饰符',
    className: 'stats-vertical',
    description: '切换为垂直布局，并调整分割线方向。',
    isCategoryStart: true,
  },
]
</script>

<template>
  <DocsContainer>
    <DocsHeader
      title="Stat 统计组件"
      description="用于展示关键数据指标的统计组件，支持水平与垂直布局、趋势说明与自定义图标。"
    />

    <ApiReference :data="apiClasses" />

    <!-- 基础示例 -->
    <DocsSection title="基础用法">
      <div class="stats w-full">
        <div class="stat">
          <div class="stat-figure text-primary"><Users /></div>
          <div class="stat-title">活跃用户</div>
          <div class="stat-value">2,430</div>
          <div class="stat-desc"><TrendingUp class="w-3 h-3" /> +12% 本月</div>
        </div>

        <div class="stat">
          <div class="stat-figure text-accent"><ShoppingBag /></div>
          <div class="stat-title">订单量</div>
          <div class="stat-value">312</div>
          <div class="stat-desc text-muted-foreground">昨日完成 289 单</div>
        </div>

        <div class="stat">
          <div class="stat-figure text-destructive"><DollarSign /></div>
          <div class="stat-title">收入</div>
          <div class="stat-value">$4.2k</div>
          <div class="stat-desc stat-desc-error"><TrendingDown class="w-3 h-3" /> -5% 本周</div>
        </div>
      </div>
      <p class="text-sm text-muted-foreground mt-2">
        💡 此示例使用了
        <code>stats</code
        >、<code>stat</code>、<code>stat-figure</code>、<code>stat-title</code>、<code
          >stat-value</code
        >
        与 <code>stat-desc</code>。
      </p>
    </DocsSection>

    <!-- 垂直布局示例 -->
    <DocsSection title="垂直布局">
      <div class="stats stats-vertical w-full max-w-sm mx-auto">
        <div class="stat">
          <div class="stat-title">网站访问量</div>
          <div class="stat-value">25.4K</div>
          <div class="stat-desc"><TrendingUp class="w-3 h-3" /> 比上周 +8%</div>
        </div>

        <div class="stat">
          <div class="stat-title">新注册用户</div>
          <div class="stat-value">1,240</div>
          <div class="stat-desc">稳定增长趋势</div>
        </div>

        <div class="stat">
          <div class="stat-title">退订用户</div>
          <div class="stat-value">52</div>
          <div class="stat-desc"><TrendingDown class="w-3 h-3" /> 较上周 +5%</div>
        </div>
      </div>
      <p class="text-sm text-muted-foreground mt-2">
        💡 此示例使用了 <code>stats-vertical</code> 。
      </p>
    </DocsSection>
  </DocsContainer>
</template>
