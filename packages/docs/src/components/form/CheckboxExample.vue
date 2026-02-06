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
    className: 'checkbox',
    description: '基础复选框输入框。',
    isCategoryStart: true,
  },
  {
    category: '基础',
    className: 'checkbox-label',
    description: '复选框标签容器。',
    isCategoryStart: false,
  },
  {
    category: '基础',
    className: 'checkbox-text',
    description: '复选框文本标签。',
    isCategoryStart: false,
  },
  {
    category: '基础',
    className: 'checkbox-description',
    description: '复选框描述文本。',
    isCategoryStart: false,
  },

  // 尺寸
  {
    category: '尺寸变体',
    className: 'checkbox-sm',
    description: '小型复选框。',
    isCategoryStart: true,
  },
  {
    category: '尺寸变体',
    className: 'checkbox-lg',
    description: '大型复选框。',
    isCategoryStart: false,
  },

  // 颜色
  {
    category: '颜色变体',
    className: 'checkbox-primary',
    description: '主色变体。',
    isCategoryStart: true,
  },
  {
    category: '颜色变体',
    className: 'checkbox-success',
    description: '成功变体。',
    isCategoryStart: false,
  },
  {
    category: '颜色变体',
    className: 'checkbox-warning',
    description: '警告变体。',
    isCategoryStart: false,
  },
  {
    category: '颜色变体',
    className: 'checkbox-danger',
    description: '危险变体。',
    isCategoryStart: false,
  },

  // 组
  {
    category: '复选框组',
    className: 'checkbox-group',
    description: '复选框组容器。',
    isCategoryStart: true,
  },
  {
    category: '复选框组',
    className: 'checkbox-group-title',
    description: '复选框组标题。',
    isCategoryStart: false,
  },
  {
    category: '复选框组',
    className: 'checkbox-group-item',
    description: '复选框组项。',
    isCategoryStart: false,
  },
  {
    category: '复选框组',
    className: 'checkbox-group-compact',
    description: '紧凑布局。',
    isCategoryStart: false,
  },
  {
    category: '复选框组',
    className: 'checkbox-group-row',
    description: '行布局。',
    isCategoryStart: false,
  },

  // 特殊
  {
    category: '特殊样式',
    className: 'checkbox-rounded',
    description: '圆形复选框。',
    isCategoryStart: true,
  },
  {
    category: '特殊样式',
    className: 'checkbox-card',
    description: '卡片复选框。',
    isCategoryStart: false,
  },
  {
    category: '特殊样式',
    className: 'checkbox-switch',
    description: '开关风格复选框。',
    isCategoryStart: false,
  },
  {
    category: '特殊样式',
    className: 'checkbox-pulse',
    description: '脉冲动画。',
    isCategoryStart: false,
  },
]

const selected = ref<string[]>([])
const allChecked = ref(false)
const indeterminate = ref(false)
</script>

<template>
  <DocsContainer>
    <!-- 页面头部 -->
    <DocsHeader
      title="Checkbox 复选框"
      description="灵活的复选框组件。支持多种尺寸、颜色、样式和特殊效果。适用于表单、选项列表、多选筛选等场景。"
    />

    <!-- API 参考 -->
    <ApiReference :data="apiClasses" />

    <!-- 基础用法 -->
    <DocsSection title="基础用法">
      <p class="text-sm text-muted-foreground mb-4">最简单的复选框实现。</p>

      <div class="flex items-center gap-4">
        <label class="checkbox-label">
          <input type="checkbox" class="checkbox" />
          <span class="checkbox-text">记住密码</span>
        </label>

        <label class="checkbox-label">
          <input type="checkbox" class="checkbox" checked />
          <span class="checkbox-text">已同意条款</span>
        </label>

        <label class="checkbox-label">
          <input type="checkbox" class="checkbox" disabled />
          <span class="checkbox-text">已禁用</span>
        </label>
      </div>
    </DocsSection>

    <!-- 带描述的复选框 -->
    <DocsSection title="带描述的复选框">
      <p class="text-sm text-muted-foreground mb-4">
        使用 <code class="bg-muted px-2 py-1 rounded text-xs">checkbox-description</code> 添加描述。
      </p>

      <div class="space-y-3">
        <label class="checkbox-label">
          <input type="checkbox" class="checkbox" />
          <div class="checkbox-text">
            <span>接收电子邮件</span>
            <p class="checkbox-description">我们将发送重要的更新通知</p>
          </div>
        </label>

        <label class="checkbox-label">
          <input type="checkbox" class="checkbox" checked />
          <div class="checkbox-text">
            <span>接收短信提醒</span>
            <p class="checkbox-description">为您提供实时的订单和活动提醒</p>
          </div>
        </label>

        <label class="checkbox-label">
          <input type="checkbox" class="checkbox" />
          <div class="checkbox-text">
            <span>接收推送通知</span>
            <p class="checkbox-description">在应用上接收及时消息</p>
          </div>
        </label>
      </div>
    </DocsSection>

    <!-- 尺寸变体 -->
    <DocsSection title="尺寸变体">
      <p class="text-sm text-muted-foreground mb-4">支持小型、默认和大型三种尺寸。</p>

      <div class="space-y-4">
        <!-- 小型 -->
        <div>
          <h4 class="font-semibold mb-2">小型 (checkbox-sm)</h4>
          <label class="checkbox-label">
            <input type="checkbox" class="checkbox checkbox-sm" />
            <span class="checkbox-text">小型复选框</span>
          </label>
        </div>

        <!-- 默认 -->
        <div>
          <h4 class="font-semibold mb-2">默认尺寸</h4>
          <label class="checkbox-label">
            <input type="checkbox" class="checkbox" />
            <span class="checkbox-text">默认复选框</span>
          </label>
        </div>

        <!-- 大型 -->
        <div>
          <h4 class="font-semibold mb-2">大型 (checkbox-lg)</h4>
          <label class="checkbox-label">
            <input type="checkbox" class="checkbox checkbox-lg" />
            <span class="checkbox-text">大型复选框</span>
          </label>
        </div>
      </div>
    </DocsSection>

    <!-- 颜色变体 -->
    <DocsSection title="颜色变体">
      <p class="text-sm text-muted-foreground mb-4">使用不同的颜色主题。</p>

      <div class="grid gap-4 md:grid-cols-2">
        <!-- 主色 -->
        <label class="checkbox-label">
          <input type="checkbox" class="checkbox checkbox-primary" checked />
          <span class="checkbox-text">主色变体</span>
        </label>

        <!-- 成功 -->
        <label class="checkbox-label">
          <input type="checkbox" class="checkbox checkbox-success" checked />
          <span class="checkbox-text">成功变体</span>
        </label>

        <!-- 警告 -->
        <label class="checkbox-label">
          <input type="checkbox" class="checkbox checkbox-warning" checked />
          <span class="checkbox-text">警告变体</span>
        </label>

        <!-- 危险 -->
        <label class="checkbox-label">
          <input type="checkbox" class="checkbox checkbox-danger" checked />
          <span class="checkbox-text">危险变体</span>
        </label>
      </div>
    </DocsSection>

    <!-- 复选框组 -->
    <DocsSection title="复选框组">
      <p class="text-sm text-muted-foreground mb-4">
        使用 <code class="bg-muted px-2 py-1 rounded text-xs">checkbox-group</code> 组织复选框。
      </p>

      <div class="checkbox-group">
        <h4 class="checkbox-group-title">选择您感兴趣的主题</h4>

        <label class="checkbox-label">
          <input type="checkbox" class="checkbox" />
          <span class="checkbox-text">前端开发</span>
        </label>

        <label class="checkbox-label">
          <input type="checkbox" class="checkbox" checked />
          <span class="checkbox-text">后端开发</span>
        </label>

        <label class="checkbox-label">
          <input type="checkbox" class="checkbox" />
          <span class="checkbox-text">数据分析</span>
        </label>

        <label class="checkbox-label">
          <input type="checkbox" class="checkbox" checked />
          <span class="checkbox-text">机器学习</span>
        </label>
      </div>
    </DocsSection>

    <!-- 行布局 -->
    <DocsSection title="行布局">
      <p class="text-sm text-muted-foreground mb-4">
        使用 <code class="bg-muted px-2 py-1 rounded text-xs">checkbox-group-row</code> 水平排列。
      </p>

      <div class="checkbox-group checkbox-group-row">
        <label class="checkbox-label">
          <input type="checkbox" class="checkbox" />
          <span class="checkbox-text">选项 1</span>
        </label>

        <label class="checkbox-label">
          <input type="checkbox" class="checkbox" checked />
          <span class="checkbox-text">选项 2</span>
        </label>

        <label class="checkbox-label">
          <input type="checkbox" class="checkbox" />
          <span class="checkbox-text">选项 3</span>
        </label>

        <label class="checkbox-label">
          <input type="checkbox" class="checkbox" />
          <span class="checkbox-text">选项 4</span>
        </label>
      </div>
    </DocsSection>

    <!-- 紧凑布局 -->
    <DocsSection title="紧凑布局">
      <p class="text-sm text-muted-foreground mb-4">
        使用
        <code class="bg-muted px-2 py-1 rounded text-xs">checkbox-group-compact</code> 减少间距。
      </p>

      <div class="checkbox-group checkbox-group-compact">
        <h4 class="checkbox-group-title">权限设置</h4>

        <label class="checkbox-label">
          <input type="checkbox" class="checkbox" checked />
          <span class="checkbox-text">读取</span>
        </label>

        <label class="checkbox-label">
          <input type="checkbox" class="checkbox" checked />
          <span class="checkbox-text">写入</span>
        </label>

        <label class="checkbox-label">
          <input type="checkbox" class="checkbox" />
          <span class="checkbox-text">删除</span>
        </label>

        <label class="checkbox-label">
          <input type="checkbox" class="checkbox" />
          <span class="checkbox-text">管理</span>
        </label>
      </div>
    </DocsSection>

    <!-- 不确定状态 -->
    <DocsSection title="不确定状态">
      <p class="text-sm text-muted-foreground mb-4">
        使用
        <code class="bg-muted px-2 py-1 rounded text-xs">indeterminate</code> 属性表示部分选中。
      </p>

      <div class="space-y-3">
        <label class="checkbox-label">
          <input
            type="checkbox"
            class="checkbox"
            :checked="allChecked"
            :indeterminate="indeterminate"
            @change="
              (e) => {
                allChecked = e.target.checked
                if (allChecked) selected = ['1', '2', '3']
                else selected = []
                indeterminate = false
              }
            "
          />
          <span class="checkbox-text">全选</span>
        </label>

        <div class="ml-4 space-y-2">
          <label class="checkbox-label">
            <input
              type="checkbox"
              class="checkbox"
              value="1"
              @change="
                (e) => {
                  if (e.target.checked) selected.push('1')
                  else selected = selected.filter((s) => s !== '1')

                  indeterminate = selected.length > 0 && selected.length < 3
                  allChecked = selected.length === 3
                }
              "
            />
            <span class="checkbox-text">项目 1</span>
          </label>

          <label class="checkbox-label">
            <input
              type="checkbox"
              class="checkbox"
              value="2"
              @change="
                (e) => {
                  if (e.target.checked) selected.push('2')
                  else selected = selected.filter((s) => s !== '2')

                  indeterminate = selected.length > 0 && selected.length < 3
                  allChecked = selected.length === 3
                }
              "
            />
            <span class="checkbox-text">项目 2</span>
          </label>

          <label class="checkbox-label">
            <input
              type="checkbox"
              class="checkbox"
              value="3"
              @change="
                (e) => {
                  if (e.target.checked) selected.push('3')
                  else selected = selected.filter((s) => s !== '3')

                  indeterminate = selected.length > 0 && selected.length < 3
                  allChecked = selected.length === 3
                }
              "
            />
            <span class="checkbox-text">项目 3</span>
          </label>
        </div>
      </div>
    </DocsSection>

    <!-- 特殊样式 -->
    <DocsSection title="特殊样式">
      <p class="text-sm text-muted-foreground mb-4">不同的复选框样式。</p>

      <div class="space-y-6">
        <!-- 圆形 -->
        <div>
          <h4 class="font-semibold mb-2">圆形复选框 (checkbox-rounded)</h4>
          <label class="checkbox-label">
            <input type="checkbox" class="checkbox checkbox-rounded" checked />
            <span class="checkbox-text">圆形样式</span>
          </label>
        </div>

        <!-- 开关风格 -->
        <div>
          <h4 class="font-semibold mb-2">开关风格 (checkbox-switch)</h4>
          <label class="checkbox-label">
            <input type="checkbox" class="checkbox checkbox-switch" />
            <span class="checkbox-text">启用功能</span>
          </label>
        </div>

        <!-- 卡片风格 -->
        <div>
          <h4 class="font-semibold mb-2">卡片风格 (checkbox-card)</h4>
          <div class="space-y-2">
            <label class="block cursor-pointer">
              <input type="checkbox" class="checkbox-card hidden" id="card1" />
              <div
                class="flex items-center justify-between p-4 border rounded"
                @click="document.getElementById('card1').click()"
              >
                <span class="font-medium">选项 1</span>
                <span class="text-sm text-muted-foreground">描述文本</span>
              </div>
            </label>

            <label class="block cursor-pointer">
              <input type="checkbox" class="checkbox-card hidden" id="card2" checked />
              <div
                class="flex items-center justify-between p-4 border rounded bg-primary/10 border-primary"
                @click="document.getElementById('card2').click()"
              >
                <span class="font-medium">选项 2（已选）</span>
                <span class="text-sm text-muted-foreground">描述文本</span>
              </div>
            </label>
          </div>
        </div>
      </div>
    </DocsSection>

    <!-- 禁用状态 -->
    <DocsSection title="禁用状态">
      <p class="text-sm text-muted-foreground mb-4">
        使用 <code class="bg-muted px-2 py-1 rounded text-xs">disabled</code> 禁用复选框。
      </p>

      <div class="space-y-2">
        <label class="checkbox-label">
          <input type="checkbox" class="checkbox" disabled />
          <span class="checkbox-text">禁用未选中</span>
        </label>

        <label class="checkbox-label">
          <input type="checkbox" class="checkbox" disabled checked />
          <span class="checkbox-text">禁用已选中</span>
        </label>

        <label class="checkbox-label checkbox-label-disabled">
          <input type="checkbox" class="checkbox" disabled />
          <span class="checkbox-text">完全禁用标签</span>
        </label>
      </div>
    </DocsSection>

    <!-- 变量定制 -->
    <DocsSection title="变量定制">
      <p class="text-sm text-muted-foreground mb-4">所有复选框样式都由 CSS 变量驱动。</p>

      <div class="bg-muted p-4 rounded-lg">
        <h4 class="font-semibold mb-3">常用变量：</h4>
        <ul class="space-y-2 text-sm">
          <li>
            <code class="bg-background px-2 py-1 rounded"> --checkbox-size </code>
            - 复选框大小
          </li>
          <li>
            <code class="bg-background px-2 py-1 rounded"> --checkbox-border-radius </code>
            - 圆角
          </li>
          <li>
            <code class="bg-background px-2 py-1 rounded"> --checkbox-gap </code>
            - 间距
          </li>
          <li>
            <code class="bg-background px-2 py-1 rounded"> --checkbox-checked-bg </code>
            - 选中背景色
          </li>
          <li>
            <code class="bg-background px-2 py-1 rounded"> --checkbox-label-font-size </code>
            - 标签字体大小
          </li>
        </ul>
      </div>

      <div class="mt-4 bg-muted p-4 rounded-lg">
        <h4 class="font-semibold mb-3">定制示例：</h4>
        <pre class="text-sm overflow-auto"><code>:root {
  /* 改变大小 */
  --checkbox-size: 1.5rem;
  --checkbox-border-radius: 0.25rem;
  
  /* 改变颜色 */
  --checkbox-checked-bg: var(--primary);
  --checkbox-checked-border: var(--primary);
  
  /* 改变间距 */
  --checkbox-gap: 1rem;
  --checkbox-label-font-size: 1.125rem;
}</code></pre>
      </div>
    </DocsSection>

    <!-- 最佳实践 -->
    <DocsSection title="最佳实践">
      <div class="space-y-4">
        <div class="border-l-4 border-green-500 pl-4">
          <p class="font-semibold text-green-700 mb-1">✅ 推荐</p>
          <ul class="text-sm space-y-1 text-muted-foreground">
            <li>• 为每个复选框提供清晰的标签</li>
            <li>• 对相关选项进行分组</li>
            <li>• 提供描述帮助用户理解选项</li>
            <li>• 在大型列表中使用"全选"选项</li>
            <li>• 使用一致的颜色表示相同类型</li>
          </ul>
        </div>

        <div class="border-l-4 border-red-500 pl-4">
          <p class="font-semibold text-red-700 mb-1">❌ 避免</p>
          <ul class="text-sm space-y-1 text-muted-foreground">
            <li>• 标签文本过长或模糊</li>
            <li>• 混淆复选框和单选框</li>
            <li>• 在小屏幕上过度拥挤</li>
            <li>• 使用太多种颜色</li>
            <li>• 隐藏重要的选项描述</li>
          </ul>
        </div>
      </div>
    </DocsSection>
  </DocsContainer>
</template>
