<script setup lang="ts">
import DocsHeader from '@/components/zcomp/DocsHeader.vue'
import DocsSection from '@/components/zcomp/DocsSection.vue'
import ApiReference from '@/components/zcomp/ApiReference.vue'
import DocsContainer from '@/components/zcomp/DocsContainer.vue'

const apiClasses = [
  {
    category: '基础',
    className: 'chat',
    description: '聊天行容器',
    isCategoryStart: true,
  },
  {
    category: '基础',
    className: 'chat-bubble',
    description: '聊天气泡',
    isCategoryStart: false,
  },
  {
    category: '基础',
    className: 'chat-avatar',
    description: '聊天头像',
    isCategoryStart: false,
  },
  {
    category: '基础',
    className: 'chat-header',
    description: '聊天标题',
    isCategoryStart: false,
  },
  {
    category: '基础',
    className: 'chat-footer',
    description: '聊天页脚',
    isCategoryStart: false,
  },
  {
    category: '方向',
    className: 'chat-receiver',
    description: '接收消息（左对齐）',
    isCategoryStart: false,
  },
  {
    category: '方向',
    className: 'chat-sender',
    description: '发送消息（右对齐）',
    isCategoryStart: false,
  },
]
</script>

<template>
  <DocsContainer>
    <DocsHeader title="Chat" description="聊天气泡组件，支持接收和发送消息。" />

    <ApiReference :data="apiClasses"></ApiReference>

    <DocsSection title="接收消息">
      <div class="chat chat-receiver">
        <div class="chat-avatar">
          <div class="avatar">
            <div
              class="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white"
            >
              A
            </div>
          </div>
        </div>
        <div class="chat-header">Alice</div>
        <div class="chat-bubble">你好！这是一条接收的消息。</div>
        <div class="chat-footer text-xs text-base-content/60">12:00</div>
      </div>
    </DocsSection>

    <DocsSection title="发送消息">
      <div class="chat chat-sender">
        <div class="chat-header">You</div>
        <div class="chat-bubble">这是一条发送的消息。</div>
        <div class="chat-footer text-xs text-base-content/60">12:01</div>
        <div class="chat-avatar">
          <div class="avatar">
            <div
              class="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-white"
            >
              B
            </div>
          </div>
        </div>
      </div>
    </DocsSection>

    <DocsSection title="完整对话">
      <div class="space-y-2">
        <div class="chat chat-receiver">
          <div class="chat-avatar">
            <div class="avatar">
              <div
                class="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white text-sm font-bold"
              >
                A
              </div>
            </div>
          </div>
          <div class="chat-header">Alice</div>
          <div class="chat-bubble">嗨，你好吗？</div>
          <div class="chat-footer text-xs text-base-content/60">10:00</div>
        </div>

        <div class="chat chat-sender">
          <div class="chat-header">You</div>
          <div class="chat-bubble">很好，谢谢！你呢？</div>
          <div class="chat-footer text-xs text-base-content/60">10:02</div>
          <div class="chat-avatar">
            <div class="avatar">
              <div
                class="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-white text-sm font-bold"
              >
                B
              </div>
            </div>
          </div>
        </div>

        <div class="chat chat-receiver">
          <div class="chat-avatar">
            <div class="avatar">
              <div
                class="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white text-sm font-bold"
              >
                A
              </div>
            </div>
          </div>
          <div class="chat-header">Alice</div>
          <div class="chat-bubble">我也很好！最近在忙什么？</div>
          <div class="chat-footer text-xs text-base-content/60">10:04</div>
        </div>

        <div class="chat chat-sender">
          <div class="chat-header">You</div>
          <div class="chat-bubble">在做一个有趣的项目</div>
          <div class="chat-footer text-xs text-base-content/60">10:05</div>
          <div class="chat-avatar">
            <div class="avatar">
              <div
                class="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-white text-sm font-bold"
              >
                B
              </div>
            </div>
          </div>
        </div>
      </div>
    </DocsSection>

    <DocsSection title="带图片消息">
      <div class="space-y-2">
        <div class="chat chat-receiver">
          <div class="chat-avatar">
            <div class="avatar">
              <div
                class="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white"
              >
                A
              </div>
            </div>
          </div>
          <div class="chat-bubble">
            <img
              src="https://images.unsplash.com/photo-1506157786151-b8491531f063?w=200&h=150&fit=crop"
              alt="Shared image"
              class="rounded-box max-w-xs"
            />
          </div>
        </div>

        <div class="chat chat-sender">
          <div class="chat-bubble">
            <img
              src="https://images.unsplash.com/photo-1506157786151-b8491531f063?w=200&h=150&fit=crop"
              alt="Shared image"
              class="rounded-box max-w-xs"
            />
          </div>
          <div class="chat-avatar">
            <div class="avatar">
              <div
                class="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-white"
              >
                B
              </div>
            </div>
          </div>
        </div>
      </div>
    </DocsSection>

    <DocsSection title="无头像消息">
      <div class="space-y-2">
        <div class="chat chat-receiver">
          <div class="chat-header">系统消息</div>
          <div class="chat-bubble">用户已加入聊天</div>
        </div>

        <div class="chat chat-sender">
          <div class="chat-bubble">谢谢提醒！</div>
        </div>
      </div>
    </DocsSection>

    <DocsSection title="长消息">
      <div class="chat chat-receiver">
        <div class="chat-avatar">
          <div class="avatar">
            <div
              class="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white"
            ></div>
          </div>
        </div>
        <div class="chat-header">Alice</div>
        <div class="chat-bubble max-w-sm">
          这是一条很长的消息。chat-bubble 会自动换行，并且 max-width 设置为 90%
          确保不会过宽。你可以在这里输入任意长度的文本。
        </div>
      </div>
    </DocsSection>
  </DocsContainer>
</template>
