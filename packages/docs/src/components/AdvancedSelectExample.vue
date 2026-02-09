<script setup lang="ts">
import DocsHeader from '@/components/zcomp/DocsHeader.vue'
import DocsSection from '@/components/zcomp/DocsSection.vue'
import ApiReference from '@/components/zcomp/ApiReference.vue'
import DocsContainer from '@/components/zcomp/DocsContainer.vue'

const apiClasses = [
  {
    category: '基础',
    className: 'advance-select-toggle',
    description: '下拉菜单触发器',
    isCategoryStart: true,
  },
  {
    category: '基础',
    className: 'advance-select-menu',
    description: '下拉菜单容器',
    isCategoryStart: false,
  },
  {
    category: '基础',
    className: 'advance-select-option',
    description: '菜单选项',
    isCategoryStart: false,
  },
  {
    category: '基础',
    className: 'advance-select-tag',
    description: '选中标签',
    isCategoryStart: false,
  },
  {
    category: '状态',
    className: 'select-active',
    description: '活跃状态',
    isCategoryStart: false,
  },
  {
    category: '尺寸',
    className: 'advance-select-xs',
    description: '超小',
    isCategoryStart: false,
  },
  {
    category: '尺寸',
    className: 'advance-select-sm',
    description: '小',
    isCategoryStart: false,
  },
  {
    category: '尺寸',
    className: 'advance-select-md',
    description: '中',
    isCategoryStart: false,
  },
  {
    category: '尺寸',
    className: 'advance-select-lg',
    description: '大',
    isCategoryStart: false,
  },
  {
    category: '尺寸',
    className: 'advance-select-xl',
    description: '超大',
    isCategoryStart: false,
  },
]
</script>

<template>
  <DocsContainer>
    <DocsHeader
      title="Advance Select"
      description="高级选择器/下拉菜单组件，用于选择一个或多个选项。"
    />

    <ApiReference :data="apiClasses"></ApiReference>

    <DocsSection title="基础选择器">
      <div class="w-full max-w-xs">
        <div class="advance-select-toggle">
          选择一个选项
          <span class="icon-[lucide--chevron-down] w-5 h-5 ml-auto"></span>
        </div>
        <div class="advance-select-menu hidden">
          <div class="advance-select-option">选项 1</div>
          <div class="advance-select-option">选项 2</div>
          <div class="advance-select-option">选项 3</div>
        </div>
      </div>
    </DocsSection>

    <DocsSection title="尺寸变体">
      <div class="space-y-4">
        <div>
          <p class="text-sm text-base-content/60 mb-2">超小 (xs)</p>
          <div class="w-full max-w-xs">
            <div class="advance-select-toggle advance-select-xs">
              选择
              <span class="icon-[lucide--chevron-down] w-4 h-4 ml-auto"></span>
            </div>
          </div>
        </div>

        <div>
          <p class="text-sm text-base-content/60 mb-2">小 (sm)</p>
          <div class="w-full max-w-xs">
            <div class="advance-select-toggle advance-select-sm">
              选择
              <span class="icon-[lucide--chevron-down] w-4 h-4 ml-auto"></span>
            </div>
          </div>
        </div>

        <div>
          <p class="text-sm text-base-content/60 mb-2">中 (md) - 默认</p>
          <div class="w-full max-w-xs">
            <div class="advance-select-toggle advance-select-md">
              选择
              <span class="icon-[lucide--chevron-down] w-5 h-5 ml-auto"></span>
            </div>
          </div>
        </div>

        <div>
          <p class="text-sm text-base-content/60 mb-2">大 (lg)</p>
          <div class="w-full max-w-xs">
            <div class="advance-select-toggle advance-select-lg">
              选择
              <span class="icon-[lucide--chevron-down] w-5 h-5 ml-auto"></span>
            </div>
          </div>
        </div>

        <div>
          <p class="text-sm text-base-content/60 mb-2">超大 (xl)</p>
          <div class="w-full max-w-xs">
            <div class="advance-select-toggle advance-select-xl">
              选择
              <span class="icon-[lucide--chevron-down] w-6 h-6 ml-auto"></span>
            </div>
          </div>
        </div>
      </div>
    </DocsSection>

    <DocsSection title="单选选择器">
      <div class="w-full max-w-md">
        <label class="form-control">
          <div class="label">
            <span class="label-text">选择国家</span>
          </div>
          <div class="advance-select-toggle">
            中国
            <span class="icon-[lucide--chevron-down] w-5 h-5 ml-auto"></span>
          </div>
        </label>
      </div>
    </DocsSection>

    <DocsSection title="多选选择器">
      <div class="w-full max-w-md">
        <label class="form-control">
          <div class="label">
            <span class="label-text">选择技能</span>
          </div>
          <div class="space-y-2">
            <div class="advance-select-tag">
              <span class="flex-1">JavaScript</span>
              <button class="btn btn-xs btn-ghost">
                <span class="icon-[lucide--x] w-4 h-4"></span>
              </button>
            </div>
            <div class="advance-select-tag">
              <span class="flex-1">React</span>
              <button class="btn btn-xs btn-ghost">
                <span class="icon-[lucide--x] w-4 h-4"></span>
              </button>
            </div>
          </div>
        </label>
      </div>
    </DocsSection>

    <DocsSection title="带图标的选项">
      <div class="w-full max-w-md">
        <div class="advance-select-toggle">
          <span class="icon-[lucide--check-circle] w-5 h-5 mr-2"></span>
          完成
          <span class="icon-[lucide--chevron-down] w-5 h-5 ml-auto"></span>
        </div>
        <div class="advance-select-menu hidden">
          <div class="advance-select-option">
            <span class="icon-[lucide--check-circle] w-5 h-5 mr-2"></span>
            完成
          </div>
          <div class="advance-select-option">
            <span class="icon-[lucide--clock] w-5 h-5 mr-2"></span>
            进行中
          </div>
          <div class="advance-select-option">
            <span class="icon-[lucide--alert-circle] w-5 h-5 mr-2"></span>
            待处理
          </div>
        </div>
      </div>
    </DocsSection>

    <DocsSection title="禁用选项">
      <div class="w-full max-w-md">
        <div class="advance-select-menu">
          <div class="advance-select-option">选项 1</div>
          <div class="advance-select-option opacity-50 cursor-not-allowed">选项 2（禁用）</div>
          <div class="advance-select-option">选项 3</div>
        </div>
      </div>
    </DocsSection>

    <DocsSection title="活跃状态">
      <div class="w-full max-w-md">
        <div class="advance-select-menu">
          <div class="advance-select-option">选项 1</div>
          <div class="advance-select-option select-active">选项 2（活跃）</div>
          <div class="advance-select-option">选项 3</div>
        </div>
      </div>
    </DocsSection>

    <DocsSection title="分组选项">
      <div class="w-full max-w-md">
        <div class="advance-select-menu">
          <div class="px-4 py-2 text-xs font-semibold text-base-content/60 uppercase">前端框架</div>
          <div class="advance-select-option">React</div>
          <div class="advance-select-option">Vue</div>
          <div class="advance-select-option">Angular</div>

          <div class="divider my-1"></div>

          <div class="px-4 py-2 text-xs font-semibold text-base-content/60 uppercase">后端语言</div>
          <div class="advance-select-option">Node.js</div>
          <div class="advance-select-option">Python</div>
          <div class="advance-select-option">Java</div>
        </div>
      </div>
    </DocsSection>

    <DocsSection title="表单集成">
      <form class="w-full max-w-md space-y-4">
        <label class="form-control">
          <div class="label">
            <span class="label-text">选择类别</span>
          </div>
          <div class="advance-select-toggle">
            电子产品
            <span class="icon-[lucide--chevron-down] w-5 h-5 ml-auto"></span>
          </div>
        </label>

        <label class="form-control">
          <div class="label">
            <span class="label-text">选择等级</span>
          </div>
          <div class="advance-select-toggle">
            中级
            <span class="icon-[lucide--chevron-down] w-5 h-5 ml-auto"></span>
          </div>
        </label>

        <button type="submit" class="btn btn-primary w-full">提交</button>
      </form>
    </DocsSection>

    <DocsSection title="搜索选择器">
      <div class="w-full max-w-md">
        <div class="form-control">
          <input type="text" placeholder="搜索..." class="input input-bordered mb-2" />
          <div class="advance-select-menu">
            <div class="advance-select-option">
              <span class="icon-[lucide--search] w-4 h-4 mr-2"></span>
              React
            </div>
            <div class="advance-select-option">
              <span class="icon-[lucide--search] w-4 h-4 mr-2"></span>
              Vue
            </div>
            <div class="advance-select-option">
              <span class="icon-[lucide--search] w-4 h-4 mr-2"></span>
              Angular
            </div>
          </div>
        </div>
      </div>
    </DocsSection>

    <DocsSection title="带图片的选项">
      <div class="w-full max-w-md">
        <div class="advance-select-menu">
          <div class="advance-select-option flex items-center">
            <div class="avatar mr-2">
              <div class="w-6 h-6 rounded-full bg-primary"></div>
            </div>
            <span>选项 1</span>
          </div>
          <div class="advance-select-option flex items-center">
            <div class="avatar mr-2">
              <div class="w-6 h-6 rounded-full bg-success"></div>
            </div>
            <span>选项 2</span>
          </div>
          <div class="advance-select-option flex items-center">
            <div class="avatar mr-2">
              <div class="w-6 h-6 rounded-full bg-warning"></div>
            </div>
            <span>选项 3</span>
          </div>
        </div>
      </div>
    </DocsSection>
  </DocsContainer>
</template>
