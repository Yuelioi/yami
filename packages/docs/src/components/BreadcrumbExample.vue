<script setup lang="ts">
import DocsHeader from '@/components/zcomp/DocsHeader.vue'
import DocsSection from '@/components/zcomp/DocsSection.vue'
import ApiReference from '@/components/zcomp/ApiReference.vue'
import DocsContainer from '@/components/zcomp/DocsContainer.vue'

const apiClasses = [
  {
    category: '基础',
    className: 'breadcrumbs',
    description: '面包屑容器',
    isCategoryStart: true,
  },
  {
    category: '基础',
    className: 'breadcrumbs-separator',
    description: '分隔符样式',
    isCategoryStart: false,
  },
]
</script>

<template>
  <DocsContainer>
    <DocsHeader title="Breadcrumbs" description="面包屑导航，显示用户的浏览层级。" />

    <ApiReference :data="apiClasses"></ApiReference>

    <DocsSection title="基础">
      <nav class="breadcrumbs">
        <ul>
          <li>
            <a href="#">首页</a>
          </li>
          <li class="breadcrumbs-separator rtl:rotate-180">
            <span class="icon-[tabler--chevron-right]"></span>
          </li>

          <li>
            <a href="#">文档</a>
          </li>
          <li class="breadcrumbs-separator rtl:rotate-180">
            <span class="icon-[tabler--chevron-right]"></span>
          </li>

          <li>
            <a href="#">组件</a>
          </li>
          <li class="breadcrumbs-separator rtl:rotate-180">
            <span class="icon-[tabler--chevron-right]"></span>
          </li>

          <li>面包屑</li>
        </ul>
      </nav>
    </DocsSection>

    <DocsSection title="带图标">
      <nav class="breadcrumbs">
        <ul>
          <li>
            <a href="#">
              <li class="breadcrumbs-separator rtl:rotate-180">
                <span class="icon-[tabler--folder]"></span>
              </li>

              首页
            </a>
          </li>
          <li class="breadcrumbs-separator rtl:rotate-180">
            <span class="icon-[tabler--chevron-right]"></span>
          </li>

          <li>
            <a href="#"> <span class="icon-[tabler--file]"></span> 文档</a>
          </li>
          <li class="breadcrumbs-separator rtl:rotate-180">
            <span class="icon-[tabler--chevron-right]"></span>
          </li>

          <li>面包屑</li>
        </ul>
      </nav>
    </DocsSection>

    <DocsSection title="自定义分隔符">
      <div>
        <p class="text-sm text-base-content/60 mb-3">斜杠分隔符</p>
        <nav class="breadcrumbs">
          <ul>
            <li><a href="#">首页</a></li>
            <li>
              <span class="breadcrumbs-separator">/</span>
              <a href="#">文档</a>
            </li>
            <li>
              <span class="breadcrumbs-separator">/</span>
              面包屑
            </li>
          </ul>
        </nav>
      </div>

      <div>
        <p class="text-sm text-base-content/60 mb-3">箭头分隔符</p>
        <nav class="breadcrumbs">
          <ul>
            <li><a href="#">首页</a></li>
            <li>
              <span class="breadcrumbs-separator">→</span>
              <a href="#">文档</a>
            </li>
            <li>
              <span class="breadcrumbs-separator">→</span>
              面包屑
            </li>
          </ul>
        </nav>
      </div>

      <div>
        <p class="text-sm text-base-content/60 mb-3">点号分隔符</p>
        <nav class="breadcrumbs">
          <ul>
            <li><a href="#">首页</a></li>
            <li>
              <span class="breadcrumbs-separator">·</span>
              <a href="#">文档</a>
            </li>
            <li>
              <span class="breadcrumbs-separator">·</span>
              面包屑
            </li>
          </ul>
        </nav>
      </div>
    </DocsSection>

    <DocsSection title="多个链接">
      <div class="breadcrumbs">
        <ol>
          <li>
            <a href="#"> <span class="icon-[tabler--folder] size-5"></span>Home</a>
          </li>
          <li class="breadcrumbs-separator rtl:rotate-180">
            <span class="icon-[tabler--chevron-right]"></span>
          </li>
          <li>
            <a href="#" aria-label="More Pages"><span class="icon-[tabler--dots]"></span></a>
          </li>
          <li class="breadcrumbs-separator rtl:rotate-180">
            <span class="icon-[tabler--chevron-right]"></span>
          </li>
          <li aria-current="page">
            <span class="icon-[tabler--file] me-1 size-5"></span>
            Breadcrumb
          </li>
        </ol>
      </div>
    </DocsSection>
  </DocsContainer>
</template>
