<template>
  <DocsContainer>
    <DocsHeader
      title="Dropdown 下拉菜单"
      description="提供一个可展开的下拉菜单容器，支持多种显示方向。"
    />

    <ApiReference :data="apiClasses" />

    <DocsSection title="基础用法">
      <div class="grid gap-4 p-6 bg-card">
        <details class="dropdown w-36">
          <summary class="btn btn-primary">Dropdown 示例</summary>
          <div class="dropdown-content menu p-2 bg-white border rounded shadow-md">
            <li><a href="#" class="">菜单项 1</a></li>
            <li><a href="#" class="">菜单项 2</a></li>
            <li><a href="#" class="">菜单项 3</a></li>
          </div>
        </details>
      </div>
    </DocsSection>

    <DocsSection title="方向示例">
      <div class="flex flex-wrap gap-4 p-6 border">
        <details class="dropdown dropdown-bottom">
          <summary class="btn btn-sm btn-primary">向下</summary>
          <div class="dropdown-content p-2 bg-white border rounded shadow-md">
            <span>菜单内容</span>
          </div>
        </details>

        <details class="dropdown dropdown-top">
          <summary class="btn btn-sm btn-secondary">向上</summary>
          <div class="dropdown-content p-2 bg-white border rounded shadow-md">
            <span>菜单内容</span>
          </div>
        </details>

        <details class="dropdown dropdown-start">
          <summary class="btn btn-sm btn-accent">向左</summary>
          <div class="dropdown-content p-2 bg-white border rounded shadow-md">
            <span>菜单内容</span>
          </div>
        </details>

        <details class="dropdown dropdown-end">
          <summary class="btn btn-sm btn-destructive">向右</summary>
          <div class="dropdown-content p-2 bg-white border rounded shadow-md">
            <span>菜单内容</span>
          </div>
        </details>

        <details class="dropdown dropdown-center">
          <summary class="btn btn-sm btn-muted">居中</summary>
          <div class="dropdown-content p-2 bg-white border rounded shadow-md">
            <span>菜单内容</span>
          </div>
        </details>
      </div>
    </DocsSection>

    <DocsSection title="拓展 使用 Vue 指令"
      ><p class="text-sm text-destructive mb-4 w-full">
        注意：原生 &lt;details&gt;
        元素点击外部**不会**关闭。要实现外部点击关闭，请使用v-click-modal-outside或 div+v-if/v-show
        结构。
      </p>
      <div></div>

      <details class="dropdown w-96" v-click-modal-outside>
        <summary class="btn btn-primary w-64">打开操作菜单 (with v-click-modal-outside)</summary>

        <div class="dropdown-content p-2 w-48">
          <div class="p-1">
            <button class="btn btn-ghost w-full text-foreground text-sm justify-start">
              可以单击外部 (但 details原生 不支持)
            </button>
          </div>
        </div>
      </details></DocsSection
    >
  </DocsContainer>
</template>

<script lang="ts" setup>
import DocsHeader from '../zcomp/DocsHeader.vue'
import ApiReference from '../zcomp/ApiReference.vue'
import DocsContainer from '../zcomp/DocsContainer.vue'
import DocsSection from '../zcomp/DocsSection.vue'
import { vClickModalOutside } from '../../directives/vClickOutside'

const apiClasses = [
  {
    category: '基础',
    className: 'dropdown',
    description: '下拉容器基础样式，包裹 summary 和 dropdown-content。',
    isCategoryStart: true,
  },
  {
    category: '内容层',
    className: 'dropdown-content',
    description: '下拉内容容器，默认隐藏，打开时显示。',
    isCategoryStart: false,
  },
  {
    category: '方向修饰',
    className: 'dropdown-bottom / dropdown-top / dropdown-start / dropdown-end / dropdown-center',
    description: '控制下拉内容的显示方向和对齐。',
    isCategoryStart: false,
  },
]
</script>
