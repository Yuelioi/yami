<script setup lang="ts">
import DocsHeader from '@/components/zcomp/DocsHeader.vue'
import DocsSection from '@/components/zcomp/DocsSection.vue'
import ApiReference from '@/components/zcomp/ApiReference.vue'
import DocsContainer from '@/components/zcomp/DocsContainer.vue'

const apiClasses = [
  {
    category: '基础',
    className: 'divider',
    description: '分割线容器',
    isCategoryStart: true,
  },
  {
    category: '方向',
    className: 'divider-horizontal',
    description: '水平分割线',
    isCategoryStart: false,
  },
  {
    category: '方向',
    className: 'divider-vertical',
    description: '竖直分割线',
    isCategoryStart: false,
  },
  {
    category: '颜色',
    className: 'divider-neutral',
    description: '中性色',
    isCategoryStart: false,
  },
  {
    category: '颜色',
    className: 'divider-primary',
    description: '主色',
    isCategoryStart: false,
  },
  {
    category: '颜色',
    className: 'divider-secondary',
    description: '次色',
    isCategoryStart: false,
  },
  {
    category: '颜色',
    className: 'divider-accent',
    description: '强调色',
    isCategoryStart: false,
  },
  {
    category: '颜色',
    className: 'divider-success',
    description: '成功色',
    isCategoryStart: false,
  },
  {
    category: '颜色',
    className: 'divider-warning',
    description: '警告色',
    isCategoryStart: false,
  },
  {
    category: '颜色',
    className: 'divider-info',
    description: '信息色',
    isCategoryStart: false,
  },
  {
    category: '颜色',
    className: 'divider-error',
    description: '错误色',
    isCategoryStart: false,
  },
  {
    category: '样式',
    className: 'divider-dotted',
    description: '点线样式',
    isCategoryStart: false,
  },
  {
    category: '样式',
    className: 'divider-dashed',
    description: '虚线样式',
    isCategoryStart: false,
  },
  {
    category: '位置',
    className: 'divider-start',
    description: '仅显示右侧线',
    isCategoryStart: false,
  },
  {
    category: '位置',
    className: 'divider-end',
    description: '仅显示左侧线',
    isCategoryStart: false,
  },
]
</script>

<template>
  <DocsContainer>
    <DocsHeader title="Divider" description="分割线组件，用于分隔内容。" />

    <ApiReference :data="apiClasses"></ApiReference>

    <DocsSection title="基础水平">
      <div class="space-y-4">
        <div>
          <p>内容上</p>
          <div class="divider"></div>
          <p>内容下</p>
        </div>
      </div>
    </DocsSection>

    <DocsSection title="带文本">
      <div class="space-y-4">
        <div>
          <p>内容上</p>
          <div class="divider">或</div>
          <p>内容下</p>
        </div>
        <div>
          <p>内容上</p>
          <div class="divider">继续</div>
          <p>内容下</p>
        </div>
      </div>
    </DocsSection>

    <DocsSection title="颜色">
      <div class="space-y-4">
        <div>
          <p class="text-sm text-base-content/60">默认</p>
          <div class="divider"></div>
        </div>
        <div>
          <p class="text-sm text-base-content/60">主色</p>
          <div class="divider divider-primary"></div>
        </div>
        <div>
          <p class="text-sm text-base-content/60">次色</p>
          <div class="divider divider-secondary"></div>
        </div>
        <div>
          <p class="text-sm text-base-content/60">强调色</p>
          <div class="divider divider-accent"></div>
        </div>
        <div>
          <p class="text-sm text-base-content/60">成功</p>
          <div class="divider divider-success"></div>
        </div>
        <div>
          <p class="text-sm text-base-content/60">警告</p>
          <div class="divider divider-warning"></div>
        </div>
        <div>
          <p class="text-sm text-base-content/60">信息</p>
          <div class="divider divider-info"></div>
        </div>
        <div>
          <p class="text-sm text-base-content/60">错误</p>
          <div class="divider divider-error"></div>
        </div>
      </div>
    </DocsSection>

    <DocsSection title="样式">
      <div class="space-y-4">
        <div>
          <p class="text-sm text-base-content/60">实线</p>
          <div class="divider divider-primary"></div>
        </div>
        <div>
          <p class="text-sm text-base-content/60">点线</p>
          <div class="divider divider-dotted divider-primary"></div>
        </div>
        <div>
          <p class="text-sm text-base-content/60">虚线</p>
          <div class="divider divider-dashed divider-primary"></div>
        </div>
      </div>
    </DocsSection>

    <DocsSection title="位置">
      <div class="space-y-4">
        <div>
          <p class="text-sm text-base-content/60">左对齐（仅右侧线）</p>
          <div class="divider divider-start divider-primary">开始</div>
        </div>
        <div>
          <p class="text-sm text-base-content/60">右对齐（仅左侧线）</p>
          <div class="divider divider-end divider-primary">结束</div>
        </div>
      </div>
    </DocsSection>

    <DocsSection title="竖直分割线">
      <div class="flex items-center justify-center gap-4 h-48">
        <div class="flex-1 text-center">
          <p>左侧内容</p>
        </div>
        <div class="divider divider-horizontal divider-primary"></div>
        <div class="flex-1 text-center">
          <p>右侧内容</p>
        </div>
      </div>
    </DocsSection>

    <DocsSection title="竖直带文本">
      <div class="flex items-center justify-center gap-4 h-48">
        <div class="flex-1 text-center">
          <p>左侧</p>
        </div>
        <div class="divider divider-horizontal divider-primary">
          <span class="-rotate-90">或</span>
        </div>
        <div class="flex-1 text-center">
          <p>右侧</p>
        </div>
      </div>
    </DocsSection>

    <DocsSection title="表单分隔">
      <form class="space-y-4">
        <div class="space-y-3">
          <label class="block text-sm font-semibold">登录</label>
          <input type="email" placeholder="邮箱" class="input input-bordered w-full" />
          <input type="password" placeholder="密码" class="input input-bordered w-full" />
          <button class="btn btn-primary w-full">登录</button>
        </div>

        <div class="divider">或</div>

        <div class="space-y-3">
          <label class="block text-sm font-semibold">注册</label>
          <input type="email" placeholder="邮箱" class="input input-bordered w-full" />
          <input type="password" placeholder="密码" class="input input-bordered w-full" />
          <button class="btn btn-secondary w-full">注册</button>
        </div>
      </form>
    </DocsSection>

    <DocsSection title="列表分隔">
      <div class="space-y-0">
        <div class="p-3">列表项 1</div>
        <div class="divider m-0"></div>
        <div class="p-3">列表项 2</div>
        <div class="divider m-0"></div>
        <div class="p-3">列表项 3</div>
        <div class="divider m-0"></div>
        <div class="p-3">列表项 4</div>
      </div>
    </DocsSection>
  </DocsContainer>
</template>
