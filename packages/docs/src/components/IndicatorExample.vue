<script setup lang="ts">
import DocsHeader from '@/components/zcomp/DocsHeader.vue'
import DocsSection from '@/components/zcomp/DocsSection.vue'
import ApiReference from '@/components/zcomp/ApiReference.vue'
import DocsContainer from '@/components/zcomp/DocsContainer.vue'

const apiClasses = [
  { category: '基础', className: 'indicator', description: '徽标容器', isCategoryStart: true },
  {
    category: '基础',
    className: 'indicator-item',
    description: '徽标本体（绝对定位）',
    isCategoryStart: false,
  },
  {
    category: '水平位置',
    className: 'indicator-start',
    description: '左侧',
    isCategoryStart: true,
  },
  {
    category: '水平位置',
    className: 'indicator-center',
    description: '水平居中',
    isCategoryStart: false,
  },
  {
    category: '水平位置',
    className: 'indicator-end',
    description: '右侧（默认）',
    isCategoryStart: false,
  },
  {
    category: '垂直位置',
    className: 'indicator-top',
    description: '顶部（默认）',
    isCategoryStart: true,
  },
  {
    category: '垂直位置',
    className: 'indicator-middle',
    description: '垂直居中',
    isCategoryStart: false,
  },
  {
    category: '垂直位置',
    className: 'indicator-bottom',
    description: '底部',
    isCategoryStart: false,
  },
]
</script>

<template>
  <DocsContainer>
    <DocsHeader
      title="Indicator"
      description="指示器组件，用于在元素上显示标记、徽章或状态指示。"
    />

    <ApiReference :data="apiClasses"></ApiReference>

    <DocsSection title="基础指示器（右上角）">
      <div class="indicator">
        <div class="indicator-item">
          <div class="badge badge-primary">new</div>
        </div>
        <button class="btn">查看新消息</button>
      </div>
    </DocsSection>

    <DocsSection title="水平位置">
      <div class="space-y-4">
        <div>
          <p class="text-sm text-base-content/60 mb-2">左侧</p>
          <div class="indicator indicator-start">
            <div class="indicator-item">
              <div class="badge badge-error">3</div>
            </div>
            <button class="btn">未读消息</button>
          </div>
        </div>

        <div>
          <p class="text-sm text-base-content/60 mb-2">中间</p>
          <div class="indicator indicator-center">
            <div class="indicator-item">
              <div class="badge badge-warning">!</div>
            </div>
            <button class="btn">需要注意</button>
          </div>
        </div>

        <div>
          <p class="text-sm text-base-content/60 mb-2">右侧（默认）</p>
          <div class="indicator indicator-end">
            <div class="indicator-item">
              <div class="badge badge-success">✓</div>
            </div>
            <button class="btn">已完成</button>
          </div>
        </div>
      </div>
    </DocsSection>

    <DocsSection title="竖直位置">
      <div class="flex flex-wrap gap-6">
        <div>
          <p class="text-sm text-base-content/60 mb-2">顶部</p>
          <div class="indicator indicator-top">
            <div class="indicator-item">
              <div class="badge badge-primary">top</div>
            </div>
            <div class="w-24 h-24 bg-base-300 rounded-lg"></div>
          </div>
        </div>

        <div>
          <p class="text-sm text-base-content/60 mb-2">中间</p>
          <div class="indicator indicator-middle">
            <div class="indicator-item">
              <div class="badge badge-info">mid</div>
            </div>
            <div class="w-24 h-24 bg-base-300 rounded-lg"></div>
          </div>
        </div>

        <div>
          <p class="text-sm text-base-content/60 mb-2">底部</p>
          <div class="indicator indicator-bottom">
            <div class="indicator-item">
              <div class="badge badge-warning">bot</div>
            </div>
            <div class="w-24 h-24 bg-base-300 rounded-lg"></div>
          </div>
        </div>
      </div>
    </DocsSection>

    <DocsSection title="组合位置">
      <div class="indicator my-3 ms-14">
        <span class="indicator-item indicator-top indicator-start badge badge-primary max-sm:px-1">
          <span class="max-sm:hidden">top+start</span> <span class="sm:hidden">T-Start</span>
        </span>
        <span class="indicator-item indicator-top indicator-center badge badge-primary max-sm:px-1">
          <span class="max-sm:hidden">top+center</span> <span class="sm:hidden">T-center</span>
        </span>
        <span class="indicator-item indicator-top indicator-end badge badge-primary max-sm:px-1">
          <span class="max-sm:hidden">top+end</span> <span class="sm:hidden">T-end</span>
        </span>
        <span
          class="indicator-item indicator-middle indicator-start badge badge-primary max-sm:px-1"
        >
          <span class="max-sm:hidden">middle+start</span> <span class="sm:hidden">M-start</span>
        </span>
        <span
          class="indicator-item indicator-middle indicator-center badge badge-primary max-sm:px-1"
        >
          <span class="max-sm:hidden">middle+center</span> <span class="sm:hidden">M-center</span>
        </span>
        <span class="indicator-item indicator-middle indicator-end badge badge-primary max-sm:px-1">
          <span class="max-sm:hidden">middle+end</span> <span class="sm:hidden">M-end</span>
        </span>
        <span
          class="indicator-item indicator-bottom indicator-start badge badge-primary max-sm:px-1"
        >
          <span class="max-sm:hidden">bottom+start</span> <span class="sm:hidden">B-Start</span>
        </span>
        <span
          class="indicator-item indicator-bottom indicator-center badge badge-primary max-sm:px-1"
        >
          <span class="max-sm:hidden">bottom+center</span> <span class="sm:hidden">B-center</span>
        </span>
        <span class="indicator-item indicator-bottom indicator-end badge badge-primary max-sm:px-1">
          <span class="max-sm:hidden">bottom+end</span> <span class="sm:hidden">B-end</span>
        </span>
        <div
          class="bg-primary/10 border-primary grid h-32 w-60 place-items-center rounded-md border max-sm:w-40"
        >
          content
        </div>
      </div>
    </DocsSection>

    <!-- 配合 badge 颜色 -->
    <DocsSection title="颜色">
      <div class="flex flex-wrap gap-8 items-center">
        <div
          v-for="color in ['primary', 'secondary', 'accent', 'success', 'warning', 'error']"
          :key="color"
          class="indicator"
        >
          <span class="indicator-item badge badge-dot" :class="`badge-${color}`" />
          <div class="w-12 h-12 rounded-box bg-base-200" />
        </div>
      </div>
    </DocsSection>

    <DocsSection title="头像指示器">
      <!-- 头像在线状态 -->
      <div>
        <p class="text-sm text-base-content/60 mb-3">头像在线状态</p>
        <div class="flex flex-wrap gap-6 items-center">
          <div class="indicator indicator-end indicator-bottom">
            <span class="indicator-item badge badge-dot badge-success w-3 h-3" />
            <div
              class="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-content font-bold"
            >
              张
            </div>
          </div>
          <div class="indicator indicator-end indicator-bottom">
            <span class="indicator-item badge badge-dot badge-warning w-3 h-3" />
            <div
              class="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-secondary-content font-bold"
            >
              李
            </div>
          </div>
          <div class="indicator indicator-end indicator-bottom">
            <span
              class="indicator-item badge badge-dot badge-base-300 w-3 h-3"
              style="background: var(--color-base-300)"
            />
            <div
              class="w-12 h-12 rounded-full bg-accent flex items-center justify-center text-accent-content font-bold"
            >
              王
            </div>
          </div>
        </div>
      </div>
    </DocsSection>

    <DocsSection title="计数器指示器">
      <div class="flex flex-wrap gap-4">
        <div class="indicator">
          <div class="indicator-item">
            <div class="badge badge-error">8</div>
          </div>
          <button class="btn btn-outline">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              class="w-5 h-5 stroke-current"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              ></path>
            </svg>
            购物车
          </button>
        </div>

        <div class="indicator">
          <div class="indicator-item">
            <div class="badge badge-warning">5</div>
          </div>
          <button class="btn btn-outline">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              class="w-5 h-5 stroke-current"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              ></path>
            </svg>
            通知
          </button>
        </div>
      </div>
      <!-- 导航图标 -->
      <div>
        <p class="text-sm text-base-content/60 mb-3">导航图标角标</p>
        <div class="flex flex-wrap gap-4 items-center">
          <div class="indicator">
            <span class="indicator-item badge badge-xs badge-error badge-pill">3</span>
            <button class="btn btn-ghost btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
            </button>
          </div>
          <div class="indicator">
            <span class="indicator-item badge badge-xs badge-primary badge-pill">12</span>
            <button class="btn btn-ghost btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </button>
          </div>
          <div class="indicator">
            <span class="indicator-item badge badge-dot badge-error" />
            <button class="btn btn-ghost btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </DocsSection>

    <DocsSection title="图片指示器">
      <div class="flex flex-wrap gap-6">
        <div class="indicator">
          <div class="indicator-item indicator-bottom indicator-end">
            <div class="badge badge-primary">NEW</div>
          </div>
          <img
            src="https://images.unsplash.com/photo-1506157786151-b8491531f063?w=200&h=200&fit=crop"
            alt="Product"
            class="w-32 h-32 object-cover rounded-lg"
          />
        </div>

        <div class="indicator">
          <div class="indicator-item indicator-bottom indicator-end">
            <div class="badge badge-success">50%</div>
          </div>
          <img
            src="https://images.unsplash.com/photo-1506157786151-b8491531f063?w=200&h=200&fit=crop"
            alt="Product"
            class="w-32 h-32 object-cover rounded-lg opacity-50"
          />
        </div>
      </div>
    </DocsSection>

    <DocsSection title="卡片指示器">
      <!-- 卡片新品标签 -->
      <div>
        <p class="text-sm text-base-content/60 mb-3">卡片标签</p>
        <div class="flex flex-wrap gap-4">
          <div class="indicator">
            <span class="indicator-item indicator-start badge badge-sm badge-success">新品</span>
            <div
              class="w-40 h-24 rounded-box bg-base-200 border border-base-300 flex items-center justify-center text-sm text-base-content/50"
            >
              商品卡片
            </div>
          </div>
          <div class="indicator">
            <span class="indicator-item badge badge-sm badge-warning">热销</span>
            <div
              class="w-40 h-24 rounded-box bg-base-200 border border-base-300 flex items-center justify-center text-sm text-base-content/50"
            >
              商品卡片
            </div>
          </div>
          <div class="indicator indicator-center indicator-bottom">
            <span class="indicator-item badge badge-sm badge-error badge-pill">限时</span>
            <div
              class="w-40 h-24 rounded-box bg-base-200 border border-base-300 flex items-center justify-center text-sm text-base-content/50"
            >
              商品卡片
            </div>
          </div>
        </div>
      </div>
      <div class="indicator border w-full">
        <div class="indicator-item indicator-top indicator-start">
          <div class="badge badge-secondary">推荐</div>
        </div>
        <div class="card card-bordered w-full">
          <div class="card-body">
            <h3 class="card-title">产品标题</h3>
            <p>产品描述文本在这里</p>
            <div class="card-actions justify-end">
              <button class="btn btn-primary btn-sm">了解更多</button>
            </div>
          </div>
        </div>
      </div>
    </DocsSection>
  </DocsContainer>
</template>
