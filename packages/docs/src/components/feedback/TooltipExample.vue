<script setup lang="ts">
import DocsHeader from "../zcomp/DocsHeader.vue";
import DocsContainer from "../zcomp/DocsContainer.vue";
import DocsSection from "../zcomp/DocsSection.vue";
import ApiReference from "../zcomp/ApiReference.vue";

const apiClasses = [
  // === 基础 ===
  {
    category: "基础",
    className: "tooltip",
    description: "Tooltip 基类，定义相对定位与悬停触发的显示逻辑。",
    isCategoryStart: true,
  },
  {
    category: "基础",
    className: "tooltip-content",
    description: "提示内容容器，包含背景、边框、阴影与文本样式。",
    isCategoryStart: false,
  },

  // === 位置 ===
  {
    category: "位置",
    className: "tooltip-top",
    description: "显示在触发元素上方。",
    isCategoryStart: true,
  },
  {
    category: "位置",
    className: "tooltip-bottom",
    description: "显示在触发元素下方。",
    isCategoryStart: false,
  },
  {
    category: "位置",
    className: "tooltip-left",
    description: "显示在触发元素左侧。",
    isCategoryStart: false,
  },
  {
    category: "位置",
    className: "tooltip-right",
    description: "显示在触发元素右侧。",
    isCategoryStart: false,
  },

  // === 配色方案 ===
  {
    category: "配色方案",
    className: "tooltip-primary",
    description: "主色提示框，使用 Primary 主题色。",
    isCategoryStart: true,
  },
  {
    category: "配色方案",
    className: "tooltip-secondary",
    description: "次要提示框，使用 Secondary 主题色。",
    isCategoryStart: false,
  },
  {
    category: "配色方案",
    className: "tooltip-accent",
    description: "强调提示框，使用 Accent 主题色。",
    isCategoryStart: false,
  },
  {
    category: "配色方案",
    className: "tooltip-destructive",
    description: "危险提示框，使用 Destructive 主题色。",
    isCategoryStart: false,
  },

  // === 尺寸 ===
  {
    category: "尺寸",
    className: "tooltip-sm",
    description: "小号提示框，紧凑间距与较小字体。",
    isCategoryStart: true,
  },
  {
    category: "尺寸",
    className: "tooltip-lg",
    description: "大号提示框，增加内边距与字体。",
    isCategoryStart: false,
  },

  // === 修饰类 ===
  {
    category: "修饰类",
    className: "tooltip-no-arrow",
    description: "隐藏 Tooltip 的箭头装饰。",
    isCategoryStart: true,
  },
  {
    category: "修饰类",
    className: "tooltip-open",
    description: "始终显示 Tooltip 内容。",
    isCategoryStart: false,
  },
  {
    category: "修饰类",
    className: "tooltip-delay",
    description: "延迟显示 Tooltip（0.3s）。",
    isCategoryStart: false,
  },
  {
    category: "修饰类",
    className: "tooltip-wrap",
    description: "允许 Tooltip 内容自动换行。",
    isCategoryStart: false,
  },

  // === 宽度变体 ===
  {
    category: "宽度变体",
    className: "tooltip-w-sm",
    description: "最大宽度 150px，自动换行。",
    isCategoryStart: true,
  },
  {
    category: "宽度变体",
    className: "tooltip-w-md",
    description: "最大宽度 250px，适中内容。",
    isCategoryStart: false,
  },
  {
    category: "宽度变体",
    className: "tooltip-w-lg",
    description: "最大宽度 350px，容纳较多文本。",
    isCategoryStart: false,
  },

  // === 动画变体 ===
  {
    category: "动画变体",
    className: "tooltip-fade",
    description: "淡入淡出动画效果。",
    isCategoryStart: true,
  },
  {
    category: "动画变体",
    className: "tooltip-scale",
    description: "缩放进入动画效果。",
    isCategoryStart: false,
  },

  // === 圆角 ===
  {
    category: "圆角",
    className: "tooltip-rounded-none",
    description: "无圆角提示框。",
    isCategoryStart: true,
  },
  {
    category: "圆角",
    className: "tooltip-rounded-sm",
    description: "小圆角提示框。",
    isCategoryStart: false,
  },
  {
    category: "圆角",
    className: "tooltip-rounded-lg",
    description: "大圆角提示框。",
    isCategoryStart: false,
  },
  {
    category: "圆角",
    className: "tooltip-rounded-xl",
    description: "超大圆角提示框。",
    isCategoryStart: false,
  },

  // === 阴影 ===
  {
    category: "阴影",
    className: "tooltip-shadow-sm",
    description: "小阴影样式。",
    isCategoryStart: true,
  },
  {
    category: "阴影",
    className: "tooltip-shadow-md",
    description: "中等阴影样式。",
    isCategoryStart: false,
  },
  {
    category: "阴影",
    className: "tooltip-shadow-lg",
    description: "大阴影样式。",
    isCategoryStart: false,
  },

  // === 响应式 ===
  {
    category: "响应式",
    className: "tooltip-responsive",
    description: "Tooltip 最大宽度自适应视口。",
    isCategoryStart: true,
  },
];
</script>

<template>
  <DocsContainer>
    <DocsHeader
      title="Tooltip 提示框组件"
      description="用于鼠标悬停或聚焦时显示附加信息的小型提示框，支持多方向、主题色、尺寸与动画。"
    />

    <ApiReference :data="apiClasses" />

    <!-- 基础示例 -->
    <DocsSection title="基础示例">
      <div class="flex gap-8 items-center">
        <div class="tooltip tooltip-top">
          <button class="btn">上方提示</button>
          <div class="tooltip-content">这是顶部提示内容</div>
        </div>

        <div class="tooltip tooltip-bottom">
          <button class="btn">下方提示</button>
          <div class="tooltip-content">这是底部提示内容</div>
        </div>

        <div class="tooltip tooltip-left">
          <button class="btn">左侧提示</button>
          <div class="tooltip-content">这是左侧提示内容</div>
        </div>

        <div class="tooltip tooltip-right">
          <button class="btn">右侧提示</button>
          <div class="tooltip-content">这是右侧提示内容</div>
        </div>
      </div>
    </DocsSection>

    <!-- 配色示例 -->
    <DocsSection title="配色方案">
      <div class="flex flex-wrap gap-6 items-center">
        <div class="tooltip tooltip-top tooltip-primary">
          <button class="btn">Primary</button>
          <div class="tooltip-content">主要提示样式</div>
        </div>

        <div class="tooltip tooltip-top tooltip-secondary">
          <button class="btn">Secondary</button>
          <div class="tooltip-content">次要提示样式</div>
        </div>

        <div class="tooltip tooltip-top tooltip-accent">
          <button class="btn">Accent</button>
          <div class="tooltip-content">强调提示样式</div>
        </div>

        <div class="tooltip tooltip-top tooltip-destructive">
          <button class="btn">Destructive</button>
          <div class="tooltip-content">危险提示样式</div>
        </div>
      </div>
    </DocsSection>

    <!-- 尺寸与修饰 -->
    <DocsSection title="尺寸与修饰">
      <div class="flex flex-wrap gap-6 items-center">
        <div class="tooltip tooltip-top tooltip-sm">
          <button class="btn">小号</button>
          <div class="tooltip-content">紧凑提示内容</div>
        </div>

        <div class="tooltip tooltip-top tooltip-lg">
          <button class="btn">大号</button>
          <div class="tooltip-content">更大的提示框</div>
        </div>

        <div class="tooltip tooltip-top tooltip-no-arrow">
          <button class="btn">无箭头</button>
          <div class="tooltip-content">没有箭头装饰</div>
        </div>

        <div class="tooltip tooltip-top tooltip-open">
          <button class="btn">始终显示</button>
          <div class="tooltip-content">Tooltip 始终可见</div>
        </div>

        <div class="tooltip tooltip-top tooltip-delay">
          <button class="btn">延迟提示</button>
          <div class="tooltip-content">0.3s 延迟显示</div>
        </div>
      </div>
    </DocsSection>

    <!-- 动画与圆角 -->
    <DocsSection title="动画与圆角">
      <div class="flex flex-wrap gap-6 items-center">
        <div class="tooltip tooltip-top tooltip-fade">
          <button class="btn">Fade 动画</button>
          <div class="tooltip-content">淡入淡出效果</div>
        </div>

        <div class="tooltip tooltip-top tooltip-scale">
          <button class="btn">Scale 动画</button>
          <div class="tooltip-content">缩放动画效果</div>
        </div>

        <div class="tooltip tooltip-top tooltip-rounded-sm">
          <button class="btn">小圆角</button>
          <div class="tooltip-content">圆角 sm</div>
        </div>

        <div class="tooltip tooltip-top tooltip-rounded-lg">
          <button class="btn">大圆角</button>
          <div class="tooltip-content">圆角 lg</div>
        </div>
      </div>
    </DocsSection>

    <!-- 阴影与响应式 -->
    <DocsSection title="阴影与响应式">
      <div class="flex flex-wrap gap-6 items-center">
        <div class="tooltip tooltip-top tooltip-shadow-sm">
          <button class="btn">小阴影</button>
          <div class="tooltip-content">阴影 sm</div>
        </div>

        <div class="tooltip tooltip-top tooltip-shadow-md">
          <button class="btn">中等阴影</button>
          <div class="tooltip-content">阴影 md</div>
        </div>

        <div class="tooltip tooltip-top tooltip-shadow-lg">
          <button class="btn">大阴影</button>
          <div class="tooltip-content">阴影 lg</div>
        </div>

        <div class="tooltip tooltip-top tooltip-responsive">
          <button class="btn">响应式宽度</button>
          <div class="tooltip-content">
            当屏幕宽度较小时自动换行，最大宽度为视口宽度减 2rem。
          </div>
        </div>
      </div>
    </DocsSection>
  </DocsContainer>
</template>
