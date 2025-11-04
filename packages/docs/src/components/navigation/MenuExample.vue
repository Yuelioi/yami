<script setup lang="ts">
import DocsHeader from '../zcomp/DocsHeader.vue'
import DocsContainer from '../zcomp/DocsContainer.vue'
import DocsSection from '../zcomp/DocsSection.vue'
import ApiReference from '../zcomp/ApiReference.vue'

const apiClasses = [
  {
    category: '基础',
    className: 'menu',
    description: '菜单组件的容器，包含菜单项、标题、子菜单等。',
    isCategoryStart: true,
  },
  {
    category: '结构',
    className: 'menu-title',
    description: '菜单标题，用于分组显示。',
    isCategoryStart: true,
  },
  {
    category: '布局',
    className: 'menu-vertical',
    description: '垂直菜单布局（默认）。',
    isCategoryStart: true,
  },
  {
    category: '布局',
    className: 'menu-horizontal',
    description: '水平菜单布局。',
    isCategoryStart: false,
  },
  {
    category: '状态',
    className: 'menu-active',
    description: '激活菜单项的样式，可单独使用。',
    isCategoryStart: true,
  },
  {
    category: '状态',
    className: 'menu-disabled',
    description: '禁用状态的菜单项，不可交互。',
    isCategoryStart: false,
  },
  {
    category: '尺寸',
    className: 'menu-xs',
    description: '超小尺寸菜单。',
    isCategoryStart: true,
  },
  {
    category: '尺寸',
    className: 'menu-sm',
    description: '小号菜单。',
    isCategoryStart: false,
  },
  {
    category: '尺寸',
    className: 'menu-md',
    description: '中等尺寸（默认）。',
    isCategoryStart: false,
  },
  {
    category: '尺寸',
    className: 'menu-lg',
    description: '大号菜单。',
    isCategoryStart: false,
  },
  {
    category: '尺寸',
    className: 'menu-xl',
    description: '超大尺寸菜单。',
    isCategoryStart: false,
  },
]
</script>

<template>
  <DocsContainer>
    <DocsHeader
      title="Menu 菜单组件"
      description="用于展示多级导航、操作项的菜单组件，支持垂直与水平布局、嵌套、分组与尺寸变体。"
    />

    <ApiReference :data="apiClasses" />

    <!-- 基础菜单 -->
    <DocsSection title="基础菜单">
      <ul class="menu bg-card border rounded-lg w-56">
        <li class="menu-title">主导航</li>
        <li><a>首页</a></li>
        <li><a class="menu-active">消息中心</a></li>
        <li><a>设置</a></li>
        <li></li>
        <li class="menu-title">辅助功能</li>
        <li><a>帮助中心</a></li>
        <li class="menu-disabled"><a>禁用选项</a></li>
      </ul>
    </DocsSection>

    <!-- 子菜单 -->
    <DocsSection title="带子菜单">
      <ul class="menu bg-card border rounded-lg w-64">
        <li>
          <details open>
            <summary>账户管理</summary>
            <ul>
              <li><a>个人资料</a></li>
              <li><a>安全设置</a></li>
              <li><a>隐私</a></li>
            </ul>
          </details>
        </li>
        <li>
          <details>
            <summary>系统</summary>
            <ul>
              <li><a>通知</a></li>
              <li><a>语言</a></li>
            </ul>
          </details>
        </li>
      </ul>
    </DocsSection>

    <!-- 水平菜单 -->
    <DocsSection title="水平菜单">
      <ul class="menu menu-horizontal bg-card border rounded-lg">
        <li><a class="menu-active">首页</a></li>
        <li><a>产品</a></li>
        <li>
          <details>
            <summary>更多</summary>
            <ul>
              <li><a>关于我们</a></li>
              <li><a>联系我们</a></li>
            </ul>
          </details>
        </li>
      </ul>
    </DocsSection>

    <!-- 尺寸变体 -->
    <DocsSection title="尺寸变体">
      <div class="flex flex-col gap-4">
        <ul class="menu menu-xs bg-card border rounded-lg w-44">
          <li><a>菜单 XS</a></li>
          <li><a>选项</a></li>
        </ul>

        <ul class="menu menu-sm bg-card border rounded-lg w-48">
          <li><a>菜单 SM</a></li>
          <li><a>选项</a></li>
        </ul>

        <ul class="menu menu-md bg-card border rounded-lg w-56">
          <li><a>菜单 MD</a></li>
          <li><a>选项</a></li>
        </ul>

        <ul class="menu menu-lg bg-card border rounded-lg w-64">
          <li><a>菜单 LG</a></li>
          <li><a>选项</a></li>
        </ul>

        <ul class="menu menu-xl bg-card border rounded-lg w-72">
          <li><a>菜单 XL</a></li>
          <li><a>选项</a></li>
        </ul>
      </div>
    </DocsSection>
    <!-- 尺寸变体 -->
    <DocsSection title="尺寸变体">
      <div class="flex flex-col gap-4">
        <ul class="menu menu-md bg-card border rounded-lg w-56">
          <li><a>菜单 MD</a></li>
          <li></li>
          <li><a>选项</a></li>
        </ul>
      </div>
    </DocsSection>
  </DocsContainer>
</template>
