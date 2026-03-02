<script setup lang="ts">
import DocsHeader from '@/components/zcomp/DocsHeader.vue'
import DocsSection from '@/components/zcomp/DocsSection.vue'
import ApiReference from '@/components/zcomp/ApiReference.vue'
import DocsContainer from '@/components/zcomp/DocsContainer.vue'
import { initModals } from '@yuelioi/yami/plugins/modal'
import { onMounted } from 'vue'

onMounted(() => {
  initModals()
})

const apiClasses = [
  {
    category: '基础',
    className: 'modal',
    description: '模态对话框容器（dialog 元素）',
    isCategoryStart: true,
  },
  {
    category: '基础',
    className: 'modal-content',
    description: '对话框内容卡片',
    isCategoryStart: false,
  },
  {
    category: '基础',
    className: 'modal-header',
    description: '对话框头部',
    isCategoryStart: false,
  },
  { category: '基础', className: 'modal-title', description: '对话框标题', isCategoryStart: false },
  { category: '基础', className: 'modal-body', description: '对话框主体', isCategoryStart: false },
  {
    category: '基础',
    className: 'modal-footer',
    description: '对话框页脚',
    isCategoryStart: false,
  },
  { category: '基础', className: 'modal-close', description: '关闭按钮', isCategoryStart: false },
  {
    category: '尺寸',
    className: 'modal-content-sm',
    description: '小（20rem）',
    isCategoryStart: true,
  },
  {
    category: '尺寸',
    className: 'modal-content-md',
    description: '中（24rem）',
    isCategoryStart: false,
  },
  {
    category: '尺寸',
    className: 'modal-content-lg',
    description: '大（32rem）',
    isCategoryStart: false,
  },
  {
    category: '尺寸',
    className: 'modal-content-xl',
    description: '超大（40rem）',
    isCategoryStart: false,
  },
  {
    category: '尺寸',
    className: 'modal-content-full',
    description: '全屏（95vw）',
    isCategoryStart: false,
  },
  {
    category: '动画',
    className: 'modal-bounce',
    description: '弹跳入场动画',
    isCategoryStart: true,
  },
  {
    category: '动画',
    className: 'modal-blur',
    description: '背景模糊效果',
    isCategoryStart: false,
  },
  {
    category: 'data 属性',
    className: 'data-modal-toggle',
    description: '触发按钮，值为 dialog id',
    isCategoryStart: true,
  },
  {
    category: 'data 属性',
    className: 'data-modal-close',
    description: '关闭按钮（放在 dialog 内部）',
    isCategoryStart: false,
  },
  {
    category: 'data 属性',
    className: 'data-modal-backdrop="false"',
    description: '禁用点击遮罩关闭',
    isCategoryStart: false,
  },
  {
    category: 'data 属性',
    className: 'data-modal-esc="false"',
    description: '禁用 ESC 关闭',
    isCategoryStart: false,
  },
]
</script>

<template>
  <DocsContainer>
    <DocsHeader
      title="Modal"
      description="模态对话框组件，基于原生 dialog 元素，支持点击遮罩关闭、ESC 关闭与多种动画效果。"
    />

    <ApiReference :data="apiClasses" />

    <!-- 基础 -->
    <DocsSection title="基础">
      <button class="btn btn-primary" data-modal-toggle="modal-basic">打开对话框</button>

      <dialog id="modal-basic" class="modal">
        <div class="modal-content modal-content-md">
          <div class="modal-header">
            <h3 class="modal-title">欢迎</h3>
            <button class="modal-close" data-modal-close>✕</button>
          </div>
          <div class="modal-body">
            <p>这是一个基础模态对话框，点击遮罩或按 ESC 可关闭。</p>
          </div>
          <div class="modal-footer">
            <button class="btn btn-ghost" data-modal-close>取消</button>
            <button class="btn btn-primary">确定</button>
          </div>
        </div>
      </dialog>
    </DocsSection>

    <!-- 确认对话框 -->
    <DocsSection title="确认对话框">
      <button class="btn btn-error" data-modal-toggle="modal-confirm">删除项目</button>

      <dialog id="modal-confirm" class="modal">
        <div class="modal-content modal-content-md">
          <div class="modal-header">
            <h3 class="modal-title">确认删除</h3>
            <button class="modal-close" data-modal-close>✕</button>
          </div>
          <div class="modal-body space-y-2">
            <p class="text-error font-semibold">⚠️ 警告</p>
            <p>您确定要删除此项目吗？此操作无法撤销。</p>
          </div>
          <div class="modal-footer">
            <button class="btn btn-ghost" data-modal-close>取消</button>
            <button class="btn btn-error">删除</button>
          </div>
        </div>
      </dialog>
    </DocsSection>

    <!-- 尺寸 -->
    <DocsSection title="尺寸">
      <div class="flex flex-wrap gap-2">
        <button class="btn btn-sm" data-modal-toggle="modal-sm">小</button>
        <button class="btn btn-sm" data-modal-toggle="modal-md">中</button>
        <button class="btn btn-sm" data-modal-toggle="modal-lg">大</button>
        <button class="btn btn-sm" data-modal-toggle="modal-xl">超大</button>
        <button class="btn btn-sm" data-modal-toggle="modal-full">全屏</button>
      </div>

      <dialog id="modal-sm" class="modal">
        <div class="modal-content modal-content-sm">
          <div class="modal-header">
            <h3 class="modal-title">小对话框</h3>
            <button class="modal-close" data-modal-close>✕</button>
          </div>
          <div class="modal-body"><p class="text-sm">width: 20rem</p></div>
          <div class="modal-footer">
            <button class="btn btn-sm btn-ghost" data-modal-close>关闭</button>
          </div>
        </div>
      </dialog>

      <dialog id="modal-md" class="modal">
        <div class="modal-content modal-content-md">
          <div class="modal-header">
            <h3 class="modal-title">中对话框</h3>
            <button class="modal-close" data-modal-close>✕</button>
          </div>
          <div class="modal-body"><p>width: 24rem</p></div>
          <div class="modal-footer">
            <button class="btn btn-ghost" data-modal-close>关闭</button>
          </div>
        </div>
      </dialog>

      <dialog id="modal-lg" class="modal">
        <div class="modal-content modal-content-lg">
          <div class="modal-header">
            <h3 class="modal-title">大对话框</h3>
            <button class="modal-close" data-modal-close>✕</button>
          </div>
          <div class="modal-body"><p>width: 32rem，提供更多空间展示内容。</p></div>
          <div class="modal-footer">
            <button class="btn btn-ghost" data-modal-close>关闭</button>
          </div>
        </div>
      </dialog>

      <dialog id="modal-xl" class="modal">
        <div class="modal-content modal-content-xl">
          <div class="modal-header">
            <h3 class="modal-title">超大对话框</h3>
            <button class="modal-close" data-modal-close>✕</button>
          </div>
          <div class="modal-body"><p>width: 40rem，适合复杂表单或内容预览。</p></div>
          <div class="modal-footer">
            <button class="btn btn-ghost" data-modal-close>关闭</button>
          </div>
        </div>
      </dialog>

      <dialog id="modal-full" class="modal">
        <div class="modal-content modal-content-full">
          <div class="modal-header">
            <h3 class="modal-title">全屏对话框</h3>
            <button class="modal-close" data-modal-close>✕</button>
          </div>
          <div class="modal-body"><p>width: 95vw，适合图片预览或全屏编辑器。</p></div>
          <div class="modal-footer">
            <button class="btn btn-ghost" data-modal-close>关闭</button>
          </div>
        </div>
      </dialog>
    </DocsSection>

    <!-- 动画 -->
    <DocsSection title="动画">
      <div class="flex flex-wrap gap-2">
        <button class="btn btn-primary" data-modal-toggle="modal-bounce">弹跳动画</button>
        <button class="btn btn-primary" data-modal-toggle="modal-blur">背景模糊</button>
      </div>

      <dialog id="modal-bounce" class="modal modal-bounce">
        <div class="modal-content modal-content-md">
          <div class="modal-header">
            <h3 class="modal-title">弹跳动画</h3>
            <button class="modal-close" data-modal-close>✕</button>
          </div>
          <div class="modal-body"><p>入场时带有弹跳效果。</p></div>
          <div class="modal-footer">
            <button class="btn btn-ghost" data-modal-close>关闭</button>
            <button class="btn btn-primary">确定</button>
          </div>
        </div>
      </dialog>

      <dialog id="modal-blur" class="modal modal-blur">
        <div class="modal-content modal-content-md">
          <div class="modal-header">
            <h3 class="modal-title">背景模糊</h3>
            <button class="modal-close" data-modal-close>✕</button>
          </div>
          <div class="modal-body"><p>遮罩层带有毛玻璃模糊效果。</p></div>
          <div class="modal-footer">
            <button class="btn btn-ghost" data-modal-close>关闭</button>
            <button class="btn btn-primary">确定</button>
          </div>
        </div>
      </dialog>
    </DocsSection>

    <!-- 禁用关闭行为 -->
    <DocsSection title="禁用关闭行为">
      <div class="flex flex-wrap gap-2">
        <button class="btn btn-outline" data-modal-toggle="modal-no-backdrop">禁用遮罩关闭</button>
        <button class="btn btn-outline" data-modal-toggle="modal-no-esc">禁用 ESC 关闭</button>
      </div>

      <dialog id="modal-no-backdrop" class="modal" data-modal-backdrop="false">
        <div class="modal-content modal-content-md">
          <div class="modal-header">
            <h3 class="modal-title">禁用遮罩关闭</h3>
            <button class="modal-close" data-modal-close>✕</button>
          </div>
          <div class="modal-body">
            <p>点击遮罩区域不会关闭此对话框，只能通过按钮关闭。</p>
          </div>
          <div class="modal-footer">
            <button class="btn btn-primary" data-modal-close>我知道了</button>
          </div>
        </div>
      </dialog>

      <dialog id="modal-no-esc" class="modal" data-modal-esc="false">
        <div class="modal-content modal-content-md">
          <div class="modal-header">
            <h3 class="modal-title">禁用 ESC 关闭</h3>
            <button class="modal-close" data-modal-close>✕</button>
          </div>
          <div class="modal-body">
            <p>按下 ESC 键不会关闭此对话框，只能通过按钮关闭。</p>
          </div>
          <div class="modal-footer">
            <button class="btn btn-primary" data-modal-close>我知道了</button>
          </div>
        </div>
      </dialog>
    </DocsSection>

    <!-- 表单对话框 -->
    <DocsSection title="表单对话框">
      <button class="btn btn-primary" data-modal-toggle="modal-form">创建项目</button>

      <dialog id="modal-form" class="modal">
        <div class="modal-content modal-content-md">
          <div class="modal-header">
            <h3 class="modal-title">创建新项目</h3>
            <button class="modal-close" data-modal-close>✕</button>
          </div>
          <div class="modal-body space-y-4">
            <div>
              <label class="label-text">项目名称</label>
              <input
                type="text"
                placeholder="输入项目名称"
                class="input input-bordered w-full mt-1.5"
              />
            </div>
            <div>
              <label class="label-text">描述</label>
              <textarea
                placeholder="输入项目描述"
                class="textarea textarea-bordered w-full mt-1.5"
                rows="3"
              />
            </div>
            <div>
              <label class="label-text">可见性</label>
              <div class="flex gap-4 mt-1.5">
                <label class="flex items-center gap-2 cursor-pointer text-sm">
                  <input
                    type="radio"
                    name="visibility"
                    class="radio radio-sm radio-primary"
                    checked
                  />
                  公开
                </label>
                <label class="flex items-center gap-2 cursor-pointer text-sm">
                  <input type="radio" name="visibility" class="radio radio-sm radio-primary" /> 私有
                </label>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button class="btn btn-ghost" data-modal-close>取消</button>
            <button class="btn btn-primary">创建</button>
          </div>
        </div>
      </dialog>
    </DocsSection>

    <!-- 嵌套对话框 -->
    <DocsSection title="嵌套对话框">
      <button class="btn btn-primary" data-modal-toggle="modal-outer">打开外层</button>

      <dialog id="modal-outer" class="modal">
        <div class="modal-content modal-content-md">
          <div class="modal-header">
            <h3 class="modal-title">外层对话框</h3>
            <button class="modal-close" data-modal-close>✕</button>
          </div>
          <div class="modal-body">
            <p>点击下面的按钮打开内层对话框。</p>
          </div>
          <div class="modal-footer">
            <button class="btn btn-sm btn-ghost" data-modal-close>关闭</button>
            <button class="btn btn-sm btn-primary" data-modal-toggle="modal-inner">打开内层</button>
          </div>
        </div>
      </dialog>

      <dialog id="modal-inner" class="modal">
        <div class="modal-content modal-content-sm">
          <div class="modal-header">
            <h3 class="modal-title">内层对话框</h3>
            <button class="modal-close" data-modal-close>✕</button>
          </div>
          <div class="modal-body">
            <p class="text-sm">这是一个嵌套的对话框。</p>
          </div>
          <div class="modal-footer">
            <button class="btn btn-sm btn-ghost" data-modal-close>关闭</button>
          </div>
        </div>
      </dialog>
    </DocsSection>

    <!-- 状态对话框 -->
    <DocsSection title="状态对话框">
      <div class="flex flex-wrap gap-2">
        <button class="btn btn-success" data-modal-toggle="modal-success">成功</button>
        <button class="btn btn-warning" data-modal-toggle="modal-warning">警告</button>
        <button class="btn btn-error" data-modal-toggle="modal-error">错误</button>
        <button class="btn btn-info" data-modal-toggle="modal-info">信息</button>
      </div>

      <dialog id="modal-success" class="modal">
        <div class="modal-content modal-content-sm">
          <div class="modal-header">
            <h3 class="modal-title text-success">✓ 操作成功</h3>
            <button class="modal-close" data-modal-close>✕</button>
          </div>
          <div class="modal-body"><p class="text-sm">数据已保存，变更将在下次登录后生效。</p></div>
          <div class="modal-footer">
            <button class="btn btn-success" data-modal-close>确定</button>
          </div>
        </div>
      </dialog>

      <dialog id="modal-warning" class="modal">
        <div class="modal-content modal-content-sm">
          <div class="modal-header">
            <h3 class="modal-title text-warning">⚠ 注意</h3>
            <button class="modal-close" data-modal-close>✕</button>
          </div>
          <div class="modal-body"><p class="text-sm">存储空间已使用 90%，建议及时清理。</p></div>
          <div class="modal-footer">
            <button class="btn btn-ghost" data-modal-close>忽略</button>
            <button class="btn btn-warning" data-modal-close>去清理</button>
          </div>
        </div>
      </dialog>

      <dialog id="modal-error" class="modal">
        <div class="modal-content modal-content-sm">
          <div class="modal-header">
            <h3 class="modal-title text-error">✕ 操作失败</h3>
            <button class="modal-close" data-modal-close>✕</button>
          </div>
          <div class="modal-body"><p class="text-sm">网络连接异常，请检查后重试。</p></div>
          <div class="modal-footer">
            <button class="btn btn-ghost" data-modal-close>取消</button>
            <button class="btn btn-error" data-modal-close>重试</button>
          </div>
        </div>
      </dialog>

      <dialog id="modal-info" class="modal">
        <div class="modal-content modal-content-sm">
          <div class="modal-header">
            <h3 class="modal-title text-info">ℹ 提示</h3>
            <button class="modal-close" data-modal-close>✕</button>
          </div>
          <div class="modal-body">
            <p class="text-sm">系统将于今晚 22:00 进行例行维护，预计持续 1 小时。</p>
          </div>
          <div class="modal-footer">
            <button class="btn btn-info" data-modal-close>知道了</button>
          </div>
        </div>
      </dialog>
    </DocsSection>
  </DocsContainer>
</template>
