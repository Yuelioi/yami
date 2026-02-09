<script setup lang="ts">
import DocsHeader from '@/components/zcomp/DocsHeader.vue'
import DocsSection from '@/components/zcomp/DocsSection.vue'
import ApiReference from '@/components/zcomp/ApiReference.vue'
import DocsContainer from '@/components/zcomp/DocsContainer.vue'

const apiClasses = [
  {
    category: '基础',
    className: 'collapse',
    description: '折叠容器',
    isCategoryStart: true,
  },
  {
    category: '内容',
    className: 'collapse-title',
    description: '标题',
    isCategoryStart: false,
  },
  {
    category: '内容',
    className: 'collapse-content',
    description: '内容',
    isCategoryStart: false,
  },
  {
    category: '图标',
    className: 'collapse-arrow',
    description: '箭头图标',
    isCategoryStart: false,
  },
  {
    category: '图标',
    className: 'collapse-plus',
    description: '加号图标',
    isCategoryStart: false,
  },
  {
    category: '状态',
    className: 'collapse-open',
    description: '强制展开',
    isCategoryStart: false,
  },
  {
    category: '状态',
    className: 'collapse-close',
    description: '强制关闭',
    isCategoryStart: false,
  },
  {
    category: '颜色',
    className: 'collapse-primary',
    description: '主色',
    isCategoryStart: false,
  },
  {
    category: '颜色',
    className: 'collapse-secondary',
    description: '次色',
    isCategoryStart: false,
  },
  {
    category: '颜色',
    className: 'collapse-accent',
    description: '强调色',
    isCategoryStart: false,
  },
  {
    category: '颜色',
    className: 'collapse-success',
    description: '成功色',
    isCategoryStart: false,
  },
  {
    category: '样式',
    className: 'collapse-bordered',
    description: '带边框',
    isCategoryStart: false,
  },
  {
    category: '尺寸',
    className: 'collapse-sm',
    description: '小',
    isCategoryStart: false,
  },
  {
    category: '尺寸',
    className: 'collapse-lg',
    description: '大',
    isCategoryStart: false,
  },
  {
    category: '组件',
    className: 'collapse-group',
    description: '手风琴组',
    isCategoryStart: false,
  },
]
</script>

<template>
  <DocsContainer>
    <DocsHeader title="Collapse" description="折叠/手风琴组件，用于展开/隐藏内容。" />

    <ApiReference :data="apiClasses"></ApiReference>

    <DocsSection title="基础折叠">
      <div class="collapse collapse-arrow border border-base-300 bg-base-100">
        <input type="checkbox" />
        <div class="collapse-title font-medium">点击展开</div>
        <div class="collapse-content">
          <p>这是折叠内容。当你点击标题时，这部分内容会显示或隐藏。</p>
        </div>
      </div>
    </DocsSection>

    <DocsSection title="图标变体">
      <div class="space-y-2">
        <div class="collapse collapse-arrow border border-base-300 bg-base-100">
          <input type="checkbox" />
          <div class="collapse-title font-medium">箭头图标</div>
          <div class="collapse-content">箭头会旋转 45 度</div>
        </div>

        <div class="collapse collapse-plus border border-base-300 bg-base-100">
          <input type="checkbox" />
          <div class="collapse-title font-medium">加号图标</div>
          <div class="collapse-content">加号会变成减号</div>
        </div>

        <div class="collapse border border-base-300 bg-base-100">
          <input type="checkbox" />
          <div class="collapse-title font-medium">无图标</div>
          <div class="collapse-content">简洁的折叠效果</div>
        </div>
      </div>
    </DocsSection>

    <DocsSection title="颜色变体">
      <div class="space-y-2">
        <div class="collapse collapse-arrow collapse-primary border border-primary bg-base-100">
          <input type="checkbox" />
          <div class="collapse-title font-medium">主色</div>
          <div class="collapse-content">主题颜色的折叠效果</div>
        </div>

        <div class="collapse collapse-arrow collapse-secondary border border-secondary bg-base-100">
          <input type="checkbox" />
          <div class="collapse-title font-medium">次色</div>
          <div class="collapse-content">次要颜色的折叠效果</div>
        </div>

        <div class="collapse collapse-arrow collapse-success border border-success bg-base-100">
          <input type="checkbox" />
          <div class="collapse-title font-medium">成功色</div>
          <div class="collapse-content">成功状态的折叠效果</div>
        </div>
      </div>
    </DocsSection>

    <DocsSection title="带边框样式">
      <div class="space-y-2">
        <div class="collapse collapse-arrow collapse-bordered bg-base-100">
          <input type="checkbox" />
          <div class="collapse-title font-medium">带边框</div>
          <div class="collapse-content">
            <p>边框会根据颜色主题自动调整。</p>
          </div>
        </div>

        <div class="collapse collapse-arrow collapse-bordered collapse-primary bg-base-100">
          <input type="checkbox" />
          <div class="collapse-title font-medium">主色边框</div>
          <div class="collapse-content">主题色边框效果</div>
        </div>
      </div>
    </DocsSection>

    <DocsSection title="尺寸变体">
      <div class="space-y-4">
        <div>
          <p class="text-sm text-base-content/60 mb-2">小 (sm)</p>
          <div class="collapse collapse-arrow collapse-sm border border-base-300 bg-base-100">
            <input type="checkbox" />
            <div class="collapse-title">小尺寸</div>
            <div class="collapse-content">紧凑的小尺寸</div>
          </div>
        </div>

        <div>
          <p class="text-sm text-base-content/60 mb-2">中 (默认)</p>
          <div class="collapse collapse-arrow border border-base-300 bg-base-100">
            <input type="checkbox" />
            <div class="collapse-title font-medium">默认尺寸</div>
            <div class="collapse-content">标准的默认尺寸</div>
          </div>
        </div>

        <div>
          <p class="text-sm text-base-content/60 mb-2">大 (lg)</p>
          <div class="collapse collapse-arrow collapse-lg border border-base-300 bg-base-100">
            <input type="checkbox" />
            <div class="collapse-title font-medium text-base">大尺寸</div>
            <div class="collapse-content">宽敞的大尺寸</div>
          </div>
        </div>
      </div>
    </DocsSection>

    <DocsSection title="手风琴 - 多选">
      <div class="space-y-2">
        <div class="collapse collapse-arrow collapse-bordered bg-base-100">
          <input type="checkbox" />
          <div class="collapse-title font-medium">常见问题 1</div>
          <div class="collapse-content">
            <p>这是第一个常见问题的答案。可以同时打开多个项目。</p>
          </div>
        </div>

        <div class="collapse collapse-arrow collapse-bordered bg-base-100">
          <input type="checkbox" />
          <div class="collapse-title font-medium">常见问题 2</div>
          <div class="collapse-content">
            <p>这是第二个常见问题的答案。</p>
          </div>
        </div>

        <div class="collapse collapse-arrow collapse-bordered bg-base-100">
          <input type="checkbox" />
          <div class="collapse-title font-medium">常见问题 3</div>
          <div class="collapse-content">
            <p>这是第三个常见问题的答案。</p>
          </div>
        </div>
      </div>
    </DocsSection>

    <DocsSection title="手风琴 - 单选">
      <div class="space-y-2">
        <div class="collapse collapse-arrow collapse-bordered bg-base-100">
          <input type="radio" name="accordion" />
          <div class="collapse-title font-medium">选项 1</div>
          <div class="collapse-content">
            <p>使用 radio input 实现单选手风琴效果。</p>
          </div>
        </div>

        <div class="collapse collapse-arrow collapse-bordered bg-base-100">
          <input type="radio" name="accordion" />
          <div class="collapse-title font-medium">选项 2</div>
          <div class="collapse-content">
            <p>同时只能展开一个项目。</p>
          </div>
        </div>

        <div class="collapse collapse-arrow collapse-bordered bg-base-100">
          <input type="radio" name="accordion" />
          <div class="collapse-title font-medium">选项 3</div>
          <div class="collapse-content">
            <p>打开新项目时，旧项目会自动关闭。</p>
          </div>
        </div>
      </div>
    </DocsSection>

    <DocsSection title="产品常见问题">
      <div class="space-y-2">
        <div class="collapse collapse-arrow collapse-bordered bg-base-100">
          <input type="radio" name="faq" />
          <div class="collapse-title font-semibold">如何开始使用？</div>
          <div class="collapse-content">
            <p>1. 创建账户</p>
            <p>2. 完成配置</p>
            <p>3. 开始使用</p>
          </div>
        </div>

        <div class="collapse collapse-arrow collapse-bordered bg-base-100">
          <input type="radio" name="faq" />
          <div class="collapse-title font-semibold">如何升级计划？</div>
          <div class="collapse-content">
            <p>在账户设置中选择升级选项，按照步骤完成付款。</p>
          </div>
        </div>

        <div class="collapse collapse-arrow collapse-bordered bg-base-100">
          <input type="radio" name="faq" />
          <div class="collapse-title font-semibold">支持哪些付款方式？</div>
          <div class="collapse-content">
            <p>我们支持：</p>
            <ul class="list-disc list-inside ml-2 space-y-1">
              <li>信用卡</li>
              <li>支付宝</li>
              <li>微信支付</li>
              <li>银行转账</li>
            </ul>
          </div>
        </div>
      </div>
    </DocsSection>

    <DocsSection title="强制状态">
      <div class="space-y-2">
        <div class="collapse collapse-arrow collapse-open border border-base-300 bg-base-100">
          <div class="collapse-title font-medium">始终展开</div>
          <div class="collapse-content">
            <p>使用 collapse-open 类强制展开状态。</p>
          </div>
        </div>

        <div class="collapse collapse-arrow collapse-close border border-base-300 bg-base-100">
          <input type="checkbox" checked />
          <div class="collapse-title font-medium">始终关闭</div>
          <div class="collapse-content">
            <p>使用 collapse-close 类强制关闭状态。</p>
          </div>
        </div>
      </div>
    </DocsSection>

    <DocsSection title="嵌套折叠">
      <div class="collapse collapse-arrow collapse-bordered bg-base-100">
        <input type="checkbox" />
        <div class="collapse-title font-medium">主类别</div>
        <div class="collapse-content">
          <div class="space-y-2 mt-2">
            <div class="collapse collapse-arrow border border-base-200 bg-base-50">
              <input type="checkbox" />
              <div class="collapse-title">子类别 1</div>
              <div class="collapse-content">子内容 1</div>
            </div>

            <div class="collapse collapse-arrow border border-base-200 bg-base-50">
              <input type="checkbox" />
              <div class="collapse-title">子类别 2</div>
              <div class="collapse-content">子内容 2</div>
            </div>
          </div>
        </div>
      </div>
    </DocsSection>

    <DocsSection title="设置说明">
      <div class="space-y-2">
        <div class="collapse collapse-arrow collapse-primary collapse-bordered bg-base-100">
          <input type="checkbox" />
          <div class="collapse-title font-medium flex items-center gap-2">
            <span class="icon-[lucide--user] w-5 h-5"></span>
            账户设置
          </div>
          <div class="collapse-content space-y-3">
            <div class="form-control">
              <label class="label">
                <span class="label-text">用户名</span>
              </label>
              <input type="text" placeholder="输入用户名" class="input input-bordered input-sm" />
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text">邮箱</span>
              </label>
              <input type="email" placeholder="输入邮箱" class="input input-bordered input-sm" />
            </div>
          </div>
        </div>

        <div class="collapse collapse-arrow collapse-secondary collapse-bordered bg-base-100">
          <input type="checkbox" />
          <div class="collapse-title font-medium flex items-center gap-2">
            <span class="icon-[lucide--bell] w-5 h-5"></span>
            通知设置
          </div>
          <div class="collapse-content space-y-2">
            <div class="form-control">
              <label class="label cursor-pointer">
                <span class="label-text">邮件通知</span>
                <input type="checkbox" class="checkbox" checked />
              </label>
            </div>
            <div class="form-control">
              <label class="label cursor-pointer">
                <span class="label-text">推送通知</span>
                <input type="checkbox" class="checkbox" />
              </label>
            </div>
          </div>
        </div>
      </div>
    </DocsSection>
  </DocsContainer>
</template>
