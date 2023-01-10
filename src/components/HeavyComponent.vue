<script setup lang="ts">
import { faker } from "@faker-js/faker";
import { NxtTable } from "@future-harry/nxt-styles";
import { ref } from "vue";

const props = defineProps({ amountOfItems: { type: Number, default: 100 } });

const items = ref(faker.datatype.array(props.amountOfItems));

function yeet() {
  console.log("yeet");
}
</script>

<template>
  <NxtTable
    :loading="false"
    :count="items.length"
    :fixed-heading="true"
    :hover-effect="true"
  >
    <template #head>
      <th>??????</th>
    </template>
    <template #body>
      <tr v-for="(item, index) in items" :key="index" @click="yeet">
        <td>{{ item }}</td>
      </tr>
    </template>
  </NxtTable>
</template>
