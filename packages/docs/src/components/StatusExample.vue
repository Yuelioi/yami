<script setup lang="ts">
import DocsHeader from '@/components/zcomp/DocsHeader.vue'
import DocsSection from '@/components/zcomp/DocsSection.vue'
import ApiReference from '@/components/zcomp/ApiReference.vue'
import DocsContainer from '@/components/zcomp/DocsContainer.vue'

const apiClasses = [
  {
    category: '基础',
    className: 'status',
    description: '状态指示器',
    isCategoryStart: true,
  },
  {
    category: '颜色',
    className: 'status-primary',
    description: '主色',
    isCategoryStart: false,
  },
  {
    category: '颜色',
    className: 'status-secondary',
    description: '次色',
    isCategoryStart: false,
  },
  {
    category: '颜色',
    className: 'status-accent',
    description: '强调色',
    isCategoryStart: false,
  },
  {
    category: '颜色',
    className: 'status-info',
    description: '信息色',
    isCategoryStart: false,
  },
  {
    category: '颜色',
    className: 'status-success',
    description: '成功色',
    isCategoryStart: false,
  },
  {
    category: '颜色',
    className: 'status-warning',
    description: '警告色',
    isCategoryStart: false,
  },
  {
    category: '颜色',
    className: 'status-error',
    description: '错误色',
    isCategoryStart: false,
  },
  {
    category: '尺寸',
    className: 'status-xs',
    description: '超小',
    isCategoryStart: false,
  },
  {
    category: '尺寸',
    className: 'status-sm',
    description: '小',
    isCategoryStart: false,
  },
  {
    category: '尺寸',
    className: 'status-md',
    description: '中',
    isCategoryStart: false,
  },
  {
    category: '尺寸',
    className: 'status-lg',
    description: '大',
    isCategoryStart: false,
  },
  {
    category: '尺寸',
    className: 'status-xl',
    description: '超大',
    isCategoryStart: false,
  },
]
</script>

<template>
  <DocsContainer>
    <DocsHeader
      title="Status"
      description="状态指示器组件，用于展示在线状态、连接状态或其他状态标识。"
    />

    <ApiReference :data="apiClasses"></ApiReference>

    <DocsSection title="基础状态指示器">
      <div class="flex items-center gap-2">
        <div class="status status-info"></div>
        <span>在线</span>
      </div>
    </DocsSection>

    <DocsSection title="颜色变体">
      <div class="space-y-3">
        <div class="flex items-center gap-2">
          <div class="status"></div>
          <span>默认</span>
        </div>
        <div class="flex items-center gap-2">
          <div class="status status-primary"></div>
          <span>主色</span>
        </div>
        <div class="flex items-center gap-2">
          <div class="status status-secondary"></div>
          <span>次色</span>
        </div>
        <div class="flex items-center gap-2">
          <div class="status status-accent"></div>
          <span>强调色</span>
        </div>
        <div class="flex items-center gap-2">
          <div class="status status-info"></div>
          <span>信息</span>
        </div>
        <div class="flex items-center gap-2">
          <div class="status status-success"></div>
          <span>成功</span>
        </div>
        <div class="flex items-center gap-2">
          <div class="status status-warning"></div>
          <span>警告</span>
        </div>
        <div class="flex items-center gap-2">
          <div class="status status-error"></div>
          <span>错误</span>
        </div>
      </div>
    </DocsSection>

    <DocsSection title="尺寸变体">
      <div class="space-y-3">
        <div class="flex items-center gap-2">
          <div class="status status-xs status-success"></div>
          <span>超小</span>
        </div>
        <div class="flex items-center gap-2">
          <div class="status status-sm status-success"></div>
          <span>小</span>
        </div>
        <div class="flex items-center gap-2">
          <div class="status status-md status-success"></div>
          <span>中</span>
        </div>
        <div class="flex items-center gap-2">
          <div class="status status-lg status-success"></div>
          <span>大</span>
        </div>
        <div class="flex items-center gap-2">
          <div class="status status-xl status-success"></div>
          <span>超大</span>
        </div>
      </div>
    </DocsSection>

    <DocsSection title="用户列表">
      <div class="space-y-3">
        <div class="flex items-center gap-3 p-3 bg-base-100 rounded-lg">
          <div class="avatar">
            <div class="w-10 rounded-full bg-base-300 flex items-center justify-center">👤</div>
          </div>
          <div class="flex-1">
            <div class="font-semibold">张三</div>
            <div class="text-sm text-base-content/70">产品经理</div>
          </div>
          <div class="status status-success"></div>
        </div>

        <div class="flex items-center gap-3 p-3 bg-base-100 rounded-lg">
          <div class="avatar">
            <div class="w-10 rounded-full bg-base-300 flex items-center justify-center">👤</div>
          </div>
          <div class="flex-1">
            <div class="font-semibold">李四</div>
            <div class="text-sm text-base-content/70">开发工程师</div>
          </div>
          <div class="status status-warning"></div>
        </div>

        <div class="flex items-center gap-3 p-3 bg-base-100 rounded-lg">
          <div class="avatar">
            <div class="w-10 rounded-full bg-base-300 flex items-center justify-center">👤</div>
          </div>
          <div class="flex-1">
            <div class="font-semibold">王五</div>
            <div class="text-sm text-base-content/70">设计师</div>
          </div>
          <div class="status status-error"></div>
        </div>
      </div>
    </DocsSection>

    <DocsSection title="聊天应用">
      <div class="space-y-2">
        <div class="flex items-center gap-2 p-2 hover:bg-base-200 rounded cursor-pointer">
          <div class="avatar">
            <div class="w-8 rounded-full bg-base-300 flex items-center justify-center text-sm">
              A
            </div>
          </div>
          <span class="flex-1">Alice</span>
          <div class="status status-sm status-success"></div>
        </div>

        <div class="flex items-center gap-2 p-2 hover:bg-base-200 rounded cursor-pointer">
          <div class="avatar">
            <div class="w-8 rounded-full bg-base-300 flex items-center justify-center text-sm">
              B
            </div>
          </div>
          <span class="flex-1">Bob</span>
          <div class="status status-sm status-warning"></div>
        </div>

        <div class="flex items-center gap-2 p-2 hover:bg-base-200 rounded cursor-pointer">
          <div class="avatar">
            <div class="w-8 rounded-full bg-base-300 flex items-center justify-center text-sm">
              C
            </div>
          </div>
          <span class="flex-1">Charlie</span>
          <div class="status status-sm status-error"></div>
        </div>
      </div>
    </DocsSection>

    <DocsSection title="服务器状态">
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div class="card bg-base-100">
          <div class="card-body items-center text-center">
            <div class="text-3xl mb-2">🖥️</div>
            <h3 class="font-semibold">服务器 1</h3>
            <div class="flex items-center gap-1 mt-2">
              <div class="status status-success"></div>
              <span class="text-sm">正常</span>
            </div>
          </div>
        </div>

        <div class="card bg-base-100">
          <div class="card-body items-center text-center">
            <div class="text-3xl mb-2">🖥️</div>
            <h3 class="font-semibold">服务器 2</h3>
            <div class="flex items-center gap-1 mt-2">
              <div class="status status-warning"></div>
              <span class="text-sm">告警</span>
            </div>
          </div>
        </div>

        <div class="card bg-base-100">
          <div class="card-body items-center text-center">
            <div class="text-3xl mb-2">🖥️</div>
            <h3 class="font-semibold">服务器 3</h3>
            <div class="flex items-center gap-1 mt-2">
              <div class="status status-error"></div>
              <span class="text-sm">离线</span>
            </div>
          </div>
        </div>

        <div class="card bg-base-100">
          <div class="card-body items-center text-center">
            <div class="text-3xl mb-2">🖥️</div>
            <h3 class="font-semibold">服务器 4</h3>
            <div class="flex items-center gap-1 mt-2">
              <div class="status status-success"></div>
              <span class="text-sm">正常</span>
            </div>
          </div>
        </div>
      </div>
    </DocsSection>

    <DocsSection title="任务状态">
      <div class="space-y-2">
        <div class="flex items-center gap-3 p-3 bg-base-100 rounded-lg">
          <span>Task 1: 数据处理</span>
          <div class="ml-auto flex items-center gap-2">
            <span class="text-sm">进行中</span>
            <div class="status status-info"></div>
          </div>
        </div>

        <div class="flex items-center gap-3 p-3 bg-base-100 rounded-lg">
          <span>Task 2: 代码审查</span>
          <div class="ml-auto flex items-center gap-2">
            <span class="text-sm">已完成</span>
            <div class="status status-success"></div>
          </div>
        </div>

        <div class="flex items-center gap-3 p-3 bg-base-100 rounded-lg">
          <span>Task 3: 文档更新</span>
          <div class="ml-auto flex items-center gap-2">
            <span class="text-sm">待处理</span>
            <div class="status status-warning"></div>
          </div>
        </div>

        <div class="flex items-center gap-3 p-3 bg-base-100 rounded-lg">
          <span>Task 4: 部署应用</span>
          <div class="ml-auto flex items-center gap-2">
            <span class="text-sm">失败</span>
            <div class="status status-error"></div>
          </div>
        </div>
      </div>
    </DocsSection>

    <DocsSection title="网络连接状态">
      <div class="space-y-3">
        <div class="flex items-center justify-between p-3 bg-base-100 rounded-lg">
          <div>
            <div class="font-semibold">WiFi 连接</div>
            <div class="text-sm text-base-content/70">已连接</div>
          </div>
          <div class="status status-success"></div>
        </div>

        <div class="flex items-center justify-between p-3 bg-base-100 rounded-lg">
          <div>
            <div class="font-semibold">蓝牙设备</div>
            <div class="text-sm text-base-content/70">搜索中</div>
          </div>
          <div class="status status-warning"></div>
        </div>

        <div class="flex items-center justify-between p-3 bg-base-100 rounded-lg">
          <div>
            <div class="font-semibold">VPN 连接</div>
            <div class="text-sm text-base-content/70">已断开</div>
          </div>
          <div class="status status-error"></div>
        </div>
      </div>
    </DocsSection>

    <DocsSection title="颜色和尺寸组合">
      <div class="space-y-4">
        <div class="flex items-center gap-4">
          <div class="status status-xs status-success"></div>
          <div class="status status-sm status-success"></div>
          <div class="status status-md status-success"></div>
          <div class="status status-lg status-success"></div>
          <div class="status status-xl status-success"></div>
        </div>

        <div class="flex items-center gap-4">
          <div class="status status-xs status-warning"></div>
          <div class="status status-sm status-warning"></div>
          <div class="status status-md status-warning"></div>
          <div class="status status-lg status-warning"></div>
          <div class="status status-xl status-warning"></div>
        </div>

        <div class="flex items-center gap-4">
          <div class="status status-xs status-error"></div>
          <div class="status status-sm status-error"></div>
          <div class="status status-md status-error"></div>
          <div class="status status-lg status-error"></div>
          <div class="status status-xl status-error"></div>
        </div>
      </div>
    </DocsSection>
  </DocsContainer>
</template>
