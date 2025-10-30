<template>
  <section>
    <h2 class="text-2xl font-semibold mb-4 border-b pb-2">
      {{ title }}
    </h2>
    <div class="flex flex-wrap flex-col gap-4">
      <slot />
    </div>
  </section>
</template>

<script setup lang="ts">
interface Props {
  title: string;
}
withDefaults(defineProps<Props>(), {
  title: "Docs Section",
});
</script>
