<script setup lang="ts">
import DocsHeader from '@/components/zcomp/DocsHeader.vue'
import DocsSection from '@/components/zcomp/DocsSection.vue'
import ApiReference from '@/components/zcomp/ApiReference.vue'
import DocsContainer from '@/components/zcomp/DocsContainer.vue'

const apiClasses = [
  {
    category: '基础',
    className: 'stats',
    description: '统计信息容器',
    isCategoryStart: true,
  },
  {
    category: '基础',
    className: 'stat',
    description: '统计项',
    isCategoryStart: false,
  },
  {
    category: '内容',
    className: 'stat-title',
    description: '统计标题',
    isCategoryStart: false,
  },
  {
    category: '内容',
    className: 'stat-value',
    description: '统计值',
    isCategoryStart: false,
  },
  {
    category: '内容',
    className: 'stat-desc',
    description: '统计描述',
    isCategoryStart: false,
  },
  {
    category: '内容',
    className: 'stat-figure',
    description: '统计图标/图形',
    isCategoryStart: false,
  },
  {
    category: '内容',
    className: 'stat-actions',
    description: '统计操作',
    isCategoryStart: false,
  },
  {
    category: '样式',
    className: 'stats-border',
    description: '带边框',
    isCategoryStart: false,
  },
  {
    category: '方向',
    className: 'stats-horizontal',
    description: '水平布局',
    isCategoryStart: false,
  },
  {
    category: '方向',
    className: 'stats-vertical',
    description: '竖直布局',
    isCategoryStart: false,
  },
]
</script>

<template>
  <DocsContainer>
    <DocsHeader title="Stats" description="统计信息组件，用于展示关键数据和指标。" />

    <ApiReference :data="apiClasses"></ApiReference>

    <DocsSection title="基础统计">
      <div class="stats shadow">
        <div class="stat">
          <div class="stat-title">总下载量</div>
          <div class="stat-value">31K</div>
          <div class="stat-desc">来自今年1月</div>
        </div>

        <div class="stat">
          <div class="stat-title">用户数</div>
          <div class="stat-value">4,200</div>
          <div class="stat-desc">↗︎ 400 (22%)</div>
        </div>

        <div class="stat">
          <div class="stat-title">新用户</div>
          <div class="stat-value">1,200</div>
          <div class="stat-desc">↘︎ 90 (14%)</div>
        </div>
      </div>
    </DocsSection>

    <DocsSection title="带图标的统计">
      <div class="stats shadow">
        <div class="stat">
          <div class="stat-figure">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              class="w-8 h-8 stroke-info"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
          </div>
          <div class="stat-title">页面查看</div>
          <div class="stat-value">89,604</div>
          <div class="stat-desc">21% 比上个月</div>
        </div>

        <div class="stat">
          <div class="stat-figure">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              class="w-8 h-8 stroke-success"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
          </div>
          <div class="stat-title">问卷完成</div>
          <div class="stat-value">4,066</div>
          <div class="stat-desc">↓ 90 (14%)</div>
        </div>

        <div class="stat">
          <div class="stat-figure">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              class="w-8 h-8 stroke-warning"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
          </div>
          <div class="stat-title">销售额</div>
          <div class="stat-value">$93,214.57</div>
          <div class="stat-desc">↗︎ 552 (32%)</div>
        </div>
      </div>
    </DocsSection>

    <DocsSection title="带操作按钮的统计">
      <div class="stats shadow">
        <div class="stat">
          <div class="stat-title">粉丝数</div>
          <div class="stat-value">25.6K</div>
          <div class="stat-desc">8% 增长</div>
          <div class="stat-actions">
            <button class="btn btn-sm">查看</button>
          </div>
        </div>

        <div class="stat">
          <div class="stat-title">访问量</div>
          <div class="stat-value">2.6M</div>
          <div class="stat-desc">↗︎ 14%</div>
          <div class="stat-actions">
            <button class="btn btn-sm">分析</button>
          </div>
        </div>

        <div class="stat">
          <div class="stat-title">点赞数</div>
          <div class="stat-value">573K</div>
          <div class="stat-desc">↘︎ 3%</div>
          <div class="stat-actions">
            <button class="btn btn-sm">详情</button>
          </div>
        </div>
      </div>
    </DocsSection>

    <DocsSection title="带边框的统计">
      <div class="stats stats-border shadow">
        <div class="stat">
          <div class="stat-title">订单数</div>
          <div class="stat-value">156</div>
          <div class="stat-desc">本月新增</div>
        </div>

        <div class="stat">
          <div class="stat-title">营收</div>
          <div class="stat-value">$45,231.89</div>
          <div class="stat-desc">比上月增加</div>
        </div>

        <div class="stat">
          <div class="stat-title">退货率</div>
          <div class="stat-value">2.4%</div>
          <div class="stat-desc">低于行业平均</div>
        </div>
      </div>
    </DocsSection>

    <DocsSection title="竖直布局">
      <div class="stats stats-vertical shadow">
        <div class="stat">
          <div class="stat-title">账户余额</div>
          <div class="stat-value">$89,400.32</div>
          <div class="stat-desc">最后更新：2024年2月</div>
        </div>

        <div class="stat">
          <div class="stat-title">本月支出</div>
          <div class="stat-value">$1,234.56</div>
          <div class="stat-desc">从所有交易</div>
        </div>

        <div class="stat">
          <div class="stat-title">待处理转账</div>
          <div class="stat-value">0</div>
          <div class="stat-desc">所有账户已确认</div>
        </div>
      </div>
    </DocsSection>

    <DocsSection title="仪表板统计">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div class="stats shadow">
          <div class="stat">
            <div class="stat-figure">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                class="w-8 h-8 text-primary"
              >
                <path
                  d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"
                ></path>
              </svg>
            </div>
            <div class="stat-title">平均响应时间</div>
            <div class="stat-value">245ms</div>
            <div class="stat-desc">正常范围</div>
          </div>
        </div>

        <div class="stats shadow">
          <div class="stat">
            <div class="stat-figure">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                class="w-8 h-8 text-success"
              >
                <path
                  d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
                ></path>
              </svg>
            </div>
            <div class="stat-title">可用性</div>
            <div class="stat-value">99.9%</div>
            <div class="stat-desc">过去30天</div>
          </div>
        </div>

        <div class="stats shadow">
          <div class="stat">
            <div class="stat-figure">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                class="w-8 h-8 text-warning"
              >
                <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"></path>
              </svg>
            </div>
            <div class="stat-title">错误率</div>
            <div class="stat-value">0.12%</div>
            <div class="stat-desc">低于阈值</div>
          </div>
        </div>
      </div>
    </DocsSection>

    <DocsSection title="网站统计">
      <div class="stats stats-border shadow">
        <div class="stat">
          <div class="stat-figure">📊</div>
          <div class="stat-title">总访问量</div>
          <div class="stat-value">1.2M</div>
          <div class="stat-desc">去年同期：890K</div>
        </div>

        <div class="stat">
          <div class="stat-figure">👥</div>
          <div class="stat-title">独立访客</div>
          <div class="stat-value">456K</div>
          <div class="stat-desc">新访客占 35%</div>
        </div>

        <div class="stat">
          <div class="stat-figure">⏱️</div>
          <div class="stat-title">平均停留时间</div>
          <div class="stat-value">3:24</div>
          <div class="stat-desc">比上月增加</div>
        </div>

        <div class="stat">
          <div class="stat-figure">📱</div>
          <div class="stat-title">移动端占比</div>
          <div class="stat-value">65%</div>
          <div class="stat-desc">相比桌面端</div>
        </div>
      </div>
    </DocsSection>

    <DocsSection title="销售统计">
      <div class="stats shadow w-full">
        <div class="stat">
          <div class="stat-title">总销售额</div>
          <div class="stat-value">$128,456</div>
          <div class="stat-desc text-success">↗ 28% 同比增长</div>
        </div>

        <div class="stat">
          <div class="stat-title">平均订单值</div>
          <div class="stat-value">$2,145</div>
          <div class="stat-desc">平均</div>
        </div>

        <div class="stat">
          <div class="stat-title">转化率</div>
          <div class="stat-value">3.24%</div>
          <div class="stat-desc text-warning">↘ 1.2% 环比</div>
        </div>
      </div>
    </DocsSection>
  </DocsContainer>
</template>
