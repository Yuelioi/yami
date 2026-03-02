<script setup lang="ts">
import DocsHeader from '@/components/zcomp/DocsHeader.vue'
import DocsSection from '@/components/zcomp/DocsSection.vue'
import ApiReference from '@/components/zcomp/ApiReference.vue'
import DocsContainer from '@/components/zcomp/DocsContainer.vue'
import { ref } from 'vue'

const apiClasses = [
  { category: '基础', className: 'pagination', description: '分页容器', isCategoryStart: true },
  {
    category: '基础',
    className: 'pagination-item',
    description: '页码按钮',
    isCategoryStart: false,
  },
  {
    category: '基础',
    className: 'pagination-item-active',
    description: '当前页',
    isCategoryStart: false,
  },
  {
    category: '基础',
    className: 'pagination-item-disabled',
    description: '禁用状态',
    isCategoryStart: false,
  },
  {
    category: '基础',
    className: 'pagination-ellipsis',
    description: '省略号',
    isCategoryStart: false,
  },
  {
    category: '基础',
    className: 'pagination-prev',
    description: '上一页按钮',
    isCategoryStart: false,
  },
  {
    category: '基础',
    className: 'pagination-next',
    description: '下一页按钮',
    isCategoryStart: false,
  },
  { category: '尺寸', className: 'pagination-xs', description: '超小', isCategoryStart: true },
  { category: '尺寸', className: 'pagination-sm', description: '小', isCategoryStart: false },
  {
    category: '尺寸',
    className: 'pagination-md',
    description: '中（默认）',
    isCategoryStart: false,
  },
  { category: '尺寸', className: 'pagination-lg', description: '大', isCategoryStart: false },
  {
    category: '样式',
    className: 'pagination-bordered',
    description: '有边框',
    isCategoryStart: true,
  },
  { category: '样式', className: 'pagination-pill', description: '胶囊形', isCategoryStart: false },
  { category: '样式', className: 'pagination-square', description: '方形', isCategoryStart: false },
  {
    category: '颜色',
    className: 'pagination-primary',
    description: '主色（默认）',
    isCategoryStart: true,
  },
  {
    category: '颜色',
    className: 'pagination-secondary',
    description: '次色',
    isCategoryStart: false,
  },
  {
    category: '颜色',
    className: 'pagination-accent',
    description: '强调色',
    isCategoryStart: false,
  },
  {
    category: '颜色',
    className: 'pagination-neutral',
    description: '中性色',
    isCategoryStart: false,
  },
]

// 通用分页逻辑
function usePagination(total: number, initial = 1) {
  const current = ref(initial)

  const go = (page: number) => {
    if (page < 1 || page > total) return
    current.value = page
  }

  // 生成页码数组，含省略号
  const pages = (cur: number) => {
    if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1)
    if (cur <= 4) return [1, 2, 3, 4, 5, '...', total]
    if (cur >= total - 3) return [1, '...', total - 4, total - 3, total - 2, total - 1, total]
    return [1, '...', cur - 1, cur, cur + 1, '...', total]
  }

  return { current, go, pages }
}

const basic = usePagination(10, 1)
const p2 = usePagination(20, 7)
const bordered = usePagination(15, 3)
const pill = usePagination(12, 4)
const square = usePagination(12, 2)
const colored = usePagination(10, 5)
</script>

<template>
  <DocsContainer>
    <DocsHeader
      title="Pagination"
      description="分页组件用于在多页内容间导航，支持省略号、多种尺寸与样式变体。"
    />

    <ApiReference :data="apiClasses" />

    <!-- 基础 -->
    <DocsSection title="基础">
      <nav class="pagination">
        <button
          class="pagination-prev"
          :disabled="basic.current.value === 1"
          @click="basic.go(basic.current.value - 1)"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2.5"
              d="M15 19l-7-7 7-7"
            />
          </svg>
          上一页
        </button>

        <template v-for="page in basic.pages(basic.current.value)" :key="page">
          <span v-if="page === '...'" class="pagination-ellipsis">···</span>
          <button
            v-else
            class="pagination-item"
            :class="{ 'pagination-item-active': page === basic.current.value }"
            @click="basic.go(page as number)"
          >
            {{ page }}
          </button>
        </template>

        <button
          class="pagination-next"
          :disabled="basic.current.value === 10"
          @click="basic.go(basic.current.value + 1)"
        >
          下一页
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2.5"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </nav>
    </DocsSection>

    <!-- 仅页码（无文字） -->
    <DocsSection title="仅页码">
      <nav class="pagination">
        <button
          class="pagination-item"
          :disabled="p2.current.value === 1"
          @click="p2.go(p2.current.value - 1)"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2.5"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        <template v-for="page in p2.pages(p2.current.value)" :key="page">
          <span v-if="page === '...'" class="pagination-ellipsis">···</span>
          <button
            v-else
            class="pagination-item"
            :class="{ 'pagination-item-active': page === p2.current.value }"
            @click="p2.go(page as number)"
          >
            {{ page }}
          </button>
        </template>

        <button
          class="pagination-item"
          :disabled="p2.current.value === 20"
          @click="p2.go(p2.current.value + 1)"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2.5"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </nav>
    </DocsSection>

    <!-- 有边框 -->
    <DocsSection title="有边框">
      <nav class="pagination pagination-bordered">
        <button
          class="pagination-prev"
          :disabled="bordered.current.value === 1"
          @click="bordered.go(bordered.current.value - 1)"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2.5"
              d="M15 19l-7-7 7-7"
            />
          </svg>
          上一页
        </button>
        <template v-for="page in bordered.pages(bordered.current.value)" :key="page">
          <span v-if="page === '...'" class="pagination-ellipsis">···</span>
          <button
            v-else
            class="pagination-item"
            :class="{ 'pagination-item-active': page === bordered.current.value }"
            @click="bordered.go(page as number)"
          >
            {{ page }}
          </button>
        </template>
        <button
          class="pagination-next"
          :disabled="bordered.current.value === 15"
          @click="bordered.go(bordered.current.value + 1)"
        >
          下一页
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2.5"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </nav>
    </DocsSection>

    <!-- 胶囊形 -->
    <DocsSection title="胶囊形">
      <nav class="pagination pagination-pill pagination-bordered">
        <button
          class="pagination-prev"
          :disabled="pill.current.value === 1"
          @click="pill.go(pill.current.value - 1)"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2.5"
              d="M15 19l-7-7 7-7"
            />
          </svg>
          上一页
        </button>
        <template v-for="page in pill.pages(pill.current.value)" :key="page">
          <span v-if="page === '...'" class="pagination-ellipsis">···</span>
          <button
            v-else
            class="pagination-item"
            :class="{ 'pagination-item-active': page === pill.current.value }"
            @click="pill.go(page as number)"
          >
            {{ page }}
          </button>
        </template>
        <button
          class="pagination-next"
          :disabled="pill.current.value === 12"
          @click="pill.go(pill.current.value + 1)"
        >
          下一页
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2.5"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </nav>
    </DocsSection>

    <!-- 方形 -->
    <DocsSection title="方形">
      <nav class="pagination pagination-square pagination-bordered">
        <button
          class="pagination-prev"
          :disabled="square.current.value === 1"
          @click="square.go(square.current.value - 1)"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2.5"
              d="M15 19l-7-7 7-7"
            />
          </svg>
          上一页
        </button>
        <template v-for="page in square.pages(square.current.value)" :key="page">
          <span v-if="page === '...'" class="pagination-ellipsis">···</span>
          <button
            v-else
            class="pagination-item"
            :class="{ 'pagination-item-active': page === square.current.value }"
            @click="square.go(page as number)"
          >
            {{ page }}
          </button>
        </template>
        <button
          class="pagination-next"
          :disabled="square.current.value === 12"
          @click="square.go(square.current.value + 1)"
        >
          下一页
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2.5"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </nav>
    </DocsSection>

    <!-- 尺寸 -->
    <DocsSection title="尺寸">
      <div class="flex flex-col gap-4">
        <div v-for="size in ['xs', 'sm', 'md', 'lg']" :key="size">
          <p class="text-xs text-base-content/50 mb-2">{{ size }}</p>
          <nav class="pagination" :class="`pagination-${size}`">
            <button class="pagination-prev">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2.5"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              上一页
            </button>
            <button class="pagination-item">1</button>
            <button class="pagination-item">2</button>
            <button class="pagination-item pagination-item-active">3</button>
            <button class="pagination-item">4</button>
            <button class="pagination-item">5</button>
            <button class="pagination-next">
              下一页
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2.5"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </nav>
        </div>
      </div>
    </DocsSection>

    <!-- 颜色 -->
    <DocsSection title="颜色">
      <div class="flex flex-col gap-4">
        <div v-for="color in ['primary', 'secondary', 'accent', 'neutral']" :key="color">
          <p class="text-xs text-base-content/50 mb-2">{{ color }}</p>
          <nav class="pagination" :class="`pagination-${color}`">
            <button class="pagination-prev">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2.5"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              上一页
            </button>
            <button class="pagination-item">1</button>
            <button class="pagination-item">2</button>
            <button class="pagination-item pagination-item-active">3</button>
            <button class="pagination-item">4</button>
            <button class="pagination-item">5</button>
            <button class="pagination-next">
              下一页
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2.5"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </nav>
        </div>
      </div>
    </DocsSection>

    <!-- 带跳页输入框 -->
    <DocsSection title="带跳页输入框">
      <div class="flex flex-wrap items-center gap-3">
        <nav class="pagination">
          <button
            class="pagination-prev"
            :disabled="colored.current.value === 1"
            @click="colored.go(colored.current.value - 1)"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2.5"
                d="M15 19l-7-7 7-7"
              />
            </svg>
            上一页
          </button>
          <template v-for="page in colored.pages(colored.current.value)" :key="page">
            <span v-if="page === '...'" class="pagination-ellipsis">···</span>
            <button
              v-else
              class="pagination-item"
              :class="{ 'pagination-item-active': page === colored.current.value }"
              @click="colored.go(page as number)"
            >
              {{ page }}
            </button>
          </template>
          <button
            class="pagination-next"
            :disabled="colored.current.value === 10"
            @click="colored.go(colored.current.value + 1)"
          >
            下一页
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2.5"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </nav>

        <div class="flex items-center gap-2 text-sm text-base-content/60">
          前往
          <input
            type="number"
            min="1"
            max="10"
            class="input input-sm input-bordered w-16 text-center"
            @keydown.enter="colored.go(Number(($event.target as HTMLInputElement).value))"
          />
          页
        </div>

        <span class="text-sm text-base-content/50">共 10 页</span>
      </div>
    </DocsSection>

    <!-- 简单场景（上一页/下一页） -->
    <DocsSection title="简单模式">
      <div class="flex flex-wrap gap-4">
        <nav class="pagination">
          <button class="pagination-prev pagination-item-disabled">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2.5"
                d="M15 19l-7-7 7-7"
              />
            </svg>
            上一页
          </button>
          <button class="pagination-next">
            下一页
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2.5"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </nav>

        <nav class="pagination pagination-bordered">
          <button class="pagination-prev">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2.5"
                d="M15 19l-7-7 7-7"
              />
            </svg>
            上一页
          </button>
          <span class="pagination-ellipsis text-sm px-2">第 3 页 / 共 20 页</span>
          <button class="pagination-next">下一页</button>
        </nav>
      </div></DocsSection
    ></DocsContainer
  >
</template>
