<script setup lang="ts">
import { onActivated } from "vue";
import HeavyComponent from "../components/HeavyComponent.vue";

onActivated(() => {
  console.log("component was activated");
});
</script>

<template>
  <div>
    <HeavyComponent :amount-of-items="10000" />
  </div>
</template>

<style scoped></style>
