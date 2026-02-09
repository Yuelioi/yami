<script setup lang="ts">
import DocsHeader from '@/components/zcomp/DocsHeader.vue'
import DocsSection from '@/components/zcomp/DocsSection.vue'
import ApiReference from '@/components/zcomp/ApiReference.vue'
import DocsContainer from '@/components/zcomp/DocsContainer.vue'

const apiClasses = [
  {
    category: '基础',
    className: 'label-text',
    description: '标签文本',
    isCategoryStart: true,
  },
  {
    category: '基础',
    className: 'helper-text',
    description: '辅助文本',
    isCategoryStart: false,
  },
  {
    category: '反馈',
    className: 'success-message',
    description: '成功消息',
    isCategoryStart: false,
  },
  {
    category: '反馈',
    className: 'error-message',
    description: '错误消息',
    isCategoryStart: false,
  },
]
</script>

<template>
  <DocsContainer>
    <DocsHeader title="Label" description="表单标签和提示文本组件，用于表单字段的标记和说明。" />

    <ApiReference :data="apiClasses"></ApiReference>

    <DocsSection title="基础标签">
      <label class="form-control">
        <div class="label">
          <span class="label-text">用户名</span>
        </div>
        <input type="text" placeholder="输入用户名" class="input input-bordered" />
      </label>
    </DocsSection>

    <DocsSection title="带辅助文本">
      <label class="form-control">
        <div class="label">
          <span class="label-text">邮箱地址</span>
        </div>
        <input type="email" placeholder="example@mail.com" class="input input-bordered" />
        <div class="label">
          <span class="helper-text">我们永远不会分享您的电子邮件</span>
        </div>
      </label>
    </DocsSection>

    <DocsSection title="标签和值">
      <label class="form-control">
        <div class="label">
          <span class="label-text">密码</span>
          <span class="label-text-alt">忘记密码?</span>
        </div>
        <input type="password" placeholder="输入密码" class="input input-bordered" />
      </label>
    </DocsSection>

    <DocsSection title="成功反馈">
      <label class="form-control">
        <div class="label">
          <span class="label-text">用户名</span>
        </div>
        <input type="text" value="john_doe" class="input input-bordered input-success" />
        <div class="label">
          <span class="success-message" style="display: block">用户名可用</span>
        </div>
      </label>
    </DocsSection>

    <DocsSection title="错误反馈">
      <label class="form-control">
        <div class="label">
          <span class="label-text">邮箱</span>
        </div>
        <input type="email" value="invalid-email" class="input input-bordered input-error" />
        <div class="label">
          <span class="error-message" style="display: block">请输入有效的邮箱地址</span>
        </div>
      </label>
    </DocsSection>

    <DocsSection title="必填字段标记">
      <label class="form-control">
        <div class="label">
          <span class="label-text">电话号码 <span class="text-error">*</span></span>
        </div>
        <input type="tel" placeholder="输入电话号码" class="input input-bordered" />
        <div class="label">
          <span class="helper-text">必填项</span>
        </div>
      </label>
    </DocsSection>

    <DocsSection title="完整表单示例">
      <form class="space-y-4">
        <label class="form-control">
          <div class="label">
            <span class="label-text">邮箱 <span class="text-error">*</span></span>
          </div>
          <input type="email" placeholder="your@email.com" class="input input-bordered" />
          <div class="label">
            <span class="helper-text">请输入有效的邮箱地址</span>
          </div>
        </label>

        <label class="form-control">
          <div class="label">
            <span class="label-text">密码 <span class="text-error">*</span></span>
          </div>
          <input type="password" placeholder="输入密码" class="input input-bordered" />
          <div class="label">
            <span class="helper-text">至少 8 个字符</span>
          </div>
        </label>

        <label class="form-control">
          <div class="label">
            <span class="label-text">确认密码 <span class="text-error">*</span></span>
          </div>
          <input type="password" placeholder="再次输入密码" class="input input-bordered" />
        </label>

        <label class="form-control">
          <div class="label">
            <span class="label-text">备注</span>
          </div>
          <textarea placeholder="输入备注（可选）" class="textarea textarea-bordered"></textarea>
          <div class="label">
            <span class="helper-text">最多 500 字符</span>
          </div>
        </label>

        <div class="form-control">
          <label class="label cursor-pointer">
            <span class="label-text">我同意服务条款</span>
            <input type="checkbox" class="checkbox" />
          </label>
        </div>

        <div class="flex gap-2">
          <button type="submit" class="btn btn-primary">注册</button>
          <button type="reset" class="btn btn-ghost">清除</button>
        </div>
      </form>
    </DocsSection>

    <DocsSection title="文本大小变体">
      <div class="space-y-4">
        <div>
          <span class="label-text text-xs">超小标签文本</span>
        </div>
        <div>
          <span class="label-text text-sm">小标签文本</span>
        </div>
        <div>
          <span class="label-text text-base">中标签文本</span>
        </div>
        <div>
          <span class="label-text text-lg">大标签文本</span>
        </div>
      </div>
    </DocsSection>

    <DocsSection title="辅助文本示例">
      <div class="space-y-4">
        <div>
          <span class="helper-text">这是辅助文本，用于说明字段要求</span>
        </div>
        <div>
          <span class="helper-text text-base-content/60">半透明的辅助文本</span>
        </div>
        <div>
          <span class="helper-text text-success">✓ 验证通过</span>
        </div>
        <div>
          <span class="helper-text text-warning">⚠ 需要注意</span>
        </div>
      </div>
    </DocsSection>

    <DocsSection title="与验证结合">
      <label class="form-control">
        <div class="label">
          <span class="label-text">用户名</span>
          <span class="label-text-alt text-xs text-base-content/60">3-20 字符</span>
        </div>
        <input type="text" placeholder="username" class="input input-bordered" />
        <div class="label gap-2">
          <span class="helper-text">需要 3-20 个字母数字字符</span>
        </div>
      </label>
    </DocsSection>
  </DocsContainer>
</template>
