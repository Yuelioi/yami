<script setup lang="ts">
import DocsHeader from '@/components/zcomp/DocsHeader.vue'
import DocsSection from '@/components/zcomp/DocsSection.vue'
import ApiReference from '@/components/zcomp/ApiReference.vue'
import DocsContainer from '@/components/zcomp/DocsContainer.vue'

const apiClasses = [
  {
    category: '基础',
    className: 'range',
    description: '范围滑块',
    isCategoryStart: true,
  },
  {
    category: '状态',
    className: 'range-disabled',
    description: '禁用状态',
    isCategoryStart: false,
  },
  {
    category: '颜色',
    className: 'range-primary',
    description: '主色',
    isCategoryStart: false,
  },
  {
    category: '颜色',
    className: 'range-secondary',
    description: '次色',
    isCategoryStart: false,
  },
  {
    category: '颜色',
    className: 'range-accent',
    description: '强调色',
    isCategoryStart: false,
  },
  {
    category: '颜色',
    className: 'range-success',
    description: '成功色',
    isCategoryStart: false,
  },
  {
    category: '颜色',
    className: 'range-warning',
    description: '警告色',
    isCategoryStart: false,
  },
  {
    category: '颜色',
    className: 'range-info',
    description: '信息色',
    isCategoryStart: false,
  },
  {
    category: '颜色',
    className: 'range-error',
    description: '错误色',
    isCategoryStart: false,
  },
  {
    category: '尺寸',
    className: 'range-xs',
    description: '超小',
    isCategoryStart: false,
  },
  {
    category: '尺寸',
    className: 'range-sm',
    description: '小',
    isCategoryStart: false,
  },
  {
    category: '尺寸',
    className: 'range-md',
    description: '中',
    isCategoryStart: false,
  },
  {
    category: '尺寸',
    className: 'range-lg',
    description: '大',
    isCategoryStart: false,
  },
  {
    category: '尺寸',
    className: 'range-xl',
    description: '超大',
    isCategoryStart: false,
  },
]
</script>

<template>
  <DocsContainer>
    <DocsHeader title="Range" description="范围滑块组件，用于选择数值范围。" />

    <ApiReference :data="apiClasses"></ApiReference>

    <DocsSection title="基础范围滑块">
      <div class="space-y-4 max-w-md">
        <div>
          <label class="label-text block mb-2">音量</label>
          <input type="range" class="range" min="0" max="100" value="50" />
        </div>
      </div>
    </DocsSection>

    <DocsSection title="带标签">
      <div class="space-y-4 max-w-md">
        <div>
          <div class="flex justify-between items-center mb-2">
            <label class="label-text">亮度</label>
            <span class="text-sm text-base-content/70">65%</span>
          </div>
          <input type="range" class="range" min="0" max="100" value="65" />
        </div>
      </div>
    </DocsSection>

    <DocsSection title="颜色变体（彩色进度槽）">
      <div class="space-y-4 max-w-md">
        <div>
          <label class="label-text block mb-2">默认（中性色）</label>
          <input type="range" class="range" min="0" max="100" value="50" />
        </div>
        <div>
          <label class="label-text block mb-2">主色（进度槽和滑块都是主色）</label>
          <input type="range" class="range range-primary" min="0" max="100" value="50" />
        </div>
        <div>
          <label class="label-text block mb-2">次色</label>
          <input type="range" class="range range-secondary" min="0" max="100" value="50" />
        </div>
        <div>
          <label class="label-text block mb-2">强调色</label>
          <input type="range" class="range range-accent" min="0" max="100" value="50" />
        </div>
        <div>
          <label class="label-text block mb-2">成功（绿色进度）</label>
          <input type="range" class="range range-success" min="0" max="100" value="50" />
        </div>
        <div>
          <label class="label-text block mb-2">警告（黄色进度）</label>
          <input type="range" class="range range-warning" min="0" max="100" value="50" />
        </div>
        <div>
          <label class="label-text block mb-2">信息（蓝色进度）</label>
          <input type="range" class="range range-info" min="0" max="100" value="50" />
        </div>
        <div>
          <label class="label-text block mb-2">错误（红色进度）</label>
          <input type="range" class="range range-error" min="0" max="100" value="50" />
        </div>
      </div>
    </DocsSection>

    <DocsSection title="尺寸变体">
      <div class="space-y-4 max-w-md">
        <div>
          <p class="text-sm text-base-content/60 mb-2">超小 (xs)</p>
          <input type="range" class="range range-xs range-primary" min="0" max="100" value="50" />
        </div>

        <div>
          <p class="text-sm text-base-content/60 mb-2">小 (sm)</p>
          <input type="range" class="range range-sm range-primary" min="0" max="100" value="50" />
        </div>

        <div>
          <p class="text-sm text-base-content/60 mb-2">中 (md)</p>
          <input type="range" class="range range-md range-primary" min="0" max="100" value="50" />
        </div>

        <div>
          <p class="text-sm text-base-content/60 mb-2">大 (lg)</p>
          <input type="range" class="range range-lg range-primary" min="0" max="100" value="50" />
        </div>

        <div>
          <p class="text-sm text-base-content/60 mb-2">超大 (xl)</p>
          <input type="range" class="range range-xl range-primary" min="0" max="100" value="50" />
        </div>
      </div>
    </DocsSection>

    <DocsSection title="自定义范围">
      <div class="space-y-6 max-w-md">
        <div>
          <label class="label-text block mb-2">选择年份（1990-2024）</label>
          <input type="range" class="range range-primary" min="1990" max="2024" value="2020" />
        </div>

        <div>
          <label class="label-text block mb-2">选择价格（$0-$1000）</label>
          <input
            type="range"
            class="range range-success"
            min="0"
            max="1000"
            step="10"
            value="500"
          />
        </div>

        <div>
          <label class="label-text block mb-2">选择温度（-50°C 到 50°C）</label>
          <input type="range" class="range range-warning" min="-50" max="50" value="20" />
        </div>
      </div>
    </DocsSection>

    <DocsSection title="禁用状态">
      <div class="space-y-4 max-w-md">
        <div>
          <label class="label-text block mb-2">可用</label>
          <input type="range" class="range range-primary" min="0" max="100" value="50" />
        </div>

        <div>
          <label class="label-text block mb-2">禁用</label>
          <input type="range" class="range range-primary" min="0" max="100" value="50" disabled />
        </div>
      </div>
    </DocsSection>

    <DocsSection title="音频控制（彩色进度）">
      <div class="space-y-4 max-w-md">
        <div>
          <div class="flex items-center gap-2 mb-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              class="w-5 h-5"
            >
              <path
                d="M13.5 4.06c0-1.336-1.616-2.318-2.916-1.401l-5.076 3.344A2 2 0 005 9.25v5.5a2 2 0 00.75 1.555l5.075 3.345c1.3.915 2.916-.066 2.916-1.4V4.06zM15.75 9.5a.75.75 0 100 1.5H18a.75.75 0 100-1.5h-2.25zM15.75 13.75a.75.75 0 100 1.5H18a.75.75 0 100-1.5h-2.25z"
              ></path>
            </svg>
            <span class="label-text">音量</span>
            <span class="text-sm text-base-content/70">50%</span>
          </div>
          <input type="range" class="range range-success" min="0" max="100" value="50" />
        </div>

        <div>
          <label class="label-text block mb-2">播放进度（蓝色进度槽）</label>
          <input type="range" class="range range-info" min="0" max="100" value="35" />
          <div class="flex justify-between text-xs text-base-content/70 mt-1">
            <span>1:23</span>
            <span>3:45</span>
          </div>
        </div>
      </div>
    </DocsSection>

    <DocsSection title="性能指示（动态颜色）">
      <div class="max-w-md space-y-6 p-4 bg-base-100 rounded-lg border border-base-300">
        <div>
          <div class="flex justify-between items-center mb-2">
            <label class="label-text">CPU 使用率 - 低（绿色）</label>
            <span class="text-sm font-semibold">25%</span>
          </div>
          <input type="range" class="range range-success" min="0" max="100" value="25" disabled />
        </div>

        <div>
          <div class="flex justify-between items-center mb-2">
            <label class="label-text">内存使用率 - 中等（黄色）</label>
            <span class="text-sm font-semibold">60%</span>
          </div>
          <input type="range" class="range range-warning" min="0" max="100" value="60" disabled />
        </div>

        <div>
          <div class="flex justify-between items-center mb-2">
            <label class="label-text">磁盘使用率 - 高（红色）</label>
            <span class="text-sm font-semibold">85%</span>
          </div>
          <input type="range" class="range range-error" min="0" max="100" value="85" disabled />
        </div>
      </div>
    </DocsSection>

    <DocsSection title="过滤面板">
      <div class="max-w-2xl space-y-6">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label class="label-text block mb-2">价格范围</label>
            <div class="flex items-center gap-2">
              <input
                type="range"
                class="range range-primary flex-1"
                min="0"
                max="1000"
                value="300"
              />
              <span class="text-sm font-semibold w-16">$300</span>
            </div>
          </div>

          <div>
            <label class="label-text block mb-2">评分最低</label>
            <div class="flex items-center gap-2">
              <input
                type="range"
                class="range range-primary flex-1"
                min="0"
                max="5"
                step="0.5"
                value="3"
              />
              <span class="text-sm font-semibold w-8">3.0</span>
            </div>
          </div>

          <div>
            <label class="label-text block mb-2">库存数量</label>
            <input type="range" class="range range-success" min="0" max="100" value="50" />
          </div>

          <div>
            <label class="label-text block mb-2">销售排名</label>
            <input type="range" class="range range-warning" min="0" max="100" value="75" />
          </div>
        </div>

        <div class="flex gap-2">
          <button class="btn btn-ghost flex-1">重置</button>
          <button class="btn btn-primary flex-1">应用筛选</button>
        </div>
      </div>
    </DocsSection>
  </DocsContainer>
</template>
