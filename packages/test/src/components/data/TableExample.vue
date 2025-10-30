<script setup lang="ts">
import DocsHeader from "../zcomp/DocsHeader.vue";
import ApiReference from "../zcomp/ApiReference.vue";
import DocsContainer from "../zcomp/DocsContainer.vue";
import DocsSection from "../zcomp/DocsSection.vue";

const apiClasses = [
  {
    category: "基础",
    className: "table",
    description: "基础表格样式，包含表头、表体、表尾及默认边框。",
    isCategoryStart: true,
  },

  {
    category: "变体",
    className: "table-zebra",
    description: "斑马纹样式，交替行背景色。",
    isCategoryStart: false,
  },
  {
    category: "变体",
    className: "table-hover",
    description: "支持悬停高亮的行效果。",
    isCategoryStart: false,
  },
  {
    category: "变体",
    className: "table-pin-rows",
    description: "固定表头。",
    isCategoryStart: false,
  },
  {
    category: "变体",
    className: "table-pin-cols",
    description: "固定第一列。",
    isCategoryStart: false,
  },
  {
    category: "变体",
    className: "table-compact",
    description: "紧凑型表格，减少内边距。",
    isCategoryStart: false,
  },
  {
    category: "变体",
    className: "table-comfortable",
    description: "宽松表格，增加间距。",
    isCategoryStart: false,
  },

  {
    category: "配色方案",
    className: "table-primary",
    description: "主色主题表格。",
    isCategoryStart: false,
  },
  {
    category: "配色方案",
    className: "table-secondary",
    description: "次色主题表格。",
    isCategoryStart: false,
  },
  {
    category: "配色方案",
    className: "table-accent",
    description: "强调色主题表格。",
    isCategoryStart: false,
  },
  {
    category: "配色方案",
    className: "table-destructive",
    description: "危险主题表格。",
    isCategoryStart: false,
  },

  {
    category: "边框样式",
    className: "table-borderless",
    description: "无边框表格。",
    isCategoryStart: false,
  },
  {
    category: "边框样式",
    className: "table-bordered",
    description: "完整边框表格，带圆角。",
    isCategoryStart: false,
  },
  {
    category: "边框样式",
    className: "table-horizontal",
    description: "仅显示横向边框。",
    isCategoryStart: false,
  },
  {
    category: "边框样式",
    className: "table-vertical",
    description: "仅显示竖向边框。",
    isCategoryStart: false,
  },

  {
    category: "对齐方式",
    className: "table-center",
    description: "居中对齐所有单元格。",
    isCategoryStart: false,
  },
  {
    category: "对齐方式",
    className: "table-right",
    description: "右对齐所有单元格。",
    isCategoryStart: false,
  },

  {
    category: "功能增强",
    className: "table-selectable",
    description: "可点击选择行。",
    isCategoryStart: false,
  },
  {
    category: "功能增强",
    className: "table-highlight",
    description: "高亮当前活动行。",
    isCategoryStart: false,
  },
  {
    category: "功能增强",
    className: "table-container",
    description: "响应式滚动容器。",
    isCategoryStart: false,
  },
  {
    category: "功能增强",
    className: "table-loading",
    description: "显示加载状态遮罩。",
    isCategoryStart: false,
  },
  {
    category: "功能增强",
    className: "table-empty",
    description: "显示空数据提示行。",
    isCategoryStart: false,
  },
  {
    category: "功能增强",
    className: "table-sortable",
    description: "表头带排序指示。",
    isCategoryStart: false,
  },
  {
    category: "功能增强",
    className: "table-card",
    description: "卡片式表格。",
    isCategoryStart: false,
  },

  {
    category: "尺寸变体",
    className: "table-xs",
    description: "极小表格。",
    isCategoryStart: false,
  },
  {
    category: "尺寸变体",
    className: "table-sm",
    description: "小号表格。",
    isCategoryStart: false,
  },
  {
    category: "尺寸变体",
    className: "table-md",
    description: "中等尺寸（默认）。",
    isCategoryStart: false,
  },
  {
    category: "尺寸变体",
    className: "table-lg",
    description: "大号表格。",
    isCategoryStart: false,
  },
  {
    category: "尺寸变体",
    className: "table-xl",
    description: "超大表格。",
    isCategoryStart: false,
  },
];
</script>
<template>
  <DocsContainer>
    <DocsHeader
      title="Table 表格"
      description="用于展示数据的表格组件，支持多种配色、尺寸、边框与功能增强。"
    />

    <ApiReference :data="apiClasses" />

    <!-- 基础表格 -->
    <section>
      <h2 class="text-xl font-semibold mb-2">基础表格</h2>
      <!-- class: table -->
      <table class="table">
        <thead>
          <tr>
            <th>姓名</th>
            <th>职位</th>
            <th>状态</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Alice</td>
            <td>前端</td>
            <td>在线</td>
          </tr>
          <tr>
            <td>Bob</td>
            <td>后端</td>
            <td>离线</td>
          </tr>
        </tbody>
      </table>
    </section>

    <!-- 斑马纹 + 悬停 -->
    <section>
      <h2 class="text-xl font-semibold mb-2">斑马纹 & 悬停</h2>
      <!-- class: table table-zebra table-hover -->
      <table class="table table-zebra table-hover">
        <thead>
          <tr>
            <th>姓名</th>
            <th>部门</th>
            <th>状态</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Charlie</td>
            <td>产品</td>
            <td>忙碌</td>
          </tr>
          <tr>
            <td>Daisy</td>
            <td>设计</td>
            <td>离线</td>
          </tr>
        </tbody>
      </table>
    </section>

    <!-- 固定表头 & 固定首列 -->
    <section>
      <h2 class="text-xl font-semibold mb-2">固定表头 & 固定首列</h2>
      <!-- class: table table-pin-rows table-pin-cols table-zebra -->
      <div class="overflow-x-auto">
        <table class="table table-pin-rows table-pin-cols table-zebra">
          <thead>
            <tr>
              <th>姓名</th>
              <th>部门</th>
              <th>职位</th>
              <th>状态</th>
              <th>入职时间</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Alice</td>
              <td>前端</td>
              <td>开发</td>
              <td>在线</td>
              <td>2023-05-01</td>
            </tr>
            <tr>
              <td>Bob</td>
              <td>后端</td>
              <td>开发</td>
              <td>离线</td>
              <td>2022-11-15</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <!-- 尺寸变体 -->
    <section>
      <h2 class="text-xl font-semibold mb-2">尺寸示例</h2>
      <!-- class: table-xs -->
      <table class="table table-xs table-zebra">
        <thead>
          <tr>
            <th>姓名</th>
            <th>职位</th>
            <th>状态</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Alice</td>
            <td>前端</td>
            <td>在线</td>
          </tr>
          <tr>
            <td>Bob</td>
            <td>后端</td>
            <td>离线</td>
          </tr>
        </tbody>
      </table>

      <!-- class: table-sm -->
      <table class="table table-sm table-hover mt-4">
        <thead>
          <tr>
            <th>姓名</th>
            <th>职位</th>
            <th>状态</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Charlie</td>
            <td>产品</td>
            <td>忙碌</td>
          </tr>
          <tr>
            <td>Daisy</td>
            <td>设计</td>
            <td>离线</td>
          </tr>
        </tbody>
      </table>
    </section>

    <!-- 配色方案 -->
    <section>
      <h2 class="text-xl font-semibold mb-2">配色示例</h2>
      <!-- class: table table-primary table-hover -->
      <table class="table table-primary table-hover">
        <thead>
          <tr>
            <th>姓名</th>
            <th>职位</th>
            <th>状态</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Alice</td>
            <td>前端</td>
            <td>在线</td>
          </tr>
          <tr>
            <td>Bob</td>
            <td>后端</td>
            <td>离线</td>
          </tr>
        </tbody>
      </table>

      <!-- class: table table-secondary table-hover -->
      <table class="table table-secondary table-hover mt-4">
        <thead>
          <tr>
            <th>姓名</th>
            <th>职位</th>
            <th>状态</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Charlie</td>
            <td>产品</td>
            <td>忙碌</td>
          </tr>
          <tr>
            <td>Daisy</td>
            <td>设计</td>
            <td>离线</td>
          </tr>
        </tbody>
      </table>
    </section>

    <!-- 特殊功能 -->
    <section>
      <h2 class="text-xl font-semibold mb-2">特殊功能</h2>

      <!-- 可选择行 -->
      <!-- class: table table-selectable table-hover -->
      <table class="table table-selectable table-hover">
        <thead>
          <tr>
            <th>姓名</th>
            <th>职位</th>
            <th>状态</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Alice</td>
            <td>前端</td>
            <td>在线</td>
          </tr>
          <tr>
            <td>Bob</td>
            <td>后端</td>
            <td>离线</td>
          </tr>
        </tbody>
      </table>

      <!-- 高亮行 -->
      <!-- class: table table-highlight table-hover -->
      <table class="table table-highlight table-hover mt-4">
        <thead>
          <tr>
            <th>姓名</th>
            <th>职位</th>
            <th>状态</th>
          </tr>
        </thead>
        <tbody>
          <tr class="active">
            <td>Charlie</td>
            <td>产品</td>
            <td>忙碌</td>
          </tr>
          <tr>
            <td>Daisy</td>
            <td>设计</td>
            <td>离线</td>
          </tr>
        </tbody>
      </table>

      <!-- 响应式容器 -->
      <!-- class: table table-zebra table-bordered table-container -->
      <div class="mt-4 table-container">
        <table class="table table-zebra table-bordered">
          <thead>
            <tr>
              <th>姓名</th>
              <th>职位</th>
              <th>状态</th>
              <th>入职时间</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Alice</td>
              <td>前端</td>
              <td>在线</td>
              <td>2023-05-01</td>
            </tr>
            <tr>
              <td>Bob</td>
              <td>后端</td>
              <td>离线</td>
              <td>2022-11-15</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  </DocsContainer>
</template>
