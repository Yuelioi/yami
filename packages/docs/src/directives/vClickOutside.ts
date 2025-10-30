import { type Directive } from "vue";

// 类型定义
interface HTMLElementWithHandler extends HTMLElement {
  __clickOutsideHandler__?: (event: MouseEvent) => void;
}

/**
 * v-click-outside 指令
 *
 * 通用的点击外部处理指令，支持多种使用场景：
 * 1. 自动关闭 <details> 元素
 * 2. 自动关闭 <dialog> 元素
 * 3. 执行自定义回调函数
 *
 * 触发器需要加 modal-control
 *
 * @example
 * 自动关闭 details
 * ```vue
 * <details class="dropdown" v-click-outside>
 *   <summary>点击打开</summary>
 *   <ul class="dropdown-content">...</ul>
 * </details>
 * ```
 *
 * @example
 * 自动关闭 dialog
 * ```vue
 * <button class="btn modal-control" onclick="my_modal_1.showModal()">
 *   open modal
 * </button>
 * <dialog id="my_modal_1" v-click-outside>
 *   <h3 class="text-lg font-bold">Hello!</h3>
 * </dialog>
 * ```
 *
 * @example
 * 回调函数 - 执行自定义逻辑
 * ```vue
 * <script setup>
 * function handleClickOutside(event: MouseEvent) {
 *   console.log('点击了外部', event);
 *   // 执行自定义逻辑
 * }
 * </script>
 *
 * <template>
 *   <button @click="isOpen = true" class="modal-control">open</button>
 *   <div v-click-outside="handleClickOutside">
 *     内容区域
 *   </div>
 * </template>
 * ```
 *
 * @remarks
 * - 自动检测元素类型并执行相应操作
 * - 支持 <details>、<dialog> 等原生元素
 * - 支持 Vue 的 Ref<boolean> 响应式变量
 * - 支持自定义回调函数
 * - 点击元素内部不会触发任何操作
 * - 自动管理事件监听器，无需手动清理
 *
 * @param binding.value - 可以是以下类型之一：
 *   - `undefined`: 自动关闭 details/dialog
 *   - `Ref<boolean>`: 点击外部时设为 false
 *   - `Function`: 回调函数，接收 MouseEvent 参数
 */
export const vClickModalOutside: Directive<HTMLElementWithHandler> = {
  mounted(el, binding) {
    el.__clickOutsideHandler__ = (event: MouseEvent) => {
      // 排除触发按钮
      if ((event.target as HTMLElement).closest(".modal-control")) return;

      // 检查元素是否处于"激活"状态
      const isActive =
        (el instanceof HTMLDetailsElement && el.open) ||
        (el instanceof HTMLDialogElement && el.open) ||
        (!(el instanceof HTMLDetailsElement) &&
          !(el instanceof HTMLDialogElement));

      if (!isActive) {
        return;
      }

      // 特殊处理 dialog：点击 dialog 本身（backdrop）应该关闭
      if (el instanceof HTMLDialogElement) {
        const rect = el.getBoundingClientRect();
        const isInDialog =
          event.clientX >= rect.left &&
          event.clientX <= rect.right &&
          event.clientY >= rect.top &&
          event.clientY <= rect.bottom;

        // 点击的是 dialog 背景（backdrop）
        if (event.target === el) {
          el.close();
        }
        // 点击的在 dialog 范围内，不处理
        else if (isInDialog) {
          return;
        }
      }
      // 处理 details 和其他元素
      else {
        if (el.contains(event.target as Node)) {
          return;
        }
      }

      // 关闭原生元素
      if (el instanceof HTMLDetailsElement) {
        el.open = false;
      } else if (el instanceof HTMLDialogElement) {
        el.close();
      }

      // 处理绑定值
      const value = binding.value;
      if (value === undefined) return;

      if (typeof value === "function") {
        value(event);
      }
    };

    document.addEventListener("click", el.__clickOutsideHandler__);
  },

  unmounted(el) {
    if (el.__clickOutsideHandler__) {
      document.removeEventListener("click", el.__clickOutsideHandler__);
      delete el.__clickOutsideHandler__;
    }
  },
};

// 更新类型定义
interface HTMLElementWithHandler extends HTMLElement {
  __clickOutsideHandler__?: (event: MouseEvent) => void;
  __observer__?: MutationObserver;
}
