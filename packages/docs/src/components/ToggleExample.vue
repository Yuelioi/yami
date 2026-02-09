<script setup lang="ts">
import DocsHeader from '@/components/zcomp/DocsHeader.vue'
import DocsSection from '@/components/zcomp/DocsSection.vue'
import ApiReference from '@/components/zcomp/ApiReference.vue'
import DocsContainer from '@/components/zcomp/DocsContainer.vue'

const apiClasses = [
  {
    category: '基础',
    className: 'toggle',
    description: '开关组件',
    isCategoryStart: true,
  },
  {
    category: '颜色',
    className: 'toggle-primary',
    description: '主色',
    isCategoryStart: false,
  },
  {
    category: '颜色',
    className: 'toggle-secondary',
    description: '次要色',
    isCategoryStart: false,
  },
  {
    category: '颜色',
    className: 'toggle-accent',
    description: '强调色',
    isCategoryStart: false,
  },
  {
    category: '颜色',
    className: 'toggle-success',
    description: '成功色',
    isCategoryStart: false,
  },
  {
    category: '颜色',
    className: 'toggle-warning',
    description: '警告色',
    isCategoryStart: false,
  },
  {
    category: '颜色',
    className: 'toggle-error',
    description: '错误色',
    isCategoryStart: false,
  },
  {
    category: '颜色',
    className: 'toggle-info',
    description: '信息色',
    isCategoryStart: false,
  },
  {
    category: '尺寸',
    className: 'toggle-xs',
    description: '超小',
    isCategoryStart: false,
  },
  {
    category: '尺寸',
    className: 'toggle-sm',
    description: '小',
    isCategoryStart: false,
  },
  {
    category: '尺寸',
    className: 'toggle-md',
    description: '中（默认）',
    isCategoryStart: false,
  },
  {
    category: '尺寸',
    className: 'toggle-lg',
    description: '大',
    isCategoryStart: false,
  },
  {
    category: '尺寸',
    className: 'toggle-xl',
    description: '超大',
    isCategoryStart: false,
  },
]
</script>

<template>
  <DocsContainer>
    <DocsHeader
      title="Toggle"
      description="开关组件，用于表示两种互斥状态的切换，如开/关、启用/禁用等。"
    />

    <ApiReference :data="apiClasses"></ApiReference>

    <DocsSection title="基础开关">
      <div class="flex items-center gap-4">
        <input type="checkbox" class="toggle" />
        <input type="checkbox" class="toggle" checked />
      </div>
    </DocsSection>

    <DocsSection title="颜色变体">
      <div class="space-y-3">
        <div class="flex items-center gap-3">
          <input type="checkbox" class="toggle toggle-primary" checked />
          <span class="text-sm">Primary</span>
        </div>
        <div class="flex items-center gap-3">
          <input type="checkbox" class="toggle toggle-secondary" checked />
          <span class="text-sm">Secondary</span>
        </div>
        <div class="flex items-center gap-3">
          <input type="checkbox" class="toggle toggle-accent" checked />
          <span class="text-sm">Accent</span>
        </div>
        <div class="flex items-center gap-3">
          <input type="checkbox" class="toggle toggle-success" checked />
          <span class="text-sm">Success</span>
        </div>
        <div class="flex items-center gap-3">
          <input type="checkbox" class="toggle toggle-warning" checked />
          <span class="text-sm">Warning</span>
        </div>
        <div class="flex items-center gap-3">
          <input type="checkbox" class="toggle toggle-error" checked />
          <span class="text-sm">Error</span>
        </div>
        <div class="flex items-center gap-3">
          <input type="checkbox" class="toggle toggle-info" checked />
          <span class="text-sm">Info</span>
        </div>
      </div>
    </DocsSection>

    <DocsSection title="尺寸变体">
      <div class="space-y-4">
        <div class="flex items-center gap-3">
          <input type="checkbox" class="toggle toggle-xs toggle-primary" checked />
          <span class="text-sm">超小 (xs)</span>
        </div>
        <div class="flex items-center gap-3">
          <input type="checkbox" class="toggle toggle-sm toggle-primary" checked />
          <span class="text-sm">小 (sm)</span>
        </div>
        <div class="flex items-center gap-3">
          <input type="checkbox" class="toggle toggle-md toggle-primary" checked />
          <span class="text-sm">中 (md) - 默认</span>
        </div>
        <div class="flex items-center gap-3">
          <input type="checkbox" class="toggle toggle-lg toggle-primary" checked />
          <span class="text-sm">大 (lg)</span>
        </div>
        <div class="flex items-center gap-3">
          <input type="checkbox" class="toggle toggle-xl toggle-primary" checked />
          <span class="text-sm">超大 (xl)</span>
        </div>
      </div>
    </DocsSection>

    <DocsSection title="禁用状态">
      <div class="space-y-3">
        <div class="flex items-center gap-3">
          <input type="checkbox" class="toggle toggle-primary" disabled />
          <span class="text-sm text-base-content/60">未选中 - 禁用</span>
        </div>
        <div class="flex items-center gap-3">
          <input type="checkbox" class="toggle toggle-primary" checked disabled />
          <span class="text-sm text-base-content/60">已选中 - 禁用</span>
        </div>
      </div>
    </DocsSection>

    <DocsSection title="带标签">
      <div class="space-y-3">
        <label class="flex items-center gap-3 cursor-pointer">
          <input type="checkbox" class="toggle toggle-primary" />
          <span class="text-sm">接收邮件通知</span>
        </label>
        <label class="flex items-center gap-3 cursor-pointer">
          <input type="checkbox" class="toggle toggle-success" checked />
          <span class="text-sm">启用双因素认证</span>
        </label>
        <label class="flex items-center gap-3 cursor-pointer">
          <input type="checkbox" class="toggle toggle-accent" />
          <span class="text-sm">自动保存草稿</span>
        </label>
      </div>
    </DocsSection>

    <DocsSection title="设置面板">
      <div class="card bg-base-100">
        <div class="card-body">
          <h3 class="card-title text-lg mb-4">通知设置</h3>
          <div class="space-y-4">
            <div class="flex items-center justify-between">
              <div>
                <p class="font-medium">推送通知</p>
                <p class="text-sm text-base-content/60">接收应用推送消息</p>
              </div>
              <input type="checkbox" class="toggle toggle-primary" checked />
            </div>
            <div class="divider my-0"></div>
            <div class="flex items-center justify-between">
              <div>
                <p class="font-medium">邮件提醒</p>
                <p class="text-sm text-base-content/60">重要事件发送邮件</p>
              </div>
              <input type="checkbox" class="toggle toggle-primary" />
            </div>
            <div class="divider my-0"></div>
            <div class="flex items-center justify-between">
              <div>
                <p class="font-medium">短信通知</p>
                <p class="text-sm text-base-content/60">通过短信接收验证码</p>
              </div>
              <input type="checkbox" class="toggle toggle-primary" checked />
            </div>
          </div>
        </div>
      </div>
    </DocsSection>

    <DocsSection title="隐私控制">
      <div class="card bg-base-100">
        <div class="card-body">
          <h3 class="card-title text-lg mb-4">隐私与安全</h3>
          <div class="space-y-4">
            <div class="flex items-center justify-between">
              <div>
                <p class="font-medium">个人资料公开</p>
                <p class="text-sm text-base-content/60">允许其他用户查看你的个人资料</p>
              </div>
              <input type="checkbox" class="toggle toggle-success" />
            </div>
            <div class="divider my-0"></div>
            <div class="flex items-center justify-between">
              <div>
                <p class="font-medium">活动状态</p>
                <p class="text-sm text-base-content/60">显示你的在线状态</p>
              </div>
              <input type="checkbox" class="toggle toggle-success" checked />
            </div>
            <div class="divider my-0"></div>
            <div class="flex items-center justify-between">
              <div>
                <p class="font-medium">数据分析</p>
                <p class="text-sm text-base-content/60">允许收集匿名使用数据</p>
              </div>
              <input type="checkbox" class="toggle toggle-success" />
            </div>
          </div>
        </div>
      </div>
    </DocsSection>

    <DocsSection title="功能开关">
      <div class="card bg-base-100">
        <div class="card-body">
          <h3 class="card-title text-lg mb-4">实验性功能</h3>
          <div class="space-y-4">
            <div class="flex items-center justify-between">
              <div>
                <p class="font-medium">深色模式</p>
                <p class="text-sm text-base-content/60">启用深色主题</p>
              </div>
              <input type="checkbox" class="toggle toggle-accent" checked />
            </div>
            <div class="divider my-0"></div>
            <div class="flex items-center justify-between">
              <div>
                <p class="font-medium">实时协作</p>
                <p class="text-sm text-base-content/60">
                  <span class="badge badge-warning badge-sm mr-1">Beta</span>
                  多人同时编辑文档
                </p>
              </div>
              <input type="checkbox" class="toggle toggle-warning" />
            </div>
            <div class="divider my-0"></div>
            <div class="flex items-center justify-between">
              <div>
                <p class="font-medium">AI 助手</p>
                <p class="text-sm text-base-content/60">
                  <span class="badge badge-info badge-sm mr-1">New</span>
                  启用智能写作建议
                </p>
              </div>
              <input type="checkbox" class="toggle toggle-info" />
            </div>
          </div>
        </div>
      </div>
    </DocsSection>

    <DocsSection title="权限管理">
      <div class="space-y-3">
        <div class="card bg-base-100">
          <div class="card-body">
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-3">
                <div class="avatar placeholder">
                  <div class="bg-primary text-primary-content rounded-full w-10">
                    <span class="text-lg">李</span>
                  </div>
                </div>
                <div>
                  <p class="font-medium">李明</p>
                  <p class="text-sm text-base-content/60">liming@example.com</p>
                </div>
              </div>
              <div class="flex items-center gap-4">
                <div class="text-right">
                  <p class="text-sm font-medium">管理员</p>
                  <p class="text-xs text-base-content/60">完全访问权限</p>
                </div>
                <input type="checkbox" class="toggle toggle-success" checked />
              </div>
            </div>
          </div>
        </div>

        <div class="card bg-base-100">
          <div class="card-body">
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-3">
                <div class="avatar placeholder">
                  <div class="bg-secondary text-secondary-content rounded-full w-10">
                    <span class="text-lg">张</span>
                  </div>
                </div>
                <div>
                  <p class="font-medium">张伟</p>
                  <p class="text-sm text-base-content/60">zhangwei@example.com</p>
                </div>
              </div>
              <div class="flex items-center gap-4">
                <div class="text-right">
                  <p class="text-sm font-medium">编辑者</p>
                  <p class="text-xs text-base-content/60">可编辑内容</p>
                </div>
                <input type="checkbox" class="toggle toggle-success" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </DocsSection>

    <DocsSection title="订阅计划">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div class="card bg-base-100 border-2">
          <div class="card-body">
            <h3 class="card-title">基础版</h3>
            <p class="text-3xl font-bold">免费</p>
            <ul class="space-y-2 my-4">
              <li class="flex items-center gap-2 text-sm">
                <span class="icon-[lucide--check] text-success"></span>
                5GB 存储空间
              </li>
              <li class="flex items-center gap-2 text-sm">
                <span class="icon-[lucide--check] text-success"></span>
                基础功能
              </li>
            </ul>
            <div class="card-actions">
              <label class="flex items-center gap-2 w-full cursor-pointer">
                <span class="text-sm flex-1">自动续费</span>
                <input type="checkbox" class="toggle toggle-sm" disabled />
              </label>
            </div>
          </div>
        </div>

        <div class="card bg-base-100 border-2 border-primary">
          <div class="card-body">
            <div class="badge badge-primary absolute -top-3 right-4">推荐</div>
            <h3 class="card-title">专业版</h3>
            <p class="text-3xl font-bold">¥99<span class="text-sm font-normal">/月</span></p>
            <ul class="space-y-2 my-4">
              <li class="flex items-center gap-2 text-sm">
                <span class="icon-[lucide--check] text-success"></span>
                100GB 存储空间
              </li>
              <li class="flex items-center gap-2 text-sm">
                <span class="icon-[lucide--check] text-success"></span>
                高级功能
              </li>
            </ul>
            <div class="card-actions">
              <label class="flex items-center gap-2 w-full cursor-pointer">
                <span class="text-sm flex-1">自动续费</span>
                <input type="checkbox" class="toggle toggle-sm toggle-primary" checked />
              </label>
            </div>
          </div>
        </div>

        <div class="card bg-base-100 border-2">
          <div class="card-body">
            <h3 class="card-title">企业版</h3>
            <p class="text-3xl font-bold">¥299<span class="text-sm font-normal">/月</span></p>
            <ul class="space-y-2 my-4">
              <li class="flex items-center gap-2 text-sm">
                <span class="icon-[lucide--check] text-success"></span>
                无限存储空间
              </li>
              <li class="flex items-center gap-2 text-sm">
                <span class="icon-[lucide--check] text-success"></span>
                全部功能
              </li>
            </ul>
            <div class="card-actions">
              <label class="flex items-center gap-2 w-full cursor-pointer">
                <span class="text-sm flex-1">自动续费</span>
                <input type="checkbox" class="toggle toggle-sm toggle-accent" />
              </label>
            </div>
          </div>
        </div>
      </div>
    </DocsSection>
  </DocsContainer>
</template>
