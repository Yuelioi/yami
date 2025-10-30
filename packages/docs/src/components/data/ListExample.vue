<script setup lang="ts">
import DocsHeader from "../zcomp/DocsHeader.vue";
import ApiReference from "../zcomp/ApiReference.vue";
import DocsContainer from "../zcomp/DocsContainer.vue";
import DocsSection from "../zcomp/DocsSection.vue";

const apiClasses = [
  {
    category: "基础结构",
    className: "list",
    description: "列表容器，采用垂直方向布局。",
    isCategoryStart: true,
  },
  {
    category: "基础结构",
    className: "list-row",
    description: "单行列表项，默认使用网格布局。",
    isCategoryStart: false,
  },
  {
    category: "列修饰符",
    className: "list-col-grow",
    description: "使该列占据剩余空间。",
    isCategoryStart: true,
  },
  {
    category: "列修饰符",
    className: "list-col-wrap",
    description: "该列内容换行至第二行。",
    isCategoryStart: false,
  },
  {
    category: "外观变体",
    className: "list-borderless",
    description: "移除行之间的分隔线。",
    isCategoryStart: true,
  },
  {
    category: "外观变体",
    className: "list-hoverable",
    description: "启用 hover 悬浮高亮效果。",
    isCategoryStart: false,
  },
  {
    category: "外观变体",
    className: "list-compact",
    description: "紧凑模式，减少行间距与内边距。",
    isCategoryStart: false,
  },
  {
    category: "外观变体",
    className: "list-relaxed",
    description: "宽松模式，增大间距与内边距。",
    isCategoryStart: false,
  },
  {
    category: "外观变体",
    className: "list-zebra",
    description: "启用斑马纹效果（偶数行背景）。",
    isCategoryStart: false,
  },
];

const users = [
  { name: "张三", email: "zhangsan@example.com", role: "管理员" },
  { name: "李四", email: "lisi@example.com", role: "编辑者" },
  { name: "王五", email: "wangwu@example.com", role: "访客" },
];
</script>

<template>
  <DocsContainer>
    <DocsHeader
      title="List 列表"
      description="用于展示结构化信息的列表组件，支持多列布局、行分隔、悬浮状态和多种密度变体。"
    />

    <ApiReference :data="apiClasses" />

    <!-- 基础示例 -->
    <DocsSection title="基础用法">
      <div class="list">
        <div v-for="(user, i) in users" :key="i" class="list-row">
          <div class="font-medium">{{ user.name }}</div>
          <div class="list-col-grow text-muted-foreground">
            {{ user.email }}
          </div>
          <div class="text-sm text-muted-foreground">{{ user.role }}</div>
        </div>
      </div>
      <p class="text-sm text-muted-foreground mt-2">
        💡 此示例使用了 <code>list</code> 与 <code>list-row</code>。
      </p>
    </DocsSection>

    <!-- 悬浮 + 斑马 + 紧凑模式 -->
    <DocsSection title="悬浮与斑马纹效果">
      <div
        class="list list-hoverable list-zebra list-compact rounded-lg border border-border/50"
      >
        <div v-for="(user, i) in users" :key="i" class="list-row">
          <div class="font-medium">{{ user.name }}</div>
          <div class="list-col-grow text-muted-foreground">
            {{ user.email }}
          </div>
          <div class="text-sm">{{ user.role }}</div>
        </div>
      </div>
      <p class="text-sm text-muted-foreground mt-2">
        💡 此示例使用了 <code>list-hoverable</code>、<code>list-zebra</code> 与
        <code>list-compact</code>。
      </p>
    </DocsSection>

    <!-- 换行列示例 -->
    <DocsSection title="多行内容">
      <div class="list list-relaxed list-borderless">
        <div v-for="(user, i) in users" :key="i" class="list-row">
          <div class="font-medium">{{ user.name }}</div>
          <div class="text-sm text-muted-foreground">{{ user.email }}</div>
          <div class="text-sm">{{ user.role }}</div>
          <div class="list-col-wrap text-muted-foreground/80">
            备注：这是关于 {{ user.name }} 的附加说明，展示了
            <code>list-col-wrap</code> 的换行效果。
          </div>
        </div>
      </div>
      <p class="text-sm text-muted-foreground mt-2">
        💡 此示例使用了 <code>list-relaxed</code>、<code>list-borderless</code>
        与 <code>list-col-wrap</code>。
      </p>
    </DocsSection>
  </DocsContainer>
</template>
