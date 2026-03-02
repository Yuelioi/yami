<script setup lang="ts">
import DocsHeader from '@/components/zcomp/DocsHeader.vue'
import DocsSection from '@/components/zcomp/DocsSection.vue'
import ApiReference from '@/components/zcomp/ApiReference.vue'
import DocsContainer from '@/components/zcomp/DocsContainer.vue'
import { ref } from 'vue'

const apiClasses = [
  { category: '基础', className: 'list-group', description: '列表组容器', isCategoryStart: true },
  { category: '基础', className: 'list-group-item', description: '列表项', isCategoryStart: false },
  {
    category: '基础',
    className: 'list-group-item-action',
    description: '可交互项（链接/按钮）',
    isCategoryStart: false,
  },
  {
    category: '基础',
    className: 'list-group-item-active',
    description: '激活状态',
    isCategoryStart: false,
  },
  {
    category: '基础',
    className: 'list-group-item-disabled',
    description: '禁用状态',
    isCategoryStart: false,
  },
  {
    category: '基础',
    className: 'list-group-item-end',
    description: '右侧内容区（徽章/箭头）',
    isCategoryStart: false,
  },
  {
    category: '基础',
    className: 'list-group-item-desc',
    description: '列表项描述文字',
    isCategoryStart: false,
  },
  {
    category: '颜色',
    className: 'list-group-primary',
    description: '主色激活',
    isCategoryStart: true,
  },
  {
    category: '颜色',
    className: 'list-group-secondary',
    description: '次色激活',
    isCategoryStart: false,
  },
  {
    category: '颜色',
    className: 'list-group-accent',
    description: '强调色激活',
    isCategoryStart: false,
  },
  {
    category: '颜色',
    className: 'list-group-success',
    description: '成功色激活',
    isCategoryStart: false,
  },
  {
    category: '颜色',
    className: 'list-group-warning',
    description: '警告色激活',
    isCategoryStart: false,
  },
  {
    category: '颜色',
    className: 'list-group-error',
    description: '错误色激活',
    isCategoryStart: false,
  },
  {
    category: '样式',
    className: 'list-group-flush',
    description: '嵌入模式（无外边框）',
    isCategoryStart: true,
  },
  {
    category: '样式',
    className: 'list-group-borderless',
    description: '无边框',
    isCategoryStart: false,
  },
  {
    category: '样式',
    className: 'list-group-divided',
    description: '无分割线',
    isCategoryStart: false,
  },
  { category: '尺寸', className: 'list-group-sm', description: '小', isCategoryStart: true },
  { category: '尺寸', className: 'list-group-lg', description: '大', isCategoryStart: false },
]

const activeNav = ref('profile')
</script>

<template>
  <DocsContainer>
    <DocsHeader
      title="List Group"
      description="列表组用于在单个容器内展示一组相关的列表项、链接或按钮。"
    />

    <ApiReference :data="apiClasses" />

    <!-- 基础 -->
    <DocsSection title="基础">
      <ul class="list-group w-48">
        <li class="list-group-item">个人资料</li>
        <li class="list-group-item">账户设置</li>
        <li class="list-group-item">消息通知</li>
        <li class="list-group-item">下载中心</li>
      </ul>
    </DocsSection>

    <!-- 链接 -->
    <DocsSection title="链接">
      <div class="list-group list-group-primary w-48">
        <a class="list-group-item list-group-item-action list-group-item-active">个人资料</a>
        <a class="list-group-item list-group-item-action">账户设置</a>
        <a class="list-group-item list-group-item-action">消息通知</a>
        <a class="list-group-item list-group-item-action">下载中心</a>
      </div>
    </DocsSection>

    <!-- 按钮 -->
    <DocsSection title="按钮">
      <div class="list-group list-group-primary w-48">
        <button
          v-for="item in ['profile', 'settings', 'messages', 'options', 'download']"
          :key="item"
          type="button"
          class="list-group-item list-group-item-action"
          :class="{
            'list-group-item-active': activeNav === item,
            'list-group-item-disabled': item === 'options',
          }"
          :disabled="item === 'options'"
          @click="activeNav = item"
        >
          {{
            {
              profile: '个人资料',
              settings: '账户设置',
              messages: '消息通知',
              options: '更多选项（禁用）',
              download: '下载中心',
            }[item]
          }}
        </button>
      </div>
    </DocsSection>

    <!-- 带图标 -->
    <DocsSection title="带图标">
      <div class="list-group list-group-primary w-56">
        <a class="list-group-item list-group-item-action list-group-item-active">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4 shrink-0"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            />
          </svg>
          个人资料
        </a>
        <a class="list-group-item list-group-item-action">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4 shrink-0"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          账户设置
        </a>
        <a class="list-group-item list-group-item-action">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4 shrink-0"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
            />
          </svg>
          消息通知
        </a>
        <a class="list-group-item list-group-item-action">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4 shrink-0"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
            />
          </svg>
          下载中心
        </a>
      </div>
    </DocsSection>

    <!-- 带徽章 -->
    <DocsSection title="带徽章">
      <div class="list-group list-group-primary w-56">
        <a class="list-group-item list-group-item-action list-group-item-active">
          收件箱
          <span class="list-group-item-end">
            <span class="badge badge-sm badge-primary badge-pill">3</span>
          </span>
        </a>
        <a class="list-group-item list-group-item-action">
          草稿箱
          <span class="list-group-item-end">
            <span class="badge badge-sm badge-soft badge-neutral badge-pill">1</span>
          </span>
        </a>
        <a class="list-group-item list-group-item-action"> 已发送 </a>
        <a class="list-group-item list-group-item-action">
          垃圾邮件
          <span class="list-group-item-end">
            <span class="badge badge-sm badge-soft badge-error badge-pill">12</span>
          </span>
        </a>
      </div>
    </DocsSection>

    <!-- 带描述 -->
    <DocsSection title="带描述">
      <div class="list-group list-group-primary w-72">
        <a class="list-group-item list-group-item-action list-group-item-active">
          <div
            class="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary shrink-0 font-bold text-sm"
          >
            张
          </div>
          <div class="flex flex-col min-w-0">
            <span>张三</span>
            <span class="list-group-item-desc truncate">你好，请问这个问题...</span>
          </div>
          <span class="list-group-item-end text-xs opacity-40">2分钟前</span>
        </a>
        <a class="list-group-item list-group-item-action">
          <div
            class="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center text-secondary shrink-0 font-bold text-sm"
          >
            李
          </div>
          <div class="flex flex-col min-w-0">
            <span>李四</span>
            <span class="list-group-item-desc truncate">好的，我已经收到了</span>
          </div>
          <span class="list-group-item-end text-xs opacity-40">1小时前</span>
        </a>
        <a class="list-group-item list-group-item-action">
          <div
            class="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center text-accent shrink-0 font-bold text-sm"
          >
            王
          </div>
          <div class="flex flex-col min-w-0">
            <span>王五</span>
            <span class="list-group-item-desc truncate">项目文件已上传完毕</span>
          </div>
          <span class="list-group-item-end text-xs opacity-40">昨天</span>
        </a>
      </div>
    </DocsSection>

    <!-- 颜色 -->
    <DocsSection title="颜色">
      <div class="flex flex-wrap gap-4">
        <div
          v-for="color in ['primary', 'secondary', 'accent', 'success', 'warning', 'error']"
          :key="color"
          class="list-group w-36"
          :class="`list-group-${color}`"
        >
          <a class="list-group-item list-group-item-action list-group-item-active">激活项</a>
          <a class="list-group-item list-group-item-action">普通项</a>
          <a class="list-group-item list-group-item-action">普通项</a>
        </div>
      </div>
    </DocsSection>

    <!-- 尺寸 -->
    <DocsSection title="尺寸">
      <div class="flex flex-wrap gap-4 items-start">
        <div>
          <p class="text-sm text-base-content/60 mb-2">sm</p>
          <div class="list-group list-group-sm list-group-primary w-44">
            <a class="list-group-item list-group-item-action list-group-item-active">个人资料</a>
            <a class="list-group-item list-group-item-action">账户设置</a>
            <a class="list-group-item list-group-item-action">消息通知</a>
          </div>
        </div>
        <div>
          <p class="text-sm text-base-content/60 mb-2">默认</p>
          <div class="list-group list-group-primary w-44">
            <a class="list-group-item list-group-item-action list-group-item-active">个人资料</a>
            <a class="list-group-item list-group-item-action">账户设置</a>
            <a class="list-group-item list-group-item-action">消息通知</a>
          </div>
        </div>
        <div>
          <p class="text-sm text-base-content/60 mb-2">lg</p>
          <div class="list-group list-group-lg list-group-primary w-44">
            <a class="list-group-item list-group-item-action list-group-item-active">个人资料</a>
            <a class="list-group-item list-group-item-action">账户设置</a>
            <a class="list-group-item list-group-item-action">消息通知</a>
          </div>
        </div>
      </div>
    </DocsSection>

    <!-- flush 嵌入卡片 -->
    <DocsSection title="嵌入卡片（flush）">
      <div class="card w-64 border border-base-200 rounded-box overflow-hidden bg-base-100">
        <div class="p-4 border-b border-base-200">
          <p class="font-semibold text-sm">设置菜单</p>
        </div>
        <div class="list-group list-group-flush list-group-primary">
          <a class="list-group-item list-group-item-action list-group-item-active">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-4 w-4 shrink-0"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
            个人资料
          </a>
          <a class="list-group-item list-group-item-action">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-4 w-4 shrink-0"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
              />
            </svg>
            隐私安全
          </a>
          <a class="list-group-item list-group-item-action">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-4 w-4 shrink-0"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
              />
            </svg>
            退出登录
          </a>
        </div>
      </div>
    </DocsSection>
  </DocsContainer>
</template>
