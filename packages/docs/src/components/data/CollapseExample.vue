<template>
  <DocsContainer>
    <!-- 页面标题 -->
    <DocsHeader
      title="Collapse 折叠组件"
      description="可展开/折叠的容器组件，支持多种状态控制、颜色、尺寸和组合手风琴效果。"
    />

    <ApiReference :data="apiClasses" />

    <!-- 基础用法 -->
    <section>
      <div class="mb-6">
        <h2 class="text-2xl font-semibold mb-2 flex items-center gap-2">
          <span class="text-primary">🎯</span>
          基础用法
        </h2>
        <p class="text-muted-foreground">
          使用
          <code class="px-2 py-0.5 bg-muted rounded text-sm font-mono"
            >checkbox</code
          >
          控制折叠状态，点击切换展开/收起
        </p>
      </div>

      <div class="grid grid-cols-1 gap-6">
        <!-- 示例 1 -->
        <div class="bg-card rounded-xl border border-border p-6 shadow-sm">
          <div class="mb-4 pb-3 border-b border-border">
            <h3 class="font-semibold text-lg">默认样式</h3>
            <p class="text-sm text-muted-foreground mt-1">
              最简单的折叠面板，无边框无图标
            </p>
          </div>

          <div class="collapse">
            <input type="checkbox" />
            <div class="collapse-title text-lg font-medium">
              点击展开查看详情
            </div>
            <div class="collapse-content">
              <p class="text-muted-foreground">
                这是折叠面板的内容区域。使用
                <code class="px-1.5 py-0.5 bg-muted rounded text-xs font-mono"
                  >input[type="checkbox"]</code
                >
                实现展开/收起功能。
              </p>
            </div>
          </div>
        </div>

        <!-- 示例 2 -->
        <div class="bg-card rounded-xl border border-border p-6 shadow-sm">
          <div class="mb-4 pb-3 border-b border-border">
            <h3 class="font-semibold text-lg">带边框和箭头图标</h3>
            <p class="text-sm text-muted-foreground mt-1">
              添加
              <code class="px-1.5 py-0.5 bg-muted rounded text-xs font-mono"
                >collapse-bordered</code
              >
              和
              <code class="px-1.5 py-0.5 bg-muted rounded text-xs font-mono"
                >collapse-arrow</code
              >
            </p>
          </div>

          <div class="collapse collapse-arrow collapse-bordered">
            <input type="checkbox" />
            <div class="collapse-title text-lg font-medium">
              如何使用这个组件？
            </div>
            <div class="collapse-content">
              <p class="text-muted-foreground">
                只需在容器上添加
                <code class="px-1.5 py-0.5 bg-muted rounded text-xs font-mono"
                  >collapse</code
                >
                类名，内部包含一个 checkbox、标题和内容区域即可。
              </p>
            </div>
          </div>
        </div>

        <!-- 示例 3 -->
        <div class="bg-card rounded-xl border border-border p-6 shadow-sm">
          <div class="mb-4 pb-3 border-b border-border">
            <h3 class="font-semibold text-lg">加号/减号图标</h3>
            <p class="text-sm text-muted-foreground mt-1">
              使用
              <code class="px-1.5 py-0.5 bg-muted rounded text-xs font-mono"
                >collapse-plus</code
              >
              显示加减号
            </p>
          </div>

          <div class="collapse collapse-plus collapse-bordered">
            <input type="checkbox" />
            <div class="collapse-title text-lg font-medium">
              需要配置什么依赖？
            </div>
            <div class="collapse-content">
              <p class="text-muted-foreground">
                需要 Tailwind CSS v4+ 和相关的 PostCSS
                插件。确保已正确配置主题颜色变量。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 交互方式 -->
    <section>
      <div class="mb-6">
        <h2 class="text-2xl font-semibold mb-2 flex items-center gap-2">
          <span class="text-primary">🎮</span>
          交互方式
        </h2>
        <p class="text-muted-foreground">
          支持三种不同的触发方式，适应不同的使用场景
        </p>
      </div>

      <div class="grid grid-cols-1 gap-6">
        <!-- Checkbox 方式 -->
        <div class="bg-card rounded-xl border border-border p-6 shadow-sm">
          <div class="mb-4 pb-3 border-b border-border">
            <h3 class="font-semibold text-lg">Checkbox 控制</h3>
            <p class="text-sm text-muted-foreground mt-1">
              点击切换，状态保持不变直到再次点击
            </p>
          </div>

          <div
            class="collapse collapse-arrow collapse-bordered collapse-primary"
          >
            <input type="checkbox" />
            <div class="collapse-title font-medium">Checkbox 方式（推荐）</div>
            <div class="collapse-content">
              <p class="text-sm">
                使用隐藏的 checkbox
                控制展开状态，这是最常用的方式。点击后状态会保持，再次点击才会收起。
              </p>
            </div>
          </div>
        </div>

        <!-- Tabindex 方式 -->
        <div class="bg-card rounded-xl border border-border p-6 shadow-sm">
          <div class="mb-4 pb-3 border-b border-border">
            <h3 class="font-semibold text-lg">Tabindex 聚焦控制</h3>
            <p class="text-sm text-muted-foreground mt-1">
              点击展开，失去焦点后自动收起
            </p>
          </div>

          <div
            tabindex="0"
            class="collapse collapse-plus collapse-bordered collapse-secondary"
          >
            <div class="collapse-title font-medium">
              Tabindex 方式（自动关闭）
            </div>
            <div class="collapse-content">
              <p class="text-sm">
                添加
                <code class="px-1.5 py-0.5 bg-muted rounded text-xs font-mono"
                  >tabindex="0"</code
                >
                属性，点击其他区域后会自动收起。适合需要自动关闭的场景。
              </p>
            </div>
          </div>
        </div>

        <!-- Details 方式 -->
        <div class="bg-card rounded-xl border border-border p-6 shadow-sm">
          <div class="mb-4 pb-3 border-b border-border">
            <h3 class="font-semibold text-lg">Details/Summary 标签</h3>
            <p class="text-sm text-muted-foreground mt-1">
              使用原生 HTML5 标签，更好的语义化和可访问性
            </p>
          </div>

          <details
            class="collapse collapse-arrow collapse-bordered collapse-accent"
          >
            <summary class="collapse-title font-medium">
              Details 方式（语义化）
            </summary>
            <div class="collapse-content">
              <p class="text-sm">
                使用 HTML 原生的
                <code class="px-1.5 py-0.5 bg-muted rounded text-xs font-mono"
                  >&lt;details&gt;</code
                >
                和
                <code class="px-1.5 py-0.5 bg-muted rounded text-xs font-mono"
                  >&lt;summary&gt;</code
                >
                标签，无需额外的 JavaScript，具有更好的可访问性。
              </p>
            </div>
          </details>
        </div>
      </div>
    </section>

    <!-- 配色方案 -->
    <section>
      <div class="mb-6">
        <h2 class="text-2xl font-semibold mb-2 flex items-center gap-2">
          <span class="text-primary">🎨</span>
          配色方案
        </h2>
        <p class="text-muted-foreground">
          提供多种预设主题色，展开时标题背景会变为对应的主题色
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <!-- Primary -->
        <div
          class="collapse collapse-plus collapse-bordered collapse-primary collapse-shadow"
        >
          <input type="checkbox" />
          <div class="collapse-title font-semibold">Primary 主色主题</div>
          <div class="collapse-content">
            <p class="text-sm">展开后标题背景变为主色，适合强调重要内容。</p>
          </div>
        </div>

        <!-- Secondary -->
        <div
          class="collapse collapse-plus collapse-bordered collapse-secondary collapse-shadow"
        >
          <input type="checkbox" />
          <div class="collapse-title font-semibold">Secondary 次级主题</div>
          <div class="collapse-content">
            <p class="text-sm">使用次级色，适合次要信息的展示。</p>
          </div>
        </div>

        <!-- Accent -->
        <div
          class="collapse collapse-plus collapse-bordered collapse-accent collapse-shadow"
        >
          <input type="checkbox" />
          <div class="collapse-title font-semibold">Accent 强调主题</div>
          <div class="collapse-content">
            <p class="text-sm">使用强调色，吸引用户注意力。</p>
          </div>
        </div>

        <!-- Destructive -->
        <div
          class="collapse collapse-plus collapse-bordered collapse-destructive collapse-shadow"
        >
          <input type="checkbox" />
          <div class="collapse-title font-semibold">Destructive 危险主题</div>
          <div class="collapse-content">
            <p class="text-sm">使用危险色（红色），适合警告或删除相关内容。</p>
          </div>
        </div>

        <!-- Muted -->
        <div
          class="collapse collapse-plus collapse-bordered collapse-muted collapse-shadow"
        >
          <input type="checkbox" />
          <div class="collapse-title font-semibold">Muted 弱色主题</div>
          <div class="collapse-content">
            <p class="text-sm">使用柔和的灰色，低调内敛的风格。</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 尺寸变体 -->
    <section>
      <div class="mb-6">
        <h2 class="text-2xl font-semibold mb-2 flex items-center gap-2">
          <span class="text-primary">📏</span>
          尺寸变体
        </h2>
        <p class="text-muted-foreground">
          提供小、中、大三种尺寸，适应不同的布局需求
        </p>
      </div>

      <div class="grid grid-cols-1 gap-6">
        <!-- Small -->
        <div class="collapse collapse-arrow collapse-sm collapse-bordered">
          <input type="checkbox" />
          <div class="collapse-title font-medium">
            Small 小尺寸 (collapse-sm)
          </div>
          <div class="collapse-content">
            <p class="text-sm">紧凑的布局，适合空间有限的场景。</p>
          </div>
        </div>

        <!-- Default -->
        <div class="collapse collapse-arrow collapse-bordered">
          <input type="checkbox" />
          <div class="collapse-title font-medium">Default 默认尺寸</div>
          <div class="collapse-content">
            <p>中等尺寸，最常用的默认样式。</p>
          </div>
        </div>

        <!-- Large -->
        <div class="collapse collapse-arrow collapse-lg collapse-bordered">
          <input type="checkbox" />
          <div class="collapse-title font-medium">
            Large 大尺寸 (collapse-lg)
          </div>
          <div class="collapse-content">
            <p>更大的内边距，适合突出显示重要内容。</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 手风琴模式 -->
    <section>
      <div class="mb-6">
        <h2 class="text-2xl font-semibold mb-2 flex items-center gap-2">
          <span class="text-primary">🎵</span>
          手风琴模式
        </h2>
        <p class="text-muted-foreground">
          使用
          <code class="px-2 py-0.5 bg-muted rounded text-sm font-mono"
            >radio</code
          >
          实现手风琴效果，同时只能展开一个面板
        </p>
      </div>

      <div
        class="bg-card rounded-xl border border-border shadow-sm overflow-hidden"
      >
        <div class="collapse-group collapse-group-compact">
          <div class="collapse collapse-plus collapse-secondary">
            <input type="radio" name="accordion" id="acc1" checked />
            <label for="acc1" class="collapse-title font-semibold">
              第一步：安装依赖
            </label>
            <div class="collapse-content">
              <p class="text-sm text-muted-foreground pt-2">
                首先，请确保您的项目已经安装了 Tailwind CSS v4+ 和相关的 PostCSS
                插件。使用 npm 或 yarn 进行安装。
              </p>
              <pre
                class="mt-3 p-3 bg-muted rounded text-xs font-mono overflow-x-auto"
              >
npm install tailwindcss@latest postcss autoprefixer</pre
              >
            </div>
          </div>

          <div
            class="collapse collapse-plus collapse-secondary border-t border-border"
          >
            <input type="radio" name="accordion" id="acc2" />
            <label for="acc2" class="collapse-title font-semibold">
              第二步：配置主题色
            </label>
            <div class="collapse-content">
              <p class="text-sm text-muted-foreground pt-2">
                在您的 CSS 文件中定义好颜色变量，包括
                <code class="px-1.5 py-0.5 bg-background rounded text-xs"
                  >--primary</code
                >、<code class="px-1.5 py-0.5 bg-background rounded text-xs"
                  >--secondary</code
                >
                等，以配合组件的配色方案。
              </p>
            </div>
          </div>

          <div
            class="collapse collapse-plus collapse-secondary border-t border-border"
          >
            <input type="radio" name="accordion" id="acc3" />
            <label for="acc3" class="collapse-title font-semibold">
              第三步：开始使用
            </label>
            <div class="collapse-content">
              <p class="text-sm text-muted-foreground pt-2">
                直接在 HTML 元素上应用
                <code class="px-1.5 py-0.5 bg-background rounded text-xs"
                  >collapse</code
                >
                及其变体类名即可。支持多种交互方式和丰富的样式组合。
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-4 p-4 bg-accent/10 border border-accent/20 rounded-lg">
        <p class="text-sm">
          <strong class="text-secondary">💡 提示：</strong>
          手风琴模式需要给所有 radio input 设置相同的
          <code class="px-1.5 py-0.5 bg-muted rounded text-xs font-mono"
            >name</code
          >
          属性，并且使用
          <code class="px-1.5 py-0.5 bg-muted rounded text-xs font-mono"
            >&lt;label for="..."&gt;</code
          >
          关联 input 的 id。
        </p>
      </div>
    </section>

    <!-- FAQ 示例 -->
    <section>
      <div class="mb-6">
        <h2 class="text-2xl font-semibold mb-2 flex items-center gap-2">
          <span class="text-primary">❓</span>
          常见问题 FAQ
        </h2>
        <p class="text-muted-foreground">折叠面板的经典应用场景</p>
      </div>

      <div class="collapse-group">
        <div class="collapse collapse-arrow collapse-bordered collapse-hover">
          <input type="checkbox" />
          <div class="collapse-title font-medium">这个组件支持哪些浏览器？</div>
          <div class="collapse-content">
            <p class="text-sm text-muted-foreground">
              支持所有现代浏览器，包括 Chrome、Firefox、Safari、Edge
              最新版本。部分高级特性（如 CSS Grid）需要较新的浏览器版本。
            </p>
          </div>
        </div>

        <div class="collapse collapse-arrow collapse-bordered collapse-hover">
          <input type="checkbox" />
          <div class="collapse-title font-medium">可以嵌套使用吗？</div>
          <div class="collapse-content">
            <p class="text-sm text-muted-foreground">
              可以嵌套使用，只需在内容区域中再放置一个 collapse
              组件即可。但要注意避免过深的嵌套影响用户体验。
            </p>
          </div>
        </div>

        <div class="collapse collapse-arrow collapse-bordered collapse-hover">
          <input type="checkbox" />
          <div class="collapse-title font-medium">如何自定义动画时长？</div>
          <div class="collapse-content">
            <p class="text-sm text-muted-foreground">
              默认动画时长为 200ms，您可以通过覆盖
              <code class="px-1.5 py-0.5 bg-muted rounded text-xs"
                >transition-duration</code
              >
              类来自定义，例如添加
              <code class="px-1.5 py-0.5 bg-muted rounded text-xs"
                >duration-500</code
              >。
            </p>
          </div>
        </div>

        <div class="collapse collapse-arrow collapse-bordered collapse-hover">
          <input type="checkbox" />
          <div class="collapse-title font-medium">支持无障碍访问吗？</div>
          <div class="collapse-content">
            <p class="text-sm text-muted-foreground">
              是的，组件内置了焦点样式和键盘导航支持。使用
              <code class="px-1.5 py-0.5 bg-muted rounded text-xs"
                >&lt;details&gt;</code
              >
              标签可以获得更好的语义化和屏幕阅读器支持。
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- 特殊状态 -->
    <section>
      <div class="mb-6">
        <h2 class="text-2xl font-semibold mb-2 flex items-center gap-2">
          <span class="text-primary">⚙️</span>
          特殊状态
        </h2>
        <p class="text-muted-foreground">强制展开、关闭和禁用状态</p>
      </div>

      <div class="grid grid-cols-1 gap-6">
        <!-- 强制展开 -->
        <div class="bg-card rounded-xl border border-border p-6 shadow-sm">
          <div class="mb-4 pb-3 border-b border-border">
            <h3 class="font-semibold text-lg">强制展开</h3>
            <p class="text-sm text-muted-foreground mt-1">
              使用
              <code class="px-1.5 py-0.5 bg-muted rounded text-xs font-mono"
                >collapse-open</code
              >
              固定为展开状态
            </p>
          </div>

          <div class="collapse collapse-arrow collapse-bordered collapse-open">
            <input type="checkbox" />
            <div class="collapse-title font-medium">
              这个面板始终保持展开状态
            </div>
            <div class="collapse-content">
              <p class="text-sm text-muted-foreground">
                即使点击也无法收起，适用于需要始终显示内容的场景。
              </p>
            </div>
          </div>
        </div>

        <!-- 强制关闭 -->
        <div class="bg-card rounded-xl border border-border p-6 shadow-sm">
          <div class="mb-4 pb-3 border-b border-border">
            <h3 class="font-semibold text-lg">强制关闭</h3>
            <p class="text-sm text-muted-foreground mt-1">
              使用
              <code class="px-1.5 py-0.5 bg-muted rounded text-xs font-mono"
                >collapse-close</code
              >
              固定为关闭状态
            </p>
          </div>

          <div class="collapse collapse-arrow collapse-bordered collapse-close">
            <input type="checkbox" />
            <div class="collapse-title font-medium">
              这个面板始终保持关闭状态
            </div>
            <div class="collapse-content">
              <p class="text-sm text-muted-foreground">
                点击也无法展开，适用于暂时禁用展开功能的场景。
              </p>
            </div>
          </div>
        </div>

        <!-- 禁用状态 -->
        <div class="bg-card rounded-xl border border-border p-6 shadow-sm">
          <div class="mb-4 pb-3 border-b border-border">
            <h3 class="font-semibold text-lg">禁用状态</h3>
            <p class="text-sm text-muted-foreground mt-1">
              使用
              <code class="px-1.5 py-0.5 bg-muted rounded text-xs font-mono"
                >collapse-disabled</code
              >
              完全禁用交互
            </p>
          </div>

          <div
            class="collapse collapse-arrow collapse-bordered collapse-primary collapse-disabled"
          >
            <input type="checkbox" />
            <div class="collapse-title font-medium">
              此面板已被禁用（不可点击）
            </div>
            <div class="collapse-content">
              <p class="text-sm">半透明显示，无法进行任何交互操作。</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 代码示例 -->
    <section>
      <div class="mb-6">
        <h2 class="text-2xl font-semibold mb-2 flex items-center gap-2">
          <span class="text-primary">💻</span>
          代码示例
        </h2>
        <p class="text-muted-foreground">快速上手的代码模板</p>
      </div>

      <div class="grid grid-cols-1 gap-6">
        <!-- Checkbox 方式 -->
        <div
          class="bg-card rounded-xl border border-border overflow-hidden shadow-sm"
        >
          <div class="bg-muted/30 px-4 py-3 border-b border-border">
            <h3 class="font-semibold">Checkbox 控制方式</h3>
          </div>
          <pre
            class="p-4 overflow-x-auto text-sm"
          ><code class="font-mono text-muted-foreground">&lt;div class="collapse collapse-arrow collapse-bordered"&gt;
  &lt;input type="checkbox" /&gt;
  &lt;div class="collapse-title font-medium"&gt;
    点击展开内容
  &lt;/div&gt;
  &lt;div class="collapse-content"&gt;
    &lt;p&gt;这里是内容区域&lt;/p&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
        </div>

        <!-- Details 方式 -->
        <div
          class="bg-card rounded-xl border border-border overflow-hidden shadow-sm"
        >
          <div class="bg-muted/30 px-4 py-3 border-b border-border">
            <h3 class="font-semibold">Details/Summary 方式</h3>
          </div>
          <pre
            class="p-4 overflow-x-auto text-sm"
          ><code class="font-mono text-muted-foreground">&lt;details class="collapse collapse-plus collapse-bordered"&gt;
  &lt;summary class="collapse-title font-medium"&gt;
    点击展开内容
  &lt;/summary&gt;
  &lt;div class="collapse-content"&gt;
    &lt;p&gt;这里是内容区域&lt;/p&gt;
  &lt;/div&gt;
&lt;/details&gt;</code></pre>
        </div>

        <!-- 手风琴 -->
        <div
          class="bg-card rounded-xl border border-border overflow-hidden shadow-sm"
        >
          <div class="bg-muted/30 px-4 py-3 border-b border-border">
            <h3 class="font-semibold">手风琴模式</h3>
          </div>
          <pre
            class="p-4 overflow-x-auto text-sm"
          ><code class="font-mono text-muted-foreground">&lt;div class="collapse-group"&gt;
  &lt;div class="collapse collapse-arrow collapse-bordered"&gt;
    &lt;input type="radio" name="faq" id="q1" /&gt;
    &lt;label for="q1" class="collapse-title"&gt;问题 1&lt;/label&gt;
    &lt;div class="collapse-content"&gt;&lt;p&gt;答案 1&lt;/p&gt;&lt;/div&gt;
  &lt;/div&gt;
  
  &lt;div class="collapse collapse-arrow collapse-bordered"&gt;
    &lt;input type="radio" name="faq" id="q2" /&gt;
    &lt;label for="q2" class="collapse-title"&gt;问题 2&lt;/label&gt;
    &lt;div class="collapse-content"&gt;&lt;p&gt;答案 2&lt;/p&gt;&lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
        </div>
      </div>
    </section>

    <!-- 最佳实践 -->
    <section
      class="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl border border-border p-8"
    >
      <div class="mb-6">
        <h2 class="text-2xl font-semibold mb-2 flex items-center gap-2">
          <span class="text-primary">✨</span>
          最佳实践
        </h2>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <!-- Do -->
        <div class="bg-card rounded-lg p-5 border-2 border-primary/20">
          <h3
            class="font-semibold text-lg mb-3 text-primary flex items-center gap-2"
          >
            ✅ 推荐做法
          </h3>
          <ul class="space-y-2 text-sm">
            <li class="flex gap-2">
              <span class="text-primary">•</span>
              <span>使用语义化的标题文本，清晰描述折叠内容</span>
            </li>
            <li class="flex gap-2">
              <span class="text-primary">•</span>
              <span>为手风琴设置相同的 name 属性确保互斥</span>
            </li>
            <li class="flex gap-2">
              <span class="text-primary">•</span>
              <span>FAQ 场景优先使用 details 标签提升可访问性</span>
            </li>
            <li class="flex gap-2">
              <span class="text-primary">•</span>
              <span>内容较多时使用 collapse-group 保持视觉统一</span>
            </li>
            <li class="flex gap-2">
              <span class="text-primary">•</span>
              <span>合理使用配色方案区分不同类型的内容</span>
            </li>
          </ul>
        </div>

        <!-- Don't -->
        <div class="bg-card rounded-lg p-5 border-2 border-destructive/20">
          <h3
            class="font-semibold text-lg mb-3 text-destructive flex items-center gap-2"
          >
            ❌ 避免做法
          </h3>
          <ul class="space-y-2 text-sm">
            <li class="flex gap-2">
              <span class="text-destructive">•</span>
              <span>避免在单页面中嵌套超过 3 层折叠面板</span>
            </li>
            <li class="flex gap-2">
              <span class="text-destructive">•</span>
              <span>不要在折叠标题中放置复杂的交互元素</span>
            </li>
            <li class="flex gap-2">
              <span class="text-destructive">•</span>
              <span>避免在小屏幕上使用过大的尺寸变体</span>
            </li>
            <li class="flex gap-2">
              <span class="text-destructive">•</span>
              <span>不要隐藏关键操作或重要信息在折叠面板中</span>
            </li>
            <li class="flex gap-2">
              <span class="text-destructive">•</span>
              <span>避免同时使用 collapse-open 和 checkbox 控制</span>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <!-- 页脚 -->
    <footer class="text-center py-8 border-t border-border">
      <p class="text-muted-foreground text-sm">
        Collapse 组件文档 · 基于 Tailwind CSS v4 ·
        <a href="#" class="text-primary hover:underline">查看更多组件</a>
      </p>
    </footer>
  </DocsContainer>
</template>

<script setup>
import DocsHeader from "../zcomp/DocsHeader.vue";
import ApiReference from "../zcomp/ApiReference.vue";
import DocsContainer from "../zcomp/DocsContainer.vue";
import DocsSection from "../zcomp/DocsSection.vue";
const apiClasses = [
  // 基础
  {
    category: "基础",
    className: "collapse",
    description:
      "Collapse 容器基础样式，支持 checkbox/radio/tabindex/details 控制展开。",
    isCategoryStart: true,
  },
  {
    category: "标题与内容",
    className: "collapse-title",
    description: "折叠标题层样式，支持 CSS 变量控制颜色、背景。",
    isCategoryStart: false,
  },
  {
    category: "标题与内容",
    className: "collapse-content",
    description: "折叠内容层样式，支持 CSS 变量控制颜色、背景。",
    isCategoryStart: false,
  },

  // 图标变体
  {
    category: "图标变体",
    className: "collapse-arrow",
    description: "带箭头图标的展开折叠效果。",
    isCategoryStart: false,
  },
  {
    category: "图标变体",
    className: "collapse-plus",
    description: "加号/减号图标变体。",
    isCategoryStart: false,
  },

  // 状态控制
  {
    category: "状态控制",
    className: "collapse-open",
    description: "强制展开状态。",
    isCategoryStart: false,
  },
  {
    category: "状态控制",
    className: "collapse-close",
    description: "强制关闭状态。",
    isCategoryStart: false,
  },

  // 配色方案
  {
    category: "配色方案",
    className: "collapse-primary",
    description: "主色折叠组件。",
    isCategoryStart: false,
  },
  {
    category: "配色方案",
    className: "collapse-secondary",
    description: "次色折叠组件。",
    isCategoryStart: false,
  },
  {
    category: "配色方案",
    className: "collapse-accent",
    description: "强调色折叠组件。",
    isCategoryStart: false,
  },
  {
    category: "配色方案",
    className: "collapse-destructive",
    description: "危险色折叠组件。",
    isCategoryStart: false,
  },
  {
    category: "配色方案",
    className: "collapse-muted",
    description: "弱色折叠组件。",
    isCategoryStart: false,
  },

  // 边框与阴影
  {
    category: "边框与阴影",
    className: "collapse-bordered",
    description: "带边框样式。",
    isCategoryStart: false,
  },
  {
    category: "边框与阴影",
    className: "collapse-shadow",
    description: "阴影效果，悬停有放大阴影。",
    isCategoryStart: false,
  },

  // 尺寸变体
  {
    category: "尺寸变体",
    className: "collapse-sm",
    description: "小尺寸折叠组件。",
    isCategoryStart: false,
  },
  {
    category: "尺寸变体",
    className: "collapse-lg",
    description: "大尺寸折叠组件。",
    isCategoryStart: false,
  },

  // 手风琴组合
  {
    category: "组合样式",
    className: "collapse-group",
    description: "手风琴组合容器。",
    isCategoryStart: false,
  },
  {
    category: "组合样式",
    className: "collapse-group-compact",
    description: "紧凑手风琴组合。",
    isCategoryStart: false,
  },

  // 悬停与禁用
  {
    category: "交互效果",
    className: "collapse-hover",
    description: "标题悬停效果。",
    isCategoryStart: false,
  },
  {
    category: "禁用状态",
    className: "collapse-disabled",
    description: "禁用状态，降低透明度并禁止交互。",
    isCategoryStart: false,
  },
];
</script>
