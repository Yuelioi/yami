# Yami

基于 Tailwind CSS v4 的轻量级组件库，专为二次开发设计。

## 特性

- **63 个组件** — button、card、modal、table、toast 等常用 UI 组件
- **22 套主题** — 内置 light/dark，以及 GitHub、Discord、Stripe、Notion、Spotify 等品牌风格主题
- **OKLCH 色彩系统** — 感知均匀的现代色彩空间，暗色模式开箱即用
- **5 个 JS 插件** — dropdown、modal、popover、sidebar，无框架依赖
- **零运行时依赖**
- **极易二开** — 纯 CSS 变量驱动，覆盖即生效，无需 fork 源码

---

## 安装

```bash
pnpm add @yuelioi/yami
```

---

## 快速上手

### 1. 引入样式

在项目的 CSS 入口文件中（与 Tailwind v4 一起引入）：

```css
@import "tailwindcss";
@import "@yuelioi/yami";
```

### 2. 加载主题

通过 `<link>` 引入主题文件，然后在 `<html>` 上设置 `data-theme`：

```html
<link rel="stylesheet" href="/themes/dark.css" />
<html data-theme="dark">
```

也可以动态切换主题：

```ts
document.documentElement.setAttribute("data-theme", "discord");
```

### 3. 使用组件

所有组件均为纯 CSS 类名，无需任何 JS 即可使用样式：

```html
<!-- 按钮 -->
<button class="btn btn-primary">主要按钮</button>
<button class="btn btn-outline">描边按钮</button>

<!-- 卡片 -->
<div class="card">
  <div class="card-body">
    <h2 class="card-title">标题</h2>
    <p>内容区域</p>
  </div>
</div>

<!-- 徽标 -->
<span class="badge badge-success">成功</span>
<span class="badge badge-error">错误</span>

<!-- 输入框 -->
<input class="input" type="text" placeholder="请输入..." />

<!-- 提示框 -->
<div class="alert alert-info">这是一条提示信息</div>
```

### 4. 交互插件（可选）

需要交互行为时，引入对应插件：

```ts
import { initDropdown, initModal, initPopover, initSidebar } from "@yuelioi/yami/plugins";
```

或直接通过 `data-*` 属性自动初始化，无需手动调用：

```html
<!-- Modal -->
<button data-modal-toggle="my-modal">打开弹窗</button>
<dialog id="my-modal" class="modal">
  <div class="modal-box">弹窗内容</div>
</dialog>

<!-- Dropdown -->
<button data-dropdown-toggle="my-menu">下拉菜单</button>
<ul id="my-menu" class="dropdown-content menu">
  <li><a>选项 1</a></li>
  <li><a>选项 2</a></li>
</ul>
```

---

## 主题系统

所有主题通过 CSS 自定义属性（变量）实现，采用 OKLCH 色彩空间，作用于 `[data-theme]` 选择器下。

### Token 一览

| Token | 说明 |
|---|---|
| `--color-base-100/200/300` | 页面背景/卡片/边框层级色 |
| `--color-base-content` | 主要文字颜色 |
| `--color-primary` / `--color-primary-content` | 品牌主色 / 其上的文字色 |
| `--color-secondary` / `--color-secondary-content` | 辅助色 / 其上的文字色 |
| `--color-accent` / `--color-accent-content` | 强调色 / 其上的文字色 |
| `--color-neutral` / `--color-neutral-content` | 中性色 / 其上的文字色 |
| `--color-info/success/warning/error` | 状态色（信息/成功/警告/错误） |
| `--color-*-content` | 对应状态色上的文字色 |
| `--radius-selector` | checkbox、radio、toggle 圆角 |
| `--radius-field` | input、select、textarea 圆角 |
| `--radius-box` | card、modal、dropdown 圆角 |
| `--border` | 默认边框宽度 |
| `--depth` | 阴影深度 |
| `--noise` | 纹理强度 |

### 内置主题

| 主题名 | 模式 | 风格 |
|---|---|---|
| `light` | 亮色 | 纯净白底，靛蓝主色 |
| `dark` | 暗色 | 深邃冷蓝 |
| `apple` | 亮色 | Apple 圆润风格 |
| `github` | 亮色 | GitHub 简洁蓝 |
| `discord` | 暗色 | Discord 深紫 |
| `figma` | 亮色 | Figma 红紫简洁 |
| `linear` | 暗色 | Linear 深靛蓝 |
| `notion-light` | 亮色 | Notion 极简黑白 |
| `notion-dark` | 暗色 | Notion 暗色 |
| `slack-light` | 亮色 | Slack 茄紫 |
| `slack-dark` | 暗色 | Slack 暗色 |
| `spotify-light` | 亮色 | Spotify 绿 |
| `spotify-dark` | 暗色 | Spotify 暗绿 |
| `stripe-light` | 亮色 | Stripe 靛蓝 |
| `stripe-dark` | 暗色 | Stripe 暗色 |
| `vercel` | 亮色 | Vercel 黑白极简 |
| `x` | 亮色 | X (Twitter) 黑白 |
| `vscode` | 暗色 | VS Code 暗蓝 |
| `airbnb` | 亮色 | Airbnb 珊瑚红 |
| `material` | 亮色 | Material Design 紫 |
| `claude` | 亮色 | Claude 暖棕 |

---

## 二次开发

Yami 的设计目标之一就是**方便二开**。整个系统由 CSS 变量驱动，无需 fork 源码，只需在外部覆盖变量即可。

### 方式一：自定义主题

新建一个 CSS 文件，定义自己的 token 值：

```css
[data-theme="my-brand"] {
  /* 表面色 */
  --color-base-100: oklch(100% 0 0);
  --color-base-200: oklch(97% 0.005 250);
  --color-base-300: oklch(92% 0.008 250);
  --color-base-content: oklch(18% 0.012 260);

  /* 品牌主色 */
  --color-primary: oklch(54% 0.24 262);
  --color-primary-content: oklch(97% 0.015 262);

  /* 辅助色 */
  --color-secondary: oklch(62% 0.23 350);
  --color-secondary-content: oklch(97% 0.015 350);

  /* 强调色 */
  --color-accent: oklch(66% 0.185 162);
  --color-accent-content: oklch(97% 0.015 162);

  /* 中性色 */
  --color-neutral: oklch(20% 0.008 260);
  --color-neutral-content: oklch(94% 0.004 260);

  /* 状态色 */
  --color-info: oklch(60% 0.19 232);
  --color-info-content: oklch(97% 0.015 232);
  --color-success: oklch(60% 0.19 150);
  --color-success-content: oklch(97% 0.015 150);
  --color-warning: oklch(72% 0.2 72);
  --color-warning-content: oklch(22% 0.06 72);
  --color-error: oklch(58% 0.22 25);
  --color-error-content: oklch(97% 0.015 25);

  /* 形态 */
  --radius-selector: 0.5rem;
  --radius-field: 0.375rem;
  --radius-box: 0.75rem;
  --size-selector: 0.25rem;
  --size-field: 0.25rem;
  --border: 1px;
  --depth: 1;
  --noise: 0;
}
```

引入后直接使用：

```html
<html data-theme="my-brand">
```

### 方式二：覆盖单个组件样式

在你的样式文件中直接覆盖组件的 CSS 变量或类名，无需改动库源码：

```css
/* 覆盖按钮圆角为直角 */
.btn {
  border-radius: 0;
}

/* 给卡片添加自定义阴影 */
.card {
  box-shadow: 0 8px 32px oklch(0% 0 0 / 12%);
}
```

### 方式三：扩展新组件

Yami 的组件均基于 Tailwind v4 的 `@utility` 和 CSS 变量编写。你可以按照相同模式添加自己的组件，完全兼容主题系统：

```css
/* 自定义组件，自动跟随主题色 */
.my-chip {
  background-color: var(--color-primary);
  color: var(--color-primary-content);
  border-radius: var(--radius-selector);
  padding: 0.25rem 0.75rem;
  font-size: 0.75rem;
}
```

---

## 项目结构

```
yami/
├── packages/
│   ├── yami/                   # 核心 CSS 库（发布到 npm）
│   │   └── src/
│   │       ├── index.css       # 主入口，汇总所有模块
│   │       ├── base/           # Reset、滚动条、根色变量
│   │       ├── utilities/      # Token、颜色、玻璃态、排版...
│   │       ├── components/     # 63 个组件样式
│   │       └── plugins/        # TypeScript 交互插件
│   └── docs/                   # 文档站（Vue 3 + Vite）
│       └── public/themes/      # 22 套主题 CSS 文件
```

---

## 本地开发

```bash
# 安装依赖
pnpm install

# 启动文档站开发服务器
pnpm --filter docs dev

# 构建组件库
pnpm --filter @yuelioi/yami build
```

---

## 致谢

Yami 在设计上参考了以下优秀的开源项目：

- [DaisyUI](https://daisyui.com/) — 组件类名命名规范与主题 token 架构
- [FlyonUI](https://flyonui.com/) — 组件结构与交互插件模式

## License

MIT
