<script setup lang="ts">
import DocsHeader from '@/components/zcomp/DocsHeader.vue'
import DocsSection from '@/components/zcomp/DocsSection.vue'
import ApiReference from '@/components/zcomp/ApiReference.vue'
import DocsContainer from '@/components/zcomp/DocsContainer.vue'
import { initDropdowns } from '@yuelioi/yami/plugins/dropdown'
import { onMounted } from 'vue'

onMounted(() => {
  initDropdowns()
})

const apiClasses = [
  { category: '容器', className: 'navbar', description: 'Navbar 根容器', isCategoryStart: true },
  { category: '容器', className: 'navbar-start', description: '左侧区域', isCategoryStart: false },
  { category: '容器', className: 'navbar-center', description: '中间区域', isCategoryStart: false },
  { category: '容器', className: 'navbar-end', description: '右侧区域', isCategoryStart: false },
  { category: '元素', className: 'navbar-brand', description: '品牌 Logo', isCategoryStart: true },
  { category: '元素', className: 'navbar-link', description: '导航链接', isCategoryStart: false },
  {
    category: '元素',
    className: 'navbar-link-active',
    description: '当前激活链接',
    isCategoryStart: false,
  },
  {
    category: '元素',
    className: 'navbar-divider',
    description: '竖向分割线',
    isCategoryStart: false,
  },
  {
    category: '元素',
    className: 'navbar-toggle',
    description: '移动端汉堡按钮',
    isCategoryStart: false,
  },
  {
    category: '元素',
    className: 'navbar-menu',
    description: '可折叠导航菜单（移动端响应式）',
    isCategoryStart: false,
  },
  {
    category: '样式',
    className: 'navbar-bordered',
    description: '底部边框',
    isCategoryStart: true,
  },
  { category: '样式', className: 'navbar-sticky', description: '顶部固定', isCategoryStart: false },
  { category: '样式', className: 'navbar-shadow', description: '阴影', isCategoryStart: false },
  {
    category: '样式',
    className: 'navbar-glass',
    description: '毛玻璃背景',
    isCategoryStart: false,
  },
  {
    category: '样式',
    className: 'navbar-transparent',
    description: '透明背景',
    isCategoryStart: false,
  },
]

// 汉堡图标 SVG
const iconMenu = `<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/></svg>`
</script>

<template>
  <DocsContainer>
    <DocsHeader
      title="Navbar"
      description="通用导航栏组件，提供三段式布局结构，支持响应式折叠、多种样式变体与下拉菜单。"
    />

    <ApiReference :data="apiClasses" />

    <!-- 基础 -->
    <DocsSection title="基础">
      <div class="rounded-box border border-base-200 overflow-hidden">
        <nav class="navbar navbar-bordered">
          <div class="navbar-start">
            <a class="navbar-brand">
              <div class="w-7 h-7 rounded-lg bg-primary flex items-center justify-center shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-4 text-primary-content"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              Yami UI
            </a>
          </div>
          <div class="navbar-center">
            <a class="navbar-link navbar-link-active">首页</a>
            <a class="navbar-link">文档</a>
            <a class="navbar-link">组件</a>
            <a class="navbar-link">博客</a>
          </div>
          <div class="navbar-end">
            <a class="btn btn-sm btn-ghost">登录</a>
            <a class="btn btn-sm btn-primary">注册</a>
          </div>
        </nav>
      </div>
    </DocsSection>

    <!-- 左对齐导航 -->
    <DocsSection title="左对齐导航">
      <div class="rounded-box border border-base-200 overflow-hidden">
        <nav class="navbar navbar-bordered">
          <div class="navbar-start">
            <a class="navbar-brand mr-4">
              <div class="w-7 h-7 rounded-lg bg-primary flex items-center justify-center shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-4 text-primary-content"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              Yami UI
            </a>
            <a class="navbar-link navbar-link-active">首页</a>
            <a class="navbar-link">文档</a>
            <a class="navbar-link">组件</a>
            <a class="navbar-link">定价</a>
          </div>
          <div class="navbar-end">
            <a class="btn btn-sm btn-ghost">登录</a>
            <a class="btn btn-sm btn-primary">注册</a>
          </div>
        </nav>
      </div>
    </DocsSection>

    <!-- 带下拉菜单 -->
    <DocsSection title="带下拉菜单">
      <div class="rounded-box border border-base-200 overflow-visible">
        <nav class="navbar navbar-bordered relative">
          <div class="navbar-start">
            <a class="navbar-brand mr-4">
              <div class="w-7 h-7 rounded-lg bg-primary flex items-center justify-center shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-4 text-primary-content"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              Yami UI
            </a>
            <a class="navbar-link navbar-link-active">首页</a>

            <!-- 下拉触发 -->
            <div class="relative">
              <button class="navbar-link" data-dropdown-toggle="navbar-dropdown-1">
                产品
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-3.5 w-3.5 transition-transform duration-200"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2.5"
                    d="m19 9-7 7-7-7"
                  />
                </svg>
              </button>
              <div
                id="navbar-dropdown-1"
                class="dropdown absolute top-full left-0 mt-1 w-44"
                hidden
              >
                <a class="dropdown-item">功能介绍</a>
                <a class="dropdown-item">价格方案</a>
                <a class="dropdown-item">更新日志</a>
                <div class="dropdown-divider" />
                <a class="dropdown-item">Pro 版本</a>
              </div>
            </div>

            <div class="relative">
              <button
                class="navbar-link"
                data-dropdown-toggle="navbar-dropdown-2"
                data-dropdown-trigger="hover"
              >
                资源
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-3.5 w-3.5 transition-transform duration-200"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2.5"
                    d="m19 9-7 7-7-7"
                  />
                </svg>
              </button>
              <div
                id="navbar-dropdown-2"
                class="dropdown absolute top-full left-0 mt-1 w-44"
                hidden
              >
                <a class="dropdown-item">文档中心</a>
                <a class="dropdown-item">组件示例</a>
                <a class="dropdown-item">图标库</a>
                <a class="dropdown-item">GitHub</a>
              </div>
            </div>

            <a class="navbar-link">博客</a>
          </div>
          <div class="navbar-end">
            <a class="btn btn-sm btn-ghost">登录</a>
            <a class="btn btn-sm btn-primary">注册</a>
          </div>
        </nav>
      </div>
      <p class="text-sm text-base-content/60">「产品」点击触发，「资源」悬停触发。</p>
    </DocsSection>

    <!-- 带搜索 -->
    <DocsSection title="带搜索框">
      <div class="rounded-box border border-base-200 overflow-hidden">
        <nav class="navbar navbar-bordered">
          <div class="navbar-start">
            <a class="navbar-brand">
              <div class="w-7 h-7 rounded-lg bg-primary flex items-center justify-center shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-4 text-primary-content"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              Yami UI
            </a>
          </div>
          <div class="navbar-center flex-1 max-w-sm px-4">
            <div class="relative w-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4 absolute left-3 top-1/2 -translate-y-1/2 text-base-content/40"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <input
                type="search"
                placeholder="搜索文档..."
                class="input input-sm input-bordered w-full pl-9"
              />
            </div>
          </div>
          <div class="navbar-end">
            <button class="btn btn-sm btn-ghost btn-circle">
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
            <div
              class="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-content text-sm font-bold cursor-pointer"
            >
              张
            </div>
          </div>
        </nav>
      </div>
    </DocsSection>

    <!-- 带分割线与图标 -->
    <DocsSection title="带分割线与图标按钮">
      <div class="rounded-box border border-base-200 overflow-hidden">
        <nav class="navbar navbar-bordered">
          <div class="navbar-start">
            <a class="navbar-brand">
              <div class="w-7 h-7 rounded-lg bg-primary flex items-center justify-center shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-4 text-primary-content"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              Yami UI
            </a>
          </div>
          <div class="navbar-end gap-1">
            <button class="btn btn-sm btn-ghost btn-circle">
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
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
            <button class="btn btn-sm btn-ghost btn-circle">
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
            <div class="navbar-divider" />
            <a class="btn btn-sm btn-ghost">登录</a>
            <a class="btn btn-sm btn-primary">注册</a>
          </div>
        </nav>
      </div>
    </DocsSection>

    <!-- 样式变体 -->
    <DocsSection title="样式变体">
      <div class="flex flex-col gap-3">
        <!-- shadow -->
        <div>
          <p class="text-xs text-base-content/50 mb-1.5">navbar-shadow</p>
          <div class="rounded-box overflow-hidden">
            <nav class="navbar navbar-shadow">
              <div class="navbar-start">
                <a class="navbar-brand">
                  <div class="w-6 h-6 rounded bg-primary flex items-center justify-center shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-3.5 w-3.5 text-primary-content"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  Yami UI
                </a>
              </div>
              <div class="navbar-end">
                <a class="navbar-link">文档</a>
                <a class="navbar-link">组件</a>
                <a class="btn btn-sm btn-primary">注册</a>
              </div>
            </nav>
          </div>
        </div>

        <!-- glass -->
        <div>
          <p class="text-xs text-base-content/50 mb-1.5">navbar-glass（毛玻璃）</p>
          <div class="rounded-box overflow-hidden relative">
            <div class="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20" />
            <nav class="navbar navbar-glass relative">
              <div class="navbar-start">
                <a class="navbar-brand">
                  <div class="w-6 h-6 rounded bg-primary flex items-center justify-center shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-3.5 w-3.5 text-primary-content"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  Yami UI
                </a>
              </div>
              <div class="navbar-end">
                <a class="navbar-link">文档</a>
                <a class="navbar-link">组件</a>
                <a class="btn btn-sm btn-primary">注册</a>
              </div>
            </nav>
          </div>
        </div>

        <!-- dark -->
        <div>
          <p class="text-xs text-base-content/50 mb-1.5">navbar-invert</p>
          <div class="rounded-box overflow-hidden">
            <nav class="navbar navbar-invert">
              <div class="navbar-start">
                <a class="navbar-brand">
                  <div class="w-6 h-6 rounded bg-primary flex items-center justify-center shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-3.5 w-3.5 text-primary-content"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  Yami UI
                </a>
              </div>
              <div class="navbar-center">
                <a class="navbar-link navbar-link-active">首页</a>
                <a class="navbar-link">文档</a>
                <a class="navbar-link">组件</a>
              </div>
              <div class="navbar-end">
                <a class="btn btn-sm btn-ghost" style="color: oklch(95% 0 0 / 70%)">登录</a>
                <a class="btn btn-sm btn-primary">注册</a>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </DocsSection>

    <!-- 响应式（移动端折叠） -->
    <DocsSection title="响应式折叠（缩小窗口查看效果）">
      <div class="rounded-box border border-base-200 overflow-visible">
        <nav class="navbar navbar-bordered relative">
          <div class="navbar-start">
            <a class="navbar-brand">
              <div class="w-7 h-7 rounded-lg bg-primary flex items-center justify-center shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-4 text-primary-content"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              Yami UI
            </a>
          </div>

          <!-- 桌面端导航 -->
          <div class="navbar-center hidden md:flex">
            <a class="navbar-link navbar-link-active">首页</a>
            <a class="navbar-link">文档</a>
            <a class="navbar-link">组件</a>
            <a class="navbar-link">博客</a>
          </div>

          <div class="navbar-end">
            <div class="hidden md:flex gap-2">
              <a class="btn btn-sm btn-ghost">登录</a>
              <a class="btn btn-sm btn-primary">注册</a>
            </div>
            <!-- 移动端汉堡 -->
            <button class="navbar-toggle md:hidden" data-dropdown-toggle="navbar-mobile-menu">
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
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>

          <!-- 移动端菜单 -->
          <div id="navbar-mobile-menu" class="navbar-menu md:hidden" hidden>
            <a class="navbar-link navbar-link-active">首页</a>
            <a class="navbar-link">文档</a>
            <a class="navbar-link">组件</a>
            <a class="navbar-link">博客</a>
            <div class="navbar-divider" />
            <div class="flex gap-2 px-1 pb-1">
              <a class="btn btn-sm btn-ghost flex-1">登录</a>
              <a class="btn btn-sm btn-primary flex-1">注册</a>
            </div>
          </div>
        </nav>
      </div>
      <p class="text-sm text-base-content/60">
        移动端（&lt; 768px）显示汉堡按钮，菜单由 Dropdown 插件驱动。
      </p>
    </DocsSection>
  </DocsContainer>
</template>
