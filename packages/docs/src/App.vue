<template>
  <div class="flex bg-base-100">
    <!-- 侧边栏 -->
    <aside class="w-72 p-4 border-r border-border fixed left-0 top-0 bottom-0 z-10">
      <nav class="flex flex-col overflow-y-auto h-full">
        <ul v-for="g in filteredTabs" :key="g.group" class="menu menu-sm w-full">
          <h3 class="font-bold text-lg mb-2">
            {{ g.group }}
          </h3>

          <li v-for="item in g.items" :key="item.value">
            <RouterLink
              :to="{ name: item.value }"
              class="w-full justify-start"
              :class="{ 'menu-active': $route.name === item.value }"
            >
              {{ item.label }}
            </RouterLink>
          </li>
        </ul>
      </nav>
    </aside>

    <!-- 主体 -->
    <main class="flex-1 overflow-auto relative pl-72 bg-base-100">
      <!-- 顶部栏 -->
      <div
        class="p-4 border-b h-16 fixed border-border flex items-center top-0 left-72 right-0 z-10 bg-base-100"
      >
        <h2 class="text-xl font-semibold capitalize">
          {{ currentTitle || 'Home' }}
        </h2>

        <div class="flex items-center gap-3 ml-auto">
          <!-- 排序切换按钮 -->
          <button class="btn btn-sm" @click="toggleMode">
            {{ isAlphaMode ? '按分类显示' : '按字母排序' }}
          </button>

          <ThemeToggle />
          <Settings class="size-5 cursor-pointer" @click="$router.push({ name: 'setting' })" />
        </div>
      </div>

      <!-- 内容区 -->
      <div class="p-6 mt-16">
        <RouterView />
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { useRoute, RouterLink, RouterView } from 'vue-router'
import ThemeToggle from './components/ThemeToggle.vue'
import { Settings } from 'lucide-vue-next'
import { tabs, type TabItem } from './router'

const route = useRoute()

/* ------------------ 状态 ------------------ */
const isAlphaMode = ref(true)

/* ------------------ 类型 ------------------ */
type FilteredTabs = {
  group: string
  items: TabItem[]
}

/* ------------------ 切换模式 ------------------ */
const toggleMode = () => {
  isAlphaMode.value = !isAlphaMode.value
}

/* ------------------ 菜单数据处理 ------------------ */
const filteredTabs = computed<FilteredTabs[]>(() => {
  // 按字母排序（扁平）
  if (isAlphaMode.value) {
    const sorted = [...tabs].sort((a, b) => a.label.localeCompare(b.label, 'zh-Hans-CN'))

    return [
      {
        group: '全部组件',
        items: sorted,
      },
    ]
  }

  // 按分类分组
  const grouped = tabs.reduce(
    (acc, item) => {
      if (!acc[item.group]) acc[item.group] = []
      acc[item.group].push(item)
      return acc
    },
    {} as Record<string, TabItem[]>,
  )

  return Object.entries(grouped).map(([group, items]) => ({
    group,
    items,
  }))
})

/* ------------------ 当前标题 ------------------ */
const currentTitle = computed(() => {
  if (route.name === 'setting') {
    return '设置'
  }
  return route.meta.label || String(route.name)
})
</script>
