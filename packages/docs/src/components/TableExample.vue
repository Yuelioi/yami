<script setup lang="ts">
import DocsHeader from '@/components/zcomp/DocsHeader.vue'
import DocsSection from '@/components/zcomp/DocsSection.vue'
import ApiReference from '@/components/zcomp/ApiReference.vue'
import DocsContainer from '@/components/zcomp/DocsContainer.vue'

const apiClasses = [
  // 基础
  {
    category: '基础',
    className: 'table',
    description: '表格基础样式，包含响应式布局、文本对齐和基本单元格样式。',
    isCategoryStart: true,
  },

  // 样式变体
  {
    category: '样式变体',
    className: 'table-striped',
    description: '斑马条纹样式，偶数行带有背景色。',
    isCategoryStart: false,
  },
  {
    category: '样式变体',
    className: 'table-striped-columns',
    description: '列条纹样式，偶数列带有背景色。',
    isCategoryStart: false,
  },
  {
    category: '样式变体',
    className: 'table-borderless',
    description: '无边框样式，移除所有表格边框。',
    isCategoryStart: false,
  },

  // 固定定位
  {
    category: '固定定位',
    className: 'table-pin-rows',
    description: '固定表头和表尾，滚动时保持可见。',
    isCategoryStart: false,
  },
  {
    category: '固定定位',
    className: 'table-pin-cols',
    description: '固定首列，横向滚动时保持可见。',
    isCategoryStart: false,
  },

  // 行状态
  {
    category: '行状态',
    className: 'row-hover',
    description: '行悬停效果，鼠标悬停时高亮显示（添加到 tr 元素）。',
    isCategoryStart: false,
  },
  {
    category: '行状态',
    className: 'row-active',
    description: '激活行样式，标记选中或当前行（添加到 tr 元素）。',
    isCategoryStart: false,
  },

  // 尺寸
  {
    category: '尺寸',
    className: 'table-xs',
    description: '超小尺寸表格，紧凑布局。',
    isCategoryStart: false,
  },
  {
    category: '尺寸',
    className: 'table-sm',
    description: '小尺寸表格。',
    isCategoryStart: false,
  },
  {
    category: '尺寸',
    className: 'table-md',
    description: '中等尺寸表格（默认）。',
    isCategoryStart: false,
  },
  {
    category: '尺寸',
    className: 'table-lg',
    description: '大尺寸表格。',
    isCategoryStart: false,
  },
  {
    category: '尺寸',
    className: 'table-xl',
    description: '超大尺寸表格，舒适阅读。',
    isCategoryStart: false,
  },
]
</script>

<template>
  <DocsContainer>
    <DocsHeader
      title="Table 表格"
      description="用于展示结构化数据的表格组件。支持响应式布局、固定表头列、条纹样式等功能。遵循 WCAG 2.1 AA 无障碍标准。"
    />

    <ApiReference :data="apiClasses" />

    <DocsSection title="基础表格">
      <div class="overflow-x-auto">
        <table class="table">
          <thead>
            <tr>
              <th>姓名</th>
              <th>职位</th>
              <th>部门</th>
              <th>状态</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>张三</td>
              <td>前端工程师</td>
              <td>技术部</td>
              <td>
                <span class="badge badge-success badge-sm">在职</span>
              </td>
            </tr>
            <tr>
              <td>李四</td>
              <td>UI 设计师</td>
              <td>设计部</td>
              <td>
                <span class="badge badge-success badge-sm">在职</span>
              </td>
            </tr>
            <tr>
              <td>王五</td>
              <td>产品经理</td>
              <td>产品部</td>
              <td>
                <span class="badge badge-warning badge-sm">休假</span>
              </td>
            </tr>
            <tr>
              <td>赵六</td>
              <td>后端工程师</td>
              <td>技术部</td>
              <td>
                <span class="badge badge-success badge-sm">在职</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </DocsSection>

    <DocsSection title="带表头和表尾">
      <div class="overflow-x-auto">
        <table class="table">
          <thead>
            <tr>
              <th>产品</th>
              <th>数量</th>
              <th>单价</th>
              <th class="text-right">金额</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>MacBook Pro</td>
              <td>2</td>
              <td>¥12,999</td>
              <td class="text-right">¥25,998</td>
            </tr>
            <tr>
              <td>iPad Air</td>
              <td>3</td>
              <td>¥4,799</td>
              <td class="text-right">¥14,397</td>
            </tr>
            <tr>
              <td>AirPods Pro</td>
              <td>5</td>
              <td>¥1,999</td>
              <td class="text-right">¥9,995</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <th colspan="3">总计</th>
              <th class="text-right">¥50,390</th>
            </tr>
          </tfoot>
        </table>
      </div>
    </DocsSection>

    <DocsSection title="斑马条纹">
      <div class="overflow-x-auto">
        <table class="table table-striped">
          <thead>
            <tr>
              <th>#</th>
              <th>项目名称</th>
              <th>负责人</th>
              <th>进度</th>
              <th>截止日期</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>官网改版</td>
              <td>张三</td>
              <td>
                <div class="flex items-center gap-2">
                  <progress class="progress progress-primary w-20" value="75" max="100"></progress>
                  <span class="text-xs">75%</span>
                </div>
              </td>
              <td>2024-03-15</td>
            </tr>
            <tr>
              <td>2</td>
              <td>移动端适配</td>
              <td>李四</td>
              <td>
                <div class="flex items-center gap-2">
                  <progress class="progress progress-success w-20" value="100" max="100"></progress>
                  <span class="text-xs">100%</span>
                </div>
              </td>
              <td>2024-02-28</td>
            </tr>
            <tr>
              <td>3</td>
              <td>组件库开发</td>
              <td>王五</td>
              <td>
                <div class="flex items-center gap-2">
                  <progress class="progress progress-warning w-20" value="40" max="100"></progress>
                  <span class="text-xs">40%</span>
                </div>
              </td>
              <td>2024-04-01</td>
            </tr>
            <tr>
              <td>4</td>
              <td>性能优化</td>
              <td>赵六</td>
              <td>
                <div class="flex items-center gap-2">
                  <progress class="progress progress-primary w-20" value="60" max="100"></progress>
                  <span class="text-xs">60%</span>
                </div>
              </td>
              <td>2024-03-20</td>
            </tr>
            <tr>
              <td>5</td>
              <td>安全审计</td>
              <td>钱七</td>
              <td>
                <div class="flex items-center gap-2">
                  <progress class="progress progress-error w-20" value="20" max="100"></progress>
                  <span class="text-xs">20%</span>
                </div>
              </td>
              <td>2024-03-30</td>
            </tr>
          </tbody>
        </table>
      </div>
    </DocsSection>

    <DocsSection title="悬停高亮">
      <div class="overflow-x-auto">
        <table class="table">
          <thead>
            <tr>
              <th>用户</th>
              <th>邮箱</th>
              <th>角色</th>
              <th>操作</th>
            </tr>
          </thead>
          <tbody>
            <tr class="row-hover">
              <td>
                <div class="flex items-center gap-3">
                  <div class="avatar placeholder">
                    <div class="bg-primary text-primary-content w-10 rounded-full">
                      <span class="text-sm">张</span>
                    </div>
                  </div>
                  <div>
                    <div class="font-semibold">张三</div>
                    <div class="text-xs text-base-content/70">ID: 10001</div>
                  </div>
                </div>
              </td>
              <td>zhangsan@example.com</td>
              <td>
                <span class="badge badge-primary badge-sm">管理员</span>
              </td>
              <td>
                <button class="btn btn-ghost btn-xs" aria-label="编辑用户张三">
                  <span class="icon-[lucide--pencil]"></span>
                </button>
              </td>
            </tr>
            <tr class="row-hover">
              <td>
                <div class="flex items-center gap-3">
                  <div class="avatar placeholder">
                    <div class="bg-secondary text-secondary-content w-10 rounded-full">
                      <span class="text-sm">李</span>
                    </div>
                  </div>
                  <div>
                    <div class="font-semibold">李四</div>
                    <div class="text-xs text-base-content/70">ID: 10002</div>
                  </div>
                </div>
              </td>
              <td>lisi@example.com</td>
              <td>
                <span class="badge badge-secondary badge-sm">编辑</span>
              </td>
              <td>
                <button class="btn btn-ghost btn-xs" aria-label="编辑用户李四">
                  <span class="icon-[lucide--pencil]"></span>
                </button>
              </td>
            </tr>
            <tr class="row-hover">
              <td>
                <div class="flex items-center gap-3">
                  <div class="avatar placeholder">
                    <div class="bg-accent text-accent-content w-10 rounded-full">
                      <span class="text-sm">王</span>
                    </div>
                  </div>
                  <div>
                    <div class="font-semibold">王五</div>
                    <div class="text-xs text-base-content/70">ID: 10003</div>
                  </div>
                </div>
              </td>
              <td>wangwu@example.com</td>
              <td>
                <span class="badge badge-ghost badge-sm">访客</span>
              </td>
              <td>
                <button class="btn btn-ghost btn-xs" aria-label="编辑用户王五">
                  <span class="icon-[lucide--pencil]"></span>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </DocsSection>

    <DocsSection title="激活行状态">
      <div class="overflow-x-auto">
        <table class="table">
          <thead>
            <tr>
              <th>
                <input type="checkbox" class="checkbox checkbox-sm" aria-label="全选所有文件" />
              </th>
              <th>文件名</th>
              <th>大小</th>
              <th>修改日期</th>
              <th>类型</th>
            </tr>
          </thead>
          <tbody>
            <tr class="row-hover row-active">
              <td>
                <input
                  type="checkbox"
                  class="checkbox checkbox-sm"
                  checked
                  aria-label="选择文件 document.pdf"
                />
              </td>
              <td>
                <div class="flex items-center gap-2">
                  <span class="icon-[lucide--file-text] text-error"></span>
                  <span>document.pdf</span>
                </div>
              </td>
              <td>2.4 MB</td>
              <td>2024-02-10</td>
              <td>
                <span class="badge badge-error badge-outline badge-sm">PDF</span>
              </td>
            </tr>
            <tr class="row-hover">
              <td>
                <input
                  type="checkbox"
                  class="checkbox checkbox-sm"
                  aria-label="选择文件 presentation.pptx"
                />
              </td>
              <td>
                <div class="flex items-center gap-2">
                  <span class="icon-[lucide--presentation] text-warning"></span>
                  <span>presentation.pptx</span>
                </div>
              </td>
              <td>5.1 MB</td>
              <td>2024-02-09</td>
              <td>
                <span class="badge badge-warning badge-outline badge-sm">PPT</span>
              </td>
            </tr>
            <tr class="row-hover row-active">
              <td>
                <input
                  type="checkbox"
                  class="checkbox checkbox-sm"
                  checked
                  aria-label="选择文件 spreadsheet.xlsx"
                />
              </td>
              <td>
                <div class="flex items-center gap-2">
                  <span class="icon-[lucide--table] text-success"></span>
                  <span>spreadsheet.xlsx</span>
                </div>
              </td>
              <td>1.2 MB</td>
              <td>2024-02-08</td>
              <td>
                <span class="badge badge-success badge-outline badge-sm">Excel</span>
              </td>
            </tr>
            <tr class="row-hover">
              <td>
                <input
                  type="checkbox"
                  class="checkbox checkbox-sm"
                  aria-label="选择文件 image.png"
                />
              </td>
              <td>
                <div class="flex items-center gap-2">
                  <span class="icon-[lucide--image] text-info"></span>
                  <span>image.png</span>
                </div>
              </td>
              <td>856 KB</td>
              <td>2024-02-07</td>
              <td>
                <span class="badge badge-info badge-outline badge-sm">图片</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </DocsSection>

    <DocsSection title="尺寸变体">
      <div class="space-y-6">
        <!-- 超小尺寸 -->
        <div>
          <h3 class="text-sm font-semibold mb-2 text-base-content/70">超小尺寸 (table-xs)</h3>
          <div class="overflow-x-auto">
            <table class="table table-xs table-striped">
              <thead>
                <tr>
                  <th>编号</th>
                  <th>名称</th>
                  <th>状态</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>001</td>
                  <td>项目 A</td>
                  <td>
                    <span class="badge badge-xs badge-success">完成</span>
                  </td>
                </tr>
                <tr>
                  <td>002</td>
                  <td>项目 B</td>
                  <td>
                    <span class="badge badge-xs badge-warning">进行中</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <!-- 小尺寸 -->
        <div>
          <h3 class="text-sm font-semibold mb-2 text-base-content/70">小尺寸 (table-sm)</h3>
          <div class="overflow-x-auto">
            <table class="table table-sm">
              <thead>
                <tr>
                  <th>编号</th>
                  <th>名称</th>
                  <th>状态</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>001</td>
                  <td>项目 A</td>
                  <td>
                    <span class="badge badge-sm badge-success">完成</span>
                  </td>
                </tr>
                <tr>
                  <td>002</td>
                  <td>项目 B</td>
                  <td>
                    <span class="badge badge-sm badge-warning">进行中</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <!-- 大尺寸 -->
        <div>
          <h3 class="text-sm font-semibold mb-2 text-base-content/70">大尺寸 (table-lg)</h3>
          <div class="overflow-x-auto">
            <table class="table table-lg">
              <thead>
                <tr>
                  <th>编号</th>
                  <th>名称</th>
                  <th>状态</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>001</td>
                  <td>项目 A</td>
                  <td>
                    <span class="badge badge-success">完成</span>
                  </td>
                </tr>
                <tr>
                  <td>002</td>
                  <td>项目 B</td>
                  <td>
                    <span class="badge badge-warning">进行中</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </DocsSection>

    <DocsSection title="固定表头">
      <div class="overflow-x-auto max-h-64">
        <table class="table table-pin-rows">
          <thead>
            <tr>
              <th>排名</th>
              <th>城市</th>
              <th>人口</th>
              <th>GDP</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="i in 20" :key="i" class="row-hover">
              <td>{{ i }}</td>
              <td>城市 {{ i }}</td>
              <td>{{ (1000 + i * 50).toLocaleString() }} 万</td>
              <td>¥ {{ (5000 + i * 200).toLocaleString() }} 亿</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p class="text-sm text-base-content/70 mt-2">
        <span class="icon-[lucide--info] inline-block align-middle"></span>
        滚动查看更多数据，表头保持固定
      </p>
    </DocsSection>

    <DocsSection title="列条纹">
      <div class="overflow-x-auto">
        <table class="table table-striped-columns">
          <thead>
            <tr>
              <th>Q1</th>
              <th>Q2</th>
              <th>Q3</th>
              <th>Q4</th>
              <th>总计</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>¥125,000</td>
              <td>¥180,000</td>
              <td>¥210,000</td>
              <td>¥195,000</td>
              <td class="font-semibold">¥710,000</td>
            </tr>
            <tr>
              <td>¥98,000</td>
              <td>¥145,000</td>
              <td>¥168,000</td>
              <td>¥152,000</td>
              <td class="font-semibold">¥563,000</td>
            </tr>
            <tr>
              <td>¥112,000</td>
              <td>¥158,000</td>
              <td>¥189,000</td>
              <td>¥175,000</td>
              <td class="font-semibold">¥634,000</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <th>¥335,000</th>
              <th>¥483,000</th>
              <th>¥567,000</th>
              <th>¥522,000</th>
              <th>¥1,907,000</th>
            </tr>
          </tfoot>
        </table>
      </div>
    </DocsSection>

    <DocsSection title="无边框表格">
      <div class="overflow-x-auto">
        <table class="table table-borderless">
          <thead>
            <tr>
              <th>功能</th>
              <th>免费版</th>
              <th>专业版</th>
              <th>企业版</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>用户数量</td>
              <td>
                <span class="icon-[lucide--check] text-success"></span>
                最多 5 人
              </td>
              <td>
                <span class="icon-[lucide--check] text-success"></span>
                最多 50 人
              </td>
              <td>
                <span class="icon-[lucide--check] text-success"></span>
                无限制
              </td>
            </tr>
            <tr>
              <td>存储空间</td>
              <td>
                <span class="icon-[lucide--check] text-success"></span>
                10 GB
              </td>
              <td>
                <span class="icon-[lucide--check] text-success"></span>
                100 GB
              </td>
              <td>
                <span class="icon-[lucide--check] text-success"></span>
                1 TB
              </td>
            </tr>
            <tr>
              <td>技术支持</td>
              <td>
                <span class="icon-[lucide--x] text-error"></span>
              </td>
              <td>
                <span class="icon-[lucide--check] text-success"></span>
                邮件
              </td>
              <td>
                <span class="icon-[lucide--check] text-success"></span>
                24/7 专属
              </td>
            </tr>
            <tr>
              <td>API 访问</td>
              <td>
                <span class="icon-[lucide--x] text-error"></span>
              </td>
              <td>
                <span class="icon-[lucide--check] text-success"></span>
              </td>
              <td>
                <span class="icon-[lucide--check] text-success"></span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </DocsSection>

    <DocsSection title="复杂数据表格">
      <div class="overflow-x-auto">
        <table class="table table-striped">
          <thead>
            <tr>
              <th>
                <input type="checkbox" class="checkbox checkbox-sm" aria-label="全选所有订单" />
              </th>
              <th>订单号</th>
              <th>客户</th>
              <th>产品</th>
              <th>数量</th>
              <th>金额</th>
              <th>状态</th>
              <th>操作</th>
            </tr>
          </thead>
          <tbody>
            <tr class="row-hover">
              <td>
                <input
                  type="checkbox"
                  class="checkbox checkbox-sm"
                  aria-label="选择订单 #20240210001"
                />
              </td>
              <td>
                <span class="font-mono text-xs">#20240210001</span>
              </td>
              <td>
                <div>
                  <div class="font-semibold">张三</div>
                  <div class="text-xs text-base-content/70">zhangsan@example.com</div>
                </div>
              </td>
              <td>MacBook Pro 16"</td>
              <td>1</td>
              <td>¥19,999</td>
              <td>
                <span class="badge badge-success badge-sm">已发货</span>
              </td>
              <td>
                <div class="flex gap-1">
                  <button class="btn btn-ghost btn-xs" aria-label="查看订单详情">
                    <span class="icon-[lucide--eye]"></span>
                  </button>
                  <button class="btn btn-ghost btn-xs" aria-label="编辑订单">
                    <span class="icon-[lucide--pencil]"></span>
                  </button>
                </div>
              </td>
            </tr>
            <tr class="row-hover">
              <td>
                <input
                  type="checkbox"
                  class="checkbox checkbox-sm"
                  aria-label="选择订单 #20240210002"
                />
              </td>
              <td>
                <span class="font-mono text-xs">#20240210002</span>
              </td>
              <td>
                <div>
                  <div class="font-semibold">李四</div>
                  <div class="text-xs text-base-content/70">lisi@example.com</div>
                </div>
              </td>
              <td>iPad Air</td>
              <td>2</td>
              <td>¥9,598</td>
              <td>
                <span class="badge badge-warning badge-sm">处理中</span>
              </td>
              <td>
                <div class="flex gap-1">
                  <button class="btn btn-ghost btn-xs" aria-label="查看订单详情">
                    <span class="icon-[lucide--eye]"></span>
                  </button>
                  <button class="btn btn-ghost btn-xs" aria-label="编辑订单">
                    <span class="icon-[lucide--pencil]"></span>
                  </button>
                </div>
              </td>
            </tr>
            <tr class="row-hover">
              <td>
                <input
                  type="checkbox"
                  class="checkbox checkbox-sm"
                  aria-label="选择订单 #20240210003"
                />
              </td>
              <td>
                <span class="font-mono text-xs">#20240210003</span>
              </td>
              <td>
                <div>
                  <div class="font-semibold">王五</div>
                  <div class="text-xs text-base-content/70">wangwu@example.com</div>
                </div>
              </td>
              <td>AirPods Pro</td>
              <td>3</td>
              <td>¥5,997</td>
              <td>
                <span class="badge badge-info badge-sm">待付款</span>
              </td>
              <td>
                <div class="flex gap-1">
                  <button class="btn btn-ghost btn-xs" aria-label="查看订单详情">
                    <span class="icon-[lucide--eye]"></span>
                  </button>
                  <button class="btn btn-ghost btn-xs" aria-label="编辑订单">
                    <span class="icon-[lucide--pencil]"></span>
                  </button>
                </div>
              </td>
            </tr>
            <tr class="row-hover">
              <td>
                <input
                  type="checkbox"
                  class="checkbox checkbox-sm"
                  aria-label="选择订单 #20240210004"
                />
              </td>
              <td>
                <span class="font-mono text-xs">#20240210004</span>
              </td>
              <td>
                <div>
                  <div class="font-semibold">赵六</div>
                  <div class="text-xs text-base-content/70">zhaoliu@example.com</div>
                </div>
              </td>
              <td>Apple Watch Series 9</td>
              <td>1</td>
              <td>¥3,199</td>
              <td>
                <span class="badge badge-error badge-sm">已取消</span>
              </td>
              <td>
                <div class="flex gap-1">
                  <button class="btn btn-ghost btn-xs" aria-label="查看订单详情">
                    <span class="icon-[lucide--eye]"></span>
                  </button>
                  <button class="btn btn-ghost btn-xs" aria-label="编辑订单">
                    <span class="icon-[lucide--pencil]"></span>
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </DocsSection>

    <DocsSection title="响应式表格">
      <div class="overflow-x-auto">
        <table class="table table-sm md:table-md">
          <thead>
            <tr>
              <th>课程</th>
              <th>讲师</th>
              <th class="hidden md:table-cell">时长</th>
              <th class="hidden lg:table-cell">难度</th>
              <th>评分</th>
              <th class="hidden sm:table-cell">价格</th>
            </tr>
          </thead>
          <tbody>
            <tr class="row-hover">
              <td>
                <div class="font-semibold">Vue 3 完整指南</div>
                <div class="text-xs text-base-content/70 md:hidden">尤雨溪 • 12 小时</div>
              </td>
              <td class="hidden md:table-cell">尤雨溪</td>
              <td class="hidden md:table-cell">12 小时</td>
              <td class="hidden lg:table-cell">
                <span class="badge badge-warning badge-sm">中级</span>
              </td>
              <td>
                <div class="flex items-center gap-1">
                  <span class="icon-[lucide--star] text-warning text-xs"></span>
                  <span>4.8</span>
                </div>
              </td>
              <td class="hidden sm:table-cell">¥299</td>
            </tr>
            <tr class="row-hover">
              <td>
                <div class="font-semibold">Tailwind CSS 实战</div>
                <div class="text-xs text-base-content/70 md:hidden">Adam Wathan • 8 小时</div>
              </td>
              <td class="hidden md:table-cell">Adam Wathan</td>
              <td class="hidden md:table-cell">8 小时</td>
              <td class="hidden lg:table-cell">
                <span class="badge badge-success badge-sm">初级</span>
              </td>
              <td>
                <div class="flex items-center gap-1">
                  <span class="icon-[lucide--star] text-warning text-xs"></span>
                  <span>4.9</span>
                </div>
              </td>
              <td class="hidden sm:table-cell">¥199</td>
            </tr>
            <tr class="row-hover">
              <td>
                <div class="font-semibold">TypeScript 高级特性</div>
                <div class="text-xs text-base-content/70 md:hidden">Anders Hejlsberg • 15 小时</div>
              </td>
              <td class="hidden md:table-cell">Anders Hejlsberg</td>
              <td class="hidden md:table-cell">15 小时</td>
              <td class="hidden lg:table-cell">
                <span class="badge badge-error badge-sm">高级</span>
              </td>
              <td>
                <div class="flex items-center gap-1">
                  <span class="icon-[lucide--star] text-warning text-xs"></span>
                  <span>4.7</span>
                </div>
              </td>
              <td class="hidden sm:table-cell">¥399</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p class="text-sm text-base-content/70 mt-2">
        <span class="icon-[lucide--smartphone] inline-block align-middle"></span>
        表格会根据屏幕尺寸自动调整显示的列
      </p>
    </DocsSection>
  </DocsContainer>
</template>
