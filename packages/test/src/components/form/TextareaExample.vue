<script setup lang="ts">
import DocsHeader from "../zcomp/DocsHeader.vue";
import DocsContainer from "../zcomp/DocsContainer.vue";
import DocsSection from "../zcomp/DocsSection.vue";
import ApiReference from "../zcomp/ApiReference.vue";

const apiClasses = [
  {
    category: "基础",
    className: "textarea",
    description: "基础文本域样式，包含边框、背景与内边距。",
    isCategoryStart: true,
  },

  {
    category: "颜色变体",
    className: "textarea-primary",
    description: "主色调边框与焦点高亮。",
    isCategoryStart: true,
  },
  {
    category: "颜色变体",
    className: "textarea-secondary",
    description: "次级颜色样式。",
    isCategoryStart: false,
  },
  {
    category: "颜色变体",
    className: "textarea-accent",
    description: "强调色样式。",
    isCategoryStart: false,
  },

  {
    category: "尺寸",
    className: "textarea-xs",
    description: "超小尺寸文本域。",
    isCategoryStart: true,
  },
  {
    category: "尺寸",
    className: "textarea-sm",
    description: "小号文本域。",
    isCategoryStart: false,
  },
  {
    category: "尺寸",
    className: "textarea-md",
    description: "中等尺寸（默认）。",
    isCategoryStart: false,
  },
  {
    category: "尺寸",
    className: "textarea-lg",
    description: "大号文本域。",
    isCategoryStart: false,
  },
  {
    category: "尺寸",
    className: "textarea-xl",
    description: "超大文本域。",
    isCategoryStart: false,
  },

  {
    category: "高度变体",
    className: "textarea-h-auto",
    description: "自动高度（需配合 JS 实现）。",
    isCategoryStart: true,
  },
  {
    category: "高度变体",
    className: "textarea-h-sm",
    description: "固定小高度范围。",
    isCategoryStart: false,
  },
  {
    category: "高度变体",
    className: "textarea-h-md",
    description: "中等高度范围。",
    isCategoryStart: false,
  },
  {
    category: "高度变体",
    className: "textarea-h-lg",
    description: "大高度范围。",
    isCategoryStart: false,
  },
  {
    category: "高度变体",
    className: "textarea-h-full",
    description: "占满父级高度。",
    isCategoryStart: false,
  },

  {
    category: "修饰类",
    className: "textarea-ghost",
    description: "透明背景幽灵样式。",
    isCategoryStart: true,
  },
  {
    category: "修饰类",
    className: "textarea-bordered",
    description: "加粗边框样式。",
    isCategoryStart: false,
  },
  {
    category: "修饰类",
    className: "textarea-borderless",
    description: "无边框样式。",
    isCategoryStart: false,
  },
  {
    category: "修饰类",
    className: "textarea-code",
    description: "代码编辑器风格（等宽字体）。",
    isCategoryStart: false,
  },
  {
    category: "修饰类",
    className: "textarea-auto",
    description: "自动增长文本域（需 JS 支持）。",
    isCategoryStart: false,
  },
];
</script>

<template>
  <DocsContainer>
    <DocsHeader
      title="Textarea 文本域组件"
      description="用于输入多行文本的区域，支持多种尺寸、样式与功能扩展（图标、计数器、自动增长等）。"
    />

    <ApiReference :data="apiClasses" />

    <!-- 基础示例 -->
    <DocsSection title="基础示例">
      <div class="flex flex-col gap-4">
        <textarea class="textarea" placeholder="请输入内容..."></textarea>
        <textarea class="textarea" disabled placeholder="禁用状态"></textarea>
      </div>
    </DocsSection>

    <!-- 颜色变体 -->
    <DocsSection title="颜色变体">
      <div class="flex flex-col gap-4">
        <textarea
          class="textarea textarea-primary"
          placeholder="Primary 样式"
        ></textarea>
        <textarea
          class="textarea textarea-secondary"
          placeholder="Secondary 样式"
        ></textarea>
        <textarea
          class="textarea textarea-accent"
          placeholder="Accent 样式"
        ></textarea>
      </div>
    </DocsSection>

    <!-- 尺寸变体 -->
    <DocsSection title="尺寸变体">
      <div class="flex flex-col gap-4">
        <textarea class="textarea textarea-xs" placeholder="XS 尺寸"></textarea>
        <textarea class="textarea textarea-sm" placeholder="SM 尺寸"></textarea>
        <textarea class="textarea textarea-md" placeholder="MD 尺寸"></textarea>
        <textarea class="textarea textarea-lg" placeholder="LG 尺寸"></textarea>
        <textarea class="textarea textarea-xl" placeholder="XL 尺寸"></textarea>
      </div>
    </DocsSection>

    <!-- 特殊样式 -->
    <DocsSection title="特殊样式">
      <div class="flex flex-col gap-4">
        <textarea
          class="textarea textarea-ghost"
          placeholder="幽灵样式（透明背景）"
        ></textarea>
        <textarea
          class="textarea textarea-bordered"
          placeholder="加粗边框样式"
        ></textarea>
        <textarea
          class="textarea textarea-borderless"
          placeholder="无边框样式"
        ></textarea>
        <textarea
          class="textarea textarea-code"
          placeholder="代码编辑器样式"
        ></textarea>
      </div>
    </DocsSection>
  </DocsContainer>
</template>
