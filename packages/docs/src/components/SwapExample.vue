<script setup lang="ts">
import DocsHeader from '@/components/zcomp/DocsHeader.vue'
import DocsSection from '@/components/zcomp/DocsSection.vue'
import ApiReference from '@/components/zcomp/ApiReference.vue'
import DocsContainer from '@/components/zcomp/DocsContainer.vue'

const apiClasses = [
  {
    category: '基础',
    className: 'swap',
    description: '切换容器',
    isCategoryStart: true,
  },
  {
    category: '状态',
    className: 'swap-active',
    description: '活跃状态',
    isCategoryStart: false,
  },
  {
    category: '动画',
    className: 'swap-rotate',
    description: '旋转动画',
    isCategoryStart: false,
  },
  {
    category: '动画',
    className: 'swap-flip',
    description: '翻转动画',
    isCategoryStart: false,
  },
]
</script>

<template>
  <DocsContainer>
    <DocsHeader title="Swap" description="切换/交换组件，用于在两个状态之间切换。" />

    <ApiReference :data="apiClasses"></ApiReference>

    <DocsSection title="基础切换 - 勾选框">
      <label class="swap">
        <input type="checkbox" />
        <span class="swap-off icon-[lucide--x] w-8 h-8"></span>
        <span class="swap-on icon-[lucide--check] w-8 h-8"></span>
      </label>
    </DocsSection>

    <DocsSection title="带标签的切换">
      <label class="flex items-center gap-2 cursor-pointer">
        <span class="label-text">启用通知</span>
        <label class="swap">
          <input type="checkbox" />
          <span class="swap-off icon-[lucide--bell] w-6 h-6"></span>
          <span class="swap-on icon-[lucide--bell-off] w-6 h-6"></span>
        </label>
      </label>
    </DocsSection>

    <DocsSection title="暗色模式切换">
      <label class="swap swap-rotate">
        <input type="checkbox" />
        <span class="swap-off icon-[lucide--moon] w-8 h-8"></span>
        <span class="swap-on icon-[lucide--sun] w-8 h-8"></span>
      </label>
    </DocsSection>

    <DocsSection title="旋转动画 (swap-rotate)">
      <label class="swap swap-rotate">
        <input type="checkbox" />
        <span class="swap-off icon-[lucide--x] w-8 h-8"></span>
        <span class="swap-on icon-[lucide--check] w-8 h-8"></span>
      </label>
    </DocsSection>

    <DocsSection title="翻转动画 (swap-flip)">
      <label class="swap swap-flip text-4xl">
        <input type="checkbox" />
        <div class="swap-off">😐</div>
        <div class="swap-on">😄</div>
      </label>
    </DocsSection>

    <DocsSection title="文本切换">
      <label class="swap">
        <input type="checkbox" />
        <span class="swap-off">显示密码</span>
        <span class="swap-on">隐藏密码</span>
      </label>
    </DocsSection>

    <DocsSection title="按钮样式切换">
      <label class="swap swap-rotate">
        <input type="checkbox" />
        <button class="swap-off btn btn-outline">
          <span class="icon-[lucide--menu]"></span>
          菜单
        </button>
        <button class="swap-on btn btn-outline">
          <span class="icon-[lucide--x]"></span>
          关闭
        </button>
      </label>
    </DocsSection>

    <DocsSection title="列表视图切换">
      <div class="flex items-center gap-2">
        <span class="text-sm">视图:</span>
        <label class="swap">
          <input type="checkbox" />
          <span class="swap-off icon-[lucide--grid] w-6 h-6"></span>
          <span class="swap-on icon-[lucide--list] w-6 h-6"></span>
        </label>
      </div>
    </DocsSection>

    <DocsSection title="活跃状态 (swap-active)">
      <div class="flex items-center gap-2">
        <label class="swap swap-active">
          <span class="swap-off icon-[lucide--settings] w-8 h-8"></span>
          <span class="swap-on icon-[lucide--check-circle] w-8 h-8"></span>
        </label>
        <span>已激活</span>
      </div>
    </DocsSection>

    <DocsSection title="音量控制">
      <div class="flex items-center gap-2">
        <label class="swap swap-rotate">
          <input type="checkbox" />
          <span class="swap-off icon-[lucide--volume-2] w-6 h-6"></span>
          <span class="swap-on icon-[lucide--volume-x] w-6 h-6"></span>
        </label>
        <input type="range" min="0" max="100" value="70" class="range range-sm w-24" />
      </div>
    </DocsSection>

    <DocsSection title="眼睛图标 - 显示/隐藏">
      <label class="swap">
        <input type="checkbox" />
        <span class="swap-off icon-[lucide--eye] w-6 h-6"></span>
        <span class="swap-on icon-[lucide--eye-off] w-6 h-6"></span>
      </label>
    </DocsSection>

    <DocsSection title="播放/暂停">
      <label class="swap">
        <input type="checkbox" />
        <span class="swap-off icon-[lucide--play] w-8 h-8"></span>
        <span class="swap-on icon-[lucide--pause] w-8 h-8"></span>
      </label>
    </DocsSection>

    <DocsSection title="最大化/最小化">
      <label class="swap">
        <input type="checkbox" />
        <span class="swap-off icon-[lucide--maximize] w-6 h-6"></span>
        <span class="swap-on icon-[lucide--minimize] w-6 h-6"></span>
      </label>
    </DocsSection>

    <DocsSection title="喜欢/取消喜欢">
      <label class="swap">
        <input type="checkbox" />
        <span class="swap-off icon-[lucide--heart] w-6 h-6"></span>
        <span class="swap-on icon-[lucide--heart] w-6 h-6 text-red-500"></span>
      </label>
    </DocsSection>
  </DocsContainer>
</template>
