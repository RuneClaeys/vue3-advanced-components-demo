<script setup lang="ts">
import { NxtCard } from "@future-harry/nxt-styles";
import { onMounted, ref } from "vue";
import { Actor } from "../models/actor.interface";

const props = defineProps({
  delayMs: { type: Number, default: 500 },
});

const actors = ref([] as Array<Actor>);

onMounted(async () => {
  actors.value = await new Promise((resolve) => {
    setTimeout(async () => {
      resolve(
        await fetch("https://api.tvmaze.com/people").then((response) =>
          response.json()
        )
      );
    }, props.delayMs);
  });
});
</script>

<template>
  <div class="actors">
    <NxtCard v-for="actor in actors" :key="actor.id">
      {{ actor.name }}
    </NxtCard>
  </div>
</template>

<style scoped>
.actors {
  display: flex;
  flex-direction: column;
  gap: var(--nxt-gutter-small);
}
</style>
