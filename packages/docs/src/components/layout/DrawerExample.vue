<script setup lang="ts">
import DocsHeader from '../zcomp/DocsHeader.vue'
import DocsContainer from '../zcomp/DocsContainer.vue'
import DocsSection from '../zcomp/DocsSection.vue'
import ApiReference from '../zcomp/ApiReference.vue'

const apiClasses = [
  {
    category: '基础',
    className: 'drawer',
    description: 'Drawer 容器，包含主内容和侧边栏。',
    isCategoryStart: true,
  },
  {
    category: '基础',
    className: 'drawer-content',
    description: '主内容区。',
    isCategoryStart: false,
  },
  {
    category: '基础',
    className: 'drawer-side',
    description: '侧边栏，包含 overlay 和实际抽屉内容。',
    isCategoryStart: false,
  },
  {
    category: '控制开关',
    className: 'drawer-toggle',
    description: '控制抽屉开关的 input 元素。',
    isCategoryStart: true,
  },
  {
    category: '方向',
    className: 'drawer-end',
    description: '右侧抽屉布局。',
    isCategoryStart: true,
  },
  {
    category: '响应式',
    className: 'drawer-open',
    description: '始终打开状态，适合响应式布局。',
    isCategoryStart: true,
  },
]
</script>

<template>
  <DocsContainer>
    <DocsHeader
      title="Drawer 抽屉组件"
      description="用于实现侧边栏抽屉效果的容器组件，支持左侧/右侧、开关控制、响应式始终打开、Overlay 点击关闭等功能。"
    />

    <ApiReference :data="apiClasses" />

    <!-- 左侧抽屉 -->
    <DocsSection title="左侧抽屉示例">
      <div class="drawer">
        <input id="drawer-left" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content p-4 bg-muted">
          <label for="drawer-left" class="btn btn-primary mb-4">打开抽屉</label>
          <p>这里是主内容区，可以滚动显示页面内容。</p>
        </div>
        <div class="drawer-side">
          <label for="drawer-left" aria-label="close sidebar" class="drawer-overlay"></label>
          <ul class="menu bg-card min-h-full w-80 p-4">
            <li class="cursor-pointer hover:bg-muted p-2 rounded">菜单项 1</li>
            <li class="cursor-pointer hover:bg-muted p-2 rounded">菜单项 2</li>
            <li class="cursor-pointer hover:bg-muted p-2 rounded">菜单项 3</li>
          </ul>
        </div>
      </div>
    </DocsSection>

    <!-- 右侧抽屉 -->
    <DocsSection title="右侧抽屉示例">
      <div class="drawer drawer-end">
        <input id="drawer-right" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content p-4 bg-muted">
          <label for="drawer-right" class="btn btn-primary mb-4">打开右侧抽屉</label>
          <p>主内容区，右侧抽屉滑出效果。</p>
        </div>
        <div class="drawer-side">
          <label for="drawer-right" aria-label="close sidebar" class="drawer-overlay"></label>
          <ul class="menu bg-card min-h-full w-80 p-4">
            <li class="cursor-pointer hover:bg-muted p-2 rounded">选项 A</li>
            <li class="cursor-pointer hover:bg-muted p-2 rounded">选项 B</li>
            <li class="cursor-pointer hover:bg-muted p-2 rounded">选项 C</li>
          </ul>
        </div>
      </div>
    </DocsSection>
    <!-- 响应式始终打开 -->
    <DocsSection title="自适应" description="小屏隐藏, 大屏始终展开 lg:drawer-open">
      <div class="drawer lg:drawer-open">
        <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content flex flex-col items-center justify-center">
          <!-- Page content here -->
          <label for="my-drawer-3" class="btn drawer-button lg:hidden"> Open drawer </label>
        </div>
        <div class="drawer-side h-64">
          <label for="my-drawer-3" aria-label="close sidebar" class="drawer-overlay"></label>
          <ul class="menu bg-card w-80 p-4">
            <!-- Sidebar content here -->
            <li><a>Sidebar Item 1</a></li>
            <li><a>Sidebar Item 2</a></li>
          </ul>
        </div>
      </div>
    </DocsSection>

    <!-- 侧边栏示例 -->
    <DocsSection title="侧边栏示例">
      <div class="drawer drawer-open">
        <input id="my-drawer-4" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content">
          <!-- Page content here -->
        </div>

        <div class="drawer-side is-drawer-close:overflow-visible bg-card h-32">
          <label for="my-drawer-4" aria-label="close sidebar" class="drawer-overlay"></label>
          <div class="is-drawer-close:w-14 is-drawer-open:w-64 h-full flex flex-col items-start">
            <!-- Sidebar content here -->
            <ul class="menu w-full grow">
              <!-- list item -->

              <li class="is-drawer-close:tooltip is-drawer-close:tooltip-right">
                <button class="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    stroke-linejoin="round"
                    stroke-linecap="round"
                    stroke-width="2"
                    fill="none"
                    stroke="currentColor"
                    class="inline-block size-4 my-1.5"
                  >
                    <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path>
                    <path
                      d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"
                    ></path>
                  </svg>
                  <span class="is-drawer-close:hidden">Homepage</span>
                </button>
                <span class="tooltip-content is-drawer-open:hidden!">Homepage 提示</span>
              </li>

              <!-- list item -->
              <li>
                <button
                  class="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                  data-tip="Settings"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    stroke-linejoin="round"
                    stroke-linecap="round"
                    stroke-width="2"
                    fill="none"
                    stroke="currentColor"
                    class="inline-block size-4 my-1.5"
                  >
                    <path d="M20 7h-9"></path>
                    <path d="M14 17H5"></path>
                    <circle cx="17" cy="17" r="3"></circle>
                    <circle cx="7" cy="7" r="3"></circle>
                  </svg>
                  <span class="is-drawer-close:hidden">Settings</span>
                  <span class="tooltip-content is-drawer-open:hidden">Settings</span>
                </button>
              </li>
            </ul>

            <!-- button to open/close drawer -->
            <div class="m-2 is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Open">
              <label
                for="my-drawer-4"
                class="btn btn-ghost btn-circle drawer-button is-drawer-open:rotate-y-180"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  stroke-linejoin="round"
                  stroke-linecap="round"
                  stroke-width="2"
                  fill="none"
                  stroke="currentColor"
                  class="inline-block size-4 my-1.5"
                >
                  <path
                    d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"
                  ></path>
                  <path d="M9 4v16"></path>
                  <path d="M14 10l2 2l-2 2"></path>
                </svg>
              </label>
            </div>
          </div>
        </div>
      </div>
    </DocsSection>
  </DocsContainer>
</template>
