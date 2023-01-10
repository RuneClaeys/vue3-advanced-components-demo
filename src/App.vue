<script setup lang="ts">
import { NxtTabs } from "@future-harry/nxt-styles";
</script>

<template>
  <div class="app">
    <nav class="app__nav">
      <NxtTabs>
        <RouterLink :to="'/'" :active-class="'active'"> Home </RouterLink>
        <RouterLink :to="'/suspense'" :active-class="'active'">
          Suspense
        </RouterLink>
        <RouterLink :to="'/suspenseless'" :active-class="'active'">
          Suspenseless
        </RouterLink>
        <RouterLink :to="'/keep-alive'" :active-class="'active'">
          Keep Alive
        </RouterLink>
      </NxtTabs>
    </nav>
    <main class="app__main">
      <RouterView v-slot="{ Component }">
        <KeepAlive>
          <component :is="Component" />
        </KeepAlive>
      </RouterView>
    </main>
  </div>
</template>

<style src="@future-harry/nxt-styles/dist/css/nxt-styles.min.css"></style>

<style>
.app {
}
.app__nav {
  padding: var(--nxt-gutter);
  background-color: var(--nxt-white);
  top: 0;
  position: sticky;
}
.app__main {
  padding: var(--nxt-gutter);
}
</style>
