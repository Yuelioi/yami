<script setup lang="ts">
import DocsHeader from "../zcomp/DocsHeader.vue";
import DocsContainer from "../zcomp/DocsContainer.vue";
import DocsSection from "../zcomp/DocsSection.vue";
import ApiReference from "../zcomp/ApiReference.vue";

const apiClasses = [
  // === 基础 ===
  {
    category: "基础",
    className: "tabs",
    description: "Tabs 组件容器，定义整体布局与状态切换逻辑。",
    isCategoryStart: true,
  },
  {
    category: "基础",
    className: "tab-header",
    description: "Tabs 标题区容器，包裹多个 tab-title 与对应的 input。",
    isCategoryStart: false,
  },
  {
    category: "基础",
    className: "tab-title",
    description: "标签页标题按钮，用于切换不同的内容区域。",
    isCategoryStart: false,
  },
  {
    category: "基础",
    className: "tab-content",
    description: "标签页内容区，对应选中的标签显示内容。",
    isCategoryStart: false,
  },

  // === 变体 ===
  {
    category: "变体",
    className: "tabs-bordered",
    description: "带底边指示线样式的标签页。",
    isCategoryStart: true,
  },
  {
    category: "变体",
    className: "tabs-boxed",
    description: "盒装标签页样式，标题与内容分块呈现。",
    isCategoryStart: false,
  },
  {
    category: "变体",
    className: "tabs-lifted",
    description: "提升（Lifted）标签样式，标签页有立体边框感。",
    isCategoryStart: false,
  },

  // === 配色 ===
  {
    category: "配色",
    className: "tabs-primary",
    description: "使用 Primary 主题色的标签页。",
    isCategoryStart: true,
  },

  // === 尺寸 ===
  {
    category: "尺寸",
    className: "tabs-sm",
    description: "小号标签页，紧凑间距与字体。",
    isCategoryStart: true,
  },
  {
    category: "尺寸",
    className: "tabs-md",
    description: "中号标签页，默认尺寸。",
    isCategoryStart: false,
  },
  {
    category: "尺寸",
    className: "tabs-lg",
    description: "大号标签页，增加内边距与字体。",
    isCategoryStart: false,
  },
];
</script>

<template>
  <div class="min-h-screen bg-background p-8">
    <div class="max-w-5xl mx-auto space-y-12">
      <!-- 页面标题 -->
      <DocsHeader
        title="Tabs 标签页组件"
        description="用于在同一区域中切换多个内容面板的标签页组件，支持多种风格、尺寸与状态。"
      />

      <ApiReference :data="apiClasses" />

      <!-- 示例区域 -->
      <div class="space-y-12">
        <!-- Boxed 样式 -->
        <section class="space-y-4">
          <div class="space-y-2">
            <h3
              class="text-2xl font-semibold text-foreground flex items-center gap-2"
            >
              <span class="text-primary">📦</span>
              Boxed 样式
            </h3>
            <p class="text-sm text-muted-foreground">
              带圆角背景的选项卡，适合现代化界面设计
            </p>
          </div>

          <div class="bg-card border border-border rounded-lg p-6">
            <div class="tabs tabs-boxed">
              <div class="tab-header">
                <input type="radio" id="tab-1" name="tab" checked />
                <label for="tab-1" class="tab-title">📊 概述</label>

                <input type="radio" id="tab-2" name="tab" />
                <label for="tab-2" class="tab-title">⚙️ 功能</label>

                <input type="radio" id="tab-3" name="tab" />
                <label for="tab-3" class="tab-title">💰 价格</label>
              </div>

              <div class="tab-body">
                <div class="tab-content">
                  <div class="space-y-3">
                    <h4 class="text-lg font-semibold text-foreground">
                      产品概述
                    </h4>
                    <p class="text-muted-foreground leading-relaxed">
                      这是一个功能强大的产品，为您提供全方位的解决方案。我们致力于帮助团队提高效率，简化工作流程。
                    </p>
                    <div class="flex gap-2 pt-2">
                      <span
                        class="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                        >企业级</span
                      >
                      <span
                        class="px-3 py-1 bg-secondary/50 text-foreground text-sm rounded-full"
                        >高性能</span
                      >
                    </div>
                  </div>
                </div>
                <div class="tab-content">
                  <div class="space-y-3">
                    <h4 class="text-lg font-semibold text-foreground">
                      主要功能
                    </h4>
                    <ul class="space-y-2 text-muted-foreground">
                      <li class="flex items-start gap-2">
                        <span class="text-primary mt-1">✓</span>
                        <span>实时数据同步 - 确保团队信息始终保持最新</span>
                      </li>
                      <li class="flex items-start gap-2">
                        <span class="text-primary mt-1">✓</span>
                        <span>智能分析报告 - 自动生成深度数据洞察</span>
                      </li>
                      <li class="flex items-start gap-2">
                        <span class="text-primary mt-1">✓</span>
                        <span>团队协作工具 - 提升团队沟通效率</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="tab-content">
                  <div class="space-y-3">
                    <h4 class="text-lg font-semibold text-foreground">
                      定价方案
                    </h4>
                    <div class="grid grid-cols-3 gap-4 mt-4">
                      <div class="p-4 border border-border rounded-lg">
                        <div class="text-sm text-muted-foreground">基础版</div>
                        <div class="text-2xl font-bold text-foreground mt-2">
                          免费
                        </div>
                      </div>
                      <div
                        class="p-4 border-2 border-primary rounded-lg bg-primary/5"
                      >
                        <div class="text-sm text-primary">专业版</div>
                        <div class="text-2xl font-bold text-foreground mt-2">
                          ¥99<span class="text-sm font-normal">/月</span>
                        </div>
                      </div>
                      <div class="p-4 border border-border rounded-lg">
                        <div class="text-sm text-muted-foreground">企业版</div>
                        <div class="text-lg font-semibold text-foreground mt-2">
                          联系我们
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Bordered 样式 -->
        <section class="space-y-4">
          <div class="space-y-2">
            <h3
              class="text-2xl font-semibold text-foreground flex items-center gap-2"
            >
              <span class="text-primary">📋</span>
              Bordered 样式
            </h3>
            <p class="text-sm text-muted-foreground">
              带底部边框的经典选项卡样式，简洁清晰
            </p>
          </div>

          <div class="bg-card border border-border rounded-lg p-6">
            <div class="tabs tabs-bordered">
              <div class="tab-header">
                <input type="radio" id="tab-11" name="tab2" checked />
                <label for="tab-11" class="tab-title">🏠 首页</label>

                <input type="radio" id="tab-12" name="tab2" />
                <label for="tab-12" class="tab-title">📈 数据</label>

                <input type="radio" id="tab-13" name="tab2" />
                <label for="tab-13" class="tab-title">⚡ 性能</label>
              </div>

              <div class="tab-body">
                <div class="tab-content">
                  <p class="text-muted-foreground">
                    欢迎回来！这是您的工作台概览。
                  </p>
                </div>
                <div class="tab-content">
                  <p class="text-muted-foreground">
                    数据分析面板，展示关键指标和趋势。
                  </p>
                </div>
                <div class="tab-content">
                  <p class="text-muted-foreground">
                    系统性能监控，实时追踪运行状态。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Lifted 样式 -->
        <section class="space-y-4">
          <div class="space-y-2">
            <h3
              class="text-2xl font-semibold text-foreground flex items-center gap-2"
            >
              <span class="text-primary">🎨</span>
              Lifted 样式
            </h3>
            <p class="text-sm text-muted-foreground">
              具有立体感的选项卡，选中时会"抬起"显示
            </p>
          </div>

          <div class="bg-muted/30 rounded-lg p-6">
            <div class="tabs tabs-lifted">
              <div class="tab-header">
                <input type="radio" id="tab-21" name="tab3" checked />
                <label for="tab-21" class="tab-title">设计</label>

                <input type="radio" id="tab-22" name="tab3" />
                <label for="tab-22" class="tab-title">开发</label>

                <input type="radio" id="tab-23" name="tab3" />
                <label for="tab-23" class="tab-title">测试</label>
              </div>

              <div class="tab-body">
                <div class="tab-content">
                  <p class="text-muted-foreground">
                    UI/UX 设计阶段，关注用户体验和界面美观。
                  </p>
                </div>
                <div class="tab-content">
                  <p class="text-muted-foreground">
                    前后端开发阶段，实现业务逻辑和功能。
                  </p>
                </div>
                <div class="tab-content">
                  <p class="text-muted-foreground">
                    质量保证阶段，确保产品稳定可靠。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- 带图标和徽章 -->
        <section class="space-y-4">
          <div class="space-y-2">
            <h3
              class="text-2xl font-semibold text-foreground flex items-center gap-2"
            >
              <span class="text-primary">🎯</span>
              带图标和徽章
            </h3>
            <p class="text-sm text-muted-foreground">
              支持在选项卡中添加图标、徽章等自定义内容
            </p>
          </div>

          <div class="bg-card border border-border rounded-lg p-6">
            <div class="tabs tabs-boxed">
              <div class="tab-header">
                <input type="radio" name="icon-tab" id="icon-1" checked />
                <label for="icon-1" class="tab-title">
                  <svg
                    class="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    />
                  </svg>
                  <span>首页</span>
                </label>

                <input type="radio" name="icon-tab" id="icon-2" />
                <label for="icon-2" class="tab-title">
                  <svg
                    class="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                    />
                  </svg>
                  <span>通知</span>
                  <span
                    class="ml-1 px-1.5 py-0.5 text-xs bg-primary text-primary-foreground rounded-full"
                    >5</span
                  >
                </label>

                <input type="radio" name="icon-tab" id="icon-3" />
                <label for="icon-3" class="tab-title">
                  <svg
                    class="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span>设置</span>
                </label>
              </div>

              <div class="tab-body">
                <div class="tab-content">
                  <div class="space-y-3">
                    <h4 class="text-lg font-semibold text-foreground">
                      欢迎回来！
                    </h4>
                    <p class="text-muted-foreground">
                      这是您的个人仪表板，查看最新动态和快捷操作。
                    </p>
                    <div class="grid grid-cols-3 gap-3 mt-4">
                      <div class="p-3 bg-muted/50 rounded-lg text-center">
                        <div class="text-2xl font-bold text-foreground">24</div>
                        <div class="text-xs text-muted-foreground mt-1">
                          项目
                        </div>
                      </div>
                      <div class="p-3 bg-muted/50 rounded-lg text-center">
                        <div class="text-2xl font-bold text-foreground">
                          156
                        </div>
                        <div class="text-xs text-muted-foreground mt-1">
                          任务
                        </div>
                      </div>
                      <div class="p-3 bg-muted/50 rounded-lg text-center">
                        <div class="text-2xl font-bold text-foreground">
                          89%
                        </div>
                        <div class="text-xs text-muted-foreground mt-1">
                          完成率
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="tab-content">
                  <div class="space-y-3">
                    <h4 class="text-lg font-semibold text-foreground">
                      未读通知
                    </h4>
                    <div class="space-y-2">
                      <div
                        class="p-3 bg-muted/30 rounded-lg flex items-start gap-3"
                      >
                        <span class="text-primary">📌</span>
                        <div class="flex-1">
                          <div class="text-sm font-medium">新消息</div>
                          <div class="text-xs text-muted-foreground mt-1">
                            您有一条待处理的任务需要确认
                          </div>
                        </div>
                      </div>
                      <div
                        class="p-3 bg-muted/30 rounded-lg flex items-start gap-3"
                      >
                        <span class="text-primary">🔔</span>
                        <div class="flex-1">
                          <div class="text-sm font-medium">系统更新</div>
                          <div class="text-xs text-muted-foreground mt-1">
                            版本 2.0 已发布，包含多项新功能
                          </div>
                        </div>
                      </div>
                      <div
                        class="p-3 bg-muted/30 rounded-lg flex items-start gap-3"
                      >
                        <span class="text-primary">⏰</span>
                        <div class="flex-1">
                          <div class="text-sm font-medium">会议提醒</div>
                          <div class="text-xs text-muted-foreground mt-1">
                            团队例会将在 30 分钟后开始
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="tab-content">
                  <div class="space-y-4">
                    <h4 class="text-lg font-semibold text-foreground">
                      系统设置
                    </h4>
                    <div class="space-y-3">
                      <div
                        class="flex items-center justify-between p-3 bg-muted/30 rounded-lg"
                      >
                        <div>
                          <div class="text-sm font-medium">深色模式</div>
                          <div class="text-xs text-muted-foreground mt-0.5">
                            切换界面主题
                          </div>
                        </div>
                        <input type="checkbox" class="w-4 h-4" />
                      </div>
                      <div
                        class="flex items-center justify-between p-3 bg-muted/30 rounded-lg"
                      >
                        <div>
                          <div class="text-sm font-medium">自动保存</div>
                          <div class="text-xs text-muted-foreground mt-0.5">
                            自动保存工作内容
                          </div>
                        </div>
                        <input type="checkbox" class="w-4 h-4" checked />
                      </div>
                      <div
                        class="flex items-center justify-between p-3 bg-muted/30 rounded-lg"
                      >
                        <div>
                          <div class="text-sm font-medium">桌面通知</div>
                          <div class="text-xs text-muted-foreground mt-0.5">
                            接收系统推送通知
                          </div>
                        </div>
                        <input type="checkbox" class="w-4 h-4" checked />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- 禁用状态 -->
        <section class="space-y-4">
          <div class="space-y-2">
            <h3
              class="text-2xl font-semibold text-foreground flex items-center gap-2"
            >
              <span class="text-primary">🚫</span>
              禁用状态
            </h3>
            <p class="text-sm text-muted-foreground">
              部分选项卡可设置为禁用状态，防止用户交互
            </p>
          </div>

          <div class="bg-card border border-border rounded-lg p-6">
            <div class="tabs tabs-boxed">
              <div class="tab-header">
                <input
                  type="radio"
                  name="disabled-tab"
                  id="disabled-1"
                  checked
                />
                <label for="disabled-1" class="tab-title">✅ 可用</label>

                <input
                  type="radio"
                  name="disabled-tab"
                  id="disabled-2"
                  disabled
                />
                <label
                  for="disabled-2"
                  class="tab-title opacity-50 cursor-not-allowed"
                  >🔒 禁用</label
                >

                <input type="radio" name="disabled-tab" id="disabled-3" />
                <label for="disabled-3" class="tab-title">✅ 可用</label>
              </div>

              <div class="tab-body">
                <div class="tab-content">
                  <p class="text-muted-foreground">
                    这是第一个可用的选项卡内容，用户可以正常访问。
                  </p>
                </div>
                <div class="tab-content">
                  <p class="text-muted-foreground">
                    这个内容不会显示，因为对应的选项卡已禁用。
                  </p>
                </div>
                <div class="tab-content">
                  <p class="text-muted-foreground">
                    这是第三个可用的选项卡内容，同样可以正常访问。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <!-- 页脚 -->
      <footer class="text-center py-8 border-t border-border">
        <p class="text-sm text-muted-foreground">
          ✨ Tabs 组件 - 灵活、简洁、零配置的选项卡解决方案
        </p>
      </footer>
    </div>
  </div>
</template>
