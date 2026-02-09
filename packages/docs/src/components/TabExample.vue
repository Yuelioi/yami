<script setup lang="ts">
import DocsHeader from '@/components/zcomp/DocsHeader.vue'
import DocsSection from '@/components/zcomp/DocsSection.vue'
import ApiReference from '@/components/zcomp/ApiReference.vue'
import DocsContainer from '@/components/zcomp/DocsContainer.vue'

const apiClasses = [
  {
    category: '基础',
    className: 'tabs',
    description: '标签页容器',
    isCategoryStart: true,
  },
  {
    category: '基础',
    className: 'tab-header',
    description: '标签页头',
    isCategoryStart: false,
  },
  {
    category: '基础',
    className: 'tab-title',
    description: '标签页标题',
    isCategoryStart: false,
  },
  {
    category: '基础',
    className: 'tab-content',
    description: '标签页内容',
    isCategoryStart: false,
  },
  {
    category: '样式',
    className: 'tabs-bordered',
    description: '带边框',
    isCategoryStart: false,
  },
  {
    category: '样式',
    className: 'tabs-boxed',
    description: '盒子样式',
    isCategoryStart: false,
  },
  {
    category: '样式',
    className: 'tabs-lifted',
    description: '浮起样式',
    isCategoryStart: false,
  },
  {
    category: '尺寸',
    className: 'tabs-xs',
    description: '超小',
    isCategoryStart: false,
  },
  {
    category: '尺寸',
    className: 'tabs-sm',
    description: '小',
    isCategoryStart: false,
  },
  {
    category: '尺寸',
    className: 'tabs-md',
    description: '中',
    isCategoryStart: false,
  },
  {
    category: '尺寸',
    className: 'tabs-lg',
    description: '大',
    isCategoryStart: false,
  },
  {
    category: '颜色',
    className: 'tabs-primary',
    description: '主色',
    isCategoryStart: false,
  },
  {
    category: '颜色',
    className: 'tabs-secondary',
    description: '次色',
    isCategoryStart: false,
  },
  {
    category: '颜色',
    className: 'tabs-success',
    description: '成功色',
    isCategoryStart: false,
  },
  {
    category: '颜色',
    className: 'tabs-warning',
    description: '警告色',
    isCategoryStart: false,
  },
  {
    category: '颜色',
    className: 'tabs-error',
    description: '错误色',
    isCategoryStart: false,
  },
]
</script>

<template>
  <DocsContainer>
    <DocsHeader title="Tab" description="选项卡/标签页组件，用于在同一区域切换不同内容。" />

    <ApiReference :data="apiClasses"></ApiReference>

    <DocsSection title="基础标签页">
      <div class="tabs tabs-bordered w-full max-w-md">
        <div class="tab-header">
          <input type="radio" id="tab-1" name="tab-basic" checked />
          <label for="tab-1" class="tab-title">概述</label>

          <input type="radio" id="tab-2" name="tab-basic" />
          <label for="tab-2" class="tab-title">功能</label>

          <input type="radio" id="tab-3" name="tab-basic" />
          <label for="tab-3" class="tab-title">价格</label>
        </div>

        <div class="tab-body">
          <div class="tab-content">
            <p>这是产品的总体介绍。</p>
          </div>
          <div class="tab-content">
            <ul class="list-disc list-inside space-y-1">
              <li>实时数据同步</li>
              <li>智能分析报告</li>
              <li>团队协作工具</li>
            </ul>
          </div>
          <div class="tab-content">
            <p>基础版免费，专业版 ¥99/月，企业版请联系我们。</p>
          </div>
        </div>
      </div>
    </DocsSection>

    <DocsSection title="带边框样式">
      <div class="tabs tabs-bordered w-full max-w-md">
        <div class="tab-header">
          <input type="radio" id="bordered-1" name="bordered" checked />
          <label for="bordered-1" class="tab-title">首页</label>

          <input type="radio" id="bordered-2" name="bordered" />
          <label for="bordered-2" class="tab-title">文档</label>

          <input type="radio" id="bordered-3" name="bordered" />
          <label for="bordered-3" class="tab-title">示例</label>
        </div>

        <div class="tab-body">
          <div class="tab-content">欢迎来到我们的网站</div>
          <div class="tab-content">查看完整的文档</div>
          <div class="tab-content">浏览更多示例</div>
        </div>
      </div>
    </DocsSection>

    <DocsSection title="盒子样式">
      <div class="tabs tabs-boxed w-full max-w-md">
        <div class="tab-header">
          <input type="radio" id="boxed-1" name="boxed" checked />
          <label for="boxed-1" class="tab-title">账户</label>

          <input type="radio" id="boxed-2" name="boxed" />
          <label for="boxed-2" class="tab-title">配置</label>

          <input type="radio" id="boxed-3" name="boxed" />
          <label for="boxed-3" class="tab-title">关于</label>
        </div>

        <div class="tab-body">
          <div class="tab-content">
            <h3 class="font-semibold mb-2">账户设置</h3>
            <p>管理您的账户信息和偏好设置。</p>
          </div>
          <div class="tab-content">
            <h3 class="font-semibold mb-2">系统配置</h3>
            <p>配置应用程序参数。</p>
          </div>
          <div class="tab-content">
            <h3 class="font-semibold mb-2">关于本应用</h3>
            <p>版本 1.0.0</p>
          </div>
        </div>
      </div>
    </DocsSection>

    <DocsSection title="浮起样式">
      <div class="tabs tabs-lifted w-full max-w-md">
        <div class="tab-header">
          <input type="radio" id="lifted-1" name="lifted" checked />
          <label for="lifted-1" class="tab-title">描述</label>

          <input type="radio" id="lifted-2" name="lifted" />
          <label for="lifted-2" class="tab-title">规格</label>

          <input type="radio" id="lifted-3" name="lifted" />
          <label for="lifted-3" class="tab-title">评论</label>
        </div>

        <div class="tab-body">
          <div class="tab-content">
            <p>这是一个高质量的产品，具有卓越的性能。</p>
          </div>
          <div class="tab-content">
            <ul class="list-disc list-inside space-y-1">
              <li>尺寸：10 x 10 x 5 cm</li>
              <li>重量：250g</li>
              <li>材质：优质塑料</li>
            </ul>
          </div>
          <div class="tab-content">
            <p>⭐⭐⭐⭐⭐ "非常棒的产品！" - 用户 A</p>
          </div>
        </div>
      </div>
    </DocsSection>

    <DocsSection title="尺寸变体">
      <div class="space-y-6">
        <div>
          <p class="text-sm text-base-content/60 mb-2">超小 (xs)</p>
          <div class="tabs tabs-boxed tabs-xs w-full max-w-md">
            <div class="tab-header">
              <input type="radio" id="xs-1" name="xs" checked />
              <label for="xs-1" class="tab-title">标签 1</label>
              <input type="radio" id="xs-2" name="xs" />
              <label for="xs-2" class="tab-title">标签 2</label>
            </div>
            <div class="tab-body">
              <div class="tab-content">内容 1</div>
              <div class="tab-content">内容 2</div>
            </div>
          </div>
        </div>

        <div>
          <p class="text-sm text-base-content/60 mb-2">小 (sm)</p>
          <div class="tabs tabs-boxed tabs-sm w-full max-w-md">
            <div class="tab-header">
              <input type="radio" id="sm-1" name="sm" checked />
              <label for="sm-1" class="tab-title">标签 1</label>
              <input type="radio" id="sm-2" name="sm" />
              <label for="sm-2" class="tab-title">标签 2</label>
            </div>
            <div class="tab-body">
              <div class="tab-content">内容 1</div>
              <div class="tab-content">内容 2</div>
            </div>
          </div>
        </div>

        <div>
          <p class="text-sm text-base-content/60 mb-2">大 (lg)</p>
          <div class="tabs tabs-boxed tabs-lg w-full max-w-md">
            <div class="tab-header">
              <input type="radio" id="lg-1" name="lg" checked />
              <label for="lg-1" class="tab-title">标签 1</label>
              <input type="radio" id="lg-2" name="lg" />
              <label for="lg-2" class="tab-title">标签 2</label>
            </div>
            <div class="tab-body">
              <div class="tab-content">内容 1</div>
              <div class="tab-content">内容 2</div>
            </div>
          </div>
        </div>
      </div>
    </DocsSection>

    <DocsSection title="颜色变体">
      <div class="space-y-4">
        <div>
          <p class="text-sm text-base-content/60 mb-2">主色 (primary)</p>
          <div class="tabs tabs-bordered tabs-primary w-full max-w-md">
            <div class="tab-header">
              <input type="radio" id="primary-1" name="primary" checked />
              <label for="primary-1" class="tab-title">标签 1</label>
              <input type="radio" id="primary-2" name="primary" />
              <label for="primary-2" class="tab-title">标签 2</label>
            </div>
            <div class="tab-body">
              <div class="tab-content">内容 1</div>
              <div class="tab-content">内容 2</div>
            </div>
          </div>
        </div>

        <div>
          <p class="text-sm text-base-content/60 mb-2">成功色 (success)</p>
          <div class="tabs tabs-bordered tabs-success w-full max-w-md">
            <div class="tab-header">
              <input type="radio" id="success-1" name="success" checked />
              <label for="success-1" class="tab-title">标签 1</label>
              <input type="radio" id="success-2" name="success" />
              <label for="success-2" class="tab-title">标签 2</label>
            </div>
            <div class="tab-body">
              <div class="tab-content">内容 1</div>
              <div class="tab-content">内容 2</div>
            </div>
          </div>
        </div>
      </div>
    </DocsSection>

    <DocsSection title="多个标签页">
      <div class="tabs tabs-boxed w-full max-w-2xl">
        <div class="tab-header">
          <input type="radio" id="multi-1" name="multi" checked />
          <label for="multi-1" class="tab-title">步骤 1</label>

          <input type="radio" id="multi-2" name="multi" />
          <label for="multi-2" class="tab-title">步骤 2</label>

          <input type="radio" id="multi-3" name="multi" />
          <label for="multi-3" class="tab-title">步骤 3</label>

          <input type="radio" id="multi-4" name="multi" />
          <label for="multi-4" class="tab-title">步骤 4</label>

          <input type="radio" id="multi-5" name="multi" />
          <label for="multi-5" class="tab-title">步骤 5</label>
        </div>

        <div class="tab-body">
          <div class="tab-content">填写基本信息</div>
          <div class="tab-content">选择套餐</div>
          <div class="tab-content">确认订单</div>
          <div class="tab-content">付款</div>
          <div class="tab-content">完成</div>
        </div>
      </div>
    </DocsSection>

    <DocsSection title="表单分步界面">
      <div class="tabs tabs-lifted w-full max-w-2xl">
        <div class="tab-header">
          <input type="radio" id="form-1" name="form" checked />
          <label for="form-1" class="tab-title">
            <span class="icon-[lucide--user] w-4 h-4 mr-1"></span>
            个人信息
          </label>

          <input type="radio" id="form-2" name="form" />
          <label for="form-2" class="tab-title">
            <span class="icon-[lucide--map-pin] w-4 h-4 mr-1"></span>
            地址信息
          </label>

          <input type="radio" id="form-3" name="form" />
          <label for="form-3" class="tab-title">
            <span class="icon-[lucide--check-circle] w-4 h-4 mr-1"></span>
            确认信息
          </label>
        </div>

        <div class="tab-body">
          <div class="tab-content">
            <div class="form-control mb-4">
              <label class="label">
                <span class="label-text">姓名</span>
              </label>
              <input type="text" placeholder="输入姓名" class="input input-bordered" />
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text">邮箱</span>
              </label>
              <input type="email" placeholder="输入邮箱" class="input input-bordered" />
            </div>
          </div>
          <div class="tab-content">
            <div class="form-control mb-4">
              <label class="label">
                <span class="label-text">城市</span>
              </label>
              <input type="text" placeholder="输入城市" class="input input-bordered" />
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text">邮编</span>
              </label>
              <input type="text" placeholder="输入邮编" class="input input-bordered" />
            </div>
          </div>
          <div class="tab-content">
            <p class="text-base-content/70">请确认您的信息无误</p>
            <button class="btn btn-primary mt-4">提交</button>
          </div>
        </div>
      </div>
    </DocsSection>
  </DocsContainer>
</template>
