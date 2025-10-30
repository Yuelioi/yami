<script setup lang="ts">
import DocsHeader from "../zcomp/DocsHeader.vue";
import DocsContainer from "../zcomp/DocsContainer.vue";
import DocsSection from "../zcomp/DocsSection.vue";
import ApiReference from "../zcomp/ApiReference.vue";

const apiClasses = [
  // === 基础 ===
  {
    category: "基础",
    className: "checkbox",
    description: "Checkbox 基类，定义复选框布局与交互样式。",
    isCategoryStart: true,
  },
  {
    category: "基础",
    className: "checkbox-label",
    description: "复选框文本标签，用于显示选项说明。",
    isCategoryStart: false,
  },

  // === 配色方案 ===
  {
    category: "配色方案",
    className: "checkbox-primary",
    description: "主色样式，使用 Primary 主题色。",
    isCategoryStart: true,
  },
  {
    category: "配色方案",
    className: "checkbox-secondary",
    description: "次要样式，使用 Secondary 主题色。",
    isCategoryStart: false,
  },
  {
    category: "配色方案",
    className: "checkbox-accent",
    description: "强调样式，使用 Accent 主题色（黑色图标）。",
    isCategoryStart: false,
  },
  {
    category: "配色方案",
    className: "checkbox-destructive",
    description: "危险样式，使用 Destructive 主题色。",
    isCategoryStart: false,
  },

  // === 尺寸 ===
  {
    category: "尺寸",
    className: "checkbox-sm",
    description: "小号复选框，尺寸 1rem，文字较小。",
    isCategoryStart: true,
  },
  {
    category: "尺寸",
    className: "checkbox-md",
    description: "中号复选框，默认大小（1.25rem）。",
    isCategoryStart: false,
  },
  {
    category: "尺寸",
    className: "checkbox-lg",
    description: "大号复选框，尺寸 1.5rem。",
    isCategoryStart: false,
  },
  {
    category: "尺寸",
    className: "checkbox-xl",
    description: "超大号复选框，尺寸 1.75rem。",
    isCategoryStart: false,
  },

  // === 圆角 ===
  {
    category: "圆角",
    className: "checkbox-rounded-none",
    description: "无圆角方形复选框。",
    isCategoryStart: true,
  },
  {
    category: "圆角",
    className: "checkbox-rounded-sm",
    description: "小圆角复选框。",
    isCategoryStart: false,
  },
  {
    category: "圆角",
    className: "checkbox-rounded-md",
    description: "中圆角复选框。",
    isCategoryStart: false,
  },
  {
    category: "圆角",
    className: "checkbox-rounded-lg",
    description: "大圆角复选框。",
    isCategoryStart: false,
  },
  {
    category: "圆角",
    className: "checkbox-rounded-full",
    description: "完全圆形复选框。",
    isCategoryStart: false,
  },

  // === 修饰类 ===
  {
    category: "修饰类",
    className: "checkbox-thick",
    description: "加粗边框样式（3px）。",
    isCategoryStart: true,
  },
  {
    category: "修饰类",
    className: "checkbox-animated",
    description: "选中时添加缩放动画效果。",
    isCategoryStart: false,
  },

  // === 卡片样式 ===
  {
    category: "卡片样式",
    className: "checkbox-card",
    description: "卡片式复选框，将整个内容区域作为可选项。",
    isCategoryStart: true,
  },
  {
    category: "卡片样式",
    className: "checkbox-card-content",
    description: "卡片内容区域容器。",
    isCategoryStart: false,
  },
  {
    category: "卡片样式",
    className: "checkbox-card-icon",
    description: "卡片内的小图标区域，显示勾选状态。",
    isCategoryStart: false,
  },

  // === 分组 ===
  {
    category: "分组",
    className: "checkbox-group",
    description: "复选框组容器，默认垂直排列。",
    isCategoryStart: true,
  },
  {
    category: "分组",
    className: "checkbox-group-label",
    description: "复选框组标题标签。",
    isCategoryStart: false,
  },
  {
    category: "分组",
    className: "checkbox-group-item",
    description: "复选框组中的单项容器。",
    isCategoryStart: false,
  },
  {
    category: "分组",
    className: "checkbox-group-horizontal",
    description: "水平排列的复选框组。",
    isCategoryStart: false,
  },

  // === 状态类 ===
  {
    category: "状态类",
    className: "checkbox-error",
    description: "错误状态样式，显示红色边框与提示文字。",
    isCategoryStart: true,
  },
  {
    category: "状态类",
    className: "checkbox-success",
    description: "成功状态样式，绿色边框与填充。",
    isCategoryStart: false,
  },

  // === 描述样式 ===
  {
    category: "描述样式",
    className: "",
    description: "复选框带描述文本布局样式。",
    isCategoryStart: true,
  },
  {
    category: "描述样式",
    className: "checkbox-content",
    description: "复选框文本与描述的包裹层。",
    isCategoryStart: false,
  },
  {
    category: "描述样式",
    className: "checkbox-description",
    description: "复选框下方的小字描述文本。",
    isCategoryStart: false,
  },
];
</script>

<template>
  <DocsContainer>
    <DocsHeader
      title="Checkbox 复选框组件"
      description="用于选择一个或多个选项的复选框组件，支持多种配色、尺寸、形状与样式变体。"
    />

    <ApiReference :data="apiClasses" />

    <!-- 基础示例 -->
    <DocsSection title="基础示例">
      <div class="flex flex-col gap-4">
        <label class="checkbox">
          <input type="checkbox" />
          <span class="checkbox-label">默认复选框</span>
        </label>

        <label class="checkbox checkbox-primary">
          <input type="checkbox" checked />
          <span class="checkbox-label">Primary 主题</span>
        </label>

        <label class="checkbox checkbox-secondary">
          <input type="checkbox" checked />
          <span class="checkbox-label">Secondary 主题</span>
        </label>

        <label class="checkbox checkbox-accent">
          <input type="checkbox" checked />
          <span class="checkbox-label">Accent 主题（黑色图标）</span>
        </label>

        <label class="checkbox checkbox-destructive">
          <input type="checkbox" checked />
          <span class="checkbox-label">Destructive 主题</span>
        </label>
      </div>
    </DocsSection>

    <!-- 尺寸与圆角 -->
    <DocsSection title="尺寸与圆角">
      <div class="flex flex-col gap-3">
        <label class="checkbox checkbox-sm">
          <input type="checkbox" checked />
          <span class="checkbox-label">小号 (sm)</span>
        </label>

        <label class="checkbox checkbox-md">
          <input type="checkbox" checked />
          <span class="checkbox-label">中号 (md)</span>
        </label>

        <label class="checkbox checkbox-lg">
          <input type="checkbox" checked />
          <span class="checkbox-label">大号 (lg)</span>
        </label>

        <label class="checkbox checkbox-xl">
          <input type="checkbox" checked />
          <span class="checkbox-label">超大号 (xl)</span>
        </label>

        <label class="checkbox checkbox-rounded-full">
          <input type="checkbox" checked />
          <span class="checkbox-label">圆形复选框</span>
        </label>
      </div>
    </DocsSection>

    <!-- 动画与修饰 -->
    <DocsSection title="动画与修饰">
      <div class="flex flex-col gap-3">
        <label class="checkbox checkbox-thick">
          <input type="checkbox" checked />
          <span class="checkbox-label">加粗边框</span>
        </label>

        <label class="checkbox checkbox-animated">
          <input type="checkbox" checked />
          <span class="checkbox-label">带动画效果</span>
        </label>
      </div>
    </DocsSection>

    <!-- 卡片样式 -->
    <DocsSection title="卡片样式">
      <div class="grid gap-4 md:grid-cols-2">
        <label class="checkbox checkbox-card">
          <input type="checkbox" />
          <div class="checkbox-card-content">
            <div class="checkbox-card-icon"></div>
            <div>
              <div class="font-semibold">订阅新闻邮件</div>
              <div class="text-sm text-muted-foreground">
                接收每周产品更新与优惠资讯。
              </div>
            </div>
          </div>
        </label>

        <label class="checkbox checkbox-card">
          <input type="checkbox" checked />
          <div class="checkbox-card-content">
            <div class="checkbox-card-icon"></div>
            <div>
              <div class="font-semibold">启用推送通知</div>
              <div class="text-sm text-muted-foreground">
                接收即时消息与活动提醒。
              </div>
            </div>
          </div>
        </label>
      </div>
    </DocsSection>

    <!-- 分组与状态 -->
    <DocsSection title="分组与状态">
      <div class="space-y-6">
        <div class="checkbox-group">
          <span class="checkbox-group-label">通知设置</span>
          <label class="checkbox checkbox-group-item">
            <input type="checkbox" />
            <span class="checkbox-label">邮件提醒</span>
          </label>
          <label class="checkbox checkbox-group-item">
            <input type="checkbox" checked />
            <span class="checkbox-label">短信通知</span>
          </label>
        </div>

        <div class="checkbox-group checkbox-group-horizontal">
          <span class="checkbox-group-label">兴趣方向</span>
          <label class="checkbox checkbox-group-item">
            <input type="checkbox" />
            <span class="checkbox-label">设计</span>
          </label>
          <label class="checkbox checkbox-group-item">
            <input type="checkbox" />
            <span class="checkbox-label">前端</span>
          </label>
          <label class="checkbox checkbox-group-item">
            <input type="checkbox" checked />
            <span class="checkbox-label">后端</span>
          </label>
        </div>

        <div class="checkbox checkbox-destructive">
          <input type="checkbox" />
          <span class="checkbox-label">必须同意条款</span>
          <span class="checkbox-description">请勾选以继续</span>
        </div>
      </div>
    </DocsSection>

    <!-- 带描述文本 -->
    <DocsSection title="带描述文本">
      <div class="flex flex-col gap-3">
        <label class="checkbox">
          <input type="checkbox" checked />
          <div class="checkbox-content">
            <span class="checkbox-label">启用同步</span>
            <span class="checkbox-description">自动同步云端数据。</span>
          </div>
        </label>

        <label class="checkbox">
          <input type="checkbox" />
          <div class="checkbox-content">
            <span class="checkbox-label">参与测试计划</span>
            <span class="checkbox-description"> 获取新版本的提前体验。 </span>
          </div>
        </label>
      </div>
    </DocsSection>
  </DocsContainer>
</template>
