<script setup lang="ts">
import DocsHeader from '../zcomp/DocsHeader.vue'
import DocsContainer from '../zcomp/DocsContainer.vue'
import DocsSection from '../zcomp/DocsSection.vue'
import ApiReference from '../zcomp/ApiReference.vue'

const apiClasses = [
  {
    category: '基础',
    className: 'breadcrumb',
    description: '面包屑导航容器，自动处理滚动与分隔符。',
    isCategoryStart: true,
  },
  {
    category: '尺寸',
    className: 'breadcrumb-sm',
    description: '小号面包屑。',
    isCategoryStart: true,
  },
  {
    category: '尺寸',
    className: 'breadcrumb-lg',
    description: '大号面包屑。',
    isCategoryStart: false,
  },
  {
    category: '分隔符',
    className: 'breadcrumb-slash',
    description: '使用“/”作为分隔符。',
    isCategoryStart: true,
  },
  {
    category: '分隔符',
    className: 'breadcrumb-dot',
    description: '使用“•”作为分隔符。',
    isCategoryStart: false,
  },
  {
    category: '分隔符',
    className: 'breadcrumb-chevron',
    description: '使用“»”作为分隔符。',
    isCategoryStart: false,
  },
]
</script>

<template>
  <DocsContainer>
    <DocsHeader
      title="Breadcrumb 面包屑导航"
      description="用于展示页面层级路径的导航组件，支持不同尺寸与分隔符样式。"
    />

    <ApiReference :data="apiClasses" />

    <!-- 基础用法 -->
    <DocsSection title="基础用法">
      <nav class="breadcrumb">
        <ul>
          <li><a href="#">首页</a></li>
          <li><a href="#">分类</a></li>
          <li><a href="#">产品</a></li>
          <li><a href="#" class="text-muted-foreground">详情</a></li>
        </ul>
      </nav>
    </DocsSection>

    <!-- 尺寸变体 -->
    <DocsSection title="尺寸变体">
      <div class="flex flex-col gap-3">
        <nav class="breadcrumb breadcrumb-sm">
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Library</a></li>
            <li><a href="#">Data</a></li>
          </ul>
        </nav>

        <nav class="breadcrumb">
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Library</a></li>
            <li><a href="#">Data</a></li>
          </ul>
        </nav>

        <nav class="breadcrumb breadcrumb-lg">
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Library</a></li>
            <li><a href="#">Data</a></li>
          </ul>
        </nav>
      </div>
    </DocsSection>

    <!-- 分隔符变体 -->
    <DocsSection title="分隔符变体">
      <div class="flex flex-col gap-3">
        <nav class="breadcrumb breadcrumb-slash">
          <ul>
            <li><a href="#">主页</a></li>
            <li><a href="#">设置</a></li>
            <li><a href="#">个人资料</a></li>
          </ul>
        </nav>

        <nav class="breadcrumb breadcrumb-dot">
          <ul>
            <li><a href="#">主页</a></li>
            <li><a href="#">设置</a></li>
            <li><a href="#">安全</a></li>
          </ul>
        </nav>

        <nav class="breadcrumb breadcrumb-chevron">
          <ul>
            <li><a href="#">主页</a></li>
            <li><a href="#">分类</a></li>
            <li><a href="#">当前页面</a></li>
          </ul>
        </nav>
      </div>
    </DocsSection>

    <!-- RTL 示例 -->
    <DocsSection title="RTL 方向支持">
      <div dir="rtl">
        <nav class="breadcrumb">
          <ul>
            <li><a href="#">الصفحة الرئيسية</a></li>
            <li><a href="#">الفئة</a></li>
            <li><a href="#">المنتج</a></li>
          </ul>
        </nav>
      </div>
    </DocsSection>
  </DocsContainer>
</template>
