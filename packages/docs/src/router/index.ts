// router/index.ts
import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'

// components (A-Z)
import AccordionExample from '@/components/AccordionExample.vue'
import AdvancedSelectExample from '@/components/AdvancedSelectExample.vue'
import AlertExample from '@/components/AlertExample.vue'
import AvatarExample from '@/components/AvatarExample.vue'
import BadgeExample from '@/components/BadgeExample.vue'
import BreadcrumbExample from '@/components/BreadcrumbExample.vue'
import ButtonExample from '@/components/ButtonExample.vue'
import CardExample from '@/components/CardExample.vue'
import CarouselExample from '@/components/CarouselExample.vue'
import ChatExample from '@/components/ChatExample.vue'
import CheckboxExample from '@/components/CheckboxExample.vue'
import CollapseExample from '@/components/CollapseExample.vue'
import CustomOption from '@/components/CustomOption.vue'
import DiffExample from '@/components/DiffExample.vue'
import DividerExample from '@/components/DividerExample.vue'
import DockExample from '@/components/DockExample.vue'
import DrawerExample from '@/components/DrawerExample.vue'
import DropdownExample from '@/components/DropdownExample.vue'
import FabExample from '@/components/FabExample.vue'
import FieldsetExample from '@/components/FieldsetExample.vue'
import FileExample from '@/components/FileExample.vue'
import FilterExample from '@/components/FilterExample.vue'
import GridExample from '@/components/GridExample.vue'
import HoverCardExample from '@/components/HoverCardExample.vue'
import IndicatorExample from '@/components/IndicatorExample.vue'
import InputExample from '@/components/InputExample.vue'
import KbdExample from '@/components/KbdExample.vue'
import LabelExample from '@/components/LabelExample.vue'
import LinkExample from '@/components/LinkExample.vue'
import ListExample from '@/components/ListExample.vue'
import LoadingExample from '@/components/LoadingExample.vue'
import MaskExample from '@/components/MaskExample.vue'
import MenuExample from '@/components/MenuExample.vue'
import ModalExample from '@/components/ModalExample.vue'
import MockupExample from '@/components/MockupExample.vue'
import NavbarExample from '@/components/NavbarExample.vue'
import NumberExample from '@/components/NumberExample.vue'
import PaginationExample from '@/components/PaginationExample.vue'
import PanelExample from '@/components/PanelExample.vue'
import PinInputExample from '@/components/PinInputExample.vue'
import ProgressExample from '@/components/ProgressExample.vue'
import RadialProgressExample from '@/components/RadialProgressExample.vue'
import RadioExample from '@/components/RadioExample.vue'
import RangeExample from '@/components/RangeExample.vue'
import RatingExample from '@/components/RatingExample.vue'
import SelectExample from '@/components/SelectExample.vue'
import SelectCheckbox from '@/components/SelectCheckbox.vue'
import SkeletonExample from '@/components/SkeletonExample.vue'
import StatExample from '@/components/StatExample.vue'
import StatusExample from '@/components/StatusExample.vue'
import SwapExample from '@/components/SwapExample.vue'
import TabExample from '@/components/TabExample.vue'
import TableExample from '@/components/TableExample.vue'
import TextareaExample from '@/components/TextareaExample.vue'
import TimelineExample from '@/components/TimelineExample.vue'
import ToastExample from '@/components/ToastExample.vue'
import ToggleExample from '@/components/ToggleExample.vue'
import TooltipFeedbackExample from '@/components/TooltipExample.vue'
import ValidatorExample from '@/components/ValidatorExample.vue'
import VTest from '@/components/VTest.vue'
import SwitchesExample from '@/components/SwitchesExample.vue'
import SettingsView from '@/components/SettingsView.vue'

/* ------------------ 组件映射（A-Z） ------------------ */
const componentMap: Record<string, any> = {
  accordion: AccordionExample,
  advancedSelect: AdvancedSelectExample,
  alert: AlertExample,
  avatar: AvatarExample,
  badge: BadgeExample,
  breadcrumb: BreadcrumbExample,
  button: ButtonExample,
  card: CardExample,
  carousel: CarouselExample,
  chat: ChatExample,
  checkbox: CheckboxExample,
  collapse: CollapseExample,
  customOption: CustomOption,
  diff: DiffExample,
  divider: DividerExample,
  dock: DockExample,
  drawer: DrawerExample,
  dropdown: DropdownExample,
  fab: FabExample,
  fieldset: FieldsetExample,
  file: FileExample,
  filter: FilterExample,
  grid: GridExample,
  hoverCard: HoverCardExample,
  indicator: IndicatorExample,
  input: InputExample,
  kbd: KbdExample,
  label: LabelExample,
  link: LinkExample,
  list: ListExample,
  loading: LoadingExample,
  mask: MaskExample,
  menu: MenuExample,
  modal: ModalExample,
  mockup: MockupExample,
  navbar: NavbarExample,
  number: NumberExample,
  pagination: PaginationExample,
  panel: PanelExample,
  pinInput: PinInputExample,
  progress: ProgressExample,
  radialProgress: RadialProgressExample,
  radio: RadioExample,
  range: RangeExample,
  rating: RatingExample,
  select: SelectExample,
  selectCheckbox: SelectCheckbox,
  skeleton: SkeletonExample,
  stat: StatExample,
  status: StatusExample,
  swap: SwapExample,
  switches: SwitchesExample,
  tab: TabExample,
  table: TableExample,
  test: VTest,
  textarea: TextareaExample,
  timeline: TimelineExample,
  toast: ToastExample,
  toggle: ToggleExample,
  tooltipFeedback: TooltipFeedbackExample,
  validator: ValidatorExample,
}

/* ------------------ 左侧菜单数据（在 App.vue 中仍需要） ------------------ */
export type TabItem = {
  label: string
  value: string // 对应路由的 name/path
  group: string
}

export const tabs: TabItem[] = [
  // actions
  { label: 'Button 按钮 √', value: 'button', group: '操作组件' },
  { label: 'Fab 悬浮按钮 √', value: 'fab', group: '操作组件' },
  { label: 'Dropdown 下拉菜单 √', value: 'dropdown', group: '操作组件' },
  { label: 'Modal 模态框 √', value: 'modal', group: '操作组件' },
  { label: 'Swap 交换 √', value: 'swap', group: '操作组件' },

  // feedback
  { label: 'Alert 警告 √', value: 'alert', group: '反馈组件' },
  { label: 'Hover Card 悬停卡片', value: 'hoverCard', group: '反馈组件' },
  { label: 'Loading √', value: 'loading', group: '反馈组件' },
  { label: 'Progress 进度条 √', value: 'progress', group: '反馈组件' },
  { label: 'Radial Progress 进度条 √', value: 'radialProgress', group: '反馈组件' },
  { label: 'Skeleton 骨架屏 √', value: 'skeleton', group: '反馈组件' },
  { label: 'status √', value: 'status', group: '反馈组件' },
  { label: 'Toast 提示框 √', value: 'toast', group: '反馈组件' },
  {
    label: 'Tooltip 提示 √',
    value: 'tooltipFeedback',
    group: '反馈组件',
  },

  // data
  { label: 'Accordion 手风琴 √', value: 'accordion', group: '数据展示' },
  { label: 'Avatar 头像 √', value: 'avatar', group: '数据展示' },
  { label: 'Badge 徽章 √', value: 'badge', group: '数据展示' },
  { label: 'Card 卡片 √', value: 'card', group: '数据展示' },
  { label: 'Carousel 轮播图', value: 'carousel', group: '数据展示' },
  { label: 'Chat 聊天 √', value: 'chat', group: '数据展示' },
  { label: 'Collapse 折叠面板', value: 'collapse', group: '数据展示' },
  { label: 'DIFF 对比 √', value: 'diff', group: '数据展示' },
  { label: 'Kbd 按键 √', value: 'kbd', group: '数据展示' },
  { label: 'List 列表 √', value: 'list', group: '数据展示' },
  { label: 'Mockup √', value: 'mockup', group: '数据展示' },
  { label: 'Stat √', value: 'stat', group: '数据展示' },
  { label: 'Table 表格 √', value: 'table', group: '数据展示' },
  { label: 'Timeline √', value: 'timeline', group: '数据展示' },

  // form
  { label: 'advancedSelect', value: 'advancedSelect', group: '表单组件' },
  { label: 'Checkbox 复选框 √', value: 'checkbox', group: '表单组件' },
  { label: 'CustomOption √', value: 'customOption', group: '表单组件' },
  { label: 'Fieldset 字段集', value: 'fieldset', group: '表单组件' },
  { label: 'File 文件上传 √', value: 'file', group: '表单组件' },
  { label: 'Filter 筛选器 √', value: 'filter', group: '表单组件' },
  { label: 'Input √', value: 'input', group: '表单组件' },
  { label: 'Label 标签 √', value: 'label', group: '表单组件' },
  { label: 'Number 数字输入框', value: 'number', group: '表单组件' },
  { label: 'Pin Input √', value: 'pinInput', group: '表单组件' },
  { label: 'Radio 单选框 √', value: 'radio', group: '表单组件' },
  { label: 'Range 滑块 √', value: 'range', group: '表单组件' },
  { label: 'Rating 评分 √', value: 'rating', group: '表单组件' },
  { label: 'Select 选择框 √', value: 'select', group: '表单组件' },
  { label: 'Select Checkbox 多选框', value: 'selectCheckbox', group: '表单组件' },
  { label: 'Switches √', value: 'switches', group: '表单组件' },
  { label: 'Textarea 文本域 √', value: 'textarea', group: '表单组件' },
  { label: 'Toggle 开关 √', value: 'toggle', group: '表单组件' },
  { label: 'Validator 校验器 √', value: 'validator', group: '表单组件' },

  // layout
  { label: 'Divider 分割线 √', value: 'divider', group: '布局组件' },
  { label: 'Drawer 抽屉 √', value: 'drawer', group: '布局组件' },
  { label: 'Grid 网格', value: 'grid', group: '布局组件' },
  { label: 'Indicator √', value: 'indicator', group: '布局组件' },
  { label: 'Link √', value: 'link', group: '布局组件' },
  { label: 'Mask √', value: 'mask', group: '布局组件' },
  { label: 'Panel 面板', value: 'panel', group: '布局组件' },

  // navigation
  { label: 'Breadcrumb 面包屑 √', value: 'breadcrumb', group: '导航组件' },
  { label: 'Dock 侧边栏 √', value: 'dock', group: '导航组件' },
  { label: 'Menu 菜单 √', value: 'menu', group: '导航组件' },
  { label: 'Navbar 导航栏 √', value: 'navbar', group: '导航组件' },
  { label: 'Pagination 分页 √', value: 'pagination', group: '导航组件' },
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
