<script setup lang="ts">
import DocsHeader from '@/components/zcomp/DocsHeader.vue'
import DocsSection from '@/components/zcomp/DocsSection.vue'
import ApiReference from '@/components/zcomp/ApiReference.vue'
import DocsContainer from '@/components/zcomp/DocsContainer.vue'

const apiClasses = [
  {
    category: '基础',
    className: 'join',
    description: '横向拼接容器（默认）',
    isCategoryStart: true,
  },
  {
    category: '基础',
    className: 'join-item',
    description: '拼接子元素，自动合并边框、处理圆角',
    isCategoryStart: false,
  },
  {
    category: '方向',
    className: 'join-horizontal',
    description: '显式横向（与 join 默认行为相同）',
    isCategoryStart: false,
  },
  {
    category: '方向',
    className: 'join-vertical',
    description: '纵向拼接',
    isCategoryStart: false,
  },
]
</script>

<template>
  <DocsContainer>
    <DocsHeader
      title="Join"
      description="通用拼接容器，将多个组件紧密排列为一组，自动处理圆角和边框合并。适用于按钮组、输入框组合、分页等场景。"
    />

    <ApiReference :data="apiClasses" />

    <!-- 按钮组 -->
    <DocsSection title="按钮组">
      <div class="flex flex-col gap-4">
        <div class="join">
          <button class="btn join-item">上一页</button>
          <button class="btn join-item">1</button>
          <button class="btn join-item btn-active">2</button>
          <button class="btn join-item">3</button>
          <button class="btn join-item">下一页</button>
        </div>

        <div class="join">
          <button class="btn btn-primary join-item">复制</button>
          <button class="btn btn-primary join-item">粘贴</button>
          <button class="btn btn-primary join-item">删除</button>
        </div>

        <div class="join">
          <button class="btn btn-outline join-item">左</button>
          <button class="btn btn-outline join-item btn-active">中</button>
          <button class="btn btn-outline join-item">右</button>
        </div>
      </div>
    </DocsSection>

    <!-- 输入框 + 按钮 -->
    <DocsSection title="输入框与按钮">
      <div class="flex flex-col gap-4 max-w-md">
        <div class="join">
          <input
            class="input input-primary join-item flex-1"
            type="text"
            placeholder="搜索内容..."
          />
          <button class="btn btn-primary join-item">搜索</button>
        </div>

        <div class="join">
          <input
            class="input input-primary join-item flex-1"
            type="email"
            placeholder="输入邮箱订阅..."
          />
          <button class="btn btn-neutral join-item">订阅</button>
        </div>

        <div class="join">
          <button class="btn btn-outline join-item">-</button>
          <input class="input input-primary join-item w-20 text-center" type="number" value="1" />
          <button class="btn btn-outline join-item">+</button>
        </div>
      </div>
    </DocsSection>

    <!-- select + input -->
    <DocsSection title="下拉与输入框">
      <div class="flex flex-col gap-4 max-w-md">
        <div class="join">
          <select class="select join-item">
            <option>手机号</option>
            <option>邮箱</option>
            <option>用户名</option>
          </select>
          <input class="input input-primary join-item flex-1" type="text" placeholder="请输入..." />
        </div>

        <div class="join">
          <select class="select join-item">
            <option>https://</option>
            <option>http://</option>
          </select>
          <input
            class="input input-primary join-item flex-1"
            type="text"
            placeholder="your-domain.com"
          />
          <button class="btn btn-primary join-item">跳转</button>
        </div>
      </div>
    </DocsSection>

    <!-- 纵向 -->
    <DocsSection title="纵向拼接">
      <div class="flex flex-wrap gap-6">
        <div class="join join-vertical">
          <button class="btn join-item w-32">选项一</button>
          <button class="btn join-item w-32">选项二</button>
          <button class="btn join-item w-32">选项三</button>
        </div>

        <div class="join join-vertical">
          <button class="btn btn-outline join-item w-32">草稿</button>
          <button class="btn btn-outline btn-active join-item w-32">已发布</button>
          <button class="btn btn-outline join-item w-32">已归档</button>
        </div>

        <div class="join join-vertical max-w-xs">
          <input class="input input-primary join-item" type="text" placeholder="姓名" />
          <input class="input input-primary join-item" type="email" placeholder="邮箱" />
          <input class="input input-primary join-item" type="password" placeholder="密码" />
        </div>
      </div>
    </DocsSection>

    <!-- 嵌套容器 -->
    <DocsSection title="嵌套容器">
      <p class="text-sm text-base-content/50 mb-4">
        当子元素本身是容器（如 <code>label.input</code>）时，直接在容器上加
        <code>join-item</code>，DaisyUI 的嵌套选择器会向内传递圆角变量。
      </p>
      <div class="flex flex-col gap-4 max-w-md">
        <div class="join">
          <label class="input input-primary join-item flex-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-4 h-4 opacity-50"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z"
              />
            </svg>
            <input type="text" placeholder="搜索..." />
          </label>
          <button class="btn btn-primary join-item">搜索</button>
        </div>
      </div>
    </DocsSection>

    <!-- 禁用状态 -->
    <DocsSection title="禁用状态">
      <p class="text-sm text-base-content/50 mb-4">
        禁用的 <code>join-item</code> 自动调整边框宽度，避免相邻元素边框缺失。
      </p>
      <div class="join">
        <button class="btn btn-primary join-item">确认</button>
        <button class="btn btn-primary join-item" disabled>处理中</button>
        <button class="btn btn-primary join-item">取消</button>
      </div>
    </DocsSection>

    <!-- 混合颜色 -->
    <DocsSection title="混合颜色">
      <div class="flex flex-col gap-4">
        <div class="join">
          <button class="btn btn-success join-item">通过</button>
          <button class="btn btn-error join-item">拒绝</button>
        </div>

        <div class="join">
          <button class="btn btn-outline btn-info join-item">预览</button>
          <button class="btn btn-primary join-item">保存草稿</button>
          <button class="btn btn-success join-item">发布</button>
        </div>
      </div>
    </DocsSection>
  </DocsContainer>
</template>
