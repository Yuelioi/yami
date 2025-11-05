<template>
  <div class="flex bg-background">
    <aside class="w-72 p-4 border-r border-border fixed left-0 top-0 bottom-0 z-10">
      <nav class="flex flex-col overflow-y-auto h-full">
        <ul v-for="g in filteredTabs" :key="g.group" class="menu w-full">
          <h3 class="font-bold text-lg mb-2">{{ g.group }}</h3>
          <li>
            <RouterLink
              v-for="item in g.items"
              :key="item.value"
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

    <main class="flex-1 overflow-auto relative pl-72 bg-background">
      <div
        class="p-4 border-b h-16 fixed border-border flex justify-between items-center top-0 left-72 right-0 z-10 bg-background"
      >
        <h2 class="text-xl font-semibold capitalize">
          {{ currentTitle || 'Home' }}
        </h2>
        <ThemeToggle class="ml-auto" />
        <Settings class="size-5 ml-3 cursor-pointer" @click="$router.push({ name: 'setting' })" />
      </div>
      <div class="p-6 mt-16">
        <RouterView />
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, RouterLink, RouterView } from 'vue-router'
import ThemeToggle from './components/ThemeToggle.vue'
import { Settings } from 'lucide-vue-next'
import { tabs, type TabItem } from './router' // 导入菜单数据

const route = useRoute()

/* ------------------ 类型定义 ------------------ */
type FilteredTabs = {
  group: string
  items: TabItem[]
}

/* ------------------ 按组分组（使用导入的 tabs 数据） ------------------ */
const grouped = tabs.reduce(
  (acc, item) => {
    if (!acc[item.group]) acc[item.group] = []
    acc[item.group].push(item)
    return acc
  },
  {} as Record<string, TabItem[]>,
)

const filteredTabs: FilteredTabs[] = Object.entries(grouped).map(([group, items]) => ({
  group,
  items,
}))

/* ------------------ 当前标题 ------------------ */
const currentTitle = computed(() => {
  // 从路由 meta 或路由名称中获取标题
  if (route.name === 'setting') {
    return '设置'
  }
  return route.meta.label || String(route.name)
})
</script>
