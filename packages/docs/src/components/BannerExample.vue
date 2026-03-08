<script setup lang="ts">
import DocsHeader from '@/components/zcomp/DocsHeader.vue'
import DocsSection from '@/components/zcomp/DocsSection.vue'
import ApiReference from '@/components/zcomp/ApiReference.vue'
import DocsContainer from '@/components/zcomp/DocsContainer.vue'
import { ref } from 'vue'

const apiClasses = [
  { category: '基础', className: 'banner', description: '横幅容器', isCategoryStart: true },
  {
    category: '基础',
    className: 'banner-content',
    description: '文字内容区',
    isCategoryStart: false,
  },
  { category: '基础', className: 'banner-title', description: '标题', isCategoryStart: false },
  {
    category: '基础',
    className: 'banner-description',
    description: '描述文字',
    isCategoryStart: false,
  },
  { category: '基础', className: 'banner-actions', description: '操作区', isCategoryStart: false },
  { category: '基础', className: 'banner-close', description: '关闭按钮', isCategoryStart: false },
  { category: '颜色', className: 'banner-info', description: '信息', isCategoryStart: true },
  { category: '颜色', className: 'banner-success', description: '成功', isCategoryStart: false },
  { category: '颜色', className: 'banner-warning', description: '警告', isCategoryStart: false },
  { category: '颜色', className: 'banner-error', description: '错误', isCategoryStart: false },
  {
    category: '颜色',
    className: 'banner-primary',
    description: '主色实色',
    isCategoryStart: false,
  },
  {
    category: '颜色',
    className: 'banner-neutral',
    description: '中性实色',
    isCategoryStart: false,
  },
  { category: '位置', className: 'banner-top', description: '顶部吸附', isCategoryStart: true },
  { category: '位置', className: 'banner-bottom', description: '底部吸附', isCategoryStart: false },
  { category: '尺寸', className: 'banner-sm', description: '小', isCategoryStart: true },
  { category: '尺寸', className: 'banner-lg', description: '大', isCategoryStart: false },
  { category: '其他', className: 'banner-no-icon', description: '隐藏图标', isCategoryStart: true },
]

const showBanners = ref({
  info: true,
  success: true,
  warning: true,
  error: true,
  primary: true,
  neutral: true,
})
</script>

<template>
  <DocsContainer>
    <DocsHeader
      title="Banner"
      description="横幅用于在页面顶部或底部展示全局通知、公告或重要提示信息。"
    />

    <ApiReference :data="apiClasses" />

    <!-- 颜色 -->
    <DocsSection title="颜色">
      <div class="flex flex-col gap-2 overflow-hidden border border-base-200">
        <div class="banner banner-info banner-no-icon" style="position: static">
          <div class="banner-content">这是一条信息横幅提示内容。</div>
        </div>
        <div class="banner banner-success banner-no-icon" style="position: static">
          <div class="banner-content">操作已成功完成，数据已同步。</div>
        </div>
        <div class="banner banner-warning banner-no-icon" style="position: static">
          <div class="banner-content">你的订阅将在 3 天后到期，请及时续费。</div>
        </div>
        <div class="banner banner-error banner-no-icon" style="position: static">
          <div class="banner-content">服务连接异常，部分功能暂时不可用。</div>
        </div>
        <div class="banner banner-primary banner-no-icon" style="position: static">
          <div class="banner-content">新版本已发布，立即查看更新内容。</div>
        </div>
        <div class="banner banner-neutral banner-no-icon" style="position: static">
          <div class="banner-content">系统将于今晚 22:00 进行例行维护。</div>
        </div>
      </div>
    </DocsSection>

    <!-- 带图标 -->
    <DocsSection title="带图标">
      <div class="flex flex-col gap-2 overflow-hidden border border-base-200">
        <div class="banner banner-info" style="position: static">
          <div class="banner-content">账户邮箱尚未验证，请检查收件箱。</div>
        </div>
        <div class="banner banner-warning" style="position: static">
          <div class="banner-content">存储空间已使用 90%，请及时清理。</div>
        </div>
        <div class="banner banner-error" style="position: static">
          <div class="banner-content">支付方式已过期，请更新付款信息。</div>
        </div>
      </div>
    </DocsSection>

    <!-- 带标题描述 -->
    <DocsSection title="带标题描述">
      <div class="flex flex-col gap-2 overflow-hidden border border-base-200">
        <div class="banner banner-info" style="position: static">
          <div class="banner-content">
            <span class="banner-title">系统更新</span>
            <span class="banner-description">新版本 v2.4.0 已发布，包含性能优化与 bug 修复。</span>
          </div>
        </div>
        <div class="banner banner-warning" style="position: static">
          <div class="banner-content">
            <span class="banner-title">订阅即将到期</span>
            <span class="banner-description"
              >你的 Pro 计划将在 3 天后到期，续费以保留所有功能。</span
            >
          </div>
        </div>
      </div>
    </DocsSection>

    <!-- 带操作按钮 -->
    <DocsSection title="带操作按钮">
      <div class="flex flex-col gap-2 overflow-hidden border border-base-200">
        <!-- info + 链接 -->
        <div class="banner banner-info" style="position: static">
          <div class="banner-content">
            <span class="banner-title">新版本可用</span>
            <span class="banner-description">v2.5.0 已发布，包含重要安全更新。</span>
          </div>
          <div class="banner-actions">
            <a class="btn btn-xs btn-soft btn-info">立即更新</a>
            <button class="banner-close" />
          </div>
        </div>

        <!-- warning + 两个按钮 -->
        <div class="banner banner-warning" style="position: static">
          <div class="banner-content">
            你的试用期还剩 <strong>7 天</strong>，升级以解锁全部功能。
          </div>
          <div class="banner-actions">
            <a class="btn btn-xs btn-warning">升级计划</a>
            <button class="banner-close" />
          </div>
        </div>

        <!-- primary 实色 + 操作 -->
        <div class="banner banner-primary" style="position: static">
          <div class="banner-content">
            <span class="banner-title">🎉 黑五特惠</span>
            <span class="banner-description">全场 Pro 计划限时 5 折，今日截止。</span>
          </div>
          <div class="banner-actions">
            <a class="btn btn-xs btn-outline" style="border-color: currentColor; color: inherit"
              >查看详情</a
            >
            <button class="banner-close" />
          </div>
        </div>
      </div>
    </DocsSection>

    <!-- 可关闭 -->
    <DocsSection title="可关闭">
      <div class="flex flex-col gap-2">
        <Transition
          enter-from-class="banner-enter-from"
          enter-active-class="banner-enter-active"
          enter-to-class="banner-enter-to"
          leave-from-class="banner-leave-from"
          leave-active-class="banner-leave-active"
          leave-to-class="banner-leave-to"
        >
          <div v-if="showBanners.info" class="banner banner-info" style="position: static">
            <div class="banner-content">账户邮箱尚未完成验证。</div>
            <button class="banner-close" @click="showBanners.info = false" />
          </div>
        </Transition>

        <Transition
          enter-from-class="banner-enter-from"
          enter-active-class="banner-enter-active"
          enter-to-class="banner-enter-to"
          leave-from-class="banner-leave-from"
          leave-active-class="banner-leave-active"
          leave-to-class="banner-leave-to"
        >
          <div v-if="showBanners.warning" class="banner banner-warning" style="position: static">
            <div class="banner-content">订阅将在 3 天后到期。</div>
            <div class="banner-actions">
              <a class="btn btn-xs btn-warning">续费</a>
              <button class="banner-close" @click="showBanners.warning = false" />
            </div>
          </div>
        </Transition>

        <Transition
          enter-from-class="banner-enter-from"
          enter-active-class="banner-enter-active"
          enter-to-class="banner-enter-to"
          leave-from-class="banner-leave-from"
          leave-active-class="banner-leave-active"
          leave-to-class="banner-leave-to"
        >
          <div v-if="showBanners.error" class="banner banner-error" style="position: static">
            <div class="banner-content">支付方式已过期，请更新。</div>
            <button class="banner-close" @click="showBanners.error = false" />
          </div>
        </Transition>

        <button
          v-if="!showBanners.info || !showBanners.warning || !showBanners.error"
          class="btn btn-sm btn-outline btn-primary self-start mt-1"
          @click="showBanners.info = showBanners.warning = showBanners.error = true"
        >
          重置示例
        </button>
      </div>
    </DocsSection>

    <!-- 尺寸 -->
    <DocsSection title="尺寸">
      <div class="flex flex-col gap-2 overflow-hidden border border-base-200">
        <div class="banner banner-info banner-sm" style="position: static">
          <div class="banner-content">小尺寸横幅提示内容。</div>
          <button class="banner-close" />
        </div>
        <div class="banner banner-info" style="position: static">
          <div class="banner-content">默认尺寸横幅提示内容。</div>
          <button class="banner-close" />
        </div>
        <div class="banner banner-info banner-lg" style="position: static">
          <div class="banner-content">大尺寸横幅提示内容。</div>
          <button class="banner-close" />
        </div>
      </div>
    </DocsSection>

    <!-- 无图标 -->
    <DocsSection title="无图标">
      <div class="flex flex-col gap-2 overflow-hidden border border-base-200">
        <div class="banner banner-primary banner-no-icon" style="position: static">
          <div class="banner-content">
            <span class="banner-title">🎉 新功能上线</span>
            <span class="banner-description">协作白板功能现已开放，邀请团队一起使用。</span>
          </div>
          <div class="banner-actions">
            <a class="btn btn-xs btn-outline" style="border-color: currentColor; color: inherit"
              >了解更多</a
            >
            <button class="banner-close" />
          </div>
        </div>
        <div class="banner banner-neutral banner-no-icon" style="position: static">
          <div class="banner-content">系统将于今晚 22:00 进行例行维护，预计持续 1 小时。</div>
          <button class="banner-close" />
        </div>
      </div>
    </DocsSection>

    <!-- 吸附位置说明 -->
    <DocsSection title="吸附位置">
      <div class="flex flex-col gap-3 text-sm">
        <div class="p-4 bg-base-200">
          <p class="font-semibold text-base-content mb-2">顶部吸附（banner-top）</p>
          <p class="text-base-content/60 mb-3">
            使用
            <code class="badge badge-ghost badge-sm">position: sticky; top: 0</code
            >，随页面滚动吸附在顶部，适合全局通知栏。
          </p>
          <pre
            class="text-xs bg-base-300/50 rounded p-3 overflow-x-auto"
          ><code>&lt;div class="banner banner-warning banner-top"&gt;
  &lt;div class="banner-content"&gt;订阅即将到期。&lt;/div&gt;
  &lt;div class="banner-actions"&gt;
    &lt;a class="btn btn-xs btn-warning"&gt;续费&lt;/a&gt;
    &lt;button class="banner-close" /&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
        </div>

        <div class="p-4 bg-base-200">
          <p class="font-semibold text-base-content mb-2">底部吸附（banner-bottom）</p>
          <p class="text-base-content/60 mb-3">
            使用 <code class="badge badge-ghost badge-sm">position: sticky; bottom: 0</code>，适合
            Cookie 提示或底部操作栏。
          </p>
          <pre
            class="text-xs bg-base-300/50 rounded p-3 overflow-x-auto"
          ><code>&lt;div class="banner banner-neutral banner-bottom"&gt;
  &lt;div class="banner-content"&gt;我们使用 Cookie 改善体验。&lt;/div&gt;
  &lt;div class="banner-actions"&gt;
    &lt;a class="btn btn-xs btn-neutral"&gt;接受&lt;/a&gt;
    &lt;button class="banner-close" /&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
        </div>
      </div>
    </DocsSection>
  </DocsContainer>
</template>

<style scoped>
.banner {
  border-radius: var(--radius-box);
}
</style>
