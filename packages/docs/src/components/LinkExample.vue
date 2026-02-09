<script setup lang="ts">
import DocsHeader from '@/components/zcomp/DocsHeader.vue'
import DocsSection from '@/components/zcomp/DocsSection.vue'
import ApiReference from '@/components/zcomp/ApiReference.vue'
import DocsContainer from '@/components/zcomp/DocsContainer.vue'

const apiClasses = [
  {
    category: '基础',
    className: 'link',
    description: '链接容器',
    isCategoryStart: true,
  },
  {
    category: '样式',
    className: 'link-hover',
    description: '悬停时显示下划线',
    isCategoryStart: false,
  },
  {
    category: '样式',
    className: 'link-animated',
    description: '动画下划线',
    isCategoryStart: false,
  },
  {
    category: '颜色',
    className: 'link-primary',
    description: '主色',
    isCategoryStart: false,
  },
  {
    category: '颜色',
    className: 'link-secondary',
    description: '次色',
    isCategoryStart: false,
  },
  {
    category: '颜色',
    className: 'link-accent',
    description: '强调色',
    isCategoryStart: false,
  },
  {
    category: '颜色',
    className: 'link-neutral',
    description: '中性色',
    isCategoryStart: false,
  },
  {
    category: '颜色',
    className: 'link-success',
    description: '成功色',
    isCategoryStart: false,
  },
  {
    category: '颜色',
    className: 'link-info',
    description: '信息色',
    isCategoryStart: false,
  },
  {
    category: '颜色',
    className: 'link-warning',
    description: '警告色',
    isCategoryStart: false,
  },
  {
    category: '颜色',
    className: 'link-error',
    description: '错误色',
    isCategoryStart: false,
  },
]
</script>

<template>
  <DocsContainer>
    <DocsHeader title="Link" description="链接组件，用于导航和跳转。" />

    <ApiReference :data="apiClasses"></ApiReference>

    <DocsSection title="基础链接">
      <div class="flex flex-wrap gap-4">
        <a href="#" class="link">基础链接</a>
        <a href="#" class="link link-primary">主色链接</a>
        <a href="#" class="link link-secondary">次色链接</a>
      </div>
    </DocsSection>

    <DocsSection title="颜色变体">
      <div class="space-y-2">
        <p><a href="#" class="link">默认</a></p>
        <p><a href="#" class="link link-primary">主色</a></p>
        <p><a href="#" class="link link-secondary">次色</a></p>
        <p><a href="#" class="link link-accent">强调色</a></p>
        <p><a href="#" class="link link-neutral">中性色</a></p>
        <p><a href="#" class="link link-success">成功色</a></p>
        <p><a href="#" class="link link-info">信息色</a></p>
        <p><a href="#" class="link link-warning">警告色</a></p>
        <p><a href="#" class="link link-error">错误色</a></p>
      </div>
    </DocsSection>

    <DocsSection title="悬停下划线">
      <div class="space-y-2">
        <p>将鼠标悬停在链接上以显示下划线：</p>
        <p>
          这是一个
          <a href="#" class="link link-hover link-primary">悬停链接</a>
          ，只在鼠标悬停时显示下划线。
        </p>
        <p>
          另一个
          <a href="#" class="link link-hover link-secondary">悬停链接</a>
          示例。
        </p>
      </div>
    </DocsSection>

    <DocsSection title="动画下划线">
      <div class="space-y-4">
        <p>悬停以查看动画效果：</p>
        <p>
          <a href="#" class="link link-animated link-primary">动画链接</a>
        </p>
        <p>
          <a href="#" class="link link-animated link-secondary">另一个动画链接</a>
        </p>
        <p>
          <a href="#" class="link link-animated link-accent">强调色动画链接</a>
        </p>
      </div>
    </DocsSection>

    <DocsSection title="禁用状态">
      <div class="space-y-2">
        <p>
          <a href="#" class="link link-primary disabled">禁用的主色链接</a>
        </p>
        <p>
          <a href="#" class="link link-secondary" disabled>禁用的次色链接</a>
        </p>
      </div>
    </DocsSection>

    <DocsSection title="在段落中的使用">
      <p class="text-justify">
        这是一段包含多个链接的段落文本。您可以在这里添加
        <a href="#" class="link link-primary">内联链接</a>
        来指向其他页面或资源。链接会自动继承周围文本的样式，并在悬停时改变颜色。 这种方式可以
        <a href="#" class="link link-secondary">无缝地整合链接</a>
        到您的内容中，而不会破坏阅读流。
      </p>
    </DocsSection>

    <DocsSection title="导航列表">
      <nav>
        <ul class="space-y-2">
          <li>
            <a href="#" class="link link-primary">首页</a>
          </li>
          <li>
            <a href="#" class="link link-primary">关于我们</a>
          </li>
          <li>
            <a href="#" class="link link-primary">服务</a>
          </li>
          <li>
            <a href="#" class="link link-primary">文档</a>
          </li>
          <li>
            <a href="#" class="link link-primary">联系</a>
          </li>
        </ul>
      </nav>
    </DocsSection>

    <DocsSection title="面包屑导航">
      <nav class="flex items-center gap-2 text-sm">
        <a href="#" class="link link-hover link-primary">首页</a>
        <span>/</span>
        <a href="#" class="link link-hover link-primary">产品</a>
        <span>/</span>
        <a href="#" class="link link-hover link-primary">分类</a>
        <span>/</span>
        <span class="text-base-content">产品详情</span>
      </nav>
    </DocsSection>

    <DocsSection title="脚注链接">
      <div class="space-y-3 text-sm">
        <p>
          更多信息请参考
          <a href="#" class="link link-info">[1]</a>
          和
          <a href="#" class="link link-info">[2]</a>
          。
        </p>
        <div class="border-t pt-3 mt-4">
          <p>
            <a href="#" class="link link-info">[1]</a>
            参考资料标题
          </p>
          <p>
            <a href="#" class="link link-info">[2]</a>
            参考资料标题
          </p>
        </div>
      </div>
    </DocsSection>

    <DocsSection title="操作链接">
      <div class="space-y-2 text-sm">
        <div class="flex items-center justify-between p-3 bg-base-200 rounded">
          <span>项目名称</span>
          <div class="flex gap-2">
            <a href="#" class="link link-primary">编辑</a>
            <a href="#" class="link link-error">删除</a>
          </div>
        </div>
        <div class="flex items-center justify-between p-3 bg-base-200 rounded">
          <span>另一个项目</span>
          <div class="flex gap-2">
            <a href="#" class="link link-primary">编辑</a>
            <a href="#" class="link link-error">删除</a>
          </div>
        </div>
      </div>
    </DocsSection>

    <DocsSection title="结合其他元素">
      <div class="space-y-4">
        <div class="card card-bordered">
          <div class="card-body">
            <h3 class="card-title">文章标题</h3>
            <p>这是文章的摘要内容...</p>
            <div class="card-actions justify-end">
              <a href="#" class="link link-primary">阅读全文</a>
            </div>
          </div>
        </div>

        <div class="alert">
          <div>
            <h3 class="font-bold">提示</h3>
            <div class="text-sm">
              了解更多信息，请访问
              <a href="#" class="link link-info">帮助文档</a>
            </div>
          </div>
        </div>
      </div>
    </DocsSection>
  </DocsContainer>
</template>
