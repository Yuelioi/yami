<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import DocsHeader from '../zcomp/DocsHeader.vue'
import ApiReference from '../zcomp/ApiReference.vue'
import DocsContainer from '../zcomp/DocsContainer.vue'
import DocsSection from '../zcomp/DocsSection.vue'

const apiClasses = [
  // 基础结构
  {
    category: '基础结构',
    className: 'carousel',
    description: '轮播容器，设置高度与溢出处理。',
    isCategoryStart: true,
  },
  {
    category: '基础结构',
    className: 'carousel-container',
    description: '轮播内容容器，负责平滑滑动动画。',
    isCategoryStart: false,
  },
  {
    category: '基础结构',
    className: 'carousel-item',
    description: '单个轮播项，每个 slide 的包装器。',
    isCategoryStart: false,
  },
  {
    category: '基础结构',
    className: 'carousel-item-active',
    description: '激活状态的轮播项。',
    isCategoryStart: false,
  },

  // 导航按钮
  {
    category: '导航按钮',
    className: 'carousel-navigation',
    description: '导航按钮的容器，绝对定位覆盖。',
    isCategoryStart: true,
  },
  {
    category: '导航按钮',
    className: 'carousel-btn',
    description: '通用导航按钮基础样式。',
    isCategoryStart: false,
  },
  {
    category: '导航按钮',
    className: 'carousel-btn-prev',
    description: '上一个按钮。',
    isCategoryStart: false,
  },
  {
    category: '导航按钮',
    className: 'carousel-btn-next',
    description: '下一个按钮。',
    isCategoryStart: false,
  },

  // 指示器
  {
    category: '指示器',
    className: 'carousel-indicators',
    description: '指示器容器，底部居中排列。',
    isCategoryStart: true,
  },
  {
    category: '指示器',
    className: 'carousel-indicator',
    description: '单个指示器点的样式。',
    isCategoryStart: false,
  },
  {
    category: '指示器',
    className: 'carousel-indicator-active',
    description: '当前活跃指示器的样式。',
    isCategoryStart: false,
  },
  {
    category: '指示器',
    className: 'carousel-indicator-progress',
    description: '带进度条的指示器。',
    isCategoryStart: false,
  },

  // 显示模式
  {
    category: '显示模式',
    className: 'carousel-fade',
    description: '淡入淡出过渡效果。',
    isCategoryStart: true,
  },
  {
    category: '显示模式',
    className: 'carousel-cards',
    description: '卡片式轮播，同时显示多张。',
    isCategoryStart: false,
  },
  {
    category: '显示模式',
    className: 'carousel-center',
    description: '项目居中对齐模式。',
    isCategoryStart: false,
  },
  {
    category: '显示模式',
    className: 'carousel-vertical',
    description: '垂直方向滑动。',
    isCategoryStart: false,
  },
  {
    category: '显示模式',
    className: 'carousel-3d',
    description: '3D 透视效果。',
    isCategoryStart: false,
  },
  {
    category: '显示模式',
    className: 'carousel-loop',
    description: '无缝循环播放。',
    isCategoryStart: false,
  },

  // 尺寸变体
  {
    category: '尺寸变体',
    className: 'carousel-sm',
    description: '小型轮播（12rem）。',
    isCategoryStart: true,
  },
  {
    category: '尺寸变体',
    className: 'carousel-md',
    description: '中等大小轮播（16rem），默认尺寸。',
    isCategoryStart: false,
  },
  {
    category: '尺寸变体',
    className: 'carousel-lg',
    description: '大型轮播（24rem）。',
    isCategoryStart: false,
  },
  {
    category: '尺寸变体',
    className: 'carousel-fullscreen',
    description: '全屏轮播（100vh）。',
    isCategoryStart: false,
  },

  // 内容覆盖
  {
    category: '内容覆盖',
    className: 'carousel-caption',
    description: '标题和描述的容器，带渐变背景。',
    isCategoryStart: true,
  },
  {
    category: '内容覆盖',
    className: 'carousel-caption-title',
    description: '标题文本样式。',
    isCategoryStart: false,
  },
  {
    category: '内容覆盖',
    className: 'carousel-caption-description',
    description: '描述文本样式。',
    isCategoryStart: false,
  },

  // 缩略图
  {
    category: '缩略图导航',
    className: 'carousel-thumbnails',
    description: '缩略图容器，可滚动。',
    isCategoryStart: true,
  },
  {
    category: '缩略图导航',
    className: 'carousel-thumbnail',
    description: '单个缩略图样式。',
    isCategoryStart: false,
  },
  {
    category: '缩略图导航',
    className: 'carousel-thumbnail-active',
    description: '当前选中的缩略图。',
    isCategoryStart: false,
  },

  // 状态
  {
    category: '状态和辅助',
    className: 'carousel-no-autoplay',
    description: '禁用自动播放。',
    isCategoryStart: true,
  },
  {
    category: '状态和辅助',
    className: 'carousel-paused',
    description: '暂停状态。',
    isCategoryStart: false,
  },
  {
    category: '状态和辅助',
    className: 'carousel-skip-link',
    description: '无障碍跳过链接。',
    isCategoryStart: false,
  },
]

// 示例轮播数据
const carouselBasicActive = ref(0)
const carouselFadeActive = ref(0)
const carouselCaptionActive = ref(0)
const carouselThumbnailActive = ref(0)

const slides = [
  {
    src: 'https://picsum.photos/id/1015/1200/600',
    title: '优美的风景',
    desc: '享受自然的美景。',
  },
  {
    src: 'https://picsum.photos/id/1025/1200/600',
    title: '城市夜景',
    desc: '灯光璀璨的城市。',
  },
  {
    src: 'https://picsum.photos/id/1035/1200/600',
    title: '蓝天白云',
    desc: '清爽的天空景色。',
  },
]

// 基础轮播
const nextBasic = () =>
  (carouselBasicActive.value = (carouselBasicActive.value + 1) % slides.length)
const prevBasic = () =>
  (carouselBasicActive.value = (carouselBasicActive.value - 1 + slides.length) % slides.length)

// 淡入淡出轮播
const nextFade = () => (carouselFadeActive.value = (carouselFadeActive.value + 1) % slides.length)
const prevFade = () =>
  (carouselFadeActive.value = (carouselFadeActive.value - 1 + slides.length) % slides.length)

// 带标题轮播
const nextCaption = () =>
  (carouselCaptionActive.value = (carouselCaptionActive.value + 1) % slides.length)
const prevCaption = () =>
  (carouselCaptionActive.value = (carouselCaptionActive.value - 1 + slides.length) % slides.length)

// 缩略图轮播
const nextThumbnail = () =>
  (carouselThumbnailActive.value = (carouselThumbnailActive.value + 1) % slides.length)
const prevThumbnail = () =>
  (carouselThumbnailActive.value =
    (carouselThumbnailActive.value - 1 + slides.length) % slides.length)

// 自动播放
let basicTimer: any
let fadeTimer: any
let captionTimer: any
let thumbnailTimer: any

onMounted(() => {
  basicTimer = setInterval(() => nextBasic(), 4000)
  fadeTimer = setInterval(() => nextFade(), 4000)
  captionTimer = setInterval(() => nextCaption(), 4000)
  thumbnailTimer = setInterval(() => nextThumbnail(), 4000)
})

onBeforeUnmount(() => {
  clearInterval(basicTimer)
  clearInterval(fadeTimer)
  clearInterval(captionTimer)
  clearInterval(thumbnailTimer)
})
</script>

<template>
  <DocsContainer>
    <!-- 页面头部 -->
    <DocsHeader
      title="Carousel 轮播组件"
      description="展示图片或内容切换的轮播组件。支持多种显示模式（淡入淡出、卡片式、3D、垂直等）、尺寸变体、导航方式和动画效果。完全变量驱动，易于定制。"
    />

    <!-- API 参考 -->
    <ApiReference :data="apiClasses" />

    <!-- 基础用法 -->
    <DocsSection title="基础用法">
      <p class="text-sm text-muted-foreground mb-4">最简单的轮播实现，包含导航按钮和指示器。</p>
      <div class="carousel carousel-md">
        <div
          class="carousel-container"
          :style="{ transform: `translateX(-${carouselBasicActive * 100}%)` }"
        >
          <div class="carousel-item" v-for="(slide, i) in slides" :key="i">
            <img :src="slide.src" :alt="`Slide ${i + 1}`" class="w-full h-full object-cover" />
          </div>
        </div>

        <div class="carousel-navigation">
          <button class="carousel-btn-prev" aria-label="Previous" @click="prevBasic">←</button>
          <button class="carousel-btn-next" aria-label="Next" @click="nextBasic">→</button>
        </div>

        <div class="carousel-indicators">
          <button
            v-for="i in slides.length"
            :key="i"
            class="carousel-indicator"
            :class="{ 'carousel-indicator-active': i - 1 === carouselBasicActive }"
            @click="carouselBasicActive = i - 1"
            :aria-label="`Go to slide ${i}`"
          ></button>
        </div>
      </div>
    </DocsSection>

    <!-- 淡入淡出效果 -->
    <DocsSection title="淡入淡出效果">
      <p class="text-sm text-muted-foreground mb-4">
        使用 <code class="bg-muted px-2 py-1 rounded">carousel-fade</code>
        class 启用淡入淡出过渡效果。
      </p>
      <div class="carousel carousel-md carousel-fade">
        <div class="carousel-container">
          <div
            class="carousel-item"
            :class="{ 'carousel-item-active': i === carouselFadeActive }"
            v-for="(slide, i) in slides"
            :key="i"
          >
            <img :src="slide.src" :alt="`Slide ${i + 1}`" class="w-full h-full object-cover" />
          </div>
        </div>

        <div class="carousel-navigation">
          <button class="carousel-btn-prev" aria-label="Previous" @click="prevFade">←</button>
          <button class="carousel-btn-next" aria-label="Next" @click="nextFade">→</button>
        </div>

        <div class="carousel-indicators">
          <button
            v-for="i in slides.length"
            :key="i"
            class="carousel-indicator"
            :class="{ 'carousel-indicator-active': i - 1 === carouselFadeActive }"
            @click="carouselFadeActive = i - 1"
            :aria-label="`Go to slide ${i}`"
          ></button>
        </div>
      </div>
    </DocsSection>

    <!-- 带标题的轮播 -->
    <DocsSection title="带标题的轮播">
      <p class="text-sm text-muted-foreground mb-4">
        使用 <code class="bg-muted px-2 py-1 rounded">carousel-caption</code>
        在轮播项上显示标题和描述。
      </p>
      <div class="carousel carousel-lg">
        <div
          class="carousel-container"
          :style="{ transform: `translateX(-${carouselCaptionActive * 100}%)` }"
        >
          <div class="carousel-item" v-for="(slide, i) in slides" :key="i">
            <img :src="slide.src" :alt="`Slide ${i + 1}`" class="w-full h-full object-cover" />
            <div class="carousel-caption">
              <h3 class="carousel-caption-title">{{ slide.title }}</h3>
              <p class="carousel-caption-description">{{ slide.desc }}</p>
            </div>
          </div>
        </div>

        <div class="carousel-navigation">
          <button class="carousel-btn-prev" aria-label="Previous" @click="prevCaption">←</button>
          <button class="carousel-btn-next" aria-label="Next" @click="nextCaption">→</button>
        </div>

        <div class="carousel-indicators">
          <button
            v-for="i in slides.length"
            :key="i"
            class="carousel-indicator"
            :class="{ 'carousel-indicator-active': i - 1 === carouselCaptionActive }"
            @click="carouselCaptionActive = i - 1"
            :aria-label="`Go to slide ${i}`"
          ></button>
        </div>
      </div>
    </DocsSection>

    <!-- 缩略图导航 -->
    <DocsSection title="缩略图导航">
      <p class="text-sm text-muted-foreground mb-4">通过缩略图快速导航到指定的轮播项。</p>
      <div class="carousel carousel-md mb-4">
        <div
          class="carousel-container"
          :style="{ transform: `translateX(-${carouselThumbnailActive * 100}%)` }"
        >
          <div class="carousel-item" v-for="(slide, i) in slides" :key="i">
            <img :src="slide.src" :alt="`Slide ${i + 1}`" class="w-full h-full object-cover" />
          </div>
        </div>

        <div class="carousel-navigation">
          <button class="carousel-btn-prev" aria-label="Previous" @click="prevThumbnail">←</button>
          <button class="carousel-btn-next" aria-label="Next" @click="nextThumbnail">→</button>
        </div>
      </div>

      <div class="carousel-thumbnails">
        <button
          v-for="(slide, i) in slides"
          :key="i"
          class="carousel-thumbnail"
          :class="{ 'carousel-thumbnail-active': i === carouselThumbnailActive }"
          @click="carouselThumbnailActive = i"
          :aria-label="`Go to slide ${i + 1}`"
        >
          <img :src="slide.src" :alt="`Thumbnail ${i + 1}`" class="w-full h-full object-cover" />
        </button>
      </div>
    </DocsSection>

    <!-- 尺寸变体 -->
    <DocsSection title="尺寸变体">
      <p class="text-sm text-muted-foreground mb-4">使用不同的 class 控制轮播的高度。</p>

      <!-- 小型轮播 -->
      <div class="mb-8">
        <h4 class="font-semibold mb-2">小型轮播 (carousel-sm)</h4>
        <div class="carousel carousel-sm">
          <div class="carousel-container">
            <div class="carousel-item" v-for="(slide, i) in slides" :key="i">
              <img :src="slide.src" :alt="`Slide ${i + 1}`" class="w-full h-full object-cover" />
            </div>
          </div>
          <div class="carousel-navigation">
            <button class="carousel-btn-prev">←</button>
            <button class="carousel-btn-next">→</button>
          </div>
          <div class="carousel-indicators">
            <button
              v-for="i in slides.length"
              :key="i"
              class="carousel-indicator"
              :class="{ 'carousel-indicator-active': i === 1 }"
            ></button>
          </div>
        </div>
      </div>

      <!-- 大型轮播 -->
      <div class="mb-8">
        <h4 class="font-semibold mb-2">大型轮播 (carousel-lg)</h4>
        <div class="carousel carousel-lg">
          <div class="carousel-container">
            <div class="carousel-item" v-for="(slide, i) in slides" :key="i">
              <img :src="slide.src" :alt="`Slide ${i + 1}`" class="w-full h-full object-cover" />
            </div>
          </div>
          <div class="carousel-navigation">
            <button class="carousel-btn-prev">←</button>
            <button class="carousel-btn-next">→</button>
          </div>
          <div class="carousel-indicators">
            <button
              v-for="i in slides.length"
              :key="i"
              class="carousel-indicator"
              :class="{ 'carousel-indicator-active': i === 1 }"
            ></button>
          </div>
        </div>
      </div>
    </DocsSection>

    <!-- 显示模式 -->
    <DocsSection title="显示模式">
      <p class="text-sm text-muted-foreground mb-4">
        轮播支持多种显示模式，可以组合使用 class 实现不同的效果。
      </p>

      <!-- 3D 效果 -->
      <div class="mb-8">
        <h4 class="font-semibold mb-2">3D 效果 (carousel-3d)</h4>
        <div class="carousel carousel-md carousel-3d">
          <div class="carousel-container">
            <div class="carousel-item carousel-item-active" v-for="(slide, i) in slides" :key="i">
              <img :src="slide.src" :alt="`Slide ${i + 1}`" class="w-full h-full object-cover" />
            </div>
          </div>
          <div class="carousel-navigation">
            <button class="carousel-btn-prev">←</button>
            <button class="carousel-btn-next">→</button>
          </div>
          <div class="carousel-indicators">
            <button
              v-for="i in slides.length"
              :key="i"
              class="carousel-indicator"
              :class="{ 'carousel-indicator-active': i === 0 }"
            ></button>
          </div>
        </div>
      </div>

      <!-- 卡片模式 -->
      <div class="mb-8">
        <h4 class="font-semibold mb-2">卡片模式 (carousel-cards)</h4>
        <div class="carousel carousel-md carousel-cards">
          <div class="carousel-container">
            <div class="carousel-item" v-for="(slide, i) in slides" :key="i">
              <img
                :src="slide.src"
                :alt="`Slide ${i + 1}`"
                class="w-full h-full object-cover rounded"
              />
            </div>
          </div>
          <div class="carousel-navigation">
            <button class="carousel-btn-prev">←</button>
            <button class="carousel-btn-next">→</button>
          </div>
        </div>
      </div>
    </DocsSection>

    <!-- 自定义样式 -->
    <DocsSection title="变量定制">
      <p class="text-sm text-muted-foreground mb-4">
        所有轮播样式都由 CSS 变量驱动，可以通过覆盖变量来自定义样式。
      </p>

      <div class="bg-muted p-4 rounded-lg">
        <h4 class="font-semibold mb-3">常用变量：</h4>
        <ul class="space-y-2 text-sm">
          <li>
            <code class="bg-background px-2 py-1 rounded"> --carousel-md-height </code>
            - 中型轮播高度（默认 16rem）
          </li>
          <li>
            <code class="bg-background px-2 py-1 rounded"> --carousel-duration-slide </code>
            - 滑动动画时长
          </li>
          <li>
            <code class="bg-background px-2 py-1 rounded"> --carousel-indicator-active-bg </code>
            - 激活指示器颜色
          </li>
          <li>
            <code class="bg-background px-2 py-1 rounded"> --carousel-button-height-md </code>
            - 导航按钮高度
          </li>
          <li>
            <code class="bg-background px-2 py-1 rounded"> --carousel-button-bg-opacity </code>
            - 按钮背景透明度
          </li>
        </ul>
      </div>

      <div class="mt-4 bg-muted p-4 rounded-lg">
        <h4 class="font-semibold mb-3">定制示例：</h4>
        <pre class="text-sm overflow-auto"><code>:root {
  /* 改变轮播高度 */
  --carousel-md-height: 20rem;
  
  /* 改变动画速度 */
  --carousel-duration-slide: 0.5s;
  
  /* 改变指示器激活色 */
  --carousel-indicator-active-bg: var(--primary);
  
  /* 改变按钮大小 */
  --carousel-button-height-md: 3rem;
}</code></pre>
      </div>
    </DocsSection>

    <!-- 最佳实践 -->
    <DocsSection title="最佳实践">
      <div class="space-y-4">
        <div class="border-l-4 border-green-500 pl-4">
          <p class="font-semibold text-green-700 mb-1">✅ 推荐</p>
          <ul class="text-sm space-y-1 text-muted-foreground">
            <li>• 使用 CSS 变量来自定义样式</li>
            <li>• 为每个轮播项提供正确的宽高比</li>
            <li>• 使用响应式尺寸（carousel-sm、md、lg）</li>
            <li>• 提供清晰的导航和指示器</li>
            <li>• 在服务器端设置初始活跃项以避免闪烁</li>
          </ul>
        </div>

        <div class="border-l-4 border-red-500 pl-4">
          <p class="font-semibold text-red-700 mb-1">❌ 避免</p>
          <ul class="text-sm space-y-1 text-muted-foreground">
            <li>• 不要硬编码高度值，使用变量</li>
            <li>• 避免过快的自动播放速度</li>
            <li>• 不要移除指示器和导航</li>
            <li>• 避免在轮播项中放置过多内容</li>
            <li>• 不要使用过多的过渡效果</li>
          </ul>
        </div>
      </div>
    </DocsSection>
  </DocsContainer>
</template>
