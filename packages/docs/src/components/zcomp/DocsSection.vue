<template>
  <section>
    <h2 class="text-2xl font-semibold mb-2 border-b pb-2">
      {{ title }}
    </h2>
    <p class="mb-4 text-gray-600 text-sm">{{ description }}</p>
    <div class="flex flex-wrap flex-col gap-4">
      <slot />
    </div>
  </section>
</template>

<script setup lang="ts">
interface Props {
  title: string
  description?: string
}
withDefaults(defineProps<Props>(), {
  title: 'Docs Section',
  description: '',
})
</script>
