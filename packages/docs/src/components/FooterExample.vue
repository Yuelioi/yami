<script setup lang="ts">
import DocsHeader from '@/components/zcomp/DocsHeader.vue'
import DocsSection from '@/components/zcomp/DocsSection.vue'
import ApiReference from '@/components/zcomp/ApiReference.vue'
import DocsContainer from '@/components/zcomp/DocsContainer.vue'

const apiClasses = [
  { category: '基础', className: 'footer', description: 'Footer 容器', isCategoryStart: true },
  {
    category: '基础',
    className: 'footer-section',
    description: '链接分组区块',
    isCategoryStart: false,
  },
  { category: '基础', className: 'footer-title', description: '分组标题', isCategoryStart: false },
  { category: '基础', className: 'footer-link', description: '链接项', isCategoryStart: false },
  { category: '基础', className: 'footer-logo', description: 'Logo 区域', isCategoryStart: false },
  {
    category: '基础',
    className: 'footer-description',
    description: '品牌描述文字',
    isCategoryStart: false,
  },
  { category: '基础', className: 'footer-divider', description: '分割线', isCategoryStart: false },
  {
    category: '基础',
    className: 'footer-bottom',
    description: '底部版权栏',
    isCategoryStart: false,
  },
  {
    category: '基础',
    className: 'footer-social',
    description: '社交图标容器',
    isCategoryStart: false,
  },
  {
    category: '基础',
    className: 'footer-social-btn',
    description: '社交图标按钮',
    isCategoryStart: false,
  },
  {
    category: '布局',
    className: 'footer-center',
    description: '内容居中对齐',
    isCategoryStart: true,
  },
  {
    category: '样式',
    className: 'footer-bordered',
    description: '顶部边框',
    isCategoryStart: true,
  },
  { category: '样式', className: 'footer-dark', description: '深色背景', isCategoryStart: false },
]
</script>

<template>
  <DocsContainer>
    <DocsHeader
      title="Footer"
      description="页脚组件用于展示品牌信息、导航链接、版权声明及社交媒体入口。"
    />

    <ApiReference :data="apiClasses" />

    <!-- 简单链接 -->
    <DocsSection title="简单链接">
      <footer class="footer footer-bordered p-8 bg-base-200">
        <div class="footer-section">
          <span class="footer-title">产品</span>
          <a class="footer-link">功能介绍</a>
          <a class="footer-link">价格方案</a>
          <a class="footer-link">更新日志</a>
          <a class="footer-link">路线图</a>
        </div>
        <div class="footer-section">
          <span class="footer-title">公司</span>
          <a class="footer-link">关于我们</a>
          <a class="footer-link">团队介绍</a>
          <a class="footer-link">加入我们</a>
          <a class="footer-link">新闻动态</a>
        </div>
        <div class="footer-section">
          <span class="footer-title">支持</span>
          <a class="footer-link">帮助中心</a>
          <a class="footer-link">联系我们</a>
          <a class="footer-link">服务状态</a>
          <a class="footer-link">社区论坛</a>
        </div>
        <div class="footer-section">
          <span class="footer-title">法律</span>
          <a class="footer-link">隐私政策</a>
          <a class="footer-link">服务条款</a>
          <a class="footer-link">Cookie 政策</a>
        </div>
      </footer>
    </DocsSection>

    <!-- 带 Logo 与描述 -->
    <DocsSection title="带 Logo 与描述">
      <footer class="footer footer-bordered p-8 bg-base-200">
        <!-- Logo + 描述 -->
        <div class="footer-logo">
          <div class="flex items-center gap-2 mb-3">
            <div class="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
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
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <span class="text-lg font-bold text-base-content">Yami UI</span>
          </div>
          <p class="footer-description max-w-xs">
            一套基于 Tailwind CSS 4 构建的现代组件库，帮助你快速搭建优雅的用户界面。
          </p>
        </div>

        <div class="footer-section">
          <span class="footer-title">产品</span>
          <a class="footer-link">功能介绍</a>
          <a class="footer-link">价格方案</a>
          <a class="footer-link">更新日志</a>
        </div>
        <div class="footer-section">
          <span class="footer-title">开发者</span>
          <a class="footer-link">文档中心</a>
          <a class="footer-link">组件示例</a>
          <a class="footer-link">GitHub</a>
        </div>
        <div class="footer-section">
          <span class="footer-title">公司</span>
          <a class="footer-link">关于我们</a>
          <a class="footer-link">加入我们</a>
          <a class="footer-link">联系我们</a>
        </div>
      </footer>
    </DocsSection>

    <!-- 带版权栏 -->
    <DocsSection title="带版权栏">
      <footer class="footer footer-bordered bg-base-200">
        <div class="p-8 grid grid-cols-2 md:grid-cols-4 gap-8 w-full">
          <div class="footer-section">
            <span class="footer-title">产品</span>
            <a class="footer-link">功能介绍</a>
            <a class="footer-link">价格方案</a>
            <a class="footer-link">更新日志</a>
          </div>
          <div class="footer-section">
            <span class="footer-title">公司</span>
            <a class="footer-link">关于我们</a>
            <a class="footer-link">加入我们</a>
            <a class="footer-link">新闻动态</a>
          </div>
          <div class="footer-section">
            <span class="footer-title">支持</span>
            <a class="footer-link">帮助中心</a>
            <a class="footer-link">联系我们</a>
            <a class="footer-link">服务状态</a>
          </div>
          <div class="footer-section">
            <span class="footer-title">法律</span>
            <a class="footer-link">隐私政策</a>
            <a class="footer-link">服务条款</a>
          </div>
        </div>

        <div class="footer-divider" />

        <div class="footer-bottom px-8 py-4">
          <span class="text-sm text-base-content/50">© 2025 Yami UI. 保留所有权利。</span>
          <div class="footer-social">
            <!-- GitHub -->
            <a class="footer-social-btn" aria-label="GitHub">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"
                />
              </svg>
            </a>
            <!-- Twitter/X -->
            <a class="footer-social-btn" aria-label="Twitter">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
                />
              </svg>
            </a>
            <!-- Discord -->
            <a class="footer-social-btn" aria-label="Discord">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03z"
                />
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </DocsSection>

    <!-- 居中对齐 -->
    <DocsSection title="居中对齐">
      <footer class="footer footer-center footer-bordered p-10 bg-base-200">
        <!-- Logo -->
        <div class="flex items-center gap-2">
          <div class="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
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
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
          </div>
          <span class="text-lg font-bold">Yami UI</span>
        </div>

        <!-- 描述 -->
        <p class="footer-description max-w-sm">
          一套基于 Tailwind CSS 4 构建的现代组件库，帮助你快速搭建优雅的用户界面。
        </p>

        <!-- 导航链接 -->
        <nav class="flex flex-wrap justify-center gap-x-8 gap-y-2">
          <a class="footer-link">关于</a>
          <a class="footer-link">文档</a>
          <a class="footer-link">定价</a>
          <a class="footer-link">博客</a>
          <a class="footer-link">联系</a>
        </nav>

        <!-- 社交 -->
        <div class="footer-social">
          <a class="footer-social-btn" aria-label="GitHub">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"
              />
            </svg>
          </a>
          <a class="footer-social-btn" aria-label="Twitter">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
              />
            </svg>
          </a>
          <a class="footer-social-btn" aria-label="Discord">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03z"
              />
            </svg>
          </a>
        </div>

        <div class="footer-divider w-full" />
        <p class="text-sm text-base-content/50">© 2025 Yami UI. 保留所有权利。</p>
      </footer>
    </DocsSection>

    <!-- 深色 -->
    <DocsSection title="深色">
      <footer class="footer footer-dark">
        <div class="p-8 grid grid-cols-2 md:grid-cols-4 gap-8 w-full">
          <div class="footer-logo col-span-2 md:col-span-1">
            <div class="flex items-center gap-2 mb-3">
              <div class="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
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
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <span class="text-lg font-bold text-white">Yami UI</span>
            </div>
            <p class="footer-description max-w-xs">
              一套现代化 Tailwind CSS 组件库，专为开发者设计。
            </p>
          </div>

          <div class="footer-section">
            <span class="footer-title">产品</span>
            <a class="footer-link">功能介绍</a>
            <a class="footer-link">价格方案</a>
            <a class="footer-link">更新日志</a>
          </div>
          <div class="footer-section">
            <span class="footer-title">开发者</span>
            <a class="footer-link">文档中心</a>
            <a class="footer-link">组件示例</a>
            <a class="footer-link">GitHub</a>
          </div>
          <div class="footer-section">
            <span class="footer-title">公司</span>
            <a class="footer-link">关于我们</a>
            <a class="footer-link">加入我们</a>
            <a class="footer-link">联系我们</a>
          </div>
        </div>

        <div class="footer-divider" />

        <div class="footer-bottom px-8 py-4">
          <span class="text-sm" style="color: oklch(100% 0 0 / 40%)"
            >© 2025 Yami UI. 保留所有权利。</span
          >
          <div class="footer-social">
            <a class="footer-social-btn" aria-label="GitHub">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"
                />
              </svg>
            </a>
            <a class="footer-social-btn" aria-label="Twitter">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
                />
              </svg>
            </a>
            <a class="footer-social-btn" aria-label="Discord">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03z"
                />
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </DocsSection>
  </DocsContainer>
</template>
