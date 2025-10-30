<script setup lang="ts">
import DocsHeader from "../zcomp/DocsHeader.vue";
import DocsContainer from "../zcomp/DocsContainer.vue";
import DocsSection from "../zcomp/DocsSection.vue";
import ApiReference from "../zcomp/ApiReference.vue";

const apiClasses = [
  {
    category: "基础",
    className: "menu",
    description: "菜单容器，支持垂直或水平布局。",
    isCategoryStart: true,
  },
  {
    category: "菜单项",
    className: "menu-title",
    description: "菜单分组标题。",
    isCategoryStart: true,
  },
  {
    category: "状态",
    className: "menu-active",
    description: "激活状态菜单项。",
    isCategoryStart: true,
  },
  {
    category: "状态",
    className: "menu-focus",
    description: "聚焦状态菜单项。",
    isCategoryStart: false,
  },
  {
    category: "状态",
    className: "menu-disabled",
    description: "禁用状态菜单项。",
    isCategoryStart: false,
  },
  {
    category: "尺寸",
    className: "menu-xs",
    description: "超小菜单。",
    isCategoryStart: true,
  },
  {
    category: "尺寸",
    className: "menu-sm",
    description: "小号菜单。",
    isCategoryStart: false,
  },
  {
    category: "尺寸",
    className: "menu-md",
    description: "中号菜单（默认）。",
    isCategoryStart: false,
  },
  {
    category: "尺寸",
    className: "menu-lg",
    description: "大号菜单。",
    isCategoryStart: false,
  },
  {
    category: "尺寸",
    className: "menu-xl",
    description: "超大菜单。",
    isCategoryStart: false,
  },
  {
    category: "布局",
    className: "menu-horizontal",
    description: "水平菜单。",
    isCategoryStart: true,
  },
  {
    category: "布局",
    className: "menu-vertical",
    description: "垂直菜单（默认）。",
    isCategoryStart: false,
  },
  {
    category: "样式",
    className: "menu-compact",
    description: "紧凑型菜单。",
    isCategoryStart: true,
  },
  {
    category: "样式",
    className: "menu-bordered",
    description: "带边框菜单。",
    isCategoryStart: false,
  },
  {
    category: "样式",
    className: "menu-contained",
    description: "带背景和边框菜单。",
    isCategoryStart: false,
  },
  {
    category: "样式",
    className: "menu-divided",
    description: "带分隔线菜单。",
    isCategoryStart: false,
  },
  {
    category: "图标",
    className: "menu-icon",
    description: "支持菜单图标。",
    isCategoryStart: true,
  },
  {
    category: "分隔符",
    className: "menu-divider",
    description: "菜单分隔线。",
    isCategoryStart: true,
  },
];
</script>

<template>
  <DocsContainer>
    <DocsHeader
      title="Menu 菜单组件"
      description="提供垂直/水平菜单，支持嵌套、图标、状态、尺寸、紧凑型、边框、背景和分隔线。"
    />

    <ApiReference :data="apiClasses" />

    <!-- 基础菜单 -->
    <DocsSection title="基础示例">
      <ul class="menu menu-md w-56 border border-border rounded-md">
        <li><span>菜单项 1</span></li>
        <li><span>菜单项 2</span></li>
        <li><span>菜单项 3</span></li>
      </ul>
    </DocsSection>

    <!-- 垂直 & 水平 -->
    <DocsSection title="垂直 & 水平菜单">
      <div class="flex gap-8">
        <ul class="menu menu-vertical w-48 border border-border rounded-md">
          <li><span>垂直 1</span></li>
          <li><span>垂直 2</span></li>
        </ul>

        <ul class="menu menu-horizontal border border-border rounded-md">
          <li><span>水平 1</span></li>
          <li><span>水平 2</span></li>
        </ul>
      </div>
    </DocsSection>

    <!-- 嵌套菜单 -->
    <DocsSection title="嵌套菜单">
      <ul class="menu w-56 border border-border rounded-md">
        <li>
          <details>
            <summary>父菜单</summary>
            <ul>
              <li><span>子菜单 1</span></li>
              <li><span>子菜单 2</span></li>
            </ul>
          </details>
        </li>
        <li><span>菜单项 2</span></li>
      </ul>
    </DocsSection>

    <!-- 尺寸 -->
    <DocsSection title="尺寸示例">
      <div class="flex gap-4">
        <ul class="menu menu-xs w-44 border border-border rounded-md">
          <li><span>XS 菜单</span></li>
        </ul>
        <ul class="menu menu-sm w-48 border border-border rounded-md">
          <li><span>SM 菜单</span></li>
        </ul>
        <ul class="menu menu-md w-52 border border-border rounded-md">
          <li><span>MD 菜单</span></li>
        </ul>
        <ul class="menu menu-lg w-56 border border-border rounded-md">
          <li><span>LG 菜单</span></li>
        </ul>
        <ul class="menu menu-xl w-60 border border-border rounded-md">
          <li><span>XL 菜单</span></li>
        </ul>
      </div>
    </DocsSection>

    <!-- 状态示例 -->
    <DocsSection title="状态示例">
      <ul class="menu menu-md w-56 border border-border rounded-md">
        <li><span class="menu-active">激活项</span></li>
        <li><span class="menu-focus">聚焦项</span></li>
        <li><span class="menu-disabled">禁用项</span></li>
      </ul>
    </DocsSection>

    <!-- 样式变体 -->
    <DocsSection title="样式变体">
      <div class="flex gap-4">
        <ul class="menu menu-compact w-48 border border-border rounded-md">
          <li><span>紧凑型</span></li>
          <li><span>紧凑型</span></li>
        </ul>

        <ul class="menu menu-bordered w-48 border border-border rounded-md">
          <li><span>带边框</span></li>
          <li><span>带边框</span></li>
        </ul>

        <ul
          class="menu menu-contained w-48 bg-card border border-border rounded-md"
        >
          <li><span>带背景</span></li>
          <li><span>带背景</span></li>
        </ul>

        <ul class="menu menu-divided w-48 border border-border rounded-md">
          <li><span>分隔线 1</span></li>
          <li><span>分隔线 2</span></li>
        </ul>
      </div>
    </DocsSection>

    <!-- 图标支持 -->
    <DocsSection title="图标菜单">
      <ul class="menu menu-md w-56 border border-border rounded-md">
        <li>
          <a href="#"
            ><svg class="menu-icon"><circle cx="12" cy="12" r="10" /></svg
            >图标项</a
          >
        </li>
        <li>
          <a href="#"
            ><svg class="menu-icon"><rect width="20" height="20" /></svg
            >图标项</a
          >
        </li>
      </ul>
    </DocsSection>
  </DocsContainer>
</template>
