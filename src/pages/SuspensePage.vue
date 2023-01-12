<script setup lang="ts">
import { defineAsyncComponent } from "vue";

const HeavyComponent = defineAsyncComponent(
  () => import("../components/HeavyComponent.vue")
);
</script>

<template>
  <Suspense>
    <HeavyComponent :border-color="'blue'" />
    <template #fallback> loading </template>
  </Suspense>
</template>

<style scoped></style>
