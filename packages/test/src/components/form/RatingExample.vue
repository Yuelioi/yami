<script setup lang="ts">
import DocsHeader from "../zcomp/DocsHeader.vue";
import DocsContainer from "../zcomp/DocsContainer.vue";
import DocsSection from "../zcomp/DocsSection.vue";
import ApiReference from "../zcomp/ApiReference.vue";

const apiClasses = [
  {
    category: "基础",
    className: "rating",
    description: "评分组件容器，包含 radio 输入元素。",
    isCategoryStart: true,
  },
  {
    category: "尺寸",
    className: "rating-xs",
    description: "超小尺寸评分。",
    isCategoryStart: true,
  },
  {
    category: "尺寸",
    className: "rating-sm",
    description: "小号尺寸评分。",
    isCategoryStart: false,
  },
  {
    category: "尺寸",
    className: "rating-md",
    description: "中号尺寸（默认）。",
    isCategoryStart: false,
  },
  {
    category: "尺寸",
    className: "rating-lg",
    description: "大号尺寸。",
    isCategoryStart: false,
  },
  {
    category: "尺寸",
    className: "rating-xl",
    description: "超大尺寸。",
    isCategoryStart: false,
  },
  {
    category: "形状",
    className: "rating-heart",
    description: "心形评分。",
    isCategoryStart: true,
  },
  {
    category: "形状",
    className: "rating-half",
    description: "半星评分。",
    isCategoryStart: false,
  },

  {
    category: "状态",
    className: "rating-readonly",
    description: "只读评分，不可修改。",
    isCategoryStart: true,
  },
  {
    category: "状态",
    className: "rating-hidden",
    description: "隐藏原始输入，使用 label 展示评分。",
    isCategoryStart: false,
  },
];
</script>

<template>
  <DocsContainer>
    <DocsHeader
      title="Rating 评分组件"
      description="用于评分选择的组件，支持星形、心形、半星、尺寸与颜色变体，可只读或隐藏原始输入展示。"
    />

    <ApiReference :data="apiClasses" />

    <!-- 基础评分 -->
    <DocsSection title="基础评分">
      <div class="flex gap-2">
        <div class="rating" name="rating-basic">
          <input type="radio" name="rating-basic" />
          <input type="radio" name="rating-basic" />
          <input type="radio" name="rating-basic" />
          <input type="radio" name="rating-basic" />
          <input type="radio" name="rating-basic" />
        </div>
      </div>
    </DocsSection>

    <!-- 尺寸变体 -->
    <DocsSection title="尺寸变体">
      <div class="flex flex-col gap-4">
        <div class="rating rating-xs" name="rating-xs">
          <input type="radio" name="rating-xs" />
          <input type="radio" name="rating-xs" />
          <input type="radio" name="rating-xs" />
          <input type="radio" name="rating-xs" />
        </div>
        <div class="rating rating-sm" name="rating-sm">
          <input type="radio" name="rating-sm" />
          <input type="radio" name="rating-sm" />
          <input type="radio" name="rating-sm" />
          <input type="radio" name="rating-sm" />
        </div>
        <div class="rating rating-md" name="rating-md">
          <input type="radio" name="rating-md" />
          <input type="radio" name="rating-md" />
          <input type="radio" name="rating-md" />
          <input type="radio" name="rating-md" />
        </div>
        <div class="rating rating-lg" name="rating-lg">
          <input type="radio" name="rating-lg" />
          <input type="radio" name="rating-lg" />
          <input type="radio" name="rating-lg" />
        </div>
        <div class="rating rating-xl" name="rating-xl">
          <input type="radio" name="rating-xl" />
          <input type="radio" name="rating-xl" />
          <input type="radio" name="rating-xl" />
        </div>
      </div>
    </DocsSection>

    <!-- 形状变体 -->
    <DocsSection title="形状变体">
      <div class="flex gap-4 items-center">
        <div class="rating rating-heart" name="rating-heart">
          <input type="radio" name="rating-heart" />
          <input type="radio" name="rating-heart" />
          <input type="radio" name="rating-heart" />
        </div>

        <div class="rating rating-half" name="rating-half">
          <input type="radio" name="rating-half" />
          <input type="radio" name="rating-half" />
          <input type="radio" name="rating-half" />
          <input type="radio" name="rating-half" />
        </div>
      </div>
    </DocsSection>

    <!-- 只读 & 隐藏输入 -->
    <DocsSection title="只读与隐藏输入">
      <div class="flex flex-col gap-4">
        <div class="rating rating-readonly" name="rating-readonly">
          <input type="radio" name="rating-readonly" checked />
          <input type="radio" name="rating-readonly" checked />
          <input type="radio" name="rating-readonly" />
        </div>

        <div class="rating rating-hidden" name="rating-hidden">
          <input type="radio" name="rating-hidden" />
          <input type="radio" name="rating-hidden" />
          <input type="radio" name="rating-hidden" />
        </div>
      </div>
    </DocsSection>
  </DocsContainer>
</template>
