<script setup lang="ts">
import DocsHeader from "../zcomp/DocsHeader.vue";
import DocsSection from "../zcomp/DocsSection.vue";
import ApiReference from "../zcomp/ApiReference.vue";
import DocsContainer from "../zcomp/DocsContainer.vue";

const apiClasses = [
  // === 基础 ===
  {
    category: "基础",
    className: "radio",
    description: "单选框基础类，定义大小、边框、背景与选中状态。",
    isCategoryStart: true,
  },

  // === 颜色变体 ===
  {
    category: "颜色变体",
    className: "radio-primary",
    description: "使用主色 Primary 主题样式。",
    isCategoryStart: true,
  },
  {
    category: "颜色变体",
    className: "radio-secondary",
    description: "使用次色 Secondary 主题样式。",
    isCategoryStart: false,
  },
  {
    category: "颜色变体",
    className: "radio-accent",
    description: "使用强调色 Accent 主题样式。",
    isCategoryStart: false,
  },
  {
    category: "颜色变体",
    className: "radio-success",
    description: "成功状态样式（绿色）。",
    isCategoryStart: false,
  },
  {
    category: "颜色变体",
    className: "radio-warning",
    description: "警告状态样式（琥珀色）。",
    isCategoryStart: false,
  },
  {
    category: "颜色变体",
    className: "radio-error",
    description: "错误状态样式（红色）。",
    isCategoryStart: false,
  },

  // === 尺寸 ===
  {
    category: "尺寸",
    className: "radio-xs",
    description: "超小号单选框，3x3 尺寸。",
    isCategoryStart: true,
  },
  {
    category: "尺寸",
    className: "radio-sm",
    description: "小号单选框，3.5x3.5 尺寸。",
    isCategoryStart: false,
  },
  {
    category: "尺寸",
    className: "radio-md",
    description: "中号单选框，默认大小（4x4）。",
    isCategoryStart: false,
  },
  {
    category: "尺寸",
    className: "radio-lg",
    description: "大号单选框，5x5 尺寸。",
    isCategoryStart: false,
  },
  {
    category: "尺寸",
    className: "radio-xl",
    description: "超大号单选框，6x6 尺寸。",
    isCategoryStart: false,
  },

  // === 组 ===
  {
    category: "分组",
    className: "radio-group",
    description: "垂直排列的单选框组。",
    isCategoryStart: true,
  },
  {
    category: "分组",
    className: "radio-group-inline",
    description: "水平排列的单选框组。",
    isCategoryStart: false,
  },

  // === 卡片样式 ===
  {
    category: "卡片样式",
    className: "radio-card",
    description: "将单选框与标签封装为卡片样式。",
    isCategoryStart: true,
  },

  // === 按钮样式 ===
  {
    category: "按钮样式",
    className: "radio-button",
    description: "单选按钮样式，支持与标签绑定交互。",
    isCategoryStart: true,
  },
  {
    category: "按钮样式",
    className: "radio-button-group",
    description: "按钮样式的单选组，自动处理左右圆角与边框重叠。",
    isCategoryStart: false,
  },

  // === 带描述 ===
  {
    category: "带描述",
    className: "radio-description",
    description: "单选项带标题与描述信息布局。",
    isCategoryStart: true,
  },

  // === 图标样式 ===
  {
    category: "图标样式",
    className: "radio-icon",
    description: "单选框图标样式，支持图标与文字组合。",
    isCategoryStart: true,
  },
];
</script>

<template>
  <DocsContainer>
    <DocsHeader
      title="Radio 单选框组件"
      description="用于从一组选项中选择一个的表单组件，支持多种尺寸、配色与布局形式。"
    />

    <ApiReference :data="apiClasses" />

    <!-- 基础示例 -->
    <DocsSection title="基础示例">
      <div class="radio-group-inline">
        <input type="radio" id="r1" name="r" class="radio" checked />
        <input type="radio" id="r2" name="r" class="radio" />
        <input type="radio" id="r3" name="r" class="radio" disabled />
      </div>
    </DocsSection>

    <!-- 颜色示例 -->
    <DocsSection title="颜色变体">
      <div class="radio-group-inline">
        <input type="radio" name="c1" class="radio radio-primary" checked />
        <input type="radio" name="c1" class="radio radio-secondary" />
        <input type="radio" name="c1" class="radio radio-accent" />
        <input type="radio" name="c1" class="radio radio-success" />
        <input type="radio" name="c1" class="radio radio-warning" />
        <input type="radio" name="c1" class="radio radio-error" />
      </div>
    </DocsSection>

    <!-- 尺寸示例 -->
    <DocsSection title="尺寸变体">
      <div class="radio-group-inline items-center">
        <input type="radio" name="size" class="radio radio-xs" />
        <input type="radio" name="size" class="radio radio-sm" />
        <input type="radio" name="size" class="radio radio-md" checked />
        <input type="radio" name="size" class="radio radio-lg" />
        <input type="radio" name="size" class="radio radio-xl" />
      </div>
    </DocsSection>

    <!-- 卡片样式 -->
    <DocsSection title="卡片样式">
      <div class="radio-group-inline">
        <div class="radio-card">
          <input type="radio" id="card1" name="card" checked />
          <label for="card1">选项一</label>
        </div>
        <div class="radio-card">
          <input type="radio" id="card2" name="card" />
          <label for="card2">选项二</label>
        </div>
        <div class="radio-card">
          <input type="radio" id="card3" name="card" disabled />
          <label for="card3">禁用项</label>
        </div>
      </div>
    </DocsSection>

    <!-- 按钮样式 -->
    <DocsSection title="按钮样式">
      <div class="radio-button-group">
        <div class="radio-button">
          <input type="radio" id="b1" name="btn" checked />
          <label for="b1">按钮 1</label>
        </div>
        <div class="radio-button">
          <input type="radio" id="b2" name="btn" />
          <label for="b2">按钮 2</label>
        </div>
        <div class="radio-button">
          <input type="radio" id="b3" name="btn" />
          <label for="b3">按钮 3</label>
        </div>
      </div>
    </DocsSection>

    <!-- 带描述 -->
    <DocsSection title="带描述内容">
      <div class="radio-group">
        <div class="radio-description">
          <input type="radio" id="desc1" name="desc" checked />
          <div class="content">
            <div class="title">标准选项</div>
            <div class="description">描述信息说明该选项的用途。</div>
          </div>
        </div>
        <div class="radio-description">
          <input type="radio" id="desc2" name="desc" />
          <div class="content">
            <div class="title">备选项</div>
            <div class="description">适用于特定场景下的配置。</div>
          </div>
        </div>
      </div>
    </DocsSection>

    <!-- 图标样式 -->
    <DocsSection title="图标样式">
      <div class="radio-group-inline">
        <div class="radio-icon">
          <input type="radio" id="icon1" name="icon" checked />
          <label for="icon1">
            <span>🌞</span>
            <span>日间模式</span>
          </label>
        </div>

        <div class="radio-icon">
          <input type="radio" id="icon2" name="icon" />
          <label for="icon2">
            <span>🌜</span>
            <span>夜间模式</span>
          </label>
        </div>

        <div class="radio-icon">
          <input type="radio" id="icon3" name="icon" disabled />
          <label for="icon3">
            <span>🚫</span>
            <span>禁用</span>
          </label>
        </div>
      </div>
    </DocsSection>
  </DocsContainer>
</template>
