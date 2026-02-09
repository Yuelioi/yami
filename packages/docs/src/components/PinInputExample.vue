<script setup lang="ts">
import DocsHeader from '@/components/zcomp/DocsHeader.vue'
import DocsSection from '@/components/zcomp/DocsSection.vue'
import ApiReference from '@/components/zcomp/ApiReference.vue'
import DocsContainer from '@/components/zcomp/DocsContainer.vue'

const apiClasses = [
  {
    category: '基础',
    className: 'pin-input',
    description: 'PIN码输入框',
    isCategoryStart: true,
  },
  {
    category: '样式',
    className: 'pin-input-underline',
    description: '下划线样式',
    isCategoryStart: false,
  },
  {
    category: '尺寸',
    className: 'pin-input-xs',
    description: '超小',
    isCategoryStart: false,
  },
  {
    category: '尺寸',
    className: 'pin-input-sm',
    description: '小',
    isCategoryStart: false,
  },
  {
    category: '尺寸',
    className: 'pin-input-md',
    description: '中',
    isCategoryStart: false,
  },
  {
    category: '尺寸',
    className: 'pin-input-lg',
    description: '大',
    isCategoryStart: false,
  },
  {
    category: '尺寸',
    className: 'pin-input-xl',
    description: '超大',
    isCategoryStart: false,
  },
]
</script>

<template>
  <DocsContainer>
    <DocsHeader title="Pin Input" description="PIN码输入组件，用于输入验证码或安全码。" />

    <ApiReference :data="apiClasses"></ApiReference>

    <DocsSection title="基础PIN码输入">
      <div class="flex gap-2 justify-center">
        <input type="text" class="pin-input" maxlength="1" placeholder="0" />
        <input type="text" class="pin-input" maxlength="1" placeholder="0" />
        <input type="text" class="pin-input" maxlength="1" placeholder="0" />
        <input type="text" class="pin-input" maxlength="1" placeholder="0" />
      </div>
    </DocsSection>

    <DocsSection title="6位PIN码">
      <div class="flex gap-2 justify-center">
        <input type="text" class="pin-input" maxlength="1" />
        <input type="text" class="pin-input" maxlength="1" />
        <input type="text" class="pin-input" maxlength="1" />
        <input type="text" class="pin-input" maxlength="1" />
        <input type="text" class="pin-input" maxlength="1" />
        <input type="text" class="pin-input" maxlength="1" />
      </div>
    </DocsSection>

    <DocsSection title="下划线样式">
      <div class="flex gap-4 justify-center">
        <input type="text" class="pin-input pin-input-underline" maxlength="1" />
        <input type="text" class="pin-input pin-input-underline" maxlength="1" />
        <input type="text" class="pin-input pin-input-underline" maxlength="1" />
        <input type="text" class="pin-input pin-input-underline" maxlength="1" />
      </div>
    </DocsSection>

    <DocsSection title="尺寸变体">
      <div class="space-y-6">
        <div>
          <p class="text-sm text-base-content/60 mb-3">超小 (xs)</p>
          <div class="flex gap-2 justify-center">
            <input type="text" class="pin-input pin-input-xs" maxlength="1" />
            <input type="text" class="pin-input pin-input-xs" maxlength="1" />
            <input type="text" class="pin-input pin-input-xs" maxlength="1" />
            <input type="text" class="pin-input pin-input-xs" maxlength="1" />
          </div>
        </div>

        <div>
          <p class="text-sm text-base-content/60 mb-3">小 (sm)</p>
          <div class="flex gap-2 justify-center">
            <input type="text" class="pin-input pin-input-sm" maxlength="1" />
            <input type="text" class="pin-input pin-input-sm" maxlength="1" />
            <input type="text" class="pin-input pin-input-sm" maxlength="1" />
            <input type="text" class="pin-input pin-input-sm" maxlength="1" />
          </div>
        </div>

        <div>
          <p class="text-sm text-base-content/60 mb-3">中 (md) - 默认</p>
          <div class="flex gap-2 justify-center">
            <input type="text" class="pin-input pin-input-md" maxlength="1" />
            <input type="text" class="pin-input pin-input-md" maxlength="1" />
            <input type="text" class="pin-input pin-input-md" maxlength="1" />
            <input type="text" class="pin-input pin-input-md" maxlength="1" />
          </div>
        </div>

        <div>
          <p class="text-sm text-base-content/60 mb-3">大 (lg)</p>
          <div class="flex gap-2 justify-center">
            <input type="text" class="pin-input pin-input-lg" maxlength="1" />
            <input type="text" class="pin-input pin-input-lg" maxlength="1" />
            <input type="text" class="pin-input pin-input-lg" maxlength="1" />
            <input type="text" class="pin-input pin-input-lg" maxlength="1" />
          </div>
        </div>

        <div>
          <p class="text-sm text-base-content/60 mb-3">超大 (xl)</p>
          <div class="flex gap-2 justify-center">
            <input type="text" class="pin-input pin-input-xl" maxlength="1" />
            <input type="text" class="pin-input pin-input-xl" maxlength="1" />
            <input type="text" class="pin-input pin-input-xl" maxlength="1" />
            <input type="text" class="pin-input pin-input-xl" maxlength="1" />
          </div>
        </div>
      </div>
    </DocsSection>

    <DocsSection title="验证码输入">
      <form class="space-y-6">
        <div>
          <label class="label-text block mb-3">输入验证码</label>
          <div class="flex gap-2 justify-center">
            <input type="text" class="pin-input" maxlength="1" inputmode="numeric" />
            <input type="text" class="pin-input" maxlength="1" inputmode="numeric" />
            <input type="text" class="pin-input" maxlength="1" inputmode="numeric" />
            <input type="text" class="pin-input" maxlength="1" inputmode="numeric" />
            <input type="text" class="pin-input" maxlength="1" inputmode="numeric" />
            <input type="text" class="pin-input" maxlength="1" inputmode="numeric" />
          </div>
          <p class="helper-text text-center mt-2">请输入发送到您邮箱的6位验证码</p>
        </div>
        <div class="flex gap-2 justify-center">
          <button type="button" class="btn btn-outline">重新发送</button>
          <button type="submit" class="btn btn-primary">验证</button>
        </div>
      </form>
    </DocsSection>

    <DocsSection title="OTP输入">
      <form class="space-y-6 max-w-md mx-auto">
        <div>
          <h3 class="font-semibold mb-2">两步验证</h3>
          <p class="text-sm text-base-content/70 mb-4">请输入您认证器应用中的6位代码</p>
          <div class="flex gap-3 justify-center">
            <input type="text" class="pin-input pin-input-lg" maxlength="1" inputmode="numeric" />
            <input type="text" class="pin-input pin-input-lg" maxlength="1" inputmode="numeric" />
            <input type="text" class="pin-input pin-input-lg" maxlength="1" inputmode="numeric" />
            <input type="text" class="pin-input pin-input-lg" maxlength="1" inputmode="numeric" />
            <input type="text" class="pin-input pin-input-lg" maxlength="1" inputmode="numeric" />
            <input type="text" class="pin-input pin-input-lg" maxlength="1" inputmode="numeric" />
          </div>
        </div>
        <button type="submit" class="btn btn-primary w-full">验证</button>
      </form>
    </DocsSection>

    <DocsSection title="禁用状态">
      <div class="flex gap-2 justify-center">
        <input type="text" class="pin-input" maxlength="1" value="0" disabled />
        <input type="text" class="pin-input" maxlength="1" value="0" disabled />
        <input type="text" class="pin-input" maxlength="1" disabled />
        <input type="text" class="pin-input" maxlength="1" disabled />
      </div>
    </DocsSection>

    <DocsSection title="密码输入">
      <div class="space-y-4">
        <div>
          <p class="text-sm text-base-content/60 mb-3">使用type="password"隐藏输入</p>
          <div class="flex gap-2 justify-center">
            <input type="password" class="pin-input" maxlength="1" />
            <input type="password" class="pin-input" maxlength="1" />
            <input type="password" class="pin-input" maxlength="1" />
            <input type="password" class="pin-input" maxlength="1" />
          </div>
        </div>
      </div>
    </DocsSection>

    <DocsSection title="字母数字输入">
      <div class="flex gap-2 justify-center">
        <input type="text" class="pin-input uppercase" maxlength="1" placeholder="A" />
        <input type="text" class="pin-input uppercase" maxlength="1" placeholder="B" />
        <input type="text" class="pin-input uppercase" maxlength="1" placeholder="C" />
        <input type="text" class="pin-input uppercase" maxlength="1" placeholder="D" />
      </div>
    </DocsSection>

    <DocsSection title="带标签">
      <form class="space-y-4">
        <div>
          <label class="label-text block mb-2">安全码</label>
          <div class="flex gap-2 justify-center">
            <input type="text" class="pin-input" maxlength="1" inputmode="numeric" />
            <input type="text" class="pin-input" maxlength="1" inputmode="numeric" />
            <input type="text" class="pin-input" maxlength="1" inputmode="numeric" />
          </div>
          <p class="helper-text text-center mt-2">在卡背面找到3位数字</p>
        </div>
      </form>
    </DocsSection>
  </DocsContainer>
</template>
