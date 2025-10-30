<script setup lang="ts">
import { ref } from "vue";
import DocsHeader from "../zcomp/DocsHeader.vue";
import ApiReference from "../zcomp/ApiReference.vue";
import DocsContainer from "../zcomp/DocsContainer.vue";
import DocsSection from "../zcomp/DocsSection.vue";

const apiClasses = [
  {
    category: "基础",
    className: "swap",
    description: "基础 Swap 容器，使用 input 控制切换状态。",
    isCategoryStart: true,
  },
  {
    category: "状态变体",
    className: "swap-active",
    description: "强制切换到 active 状态。",
    isCategoryStart: false,
  },
  {
    category: "旋转效果",
    className: "swap-rotate",
    description: "切换时添加旋转动画效果。",
    isCategoryStart: false,
  },
  {
    category: "翻转效果",
    className: "swap-flip",
    description: "切换时使用 Y 轴翻转动画效果。",
    isCategoryStart: false,
  },
];

const swapBasic = ref(false);
const swapActive = ref(false);
const swapRotate = ref(false);
const swapFlip = ref(false);
</script>

<template>
  <DocsContainer>
    <DocsHeader
      title="Swap / Toggle 切换组件"
      description="通过 input 控制的图标或元素切换组件，支持旋转、翻转等效果。"
    />

    <ApiReference :data="apiClasses" />

    <DocsSection title="基础用法">
      <div class="flex gap-6 p-6 bg-card">
        <label class="swap">
          <input type="checkbox" v-model="swapBasic" />
          <span class="swap-on text-green-500">✔</span>
          <span class="swap-off text-red-500">✕</span>
        </label>
        <span>切换状态：{{ swapBasic ? "On" : "Off" }}</span>
      </div>
    </DocsSection>

    <DocsSection title="Active 状态">
      <div class="flex gap-6 p-6 border">
        <label class="swap swap-active">
          <input type="checkbox" v-model="swapActive" />
          <span class="swap-on text-green-500">ON</span>
          <span class="swap-off text-gray-500">OFF</span>
        </label>
      </div>
    </DocsSection>

    <DocsSection title="Rotate 旋转效果">
      <div class="flex gap-6 p-6 border">
        <label class="swap swap-rotate">
          <input type="checkbox" v-model="swapRotate" />
          <span class="swap-on text-blue-500">⇧</span>
          <span class="swap-off text-gray-500">⇩</span>
        </label>
      </div>
    </DocsSection>

    <DocsSection title="Flip 翻转效果">
      <div class="flex gap-6 p-6 border">
        <label class="swap swap-flip">
          <input type="checkbox" v-model="swapFlip" />
          <span class="swap-on text-purple-500">😊</span>
          <span class="swap-off text-gray-400">😐</span>
        </label>
      </div>
    </DocsSection>
  </DocsContainer>
</template>
