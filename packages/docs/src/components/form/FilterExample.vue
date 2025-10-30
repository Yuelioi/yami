<script setup lang="ts">
import DocsHeader from "../zcomp/DocsHeader.vue";
import DocsContainer from "../zcomp/DocsContainer.vue";
import DocsSection from "../zcomp/DocsSection.vue";
import ApiReference from "../zcomp/ApiReference.vue";

const apiClasses = [
  {
    category: "容器",
    className: "filter-bar",
    description: "Filter 容器，带背景、边框与内边距。",
    isCategoryStart: true,
  },
  {
    category: "容器",
    className: "filter-bar-compact",
    description: "紧凑型 Filter 容器。",
    isCategoryStart: false,
  },
  {
    category: "容器",
    className: "filter-bar-ghost",
    description: "幽灵风格容器，无边框背景。",
    isCategoryStart: false,
  },
  {
    category: "组",
    className: "filter-group",
    description: "Filter 项组合容器。",
    isCategoryStart: true,
  },
  {
    category: "组",
    className: "filter-group-vertical",
    description: "垂直排列的 Filter 组。",
    isCategoryStart: false,
  },
  {
    category: "下拉触发器",
    className: "filter-dropdown-trigger",
    description: "下拉菜单触发按钮。",
    isCategoryStart: true,
  },
  {
    category: "下拉触发器",
    className: "filter-dropdown-trigger-active",
    description: "激活状态的下拉按钮。",
    isCategoryStart: false,
  },
  {
    category: "下拉箭头",
    className: "filter-dropdown-icon",
    description: "下拉箭头，根据打开状态旋转。",
    isCategoryStart: true,
  },
  {
    category: "清除按钮",
    className: "filter-clear",
    description: "清除选中筛选项的按钮。",
    isCategoryStart: true,
  },
  {
    category: "搜索框",
    className: "filter-search",
    description: "搜索框容器样式。",
    isCategoryStart: true,
  },
  {
    category: "搜索框",
    className: "filter-search-input",
    description: "搜索框输入框样式。",
    isCategoryStart: false,
  },
  {
    category: "搜索框",
    className: "filter-search-icon",
    description: "搜索框图标样式。",
    isCategoryStart: false,
  },
  {
    category: "徽章",
    className: "filter-count",
    description: "显示筛选项数量的徽章。",
    isCategoryStart: true,
  },
  {
    category: "列表项",
    className: "filter-item",
    description: "可点击的筛选项，选中状态高亮。",
    isCategoryStart: true,
  },
];
</script>

<template>
  <DocsContainer>
    <DocsHeader
      title="Filter 筛选组件"
      description="用于展示筛选条件、搜索和下拉选项的容器组件，支持多种布局、状态与徽章显示。"
    />

    <ApiReference :data="apiClasses" />

    <!-- 基础 Filter 容器 -->
    <DocsSection title="基础 Filter 容器">
      <div class="flex flex-col gap-4">
        <div class="filter-bar">
          <div class="filter-item" data-active="true">全部</div>
          <div class="filter-item">未处理</div>
          <div class="filter-item">已完成</div>
        </div>

        <div class="filter-bar-compact">
          <div class="filter-item" data-active="true">选中</div>
          <div class="filter-item">未选中</div>
        </div>

        <div class="filter-bar-ghost">
          <div class="filter-item">幽灵风格</div>
          <div class="filter-item" data-active="true">激活</div>
        </div>
      </div>
    </DocsSection>

    <!-- 下拉触发器 -->
    <DocsSection title="下拉触发器">
      <div class="flex gap-4">
        <div class="filter-dropdown-trigger">
          分类
          <span class="filter-dropdown-icon">▼</span>
        </div>
        <div class="filter-dropdown-trigger filter-dropdown-trigger-active">
          状态
          <span class="filter-dropdown-icon">▼</span>
        </div>
      </div>
    </DocsSection>

    <!-- 搜索框示例 -->
    <DocsSection title="搜索框">
      <div class="filter-search w-full max-w-sm">
        <span class="filter-search-icon">🔍</span>
        <input class="filter-search-input" placeholder="搜索..." />
      </div>
    </DocsSection>

    <!-- 清除按钮 & 徽章 -->
    <DocsSection title="清除按钮与数量徽章">
      <div class="flex items-center gap-4">
        <div class="filter-count">3</div>
        <div class="filter-clear">清除筛选</div>
      </div>
    </DocsSection>

    <!-- 垂直组示例 -->
    <DocsSection title="Filter 组排列">
      <div class="filter-group flex gap-2">
        <div class="filter-item" data-active="true">全部</div>
        <div class="filter-item">待处理</div>
        <div class="filter-item">已完成</div>
      </div>

      <div class="filter-group-vertical mt-4">
        <div class="filter-item" data-active="true">全部</div>
        <div class="filter-item">待处理</div>
        <div class="filter-item">已完成</div>
      </div>
    </DocsSection>
  </DocsContainer>
</template>
