<script setup lang="ts">
import DocsHeader from '@/components/zcomp/DocsHeader.vue'
import DocsSection from '@/components/zcomp/DocsSection.vue'
import ApiReference from '@/components/zcomp/ApiReference.vue'
import DocsContainer from '@/components/zcomp/DocsContainer.vue'

const apiClasses = [
  {
    category: '基础',
    className: 'kbd',
    description: '键盘快捷键',
    isCategoryStart: true,
  },
  {
    category: '尺寸',
    className: 'kbd-xs',
    description: '超小',
    isCategoryStart: false,
  },
  {
    category: '尺寸',
    className: 'kbd-sm',
    description: '小',
    isCategoryStart: false,
  },
  {
    category: '尺寸',
    className: 'kbd-md',
    description: '中',
    isCategoryStart: false,
  },
  {
    category: '尺寸',
    className: 'kbd-lg',
    description: '大',
    isCategoryStart: false,
  },
  {
    category: '尺寸',
    className: 'kbd-xl',
    description: '超大',
    isCategoryStart: false,
  },
]
</script>

<template>
  <DocsContainer>
    <DocsHeader title="Kbd" description="键盘快捷键组件，用于展示键盘按键和快捷键组合。" />

    <ApiReference :data="apiClasses"></ApiReference>

    <DocsSection title="基础键盘按键">
      <div class="flex flex-wrap gap-2">
        <kbd class="kbd">A</kbd>
        <kbd class="kbd">B</kbd>
        <kbd class="kbd">C</kbd>
        <kbd class="kbd">D</kbd>
        <kbd class="kbd">E</kbd>
      </div>
    </DocsSection>

    <DocsSection title="快捷键组合">
      <div class="space-y-3">
        <div>
          <p class="text-sm text-base-content/60 mb-2">保存文件</p>
          <div class="flex gap-1">
            <kbd class="kbd">Ctrl</kbd>
            <span>+</span>
            <kbd class="kbd">S</kbd>
          </div>
        </div>

        <div>
          <p class="text-sm text-base-content/60 mb-2">打开文件</p>
          <div class="flex gap-1">
            <kbd class="kbd">Ctrl</kbd>
            <span>+</span>
            <kbd class="kbd">O</kbd>
          </div>
        </div>

        <div>
          <p class="text-sm text-base-content/60 mb-2">撤销</p>
          <div class="flex gap-1">
            <kbd class="kbd">Ctrl</kbd>
            <span>+</span>
            <kbd class="kbd">Z</kbd>
          </div>
        </div>

        <div>
          <p class="text-sm text-base-content/60 mb-2">Mac 快捷键</p>
          <div class="flex gap-1">
            <kbd class="kbd">⌘</kbd>
            <span>+</span>
            <kbd class="kbd">C</kbd>
          </div>
        </div>
      </div>
    </DocsSection>

    <DocsSection title="尺寸">
      <div class="space-y-4">
        <div>
          <p class="text-sm text-base-content/60 mb-2">超小 (xs)</p>
          <div class="flex gap-2">
            <kbd class="kbd kbd-xs">A</kbd>
            <kbd class="kbd kbd-xs">B</kbd>
            <kbd class="kbd kbd-xs">C</kbd>
          </div>
        </div>

        <div>
          <p class="text-sm text-base-content/60 mb-2">小 (sm)</p>
          <div class="flex gap-2">
            <kbd class="kbd kbd-sm">A</kbd>
            <kbd class="kbd kbd-sm">B</kbd>
            <kbd class="kbd kbd-sm">C</kbd>
          </div>
        </div>

        <div>
          <p class="text-sm text-base-content/60 mb-2">中 (md) - 默认</p>
          <div class="flex gap-2">
            <kbd class="kbd kbd-md">A</kbd>
            <kbd class="kbd kbd-md">B</kbd>
            <kbd class="kbd kbd-md">C</kbd>
          </div>
        </div>

        <div>
          <p class="text-sm text-base-content/60 mb-2">大 (lg)</p>
          <div class="flex gap-2">
            <kbd class="kbd kbd-lg">A</kbd>
            <kbd class="kbd kbd-lg">B</kbd>
            <kbd class="kbd kbd-lg">C</kbd>
          </div>
        </div>

        <div>
          <p class="text-sm text-base-content/60 mb-2">超大 (xl)</p>
          <div class="flex gap-2">
            <kbd class="kbd kbd-xl">A</kbd>
            <kbd class="kbd kbd-xl">B</kbd>
            <kbd class="kbd kbd-xl">C</kbd>
          </div>
        </div>
      </div>
    </DocsSection>

    <DocsSection title="功能键">
      <div class="flex flex-wrap gap-2">
        <kbd class="kbd">Enter</kbd>
        <kbd class="kbd">Shift</kbd>
        <kbd class="kbd">Tab</kbd>
        <kbd class="kbd">Esc</kbd>
        <kbd class="kbd">Space</kbd>
        <kbd class="kbd">Backspace</kbd>
        <kbd class="kbd">Delete</kbd>
        <kbd class="kbd">Page Up</kbd>
        <kbd class="kbd">Page Down</kbd>
      </div>
    </DocsSection>

    <DocsSection title="特殊符号">
      <div class="flex flex-wrap gap-2">
        <kbd class="kbd">↑</kbd>
        <kbd class="kbd">↓</kbd>
        <kbd class="kbd">←</kbd>
        <kbd class="kbd">→</kbd>
        <kbd class="kbd">⌘</kbd>
        <kbd class="kbd">⌥</kbd>
        <kbd class="kbd">⇧</kbd>
        <kbd class="kbd">⌃</kbd>
      </div>
    </DocsSection>

    <DocsSection title="数字键盘">
      <div class="space-y-2">
        <div class="flex gap-1">
          <kbd class="kbd">1</kbd>
          <kbd class="kbd">2</kbd>
          <kbd class="kbd">3</kbd>
          <kbd class="kbd">4</kbd>
          <kbd class="kbd">5</kbd>
        </div>
        <div class="flex gap-1">
          <kbd class="kbd">Q</kbd>
          <kbd class="kbd">W</kbd>
          <kbd class="kbd">E</kbd>
          <kbd class="kbd">R</kbd>
          <kbd class="kbd">T</kbd>
        </div>
      </div>
    </DocsSection>

    <DocsSection title="编辑快捷键">
      <div class="space-y-2">
        <p class="text-sm font-semibold">常用编辑快捷键</p>
        <div class="grid grid-cols-2 gap-2">
          <div class="flex items-center gap-2">
            <div class="flex gap-1">
              <kbd class="kbd kbd-sm">Ctrl</kbd>
              <span class="text-xs">+</span>
              <kbd class="kbd kbd-sm">X</kbd>
            </div>
            <span class="text-sm">剪切</span>
          </div>
          <div class="flex items-center gap-2">
            <div class="flex gap-1">
              <kbd class="kbd kbd-sm">Ctrl</kbd>
              <span class="text-xs">+</span>
              <kbd class="kbd kbd-sm">C</kbd>
            </div>
            <span class="text-sm">复制</span>
          </div>
          <div class="flex items-center gap-2">
            <div class="flex gap-1">
              <kbd class="kbd kbd-sm">Ctrl</kbd>
              <span class="text-xs">+</span>
              <kbd class="kbd kbd-sm">V</kbd>
            </div>
            <span class="text-sm">粘贴</span>
          </div>
          <div class="flex items-center gap-2">
            <div class="flex gap-1">
              <kbd class="kbd kbd-sm">Ctrl</kbd>
              <span class="text-xs">+</span>
              <kbd class="kbd kbd-sm">A</kbd>
            </div>
            <span class="text-sm">全选</span>
          </div>
        </div>
      </div>
    </DocsSection>

    <DocsSection title="游戏控制">
      <div class="space-y-2">
        <p class="text-sm font-semibold">WASD 移动</p>
        <div class="flex flex-col items-center gap-1">
          <div class="flex gap-1">
            <span class="w-6"></span>
            <kbd class="kbd">W</kbd>
            <span class="w-6"></span>
          </div>
          <div class="flex gap-1">
            <kbd class="kbd">A</kbd>
            <kbd class="kbd">S</kbd>
            <kbd class="kbd">D</kbd>
          </div>
        </div>
      </div>
    </DocsSection>

    <DocsSection title="帮助文档中的使用">
      <div class="card card-bordered">
        <div class="card-body space-y-3">
          <h3 class="card-title">键盘快捷键</h3>

          <div>
            <p class="font-semibold text-sm mb-2">导航</p>
            <ul class="space-y-1 text-sm">
              <li class="flex justify-between">
                <span>下一个</span>
                <kbd class="kbd kbd-sm">J</kbd>
              </li>
              <li class="flex justify-between">
                <span>上一个</span>
                <kbd class="kbd kbd-sm">K</kbd>
              </li>
              <li class="flex justify-between">
                <span>搜索</span>
                <kbd class="kbd kbd-sm">/</kbd>
              </li>
            </ul>
          </div>

          <div>
            <p class="font-semibold text-sm mb-2">编辑</p>
            <ul class="space-y-1 text-sm">
              <li class="flex justify-between items-center gap-2">
                <span>保存</span>
                <div class="flex gap-0.5">
                  <kbd class="kbd kbd-sm">Ctrl</kbd>
                  <span>+</span>
                  <kbd class="kbd kbd-sm">S</kbd>
                </div>
              </li>
              <li class="flex justify-between items-center gap-2">
                <span>删除</span>
                <kbd class="kbd kbd-sm">Del</kbd>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </DocsSection>
  </DocsContainer>
</template>
