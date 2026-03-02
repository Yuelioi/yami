<script setup lang="ts">
import DocsHeader from '@/components/zcomp/DocsHeader.vue'
import DocsSection from '@/components/zcomp/DocsSection.vue'
import ApiReference from '@/components/zcomp/ApiReference.vue'
import DocsContainer from '@/components/zcomp/DocsContainer.vue'
import { initSidebars } from '@yuelioi/yami/plugins/sidebar'
import { onMounted } from 'vue'

onMounted(() => {
  initSidebars()
})

const apiClasses = [
  { category: '容器', className: 'sidebar', description: 'Sidebar 根容器', isCategoryStart: true },
  {
    category: '容器',
    className: 'sidebar-header',
    description: '顶部 Logo 区',
    isCategoryStart: false,
  },
  {
    category: '容器',
    className: 'sidebar-content',
    description: '可滚动菜单区',
    isCategoryStart: false,
  },
  {
    category: '容器',
    className: 'sidebar-footer',
    description: '底部用户/操作区',
    isCategoryStart: false,
  },
  {
    category: '容器',
    className: 'sidebar-section',
    description: '菜单分组容器',
    isCategoryStart: false,
  },
  {
    category: '元素',
    className: 'sidebar-header-brand',
    description: 'Logo 品牌区',
    isCategoryStart: true,
  },
  {
    category: '元素',
    className: 'sidebar-toggle-btn',
    description: '折叠切换按钮',
    isCategoryStart: false,
  },
  {
    category: '元素',
    className: 'sidebar-group-title',
    description: '分组标题',
    isCategoryStart: false,
  },
  { category: '元素', className: 'sidebar-divider', description: '分割线', isCategoryStart: false },
  {
    category: '元素',
    className: 'sidebar-search',
    description: '搜索框容器',
    isCategoryStart: false,
  },
  { category: '菜单项', className: 'sidebar-item', description: '菜单项', isCategoryStart: true },
  {
    category: '菜单项',
    className: 'sidebar-item-active',
    description: '激活状态',
    isCategoryStart: false,
  },
  {
    category: '菜单项',
    className: 'sidebar-item-disabled',
    description: '禁用状态',
    isCategoryStart: false,
  },
  {
    category: '菜单项',
    className: 'sidebar-icon',
    description: '菜单图标',
    isCategoryStart: false,
  },
  {
    category: '菜单项',
    className: 'sidebar-label',
    description: '菜单文字',
    isCategoryStart: false,
  },
  { category: '菜单项', className: 'sidebar-badge', description: '徽章', isCategoryStart: false },
  {
    category: '菜单项',
    className: 'sidebar-chevron',
    description: '子菜单箭头',
    isCategoryStart: false,
  },
  {
    category: '子菜单',
    className: 'sidebar-submenu',
    description: '子菜单容器（data-open 展开）',
    isCategoryStart: true,
  },
  {
    category: '子菜单',
    className: 'sidebar-submenu-list',
    description: '子菜单列表',
    isCategoryStart: false,
  },
  {
    category: '子菜单',
    className: 'sidebar-subitem',
    description: '子菜单项',
    isCategoryStart: false,
  },
  { category: '底部', className: 'sidebar-user', description: '用户信息行', isCategoryStart: true },
  {
    category: '底部',
    className: 'sidebar-footer-text',
    description: '用户名/邮箱文字区',
    isCategoryStart: false,
  },
  { category: '样式', className: 'sidebar-dark', description: '深色主题', isCategoryStart: true },
  {
    category: '样式',
    className: 'sidebar-bordered',
    description: '右边框激活风格',
    isCategoryStart: false,
  },
  {
    category: '颜色',
    className: 'sidebar-primary',
    description: '主色激活',
    isCategoryStart: true,
  },
  {
    category: '颜色',
    className: 'sidebar-secondary',
    description: '次色激活',
    isCategoryStart: false,
  },
  {
    category: '颜色',
    className: 'sidebar-accent',
    description: '强调色激活',
    isCategoryStart: false,
  },
  {
    category: 'data 属性',
    className: 'data-sidebar-toggle',
    description: '折叠切换按钮，值为 sidebar id',
    isCategoryStart: true,
  },
  {
    category: 'data 属性',
    className: 'data-sidebar-submenu',
    description: '子菜单触发，值为子菜单 id',
    isCategoryStart: false,
  },
  {
    category: 'data 属性',
    className: 'data-collapsed',
    description: '折叠状态标记',
    isCategoryStart: false,
  },
]
</script>

<template>
  <DocsContainer>
    <DocsHeader
      title="Sidebar"
      description="侧边栏导航组件，支持分组、子菜单折叠、徽章、搜索框、用户信息区与收缩到图标模式。"
    />

    <ApiReference :data="apiClasses" />

    <!-- 基础 -->
    <DocsSection title="基础">
      <div class="flex border border-base-200 rounded-box overflow-hidden h-80">
        <aside class="sidebar" id="sidebar-basic">
          <div class="sidebar-header">
            <a class="sidebar-header-brand">
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
              <span>Yami UI</span>
            </a>
          </div>

          <div class="sidebar-content">
            <div class="sidebar-section">
              <a class="sidebar-item sidebar-item-active">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="sidebar-icon"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
                <span class="sidebar-label">仪表盘</span>
              </a>
              <a class="sidebar-item">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="sidebar-icon"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span class="sidebar-label">用户管理</span>
              </a>
              <a class="sidebar-item">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="sidebar-icon"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                  />
                </svg>
                <span class="sidebar-label">产品管理</span>
              </a>
              <a class="sidebar-item">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="sidebar-icon"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
                <span class="sidebar-label">数据分析</span>
              </a>
              <a class="sidebar-item">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="sidebar-icon"
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
                <span class="sidebar-label">系统设置</span>
              </a>
            </div>
          </div>
        </aside>
        <main
          class="flex-1 p-6 bg-base-50 text-sm text-base-content/40 flex items-center justify-center"
        >
          页面内容区域
        </main>
      </div>
    </DocsSection>

    <!-- 带分组与徽章 -->
    <DocsSection title="分组与徽章">
      <div class="flex border border-base-200 rounded-box overflow-hidden h-96">
        <aside class="sidebar" id="sidebar-group">
          <div class="sidebar-header">
            <a class="sidebar-header-brand">
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
              <span>Yami UI</span>
            </a>
          </div>

          <div class="sidebar-content">
            <!-- 主导航 -->
            <div class="sidebar-section">
              <p class="sidebar-group-title">主导航</p>
              <a class="sidebar-item sidebar-item-active">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="sidebar-icon"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
                <span class="sidebar-label">仪表盘</span>
              </a>
              <a class="sidebar-item">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="sidebar-icon"
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
                <span class="sidebar-label">消息中心</span>
                <span class="sidebar-badge">
                  <span class="badge badge-xs badge-error badge-pill">12</span>
                </span>
              </a>
              <a class="sidebar-item">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="sidebar-icon"
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
                <span class="sidebar-label">通知</span>
                <span class="sidebar-badge">
                  <span class="badge badge-xs badge-soft badge-primary badge-pill">3</span>
                </span>
              </a>
            </div>

            <div class="sidebar-divider" />

            <!-- 管理 -->
            <div class="sidebar-section">
              <p class="sidebar-group-title">管理</p>
              <a class="sidebar-item">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="sidebar-icon"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span class="sidebar-label">用户管理</span>
              </a>
              <a class="sidebar-item">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="sidebar-icon"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                  />
                </svg>
                <span class="sidebar-label">产品管理</span>
                <span class="sidebar-badge">
                  <span class="badge badge-xs badge-soft badge-success">新</span>
                </span>
              </a>
              <a class="sidebar-item sidebar-item-disabled">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="sidebar-icon"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
                <span class="sidebar-label">权限管理（禁用）</span>
              </a>
            </div>
          </div>
        </aside>
        <main class="flex-1 p-6 text-sm text-base-content/40 flex items-center justify-center">
          页面内容区域
        </main>
      </div>
    </DocsSection>

    <!-- 子菜单 -->
    <DocsSection title="可折叠子菜单">
      <div class="flex border border-base-200 rounded-box overflow-hidden h-96">
        <aside class="sidebar" id="sidebar-submenu">
          <div class="sidebar-header">
            <a class="sidebar-header-brand">
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
              <span>Yami UI</span>
            </a>
          </div>

          <div class="sidebar-content">
            <div class="sidebar-section">
              <a class="sidebar-item sidebar-item-active">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="sidebar-icon"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
                <span class="sidebar-label">仪表盘</span>
              </a>

              <!-- 有子菜单的项 -->
              <button class="sidebar-item" data-sidebar-submenu="submenu-ecom">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="sidebar-icon"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                  />
                </svg>
                <span class="sidebar-label">电商管理</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="sidebar-chevron"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2.5"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
              <div id="submenu-ecom" class="sidebar-submenu">
                <div class="sidebar-submenu-list">
                  <a class="sidebar-subitem">商品列表</a>
                  <a class="sidebar-subitem">库存管理</a>
                  <a class="sidebar-subitem">订单管理</a>
                  <a class="sidebar-subitem">优惠券</a>
                </div>
              </div>

              <button class="sidebar-item" data-sidebar-submenu="submenu-analytics">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="sidebar-icon"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
                <span class="sidebar-label">数据分析</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="sidebar-chevron"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2.5"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
              <div id="submenu-analytics" class="sidebar-submenu">
                <div class="sidebar-submenu-list">
                  <a class="sidebar-subitem">流量统计</a>
                  <a class="sidebar-subitem">转化漏斗</a>
                  <a class="sidebar-subitem">用户留存</a>
                </div>
              </div>

              <a class="sidebar-item">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="sidebar-icon"
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
                <span class="sidebar-label">系统设置</span>
              </a>
            </div>
          </div>
        </aside>
        <main class="flex-1 p-6 text-sm text-base-content/40 flex items-center justify-center">
          页面内容区域
        </main>
      </div>
    </DocsSection>

    <!-- 可折叠收缩 -->
    <DocsSection title="可折叠收缩（图标模式）">
      <div class="flex border border-base-200 rounded-box overflow-hidden h-80">
        <aside class="sidebar" id="sidebar-collapsible">
          <div class="sidebar-header">
            <a class="sidebar-header-brand">
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
              <span>Yami UI</span>
            </a>
            <button class="sidebar-toggle-btn" data-sidebar-toggle="sidebar-collapsible">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M11 19l-7-7 7-7m8 14l-7-7 7-7"
                />
              </svg>
            </button>
          </div>

          <div class="sidebar-content">
            <div class="sidebar-section">
              <a class="sidebar-item sidebar-item-active">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="sidebar-icon"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
                <span class="sidebar-label">仪表盘</span>
              </a>
              <a class="sidebar-item">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="sidebar-icon"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span class="sidebar-label">用户管理</span>
              </a>
              <a class="sidebar-item">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="sidebar-icon"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                  />
                </svg>
                <span class="sidebar-label">产品管理</span>
              </a>
              <a class="sidebar-item">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="sidebar-icon"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
                <span class="sidebar-label">数据分析</span>
              </a>
              <a class="sidebar-item">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="sidebar-icon"
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
                <span class="sidebar-label">系统设置</span>
              </a>
            </div>
          </div>

          <div class="sidebar-footer">
            <div class="sidebar-user">
              <div
                class="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-content text-sm font-bold shrink-0"
              >
                张
              </div>
              <div class="sidebar-footer-text">
                <span class="text-sm font-medium truncate">张三</span>
                <span class="text-xs text-base-content/50 truncate">zhangsan@example.com</span>
              </div>
            </div>
          </div>
        </aside>
        <main class="flex-1 p-6 text-sm text-base-content/40 flex items-center justify-center">
          点击左上角箭头收缩侧边栏
        </main>
      </div>
    </DocsSection>

    <!-- 带搜索 -->
    <DocsSection title="带搜索框">
      <div class="flex border border-base-200 rounded-box overflow-hidden h-80">
        <aside class="sidebar" id="sidebar-search">
          <div class="sidebar-header">
            <a class="sidebar-header-brand">
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
              <span>Yami UI</span>
            </a>
          </div>

          <div class="sidebar-search">
            <div class="relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4 absolute left-2.5 top-1/2 -translate-y-1/2 text-base-content/40"
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
                placeholder="搜索菜单..."
                class="input input-sm input-bordered w-full pl-8"
              />
            </div>
          </div>

          <div class="sidebar-content">
            <div class="sidebar-section">
              <a class="sidebar-item sidebar-item-active">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="sidebar-icon"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
                <span class="sidebar-label">仪表盘</span>
              </a>
              <a class="sidebar-item">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="sidebar-icon"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span class="sidebar-label">用户管理</span>
              </a>
              <a class="sidebar-item">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="sidebar-icon"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
                <span class="sidebar-label">数据分析</span>
              </a>
              <a class="sidebar-item">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="sidebar-icon"
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
                <span class="sidebar-label">系统设置</span>
              </a>
            </div>
          </div>
        </aside>
        <main class="flex-1 p-6 text-sm text-base-content/40 flex items-center justify-center">
          页面内容区域
        </main>
      </div>
    </DocsSection>

    <!-- 深色 -->
    <DocsSection title="深色主题">
      <div class="flex border border-base-200 rounded-box overflow-hidden h-72">
        <aside class="sidebar sidebar-dark" id="sidebar-dark">
          <div class="sidebar-header">
            <a class="sidebar-header-brand">
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
              <span>Yami UI</span>
            </a>
          </div>
          <div class="sidebar-content">
            <div class="sidebar-section">
              <a class="sidebar-item sidebar-item-active">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="sidebar-icon"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
                <span class="sidebar-label">仪表盘</span>
              </a>
              <a class="sidebar-item">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="sidebar-icon"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span class="sidebar-label">用户管理</span>
              </a>
              <a class="sidebar-item">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="sidebar-icon"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                  />
                </svg>
                <span class="sidebar-label">产品管理</span>
              </a>
              <a class="sidebar-item">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="sidebar-icon"
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
                <span class="sidebar-label">系统设置</span>
              </a>
            </div>
          </div>
          <div class="sidebar-footer">
            <div class="sidebar-user">
              <div
                class="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-content text-sm font-bold shrink-0"
              >
                张
              </div>
              <div class="sidebar-footer-text">
                <span class="text-sm font-medium truncate" style="color: oklch(90% 0 0)">张三</span>
                <span class="text-xs truncate" style="color: oklch(90% 0 0 / 50%)"
                  >zhangsan@example.com</span
                >
              </div>
            </div>
          </div>
        </aside>
        <main class="flex-1 p-6 text-sm text-base-content/40 flex items-center justify-center">
          页面内容区域
        </main>
      </div>
    </DocsSection>
  </DocsContainer>
</template>
