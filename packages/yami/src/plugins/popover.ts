// plugins/src/popover.ts

export type PopoverPlacement =
  | "top"
  | "top-start"
  | "top-end"
  | "bottom"
  | "bottom-start"
  | "bottom-end"
  | "left"
  | "left-start"
  | "left-end"
  | "right"
  | "right-start"
  | "right-end";

export interface PopoverOptions {
  placement?: PopoverPlacement;
  trigger?: "click" | "hover" | "focus" | "manual";
  offset?: number;
  delay?: number; // hover 延迟 ms
  hideDelay?: number; // hover 离开后延迟 ms
  onShow?: (popover: HTMLElement) => void;
  onHide?: (popover: HTMLElement) => void;
}

const DEFAULT_OPTIONS: PopoverOptions = {
  placement: "bottom",
  trigger: "click",
  offset: 8,
  delay: 0,
  hideDelay: 100,
};

class Popover {
  private trigger: HTMLElement;
  private popover: HTMLElement;
  private options: PopoverOptions;
  private showTimer: ReturnType<typeof setTimeout> | null = null;
  private hideTimer: ReturnType<typeof setTimeout> | null = null;
  private _handleDocClick: (e: MouseEvent) => void;
  private _handleKeyDown: (e: KeyboardEvent) => void;

  constructor(
    trigger: HTMLElement,
    popover: HTMLElement,
    options: PopoverOptions = {},
  ) {
    this.trigger = trigger;
    this.popover = popover;
    this.options = { ...DEFAULT_OPTIONS, ...options };
    this._handleDocClick = this.onDocClick.bind(this);
    this._handleKeyDown = this.onKeyDown.bind(this);
    this.init();
  }

  private init() {
    const { trigger } = this.options;

    // 确保 popover 初始隐藏
    this.popover.setAttribute("hidden", "");
    this.popover.setAttribute("role", "tooltip");
    this.trigger.setAttribute("aria-expanded", "false");

    if (trigger === "click") {
      this.trigger.addEventListener("click", (e) => {
        e.stopPropagation();
        this.isVisible() ? this.hide() : this.show();
      });
    }

    if (trigger === "hover") {
      this.trigger.addEventListener("mouseenter", () => {
        this.clearTimers();
        this.showTimer = setTimeout(() => this.show(), this.options.delay);
      });
      this.trigger.addEventListener("mouseleave", () => {
        this.clearTimers();
        this.hideTimer = setTimeout(() => this.hide(), this.options.hideDelay);
      });
      this.popover.addEventListener("mouseenter", () => {
        this.clearTimers();
      });
      this.popover.addEventListener("mouseleave", () => {
        this.clearTimers();
        this.hideTimer = setTimeout(() => this.hide(), this.options.hideDelay);
      });
    }

    if (trigger === "focus") {
      this.trigger.addEventListener("focus", () => this.show());
      this.trigger.addEventListener("blur", () => this.hide());
    }

    document.addEventListener("click", this._handleDocClick);
    document.addEventListener("keydown", this._handleKeyDown);
  }

  private onDocClick(e: MouseEvent) {
    if (
      !this.trigger.contains(e.target as Node) &&
      !this.popover.contains(e.target as Node)
    ) {
      this.hide();
    }
  }

  private onKeyDown(e: KeyboardEvent) {
    if (e.key === "Escape") this.hide();
  }

  private clearTimers() {
    if (this.showTimer) clearTimeout(this.showTimer);
    if (this.hideTimer) clearTimeout(this.hideTimer);
  }

  // ── 定位计算 ──
  private updatePosition() {
    const placement = this.options.placement!;
    const offset = this.options.offset!;

    const triggerRect = this.trigger.getBoundingClientRect();
    const popoverRect = this.popover.getBoundingClientRect();
    const scrollX = window.scrollX;
    const scrollY = window.scrollY;

    let top = 0;
    let left = 0;

    const [side, align] = placement.split("-") as [string, string | undefined];

    // 主轴定位
    switch (side) {
      case "top":
        top = triggerRect.top + scrollY - popoverRect.height - offset;
        break;
      case "bottom":
        top = triggerRect.bottom + scrollY + offset;
        break;
      case "left":
        left = triggerRect.left + scrollX - popoverRect.width - offset;
        break;
      case "right":
        left = triggerRect.right + scrollX + offset;
        break;
    }

    // 交叉轴对齐
    if (side === "top" || side === "bottom") {
      if (!align || align === "center") {
        left =
          triggerRect.left +
          scrollX +
          triggerRect.width / 2 -
          popoverRect.width / 2;
      } else if (align === "start") {
        left = triggerRect.left + scrollX;
      } else if (align === "end") {
        left = triggerRect.right + scrollX - popoverRect.width;
      }
    } else {
      if (!align || align === "center") {
        top =
          triggerRect.top +
          scrollY +
          triggerRect.height / 2 -
          popoverRect.height / 2;
      } else if (align === "start") {
        top = triggerRect.top + scrollY;
      } else if (align === "end") {
        top = triggerRect.bottom + scrollY - popoverRect.height;
      }
    }

    // 边界修正（viewport）
    const vw = document.documentElement.clientWidth;
    const vh = document.documentElement.clientHeight;
    left = Math.max(8, Math.min(left, scrollX + vw - popoverRect.width - 8));
    top = Math.max(8, Math.min(top, scrollY + vh - popoverRect.height - 8));

    this.popover.style.position = "absolute";
    this.popover.style.top = `${top}px`;
    this.popover.style.left = `${left}px`;
    this.popover.style.zIndex = "50";

    // 设置方向 data 属性（用于箭头 CSS）
    this.popover.dataset.placement = side;
  }

  show() {
    this.popover.removeAttribute("hidden");
    // 先渲染再计算位置（需要 offsetWidth/offsetHeight）
    requestAnimationFrame(() => {
      this.updatePosition();
      this.popover.dataset.open = "";
      this.trigger.setAttribute("aria-expanded", "true");
      this.options.onShow?.(this.popover);
    });
  }

  hide() {
    delete this.popover.dataset.open;
    this.trigger.setAttribute("aria-expanded", "false");
    this.options.onHide?.(this.popover);

    const duration =
      parseFloat(getComputedStyle(this.popover).transitionDuration) * 1000 || 0;
    setTimeout(() => {
      if (!this.isVisible()) {
        this.popover.setAttribute("hidden", "");
      }
    }, duration);
  }

  toggle() {
    this.isVisible() ? this.hide() : this.show();
  }

  isVisible() {
    return "open" in this.popover.dataset;
  }

  destroy() {
    document.removeEventListener("click", this._handleDocClick);
    document.removeEventListener("keydown", this._handleKeyDown);
  }
}

// ── 自动初始化 ──
function initPopovers() {
  document
    .querySelectorAll<HTMLElement>("[data-popover-toggle]")
    .forEach((trigger) => {
      const targetId = trigger.getAttribute("data-popover-toggle");
      if (!targetId) return;

      const popover = document.getElementById(targetId);
      if (!popover) return;

      const placement =
        (trigger.dataset.popoverPlacement as PopoverPlacement) || "bottom";
      const triggerType =
        (trigger.dataset.popoverTrigger as PopoverOptions["trigger"]) ||
        "click";
      const offset = Number(trigger.dataset.popoverOffset) || 8;
      const delay = Number(trigger.dataset.popoverDelay) || 0;

      new Popover(trigger, popover, {
        placement,
        trigger: triggerType,
        offset,
        delay,
      });
    });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initPopovers);
} else {
  initPopovers();
}

export { Popover, initPopovers };
