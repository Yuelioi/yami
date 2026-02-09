<script setup lang="ts">
import DocsHeader from '@/components/zcomp/DocsHeader.vue'
import DocsSection from '@/components/zcomp/DocsSection.vue'
import ApiReference from '@/components/zcomp/ApiReference.vue'
import DocsContainer from '@/components/zcomp/DocsContainer.vue'

const apiClasses = [
  {
    category: '基础',
    className: 'custom-option',
    description: '自定义选项容器，边框样式',
    isCategoryStart: true,
  },
  {
    category: '基础',
    className: 'custom-soft-option',
    description: '自定义选项容器，柔和样式',
    isCategoryStart: false,
  },
]
</script>

<template>
  <DocsContainer>
    <DocsHeader title="Custom Option" description="自定义选项卡片，用于单选或多选场景。" />

    <ApiReference :data="apiClasses"></ApiReference>

    <DocsSection title="边框样式">
      <div class="space-y-3">
        <label class="custom-option">
          <input type="radio" name="plan" class="hidden" />
          <div class="label-text">
            <h3 class="font-semibold">基础套餐</h3>
            <p class="text-sm text-base-content/60">适合个人和小团队使用</p>
          </div>
        </label>
        <label class="custom-option">
          <input type="radio" name="plan" class="hidden" checked />
          <div class="label-text">
            <h3 class="font-semibold">专业套餐</h3>
            <p class="text-sm text-base-content/60">为企业和快速增长的团队设计</p>
          </div>
        </label>
        <label class="custom-option">
          <input type="radio" name="plan" class="hidden" />
          <div class="label-text">
            <h3 class="font-semibold">企业套餐</h3>
            <p class="text-sm text-base-content/60">自定义解决方案和专业支持</p>
          </div>
        </label>
      </div>
    </DocsSection>

    <DocsSection title="柔和样式">
      <div class="space-y-3">
        <label class="custom-soft-option">
          <input type="radio" name="theme" class="hidden" />
          <div class="label-text">
            <h3 class="font-semibold">浅色主题</h3>
            <p class="text-sm text-base-content/60">适合日间使用的明亮界面</p>
          </div>
        </label>
        <label class="custom-soft-option">
          <input type="radio" name="theme" class="hidden" checked />
          <div class="label-text">
            <h3 class="font-semibold">深色主题</h3>
            <p class="text-sm text-base-content/60">适合夜间使用的深色界面</p>
          </div>
        </label>
        <label class="custom-soft-option">
          <input type="radio" name="theme" class="hidden" />
          <div class="label-text">
            <h3 class="font-semibold">自动跟随系统</h3>
            <p class="text-sm text-base-content/60">根据系统设置自动切换</p>
          </div>
        </label>
      </div>
    </DocsSection>

    <DocsSection title="多选">
      <div class="space-y-3">
        <label class="custom-option">
          <input type="checkbox" class="hidden" />
          <div class="label-text">
            <h3 class="font-semibold">选项 1</h3>
            <p class="text-sm text-base-content/60">这是第一个选项</p>
          </div>
        </label>
        <label class="custom-option">
          <input type="checkbox" class="hidden" checked />
          <div class="label-text">
            <h3 class="font-semibold">选项 2</h3>
            <p class="text-sm text-base-content/60">这是第二个选项</p>
          </div>
        </label>
        <label class="custom-option">
          <input type="checkbox" class="hidden" checked />
          <div class="label-text">
            <h3 class="font-semibold">选项 3</h3>
            <p class="text-sm text-base-content/60">这是第三个选项</p>
          </div>
        </label>
      </div>
    </DocsSection>

    <DocsSection title="带图标的选项">
      <div class="space-y-3">
        <label class="custom-option">
          <input type="radio" name="feature" class="hidden" />
          <div class="label-text flex items-start gap-3">
            <div class="text-2xl">🚀</div>
            <div>
              <h3 class="font-semibold">快速部署</h3>
              <p class="text-sm text-base-content/60">一键部署到生产环境</p>
            </div>
          </div>
        </label>
        <label class="custom-option">
          <input type="radio" name="feature" class="hidden" checked />
          <div class="label-text flex items-start gap-3">
            <div class="text-2xl">🔒</div>
            <div>
              <h3 class="font-semibold">安全可靠</h3>
              <p class="text-sm text-base-content/60">企业级安全保护</p>
            </div>
          </div>
        </label>
        <label class="custom-option">
          <input type="radio" name="feature" class="hidden" />
          <div class="label-text flex items-start gap-3">
            <div class="text-2xl">📊</div>
            <div>
              <h3 class="font-semibold">数据分析</h3>
              <p class="text-sm text-base-content/60">实时数据洞察和报告</p>
            </div>
          </div>
        </label>
      </div>
    </DocsSection>

    <DocsSection title="带价格的选项">
      <div class="space-y-3">
        <label class="custom-soft-option">
          <input type="radio" name="pricing" class="hidden" />
          <div class="label-text">
            <div class="flex items-center justify-between">
              <h3 class="font-semibold">小计划</h3>
              <span class="text-lg font-bold">¥99/月</span>
            </div>
            <p class="text-sm text-base-content/60 mt-1">最多 5 个项目</p>
          </div>
        </label>
        <label class="custom-soft-option">
          <input type="radio" name="pricing" class="hidden" checked />
          <div class="label-text">
            <div class="flex items-center justify-between">
              <h3 class="font-semibold">中计划</h3>
              <span class="text-lg font-bold">¥299/月</span>
            </div>
            <p class="text-sm text-base-content/60 mt-1">最多 20 个项目</p>
          </div>
        </label>
        <label class="custom-soft-option">
          <input type="radio" name="pricing" class="hidden" />
          <div class="label-text">
            <div class="flex items-center justify-between">
              <h3 class="font-semibold">大计划</h3>
              <span class="text-lg font-bold">¥999/月</span>
            </div>
            <p class="text-sm text-base-content/60 mt-1">无限项目</p>
          </div>
        </label>
      </div>
    </DocsSection>

    <DocsSection title="表单示例">
      <form class="space-y-6">
        <div>
          <label class="block text-sm font-semibold mb-3">选择配送方式</label>
          <div class="space-y-3">
            <label class="custom-option">
              <input type="radio" name="shipping" class="hidden" checked />
              <div class="label-text">
                <h3 class="font-semibold">标准配送</h3>
                <p class="text-sm text-base-content/60">5-7 个工作日送达 · 免费</p>
              </div>
            </label>
            <label class="custom-option">
              <input type="radio" name="shipping" class="hidden" />
              <div class="label-text">
                <h3 class="font-semibold">快速配送</h3>
                <p class="text-sm text-base-content/60">2-3 个工作日送达 · +¥20</p>
              </div>
            </label>
            <label class="custom-option">
              <input type="radio" name="shipping" class="hidden" />
              <div class="label-text">
                <h3 class="font-semibold">次日送达</h3>
                <p class="text-sm text-base-content/60">次日 18:00 前送达 · +¥50</p>
              </div>
            </label>
          </div>
        </div>

        <div class="pt-4 border-t border-base-300">
          <button type="submit" class="btn btn-primary w-full">确认选择</button>
        </div>
      </form>
    </DocsSection>
  </DocsContainer>
</template>
