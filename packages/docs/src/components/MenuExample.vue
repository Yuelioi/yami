<script setup lang="ts">
import DocsHeader from '@/components/zcomp/DocsHeader.vue'
import DocsSection from '@/components/zcomp/DocsSection.vue'
import ApiReference from '@/components/zcomp/ApiReference.vue'
import DocsContainer from '@/components/zcomp/DocsContainer.vue'

const apiClasses = [
  {
    category: '基础',
    className: 'menu',
    description: '菜单容器',
    isCategoryStart: true,
  },
  {
    category: '基础',
    className: 'menu-title',
    description: '菜单标题',
    isCategoryStart: false,
  },
  {
    category: '基础',
    className: 'menu-active',
    description: '活跃项',
    isCategoryStart: false,
  },
  {
    category: '基础',
    className: 'menu-disabled',
    description: '禁用项',
    isCategoryStart: false,
  },
  {
    category: '方向',
    className: 'menu-horizontal',
    description: '水平菜单',
    isCategoryStart: false,
  },
  {
    category: '方向',
    className: 'menu-vertical',
    description: '竖直菜单',
    isCategoryStart: false,
  },
  {
    category: '尺寸',
    className: 'menu-xs',
    description: '超小',
    isCategoryStart: false,
  },
  {
    category: '尺寸',
    className: 'menu-sm',
    description: '小',
    isCategoryStart: false,
  },
  {
    category: '尺寸',
    className: 'menu-md',
    description: '中',
    isCategoryStart: false,
  },
  {
    category: '尺寸',
    className: 'menu-lg',
    description: '大',
    isCategoryStart: false,
  },
  {
    category: '尺寸',
    className: 'menu-xl',
    description: '超大',
    isCategoryStart: false,
  },
]
</script>

<template>
  <DocsContainer>
    <DocsHeader title="Menu" description="菜单组件，用于显示选项列表或导航。" />

    <ApiReference :data="apiClasses"></ApiReference>

    <DocsSection title="基础竖直菜单">
      <ul class="menu bg-base-200 rounded-box w-56">
        <li><a href="#">首页</a></li>
        <li><a href="#">关于</a></li>
        <li><a href="#">服务</a></li>
        <li><a href="#">联系</a></li>
      </ul>
    </DocsSection>

    <DocsSection title="带标题">
      <ul class="menu bg-base-200 rounded-box w-56">
        <li class="menu-title">
          <span>菜单</span>
        </li>
        <li><a href="#">首页</a></li>
        <li><a href="#">关于</a></li>
        <li class="menu-title">
          <span>帮助</span>
        </li>
        <li><a href="#">常见问题</a></li>
        <li><a href="#">联系支持</a></li>
      </ul>
    </DocsSection>

    <DocsSection title="活跃项">
      <ul class="menu bg-base-200 rounded-box w-56">
        <li><a href="#">首页</a></li>
        <li><a href="#" class="menu-active">当前页面</a></li>
        <li><a href="#">其他页面</a></li>
      </ul>
    </DocsSection>

    <DocsSection title="禁用项">
      <ul class="menu bg-base-200 rounded-box w-56">
        <li><a href="#">可用项</a></li>
        <li class="menu-disabled"><a href="#">禁用项</a></li>
        <li><a href="#">可用项</a></li>
      </ul>
    </DocsSection>

    <DocsSection title="水平菜单">
      <ul class="menu menu-horizontal bg-base-200 rounded-box">
        <li><a href="#">首页</a></li>
        <li><a href="#">关于</a></li>
        <li><a href="#">服务</a></li>
        <li><a href="#">联系</a></li>
      </ul>
    </DocsSection>

    <DocsSection title="带图标">
      <ul class="menu bg-base-200 rounded-box w-56">
        <li>
          <a href="#">
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
                d="M3 12l2-3m0 0l7-4 7 4M5 9v10a1 1 0 001 1h12a1 1 0 001-1V9m-9 11l4-4m0 0l4 4m-4-4V3"
              ></path>
            </svg>
            首页
          </a>
        </li>
        <li>
          <a href="#">
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
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
            关于
          </a>
        </li>
        <li>
          <a href="#">
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
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
            服务
          </a>
        </li>
      </ul>
    </DocsSection>

    <DocsSection title="带徽章">
      <ul class="menu bg-base-200 rounded-box w-56">
        <li>
          <a href="#">
            收收件箱
            <span class="badge badge-primary">8</span>
          </a>
        </li>
        <li>
          <a href="#">
            消息
            <span class="badge">3</span>
          </a>
        </li>
        <li>
          <a href="#"> 设置 </a>
        </li>
      </ul>
    </DocsSection>

    <DocsSection title="尺寸">
      <div class="space-y-4">
        <div>
          <p class="text-sm text-base-content/60 mb-2">超小 (xs)</p>
          <ul class="menu menu-xs bg-base-200 rounded-box w-56">
            <li><a href="#">项目 1</a></li>
            <li><a href="#">项目 2</a></li>
            <li><a href="#">项目 3</a></li>
          </ul>
        </div>

        <div>
          <p class="text-sm text-base-content/60 mb-2">小 (sm)</p>
          <ul class="menu menu-sm bg-base-200 rounded-box w-56">
            <li><a href="#">项目 1</a></li>
            <li><a href="#">项目 2</a></li>
            <li><a href="#">项目 3</a></li>
          </ul>
        </div>

        <div>
          <p class="text-sm text-base-content/60 mb-2">中 (md)</p>
          <ul class="menu menu-md bg-base-200 rounded-box w-56">
            <li><a href="#">项目 1</a></li>
            <li><a href="#">项目 2</a></li>
            <li><a href="#">项目 3</a></li>
          </ul>
        </div>

        <div>
          <p class="text-sm text-base-content/60 mb-2">大 (lg)</p>
          <ul class="menu menu-lg bg-base-200 rounded-box w-56">
            <li><a href="#">项目 1</a></li>
            <li><a href="#">项目 2</a></li>
            <li><a href="#">项目 3</a></li>
          </ul>
        </div>

        <div>
          <p class="text-sm text-base-content/60 mb-2">超大 (xl)</p>
          <ul class="menu menu-xl bg-base-200 rounded-box w-56">
            <li><a href="#">项目 1</a></li>
            <li><a href="#">项目 2</a></li>
            <li><a href="#">项目 3</a></li>
          </ul>
        </div>
      </div>
    </DocsSection>

    <DocsSection title="嵌套菜单">
      <ul class="menu bg-base-200 rounded-box w-56">
        <li class="menu-title">
          <span>导航</span>
        </li>
        <li>
          <a href="#">主菜单 1</a>
          <ul>
            <li><a href="#">子菜单 1-1</a></li>
            <li><a href="#">子菜单 1-2</a></li>
            <li>
              <a href="#">子菜单 1-3</a>
              <ul>
                <li><a href="#">更深层菜单</a></li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <a href="#">主菜单 2</a>
          <ul>
            <li><a href="#">子菜单 2-1</a></li>
            <li><a href="#">子菜单 2-2</a></li>
          </ul>
        </li>
      </ul>
    </DocsSection>

    <DocsSection title="侧边栏菜单">
      <ul class="menu bg-base-200 rounded-box w-64 p-3">
        <li class="menu-title">
          <span>应用</span>
        </li>
        <li class="menu-title">
          <span>仪表板</span>
        </li>
        <li><a href="#" class="menu-active">统计数据</a></li>
        <li><a href="#">报告</a></li>
        <li class="menu-title">
          <span>内容</span>
        </li>
        <li><a href="#">文章</a></li>
        <li><a href="#">评论</a></li>
        <li class="menu-disabled"><a href="#">已发布（禁用）</a></li>
        <li class="menu-title">
          <span>账户</span>
        </li>
        <li><a href="#">设置</a></li>
        <li><a href="#">登出</a></li>
      </ul>
    </DocsSection>
  </DocsContainer>
</template>
