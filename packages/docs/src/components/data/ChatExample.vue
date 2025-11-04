<script setup lang="ts">
import DocsHeader from '../zcomp/DocsHeader.vue'
import DocsContainer from '../zcomp/DocsContainer.vue'
import DocsSection from '../zcomp/DocsSection.vue'
import ApiReference from '../zcomp/ApiReference.vue'

const apiClasses = [
  {
    category: '结构',
    className: 'chat',
    description: '聊天消息容器，用于组织气泡、头像、头部与底部信息。',
    isCategoryStart: true,
  },
  {
    category: '结构',
    className: 'chat-bubble',
    description: '消息气泡本体，可包含文本或其他元素。',
    isCategoryStart: false,
  },
  {
    category: '结构',
    className: 'chat-image',
    description: '显示用户头像，位于左或右侧。',
    isCategoryStart: false,
  },
  {
    category: '结构',
    className: 'chat-header',
    description: '气泡上方显示用户信息或时间。',
    isCategoryStart: false,
  },
  {
    category: '结构',
    className: 'chat-footer',
    description: '气泡下方显示发送状态、时间等。',
    isCategoryStart: false,
  },
  {
    category: '布局',
    className: 'chat-start',
    description: '左侧气泡（对方消息）。',
    isCategoryStart: true,
  },
  {
    category: '布局',
    className: 'chat-end',
    description: '右侧气泡（自己消息）。',
    isCategoryStart: false,
  },
  {
    category: '颜色',
    className: 'chat-bubble-primary',
    description: '主色气泡。',
    isCategoryStart: true,
  },
  {
    category: '颜色',
    className: 'chat-bubble-muted',
    description: '浅色气泡。',
    isCategoryStart: false,
  },
  {
    category: '颜色',
    className: 'chat-bubble-accent',
    description: '强调色气泡。',
    isCategoryStart: false,
  },
  {
    category: '颜色',
    className: 'chat-bubble-destructive',
    description: '错误 / 危险色气泡。',
    isCategoryStart: false,
  },
]
</script>

<template>
  <DocsContainer>
    <DocsHeader
      title="Chat 聊天气泡"
      description="用于构建消息对话的组件，支持左右布局、头像、头尾信息和多种颜色变体。"
    />

    <ApiReference :data="apiClasses" />

    <div class="chat chat-start">
      <img src="https://i.pravatar.cc/40?img=3" class="chat-image" />
      <div>
        <div class="chat-header">Alice</div>
        <div class="chat-bubble">嗨～ 你今天怎么样？</div>
        <div class="chat-footer">10:23</div>
      </div>
    </div>

    <div class="chat chat-end">
      <div>
        <div class="chat-header">我</div>
        <div class="chat-bubble chat-bubble-primary">挺好的，谢谢！你呢？</div>
        <div class="chat-footer">10:24</div>
      </div>
      <img src="https://i.pravatar.cc/40?img=3" class="chat-image" />
    </div>

    <div class="chat chat-start">
      <div class="chat-bubble chat-bubble-destructive">系统提示：连接中断，请稍后重试。</div>
    </div>

    <!-- 基础示例 -->
    <DocsSection title="基础示例">
      <div class="space-y-4">
        <div class="chat chat-start">
          <div class="chat-image">
            <img src="https://i.pravatar.cc/40?img=3" alt="User" class="size-8 rounded-full" />
          </div>
          <div class="chat-header">Alice <time datetime="2025-11-03T09:30">9:30</time></div>
          <div class="chat-bubble">Hi! How are you today?</div>
          <div class="chat-footer">Delivered</div>
        </div>

        <div class="chat chat-end">
          <div class="chat-image">
            <img src="https://i.pravatar.cc/40?img=7" alt="You" class="size-8 rounded-full" />
          </div>
          <div class="chat-header">You <time datetime="2025-11-03T09:32">9:32</time></div>
          <div class="chat-bubble chat-bubble-primary">I'm great! Thanks 😊</div>
          <div class="chat-footer">Seen</div>
        </div>
      </div>
    </DocsSection>

    <!-- 多条消息 -->
    <DocsSection title="多条消息示例">
      <div class="space-y-3">
        <div class="chat chat-start">
          <div class="chat-image">
            <img src="https://i.pravatar.cc/40?img=5" alt="User" class="size-8 rounded-full" />
          </div>
          <div class="chat-header">Alex</div>
          <div class="chat-bubble chat-bubble-muted">Are we still on for the meeting later?</div>
        </div>

        <div class="chat chat-end">
          <div class="chat-bubble chat-bubble-accent">Yes, 2PM as planned.</div>
        </div>

        <div class="chat chat-start">
          <div class="chat-bubble chat-bubble-destructive">
            Got it. Let me update the doc before that.
          </div>
        </div>
      </div>
    </DocsSection>

    <!-- 颜色变体 -->
    <DocsSection title="气泡颜色变体">
      <div class="space-y-3">
        <div class="chat chat-start">
          <div class="chat-bubble chat-bubble-primary">Primary</div>
        </div>
        <div class="chat chat-start">
          <div class="chat-bubble chat-bubble-muted">Muted</div>
        </div>
        <div class="chat chat-start">
          <div class="chat-bubble chat-bubble-accent">Accent</div>
        </div>
        <div class="chat chat-start">
          <div class="chat-bubble chat-bubble-destructive">Destructive</div>
        </div>
      </div>
    </DocsSection>
  </DocsContainer>
</template>
