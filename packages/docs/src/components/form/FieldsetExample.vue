<script setup lang="ts">
import { ref } from 'vue'
import DocsHeader from '../zcomp/DocsHeader.vue'
import ApiReference from '../zcomp/ApiReference.vue'
import DocsContainer from '../zcomp/DocsContainer.vue'
import DocsSection from '../zcomp/DocsSection.vue'

const apiClasses = [
  // 基础
  {
    category: '基础',
    className: 'fieldset',
    description: '字段集容器。',
    isCategoryStart: true,
  },
  {
    category: '基础',
    className: 'fieldset-legend',
    description: '字段集标题/图例。',
    isCategoryStart: false,
  },
  {
    category: '基础',
    className: 'fieldset-description',
    description: '字段集描述文本。',
    isCategoryStart: false,
  },
  {
    category: '基础',
    className: 'fieldset-content',
    description: '字段集内容容器。',
    isCategoryStart: false,
  },
  {
    category: '基础',
    className: 'fieldset-item',
    description: '表单项包装器。',
    isCategoryStart: false,
  },

  // 尺寸
  {
    category: '尺寸变体',
    className: 'fieldset-sm',
    description: '小型字段集。',
    isCategoryStart: true,
  },
  {
    category: '尺寸变体',
    className: 'fieldset-lg',
    description: '大型字段集。',
    isCategoryStart: false,
  },

  // 颜色
  {
    category: '颜色变体',
    className: 'fieldset-primary',
    description: '主色变体。',
    isCategoryStart: true,
  },
  {
    category: '颜色变体',
    className: 'fieldset-success',
    description: '成功变体。',
    isCategoryStart: false,
  },
  {
    category: '颜色变体',
    className: 'fieldset-warning',
    description: '警告变体。',
    isCategoryStart: false,
  },
  {
    category: '颜色变体',
    className: 'fieldset-danger',
    description: '危险变体。',
    isCategoryStart: false,
  },

  // 状态
  {
    category: '状态',
    className: 'fieldset-disabled',
    description: '禁用状态。',
    isCategoryStart: true,
  },
  {
    category: '状态',
    className: 'fieldset-error',
    description: '错误状态。',
    isCategoryStart: false,
  },

  // 显示模式
  {
    category: '显示模式',
    className: 'fieldset-borderless',
    description: '无边框。',
    isCategoryStart: true,
  },
  {
    category: '显示模式',
    className: 'fieldset-ghost',
    description: '幽灵模式。',
    isCategoryStart: false,
  },
  {
    category: '显示模式',
    className: 'fieldset-shadow',
    description: '带阴影。',
    isCategoryStart: false,
  },

  // 布局
  {
    category: '布局',
    className: 'fieldset-columns-2',
    description: '两列布局。',
    isCategoryStart: true,
  },
  {
    category: '布局',
    className: 'fieldset-columns-3',
    description: '三列布局。',
    isCategoryStart: false,
  },
  {
    category: '布局',
    className: 'fieldset-columns-auto',
    description: '自适应列布局。',
    isCategoryStart: false,
  },
  {
    category: '布局',
    className: 'fieldset-row',
    description: '行布局。',
    isCategoryStart: false,
  },

  // 容器
  {
    category: '容器',
    className: 'fieldset-group',
    description: '字段集组容器。',
    isCategoryStart: true,
  },
  {
    category: '容器',
    className: 'fieldset-group-compact',
    description: '紧凑字段集组。',
    isCategoryStart: false,
  },

  // 特殊
  {
    category: '特殊效果',
    className: 'fieldset-collapsible',
    description: '可收起字段集。',
    isCategoryStart: true,
  },
  {
    category: '特殊效果',
    className: 'fieldset-required',
    description: '必填字段指示。',
    isCategoryStart: false,
  },
  {
    category: '特殊效果',
    className: 'fieldset-optional',
    description: '可选字段指示。',
    isCategoryStart: false,
  },
  {
    category: '特殊效果',
    className: 'fieldset-step',
    description: '步骤指示器。',
    isCategoryStart: false,
  },
]

const collapsedSection = ref(false)
</script>

<template>
  <DocsContainer>
    <!-- 页面头部 -->
    <DocsHeader
      title="Fieldset 字段集"
      description="灵活的字段集组件。支持多种尺寸、颜色、布局和特殊效果。适用于表单分组、字段组织、分步骤表单等场景。"
    />

    <!-- API 参考 -->
    <ApiReference :data="apiClasses" />

    <!-- 基础用法 -->
    <DocsSection title="基础用法">
      <p class="text-sm text-muted-foreground mb-4">最简单的字段集实现。</p>

      <fieldset class="fieldset">
        <legend class="fieldset-legend">个人信息</legend>
        <div class="fieldset-content">
          <div class="fieldset-item">
            <label>姓名</label>
            <input type="text" class="border rounded px-3 py-2" placeholder="输入姓名" />
          </div>
          <div class="fieldset-item">
            <label>邮箱</label>
            <input type="email" class="border rounded px-3 py-2" placeholder="输入邮箱" />
          </div>
        </div>
      </fieldset>
    </DocsSection>

    <!-- 带描述的字段集 -->
    <DocsSection title="带描述的字段集">
      <p class="text-sm text-muted-foreground mb-4">
        使用 <code class="bg-muted px-2 py-1 rounded text-xs">fieldset-description</code> 添加描述。
      </p>

      <fieldset class="fieldset">
        <legend class="fieldset-legend">账户安全</legend>
        <p class="fieldset-description">请设置一个强密码来保护你的账户</p>
        <div class="fieldset-content">
          <div class="fieldset-item">
            <label>当前密码</label>
            <input type="password" class="border rounded px-3 py-2" placeholder="输入当前密码" />
          </div>
          <div class="fieldset-item">
            <label>新密码</label>
            <input type="password" class="border rounded px-3 py-2" placeholder="输入新密码" />
          </div>
          <div class="fieldset-item">
            <label>确认密码</label>
            <input type="password" class="border rounded px-3 py-2" placeholder="确认密码" />
          </div>
        </div>
      </fieldset>
    </DocsSection>

    <!-- 尺寸变体 -->
    <DocsSection title="尺寸变体">
      <p class="text-sm text-muted-foreground mb-4">支持小型、默认和大型三种尺寸。</p>

      <div class="space-y-6">
        <!-- 小型 -->
        <div>
          <h4 class="font-semibold mb-2">小型 (fieldset-sm)</h4>
          <fieldset class="fieldset fieldset-sm">
            <legend class="fieldset-legend">小型表单</legend>
            <div class="fieldset-content">
              <div class="fieldset-item">
                <label>输入框</label>
                <input type="text" class="border rounded px-3 py-2" placeholder="小型输入" />
              </div>
            </div>
          </fieldset>
        </div>

        <!-- 默认 -->
        <div>
          <h4 class="font-semibold mb-2">默认尺寸</h4>
          <fieldset class="fieldset">
            <legend class="fieldset-legend">默认表单</legend>
            <div class="fieldset-content">
              <div class="fieldset-item">
                <label>输入框</label>
                <input type="text" class="border rounded px-3 py-2" placeholder="默认输入" />
              </div>
            </div>
          </fieldset>
        </div>

        <!-- 大型 -->
        <div>
          <h4 class="font-semibold mb-2">大型 (fieldset-lg)</h4>
          <fieldset class="fieldset fieldset-lg">
            <legend class="fieldset-legend">大型表单</legend>
            <div class="fieldset-content">
              <div class="fieldset-item">
                <label>输入框</label>
                <input type="text" class="border rounded px-3 py-2" placeholder="大型输入" />
              </div>
            </div>
          </fieldset>
        </div>
      </div>
    </DocsSection>

    <!-- 颜色变体 -->
    <DocsSection title="颜色变体">
      <p class="text-sm text-muted-foreground mb-4">使用不同的颜色主题。</p>

      <div class="grid gap-4 md:grid-cols-2">
        <!-- 主色 -->
        <fieldset class="fieldset fieldset-primary">
          <legend class="fieldset-legend">主色变体</legend>
          <div class="fieldset-content">
            <div class="fieldset-item">
              <label>输入框</label>
              <input type="text" class="border rounded px-3 py-2" />
            </div>
          </div>
        </fieldset>

        <!-- 成功 -->
        <fieldset class="fieldset fieldset-success">
          <legend class="fieldset-legend">成功变体</legend>
          <div class="fieldset-content">
            <div class="fieldset-item">
              <label>输入框</label>
              <input type="text" class="border rounded px-3 py-2" />
            </div>
          </div>
        </fieldset>

        <!-- 警告 -->
        <fieldset class="fieldset fieldset-warning">
          <legend class="fieldset-legend">警告变体</legend>
          <div class="fieldset-content">
            <div class="fieldset-item">
              <label>输入框</label>
              <input type="text" class="border rounded px-3 py-2" />
            </div>
          </div>
        </fieldset>

        <!-- 危险 -->
        <fieldset class="fieldset fieldset-danger">
          <legend class="fieldset-legend">危险变体</legend>
          <div class="fieldset-content">
            <div class="fieldset-item">
              <label>输入框</label>
              <input type="text" class="border rounded px-3 py-2" />
            </div>
          </div>
        </fieldset>
      </div>
    </DocsSection>

    <!-- 多列布局 -->
    <DocsSection title="多列布局">
      <p class="text-sm text-muted-foreground mb-4">支持两列、三列和自适应布局。</p>

      <div class="space-y-6">
        <!-- 两列布局 -->
        <div>
          <h4 class="font-semibold mb-2">两列布局 (fieldset-columns-2)</h4>
          <fieldset class="fieldset fieldset-columns-2">
            <legend class="fieldset-legend">地址信息</legend>
            <div class="fieldset-content">
              <div class="fieldset-item">
                <label>省份</label>
                <input type="text" class="border rounded px-3 py-2" placeholder="省份" />
              </div>
              <div class="fieldset-item">
                <label>城市</label>
                <input type="text" class="border rounded px-3 py-2" placeholder="城市" />
              </div>
              <div class="fieldset-item">
                <label>地区</label>
                <input type="text" class="border rounded px-3 py-2" placeholder="地区" />
              </div>
              <div class="fieldset-item">
                <label>邮编</label>
                <input type="text" class="border rounded px-3 py-2" placeholder="邮编" />
              </div>
            </div>
          </fieldset>
        </div>

        <!-- 自适应布局 -->
        <div>
          <h4 class="font-semibold mb-2">自适应布局 (fieldset-columns-auto)</h4>
          <fieldset class="fieldset fieldset-columns-auto">
            <legend class="fieldset-legend">多个字段</legend>
            <div class="fieldset-content">
              <div class="fieldset-item">
                <label>字段 1</label>
                <input type="text" class="border rounded px-3 py-2" placeholder="字段 1" />
              </div>
              <div class="fieldset-item">
                <label>字段 2</label>
                <input type="text" class="border rounded px-3 py-2" placeholder="字段 2" />
              </div>
              <div class="fieldset-item">
                <label>字段 3</label>
                <input type="text" class="border rounded px-3 py-2" placeholder="字段 3" />
              </div>
              <div class="fieldset-item">
                <label>字段 4</label>
                <input type="text" class="border rounded px-3 py-2" placeholder="字段 4" />
              </div>
            </div>
          </fieldset>
        </div>
      </div>
    </DocsSection>

    <!-- 字段集组 -->
    <DocsSection title="字段集组">
      <p class="text-sm text-muted-foreground mb-4">
        使用 <code class="bg-muted px-2 py-1 rounded text-xs">fieldset-group</code> 组织多个字段集。
      </p>

      <div class="fieldset-group">
        <fieldset class="fieldset">
          <legend class="fieldset-legend">基本信息</legend>
          <div class="fieldset-content">
            <div class="fieldset-item">
              <label>姓名</label>
              <input type="text" class="border rounded px-3 py-2" placeholder="输入姓名" />
            </div>
            <div class="fieldset-item">
              <label>邮箱</label>
              <input type="email" class="border rounded px-3 py-2" placeholder="输入邮箱" />
            </div>
          </div>
        </fieldset>

        <fieldset class="fieldset">
          <legend class="fieldset-legend">联系方式</legend>
          <div class="fieldset-content">
            <div class="fieldset-item">
              <label>手机</label>
              <input type="tel" class="border rounded px-3 py-2" placeholder="输入手机号" />
            </div>
            <div class="fieldset-item">
              <label>电话</label>
              <input type="tel" class="border rounded px-3 py-2" placeholder="输入电话号" />
            </div>
          </div>
        </fieldset>

        <fieldset class="fieldset">
          <legend class="fieldset-legend">地址信息</legend>
          <div class="fieldset-content">
            <div class="fieldset-item">
              <label>地址</label>
              <input type="text" class="border rounded px-3 py-2" placeholder="输入地址" />
            </div>
          </div>
        </fieldset>
      </div>
    </DocsSection>

    <!-- 显示模式 -->
    <DocsSection title="显示模式">
      <p class="text-sm text-muted-foreground mb-4">不同的视觉展示方式。</p>

      <div class="space-y-6">
        <!-- 默认 -->
        <div>
          <h4 class="font-semibold mb-2">默认（带边框）</h4>
          <fieldset class="fieldset">
            <legend class="fieldset-legend">表单</legend>
            <div class="fieldset-content">
              <div class="fieldset-item">
                <label>输入框</label>
                <input type="text" class="border rounded px-3 py-2" />
              </div>
            </div>
          </fieldset>
        </div>

        <!-- 无边框 -->
        <div>
          <h4 class="font-semibold mb-2">无边框 (fieldset-borderless)</h4>
          <fieldset class="fieldset fieldset-borderless">
            <legend class="fieldset-legend">表单</legend>
            <div class="fieldset-content">
              <div class="fieldset-item">
                <label>输入框</label>
                <input type="text" class="border rounded px-3 py-2" />
              </div>
            </div>
          </fieldset>
        </div>

        <!-- 幽灵模式 -->
        <div>
          <h4 class="font-semibold mb-2">幽灵模式 (fieldset-ghost)</h4>
          <fieldset class="fieldset fieldset-ghost">
            <legend class="fieldset-legend">表单</legend>
            <div class="fieldset-content">
              <div class="fieldset-item">
                <label>输入框</label>
                <input type="text" class="border rounded px-3 py-2" />
              </div>
            </div>
          </fieldset>
        </div>

        <!-- 带阴影 -->
        <div>
          <h4 class="font-semibold mb-2">带阴影 (fieldset-shadow)</h4>
          <fieldset class="fieldset fieldset-shadow">
            <legend class="fieldset-legend">表单</legend>
            <div class="fieldset-content">
              <div class="fieldset-item">
                <label>输入框</label>
                <input type="text" class="border rounded px-3 py-2" />
              </div>
            </div>
          </fieldset>
        </div>
      </div>
    </DocsSection>

    <!-- 必填和可选指示 -->
    <DocsSection title="必填和可选指示">
      <p class="text-sm text-muted-foreground mb-4">使用特殊 class 标记必填和可选字段。</p>

      <div class="space-y-4">
        <!-- 必填 -->
        <fieldset class="fieldset fieldset-required">
          <legend class="fieldset-legend">必填信息</legend>
          <div class="fieldset-content">
            <div class="fieldset-item">
              <label>用户名</label>
              <input type="text" class="border rounded px-3 py-2" placeholder="输入用户名" />
            </div>
          </div>
        </fieldset>

        <!-- 可选 -->
        <fieldset class="fieldset fieldset-optional">
          <legend class="fieldset-legend">附加信息</legend>
          <div class="fieldset-content">
            <div class="fieldset-item">
              <label>备注</label>
              <textarea class="border rounded px-3 py-2" placeholder="输入备注信息"></textarea>
            </div>
          </div>
        </fieldset>
      </div>
    </DocsSection>

    <!-- 状态示例 -->
    <DocsSection title="状态示例">
      <p class="text-sm text-muted-foreground mb-4">显示不同的字段集状态。</p>

      <div class="space-y-4">
        <!-- 错误状态 -->
        <fieldset class="fieldset fieldset-error">
          <legend class="fieldset-legend">错误信息</legend>
          <p class="fieldset-description text-destructive">请修正以下错误</p>
          <div class="fieldset-content">
            <div class="fieldset-item">
              <label>邮箱</label>
              <input
                type="email"
                class="border rounded px-3 py-2 border-destructive"
                value="invalid-email"
              />
              <p class="text-destructive text-sm mt-1">请输入有效的邮箱地址</p>
            </div>
          </div>
        </fieldset>

        <!-- 禁用状态 -->
        <fieldset class="fieldset fieldset-disabled">
          <legend class="fieldset-legend">禁用表单</legend>
          <div class="fieldset-content">
            <div class="fieldset-item">
              <label>输入框</label>
              <input
                type="text"
                class="border rounded px-3 py-2"
                placeholder="此字段已禁用"
                disabled
              />
            </div>
          </div>
        </fieldset>
      </div>
    </DocsSection>

    <!-- 步骤指示器 -->
    <DocsSection title="步骤指示器">
      <p class="text-sm text-muted-foreground mb-4">
        使用 <code class="bg-muted px-2 py-1 rounded text-xs">fieldset-step</code> 创建分步骤表单。
      </p>

      <div class="fieldset-group">
        <fieldset class="fieldset fieldset-step fieldset-step-completed" data-step="1">
          <legend class="fieldset-legend">步骤 1：基本信息</legend>
          <div class="fieldset-content">
            <p class="text-sm text-muted-foreground">已完成 ✓</p>
          </div>
        </fieldset>

        <fieldset class="fieldset fieldset-step fieldset-step-active" data-step="2">
          <legend class="fieldset-legend">步骤 2：地址信息</legend>
          <div class="fieldset-content">
            <div class="fieldset-item">
              <label>地址</label>
              <input type="text" class="border rounded px-3 py-2" placeholder="输入地址" />
            </div>
          </div>
        </fieldset>

        <fieldset class="fieldset fieldset-step" data-step="3">
          <legend class="fieldset-legend">步骤 3：确认信息</legend>
          <div class="fieldset-content">
            <p class="text-sm text-muted-foreground">待处理...</p>
          </div>
        </fieldset>
      </div>
    </DocsSection>

    <!-- 可收起字段集 -->
    <DocsSection title="可收起字段集">
      <p class="text-sm text-muted-foreground mb-4">
        使用
        <code class="bg-muted px-2 py-1 rounded text-xs">fieldset-collapsible</code>
        创建可收起的字段集。
      </p>

      <fieldset
        class="fieldset fieldset-collapsible"
        :class="{ 'fieldset-collapsed': collapsedSection }"
      >
        <legend
          class="fieldset-legend cursor-pointer"
          @click="collapsedSection = !collapsedSection"
        >
          更多选项
        </legend>
        <div class="fieldset-content">
          <div class="fieldset-item">
            <label>选项 1</label>
            <input type="text" class="border rounded px-3 py-2" placeholder="输入内容" />
          </div>
          <div class="fieldset-item">
            <label>选项 2</label>
            <input type="text" class="border rounded px-3 py-2" placeholder="输入内容" />
          </div>
          <div class="fieldset-item">
            <label>选项 3</label>
            <input type="text" class="border rounded px-3 py-2" placeholder="输入内容" />
          </div>
        </div>
      </fieldset>
    </DocsSection>

    <!-- 变量定制 -->
    <DocsSection title="变量定制">
      <p class="text-sm text-muted-foreground mb-4">所有字段集样式都由 CSS 变量驱动。</p>

      <div class="bg-muted p-4 rounded-lg">
        <h4 class="font-semibold mb-3">常用变量：</h4>
        <ul class="space-y-2 text-sm">
          <li>
            <code class="bg-background px-2 py-1 rounded"> --fieldset-padding </code>
            - 内边距
          </li>
          <li>
            <code class="bg-background px-2 py-1 rounded"> --fieldset-gap </code>
            - 元素间距
          </li>
          <li>
            <code class="bg-background px-2 py-1 rounded"> --fieldset-legend-font-size </code>
            - 标题字体大小
          </li>
          <li>
            <code class="bg-background px-2 py-1 rounded"> --fieldset-border-radius </code>
            - 圆角
          </li>
          <li>
            <code class="bg-background px-2 py-1 rounded"> --fieldset-border </code>
            - 边框颜色
          </li>
        </ul>
      </div>

      <div class="mt-4 bg-muted p-4 rounded-lg">
        <h4 class="font-semibold mb-3">定制示例：</h4>
        <pre class="text-sm overflow-auto"><code>:root {
  /* 改变内边距 */
  --fieldset-padding: 2rem;
  --fieldset-gap: 1.5rem;
  
  /* 改变标题 */
  --fieldset-legend-font-size: 1.25rem;
  --fieldset-legend-font-weight: 700;
  
  /* 改变圆角 */
  --fieldset-border-radius: 0.5rem;
}</code></pre>
      </div>
    </DocsSection>

    <!-- 最佳实践 -->
    <DocsSection title="最佳实践">
      <div class="space-y-4">
        <div class="border-l-4 border-green-500 pl-4">
          <p class="font-semibold text-green-700 mb-1">✅ 推荐</p>
          <ul class="text-sm space-y-1 text-muted-foreground">
            <li>• 清晰的字段集标题</li>
            <li>• 逻辑相关的字段分组</li>
            <li>• 为复杂表单提供描述</li>
            <li>• 使用颜色变体指示状态</li>
            <li>• 长表单中使用分步骤</li>
          </ul>
        </div>

        <div class="border-l-4 border-red-500 pl-4">
          <p class="font-semibold text-red-700 mb-1">❌ 避免</p>
          <ul class="text-sm space-y-1 text-muted-foreground">
            <li>• 过多嵌套的字段集</li>
            <li>• 不相关字段混在一起</li>
            <li>• 忽视必填/可选标记</li>
            <li>• 太多颜色变体混用</li>
            <li>• 文本过长或格式混乱</li>
          </ul>
        </div>
      </div>
    </DocsSection>
  </DocsContainer>
</template>
