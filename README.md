# Yami

A lightweight Tailwind CSS v4 component library with a rich theming system.

## Features

- **63 components** — button, card, modal, table, toast, and more
- **22 themes** — built-in light/dark plus brand-inspired themes (GitHub, Discord, Stripe, Notion, Spotify, etc.)
- **OKLCH color system** — perceptually uniform colors with full dark mode support
- **5 JS plugins** — dropdown, modal, popover, sidebar, with zero framework dependency
- **Zero runtime dependencies**

## Installation

```bash
pnpm add @yuelioi/yami
```

## Usage

### 1. Import the library

In your main CSS entry file (alongside Tailwind v4):

```css
@import "tailwindcss";
@import "@yuelioi/yami";
```

### 2. Load a theme

Link a theme stylesheet, or load it dynamically:

```html
<link rel="stylesheet" href="/themes/dark.css" />
```

Then set the `data-theme` attribute on any element (usually `<html>`):

```html
<html data-theme="dark">
```

### 3. Use components

Components are pure CSS classes — no JavaScript required for styling:

```html
<button class="btn btn-primary">Click me</button>

<div class="card">
  <div class="card-body">
    <h2 class="card-title">Hello</h2>
    <p>Card content</p>
  </div>
</div>

<span class="badge badge-success">Active</span>
```

### 4. Interactive plugins (optional)

For components that need interactivity (dropdown, modal, etc.), import the JS plugins:

```ts
import { initDropdown, initModal } from "@yuelioi/yami/plugins";
```

Or let them auto-initialize via `data-*` attributes:

```html
<!-- Modal trigger -->
<button data-modal-toggle="my-modal">Open</button>
<dialog id="my-modal" class="modal">...</dialog>

<!-- Dropdown trigger -->
<button data-dropdown-toggle="my-menu">Menu</button>
<ul id="my-menu" class="dropdown-content">...</ul>
```

## Theming

Themes use CSS custom properties in the OKLCH color space. All variables are applied under a `[data-theme]` selector.

### Available tokens

| Token | Description |
|---|---|
| `--color-base-100/200/300` | Surface colors |
| `--color-base-content` | Primary text color |
| `--color-primary` / `--color-primary-content` | Brand color + its text |
| `--color-secondary` / `--color-secondary-content` | Secondary color + its text |
| `--color-accent` / `--color-accent-content` | Accent color + its text |
| `--color-neutral` / `--color-neutral-content` | Neutral color + its text |
| `--color-info/success/warning/error` | Status colors |
| `--radius-selector` | Border radius for checkboxes, radios, toggles |
| `--radius-field` | Border radius for inputs, selects |
| `--radius-box` | Border radius for cards, modals |
| `--border` | Default border width |
| `--depth` | Shadow depth level |

### Built-in themes

| Theme | Mode | Description |
|---|---|---|
| `light` | Light | Clean white, indigo primary |
| `dark` | Dark | Deep cool blue |
| `apple` | Light | San Francisco-style rounded design |
| `github` | Light | GitHub's minimal blue |
| `discord` | Dark | Discord's dark purple |
| `figma` | Light | Figma's clean red-purple |
| `linear` | Dark | Linear's dark indigo |
| `notion-light` | Light | Notion minimal black |
| `notion-dark` | Dark | Notion dark |
| `slack-light` | Light | Slack aubergine |
| `slack-dark` | Dark | Slack dark |
| `spotify-light` | Light | Spotify green |
| `spotify-dark` | Dark | Spotify dark green |
| `stripe-light` | Light | Stripe's indigo |
| `stripe-dark` | Dark | Stripe dark |
| `vercel` | Light | Vercel black & white |
| `x` | Light | X (Twitter) black & white |
| `vscode` | Dark | VS Code dark blue |
| `airbnb` | Light | Airbnb coral |
| `material` | Light | Material Design purple |
| `claude` | Light | Claude warm tan |

### Custom theme

Create a CSS file with your own token values:

```css
[data-theme="my-theme"] {
  --color-base-100: oklch(100% 0 0);
  --color-base-200: oklch(97% 0.005 250);
  --color-base-300: oklch(92% 0.008 250);
  --color-base-content: oklch(18% 0.012 260);

  --color-primary: oklch(54% 0.24 262);
  --color-primary-content: oklch(97% 0.015 262);

  --color-secondary: oklch(62% 0.23 350);
  --color-secondary-content: oklch(97% 0.015 350);

  --color-accent: oklch(66% 0.185 162);
  --color-accent-content: oklch(97% 0.015 162);

  --color-neutral: oklch(20% 0.008 260);
  --color-neutral-content: oklch(94% 0.004 260);

  --color-info: oklch(60% 0.19 232);
  --color-info-content: oklch(97% 0.015 232);

  --color-success: oklch(60% 0.19 150);
  --color-success-content: oklch(97% 0.015 150);

  --color-warning: oklch(72% 0.2 72);
  --color-warning-content: oklch(22% 0.06 72);

  --color-error: oklch(58% 0.22 25);
  --color-error-content: oklch(97% 0.015 25);

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

## Project Structure

```
yami/
├── packages/
│   ├── yami/               # Core CSS library (published)
│   │   └── src/
│   │       ├── index.css   # Main entry point
│   │       ├── base/       # Reset, scrollbar, root colors
│   │       ├── utilities/  # Token, colors, glass, typography...
│   │       ├── components/ # 63 component stylesheets
│   │       └── plugins/    # TypeScript interactive plugins
│   └── docs/               # Documentation site (Vue 3 + Vite)
│       └── public/themes/  # 22 theme CSS files
```

## Development

```bash
# Install dependencies
pnpm install

# Start docs dev server
pnpm --filter docs dev

# Build the library
pnpm --filter @yuelioi/yami build
```

## Acknowledgements

Yami draws inspiration from and references the following open-source projects:

- [DaisyUI](https://daisyui.com/) — component class naming conventions and theme token architecture
- [FlyonUI](https://flyonui.com/) — component structure and interactive plugin patterns

## License

MIT
