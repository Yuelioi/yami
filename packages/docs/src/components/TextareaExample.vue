<script setup lang="ts">
import DocsHeader from '@/components/zcomp/DocsHeader.vue'
import DocsSection from '@/components/zcomp/DocsSection.vue'
import ApiReference from '@/components/zcomp/ApiReference.vue'
import DocsContainer from '@/components/zcomp/DocsContainer.vue'
import { ref } from 'vue'

const message = ref('')
const description = ref('')
const floatingMessage = ref('')

const apiClasses = [
  // 基础
  {
    category: '基础',
    className: 'textarea',
    description: '文本域基础样式，支持多行文本输入。包含聚焦状态、禁用状态和悬停效果。',
    isCategoryStart: true,
  },

  // 浮动标签
  {
    category: '浮动标签',
    className: 'textarea-floating',
    description: '浮动标签容器，包含标签上浮动画和状态管理。',
    isCategoryStart: false,
  },
  {
    category: '浮动标签',
    className: 'textarea-floating-label',
    description: '浮动标签文本，支持平滑的上浮动画效果。',
    isCategoryStart: false,
  },

  // 尺寸
  {
    category: '尺寸',
    className: 'textarea-xs',
    description: '超小尺寸文本域。',
    isCategoryStart: false,
  },
  {
    category: '尺寸',
    className: 'textarea-sm',
    description: '小尺寸文本域。',
    isCategoryStart: false,
  },
  {
    category: '尺寸',
    className: 'textarea-md',
    description: '中等尺寸文本域（默认）。',
    isCategoryStart: false,
  },
  {
    category: '尺寸',
    className: 'textarea-lg',
    description: '大尺寸文本域。',
    isCategoryStart: false,
  },
  {
    category: '尺寸',
    className: 'textarea-xl',
    description: '超大尺寸文本域。',
    isCategoryStart: false,
  },
]
</script>

<template>
  <DocsContainer>
    <DocsHeader
      title="Textarea 文本域"
      description="多行文本输入组件，支持浮动标签、自动调整高度和多种尺寸。遵循 WCAG 2.1 AA 无障碍标准，提供完整的键盘导航支持。"
    />

    <ApiReference :data="apiClasses" />

    <DocsSection title="基础用法">
      <div class="space-y-4">
        <div>
          <label for="basic-textarea" class="label">
            <span class="label-text">留言内容</span>
          </label>
          <textarea
            id="basic-textarea"
            v-model="message"
            class="textarea"
            placeholder="请输入您的留言..."
            rows="4"
          ></textarea>
        </div>
      </div>
    </DocsSection>

    <DocsSection title="带标签">
      <div class="space-y-4">
        <div>
          <label for="labeled-textarea" class="label">
            <span class="label-text">产品描述</span>
            <span class="label-text-alt">必填</span>
          </label>
          <textarea
            id="labeled-textarea"
            v-model="description"
            class="textarea"
            placeholder="请详细描述产品特性..."
            rows="5"
            required
            aria-required="true"
          ></textarea>
          <label class="label">
            <span class="label-text-alt">至少 50 个字符</span>
            <span class="label-text-alt">{{ description.length }}/500</span>
          </label>
        </div>
      </div>
    </DocsSection>

    <DocsSection title="浮动标签">
      <div class="space-y-4">
        <div class="textarea-floating">
          <textarea
            id="floating-textarea"
            v-model="floatingMessage"
            class="textarea"
            placeholder="请输入反馈内容"
            rows="4"
          ></textarea>
          <label for="floating-textarea" class="textarea-floating-label"> 反馈内容 </label>
        </div>

        <div class="textarea-floating">
          <textarea
            id="floating-disabled"
            class="textarea"
            placeholder="已禁用的文本域"
            disabled
            rows="3"
          ></textarea>
          <label for="floating-disabled" class="textarea-floating-label"> 禁用状态 </label>
        </div>
      </div>
    </DocsSection>

    <DocsSection title="尺寸变体">
      <div class="space-y-4">
        <div>
          <label for="textarea-xs" class="label">
            <span class="label-text text-xs">超小尺寸</span>
          </label>
          <textarea
            id="textarea-xs"
            class="textarea textarea-xs"
            placeholder="超小尺寸文本域..."
            rows="2"
          ></textarea>
        </div>

        <div>
          <label for="textarea-sm" class="label">
            <span class="label-text text-sm">小尺寸</span>
          </label>
          <textarea
            id="textarea-sm"
            class="textarea textarea-sm"
            placeholder="小尺寸文本域..."
            rows="3"
          ></textarea>
        </div>

        <div>
          <label for="textarea-md" class="label">
            <span class="label-text">中等尺寸（默认）</span>
          </label>
          <textarea
            id="textarea-md"
            class="textarea textarea-md"
            placeholder="中等尺寸文本域..."
            rows="4"
          ></textarea>
        </div>

        <div>
          <label for="textarea-lg" class="label">
            <span class="label-text text-lg">大尺寸</span>
          </label>
          <textarea
            id="textarea-lg"
            class="textarea textarea-lg"
            placeholder="大尺寸文本域..."
            rows="4"
          ></textarea>
        </div>

        <div>
          <label for="textarea-xl" class="label">
            <span class="label-text text-xl">超大尺寸</span>
          </label>
          <textarea
            id="textarea-xl"
            class="textarea textarea-xl"
            placeholder="超大尺寸文本域..."
            rows="4"
          ></textarea>
        </div>
      </div>
    </DocsSection>

    <DocsSection title="禁用状态">
      <div class="space-y-4">
        <div>
          <label for="disabled-textarea" class="label">
            <span class="label-text">禁用的文本域</span>
          </label>
          <textarea
            id="disabled-textarea"
            class="textarea"
            placeholder="此文本域已禁用"
            disabled
            rows="3"
          ></textarea>
          <label class="label">
            <span class="label-text-alt">用户无法编辑此内容</span>
          </label>
        </div>

        <div>
          <label for="disabled-value" class="label">
            <span class="label-text">带值的禁用状态</span>
          </label>
          <textarea id="disabled-value" class="textarea" disabled rows="3">
这是一段预填充的文本内容，但用户无法进行编辑。通常用于展示只读信息。</textarea
          >
        </div>
      </div>
    </DocsSection>

    <DocsSection title="反馈表单">
      <div class="space-y-4 max-w-2xl">
        <div class="card bg-base-100 border shadow-sm">
          <div class="card-body">
            <h3 class="card-title flex items-center gap-2">
              <span class="icon-[lucide--message-square]"></span>
              提交反馈
            </h3>

            <div class="space-y-4">
              <div>
                <label for="feedback-title" class="label">
                  <span class="label-text">问题标题</span>
                  <span class="label-text-alt text-error">*</span>
                </label>
                <input
                  id="feedback-title"
                  type="text"
                  class="input w-full"
                  placeholder="简要描述问题"
                  required
                  aria-required="true"
                />
              </div>

              <div class="textarea-floating">
                <textarea
                  id="feedback-description"
                  class="textarea"
                  placeholder="请详细描述您遇到的问题"
                  rows="6"
                  required
                  aria-required="true"
                ></textarea>
                <label for="feedback-description" class="textarea-floating-label"> 问题描述 </label>
              </div>

              <div class="textarea-floating">
                <textarea
                  id="feedback-steps"
                  class="textarea"
                  placeholder="1. 打开应用
2. 点击某个按钮
3. 出现错误"
                  rows="4"
                ></textarea>
                <label for="feedback-steps" class="textarea-floating-label">
                  复现步骤（可选）
                </label>
              </div>

              <div class="flex justify-end gap-2">
                <button class="btn btn-ghost">取消</button>
                <button class="btn btn-primary">
                  <span class="icon-[lucide--send]"></span>
                  提交反馈
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DocsSection>

    <DocsSection title="评论区">
      <div class="space-y-4 max-w-2xl">
        <div class="flex gap-3">
          <div class="avatar">
            <div class="bg-primary text-primary-content size-10 rounded-full">
              <span class="text-sm">用</span>
            </div>
          </div>

          <div class="flex-1 space-y-2">
            <textarea
              id="comment-input"
              class="textarea w-full"
              placeholder="写下你的评论..."
              rows="3"
              aria-label="输入评论内容"
            ></textarea>
            <div class="flex items-center justify-between">
              <div class="flex gap-2">
                <button class="btn btn-ghost btn-sm btn-circle" aria-label="插入表情">
                  <span class="icon-[lucide--smile]"></span>
                </button>
                <button class="btn btn-ghost btn-sm btn-circle" aria-label="上传图片">
                  <span class="icon-[lucide--image]"></span>
                </button>
                <button class="btn btn-ghost btn-sm btn-circle" aria-label="添加链接">
                  <span class="icon-[lucide--link]"></span>
                </button>
              </div>
              <button class="btn btn-primary btn-sm">发布评论</button>
            </div>
          </div>
        </div>

        <!-- 评论列表 -->
        <div class="space-y-4 mt-6">
          <div class="flex gap-3">
            <div class="avatar placeholder">
              <div class="bg-secondary text-secondary-content size-10 rounded-full">
                <span class="text-sm">张</span>
              </div>
            </div>
            <div class="flex-1">
              <div class="bg-base-200 rounded-lg p-3">
                <div class="font-semibold text-sm mb-1">张三</div>
                <p class="text-sm">这个功能真的很实用！感谢开发团队的努力。</p>
              </div>
              <div class="flex items-center gap-4 mt-2 text-xs text-base-content/70">
                <button class="hover:text-primary transition-colors">
                  <span class="icon-[lucide--thumbs-up] inline-block align-middle"></span>
                  <span class="ml-1">12</span>
                </button>
                <button class="hover:text-primary transition-colors">回复</button>
                <span>2 小时前</span>
              </div>
            </div>
          </div>

          <div class="flex gap-3">
            <div class="avatar placeholder">
              <div class="bg-accent text-accent-content size-10 rounded-full">
                <span class="text-sm">李</span>
              </div>
            </div>
            <div class="flex-1">
              <div class="bg-base-200 rounded-lg p-3">
                <div class="font-semibold text-sm mb-1">李四</div>
                <p class="text-sm">
                  同意楼上，不过我觉得还可以增加一些自定义选项，比如主题颜色的配置。
                </p>
              </div>
              <div class="flex items-center gap-4 mt-2 text-xs text-base-content/70">
                <button class="hover:text-primary transition-colors">
                  <span class="icon-[lucide--thumbs-up] inline-block align-middle"></span>
                  <span class="ml-1">5</span>
                </button>
                <button class="hover:text-primary transition-colors">回复</button>
                <span>1 小时前</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DocsSection>

    <DocsSection title="支持工单">
      <div class="space-y-4 max-w-3xl">
        <div class="card bg-base-100 border shadow-sm">
          <div class="card-body">
            <h3 class="card-title flex items-center gap-2">
              <span class="icon-[lucide--ticket]"></span>
              创建支持工单
            </h3>

            <div class="grid md:grid-cols-2 gap-4">
              <div>
                <label for="ticket-name" class="label">
                  <span class="label-text">联系人姓名</span>
                </label>
                <input
                  id="ticket-name"
                  type="text"
                  class="input w-full"
                  placeholder="请输入您的姓名"
                />
              </div>

              <div>
                <label for="ticket-email" class="label">
                  <span class="label-text">电子邮件</span>
                </label>
                <input
                  id="ticket-email"
                  type="email"
                  class="input w-full"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div>
              <label for="ticket-category" class="label">
                <span class="label-text">问题类别</span>
              </label>
              <select id="ticket-category" class="select w-full">
                <option disabled selected>请选择问题类别</option>
                <option>技术支持</option>
                <option>账户问题</option>
                <option>功能建议</option>
                <option>Bug 反馈</option>
                <option>其他</option>
              </select>
            </div>

            <div>
              <label for="ticket-subject" class="label">
                <span class="label-text">问题主题</span>
              </label>
              <input
                id="ticket-subject"
                type="text"
                class="input w-full"
                placeholder="简要描述问题"
              />
            </div>

            <div class="textarea-floating">
              <textarea
                id="ticket-description"
                class="textarea"
                placeholder="请详细描述您的问题，包括相关截图或错误信息"
                rows="8"
              ></textarea>
              <label for="ticket-description" class="textarea-floating-label"> 问题详情 </label>
            </div>

            <div>
              <label for="ticket-priority" class="label">
                <span class="label-text">优先级</span>
              </label>
              <div class="flex gap-2">
                <label class="flex items-center gap-2 cursor-pointer">
                  <input type="radio" name="priority" value="low" class="radio radio-sm" />
                  <span class="text-sm">低</span>
                </label>
                <label class="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="priority"
                    value="medium"
                    class="radio radio-sm"
                    checked
                  />
                  <span class="text-sm">中</span>
                </label>
                <label class="flex items-center gap-2 cursor-pointer">
                  <input type="radio" name="priority" value="high" class="radio radio-sm" />
                  <span class="text-sm">高</span>
                </label>
                <label class="flex items-center gap-2 cursor-pointer">
                  <input type="radio" name="priority" value="urgent" class="radio radio-sm" />
                  <span class="text-sm">紧急</span>
                </label>
              </div>
            </div>

            <div class="flex justify-end gap-2 mt-4">
              <button class="btn btn-ghost">取消</button>
              <button class="btn btn-primary">
                <span class="icon-[lucide--send]"></span>
                提交工单
              </button>
            </div>
          </div>
        </div>
      </div>
    </DocsSection>

    <DocsSection title="自动调整高度">
      <div class="space-y-4">
        <div>
          <label for="auto-resize" class="label">
            <span class="label-text">自适应文本域</span>
            <span class="label-text-alt">随内容自动扩展</span>
          </label>
          <textarea
            id="auto-resize"
            class="textarea w-full"
            placeholder="开始输入，文本域会自动调整高度..."
            rows="3"
            style="field-sizing: content; max-height: 300px"
          ></textarea>
          <label class="label">
            <span class="label-text-alt"> 使用 CSS field-sizing 属性实现自动高度 </span>
          </label>
        </div>
      </div>
    </DocsSection>

    <DocsSection title="验证状态">
      <div class="space-y-4">
        <div>
          <label for="success-textarea" class="label">
            <span class="label-text">成功状态</span>
          </label>
          <textarea
            id="success-textarea"
            class="textarea w-full border-success focus:border-success"
            placeholder="输入内容..."
            rows="3"
          >
内容验证通过！</textarea
          >
          <label class="label">
            <span class="label-text-alt text-success flex items-center gap-1">
              <span class="icon-[lucide--check-circle]"></span>
              验证成功
            </span>
          </label>
        </div>

        <div>
          <label for="error-textarea" class="label">
            <span class="label-text">错误状态</span>
          </label>
          <textarea
            id="error-textarea"
            class="textarea w-full border-error focus:border-error"
            placeholder="输入内容..."
            rows="3"
            aria-invalid="true"
            aria-describedby="error-message"
          ></textarea>
          <label class="label">
            <span id="error-message" class="label-text-alt text-error flex items-center gap-1">
              <span class="icon-[lucide--alert-circle]"></span>
              此字段不能为空
            </span>
          </label>
        </div>

        <div>
          <label for="warning-textarea" class="label">
            <span class="label-text">警告状态</span>
          </label>
          <textarea
            id="warning-textarea"
            class="textarea w-full border-warning focus:border-warning"
            placeholder="输入内容..."
            rows="3"
          >
内容可能需要改进</textarea
          >
          <label class="label">
            <span class="label-text-alt text-warning flex items-center gap-1">
              <span class="icon-[lucide--alert-triangle]"></span>
              建议检查内容格式
            </span>
          </label>
        </div>
      </div>
    </DocsSection>
  </DocsContainer>
</template>
