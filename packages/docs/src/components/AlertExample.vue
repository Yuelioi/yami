<script setup lang="ts">
import DocsHeader from '@/components/zcomp/DocsHeader.vue'
import DocsSection from '@/components/zcomp/DocsSection.vue'
import ApiReference from '@/components/zcomp/ApiReference.vue'
import DocsContainer from '@/components/zcomp/DocsContainer.vue'
import { ref } from 'vue'

const apiClasses = [
  {
    category: '基础',
    className: 'alert',
    description: '警告提示容器',
    isCategoryStart: true,
  },
  {
    category: '基础',
    className: 'alert-title',
    description: '标题',
    isCategoryStart: false,
  },
  {
    category: '基础',
    className: 'alert-description',
    description: '描述文字',
    isCategoryStart: false,
  },
  {
    category: '基础',
    className: 'alert-close',
    description: '关闭按钮',
    isCategoryStart: false,
  },
  {
    category: '颜色',
    className: 'alert-info',
    description: '信息',
    isCategoryStart: true,
  },
  {
    category: '颜色',
    className: 'alert-success',
    description: '成功',
    isCategoryStart: false,
  },
  {
    category: '颜色',
    className: 'alert-warning',
    description: '警告',
    isCategoryStart: false,
  },
  {
    category: '颜色',
    className: 'alert-error',
    description: '错误',
    isCategoryStart: false,
  },
  {
    category: '样式',
    className: 'alert-soft',
    description: '更淡的背景（默认）',
    isCategoryStart: true,
  },
  {
    category: '样式',
    className: 'alert-outline',
    description: '无背景描边',
    isCategoryStart: false,
  },
  {
    category: '样式',
    className: 'alert-solid',
    description: '实色背景',
    isCategoryStart: false,
  },
  {
    category: '样式',
    className: 'alert-borderless',
    description: '无边框',
    isCategoryStart: false,
  },
  {
    category: '样式',
    className: 'alert-no-icon',
    description: '隐藏图标',
    isCategoryStart: false,
  },
  {
    category: '尺寸',
    className: 'alert-sm',
    description: '小',
    isCategoryStart: true,
  },
  {
    category: '尺寸',
    className: 'alert-lg',
    description: '大',
    isCategoryStart: false,
  },
]

const alerts = ref([
  { id: 1, type: 'info', msg: '账户邮箱变更需要重新验证。' },
  { id: 2, type: 'success', msg: '文件已成功上传。' },
  { id: 3, type: 'warning', msg: '当前处于只读模式，部分功能不可用。' },
  { id: 4, type: 'error', msg: '请求失败，请检查网络连接后重试。' },
])

const dismiss = (id: number) => {
  alerts.value = alerts.value.filter((a) => a.id !== id)
}
</script>

<template>
  <DocsContainer>
    <DocsHeader
      title="Alert"
      description="警告提示用于展示重要信息、操作结果或状态反馈，Flowbite 风格。"
    />

    <ApiReference :data="apiClasses" />

    <!-- 颜色 -->
    <DocsSection title="颜色">
      <div class="flex flex-col gap-3">
        <div class="alert alert-info">
          <span>这是一条信息提示内容。</span>
        </div>
        <div class="alert alert-success">
          <span>操作已成功完成。</span>
        </div>
        <div class="alert alert-warning">
          <span>请注意，此操作不可撤销。</span>
        </div>
        <div class="alert alert-error">
          <span>发生错误，请稍后重试。</span>
        </div>
      </div>
    </DocsSection>

    <!-- 样式 -->
    <DocsSection title="样式">
      <div>
        <p class="text-sm text-base-content/60 mb-3">默认（soft）</p>
        <div class="flex flex-col gap-3">
          <div class="alert alert-info"><span>信息提示内容。</span></div>
          <div class="alert alert-success"><span>成功提示内容。</span></div>
          <div class="alert alert-warning"><span>警告提示内容。</span></div>
          <div class="alert alert-error"><span>错误提示内容。</span></div>
        </div>
      </div>

      <div>
        <p class="text-sm text-base-content/60 mb-3">描边（outline）</p>
        <div class="flex flex-col gap-3">
          <div class="alert alert-info alert-outline"><span>信息提示内容。</span></div>
          <div class="alert alert-success alert-outline"><span>成功提示内容。</span></div>
          <div class="alert alert-warning alert-outline"><span>警告提示内容。</span></div>
          <div class="alert alert-error alert-outline"><span>错误提示内容。</span></div>
        </div>
      </div>
      <div>
        <p class="text-sm text-base-content/60 mb-3">dashed（border-dashed）</p>
        <div class="flex flex-col gap-3">
          <div class="alert alert-info alert-outline border-dashed">
            <span>信息提示内容。</span>
          </div>
          <div class="alert alert-success alert-outline border-dashed">
            <span>成功提示内容。</span>
          </div>
          <div class="alert alert-warning alert-outline border-dashed">
            <span>警告提示内容。</span>
          </div>
          <div class="alert alert-error alert-outline border-dashed">
            <span>错误提示内容。</span>
          </div>
        </div>
      </div>

      <div>
        <p class="text-sm text-base-content/60 mb-3">实色（solid）</p>
        <div class="flex flex-col gap-3">
          <div class="alert alert-info alert-solid"><span>信息提示内容。</span></div>
          <div class="alert alert-success alert-solid"><span>成功提示内容。</span></div>
          <div class="alert alert-warning alert-solid"><span>警告提示内容。</span></div>
          <div class="alert alert-error alert-solid"><span>错误提示内容。</span></div>
        </div>
      </div>

      <div>
        <p class="text-sm text-base-content/60 mb-3">无边框（borderless）</p>
        <div class="flex flex-col gap-3">
          <div class="alert alert-info alert-borderless"><span>信息提示内容。</span></div>
          <div class="alert alert-success alert-borderless"><span>成功提示内容。</span></div>
        </div>
      </div>
    </DocsSection>

    <!-- 带标题描述 -->
    <DocsSection title="带标题描述">
      <div class="flex flex-col gap-3 max-w-lg">
        <div class="alert alert-info">
          <div>
            <div class="alert-title">账户验证</div>
            <div class="alert-description">你的邮箱尚未验证，部分功能受到限制。</div>
          </div>
        </div>
        <div class="alert alert-success">
          <div>
            <div class="alert-title">保存成功</div>
            <div class="alert-description">你的设置已保存，变更将在下次登录后生效。</div>
          </div>
        </div>
        <div class="alert alert-warning">
          <div>
            <div class="alert-title">存储空间不足</div>
            <div class="alert-description">当前已使用 90% 的存储空间，请及时清理。</div>
          </div>
        </div>
        <div class="alert alert-error">
          <div>
            <div class="alert-title">上传失败</div>
            <div class="alert-description">文件大小超出限制，最大支持 10MB。</div>
          </div>
        </div>
      </div>
    </DocsSection>

    <!-- 带关闭按钮 -->
    <DocsSection title="带关闭按钮">
      <div class="flex flex-col gap-3 max-w-lg">
        <TransitionGroup
          enter-from-class="alert-enter-from"
          enter-active-class="alert-enter-active"
          enter-to-class="alert-enter-to"
          leave-from-class="alert-leave-from"
          leave-active-class="alert-leave-active"
          leave-to-class="alert-leave-to"
        >
          <div v-for="a in alerts" :key="a.id" class="alert" :class="`alert-${a.type}`">
            <span>{{ a.msg }}</span>
            <button class="alert-close" @click="dismiss(a.id)" />
          </div>
        </TransitionGroup>

        <button
          v-if="alerts.length < 4"
          class="btn btn-sm btn-outline btn-primary self-start"
          @click="
            alerts = [
              { id: Date.now(), type: 'info', msg: '账户邮箱变更需要重新验证。' },
              { id: Date.now() + 1, type: 'success', msg: '文件已成功上传。' },
              { id: Date.now() + 2, type: 'warning', msg: '当前处于只读模式，部分功能不可用。' },
              { id: Date.now() + 3, type: 'error', msg: '请求失败，请检查网络连接后重试。' },
            ]
          "
        >
          重置示例
        </button>
      </div>
    </DocsSection>

    <!-- 带关闭按钮 + 标题 -->
    <DocsSection title="带标题与关闭按钮">
      <div class="flex flex-col gap-3 max-w-lg">
        <div class="alert alert-warning">
          <div class="flex-1">
            <div class="alert-title">存储空间不足</div>
            <div class="alert-description">当前已使用 90% 的存储空间，请及时清理文件。</div>
          </div>
          <button class="alert-close self-start" />
        </div>
        <div class="alert alert-error alert-solid">
          <div class="flex-1">
            <div class="alert-title">上传失败</div>
            <div class="alert-description">文件大小超出限制，最大支持 10MB。</div>
          </div>
          <button class="alert-close self-start" />
        </div>
      </div>
    </DocsSection>

    <!-- 无图标 -->
    <DocsSection title="无图标">
      <div class="flex flex-col gap-3 max-w-lg">
        <div class="alert alert-info alert-no-icon">
          <span>这是一条没有图标的提示内容。</span>
          <button class="alert-close" />
        </div>
        <div class="alert alert-success alert-no-icon">
          <div class="flex-1">
            <div class="alert-title">保存成功</div>
            <div class="alert-description">你的设置已成功保存。</div>
          </div>
        </div>
      </div>
    </DocsSection>

    <!-- 尺寸 -->
    <DocsSection title="尺寸">
      <div class="flex flex-col gap-3 max-w-lg">
        <div class="alert alert-info alert-sm">
          <span>小尺寸提示内容。</span>
          <button class="alert-close" />
        </div>
        <div class="alert alert-info">
          <span>默认尺寸提示内容。</span>
          <button class="alert-close" />
        </div>
        <div class="alert alert-info alert-lg">
          <span>大尺寸提示内容。</span>
          <button class="alert-close" />
        </div>
      </div>
    </DocsSection>
    <DocsSection title="尺寸">
      <div class="alert alert-soft alert-primary" role="alert">
        Please read the <a href="#" class="link link-primary font-semibold">policy</a>. These can be
        configured in Settings.
        <div class="mt-4 flex gap-2">
          <button type="button" class="btn btn-primary btn-sm">Ok</button>
          <button type="button" class="btn btn-outline btn-secondary btn-sm">Cancel</button>
        </div>
      </div>
    </DocsSection>
  </DocsContainer>
</template>
