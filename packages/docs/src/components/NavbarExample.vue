<script setup lang="ts">
import DocsHeader from '@/components/zcomp/DocsHeader.vue'
import DocsSection from '@/components/zcomp/DocsSection.vue'
import ApiReference from '@/components/zcomp/ApiReference.vue'
import DocsContainer from '@/components/zcomp/DocsContainer.vue'

const apiClasses = [
  {
    category: '基础',
    className: 'navbar',
    description: '导航栏容器',
    isCategoryStart: true,
  },
  {
    category: '布局',
    className: 'navbar-start',
    description: '左侧内容',
    isCategoryStart: false,
  },
  {
    category: '布局',
    className: 'navbar-center',
    description: '中间内容',
    isCategoryStart: false,
  },
  {
    category: '布局',
    className: 'navbar-end',
    description: '右侧内容',
    isCategoryStart: false,
  },
]
</script>

<template>
  <DocsContainer>
    <DocsHeader title="Navbar" description="导航栏组件，用于页面顶部导航和品牌展示。" />

    <ApiReference :data="apiClasses"></ApiReference>

    <DocsSection title="基础导航栏">
      <div class="navbar bg-base-200 rounded-lg">
        <div class="navbar-start">
          <a class="btn btn-ghost text-lg font-bold">品牌</a>
        </div>
        <div class="navbar-end">
          <button class="btn btn-ghost">登录</button>
        </div>
      </div>
    </DocsSection>

    <DocsSection title="三部分布局">
      <div class="navbar bg-base-200 rounded-lg">
        <div class="navbar-start">
          <button class="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              class="w-5 h-5 stroke-current"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
        <div class="navbar-center">
          <a class="btn btn-ghost text-xl">应用名称</a>
        </div>
        <div class="navbar-end">
          <button class="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              class="w-5 h-5 stroke-current"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </DocsSection>

    <DocsSection title="导航菜单">
      <div class="navbar bg-base-200 rounded-lg">
        <div class="navbar-start">
          <a class="btn btn-ghost text-lg font-bold">MyApp</a>
        </div>
        <div class="navbar-center hidden lg:flex">
          <ul class="menu menu-horizontal px-1">
            <li><a href="#">首页</a></li>
            <li><a href="#">关于</a></li>
            <li><a href="#">服务</a></li>
          </ul>
        </div>
        <div class="navbar-end gap-2">
          <button class="btn btn-ghost btn-sm">登录</button>
          <button class="btn btn-primary btn-sm">注册</button>
        </div>
      </div>
    </DocsSection>

    <DocsSection title="带搜索框">
      <div class="navbar bg-base-200 rounded-lg">
        <div class="navbar-start">
          <a class="btn btn-ghost text-xl">搜索应用</a>
        </div>
        <div class="navbar-center">
          <div class="form-control">
            <input type="text" placeholder="搜索..." class="input input-bordered w-24 md:w-auto" />
          </div>
        </div>
        <div class="navbar-end">
          <button class="btn btn-ghost">登出</button>
        </div>
      </div>
    </DocsSection>

    <DocsSection title="深色导航栏">
      <div class="navbar bg-base-300 rounded-lg">
        <div class="navbar-start">
          <button class="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              class="w-5 h-5 stroke-current"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
        <div class="navbar-center">
          <a class="btn btn-ghost text-xl font-bold">Dark Mode</a>
        </div>
        <div class="navbar-end">
          <button class="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              class="w-5 h-5"
            >
              <path
                d="M21.64,13a1,1,0,0,0-1.05-.14,8,8,0,0,1-3.66.86,8.06,8.06,0,0,1-7.52-4.7,8.07,8.07,0,0,1,10.85-9.14,1,1,0,0,0,1.31-1.31A10.15,10.15,0,0,0,7.9,2.5a10,10,0,0,0,0,19,10.16,10.16,0,0,0,9.14-5.59A1,1,0,0,0,21.64,13Zm-9.5,6.65A8.08,8.08,0,0,1,7.3,19.12a8.07,8.07,0,0,1,0-16.14,8,8,0,0,1,3.67.86,1,1,0,1,0,.73-1.88A10,10,0,0,0,7.3,3.12,10,10,0,0,0,7.3,23.12a9.84,9.84,0,0,0,4.84-1.34,1,1,0,0,0-.73-1.88Z"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </DocsSection>

    <DocsSection title="带徽章">
      <div class="navbar bg-base-200 rounded-lg">
        <div class="navbar-start">
          <a class="btn btn-ghost text-lg font-bold">电商网站</a>
        </div>
        <div class="navbar-center">
          <ul class="menu menu-horizontal px-1 hidden md:flex">
            <li><a href="#">新品</a></li>
            <li><a href="#">热销</a></li>
            <li><a href="#">分类</a></li>
          </ul>
        </div>
        <div class="navbar-end gap-4">
          <div class="indicator">
            <span class="indicator-item badge badge-primary">3</span>
            <button class="btn btn-ghost btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                class="w-5 h-5 stroke-current"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                ></path>
              </svg>
            </button>
          </div>
          <button class="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              class="w-5 h-5 stroke-current"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </DocsSection>

    <DocsSection title="响应式导航">
      <div class="navbar bg-base-200 rounded-lg">
        <div class="navbar-start">
          <div class="dropdown">
            <button class="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                class="w-5 h-5 stroke-current"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                ></path>
              </svg>
            </button>
          </div>
          <a class="btn btn-ghost text-lg font-bold">响应式App</a>
        </div>
        <div class="navbar-center hidden lg:flex">
          <ul class="menu menu-horizontal px-1">
            <li><a href="#">首页</a></li>
            <li><a href="#">功能</a></li>
            <li><a href="#">定价</a></li>
            <li><a href="#">文档</a></li>
          </ul>
        </div>
        <div class="navbar-end gap-2">
          <button class="btn btn-outline btn-sm">登录</button>
          <button class="btn btn-primary btn-sm">开始</button>
        </div>
      </div>
    </DocsSection>

    <DocsSection title="粘性导航栏">
      <div class="sticky top-0 z-40 navbar bg-base-200 border-b border-base-300 rounded-b-lg">
        <div class="navbar-start">
          <a class="btn btn-ghost text-lg font-bold">粘性导航</a>
        </div>
        <div class="navbar-center hidden md:flex">
          <ul class="menu menu-horizontal px-1">
            <li><a href="#">滚动查看</a></li>
            <li><a href="#">粘性效果</a></li>
            <li><a href="#">保持在顶部</a></li>
          </ul>
        </div>
        <div class="navbar-end">
          <button class="btn btn-ghost">登出</button>
        </div>
      </div>
      <div class="h-64 bg-base-100 p-4 rounded-b-lg flex items-center justify-center">
        <p class="text-base-content/60">向下滚动，导航栏会保持在顶部</p>
      </div>
    </DocsSection>

    <DocsSection title="垂直导航栏">
      <div class="navbar navbar-vertical bg-base-200 rounded-lg w-48 flex-col items-start h-auto">
        <div class="navbar-start w-full">
          <a class="btn btn-ghost text-lg font-bold">菜单</a>
        </div>
        <div class="navbar-center w-full">
          <ul class="menu w-full">
            <li><a href="#">首页</a></li>
            <li><a href="#">关于</a></li>
            <li><a href="#">服务</a></li>
            <li><a href="#">联系</a></li>
          </ul>
        </div>
        <div class="navbar-end w-full">
          <button class="btn btn-ghost w-full justify-start">登出</button>
        </div>
      </div>
    </DocsSection>
  </DocsContainer>
</template>
