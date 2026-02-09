<script setup lang="ts">
import DocsHeader from '@/components/zcomp/DocsHeader.vue'
import DocsSection from '@/components/zcomp/DocsSection.vue'
import ApiReference from '@/components/zcomp/ApiReference.vue'
import DocsContainer from '@/components/zcomp/DocsContainer.vue'

const apiClasses = [
  {
    category: '基础',
    className: 'drawer',
    description: '抽屉容器',
    isCategoryStart: true,
  },
  {
    category: '基础',
    className: 'drawer-toggle',
    description: '抽屉开关（隐藏的 checkbox）',
    isCategoryStart: false,
  },
  {
    category: '基础',
    className: 'drawer-side',
    description: '侧边栏内容',
    isCategoryStart: false,
  },
  {
    category: '基础',
    className: 'drawer-content',
    description: '主要内容区',
    isCategoryStart: false,
  },
  {
    category: '基础',
    className: 'drawer-overlay',
    description: '背景遮罩',
    isCategoryStart: false,
  },
  {
    category: '基础',
    className: 'drawer-button',
    description: '打开按钮',
    isCategoryStart: false,
  },
  {
    category: '方向',
    className: 'drawer-end',
    description: '右侧抽屉',
    isCategoryStart: false,
  },
  {
    category: '状态',
    className: 'drawer-open',
    description: '始终打开状态',
    isCategoryStart: false,
  },
]
</script>

<template>
  <DocsContainer>
    <DocsHeader title="Drawer" description="侧边栏抽屉组件，用于导航或额外内容展示。" />

    <ApiReference :data="apiClasses"></ApiReference>

    <DocsSection title="基础左侧抽屉">
      <div class="drawer">
        <input id="drawer-left" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content">
          <label for="drawer-left" class="btn btn-primary drawer-button">打开菜单</label>
          <div class="p-6">
            <h2 class="text-2xl font-bold mb-4">主要内容</h2>
            <p class="text-base-content/70">这是主要内容区域。点击上面的按钮打开侧边栏。</p>
          </div>
        </div>
        <div class="drawer-side">
          <label for="drawer-left" class="drawer-overlay"></label>
          <ul class="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
            <li><a href="#">首页</a></li>
            <li><a href="#">关于</a></li>
            <li><a href="#">服务</a></li>
            <li><a href="#">联系</a></li>
          </ul>
        </div>
      </div>
    </DocsSection>

    <DocsSection title="右侧抽屉">
      <div class="drawer drawer-end">
        <input id="drawer-right" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content">
          <label for="drawer-right" class="btn btn-secondary drawer-button">打开设置</label>
          <div class="p-6">
            <h2 class="text-2xl font-bold mb-4">主要内容</h2>
            <p class="text-base-content/70">右侧抽屉从右边滑出。</p>
          </div>
        </div>
        <div class="drawer-side">
          <label for="drawer-right" class="drawer-overlay"></label>
          <div class="p-4 w-80 min-h-full bg-base-200">
            <h3 class="font-bold text-lg mb-4">设置</h3>
            <ul class="space-y-2">
              <li class="flex items-center justify-between">
                <span>深色模式</span>
                <input type="checkbox" class="toggle" />
              </li>
              <li class="flex items-center justify-between">
                <span>通知</span>
                <input type="checkbox" class="toggle" checked />
              </li>
              <li class="flex items-center justify-between">
                <span>声音</span>
                <input type="checkbox" class="toggle" checked />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </DocsSection>

    <DocsSection title="带导航的抽屉">
      <div class="drawer">
        <input id="drawer-nav" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content">
          <div class="navbar bg-base-100 border-b">
            <label for="drawer-nav" class="btn btn-ghost btn-circle drawer-button">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                class="w-6 h-6 stroke-current"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
            <div class="flex-1 px-2 mx-2">
              <span class="text-lg font-bold">应用名称</span>
            </div>
          </div>
          <div class="p-6">
            <h2 class="text-2xl font-bold mb-4">欢迎</h2>
            <p class="text-base-content/70">点击左上角的菜单图标打开导航。</p>
          </div>
        </div>
        <div class="drawer-side">
          <label for="drawer-nav" class="drawer-overlay"></label>
          <ul class="menu p-4 w-80 min-h-full bg-base-200">
            <li><a href="#">📊 仪表盘</a></li>
            <li><a href="#">👥 用户</a></li>
            <li><a href="#">⚙️ 设置</a></li>
            <li><a href="#">📖 文档</a></li>
            <li><a href="#">🚪 退出</a></li>
          </ul>
        </div>
      </div>
    </DocsSection>

    <DocsSection title="嵌套抽屉">
      <div class="drawer">
        <input id="drawer-outer" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content">
          <label for="drawer-outer" class="btn btn-primary drawer-button">打开外层</label>
          <div class="p-6">
            <p>外层内容区域</p>
          </div>
        </div>
        <div class="drawer-side">
          <label for="drawer-outer" class="drawer-overlay"></label>
          <div class="p-4 w-80 min-h-full bg-base-200">
            <h3 class="font-bold mb-4">外层菜单</h3>
            <ul class="space-y-2">
              <li><a href="#">选项 1</a></li>
              <li><a href="#">选项 2</a></li>
            </ul>
          </div>
        </div>
      </div>
    </DocsSection>

    <DocsSection title="常驻侧边栏">
      <div class="drawer drawer-open">
        <input type="checkbox" class="drawer-toggle" />
        <div class="drawer-content">
          <div class="p-6">
            <h2 class="text-2xl font-bold mb-4">主要内容</h2>
            <p class="text-base-content/70">
              侧边栏始终显示。在较小的屏幕上，您可能需要使用响应式类来隐藏它。
            </p>
          </div>
        </div>
        <div class="drawer-side">
          <label class="drawer-overlay"></label>
          <ul class="menu p-4 w-80 min-h-full gap-4 bg-base-200">
            <li><a href="#">📚 文档</a></li>
            <li><a href="#">🛠️ 工具</a></li>
            <li><a href="#">❓ 帮助</a></li>
          </ul>
        </div>
      </div>
    </DocsSection>
  </DocsContainer>
</template>
