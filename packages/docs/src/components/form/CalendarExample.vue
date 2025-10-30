<script setup lang="ts">
import DocsHeader from "../zcomp/DocsHeader.vue";
import ApiReference from "../zcomp/ApiReference.vue";
import DocsContainer from "../zcomp/DocsContainer.vue";
import DocsSection from "../zcomp/DocsSection.vue";

const apiClasses = [
  {
    category: "结构",
    className: "calendar",
    description: "日历组件容器，设置边框、背景和圆角。",
    isCategoryStart: true,
  },
  {
    category: "结构",
    className: "calendar-header",
    description: "头部容器，用于放置标题与导航按钮。",
    isCategoryStart: false,
  },
  {
    category: "结构",
    className: "calendar-title",
    description: "当前月份或标题文字样式。",
    isCategoryStart: false,
  },
  {
    category: "结构",
    className: "calendar-nav",
    description: "导航按钮区域。",
    isCategoryStart: false,
  },
  {
    category: "结构",
    className: "calendar-weekdays",
    description: "星期标题行的容器。",
    isCategoryStart: false,
  },
  {
    category: "结构",
    className: "calendar-weekday",
    description: "单个星期标题单元格。",
    isCategoryStart: false,
  },
  {
    category: "结构",
    className: "calendar-days",
    description: "日期网格容器。",
    isCategoryStart: false,
  },
  {
    category: "结构",
    className: "calendar-day",
    description: "单个日期单元格，支持 hover / focus 状态。",
    isCategoryStart: false,
  },

  {
    category: "状态",
    className: "calendar-day-today",
    description: "当前日期高亮样式。",
    isCategoryStart: true,
  },
  {
    category: "状态",
    className: "calendar-day-selected",
    description: "选中日期样式。",
    isCategoryStart: false,
  },
  {
    category: "状态",
    className: "calendar-day-range-start",
    description: "范围选择起始日期样式。",
    isCategoryStart: false,
  },
  {
    category: "状态",
    className: "calendar-day-range-middle",
    description: "范围选择中间日期样式。",
    isCategoryStart: false,
  },
  {
    category: "状态",
    className: "calendar-day-range-end",
    description: "范围选择结束日期样式。",
    isCategoryStart: false,
  },
  {
    category: "状态",
    className: "calendar-day-outside",
    description: "非当前月的日期样式（灰显）。",
    isCategoryStart: false,
  },
  {
    category: "状态",
    className: "calendar-day-disabled",
    description: "禁用日期样式。",
    isCategoryStart: false,
  },
  {
    category: "状态",
    className: "calendar-day-weekend",
    description: "周末日期样式。",
    isCategoryStart: false,
  },

  {
    category: "模式",
    className: "calendar-day-multiple",
    description: "多选模式下的选中标记。",
    isCategoryStart: true,
  },
  {
    category: "模式",
    className: "calendar-compact",
    description: "紧凑模式，缩小尺寸与间距。",
    isCategoryStart: false,
  },
  {
    category: "模式",
    className: "calendar-lg",
    description: "大尺寸模式，放大所有日期与标题。",
    isCategoryStart: false,
  },

  {
    category: "事件标记",
    className: "calendar-day-event",
    description: "通用事件标记样式。",
    isCategoryStart: true,
  },
  {
    category: "事件标记",
    className: "calendar-day-event-primary",
    description: "主要事件标记。",
    isCategoryStart: false,
  },
  {
    category: "事件标记",
    className: "calendar-day-event-destructive",
    description: "危险事件标记。",
    isCategoryStart: false,
  },

  {
    category: "月份与年份",
    className: "calendar-months",
    description: "月份选择器容器。",
    isCategoryStart: true,
  },
  {
    category: "月份与年份",
    className: "calendar-month",
    description: "月份单元格，支持选中态。",
    isCategoryStart: false,
  },
  {
    category: "月份与年份",
    className: "calendar-years",
    description: "年份选择器容器。",
    isCategoryStart: false,
  },
  {
    category: "月份与年份",
    className: "calendar-year",
    description: "年份单元格，支持选中态。",
    isCategoryStart: false,
  },
];
</script>

<template>
  <DocsContainer>
    <DocsHeader
      title="Calendar 日历"
      description="提供日期、月份与年份选择的日历组件，支持多选、范围与事件标记等状态。"
    />

    <ApiReference :data="apiClasses" />

    <input type="date" class="input" />

    <!-- 基础示例 -->
    <DocsSection title="基础日历">
      <div class="calendar">
        <div class="calendar-header">
          <span class="calendar-title">2025年 10月</span>
          <div class="calendar-nav">
            <button class="btn btn-sm">‹</button>
            <button class="btn btn-sm">›</button>
          </div>
        </div>
        <div class="calendar-weekdays">
          <div class="calendar-weekday">日</div>
          <div class="calendar-weekday">一</div>
          <div class="calendar-weekday">二</div>
          <div class="calendar-weekday">三</div>
          <div class="calendar-weekday">四</div>
          <div class="calendar-weekday">五</div>
          <div class="calendar-weekday">六</div>
        </div>
        <div class="calendar-days">
          <div class="calendar-day calendar-day-outside">29</div>
          <div class="calendar-day calendar-day-outside">30</div>
          <div class="calendar-day calendar-day-today">1</div>
          <div class="calendar-day">2</div>
          <div class="calendar-day calendar-day-selected">3</div>
          <div class="calendar-day">4</div>
          <div class="calendar-day calendar-day-weekend">5</div>
        </div>
      </div>
    </DocsSection>

    <!-- 紧凑模式 -->
    <DocsSection title="紧凑模式">
      <div class="calendar calendar-compact">
        <div class="calendar-header">
          <span class="calendar-title">紧凑模式</span>
        </div>
        <div class="calendar-days">
          <div class="calendar-day">1</div>
          <div class="calendar-day calendar-day-selected">2</div>
          <div class="calendar-day">3</div>
          <div class="calendar-day calendar-day-disabled">4</div>
        </div>
      </div>
    </DocsSection>

    <!-- 大尺寸 -->
    <DocsSection title="大尺寸">
      <div class="calendar calendar-lg">
        <div class="calendar-header">
          <span class="calendar-title">大尺寸</span>
        </div>
        <div class="calendar-days">
          <div class="calendar-day">1</div>
          <div class="calendar-day calendar-day-today">2</div>
          <div class="calendar-day calendar-day-range-start">3</div>
          <div class="calendar-day calendar-day-range-middle">4</div>
          <div class="calendar-day calendar-day-range-end">5</div>
        </div>
      </div>
    </DocsSection>

    <!-- 带事件标记 -->
    <DocsSection title="事件标记">
      <div class="calendar">
        <div class="calendar-days">
          <div class="calendar-day calendar-day-event">6</div>
          <div class="calendar-day calendar-day-event-primary">7</div>
          <div class="calendar-day calendar-day-event-destructive">8</div>
        </div>
      </div>
    </DocsSection>

    <!-- 月份与年份模式 -->
    <DocsSection title="月份与年份选择">
      <div class="flex flex-col w-64">
        <div class="calendar-months">
          <div class="calendar-month">1月</div>
          <div class="calendar-month calendar-month-selected">2月</div>
          <div class="calendar-month">3月</div>
        </div>
        <div class="calendar-years">
          <div class="calendar-year">2024</div>
          <div class="calendar-year calendar-year-selected">2025</div>
          <div class="calendar-year">2026</div>
        </div>
      </div>
    </DocsSection>
  </DocsContainer>
</template>
