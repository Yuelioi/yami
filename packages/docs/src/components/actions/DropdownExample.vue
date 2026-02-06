<script setup lang="ts">
import DocsHeader from '../zcomp/DocsHeader.vue'
import DocsContainer from '../zcomp/DocsContainer.vue'
import DocsSection from '../zcomp/DocsSection.vue'
import ApiReference from '../zcomp/ApiReference.vue'
import { vClickModalOutside } from '../../directives/vClickOutside'

const apiClasses = [
  /* ================= 基础 ================= */
  {
    category: '基础',
    className: 'dropdown',
    description: '下拉菜单容器，基于原生 <details> / <summary> 结构。',
    isCategoryStart: true,
  },
  {
    category: '基础',
    className: 'dropdown-content',
    description: '下拉内容容器，默认隐藏，展开时显示。',
  },

  /* ================= 方向 ================= */
  {
    category: '方向',
    className: 'dropdown-bottom',
    description: '向下展开（默认）。',
    isCategoryStart: true,
  },
  { category: '方向', className: 'dropdown-top', description: '向上展开。' },
  { category: '方向', className: 'dropdown-start', description: '向左展开。' },
  { category: '方向', className: 'dropdown-end', description: '向右展开。' },
  { category: '方向', className: 'dropdown-center', description: '水平居中向下展开。' },

  /* ================= 尺寸 ================= */
  {
    category: '尺寸',
    className: 'dropdown-xs',
    description: '超小尺寸菜单。',
    isCategoryStart: true,
  },
  { category: '尺寸', className: 'dropdown-sm', description: '小尺寸菜单。' },
  { category: '尺寸', className: 'dropdown-md', description: '中等尺寸菜单（默认）。' },
  { category: '尺寸', className: 'dropdown-lg', description: '大尺寸菜单。' },
  { category: '尺寸', className: 'dropdown-xl', description: '超大尺寸菜单。' },

  /* ================= 交互 ================= */
  {
    category: '交互',
    className: 'dropdown-hover',
    description: 'Hover 触发下拉（不依赖 <summary> 点击）。',
    isCategoryStart: true,
  },

  /* ================= 箭头 ================= */
  {
    category: '箭头指示',
    className: 'dropdown-arrow',
    description: '在 summary 后显示箭头指示器。',
    isCategoryStart: true,
  },
  { category: '箭头指示', className: 'dropdown-arrow-up', description: '箭头初始朝上。' },
  { category: '箭头指示', className: 'dropdown-arrow-down', description: '箭头初始朝下。' },

  /* ================= 动画 ================= */
  {
    category: '动画',
    className: 'dropdown-fade',
    description: '淡入淡出动画。',
    isCategoryStart: true,
  },
  { category: '动画', className: 'dropdown-slide-up', description: '向上滑入。' },
  { category: '动画', className: 'dropdown-slide-down', description: '向下滑入。' },
  { category: '动画', className: 'dropdown-scale', description: '缩放展开动画。' },

  /* ================= 宽度 ================= */
  {
    category: '宽度',
    className: 'dropdown-fixed',
    description: '固定宽度（通过 --dropdown-width）。',
    isCategoryStart: true,
  },
  { category: '宽度', className: 'dropdown-fit', description: '宽度与触发元素一致。' },
  { category: '宽度', className: 'dropdown-wide', description: '宽菜单（适合操作面板）。' },
]
</script>

<template>
  <DocsContainer>
    <DocsHeader
      title="Dropdown 下拉菜单"
      description="基于原生 <details> 的下拉菜单组件，用于操作菜单、导航菜单、筛选选项等场景。"
    />

    <ApiReference :data="apiClasses" />

    <!-- 基础 -->
    <DocsSection title="基础用法">
      <details class="dropdown dropdown-bottom w-40">
        <summary class="btn btn-primary w-full">Dropdown 示例</summary>
        <div class="dropdown-content">
          <ul class="menu">
            <li><a href="#">菜单项 1</a></li>
            <li><a href="#">菜单项 2</a></li>
            <li class="menu-disabled"><a href="#">禁用项</a></li>
          </ul>
        </div>
      </details>
    </DocsSection>

    <!-- 方向 -->
    <DocsSection title="展开方向">
      <div class="flex gap-4 flex-wrap">
        <details class="dropdown dropdown-bottom">
          <summary class="btn btn-sm btn-primary">Bottom</summary>
          <div class="dropdown-content p-2">向下</div>
        </details>

        <details class="dropdown dropdown-top">
          <summary class="btn btn-sm btn-secondary">Top</summary>
          <div class="dropdown-content p-2">向上</div>
        </details>

        <details class="dropdown dropdown-start">
          <summary class="btn btn-sm btn-accent">Start</summary>
          <div class="dropdown-content p-2">向左</div>
        </details>

        <details class="dropdown dropdown-end">
          <summary class="btn btn-sm btn-destructive">End</summary>
          <div class="dropdown-content p-2">向右</div>
        </details>

        <details class="dropdown dropdown-center">
          <summary class="btn btn-sm">Center</summary>
          <div class="dropdown-content p-2">居中</div>
        </details>
      </div>
    </DocsSection>

    <!-- 尺寸 -->
    <DocsSection title="尺寸变体">
      <div class="flex gap-3 flex-wrap">
        <details class="dropdown dropdown-xs">
          <summary class="btn btn-sm">XS</summary>
          <div class="dropdown-content">
            <ul class="menu">
              <li><a>Item</a></li>
            </ul>
          </div>
        </details>

        <details class="dropdown dropdown-sm">
          <summary class="btn btn-sm">SM</summary>
          <div class="dropdown-content">
            <ul class="menu">
              <li><a>Item</a></li>
            </ul>
          </div>
        </details>

        <details class="dropdown dropdown-md">
          <summary class="btn btn-sm">MD</summary>
          <div class="dropdown-content">
            <ul class="menu">
              <li><a>Item</a></li>
            </ul>
          </div>
        </details>

        <details class="dropdown dropdown-lg">
          <summary class="btn btn-sm">LG</summary>
          <div class="dropdown-content">
            <ul class="menu">
              <li><a>Item</a></li>
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
          <div class="dropdown-content p-2">
            <span class="text-sm">Hover 打开</span>
          </div>
        </div>
      </div>
    </DocsSection>

    <!-- 动画 -->
    <DocsSection title="动画变体">
      <div class="flex gap-4 flex-wrap">
        <details class="dropdown dropdown-scale">
          <summary class="btn btn-sm">Scale</summary>
          <div class="dropdown-content p-2">Scale</div>
        </details>

        <details class="dropdown dropdown-slide-up">
          <summary class="btn btn-sm">Slide Up</summary>
          <div class="dropdown-content p-2">Slide</div>
        </details>

        <details class="dropdown dropdown-fade">
          <summary class="btn btn-sm">Fade</summary>
          <div class="dropdown-content p-2">Fade</div>
        </details>
      </div>
    </DocsSection>

    <!-- 宽度 -->
    <DocsSection title="宽度控制">
      <div class="flex gap-4 flex-wrap">
        <details class="dropdown dropdown-fixed" style="--dropdown-width: 16rem">
          <summary class="btn btn-sm">Fixed</summary>
          <div class="dropdown-content p-2">固定宽度</div>
        </details>

        <details class="dropdown dropdown-fit w-48">
          <summary class="btn btn-sm w-full">Fit</summary>
          <div class="dropdown-content p-2">匹配按钮宽度</div>
        </details>

        <details class="dropdown dropdown-wide">
          <summary class="btn btn-sm">Wide</summary>
          <div class="dropdown-content p-2">宽菜单</div>
        </details>
      </div>
    </DocsSection>

    <!-- 行为说明 -->
    <DocsSection title="行为说明">
      <p class="text-sm text-muted-foreground max-w-2xl leading-relaxed">
        Dropdown 基于原生 <code>&lt;details&gt;</code> 元素实现，默认情况下：
      </p>
      <ul class="list-disc pl-5 mt-2 text-sm text-muted-foreground">
        <li>点击 summary 可切换展开状态</li>
        <li>点击外部 <strong>不会</strong> 自动关闭</li>
        <li>支持键盘与可访问性特性</li>
      </ul>

      <p class="text-sm text-muted-foreground mt-4">
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
