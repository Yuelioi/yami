<script setup lang="ts">
import DocsHeader from '@/components/zcomp/DocsHeader.vue'
import DocsSection from '@/components/zcomp/DocsSection.vue'
import ApiReference from '@/components/zcomp/ApiReference.vue'
import DocsContainer from '@/components/zcomp/DocsContainer.vue'
import { initPopovers } from '@yuelioi/yami/plugins/popover'
import { onMounted } from 'vue'

onMounted(() => {
  initPopovers()
})

const apiClasses = [
  { category: '基础', className: 'popover', description: 'Popover 容器', isCategoryStart: true },
  { category: '基础', className: 'popover-title', description: '标题', isCategoryStart: false },
  { category: '基础', className: 'popover-body', description: '内容文字', isCategoryStart: false },
  {
    category: '基础',
    className: 'popover-footer',
    description: '底部操作区',
    isCategoryStart: false,
  },
  { category: '基础', className: 'popover-arrow', description: '指向箭头', isCategoryStart: false },
  { category: '样式', className: 'popover-dark', description: '深色主题', isCategoryStart: true },
  {
    category: '样式',
    className: 'popover-compact',
    description: '紧凑内边距',
    isCategoryStart: false,
  },
  {
    category: '样式',
    className: 'popover-no-arrow',
    description: '隐藏箭头',
    isCategoryStart: false,
  },
  { category: '宽度', className: 'popover-sm', description: '14rem', isCategoryStart: true },
  { category: '宽度', className: 'popover-lg', description: '28rem', isCategoryStart: false },
  { category: '宽度', className: 'popover-xl', description: '36rem', isCategoryStart: false },
  {
    category: 'data 属性',
    className: 'data-popover-toggle',
    description: '触发元素，值为 popover id',
    isCategoryStart: true,
  },
  {
    category: 'data 属性',
    className: 'data-popover-placement',
    description: 'top / bottom / left / right / *-start / *-end',
    isCategoryStart: false,
  },
  {
    category: 'data 属性',
    className: 'data-popover-trigger',
    description: 'click（默认）/ hover / focus',
    isCategoryStart: false,
  },
  {
    category: 'data 属性',
    className: 'data-popover-offset',
    description: '与触发元素的间距（px，默认 8）',
    isCategoryStart: false,
  },
  {
    category: 'data 属性',
    className: 'data-popover-delay',
    description: 'hover 触发延迟（ms）',
    isCategoryStart: false,
  },
]
</script>

<template>
  <DocsContainer>
    <DocsHeader
      title="Popover"
      description="气泡弹出层，用于展示额外信息或操作，支持 12 个方向、点击/悬停/聚焦三种触发方式。"
    />

    <ApiReference :data="apiClasses" />

    <!-- 基础 -->
    <DocsSection title="基础">
      <div class="flex flex-wrap gap-4 items-center" style="min-height: 12rem; align-items: center">
        <button
          class="btn btn-primary"
          data-popover-toggle="pop-basic"
          data-popover-placement="bottom"
        >
          点击显示
        </button>

        <div id="pop-basic" class="popover" hidden>
          <div class="popover-arrow" />
          <p class="popover-title">气泡标题</p>
          <p class="popover-body">这是一段气泡描述文字，用于补充说明触发元素的额外信息。</p>
        </div>
      </div>
    </DocsSection>

    <!-- 方向 -->
    <DocsSection title="方向">
      <div class="grid grid-cols-3 gap-3 max-w-sm" style="min-height: 20rem">
        <div class="flex justify-center">
          <button
            class="btn btn-sm btn-outline"
            data-popover-toggle="pop-tl"
            data-popover-placement="top-start"
          >
            上左
          </button>
          <div id="pop-tl" class="popover popover-compact" hidden>
            <div class="popover-arrow" />
            <p class="popover-body">top-start</p>
          </div>
        </div>

        <div class="flex justify-center">
          <button
            class="btn btn-sm btn-outline"
            data-popover-toggle="pop-top"
            data-popover-placement="top"
          >
            上中
          </button>
          <div id="pop-top" class="popover popover-compact" hidden>
            <div class="popover-arrow" />
            <p class="popover-body">top</p>
          </div>
        </div>

        <div class="flex justify-center">
          <button
            class="btn btn-sm btn-outline"
            data-popover-toggle="pop-tr"
            data-popover-placement="top-end"
          >
            上右
          </button>
          <div id="pop-tr" class="popover popover-compact" hidden>
            <div class="popover-arrow" />
            <p class="popover-body">top-end</p>
          </div>
        </div>

        <div class="flex justify-center">
          <button
            class="btn btn-sm btn-outline"
            data-popover-toggle="pop-lt"
            data-popover-placement="left-start"
          >
            左上
          </button>
          <div id="pop-lt" class="popover popover-compact" hidden>
            <div class="popover-arrow" />
            <p class="popover-body">left-start</p>
          </div>
        </div>

        <div />

        <div class="flex justify-center">
          <button
            class="btn btn-sm btn-outline"
            data-popover-toggle="pop-rt"
            data-popover-placement="right-start"
          >
            右上
          </button>
          <div id="pop-rt" class="popover popover-compact" hidden>
            <div class="popover-arrow" />
            <p class="popover-body">right-start</p>
          </div>
        </div>

        <div class="flex justify-center">
          <button
            class="btn btn-sm btn-outline"
            data-popover-toggle="pop-lm"
            data-popover-placement="left"
          >
            左中
          </button>
          <div id="pop-lm" class="popover popover-compact" hidden>
            <div class="popover-arrow" />
            <p class="popover-body">left</p>
          </div>
        </div>

        <div />

        <div class="flex justify-center">
          <button
            class="btn btn-sm btn-outline"
            data-popover-toggle="pop-rm"
            data-popover-placement="right"
          >
            右中
          </button>
          <div id="pop-rm" class="popover popover-compact" hidden>
            <div class="popover-arrow" />
            <p class="popover-body">right</p>
          </div>
        </div>

        <div class="flex justify-center">
          <button
            class="btn btn-sm btn-outline"
            data-popover-toggle="pop-bl"
            data-popover-placement="bottom-start"
          >
            下左
          </button>
          <div id="pop-bl" class="popover popover-compact" hidden>
            <div class="popover-arrow" />
            <p class="popover-body">bottom-start</p>
          </div>
        </div>

        <div class="flex justify-center">
          <button
            class="btn btn-sm btn-outline"
            data-popover-toggle="pop-bot"
            data-popover-placement="bottom"
          >
            下中
          </button>
          <div id="pop-bot" class="popover popover-compact" hidden>
            <div class="popover-arrow" />
            <p class="popover-body">bottom</p>
          </div>
        </div>

        <div class="flex justify-center">
          <button
            class="btn btn-sm btn-outline"
            data-popover-toggle="pop-br"
            data-popover-placement="bottom-end"
          >
            下右
          </button>
          <div id="pop-br" class="popover popover-compact" hidden>
            <div class="popover-arrow" />
            <p class="popover-body">bottom-end</p>
          </div>
        </div>
      </div>
    </DocsSection>

    <!-- 触发方式 -->
    <DocsSection title="触发方式">
      <div class="flex flex-wrap gap-4" style="min-height: 10rem; align-items: center">
        <div>
          <button
            class="btn btn-outline"
            data-popover-toggle="pop-click"
            data-popover-placement="bottom"
            data-popover-trigger="click"
          >
            点击触发
          </button>
          <div id="pop-click" class="popover" hidden>
            <div class="popover-arrow" />
            <p class="popover-title">点击触发</p>
            <p class="popover-body">点击按钮显示，再次点击或点击外部关闭。</p>
          </div>
        </div>

        <div>
          <button
            class="btn btn-outline"
            data-popover-toggle="pop-hover"
            data-popover-placement="bottom"
            data-popover-trigger="hover"
          >
            悬停触发
          </button>
          <div id="pop-hover" class="popover" hidden>
            <div class="popover-arrow" />
            <p class="popover-title">悬停触发</p>
            <p class="popover-body">鼠标移入显示，移出后自动关闭。</p>
          </div>
        </div>

        <div>
          <input
            class="input input-bordered w-36"
            placeholder="聚焦触发"
            data-popover-toggle="pop-focus"
            data-popover-placement="bottom"
            data-popover-trigger="focus"
          />
          <div id="pop-focus" class="popover" hidden>
            <div class="popover-arrow" />
            <p class="popover-title">聚焦触发</p>
            <p class="popover-body">输入框获取焦点时显示，失焦后关闭。</p>
          </div>
        </div>
      </div>
    </DocsSection>

    <!-- 带操作按钮 -->
    <DocsSection title="带操作按钮">
      <div class="flex flex-wrap gap-4" style="min-height: 12rem; align-items: center">
        <div>
          <button
            class="btn btn-primary"
            data-popover-toggle="pop-action"
            data-popover-placement="bottom"
          >
            确认操作
          </button>
          <div id="pop-action" class="popover" hidden>
            <div class="popover-arrow" />
            <p class="popover-title">确认删除？</p>
            <p class="popover-body">此操作无法撤销，请确认是否继续。</p>
            <div class="popover-footer">
              <button class="btn btn-xs btn-ghost">取消</button>
              <button class="btn btn-xs btn-error">确认删除</button>
            </div>
          </div>
        </div>

        <div>
          <button
            class="btn btn-outline"
            data-popover-toggle="pop-user"
            data-popover-placement="bottom-start"
          >
            用户信息
          </button>
          <div id="pop-user" class="popover popover-lg" hidden>
            <div class="popover-arrow" />
            <div class="flex items-center gap-3 mb-3">
              <div
                class="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-content font-bold shrink-0"
              >
                张
              </div>
              <div>
                <p class="popover-title mb-0">张三</p>
                <p class="text-xs text-base-content/50">zhangsan@example.com</p>
              </div>
            </div>
            <p class="popover-body">全栈工程师，专注于前端开发与 UI 设计。已加入 3 年。</p>
            <div class="popover-footer">
              <button class="btn btn-xs btn-ghost">发消息</button>
              <button class="btn btn-xs btn-primary">查看主页</button>
            </div>
          </div>
        </div>
      </div>
    </DocsSection>

    <!-- 样式变体 -->
    <DocsSection title="样式变体">
      <div class="flex flex-wrap gap-4" style="min-height: 12rem; align-items: center">
        <!-- 深色 -->
        <div>
          <button
            class="btn btn-neutral"
            data-popover-toggle="pop-dark"
            data-popover-placement="bottom"
          >
            深色
          </button>
          <div id="pop-dark" class="popover popover-dark" hidden>
            <div class="popover-arrow" />
            <p class="popover-title">深色气泡</p>
            <p class="popover-body">适合在浅色背景上强调信息。</p>
          </div>
        </div>

        <!-- 无箭头 -->
        <div>
          <button
            class="btn btn-outline"
            data-popover-toggle="pop-no-arrow"
            data-popover-placement="bottom"
          >
            无箭头
          </button>
          <div id="pop-no-arrow" class="popover popover-no-arrow" hidden>
            <p class="popover-title">无箭头气泡</p>
            <p class="popover-body">适合不需要明确指向的场景。</p>
          </div>
        </div>

        <!-- 紧凑 -->
        <div>
          <button
            class="btn btn-outline"
            data-popover-toggle="pop-compact"
            data-popover-placement="bottom"
          >
            紧凑
          </button>
          <div id="pop-compact" class="popover popover-compact" hidden>
            <div class="popover-arrow" />
            <p class="popover-title">紧凑模式</p>
            <p class="popover-body">更小的内边距，适合工具提示场景。</p>
          </div>
        </div>
      </div>
    </DocsSection>

    <!-- 富内容 -->
    <DocsSection title="富内容">
      <div class="flex flex-wrap gap-4" style="min-height: 14rem; align-items: center">
        <!-- 图片 -->
        <div>
          <button
            class="btn btn-outline"
            data-popover-toggle="pop-image"
            data-popover-placement="right"
          >
            图片预览
          </button>
          <div
            id="pop-image"
            class="popover popover-lg popover-no-arrow"
            style="padding: 0; overflow: hidden"
            hidden
          >
            <img
              src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&q=80"
              class="w-full h-36 object-cover"
              alt="preview"
            />
            <div class="p-3">
              <p class="popover-title">山间晨雾</p>
              <p class="popover-body">清晨的山脉笼罩在薄雾之中，宁静而壮阔。</p>
            </div>
          </div>
        </div>

        <!-- 快捷键 -->
        <div>
          <button
            class="btn btn-outline"
            data-popover-toggle="pop-kbd"
            data-popover-placement="bottom"
            data-popover-trigger="hover"
          >
            保存
          </button>
          <div id="pop-kbd" class="popover popover-compact popover-dark" hidden>
            <div class="popover-arrow" />
            <div class="flex items-center gap-2 text-sm">
              <span>保存文件</span>
              <div class="flex items-center gap-1 ml-auto">
                <kbd class="kbd kbd-xs">⌘</kbd>
                <kbd class="kbd kbd-xs">S</kbd>
              </div>
            </div>
          </div>
        </div>

        <!-- 进度信息 -->
        <div>
          <button
            class="btn btn-outline"
            data-popover-toggle="pop-progress"
            data-popover-placement="bottom"
          >
            存储详情
          </button>
          <div id="pop-progress" class="popover" hidden>
            <div class="popover-arrow" />
            <p class="popover-title">存储空间</p>
            <div class="space-y-2 mt-1">
              <div>
                <div class="flex justify-between text-xs text-base-content/60 mb-1">
                  <span>已使用</span><span>7.2 GB / 10 GB</span>
                </div>
                <div class="w-full h-1.5 bg-base-200 rounded-full overflow-hidden">
                  <div class="h-full bg-primary rounded-full" style="width: 72%" />
                </div>
              </div>
              <div class="flex justify-between text-xs text-base-content/50">
                <span>文档 3.1 GB</span>
                <span>图片 2.8 GB</span>
                <span>其他 1.3 GB</span>
              </div>
            </div>
            <div class="popover-footer">
              <button class="btn btn-xs btn-primary w-full">管理存储</button>
            </div>
          </div>
        </div>
      </div>
    </DocsSection>
  </DocsContainer>
</template>
