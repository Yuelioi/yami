export interface DropdownOptions {
  trigger?: "click" | "hover" | "both";
  onOpen?: (dropdown: HTMLElement) => void;
  onClose?: (dropdown: HTMLElement) => void;
}

const DEFAULT_OPTIONS: DropdownOptions = {
  trigger: "click",
};

class Dropdown {
  private trigger: HTMLElement;
  private target: HTMLElement;
  private options: DropdownOptions;
  private hoverTimer: ReturnType<typeof setTimeout> | null = null;

  constructor(
    trigger: HTMLElement,
    target: HTMLElement,
    options: DropdownOptions = {},
  ) {
    this.trigger = trigger;
    this.target = target;
    this.options = { ...DEFAULT_OPTIONS, ...options };
    this.init();
  }

  private init() {
    const { trigger } = this.options;

    if (trigger === "click" || trigger === "both") {
      this.trigger.addEventListener("click", (e) => {
        e.stopPropagation();
        this.toggle();
      });
    }

    if (trigger === "hover" || trigger === "both") {
      this.trigger.addEventListener("mouseenter", () => {
        if (this.hoverTimer) clearTimeout(this.hoverTimer);
        this.open();
      });

      this.trigger.addEventListener("mouseleave", () => {
        this.hoverTimer = setTimeout(() => this.close(), 100);
      });

      this.target.addEventListener("mouseenter", () => {
        if (this.hoverTimer) clearTimeout(this.hoverTimer);
      });

      this.target.addEventListener("mouseleave", () => {
        this.hoverTimer = setTimeout(() => this.close(), 100);
      });
    }

    // ESC 关闭
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") this.close();
    });

    // 点击外部关闭
    document.addEventListener("click", (e) => {
      if (
        !this.trigger.contains(e.target as Node) &&
        !this.target.contains(e.target as Node)
      ) {
        this.close();
      }
    });

    // 初始化 aria
    this.trigger.setAttribute("aria-expanded", "false");
    this.trigger.setAttribute("aria-haspopup", "true");
  }

  open() {
    this.target.removeAttribute("hidden");
    this.target.dataset.open = "";
    this.trigger.setAttribute("aria-expanded", "true");
    this.options.onOpen?.(this.target);
  }

  close() {
    delete this.target.dataset.open;
    this.trigger.setAttribute("aria-expanded", "false");
    // 等动画结束再 hidden
    const duration =
      parseFloat(getComputedStyle(this.target).transitionDuration) * 1000 || 0;
    setTimeout(() => {
      if (!this.isOpen()) this.target.setAttribute("hidden", "");
    }, duration);
    this.options.onClose?.(this.target);
  }

  toggle() {
    this.isOpen() ? this.close() : this.open();
  }

  isOpen() {
    return "open" in this.target.dataset;
  }
}

// 自动初始化
function initDropdowns() {
  document
    .querySelectorAll<HTMLElement>("[data-dropdown-toggle]")
    .forEach((trigger) => {
      const targetId = trigger.getAttribute("data-dropdown-toggle");
      if (!targetId) return;

      const target = document.getElementById(targetId);
      if (!target) return;

      // 读取 data 属性配置
      const triggerType =
        (trigger.dataset.dropdownTrigger as DropdownOptions["trigger"]) ||
        "click";

      new Dropdown(trigger, target, { trigger: triggerType });
    });
}

// DOM ready 后自动执行
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initDropdowns);
} else {
  initDropdowns();
}

export { Dropdown, initDropdowns };
