<script setup lang="ts">
import DocsHeader from '@/components/zcomp/DocsHeader.vue'
import DocsSection from '@/components/zcomp/DocsSection.vue'
import ApiReference from '@/components/zcomp/ApiReference.vue'
import DocsContainer from '@/components/zcomp/DocsContainer.vue'
import { ref } from 'vue'

const apiClasses = [
  { category: '基础', className: 'carousel', description: '轮播容器', isCategoryStart: true },
  {
    category: '基础',
    className: 'carousel-track',
    description: '滑动轨道',
    isCategoryStart: false,
  },
  {
    category: '基础',
    className: 'carousel-item',
    description: '单个幻灯片',
    isCategoryStart: false,
  },
  {
    category: '基础',
    className: 'carousel-caption',
    description: '幻灯片覆层文字区',
    isCategoryStart: false,
  },
  {
    category: '基础',
    className: 'carousel-caption-title',
    description: '覆层标题',
    isCategoryStart: false,
  },
  {
    category: '基础',
    className: 'carousel-caption-description',
    description: '覆层描述',
    isCategoryStart: false,
  },
  {
    category: '控制',
    className: 'carousel-prev',
    description: '上一张按钮',
    isCategoryStart: true,
  },
  {
    category: '控制',
    className: 'carousel-next',
    description: '下一张按钮',
    isCategoryStart: false,
  },
  {
    category: '控制',
    className: 'carousel-indicators',
    description: '指示器容器',
    isCategoryStart: false,
  },
  {
    category: '控制',
    className: 'carousel-indicator',
    description: '单个指示点',
    isCategoryStart: false,
  },
  {
    category: '控制',
    className: 'carousel-indicator-active',
    description: '当前激活指示点',
    isCategoryStart: false,
  },
  { category: '尺寸', className: 'carousel-xs', description: '10rem', isCategoryStart: true },
  { category: '尺寸', className: 'carousel-sm', description: '14rem', isCategoryStart: false },
  {
    category: '尺寸',
    className: 'carousel-md',
    description: '20rem（默认）',
    isCategoryStart: false,
  },
  { category: '尺寸', className: 'carousel-lg', description: '28rem', isCategoryStart: false },
  { category: '尺寸', className: 'carousel-xl', description: '36rem', isCategoryStart: false },
  { category: '样式', className: 'carousel-square', description: '无圆角', isCategoryStart: true },
  {
    category: '样式',
    className: 'carousel-fade',
    description: '淡入淡出模式',
    isCategoryStart: false,
  },
  {
    category: '样式',
    className: 'carousel-controls-square',
    description: '方形控制按钮',
    isCategoryStart: false,
  },
  {
    category: '样式',
    className: 'carousel-indicators-square',
    description: '方形指示器',
    isCategoryStart: false,
  },
]

const images = [
  {
    src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=900&q=80',
    title: '山间晨雾',
    description: '清晨的山脉笼罩在薄雾之中',
  },
  {
    src: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=900&q=80',
    title: '森林光影',
    description: '阳光穿透树冠洒落林间',
  },
  {
    src: 'https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=900&q=80',
    title: '秋日原野',
    description: '金黄的草原在微风中轻轻摇曳',
  },
  {
    src: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=900&q=80',
    title: '瀑布深涧',
    description: '山间瀑布奔腾而下，声势壮观',
  },
]

// 创建独立的轮播状态
function useCarousel(total: number, autoplay = false, interval = 3000, fade = false) {
  const current = ref(0)
  let timer: ReturnType<typeof setInterval> | null = null

  const go = (i: number) => {
    current.value = (i + total) % total
  }
  const prev = () => go(current.value - 1)
  const next = () => go(current.value + 1)

  const start = () => {
    if (!autoplay) return
    timer = setInterval(next, interval)
  }
  const stop = () => {
    if (timer) clearInterval(timer)
  }

  onMounted(() => start())
  onUnmounted(() => stop())

  return { current, go, prev, next, start, stop, fade }
}

import { onMounted, onUnmounted } from 'vue'

const basic = useCarousel(images.length)
const caption = useCarousel(images.length)
const auto = useCarousel(images.length, true, 2500)
const fadeDemo = useCarousel(images.length, true, 2500, true)
const noCtrl = useCarousel(images.length)
const noIndicator = useCarousel(images.length)
const sizeDemo = useCarousel(images.length)
const squareDemo = useCarousel(images.length)
</script>

<template>
  <DocsContainer>
    <DocsHeader
      title="Carousel"
      description="轮播组件用于在有限空间内循环展示多张图片或内容，支持自动播放、拖拽切换与淡入淡出模式。"
    />

    <ApiReference :data="apiClasses" />

    <!-- 基础 -->
    <DocsSection title="基础">
      <div
        class="carousel carousel-md max-w-2xl"
        @mouseenter="basic.stop"
        @mouseleave="basic.start"
      >
        <div
          class="carousel-track"
          :style="{ transform: `translateX(-${basic.current.value * 100}%)` }"
        >
          <div v-for="(img, i) in images" :key="i" class="carousel-item">
            <img :src="img.src" :alt="img.title" draggable="false" />
          </div>
        </div>
        <button class="carousel-prev" aria-label="上一张" @click="basic.prev" />
        <button class="carousel-next" aria-label="下一张" @click="basic.next" />
        <div class="carousel-indicators">
          <button
            v-for="(_, i) in images"
            :key="i"
            class="carousel-indicator"
            :class="{ 'carousel-indicator-active': i === basic.current.value }"
            @click="basic.go(i)"
          />
        </div>
      </div>
    </DocsSection>

    <!-- 带标题描述 -->
    <DocsSection title="带标题描述">
      <div class="carousel carousel-md max-w-2xl">
        <div
          class="carousel-track"
          :style="{ transform: `translateX(-${caption.current.value * 100}%)` }"
        >
          <div v-for="(img, i) in images" :key="i" class="carousel-item">
            <img :src="img.src" :alt="img.title" draggable="false" />
            <div class="carousel-caption">
              <div class="carousel-caption-title">{{ img.title }}</div>
              <div class="carousel-caption-description">{{ img.description }}</div>
            </div>
          </div>
        </div>
        <button class="carousel-prev" @click="caption.prev" />
        <button class="carousel-next" @click="caption.next" />
        <div class="carousel-indicators">
          <button
            v-for="(_, i) in images"
            :key="i"
            class="carousel-indicator"
            :class="{ 'carousel-indicator-active': i === caption.current.value }"
            @click="caption.go(i)"
          />
        </div>
      </div>
    </DocsSection>

    <!-- 自动播放 -->
    <DocsSection title="自动播放">
      <div class="carousel carousel-md max-w-2xl" @mouseenter="auto.stop" @mouseleave="auto.start">
        <div
          class="carousel-track"
          :style="{ transform: `translateX(-${auto.current.value * 100}%)` }"
        >
          <div v-for="(img, i) in images" :key="i" class="carousel-item">
            <img :src="img.src" :alt="img.title" draggable="false" />
          </div>
        </div>
        <button class="carousel-prev" @click="auto.prev" />
        <button class="carousel-next" @click="auto.next" />
        <div class="carousel-indicators">
          <button
            v-for="(_, i) in images"
            :key="i"
            class="carousel-indicator"
            :class="{ 'carousel-indicator-active': i === auto.current.value }"
            @click="auto.go(i)"
          />
        </div>
      </div>
      <p class="text-sm text-base-content/60">每 2.5 秒自动切换，鼠标悬停暂停。</p>
    </DocsSection>

    <!-- 淡入淡出 -->
    <DocsSection title="淡入淡出">
      <div
        class="carousel carousel-fade carousel-md max-w-2xl"
        @mouseenter="fadeDemo.stop"
        @mouseleave="fadeDemo.start"
      >
        <div class="carousel-track">
          <div
            v-for="(img, i) in images"
            :key="i"
            class="carousel-item"
            :class="{ 'carousel-item-active': i === fadeDemo.current.value }"
          >
            <img :src="img.src" :alt="img.title" draggable="false" />
            <div class="carousel-caption">
              <div class="carousel-caption-title">{{ img.title }}</div>
              <div class="carousel-caption-description">{{ img.description }}</div>
            </div>
          </div>
        </div>
        <button class="carousel-prev" @click="fadeDemo.prev" />
        <button class="carousel-next" @click="fadeDemo.next" />
        <div class="carousel-indicators">
          <button
            v-for="(_, i) in images"
            :key="i"
            class="carousel-indicator"
            :class="{ 'carousel-indicator-active': i === fadeDemo.current.value }"
            @click="fadeDemo.go(i)"
          />
        </div>
      </div>
    </DocsSection>

    <!-- 尺寸 -->
    <DocsSection title="尺寸">
      <div class="flex flex-col gap-4 max-w-2xl">
        <div v-for="size in ['sm', 'md', 'lg'] as const" :key="size">
          <p class="text-sm text-base-content/60 mb-2">{{ size }}</p>
          <div class="carousel" :class="`carousel-${size}`">
            <div
              class="carousel-track"
              :style="{ transform: `translateX(-${sizeDemo.current.value * 100}%)` }"
            >
              <div v-for="(img, i) in images" :key="i" class="carousel-item">
                <img :src="img.src" :alt="img.title" draggable="false" />
              </div>
            </div>
            <button class="carousel-prev" @click="sizeDemo.prev" />
            <button class="carousel-next" @click="sizeDemo.next" />
            <div class="carousel-indicators">
              <button
                v-for="(_, i) in images"
                :key="i"
                class="carousel-indicator"
                :class="{ 'carousel-indicator-active': i === sizeDemo.current.value }"
                @click="sizeDemo.go(i)"
              />
            </div>
          </div>
        </div>
      </div>
    </DocsSection>

    <!-- 无控制按钮 -->
    <DocsSection title="无控制按钮 / 无指示器">
      <div class="flex flex-col gap-4 max-w-2xl">
        <div>
          <p class="text-sm text-base-content/60 mb-2">仅指示器</p>
          <div class="carousel carousel-sm">
            <div
              class="carousel-track"
              :style="{ transform: `translateX(-${noCtrl.current.value * 100}%)` }"
            >
              <div v-for="(img, i) in images" :key="i" class="carousel-item">
                <img :src="img.src" :alt="img.title" draggable="false" />
              </div>
            </div>
            <div class="carousel-indicators">
              <button
                v-for="(_, i) in images"
                :key="i"
                class="carousel-indicator"
                :class="{ 'carousel-indicator-active': i === noCtrl.current.value }"
                @click="noCtrl.go(i)"
              />
            </div>
          </div>
        </div>

        <div>
          <p class="text-sm text-base-content/60 mb-2">仅控制按钮</p>
          <div class="carousel carousel-sm">
            <div
              class="carousel-track"
              :style="{ transform: `translateX(-${noIndicator.current.value * 100}%)` }"
            >
              <div v-for="(img, i) in images" :key="i" class="carousel-item">
                <img :src="img.src" :alt="img.title" draggable="false" />
              </div>
            </div>
            <button class="carousel-prev" @click="noIndicator.prev" />
            <button class="carousel-next" @click="noIndicator.next" />
          </div>
        </div>
      </div>
    </DocsSection>

    <!-- 无圆角 -->
    <DocsSection title="无圆角">
      <div class="carousel carousel-md carousel-square max-w-2xl">
        <div
          class="carousel-track"
          :style="{ transform: `translateX(-${squareDemo.current.value * 100}%)` }"
        >
          <div v-for="(img, i) in images" :key="i" class="carousel-item">
            <img :src="img.src" :alt="img.title" draggable="false" />
            <div class="carousel-caption">
              <div class="carousel-caption-title">{{ img.title }}</div>
            </div>
          </div>
        </div>
        <button class="carousel-prev" @click="squareDemo.prev" />
        <button class="carousel-next" @click="squareDemo.next" />
        <div class="carousel-indicators carousel-indicators-square">
          <button
            v-for="(_, i) in images"
            :key="i"
            class="carousel-indicator"
            :class="{ 'carousel-indicator-active': i === squareDemo.current.value }"
            @click="squareDemo.go(i)"
          />
        </div>
      </div>
    </DocsSection>
  </DocsContainer>
</template>
