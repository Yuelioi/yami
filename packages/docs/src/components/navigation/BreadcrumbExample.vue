<script setup lang="ts">
import DocsHeader from '../zcomp/DocsHeader.vue'
import ApiReference from '../zcomp/ApiReference.vue'
import DocsContainer from '../zcomp/DocsContainer.vue'
import DocsSection from '../zcomp/DocsSection.vue'

const apiClasses = [
  {
    category: '基础结构',
    className: 'breadcrumb',
    description: '面包屑导航容器。',
    isCategoryStart: true,
  },
  {
    category: '基础结构',
    className: 'breadcrumb-item',
    description: '单个路径项。',
    isCategoryStart: false,
  },

  {
    category: '交互',
    className: 'breadcrumb-link',
    description: '可点击的路径链接。',
    isCategoryStart: true,
  },
  {
    category: '交互',
    className: 'breadcrumb-current',
    description: '当前页面路径。',
    isCategoryStart: false,
  },
  {
    category: '交互',
    className: 'breadcrumb-disabled',
    description: '禁用的路径项。',
    isCategoryStart: false,
  },

  {
    category: '结构',
    className: 'breadcrumb-separator',
    description: '路径分隔符。',
    isCategoryStart: true,
  },
]
</script>

<template>
  <DocsContainer>
    <DocsHeader
      title="Breadcrumb 面包屑"
      description="用于展示页面层级结构的导航组件，帮助用户快速理解当前位置并返回上级页面。"
    />

    <ApiReference :data="apiClasses" />

    <!-- 基础用法 -->
    <DocsSection title="基础用法">
      <nav class="breadcrumb" aria-label="Breadcrumb">
        <div class="breadcrumb-item">
          <a class="breadcrumb-link">首页</a>
          <span class="breadcrumb-separator">/</span>
        </div>
        <div class="breadcrumb-item">
          <a class="breadcrumb-link">列表</a>
          <span class="breadcrumb-separator">/</span>
        </div>
        <div class="breadcrumb-item">
          <span class="breadcrumb-current">详情</span>
        </div>
      </nav>
    </DocsSection>

    <!-- 禁用项 -->
    <DocsSection title="禁用状态">
      <nav class="breadcrumb">
        <div class="breadcrumb-item breadcrumb-disabled">
          <span class="breadcrumb-link">首页</span>
          <span class="breadcrumb-separator">/</span>
        </div>
        <div class="breadcrumb-item">
          <span class="breadcrumb-current">当前页</span>
        </div>
      </nav>
    </DocsSection>

    <!-- 自定义分隔符 -->
    <DocsSection title="自定义分隔符">
      <nav class="breadcrumb">
        <div class="breadcrumb-item">
          <span class="breadcrumb-link">首页</span>
          <span class="breadcrumb-separator">›</span>
        </div>
        <div class="breadcrumb-item">
          <span class="breadcrumb-current">设置</span>
        </div>
      </nav>
    </DocsSection>
  </DocsContainer>
</template>
