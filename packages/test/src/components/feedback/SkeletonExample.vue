<script setup lang="ts">
import DocsHeader from "../zcomp/DocsHeader.vue";
import ApiReference from "../zcomp/ApiReference.vue";
import DocsContainer from "../zcomp/DocsContainer.vue";
import DocsSection from "../zcomp/DocsSection.vue";

const apiClasses = [
  {
    category: "基础",
    className: "skeleton",
    description: "基础骨架样式，带线性渐变与动画效果。",
    isCategoryStart: true,
  },
  {
    category: "动画",
    className: "skeleton-wave",
    description: "波浪动画骨架，具有左右移动渐变效果。",
    isCategoryStart: true,
  },
  {
    category: "动画",
    className: "skeleton-pulse",
    description: "脉冲动画骨架，透明度周期变化。",
    isCategoryStart: false,
  },
  {
    category: "文字",
    className: "skeleton-text",
    description: "标准文本行骨架。",
    isCategoryStart: true,
  },
  {
    category: "文字",
    className: "skeleton-text-sm",
    description: "小号文本行骨架。",
    isCategoryStart: false,
  },
  {
    category: "文字",
    className: "skeleton-text-lg",
    description: "大号文本行骨架。",
    isCategoryStart: false,
  },
  {
    category: "文字",
    className: "skeleton-text-xl",
    description: "超大文本行骨架。",
    isCategoryStart: false,
  },
  {
    category: "标题",
    className: "skeleton-title",
    description: "标准标题骨架。",
    isCategoryStart: true,
  },
  {
    category: "标题",
    className: "skeleton-title-sm",
    description: "小标题骨架。",
    isCategoryStart: false,
  },
  {
    category: "标题",
    className: "skeleton-title-lg",
    description: "大标题骨架。",
    isCategoryStart: false,
  },
  {
    category: "头像",
    className: "skeleton-avatar",
    description: "标准头像骨架。",
    isCategoryStart: true,
  },
  {
    category: "头像",
    className: "skeleton-avatar-sm",
    description: "小头像骨架。",
    isCategoryStart: false,
  },
  {
    category: "头像",
    className: "skeleton-avatar-lg",
    description: "大头像骨架。",
    isCategoryStart: false,
  },
  {
    category: "头像",
    className: "skeleton-avatar-xl",
    description: "超大头像骨架。",
    isCategoryStart: false,
  },
  {
    category: "形状",
    className: "skeleton-circle",
    description: "圆形骨架。",
    isCategoryStart: true,
  },
  {
    category: "形状",
    className: "skeleton-square",
    description: "方形骨架。",
    isCategoryStart: false,
  },
  {
    category: "形状",
    className: "skeleton-rect",
    description: "矩形骨架。",
    isCategoryStart: false,
  },
  {
    category: "内容",
    className: "skeleton-image",
    description: "图片骨架（16:9 比例）。",
    isCategoryStart: true,
  },
  {
    category: "内容",
    className: "skeleton-card",
    description: "卡片骨架。",
    isCategoryStart: false,
  },
  {
    category: "内容",
    className: "skeleton-thumbnail",
    description: "缩略图骨架。",
    isCategoryStart: false,
  },
  {
    category: "按钮",
    className: "skeleton-button",
    description: "标准按钮骨架。",
    isCategoryStart: true,
  },
  {
    category: "按钮",
    className: "skeleton-button-sm",
    description: "小按钮骨架。",
    isCategoryStart: false,
  },
  {
    category: "按钮",
    className: "skeleton-button-lg",
    description: "大按钮骨架。",
    isCategoryStart: false,
  },
  {
    category: "输入框",
    className: "skeleton-input",
    description: "输入框骨架。",
    isCategoryStart: true,
  },
  {
    category: "输入框",
    className: "skeleton-input-sm",
    description: "小输入框骨架。",
    isCategoryStart: false,
  },
  {
    category: "输入框",
    className: "skeleton-input-lg",
    description: "大输入框骨架。",
    isCategoryStart: false,
  },
  {
    category: "段落",
    className: "skeleton-paragraph",
    description: "段落骨架（多行文本占位）。",
    isCategoryStart: true,
  },
  {
    category: "列表项",
    className: "skeleton-list-item",
    description: "列表项骨架，带头像与内容占位。",
    isCategoryStart: true,
  },
  {
    category: "卡片布局",
    className: "skeleton-card-layout",
    description: "卡片式骨架布局容器。",
    isCategoryStart: true,
  },
  {
    category: "颜色",
    className: "skeleton-primary",
    description: "主色调骨架渐变。",
    isCategoryStart: true,
  },
  {
    category: "颜色",
    className: "skeleton-secondary",
    description: "次色调骨架渐变。",
    isCategoryStart: false,
  },
  {
    category: "圆角",
    className: "skeleton-rounded-md",
    description: "中等圆角骨架。",
    isCategoryStart: true,
  },
  {
    category: "圆角",
    className: "skeleton-rounded-lg",
    description: "大圆角骨架。",
    isCategoryStart: false,
  },
  {
    category: "圆角",
    className: "skeleton-rounded-full",
    description: "全圆角骨架。",
    isCategoryStart: false,
  },
  {
    category: "组合",
    className: "skeleton-user-card",
    description: "用户卡片骨架预设布局。",
    isCategoryStart: true,
  },
  {
    category: "组合",
    className: "skeleton-article",
    description: "文章列表骨架预设布局。",
    isCategoryStart: false,
  },
  {
    category: "组合",
    className: "skeleton-comment",
    description: "评论骨架预设布局。",
    isCategoryStart: false,
  },
];
</script>

<template>
  <DocsContainer>
    <DocsHeader
      title="Skeleton 骨架屏"
      description="在内容加载前提供结构占位，避免布局跳动。支持多种形态、动画和预设布局。"
    />

    <ApiReference :data="apiClasses" />

    <DocsSection title="基础用法">
      <div class="flex flex-col gap-4 bg-card p-6 rounded-lg">
        <div class="skeleton w-full h-8"></div>
        <div class="skeleton-text w-1/2"></div>
        <div class="skeleton-paragraph">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </DocsSection>

    <DocsSection title="头像与列表骨架">
      <div class="space-y-4">
        <div class="skeleton-list-item border rounded-lg">
          <div class="skeleton-avatar"></div>
          <div class="skeleton-content">
            <div class="skeleton-text w-2/3"></div>
            <div class="skeleton-text w-1/3"></div>
          </div>
        </div>
        <div class="skeleton-list-item border rounded-lg">
          <div class="skeleton-avatar-lg"></div>
          <div class="skeleton-content">
            <div class="skeleton-title-sm"></div>
            <div class="skeleton-text w-4/5"></div>
          </div>
        </div>
      </div>
    </DocsSection>

    <DocsSection title="颜色与动画变体">
      <div class="flex flex-wrap gap-4">
        <div class="skeleton w-32 h-8"></div>
        <div class="skeleton-wave w-32 h-8"></div>
        <div class="skeleton-pulse w-32 h-8"></div>
        <div class="skeleton-primary w-32 h-8"></div>
        <div class="skeleton-secondary w-32 h-8"></div>
      </div>
    </DocsSection>
    <DocsSection title="卡片布局骨架">
      <div class="skeleton-card-layout">
        <div class="skeleton-image"></div>
        <div class="skeleton-paragraph mt-3">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </DocsSection>
  </DocsContainer>
</template>
