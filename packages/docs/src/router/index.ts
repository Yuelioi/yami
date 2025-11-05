// router/index.ts

import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import SettingsView from '@/components/SettingsView.vue'

// 导入所有的组件示例
import VTest from '@/components/VTest.vue'

// actions
import ButtonExample from '@/components/actions/ButtonExample.vue'
import FabExample from '@/components/actions/FabExample.vue'
import DropdownExample from '@/components/actions/DropdownExample.vue'
import ModalExample from '@/components/actions/ModalExample.vue'
import SwapExample from '@/components/actions/SwapExample.vue'

// data
import AccordionExample from '@/components/data/AccordionExample.vue'
import AvatarExample from '@/components/data/AvatarExample.vue'
import ChatExample from '@/components/data/ChatExample.vue'
import BadgeExample from '@/components/data/BadgeExample.vue'
import CardExample from '@/components/data/CardExample.vue'
import CarouselExample from '@/components/data/CarouselExample.vue'
import CollapseExample from '@/components/data/CollapseExample.vue'
import KbdExample from '@/components/data/KbdExample.vue'
import ListExample from '@/components/data/ListExample.vue'
import StatExample from '@/components/data/StatExample.vue'
import TableExample from '@/components/data/TableExample.vue'
import TimelineExample from '@/components/data/TimelineExample.vue'

// feedback
import AlertExample from '@/components/feedback/AlertExample.vue'
import HoverCardExample from '@/components/feedback/HoverCardExample.vue'
import ProgressExample from '@/components/feedback/ProgressExample.vue'
import SkeletonExample from '@/components/feedback/SkeletonExample.vue'
import ToastExample from '@/components/feedback/ToastExample.vue'
import TooltipFeedbackExample from '@/components/feedback/TooltipExample.vue'

// form
import CalendarExample from '@/components/form/CalendarExample.vue'
import CheckboxExample from '@/components/form/CheckboxExample.vue'
import FieldsetExample from '@/components/form/FieldsetExample.vue'
import FileExample from '@/components/form/FileExample.vue'
import FilterExample from '@/components/form/FilterExample.vue'
import InputExample from '@/components/form/InputExample.vue'
import LabelExample from '@/components/form/LabelExample.vue'
import NumberExample from '@/components/form/NumberExample.vue'
import RadioExample from '@/components/form/RadioExample.vue'
import RangeExample from '@/components/form/RangeExample.vue'
import RatingExample from '@/components/form/RatingExample.vue'
import SelectExample from '@/components/form/SelectExample.vue'
import TextareaExample from '@/components/form/TextareaExample.vue'
import ToggleExample from '@/components/form/ToggleExample.vue'
import ValidatorExample from '@/components/form/ValidatorExample.vue'

// layout
import DividerExample from '@/components/layout/DividerExample.vue'
import DockExample from '@/components/navigation/DockExample.vue'
import DrawerExample from '@/components/layout/DrawerExample.vue'
import GridExample from '@/components/layout/GridExample.vue'
import PanelExample from '@/components/layout/PanelExample.vue'

// navigation
import BreadcrumbExample from '@/components/navigation/BreadcrumbExample.vue'
import MenuExample from '@/components/navigation/MenuExample.vue'
import NavbarExample from '@/components/navigation/NavbarExample.vue'
import PaginationExample from '@/components/navigation/PaginationExample.vue'
import TabExample from '@/components/navigation/TabExample.vue'

/* ------------------ 组件映射（用于动态创建路由） ------------------ */
const componentMap: Record<string, any> = {
  test: VTest,

  // actions
  button: ButtonExample,
  fab: FabExample,
  dropdown: DropdownExample,
  modal: ModalExample,
  swap: SwapExample,

  // data
  accordion: AccordionExample,
  avatar: AvatarExample,
  badge: BadgeExample,
  card: CardExample,
  carousel: CarouselExample,
  chat: ChatExample,
  collapse: CollapseExample,
  kbd: KbdExample,
  list: ListExample,
  stat: StatExample,
  table: TableExample,
  timeline: TimelineExample,

  // feedback
  alert: AlertExample,
  hoverCard: HoverCardExample,
  progress: ProgressExample,
  skeleton: SkeletonExample,
  toast: ToastExample,
  tooltipFeedback: TooltipFeedbackExample,

  // form
  calendar: CalendarExample,
  checkbox: CheckboxExample,
  fieldset: FieldsetExample,
  file: FileExample,
  filter: FilterExample,
  input: InputExample,
  label: LabelExample,
  number: NumberExample,
  radio: RadioExample,
  range: RangeExample,
  rating: RatingExample,
  select: SelectExample,
  textarea: TextareaExample,
  toggle: ToggleExample,
  validator: ValidatorExample,

  // layout
  divider: DividerExample,
  drawer: DrawerExample,
  grid: GridExample,
  panel: PanelExample,

  // navigation
  breadcrumb: BreadcrumbExample,
  dock: DockExample,
  menu: MenuExample,
  navbar: NavbarExample,
  pagination: PaginationExample,
  tab: TabExample,
}

/* ------------------ 左侧菜单数据（在 App.vue 中仍需要） ------------------ */
export type TabItem = {
  label: string
  value: string // 对应路由的 name/path
  group: string
}

export const tabs: TabItem[] = [
  // actions
  { label: 'Button 按钮', value: 'button', group: '操作组件' },
  { label: 'Fab 悬浮按钮', value: 'fab', group: '操作组件' },
  { label: 'Dropdown 下拉菜单', value: 'dropdown', group: '操作组件' },
  { label: 'Modal 模态框', value: 'modal', group: '操作组件' },
  { label: 'Swap 交换', value: 'swap', group: '操作组件' },

  // feedback
  { label: 'Alert 警告', value: 'alert', group: '反馈组件' },
  { label: 'Hover Card 悬停卡片', value: 'hoverCard', group: '反馈组件' },
  { label: 'Progress 进度条', value: 'progress', group: '反馈组件' },
  { label: 'Skeleton 骨架屏', value: 'skeleton', group: '反馈组件' },
  { label: 'Toast 提示框', value: 'toast', group: '反馈组件' },
  {
    label: 'Tooltip 提示（Feedback）',
    value: 'tooltipFeedback',
    group: '反馈组件',
  },

  // data
  { label: 'Accordion 手风琴', value: 'accordion', group: '数据展示' },
  { label: 'Avatar 头像', value: 'avatar', group: '数据展示' },
  { label: 'Badge 徽章', value: 'badge', group: '数据展示' },
  { label: 'Card 卡片', value: 'card', group: '数据展示' },
  { label: 'Carousel 轮播图', value: 'carousel', group: '数据展示' },
  { label: 'Chat 聊体', value: 'chat', group: '数据展示' },
  { label: 'Collapse 折叠面板', value: 'collapse', group: '数据展示' },
  { label: 'Kbd 按键', value: 'kbd', group: '数据展示' },
  { label: 'List 列表', value: 'list', group: '数据展示' },
  { label: 'Stat', value: 'stat', group: '数据展示' },
  { label: 'Table 表格', value: 'table', group: '数据展示' },
  { label: 'Timeline 时间轴', value: 'timeline', group: '数据展示' },

  // form
  { label: 'Calendar 日历', value: 'calendar', group: '表单组件' },
  { label: 'Checkbox 复选框', value: 'checkbox', group: '表单组件' },
  { label: 'Fieldset 字段集', value: 'fieldset', group: '表单组件' },
  { label: 'File 文件上传', value: 'file', group: '表单组件' },
  { label: 'Filter 筛选器', value: 'filter', group: '表单组件' },
  { label: 'Input 输入框', value: 'input', group: '表单组件' },
  { label: 'Label 标签', value: 'label', group: '表单组件' },
  { label: 'Number 数字输入框', value: 'number', group: '表单组件' },
  { label: 'Radio 单选框', value: 'radio', group: '表单组件' },
  { label: 'Range 滑块', value: 'range', group: '表单组件' },
  { label: 'Rating 评分', value: 'rating', group: '表单组件' },
  { label: 'Select 选择框', value: 'select', group: '表单组件' },
  { label: 'Textarea 文本域', value: 'textarea', group: '表单组件' },
  { label: 'Toggle 开关', value: 'toggle', group: '表单组件' },
  { label: 'Validator 校验器', value: 'validator', group: '表单组件' },

  // layout
  { label: 'Divider 分割线', value: 'divider', group: '布局组件' },
  { label: 'Drawer 抽屉', value: 'drawer', group: '布局组件' },
  { label: 'Grid 网格', value: 'grid', group: '布局组件' },
  { label: 'Panel 面板', value: 'panel', group: '布局组件' },

  // navigation
  { label: 'Breadcrumb 面包屑', value: 'breadcrumb', group: '导航组件' },
  { label: 'Dock 侧边栏', value: 'dock', group: '导航组件' },
  { label: 'Menu 菜单', value: 'menu', group: '导航组件' },
  { label: 'Navbar 导航栏', value: 'navbar', group: '导航组件' },
  { label: 'Pagination 分页', value: 'pagination', group: '导航组件' },
  { label: 'Tab 选项卡', value: 'tab', group: '导航组件' },
]

/* ------------------ 动态创建子路由 ------------------ */
const componentRoutes: RouteRecordRaw[] = tabs.map((item) => ({
  path: item.value,
  name: item.value,
  component: componentMap[item.value] || VTest, // 确保每个都有组件，或者回退
  meta: { label: item.label, group: item.group },
}))

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Layout',

    children: [
      ...componentRoutes, // 所有的组件示例作为子路由
      {
        path: '',
        name: 'default',
        redirect: '/button', // 默认重定向到第一个组件（例如 Button）
      },
      {
        path: 'setting',
        name: 'setting',
        component: SettingsView,
        meta: { label: '设置', group: '其他' },
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
