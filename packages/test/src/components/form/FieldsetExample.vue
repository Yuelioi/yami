<script setup lang="ts">
import DocsHeader from "../zcomp/DocsHeader.vue";
import DocsContainer from "../zcomp/DocsContainer.vue";
import DocsSection from "../zcomp/DocsSection.vue";
import ApiReference from "../zcomp/ApiReference.vue";

const apiClasses = [
  {
    category: "基础",
    className: "fieldset",
    description: "基础字段集样式，包含边框、背景与标题。",
    isCategoryStart: true,
  },
  {
    category: "基础",
    className: "fieldset-description",
    description: "字段集的辅助说明文字。",
    isCategoryStart: false,
  },
  {
    category: "基础",
    className: "fieldset-content",
    description: "字段集内部内容容器。",
    isCategoryStart: false,
  },
  {
    category: "样式变体",
    className: "fieldset-plain",
    description: "无边框与背景样式。",
    isCategoryStart: true,
  },
  {
    category: "样式变体",
    className: "fieldset-card",
    description: "卡片风格样式，带阴影与圆角。",
    isCategoryStart: false,
  },
  {
    category: "样式变体",
    className: "fieldset-with-icon",
    description: "标题带图标样式。",
    isCategoryStart: false,
  },
  {
    category: "样式变体",
    className: "fieldset-collapsible",
    description: "可折叠字段集（需配合 JS 控制展开/收起）。",
    isCategoryStart: false,
  },
  {
    category: "配色方案",
    className: "fieldset-primary",
    description: "主色调样式。",
    isCategoryStart: true,
  },
  {
    category: "配色方案",
    className: "fieldset-secondary",
    description: "次级色样式。",
    isCategoryStart: false,
  },
  {
    category: "配色方案",
    className: "fieldset-accent",
    description: "强调色样式。",
    isCategoryStart: false,
  },
  {
    category: "配色方案",
    className: "fieldset-destructive",
    description: "危险/错误状态样式。",
    isCategoryStart: false,
  },
  {
    category: "尺寸",
    className: "fieldset-sm",
    description: "紧凑型小尺寸。",
    isCategoryStart: true,
  },
  {
    category: "尺寸",
    className: "fieldset-md",
    description: "中等尺寸（默认）。",
    isCategoryStart: false,
  },
  {
    category: "尺寸",
    className: "fieldset-lg",
    description: "大尺寸样式。",
    isCategoryStart: false,
  },
  {
    category: "边框与阴影",
    className: "fieldset-border-dashed",
    description: "虚线边框样式。",
    isCategoryStart: true,
  },
  {
    category: "边框与阴影",
    className: "fieldset-border-left",
    description: "左侧强调边框。",
    isCategoryStart: false,
  },
  {
    category: "边框与阴影",
    className: "fieldset-shadow-md",
    description: "中等阴影样式。",
    isCategoryStart: false,
  },
  {
    category: "布局",
    className: "fieldset-grid-2",
    description: "两列网格布局。",
    isCategoryStart: true,
  },
  {
    category: "布局",
    className: "fieldset-inline",
    description: "内联布局样式。",
    isCategoryStart: false,
  },
  {
    category: "状态",
    className: "fieldset-error",
    description: "错误状态样式。",
    isCategoryStart: true,
  },
  {
    category: "状态",
    className: "fieldset-success",
    description: "成功状态样式。",
    isCategoryStart: false,
  },
  {
    category: "状态",
    className: "fieldset-warning",
    description: "警告状态样式。",
    isCategoryStart: false,
  },
];
</script>

<template>
  <DocsContainer>
    <DocsHeader
      title="Fieldset 字段集组件"
      description="用于组织和分组表单字段的容器组件，支持多种样式、布局与状态展示。"
    />

    <ApiReference :data="apiClasses" />

    <!-- 基础示例 -->
    <DocsSection title="基础示例">
      <fieldset class="fieldset">
        <legend>个人信息</legend>
        <div class="fieldset-description">请填写你的基本资料。</div>
        <div class="fieldset-content space-y-3">
          <input type="text" class="input w-full" placeholder="姓名" />
          <input type="email" class="input w-full" placeholder="邮箱" />
        </div>
      </fieldset>
    </DocsSection>

    <!-- 样式变体 -->
    <DocsSection title="样式变体">
      <div class="flex flex-col gap-4">
        <fieldset class="fieldset fieldset-plain">
          <legend>Plain 样式</legend>
          <div class="fieldset-content">
            <input type="text" class="input w-full" placeholder="示例输入框" />
          </div>
        </fieldset>

        <fieldset class="fieldset fieldset-card">
          <legend>Card 样式</legend>
          <div class="fieldset-content">
            <input type="text" class="input w-full" placeholder="示例输入框" />
          </div>
        </fieldset>

        <fieldset class="fieldset fieldset-with-icon">
          <legend>带图标标题</legend>
          <div class="fieldset-content">
            <input type="text" class="input w-full" placeholder="示例输入框" />
          </div>
        </fieldset>
      </div>
    </DocsSection>

    <!-- 配色方案 -->
    <DocsSection title="配色方案">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <fieldset class="fieldset fieldset-primary">
          <legend>Primary</legend>
          <div class="fieldset-content">
            <input class="input w-full" placeholder="Primary 样式" />
          </div>
        </fieldset>

        <fieldset class="fieldset fieldset-secondary">
          <legend>Secondary</legend>
          <div class="fieldset-content">
            <input class="input w-full" placeholder="Secondary 样式" />
          </div>
        </fieldset>

        <fieldset class="fieldset fieldset-accent">
          <legend>Accent</legend>
          <div class="fieldset-content">
            <input class="input w-full" placeholder="Accent 样式" />
          </div>
        </fieldset>

        <fieldset class="fieldset fieldset-destructive">
          <legend>Destructive</legend>
          <div class="fieldset-content">
            <input class="input w-full" placeholder="Destructive 样式" />
          </div>
        </fieldset>
      </div>
    </DocsSection>

    <!-- 尺寸变体 -->
    <DocsSection title="尺寸变体">
      <div class="flex flex-col gap-4">
        <fieldset class="fieldset fieldset-sm">
          <legend>小尺寸</legend>
          <div class="fieldset-content">
            <input class="input w-full" placeholder="Small" />
          </div>
        </fieldset>

        <fieldset class="fieldset fieldset-md">
          <legend>中等尺寸</legend>
          <div class="fieldset-content">
            <input class="input w-full" placeholder="Medium" />
          </div>
        </fieldset>

        <fieldset class="fieldset fieldset-lg">
          <legend>大尺寸</legend>
          <div class="fieldset-content">
            <input class="input w-full" placeholder="Large" />
          </div>
        </fieldset>
      </div>
    </DocsSection>

    <!-- 边框与阴影 -->
    <DocsSection title="边框与阴影样式">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <fieldset class="fieldset fieldset-border-dashed">
          <legend>虚线边框</legend>
          <div class="fieldset-content">
            <input class="input w-full" placeholder="Dashed" />
          </div>
        </fieldset>

        <fieldset class="fieldset fieldset-border-left">
          <legend>左侧强调</legend>
          <div class="fieldset-content">
            <input class="input w-full" placeholder="Left Border" />
          </div>
        </fieldset>

        <fieldset class="fieldset fieldset-shadow-md">
          <legend>中等阴影</legend>
          <div class="fieldset-content">
            <input class="input w-full" placeholder="Shadow" />
          </div>
        </fieldset>
      </div>
    </DocsSection>

    <!-- 布局样式 -->
    <DocsSection title="布局样式">
      <fieldset class="fieldset fieldset-grid-2">
        <legend>双列布局</legend>
        <div class="fieldset-content">
          <input class="input w-full" placeholder="字段 1" />
          <input class="input w-full" placeholder="字段 2" />
          <input class="input w-full" placeholder="字段 3" />
          <input class="input w-full" placeholder="字段 4" />
        </div>
      </fieldset>

      <fieldset class="fieldset fieldset-inline mt-4">
        <legend>内联布局</legend>
        <div class="fieldset-content">
          <input class="input w-40" placeholder="姓名" />
          <input class="input w-60" placeholder="邮箱" />
          <button class="btn btn-primary">提交</button>
        </div>
      </fieldset>
    </DocsSection>

    <!-- 状态样式 -->
    <DocsSection title="状态样式">
      <div class="flex flex-col gap-4">
        <fieldset class="fieldset fieldset-error">
          <legend>错误状态</legend>
          <div class="fieldset-content">
            <input class="input w-full" placeholder="错误示例" />
            <div class="fieldset-error-message">此字段不能为空。</div>
          </div>
        </fieldset>

        <fieldset class="fieldset fieldset-success">
          <legend>成功状态</legend>
          <div class="fieldset-content">
            <input class="input w-full" placeholder="成功示例" />
          </div>
        </fieldset>

        <fieldset class="fieldset fieldset-warning">
          <legend>警告状态</legend>
          <div class="fieldset-content">
            <input class="input w-full" placeholder="警告示例" />
          </div>
        </fieldset>
      </div>
    </DocsSection>
  </DocsContainer>
</template>
