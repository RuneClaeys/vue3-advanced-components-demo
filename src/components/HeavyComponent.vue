<script setup lang="ts">
defineProps({
  borderColor: { type: String, default: "red" },
});
</script>

<template>
  <div class="test">
    <div v-for="i in 50000" :style="{ borderColor }">test</div>
  </div>
</template>

<style scoped>
.test {
  height: 600px;
  width: 600px;

  display: flex;
  flex-wrap: wrap;
  overflow: auto;
  gap: 10px;
}

.test > div {
  height: 50px;
  width: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid peru;
}
</style>
