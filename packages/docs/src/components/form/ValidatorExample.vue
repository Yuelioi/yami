<script setup lang="ts">
import DocsHeader from '../zcomp/DocsHeader.vue'
import DocsContainer from '../zcomp/DocsContainer.vue'
import DocsSection from '../zcomp/DocsSection.vue'
import ApiReference from '../zcomp/ApiReference.vue'

const apiClasses = [
  {
    category: 'Validator',
    className: 'validator',
    description: '表单验证容器，根据状态变化控制输入框颜色。',
    isCategoryStart: true,
  },
  {
    category: 'Validator',
    className: 'validator-hint',
    description: '显示验证提示文本，可见/隐藏根据验证状态。',
    isCategoryStart: false,
  },
]
</script>

<template>
  <DocsContainer>
    <DocsHeader
      title="Validator 表单验证组件"
      description="用于表单输入验证，支持有效/无效状态、错误提示显示以及 focus/checked 等状态联动。"
    />

    <ApiReference :data="apiClasses" />

    <!-- 基础示例 -->
    <DocsSection title="基础验证状态">
      <div class="flex flex-col gap-6 w-full max-w-sm">
        <!-- 默认状态 -->
        <div class="validator">
          <label for="input-default">默认输入</label>
          <input id="input-default" class="input" placeholder="请输入内容..." />
          <div class="validator-hint">这是错误提示</div>
        </div>

        <!-- 有效状态 -->
        <div class="validator" user-valid>
          <label for="input-valid" class="label-required">有效输入</label>
          <input
            id="input-valid"
            class="input input-primary"
            placeholder="请输入内容..."
            maxlength="10"
            value="正确内容"
          />
          <div class="validator-hint">这是错误提示</div>
        </div>

        <input
          type="tel"
          class="input validator tabular-nums"
          required
          placeholder="Phone"
          pattern="[0-9]*"
          minlength="10"
          maxlength="10"
          title="Must be 10 digits"
        />
        <p class="validator-hint">Must be 10 digits</p>

        <!-- 无效状态 -->
        <input
          type="password"
          class="input validator"
          required
          placeholder="Password"
          minlength="8"
          pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
          title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
        />
        <p class="validator-hint">
          Must be more than 8 characters, including
          <br />At least one number <br />At least one lowercase letter <br />At least one uppercase
          letter
        </p>
      </div>
    </DocsSection>

    <!-- 联动 focus / checked -->
    <DocsSection title="联动 focus / checked 状态">
      <div class="validator w-full max-w-sm">
        <label for="input-focus">焦点验证</label>
        <input id="input-focus" class="input input-primary" placeholder="聚焦时显示验证颜色" />
        <div class="validator-hint">提示信息在无效时显示</div>
      </div>
    </DocsSection>
  </DocsContainer>
</template>
