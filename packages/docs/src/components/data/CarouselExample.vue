<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from "vue";
import DocsHeader from "../zcomp/DocsHeader.vue";
import ApiReference from "../zcomp/ApiReference.vue";
import DocsContainer from "../zcomp/DocsContainer.vue";
import DocsSection from "../zcomp/DocsSection.vue";

const apiClasses = [
  {
    category: "基础结构",
    className: "carousel",
    description: "轮播图容器，控制整体布局与 overflow。",
    isCategoryStart: true,
  },
  {
    category: "基础结构",
    className: "carousel-container",
    description: "轮播项的外层容器，负责水平滑动。",
    isCategoryStart: false,
  },
  {
    category: "基础结构",
    className: "carousel-item",
    description: "轮播单元项，每个 slide。",
    isCategoryStart: false,
  },
  {
    category: "导航按钮",
    className: "carousel-navigation",
    description: "包裹导航按钮的容器。",
    isCategoryStart: true,
  },
  {
    category: "导航按钮",
    className: "carousel-btn",
    description: "通用导航按钮样式。",
    isCategoryStart: false,
  },
  {
    category: "导航按钮",
    className: "carousel-btn-prev",
    description: "上一个按钮。",
    isCategoryStart: false,
  },
  {
    category: "导航按钮",
    className: "carousel-btn-next",
    description: "下一个按钮。",
    isCategoryStart: false,
  },
  {
    category: "指示器",
    className: "carousel-indicators",
    description: "底部圆点指示器容器。",
    isCategoryStart: true,
  },
  {
    category: "指示器",
    className: "carousel-indicator",
    description: "指示器单个圆点样式。",
    isCategoryStart: false,
  },
  {
    category: "指示器",
    className: "carousel-indicator-active",
    description: "当前激活指示器样式。",
    isCategoryStart: false,
  },
  {
    category: "效果变体",
    className: "carousel-fade",
    description: "淡入淡出效果轮播。",
    isCategoryStart: true,
  },
  {
    category: "效果变体",
    className: "carousel-cards",
    description: "卡片式轮播布局。",
    isCategoryStart: false,
  },
  {
    category: "效果变体",
    className: "carousel-cards-responsive",
    description: "响应式卡片轮播布局。",
    isCategoryStart: false,
  },
  {
    category: "效果变体",
    className: "carousel-center",
    description: "居中对齐轮播项。",
    isCategoryStart: false,
  },
  {
    category: "尺寸变体",
    className: "carousel-sm",
    description: "小型轮播，高度较低。",
    isCategoryStart: true,
  },
  {
    category: "尺寸变体",
    className: "carousel-md",
    description: "默认中等大小轮播。",
    isCategoryStart: false,
  },
  {
    category: "尺寸变体",
    className: "carousel-lg",
    description: "大型轮播，适用于展示型页面。",
    isCategoryStart: false,
  },
  {
    category: "尺寸变体",
    className: "carousel-fullscreen",
    description: "全屏高度轮播。",
    isCategoryStart: false,
  },
  {
    category: "指示器扩展",
    className: "carousel-indicator-progress",
    description: "带进度条动画的指示器。",
    isCategoryStart: true,
  },
  {
    category: "内容覆盖层",
    className: "carousel-caption",
    description: "轮播内容的标题与描述容器。",
    isCategoryStart: true,
  },
  {
    category: "内容覆盖层",
    className: "carousel-caption-title",
    description: "轮播标题样式。",
    isCategoryStart: false,
  },
  {
    category: "内容覆盖层",
    className: "carousel-caption-description",
    description: "轮播描述文字样式。",
    isCategoryStart: false,
  },
  {
    category: "缩略图导航",
    className: "carousel-thumbnails",
    description: "底部缩略图导航容器。",
    isCategoryStart: true,
  },
  {
    category: "缩略图导航",
    className: "carousel-thumbnail",
    description: "单个缩略图样式。",
    isCategoryStart: false,
  },
  {
    category: "缩略图导航",
    className: "carousel-thumbnail-active",
    description: "当前选中的缩略图样式。",
    isCategoryStart: false,
  },
  {
    category: "特殊布局",
    className: "carousel-vertical",
    description: "垂直方向轮播布局。",
    isCategoryStart: true,
  },
  {
    category: "特殊布局",
    className: "carousel-3d",
    description: "3D 透视效果轮播。",
    isCategoryStart: false,
  },
  {
    category: "特殊布局",
    className: "carousel-loop",
    description: "无缝循环轮播。",
    isCategoryStart: false,
  },
];

const activeIndex = ref(0);
const slides = [
  {
    src: "https://picsum.photos/id/1015/1200/600",
    title: "第一张图片",
    desc: "使用了 carousel-lg 与 carousel-caption。",
  },
  {
    src: "https://picsum.photos/id/1025/1200/600",
    title: "第二张图片",
    desc: "配合 carousel-indicator-active 展示当前状态。",
  },
  {
    src: "https://picsum.photos/id/1035/1200/600",
    title: "第三张图片",
    desc: "演示基础结构：carousel, carousel-container, carousel-item。",
  },
];

const next = () =>
  (activeIndex.value = (activeIndex.value + 1) % slides.length);
const prev = () =>
  (activeIndex.value = (activeIndex.value - 1 + slides.length) % slides.length);

let timer: any;
onMounted(() => {
  timer = setInterval(() => next(), 4000);
});
onBeforeUnmount(() => clearInterval(timer));
</script>

<template>
  <DocsContainer>
    <DocsHeader
      title="Carousel 轮播图"
      description="展示图片或内容切换的轮播组件，支持淡入淡出、卡片式、3D、垂直滚动等多种样式。"
    />

    <ApiReference :data="apiClasses" />

    <!-- 基础示例 -->
    <DocsSection title="基础用法">
      <div class="carousel carousel-md">
        <div class="carousel-container">
          <div class="carousel-item" v-for="i in 3" :key="i">
            <img
              :src="`https://picsum.photos/seed/${i}/800/400`"
              :alt="`Slide ${i}`"
              class="w-full h-full object-cover"
            />
          </div>
        </div>

        <div class="carousel-navigation">
          <button class="carousel-btn-prev" aria-label="Previous">←</button>
          <button class="carousel-btn-next" aria-label="Next">→</button>
        </div>

        <div class="carousel-indicators">
          <button
            v-for="i in 3"
            :key="i"
            class="carousel-indicator"
            :class="{ 'carousel-indicator-active': i === 1 }"
          ></button>
        </div>
      </div>
    </DocsSection>

    <!-- 带标题的轮播 -->
    <DocsSection title="带标题的轮播">
      <div class="carousel carousel-lg">
        <div class="carousel-container">
          <div class="carousel-item" v-for="i in 3" :key="i">
            <img
              :src="`https://picsum.photos/seed/title${i}/800/400`"
              :alt="`Slide ${i}`"
              class="w-full h-full object-cover"
            />
            <div class="carousel-caption">
              <h3 class="carousel-caption-title">Slide Title {{ i }}</h3>
              <p class="carousel-caption-description">
                This is a description for slide {{ i }}.
              </p>
            </div>
          </div>
        </div>

        <div class="carousel-navigation">
          <button class="carousel-btn-prev">←</button>
          <button class="carousel-btn-next">→</button>
        </div>

        <div class="carousel-indicators">
          <button
            v-for="i in 3"
            :key="i"
            class="carousel-indicator"
            :class="{ 'carousel-indicator-active': i === 1 }"
          ></button>
        </div>
      </div>
    </DocsSection>

    <!-- 卡片式轮播 -->
    <DocsSection title="卡片式轮播">
      <div class="carousel carousel-cards-responsive">
        <div class="carousel-container">
          <div class="carousel-item" v-for="i in 4" :key="i">
            <div class="card card-hover">
              <img
                :src="`https://picsum.photos/seed/card${i}/400/300`"
                class="card-image"
              />
              <div class="card-header">
                <h3 class="card-title">Card {{ i }}</h3>
              </div>
            </div>
          </div>
        </div>

        <div class="carousel-navigation">
          <button class="carousel-btn-prev">←</button>
          <button class="carousel-btn-next">→</button>
        </div>
      </div>
    </DocsSection>

    <!-- 带缩略图的轮播 -->
    <DocsSection title="带缩略图的轮播">
      <div class="carousel carousel-md">
        <div class="carousel-container">
          <div class="carousel-item" v-for="i in 3" :key="i">
            <img
              :src="`https://picsum.photos/seed/thumb${i}/800/400`"
              :alt="`Slide ${i}`"
              class="w-full h-full object-cover"
            />
          </div>
        </div>

        <div class="carousel-navigation">
          <button class="carousel-btn-prev">←</button>
          <button class="carousel-btn-next">→</button>
        </div>

        <div class="carousel-thumbnails">
          <button
            v-for="i in 3"
            :key="i"
            class="carousel-thumbnail"
            :class="{ 'carousel-thumbnail-active': i === 1 }"
          >
            <img
              :src="`https://picsum.photos/seed/thumb${i}/100/60`"
              :alt="`Thumbnail ${i}`"
            />
          </button>
        </div>
      </div>
    </DocsSection>

    <!-- 淡入淡出轮播 -->
    <DocsSection title="淡入淡出轮播">
      <div class="carousel carousel-fade carousel-md">
        <div class="carousel-container">
          <div
            v-for="i in 2"
            :key="i"
            class="carousel-item"
            :class="{ 'carousel-item-active': i === 1 }"
          >
            <img
              :src="`https://picsum.photos/seed/fade${i}/800/400`"
              class="w-full h-full object-cover"
            />
          </div>
        </div>

        <div class="carousel-indicators">
          <button
            v-for="i in 2"
            :key="i"
            class="carousel-indicator"
            :class="{ 'carousel-indicator-active': i === 1 }"
          ></button>
        </div>
      </div>
    </DocsSection>

    <!-- 自动播放进度条 -->
    <DocsSection title="自动播放进度条">
      <div class="carousel carousel-md">
        <div class="carousel-container">
          <div class="carousel-item" v-for="i in 3" :key="i">
            <img
              :src="`https://picsum.photos/seed/progress${i}/800/400`"
              class="w-full h-full object-cover"
            />
          </div>
        </div>

        <div class="carousel-indicators">
          <button
            v-for="i in 3"
            :key="i"
            class="carousel-indicator carousel-indicator-progress"
            :class="{ 'carousel-indicator-active': i === 1 }"
          ></button>
        </div>
      </div>
    </DocsSection>

    <!-- 全屏轮播 -->
    <DocsSection title="全屏轮播">
      <div class="carousel carousel-fullscreen">
        <div class="carousel-container">
          <div class="carousel-item" v-for="i in 3" :key="i">
            <img
              :src="`https://picsum.photos/seed/full${i}/1920/1080`"
              class="w-full h-full object-cover"
            />
          </div>
        </div>

        <div class="carousel-navigation">
          <button class="carousel-btn-prev">←</button>
          <button class="carousel-btn-next">→</button>
        </div>
      </div>
    </DocsSection>
    <!-- 垂直轮播 -->
    <DocsSection title="垂直轮播">
      <div class="carousel carousel-vertical carousel-md">
        <div class="carousel-container">
          <div class="carousel-item" v-for="i in 3" :key="i">
            <img
              :src="`https://picsum.photos/seed/vertical${i}/800/400`"
              class="w-full h-full object-cover"
            />
          </div>
        </div>

        <div class="carousel-navigation">
          <button class="carousel-btn-prev">↑</button>
          <button class="carousel-btn-next">↓</button>
        </div>

        <div
          class="carousel-indicators flex-col right-4 left-auto bottom-auto top-1/2 -translate-y-1/2"
        >
          <button
            v-for="i in 3"
            :key="i"
            class="carousel-indicator"
            :class="{ 'carousel-indicator-active': i === 1 }"
          ></button>
        </div>
      </div>
    </DocsSection>

    <!-- 3D 轮播 -->
    <DocsSection title="3D 效果轮播">
      <div class="carousel carousel-3d carousel-md">
        <div class="carousel-container">
          <div
            v-for="i in 3"
            :key="i"
            class="carousel-item"
            :class="{ 'carousel-item-active': i === 1 }"
          >
            <img
              :src="`https://picsum.photos/seed/3d${i}/800/400`"
              class="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>

        <div class="carousel-navigation">
          <button class="carousel-btn-prev">←</button>
          <button class="carousel-btn-next">→</button>
        </div>
      </div>
    </DocsSection>

    <!-- 居中模式 -->
    <DocsSection title="居中轮播 (Center Mode)">
      <div class="carousel carousel-center carousel-cards-responsive">
        <div class="carousel-container">
          <div class="carousel-item" v-for="i in 5" :key="i">
            <div class="card card-hover w-64 mx-auto">
              <img
                :src="`https://picsum.photos/seed/center${i}/400/300`"
                class="card-image rounded-lg"
              />
              <div class="card-header text-center">
                <h3 class="card-title">Centered Card {{ i }}</h3>
              </div>
            </div>
          </div>
        </div>
        <div class="carousel-navigation">
          <button class="carousel-btn-prev">←</button>
          <button class="carousel-btn-next">→</button>
        </div>
      </div>
    </DocsSection>

    <!-- 无缝循环轮播 -->
    <DocsSection title="无缝循环轮播 (Loop)">
      <div class="carousel carousel-loop carousel-md">
        <div class="carousel-container">
          <div class="carousel-item" v-for="i in 4" :key="i">
            <img
              :src="`https://picsum.photos/seed/loop${i}/800/400`"
              class="w-full h-full object-cover"
            />
          </div>
        </div>

        <div class="carousel-navigation">
          <button class="carousel-btn-prev">←</button>
          <button class="carousel-btn-next">→</button>
        </div>

        <div class="carousel-indicators">
          <button
            v-for="i in 4"
            :key="i"
            class="carousel-indicator"
            :class="{ 'carousel-indicator-active': i === 1 }"
          ></button>
        </div>
      </div>
    </DocsSection>

    <!-- 自动播放带进度条 -->
    <DocsSection title="自动播放轮播 (带进度条)">
      <div class="carousel carousel-md">
        <div
          class="carousel-container"
          :style="{ transform: `translateX(-${activeIndex * 100}%)` }"
        >
          <div class="carousel-item" v-for="i in 3" :key="i">
            <img
              :src="`https://picsum.photos/seed/autoplay${i}/800/400`"
              class="w-full h-full object-cover"
            />
          </div>
        </div>

        <div class="carousel-indicators">
          <button
            v-for="i in 3"
            :key="i"
            class="carousel-indicator carousel-indicator-progress"
            :class="{ 'carousel-indicator-active': activeIndex === i - 1 }"
          ></button>
        </div>
      </div>
    </DocsSection>
  </DocsContainer>
</template>
