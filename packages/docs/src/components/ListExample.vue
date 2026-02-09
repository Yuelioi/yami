<script setup lang="ts">
import DocsHeader from '@/components/zcomp/DocsHeader.vue'
import DocsSection from '@/components/zcomp/DocsSection.vue'
import ApiReference from '@/components/zcomp/ApiReference.vue'
import DocsContainer from '@/components/zcomp/DocsContainer.vue'

const apiClasses = [
  {
    category: '列表类型',
    className: 'list-disc',
    description: '圆点列表',
    isCategoryStart: true,
  },
  {
    category: '列表类型',
    className: 'list-decimal',
    description: '数字列表',
    isCategoryStart: false,
  },
  {
    category: '列表类型',
    className: 'list-none',
    description: '无标记列表',
    isCategoryStart: false,
  },
  {
    category: '位置',
    className: 'list-inside',
    description: '列表标记在内部',
    isCategoryStart: false,
  },
  {
    category: '位置',
    className: 'list-outside',
    description: '列表标记在外部',
    isCategoryStart: false,
  },
]
</script>

<template>
  <DocsContainer>
    <DocsHeader title="List" description="列表组件，使用 Tailwind CSS 原生列表样式。" />

    <ApiReference :data="apiClasses"></ApiReference>

    <DocsSection title="圆点列表 (list-disc)">
      <ul class="list-disc list-inside space-y-2">
        <li>第一项</li>
        <li>第二项</li>
        <li>第三项</li>
      </ul>
    </DocsSection>

    <DocsSection title="嵌套圆点列表">
      <ul class="list-disc list-inside space-y-2 pl-4">
        <li>
          主要项目 1
          <ul class="list-disc list-inside space-y-1 pl-4">
            <li>子项目 1-1</li>
            <li>子项目 1-2</li>
          </ul>
        </li>
        <li>
          主要项目 2
          <ul class="list-disc list-inside space-y-1 pl-4">
            <li>子项目 2-1</li>
            <li>子项目 2-2</li>
          </ul>
        </li>
      </ul>
    </DocsSection>

    <DocsSection title="数字列表 (list-decimal)">
      <ol class="list-decimal list-inside space-y-2">
        <li>第一步</li>
        <li>第二步</li>
        <li>第三步</li>
      </ol>
    </DocsSection>

    <DocsSection title="嵌套数字列表">
      <ol class="list-decimal list-inside space-y-2 pl-4">
        <li>
          主要步骤 1
          <ol class="list-decimal list-inside space-y-1 pl-4">
            <li>小步骤 1-1</li>
            <li>小步骤 1-2</li>
          </ol>
        </li>
        <li>
          主要步骤 2
          <ol class="list-decimal list-inside space-y-1 pl-4">
            <li>小步骤 2-1</li>
            <li>小步骤 2-2</li>
          </ol>
        </li>
      </ol>
    </DocsSection>

    <DocsSection title="列表标记在外部 (list-outside)">
      <ul class="list-disc list-outside space-y-2 pl-6">
        <li>标记在左边</li>
        <li>标记在左边</li>
        <li>标记在左边</li>
      </ul>
    </DocsSection>

    <DocsSection title="无标记列表 (list-none)">
      <ul class="list-none space-y-2">
        <li>• 自定义圆点</li>
        <li>• 自定义圆点</li>
        <li>• 自定义圆点</li>
      </ul>
    </DocsSection>

    <DocsSection title="特性列表">
      <ul class="list-disc list-inside space-y-2">
        <li>高性能</li>
        <li>易于使用</li>
        <li>完全可定制</li>
        <li>移动响应式</li>
      </ul>
    </DocsSection>

    <DocsSection title="待做事项列表">
      <ul class="list-disc list-inside space-y-2">
        <li>
          <input type="checkbox" class="mr-2" checked />
          完成项目 A
        </li>
        <li>
          <input type="checkbox" class="mr-2" />
          进行项目 B
        </li>
        <li>
          <input type="checkbox" class="mr-2" />
          开始项目 C
        </li>
      </ul>
    </DocsSection>

    <DocsSection title="带图标的列表">
      <ul class="space-y-2">
        <li class="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
            class="w-5 h-5 text-success"
          >
            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"></path>
          </svg>
          <span>完成功能 A</span>
        </li>
        <li class="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
            class="w-5 h-5 text-success"
          >
            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"></path>
          </svg>
          <span>完成功能 B</span>
        </li>
        <li class="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
            class="w-5 h-5 text-warning"
          >
            <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"></path>
          </svg>
          <span>待处理功能 C</span>
        </li>
      </ul>
    </DocsSection>

    <DocsSection title="步骤指南">
      <ol class="list-decimal list-inside space-y-3">
        <li class="text-base">
          <span class="font-semibold">准备工作</span>
          <p class="text-sm text-base-content/70 mt-1">收集所需的工具和材料</p>
        </li>
        <li class="text-base">
          <span class="font-semibold">设置环境</span>
          <p class="text-sm text-base-content/70 mt-1">配置开发环境</p>
        </li>
        <li class="text-base">
          <span class="font-semibold">开始开发</span>
          <p class="text-sm text-base-content/70 mt-1">编写代码并测试</p>
        </li>
      </ol>
    </DocsSection>

    <DocsSection title="混合列表样式">
      <div class="space-y-6">
        <div>
          <h3 class="font-semibold mb-3">要求</h3>
          <ul class="list-disc list-inside space-y-2">
            <li>Node.js 14+</li>
            <li>npm 或 yarn</li>
            <li>代码编辑器</li>
          </ul>
        </div>

        <div>
          <h3 class="font-semibold mb-3">安装步骤</h3>
          <ol class="list-decimal list-inside space-y-2">
            <li>克隆仓库</li>
            <li>安装依赖</li>
            <li>运行项目</li>
          </ol>
        </div>

        <div>
          <h3 class="font-semibold mb-3">特点</h3>
          <ul class="list-none space-y-2">
            <li>✓ 开源项目</li>
            <li>✓ 社区支持</li>
            <li>✓ 定期更新</li>
          </ul>
        </div>
      </div>
    </DocsSection>

    <DocsSection title="卡片中的列表">
      <div class="card bg-base-100 shadow-lg">
        <div class="card-body">
          <h2 class="card-title">功能列表</h2>
          <ul class="list-disc list-inside space-y-2">
            <li>响应式设计</li>
            <li>暗色主题支持</li>
            <li>无障碍访问</li>
            <li>快速加载</li>
          </ul>
        </div>
      </div>
    </DocsSection>

    <DocsSection title="带前缀的列表">
      <ul class="list-none space-y-2">
        <li>→ 导航到首页</li>
        <li>→ 查看产品列表</li>
        <li>→ 添加到购物车</li>
        <li>→ 结账</li>
      </ul>
    </DocsSection>
  </DocsContainer>
</template>
