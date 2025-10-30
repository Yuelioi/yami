<script setup lang="ts">
import DocsHeader from "../zcomp/DocsHeader.vue";
import DocsSection from "../zcomp/DocsSection.vue";
import ApiReference from "../zcomp/ApiReference.vue";
import DocsContainer from "../zcomp/DocsContainer.vue";

const apiClasses = [
  // === 基础 ===
  {
    category: "基础",
    className: "select",
    description: "Select 基类，定义默认样式、边框、背景与下拉箭头。",
    isCategoryStart: true,
  },
  {
    category: "基础",
    className: "select-wrapper",
    description: "带左侧图标或额外元素的 Select 容器。",
    isCategoryStart: false,
  },
  {
    category: "基础",
    className: "select-group",
    description: "用于水平排列多个 Select 的分组容器。",
    isCategoryStart: false,
  },
  {
    category: "基础",
    className: "select-labeled",
    description: "带标签与辅助文本的 Select 外层结构。",
    isCategoryStart: false,
  },
  {
    category: "基础",
    className: "select-multiple",
    description: "多选下拉样式，禁用箭头并自定义选项高亮。",
    isCategoryStart: false,
  },
  {
    category: "基础",
    className: "select-optgroup",
    description: "用于定义下拉分组选项的样式。",
    isCategoryStart: false,
  },
  {
    category: "基础",
    className: "select-option",
    description: "单个下拉选项的样式控制。",
    isCategoryStart: false,
  },

  // === 颜色变体 ===
  {
    category: "颜色变体",
    className: "select-primary",
    description: "主色边框与聚焦高亮（Primary）。",
    isCategoryStart: true,
  },
  {
    category: "颜色变体",
    className: "select-secondary",
    description: "次色边框与聚焦高亮（Secondary）。",
    isCategoryStart: false,
  },
  {
    category: "颜色变体",
    className: "select-accent",
    description: "强调色样式（Accent）。",
    isCategoryStart: false,
  },
  {
    category: "颜色变体",
    className: "select-destructive",
    description: "危险样式（Destructive）。",
    isCategoryStart: false,
  },

  // === 尺寸变体 ===
  {
    category: "尺寸",
    className: "select-xs",
    description: "超小尺寸选择框（h-7）。",
    isCategoryStart: true,
  },
  {
    category: "尺寸",
    className: "select-sm",
    description: "小号选择框（h-8）。",
    isCategoryStart: false,
  },
  {
    category: "尺寸",
    className: "select-md",
    description: "中等尺寸选择框（h-10）。",
    isCategoryStart: false,
  },
  {
    category: "尺寸",
    className: "select-lg",
    description: "大号选择框（h-12）。",
    isCategoryStart: false,
  },
  {
    category: "尺寸",
    className: "select-xl",
    description: "特大号选择框（h-14）。",
    isCategoryStart: false,
  },
  {
    category: "尺寸",
    className: "select-wide",
    description: "限制最大宽度的选择框。",
    isCategoryStart: false,
  },

  // === 修饰类 ===
  {
    category: "修饰类",
    className: "select-ghost",
    description: "透明背景、无边框样式，悬停显示背景。",
    isCategoryStart: true,
  },
  {
    category: "修饰类",
    className: "select-bordered",
    description: "加粗边框样式（2px）。",
    isCategoryStart: false,
  },
  {
    category: "修饰类",
    className: "select-borderless",
    description: "移除边框与聚焦环样式。",
    isCategoryStart: false,
  },
];
</script>

<template>
  <DocsContainer>
    <DocsHeader
      title="Select 下拉选择组件"
      description="用于选择单项或多项的下拉选择框，支持多种尺寸、状态与外观修饰。"
    />

    <ApiReference :data="apiClasses" />

    <!-- 基础示例 -->
    <DocsSection title="基础示例">
      <div class="flex flex-col gap-4 max-w-sm">
        <select class="select">
          <option>默认选择</option>
          <option>选项 A</option>
          <option>选项 B</option>
        </select>

        <div class="select-wrapper">
          <span class="icon-left">🔍</span>
          <select class="select">
            <option>带图标选择</option>
            <option>Option 1</option>
            <option>Option 2</option>
          </select>
        </div>

        <div class="select-group">
          <select class="select">
            <option>省份</option>
          </select>
          <select class="select">
            <option>城市</option>
          </select>
        </div>

        <div class="select-labeled">
          <label for="demo">选择类型</label>
          <select id="demo" class="select select-md">
            <option>普通模式</option>
            <option>高级模式</option>
          </select>
          <span class="helper-text">请选择对应类型</span>
        </div>
      </div>
    </DocsSection>

    <!-- 颜色变体 -->
    <DocsSection title="颜色变体">
      <div class="flex flex-wrap gap-4 max-w-sm">
        <select class="select select-primary">
          <option>Primary</option>
          <option>选项 A</option>
        </select>

        <select class="select select-secondary">
          <option>Secondary</option>
          <option>选项 B</option>
        </select>

        <select class="select select-accent">
          <option>Accent</option>
          <option>选项 C</option>
        </select>

        <select class="select select-destructive">
          <option>Destructive</option>
          <option>选项 D</option>
        </select>
      </div>
    </DocsSection>

    <!-- 尺寸示例 -->
    <DocsSection title="尺寸变体">
      <div class="flex flex-col gap-4 max-w-sm">
        <select class="select select-xs">
          <option>超小尺寸</option>
        </select>

        <select class="select select-sm">
          <option>小尺寸</option>
        </select>

        <select class="select select-md">
          <option>中尺寸</option>
        </select>

        <select class="select select-lg">
          <option>大尺寸</option>
        </select>

        <select class="select select-xl">
          <option>超大尺寸</option>
        </select>
      </div>
    </DocsSection>

    <!-- 修饰类示例 -->
    <DocsSection title="修饰类示例">
      <div class="flex flex-col gap-4 max-w-sm">
        <select class="select select-ghost">
          <option>Ghost 样式</option>
          <option>透明背景</option>
        </select>

        <select class="select select-bordered">
          <option>Bordered 样式</option>
          <option>加粗边框</option>
        </select>

        <select class="select select-borderless">
          <option>Borderless 样式</option>
          <option>无边框</option>
        </select>
      </div>
    </DocsSection>

    <!-- 多选与分组 -->
    <DocsSection title="多选与分组">
      <div class="flex flex-col gap-4 max-w-sm">
        <select class="select">
          <optgroup label="组 1" class="select-optgroup">
            <option class="select-option">选项 A</option>
            <option class="select-option">选项 B</option>
          </optgroup>
          <optgroup label="组 2" class="select-optgroup">
            <option class="select-option">选项 C</option>
            <option class="select-option" disabled>禁用选项</option>
          </optgroup>
        </select>

        <select multiple class="select select-multiple">
          <option>选项 A</option>
          <option selected>选项 B</option>
          <option>选项 C</option>
        </select>
      </div>
    </DocsSection>
  </DocsContainer>
</template>
