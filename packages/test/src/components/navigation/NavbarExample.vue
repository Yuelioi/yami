<script setup lang="ts">
import DocsHeader from "../zcomp/DocsHeader.vue";
import DocsContainer from "../zcomp/DocsContainer.vue";
import DocsSection from "../zcomp/DocsSection.vue";
import ApiReference from "../zcomp/ApiReference.vue";

const apiClasses = [
  {
    category: "基础",
    className: "navbar",
    description: "导航栏容器，水平布局，支持背景和边框。",
    isCategoryStart: true,
  },
  {
    category: "区域",
    className: "navbar-start",
    description: "左侧区域。",
    isCategoryStart: true,
  },
  {
    category: "区域",
    className: "navbar-center",
    description: "中间区域。",
    isCategoryStart: false,
  },
  {
    category: "区域",
    className: "navbar-end",
    description: "右侧区域。",
    isCategoryStart: false,
  },
  {
    category: "品牌",
    className: "navbar-brand",
    description: "品牌/logo 区域。",
    isCategoryStart: true,
  },
  {
    category: "导航",
    className: "navbar-nav",
    description: "导航链接容器。",
    isCategoryStart: true,
  },
  {
    category: "导航",
    className: "navbar-link",
    description: "导航链接样式。",
    isCategoryStart: false,
  },
  {
    category: "样式变体",
    className: "navbar-fixed-top",
    description: "固定顶部。",
    isCategoryStart: true,
  },
  {
    category: "样式变体",
    className: "navbar-fixed-bottom",
    description: "固定底部。",
    isCategoryStart: false,
  },
  {
    category: "样式变体",
    className: "navbar-sticky",
    description: "粘性定位。",
    isCategoryStart: false,
  },
  {
    category: "样式变体",
    className: "navbar-glass",
    description: "半透明玻璃背景。",
    isCategoryStart: false,
  },
  {
    category: "样式变体",
    className: "navbar-borderless",
    description: "无边框。",
    isCategoryStart: false,
  },
  {
    category: "样式变体",
    className: "navbar-shadow",
    description: "带阴影。",
    isCategoryStart: false,
  },
  {
    category: "样式变体",
    className: "navbar-dark",
    description: "深色背景。",
    isCategoryStart: false,
  },
  {
    category: "样式变体",
    className: "navbar-primary",
    description: "主题色背景。",
    isCategoryStart: false,
  },
  {
    category: "尺寸",
    className: "navbar-sm",
    description: "小尺寸。",
    isCategoryStart: true,
  },
  {
    category: "尺寸",
    className: "navbar-lg",
    description: "大尺寸。",
    isCategoryStart: false,
  },
  {
    category: "尺寸",
    className: "navbar-compact",
    description: "紧凑型。",
    isCategoryStart: false,
  },
  {
    category: "导航元素",
    className: "navbar-divider",
    description: "分隔符。",
    isCategoryStart: true,
  },

  {
    category: "下拉菜单",
    className: "navbar-dropdown",
    description: "下拉菜单容器。",
    isCategoryStart: true,
  },
  {
    category: "下拉菜单",
    className: "navbar-dropdown-toggle",
    description: "下拉触发按钮。",
    isCategoryStart: false,
  },
  {
    category: "下拉菜单",
    className: "navbar-dropdown-icon",
    description: "下拉箭头图标。",
    isCategoryStart: false,
  },
  {
    category: "搜索框",
    className: "navbar-search",
    description: "搜索框容器。",
    isCategoryStart: true,
  },
  {
    category: "搜索框",
    className: "navbar-search-input",
    description: "搜索输入框。",
    isCategoryStart: false,
  },
  {
    category: "响应式",
    className: "navbar-responsive",
    description: "响应式布局。",
    isCategoryStart: true,
  },
  {
    category: "移动端",
    className: "navbar-mobile",
    description: "移动端菜单容器。",
    isCategoryStart: true,
  },
  {
    category: "移动端",
    className: "navbar-mobile-toggle",
    description: "移动端菜单切换按钮。",
    isCategoryStart: false,
  },
  {
    category: "移动端",
    className: "navbar-mobile-menu",
    description: "移动端菜单列表。",
    isCategoryStart: false,
  },
  {
    category: "容器",
    className: "navbar-container",
    description: "内部内容容器，居中显示。",
    isCategoryStart: true,
  },
];
</script>

<template>
  <DocsContainer>
    <DocsHeader
      title="Navbar 导航栏组件"
      description="提供顶部/底部导航栏布局，支持品牌、导航链接、下拉菜单、搜索框、徽章、头像和响应式移动端菜单。"
    />

    <ApiReference :data="apiClasses" />

    <DocsSection title="基础示例">
      <div class="navbar navbar-shadow">
        <div class="navbar-start">
          <a href="#" class="navbar-brand">
            <svg
              class="size-8"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
            TechCorp
          </a>
          <span class="navbar-divider"></span>
          <div class="navbar-nav hidden md:flex">
            <a href="#" class="navbar-link" aria-current="page">产品</a>
            <a href="#" class="navbar-link">解决方案</a>
            <a href="#" class="navbar-link">开发者</a>
            <a href="#" class="navbar-link">定价</a>
          </div>
        </div>

        <div class="navbar-end">
          <div class="navbar-search hidden lg:flex">
            <svg
              class="size-4 text-muted-foreground"
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
            <input class="navbar-search-input" placeholder="搜索文档..." />
            <kbd
              class="hidden lg:inline-flex items-center px-1.5 py-0.5 text-xs font-mono text-muted-foreground bg-muted rounded"
              >⌘K</kbd
            >
          </div>

          <button class="btn btn-ghost btn-icon relative">
            <svg
              class="size-5"
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
            <span class="-dot"></span>
          </button>

          <div class="avatar">
            <img
              src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"
              alt="User"
            />
          </div>

          <button class="btn btn-sm btn-primary hidden md:inline-flex">
            开始使用
          </button>

          <button class="btn btn-ghost btn-icon md:hidden">
            <svg
              class="size-6"
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
      </div>
    </DocsSection>

    <DocsSection title="样式与位置">
      <div class="flex flex-col gap-8">
        <!-- 毛玻璃效果 -->
        <div
          class="relative h-32 rounded-lg overflow-hidden bg-gradient-to-r from-primary/20 to-secondary/20"
        >
          <div class="navbar navbar-glass navbar-sticky top-0">
            <div class="navbar-start">
              <div class="navbar-brand">✨ Glass Effect</div>
            </div>
            <div class="navbar-end">
              <div class="navbar-nav">
                <a href="#" class="navbar-link">Features</a>
                <a href="#" class="navbar-link">Pricing</a>
                <a href="#" class="navbar-link">About</a>
              </div>
            </div>
          </div>
          <div class="p-8 text-sm text-muted-foreground text-center">
            滚动查看毛玻璃效果
          </div>
        </div>

        <!-- 主题色导航栏 -->
        <div class="navbar navbar-primary navbar-shadow">
          <div class="navbar-start">
            <div class="navbar-brand">🎨 Primary Theme</div>
            <div class="navbar-nav">
              <a href="#" class="navbar-link active">Dashboard</a>
              <a href="#" class="navbar-link">Analytics</a>
              <a href="#" class="navbar-link">Reports</a>
            </div>
          </div>
          <div class="navbar-end">
            <button class="btn btn-sm">Upgrade</button>
          </div>
        </div>

        <!-- 深色导航栏 -->
        <div class="navbar navbar-dark navbar-shadow">
          <div class="navbar-start">
            <div class="navbar-brand">🌙 Dark Mode</div>
          </div>
          <div class="navbar-center">
            <div class="navbar-nav">
              <a href="#" class="navbar-link">Home</a>
              <a href="#" class="navbar-link">Explore</a>
              <a href="#" class="navbar-link">Community</a>
            </div>
          </div>
          <div class="navbar-end">
            <button class="btn btn-sm btn-ghost">Sign In</button>
          </div>
        </div>

        <!-- 紧凑型导航栏 -->
        <div class="navbar navbar-compact navbar-sm navbar-bordered">
          <div class="navbar-start">
            <div class="navbar-brand text-sm">📱 Compact</div>
          </div>
          <div class="navbar-end">
            <div class="navbar-nav">
              <a href="#" class="navbar-link">Docs</a>
              <a href="#" class="navbar-link">API</a>
            </div>
          </div>
        </div>
      </div>
    </DocsSection>

    <DocsSection title="下拉菜单示例">
      <div class="navbar navbar-shadow">
        <div class="navbar-start">
          <div class="navbar-brand">📚 Documentation</div>
        </div>

        <div class="navbar-center">
          <div class="navbar-nav">
            <a href="#" class="navbar-link">Getting Started</a>

            <div class="navbar-dropdown">
              <button class="navbar-dropdown-toggle">
                Components
                <svg
                  class="navbar-dropdown-icon size-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div
                class="absolute mt-2 w-56 bg-popover border border-border rounded-lg shadow-lg p-2 hidden group-hover:block"
              >
                <a href="#" class="navbar-link block">Buttons</a>
                <a href="#" class="navbar-link block">Inputs</a>
                <a href="#" class="navbar-link block">Cards</a>
                <div class="navbar-divider my-2"></div>
                <a href="#" class="navbar-link block text-primary"
                  >View All →</a
                >
              </div>
            </div>

            <a href="#" class="navbar-link">Examples</a>
          </div>
        </div>

        <div class="navbar-end">
          <div class="flex items-center gap-2">
            <button class="btn btn-ghost btn-icon relative">
              <svg
                class="size-5"
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
              <span class="">5</span>
            </button>

            <span class="navbar-divider"></span>

            <div class="navbar-dropdown">
              <button class="avatar">
                <img
                  src="https://api.dicebear.com/7.x/avataaars/svg?seed=Alex"
                  alt="User"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </DocsSection>

    <DocsSection title="大尺寸导航栏">
      <div class="navbar navbar-lg navbar-shadow">
        <div class="navbar-start">
          <a href="#" class="navbar-brand">
            <svg
              class="size-10"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
              />
            </svg>
            Enterprise Dashboard
          </a>
        </div>

        <div class="navbar-end">
          <div class="navbar-search">
            <svg
              class="size-5 text-muted-foreground"
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
              class="navbar-search-input"
              placeholder="Search projects, teams, or files..."
            />
          </div>

          <button class="btn btn-ghost btn-icon-lg relative">
            <svg
              class="size-6"
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
            <span class="">12</span>
          </button>

          <div class="avatar" style="width: 2.5rem; height: 2.5rem">
            <img
              src="https://api.dicebear.com/7.x/avataaars/svg?seed=Manager"
              alt="User"
            />
          </div>
        </div>
      </div>
    </DocsSection>
  </DocsContainer>
</template>
