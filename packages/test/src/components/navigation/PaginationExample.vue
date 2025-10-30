<script setup lang="ts">
import DocsHeader from "../zcomp/DocsHeader.vue";
import DocsContainer from "../zcomp/DocsContainer.vue";
import DocsSection from "../zcomp/DocsSection.vue";
import ApiReference from "../zcomp/ApiReference.vue";

const apiClasses = [
  {
    category: "基础",
    className: "pagination",
    description: "分页组件容器，水平排列按钮。",
    isCategoryStart: true,
  },
  {
    category: "按钮",
    className: "pagination-btn",
    description: "分页按钮基础样式。",
    isCategoryStart: true,
  },
  {
    category: "按钮",
    className: "pagination-link",
    description: "分页链接样式，等同于按钮。",
    isCategoryStart: false,
  },
  {
    category: "按钮",
    className: "pagination-prev",
    description: "上一页按钮样式。",
    isCategoryStart: false,
  },
  {
    category: "按钮",
    className: "pagination-next",
    description: "下一页按钮样式。",
    isCategoryStart: false,
  },
  {
    category: "状态",
    className: "pagination-active",
    description: "当前页激活状态。",
    isCategoryStart: true,
  },
  {
    category: "状态",
    className: "pagination-ellipsis",
    description: "分页省略号样式。",
    isCategoryStart: false,
  },
  {
    category: "尺寸",
    className: "pagination-xs",
    description: "超小号分页。",
    isCategoryStart: true,
  },
  {
    category: "尺寸",
    className: "pagination-sm",
    description: "小号分页。",
    isCategoryStart: false,
  },
  {
    category: "尺寸",
    className: "pagination-md",
    description: "中号分页（默认）。",
    isCategoryStart: false,
  },
  {
    category: "尺寸",
    className: "pagination-lg",
    description: "大号分页。",
    isCategoryStart: false,
  },
  {
    category: "尺寸",
    className: "pagination-xl",
    description: "超大号分页。",
    isCategoryStart: false,
  },
  {
    category: "样式变体",
    className: "pagination-rounded",
    description: "圆形按钮样式。",
    isCategoryStart: true,
  },
  {
    category: "样式变体",
    className: "pagination-square",
    description: "方形按钮样式。",
    isCategoryStart: false,
  },
  {
    category: "样式变体",
    className: "pagination-borderless",
    description: "无边框样式。",
    isCategoryStart: false,
  },
  {
    category: "样式变体",
    className: "pagination-ghost",
    description: "幽灵样式（无背景，仅 hover 显示）。",
    isCategoryStart: false,
  },
  {
    category: "样式变体",
    className: "pagination-compact",
    description: "紧凑型（无间距）。",
    isCategoryStart: false,
  },
  {
    category: "样式变体",
    className: "pagination-simple",
    description: "简洁型，仅上一页/下一页按钮。",
    isCategoryStart: false,
  },
  {
    category: "信息文本",
    className: "pagination-info",
    description: "显示页码信息的文本。",
    isCategoryStart: true,
  },
  {
    category: "对齐方式",
    className: "pagination-centered",
    description: "分页内容居中对齐。",
    isCategoryStart: true,
  },
  {
    category: "对齐方式",
    className: "pagination-start",
    description: "左对齐。",
    isCategoryStart: false,
  },
  {
    category: "对齐方式",
    className: "pagination-end",
    description: "右对齐。",
    isCategoryStart: false,
  },
  {
    category: "对齐方式",
    className: "pagination-between",
    description: "两端对齐，分页与信息分布显示。",
    isCategoryStart: false,
  },
];
</script>

<template>
  <DocsContainer>
    <DocsHeader
      title="Pagination 分页组件"
      description="用于分页导航的组件，支持多种尺寸、样式变体与对齐方式。"
    />

    <ApiReference :data="apiClasses" />

    <!-- 基础示例 -->
    <DocsSection title="基础示例">
      <div class="pagination pagination-centered">
        <button class="pagination-prev">‹</button>
        <button class="pagination-btn">1</button>
        <button class="pagination-btn" aria-current="page">2</button>
        <button class="pagination-btn">3</button>
        <span class="pagination-ellipsis">…</span>
        <button class="pagination-btn">10</button>
        <button class="pagination-next">›</button>
      </div>
    </DocsSection>

    <!-- 尺寸示例 -->
    <DocsSection title="尺寸">
      <div class="flex flex-col gap-4">
        <div class="pagination pagination-xs">
          <button class="pagination-btn">1</button>
          <button class="pagination-btn pagination-active">2</button>
          <button class="pagination-btn">3</button>
        </div>

        <div class="pagination pagination-sm">
          <button class="pagination-btn">1</button>
          <button class="pagination-btn pagination-active">2</button>
          <button class="pagination-btn">3</button>
        </div>

        <div class="pagination pagination-md">
          <button class="pagination-btn">1</button>
          <button class="pagination-btn pagination-active">2</button>
          <button class="pagination-btn">3</button>
        </div>

        <div class="pagination pagination-lg">
          <button class="pagination-btn">1</button>
          <button class="pagination-btn pagination-active">2</button>
          <button class="pagination-btn">3</button>
        </div>
      </div>
    </DocsSection>

    <!-- 样式变体 -->
    <DocsSection title="样式变体">
      <div class="flex flex-col gap-4">
        <div class="pagination pagination-rounded">
          <button class="pagination-btn">1</button>
          <button class="pagination-btn pagination-active">2</button>
          <button class="pagination-btn">3</button>
        </div>

        <div class="pagination pagination-square">
          <button class="pagination-btn">1</button>
          <button class="pagination-btn pagination-active">2</button>
          <button class="pagination-btn">3</button>
        </div>

        <div class="pagination pagination-ghost">
          <button class="pagination-btn">1</button>
          <button class="pagination-btn pagination-active">2</button>
          <button class="pagination-btn">3</button>
        </div>

        <div class="pagination pagination-borderless">
          <button class="pagination-btn">1</button>
          <button class="pagination-btn pagination-active">2</button>
          <button class="pagination-btn">3</button>
        </div>
      </div>
    </DocsSection>

    <!-- 紧凑与简洁模式 -->
    <DocsSection title="紧凑与简洁模式">
      <div class="flex flex-col gap-4">
        <div class="pagination pagination-compact">
          <button class="pagination-btn">1</button>
          <button class="pagination-btn pagination-active">2</button>
          <button class="pagination-btn">3</button>
          <button class="pagination-btn">4</button>
        </div>

        <div class="pagination pagination-simple">
          <button class="pagination-prev">上一页</button>
          <span class="pagination-info">第 2 / 10 页</span>
          <button class="pagination-next">下一页</button>
        </div>
      </div>
    </DocsSection>

    <!-- 对齐方式 -->
    <DocsSection title="对齐方式">
      <div class="flex flex-col gap-4">
        <div class="pagination pagination-start">
          <button class="pagination-btn pagination-active">1</button>
          <button class="pagination-btn">2</button>
        </div>

        <div class="pagination pagination-centered">
          <button class="pagination-btn pagination-active">1</button>
          <button class="pagination-btn">2</button>
        </div>

        <div class="pagination pagination-end">
          <button class="pagination-btn pagination-active">1</button>
          <button class="pagination-btn">2</button>
        </div>

        <div class="pagination pagination-between">
          <span class="pagination-info">共 120 条数据</span>
          <div class="inline-flex items-center gap-1">
            <button class="pagination-prev">‹</button>
            <button class="pagination-btn pagination-active">1</button>
            <button class="pagination-btn">2</button>
            <button class="pagination-next">›</button>
          </div>
        </div>
      </div>
    </DocsSection>
  </DocsContainer>
</template>
