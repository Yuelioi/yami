<template>
  <DocsContainer>
    <DocsHeader
      title="Modal 对话框"
      description="提供弹出模态框容器，支持多种尺寸、动画和背景效果。"
    />

    <ApiReference :data="apiClasses" />

    <DocsSection title="基础用法" class="flex-col">
      <div class="flex flex-wrap gap-4">
        <button class="btn btn-primary" @click="showModal('base')">
          基础结构 (MD 尺寸)
        </button>
        <button class="btn btn-secondary" @click="showModal('sm')">
          Small (sm)
        </button>
        <button class="btn btn-secondary" @click="showModal('lg')">
          Large (lg)
        </button>
        <button class="btn btn-secondary" @click="showModal('xl')">
          Extra Large (xl)
        </button>
        <button class="btn btn-secondary" @click="showModal('full')">
          Full Width (full)
        </button>
        <button class="btn btn-accent" @click="showModal('blur')">
          带背景模糊 (modal-blur)
        </button>
      </div>

      <button class="btn modal-control" onclick="my_modal_1.showModal()">
        open modal
      </button>

      <dialog id="my_modal_1" class="modal" v-click-modal-outside>
        <div class="modal-body modal-body-md">
          <h3 class="text-lg font-bold">Hello!</h3>
        </div>
      </dialog>

      <dialog ref="baseModal" class="modal">
        <div class="modal-body modal-body-md">
          <div class="modal-header">
            <h3 class="modal-title">标准对话框 (MD)</h3>
            <span class="modal-close" @click="closeModal('base')">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </span>
          </div>

          <div class="modal-content">
            <p>这是对话框的主要内容区域。</p>
            <p class="mt-2 text-sm text-muted-foreground">
              此示例演示了 **modal-header**, **modal-title**, **modal-close** 和
              **modal-content** 类名。
            </p>
            <p class="mt-4">滚动测试:</p>
            <div class="h-48 bg-muted/50 p-2 rounded-md">
              <p v-for="n in 10" :key="n" class="py-1">内容行 {{ n }}</p>
            </div>
          </div>

          <div class="modal-footer">
            <button class="btn btn-ghost" @click="closeModal('base')">
              取消
            </button>
            <button class="btn btn-primary">确认操作</button>
          </div>
        </div>
      </dialog>

      <dialog
        v-for="size in ['sm', 'lg', 'xl', 'full']"
        :key="size"
        :ref="setModalRef(size)"
        class="modal"
      >
        <div :class="['modal-body', `modal-body-${size}`]">
          <div class="modal-header">
            <h3 class="modal-title">尺寸示例 ({{ size.toUpperCase() }})</h3>
            <span class="modal-close" @click="closeModal(size)">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </span>
          </div>
          <div class="modal-content">
            <p>这个对话框使用了 `modal-body-{{ size }}` 类名。</p>
            <p v-if="size === 'full'" class="text-destructive mt-2">
              注意：'full' 尺寸接近视口宽度。
            </p>
          </div>
          <div class="modal-footer">
            <button class="btn btn-primary" @click="closeModal(size)">
              关闭
            </button>
          </div>
        </div>
      </dialog>

      <dialog ref="blurModal" class="modal modal-blur">
        <div class="modal-body modal-body-md">
          <div class="modal-header">
            <h3 class="modal-title">背景模糊示例</h3>
            <span class="modal-close" @click="closeModal('blur')">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </span>
          </div>
          <div class="modal-content">
            <p class="text-success">请查看背景，它应该被轻微模糊了。</p>
          </div>
          <div class="modal-footer">
            <button class="btn btn-primary" @click="closeModal('blur')">
              关闭
            </button>
          </div>
        </div>
      </dialog>
    </DocsSection>

    <hr class="border-border" />

    <section class="bg-card p-6 rounded-lg shadow-sm border border-border">
      <h2 class="text-xl font-semibold mb-4 text-primary">2. 动画变体示例</h2>
      <div class="flex flex-wrap gap-4">
        <button class="btn btn-primary" @click="showModal('bounce')">
          缩放弹出 (modal-bounce)
        </button>
      </div>

      <dialog
        ref="bounceModal"
        class="modal modal-bounce"
        v-click-modal-outside=""
      >
        <div class="modal-body modal-body-sm">
          <div class="modal-header">
            <h3 class="modal-title">Bounce 动画</h3>
            <span class="modal-close" @click="closeModal('bounce')">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </span>
          </div>
          <div class="modal-content">
            <p>使用 `modal-bounce`。</p>
          </div>
          <div class="modal-footer">
            <button class="btn btn-primary" @click="closeModal('bounce')">
              关闭
            </button>
          </div>
        </div>
      </dialog>
    </section>
  </DocsContainer>
</template>

<script setup>
import { ref, onMounted } from "vue";

import { vClickModalOutside } from "../../directives/vClickOutside";

import DocsHeader from "../zcomp/DocsHeader.vue";
import ApiReference from "../zcomp/ApiReference.vue";
import DocsContainer from "../zcomp/DocsContainer.vue";
import DocsSection from "../zcomp/DocsSection.vue";

const apiClasses = [
  {
    category: "基础",
    className: "modal",
    description: "模态框容器基础样式，隐藏状态默认不可见。",
    isCategoryStart: true,
  },
  {
    category: "Body",
    className: "modal-body",
    description: "模态框内容容器，支持缩放和透明度动画。",
    isCategoryStart: false,
  },
  {
    category: "Body 尺寸变体",
    className: "modal-body-sm / md / lg / xl / full",
    description: "模态框内容不同宽度尺寸。",
    isCategoryStart: false,
  },
  {
    category: "Header",
    className: "modal-header / modal-title",
    description: "模态框头部容器与标题样式。",
    isCategoryStart: false,
  },
  {
    category: "Close 按钮",
    className: "modal-close",
    description: "关闭按钮样式。",
    isCategoryStart: false,
  },
  {
    category: "Content",
    className: "modal-content",
    description: "模态框滚动内容区域。",
    isCategoryStart: false,
  },
  {
    category: "Footer",
    className: "modal-footer",
    description: "底部按钮区域。",
    isCategoryStart: false,
  },
  {
    category: "动画变体",
    className: "modal-bounce / modal-blur",
    description: "弹出动画和背景模糊效果。",
    isCategoryStart: false,
  },
];

// ----------------------------------------------------
// 模态框控制逻辑
// ----------------------------------------------------

// 集中存储所有 modal 的引用
const modalRefs = ref({});

// 静态 Modal 引用
const baseModal = ref(null);
const blurModal = ref(null);
const slideDownModal = ref(null);
const slideUpModal = ref(null);
const bounceModal = ref(null);

// 动态尺寸 Modal 的引用辅助函数
const setModalRef = (size) => (el) => {
  if (el) {
    modalRefs.value[size] = el;
  }
};

onMounted(() => {
  // 初始化所有静态引用的 map
  modalRefs.value["base"] = baseModal.value;
  modalRefs.value["blur"] = blurModal.value;
  modalRefs.value["slide-down"] = slideDownModal.value;
  modalRefs.value["slide-up"] = slideUpModal.value;
  modalRefs.value["bounce"] = bounceModal.value;

  // // **重要**：使用 <dialog> 原生 API 来控制显示/隐藏
  // Object.values(modalRefs.value).forEach((modal) => {
  //   if (!modal) return;
  //   // 确保点击 backdrop 或按下 ESC 可以关闭 dialog
  //   modal.addEventListener("click", (e) => {
  //     if (e.target === modal) {
  //       // 原生 dialog.close() 会触发 exit 动画
  //       modal.close();
  //     }
  //   });
  // });
});

/**
 * 显示指定的 Modal
 * @param {string} name
 */
const showModal = (name) => {
  const modal = modalRefs.value[name];
  if (modal && typeof modal.showModal === "function") {
    // 使用 showModal() 触发 enter 动画
    modal.showModal();
  }
};

/**
 * 关闭指定的 Modal
 * @param {string} name
 */
const closeModal = (name) => {
  const modal = modalRefs.value[name];
  if (modal && typeof modal.close === "function") {
    // 使用 close() 触发 exit 动画
    modal.close();
  }
};
</script>
