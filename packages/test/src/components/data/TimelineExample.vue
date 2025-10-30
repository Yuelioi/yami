<script setup lang="ts">
import DocsHeader from "../zcomp/DocsHeader.vue";
import ApiReference from "../zcomp/ApiReference.vue";
import DocsContainer from "../zcomp/DocsContainer.vue";
import DocsSection from "../zcomp/DocsSection.vue";

const apiClasses = [
  {
    category: "基础结构",
    className: "timeline",
    description: "时间轴的主容器，用于包裹所有时间项。",
    isCategoryStart: true,
  },
  {
    category: "基础结构",
    className: "timeline-item",
    description: "时间轴的单个节点项。",
    isCategoryStart: false,
  },
  {
    category: "基础结构",
    className: "timeline-line",
    description: "连接节点之间的线条。",
    isCategoryStart: false,
  },
  {
    category: "内容区",
    className: "timeline-start",
    description: "位于节点前（上/左）的内容。",
    isCategoryStart: true,
  },
  {
    category: "内容区",
    className: "timeline-middle",
    description: "时间轴中间的节点或图标。",
    isCategoryStart: false,
  },
  {
    category: "内容区",
    className: "timeline-end",
    description: "位于节点后（下/右）的内容。",
    isCategoryStart: false,
  },
  {
    category: "内容区",
    className: "timeline-box",
    description: "包裹文本内容的卡片式盒子。",
    isCategoryStart: false,
  },
  {
    category: "节点样式",
    className: "timeline-icon",
    description: "时间节点使用的圆形图标样式。",
    isCategoryStart: true,
  },
  {
    category: "节点样式",
    className: "timeline-dot",
    description: "时间节点使用的小圆点样式。",
    isCategoryStart: false,
  },
  {
    category: "方向变体",
    className: "timeline-vertical",
    description: "垂直方向排列的时间轴。",
    isCategoryStart: true,
  },
  {
    category: "方向变体",
    className: "timeline-horizontal",
    description: "水平方向排列的时间轴（默认）。",
    isCategoryStart: false,
  },
  {
    category: "配色变体",
    className: "timeline-primary",
    description: "使用主色调的时间轴样式。",
    isCategoryStart: true,
  },
  {
    category: "配色变体",
    className: "timeline-secondary",
    description: "使用次色调的时间轴样式。",
    isCategoryStart: false,
  },
  {
    category: "配色变体",
    className: "timeline-accent",
    description: "强调色样式的时间轴。",
    isCategoryStart: false,
  },
  {
    category: "配色变体",
    className: "timeline-muted",
    description: "低饱和度样式的时间轴。",
    isCategoryStart: false,
  },
  {
    category: "尺寸变体",
    className: "timeline-sm",
    description: "小尺寸时间轴。",
    isCategoryStart: true,
  },
  {
    category: "尺寸变体",
    className: "timeline-lg",
    description: "大尺寸时间轴。",
    isCategoryStart: false,
  },
  {
    category: "样式变体",
    className: "timeline-line-dashed",
    description: "使用虚线连接线。",
    isCategoryStart: true,
  },
  {
    category: "样式变体",
    className: "timeline-line-dotted",
    description: "使用点状连接线。",
    isCategoryStart: false,
  },
  {
    category: "样式变体",
    className: "timeline-rounded",
    description: "连接线带圆角端点。",
    isCategoryStart: false,
  },
  {
    category: "特殊模式",
    className: "timeline-compact",
    description: "紧凑型布局，减少上下间距。",
    isCategoryStart: true,
  },
  {
    category: "特殊模式",
    className: "timeline-animated",
    description: "节点淡入动画。",
    isCategoryStart: false,
  },
  {
    category: "特殊模式",
    className: "timeline-alternate",
    description: "交替排列布局（仅垂直）。",
    isCategoryStart: false,
  },
];
</script>

<template>
  <DocsContainer>
    <DocsHeader
      title="Timeline 时间轴"
      description="用于展示事件、流程或任务的时间顺序组件。支持水平 / 垂直、颜色变体、紧凑模式等多种样式。"
    />

    <ApiReference :data="apiClasses" />

    <!-- 示例1: 基础水平时间线 -->
    <section>
      <h2 class="text-2xl font-bold mb-6">基础水平时间线</h2>
      <div
        class="timeline timeline-horizontal bg-card p-8 rounded-lg shadow-sm"
      >
        <div class="timeline-item">
          <div class="timeline-line bg-gray-300"></div>
          <div class="timeline-start">
            <div
              class="timeline-box bg-card border rounded-lg px-4 py-3 text-sm"
            >
              <div class="font-semibold">项目启动</div>
              <div class="text-xs mt-1">2024年1月</div>
            </div>
          </div>
          <div class="timeline-middle">
            <div
              class="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center shadow-sm"
            >
              1
            </div>
          </div>
          <div class="timeline-line bg-gray-300"></div>
        </div>

        <div class="timeline-item">
          <div class="timeline-line bg-gray-300"></div>
          <div class="timeline-start">
            <div
              class="timeline-box bg-card border rounded-lg px-4 py-3 text-sm"
            >
              <div class="font-semibold">需求分析</div>
              <div class="text-xs mt-1">2024年2月</div>
            </div>
          </div>
          <div class="timeline-middle">
            <div
              class="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center shadow-sm"
            >
              2
            </div>
          </div>
          <div class="timeline-line bg-gray-300"></div>
        </div>

        <div class="timeline-item">
          <div class="timeline-line bg-gray-300"></div>
          <div class="timeline-start">
            <div
              class="timeline-box bg-card border rounded-lg px-4 py-3 text-sm"
            >
              <div class="font-semibold">开发阶段</div>
              <div class="text-xs mt-1">2024年3月</div>
            </div>
          </div>
          <div class="timeline-middle">
            <div
              class="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center shadow-sm"
            >
              3
            </div>
          </div>
          <div class="timeline-line bg-gray-300"></div>
        </div>

        <div class="timeline-item">
          <div class="timeline-line bg-gray-300"></div>
          <div class="timeline-start">
            <div
              class="timeline-box bg-card border rounded-lg px-4 py-3 text-sm"
            >
              <div class="font-semibold">项目上线</div>
              <div class="text-xs mt-1">2024年4月</div>
            </div>
          </div>
          <div class="timeline-middle">
            <div
              class="w-10 h-10 rounded-full bg-green-600 flex items-center justify-center shadow-sm"
            >
              ✓
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 示例2: 垂直时间线 -->
    <section>
      <h2 class="text-2xl font-bold mb-6">垂直时间线</h2>
      <div class="timeline timeline-vertical bg-card p-8 rounded-lg shadow-sm">
        <div class="timeline-item">
          <div class="timeline-line bg-gray-300"></div>
          <div class="timeline-start text-right">
            <div class="text-sm font-semibold">2024年1月15日</div>
            <div class="text-xs">上午 9:00</div>
          </div>
          <div class="timeline-middle">
            <div
              class="w-3 h-3 rounded-full bg-blue-600"
              style="
                box-shadow:
                  0 0 0 4px white,
                  0 0 0 6px #e5e7eb;
              "
            ></div>
          </div>
          <div class="timeline-end">
            <div
              class="timeline-box bg-card border rounded-lg px-4 py-3 text-sm max-w-md hover:shadow-md transition-shadow"
            >
              <div class="font-semibold mb-1">会议开始</div>
              <div class="">
                团队进行了项目启动会议，讨论了项目目标和时间规划。
              </div>
            </div>
          </div>
          <div class="timeline-line bg-gray-300"></div>
        </div>

        <div class="timeline-item">
          <div class="timeline-line bg-gray-300"></div>
          <div class="timeline-start text-right">
            <div class="text-sm font-semibold">2024年2月10日</div>
            <div class="text-xs">下午 2:30</div>
          </div>
          <div class="timeline-middle">
            <div
              class="w-3 h-3 rounded-full bg-blue-600"
              style="
                box-shadow:
                  0 0 0 4px white,
                  0 0 0 6px #e5e7eb;
              "
            ></div>
          </div>
          <div class="timeline-end">
            <div
              class="timeline-box bg-card border rounded-lg px-4 py-3 text-sm max-w-md hover:shadow-md transition-shadow"
            >
              <div class="font-semibold mb-1">设计评审</div>
              <div class="">
                完成了UI设计评审，所有利益相关者都批准了设计方案。
              </div>
            </div>
          </div>
          <div class="timeline-line bg-gray-300"></div>
        </div>

        <div class="timeline-item">
          <div class="timeline-line bg-gray-300"></div>
          <div class="timeline-start text-right">
            <div class="text-sm font-semibold">2024年3月20日</div>
            <div class="text-xs">全天</div>
          </div>
          <div class="timeline-middle">
            <div
              class="w-3 h-3 rounded-full bg-blue-600"
              style="
                box-shadow:
                  0 0 0 4px white,
                  0 0 0 6px #e5e7eb;
              "
            ></div>
          </div>
          <div class="timeline-end">
            <div
              class="timeline-box bg-card border rounded-lg px-4 py-3 text-sm max-w-md hover:shadow-md transition-shadow"
            >
              <div class="font-semibold mb-1">功能开发</div>
              <div class="">核心功能开发完成，通过了内部测试。</div>
            </div>
          </div>
          <div class="timeline-line bg-gray-300"></div>
        </div>

        <div class="timeline-item">
          <div class="timeline-line bg-gray-300"></div>
          <div class="timeline-start text-right">
            <div class="text-sm font-semibold">2024年4月5日</div>
            <div class="text-xs">上午 10:00</div>
          </div>
          <div class="timeline-middle">
            <div
              class="w-3 h-3 rounded-full bg-green-600"
              style="
                box-shadow:
                  0 0 0 4px white,
                  0 0 0 6px #e5e7eb;
              "
            ></div>
          </div>
          <div class="timeline-end">
            <div
              class="timeline-box bg-card border border-green-200 rounded-lg px-4 py-3 text-sm max-w-md hover:shadow-md transition-shadow"
            >
              <div class="font-semibold text-green-800 mb-1">项目上线 🎉</div>
              <div class="">项目成功上线，所有功能运行正常。</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 示例3: 带图标的时间线 -->
    <section>
      <h2 class="text-2xl font-bold mb-6">带图标的垂直时间线</h2>
      <div class="timeline timeline-vertical bg-card p-8 rounded-lg shadow-sm">
        <div class="timeline-item">
          <div class="timeline-line bg-blue-200"></div>
          <div class="timeline-middle">
            <div
              class="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center shadow-sm"
            >
              <svg
                class="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                ></path>
              </svg>
            </div>
          </div>
          <div class="timeline-end">
            <div
              class="timeline-box bg-card border border-blue-200 rounded-lg px-4 py-3 text-sm max-w-md"
            >
              <div class="font-semibold mb-1">创建账户</div>
              <div class="text-xs">欢迎加入我们的平台！</div>
              <div class="text-xs mt-2">刚刚</div>
            </div>
          </div>
          <div class="timeline-line bg-blue-200"></div>
        </div>

        <div class="timeline-item">
          <div class="timeline-line bg-purple-200"></div>
          <div class="timeline-middle">
            <div
              class="w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center shadow-sm"
            >
              <svg
                class="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
            </div>
          </div>
          <div class="timeline-end">
            <div
              class="timeline-box bg-card border border-purple-200 rounded-lg px-4 py-3 text-sm max-w-md"
            >
              <div class="font-semibold mb-1">邮箱验证</div>
              <div class="text-xs">您的邮箱已成功验证</div>
              <div class="text-xs mt-2">5分钟前</div>
            </div>
          </div>
          <div class="timeline-line bg-purple-200"></div>
        </div>

        <div class="timeline-item">
          <div class="timeline-line bg-green-200"></div>
          <div class="timeline-middle">
            <div
              class="w-10 h-10 rounded-full bg-green-600 flex items-center justify-center shadow-sm"
            >
              <svg
                class="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
            </div>
          </div>
          <div class="timeline-end">
            <div
              class="timeline-box bg-card border border-green-200 rounded-lg px-4 py-3 text-sm max-w-md"
            >
              <div class="font-semibold mb-1">完成设置</div>
              <div class="text-xs">所有初始设置已完成</div>
              <div class="text-xs mt-2">10分钟前</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 示例4: 紧凑模式 -->
    <section>
      <h2 class="text-2xl font-bold mb-6">紧凑垂直时间线</h2>
      <div class="timeline timeline-vertical bg-card p-8 rounded-lg shadow-sm">
        <div
          class="timeline-item"
          style="grid-template-rows: 0 auto minmax(0, 1fr)"
        >
          <div class="timeline-line bg-gray-300"></div>
          <div class="timeline-middle">
            <div
              class="w-3 h-3 rounded-full bg-blue-600"
              style="
                box-shadow:
                  0 0 0 4px white,
                  0 0 0 6px #e5e7eb;
              "
            ></div>
          </div>
          <div class="timeline-end" style="margin-top: 0; align-self: center">
            <div class="text-sm font-medium">用户登录</div>
            <div class="text-xs">2分钟前</div>
          </div>
          <div class="timeline-line bg-gray-300"></div>
        </div>

        <div
          class="timeline-item"
          style="grid-template-rows: 0 auto minmax(0, 1fr)"
        >
          <div class="timeline-line bg-gray-300"></div>
          <div class="timeline-middle">
            <div
              class="w-3 h-3 rounded-full bg-blue-600"
              style="
                box-shadow:
                  0 0 0 4px white,
                  0 0 0 6px #e5e7eb;
              "
            ></div>
          </div>
          <div class="timeline-end" style="margin-top: 0; align-self: center">
            <div class="text-sm font-medium">浏览产品页面</div>
            <div class="text-xs">5分钟前</div>
          </div>
          <div class="timeline-line bg-gray-300"></div>
        </div>

        <div
          class="timeline-item"
          style="grid-template-rows: 0 auto minmax(0, 1fr)"
        >
          <div class="timeline-line bg-gray-300"></div>
          <div class="timeline-middle">
            <div
              class="w-3 h-3 rounded-full bg-green-600"
              style="
                box-shadow:
                  0 0 0 4px white,
                  0 0 0 6px #e5e7eb;
              "
            ></div>
          </div>
          <div class="timeline-end" style="margin-top: 0; align-self: center">
            <div class="text-sm font-medium">完成购买</div>
            <div class="text-xs">10分钟前</div>
          </div>
          <div class="timeline-line bg-gray-300"></div>
        </div>

        <div
          class="timeline-item"
          style="grid-template-rows: 0 auto minmax(0, 1fr)"
        >
          <div class="timeline-line bg-gray-300"></div>
          <div class="timeline-middle">
            <div
              class="w-3 h-3 rounded-full bg-gray-400"
              style="
                box-shadow:
                  0 0 0 4px white,
                  0 0 0 6px #e5e7eb;
              "
            ></div>
          </div>
          <div class="timeline-end" style="margin-top: 0; align-self: center">
            <div class="text-sm font-medium">退出登录</div>
            <div class="text-xs">15分钟前</div>
          </div>
        </div>
      </div>
    </section>

    <!-- 示例5: 虚线样式 -->
    <section>
      <h2 class="text-2xl font-bold mb-6">虚线连接时间线</h2>
      <div class="timeline timeline-vertical bg-card p-8 rounded-lg shadow-sm">
        <div class="timeline-item">
          <div
            class="timeline-line bg-transparent border-l-2 border-dashed border-gray-400"
          ></div>
          <div class="timeline-middle">
            <div
              class="w-10 h-10 rounded-full bg-amber-500 flex items-center justify-center shadow-sm font-bold"
            >
              1
            </div>
          </div>
          <div class="timeline-end">
            <div
              class="timeline-box bg-amber-50 border border-amber-200 rounded-lg px-4 py-3 text-sm max-w-md"
            >
              <div class="font-semibold text-amber-900 mb-1">规划阶段</div>
              <div class="text-amber-800 text-xs">制定项目计划和目标</div>
            </div>
          </div>
          <div
            class="timeline-line bg-transparent border-l-2 border-dashed border-gray-400"
          ></div>
        </div>

        <div class="timeline-item">
          <div
            class="timeline-line bg-transparent border-l-2 border-dashed border-gray-400"
          ></div>
          <div class="timeline-middle">
            <div
              class="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center shadow-sm font-bold"
            >
              2
            </div>
          </div>
          <div class="timeline-end">
            <div
              class="timeline-box bg-blue-50 border border-blue-200 rounded-lg px-4 py-3 text-sm max-w-md"
            >
              <div class="font-semibold text-blue-900 mb-1">执行阶段</div>
              <div class="text-blue-800 text-xs">实施项目计划</div>
            </div>
          </div>
          <div
            class="timeline-line bg-transparent border-l-2 border-dashed border-gray-400"
          ></div>
        </div>

        <div class="timeline-item">
          <div
            class="timeline-line bg-transparent border-l-2 border-dashed border-gray-400"
          ></div>
          <div class="timeline-middle">
            <div
              class="w-10 h-10 rounded-full bg-purple-500 flex items-center justify-center shadow-sm font-bold"
            >
              3
            </div>
          </div>
          <div class="timeline-end">
            <div
              class="timeline-box bg-purple-50 border border-purple-200 rounded-lg px-4 py-3 text-sm max-w-md"
            >
              <div class="font-semibold text-purple-900 mb-1">监控阶段</div>
              <div class="text-purple-800 text-xs">跟踪项目进度</div>
            </div>
          </div>
          <div
            class="timeline-line bg-transparent border-l-2 border-dashed border-gray-400"
          ></div>
        </div>

        <div class="timeline-item">
          <div
            class="timeline-line bg-transparent border-l-2 border-dashed border-gray-400"
          ></div>
          <div class="timeline-middle">
            <div
              class="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center shadow-sm font-bold"
            >
              4
            </div>
          </div>
          <div class="timeline-end">
            <div
              class="timeline-box bg-green-50 border border-green-200 rounded-lg px-4 py-3 text-sm max-w-md"
            >
              <div class="font-semibold text-green-900 mb-1">收尾阶段</div>
              <div class="text-green-800 text-xs">完成项目交付</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 示例6: 小尺寸时间线 -->
    <section>
      <h2 class="text-2xl font-bold mb-6">小尺寸时间线</h2>
      <div class="timeline timeline-vertical bg-card p-8 rounded-lg shadow-sm">
        <div class="timeline-item">
          <div class="timeline-line bg-gray-300"></div>
          <div class="timeline-middle">
            <div
              class="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center shadow-sm text-xs"
            >
              <svg
                class="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 4v16m8-8H4"
                ></path>
              </svg>
            </div>
          </div>
          <div class="timeline-end">
            <div
              class="timeline-box bg-card border rounded-lg px-3 py-2 text-xs max-w-md"
            >
              <div class="font-semibold">任务创建</div>
              <div class="mt-0.5">新任务已添加到项目</div>
            </div>
          </div>
          <div class="timeline-line bg-gray-300"></div>
        </div>

        <div class="timeline-item">
          <div class="timeline-line bg-gray-300"></div>
          <div class="timeline-middle">
            <div
              class="w-8 h-8 rounded-full bg-yellow-500 flex items-center justify-center shadow-sm text-xs"
            >
              <svg
                class="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
            </div>
          </div>
          <div class="timeline-end">
            <div
              class="timeline-box bg-card border rounded-lg px-3 py-2 text-xs max-w-md"
            >
              <div class="font-semibold">进行中</div>
              <div class="mt-0.5">团队正在处理任务</div>
            </div>
          </div>
          <div class="timeline-line bg-gray-300"></div>
        </div>

        <div class="timeline-item">
          <div class="timeline-line bg-gray-300"></div>
          <div class="timeline-middle">
            <div
              class="w-8 h-8 rounded-full bg-green-600 flex items-center justify-center shadow-sm text-xs"
            >
              <svg
                class="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
            </div>
          </div>
          <div class="timeline-end">
            <div
              class="timeline-box bg-card border rounded-lg px-3 py-2 text-xs max-w-md"
            >
              <div class="font-semibold">已完成</div>
              <div class="mt-0.5">任务成功完成</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </DocsContainer>
</template>
