<script setup lang="ts">
import { faker } from "@faker-js/faker";
import { ref } from "vue";

const listje = ref<Array<string>>([]);

setTimeout(() => {
  listje.value = [...Array(300)].map(() => faker.word.noun());
}, 2000);
</script>

<template>
  <ul>
    <li v-for="(listItem, index) in listje" :key="index">
      {{ listItem }}
    </li>
  </ul>
</template>

<style scoped></style>
