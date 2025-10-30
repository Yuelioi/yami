<template>
  <header>
    <h1
      class="text-3xl font-bold border-b border-border pb-4"
      data-v-inspector="src/examples/actions/ModalExample.vue:3:5"
    >
      {{ title }}
    </h1>
    <p class="text-muted-foreground">{{ description }}</p>
  </header>
</template>

<script setup lang="ts">
interface Props {
  title: string;
  description?: string;
}

withDefaults(defineProps<Props>(), {
  title: "组件示例",
  description: "组件的描述信息",
});
</script>
