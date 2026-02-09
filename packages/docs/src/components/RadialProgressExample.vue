<script setup lang="ts">
import DocsHeader from '@/components/zcomp/DocsHeader.vue'
import DocsSection from '@/components/zcomp/DocsSection.vue'
import ApiReference from '@/components/zcomp/ApiReference.vue'
import DocsContainer from '@/components/zcomp/DocsContainer.vue'

const apiClasses = [
  {
    category: '基础',
    className: 'radial-progress',
    description: '圆形进度条',
    isCategoryStart: true,
  },
  {
    category: '尺寸',
    className: 'radial-progress-xs',
    description: '超小',
    isCategoryStart: false,
  },
  {
    category: '尺寸',
    className: 'radial-progress-sm',
    description: '小',
    isCategoryStart: false,
  },
  {
    category: '尺寸',
    className: 'radial-progress-md',
    description: '中',
    isCategoryStart: false,
  },
  {
    category: '尺寸',
    className: 'radial-progress-lg',
    description: '大',
    isCategoryStart: false,
  },
  {
    category: '尺寸',
    className: 'radial-progress-xl',
    description: '超大',
    isCategoryStart: false,
  },
  {
    category: '颜色',
    className: 'radial-progress-primary',
    description: '主色',
    isCategoryStart: false,
  },
  {
    category: '颜色',
    className: 'radial-progress-secondary',
    description: '次色',
    isCategoryStart: false,
  },
  {
    category: '颜色',
    className: 'radial-progress-accent',
    description: '强调色',
    isCategoryStart: false,
  },
  {
    category: '颜色',
    className: 'radial-progress-info',
    description: '信息色',
    isCategoryStart: false,
  },
  {
    category: '颜色',
    className: 'radial-progress-success',
    description: '成功色',
    isCategoryStart: false,
  },
  {
    category: '颜色',
    className: 'radial-progress-warning',
    description: '警告色',
    isCategoryStart: false,
  },
  {
    category: '颜色',
    className: 'radial-progress-error',
    description: '错误色',
    isCategoryStart: false,
  },
]
</script>

<template>
  <DocsContainer>
    <DocsHeader title="Radial Progress" description="圆形进度条组件，用于展示圆形百分比进度。" />

    <ApiReference :data="apiClasses"></ApiReference>

    <DocsSection title="基础圆形进度条">
      <div class="flex justify-center items-center">
        <div class="radial-progress radial-progress-md radial-progress-primary" style="--value: 45">
          45%
        </div>
      </div>
    </DocsSection>

    <DocsSection title="不同进度">
      <div class="flex flex-wrap justify-center gap-8">
        <div class="radial-progress radial-progress-md radial-progress-primary" style="--value: 0">
          0%
        </div>
        <div class="radial-progress radial-progress-md radial-progress-primary" style="--value: 25">
          25%
        </div>
        <div class="radial-progress radial-progress-md radial-progress-primary" style="--value: 50">
          50%
        </div>
        <div class="radial-progress radial-progress-md radial-progress-primary" style="--value: 75">
          75%
        </div>
        <div
          class="radial-progress radial-progress-md radial-progress-primary"
          style="--value: 100"
        >
          100%
        </div>
      </div>
    </DocsSection>

    <DocsSection title="尺寸变体">
      <div class="flex flex-wrap justify-center gap-8">
        <div>
          <p class="text-sm text-base-content/60 mb-3 text-center">超小 (xs)</p>
          <div
            class="radial-progress radial-progress-xs radial-progress-primary"
            style="--value: 65"
          >
            65%
          </div>
        </div>

        <div>
          <p class="text-sm text-base-content/60 mb-3 text-center">小 (sm)</p>
          <div
            class="radial-progress radial-progress-sm radial-progress-primary"
            style="--value: 65"
          >
            65%
          </div>
        </div>

        <div>
          <p class="text-sm text-base-content/60 mb-3 text-center">中 (md)</p>
          <div
            class="radial-progress radial-progress-md radial-progress-primary"
            style="--value: 65"
          >
            65%
          </div>
        </div>

        <div>
          <p class="text-sm text-base-content/60 mb-3 text-center">大 (lg)</p>
          <div
            class="radial-progress radial-progress-lg radial-progress-primary"
            style="--value: 65"
          >
            65%
          </div>
        </div>

        <div>
          <p class="text-sm text-base-content/60 mb-3 text-center">超大 (xl)</p>
          <div
            class="radial-progress radial-progress-xl radial-progress-primary"
            style="--value: 65"
          >
            65%
          </div>
        </div>
      </div>
    </DocsSection>

    <DocsSection title="颜色变体">
      <div class="flex flex-wrap justify-center gap-6">
        <div class="radial-progress radial-progress-md radial-progress-primary" style="--value: 50">
          主色
        </div>
        <div
          class="radial-progress radial-progress-md radial-progress-secondary"
          style="--value: 50"
        >
          次色
        </div>
        <div class="radial-progress radial-progress-md radial-progress-accent" style="--value: 50">
          强调
        </div>
        <div class="radial-progress radial-progress-md radial-progress-info" style="--value: 50">
          信息
        </div>
        <div class="radial-progress radial-progress-md radial-progress-success" style="--value: 50">
          成功
        </div>
        <div class="radial-progress radial-progress-md radial-progress-warning" style="--value: 50">
          警告
        </div>
        <div class="radial-progress radial-progress-md radial-progress-error" style="--value: 50">
          错误
        </div>
      </div>
    </DocsSection>

    <DocsSection title="进度指示器">
      <div class="flex flex-wrap justify-center gap-8">
        <div>
          <p class="text-sm text-base-content/60 mb-3 text-center">CPU 使用率</p>
          <div
            class="radial-progress radial-progress-lg radial-progress-primary"
            style="--value: 35"
          >
            35%
          </div>
        </div>

        <div>
          <p class="text-sm text-base-content/60 mb-3 text-center">内存使用率</p>
          <div
            class="radial-progress radial-progress-lg radial-progress-warning"
            style="--value: 72"
          >
            72%
          </div>
        </div>

        <div>
          <p class="text-sm text-base-content/60 mb-3 text-center">磁盘空间</p>
          <div class="radial-progress radial-progress-lg radial-progress-error" style="--value: 89">
            89%
          </div>
        </div>
      </div>
    </DocsSection>

    <DocsSection title="下载进度">
      <div class="flex flex-wrap justify-center gap-8">
        <div class="text-center">
          <div
            class="radial-progress radial-progress-lg radial-progress-primary"
            style="--value: 25"
          >
            <span class="text-sm">25%</span>
          </div>
          <p class="text-sm text-base-content/60 mt-2">下载中</p>
        </div>

        <div class="text-center">
          <div
            class="radial-progress radial-progress-lg radial-progress-primary"
            style="--value: 100"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              class="w-6 h-6"
            >
              <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"></path>
            </svg>
          </div>
          <p class="text-sm text-base-content/60 mt-2">完成</p>
        </div>
      </div>
    </DocsSection>

    <DocsSection title="技能等级">
      <div class="flex flex-wrap justify-center gap-6">
        <div class="text-center">
          <div class="radial-progress radial-progress-lg radial-progress-error" style="--value: 20">
            初级
          </div>
        </div>

        <div class="text-center">
          <div
            class="radial-progress radial-progress-lg radial-progress-warning"
            style="--value: 50"
          >
            中级
          </div>
        </div>

        <div class="text-center">
          <div
            class="radial-progress radial-progress-lg radial-progress-success"
            style="--value: 85"
          >
            高级
          </div>
        </div>

        <div class="text-center">
          <div
            class="radial-progress radial-progress-lg radial-progress-primary"
            style="--value: 100"
          >
            专家
          </div>
        </div>
      </div>
    </DocsSection>

    <DocsSection title="在卡片中使用">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div class="card card-bordered">
          <div class="card-body items-center text-center">
            <div
              class="radial-progress radial-progress-lg radial-progress-primary"
              style="--value: 60"
            >
              60%
            </div>
            <h3 class="card-title text-lg mt-4">项目进度</h3>
            <p class="text-sm text-base-content/70">还需要完成 40% 的工作</p>
          </div>
        </div>

        <div class="card card-bordered">
          <div class="card-body items-center text-center">
            <div
              class="radial-progress radial-progress-lg radial-progress-success"
              style="--value: 95"
            >
              95%
            </div>
            <h3 class="card-title text-lg mt-4">完成度</h3>
            <p class="text-sm text-base-content/70">即将完成</p>
          </div>
        </div>

        <div class="card card-bordered">
          <div class="card-body items-center text-center">
            <div
              class="radial-progress radial-progress-lg radial-progress-info"
              style="--value: 40"
            >
              40%
            </div>
            <h3 class="card-title text-lg mt-4">质量分数</h3>
            <p class="text-sm text-base-content/70">需要改进</p>
          </div>
        </div>
      </div>
    </DocsSection>

    <DocsSection title="配合标签">
      <div class="flex flex-wrap justify-center gap-8">
        <div>
          <div
            class="radial-progress radial-progress-lg radial-progress-primary"
            style="--value: 33"
          >
            <div class="text-center">
              <div class="text-2xl font-bold">33</div>
              <div class="text-xs">%</div>
            </div>
          </div>
        </div>

        <div>
          <div
            class="radial-progress radial-progress-lg radial-progress-success"
            style="--value: 88"
          >
            <span class="font-bold text-lg">A+</span>
          </div>
        </div>

        <div>
          <div
            class="radial-progress radial-progress-lg radial-progress-warning"
            style="--value: 45"
          >
            <span class="text-sm">进行中</span>
          </div>
        </div>
      </div>
    </DocsSection>

    <DocsSection title="加载状态">
      <div class="flex flex-wrap justify-center gap-8">
        <div>
          <p class="text-sm text-base-content/60 mb-3 text-center">加载中</p>
          <div
            class="radial-progress radial-progress-lg radial-progress-primary"
            style="--value: 33; animation: spin 2s linear infinite"
          >
            <span class="animate-spin">⌛</span>
          </div>
        </div>

        <div>
          <p class="text-sm text-base-content/60 mb-3 text-center">处理中</p>
          <div
            class="radial-progress radial-progress-lg radial-progress-primary"
            style="--value: 66"
          >
            ⚙️
          </div>
        </div>
      </div>
    </DocsSection>
  </DocsContainer>
</template>
