<script setup lang="ts">
import DocsHeader from "../zcomp/DocsHeader.vue";
import DocsContainer from "../zcomp/DocsContainer.vue";
import DocsSection from "../zcomp/DocsSection.vue";
import ApiReference from "../zcomp/ApiReference.vue";
import { File, Folder, Home } from "lucide-vue-next";

const apiClasses = [
  {
    category: "基础",
    className: "breadcrumb",
    description: "面包屑容器，包含多个 breadcrumb-item。",
    isCategoryStart: true,
  },
  {
    category: "分隔符",
    className: "breadcrumb-arrow",
    description: "使用箭头 › 作为分隔符。",
    isCategoryStart: true,
  },
  {
    category: "分隔符",
    className: "breadcrumb-chevron",
    description: "使用双箭头 » 作为分隔符。",
    isCategoryStart: false,
  },
  {
    category: "分隔符",
    className: "breadcrumb-dot",
    description: "使用点 • 作为分隔符。",
    isCategoryStart: false,
  },
  {
    category: "分隔符",
    className: "breadcrumb-dash",
    description: "使用短横线 − 作为分隔符。",
    isCategoryStart: false,
  },
  {
    category: "尺寸",
    className: "breadcrumb-xs",
    description: "超小尺寸面包屑。",
    isCategoryStart: true,
  },
  {
    category: "尺寸",
    className: "breadcrumb-sm",
    description: "小尺寸面包屑。",
    isCategoryStart: false,
  },
  {
    category: "尺寸",
    className: "breadcrumb-md",
    description: "中尺寸面包屑（默认）。",
    isCategoryStart: false,
  },
  {
    category: "尺寸",
    className: "breadcrumb-lg",
    description: "大尺寸面包屑。",
    isCategoryStart: false,
  },
  {
    category: "样式",
    className: "breadcrumb-contained",
    description: "带背景的面包屑。",
    isCategoryStart: true,
  },
  {
    category: "样式",
    className: "breadcrumb-bordered",
    description: "带边框的面包屑。",
    isCategoryStart: false,
  },
  {
    category: "样式",
    className: "breadcrumb-compact",
    description: "紧凑型面包屑。",
    isCategoryStart: false,
  },
  {
    category: "图标",
    className: "breadcrumb-icon",
    description: "支持图标显示。",
    isCategoryStart: true,
  },
  {
    category: "折叠",
    className: "breadcrumb-collapse",
    description: "响应式折叠中间项。",
    isCategoryStart: true,
  },
  {
    category: "项样式",
    className: "breadcrumb-item",
    description: "面包屑项样式。",
    isCategoryStart: true,
  },
  {
    category: "项状态",
    className: "breadcrumb-item-active",
    description: "当前页高亮样式。",
    isCategoryStart: true,
  },
  {
    category: "悬停效果",
    className: "breadcrumb-hover",
    description: "悬停下划线效果。",
    isCategoryStart: true,
  },
  {
    category: "主题色",
    className: "breadcrumb-primary",
    description: "主色主题面包屑。",
    isCategoryStart: true,
  },
  {
    category: "主题色",
    className: "breadcrumb-secondary",
    description: "次色主题面包屑。",
    isCategoryStart: false,
  },
];
</script>

<template>
  <DocsContainer>
    <DocsHeader
      title="Breadcrumb 面包屑组件"
      description="用于显示页面层级路径，支持多种分隔符、尺寸、样式和响应式折叠。"
    />

    <ApiReference :data="apiClasses" />

    <!-- 基础示例 -->
    <DocsSection title="基础面包屑">
      <nav class="breadcrumb">
        <a href="#">首页</a>
        <a href="#">分类</a>
        <a href="#">文章</a>
        <span>当前页</span>
      </nav>
    </DocsSection>

    <!-- 分隔符示例 -->
    <DocsSection title="分隔符变体">
      <div class="flex flex-col gap-2">
        <nav class="breadcrumb">
          <a href="#">首页</a>
          <a href="#">分类</a>
          <span>文章</span>
        </nav>
        <nav class="breadcrumb breadcrumb-arrow">
          <a href="#">首页</a>
          <a href="#">分类</a>
          <span>文章</span>
        </nav>

        <nav class="breadcrumb breadcrumb-dot">
          <a href="#">首页</a>
          <a href="#">分类</a>
          <span>文章</span>
        </nav>

        <nav class="breadcrumb breadcrumb-dash">
          <a href="#">首页</a>
          <a href="#">分类</a>
          <span>文章</span>
        </nav>

        <nav class="breadcrumb breadcrumb-custom">
          <a href="#" data-separator=">">首页</a>
          <a href="#" data-separator=">">分类</a>
          <span>文章</span>
        </nav>
      </div>
    </DocsSection>

    <!-- 尺寸示例 -->
    <DocsSection title="尺寸变体">
      <nav class="breadcrumb breadcrumb-xs">
        <a href="#">首页</a>
        <a href="#">分类</a>
        <span>文章</span>
      </nav>
      <nav class="breadcrumb breadcrumb-sm">
        <a href="#">首页</a>
        <a href="#">分类</a>
        <span>文章</span>
      </nav>
      <nav class="breadcrumb breadcrumb-md">
        <a href="#">首页</a>
        <a href="#">分类</a>
        <span>文章</span>
      </nav>
      <nav class="breadcrumb breadcrumb-lg">
        <a href="#">首页</a>
        <a href="#">分类</a>
        <span>文章</span>
      </nav>
    </DocsSection>

    <!-- 样式变体 -->
    <DocsSection title="样式变体">
      <nav class="breadcrumb breadcrumb-contained">
        <a href="#">首页</a>
        <a href="#">分类</a>
        <span>文章</span>
      </nav>
      <nav class="breadcrumb breadcrumb-bordered">
        <a href="#">首页</a>
        <a href="#">分类</a>
        <span>文章</span>
      </nav>
      <nav class="breadcrumb breadcrumb-compact">
        <a href="#">首页</a>
        <a href="#">分类</a>
        <span>文章</span>
      </nav>
    </DocsSection>

    <!-- 图标示例 -->
    <DocsSection title="图标支持">
      <nav class="breadcrumb breadcrumb-icon">
        <a href="#"><Home /> 首页</a>
        <a href="#"><Folder /> 分类</a>
        <span><File /> 当前页</span>
      </nav>
    </DocsSection>

    <!-- 响应式折叠 -->
    <DocsSection title="响应式折叠">
      <nav class="breadcrumb breadcrumb-collapse">
        <a href="#">首页</a>
        <span class="breadcrumb-ellipsis"></span>
        <a href="#">分类</a>
        <span>文章</span>
      </nav>
    </DocsSection>

    <!-- 悬停与主题色 -->
    <DocsSection title="悬停与主题色">
      <nav class="breadcrumb breadcrumb-primary">
        <a href="#">首页</a>
        <a href="#">分类</a>
        <span>文章</span>
      </nav>
      <nav class="breadcrumb breadcrumb-secondary">
        <a href="#">首页</a>
        <a href="#">分类</a>
        <span>文章</span>
      </nav>
    </DocsSection>
  </DocsContainer>
</template>
