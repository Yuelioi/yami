<script setup lang="ts">
import DocsHeader from '@/components/zcomp/DocsHeader.vue'
import DocsSection from '@/components/zcomp/DocsSection.vue'
import ApiReference from '@/components/zcomp/ApiReference.vue'
import DocsContainer from '@/components/zcomp/DocsContainer.vue'

import { vClickModalOutside } from '../directives/vClickOutside'

const apiClasses = [
  {
    category: '基础',
    className: 'dropdown',
    description: '下拉菜单容器',
    isCategoryStart: true,
  },
  {
    category: '基础',
    className: 'dropdown-content',
    description: '下拉菜单内容',
    isCategoryStart: false,
  },
  {
    category: '方向',
    className: 'dropdown-bottom',
    description: '向下弹出',
    isCategoryStart: false,
  },
  {
    category: '方向',
    className: 'dropdown-top',
    description: '向上弹出',
    isCategoryStart: false,
  },
  {
    category: '方向',
    className: 'dropdown-start',
    description: '向左弹出',
    isCategoryStart: false,
  },
  {
    category: '方向',
    className: 'dropdown-end',
    description: '向右弹出',
    isCategoryStart: false,
  },
  {
    category: '方向',
    className: 'dropdown-center',
    description: '居中向下',
    isCategoryStart: false,
  },
  {
    category: '尺寸',
    className: 'dropdown-xs',
    description: '超小',
    isCategoryStart: false,
  },
  {
    category: '尺寸',
    className: 'dropdown-sm',
    description: '小',
    isCategoryStart: false,
  },
  {
    category: '尺寸',
    className: 'dropdown-md',
    description: '中',
    isCategoryStart: false,
  },
  {
    category: '尺寸',
    className: 'dropdown-lg',
    description: '大',
    isCategoryStart: false,
  },
  {
    category: '尺寸',
    className: 'dropdown-xl',
    description: '超大',
    isCategoryStart: false,
  },
  {
    category: '宽度',
    className: 'dropdown-fixed',
    description: '固定宽度',
    isCategoryStart: false,
  },
  {
    category: '宽度',
    className: 'dropdown-fit',
    description: '适应宽度',
    isCategoryStart: false,
  },
  {
    category: '宽度',
    className: 'dropdown-wide',
    description: '宽度',
    isCategoryStart: false,
  },
  {
    category: '箭头',
    className: 'dropdown-arrow',
    description: '带箭头指示',
    isCategoryStart: false,
  },
  {
    category: '箭头',
    className: 'dropdown-arrow-up',
    description: '箭头向上',
    isCategoryStart: false,
  },
  {
    category: '箭头',
    className: 'dropdown-arrow-down',
    description: '箭头向下',
    isCategoryStart: false,
  },
  {
    category: '交互',
    className: 'dropdown-hover',
    description: '悬停触发',
    isCategoryStart: false,
  },
]
</script>

<template>
  <DocsContainer>
    <DocsHeader title="Dropdown" description="下拉菜单组件，用于显示可选项或操作菜单。" />

    <ApiReference :data="apiClasses"></ApiReference>

    <DocsSection title="基础下拉菜单">
      <details class="dropdown dropdown-bottom">
        <summary class="btn btn-primary">打开菜单</summary>
        <div class="dropdown-content">
          <ul class="menu">
            <li><a href="#">菜单项 1</a></li>
            <li><a href="#">菜单项 2</a></li>
            <li><a href="#">菜单项 3</a></li>
          </ul>
        </div>
      </details>
    </DocsSection>

    <DocsSection title="方向">
      <div class="flex flex-wrap gap-4">
        <details class="dropdown dropdown-bottom">
          <summary class="btn btn-sm">向下</summary>
          <div class="dropdown-content">
            <ul class="menu">
              <li><a href="#">选项</a></li>
            </ul>
          </div>
        </details>

        <details class="dropdown dropdown-top">
          <summary class="btn btn-sm">向上</summary>
          <div class="dropdown-content">
            <ul class="menu">
              <li><a href="#">选项</a></li>
            </ul>
          </div>
        </details>

        <details class="dropdown dropdown-start">
          <summary class="btn btn-sm">向左</summary>
          <div class="dropdown-content">
            <ul class="menu">
              <li><a href="#">选项</a></li>
            </ul>
          </div>
        </details>

        <details class="dropdown dropdown-end">
          <summary class="btn btn-sm">向右</summary>
          <div class="dropdown-content">
            <ul class="menu">
              <li><a href="#">选项</a></li>
            </ul>
          </div>
        </details>

        <details class="dropdown dropdown-center">
          <summary class="btn btn-sm">居中</summary>
          <div class="dropdown-content">
            <ul class="menu">
              <li><a href="#">选项</a></li>
            </ul>
          </div>
        </details>
      </div>
    </DocsSection>

    <DocsSection title="带箭头">
      <details class="dropdown dropdown-bottom dropdown-arrow">
        <summary class="btn btn-primary">选择选项</summary>
        <div class="dropdown-content">
          <ul class="menu">
            <li><a href="#">选项 A</a></li>
            <li><a href="#">选项 B</a></li>
            <li><a href="#">选项 C</a></li>
          </ul>
        </div>
      </details>
    </DocsSection>

    <DocsSection title="尺寸">
      <div class="space-x-3">
        <details class="dropdown dropdown-xs dropdown-bottom">
          <summary class="btn btn-xs">超小</summary>
          <div class="dropdown-content">
            <ul class="menu">
              <li><a href="#">项目</a></li>
            </ul>
          </div>
        </details>

        <details class="dropdown dropdown-sm dropdown-bottom">
          <summary class="btn btn-sm">小</summary>
          <div class="dropdown-content">
            <ul class="menu">
              <li><a href="#">项目</a></li>
            </ul>
          </div>
        </details>

        <details class="dropdown dropdown-md dropdown-bottom">
          <summary class="btn btn-md">中</summary>
          <div class="dropdown-content">
            <ul class="menu">
              <li><a href="#">项目</a></li>
            </ul>
          </div>
        </details>

        <details class="dropdown dropdown-lg dropdown-bottom">
          <summary class="btn btn-lg">大</summary>
          <div class="dropdown-content">
            <ul class="menu">
              <li><a href="#">项目</a></li>
            </ul>
          </div>
        </details>
      </div>
    </DocsSection>

    <DocsSection title="宽度变体">
      <div class="space-x-3">
        <details class="dropdown dropdown-fixed dropdown-bottom w-40">
          <summary class="btn w-full">固定宽度</summary>
          <div class="dropdown-content">
            <ul class="menu">
              <li><a href="#">选项 1</a></li>
              <li><a href="#">选项 2</a></li>
            </ul>
          </div>
        </details>

        <details class="dropdown dropdown-fit dropdown-bottom w-40">
          <summary class="btn w-full">适应宽度</summary>
          <div class="dropdown-content">
            <ul class="menu">
              <li><a href="#">选项 1</a></li>
              <li><a href="#">选项 2</a></li>
            </ul>
          </div>
        </details>

        <details class="dropdown dropdown-wide dropdown-bottom w-40">
          <summary class="btn w-full">宽度</summary>
          <div class="dropdown-content">
            <ul class="menu">
              <li><a href="#">选项 1 - 较长的文本</a></li>
              <li><a href="#">选项 2 - 较长的文本</a></li>
            </ul>
          </div>
        </details>
      </div>
    </DocsSection>

    <!-- Hover -->
    <DocsSection title="Hover 触发">
      <div class="flex gap-4">
        <div class="dropdown dropdown-hover">
          <button class="btn btn-primary">Hover Me</button>
          <div class="dropdown-content">
            <ul class="menu">
              <li><a href="#">菜单项 1</a></li>
              <li><a href="#">菜单项 2</a></li>
              <li><a href="#">菜单项 3</a></li>
            </ul>
          </div>
        </div>
      </div>
    </DocsSection>

    <DocsSection title="禁用项">
      <details class="dropdown dropdown-bottom">
        <summary class="btn btn-primary">操作菜单</summary>
        <div class="dropdown-content">
          <ul class="menu">
            <li><a href="#">编辑</a></li>
            <li class="menu-disabled"><a href="#">删除</a></li>
            <li><a href="#">复制</a></li>
            <li><a href="#">分享</a></li>
          </ul>
        </div>
      </details>
    </DocsSection>

    <DocsSection title="复杂菜单">
      <details class="dropdown dropdown-bottom dropdown-wide w-64">
        <summary class="btn">更多选项</summary>
        <div class="dropdown-content">
          <div class="p-3 space-y-2">
            <div class="font-semibold">编辑</div>
            <ul class="menu menu-compact">
              <li><a href="#">撤销</a></li>
              <li><a href="#">重做</a></li>
              <li><a href="#">剪切</a></li>
            </ul>
            <div class="divider my-2"></div>
            <div class="font-semibold">视图</div>
            <ul class="menu menu-compact">
              <li><a href="#">放大</a></li>
              <li><a href="#">缩小</a></li>
              <li><a href="#">适应屏幕</a></li>
            </ul>
          </div>
        </div>
      </details>
    </DocsSection>

    <!-- 行为说明 -->
    <DocsSection title="行为说明">
      <p class="text-sm text-base-content/60 max-w-2xl leading-relaxed">
        Dropdown 基于原生 <code>&lt;details&gt;</code> 元素实现，默认情况下：
      </p>
      <ul class="list-disc pl-5 mt-2 text-sm text-base-content/60">
        <li>点击 summary 可切换展开状态</li>
        <li>点击外部 <strong>不会</strong> 自动关闭</li>
        <li>支持键盘与可访问性特性</li>
      </ul>

      <p class="text-sm text-base-content/60 mt-4">
        若需要「点击外部关闭」行为，建议结合 Vue 指令使用：
      </p>

      <details class="dropdown mt-3 w-72" v-click-modal-outside>
        <summary class="btn btn-primary w-full">带 v-click-modal-outside</summary>
        <div class="dropdown-content p-2">
          <button class="btn btn-ghost w-full justify-start text-sm">点击外部可关闭</button>
        </div>
      </details>
    </DocsSection>
  </DocsContainer>
</template>
