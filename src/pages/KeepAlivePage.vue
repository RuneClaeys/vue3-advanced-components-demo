<script setup lang="ts"></script>

<template>
  <nav>
    <RouterLink :to="'/tab-1'" :active-class="'active'">tab 1</RouterLink>
    <RouterLink :to="'/tab-2'" :active-class="'active'">tab 2</RouterLink>
    <RouterLink :to="'/tab-3'" :active-class="'active'">tab 3</RouterLink>
  </nav>

  <RouterView v-slot="{ Component }">
    <template v-if="Component">
      <Transition name="fade" mode="out-in">
        <KeepAlive>
          <Suspense>
            <component :is="Component"></component>
            <template #fallback> Loading... </template>
          </Suspense>
        </KeepAlive>
      </Transition>
    </template>
  </RouterView>
</template>

<style scoped>
nav {
  display: flex;
  gap: 20px;
}
a.active {
  font-weight: bold;
}
</style>
