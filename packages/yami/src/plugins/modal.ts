// plugins/src/modal.ts

export interface ModalOptions {
  closeOnBackdrop?: boolean;
  closeOnEsc?: boolean;
  onOpen?: (modal: HTMLDialogElement) => void;
  onClose?: (modal: HTMLDialogElement) => void;
}

const DEFAULT_OPTIONS: ModalOptions = {
  closeOnBackdrop: true,
  closeOnEsc: true,
};

class Modal {
  private modal: HTMLDialogElement;
  private options: ModalOptions;

  constructor(modal: HTMLDialogElement, options: ModalOptions = {}) {
    this.modal = modal;
    this.options = { ...DEFAULT_OPTIONS, ...options };
    this.init();
  }

  private init() {
    // 点击遮罩关闭（点击 dialog 本身，即非 modal-content 区域）
    if (this.options.closeOnBackdrop) {
      this.modal.addEventListener("click", (e) => {
        if (e.target === this.modal) {
          this.close();
        }
      });
    }

    // ESC 关闭（dialog 原生支持 ESC，但我们需要触发 onClose 回调）
    if (this.options.closeOnEsc) {
      this.modal.addEventListener("cancel", (e) => {
        e.preventDefault();
        this.close();
      });
    } else {
      this.modal.addEventListener("cancel", (e) => {
        e.preventDefault();
      });
    }
  }

  open() {
    this.modal.showModal();
    this.options.onOpen?.(this.modal);
  }

  close() {
    this.modal.close();
    this.options.onClose?.(this.modal);
  }

  toggle() {
    this.modal.open ? this.close() : this.open();
  }

  isOpen() {
    return this.modal.open;
  }
}

// 自动初始化
function initModals() {
  // 触发按钮：data-modal-toggle="modalId"
  document
    .querySelectorAll<HTMLElement>("[data-modal-toggle]")
    .forEach((trigger) => {
      const targetId = trigger.getAttribute("data-modal-toggle");
      if (!targetId) return;

      const target = document.getElementById(
        targetId,
      ) as HTMLDialogElement | null;
      if (!target || target.tagName !== "DIALOG") return;

      const modal = new Modal(target, {
        closeOnBackdrop: target.dataset.modalBackdrop !== "false",
        closeOnEsc: target.dataset.modalEsc !== "false",
      });

      trigger.addEventListener("click", () => modal.open());
    });

  // 关闭按钮：data-modal-close（在 dialog 内部）
  document
    .querySelectorAll<HTMLElement>("[data-modal-close]")
    .forEach((btn) => {
      const modal = btn.closest("dialog") as HTMLDialogElement | null;
      if (!modal) return;

      btn.addEventListener("click", () => modal.close());
    });
}

// DOM ready 后自动执行
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initModals);
} else {
  initModals();
}

export { Modal, initModals };
