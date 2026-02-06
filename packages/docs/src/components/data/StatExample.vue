<script setup lang="ts">
import DocsHeader from '../zcomp/DocsHeader.vue'
import ApiReference from '../zcomp/ApiReference.vue'
import DocsContainer from '../zcomp/DocsContainer.vue'
import DocsSection from '../zcomp/DocsSection.vue'

const apiClasses = [
  // 基础结构
  {
    category: '基础结构',
    className: 'stat',
    description: '统计组件容器，垂直布局。',
    isCategoryStart: true,
  },
  {
    category: '基础结构',
    className: 'stat-label',
    description: '统计标签/标题。',
    isCategoryStart: false,
  },
  {
    category: '基础结构',
    className: 'stat-value',
    description: '统计数值。',
    isCategoryStart: false,
  },
  {
    category: '基础结构',
    className: 'stat-description',
    description: '统计描述文本。',
    isCategoryStart: false,
  },
  {
    category: '基础结构',
    className: 'stat-icon',
    description: '统计图标容器。',
    isCategoryStart: false,
  },
  {
    category: '基础结构',
    className: 'stat-content',
    description: '统计内容容器。',
    isCategoryStart: false,
  },

  // 趋势
  {
    category: '趋势样式',
    className: 'stat-trend',
    description: '趋势容器。',
    isCategoryStart: true,
  },
  {
    category: '趋势样式',
    className: 'stat-trend-up',
    description: '上升趋势（绿色）。',
    isCategoryStart: false,
  },
  {
    category: '趋势样式',
    className: 'stat-trend-down',
    description: '下降趋势（红色）。',
    isCategoryStart: false,
  },
  {
    category: '趋势样式',
    className: 'stat-trend-neutral',
    description: '持平趋势。',
    isCategoryStart: false,
  },

  // 布局
  {
    category: '布局变体',
    className: 'stat-horizontal',
    description: '水平布局。',
    isCategoryStart: true,
  },
  {
    category: '布局变体',
    className: 'stat-vertical',
    description: '垂直布局（默认）。',
    isCategoryStart: false,
  },
  {
    category: '布局变体',
    className: 'stat-center',
    description: '居中布局。',
    isCategoryStart: false,
  },

  // 尺寸
  {
    category: '尺寸变体',
    className: 'stat-sm',
    description: '小型统计组件。',
    isCategoryStart: true,
  },
  {
    category: '尺寸变体',
    className: 'stat-lg',
    description: '大型统计组件。',
    isCategoryStart: false,
  },

  // 颜色
  {
    category: '颜色变体',
    className: 'stat-primary',
    description: '主色变体。',
    isCategoryStart: true,
  },
  {
    category: '颜色变体',
    className: 'stat-success',
    description: '成功变体。',
    isCategoryStart: false,
  },
  {
    category: '颜色变体',
    className: 'stat-warning',
    description: '警告变体。',
    isCategoryStart: false,
  },
  {
    category: '颜色变体',
    className: 'stat-danger',
    description: '危险变体。',
    isCategoryStart: false,
  },

  // 显示模式
  {
    category: '显示模式',
    className: 'stat-shadow',
    description: '带阴影。',
    isCategoryStart: true,
  },
  {
    category: '显示模式',
    className: 'stat-borderless',
    description: '无边框。',
    isCategoryStart: false,
  },
  {
    category: '显示模式',
    className: 'stat-ghost',
    description: '幽灵模式。',
    isCategoryStart: false,
  },

  // 容器
  {
    category: '容器',
    className: 'stat-group',
    description: '统计网格容器。',
    isCategoryStart: true,
  },
  {
    category: '容器',
    className: 'stat-row',
    description: '统计行容器。',
    isCategoryStart: false,
  },

  // 特殊
  {
    category: '特殊效果',
    className: 'stat-hover',
    description: '悬停效果。',
    isCategoryStart: true,
  },
  {
    category: '特殊效果',
    className: 'stat-loading',
    description: '加载状态。',
    isCategoryStart: false,
  },
]
</script>

<template>
  <DocsContainer>
    <!-- 页面头部 -->
    <DocsHeader
      title="Stat 统计"
      description="灵活的数据统计展示组件。支持水平与垂直布局、趋势指示、自定义图标。适用于仪表板、KPI 展示、数据分析等场景。"
    />

    <!-- API 参考 -->
    <ApiReference :data="apiClasses" />

    <!-- 基础用法 -->
    <DocsSection title="基础用法">
      <p class="text-sm text-muted-foreground mb-4">最简单的统计组件。展示标签、数值和描述。</p>

      <div class="stat">
        <p class="stat-label">总销售额</p>
        <h3 class="stat-value">¥12,345</h3>
        <p class="stat-description">相比上月增长 12%</p>
      </div>
    </DocsSection>

    <!-- 带图标的统计 -->
    <DocsSection title="带图标的统计">
      <p class="text-sm text-muted-foreground mb-4">
        使用 <code class="bg-muted px-2 py-1 rounded text-xs">stat-icon</code> 添加图标。
      </p>

      <div class="grid gap-4 md:grid-cols-2">
        <div class="stat stat-shadow">
          <div class="stat-icon">📊</div>
          <p class="stat-label">销售额</p>
          <h3 class="stat-value">¥125,430</h3>
          <p class="stat-description">今日销售</p>
        </div>

        <div class="stat stat-shadow">
          <div class="stat-icon">👥</div>
          <p class="stat-label">用户数</p>
          <h3 class="stat-value">12,456</h3>
          <p class="stat-description">活跃用户</p>
        </div>
      </div>
    </DocsSection>

    <!-- 布局方向 -->
    <DocsSection title="布局方向">
      <p class="text-sm text-muted-foreground mb-4">支持垂直、水平和居中三种布局。</p>

      <div class="grid gap-4 md:grid-cols-2">
        <!-- 垂直布局（默认） -->
        <div>
          <h4 class="font-semibold mb-2">垂直布局（默认）</h4>
          <div class="stat stat-shadow">
            <div class="stat-icon">📈</div>
            <p class="stat-label">用户增长</p>
            <h3 class="stat-value">+2,456</h3>
            <p class="stat-description">过去 30 天</p>
          </div>
        </div>

        <!-- 水平布局 -->
        <div>
          <h4 class="font-semibold mb-2">水平布局 (stat-horizontal)</h4>
          <div class="stat stat-horizontal stat-shadow">
            <div class="stat-icon">💰</div>
            <div class="stat-content">
              <p class="stat-label">收入</p>
              <h3 class="stat-value">$98,765</h3>
              <p class="stat-description">本月总额</p>
            </div>
          </div>
        </div>

        <!-- 居中布局 -->
        <div>
          <h4 class="font-semibold mb-2">居中布局 (stat-center)</h4>
          <div class="stat stat-center stat-shadow">
            <div class="stat-icon">⭐</div>
            <p class="stat-label">平均评分</p>
            <h3 class="stat-value">4.8</h3>
            <p class="stat-description">共 2,345 条评论</p>
          </div>
        </div>
      </div>
    </DocsSection>

    <!-- 趋势指示 -->
    <DocsSection title="趋势指示">
      <p class="text-sm text-muted-foreground mb-4">
        使用 <code class="bg-muted px-2 py-1 rounded text-xs">stat-trend-up</code>、
        <code class="bg-muted px-2 py-1 rounded text-xs">stat-trend-down</code> 或
        <code class="bg-muted px-2 py-1 rounded text-xs">stat-trend-neutral</code> 显示趋势。
      </p>

      <div class="grid gap-4 md:grid-cols-3">
        <!-- 上升 -->
        <div class="stat stat-shadow">
          <div class="stat-icon">📈</div>
          <p class="stat-label">销售额</p>
          <h3 class="stat-value">¥125,430</h3>
          <span class="stat-trend stat-trend-up">↑ +15.3%</span>
        </div>

        <!-- 下降 -->
        <div class="stat stat-shadow">
          <div class="stat-icon">📉</div>
          <p class="stat-label">退货率</p>
          <h3 class="stat-value">2.5%</h3>
          <span class="stat-trend stat-trend-down">↓ -0.8%</span>
        </div>

        <!-- 持平 -->
        <div class="stat stat-shadow">
          <div class="stat-icon">➡️</div>
          <p class="stat-label">访问量</p>
          <h3 class="stat-value">45,678</h3>
          <span class="stat-trend stat-trend-neutral">→ 0.0%</span>
        </div>
      </div>
    </DocsSection>

    <!-- 尺寸变体 -->
    <DocsSection title="尺寸变体">
      <p class="text-sm text-muted-foreground mb-4">支持小型、默认和大型三种尺寸。</p>

      <div class="space-y-4">
        <!-- 小型 -->
        <div>
          <h4 class="font-semibold mb-2">小型 (stat-sm)</h4>
          <div class="stat stat-sm stat-shadow">
            <div class="stat-icon">📊</div>
            <p class="stat-label">小型统计</p>
            <h3 class="stat-value">1,234</h3>
            <p class="stat-description">小型描述</p>
          </div>
        </div>

        <!-- 默认 -->
        <div>
          <h4 class="font-semibold mb-2">默认尺寸</h4>
          <div class="stat stat-shadow">
            <div class="stat-icon">📊</div>
            <p class="stat-label">默认统计</p>
            <h3 class="stat-value">12,345</h3>
            <p class="stat-description">默认描述</p>
          </div>
        </div>

        <!-- 大型 -->
        <div>
          <h4 class="font-semibold mb-2">大型 (stat-lg)</h4>
          <div class="stat stat-lg stat-shadow">
            <div class="stat-icon">📊</div>
            <p class="stat-label">大型统计</p>
            <h3 class="stat-value">123,456</h3>
            <p class="stat-description">大型描述</p>
          </div>
        </div>
      </div>
    </DocsSection>

    <!-- 颜色变体 -->
    <DocsSection title="颜色变体">
      <p class="text-sm text-muted-foreground mb-4">使用不同的颜色主题。</p>

      <div class="grid gap-4 md:grid-cols-2">
        <!-- 主色 -->
        <div class="stat stat-primary stat-shadow">
          <div class="stat-icon">⭐</div>
          <p class="stat-label">主色统计</p>
          <h3 class="stat-value">8,765</h3>
          <p class="stat-description">使用主色主题</p>
        </div>

        <!-- 成功 -->
        <div class="stat stat-success stat-shadow">
          <div class="stat-icon">✅</div>
          <p class="stat-label">成功统计</p>
          <h3 class="stat-value">9,876</h3>
          <p class="stat-description">使用成功颜色</p>
        </div>

        <!-- 警告 -->
        <div class="stat stat-warning stat-shadow">
          <div class="stat-icon">⚠️</div>
          <p class="stat-label">警告统计</p>
          <h3 class="stat-value">2,345</h3>
          <p class="stat-description">需要关注</p>
        </div>

        <!-- 危险 -->
        <div class="stat stat-danger stat-shadow">
          <div class="stat-icon">❌</div>
          <p class="stat-label">危险统计</p>
          <h3 class="stat-value">567</h3>
          <p class="stat-description">需要处理</p>
        </div>
      </div>
    </DocsSection>

    <!-- 显示模式 -->
    <DocsSection title="显示模式">
      <p class="text-sm text-muted-foreground mb-4">不同的视觉展示方式。</p>

      <div class="space-y-4">
        <!-- 默认 -->
        <div>
          <h4 class="font-semibold mb-2">默认（带边框）</h4>
          <div class="stat">
            <div class="stat-icon">📊</div>
            <p class="stat-label">默认样式</p>
            <h3 class="stat-value">12,345</h3>
          </div>
        </div>

        <!-- 无边框 -->
        <div>
          <h4 class="font-semibold mb-2">无边框 (stat-borderless)</h4>
          <div class="stat stat-borderless">
            <div class="stat-icon">📊</div>
            <p class="stat-label">无边框样式</p>
            <h3 class="stat-value">12,345</h3>
          </div>
        </div>

        <!-- 幽灵模式 -->
        <div>
          <h4 class="font-semibold mb-2">幽灵模式 (stat-ghost)</h4>
          <div class="stat stat-ghost">
            <div class="stat-icon">📊</div>
            <p class="stat-label">幽灵样式</p>
            <h3 class="stat-value">12,345</h3>
          </div>
        </div>

        <!-- 带阴影 -->
        <div>
          <h4 class="font-semibold mb-2">带阴影 (stat-shadow)</h4>
          <div class="stat stat-shadow">
            <div class="stat-icon">📊</div>
            <p class="stat-label">阴影样式</p>
            <h3 class="stat-value">12,345</h3>
          </div>
        </div>
      </div>
    </DocsSection>

    <!-- 统计网格 -->
    <DocsSection title="统计网格">
      <p class="text-sm text-muted-foreground mb-4">
        使用 <code class="bg-muted px-2 py-1 rounded text-xs">stat-group</code> 创建响应式网格。
      </p>

      <div class="stat-group">
        <div class="stat stat-shadow">
          <div class="stat-icon">👥</div>
          <p class="stat-label">总用户数</p>
          <h3 class="stat-value">12,456</h3>
          <span class="stat-trend stat-trend-up">↑ +8.2%</span>
        </div>

        <div class="stat stat-shadow">
          <div class="stat-icon">💰</div>
          <p class="stat-label">总收入</p>
          <h3 class="stat-value">$234,567</h3>
          <span class="stat-trend stat-trend-up">↑ +12.5%</span>
        </div>

        <div class="stat stat-shadow">
          <div class="stat-icon">📊</div>
          <p class="stat-label">订单量</p>
          <h3 class="stat-value">8,765</h3>
          <span class="stat-trend stat-trend-down">↓ -2.3%</span>
        </div>

        <div class="stat stat-shadow">
          <div class="stat-icon">⭐</div>
          <p class="stat-label">评分</p>
          <h3 class="stat-value">4.8</h3>
          <span class="stat-trend stat-trend-neutral">→ 0.0%</span>
        </div>
      </div>
    </DocsSection>

    <!-- 悬停效果 -->
    <DocsSection title="悬停效果">
      <p class="text-sm text-muted-foreground mb-4">
        使用 <code class="bg-muted px-2 py-1 rounded text-xs">stat-hover</code> 添加悬停效果。
      </p>

      <div class="grid gap-4 md:grid-cols-2">
        <div class="stat stat-hover stat-shadow">
          <div class="stat-icon">📈</div>
          <p class="stat-label">可交互</p>
          <h3 class="stat-value">↑ 23%</h3>
          <p class="stat-description">悬停查看效果</p>
        </div>

        <div class="stat stat-hover stat-shadow stat-primary">
          <div class="stat-icon">💎</div>
          <p class="stat-label">高级用户</p>
          <h3 class="stat-value">456</h3>
          <p class="stat-description">点击查看详情</p>
        </div>
      </div>
    </DocsSection>

    <!-- 加载状态 -->
    <DocsSection title="加载状态">
      <p class="text-sm text-muted-foreground mb-4">
        使用 <code class="bg-muted px-2 py-1 rounded text-xs">stat-loading</code> 显示加载状态。
      </p>

      <div class="stat stat-loading stat-shadow">
        <div class="stat-icon">⏳</div>
        <p class="stat-label">数据加载中</p>
        <h3 class="stat-value">---</h3>
        <p class="stat-description">请稍候...</p>
      </div>
    </DocsSection>

    <!-- 变量定制 -->
    <DocsSection title="变量定制">
      <p class="text-sm text-muted-foreground mb-4">所有统计样式都由 CSS 变量驱动。</p>

      <div class="bg-muted p-4 rounded-lg">
        <h4 class="font-semibold mb-3">常用变量：</h4>
        <ul class="space-y-2 text-sm">
          <li>
            <code class="bg-background px-2 py-1 rounded"> --stat-padding </code>
            - 内边距
          </li>
          <li>
            <code class="bg-background px-2 py-1 rounded"> --stat-gap </code>
            - 元素间距
          </li>
          <li>
            <code class="bg-background px-2 py-1 rounded"> --stat-value-size </code>
            - 数值字体大小
          </li>
          <li>
            <code class="bg-background px-2 py-1 rounded"> --stat-icon-size </code>
            - 图标大小
          </li>
          <li>
            <code class="bg-background px-2 py-1 rounded"> --stat-icon-bg </code>
            - 图标背景色
          </li>
        </ul>
      </div>

      <div class="mt-4 bg-muted p-4 rounded-lg">
        <h4 class="font-semibold mb-3">定制示例：</h4>
        <pre class="text-sm overflow-auto"><code>:root {
  /* 改变内边距 */
  --stat-padding: 2rem;
  --stat-gap: 0.75rem;
  
  /* 改变字体大小 */
  --stat-value-size: 2.5rem;
  --stat-label-size: 1rem;
  
  /* 改变图标大小 */
  --stat-icon-size: 2.5rem;
}</code></pre>
      </div>
    </DocsSection>

    <!-- 最佳实践 -->
    <DocsSection title="最佳实践">
      <div class="space-y-4">
        <div class="border-l-4 border-green-500 pl-4">
          <p class="font-semibold text-green-700 mb-1">✅ 推荐</p>
          <ul class="text-sm space-y-1 text-muted-foreground">
            <li>• 使用清晰的标签和易读的数值</li>
            <li>• 为重要指标添加趋势信息</li>
            <li>• 使用颜色变体区分不同类型</li>
            <li>• 提供背景或阴影增强视觉</li>
            <li>• 在网格中均匀排列统计</li>
          </ul>
        </div>

        <div class="border-l-4 border-red-500 pl-4">
          <p class="font-semibold text-red-700 mb-1">❌ 避免</p>
          <ul class="text-sm space-y-1 text-muted-foreground">
            <li>• 数值过长或格式混乱</li>
            <li>• 单位标注不清</li>
            <li>• 过多颜色混用</li>
            <li>• 加载状态使用过久</li>
            <li>• 忽视数据准确性</li>
          </ul>
        </div>
      </div>
    </DocsSection>
  </DocsContainer>
</template>
