<template>
  <div class="min-h-screen p-6">
    <div class="max-w-7xl mx-auto">
      <!-- 头部 -->
      <div class="flex items-center justify-between mb-8">
        <div>
          <h1 class="text-3xl font-bold mb-2">主题设置</h1>
          <p class="opacity-60">实时修改 CSS 变量 - 当前模式：{{ isDark ? '深色' : '浅色' }}</p>
        </div>
        <div class="flex gap-3">
          <button @click="toggleDark" class="btn btn-secondary">
            {{ isDark ? '切换浅色' : '切换深色' }}
          </button>
          <button @click="resetTheme" class="btn btn-outline">重置当前模式</button>
          <button @click="exportTheme" class="btn btn-primary">导出 CSS</button>
        </div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <!-- 左侧：分类 -->
        <div class="lg:col-span-1">
          <div class="card sticky top-6">
            <div class="space-y-1 menu">
              <button
                v-for="category in categories"
                :key="category.id"
                @click="activeCategory = category.id"
                :class="['btn btn-full', activeCategory === category.id && 'active']"
              >
                {{ category.label }}
              </button>
            </div>
          </div>
        </div>

        <!-- 右侧：变量编辑和预览 -->
        <div class="lg:col-span-3 space-y-6">
          <!-- 变量编辑区 -->
          <div class="card">
            <div class="card-header">
              <h2 class="card-title">
                {{ currentCategory?.label }} ({{ isDark ? '深色' : '浅色' }})
              </h2>
            </div>
            <div class="card-body">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div v-for="variable in currentVariables" :key="variable.name">
                  <label class="label">{{ variable.label }}</label>
                  <div class="flex gap-2">
                    <div
                      v-if="variable.type === 'color'"
                      class="w-12 h-10 rounded border-2 cursor-pointer flex-shrink-0"
                      :style="{ background: `var(${variable.name})` }"
                    />
                    <input
                      v-model="currentThemeVars[variable.name]"
                      @input="updateCSSVar(variable.name, currentThemeVars[variable.name])"
                      class="input flex-1"
                      :placeholder="isDark ? variable.dark : variable.light"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- 预览区 -->
          <div class="card">
            <div class="card-header"><h2 class="text-xl font-semibold">实时预览</h2></div>

            <div class="space-y-6 card-body">
              <!-- 按钮 -->
              <div>
                <h3 class="text-sm font-semibold mb-3">按钮</h3>
                <div class="flex flex-wrap gap-2">
                  <button class="btn btn-primary">Primary</button>
                  <button class="btn btn-secondary">Secondary</button>
                  <button class="btn btn-accent">Accent</button>
                  <button class="btn btn-outline">Outline</button>
                  <button class="btn btn-destructive">Destructive</button>
                </div>
              </div>

              <!-- 卡片 -->
              <div>
                <h3 class="text-sm font-semibold mb-3">卡片</h3>
                <div class="card p-4">
                  <h4 class="font-semibold mb-2">卡片标题</h4>
                  <p class="text-sm opacity-60">这是一个卡片示例，用于展示背景色和文字颜色。</p>
                </div>
              </div>

              <!-- 输入框 -->
              <div>
                <h3 class="text-sm font-semibold mb-3">输入框</h3>
                <input type="text" placeholder="输入文本..." class="input w-full max-w-md" />
              </div>

              <!-- 状态 -->
              <div>
                <h3 class="text-sm font-semibold mb-3">状态颜色</h3>
                <div class="flex flex-wrap gap-2">
                  <div class="badge badge-success">Success</div>
                  <div class="badge badge-info">Info</div>
                  <div class="badge badge-warning">Warning</div>
                  <div class="badge badge-error">error</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, watch } from 'vue'

const isDark = ref(false)
const activeCategory = ref('colors')
const lightVars = ref<Record<string, string>>({})
const darkVars = ref<Record<string, string>>({})

// 分类定义
const categories = [
  { id: 'colors', label: '颜色' },
  { id: 'semantic', label: '语义色' },
  { id: 'status', label: '状态色' },
  { id: 'chart', label: '图表色' },
  { id: 'other', label: '其他' },
]

// 变量定义 - 浅色和深色分开
const variables = {
  colors: [
    {
      name: '--background',
      label: '背景色',
      type: 'color',
      light: 'oklch(98.5% 0.008 280)',
      dark: 'oklch(0.1743 0.0227 283.7998)',
    },
    {
      name: '--foreground',
      label: '前景色',
      type: 'color',
      light: 'oklch(0.25 0.02 280)',
      dark: 'oklch(0.9185 0.0257 285.8834)',
    },
    {
      name: '--card',
      label: '卡片背景',
      type: 'color',
      light: 'oklch(99.5% 0.002 280)',
      dark: 'oklch(0.2284 0.0384 282.9324)',
    },
    {
      name: '--card-foreground',
      label: '卡片文字',
      type: 'color',
      light: 'oklch(0.25 0.02 280)',
      dark: 'oklch(0.9185 0.0257 285.8834)',
    },
    {
      name: '--primary',
      label: '主色',
      type: 'color',
      light: 'oklch(0.55 0.22 285)',
      dark: 'oklch(0.7162 0.1597 290.3962)',
    },
    {
      name: '--primary-foreground',
      label: '主色文字',
      type: 'color',
      light: 'oklch(0.99 0 0)',
      dark: 'oklch(0.1743 0.0227 283.7998)',
    },
    {
      name: '--secondary',
      label: '次要色',
      type: 'color',
      light: 'oklch(65.211% 0.19064 286.761)',
      dark: 'oklch(0.3139 0.0736 283.4591)',
    },
    {
      name: '--secondary-foreground',
      label: '次要色文字',
      type: 'color',
      light: 'oklch(0.99 0 0)',
      dark: 'oklch(0.8367 0.0849 285.9111)',
    },
  ],
  semantic: [
    {
      name: '--muted',
      label: '弱化色',
      type: 'color',
      light: 'oklch(0.96 0.015 285)',
      dark: 'oklch(0.271 0.0621 281.4377)',
    },
    {
      name: '--muted-foreground',
      label: '弱化文字',
      type: 'color',
      light: 'oklch(0.5 0.04 285)',
      dark: 'oklch(0.7166 0.0462 285.1741)',
    },
    {
      name: '--accent',
      label: '强调色',
      type: 'color',
      light: 'oklch(0.93 0.055 270)',
      dark: 'oklch(0.3354 0.0828 280.9705)',
    },
    {
      name: '--accent-foreground',
      label: '强调文字',
      type: 'color',
      light: 'oklch(0.25 0.02 280)',
      dark: 'oklch(0.9185 0.0257 285.8834)',
    },
    {
      name: '--border',
      label: '边框色',
      type: 'color',
      light: 'oklch(0.92 0.018 285)',
      dark: 'oklch(0.3261 0.0597 282.5832)',
    },
    {
      name: '--input',
      label: '输入框边框',
      type: 'color',
      light: 'oklch(0.92 0.018 285)',
      dark: 'oklch(0.3261 0.0597 282.5832)',
    },
    {
      name: '--ring',
      label: '聚焦环',
      type: 'color',
      light: 'oklch(0.55 0.22 285)',
      dark: 'oklch(0.7162 0.1597 290.3962)',
    },
  ],
  status: [
    {
      name: '--success',
      label: '成功色',
      type: 'color',
      light: 'oklch(0.75 0.15 150)',
      dark: 'oklch(0.65 0.16 150)',
    },
    {
      name: '--success-foreground',
      label: '成功文字',
      type: 'color',
      light: 'oklch(0.2 0.03 150)',
      dark: 'oklch(0.12 0.02 150)',
    },
    {
      name: '--info',
      label: '信息色',
      type: 'color',
      light: 'oklch(0.78 0.12 250)',
      dark: 'oklch(0.68 0.14 250)',
    },
    {
      name: '--info-foreground',
      label: '信息文字',
      type: 'color',
      light: 'oklch(0.2 0.04 250)',
      dark: 'oklch(0.12 0.03 250)',
    },
    {
      name: '--warning',
      label: '警告色',
      type: 'color',
      light: 'oklch(0.86 0.14 80)',
      dark: 'oklch(0.76 0.15 80)',
    },
    {
      name: '--warning-foreground',
      label: '警告文字',
      type: 'color',
      light: 'oklch(0.25 0.05 80)',
      dark: 'oklch(0.12 0.04 80)',
    },
    {
      name: '--destructive',
      label: '危险色',
      type: 'color',
      light: 'oklch(63.408% 0.23096 22.528)',
      dark: 'oklch(0.6861 0.2061 14.9941)',
    },
    {
      name: '--destructive-foreground',
      label: '危险文字',
      type: 'color',
      light: 'oklch(0.99 0 0)',
      dark: 'oklch(1 0 0)',
    },
  ],
  chart: [
    {
      name: '--chart-1',
      label: '图表色 1',
      type: 'color',
      light: 'oklch(0.55 0.22 285)',
      dark: 'oklch(0.7162 0.1597 290.3962)',
    },
    {
      name: '--chart-2',
      label: '图表色 2',
      type: 'color',
      light: 'oklch(0.65 0.18 275)',
      dark: 'oklch(0.6382 0.1047 274.9117)',
    },
    {
      name: '--chart-3',
      label: '图表色 3',
      type: 'color',
      light: 'oklch(0.6 0.25 290)',
      dark: 'oklch(0.7482 0.1235 244.7492)',
    },
    {
      name: '--chart-4',
      label: '图表色 4',
      type: 'color',
      light: 'oklch(0.7 0.15 265)',
      dark: 'oklch(0.7124 0.0977 186.6761)',
    },
    {
      name: '--chart-5',
      label: '图表色 5',
      type: 'color',
      light: 'oklch(0.48 0.2 295)',
      dark: 'oklch(0.7546 0.1831 346.8124)',
    },
  ],
  other: [
    {
      name: '--radius',
      label: '圆角',
      type: 'text',
      light: '0',
      dark: '0.5rem',
    },
  ],
}

const currentCategory = computed(() => categories.find((c) => c.id === activeCategory.value))
const currentVariables = computed(
  () => variables[activeCategory.value as keyof typeof variables] || [],
)

// 当前模式的变量
const currentThemeVars = computed(() => (isDark.value ? darkVars.value : lightVars.value))

// 更新 CSS 变量
const updateCSSVar = (name: string, value: string) => {
  document.documentElement.style.setProperty(name, value)
  // 同时保存到对应的模式
  if (isDark.value) {
    darkVars.value[name] = value
  } else {
    lightVars.value[name] = value
  }
}

// 切换深色模式
const toggleDark = () => {
  isDark.value = !isDark.value
  document.documentElement.classList.toggle('dark', isDark.value)

  // 应用当前模式的所有变量
  Object.entries(currentThemeVars.value).forEach(([name, value]) => {
    document.documentElement.style.setProperty(name, value)
  })
}

// 重置主题
const resetTheme = () => {
  Object.values(variables)
    .flat()
    .forEach((v) => {
      const defaultValue = isDark.value ? v.dark : v.light
      currentThemeVars.value[v.name] = defaultValue
      updateCSSVar(v.name, defaultValue)
    })
}

// 导出 CSS
const exportTheme = () => {
  const lightCss = Object.entries(lightVars.value)
    .map(([name, value]) => `  ${name}: ${value};`)
    .join('\n')

  const darkCss = Object.entries(darkVars.value)
    .map(([name, value]) => `  ${name}: ${value};`)
    .join('\n')

  const fullCSS = `:root {\n${lightCss}\n}\n\n.dark {\n${darkCss}\n}`

  navigator.clipboard.writeText(fullCSS).then(() => {
    alert('CSS 已复制到剪贴板！')
  })
}

// 初始化
onMounted(() => {
  // 检测当前是否是深色模式
  isDark.value = document.documentElement.classList.contains('dark')

  // 读取当前 CSS 变量值
  const root = document.documentElement

  // 先切到浅色模式读取浅色变量
  document.documentElement.classList.remove('dark')
  let computedStyle = getComputedStyle(root)
  Object.values(variables)
    .flat()
    .forEach((v) => {
      const currentValue = computedStyle.getPropertyValue(v.name).trim()
      lightVars.value[v.name] = currentValue || v.light
    })

  // 再切到深色模式读取深色变量
  document.documentElement.classList.add('dark')
  computedStyle = getComputedStyle(root)
  Object.values(variables)
    .flat()
    .forEach((v) => {
      const currentValue = computedStyle.getPropertyValue(v.name).trim()
      darkVars.value[v.name] = currentValue || v.dark
    })

  // 恢复原来的模式
  if (!isDark.value) {
    document.documentElement.classList.remove('dark')
  }
})
</script>
