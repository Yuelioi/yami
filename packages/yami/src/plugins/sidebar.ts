export interface SidebarOptions {
  collapsed?: boolean;
  onCollapse?: (collapsed: boolean) => void;
}

class Sidebar {
  private el: HTMLElement;
  private options: SidebarOptions;
  private _collapsed: boolean;

  constructor(el: HTMLElement, options: SidebarOptions = {}) {
    this.el = el;
    this.options = options;
    this._collapsed = options.collapsed ?? false;
    this.init();
  }

  private init() {
    if (this._collapsed) this.el.dataset.collapsed = "";

    // 折叠子菜单按钮
    this.el
      .querySelectorAll<HTMLElement>("[data-sidebar-submenu]")
      .forEach((trigger) => {
        const targetId = trigger.getAttribute("data-sidebar-submenu");
        if (!targetId) return;
        const submenu = this.el.querySelector<HTMLElement>(`#${targetId}`);
        if (!submenu) return;

        // 若有 active 子项则默认展开
        if (submenu.querySelector(".sidebar-item-active")) {
          trigger.dataset.open = "";
          submenu.dataset.open = "";
        }

        trigger.addEventListener("click", () => {
          const isOpen = "open" in trigger.dataset;
          if (isOpen) {
            delete trigger.dataset.open;
            delete submenu.dataset.open;
          } else {
            trigger.dataset.open = "";
            submenu.dataset.open = "";
          }
        });
      });
  }

  collapse() {
    this._collapsed = true;
    this.el.dataset.collapsed = "";
    this.options.onCollapse?.(true);
  }

  expand() {
    this._collapsed = false;
    delete this.el.dataset.collapsed;
    this.options.onCollapse?.(false);
  }

  toggle() {
    this._collapsed ? this.expand() : this.collapse();
  }

  isCollapsed() {
    return this._collapsed;
  }
}

function initSidebars() {
  // 折叠切换按钮
  document
    .querySelectorAll<HTMLElement>("[data-sidebar-toggle]")
    .forEach((btn) => {
      const targetId = btn.getAttribute("data-sidebar-toggle");
      if (!targetId) return;
      const sidebarEl = document.getElementById(targetId);
      if (!sidebarEl) return;

      const sidebar = new Sidebar(sidebarEl);
      btn.addEventListener("click", () => sidebar.toggle());
    });

  // 无 toggle 按钮的 sidebar 也初始化子菜单
  document
    .querySelectorAll<HTMLElement>(".sidebar:not([data-sidebar-init])")
    .forEach((el) => {
      el.dataset.sidebarInit = "";
      new Sidebar(el);
    });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initSidebars);
} else {
  initSidebars();
}

export { Sidebar, initSidebars };
