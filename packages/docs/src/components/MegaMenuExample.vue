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
  {
    category: '导航栏',
    className: 'mega-menu-nav',
    description: 'Navbar 容器',
    isCategoryStart: true,
  },
  {
    category: '导航栏',
    className: 'mega-menu-brand',
    description: 'Logo 品牌区',
    isCategoryStart: false,
  },
  {
    category: '导航栏',
    className: 'mega-menu-list',
    description: '导航链接列表',
    isCategoryStart: false,
  },
  {
    category: '导航栏',
    className: 'mega-menu-link',
    description: '导航链接/触发按钮',
    isCategoryStart: false,
  },
  {
    category: '导航栏',
    className: 'mega-menu-link-active',
    description: '当前激活链接',
    isCategoryStart: false,
  },
  {
    category: '导航栏',
    className: 'mega-menu-actions',
    description: '右侧操作区',
    isCategoryStart: false,
  },
  {
    category: '下拉面板',
    className: 'mega-menu-dropdown',
    description: '下拉面板容器',
    isCategoryStart: true,
  },
  {
    category: '下拉面板',
    className: 'mega-menu-cols-2',
    description: '2 列布局',
    isCategoryStart: false,
  },
  {
    category: '下拉面板',
    className: 'mega-menu-cols-3',
    description: '3 列布局（默认）',
    isCategoryStart: false,
  },
  {
    category: '下拉面板',
    className: 'mega-menu-cols-4',
    description: '4 列布局',
    isCategoryStart: false,
  },
  {
    category: '下拉面板',
    className: 'mega-menu-section',
    description: '分组容器',
    isCategoryStart: false,
  },
  {
    category: '下拉面板',
    className: 'mega-menu-section-title',
    description: '分组标题',
    isCategoryStart: false,
  },
  {
    category: '下拉面板',
    className: 'mega-menu-divider',
    description: '分割线',
    isCategoryStart: false,
  },
  {
    category: '下拉面板',
    className: 'mega-menu-footer',
    description: '面板底部 CTA 区',
    isCategoryStart: false,
  },
  {
    category: '列表项',
    className: 'mega-menu-item',
    description: '面板内链接项',
    isCategoryStart: true,
  },
  {
    category: '列表项',
    className: 'mega-menu-item-icon',
    description: '图标容器',
    isCategoryStart: false,
  },
  {
    category: '列表项',
    className: 'mega-menu-item-body',
    description: '文字容器',
    isCategoryStart: false,
  },
  {
    category: '列表项',
    className: 'mega-menu-item-title',
    description: '项目标题',
    isCategoryStart: false,
  },
  {
    category: '列表项',
    className: 'mega-menu-item-desc',
    description: '项目描述',
    isCategoryStart: false,
  },
  {
    category: '列表项',
    className: 'mega-menu-card',
    description: '高亮卡片块',
    isCategoryStart: false,
  },
  {
    category: '列表项',
    className: 'mega-menu-card-title',
    description: '卡片标题',
    isCategoryStart: false,
  },
  {
    category: '列表项',
    className: 'mega-menu-card-desc',
    description: '卡片描述',
    isCategoryStart: false,
  },
]
</script>

<template>
  <DocsContainer>
    <DocsHeader
      title="Mega Menu"
      description="巨型菜单组件用于在导航栏中展示多列内容的全宽下拉面板，支持链接、图标、描述与卡片块。"
    />

    <ApiReference :data="apiClasses" />

    <!-- 基础（多列链接） -->
    <DocsSection title="基础（多列链接）">
      <div class="relative rounded-box border border-base-200 overflow-visible">
        <nav class="mega-menu-nav rounded-box">
          <a class="mega-menu-brand">
            <div class="w-7 h-7 rounded-lg bg-primary flex items-center justify-center">
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

          <div class="mega-menu-list">
            <a class="mega-menu-link mega-menu-link-active">首页</a>

            <button class="mega-menu-link" data-dropdown-toggle="mega-basic">
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

            <a class="mega-menu-link">团队</a>
            <a class="mega-menu-link">联系</a>
          </div>

          <div class="mega-menu-actions">
            <a class="btn btn-sm btn-ghost">登录</a>
            <a class="btn btn-sm btn-primary">注册</a>
          </div>

          <!-- 下拉面板 -->
          <div id="mega-basic" class="mega-menu-dropdown mega-menu-cols-3" hidden>
            <div class="mega-menu-section">
              <p class="mega-menu-section-title">公司</p>
              <a class="mega-menu-item">关于我们</a>
              <a class="mega-menu-item">组件库</a>
              <a class="mega-menu-item">资源文档</a>
              <a class="mega-menu-item">Pro 版本</a>
            </div>
            <div class="mega-menu-section">
              <p class="mega-menu-section-title">内容</p>
              <a class="mega-menu-item">博客</a>
              <a class="mega-menu-item">新闻通讯</a>
              <a class="mega-menu-item">演示场地</a>
              <a class="mega-menu-item">开源协议</a>
            </div>
            <div class="mega-menu-section">
              <p class="mega-menu-section-title">支持</p>
              <a class="mega-menu-item">联系我们</a>
              <a class="mega-menu-item">帮助中心</a>
              <a class="mega-menu-item">服务条款</a>
            </div>
          </div>
        </nav>
      </div>
    </DocsSection>

    <!-- 带图标与描述 -->
    <DocsSection title="带图标与描述">
      <div class="relative rounded-box border border-base-200 overflow-visible">
        <nav class="mega-menu-nav rounded-box">
          <a class="mega-menu-brand">
            <div class="w-7 h-7 rounded-lg bg-primary flex items-center justify-center">
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

          <div class="mega-menu-list">
            <a class="mega-menu-link">首页</a>
            <button class="mega-menu-link" data-dropdown-toggle="mega-icons">
              解决方案
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-3.5 w-3.5"
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
            <a class="mega-menu-link">定价</a>
          </div>

          <div class="mega-menu-actions">
            <a class="btn btn-sm btn-ghost">登录</a>
            <a class="btn btn-sm btn-primary">免费试用</a>
          </div>

          <div id="mega-icons" class="mega-menu-dropdown mega-menu-cols-3" hidden>
            <a class="mega-menu-item">
              <span class="mega-menu-item-icon">
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
                    d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </span>
              <span class="mega-menu-item-body">
                <span class="mega-menu-item-title">网站构建</span>
                <span class="mega-menu-item-desc">快速搭建专业级别的响应式网站</span>
              </span>
            </a>
            <a class="mega-menu-item">
              <span class="mega-menu-item-icon">
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
                    d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                  />
                </svg>
              </span>
              <span class="mega-menu-item-body">
                <span class="mega-menu-item-title">移动端优先</span>
                <span class="mega-menu-item-desc">为所有设备提供原生级别的体验</span>
              </span>
            </a>
            <a class="mega-menu-item">
              <span class="mega-menu-item-icon">
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
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </span>
              <span class="mega-menu-item-body">
                <span class="mega-menu-item-title">极速性能</span>
                <span class="mega-menu-item-desc">基于最新技术栈的极致加载速度</span>
              </span>
            </a>
            <a class="mega-menu-item">
              <span class="mega-menu-item-icon">
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
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </span>
              <span class="mega-menu-item-body">
                <span class="mega-menu-item-title">安全防护</span>
                <span class="mega-menu-item-desc">企业级安全策略与数据保护</span>
              </span>
            </a>
            <a class="mega-menu-item">
              <span class="mega-menu-item-icon">
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
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </span>
              <span class="mega-menu-item-body">
                <span class="mega-menu-item-title">团队协作</span>
                <span class="mega-menu-item-desc">实时多人协作与权限管理</span>
              </span>
            </a>
            <a class="mega-menu-item">
              <span class="mega-menu-item-icon">
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
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              </span>
              <span class="mega-menu-item-body">
                <span class="mega-menu-item-title">数据分析</span>
                <span class="mega-menu-item-desc">可视化报表与业务洞察</span>
              </span>
            </a>
          </div>
        </nav>
      </div>
    </DocsSection>

    <!-- 带卡片与底部 CTA -->
    <DocsSection title="带卡片与底部 CTA">
      <div class="relative rounded-box border border-base-200 overflow-visible">
        <nav class="mega-menu-nav rounded-box">
          <a class="mega-menu-brand">
            <div class="w-7 h-7 rounded-lg bg-primary flex items-center justify-center">
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

          <div class="mega-menu-list">
            <a class="mega-menu-link">首页</a>
            <button class="mega-menu-link" data-dropdown-toggle="mega-card">
              开发者
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-3.5 w-3.5"
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
            <a class="mega-menu-link">博客</a>
          </div>

          <div class="mega-menu-actions">
            <a class="btn btn-sm btn-ghost">登录</a>
            <a class="btn btn-sm btn-primary">开始使用</a>
          </div>

          <div id="mega-card" class="mega-menu-dropdown mega-menu-cols-3" hidden>
            <!-- 高亮卡片 -->
            <div class="mega-menu-card row-span-2">
              <div class="w-10 h-10 rounded-lg bg-primary flex items-center justify-center mb-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 text-primary-content"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                  />
                </svg>
              </div>
              <p class="mega-menu-card-title">组件文档</p>
              <p class="mega-menu-card-desc">查阅完整的组件 API 文档，快速上手集成到你的项目中。</p>
              <a class="btn btn-sm btn-primary btn-soft mt-2 self-start">查看文档 →</a>
            </div>

            <div class="mega-menu-section">
              <p class="mega-menu-section-title">资源</p>
              <a class="mega-menu-item">
                <span class="mega-menu-item-icon">
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
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                </span>
                <span class="mega-menu-item-body">
                  <span class="mega-menu-item-title">快速入门</span>
                  <span class="mega-menu-item-desc">5 分钟上手指南</span>
                </span>
              </a>
              <a class="mega-menu-item">
                <span class="mega-menu-item-icon">
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
                      d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </span>
                <span class="mega-menu-item-body">
                  <span class="mega-menu-item-title">API 参考</span>
                  <span class="mega-menu-item-desc">完整的接口说明</span>
                </span>
              </a>
            </div>

            <div class="mega-menu-section">
              <p class="mega-menu-section-title">工具</p>
              <a class="mega-menu-item">
                <span class="mega-menu-item-icon">
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
                      d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                    />
                  </svg>
                </span>
                <span class="mega-menu-item-body">
                  <span class="mega-menu-item-title">主题生成器</span>
                  <span class="mega-menu-item-desc">可视化定制主题颜色</span>
                </span>
              </a>
              <a class="mega-menu-item">
                <span class="mega-menu-item-icon">
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
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </span>
                <span class="mega-menu-item-body">
                  <span class="mega-menu-item-title">图标库</span>
                  <span class="mega-menu-item-desc">600+ 开源图标</span>
                </span>
              </a>
            </div>

            <div class="mega-menu-footer">
              <p class="text-sm text-base-content/60">还没有账号？</p>
              <div class="flex gap-2">
                <a class="btn btn-sm btn-ghost">查看示例</a>
                <a class="btn btn-sm btn-primary">免费注册</a>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </DocsSection>

    <!-- 4 列布局 -->
    <DocsSection title="4 列布局">
      <div class="relative rounded-box border border-base-200 overflow-visible">
        <nav class="mega-menu-nav rounded-box">
          <a class="mega-menu-brand">
            <div class="w-7 h-7 rounded-lg bg-primary flex items-center justify-center">
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

          <div class="mega-menu-list">
            <a class="mega-menu-link">首页</a>
            <button class="mega-menu-link" data-dropdown-toggle="mega-4col">
              全部功能
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-3.5 w-3.5"
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
            <a class="mega-menu-link">价格</a>
            <a class="mega-menu-link">关于</a>
          </div>

          <div class="mega-menu-actions">
            <a class="btn btn-sm btn-ghost">登录</a>
            <a class="btn btn-sm btn-primary">注册</a>
          </div>

          <div id="mega-4col" class="mega-menu-dropdown mega-menu-cols-4" hidden>
            <div class="mega-menu-section">
              <p class="mega-menu-section-title">设计</p>
              <a class="mega-menu-item">组件库</a>
              <a class="mega-menu-item">主题系统</a>
              <a class="mega-menu-item">设计规范</a>
              <a class="mega-menu-item">Figma 资源</a>
            </div>
            <div class="mega-menu-section">
              <p class="mega-menu-section-title">开发</p>
              <a class="mega-menu-item">快速入门</a>
              <a class="mega-menu-item">API 文档</a>
              <a class="mega-menu-item">GitHub</a>
              <a class="mega-menu-item">更新日志</a>
            </div>
            <div class="mega-menu-section">
              <p class="mega-menu-section-title">资源</p>
              <a class="mega-menu-item">模板市场</a>
              <a class="mega-menu-item">图标库</a>
              <a class="mega-menu-item">色彩系统</a>
              <a class="mega-menu-item">字体推荐</a>
            </div>
            <div class="mega-menu-section">
              <p class="mega-menu-section-title">社区</p>
              <a class="mega-menu-item">Discord</a>
              <a class="mega-menu-item">论坛</a>
              <a class="mega-menu-item">博客</a>
              <a class="mega-menu-item">案例展示</a>
            </div>
          </div>
        </nav>
      </div>
    </DocsSection>

    <!-- Hover 触发 -->
    <DocsSection title="Hover 触发">
      <div class="relative rounded-box border border-base-200 overflow-visible">
        <nav class="mega-menu-nav rounded-box">
          <a class="mega-menu-brand">
            <div class="w-7 h-7 rounded-lg bg-primary flex items-center justify-center">
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

          <div class="mega-menu-list">
            <a class="mega-menu-link">首页</a>
            <button
              class="mega-menu-link"
              data-dropdown-toggle="mega-hover"
              data-dropdown-trigger="hover"
            >
              悬停展开
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-3.5 w-3.5"
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
            <a class="mega-menu-link">关于</a>
          </div>

          <div class="mega-menu-actions">
            <a class="btn btn-sm btn-primary">注册</a>
          </div>

          <div id="mega-hover" class="mega-menu-dropdown mega-menu-cols-3" hidden>
            <div class="mega-menu-section">
              <p class="mega-menu-section-title">产品</p>
              <a class="mega-menu-item">功能介绍</a>
              <a class="mega-menu-item">价格方案</a>
              <a class="mega-menu-item">更新日志</a>
            </div>
            <div class="mega-menu-section">
              <p class="mega-menu-section-title">开发者</p>
              <a class="mega-menu-item">文档中心</a>
              <a class="mega-menu-item">API 参考</a>
              <a class="mega-menu-item">GitHub</a>
            </div>
            <div class="mega-menu-section">
              <p class="mega-menu-section-title">支持</p>
              <a class="mega-menu-item">帮助中心</a>
              <a class="mega-menu-item">联系我们</a>
              <a class="mega-menu-item">服务状态</a>
            </div>
          </div>
        </nav>
      </div>
    </DocsSection>
  </DocsContainer>
</template>
