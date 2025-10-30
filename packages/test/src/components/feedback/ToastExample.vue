<script setup lang="ts">
import DocsHeader from "../zcomp/DocsHeader.vue";
import DocsContainer from "../zcomp/DocsContainer.vue";
import DocsSection from "../zcomp/DocsSection.vue";
import ApiReference from "../zcomp/ApiReference.vue";

const apiClasses = [
  {
    category: "基础结构",
    className: "toast",
    description: "Toast 基础容器，含背景、边框、间距与排版。",
    isCategoryStart: true,
  },
  {
    category: "基础结构",
    className: "toast-title",
    description: "标题文字样式，加粗小号字体。",
    isCategoryStart: false,
  },
  {
    category: "基础结构",
    className: "toast-message",
    description: "正文信息样式，浅色次级文字。",
    isCategoryStart: false,
  },
  {
    category: "基础结构",
    className: "toast-close",
    description: "右侧关闭按钮（内置 SVG 图标）。",
    isCategoryStart: false,
  },

  {
    category: "颜色类型",
    className: "toast-info",
    description: "信息提示（Primary 蓝色）。",
    isCategoryStart: true,
  },
  {
    category: "颜色类型",
    className: "toast-success",
    description: "成功提示（绿色）。",
    isCategoryStart: false,
  },
  {
    category: "颜色类型",
    className: "toast-warning",
    description: "警告提示（琥珀色）。",
    isCategoryStart: false,
  },
  {
    category: "颜色类型",
    className: "toast-error",
    description: "错误提示（Destructive 红色）。",
    isCategoryStart: false,
  },

  {
    category: "尺寸变体",
    className: "toast-sm",
    description: "小尺寸 Toast。",
    isCategoryStart: true,
  },
  {
    category: "尺寸变体",
    className: "toast-lg",
    description: "大尺寸 Toast。",
    isCategoryStart: false,
  },

  {
    category: "功能扩展",
    className: "toast-no-icon",
    description: "隐藏左侧图标。",
    isCategoryStart: true,
  },

  {
    category: "动画过渡",
    className: "toast-enter",
    description: "进入动画的起始状态。",
    isCategoryStart: true,
  },
  {
    category: "动画过渡",
    className: "toast-enter-active",
    description: "进入动画的过渡状态。",
    isCategoryStart: false,
  },
  {
    category: "动画过渡",
    className: "toast-enter-to",
    description: "进入动画的结束状态。",
    isCategoryStart: false,
  },
  {
    category: "动画过渡",
    className: "toast-leave",
    description: "离开动画的起始状态。",
    isCategoryStart: false,
  },
  {
    category: "动画过渡",
    className: "toast-leave-active",
    description: "离开动画的过渡状态。",
    isCategoryStart: false,
  },
  {
    category: "动画过渡",
    className: "toast-leave-to",
    description: "离开动画的结束状态。",
    isCategoryStart: false,
  },
];
</script>

<template>
  <DocsContainer>
    <DocsHeader
      title="Toast 消息组件"
      description="用于全局反馈信息的轻量提示，支持多种状态类型与动画过渡。"
    />

    <ApiReference :data="apiClasses" />

    <DocsSection title="基础示例">
      <div class="flex flex-col gap-3 max-w-md">
        <div class="toast toast-info">
          <div>
            <div class="toast-title">信息</div>
            <div class="toast-message">这是一条普通提示消息。</div>
          </div>
          <div class="toast-close"></div>
        </div>

        <div class="toast toast-success">
          <div>
            <div class="toast-title">成功</div>
            <div class="toast-message">操作成功完成！</div>
          </div>
          <div class="toast-close"></div>
        </div>

        <div class="toast toast-warning">
          <div>
            <div class="toast-title">警告</div>
            <div class="toast-message">请检查输入内容。</div>
          </div>
          <div class="toast-close"></div>
        </div>

        <div class="toast toast-error">
          <div>
            <div class="toast-title">错误</div>
            <div class="toast-message">提交失败，请重试。</div>
          </div>
          <div class="toast-close"></div>
        </div>
      </div>
    </DocsSection>

    <DocsSection title="尺寸变体">
      <div class="flex flex-col gap-3 max-w-md">
        <div class="toast toast-success toast-sm">
          <div>
            <div class="toast-title">小号提示</div>
            <div class="toast-message">更紧凑的布局。</div>
          </div>
          <div class="toast-close"></div>
        </div>

        <div class="toast toast-info toast-lg">
          <div>
            <div class="toast-title">大号提示</div>
            <div class="toast-message">更醒目的样式。</div>
          </div>
          <div class="toast-close"></div>
        </div>
      </div>
    </DocsSection>

    <DocsSection title="无图标样式">
      <div class="toast toast-warning toast-no-icon max-w-md">
        <div>
          <div class="toast-title">自定义样式</div>
          <div class="toast-message">隐藏默认图标以简洁显示。</div>
        </div>
        <div class="toast-close"></div>
      </div>
    </DocsSection>

    <DocsSection title="进入 / 离开动画示例">
      <div class="relative w-full max-w-md overflow-hidden">
        <Transition
          enter-active-class="toast-enter-active"
          enter-from-class="toast-enter"
          enter-to-class="toast-enter-to"
          leave-active-class="toast-leave-active"
          leave-from-class="toast-leave"
          leave-to-class="toast-leave-to"
        >
          <div v-if="true" class="toast toast-info">
            <div>
              <div class="toast-title">动画演示</div>
              <div class="toast-message">支持过渡动画样式。</div>
            </div>
            <div class="toast-close"></div>
          </div>
        </Transition>
      </div>
    </DocsSection>
  </DocsContainer>
</template>
