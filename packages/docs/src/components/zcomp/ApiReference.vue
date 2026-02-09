<template>
  <section class="rounded collapse collapse-arrow">
    <input type="checkbox" :checked="defaultOpen" />

    <div class="py-4 border-b border-border collapse-title px-0">
      <h2 class="text-2xl font-semibold flex items-center gap-2 text-base-content">
        <span v-if="icon" class="text-primary">{{ icon }}</span>
        {{ title }}
      </h2>
      <p v-if="subtitle" class="text-sm text-base-content/60 mt-1">
        {{ subtitle }}
      </p>
    </div>

    <div class="overflow-x-auto bg-base-100 collapse-content">
      <table class="table w-full divide-y divide-border bg-base-100">
        <thead>
          <tr class="bg-base-200/50">
            <th
              v-for="header in headers"
              :key="header"
              class="px-6 py-3 text-left text-xs font-medium text-base-content/60 uppercase tracking-wider"
            >
              {{ header }}
            </th>
          </tr>
        </thead>

        <tbody class="divide-y divide-border">
          <template v-for="(group, category) in groupedData" :key="category">
            <tr v-for="(entry, index) in group" :key="entry.className || index">
              <td
                v-if="index === 0"
                class="px-6 py-4 whitespace-nowrap align-top font-medium text-base-content"
                :rowspan="group.length"
              >
                {{ category }}
              </td>

              <td class="px-6 py-4 whitespace-nowrap font-mono text-sm text-primary">
                <code class="px-2 py-1 bg-base-200/70 rounded text-sm font-mono text-base-content">
                  {{ entry.className }}
                </code>
              </td>

              <td class="px-6 py-4 text-sm text-base-content/60">
                {{ entry.description }}
              </td>
            </tr>
          </template>
        </tbody>
      </table>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface ApiReferenceEntry {
  category: string
  className: string
  description: string
}

interface Props {
  title?: string
  subtitle?: string
  icon?: string
  data: ApiReferenceEntry[]
  defaultOpen?: boolean
}

const headers = ['类别', '类名', '描述']

const props = withDefaults(defineProps<Props>(), {
  title: 'Api 参考',
  icon: '',
  defaultOpen: false,
})

/**
 * 将数据按 category 分组
 */
const groupedData = computed(() => {
  return props.data.reduce(
    (acc, curr) => {
      const key = curr.category || '未分类'
      if (!acc[key]) acc[key] = []
      acc[key].push(curr)
      return acc
    },
    {} as Record<string, ApiReferenceEntry[]>,
  )
})
</script>
