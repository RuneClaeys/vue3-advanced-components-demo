<script setup lang="ts">
import { defineAsyncComponent } from "vue";

import ActorsList from "../components/ActorsList.vue";

const HeavyComponent = defineAsyncComponent(
  () => import("../components/HeavyComponent.vue")
);
</script>

<template>
  <div class="suspense-page">
    <div class="suspense-page__grid-item">
      <ActorsList :delay-ms="200" />
    </div>

    <div class="suspense-page__grid-item">
      <ActorsList :delay-ms="2000" />
    </div>

    <div class="suspense-page__grid-item">
      <HeavyComponent :amount-of-items="10000" />
    </div>

    <div class="suspense-page__grid_item">NOT THAT FAST AF BOYYYY</div>
  </div>
</template>

<style>
.suspense-page {
  display: grid;
  grid-template-rows: 400px 400px;
  grid-template-columns: 1fr 1fr;
  gap: var(--nxt-gutter);
}

.suspense-page__grid-item {
  width: 100%;
  overflow: auto;
}

.loading {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--nxt-medium-grey);
}
</style>
