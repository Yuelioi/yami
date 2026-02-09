<script setup lang="ts">
import DocsHeader from '@/components/zcomp/DocsHeader.vue'
import DocsSection from '@/components/zcomp/DocsSection.vue'
import ApiReference from '@/components/zcomp/ApiReference.vue'
import DocsContainer from '@/components/zcomp/DocsContainer.vue'
import { vClickModalOutside } from '../directives/vClickOutside'

const apiClasses = [
  {
    category: '基础',
    className: 'modal',
    description: '模态对话框容器',
    isCategoryStart: true,
  },
  {
    category: '基础',
    className: 'modal-content',
    description: '对话框内容',
    isCategoryStart: false,
  },
  {
    category: '基础',
    className: 'modal-header',
    description: '对话框头部',
    isCategoryStart: false,
  },
  {
    category: '基础',
    className: 'modal-title',
    description: '对话框标题',
    isCategoryStart: false,
  },
  {
    category: '基础',
    className: 'modal-body',
    description: '对话框主体',
    isCategoryStart: false,
  },
  {
    category: '基础',
    className: 'modal-footer',
    description: '对话框页脚',
    isCategoryStart: false,
  },
  {
    category: '基础',
    className: 'modal-close',
    description: '关闭按钮',
    isCategoryStart: false,
  },
  {
    category: '尺寸',
    className: 'modal-content-sm',
    description: '小',
    isCategoryStart: false,
  },
  {
    category: '尺寸',
    className: 'modal-content-md',
    description: '中',
    isCategoryStart: false,
  },
  {
    category: '尺寸',
    className: 'modal-content-lg',
    description: '大',
    isCategoryStart: false,
  },
  {
    category: '尺寸',
    className: 'modal-content-xl',
    description: '超大',
    isCategoryStart: false,
  },
  {
    category: '尺寸',
    className: 'modal-content-full',
    description: '全屏',
    isCategoryStart: false,
  },
  {
    category: '动画',
    className: 'modal-bounce',
    description: '弹跳动画',
    isCategoryStart: false,
  },
  {
    category: '动画',
    className: 'modal-blur',
    description: '背景模糊',
    isCategoryStart: false,
  },
]
</script>

<template>
  <DocsContainer>
    <DocsHeader title="Modal" description="模态对话框组件，用于展示重要信息或确认操作。" />

    <ApiReference :data="apiClasses"></ApiReference>

    <DocsSection title="基础模态框">
      <div class="space-y-2">
        <button class="btn btn-primary" onclick="document.getElementById('modal1').showModal()">
          打开对话框
        </button>

        <dialog id="modal1" class="modal" v-click-modal-outside="">
          <div class="modal-content modal-content-md">
            <div class="modal-header">
              <h3 class="modal-title">欢迎</h3>
              <button class="modal-close" onclick="document.getElementById('modal1').close()">
                ✕
              </button>
            </div>
            <div class="modal-body">
              <p>这是一个基础模态对话框。</p>
            </div>
            <div class="modal-footer">
              <button class="btn btn-ghost" onclick="document.getElementById('modal1').close()">
                取消
              </button>
              <button class="btn btn-primary">确定</button>
            </div>
          </div>
        </dialog>
      </div>
    </DocsSection>

    <DocsSection title="确认对话框">
      <div class="space-y-2">
        <button
          class="btn btn-error"
          onclick="document.getElementById('modal-confirm').showModal()"
        >
          删除项目
        </button>

        <dialog id="modal-confirm" class="modal" v-click-modal-outside="">
          <div class="modal-content modal-content-md">
            <div class="modal-header">
              <h3 class="modal-title">确认删除</h3>
              <button
                class="modal-close"
                onclick="document.getElementById('modal-confirm').close()"
              >
                ✕
              </button>
            </div>
            <div class="modal-body">
              <p class="text-error font-semibold mb-2">⚠️ 警告</p>
              <p>您确定要删除此项目吗？此操作无法撤销。</p>
            </div>
            <div class="modal-footer">
              <button
                class="btn btn-ghost"
                onclick="document.getElementById('modal-confirm').close()"
              >
                取消
              </button>
              <button class="btn btn-error">删除</button>
            </div>
          </div>
        </dialog>
      </div>
    </DocsSection>

    <DocsSection title="尺寸变体">
      <div class="space-y-3">
        <div>
          <button class="btn btn-sm" onclick="document.getElementById('modal-sm').showModal()">
            小对话框
          </button>
          <dialog id="modal-sm" class="modal" v-click-modal-outside="">
            <div class="modal-content modal-content-sm">
              <h3 class="modal-title">小对话框</h3>
              <p class="text-sm">这是一个小尺寸的对话框</p>
              <div class="modal-footer">
                <button
                  class="btn btn-sm btn-ghost"
                  onclick="document.getElementById('modal-sm').close()"
                >
                  关闭
                </button>
              </div>
            </div>
          </dialog>
        </div>

        <div>
          <button class="btn btn-sm" onclick="document.getElementById('modal-lg').showModal()">
            大对话框
          </button>
          <dialog id="modal-lg" class="modal" v-click-modal-outside="">
            <div class="modal-content modal-content-lg">
              <h3 class="modal-title">大对话框</h3>
              <p>这是一个大尺寸的对话框，提供更多空间来展示内容。</p>
              <div class="modal-footer">
                <button
                  class="btn btn-sm btn-ghost"
                  onclick="document.getElementById('modal-lg').close()"
                >
                  关闭
                </button>
              </div>
            </div>
          </dialog>
        </div>

        <div>
          <button class="btn btn-sm" onclick="document.getElementById('modal-xl').showModal()">
            超大对话框
          </button>
          <dialog id="modal-xl" class="modal" v-click-modal-outside="">
            <div class="modal-content modal-content-xl">
              <h3 class="modal-title">超大对话框</h3>
              <p>这是一个超大尺寸的对话框，可以展示更多复杂的内容。</p>
              <div class="modal-footer">
                <button
                  class="btn btn-sm btn-ghost"
                  onclick="document.getElementById('modal-xl').close()"
                >
                  关闭
                </button>
              </div>
            </div>
          </dialog>
        </div>
      </div>
    </DocsSection>

    <DocsSection title="带动画">
      <div class="space-y-2">
        <button
          class="btn btn-primary"
          onclick="document.getElementById('modal-bounce').showModal()"
        >
          弹跳动画
        </button>

        <dialog id="modal-bounce" class="modal modal-bounce">
          <div class="modal-content modal-content-md">
            <div class="modal-header">
              <h3 class="modal-title">动画效果</h3>
              <button class="modal-close" onclick="document.getElementById('modal-bounce').close()">
                ✕
              </button>
            </div>
            <div class="modal-body">
              <p>这个对话框有弹跳动画效果。</p>
            </div>
            <div class="modal-footer">
              <button
                class="btn btn-ghost"
                onclick="document.getElementById('modal-bounce').close()"
              >
                关闭
              </button>
              <button class="btn btn-primary">确定</button>
            </div>
          </div>
        </dialog>
      </div>
    </DocsSection>

    <DocsSection title="带背景模糊">
      <div class="space-y-2">
        <button class="btn btn-primary" onclick="document.getElementById('modal-blur').showModal()">
          模糊背景
        </button>

        <dialog id="modal-blur" class="modal modal-blur">
          <div class="modal-content modal-content-md">
            <div class="modal-header">
              <h3 class="modal-title">背景效果</h3>
              <button class="modal-close" onclick="document.getElementById('modal-blur').close()">
                ✕
              </button>
            </div>
            <div class="modal-body">
              <p>背景会有模糊效果</p>
            </div>
            <div class="modal-footer">
              <button class="btn btn-ghost" onclick="document.getElementById('modal-blur').close()">
                关闭
              </button>
              <button class="btn btn-primary">确定</button>
            </div>
          </div>
        </dialog>
      </div>
    </DocsSection>

    <DocsSection title="表单对话框">
      <div class="space-y-2">
        <button class="btn btn-primary" onclick="document.getElementById('modal-form').showModal()">
          打开表单
        </button>

        <dialog id="modal-form" class="modal" v-click-modal-outside="">
          <div class="modal-content modal-content-md">
            <div class="modal-header">
              <h3 class="modal-title">创建新项目</h3>
              <button class="modal-close" onclick="document.getElementById('modal-form').close()">
                ✕
              </button>
            </div>
            <div class="modal-body space-y-4">
              <div>
                <label class="label-text">项目名称</label>
                <input
                  type="text"
                  placeholder="输入项目名称"
                  class="input input-bordered w-full mt-2"
                />
              </div>
              <div>
                <label class="label-text">描述</label>
                <textarea
                  placeholder="输入项目描述"
                  class="textarea textarea-bordered w-full mt-2"
                ></textarea>
              </div>
            </div>
            <div class="modal-footer">
              <button class="btn btn-ghost" onclick="document.getElementById('modal-form').close()">
                取消
              </button>
              <button class="btn btn-primary">创建</button>
            </div>
          </div>
        </dialog>
      </div>
    </DocsSection>

    <DocsSection title="嵌套对话框">
      <div class="space-y-2">
        <button
          class="btn btn-primary"
          onclick="document.getElementById('modal-outer').showModal()"
        >
          打开外层
        </button>

        <dialog id="modal-outer" class="modal" v-click-modal-outside="">
          <div class="modal-content modal-content-md">
            <div class="modal-header">
              <h3 class="modal-title">外层对话框</h3>
              <button class="modal-close" onclick="document.getElementById('modal-outer').close()">
                ✕
              </button>
            </div>
            <div class="modal-body">
              <p>点击下面的按钮打开内层对话框</p>
            </div>
            <div class="modal-footer">
              <button
                class="btn btn-sm btn-ghost"
                onclick="document.getElementById('modal-inner').showModal()"
              >
                打开内层
              </button>
              <button
                class="btn btn-sm btn-ghost"
                onclick="document.getElementById('modal-outer').close()"
              >
                关闭
              </button>
            </div>
          </div>
        </dialog>

        <dialog id="modal-inner" class="modal" v-click-modal-outside="">
          <div class="modal-content modal-content-sm">
            <h3 class="modal-title">内层对话框</h3>
            <p class="text-sm">这是一个嵌套的对话框</p>
            <div class="modal-footer">
              <button
                class="btn btn-sm btn-ghost"
                onclick="document.getElementById('modal-inner').close()"
              >
                关闭
              </button>
            </div>
          </div>
        </dialog>
      </div>
    </DocsSection>

    <DocsSection title="成功消息">
      <div class="space-y-2">
        <button
          class="btn btn-success"
          onclick="document.getElementById('modal-success').showModal()"
        >
          显示成功
        </button>

        <dialog id="modal-success" class="modal" v-click-modal-outside="">
          <div class="modal-content modal-content-md">
            <div class="modal-header">
              <h3 class="modal-title text-success">✓ 成功</h3>
              <button
                class="modal-close"
                onclick="document.getElementById('modal-success').close()"
              >
                ✕
              </button>
            </div>
            <div class="modal-body">
              <p>操作已成功完成！</p>
            </div>
            <div class="modal-footer">
              <button
                class="btn btn-primary"
                onclick="document.getElementById('modal-success').close()"
              >
                确定
              </button>
            </div>
          </div>
        </dialog>
      </div>
    </DocsSection>
  </DocsContainer>
</template>
