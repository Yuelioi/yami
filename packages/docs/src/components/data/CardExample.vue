<script setup lang="ts">
import DocsHeader from '../zcomp/DocsHeader.vue'
import ApiReference from '../zcomp/ApiReference.vue'
import DocsContainer from '../zcomp/DocsContainer.vue'
import DocsSection from '../zcomp/DocsSection.vue'

const apiClasses = [
  {
    category: '基础结构',
    className: 'card',
    description: '卡片容器，用于承载内容。',
    isCategoryStart: true,
  },

  {
    category: '区块',
    className: 'card-header',
    description: '卡片头部区域。',
    isCategoryStart: true,
  },
  {
    category: '区块',
    className: 'card-body',
    description: '卡片主体内容区域。',
    isCategoryStart: false,
  },
  {
    category: '区块',
    className: 'card-footer',
    description: '卡片底部操作区域。',
    isCategoryStart: false,
  },

  {
    category: '文本',
    className: 'card-title',
    description: '卡片标题。',
    isCategoryStart: true,
  },
  {
    category: '文本',
    className: 'card-description',
    description: '卡片描述文本。',
    isCategoryStart: false,
  },

  {
    category: '交互',
    className: 'card-interactive',
    description: '可交互的卡片状态。',
    isCategoryStart: true,
  },

  {
    category: '变体',
    className: 'card-flat',
    description: '扁平卡片样式。',
    isCategoryStart: true,
  },
  {
    category: '变体',
    className: 'card-muted',
    description: '弱强调卡片样式。',
    isCategoryStart: false,
  },
]
</script>

<template>
  <DocsContainer>
    <DocsHeader
      title="Card 卡片"
      description="用于承载和组织内容的基础组件。支持灵活的区块组合和多种展示方式。"
    />

    <ApiReference :data="apiClasses" />

    <!-- 基础用法 -->
    <DocsSection title="基础用法">
      <div class="card" style="max-width: 320px">
        <div class="card-header">
          <div class="card-title">卡片标题</div>
          <div class="card-description">这是卡片的描述文本，用于补充说明内容。</div>
        </div>

        <div class="card-body">
          <p class="text-sm">卡片主体区域可以放任意内容，例如文本、列表或表单。</p>
        </div>
      </div>
    </DocsSection>

    <!-- 带底部操作 -->
    <DocsSection title="带操作区域">
      <div class="card" style="max-width: 320px">
        <div class="card-header">
          <div class="card-title">设置</div>
        </div>

        <div class="card-body">
          <p class="text-sm">修改当前配置项。</p>
        </div>

        <div class="card-footer">
          <button class="btn btn-secondary">取消</button>
          <button class="btn btn-primary">保存</button>
        </div>
      </div>
    </DocsSection>

    <!-- 可交互 -->
    <DocsSection title="可交互卡片">
      <div class="card card-interactive" style="max-width: 320px">
        <div class="card-title">点击卡片</div>
        <div class="card-description">整个卡片区域可作为交互入口。</div>
      </div>
    </DocsSection>

    <!-- 扁平 / 弱强调 -->
    <DocsSection title="样式变体">
      <div class="flex gap-4">
        <div class="card card-flat" style="max-width: 240px">
          <div class="card-title">扁平卡片</div>
        </div>

        <div class="card card-muted" style="max-width: 240px">
          <div class="card-title">弱强调卡片</div>
        </div>
      </div>
    </DocsSection>
  </DocsContainer>
</template>
