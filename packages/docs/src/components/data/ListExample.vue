<script setup lang="ts">
import { ref } from 'vue'
import DocsHeader from '../zcomp/DocsHeader.vue'
import ApiReference from '../zcomp/ApiReference.vue'
import DocsContainer from '../zcomp/DocsContainer.vue'
import DocsSection from '../zcomp/DocsSection.vue'

const apiClasses = [
  // 基础结构
  {
    category: '基础结构',
    className: 'list',
    description: '列表容器，用 flex 排列列表项。',
    isCategoryStart: true,
  },
  {
    category: '基础结构',
    className: 'list-item',
    description: '单个列表项，可交互。',
    isCategoryStart: false,
  },
  {
    category: '基础结构',
    className: 'list-item-active',
    description: '列表项激活状态。',
    isCategoryStart: false,
  },

  // 内容组织
  {
    category: '内容组织',
    className: 'list-item-start',
    description: '列表项起始内容（图标等）。',
    isCategoryStart: true,
  },
  {
    category: '内容组织',
    className: 'list-item-content',
    description: '列表项中间内容（标题、描述）。',
    isCategoryStart: false,
  },
  {
    category: '内容组织',
    className: 'list-item-title',
    description: '列表项标题。',
    isCategoryStart: false,
  },
  {
    category: '内容组织',
    className: 'list-item-description',
    description: '列表项描述。',
    isCategoryStart: false,
  },
  {
    category: '内容组织',
    className: 'list-item-end',
    description: '列表项末尾内容（标签、徽章等）。',
    isCategoryStart: false,
  },

  // 尺寸
  {
    category: '尺寸变体',
    className: 'list-sm',
    description: '小型列表。',
    isCategoryStart: true,
  },
  {
    category: '尺寸变体',
    className: 'list-lg',
    description: '大型列表。',
    isCategoryStart: false,
  },

  // 颜色
  {
    category: '颜色变体',
    className: 'list-primary',
    description: '主色变体。',
    isCategoryStart: true,
  },
  {
    category: '颜色变体',
    className: 'list-success',
    description: '成功变体（绿色）。',
    isCategoryStart: false,
  },
  {
    category: '颜色变体',
    className: 'list-warning',
    description: '警告变体（黄色）。',
    isCategoryStart: false,
  },
  {
    category: '颜色变体',
    className: 'list-destructive',
    description: '危险变体（红色）。',
    isCategoryStart: false,
  },

  // 显示模式
  {
    category: '显示模式',
    className: 'list-bordered',
    description: '带边框和分割线。',
    isCategoryStart: true,
  },
  {
    category: '显示模式',
    className: 'list-separated',
    description: '分离模式，项间有间距和边框。',
    isCategoryStart: false,
  },
  {
    category: '显示模式',
    className: 'list-ghost',
    description: '幽灵模式，无背景。',
    isCategoryStart: false,
  },
  {
    category: '显示模式',
    className: 'list-plain',
    description: '纯展示，不可交互。',
    isCategoryStart: false,
  },
  {
    category: '显示模式',
    className: 'list-compact',
    description: '紧凑模式，无项间分割线。',
    isCategoryStart: false,
  },

  // 特殊项
  {
    category: '特殊项',
    className: 'list-header',
    description: '列表头部/分组标签。',
    isCategoryStart: true,
  },
  {
    category: '特殊项',
    className: 'list-divider',
    description: '列表分割线。',
    isCategoryStart: false,
  },

  // 列表类型
  {
    category: '列表类型',
    className: 'list-ul',
    description: '无序列表（项前显示点）。',
    isCategoryStart: true,
  },
  {
    category: '列表类型',
    className: 'list-ol',
    description: '有序列表（项前显示序号）。',
    isCategoryStart: false,
  },

  // 交互模式
  {
    category: '交互模式',
    className: 'list-selectable',
    description: '可选择模式。',
    isCategoryStart: true,
  },
  {
    category: '交互模式',
    className: 'list-draggable',
    description: '可拖拽模式。',
    isCategoryStart: false,
  },

  // 特殊
  {
    category: '特殊',
    className: 'list-nested',
    description: '嵌套列表模式。',
    isCategoryStart: true,
  },
]

const selectedItem = ref<number | null>(null)
</script>

<template>
  <DocsContainer>
    <!-- 页面头部 -->
    <DocsHeader
      title="List 列表"
      description="灵活的列表组件。支持多种尺寸、颜色、显示模式和交互方式。适用于菜单、导航、内容列表、选项列表等场景。"
    />

    <!-- API 参考 -->
    <ApiReference :data="apiClasses" />

    <!-- 基础用法 -->
    <DocsSection title="基础用法">
      <p class="text-sm text-muted-foreground mb-4">
        最简单的列表实现。使用 <code class="bg-muted px-2 py-1 rounded text-xs">list</code> 和
        <code class="bg-muted px-2 py-1 rounded text-xs">list-item</code> 创建列表。
      </p>

      <ul class="list">
        <li class="list-item">
          <span>菜单项 1</span>
        </li>
        <li class="list-item">
          <span>菜单项 2</span>
        </li>
        <li class="list-item">
          <span>菜单项 3</span>
        </li>
      </ul>
    </DocsSection>

    <!-- 带标题和描述 -->
    <DocsSection title="带标题和描述">
      <p class="text-sm text-muted-foreground mb-4">
        使用 <code class="bg-muted px-2 py-1 rounded text-xs">list-item-content</code>
        组织标题和描述。
      </p>

      <ul class="list list-bordered">
        <li class="list-item">
          <div class="list-item-start">
            <div
              class="w-8 h-8 rounded bg-primary/10 flex items-center justify-center text-primary"
            >
              📧
            </div>
          </div>
          <div class="list-item-content">
            <h4 class="list-item-title">邮件通知</h4>
            <p class="list-item-description">接收重要邮件通知</p>
          </div>
          <div class="list-item-end">
            <span class="text-xs bg-primary/10 text-primary px-2 py-1 rounded">开启</span>
          </div>
        </li>

        <li class="list-item">
          <div class="list-item-start">
            <div
              class="w-8 h-8 rounded bg-success/10 flex items-center justify-center text-green-600"
            >
              🔔
            </div>
          </div>
          <div class="list-item-content">
            <h4 class="list-item-title">推送通知</h4>
            <p class="list-item-description">移动设备推送通知</p>
          </div>
          <div class="list-item-end">
            <span class="text-xs bg-success/10 text-green-600 px-2 py-1 rounded">开启</span>
          </div>
        </li>

        <li class="list-item">
          <div class="list-item-start">
            <div
              class="w-8 h-8 rounded bg-warning/10 flex items-center justify-center text-yellow-600"
            >
              💬
            </div>
          </div>
          <div class="list-item-content">
            <h4 class="list-item-title">短信提醒</h4>
            <p class="list-item-description">重要事项短信提醒</p>
          </div>
          <div class="list-item-end">
            <span class="text-xs bg-warning/10 text-yellow-600 px-2 py-1 rounded">关闭</span>
          </div>
        </li>
      </ul>
    </DocsSection>

    <!-- 尺寸变体 -->
    <DocsSection title="尺寸变体">
      <p class="text-sm text-muted-foreground mb-4">调整列表大小。</p>

      <div class="space-y-6">
        <!-- 小型 -->
        <div>
          <h4 class="font-semibold mb-2">小型 (list-sm)</h4>
          <ul class="list list-sm list-bordered">
            <li class="list-item">小型列表项 1</li>
            <li class="list-item">小型列表项 2</li>
            <li class="list-item">小型列表项 3</li>
          </ul>
        </div>

        <!-- 默认 -->
        <div>
          <h4 class="font-semibold mb-2">默认尺寸</h4>
          <ul class="list list-bordered">
            <li class="list-item">默认列表项 1</li>
            <li class="list-item">默认列表项 2</li>
            <li class="list-item">默认列表项 3</li>
          </ul>
        </div>

        <!-- 大型 -->
        <div>
          <h4 class="font-semibold mb-2">大型 (list-lg)</h4>
          <ul class="list list-lg list-bordered">
            <li class="list-item">大型列表项 1</li>
            <li class="list-item">大型列表项 2</li>
            <li class="list-item">大型列表项 3</li>
          </ul>
        </div>
      </div>
    </DocsSection>

    <!-- 显示模式 -->
    <DocsSection title="显示模式">
      <p class="text-sm text-muted-foreground mb-4">不同的视觉展示方式。</p>

      <div class="space-y-6">
        <!-- 分离模式 -->
        <div>
          <h4 class="font-semibold mb-2">分离模式 (list-separated)</h4>
          <ul class="list list-separated">
            <li class="list-item">分离项 1</li>
            <li class="list-item">分离项 2</li>
            <li class="list-item">分离项 3</li>
          </ul>
        </div>

        <!-- 幽灵模式 -->
        <div>
          <h4 class="font-semibold mb-2">幽灵模式 (list-ghost)</h4>
          <ul class="list list-ghost">
            <li class="list-item">幽灵项 1</li>
            <li class="list-item">幽灵项 2</li>
            <li class="list-item">幽灵项 3</li>
          </ul>
        </div>

        <!-- 紧凑模式 -->
        <div>
          <h4 class="font-semibold mb-2">紧凑模式 (list-compact)</h4>
          <ul class="list list-bordered list-compact">
            <li class="list-item">紧凑项 1</li>
            <li class="list-item">紧凑项 2</li>
            <li class="list-item">紧凑项 3</li>
          </ul>
        </div>

        <!-- 纯展示模式 -->
        <div>
          <h4 class="font-semibold mb-2">纯展示模式 (list-plain)</h4>
          <ul class="list list-bordered list-plain">
            <li class="list-item">展示项 1</li>
            <li class="list-item">展示项 2</li>
            <li class="list-item">展示项 3</li>
          </ul>
        </div>
      </div>
    </DocsSection>

    <!-- 颜色变体 -->
    <DocsSection title="颜色变体">
      <p class="text-sm text-muted-foreground mb-4">使用不同的颜色主题。</p>

      <div class="grid gap-4 md:grid-cols-2">
        <!-- 主色 -->
        <div>
          <h4 class="font-semibold mb-2">主色 (list-primary)</h4>
          <ul class="list list-primary list-bordered">
            <li class="list-item">主色项 1</li>
            <li class="list-item">主色项 2</li>
            <li class="list-item list-item-active">主色项 3（激活）</li>
          </ul>
        </div>

        <!-- 成功 -->
        <div>
          <h4 class="font-semibold mb-2">成功 (list-success)</h4>
          <ul class="list list-success list-bordered">
            <li class="list-item">成功项 1</li>
            <li class="list-item">成功项 2</li>
            <li class="list-item list-item-active">成功项 3（激活）</li>
          </ul>
        </div>

        <!-- 警告 -->
        <div>
          <h4 class="font-semibold mb-2">警告 (list-warning)</h4>
          <ul class="list list-warning list-bordered">
            <li class="list-item">警告项 1</li>
            <li class="list-item">警告项 2</li>
            <li class="list-item list-item-active">警告项 3（激活）</li>
          </ul>
        </div>

        <!-- 危险 -->
        <div>
          <h4 class="font-semibold mb-2">危险 (list-destructive)</h4>
          <ul class="list list-destructive list-bordered">
            <li class="list-item">危险项 1</li>
            <li class="list-item">危险项 2</li>
            <li class="list-item list-item-active">危险项 3（激活）</li>
          </ul>
        </div>
      </div>
    </DocsSection>

    <!-- 有序/无序列表 -->
    <DocsSection title="有序/无序列表">
      <p class="text-sm text-muted-foreground mb-4">
        使用 <code class="bg-muted px-2 py-1 rounded text-xs">list-ul</code> 和
        <code class="bg-muted px-2 py-1 rounded text-xs">list-ol</code> 添加列表标记。
      </p>

      <div class="grid gap-6 md:grid-cols-2">
        <!-- 无序列表 -->
        <div>
          <h4 class="font-semibold mb-2">无序列表 (list-ul)</h4>
          <ul class="list list-ul list-bordered">
            <li class="list-item">第一点</li>
            <li class="list-item">第二点</li>
            <li class="list-item">第三点</li>
          </ul>
        </div>

        <!-- 有序列表 -->
        <div>
          <h4 class="font-semibold mb-2">有序列表 (list-ol)</h4>
          <ol class="list list-ol list-bordered">
            <li class="list-item">第一步</li>
            <li class="list-item">第二步</li>
            <li class="list-item">第三步</li>
          </ol>
        </div>
      </div>
    </DocsSection>

    <!-- 分组列表 -->
    <DocsSection title="分组列表">
      <p class="text-sm text-muted-foreground mb-4">
        使用 <code class="bg-muted px-2 py-1 rounded text-xs">list-header</code> 和
        <code class="bg-muted px-2 py-1 rounded text-xs">list-divider</code> 组织列表。
      </p>

      <ul class="list list-bordered">
        <li class="list-header">常见问题</li>
        <li class="list-item">如何重置密码？</li>
        <li class="list-item">如何更新个人信息？</li>

        <li class="list-divider"></li>

        <li class="list-header">账户设置</li>
        <li class="list-item">隐私设置</li>
        <li class="list-item">安全设置</li>
        <li class="list-item">通知设置</li>
      </ul>
    </DocsSection>

    <!-- 可选择列表 -->
    <DocsSection title="可选择列表">
      <p class="text-sm text-muted-foreground mb-4">
        使用 <code class="bg-muted px-2 py-1 rounded text-xs">list-selectable</code> 和
        <code class="bg-muted px-2 py-1 rounded text-xs">list-selected</code> 实现选择功能。
      </p>

      <ul class="list list-selectable list-bordered">
        <li
          class="list-item"
          :class="{ 'list-selected': selectedItem === 0 }"
          @click="selectedItem = selectedItem === 0 ? null : 0"
        >
          选项 1
        </li>
        <li
          class="list-item"
          :class="{ 'list-selected': selectedItem === 1 }"
          @click="selectedItem = selectedItem === 1 ? null : 1"
        >
          选项 2
        </li>
        <li
          class="list-item"
          :class="{ 'list-selected': selectedItem === 2 }"
          @click="selectedItem = selectedItem === 2 ? null : 2"
        >
          选项 3
        </li>
      </ul>
    </DocsSection>

    <!-- 禁用项 -->
    <DocsSection title="禁用项">
      <p class="text-sm text-muted-foreground mb-4">
        使用 <code class="bg-muted px-2 py-1 rounded text-xs">list-disabled</code> 或
        <code class="bg-muted px-2 py-1 rounded text-xs">disabled</code> 禁用列表项。
      </p>

      <ul class="list list-bordered">
        <li class="list-item">正常项</li>
        <li class="list-item list-disabled">禁用项（class）</li>
        <li class="list-item" disabled>禁用项（disabled）</li>
        <li class="list-item">正常项</li>
      </ul>
    </DocsSection>

    <!-- 变量定制 -->
    <DocsSection title="变量定制">
      <p class="text-sm text-muted-foreground mb-4">所有列表样式都由 CSS 变量驱动。</p>

      <div class="bg-muted p-4 rounded-lg">
        <h4 class="font-semibold mb-3">常用变量：</h4>
        <ul class="space-y-2 text-sm">
          <li>
            <code class="bg-background px-2 py-1 rounded"> --list-item-padding-x </code>
            - 水平内边距
          </li>
          <li>
            <code class="bg-background px-2 py-1 rounded"> --list-item-padding-y </code>
            - 竖直内边距
          </li>
          <li>
            <code class="bg-background px-2 py-1 rounded"> --list-item-bg-hover </code>
            - 悬停背景色
          </li>
          <li>
            <code class="bg-background px-2 py-1 rounded"> --list-item-bg-active </code>
            - 激活背景色
          </li>
          <li>
            <code class="bg-background px-2 py-1 rounded"> --list-duration </code>
            - 动画时长
          </li>
        </ul>
      </div>

      <div class="mt-4 bg-muted p-4 rounded-lg">
        <h4 class="font-semibold mb-3">定制示例：</h4>
        <pre class="text-sm overflow-auto"><code>:root {
  /* 改变内边距 */
  --list-item-padding-x: 1.5rem;
  --list-item-padding-y: 1rem;
  
  /* 改变背景色 */
  --list-item-bg-hover: var(--primary);
  --list-item-bg-active: var(--primary);
  
  /* 改变动画 */
  --list-duration: 0.3s;
}</code></pre>
      </div>
    </DocsSection>

    <!-- 最佳实践 -->
    <DocsSection title="最佳实践">
      <div class="space-y-4">
        <div class="border-l-4 border-green-500 pl-4">
          <p class="font-semibold text-green-700 mb-1">✅ 推荐</p>
          <ul class="text-sm space-y-1 text-muted-foreground">
            <li>• 为列表项提供清晰的标题</li>
            <li>• 使用描述补充重要信息</li>
            <li>• 对相关项进行分组</li>
            <li>• 使用颜色变体区分不同类型</li>
            <li>• 提供视觉反馈（悬停、激活）</li>
          </ul>
        </div>

        <div class="border-l-4 border-red-500 pl-4">
          <p class="font-semibold text-red-700 mb-1">❌ 避免</p>
          <ul class="text-sm space-y-1 text-muted-foreground">
            <li>• 过长的列表项文本</li>
            <li>• 模糊或不清楚的标题</li>
            <li>• 过多的嵌套</li>
            <li>• 在列表项中放置复杂内容</li>
            <li>• 隐藏重要信息</li>
          </ul>
        </div>
      </div>
    </DocsSection>
  </DocsContainer>
</template>
