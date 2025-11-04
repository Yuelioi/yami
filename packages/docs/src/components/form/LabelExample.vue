<script setup lang="ts">
import DocsHeader from '../zcomp/DocsHeader.vue'
import DocsContainer from '../zcomp/DocsContainer.vue'
import DocsSection from '../zcomp/DocsSection.vue'
import ApiReference from '../zcomp/ApiReference.vue'

const apiClasses = [
  {
    category: '基础',
    className: 'label',
    description: '基本标签样式。',
    isCategoryStart: true,
  },
  {
    category: '基础',
    className: 'label-required',
    description: '添加必填星号标记。',
    isCategoryStart: false,
  },
  {
    category: '基础',
    className: 'label-description',
    description: '带描述文本的标签结构。',
    isCategoryStart: false,
  },
  {
    category: '布局',
    className: 'label-inline',
    description: '标签与输入框水平排列。',
    isCategoryStart: true,
  },
  {
    category: '尺寸',
    className: 'label-xs',
    description: '超小号标签文字。',
    isCategoryStart: true,
  },
  {
    category: '尺寸',
    className: 'label-sm',
    description: '小号标签文字。',
    isCategoryStart: false,
  },
  {
    category: '尺寸',
    className: 'label-md',
    description: '中号标签文字（默认）。',
    isCategoryStart: false,
  },
  {
    category: '尺寸',
    className: 'label-lg',
    description: '大号标签文字。',
    isCategoryStart: false,
  },
  {
    category: '浮动标签',
    className: 'label-float',
    description: '浮动标签容器（input/textarea/select）。',
    isCategoryStart: true,
  },
  {
    category: '浮动标签',
    className: 'label-float-required',
    description: '浮动标签加必填星号。',
    isCategoryStart: false,
  },
  {
    category: '浮动标签',
    className: 'label-float-error',
    description: '浮动标签错误状态（红色边框）。',
    isCategoryStart: false,
  },
  {
    category: '浮动标签',
    className: 'label-float-success',
    description: '浮动标签成功状态（绿色边框）。',
    isCategoryStart: false,
  },
  {
    category: '浮动标签尺寸',
    className: 'label-float-sm',
    description: '小尺寸浮动标签。',
    isCategoryStart: true,
  },
  {
    category: '浮动标签尺寸',
    className: 'label-float-lg',
    description: '大尺寸浮动标签。',
    isCategoryStart: false,
  },
  {
    category: '特殊变体',
    className: 'label-float-icon',
    description: '带图标的浮动标签。',
    isCategoryStart: true,
  },
  {
    category: '特殊变体',
    className: 'label-float-outlined',
    description: 'Outlined 边框风格。',
    isCategoryStart: false,
  },
]
</script>

<template>
  <DocsContainer>
    <DocsHeader
      title="Label 标签组件"
      description="用于为输入框、选择框等控件提供文本描述，支持浮动、行内、带图标、错误状态等多种风格。"
    />

    <ApiReference :data="apiClasses" />

    <!-- 基础标签 -->
    <DocsSection title="基础标签">
      <div class="flex flex-col gap-3">
        <label class="label">普通标签</label>

        <label class="label label-required">必填标签</label>

        <div class="label-description">
          <label class="label">带描述的标签</label>
          <span class="description">用于展示附加说明。</span>
        </div>

        <div class="label-inline">
          <label class="label">行内标签</label>
          <input type="text" placeholder="输入内容..." class="input input-bordered" />
        </div>
      </div>
    </DocsSection>

    <!-- 尺寸变体 -->
    <DocsSection title="尺寸变体">
      <div class="flex flex-col gap-2">
        <label class="label label-xs">XS 标签</label>
        <label class="label label-sm">SM 标签</label>
        <label class="label label-md">MD 标签</label>
        <label class="label label-lg">LG 标签</label>
      </div>
    </DocsSection>

    <!-- 浮动标签 -->
    <DocsSection title="浮动标签">
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <!-- 默认 -->
        <div class="label-float">
          <input type="text" placeholder=" " id="float1" />
          <label for="float1">用户名</label>
        </div>

        <!-- 必填 -->
        <div class="label-float label-float-required">
          <input type="text" placeholder=" " id="float2" />
          <label for="float2">电子邮箱</label>
        </div>

        <!-- 错误 -->
        <div class="label-float label-float-error">
          <input type="text" placeholder=" " id="float3" />
          <label for="float3">密码</label>
        </div>

        <!-- 成功 -->
        <div class="label-float label-float-success">
          <input type="text" placeholder=" " id="float4" />
          <label for="float4">昵称</label>
        </div>

        <!-- 小尺寸 -->
        <div class="label-float label-float-sm">
          <input type="text" placeholder=" " id="float5" />
          <label for="float5">手机号</label>
        </div>

        <!-- 大尺寸 -->
        <div class="label-float label-float-lg">
          <input type="text" placeholder=" " id="float6" />
          <label for="float6">备注信息</label>
        </div>

        <!-- 带图标 -->
        <div class="label-float label-float-icon">
          <input type="text" placeholder=" " id="float7" />
          <label for="float7">搜索内容</label>
          <svg
            class="icon size-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-4.35-4.35M10 18a8 8 0 100-16 8 8 0 000 16z"
            />
          </svg>
        </div>

        <!-- Outlined -->
        <div class="label-float label-float-outlined">
          <input type="text" placeholder=" " id="float8" />
          <label for="float8">地址</label>
        </div>
      </div>
    </DocsSection>
  </DocsContainer>
</template>
