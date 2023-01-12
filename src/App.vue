<script setup lang="ts"></script>

<template>
  <div class="app">
    <nav>
      <RouterLink :active-class="'active'" :to="'/'">Home</RouterLink>
      <RouterLink :active-class="'active'" :to="'/suspense'"
        >Suspense</RouterLink
      >
      <RouterLink :active-class="'active'" :to="'/suspenseless'"
        >Suspenseless</RouterLink
      >
      <RouterLink :active-class="'active'" :to="'/keep-alive'"
        >KeepAlive</RouterLink
      >
    </nav>
    <RouterView />
  </div>
</template>

<style scoped>
nav {
  display: flex;
  gap: 20px;
}

a.active {
  font-weight: bold;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
