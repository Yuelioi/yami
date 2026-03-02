<script setup lang="ts">
import DocsHeader from '@/components/zcomp/DocsHeader.vue'
import DocsSection from '@/components/zcomp/DocsSection.vue'
import ApiReference from '@/components/zcomp/ApiReference.vue'
import DocsContainer from '@/components/zcomp/DocsContainer.vue'

const apiClasses = [
  {
    category: '基础',
    className: 'tabs',
    description: '选项卡容器',
    isCategoryStart: true,
  },
  {
    category: '基础',
    className: 'tab',
    description: '选项卡标签项（label 元素）',
    isCategoryStart: false,
  },
  {
    category: '基础',
    className: 'tab-content',
    description: '内容面板',
    isCategoryStart: false,
  },
  {
    category: '基础',
    className: 'tab-disabled',
    description: '禁用状态',
    isCategoryStart: false,
  },
  {
    category: '基础',
    className: 'tab-header',
    description: '标签头部容器（分离结构专用）',
    isCategoryStart: false,
  },
  {
    category: '基础',
    className: 'tab-body',
    description: '内容区容器（分离结构专用）',
    isCategoryStart: false,
  },
  {
    category: '样式',
    className: 'tabs-line',
    description: '下划线样式（默认）',
    isCategoryStart: true,
  },
  {
    category: '样式',
    className: 'tabs-boxed',
    description: '盒子样式',
    isCategoryStart: false,
  },
  {
    category: '样式',
    className: 'tabs-pill',
    description: '胶囊样式',
    isCategoryStart: false,
  },
  {
    category: '样式',
    className: 'tabs-soft',
    description: '柔和样式',
    isCategoryStart: false,
  },
  {
    category: '颜色',
    className: 'tabs-primary',
    description: '主色',
    isCategoryStart: true,
  },
  {
    category: '颜色',
    className: 'tabs-secondary',
    description: '次色',
    isCategoryStart: false,
  },
  {
    category: '颜色',
    className: 'tabs-accent',
    description: '强调色',
    isCategoryStart: false,
  },
  {
    category: '颜色',
    className: 'tabs-neutral',
    description: '中性色',
    isCategoryStart: false,
  },
  {
    category: '颜色',
    className: 'tabs-success',
    description: '成功色',
    isCategoryStart: false,
  },
  {
    category: '颜色',
    className: 'tabs-warning',
    description: '警告色',
    isCategoryStart: false,
  },
  {
    category: '颜色',
    className: 'tabs-error',
    description: '错误色',
    isCategoryStart: false,
  },
  {
    category: '尺寸',
    className: 'tabs-sm',
    description: '小',
    isCategoryStart: true,
  },
  {
    category: '尺寸',
    className: 'tabs-md',
    description: '中（默认）',
    isCategoryStart: false,
  },
  {
    category: '尺寸',
    className: 'tabs-lg',
    description: '大',
    isCategoryStart: false,
  },
  {
    category: '尺寸',
    className: 'tabs-xl',
    description: '特大',
    isCategoryStart: false,
  },
  {
    category: '布局',
    className: 'tabs-stretch',
    description: '标签项等宽铺满',
    isCategoryStart: true,
  },
]
</script>

<template>
  <DocsContainer>
    <DocsHeader
      title="Tabs"
      description="选项卡用于在同一空间内切换展示不同内容区域，纯 CSS 驱动，无需 JavaScript。"
    />

    <ApiReference :data="apiClasses" />

    <!-- 样式 -->
    <DocsSection title="样式">
      <div>
        <p class="text-sm text-base-content/60 mb-3">下划线（默认）</p>
        <div class="tabs tabs-line tabs-primary">
          <input type="radio" name="style-line" id="line-1" checked />
          <label class="tab" for="line-1">个人资料</label>
          <input type="radio" name="style-line" id="line-2" />
          <label class="tab" for="line-2">设置</label>
          <input type="radio" name="style-line" id="line-3" />
          <label class="tab" for="line-3">账单</label>
        </div>
      </div>

      <div>
        <p class="text-sm text-base-content/60 mb-3">盒子</p>
        <div class="tabs tabs-boxed tabs-primary">
          <input type="radio" name="style-boxed" id="boxed-1" checked />
          <label class="tab" for="boxed-1">全部</label>
          <input type="radio" name="style-boxed" id="boxed-2" />
          <label class="tab" for="boxed-2">进行中</label>
          <input type="radio" name="style-boxed" id="boxed-3" />
          <label class="tab" for="boxed-3">已归档</label>
        </div>
      </div>

      <div>
        <p class="text-sm text-base-content/60 mb-3">胶囊</p>
        <div class="tabs tabs-pill tabs-primary">
          <input type="radio" name="style-pill" id="pill-1" checked />
          <label class="tab" for="pill-1">设计</label>
          <input type="radio" name="style-pill" id="pill-2" />
          <label class="tab" for="pill-2">开发</label>
          <input type="radio" name="style-pill" id="pill-3" />
          <label class="tab" for="pill-3">部署</label>
        </div>
      </div>

      <div>
        <p class="text-sm text-base-content/60 mb-3">柔和</p>
        <div class="tabs tabs-soft tabs-primary">
          <input type="radio" name="style-soft" id="soft-1" checked />
          <label class="tab" for="soft-1">概览</label>
          <input type="radio" name="style-soft" id="soft-2" />
          <label class="tab" for="soft-2">分析</label>
          <input type="radio" name="style-soft" id="soft-3" />
          <label class="tab" for="soft-3">报告</label>
        </div>
      </div>
    </DocsSection>

    <!-- 颜色 -->
    <DocsSection title="颜色">
      <div class="flex flex-col gap-3">
        <div
          v-for="(color, i) in [
            'primary',
            'secondary',
            'accent',
            'neutral',
            'success',
            'warning',
            'error',
          ]"
          :key="color"
        >
          <div class="tabs tabs-pill" :class="`tabs-${color}`">
            <input type="radio" :name="`color-${color}`" :id="`${color}-1`" checked />
            <label class="tab" :for="`${color}-1`">选项一</label>
            <input type="radio" :name="`color-${color}`" :id="`${color}-2`" />
            <label class="tab" :for="`${color}-2`">选项二</label>
            <input type="radio" :name="`color-${color}`" :id="`${color}-3`" />
            <label class="tab" :for="`${color}-3`">选项三</label>
          </div>
        </div>
      </div>
    </DocsSection>

    <!-- 尺寸 -->
    <DocsSection title="尺寸">
      <div class="flex flex-col gap-4">
        <div v-for="size in ['sm', 'md', 'lg', 'xl']" :key="size">
          <p class="text-sm text-base-content/60 mb-2">{{ size }}</p>
          <div class="tabs tabs-line tabs-primary" :class="`tabs-${size}`">
            <input type="radio" :name="`size-${size}`" :id="`${size}-a`" checked />
            <label class="tab" :for="`${size}-a`">选项一</label>
            <input type="radio" :name="`size-${size}`" :id="`${size}-b`" />
            <label class="tab" :for="`${size}-b`">选项二</label>
            <input type="radio" :name="`size-${size}`" :id="`${size}-c`" />
            <label class="tab" :for="`${size}-c`">选项三</label>
          </div>
        </div>
      </div>
    </DocsSection>

    <!-- 等宽铺满 -->
    <DocsSection title="等宽铺满">
      <div class="tabs tabs-line tabs-primary tabs-stretch w-full max-w-sm">
        <input type="radio" name="stretch" id="stretch-1" checked />
        <label class="tab" for="stretch-1">选项一</label>
        <input type="radio" name="stretch" id="stretch-2" />
        <label class="tab" for="stretch-2">选项二</label>
        <input type="radio" name="stretch" id="stretch-3" />
        <label class="tab" for="stretch-3">选项三</label>
      </div>
    </DocsSection>

    <!-- 带内容面板 -->
    <DocsSection title="带内容面板">
      <div>
        <p class="text-sm text-base-content/60 mb-3">并列结构</p>
        <div class="tabs tabs-boxed tabs-primary w-full max-w-md">
          <input type="radio" name="flat-content" id="flat-1" checked />
          <label class="tab" for="flat-1">收件箱</label>
          <input type="radio" name="flat-content" id="flat-2" />
          <label class="tab" for="flat-2">已发送</label>
          <input type="radio" name="flat-content" id="flat-3" />
          <label class="tab" for="flat-3">草稿箱</label>

          <div
            class="tab-content mt-2 p-4 rounded-box border bg-base-100 border-base-300 text-sm text-base-content/70"
          >
            📥 你有 <strong class="text-base-content">3 封</strong> 未读邮件。
          </div>
          <div
            class="tab-content mt-4 p-4 rounded-box border border-base-200 text-sm text-base-content/70"
          >
            📤 最近发送了 <strong class="text-base-content">12 封</strong> 邮件。
          </div>
          <div
            class="tab-content mt-4 p-4 rounded-box border border-base-200 text-sm text-base-content/70"
          >
            📝 你有 <strong class="text-base-content">1 封</strong> 草稿待完成。
          </div>
        </div>
      </div>

      <div>
        <p class="text-sm text-base-content/60 mb-3">分离结构（tab-header + tab-body）</p>
        <div class="tabs tabs-soft tabs-primary w-full max-w-md">
          <div class="tab-header">
            <input type="radio" name="sep-content" id="sep-1" checked />
            <label class="tab" for="sep-1">概览</label>
            <input type="radio" name="sep-content" id="sep-2" />
            <label class="tab" for="sep-2">成员</label>
            <input type="radio" name="sep-content" id="sep-3" />
            <label class="tab" for="sep-3">设置</label>
          </div>

          <div class="tab-body mt-4 border border-base-200 rounded-box">
            <div class="tab-content p-4 text-sm text-base-content/70">
              📊 项目整体进度 <strong class="text-base-content">72%</strong>，本周新增任务 8 项。
            </div>
            <div class="tab-content p-4 text-sm text-base-content/70">
              👥 当前团队共 <strong class="text-base-content">6 名</strong> 成员，2 人本周在线。
            </div>
            <div class="tab-content p-4 text-sm text-base-content/70">
              ⚙️ 项目可见性：<strong class="text-base-content">私有</strong>，通知已开启。
            </div>
          </div>
        </div>
      </div>
    </DocsSection>

    <!-- 带图标 -->
    <DocsSection title="带图标">
      <div class="tabs tabs-soft tabs-primary">
        <input type="radio" name="icon-tab" id="icon-1" checked />
        <label class="tab" for="icon-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            />
          </svg>
          首页
        </label>

        <input type="radio" name="icon-tab" id="icon-2" />
        <label class="tab" for="icon-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4"
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
          用户
        </label>

        <input type="radio" name="icon-tab" id="icon-3" disabled />
        <label class="tab tab-disabled" for="icon-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4"
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
          设置（禁用）
        </label>
      </div>
    </DocsSection>

    <!-- 带徽章 -->
    <DocsSection title="带徽章">
      <div class="tabs tabs-line tabs-primary">
        <input type="radio" name="badge-tab" id="badge-1" checked />
        <label class="tab" for="badge-1">
          全部
          <span class="badge badge-sm badge-soft badge-primary">24</span>
        </label>

        <input type="radio" name="badge-tab" id="badge-2" />
        <label class="tab" for="badge-2">
          待审核
          <span class="badge badge-sm badge-soft badge-warning">5</span>
        </label>

        <input type="radio" name="badge-tab" id="badge-3" />
        <label class="tab" for="badge-3">
          已完成
          <span class="badge badge-sm badge-soft badge-success">19</span>
        </label>
      </div>
    </DocsSection>

    <!-- HTML 结构说明 -->
    <DocsSection title="两种结构">
      <div class="flex flex-col gap-4 text-sm">
        <div class="p-4 rounded-box bg-base-200">
          <p class="font-semibold text-base-content mb-2">并列结构</p>
          <p class="text-base-content/60 mb-3">
            input、label、tab-content 在同一层级，适合轻量简单场景。注意三者顺序不能打乱。
          </p>
          <pre
            class="text-xs bg-base-300/50 rounded p-3 overflow-x-auto"
          ><code>&lt;div class="tabs tabs-line tabs-primary"&gt;
  &lt;input type="radio" name="t" id="t1" checked /&gt;
  &lt;label class="tab" for="t1"&gt;Tab 1&lt;/label&gt;
  &lt;input type="radio" name="t" id="t2" /&gt;
  &lt;label class="tab" for="t2"&gt;Tab 2&lt;/label&gt;

  &lt;div class="tab-content"&gt;内容一&lt;/div&gt;
  &lt;div class="tab-content"&gt;内容二&lt;/div&gt;
&lt;/div&gt;</code></pre>
        </div>

        <div class="p-4 rounded-box bg-base-200">
          <p class="font-semibold text-base-content mb-2">分离结构（推荐）</p>
          <p class="text-base-content/60 mb-3">
            tab-header 与 tab-body 分开，语义更清晰，内容区可独立设置样式。
          </p>
          <pre
            class="text-xs bg-base-300/50 rounded p-3 overflow-x-auto"
          ><code>&lt;div class="tabs tabs-boxed tabs-primary"&gt;
  &lt;div class="tab-header"&gt;
    &lt;input type="radio" name="t" id="t1" checked /&gt;
    &lt;label class="tab" for="t1"&gt;Tab 1&lt;/label&gt;
    &lt;input type="radio" name="t" id="t2" /&gt;
    &lt;label class="tab" for="t2"&gt;Tab 2&lt;/label&gt;
  &lt;/div&gt;
  &lt;div class="tab-body"&gt;
    &lt;div class="tab-content"&gt;内容一&lt;/div&gt;
    &lt;div class="tab-content"&gt;内容二&lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
        </div>
      </div>
    </DocsSection>
  </DocsContainer>
</template>
