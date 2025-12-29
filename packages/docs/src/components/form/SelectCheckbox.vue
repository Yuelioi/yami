<script setup lang="ts">
import DocsHeader from '../zcomp/DocsHeader.vue'
import DocsSection from '../zcomp/DocsSection.vue'
import ApiReference from '../zcomp/ApiReference.vue'
import DocsContainer from '../zcomp/DocsContainer.vue'

const apiClasses = [
  // === 基础 ===
  {
    category: '基础',
    className: 'select-checkbox',
    description: '多选下拉主容器，支持滚动与焦点高亮。',
    isCategoryStart: true,
  },
  {
    category: '基础',
    className: 'select-checkbox-item',
    description: '单个多选项结构（checkbox + 文本）。',
    isCategoryStart: false,
  },

  // === 分组 ===
  {
    category: '分组',
    className: 'select-checkbox-group',
    description: '一组多选项容器。',
    isCategoryStart: true,
  },
  {
    category: '分组',
    className: 'select-checkbox-group-title',
    description: '分组标题样式。',
    isCategoryStart: false,
  },

  // === 扩展功能 ===
  {
    category: '扩展',
    className: 'select-checkbox-with-all',
    description: '带全选功能的容器。',
    isCategoryStart: true,
  },
  {
    category: '扩展',
    className: 'select-checkbox-tags',
    description: '已选择标签的展示容器。',
    isCategoryStart: false,
  },
  {
    category: '扩展',
    className: 'select-checkbox-empty',
    description: '空状态显示。',
    isCategoryStart: false,
  },

  // === 颜色变体 ===
  {
    category: '颜色变体',
    className: 'select-checkbox-primary',
    description: '主色高亮（Primary）。',
    isCategoryStart: true,
  },
  {
    category: '颜色变体',
    className: 'select-checkbox-secondary',
    description: '次色高亮（Secondary）。',
    isCategoryStart: false,
  },
  {
    category: '颜色变体',
    className: 'select-checkbox-accent',
    description: '强调色高亮（Accent）。',
    isCategoryStart: false,
  },
  {
    category: '颜色变体',
    className: 'select-checkbox-destructive',
    description: '危险色高亮（Destructive）。',
    isCategoryStart: false,
  },

  // === 尺寸 ===
  {
    category: '尺寸',
    className: 'select-checkbox-sm',
    description: '小号尺寸，多选项更紧凑。',
    isCategoryStart: true,
  },
  {
    category: '尺寸',
    className: 'select-checkbox-lg',
    description: '大号尺寸，多选项加大。',
    isCategoryStart: false,
  },

  // === 修饰类 ===
  {
    category: '修饰类',
    className: 'select-checkbox-ghost',
    description: '透明风格，悬停时才显示背景。',
    isCategoryStart: true,
  },
  {
    category: '修饰类',
    className: 'select-checkbox-bordered',
    description: '加粗边框风格。',
    isCategoryStart: false,
  },
  {
    category: '修饰类',
    className: 'select-checkbox-borderless',
    description: '无边框样式。',
    isCategoryStart: false,
  },
]
</script>

<template>
  <DocsContainer>
    <DocsHeader
      title="Select Checkbox 多选下拉组件"
      description="用于多选场景的下拉选择组件，支持分组、全选、标签展示、嵌套与多种状态样式。"
    />

    <ApiReference :data="apiClasses" />

    <!-- 基础示例 -->
    <DocsSection title="基础示例">
      <div class="max-w-sm space-y-4">
        <div class="select-checkbox">
          <label class="select-checkbox-item">
            <input type="checkbox" />
            <span>选项 A</span>
          </label>
          <label class="select-checkbox-item">
            <input type="checkbox" />
            <span>选项 B</span>
          </label>
          <label class="select-checkbox-item">
            <input type="checkbox" disabled />
            <span>禁用选项</span>
          </label>
        </div>
      </div>
    </DocsSection>

    <!-- 颜色变体 -->
    <DocsSection title="颜色变体">
      <div class="max-w-sm space-y-4">
        <div class="select-checkbox select-checkbox-primary">
          <label class="select-checkbox-item">
            <input type="checkbox" checked />
            <span>Primary</span>
          </label>
        </div>

        <div class="select-checkbox select-checkbox-secondary">
          <label class="select-checkbox-item">
            <input type="checkbox" />
            <span>Secondary</span>
          </label>
        </div>

        <div class="select-checkbox select-checkbox-accent">
          <label class="select-checkbox-item">
            <input type="checkbox" />
            <span>Accent</span>
          </label>
        </div>

        <div class="select-checkbox select-checkbox-destructive">
          <label class="select-checkbox-item">
            <input type="checkbox" checked />
            <span>Destructive</span>
          </label>
        </div>
      </div>
    </DocsSection>

    <!-- 尺寸示例 -->
    <DocsSection title="尺寸">
      <div class="max-w-sm space-y-4">
        <div class="select-checkbox select-checkbox-sm">
          <label class="select-checkbox-item">
            <input type="checkbox" />
            <span>小尺寸</span>
          </label>
        </div>

        <div class="select-checkbox select-checkbox-lg">
          <label class="select-checkbox-item">
            <input type="checkbox" />
            <span>大尺寸</span>
          </label>
        </div>
      </div>
    </DocsSection>

    <!-- 修饰类示例 -->
    <DocsSection title="修饰类示例">
      <div class="max-w-sm space-y-4">
        <div class="select-checkbox select-checkbox-ghost">
          <label class="select-checkbox-item">
            <input type="checkbox" />
            <span>Ghost 样式</span>
          </label>
        </div>

        <div class="select-checkbox select-checkbox-bordered">
          <label class="select-checkbox-item">
            <input type="checkbox" />
            <span>加粗边框</span>
          </label>
        </div>

        <div class="select-checkbox select-checkbox-borderless">
          <label class="select-checkbox-item">
            <input type="checkbox" />
            <span>无边框样式</span>
          </label>
        </div>
      </div>
    </DocsSection>

    <!-- 分组示例 -->
    <DocsSection title="分组示例">
      <div class="max-w-sm space-y-4">
        <div class="select-checkbox">
          <div class="select-checkbox-group">
            <div class="select-checkbox-group-title">组 1</div>
            <label class="select-checkbox-item">
              <input type="checkbox" />
              <span>选项 A</span>
            </label>
            <label class="select-checkbox-item">
              <input type="checkbox" />
              <span>选项 B</span>
            </label>
          </div>

          <div class="select-checkbox-group">
            <div class="select-checkbox-group-title">组 2</div>
            <label class="select-checkbox-item">
              <input type="checkbox" />
              <span>选项 C</span>
            </label>
            <label class="select-checkbox-item">
              <input type="checkbox" disabled />
              <span>禁用选项</span>
            </label>
          </div>
        </div>
      </div>
    </DocsSection>

    <!-- 带全选示例 -->
    <DocsSection title="带全选">
      <div class="max-w-sm">
        <div class="select-checkbox-with-all">
          <label class="select-checkbox-all">
            <input type="checkbox" />
            <span>全选</span>
          </label>

          <div class="select-checkbox-items">
            <label class="select-checkbox-item">
              <input type="checkbox" />
              <span>选项 A</span>
            </label>
            <label class="select-checkbox-item">
              <input type="checkbox" checked />
              <span>选项 B</span>
            </label>
            <label class="select-checkbox-item">
              <input type="checkbox" />
              <span>选项 C</span>
            </label>
          </div>
        </div>
      </div>
    </DocsSection>

    <!-- 标签展示示例 -->
    <DocsSection title="标签展示（已选择项）">
      <div class="max-w-sm">
        <div class="select-checkbox-tags">
          <span class="tag">
            选项 A
            <button>×</button>
          </span>
          <span class="tag">
            选项 B
            <button>×</button>
          </span>
        </div>
      </div>
    </DocsSection>

    <!-- 空状态 -->
    <DocsSection title="空状态">
      <div class="select-checkbox-empty max-w-sm">暂无可选项</div>
    </DocsSection>
  </DocsContainer>
</template>
