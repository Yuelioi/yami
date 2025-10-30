<script setup lang="ts">
import { ref } from "vue";

import DocsHeader from "../zcomp/DocsHeader.vue";
import ApiReference from "../zcomp/ApiReference.vue";
import DocsContainer from "../zcomp/DocsContainer.vue";
import DocsSection from "../zcomp/DocsSection.vue";

// Avatar API Classes
const apiClasses = [
  // 基础
  {
    category: "基础",
    className: "avatar",
    description: "头像容器基础样式，支持图片和文字展示。",
    isCategoryStart: true,
  },

  // 尺寸
  {
    category: "尺寸变体",
    className: "avatar-xs",
    description: "超小尺寸头像。",
    isCategoryStart: false,
  },
  {
    category: "尺寸变体",
    className: "avatar-sm",
    description: "小尺寸头像。",
    isCategoryStart: false,
  },
  {
    category: "尺寸变体",
    className: "avatar-md",
    description: "中尺寸头像（默认）。",
    isCategoryStart: false,
  },
  {
    category: "尺寸变体",
    className: "avatar-lg",
    description: "大尺寸头像。",
    isCategoryStart: false,
  },
  {
    category: "尺寸变体",
    className: "avatar-xl",
    description: "超大尺寸头像。",
    isCategoryStart: false,
  },
  {
    category: "尺寸变体",
    className: "avatar-2xl",
    description: "极大尺寸头像。",
    isCategoryStart: false,
  },

  // 形状
  {
    category: "形状",
    className: "avatar-square",
    description: "方形头像。",
    isCategoryStart: false,
  },
  {
    category: "形状",
    className: "avatar-rounded",
    description: "圆角头像。",
    isCategoryStart: false,
  },

  // 边框
  {
    category: "边框",
    className: "avatar-ring",
    description: "带默认环形边框。",
    isCategoryStart: false,
  },
  {
    category: "边框",
    className: "avatar-ring-primary",
    description: "带主色环形边框。",
    isCategoryStart: false,
  },
  {
    category: "边框",
    className: "avatar-ring-destructive",
    description: "带危险色环形边框。",
    isCategoryStart: false,
  },
  {
    category: "边框",
    className: "avatar-ring-accent",
    description: "带强调色环形边框。",
    isCategoryStart: false,
  },

  // 状态指示器
  {
    category: "状态指示器",
    className: "avatar-status-online",
    description: "在线状态。",
    isCategoryStart: false,
  },
  {
    category: "状态指示器",
    className: "avatar-status-offline",
    description: "离线状态。",
    isCategoryStart: false,
  },
  {
    category: "状态指示器",
    className: "avatar-status-busy",
    description: "忙碌状态。",
    isCategoryStart: false,
  },
  {
    category: "状态指示器",
    className: "avatar-status-away",
    description: "离开状态。",
    isCategoryStart: false,
  },

  // 组合
  {
    category: "组合",
    className: "avatar-group",
    description: "头像组合，默认重叠。",
    isCategoryStart: false,
  },
  {
    category: "组合",
    className: "avatar-group-compact",
    description: "紧凑型头像组合。",
    isCategoryStart: false,
  },

  // 扩展
  {
    category: "扩展",
    className: "avatar-hover",
    description: "鼠标悬停放大效果。",
    isCategoryStart: false,
  },
  {
    category: "扩展",
    className: "avatar-clickable",
    description: "可点击头像，悬停半透明效果。",
    isCategoryStart: false,
  },
];
</script>

<template>
  <DocsContainer>
    <!-- 文档标题 -->
    <DocsHeader
      title="Avatar 头像组件"
      description="用于显示用户头像或用户标识的组件。"
    />

    <!-- API Reference -->
    <ApiReference :data="apiClasses" />

    <!-- 基础示例 -->
    <DocsSection title="基础用法">
      <div class="flex items-center gap-4 p-4 bg-card rounded-lg">
        <div class="avatar bg-muted text-muted-foreground">A</div>
        <div class="avatar">
          <img src="https://i.pravatar.cc/40" alt="Avatar" />
        </div>
      </div>
    </DocsSection>

    <!-- 尺寸示例 -->
    <DocsSection title="尺寸">
      <div class="flex items-center gap-4 p-4">
        <div class="avatar-xs bg-primary text-primary-foreground">XS</div>
        <div class="avatar-sm bg-secondary text-secondary-foreground">SM</div>
        <div class="avatar-md bg-accent text-accent-foreground">MD</div>
        <div class="avatar-lg bg-destructive text-destructive-foreground">
          LG
        </div>
        <div class="avatar-xl bg-muted text-muted-foreground">XL</div>
        <div class="avatar-2xl bg-primary text-primary-foreground">2XL</div>
      </div>
    </DocsSection>

    <!-- 形状示例 -->
    <DocsSection title="形状">
      <div class="flex items-center gap-4 p-4">
        <div class="avatar avatar-square bg-primary text-primary-foreground">
          <span>方</span>
        </div>
        <div class="avatar avatar-rounded bg-accent text-accent-foreground">
          圆角
        </div>
        <div class="avatar bg-accent text-accent-foreground">圆</div>
      </div>
    </DocsSection>

    <!-- 边框示例 -->
    <DocsSection title="边框">
      <div class="flex items-center gap-4 p-4">
        <div class="avatar-ring"><img src="https://i.pravatar.cc/40" /></div>
        <div class="avatar-ring-primary">
          <img src="https://i.pravatar.cc/40" />
        </div>
        <div class="avatar-ring-destructive">
          <img src="https://i.pravatar.cc/40" />
        </div>
        <div class="avatar-ring-accent">
          <img src="https://i.pravatar.cc/40" />
        </div>
      </div>
    </DocsSection>

    <!-- 状态指示器示例 -->
    <DocsSection title="状态指示器">
      <div class="flex items-center gap-4 p-4">
        <div class="avatar avatar-status-online">
          <img src="https://i.pravatar.cc/40" />
        </div>
        <div class="avatar avatar-status-offline">
          <img src="https://i.pravatar.cc/40" />
        </div>
        <div class="avatar avatar-status-busy">
          <img src="https://i.pravatar.cc/40" />
        </div>
        <div class="avatar avatar-status-away">
          <img src="https://i.pravatar.cc/40" />
        </div>
      </div>
    </DocsSection>

    <!-- 组合示例 -->
    <DocsSection title="组合">
      <div class="avatar-group">
        <div class="avatar"><img src="https://i.pravatar.cc/40?u=1" /></div>
        <div class="avatar"><img src="https://i.pravatar.cc/40?u=2" /></div>
        <div class="avatar"><img src="https://i.pravatar.cc/40?u=3" /></div>
      </div>
      <div class="avatar-group-compact mt-4">
        <div class="avatar"><img src="https://i.pravatar.cc/40?u=4" /></div>
        <div class="avatar"><img src="https://i.pravatar.cc/40?u=5" /></div>
        <div class="avatar"><img src="https://i.pravatar.cc/40?u=6" /></div>
      </div>
    </DocsSection>

    <!-- 扩展示例 -->
    <DocsSection title="扩展效果">
      <div class="flex items-center gap-4 p-4">
        <div class="avatar-hover"><img src="https://i.pravatar.cc/40" /></div>
        <div class="avatar-clickable">
          <img src="https://i.pravatar.cc/40" />
        </div>
      </div>
    </DocsSection>
  </DocsContainer>
</template>
