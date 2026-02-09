<script setup lang="ts">
import DocsHeader from '@/components/zcomp/DocsHeader.vue'
import DocsSection from '@/components/zcomp/DocsSection.vue'
import ApiReference from '@/components/zcomp/ApiReference.vue'
import DocsContainer from '@/components/zcomp/DocsContainer.vue'

const apiClasses = [
  {
    category: '基础',
    className: 'progress',
    description: '进度条容器',
    isCategoryStart: true,
  },
  {
    category: '基础',
    className: 'progress-bar',
    description: '进度条条形',
    isCategoryStart: false,
  },
  {
    category: '基础',
    className: 'progress-label',
    description: '进度标签',
    isCategoryStart: false,
  },
  {
    category: '方向',
    className: 'progress-horizontal',
    description: '水平进度条',
    isCategoryStart: false,
  },
  {
    category: '方向',
    className: 'progress-vertical',
    description: '竖直进度条',
    isCategoryStart: false,
  },
  {
    category: '样式',
    className: 'progress-striped',
    description: '斜纹样式',
    isCategoryStart: false,
  },
  {
    category: '样式',
    className: 'progress-animated',
    description: '动画斜纹',
    isCategoryStart: false,
  },
  {
    category: '颜色',
    className: 'progress-primary',
    description: '主色',
    isCategoryStart: false,
  },
  {
    category: '颜色',
    className: 'progress-secondary',
    description: '次色',
    isCategoryStart: false,
  },
  {
    category: '颜色',
    className: 'progress-accent',
    description: '强调色',
    isCategoryStart: false,
  },
  {
    category: '颜色',
    className: 'progress-info',
    description: '信息色',
    isCategoryStart: false,
  },
  {
    category: '颜色',
    className: 'progress-success',
    description: '成功色',
    isCategoryStart: false,
  },
  {
    category: '颜色',
    className: 'progress-warning',
    description: '警告色',
    isCategoryStart: false,
  },
  {
    category: '颜色',
    className: 'progress-error',
    description: '错误色',
    isCategoryStart: false,
  },
  {
    category: '特殊',
    className: 'progress-indeterminate',
    description: '不确定状态',
    isCategoryStart: false,
  },
  {
    category: '特殊',
    className: 'progress-step',
    description: '步骤进度',
    isCategoryStart: false,
  },
]
</script>

<template>
  <DocsContainer>
    <DocsHeader title="Progress" description="进度条组件，用于展示任务完成进度。" />

    <ApiReference :data="apiClasses"></ApiReference>

    <DocsSection title="基础进度条">
      <div class="space-y-4">
        <div>
          <p class="text-sm text-base-content/60 mb-2">25%</p>
          <div class="progress">
            <div class="progress-bar" style="width: 25%"></div>
          </div>
        </div>

        <div>
          <p class="text-sm text-base-content/60 mb-2">50%</p>
          <div class="progress">
            <div class="progress-bar" style="width: 50%"></div>
          </div>
        </div>

        <div>
          <p class="text-sm text-base-content/60 mb-2">75%</p>
          <div class="progress">
            <div class="progress-bar" style="width: 75%"></div>
          </div>
        </div>

        <div>
          <p class="text-sm text-base-content/60 mb-2">100%</p>
          <div class="progress">
            <div class="progress-bar" style="width: 100%"></div>
          </div>
        </div>
      </div>
    </DocsSection>

    <DocsSection title="带标签">
      <div class="space-y-4">
        <div>
          <div class="flex items-center justify-between mb-2">
            <span class="text-sm font-semibold">下载进度</span>
            <span class="progress-label">45%</span>
          </div>
          <div class="progress">
            <div class="progress-bar" style="width: 45%"></div>
          </div>
        </div>

        <div>
          <div class="flex items-center justify-between mb-2">
            <span class="text-sm font-semibold">安装进度</span>
            <span class="progress-label">80%</span>
          </div>
          <div class="progress">
            <div class="progress-bar progress-success" style="width: 80%"></div>
          </div>
        </div>
      </div>
    </DocsSection>

    <DocsSection title="颜色变体">
      <div class="space-y-3">
        <div class="progress">
          <div class="progress-bar" style="width: 60%"></div>
        </div>
        <div class="progress">
          <div class="progress-bar progress-primary" style="width: 60%"></div>
        </div>
        <div class="progress">
          <div class="progress-bar progress-secondary" style="width: 60%"></div>
        </div>
        <div class="progress">
          <div class="progress-bar progress-accent" style="width: 60%"></div>
        </div>
        <div class="progress">
          <div class="progress-bar progress-info" style="width: 60%"></div>
        </div>
        <div class="progress">
          <div class="progress-bar progress-success" style="width: 60%"></div>
        </div>
        <div class="progress">
          <div class="progress-bar progress-warning" style="width: 60%"></div>
        </div>
        <div class="progress">
          <div class="progress-bar progress-error" style="width: 60%"></div>
        </div>
      </div>
    </DocsSection>

    <DocsSection title="斜纹样式">
      <div class="space-y-4">
        <div>
          <p class="text-sm text-base-content/60 mb-2">静态斜纹</p>
          <div class="progress progress-striped">
            <div class="progress-bar progress-primary" style="width: 70%"></div>
          </div>
        </div>

        <div>
          <p class="text-sm text-base-content/60 mb-2">动画斜纹</p>
          <div class="progress progress-striped progress-animated">
            <div class="progress-bar progress-success" style="width: 70%"></div>
          </div>
        </div>
      </div>
    </DocsSection>

    <DocsSection title="不确定状态">
      <div class="progress">
        <div
          class="progress-bar progress-indeterminate progress-primary"
          style="--progress-color: var(--color-primary)"
        ></div>
      </div>
    </DocsSection>

    <DocsSection title="竖直进度条">
      <div class="flex items-end justify-center gap-6 h-64">
        <div>
          <p class="text-sm text-base-content/60 mb-2 text-center">30%</p>
          <div class="progress progress-vertical">
            <div class="progress-bar progress-primary" style="height: 30%"></div>
          </div>
        </div>

        <div>
          <p class="text-sm text-base-content/60 mb-2 text-center">60%</p>
          <div class="progress progress-vertical">
            <div class="progress-bar progress-warning" style="height: 60%"></div>
          </div>
        </div>

        <div>
          <p class="text-sm text-base-content/60 mb-2 text-center">90%</p>
          <div class="progress progress-vertical">
            <div class="progress-bar progress-success" style="height: 90%"></div>
          </div>
        </div>

        <div>
          <p class="text-sm text-base-content/60 mb-2 text-center">100%</p>
          <div class="progress progress-vertical">
            <div class="progress-bar progress-error" style="height: 100%"></div>
          </div>
        </div>
      </div>
    </DocsSection>

    <DocsSection title="步骤进度条">
      <div class="space-y-4">
        <div class="progress">
          <div
            class="progress-step"
            style="width: 25%; background-color: var(--color-success)"
          ></div>
          <div class="progress-step" style="width: 25%"></div>
          <div class="progress-step" style="width: 25%"></div>
          <div class="progress-step" style="width: 25%"></div>
        </div>

        <div class="progress">
          <div
            class="progress-step"
            style="width: 25%; background-color: var(--color-success)"
          ></div>
          <div
            class="progress-step"
            style="width: 25%; background-color: var(--color-success)"
          ></div>
          <div
            class="progress-step"
            style="width: 25%; background-color: var(--color-warning)"
          ></div>
          <div class="progress-step" style="width: 25%"></div>
        </div>

        <div class="progress">
          <div
            class="progress-step"
            style="width: 25%; background-color: var(--color-success)"
          ></div>
          <div
            class="progress-step"
            style="width: 25%; background-color: var(--color-success)"
          ></div>
          <div
            class="progress-step"
            style="width: 25%; background-color: var(--color-success)"
          ></div>
          <div
            class="progress-step"
            style="width: 25%; background-color: var(--color-success)"
          ></div>
        </div>
      </div>
    </DocsSection>

    <DocsSection title="下载进度">
      <div class="space-y-4">
        <div>
          <div class="flex items-center justify-between mb-2">
            <span class="text-sm">文件1.zip</span>
            <span class="text-sm text-base-content/60">32 / 100 MB</span>
          </div>
          <div class="progress">
            <div class="progress-bar progress-primary" style="width: 32%"></div>
          </div>
        </div>

        <div>
          <div class="flex items-center justify-between mb-2">
            <span class="text-sm">文件2.zip</span>
            <span class="text-sm text-base-content/60">完成</span>
          </div>
          <div class="progress">
            <div class="progress-bar progress-success" style="width: 100%"></div>
          </div>
        </div>
      </div>
    </DocsSection>

    <DocsSection title="安装进度">
      <div class="space-y-4 max-w-md">
        <div>
          <div class="flex items-center justify-between mb-2">
            <span class="text-sm font-semibold">正在安装应用</span>
            <span class="text-sm text-base-content/60">56%</span>
          </div>
          <div class="progress progress-striped progress-animated">
            <div class="progress-bar progress-primary" style="width: 56%"></div>
          </div>
          <p class="text-xs text-base-content/60 mt-1">请勿关闭此窗口...</p>
        </div>
      </div>
    </DocsSection>

    <DocsSection title="多个进度条">
      <div class="space-y-4 max-w-md">
        <div>
          <div class="flex justify-between items-center mb-1">
            <span class="text-sm">任务 1</span>
            <span class="text-xs text-base-content/60">25%</span>
          </div>
          <div class="progress h-2">
            <div class="progress-bar progress-primary" style="width: 25%"></div>
          </div>
        </div>

        <div>
          <div class="flex justify-between items-center mb-1">
            <span class="text-sm">任务 2</span>
            <span class="text-xs text-base-content/60">50%</span>
          </div>
          <div class="progress h-2">
            <div class="progress-bar progress-success" style="width: 50%"></div>
          </div>
        </div>

        <div>
          <div class="flex justify-between items-center mb-1">
            <span class="text-sm">任务 3</span>
            <span class="text-xs text-base-content/60">75%</span>
          </div>
          <div class="progress h-2">
            <div class="progress-bar progress-warning" style="width: 75%"></div>
          </div>
        </div>

        <div>
          <div class="flex justify-between items-center mb-1">
            <span class="text-sm">任务 4</span>
            <span class="text-xs text-base-content/60">100%</span>
          </div>
          <div class="progress h-2">
            <div class="progress-bar progress-error" style="width: 100%"></div>
          </div>
        </div>
      </div>
    </DocsSection>
  </DocsContainer>
</template>
