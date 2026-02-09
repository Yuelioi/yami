<script setup lang="ts">
import DocsHeader from '@/components/zcomp/DocsHeader.vue'
import DocsSection from '@/components/zcomp/DocsSection.vue'
import ApiReference from '@/components/zcomp/ApiReference.vue'
import DocsContainer from '@/components/zcomp/DocsContainer.vue'

const apiClasses = [
  {
    category: '基础',
    className: 'tooltip',
    description: '工具提示容器',
    isCategoryStart: true,
  },
  {
    category: '位置',
    className: 'tooltip-top',
    description: '顶部显示',
    isCategoryStart: false,
  },
  {
    category: '位置',
    className: 'tooltip-bottom',
    description: '底部显示',
    isCategoryStart: false,
  },
  {
    category: '位置',
    className: 'tooltip-left',
    description: '左侧显示',
    isCategoryStart: false,
  },
  {
    category: '位置',
    className: 'tooltip-right',
    description: '右侧显示',
    isCategoryStart: false,
  },
  {
    category: '尺寸',
    className: 'tooltip-sm',
    description: '小',
    isCategoryStart: false,
  },
  {
    category: '尺寸',
    className: 'tooltip-lg',
    description: '大',
    isCategoryStart: false,
  },
]
</script>

<template>
  <DocsContainer>
    <DocsHeader title="Tooltip" description="工具提示组件，用于在悬停或聚焦时显示辅助信息。" />

    <ApiReference :data="apiClasses"></ApiReference>

    <DocsSection title="基础提示 - 顶部">
      <div class="tooltip tooltip-top w-max" data-tip="这是一条顶部提示">
        <button class="btn btn-primary">悬停我</button>
      </div>
    </DocsSection>

    <DocsSection title="位置变体">
      <div class="flex flex-wrap gap-4 items-center justify-center p-8">
        <div class="tooltip tooltip-top" data-tip="顶部提示">
          <button class="btn">上</button>
        </div>
        <div class="tooltip tooltip-bottom" data-tip="底部提示">
          <button class="btn">下</button>
        </div>
        <div class="tooltip tooltip-left" data-tip="左侧提示">
          <button class="btn">左</button>
        </div>
        <div class="tooltip tooltip-right" data-tip="右侧提示">
          <button class="btn">右</button>
        </div>
      </div>
    </DocsSection>

    <DocsSection title="按钮提示">
      <div class="flex flex-wrap gap-2">
        <div class="tooltip tooltip-top" data-tip="删除此项">
          <button class="btn btn-sm btn-error">
            <span class="icon-[lucide--trash-2] w-4 h-4"></span>
          </button>
        </div>
        <div class="tooltip tooltip-top" data-tip="编辑此项">
          <button class="btn btn-sm btn-warning">
            <span class="icon-[lucide--edit] w-4 h-4"></span>
          </button>
        </div>
        <div class="tooltip tooltip-top" data-tip="下载文件">
          <button class="btn btn-sm btn-info">
            <span class="icon-[lucide--download] w-4 h-4"></span>
          </button>
        </div>
        <div class="tooltip tooltip-top" data-tip="分享链接">
          <button class="btn btn-sm btn-success">
            <span class="icon-[lucide--share-2] w-4 h-4"></span>
          </button>
        </div>
      </div>
    </DocsSection>

    <DocsSection title="文本提示">
      <p class="text-base">
        这是一个包含
        <span class="tooltip tooltip-top" data-tip="HTML是标记语言">HTML</span>
        标签的文本，以及
        <span class="tooltip tooltip-top" data-tip="CSS用于样式化">CSS</span>
        和
        <span class="tooltip tooltip-top" data-tip="JavaScript提供交互">JavaScript</span>
        的提示。
      </p>
    </DocsSection>

    <DocsSection title="尺寸变体">
      <div class="flex gap-4">
        <div class="tooltip tooltip-sm tooltip-top" data-tip="小提示">
          <button class="btn btn-sm">小</button>
        </div>
        <div class="tooltip tooltip-top" data-tip="默认提示">
          <button class="btn">默认</button>
        </div>
        <div class="tooltip tooltip-lg tooltip-top" data-tip="大提示">
          <button class="btn btn-lg">大</button>
        </div>
      </div>
    </DocsSection>

    <DocsSection title="表单提示">
      <div class="space-y-4 max-w-md">
        <div class="form-control">
          <label class="label">
            <span class="label-text">用户名</span>
            <span class="tooltip tooltip-top" data-tip="3-20个字符">
              <span class="label-text-alt icon-[lucide--info] w-4 h-4"></span>
            </span>
          </label>
          <input type="text" placeholder="输入用户名" class="input input-bordered" />
        </div>

        <div class="form-control">
          <label class="label">
            <span class="label-text">邮箱</span>
            <span class="tooltip tooltip-top" data-tip="必须是有效的邮箱地址">
              <span class="label-text-alt icon-[lucide--info] w-4 h-4"></span>
            </span>
          </label>
          <input type="email" placeholder="your@email.com" class="input input-bordered" />
        </div>

        <div class="form-control">
          <label class="label">
            <span class="label-text">密码</span>
            <span class="tooltip tooltip-top" data-tip="至少8个字符">
              <span class="label-text-alt icon-[lucide--info] w-4 h-4"></span>
            </span>
          </label>
          <input type="password" placeholder="输入密码" class="input input-bordered" />
        </div>
      </div>
    </DocsSection>

    <DocsSection title="多方向表格提示">
      <div class="flex justify-between gap-8 p-8">
        <div>
          <h3 class="font-semibold mb-4">左侧提示</h3>
          <div class="space-y-2">
            <div class="tooltip tooltip-left" data-tip="左侧提示">
              <button class="btn btn-sm">按钮</button>
            </div>
          </div>
        </div>

        <div>
          <h3 class="font-semibold mb-4">右侧提示</h3>
          <div class="space-y-2">
            <div class="tooltip tooltip-right" data-tip="右侧提示">
              <button class="btn btn-sm">按钮</button>
            </div>
          </div>
        </div>

        <div>
          <h3 class="font-semibold mb-4">底部提示</h3>
          <div class="space-y-2">
            <div class="tooltip tooltip-bottom" data-tip="底部提示">
              <button class="btn btn-sm">按钮</button>
            </div>
          </div>
        </div>
      </div>
    </DocsSection>

    <DocsSection title="图表说明提示">
      <div class="flex justify-around items-end gap-4 p-8 bg-base-100 rounded-lg h-64">
        <div class="tooltip tooltip-top" data-tip="销售额增长30%">
          <div class="w-12 h-24 bg-primary rounded"></div>
        </div>
        <div class="tooltip tooltip-top" data-tip="用户数增加15%">
          <div class="w-12 h-32 bg-success rounded"></div>
        </div>
        <div class="tooltip tooltip-top" data-tip="访问量下降5%">
          <div class="w-12 h-20 bg-warning rounded"></div>
        </div>
        <div class="tooltip tooltip-top" data-tip="转化率提升8%">
          <div class="w-12 h-28 bg-info rounded"></div>
        </div>
      </div>
    </DocsSection>

    <DocsSection title="导航菜单提示">
      <div class="flex gap-2">
        <div class="tooltip tooltip-bottom" data-tip="返回首页">
          <button class="btn btn-ghost">
            <span class="icon-[lucide--home] w-5 h-5"></span>
          </button>
        </div>
        <div class="tooltip tooltip-bottom" data-tip="查看消息">
          <button class="btn btn-ghost">
            <span class="icon-[lucide--message-square] w-5 h-5"></span>
          </button>
        </div>
        <div class="tooltip tooltip-bottom" data-tip="用户设置">
          <button class="btn btn-ghost">
            <span class="icon-[lucide--settings] w-5 h-5"></span>
          </button>
        </div>
        <div class="tooltip tooltip-bottom" data-tip="退出登录">
          <button class="btn btn-ghost">
            <span class="icon-[lucide--log-out] w-5 h-5"></span>
          </button>
        </div>
      </div>
    </DocsSection>

    <DocsSection title="功能说明提示">
      <div class="space-y-2 max-w-md">
        <div class="flex items-center justify-between p-3 bg-base-100 rounded">
          <div>
            <div class="font-semibold">自动保存</div>
            <div class="text-sm text-base-content/70">自动保存您的更改</div>
          </div>
          <div class="tooltip tooltip-left" data-tip="每5秒自动保存一次">
            <span class="icon-[lucide--info] w-5 h-5"></span>
          </div>
        </div>

        <div class="flex items-center justify-between p-3 bg-base-100 rounded">
          <div>
            <div class="font-semibold">暗色模式</div>
            <div class="text-sm text-base-content/70">启用深色主题</div>
          </div>
          <div class="tooltip tooltip-left" data-tip="可在设置中调整">
            <span class="icon-[lucide--info] w-5 h-5"></span>
          </div>
        </div>

        <div class="flex items-center justify-between p-3 bg-base-100 rounded">
          <div>
            <div class="font-semibold">通知</div>
            <div class="text-sm text-base-content/70">接收重要更新</div>
          </div>
          <div class="tooltip tooltip-left" data-tip="邮箱和浏览器通知">
            <span class="icon-[lucide--info] w-5 h-5"></span>
          </div>
        </div>
      </div>
    </DocsSection>
  </DocsContainer>
</template>
