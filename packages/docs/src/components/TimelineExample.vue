<script setup lang="ts">
import DocsHeader from '@/components/zcomp/DocsHeader.vue'
import DocsSection from '@/components/zcomp/DocsSection.vue'
import ApiReference from '@/components/zcomp/ApiReference.vue'
import DocsContainer from '@/components/zcomp/DocsContainer.vue'

const apiClasses = [
  // 基础
  {
    category: '基础',
    className: 'timeline',
    description: '时间轴容器基础样式，用于展示事件的时间顺序。',
    isCategoryStart: true,
  },
  {
    category: '基础',
    className: 'timeline-box',
    description: '时间轴内容盒子，带有边框、圆角和阴影。',
    isCategoryStart: false,
  },

  // 位置元素
  {
    category: '位置元素',
    className: 'timeline-start',
    description: '时间轴起始内容，通常显示在左侧或上方。',
    isCategoryStart: false,
  },
  {
    category: '位置元素',
    className: 'timeline-middle',
    description: '时间轴中间节点，通常用于放置图标或圆点。',
    isCategoryStart: false,
  },
  {
    category: '位置元素',
    className: 'timeline-end',
    description: '时间轴结束内容，通常显示在右侧或下方。',
    isCategoryStart: false,
  },

  // 布局方向
  {
    category: '布局方向',
    className: 'timeline-vertical',
    description: '垂直时间轴布局，事件从上到下排列。',
    isCategoryStart: false,
  },
  {
    category: '布局方向',
    className: 'timeline-horizontal',
    description: '水平时间轴布局，事件从左到右排列。',
    isCategoryStart: false,
  },

  // 样式变体
  {
    category: '样式变体',
    className: 'timeline-compact',
    description: '紧凑模式，减少内容之间的间距。',
    isCategoryStart: false,
  },
  {
    category: '样式变体',
    className: 'timeline-centered',
    description: '居中对齐模式，内容在时间轴两侧对齐。',
    isCategoryStart: false,
  },
  {
    category: '样式变体',
    className: 'timeline-snap-icon',
    description: '图标对齐模式，优化图标位置。',
    isCategoryStart: false,
  },
  {
    category: '样式变体',
    className: 'timeline-shift',
    description: '交替位置模式，配合紧凑垂直布局使用。',
    isCategoryStart: false,
  },
]
</script>

<template>
  <DocsContainer>
    <DocsHeader
      title="Timeline 时间轴"
      description="用于展示事件发生的时间顺序，支持垂直和水平布局。遵循 WCAG 2.1 AA 无障碍标准，提供清晰的视觉层次和语义化结构。"
    />

    <ApiReference :data="apiClasses" />

    <DocsSection title="垂直时间轴">
      <ul class="timeline timeline-vertical">
        <li>
          <div class="timeline-start">2024-01-15 10:00</div>
          <div class="timeline-middle">
            <div class="size-4 rounded-full bg-primary"></div>
          </div>
          <div class="timeline-end timeline-box">
            <div class="font-semibold">项目启动</div>
            <p class="text-sm text-base-content/70">召开项目启动会议，明确目标和时间表</p>
          </div>
          <hr />
        </li>

        <li>
          <hr />
          <div class="timeline-start">2024-02-01 14:30</div>
          <div class="timeline-middle">
            <div class="size-4 rounded-full bg-secondary"></div>
          </div>
          <div class="timeline-end timeline-box">
            <div class="font-semibold">需求评审</div>
            <p class="text-sm text-base-content/70">完成需求文档编写，通过团队评审</p>
          </div>
          <hr />
        </li>

        <li>
          <hr />
          <div class="timeline-start">2024-02-20 09:00</div>
          <div class="timeline-middle">
            <div class="size-4 rounded-full bg-accent"></div>
          </div>
          <div class="timeline-end timeline-box">
            <div class="font-semibold">设计完成</div>
            <p class="text-sm text-base-content/70">UI/UX 设计稿完成并通过审核</p>
          </div>
          <hr />
        </li>

        <li>
          <hr />
          <div class="timeline-start">2024-03-10 16:00</div>
          <div class="timeline-middle">
            <div class="size-4 rounded-full bg-success"></div>
          </div>
          <div class="timeline-end timeline-box">
            <div class="font-semibold">开发完成</div>
            <p class="text-sm text-base-content/70">核心功能开发完成，进入测试阶段</p>
          </div>
        </li>
      </ul>
    </DocsSection>

    <DocsSection title="水平时间轴">
      <ul class="timeline timeline-horizontal">
        <li>
          <div class="timeline-start">Step 1</div>
          <div class="timeline-middle">
            <span class="icon-[lucide--check-circle] text-2xl text-success"></span>
          </div>
          <div class="timeline-end timeline-box">注册账号</div>
          <hr />
        </li>

        <li>
          <hr />
          <div class="timeline-start">Step 2</div>
          <div class="timeline-middle">
            <span class="icon-[lucide--check-circle] text-2xl text-success"></span>
          </div>
          <div class="timeline-end timeline-box">完善信息</div>
          <hr />
        </li>

        <li>
          <hr />
          <div class="timeline-start">Step 3</div>
          <div class="timeline-middle">
            <span class="icon-[lucide--circle-dot] text-2xl text-primary"></span>
          </div>
          <div class="timeline-end timeline-box">邮箱验证</div>
          <hr />
        </li>

        <li>
          <hr />
          <div class="timeline-start">Step 4</div>
          <div class="timeline-middle">
            <span class="icon-[lucide--circle] text-2xl text-base-content/30"></span>
          </div>
          <div class="timeline-end timeline-box">开始使用</div>
        </li>
      </ul>
    </DocsSection>

    <DocsSection title="带图标的时间轴">
      <ul class="timeline timeline-vertical">
        <li>
          <div class="timeline-start">
            <time class="text-sm text-base-content/70">2024-02-09 08:00</time>
          </div>
          <div class="timeline-middle">
            <div class="size-10 rounded-full bg-primary/10 flex items-center justify-center">
              <span class="icon-[lucide--coffee] text-lg text-primary"></span>
            </div>
          </div>
          <div class="timeline-end timeline-box">
            <div class="font-semibold mb-1">早晨例会</div>
            <p class="text-sm text-base-content/70">团队同步进度，讨论今日工作安排</p>
          </div>
          <hr />
        </li>

        <li>
          <hr />
          <div class="timeline-start">
            <time class="text-sm text-base-content/70">2024-02-09 10:30</time>
          </div>
          <div class="timeline-middle">
            <div class="size-10 rounded-full bg-secondary/10 flex items-center justify-center">
              <span class="icon-[lucide--code-2] text-lg text-secondary"></span>
            </div>
          </div>
          <div class="timeline-end timeline-box">
            <div class="font-semibold mb-1">代码评审</div>
            <p class="text-sm text-base-content/70">审查新功能代码，提出改进建议</p>
          </div>
          <hr />
        </li>

        <li>
          <hr />
          <div class="timeline-start">
            <time class="text-sm text-base-content/70">2024-02-09 14:00</time>
          </div>
          <div class="timeline-middle">
            <div class="size-10 rounded-full bg-accent/10 flex items-center justify-center">
              <span class="icon-[lucide--users] text-lg text-accent"></span>
            </div>
          </div>
          <div class="timeline-end timeline-box">
            <div class="font-semibold mb-1">客户演示</div>
            <p class="text-sm text-base-content/70">向客户展示最新功能和改进</p>
          </div>
          <hr />
        </li>

        <li>
          <hr />
          <div class="timeline-start">
            <time class="text-sm text-base-content/70">2024-02-09 17:00</time>
          </div>
          <div class="timeline-middle">
            <div class="size-10 rounded-full bg-success/10 flex items-center justify-center">
              <span class="icon-[lucide--check-circle-2] text-lg text-success"></span>
            </div>
          </div>
          <div class="timeline-end timeline-box">
            <div class="font-semibold mb-1">每日总结</div>
            <p class="text-sm text-base-content/70">回顾今日成果，规划明日任务</p>
          </div>
        </li>
      </ul>
    </DocsSection>

    <DocsSection title="紧凑模式">
      <ul class="timeline timeline-vertical timeline-compact">
        <li>
          <div class="timeline-middle">
            <div class="size-3 rounded-full bg-primary"></div>
          </div>
          <div class="timeline-end timeline-box">
            <div class="text-sm">用户注册成功</div>
          </div>
          <hr />
        </li>

        <li>
          <hr />
          <div class="timeline-middle">
            <div class="size-3 rounded-full bg-secondary"></div>
          </div>
          <div class="timeline-end timeline-box">
            <div class="text-sm">邮箱验证完成</div>
          </div>
          <hr />
        </li>

        <li>
          <hr />
          <div class="timeline-middle">
            <div class="size-3 rounded-full bg-accent"></div>
          </div>
          <div class="timeline-end timeline-box">
            <div class="text-sm">完善个人资料</div>
          </div>
          <hr />
        </li>

        <li>
          <hr />
          <div class="timeline-middle">
            <div class="size-3 rounded-full bg-success"></div>
          </div>
          <div class="timeline-end timeline-box">
            <div class="text-sm">账号激活成功</div>
          </div>
        </li>
      </ul>
    </DocsSection>

    <DocsSection title="订单追踪">
      <div class="max-w-2xl">
        <ul class="timeline timeline-vertical timeline-snap-icon">
          <li>
            <div class="timeline-middle">
              <div
                class="w-full h-full rounded-full bg-success flex items-center justify-center shadow-sm"
              >
                <span class="icon-[lucide--check] text-xl text-white"></span>
              </div>
            </div>
            <div class="timeline-start mb-8">
              <time class="text-sm text-base-content/70">2024-02-08 14:32</time>
            </div>
            <div class="timeline-end timeline-box mb-8">
              <div class="font-semibold mb-1 flex items-center gap-2">
                <span class="icon-[lucide--shopping-cart]"></span>
                订单已提交
              </div>
              <p class="text-sm text-base-content/70">订单号：#20240208001</p>
              <p class="text-sm text-base-content/70">商品：MacBook Pro 16" x1</p>
            </div>
            <hr class="bg-success" />
          </li>

          <li>
            <hr class="bg-success" />
            <div class="timeline-middle">
              <div
                class="w-full h-full rounded-full bg-success flex items-center justify-center shadow-sm"
              >
                <span class="icon-[lucide--check] text-xl text-white"></span>
              </div>
            </div>
            <div class="timeline-start mb-8">
              <time class="text-sm text-base-content/70">2024-02-08 14:35</time>
            </div>
            <div class="timeline-end timeline-box mb-8">
              <div class="font-semibold mb-1 flex items-center gap-2">
                <span class="icon-[lucide--credit-card]"></span>
                支付成功
              </div>
              <p class="text-sm text-base-content/70">支付方式：微信支付</p>
              <p class="text-sm text-base-content/70">支付金额：¥19,999.00</p>
            </div>
            <hr class="bg-success" />
          </li>

          <li>
            <hr class="bg-success" />
            <div class="timeline-middle">
              <div
                class="w-full h-full rounded-full bg-primary flex items-center justify-center shadow-sm animate-pulse"
              >
                <span class="icon-[lucide--package] text-xl text-white"></span>
              </div>
            </div>
            <div class="timeline-start mb-8">
              <time class="text-sm text-base-content/70">2024-02-09 09:15</time>
            </div>
            <div class="timeline-end timeline-box mb-8">
              <div class="font-semibold mb-1 flex items-center gap-2">
                <span class="icon-[lucide--package-check]"></span>
                商品打包中
              </div>
              <p class="text-sm text-base-content/70">仓库：上海仓储中心</p>
              <div class="flex items-center gap-2 mt-2">
                <div class="badge badge-primary badge-sm">进行中</div>
              </div>
            </div>
            <hr class="bg-base-content/10" />
          </li>

          <li>
            <hr class="bg-base-content/10" />
            <div class="timeline-middle">
              <div
                class="w-full h-full rounded-full bg-base-content/10 flex items-center justify-center"
              >
                <span class="icon-[lucide--truck] text-xl text-base-content/40"></span>
              </div>
            </div>
            <div class="timeline-start mb-8">
              <time class="text-sm text-base-content/40">预计 2024-02-10</time>
            </div>
            <div class="timeline-end timeline-box mb-8 opacity-60">
              <div class="font-semibold mb-1 flex items-center gap-2">
                <span class="icon-[lucide--truck]"></span>
                待发货
              </div>
              <p class="text-sm text-base-content/70">快递公司：顺丰速运</p>
            </div>
            <hr class="bg-base-content/10" />
          </li>

          <li>
            <hr class="bg-base-content/10" />
            <div class="timeline-middle">
              <div
                class="w-full h-full rounded-full bg-base-content/10 flex items-center justify-center"
              >
                <span class="icon-[lucide--home] text-xl text-base-content/40"></span>
              </div>
            </div>
            <div class="timeline-start">
              <time class="text-sm text-base-content/40">预计 2024-02-12</time>
            </div>
            <div class="timeline-end timeline-box opacity-60">
              <div class="font-semibold mb-1 flex items-center gap-2">
                <span class="icon-[lucide--package-check]"></span>
                待收货
              </div>
              <p class="text-sm text-base-content/70">配送地址：北京市朝阳区...</p>
            </div>
          </li>
        </ul>
      </div>
    </DocsSection>

    <DocsSection title="项目里程碑">
      <div class="max-w-3xl">
        <ul class="timeline timeline-vertical">
          <li>
            <div class="timeline-start">
              <div class="text-sm font-semibold mb-1">第一阶段</div>
              <time class="text-xs text-base-content/70">2024 Q1</time>
            </div>
            <div class="timeline-middle">
              <div
                class="size-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg"
              >
                <span class="icon-[lucide--rocket] text-lg text-white"></span>
              </div>
            </div>
            <div class="timeline-end timeline-box">
              <h4 class="font-bold mb-2">项目启动与规划</h4>
              <ul class="space-y-1 text-sm text-base-content/70">
                <li class="flex items-center gap-2">
                  <span class="icon-[lucide--check] text-success text-xs"></span>
                  <span>组建核心团队</span>
                </li>
                <li class="flex items-center gap-2">
                  <span class="icon-[lucide--check] text-success text-xs"></span>
                  <span>完成市场调研</span>
                </li>
                <li class="flex items-center gap-2">
                  <span class="icon-[lucide--check] text-success text-xs"></span>
                  <span>制定产品路线图</span>
                </li>
              </ul>
            </div>
            <hr />
          </li>

          <li>
            <hr />
            <div class="timeline-start">
              <div class="text-sm font-semibold mb-1">第二阶段</div>
              <time class="text-xs text-base-content/70">2024 Q2</time>
            </div>
            <div class="timeline-middle">
              <div
                class="size-10 rounded-full bg-gradient-to-br from-secondary to-accent flex items-center justify-center shadow-lg"
              >
                <span class="icon-[lucide--layout] text-lg text-white"></span>
              </div>
            </div>
            <div class="timeline-end timeline-box">
              <h4 class="font-bold mb-2">设计与原型</h4>
              <ul class="space-y-1 text-sm text-base-content/70">
                <li class="flex items-center gap-2">
                  <span class="icon-[lucide--check] text-success text-xs"></span>
                  <span>用户体验设计</span>
                </li>
                <li class="flex items-center gap-2">
                  <span class="icon-[lucide--check] text-success text-xs"></span>
                  <span>交互原型制作</span>
                </li>
                <li class="flex items-center gap-2">
                  <span class="icon-[lucide--loader] text-primary text-xs animate-spin"></span>
                  <span>用户测试反馈</span>
                </li>
              </ul>
            </div>
            <hr />
          </li>

          <li>
            <hr />
            <div class="timeline-start">
              <div class="text-sm font-semibold mb-1">第三阶段</div>
              <time class="text-xs text-base-content/70">2024 Q3</time>
            </div>
            <div class="timeline-middle">
              <div class="size-10 rounded-full bg-base-content/10 flex items-center justify-center">
                <span class="icon-[lucide--code] text-lg text-base-content/40"></span>
              </div>
            </div>
            <div class="timeline-end timeline-box opacity-60">
              <h4 class="font-bold mb-2">开发与实现</h4>
              <ul class="space-y-1 text-sm text-base-content/70">
                <li class="flex items-center gap-2">
                  <span class="icon-[lucide--circle] text-base-content/30 text-xs"></span>
                  <span>前端开发</span>
                </li>
                <li class="flex items-center gap-2">
                  <span class="icon-[lucide--circle] text-base-content/30 text-xs"></span>
                  <span>后端开发</span>
                </li>
                <li class="flex items-center gap-2">
                  <span class="icon-[lucide--circle] text-base-content/30 text-xs"></span>
                  <span>集成测试</span>
                </li>
              </ul>
            </div>
            <hr />
          </li>

          <li>
            <hr />
            <div class="timeline-start">
              <div class="text-sm font-semibold mb-1">第四阶段</div>
              <time class="text-xs text-base-content/70">2024 Q4</time>
            </div>
            <div class="timeline-middle">
              <div class="size-10 rounded-full bg-base-content/10 flex items-center justify-center">
                <span class="icon-[lucide--globe] text-lg text-base-content/40"></span>
              </div>
            </div>
            <div class="timeline-end timeline-box opacity-60">
              <h4 class="font-bold mb-2">发布与推广</h4>
              <ul class="space-y-1 text-sm text-base-content/70">
                <li class="flex items-center gap-2">
                  <span class="icon-[lucide--circle] text-base-content/30 text-xs"></span>
                  <span>Beta 测试</span>
                </li>
                <li class="flex items-center gap-2">
                  <span class="icon-[lucide--circle] text-base-content/30 text-xs"></span>
                  <span>正式发布</span>
                </li>
                <li class="flex items-center gap-2">
                  <span class="icon-[lucide--circle] text-base-content/30 text-xs"></span>
                  <span>市场推广</span>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </DocsSection>

    <DocsSection title="社交动态">
      <div class="max-w-2xl">
        <ul class="timeline timeline-vertical timeline-snap-icon">
          <li>
            <div class="timeline-middle">
              <div class="avatar avatar-placeholder">
                <div class="w-10 rounded-full bg-primary text-primary-content">
                  <span class="text-sm font-semibold">张</span>
                </div>
              </div>
            </div>
            <div class="timeline-start mb-8 text-sm text-base-content/70">2 小时前</div>
            <div class="timeline-end timeline-box mb-8">
              <div class="font-semibold mb-2">张三 发布了新动态</div>
              <p class="text-sm mb-2">刚完成了新项目的第一个里程碑！团队协作真的很重要 🎉</p>
              <div class="flex gap-4 text-sm text-base-content/70">
                <button class="flex items-center gap-1 hover:text-error transition-colors">
                  <span class="icon-[lucide--heart]"></span>
                  <span>12</span>
                </button>
                <button class="flex items-center gap-1 hover:text-primary transition-colors">
                  <span class="icon-[lucide--message-circle]"></span>
                  <span>3</span>
                </button>
                <button class="flex items-center gap-1 hover:text-primary transition-colors">
                  <span class="icon-[lucide--share-2]"></span>
                  <span>分享</span>
                </button>
              </div>
            </div>
            <hr />
          </li>

          <li>
            <hr />
            <div class="timeline-middle">
              <div class="avatar avatar-placeholder">
                <div
                  class="w-10 rounded-full bg-secondary text-secondary-content flex items-center justify-center"
                >
                  <span class="text-sm font-semibold">李</span>
                </div>
              </div>
            </div>
            <div class="timeline-start mb-8 text-sm text-base-content/70">5 小时前</div>
            <div class="timeline-end timeline-box mb-8">
              <div class="font-semibold mb-2">李四 分享了文章</div>
              <div class="card bg-base-200 mt-2">
                <div class="card-body p-3">
                  <h5 class="text-sm font-semibold">Vue 3 性能优化技巧</h5>
                  <p class="text-xs text-base-content/70">
                    了解如何通过代码分割、懒加载等技术提升应用性能...
                  </p>
                </div>
              </div>
              <div class="flex gap-4 text-sm text-base-content/70 mt-2">
                <button class="flex items-center gap-1 hover:text-error transition-colors">
                  <span class="icon-[lucide--heart]"></span>
                  <span>8</span>
                </button>
                <button class="flex items-center gap-1 hover:text-primary transition-colors">
                  <span class="icon-[lucide--message-circle]"></span>
                  <span>5</span>
                </button>
                <button class="flex items-center gap-1 hover:text-primary transition-colors">
                  <span class="icon-[lucide--share-2]"></span>
                  <span>分享</span>
                </button>
              </div>
            </div>
            <hr />
          </li>

          <li>
            <hr />
            <div class="timeline-middle">
              <div class="avatar avatar-placeholder">
                <div
                  class="w-10 rounded-full bg-accent text-accent-content flex items-center justify-center"
                >
                  <span class="text-sm font-semibold">王</span>
                </div>
              </div>
            </div>
            <div class="timeline-start text-sm text-base-content/70">昨天 18:30</div>
            <div class="timeline-end timeline-box">
              <div class="font-semibold mb-2">王五 上传了照片</div>
              <div class="grid grid-cols-2 gap-2 mt-2">
                <div class="aspect-square bg-base-300 rounded-lg flex items-center justify-center">
                  <span class="icon-[lucide--image] text-4xl text-base-content/30"></span>
                </div>
                <div class="aspect-square bg-base-300 rounded-lg flex items-center justify-center">
                  <span class="icon-[lucide--image] text-4xl text-base-content/30"></span>
                </div>
              </div>
              <div class="flex gap-4 text-sm text-base-content/70 mt-2">
                <button class="flex items-center gap-1 hover:text-error transition-colors">
                  <span class="icon-[lucide--heart]"></span>
                  <span>24</span>
                </button>
                <button class="flex items-center gap-1 hover:text-primary transition-colors">
                  <span class="icon-[lucide--message-circle]"></span>
                  <span>7</span>
                </button>
                <button class="flex items-center gap-1 hover:text-primary transition-colors">
                  <span class="icon-[lucide--share-2]"></span>
                  <span>分享</span>
                </button>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </DocsSection>

    <DocsSection title="流程步骤">
      <ul class="timeline timeline-horizontal">
        <li>
          <div class="timeline-start text-sm font-semibold">需求分析</div>
          <div class="timeline-middle">
            <div class="h-full w-full rounded-full bg-success flex items-center justify-center">
              <span class="icon-[lucide--file-search] text-xl text-white"></span>
            </div>
          </div>
          <div class="timeline-end timeline-box">
            <p class="text-xs">收集并分析用户需求</p>
          </div>
          <hr class="bg-success" />
        </li>

        <li>
          <hr class="bg-success" />
          <div class="timeline-start text-sm font-semibold">方案设计</div>
          <div class="timeline-middle">
            <div class="h-full w-full rounded-full bg-success flex items-center justify-center">
              <span class="icon-[lucide--layout-template] text-xl text-white"></span>
            </div>
          </div>
          <div class="timeline-end timeline-box">
            <p class="text-xs">制定技术方案和架构设计</p>
          </div>
          <hr class="bg-success" />
        </li>

        <li>
          <hr class="bg-success" />
          <div class="timeline-start text-sm font-semibold">开发实现</div>
          <div class="timeline-middle">
            <div
              class="h-full w-full rounded-full bg-primary flex items-center justify-center animate-pulse"
            >
              <span class="icon-[lucide--code-2] text-xl text-white"></span>
            </div>
          </div>
          <div class="timeline-end timeline-box">
            <p class="text-xs">编码实现功能</p>
            <div class="badge badge-primary badge-xs mt-1">进行中</div>
          </div>
          <hr />
        </li>

        <li>
          <hr />
          <div class="timeline-start text-sm font-semibold opacity-60">测试验证</div>
          <div class="timeline-middle">
            <div
              class="h-full w-full rounded-full bg-base-content/10 flex items-center justify-center"
            >
              <span class="icon-[lucide--bug] text-xl text-base-content/40"></span>
            </div>
          </div>
          <div class="timeline-end timeline-box opacity-60">
            <p class="text-xs">功能测试和bug修复</p>
          </div>
          <hr />
        </li>

        <li>
          <hr />
          <div class="timeline-start text-sm font-semibold opacity-60">上线部署</div>
          <div class="timeline-middle">
            <div
              class="h-full w-full rounded-full bg-base-content/10 flex items-center justify-center"
            >
              <span class="icon-[lucide--rocket] text-xl text-base-content/40"></span>
            </div>
          </div>
          <div class="timeline-end timeline-box opacity-60">
            <p class="text-xs">发布到生产环境</p>
          </div>
        </li>
      </ul>
    </DocsSection>

    <DocsSection title="学习路径">
      <div class="max-w-3xl">
        <ul class="timeline timeline-vertical">
          <li>
            <div class="timeline-start">
              <div class="badge badge-primary">基础阶段</div>
            </div>
            <div class="timeline-middle">
              <div class="size-10 rounded-full bg-primary/20 flex items-center justify-center">
                <span class="text-lg font-bold text-primary">1</span>
              </div>
            </div>
            <div class="timeline-end timeline-box">
              <h4 class="font-bold mb-2">HTML & CSS 基础</h4>
              <p class="text-sm text-base-content/70 mb-2">
                学习网页结构和样式的基本知识，了解语义化标签和响应式设计。
              </p>
              <div class="flex gap-2 flex-wrap">
                <div class="badge badge-outline badge-xs">HTML5</div>
                <div class="badge badge-outline badge-xs">CSS3</div>
                <div class="badge badge-outline badge-xs">Flexbox</div>
                <div class="badge badge-outline badge-xs">Grid</div>
              </div>
            </div>
            <hr />
          </li>

          <li>
            <hr />
            <div class="timeline-start">
              <div class="badge badge-secondary">进阶阶段</div>
            </div>
            <div class="timeline-middle">
              <div class="size-10 rounded-full bg-secondary/20 flex items-center justify-center">
                <span class="text-lg font-bold text-secondary">2</span>
              </div>
            </div>
            <div class="timeline-end timeline-box">
              <h4 class="font-bold mb-2">JavaScript 核心</h4>
              <p class="text-sm text-base-content/70 mb-2">
                掌握 JavaScript 语法、DOM 操作、ES6+ 新特性和异步编程。
              </p>
              <div class="flex gap-2 flex-wrap">
                <div class="badge badge-outline badge-xs">ES6+</div>
                <div class="badge badge-outline badge-xs">Promise</div>
                <div class="badge badge-outline badge-xs">Async/Await</div>
                <div class="badge badge-outline badge-xs">DOM API</div>
              </div>
            </div>
            <hr />
          </li>

          <li>
            <hr />
            <div class="timeline-start">
              <div class="badge badge-accent">框架阶段</div>
            </div>
            <div class="timeline-middle">
              <div class="size-10 rounded-full bg-accent/20 flex items-center justify-center">
                <span class="text-lg font-bold text-accent">3</span>
              </div>
            </div>
            <div class="timeline-end timeline-box">
              <h4 class="font-bold mb-2">Vue.js 开发</h4>
              <p class="text-sm text-base-content/70 mb-2">
                学习现代前端框架，理解组件化开发和状态管理。
              </p>
              <div class="flex gap-2 flex-wrap">
                <div class="badge badge-outline badge-xs">Vue 3</div>
                <div class="badge badge-outline badge-xs">Composition API</div>
                <div class="badge badge-outline badge-xs">Pinia</div>
                <div class="badge badge-outline badge-xs">Vue Router</div>
              </div>
            </div>
            <hr />
          </li>

          <li>
            <hr />
            <div class="timeline-start">
              <div class="badge badge-success">高级阶段</div>
            </div>
            <div class="timeline-middle">
              <div class="size-10 rounded-full bg-success/20 flex items-center justify-center">
                <span class="text-lg font-bold text-success">4</span>
              </div>
            </div>
            <div class="timeline-end timeline-box">
              <h4 class="font-bold mb-2">工程化与最佳实践</h4>
              <p class="text-sm text-base-content/70 mb-2">
                掌握构建工具、测试、性能优化和团队协作流程。
              </p>
              <div class="flex gap-2 flex-wrap">
                <div class="badge badge-outline badge-xs">Vite</div>
                <div class="badge badge-outline badge-xs">TypeScript</div>
                <div class="badge badge-outline badge-xs">Vitest</div>
                <div class="badge badge-outline badge-xs">CI/CD</div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </DocsSection>
  </DocsContainer>
</template>
