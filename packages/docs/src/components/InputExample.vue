<script setup lang="ts">
import DocsHeader from '@/components/zcomp/DocsHeader.vue'
import DocsSection from '@/components/zcomp/DocsSection.vue'
import ApiReference from '@/components/zcomp/ApiReference.vue'
import DocsContainer from '@/components/zcomp/DocsContainer.vue'

const apiClasses = [
  {
    category: '基础',
    className: 'input',
    description: '输入框，支持裸标签和容器标签两种写法',
    isCategoryStart: true,
  },
  { category: '颜色', className: 'input-neutral', description: '中性色', isCategoryStart: false },
  { category: '颜色', className: 'input-primary', description: '主色', isCategoryStart: false },
  { category: '颜色', className: 'input-secondary', description: '次色', isCategoryStart: false },
  { category: '颜色', className: 'input-accent', description: '强调色', isCategoryStart: false },
  { category: '颜色', className: 'input-info', description: '信息色', isCategoryStart: false },
  { category: '颜色', className: 'input-success', description: '成功色', isCategoryStart: false },
  { category: '颜色', className: 'input-warning', description: '警告色', isCategoryStart: false },
  { category: '颜色', className: 'input-error', description: '错误色', isCategoryStart: false },
  {
    category: '风格',
    className: 'input-ghost',
    description: '幽灵，无边框无背景，聚焦时还原',
    isCategoryStart: false,
  },
  { category: '尺寸', className: 'input-xs', description: '超小', isCategoryStart: false },
  { category: '尺寸', className: 'input-sm', description: '小', isCategoryStart: false },
  { category: '尺寸', className: 'input-md', description: '中（默认）', isCategoryStart: false },
  { category: '尺寸', className: 'input-lg', description: '大', isCategoryStart: false },
  { category: '尺寸', className: 'input-xl', description: '超大', isCategoryStart: false },
]
</script>

<template>
  <DocsContainer>
    <DocsHeader
      title="Input"
      description="文本输入框。支持裸标签与容器标签两种写法，图标等内容直接放入容器即可。"
    />

    <ApiReference :data="apiClasses" />

    <!-- 基础用法 -->
    <DocsSection title="基础用法">
      <div class="flex flex-col gap-3 max-w-sm">
        <input class="input" type="text" placeholder="默认" />
        <input class="input" type="password" placeholder="密码" />
        <input class="input" type="email" placeholder="邮箱" />
        <input class="input" type="number" placeholder="数字" />
        <input class="input" type="date" />
      </div>
    </DocsSection>

    <!-- 颜色 -->
    <DocsSection title="颜色">
      <div class="flex flex-col gap-3 max-w-sm">
        <input class="input" placeholder="默认" />
        <input class="input input-neutral" placeholder="Neutral" />
        <input class="input input-primary" placeholder="Primary" />
        <input class="input input-secondary" placeholder="Secondary" />
        <input class="input input-accent" placeholder="Accent" />
        <input class="input input-info" placeholder="Info" />
        <input class="input input-success" placeholder="Success" />
        <input class="input input-warning" placeholder="Warning" />
        <input class="input input-error" placeholder="Error" />
      </div>
    </DocsSection>

    <!-- 风格 -->
    <DocsSection title="风格">
      <div class="flex flex-col gap-3 max-w-sm">
        <input class="input input-primary" placeholder="默认边框" />
        <input class="input input-ghost" placeholder="幽灵，聚焦时还原白底" />
      </div>
    </DocsSection>

    <!-- 尺寸 -->
    <DocsSection title="尺寸">
      <div class="flex flex-col gap-3 max-w-sm">
        <input class="input input-primary input-xs" placeholder="xs" />
        <input class="input input-primary input-sm" placeholder="sm" />
        <input class="input input-primary" placeholder="md（默认）" />
        <input class="input input-primary input-lg" placeholder="lg" />
        <input class="input input-primary input-xl" placeholder="xl" />
      </div>
    </DocsSection>

    <!-- 状态 -->
    <DocsSection title="状态">
      <div class="flex flex-col gap-3 max-w-sm">
        <input class="input input-success" value="用户名可用" />
        <input class="input input-warning" value="密码强度较弱" />
        <input class="input input-error" value="邮箱格式不正确" />
        <input class="input" placeholder="已禁用" disabled />
        <input class="input" value="只读内容不可编辑" readonly />
      </div>
    </DocsSection>

    <!-- 带图标（容器写法） -->
    <DocsSection title="带图标">
      <div class="flex flex-col gap-3 max-w-sm">
        <!-- 搜索图标 -->
        <label class="input input-primary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-4 h-4 opacity-50"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z"
            />
          </svg>
          <input type="text" placeholder="搜索..." />
        </label>

        <!-- 邮箱图标 -->
        <label class="input input-primary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-4 h-4 opacity-50"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
          <input type="email" placeholder="邮箱地址" />
        </label>

        <!-- 前后都有图标 -->
        <label class="input input-primary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-4 h-4 opacity-50"
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
          <input type="text" placeholder="用户名" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-4 h-4 text-success"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </label>

        <!-- 快捷键提示 -->
        <label class="input input-primary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-4 h-4 opacity-50"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z"
            />
          </svg>
          <input type="text" placeholder="搜索..." />
          <kbd class="kbd kbd-sm">⌘K</kbd>
        </label>

        <!-- 错误状态 -->
        <label class="input input-error">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-4 h-4 opacity-50"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 11c0-1.657-.895-3-2-3s-2 1.343-2 3 .895 3 2 3 2-1.343 2-3zm6 0c0-1.657-.895-3-2-3s-2 1.343-2 3 .895 3 2 3 2-1.343 2-3z"
            />
          </svg>
          <input type="password" placeholder="密码" value="123" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-4 h-4 text-error"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </label>
      </div>
    </DocsSection>

    <!-- 表单示例 -->
    <DocsSection title="表单示例">
      <div class="flex flex-col gap-5 max-w-sm">
        <div class="flex flex-col gap-1.5">
          <label class="text-sm font-medium">用户名</label>
          <label class="input input-primary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-4 h-4 opacity-50"
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
            <input type="text" placeholder="请输入用户名" />
          </label>
          <span class="text-xs text-base-content/40">3~20 个字符，支持字母、数字、下划线</span>
        </div>

        <div class="flex flex-col gap-1.5">
          <label class="text-sm font-medium">邮箱</label>
          <input class="input input-primary" type="email" placeholder="you@example.com" />
        </div>

        <div class="flex flex-col gap-1.5">
          <label class="text-sm font-medium">密码</label>
          <input class="input input-error" type="password" value="123" />
          <span class="text-xs text-error">密码长度至少 8 位</span>
        </div>
      </div>
    </DocsSection>
  </DocsContainer>
</template>
