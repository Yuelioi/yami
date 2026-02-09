<script setup lang="ts">
import DocsHeader from '@/components/zcomp/DocsHeader.vue'
import DocsSection from '@/components/zcomp/DocsSection.vue'
import ApiReference from '@/components/zcomp/ApiReference.vue'
import DocsContainer from '@/components/zcomp/DocsContainer.vue'

const apiClasses = [
  {
    category: '基础',
    className: 'fab',
    description: '悬浮操作按钮容器',
    isCategoryStart: true,
  },
  {
    category: '特殊',
    className: 'fab-close',
    description: '关闭按钮（替代主按钮）',
    isCategoryStart: false,
  },
  {
    category: '布局',
    className: 'fab-flower',
    description: '花瓣布局',
    isCategoryStart: false,
  },
]
</script>

<template>
  <DocsContainer>
    <DocsHeader
      title="FAB"
      description="悬浮操作按钮（Floating Action Button）组件，用于快速访问主要操作。"
    />

    <ApiReference :data="apiClasses"></ApiReference>

    <DocsSection title="基础 FAB">
      <div class="fab relative">
        <div tabindex="0" role="button" class="btn btn-primary btn-circle size-14">
          <span class="icon-[lucide--plus] w-6 h-6"></span>
        </div>
        <button class="btn btn-secondary btn-circle size-12">
          <span class="icon-[lucide--edit] w-5 h-5"></span>
        </button>
        <button class="btn btn-accent btn-circle size-12">
          <span class="icon-[lucide--trash-2] w-5 h-5"></span>
        </button>
      </div>
      <p class="text-sm text-base-content/70 mt-4">点击右下角的 + 按钮来展开菜单</p>
    </DocsSection>

    <DocsSection title="带关闭按钮的 FAB">
      <div class="fab relative">
        <div tabindex="0" role="button" class="btn btn-primary btn-circle size-14 relative">
          <span class="icon-[lucide--plus] w-6 h-6"></span>
          <div class="fab-close">
            <button class="btn btn-primary btn-circle size-14">
              <span class="icon-[lucide--x] w-6 h-6"></span>
            </button>
          </div>
        </div>
        <button class="btn btn-secondary btn-circle size-12">
          <span class="icon-[lucide--message-square] w-5 h-5"></span>
        </button>
        <button class="btn btn-accent btn-circle size-12">
          <span class="icon-[lucide--phone] w-5 h-5"></span>
        </button>
        <button class="btn btn-warning btn-circle size-12">
          <span class="icon-[lucide--bell] w-5 h-5"></span>
        </button>
      </div>
      <p class="text-sm text-base-content/70 mt-4">点击按钮时 + 号会变为 ✕</p>
    </DocsSection>

    <DocsSection title="花瓣布局 - 3 个按钮">
      <div class="fab fab-flower relative">
        <div tabindex="0" role="button" class="btn btn-primary btn-circle size-14">
          <span class="icon-[lucide--plus] w-6 h-6"></span>
        </div>
        <button class="btn btn-secondary btn-circle size-12">
          <span class="icon-[lucide--message-square] w-5 h-5"></span>
        </button>
        <button class="btn btn-accent btn-circle size-12">
          <span class="icon-[lucide--phone] w-5 h-5"></span>
        </button>
      </div>
    </DocsSection>

    <DocsSection title="花瓣布局 - 4 个按钮">
      <div class="fab fab-flower relative">
        <div tabindex="0" role="button" class="btn btn-primary btn-circle size-14">
          <span class="icon-[lucide--plus] w-6 h-6"></span>
        </div>
        <button class="btn btn-secondary btn-circle size-12">
          <span class="icon-[lucide--share-2] w-5 h-5"></span>
        </button>
        <button class="btn btn-accent btn-circle size-12">
          <span class="icon-[lucide--message-square] w-5 h-5"></span>
        </button>
        <button class="btn btn-warning btn-circle size-12">
          <span class="icon-[lucide--bell] w-5 h-5"></span>
        </button>
      </div>
    </DocsSection>

    <DocsSection title="花瓣布局 - 5 个按钮">
      <div class="fab fab-flower relative">
        <div tabindex="0" role="button" class="btn btn-primary btn-circle size-14">
          <span class="icon-[lucide--plus] w-6 h-6"></span>
        </div>
        <button class="btn btn-secondary btn-circle size-12">
          <span class="icon-[lucide--home] w-5 h-5"></span>
        </button>
        <button class="btn btn-accent btn-circle size-12">
          <span class="icon-[lucide--search] w-5 h-5"></span>
        </button>
        <button class="btn btn-warning btn-circle size-12">
          <span class="icon-[lucide--user] w-5 h-5"></span>
        </button>
        <button class="btn btn-info btn-circle size-12">
          <span class="icon-[lucide--settings] w-5 h-5"></span>
        </button>
      </div>
    </DocsSection>

    <DocsSection title="花瓣布局 - 6 个按钮">
      <div class="fab fab-flower relative">
        <div tabindex="0" role="button" class="btn btn-primary btn-circle size-14">
          <span class="icon-[lucide--plus] w-6 h-6"></span>
        </div>
        <button class="btn btn-secondary btn-circle size-12">
          <span class="icon-[lucide--heart] w-5 h-5"></span>
        </button>
        <button class="btn btn-accent btn-circle size-12">
          <span class="icon-[lucide--star] w-5 h-5"></span>
        </button>
        <button class="btn btn-warning btn-circle size-12">
          <span class="icon-[lucide--share-2] w-5 h-5"></span>
        </button>
        <button class="btn btn-info btn-circle size-12">
          <span class="icon-[lucide--bookmark] w-5 h-5"></span>
        </button>
        <button class="btn btn-error btn-circle size-12">
          <span class="icon-[lucide--trash-2] w-5 h-5"></span>
        </button>
      </div>
    </DocsSection>

    <DocsSection title="花瓣布局 + Close 按钮">
      <div class="fab fab-flower relative">
        <div tabindex="0" role="button" class="btn btn-primary btn-circle size-14 relative">
          <span class="icon-[lucide--plus] w-6 h-6"></span>
          <div class="fab-close">
            <button class="btn btn-primary btn-circle size-14">
              <span class="icon-[lucide--x] w-6 h-6"></span>
            </button>
          </div>
        </div>
        <button class="btn btn-secondary btn-circle size-12">
          <span class="icon-[lucide--edit] w-5 h-5"></span>
        </button>
        <button class="btn btn-accent btn-circle size-12">
          <span class="icon-[lucide--share-2] w-5 h-5"></span>
        </button>
        <button class="btn btn-error btn-circle size-12">
          <span class="icon-[lucide--trash-2] w-5 h-5"></span>
        </button>
      </div>
      <p class="text-sm text-base-content/70 mt-4">花瓣布局 + 关闭按钮的完整示例</p>
    </DocsSection>

    <DocsSection title="操作菜单">
      <div class="fab fab-flower relative">
        <div tabindex="0" role="button" class="btn btn-primary btn-circle size-14 relative">
          <span class="icon-[lucide--menu] w-6 h-6"></span>
          <div class="fab-close">
            <button class="btn btn-primary btn-circle size-14">
              <span class="icon-[lucide--x] w-6 h-6"></span>
            </button>
          </div>
        </div>
        <button class="btn btn-secondary btn-circle size-12">
          <span class="icon-[lucide--check] w-5 h-5"></span>
        </button>
        <button class="btn btn-accent btn-circle size-12">
          <span class="icon-[lucide--edit] w-5 h-5"></span>
        </button>
        <button class="btn btn-error btn-circle size-12">
          <span class="icon-[lucide--x] w-5 h-5"></span>
        </button>
      </div>
    </DocsSection>

    <DocsSection title="社交媒体 FAB">
      <div class="fab fab-flower relative">
        <div tabindex="0" role="button" class="btn btn-primary btn-circle size-14 relative">
          <span class="icon-[lucide--share-2] w-6 h-6"></span>
          <div class="fab-close">
            <button class="btn btn-primary btn-circle size-14">
              <span class="icon-[lucide--x] w-6 h-6"></span>
            </button>
          </div>
        </div>
        <button class="btn btn-circle size-12" style="background-color: #1f2937; color: white">
          <span class="icon-[lucide--github] w-5 h-5"></span>
        </button>
        <button class="btn btn-circle size-12" style="background-color: #0ea5e9; color: white">
          <span class="icon-[lucide--twitter] w-5 h-5"></span>
        </button>
        <button class="btn btn-circle size-12" style="background-color: #ef4444; color: white">
          <span class="icon-[lucide--mail] w-5 h-5"></span>
        </button>
      </div>
    </DocsSection>

    <DocsSection title="编辑工具 FAB">
      <div class="fab fab-flower relative">
        <div tabindex="0" role="button" class="btn btn-primary btn-circle size-14 relative">
          <span class="icon-[lucide--wand-2] w-6 h-6"></span>
          <div class="fab-close">
            <button class="btn btn-primary btn-circle size-14">
              <span class="icon-[lucide--x] w-6 h-6"></span>
            </button>
          </div>
        </div>
        <button class="btn btn-accent btn-circle size-12">
          <span class="icon-[lucide--palette] w-5 h-5"></span>
        </button>
        <button class="btn btn-warning btn-circle size-12">
          <span class="icon-[lucide--copy] w-5 h-5"></span>
        </button>
        <button class="btn btn-info btn-circle size-12">
          <span class="icon-[lucide--undo-2] w-5 h-5"></span>
        </button>
        <button class="btn btn-success btn-circle size-12">
          <span class="icon-[lucide--download] w-5 h-5"></span>
        </button>
      </div>
    </DocsSection>
  </DocsContainer>
</template>
