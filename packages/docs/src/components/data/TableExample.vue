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
    className: 'table',
    description: '表格容器。',
    isCategoryStart: true,
  },
  {
    category: '基础结构',
    className: 'table-wrapper',
    description: '表格包装器（用于水平滚动）。',
    isCategoryStart: false,
  },
  {
    category: '基础结构',
    className: 'table-header',
    description: '表头单元格。',
    isCategoryStart: false,
  },
  {
    category: '基础结构',
    className: 'table-row',
    description: '表格行。',
    isCategoryStart: false,
  },
  {
    category: '基础结构',
    className: 'table-cell',
    description: '表格单元格。',
    isCategoryStart: false,
  },

  // 尺寸
  {
    category: '尺寸变体',
    className: 'table-sm',
    description: '小型表格。',
    isCategoryStart: true,
  },
  {
    category: '尺寸变体',
    className: 'table-lg',
    description: '大型表格。',
    isCategoryStart: false,
  },
  {
    category: '尺寸变体',
    className: 'table-compact',
    description: '紧凑表格。',
    isCategoryStart: false,
  },

  // 显示模式
  {
    category: '显示模式',
    className: 'table-borderless',
    description: '无边框模式。',
    isCategoryStart: true,
  },
  {
    category: '显示模式',
    className: 'table-grid',
    description: '网格模式。',
    isCategoryStart: false,
  },
  {
    category: '显示模式',
    className: 'table-striped',
    description: '条纹行。',
    isCategoryStart: false,
  },
  {
    category: '显示模式',
    className: 'table-shadow',
    description: '带阴影。',
    isCategoryStart: false,
  },

  // 颜色
  {
    category: '颜色变体',
    className: 'table-primary',
    description: '主色变体。',
    isCategoryStart: true,
  },
  {
    category: '颜色变体',
    className: 'table-success',
    description: '成功变体。',
    isCategoryStart: false,
  },
  {
    category: '颜色变体',
    className: 'table-warning',
    description: '警告变体。',
    isCategoryStart: false,
  },
  {
    category: '颜色变体',
    className: 'table-danger',
    description: '危险变体。',
    isCategoryStart: false,
  },

  // 行状态
  {
    category: '行状态',
    className: 'table-row-active',
    description: '激活行。',
    isCategoryStart: true,
  },
  {
    category: '行状态',
    className: 'table-row-disabled',
    description: '禁用行。',
    isCategoryStart: false,
  },
  {
    category: '行状态',
    className: 'table-row-success',
    description: '成功行。',
    isCategoryStart: false,
  },
  {
    category: '行状态',
    className: 'table-row-warning',
    description: '警告行。',
    isCategoryStart: false,
  },
  {
    category: '行状态',
    className: 'table-row-danger',
    description: '危险行。',
    isCategoryStart: false,
  },
  {
    category: '行状态',
    className: 'table-row-info',
    description: '信息行。',
    isCategoryStart: false,
  },

  // 单元格
  {
    category: '单元格',
    className: 'table-cell-center',
    description: '居中对齐。',
    isCategoryStart: true,
  },
  {
    category: '单元格',
    className: 'table-cell-right',
    description: '右对齐。',
    isCategoryStart: false,
  },
  {
    category: '单元格',
    className: 'table-cell-mono',
    description: '等宽字体。',
    isCategoryStart: false,
  },
  {
    category: '单元格',
    className: 'table-cell-highlight',
    description: '强调单元格。',
    isCategoryStart: false,
  },

  // 特殊功能
  {
    category: '特殊功能',
    className: 'table-sortable',
    description: '可排序列。',
    isCategoryStart: true,
  },
  {
    category: '特殊功能',
    className: 'table-sticky-header',
    description: '粘性表头。',
    isCategoryStart: false,
  },
  {
    category: '特殊功能',
    className: 'table-sticky-column',
    description: '粘性列。',
    isCategoryStart: false,
  },
  {
    category: '特殊功能',
    className: 'table-responsive',
    description: '响应式表格。',
    isCategoryStart: false,
  },
]

const selectedRows = ref<Set<number>>(new Set())

const users = [
  { id: 1, name: '张三', email: 'zhangsan@example.com', status: '活跃', salary: 15000 },
  { id: 2, name: '李四', email: 'lisi@example.com', status: '活跃', salary: 18000 },
  { id: 3, name: '王五', email: 'wangwu@example.com', status: 'inactive', salary: 16000 },
  { id: 4, name: '赵六', email: 'zhaoliu@example.com', status: '活跃', salary: 20000 },
]

const toggleRow = (id: number) => {
  if (selectedRows.value.has(id)) {
    selectedRows.value.delete(id)
  } else {
    selectedRows.value.add(id)
  }
}
</script>

<template>
  <DocsContainer>
    <!-- 页面头部 -->
    <DocsHeader
      title="Table 表格"
      description="灵活的数据表格组件。支持多种配色、尺寸、边框与功能增强。适用于数据展示、数据管理、报表等场景。"
    />

    <!-- API 参考 -->
    <ApiReference :data="apiClasses" />

    <!-- 基础表格 -->
    <DocsSection title="基础表格">
      <p class="text-sm text-muted-foreground mb-4">最简单的表格实现。</p>

      <div class="table-wrapper">
        <table class="table">
          <thead>
            <tr>
              <th class="table-header">姓名</th>
              <th class="table-header">邮箱</th>
              <th class="table-header">状态</th>
              <th class="table-header table-cell-right">薪资</th>
            </tr>
          </thead>
          <tbody>
            <tr class="table-row" v-for="user in users" :key="user.id">
              <td class="table-cell">{{ user.name }}</td>
              <td class="table-cell">{{ user.email }}</td>
              <td class="table-cell">{{ user.status }}</td>
              <td class="table-cell table-cell-right">¥{{ user.salary }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </DocsSection>

    <!-- 尺寸变体 -->
    <DocsSection title="尺寸变体">
      <p class="text-sm text-muted-foreground mb-4">支持小型、默认和大型三种尺寸。</p>

      <div class="space-y-6">
        <div>
          <h4 class="font-semibold mb-2">小型 (table-sm)</h4>
          <div class="table-wrapper">
            <table class="table table-sm">
              <thead>
                <tr>
                  <th class="table-header">名称</th>
                  <th class="table-header">类型</th>
                  <th class="table-header table-cell-right">大小</th>
                </tr>
              </thead>
              <tbody>
                <tr class="table-row">
                  <td class="table-cell">文件1.txt</td>
                  <td class="table-cell">文本</td>
                  <td class="table-cell table-cell-right">1.2 MB</td>
                </tr>
                <tr class="table-row">
                  <td class="table-cell">文件2.pdf</td>
                  <td class="table-cell">文档</td>
                  <td class="table-cell table-cell-right">2.5 MB</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <h4 class="font-semibold mb-2">大型 (table-lg)</h4>
          <div class="table-wrapper">
            <table class="table table-lg">
              <thead>
                <tr>
                  <th class="table-header">名称</th>
                  <th class="table-header">类型</th>
                  <th class="table-header table-cell-right">大小</th>
                </tr>
              </thead>
              <tbody>
                <tr class="table-row">
                  <td class="table-cell">文件1.txt</td>
                  <td class="table-cell">文本</td>
                  <td class="table-cell table-cell-right">1.2 MB</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </DocsSection>

    <!-- 显示模式 -->
    <DocsSection title="显示模式">
      <p class="text-sm text-muted-foreground mb-4">不同的视觉展示方式。</p>

      <div class="space-y-6">
        <div>
          <h4 class="font-semibold mb-2">条纹行 (table-striped)</h4>
          <div class="table-wrapper">
            <table class="table table-striped">
              <thead>
                <tr>
                  <th class="table-header">ID</th>
                  <th class="table-header">项目</th>
                  <th class="table-header table-cell-right">数值</th>
                </tr>
              </thead>
              <tbody>
                <tr class="table-row">
                  <td class="table-cell">1</td>
                  <td class="table-cell">项目 A</td>
                  <td class="table-cell table-cell-right">100</td>
                </tr>
                <tr class="table-row">
                  <td class="table-cell">2</td>
                  <td class="table-cell">项目 B</td>
                  <td class="table-cell table-cell-right">200</td>
                </tr>
                <tr class="table-row">
                  <td class="table-cell">3</td>
                  <td class="table-cell">项目 C</td>
                  <td class="table-cell table-cell-right">300</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <h4 class="font-semibold mb-2">网格模式 (table-grid)</h4>
          <div class="table-wrapper">
            <table class="table table-grid">
              <thead>
                <tr>
                  <th class="table-header">姓名</th>
                  <th class="table-header">职位</th>
                  <th class="table-header">部门</th>
                </tr>
              </thead>
              <tbody>
                <tr class="table-row">
                  <td class="table-cell">张三</td>
                  <td class="table-cell">经理</td>
                  <td class="table-cell">技术</td>
                </tr>
                <tr class="table-row">
                  <td class="table-cell">李四</td>
                  <td class="table-cell">工程师</td>
                  <td class="table-cell">技术</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <h4 class="font-semibold mb-2">带阴影 (table-shadow)</h4>
          <div class="table-wrapper">
            <table class="table table-shadow">
              <thead>
                <tr>
                  <th class="table-header">名称</th>
                  <th class="table-header">状态</th>
                  <th class="table-header">操作</th>
                </tr>
              </thead>
              <tbody>
                <tr class="table-row">
                  <td class="table-cell">表格</td>
                  <td class="table-cell">✓ 有效</td>
                  <td class="table-cell">编辑</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </DocsSection>

    <!-- 颜色变体 -->
    <DocsSection title="颜色变体">
      <p class="text-sm text-muted-foreground mb-4">使用不同的颜色主题。</p>

      <div class="grid gap-6 md:grid-cols-2">
        <div>
          <h4 class="font-semibold mb-2">主色 (table-primary)</h4>
          <div class="table-wrapper">
            <table class="table table-primary">
              <thead>
                <tr>
                  <th class="table-header">ID</th>
                  <th class="table-header">名称</th>
                </tr>
              </thead>
              <tbody>
                <tr class="table-row">
                  <td class="table-cell">1</td>
                  <td class="table-cell">项目 A</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <h4 class="font-semibold mb-2">成功 (table-success)</h4>
          <div class="table-wrapper">
            <table class="table table-success">
              <thead>
                <tr>
                  <th class="table-header">任务</th>
                  <th class="table-header">结果</th>
                </tr>
              </thead>
              <tbody>
                <tr class="table-row">
                  <td class="table-cell">部署</td>
                  <td class="table-cell">✓ 成功</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <h4 class="font-semibold mb-2">警告 (table-warning)</h4>
          <div class="table-wrapper">
            <table class="table table-warning">
              <thead>
                <tr>
                  <th class="table-header">告警</th>
                  <th class="table-header">级别</th>
                </tr>
              </thead>
              <tbody>
                <tr class="table-row">
                  <td class="table-cell">CPU 高</td>
                  <td class="table-cell">⚠️ 警告</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <h4 class="font-semibold mb-2">危险 (table-danger)</h4>
          <div class="table-wrapper">
            <table class="table table-danger">
              <thead>
                <tr>
                  <th class="table-header">错误</th>
                  <th class="table-header">状态</th>
                </tr>
              </thead>
              <tbody>
                <tr class="table-row">
                  <td class="table-cell">连接失败</td>
                  <td class="table-cell">❌ 失败</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </DocsSection>

    <!-- 行状态 -->
    <DocsSection title="行状态">
      <p class="text-sm text-muted-foreground mb-4">使用 class 标记行的不同状态。</p>

      <div class="table-wrapper">
        <table class="table">
          <thead>
            <tr>
              <th class="table-header">ID</th>
              <th class="table-header">描述</th>
              <th class="table-header">Class</th>
            </tr>
          </thead>
          <tbody>
            <tr class="table-row">
              <td class="table-cell">1</td>
              <td class="table-cell">正常行</td>
              <td class="table-cell">默认</td>
            </tr>
            <tr class="table-row table-row-active">
              <td class="table-cell">2</td>
              <td class="table-cell">激活行</td>
              <td class="table-cell">table-row-active</td>
            </tr>
            <tr class="table-row table-row-success">
              <td class="table-cell">3</td>
              <td class="table-cell">成功行</td>
              <td class="table-cell">table-row-success</td>
            </tr>
            <tr class="table-row table-row-warning">
              <td class="table-cell">4</td>
              <td class="table-cell">警告行</td>
              <td class="table-cell">table-row-warning</td>
            </tr>
            <tr class="table-row table-row-danger">
              <td class="table-cell">5</td>
              <td class="table-cell">危险行</td>
              <td class="table-cell">table-row-danger</td>
            </tr>
            <tr class="table-row table-row-disabled">
              <td class="table-cell">6</td>
              <td class="table-cell">禁用行</td>
              <td class="table-cell">table-row-disabled</td>
            </tr>
          </tbody>
        </table>
      </div>
    </DocsSection>

    <!-- 可选择行 -->
    <DocsSection title="可选择行">
      <p class="text-sm text-muted-foreground mb-4">点击行进行选择。</p>

      <div class="table-wrapper">
        <table class="table">
          <thead>
            <tr>
              <th class="table-header" style="width: 50px">选择</th>
              <th class="table-header">姓名</th>
              <th class="table-header">邮箱</th>
              <th class="table-header">状态</th>
            </tr>
          </thead>
          <tbody>
            <tr
              class="table-row table-row-selectable"
              :class="{ selected: selectedRows.has(user.id) }"
              v-for="user in users"
              :key="user.id"
              @click="toggleRow(user.id)"
            >
              <td class="table-cell" style="width: 50px">
                <input type="checkbox" :checked="selectedRows.has(user.id)" />
              </td>
              <td class="table-cell">{{ user.name }}</td>
              <td class="table-cell">{{ user.email }}</td>
              <td class="table-cell">{{ user.status }}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p class="text-sm text-muted-foreground mt-4">已选择 {{ selectedRows.size }} 行</p>
    </DocsSection>

    <!-- 变量定制 -->
    <DocsSection title="变量定制">
      <p class="text-sm text-muted-foreground mb-4">所有表格样式都由 CSS 变量驱动。</p>

      <div class="bg-muted p-4 rounded-lg">
        <h4 class="font-semibold mb-3">常用变量：</h4>
        <ul class="space-y-2 text-sm">
          <li>
            <code class="bg-background px-2 py-1 rounded"> --table-padding-x </code>
            - 水平内边距
          </li>
          <li>
            <code class="bg-background px-2 py-1 rounded"> --table-padding-y </code>
            - 竖直内边距
          </li>
          <li>
            <code class="bg-background px-2 py-1 rounded"> --table-header-bg </code>
            - 表头背景色
          </li>
          <li>
            <code class="bg-background px-2 py-1 rounded"> --table-row-bg-hover </code>
            - 行悬停背景色
          </li>
          <li>
            <code class="bg-background px-2 py-1 rounded"> --table-border </code>
            - 边框颜色
          </li>
        </ul>
      </div>

      <div class="mt-4 bg-muted p-4 rounded-lg">
        <h4 class="font-semibold mb-3">定制示例：</h4>
        <pre class="text-sm overflow-auto"><code>:root {
  /* 改变内边距 */
  --table-padding-x: 1.25rem;
  --table-padding-y: 1rem;
  
  /* 改变颜色 */
  --table-header-bg: var(--primary);
  --table-border: var(--primary);
  
  /* 改变字体大小 */
  --table-text-size: 1rem;
}</code></pre>
      </div>
    </DocsSection>

    <!-- 最佳实践 -->
    <DocsSection title="最佳实践">
      <div class="space-y-4">
        <div class="border-l-4 border-green-500 pl-4">
          <p class="font-semibold text-green-700 mb-1">✅ 推荐</p>
          <ul class="text-sm space-y-1 text-muted-foreground">
            <li>• 使用清晰的列标题</li>
            <li>• 为数值列使用右对齐</li>
            <li>• 提供排序和筛选功能</li>
            <li>• 使用条纹行改善可读性</li>
            <li>• 为大型表格提供分页</li>
            <li>• 在表头使用不同的背景色区分</li>
          </ul>
        </div>

        <div class="border-l-4 border-red-500 pl-4">
          <p class="font-semibold text-red-700 mb-1">❌ 避免</p>
          <ul class="text-sm space-y-1 text-muted-foreground">
            <li>• 列太多导致水平滚动</li>
            <li>• 文本过长难以阅读</li>
            <li>• 颜色使用过多</li>
            <li>• 隐藏重要信息</li>
            <li>• 行数过多无分页</li>
            <li>• 样式过于复杂</li>
          </ul>
        </div>
      </div>
    </DocsSection>
  </DocsContainer>
</template>
