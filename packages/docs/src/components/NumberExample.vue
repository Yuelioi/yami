<script setup lang="ts">
import DocsHeader from '@/components/zcomp/DocsHeader.vue'
import DocsSection from '@/components/zcomp/DocsSection.vue'
import ApiReference from '@/components/zcomp/ApiReference.vue'
import DocsContainer from '@/components/zcomp/DocsContainer.vue'
import { ref } from 'vue'

/* 通用 useNumberInput composable */
function useNumberInput(initial = 0, min = -Infinity, max = Infinity, step = 1) {
  const value = ref(initial)
  const decrement = () => {
    value.value = Math.max(min, value.value - step)
  }
  const increment = () => {
    value.value = Math.min(max, value.value + step)
  }
  return { value, decrement, increment }
}

const basic = useNumberInput(1, 0, 99)
const qty = useNumberInput(1, 1, 10)
const xs = useNumberInput(0)
const sm = useNumberInput(0)
const lg = useNumberInput(0)
const xl = useNumberInput(0)
const primary = useNumberInput(5, 0, 100)
const success = useNumberInput(8, 0, 100)
const warning = useNumberInput(3, 0, 10)
const error = useNumberInput(0, 0, 5)
const ghost = useNumberInput(2)
const vert = useNumberInput(10, 0, 100)
const price = useNumberInput(99, 0, 9999, 10)
const disabled = useNumberInput(5)

const apiClasses = [
  {
    category: '基础',
    className: 'number-input',
    description: '数字输入容器',
    isCategoryStart: true,
  },
  {
    category: '基础',
    className: 'number-input-decrement',
    description: '减少按钮',
    isCategoryStart: false,
  },
  {
    category: '基础',
    className: 'number-input-field',
    description: '数字输入框（隐藏原生箭头）',
    isCategoryStart: false,
  },
  {
    category: '基础',
    className: 'number-input-increment',
    description: '增加按钮',
    isCategoryStart: false,
  },
  { category: '尺寸', className: 'number-input-xs', description: '超小', isCategoryStart: true },
  { category: '尺寸', className: 'number-input-sm', description: '小', isCategoryStart: false },
  { category: '尺寸', className: 'number-input-lg', description: '大', isCategoryStart: false },
  { category: '尺寸', className: 'number-input-xl', description: '超大', isCategoryStart: false },
  {
    category: '颜色',
    className: 'number-input-primary',
    description: '主色边框与按钮',
    isCategoryStart: true,
  },
  {
    category: '颜色',
    className: 'number-input-success',
    description: '成功态',
    isCategoryStart: false,
  },
  {
    category: '颜色',
    className: 'number-input-warning',
    description: '警告态',
    isCategoryStart: false,
  },
  {
    category: '颜色',
    className: 'number-input-error',
    description: '错误态',
    isCategoryStart: false,
  },
  {
    category: '样式',
    className: 'number-input-ghost',
    description: '幽灵，仅底部边框',
    isCategoryStart: true,
  },
  {
    category: '样式',
    className: 'number-input-vertical',
    description: '竖排按钮（按钮在右侧上下）',
    isCategoryStart: false,
  },
]
</script>

<template>
  <DocsContainer>
    <DocsHeader
      title="Number Input"
      description="数字输入框，带增减按钮，隐藏原生 spin 控件，支持最大值/最小值/步长控制。"
    />

    <ApiReference :data="apiClasses" />

    <!-- 基础 -->
    <DocsSection title="基础">
      <div class="flex flex-wrap items-center gap-6">
        <div class="number-input">
          <button class="number-input-decrement" type="button" @click="basic.decrement">−</button>
          <input
            class="number-input-field"
            type="number"
            v-model.number="basic.value"
            :min="0"
            :max="99"
          />
          <button class="number-input-increment" type="button" @click="basic.increment">+</button>
        </div>

        <!-- 禁用 -->
        <div class="number-input">
          <button class="number-input-decrement" type="button" disabled>−</button>
          <input class="number-input-field" type="number" :value="disabled.value" disabled />
          <button class="number-input-increment" type="button" disabled>+</button>
        </div>
      </div>
    </DocsSection>

    <!-- 尺寸 -->
    <DocsSection title="尺寸">
      <div class="flex flex-wrap items-center gap-4">
        <div class="number-input number-input-xs">
          <button class="number-input-decrement" type="button" @click="xs.decrement">−</button>
          <input class="number-input-field" type="number" v-model.number="xs.value" />
          <button class="number-input-increment" type="button" @click="xs.increment">+</button>
        </div>
        <div class="number-input number-input-sm">
          <button class="number-input-decrement" type="button" @click="sm.decrement">−</button>
          <input class="number-input-field" type="number" v-model.number="sm.value" />
          <button class="number-input-increment" type="button" @click="sm.increment">+</button>
        </div>
        <div class="number-input">
          <button class="number-input-decrement" type="button" @click="basic.decrement">−</button>
          <input class="number-input-field" type="number" v-model.number="basic.value" />
          <button class="number-input-increment" type="button" @click="basic.increment">+</button>
        </div>
        <div class="number-input number-input-lg">
          <button class="number-input-decrement" type="button" @click="lg.decrement">−</button>
          <input class="number-input-field" type="number" v-model.number="lg.value" />
          <button class="number-input-increment" type="button" @click="lg.increment">+</button>
        </div>
        <div class="number-input number-input-xl">
          <button class="number-input-decrement" type="button" @click="xl.decrement">−</button>
          <input class="number-input-field" type="number" v-model.number="xl.value" />
          <button class="number-input-increment" type="button" @click="xl.increment">+</button>
        </div>
      </div>
    </DocsSection>

    <!-- 颜色 -->
    <DocsSection title="颜色">
      <div class="flex flex-wrap items-center gap-4">
        <div class="number-input number-input-primary">
          <button class="number-input-decrement" type="button" @click="primary.decrement">−</button>
          <input class="number-input-field" type="number" v-model.number="primary.value" />
          <button class="number-input-increment" type="button" @click="primary.increment">+</button>
        </div>
        <div class="number-input number-input-success">
          <button class="number-input-decrement" type="button" @click="success.decrement">−</button>
          <input class="number-input-field" type="number" v-model.number="success.value" />
          <button class="number-input-increment" type="button" @click="success.increment">+</button>
        </div>
        <div class="number-input number-input-warning">
          <button class="number-input-decrement" type="button" @click="warning.decrement">−</button>
          <input class="number-input-field" type="number" v-model.number="warning.value" />
          <button class="number-input-increment" type="button" @click="warning.increment">+</button>
        </div>
        <div class="number-input number-input-error">
          <button class="number-input-decrement" type="button" @click="error.decrement">−</button>
          <input class="number-input-field" type="number" v-model.number="error.value" />
          <button class="number-input-increment" type="button" @click="error.increment">+</button>
        </div>
      </div>
    </DocsSection>

    <!-- Ghost -->
    <DocsSection title="Ghost">
      <div class="flex flex-wrap items-center gap-6 max-w-sm">
        <div class="number-input number-input-ghost">
          <button class="number-input-decrement" type="button" @click="ghost.decrement">−</button>
          <input class="number-input-field" type="number" v-model.number="ghost.value" />
          <button class="number-input-increment" type="button" @click="ghost.increment">+</button>
        </div>
      </div>
    </DocsSection>

    <!-- 竖排 -->
    <DocsSection title="竖排按钮">
      <p class="text-sm text-base-content/50 mb-3">
        按钮折叠到右侧，上为 increment，下为 decrement。
      </p>
      <div class="flex flex-wrap items-center gap-6">
        <div class="number-input number-input-vertical" style="width: 7rem">
          <input class="number-input-field" type="number" v-model.number="vert.value" />
          <div
            class="flex flex-col border-s border-base-content/10"
            style="width: var(--number-input-btn-w, 2.5rem)"
          >
            <button
              class="number-input-increment flex-1 flex items-center justify-center text-xs hover:bg-base-200 transition-colors"
              type="button"
              @click="vert.increment"
              style="
                border-bottom: var(--border) solid
                  color-mix(in oklab, var(--color-base-content) 10%, transparent);
              "
            >
              ▲
            </button>
            <button
              class="number-input-decrement flex-1 flex items-center justify-center text-xs hover:bg-base-200 transition-colors"
              type="button"
              @click="vert.decrement"
            >
              ▼
            </button>
          </div>
        </div>
      </div>
    </DocsSection>

    <!-- 实际用例 -->
    <DocsSection title="实际用例">
      <div class="flex flex-col gap-6 max-w-sm">
        <!-- 购物车数量 -->
        <div class="flex items-center justify-between p-4 border border-base-300 rounded-box">
          <div class="flex items-center gap-3">
            <div class="size-12 rounded-lg bg-base-200 flex items-center justify-center text-2xl">
              👟
            </div>
            <div>
              <p class="text-sm font-medium">运动鞋 / 42码</p>
              <p class="text-sm text-base-content/50">¥ 299.00</p>
            </div>
          </div>
          <div class="number-input number-input-sm">
            <button class="number-input-decrement" type="button" @click="qty.decrement">−</button>
            <input
              class="number-input-field"
              type="number"
              v-model.number="qty.value"
              :min="1"
              :max="10"
            />
            <button class="number-input-increment" type="button" @click="qty.increment">+</button>
          </div>
        </div>

        <!-- 价格步进 -->
        <div>
          <label class="block mb-1.5 text-sm font-medium">预算上限（步长 ¥10）</label>
          <div class="number-input number-input-primary number-input-lg w-full">
            <button class="number-input-decrement" type="button" @click="price.decrement">−</button>
            <input
              class="number-input-field"
              type="number"
              v-model.number="price.value"
              :min="0"
              :max="9999"
              :step="10"
            />
            <button class="number-input-increment" type="button" @click="price.increment">+</button>
          </div>
          <p class="mt-1.5 text-sm text-base-content/50">当前预算：¥ {{ price.value }}</p>
        </div>
      </div>
    </DocsSection>
  </DocsContainer>
</template>
