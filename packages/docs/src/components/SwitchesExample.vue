<script setup lang="ts">
import DocsHeader from '@/components/zcomp/DocsHeader.vue'
import DocsSection from '@/components/zcomp/DocsSection.vue'
import ApiReference from '@/components/zcomp/ApiReference.vue'
import DocsContainer from '@/components/zcomp/DocsContainer.vue'

const apiClasses = [
  {
    category: '基础',
    className: 'switch',
    description: '开关',
    isCategoryStart: true,
  },
  {
    category: '样式',
    className: 'switch-outline',
    description: '轮廓样式',
    isCategoryStart: false,
  },
  {
    category: '颜色',
    className: 'switch-primary',
    description: '主色',
    isCategoryStart: false,
  },
  {
    category: '颜色',
    className: 'switch-secondary',
    description: '次色',
    isCategoryStart: false,
  },
  {
    category: '颜色',
    className: 'switch-accent',
    description: '强调色',
    isCategoryStart: false,
  },
  {
    category: '颜色',
    className: 'switch-success',
    description: '成功色',
    isCategoryStart: false,
  },
  {
    category: '颜色',
    className: 'switch-warning',
    description: '警告色',
    isCategoryStart: false,
  },
  {
    category: '颜色',
    className: 'switch-info',
    description: '信息色',
    isCategoryStart: false,
  },
  {
    category: '颜色',
    className: 'switch-error',
    description: '错误色',
    isCategoryStart: false,
  },
  {
    category: '尺寸',
    className: 'switch-xs',
    description: '超小',
    isCategoryStart: false,
  },
  {
    category: '尺寸',
    className: 'switch-sm',
    description: '小',
    isCategoryStart: false,
  },
  {
    category: '尺寸',
    className: 'switch-md',
    description: '中',
    isCategoryStart: false,
  },
  {
    category: '尺寸',
    className: 'switch-lg',
    description: '大',
    isCategoryStart: false,
  },
  {
    category: '尺寸',
    className: 'switch-xl',
    description: '超大',
    isCategoryStart: false,
  },
]
</script>

<template>
  <DocsContainer>
    <DocsHeader title="Switch" description="开关/切换按钮组件，用于启用或禁用功能。" />

    <ApiReference :data="apiClasses"></ApiReference>

    <DocsSection title="基础开关">
      <input type="checkbox" class="switch" />
    </DocsSection>

    <DocsSection title="带标签的开关">
      <label class="flex items-center gap-3 cursor-pointer">
        <input type="checkbox" class="switch" />
        <span class="label-text">启用此功能</span>
      </label>
    </DocsSection>

    <DocsSection title="尺寸变体">
      <div class="space-y-4">
        <div class="flex items-center gap-3">
          <input type="checkbox" class="switch switch-xs" />
          <span class="text-sm">超小</span>
        </div>
        <div class="flex items-center gap-3">
          <input type="checkbox" class="switch switch-sm" />
          <span class="text-sm">小</span>
        </div>
        <div class="flex items-center gap-3">
          <input type="checkbox" class="switch switch-md" />
          <span class="text-sm">中</span>
        </div>
        <div class="flex items-center gap-3">
          <input type="checkbox" class="switch switch-lg" />
          <span class="text-sm">大</span>
        </div>
        <div class="flex items-center gap-3">
          <input type="checkbox" class="switch switch-xl" />
          <span class="text-sm">超大</span>
        </div>
      </div>
    </DocsSection>

    <DocsSection title="颜色变体">
      <div class="space-y-3">
        <label class="flex items-center gap-3 cursor-pointer">
          <input type="checkbox" class="switch" />
          <span>默认</span>
        </label>
        <label class="flex items-center gap-3 cursor-pointer">
          <input type="checkbox" class="switch switch-primary" />
          <span>主色</span>
        </label>
        <label class="flex items-center gap-3 cursor-pointer">
          <input type="checkbox" class="switch switch-secondary" />
          <span>次色</span>
        </label>
        <label class="flex items-center gap-3 cursor-pointer">
          <input type="checkbox" class="switch switch-accent" />
          <span>强调色</span>
        </label>
        <label class="flex items-center gap-3 cursor-pointer">
          <input type="checkbox" class="switch switch-success" />
          <span>成功</span>
        </label>
        <label class="flex items-center gap-3 cursor-pointer">
          <input type="checkbox" class="switch switch-warning" />
          <span>警告</span>
        </label>
        <label class="flex items-center gap-3 cursor-pointer">
          <input type="checkbox" class="switch switch-info" />
          <span>信息</span>
        </label>
        <label class="flex items-center gap-3 cursor-pointer">
          <input type="checkbox" class="switch switch-error" />
          <span>错误</span>
        </label>
      </div>
    </DocsSection>

    <DocsSection title="轮廓样式">
      <div class="space-y-3">
        <label class="flex items-center gap-3 cursor-pointer">
          <input type="checkbox" class="switch switch-outline" />
          <span>轮廓开关</span>
        </label>
        <label class="flex items-center gap-3 cursor-pointer">
          <input type="checkbox" class="switch switch-outline switch-primary" />
          <span>主色轮廓</span>
        </label>
        <label class="flex items-center gap-3 cursor-pointer">
          <input type="checkbox" class="switch switch-outline switch-success" />
          <span>成功轮廓</span>
        </label>
      </div>
    </DocsSection>

    <DocsSection title="禁用状态">
      <div class="space-y-3">
        <label class="flex items-center gap-3 cursor-pointer">
          <input type="checkbox" class="switch" disabled />
          <span>禁用</span>
        </label>
        <label class="flex items-center gap-3 cursor-pointer">
          <input type="checkbox" class="switch switch-primary" checked disabled />
          <span>已启用且禁用</span>
        </label>
      </div>
    </DocsSection>

    <DocsSection title="设置表单">
      <div class="space-y-4 max-w-md">
        <div class="flex items-center justify-between p-3 bg-base-100 rounded-lg">
          <div>
            <div class="font-semibold">暗色模式</div>
            <div class="text-sm text-base-content/70">启用深色主题</div>
          </div>
          <input type="checkbox" class="switch switch-primary" />
        </div>

        <div class="flex items-center justify-between p-3 bg-base-100 rounded-lg">
          <div>
            <div class="font-semibold">通知</div>
            <div class="text-sm text-base-content/70">接收推送通知</div>
          </div>
          <input type="checkbox" class="switch" checked />
        </div>

        <div class="flex items-center justify-between p-3 bg-base-100 rounded-lg">
          <div>
            <div class="font-semibold">自动更新</div>
            <div class="text-sm text-base-content/70">自动下载更新</div>
          </div>
          <input type="checkbox" class="switch switch-success" />
        </div>

        <div class="flex items-center justify-between p-3 bg-base-100 rounded-lg">
          <div>
            <div class="font-semibold">二次验证</div>
            <div class="text-sm text-base-content/70">增强账户安全</div>
          </div>
          <input type="checkbox" class="switch switch-warning" checked />
        </div>
      </div>
    </DocsSection>

    <DocsSection title="用户权限">
      <div class="space-y-2 max-w-md">
        <div class="flex items-center justify-between p-2 bg-base-100 rounded">
          <span>可编辑</span>
          <input type="checkbox" class="switch switch-sm switch-primary" checked />
        </div>
        <div class="flex items-center justify-between p-2 bg-base-100 rounded">
          <span>可删除</span>
          <input type="checkbox" class="switch switch-sm" />
        </div>
        <div class="flex items-center justify-between p-2 bg-base-100 rounded">
          <span>可分享</span>
          <input type="checkbox" class="switch switch-sm switch-success" checked />
        </div>
        <div class="flex items-center justify-between p-2 bg-base-100 rounded">
          <span>管理员</span>
          <input type="checkbox" class="switch switch-sm switch-error" />
        </div>
      </div>
    </DocsSection>

    <DocsSection title="应用程序通知设置">
      <div class="space-y-3 max-w-lg">
        <div class="card bg-base-100">
          <div class="card-body">
            <h3 class="card-title text-lg">电子邮件通知</h3>

            <div class="space-y-2">
              <label class="flex items-center justify-between">
                <span>订单确认</span>
                <input type="checkbox" class="switch switch-sm switch-success" checked />
              </label>
              <label class="flex items-center justify-between">
                <span>订单更新</span>
                <input type="checkbox" class="switch switch-sm switch-success" checked />
              </label>
              <label class="flex items-center justify-between">
                <span>营销邮件</span>
                <input type="checkbox" class="switch switch-sm" />
              </label>
              <label class="flex items-center justify-between">
                <span>每周摘要</span>
                <input type="checkbox" class="switch switch-sm switch-primary" checked />
              </label>
            </div>
          </div>
        </div>
      </div>
    </DocsSection>

    <DocsSection title="网络连接状态">
      <div class="space-y-3">
        <div class="flex items-center justify-between p-3 bg-base-100 rounded-lg">
          <div class="flex items-center gap-2">
            <span class="icon-[lucide--wifi] w-5 h-5"></span>
            <span>WiFi</span>
          </div>
          <input type="checkbox" class="switch switch-success" checked />
        </div>

        <div class="flex items-center justify-between p-3 bg-base-100 rounded-lg">
          <div class="flex items-center gap-2">
            <span class="icon-[lucide--bluetooth] w-5 h-5"></span>
            <span>蓝牙</span>
          </div>
          <input type="checkbox" class="switch" />
        </div>

        <div class="flex items-center justify-between p-3 bg-base-100 rounded-lg">
          <div class="flex items-center gap-2">
            <span class="icon-[lucide--signal] w-5 h-5"></span>
            <span>移动数据</span>
          </div>
          <input type="checkbox" class="switch switch-info" checked />
        </div>

        <div class="flex items-center justify-between p-3 bg-base-100 rounded-lg">
          <div class="flex items-center gap-2">
            <span class="icon-[lucide--plane] w-5 h-5"></span>
            <span>飞行模式</span>
          </div>
          <input type="checkbox" class="switch" />
        </div>
      </div>
    </DocsSection>

    <DocsSection title="主题切换">
      <div class="space-y-2">
        <label class="flex items-center gap-3 cursor-pointer">
          <span class="icon-[lucide--sun] w-5 h-5"></span>
          <input type="checkbox" class="switch switch-primary" checked />
          <span class="icon-[lucide--moon] w-5 h-5"></span>
        </label>
        <p class="text-sm text-base-content/70">切换亮色和深色主题</p>
      </div>
    </DocsSection>

    <DocsSection title="功能开关">
      <div class="space-y-2 max-w-md">
        <div class="flex items-center justify-between">
          <span>测试功能 A</span>
          <input type="checkbox" class="switch switch-xs switch-warning" />
        </div>
        <div class="flex items-center justify-between">
          <span>测试功能 B</span>
          <input type="checkbox" class="switch switch-xs" checked />
        </div>
        <div class="flex items-center justify-between">
          <span>测试功能 C</span>
          <input type="checkbox" class="switch switch-xs switch-error" />
        </div>
      </div>
    </DocsSection>
  </DocsContainer>
</template>
