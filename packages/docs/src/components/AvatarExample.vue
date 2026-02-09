<script setup lang="ts">
import DocsHeader from '@/components/zcomp/DocsHeader.vue'
import DocsSection from '@/components/zcomp/DocsSection.vue'
import ApiReference from '@/components/zcomp/ApiReference.vue'
import DocsContainer from '@/components/zcomp/DocsContainer.vue'

const apiClasses = [
  {
    category: '基础',
    className: 'avatar',
    description: '头像容器',
    isCategoryStart: true,
  },
  {
    category: '基础',
    className: 'avatar-group',
    description: '头像组容器',
    isCategoryStart: false,
  },
  {
    category: '基础',
    className: 'avatar-placeholder',
    description: '占位符样式',
    isCategoryStart: false,
  },
  {
    category: '交互',
    className: 'pull-up',
    description: '悬停上浮效果',
    isCategoryStart: false,
  },
  {
    category: '状态 - 顶部',
    className: 'avatar-online-top',
    description: '在线指示，右上角',
    isCategoryStart: false,
  },
  {
    category: '状态 - 顶部',
    className: 'avatar-offline-top',
    description: '离线指示，右上角',
    isCategoryStart: false,
  },
  {
    category: '状态 - 顶部',
    className: 'avatar-busy-top',
    description: '忙碌指示，右上角',
    isCategoryStart: false,
  },
  {
    category: '状态 - 顶部',
    className: 'avatar-away-top',
    description: '离开指示，右上角',
    isCategoryStart: false,
  },
  {
    category: '状态 - 底部',
    className: 'avatar-online-bottom',
    description: '在线指示，右下角',
    isCategoryStart: false,
  },
  {
    category: '状态 - 底部',
    className: 'avatar-offline-bottom',
    description: '离线指示，右下角',
    isCategoryStart: false,
  },
  {
    category: '状态 - 底部',
    className: 'avatar-busy-bottom',
    description: '忙碌指示，右下角',
    isCategoryStart: false,
  },
  {
    category: '状态 - 底部',
    className: 'avatar-away-bottom',
    description: '离开指示，右下角',
    isCategoryStart: false,
  },
]
</script>

<template>
  <DocsContainer>
    <DocsHeader title="Avatar" description="用户头像展示，支持图片、占位符和状态指示。" />

    <ApiReference :data="apiClasses"></ApiReference>

    <DocsSection title="基础">
      <div class="flex gap-4 items-end">
        <div class="avatar w-16 h-16">
          <div class="rounded-full">
            <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=user1" alt="User" />
          </div>
        </div>
        <div class="avatar w-12 h-12">
          <div class="rounded-full">
            <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=user2" alt="User" />
          </div>
        </div>
        <div class="avatar w-8 h-8">
          <div class="rounded-full">
            <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=user3" alt="User" />
          </div>
        </div>
      </div>
    </DocsSection>

    <DocsSection title="头像组">
      <div class="avatar-group -space-x-4">
        <div class="avatar w-12 h-12">
          <div class="rounded-full">
            <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=user1" alt="User 1" />
          </div>
        </div>
        <div class="avatar w-12 h-12">
          <div class="rounded-full">
            <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=user2" alt="User 2" />
          </div>
        </div>
        <div class="avatar w-12 h-12">
          <div class="rounded-full">
            <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=user3" alt="User 3" />
          </div>
        </div>
        <div class="avatar w-12 h-12">
          <div
            class="rounded-full bg-primary flex items-center justify-center text-white text-sm font-bold"
          >
            +3
          </div>
        </div>
      </div>
    </DocsSection>

    <DocsSection title="占位符">
      <div class="flex gap-4">
        <div class="avatar avatar-placeholder w-16 h-16">
          <div
            class="bg-primary text-white text-xl font-bold rounded-full flex items-center justify-center"
          >
            A
          </div>
        </div>
        <div class="avatar avatar-placeholder w-16 h-16">
          <div
            class="bg-secondary text-white text-xl font-bold rounded-full flex items-center justify-center"
          >
            B
          </div>
        </div>
        <div class="avatar avatar-placeholder w-16 h-16">
          <div
            class="bg-accent text-white text-xl font-bold rounded-full flex items-center justify-center"
          >
            C
          </div>
        </div>
      </div>
    </DocsSection>

    <DocsSection title="状态 - 顶部">
      <div class="flex gap-6">
        <div class="avatar avatar-online-top w-16 h-16">
          <div class="rounded-full">
            <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=user1" alt="Online" />
          </div>
        </div>
        <div class="avatar avatar-offline-top w-16 h-16">
          <div class="rounded-full">
            <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=user2" alt="Offline" />
          </div>
        </div>
        <div class="avatar avatar-busy-top w-16 h-16">
          <div class="rounded-full">
            <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=user3" alt="Busy" />
          </div>
        </div>
        <div class="avatar avatar-away-top w-16 h-16">
          <div class="rounded-full">
            <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=user4" alt="Away" />
          </div>
        </div>
      </div>
    </DocsSection>

    <DocsSection title="状态 - 底部">
      <div class="flex gap-6">
        <div class="avatar avatar-online-bottom w-16 h-16">
          <div class="rounded-full">
            <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=user1" alt="Online" />
          </div>
        </div>
        <div class="avatar avatar-offline-bottom w-16 h-16">
          <div class="rounded-full">
            <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=user2" alt="Offline" />
          </div>
        </div>
        <div class="avatar avatar-busy-bottom w-16 h-16">
          <div class="rounded-full">
            <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=user3" alt="Busy" />
          </div>
        </div>
        <div class="avatar avatar-away-bottom w-16 h-16">
          <div class="rounded-full">
            <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=user4" alt="Away" />
          </div>
        </div>
      </div>
    </DocsSection>

    <DocsSection title="悬停效果">
      <div class="pull-up flex gap-6">
        <div class="avatar w-16 h-16 cursor-pointer">
          <div class="rounded-full">
            <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=user1" alt="Hover me" />
          </div>
        </div>
        <div class="avatar w-16 h-16 cursor-pointer">
          <div class="rounded-full">
            <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=user2" alt="Hover me" />
          </div>
        </div>
        <div class="avatar w-16 h-16 cursor-pointer">
          <div class="rounded-full">
            <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=user3" alt="Hover me" />
          </div>
        </div>
      </div>
    </DocsSection>
  </DocsContainer>
</template>
