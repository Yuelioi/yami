<script setup lang="ts">
import DocsHeader from '@/components/zcomp/DocsHeader.vue'
import DocsSection from '@/components/zcomp/DocsSection.vue'
import ApiReference from '@/components/zcomp/ApiReference.vue'
import DocsContainer from '@/components/zcomp/DocsContainer.vue'

const apiClasses = [
  {
    category: '基础',
    className: 'toast',
    description: '吐司提示容器',
    isCategoryStart: true,
  },
  {
    category: '内容',
    className: 'toast-title',
    description: '标题',
    isCategoryStart: false,
  },
  {
    category: '内容',
    className: 'toast-message',
    description: '消息',
    isCategoryStart: false,
  },
  {
    category: '内容',
    className: 'toast-close',
    description: '关闭按钮',
    isCategoryStart: false,
  },
  {
    category: '类型',
    className: 'toast-info',
    description: '信息提示',
    isCategoryStart: false,
  },
  {
    category: '类型',
    className: 'toast-success',
    description: '成功提示',
    isCategoryStart: false,
  },
  {
    category: '类型',
    className: 'toast-warning',
    description: '警告提示',
    isCategoryStart: false,
  },
  {
    category: '类型',
    className: 'toast-error',
    description: '错误提示',
    isCategoryStart: false,
  },

  {
    category: '样式',
    className: 'toast-bordered',
    description: '带边框',
    isCategoryStart: false,
  },
  {
    category: '尺寸',
    className: 'toast-sm',
    description: '小',
    isCategoryStart: false,
  },
  {
    category: '尺寸',
    className: 'toast-lg',
    description: '大',
    isCategoryStart: false,
  },
  {
    category: '特殊',
    className: 'toast-no-icon',
    description: '无图标',
    isCategoryStart: false,
  },
]
</script>

<template>
  <DocsContainer>
    <DocsHeader title="Toast" description="吐司提示组件，用于全局信息提示或短暂反馈。" />

    <ApiReference :data="apiClasses"></ApiReference>

    <DocsSection title="基础信息提示">
      <div class="toast toast-info">
        <div>
          <div class="toast-title">信息</div>
          <div class="toast-message">这是一条普通提示消息。</div>
        </div>
        <div class="toast-close"></div>
      </div>
    </DocsSection>

    <DocsSection title="成功提示">
      <div class="toast toast-success">
        <div>
          <div class="toast-title">成功</div>
          <div class="toast-message">操作已成功完成！</div>
        </div>
        <div class="toast-close"></div>
      </div>
    </DocsSection>

    <DocsSection title="警告提示">
      <div class="toast toast-warning">
        <div>
          <div class="toast-title">警告</div>
          <div class="toast-message">请注意，这个操作可能有风险。</div>
        </div>
        <div class="toast-close"></div>
      </div>
    </DocsSection>

    <DocsSection title="错误提示">
      <div class="toast toast-error">
        <div>
          <div class="toast-title">错误</div>
          <div class="toast-message">操作失败，请重试。</div>
        </div>
        <div class="toast-close"></div>
      </div>
    </DocsSection>

    <DocsSection title="不同类型">
      <div class="space-y-3">
        <div class="toast toast-info">
          <div>
            <div class="toast-title">信息</div>
            <div class="toast-message">这是一条信息提示</div>
          </div>
          <div class="toast-close"></div>
        </div>

        <div class="toast toast-success">
          <div>
            <div class="toast-title">成功</div>
            <div class="toast-message">操作已成功完成</div>
          </div>
          <div class="toast-close"></div>
        </div>

        <div class="toast toast-warning">
          <div>
            <div class="toast-title">警告</div>
            <div class="toast-message">请小心操作</div>
          </div>
          <div class="toast-close"></div>
        </div>

        <div class="toast toast-error">
          <div>
            <div class="toast-title">错误</div>
            <div class="toast-message">出现了错误</div>
          </div>
          <div class="toast-close"></div>
        </div>
      </div>
    </DocsSection>

    <DocsSection title="尺寸变体">
      <div class="space-y-3">
        <div class="toast toast-sm toast-info">
          <div>
            <div class="toast-title">小提示</div>
            <div class="toast-message">这是一条小尺寸的提示</div>
          </div>
          <div class="toast-close"></div>
        </div>

        <div class="toast toast-info">
          <div>
            <div class="toast-title">默认提示</div>
            <div class="toast-message">这是一条默认尺寸的提示</div>
          </div>
          <div class="toast-close"></div>
        </div>

        <div class="toast toast-lg toast-info">
          <div>
            <div class="toast-title">大提示</div>
            <div class="toast-message">这是一条大尺寸的提示</div>
          </div>
          <div class="toast-close"></div>
        </div>
      </div>
    </DocsSection>

    <DocsSection title="无图标样式">
      <div class="space-y-3">
        <div class="toast toast-info toast-no-icon">
          <div>
            <div class="toast-title">信息</div>
            <div class="toast-message">没有图标的提示</div>
          </div>
          <div class="toast-close"></div>
        </div>

        <div class="toast toast-success toast-no-icon">
          <div>
            <div class="toast-title">成功</div>
            <div class="toast-message">没有图标的成功提示</div>
          </div>
          <div class="toast-close"></div>
        </div>
      </div>
    </DocsSection>

    <DocsSection title="仅有消息">
      <div class="space-y-3">
        <div class="toast toast-info">
          <div class="toast-message">这是一条纯文本提示</div>
          <div class="toast-close"></div>
        </div>

        <div class="toast toast-success">
          <div class="toast-message">文件已成功保存</div>
          <div class="toast-close"></div>
        </div>
      </div>
    </DocsSection>

    <DocsSection title="操作反馈">
      <div class="space-y-3">
        <div class="toast toast-success">
          <div>
            <div class="toast-title">用户已添加</div>
            <div class="toast-message">新用户 "john@example.com" 已成功添加</div>
          </div>
          <div class="toast-close"></div>
        </div>

        <div class="toast toast-error">
          <div>
            <div class="toast-title">删除失败</div>
            <div class="toast-message">无法删除此项，因为它仍在使用中</div>
          </div>
          <div class="toast-close"></div>
        </div>

        <div class="toast toast-warning">
          <div>
            <div class="toast-title">即将过期</div>
            <div class="toast-message">您的订阅将在 7 天内过期</div>
          </div>
          <div class="toast-close"></div>
        </div>
      </div>
    </DocsSection>

    <DocsSection title="长文本提示">
      <div class="toast toast-info">
        <div>
          <div class="toast-title">导入完成</div>
          <div class="toast-message">
            成功导入 1,234 条记录。其中 12 条因数据格式问题被跳过，您可以在日志中查看详情。
          </div>
        </div>
        <div class="toast-close"></div>
      </div>
    </DocsSection>

    <DocsSection title="无关闭按钮">
      <div class="space-y-3">
        <div class="toast toast-success">
          <div>
            <div class="toast-title">成功</div>
            <div class="toast-message">操作已完成，将在 3 秒后自动关闭</div>
          </div>
        </div>

        <div class="toast toast-info">
          <div class="toast-message">同步中...</div>
        </div>
      </div>
    </DocsSection>
  </DocsContainer>
</template>
