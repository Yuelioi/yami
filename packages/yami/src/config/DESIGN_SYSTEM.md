# UI/UX Design System Guide

## 概述

设计系统文件 `src/config/design-system.css` 提供了统一的 UI/UX 标准，符合 UI/UX Pro Max 和 WCAG 2.1 规范。

## 核心规则

### 1. 触摸目标和无障碍（必须遵循）

- 最小触摸目标：md=44px（WCAG标准）✅
- sm=36px, xs=32px（桌面端放宽）
- 所有交互元素必须有 :focus-visible 焦点状态
- 使用 focus-ring 工具类或自定义焦点环

### 2. 动画和过渡（必须遵循）

- hover 状态：--duration-fast (100ms)
- 标准过渡：--duration-base (150ms) ✅ 推荐
- 缓动函数：--ease-out (快速反馈优先)
- 不要硬编码动画时间

### 3. 颜色系统（使用现有的）

- 使用 OKLch 色彩空间主题变量（已定义）
- color-mix() 计算状态颜色（hover, active, disabled）
- 示例：`color-mix(in oklab, var(--primary) 90%, black)`
- 不要定义新的全局颜色

### 5. 令牌分层规则（重要）

**第一层 - design-system.css（全局，勿改）**

- 动画：--duration-*, --ease-*
- 层级：--z-*
- 焦点：--focus-ring-*
- 触摸：--touch-target-*
- 状态：--opacity-*

**第二层 - {component}.css（新增）**

- 组件特有变量：--{component}-{property}
- 示例：--btn-height-md, --input-radius, --card-padding
- 可以引用第一层：`transition: var(--duration-base)`

**第三层 - user-theme.css（可选，用户自定义）**

- 允许用户覆盖的变量
- 示例：--btn-primary-bg, --input-border-color
- 只在必要时添加

### 6. 共享变量规则

如果发现某个变量需要在多个组件间共享：

- 例如：`--radius-button: 0.5rem` 用于按钮、输入框、卡片
- **添加到 design-system.css**，不要重复定义

### 7. 样式编写规范

✅ 正确做法：

```css
/* 在 button/button.css 中 */
@theme {
  --btn-height-md: 2.75rem;
  --btn-primary-bg: var(--primary);
  --btn-primary-hover: color-mix(in oklab, var(--primary) 90%, black);
}

.btn {
  min-height: var(--btn-height-md);
  background-color: var(--btn-primary-bg);
  transition: background-color var(--duration-base) var(--ease-out);
}

.btn:hover {
  background-color: var(--btn-primary-hover);
}

.btn:focus-visible {
  outline: var(--focus-ring-width) solid var(--primary);
  outline-offset: var(--focus-ring-offset);
}

.btn:disabled {
  opacity: var(--opacity-disabled);
  cursor: not-allowed;
}
```

❌ 错误做法：

```css
.btn {
  min-height: 44px;  /* ❌ 硬编码 */
  background-color: #3b82f6;  /* ❌ 硬编码颜色 */
  transition: all 150ms ease-out;  /* ❌ 不用变量 */
}

.btn:focus {  /* ❌ 用 focus 而不是 focus-visible */
  outline: 2px solid blue;
}
```
