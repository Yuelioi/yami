<script setup lang="ts">
import DocsHeader from "../zcomp/DocsHeader.vue";
import DocsContainer from "../zcomp/DocsContainer.vue";
import DocsSection from "../zcomp/DocsSection.vue";
import ApiReference from "../zcomp/ApiReference.vue";

const apiClasses = [
  // === 基础 ===
  {
    category: "基础",
    className: "label",
    description: "Label 基类，用于文本标签，与表单控件配合使用。",
    isCategoryStart: true,
  },
  {
    category: "基础",
    className: "label-required",
    description: "在标签文本后添加红色星号（必填标记）。",
    isCategoryStart: false,
  },
  {
    category: "基础",
    className: "label-description",
    description: "带辅助说明文字的标签样式。",
    isCategoryStart: false,
  },
  {
    category: "基础",
    className: "label-inline",
    description: "水平布局，label 与控件在同一行显示。",
    isCategoryStart: false,
  },

  // === 尺寸 ===
  {
    category: "尺寸",
    className: "label-xs",
    description: "超小号文字标签。",
    isCategoryStart: true,
  },
  {
    category: "尺寸",
    className: "label-sm",
    description: "小号文字标签。",
    isCategoryStart: false,
  },
  {
    category: "尺寸",
    className: "label-md",
    description: "中等字号标签（默认）。",
    isCategoryStart: false,
  },
  {
    category: "尺寸",
    className: "label-lg",
    description: "大号文字标签。",
    isCategoryStart: false,
  },

  // === 状态 ===
  {
    category: "状态",
    className: "label-disabled",
    description: "禁用状态，标签变灰并不可交互。",
    isCategoryStart: true,
  },
  {
    category: "状态",
    className: "label-error",
    description: "错误状态，文本为错误色。",
    isCategoryStart: false,
  },
  {
    category: "状态",
    className: "label-success",
    description: "成功状态，文本为成功色。",
    isCategoryStart: false,
  },

  // === 特殊样式 ===
  {
    category: "特殊样式",
    className: "label-dot",
    description: "带圆点指示器的标签样式。",
    isCategoryStart: true,
  },

  // === 浮动标签 ===
  {
    category: "浮动标签",
    className: "label-float",
    description: "浮动标签容器，支持 label 与输入框的浮动交互。",
    isCategoryStart: true,
  },
  {
    category: "浮动标签",
    className: "label-float-required",
    description: "浮动标签必填标记样式。",
    isCategoryStart: false,
  },
  {
    category: "浮动标签",
    className: "label-float-error",
    description: "浮动标签错误状态（红色边框与标签）。",
    isCategoryStart: false,
  },
  {
    category: "浮动标签",
    className: "label-float-success",
    description: "浮动标签成功状态（绿色边框与标签）。",
    isCategoryStart: false,
  },
  {
    category: "浮动标签",
    className: "label-float-sm",
    description: "小号浮动标签样式，适配紧凑表单。",
    isCategoryStart: false,
  },
  {
    category: "浮动标签",
    className: "label-float-lg",
    description: "大号浮动标签样式。",
    isCategoryStart: false,
  },
  {
    category: "浮动标签",
    className: "label-float-icon",
    description: "带图标的浮动标签样式。",
    isCategoryStart: false,
  },
  {
    category: "浮动标签",
    className: "label-float-outlined",
    description: "Material Design 风格的外框浮动标签。",
    isCategoryStart: false,
  },
];
</script>

<template>
  <DocsContainer>
    <DocsHeader
      title="Label 标签组件"
      description="用于表单输入控件前的文本标识，支持状态、必填标记、浮动标签等多种样式。"
    />

    <ApiReference :data="apiClasses" />

    <!-- 基础示例 -->
    <DocsSection title="基础示例">
      <div class="flex flex-col gap-4">
        <label class="label" for="name">用户名</label>
        <input id="name" type="text" class="input" placeholder="请输入用户名" />

        <label class="label label-required" for="email">邮箱</label>
        <input
          id="email"
          type="email"
          class="input"
          placeholder="请输入邮箱地址"
        />

        <div class="label-description">
          <label class="label" for="password">密码</label>
          <div class="description">至少 8 位字符，包含字母与数字。</div>
        </div>
        <input
          id="password"
          type="password"
          class="input"
          placeholder="输入密码"
        />

        <div class="label-inline">
          <label class="label">记住我</label>
          <input type="checkbox" />
        </div>
      </div>
    </DocsSection>

    <!-- 状态与尺寸示例 -->
    <DocsSection title="状态与尺寸">
      <div class="flex flex-col gap-4">
        <label class="label label-disabled">禁用状态</label>
        <label class="label label-error">错误状态</label>
        <label class="label label-success">成功状态</label>

        <label class="label label-xs">XS 尺寸标签</label>
        <label class="label label-sm">SM 尺寸标签</label>
        <label class="label label-md">MD 尺寸标签</label>
        <label class="label label-lg">LG 尺寸标签</label>
      </div>
    </DocsSection>

    <!-- 特殊样式 -->
    <DocsSection title="特殊样式">
      <div class="flex flex-col gap-4">
        <label class="label label-dot">带圆点标签</label>
      </div>
    </DocsSection>

    <!-- 浮动标签 -->
    <DocsSection title="浮动标签">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div class="label-float">
          <input type="text" placeholder=" " />
          <label>用户名</label>
        </div>

        <div class="label-float label-float-required">
          <input type="email" placeholder=" " />
          <label>邮箱地址</label>
        </div>

        <div class="label-float label-float-error">
          <input type="text" placeholder=" " />
          <label>错误示例</label>
        </div>

        <div class="label-float label-float-success">
          <input type="text" placeholder=" " />
          <label>成功状态</label>
        </div>

        <div class="label-float label-float-sm">
          <input type="text" placeholder=" " />
          <label>小号浮动标签</label>
        </div>

        <div class="label-float label-float-lg">
          <input type="text" placeholder=" " />
          <label>大号浮动标签</label>
        </div>

        <div class="label-float label-float-icon">
          <input type="text" placeholder=" " />
          <span class="icon">🔍</span>
          <label>带图标输入</label>
        </div>

        <div class="label-float label-float-outlined">
          <input type="text" placeholder=" " />
          <label>Outlined 样式</label>
        </div>
      </div>
    </DocsSection>
  </DocsContainer>
</template>
