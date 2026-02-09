<script setup lang="ts">
import DocsHeader from '@/components/zcomp/DocsHeader.vue'
import DocsSection from '@/components/zcomp/DocsSection.vue'
import ApiReference from '@/components/zcomp/ApiReference.vue'
import DocsContainer from '@/components/zcomp/DocsContainer.vue'

const apiClasses = [
  {
    category: '基础',
    className: 'radio',
    description: '单选框',
    isCategoryStart: true,
  },
  {
    category: '样式',
    className: 'radio-inset',
    description: '内嵌样式',
    isCategoryStart: false,
  },
  {
    category: '颜色',
    className: 'radio-primary',
    description: '主色',
    isCategoryStart: false,
  },
  {
    category: '颜色',
    className: 'radio-secondary',
    description: '次色',
    isCategoryStart: false,
  },
  {
    category: '颜色',
    className: 'radio-accent',
    description: '强调色',
    isCategoryStart: false,
  },
  {
    category: '颜色',
    className: 'radio-info',
    description: '信息色',
    isCategoryStart: false,
  },
  {
    category: '颜色',
    className: 'radio-success',
    description: '成功色',
    isCategoryStart: false,
  },
  {
    category: '颜色',
    className: 'radio-warning',
    description: '警告色',
    isCategoryStart: false,
  },
  {
    category: '颜色',
    className: 'radio-error',
    description: '错误色',
    isCategoryStart: false,
  },
  {
    category: '尺寸',
    className: 'radio-xs',
    description: '超小',
    isCategoryStart: false,
  },
  {
    category: '尺寸',
    className: 'radio-sm',
    description: '小',
    isCategoryStart: false,
  },
  {
    category: '尺寸',
    className: 'radio-md',
    description: '中',
    isCategoryStart: false,
  },
  {
    category: '尺寸',
    className: 'radio-lg',
    description: '大',
    isCategoryStart: false,
  },
  {
    category: '尺寸',
    className: 'radio-xl',
    description: '超大',
    isCategoryStart: false,
  },
]
</script>

<template>
  <DocsContainer>
    <DocsHeader title="Radio" description="单选框组件，用于单选选项。" />

    <ApiReference :data="apiClasses"></ApiReference>

    <DocsSection title="基础单选框">
      <div class="space-y-2">
        <label class="flex items-center gap-2">
          <input type="radio" name="basic" class="radio" />
          <span>选项 1</span>
        </label>
        <label class="flex items-center gap-2">
          <input type="radio" name="basic" class="radio" />
          <span>选项 2</span>
        </label>
        <label class="flex items-center gap-2">
          <input type="radio" name="basic" class="radio" />
          <span>选项 3</span>
        </label>
      </div>
    </DocsSection>

    <DocsSection title="颜色变体">
      <div class="space-y-2">
        <label class="flex items-center gap-2">
          <input type="radio" name="color" class="radio" />
          <span>默认</span>
        </label>
        <label class="flex items-center gap-2">
          <input type="radio" name="color" class="radio radio-primary" />
          <span>主色</span>
        </label>
        <label class="flex items-center gap-2">
          <input type="radio" name="color" class="radio radio-secondary" />
          <span>次色</span>
        </label>
        <label class="flex items-center gap-2">
          <input type="radio" name="color" class="radio radio-accent" />
          <span>强调色</span>
        </label>
        <label class="flex items-center gap-2">
          <input type="radio" name="color" class="radio radio-info" />
          <span>信息色</span>
        </label>
        <label class="flex items-center gap-2">
          <input type="radio" name="color" class="radio radio-success" />
          <span>成功色</span>
        </label>
        <label class="flex items-center gap-2">
          <input type="radio" name="color" class="radio radio-warning" />
          <span>警告色</span>
        </label>
        <label class="flex items-center gap-2">
          <input type="radio" name="color" class="radio radio-error" />
          <span>错误色</span>
        </label>
      </div>
    </DocsSection>

    <DocsSection title="尺寸变体">
      <div class="space-y-3">
        <div>
          <p class="text-sm text-base-content/60 mb-2">超小 (xs)</p>
          <label class="flex items-center gap-2">
            <input type="radio" name="size-xs" class="radio radio-xs radio-primary" />
            <span class="text-sm">超小单选框</span>
          </label>
        </div>

        <div>
          <p class="text-sm text-base-content/60 mb-2">小 (sm)</p>
          <label class="flex items-center gap-2">
            <input type="radio" name="size-sm" class="radio radio-sm radio-primary" />
            <span class="text-sm">小单选框</span>
          </label>
        </div>

        <div>
          <p class="text-sm text-base-content/60 mb-2">中 (md)</p>
          <label class="flex items-center gap-2">
            <input type="radio" name="size-md" class="radio radio-md radio-primary" />
            <span class="text-sm">中单选框</span>
          </label>
        </div>

        <div>
          <p class="text-sm text-base-content/60 mb-2">大 (lg)</p>
          <label class="flex items-center gap-2">
            <input type="radio" name="size-lg" class="radio radio-lg radio-primary" />
            <span class="text-sm">大单选框</span>
          </label>
        </div>

        <div>
          <p class="text-sm text-base-content/60 mb-2">超大 (xl)</p>
          <label class="flex items-center gap-2">
            <input type="radio" name="size-xl" class="radio radio-xl radio-primary" />
            <span class="text-sm">超大单选框</span>
          </label>
        </div>
      </div>
    </DocsSection>

    <DocsSection title="内嵌样式">
      <div class="space-y-2">
        <label class="flex items-center gap-2">
          <input type="radio" name="inset" class="radio radio-inset radio-primary" />
          <span>内嵌样式 1</span>
        </label>
        <label class="flex items-center gap-2">
          <input type="radio" name="inset" class="radio radio-inset radio-success" />
          <span>内嵌样式 2</span>
        </label>
        <label class="flex items-center gap-2">
          <input type="radio" name="inset" class="radio radio-inset radio-warning" />
          <span>内嵌样式 3</span>
        </label>
      </div>
    </DocsSection>

    <DocsSection title="禁用状态">
      <div class="space-y-2">
        <label class="flex items-center gap-2">
          <input type="radio" name="disabled" class="radio radio-primary" />
          <span>可用</span>
        </label>
        <label class="flex items-center gap-2">
          <input type="radio" name="disabled" class="radio radio-primary" disabled />
          <span>禁用</span>
        </label>
        <label class="flex items-center gap-2">
          <input type="radio" name="disabled" class="radio radio-primary" checked disabled />
          <span>已选中并禁用</span>
        </label>
      </div>
    </DocsSection>

    <DocsSection title="表单集成">
      <form class="space-y-6 max-w-md">
        <div>
          <label class="label-text block mb-3">选择您的方案</label>
          <div class="space-y-2">
            <label
              class="flex items-center gap-3 p-3 border border-base-300 rounded-lg cursor-pointer hover:bg-base-200"
            >
              <input type="radio" name="plan" class="radio radio-primary" value="basic" />
              <div class="flex-1">
                <div class="font-semibold">基础方案</div>
                <div class="text-sm text-base-content/70">$9/月</div>
              </div>
            </label>
            <label
              class="flex items-center gap-3 p-3 border border-base-300 rounded-lg cursor-pointer hover:bg-base-200"
            >
              <input type="radio" name="plan" class="radio radio-primary" value="pro" />
              <div class="flex-1">
                <div class="font-semibold">专业方案</div>
                <div class="text-sm text-base-content/70">$29/月</div>
              </div>
            </label>
            <label
              class="flex items-center gap-3 p-3 border border-base-300 rounded-lg cursor-pointer hover:bg-base-200"
            >
              <input type="radio" name="plan" class="radio radio-primary" value="enterprise" />
              <div class="flex-1">
                <div class="font-semibold">企业方案</div>
                <div class="text-sm text-base-content/70">自定义价格</div>
              </div>
            </label>
          </div>
        </div>

        <div>
          <label class="label-text block mb-2">选择性别</label>
          <div class="flex gap-4">
            <label class="flex items-center gap-2">
              <input type="radio" name="gender" class="radio radio-sm radio-accent" value="male" />
              <span class="text-sm">男</span>
            </label>
            <label class="flex items-center gap-2">
              <input
                type="radio"
                name="gender"
                class="radio radio-sm radio-accent"
                value="female"
              />
              <span class="text-sm">女</span>
            </label>
          </div>
        </div>

        <button type="submit" class="btn btn-primary w-full">提交</button>
      </form>
    </DocsSection>

    <DocsSection title="问卷调查">
      <form class="space-y-6 max-w-2xl">
        <div>
          <label class="label-text block mb-2 font-semibold">您对我们的服务满意吗？</label>
          <div class="space-y-2">
            <label class="flex items-center gap-2">
              <input
                type="radio"
                name="satisfaction"
                class="radio radio-error"
                value="not-satisfied"
              />
              <span>不满意</span>
            </label>
            <label class="flex items-center gap-2">
              <input type="radio" name="satisfaction" class="radio radio-warning" value="neutral" />
              <span>一般</span>
            </label>
            <label class="flex items-center gap-2">
              <input
                type="radio"
                name="satisfaction"
                class="radio radio-success"
                value="satisfied"
              />
              <span>满意</span>
            </label>
            <label class="flex items-center gap-2">
              <input
                type="radio"
                name="satisfaction"
                class="radio radio-success"
                value="very-satisfied"
              />
              <span>非常满意</span>
            </label>
          </div>
        </div>

        <div>
          <label class="label-text block mb-2 font-semibold">您会推荐我们吗？</label>
          <div class="flex gap-6">
            <label class="flex items-center gap-2">
              <input type="radio" name="recommend" class="radio radio-primary" value="yes" />
              <span>会</span>
            </label>
            <label class="flex items-center gap-2">
              <input type="radio" name="recommend" class="radio radio-primary" value="maybe" />
              <span>可能</span>
            </label>
            <label class="flex items-center gap-2">
              <input type="radio" name="recommend" class="radio radio-primary" value="no" />
              <span>不会</span>
            </label>
          </div>
        </div>

        <button type="submit" class="btn btn-primary">提交反馈</button>
      </form>
    </DocsSection>
  </DocsContainer>
</template>
