<script setup lang="ts">
import { ref } from "vue";
import DocsHeader from "../zcomp/DocsHeader.vue";
import ApiReference from "../zcomp/ApiReference.vue";
import DocsContainer from "../zcomp/DocsContainer.vue";
import DocsSection from "../zcomp/DocsSection.vue";

const apiClasses = [
  {
    category: "基础",
    className: "badge",
    description:
      "徽章基础样式，内联、圆角、文字加粗，支持 CSS 变量控制颜色和边框。",
    isCategoryStart: true,
  },
  {
    category: "颜色变体",
    className: "badge-primary",
    description: "主色徽章，使用 CSS 变量控制背景、前景和边框。",
    isCategoryStart: false,
  },
  {
    category: "颜色变体",
    className: "badge-secondary",
    description: "次色徽章，使用 CSS 变量控制颜色。",
    isCategoryStart: false,
  },
  {
    category: "颜色变体",
    className: "badge-destructive",
    description: "危险/删除徽章。",
    isCategoryStart: false,
  },
  {
    category: "颜色变体",
    className: "badge-muted",
    description: "弱色徽章。",
    isCategoryStart: false,
  },
  {
    category: "颜色变体",
    className: "badge-accent",
    description: "强调徽章。",
    isCategoryStart: false,
  },
  {
    category: "颜色变体",
    className: "badge-outline",
    description: "描边徽章，根据颜色类修改前景色和边框。",
    isCategoryStart: false,
  },
  {
    category: "尺寸变体",
    className: "badge-sm / badge-md / badge-lg / badge-xl",
    description: "不同尺寸的徽章。",
    isCategoryStart: false,
  },
  {
    category: "形状",
    className: "badge-square / badge-rounded",
    description: "控制徽章圆角形状。",
    isCategoryStart: false,
  },
  {
    category: "扩展",
    className: "badge-dot",
    description: "带点徽章，在前面显示小圆点。",
    isCategoryStart: false,
  },
  {
    category: "扩展",
    className: "badge-closable",
    description: "可关闭徽章，需要 JS 支持关闭操作。",
    isCategoryStart: false,
  },
];
</script>

<template>
  <DocsContainer>
    <DocsHeader
      title="Badge 徽章"
      description="用于标记、标签或状态显示的小徽章组件，支持多种颜色、尺寸、形状和扩展效果。"
    />

    <ApiReference :data="apiClasses" />

    <DocsSection title="基础与颜色示例">
      <div class="flex flex-wrap gap-2 p-6 bg-card">
        <span class="badge">默认</span>
        <span class="badge badge-primary">Primary</span>
        <span class="badge badge-secondary">Secondary</span>
        <span class="badge badge-destructive">Destructive</span>
        <span class="badge badge-muted">Muted</span>
        <span class="badge badge-accent">Accent</span>
        <span class="badge badge-outline badge-primary">Outline Primary</span>
      </div>
    </DocsSection>

    <DocsSection title="尺寸示例">
      <div class="flex flex-wrap gap-2 p-6 border">
        <span class="badge badge-sm badge-primary">SM</span>
        <span class="badge badge-md badge-secondary">MD</span>
        <span class="badge badge-lg badge-accent">LG</span>
        <span class="badge badge-xl badge-destructive">XL</span>
      </div>
    </DocsSection>

    <DocsSection title="形状示例">
      <div class="flex flex-wrap gap-2 p-6 border">
        <span class="badge badge-square badge-primary">Square</span>
        <span class="badge badge-rounded badge-accent">Rounded</span>
      </div>
    </DocsSection>

    <DocsSection title="扩展示例">
      <div class="flex flex-wrap gap-2 p-6 border">
        <span class="badge badge-dot badge-primary">Dot</span>
        <span class="badge badge-closable badge-secondary"
          >Closable <span class="ml-1 cursor-pointer">✕</span></span
        >
      </div>
    </DocsSection>
  </DocsContainer>
</template>
