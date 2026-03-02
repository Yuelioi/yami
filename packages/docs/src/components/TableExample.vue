<script setup lang="ts">
import DocsHeader from '@/components/zcomp/DocsHeader.vue'
import DocsSection from '@/components/zcomp/DocsSection.vue'
import ApiReference from '@/components/zcomp/ApiReference.vue'
import DocsContainer from '@/components/zcomp/DocsContainer.vue'
import { ref } from 'vue'

const apiClasses = [
  { category: '基础', className: 'table', description: '表格基础样式', isCategoryStart: true },
  {
    category: '基础',
    className: 'table-wrap',
    description: '包裹容器（带边框圆角+横向滚动）',
    isCategoryStart: false,
  },
  {
    category: '行状态',
    className: 'table-row-hover',
    description: '行悬停高亮',
    isCategoryStart: true,
  },
  {
    category: '行状态',
    className: 'table-row-active',
    description: '行选中激活',
    isCategoryStart: false,
  },
  {
    category: '行状态',
    className: 'table-row-stripe',
    description: '斑马纹',
    isCategoryStart: false,
  },
  {
    category: '行状态',
    className: 'table-row-success',
    description: '成功行背景',
    isCategoryStart: false,
  },
  {
    category: '行状态',
    className: 'table-row-warning',
    description: '警告行背景',
    isCategoryStart: false,
  },
  {
    category: '行状态',
    className: 'table-row-error',
    description: '错误行背景',
    isCategoryStart: false,
  },
  {
    category: '行状态',
    className: 'table-row-info',
    description: '信息行背景',
    isCategoryStart: false,
  },
  { category: '列', className: 'table-col-center', description: '列居中', isCategoryStart: true },
  { category: '列', className: 'table-col-right', description: '列右对齐', isCategoryStart: false },
  {
    category: '列',
    className: 'table-col-nowrap',
    description: '禁止换行',
    isCategoryStart: false,
  },
  {
    category: '样式',
    className: 'table-clean',
    description: '无头部背景，仅底部双线',
    isCategoryStart: true,
  },
  { category: '样式', className: 'table-bordered', description: '全边框', isCategoryStart: false },
  {
    category: '样式',
    className: 'table-borderless',
    description: '无分割线',
    isCategoryStart: false,
  },
  { category: '尺寸', className: 'table-sm', description: '紧凑', isCategoryStart: true },
  { category: '尺寸', className: 'table-lg', description: '宽松', isCategoryStart: false },
  {
    category: '排序',
    className: 'table-sort',
    description: '可排序表头（加在 th 内容上）',
    isCategoryStart: true,
  },
]

// 示例数据
const users = [
  {
    id: 1,
    name: '张三',
    email: 'zhangsan@example.com',
    role: '管理员',
    status: 'active',
    joined: '2022-03-15',
  },
  {
    id: 2,
    name: '李四',
    email: 'lisi@example.com',
    role: '编辑',
    status: 'active',
    joined: '2022-07-22',
  },
  {
    id: 3,
    name: '王五',
    email: 'wangwu@example.com',
    role: '访客',
    status: 'inactive',
    joined: '2023-01-08',
  },
  {
    id: 4,
    name: '赵六',
    email: 'zhaoliu@example.com',
    role: '编辑',
    status: 'active',
    joined: '2023-05-30',
  },
  {
    id: 5,
    name: '钱七',
    email: 'qianqi@example.com',
    role: '访客',
    status: 'banned',
    joined: '2023-09-11',
  },
]

const orders = [
  { id: 'ORD-001', product: '机械键盘 Pro', amount: 899, qty: 2, status: 'success' },
  { id: 'ORD-002', product: '无线鼠标', amount: 299, qty: 1, status: 'warning' },
  { id: 'ORD-003', product: 'USB-C 集线器', amount: 199, qty: 3, status: 'error' },
  { id: 'ORD-004', product: '4K 显示器', amount: 3499, qty: 1, status: 'success' },
  { id: 'ORD-005', product: '降噪耳机', amount: 1299, qty: 1, status: 'info' },
]

// 排序
type SortKey = 'name' | 'email' | 'joined'
type SortDir = 'asc' | 'desc' | null
const sortKey = ref<SortKey | null>(null)
const sortDir = ref<SortDir>(null)

const sorted = computed(() => {
  if (!sortKey.value || !sortDir.value) return users
  return [...users].sort((a, b) => {
    const av = a[sortKey.value!]
    const bv = b[sortKey.value!]
    const r = av < bv ? -1 : av > bv ? 1 : 0
    return sortDir.value === 'asc' ? r : -r
  })
})

const setSort = (key: SortKey) => {
  if (sortKey.value !== key) {
    sortKey.value = key
    sortDir.value = 'asc'
  } else if (sortDir.value === 'asc') {
    sortDir.value = 'desc'
  } else {
    sortKey.value = null
    sortDir.value = null
  }
}

// 行选中
const selected = ref<Set<number>>(new Set())
const toggleRow = (id: number) => {
  if (selected.value.has(id)) selected.value.delete(id)
  else selected.value.add(id)
  selected.value = new Set(selected.value)
}
const toggleAll = () => {
  if (selected.value.size === users.length) selected.value = new Set()
  else selected.value = new Set(users.map((u) => u.id))
}

import { computed } from 'vue'

const statusBadge: Record<string, string> = {
  active: 'badge-success',
  inactive: 'badge-neutral',
  banned: 'badge-error',
}
const statusLabel: Record<string, string> = {
  active: '正常',
  inactive: '停用',
  banned: '封禁',
}
const orderRowClass: Record<string, string> = {
  success: 'table-row-success',
  warning: 'table-row-warning',
  error: 'table-row-error',
  info: 'table-row-info',
}
</script>

<template>
  <DocsContainer>
    <DocsHeader
      title="Table"
      description="表格组件，支持排序、行选中、斑马纹、语义行颜色、全边框等多种样式变体。"
    />

    <ApiReference :data="apiClasses" />

    <!-- 基础 -->
    <DocsSection title="基础">
      <div class="table-wrap">
        <table class="table">
          <thead>
            <tr>
              <th>#</th>
              <th>姓名</th>
              <th>邮箱</th>
              <th>角色</th>
              <th>状态</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="u in users" :key="u.id">
              <td class="text-base-content/40">{{ u.id }}</td>
              <td class="font-medium">{{ u.name }}</td>
              <td class="text-base-content/60">{{ u.email }}</td>
              <td>{{ u.role }}</td>
              <td>
                <span class="badge badge-sm badge-soft" :class="statusBadge[u.status]">
                  {{ statusLabel[u.status] }}
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </DocsSection>

    <!-- 斑马纹 + 悬停 -->
    <DocsSection title="斑马纹与悬停">
      <div class="table-wrap">
        <table class="table table-row-stripe table-row-hover">
          <thead>
            <tr>
              <th>#</th>
              <th>姓名</th>
              <th>邮箱</th>
              <th>角色</th>
              <th>加入日期</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="u in users" :key="u.id">
              <td class="text-base-content/40">{{ u.id }}</td>
              <td class="font-medium">{{ u.name }}</td>
              <td class="text-base-content/60">{{ u.email }}</td>
              <td>{{ u.role }}</td>
              <td class="text-base-content/60">{{ u.joined }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </DocsSection>

    <!-- 行选中 -->
    <DocsSection title="行选中">
      <div class="table-wrap">
        <table class="table table-row-hover">
          <thead>
            <tr>
              <th class="table-col-center w-12">
                <input
                  type="checkbox"
                  class="checkbox checkbox-sm checkbox-primary"
                  :checked="selected.size === users.length"
                  :indeterminate="selected.size > 0 && selected.size < users.length"
                  @change="toggleAll"
                />
              </th>
              <th>姓名</th>
              <th>邮箱</th>
              <th>角色</th>
              <th>状态</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="u in users"
              :key="u.id"
              :class="{ 'table-row-active': selected.has(u.id) }"
              @click="toggleRow(u.id)"
            >
              <td class="table-col-center">
                <input
                  type="checkbox"
                  class="checkbox checkbox-sm checkbox-primary"
                  :checked="selected.has(u.id)"
                  @click.stop
                  @change="toggleRow(u.id)"
                />
              </td>
              <td class="font-medium">{{ u.name }}</td>
              <td class="text-base-content/60">{{ u.email }}</td>
              <td>{{ u.role }}</td>
              <td>
                <span class="badge badge-sm badge-soft" :class="statusBadge[u.status]">
                  {{ statusLabel[u.status] }}
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <p class="text-sm text-base-content/50">已选择 {{ selected.size }} 项</p>
    </DocsSection>

    <!-- 可排序 -->
    <DocsSection title="可排序">
      <div class="table-wrap">
        <table class="table table-row-hover">
          <thead>
            <tr>
              <th>#</th>
              <th>
                <span
                  class="table-sort"
                  :data-sort="sortKey === 'name' ? sortDir : null"
                  @click="setSort('name')"
                  >姓名</span
                >
              </th>
              <th>
                <span
                  class="table-sort"
                  :data-sort="sortKey === 'email' ? sortDir : null"
                  @click="setSort('email')"
                  >邮箱</span
                >
              </th>
              <th>角色</th>
              <th>
                <span
                  class="table-sort"
                  :data-sort="sortKey === 'joined' ? sortDir : null"
                  @click="setSort('joined')"
                  >加入日期</span
                >
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="u in sorted" :key="u.id">
              <td class="text-base-content/40">{{ u.id }}</td>
              <td class="font-medium">{{ u.name }}</td>
              <td class="text-base-content/60">{{ u.email }}</td>
              <td>{{ u.role }}</td>
              <td class="text-base-content/60">{{ u.joined }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </DocsSection>

    <!-- 语义行颜色 -->
    <DocsSection title="语义行颜色">
      <div class="table-wrap">
        <table class="table">
          <thead>
            <tr>
              <th>订单号</th>
              <th>商品</th>
              <th class="table-col-right">单价</th>
              <th class="table-col-center">数量</th>
              <th>状态</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="o in orders" :key="o.id" :class="orderRowClass[o.status]">
              <td class="font-mono text-sm">{{ o.id }}</td>
              <td class="font-medium">{{ o.product }}</td>
              <td class="table-col-right">¥{{ o.amount.toLocaleString() }}</td>
              <td class="table-col-center">{{ o.qty }}</td>
              <td>
                <span class="badge badge-sm badge-soft" :class="`badge-${o.status}`">
                  {{
                    { success: '已完成', warning: '处理中', error: '已退款', info: '待发货' }[
                      o.status
                    ]
                  }}
                </span>
              </td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td colspan="2" class="text-base-content/50">共 {{ orders.length }} 条</td>
              <td class="table-col-right font-semibold">
                ¥{{ orders.reduce((s, o) => s + o.amount * o.qty, 0).toLocaleString() }}
              </td>
              <td class="table-col-center font-semibold">
                {{ orders.reduce((s, o) => s + o.qty, 0) }}
              </td>
              <td />
            </tr>
          </tfoot>
        </table>
      </div>
    </DocsSection>

    <!-- 样式变体 -->
    <DocsSection title="样式变体">
      <div class="flex flex-col gap-6">
        <!-- clean -->
        <div>
          <p class="text-xs text-base-content/50 mb-2">table-clean</p>
          <div class="table-wrap">
            <table class="table table-clean">
              <thead>
                <tr>
                  <th>姓名</th>
                  <th>邮箱</th>
                  <th>角色</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="u in users.slice(0, 3)" :key="u.id">
                  <td class="font-medium">{{ u.name }}</td>
                  <td class="text-base-content/60">{{ u.email }}</td>
                  <td>{{ u.role }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <!-- bordered -->
        <div>
          <p class="text-xs text-base-content/50 mb-2">table-bordered</p>
          <div class="table-wrap">
            <table class="table table-bordered">
              <thead>
                <tr>
                  <th>姓名</th>
                  <th>邮箱</th>
                  <th>角色</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="u in users.slice(0, 3)" :key="u.id">
                  <td class="font-medium">{{ u.name }}</td>
                  <td class="text-base-content/60">{{ u.email }}</td>
                  <td>{{ u.role }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <!-- borderless -->
        <div>
          <p class="text-xs text-base-content/50 mb-2">table-borderless</p>
          <div class="table-wrap">
            <table class="table table-borderless">
              <thead>
                <tr>
                  <th>姓名</th>
                  <th>邮箱</th>
                  <th>角色</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="u in users.slice(0, 3)" :key="u.id">
                  <td class="font-medium">{{ u.name }}</td>
                  <td class="text-base-content/60">{{ u.email }}</td>
                  <td>{{ u.role }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </DocsSection>

    <!-- 尺寸 -->
    <DocsSection title="尺寸">
      <div class="flex flex-col gap-6">
        <div v-for="size in ['sm', 'md', 'lg'] as const" :key="size">
          <p class="text-xs text-base-content/50 mb-2">
            {{ size === 'md' ? '默认' : `table-${size}` }}
          </p>
          <div class="table-wrap">
            <table class="table" :class="size !== 'md' ? `table-${size}` : ''">
              <thead>
                <tr>
                  <th>姓名</th>
                  <th>邮箱</th>
                  <th>角色</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="u in users.slice(0, 3)" :key="u.id">
                  <td class="font-medium">{{ u.name }}</td>
                  <td class="text-base-content/60">{{ u.email }}</td>
                  <td>{{ u.role }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </DocsSection>

    <!-- 带操作列 -->
    <DocsSection title="带操作列">
      <div class="table-wrap">
        <table class="table table-row-hover">
          <thead>
            <tr>
              <th>姓名</th>
              <th>邮箱</th>
              <th>角色</th>
              <th>状态</th>
              <th class="table-col-right">操作</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="u in users" :key="u.id">
              <td>
                <div class="flex items-center gap-2">
                  <div
                    class="w-7 h-7 rounded-full bg-primary/15 text-primary flex items-center justify-center text-xs font-bold shrink-0"
                  >
                    {{ u.name[0] }}
                  </div>
                  <span class="font-medium">{{ u.name }}</span>
                </div>
              </td>
              <td class="text-base-content/60">{{ u.email }}</td>
              <td>{{ u.role }}</td>
              <td>
                <span class="badge badge-sm badge-soft" :class="statusBadge[u.status]">
                  {{ statusLabel[u.status] }}
                </span>
              </td>
              <td class="table-col-right">
                <div class="flex justify-end gap-1">
                  <button class="btn btn-xs btn-ghost">编辑</button>
                  <button class="btn btn-xs btn-ghost text-error">删除</button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </DocsSection>

    <!-- 空状态 -->
    <DocsSection title="空状态">
      <div class="table-wrap">
        <table class="table">
          <thead>
            <tr>
              <th>姓名</th>
              <th>邮箱</th>
              <th>角色</th>
              <th>状态</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colspan="4">
                <div
                  class="flex flex-col items-center justify-center py-10 text-base-content/40 gap-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-10 w-10 opacity-30"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      d="M3 10h18M3 14h18M10 3v18M14 3v18M3 6a3 3 0 013-3h12a3 3 0 013 3v12a3 3 0 01-3 3H6a3 3 0 01-3-3V6z"
                    />
                  </svg>
                  <p class="text-sm">暂无数据</p>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </DocsSection>
  </DocsContainer>
</template>
