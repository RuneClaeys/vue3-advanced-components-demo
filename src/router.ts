import { createRouter, createWebHistory } from "vue-router";

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "",
      component: () => import("./pages/Index.vue"),
    },
    {
      path: "/suspense",
      component: () => import("./pages/SuspensePage.vue"),
    },
    {
      path: "/suspenseless",
      component: () => import("./pages/SuspenselessPage.vue"),
    },
    {
      path: "/keep-alive",
      component: () => import("./pages/KeepAlivePage.vue"),
    },
  ],
});
