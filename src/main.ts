import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";
import "./style.css";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: () => import("./pages/HomePage.vue") },
    { path: "/suspense", component: () => import("./pages/SuspensePage.vue") },
    {
      path: "/suspenseless",
      component: () => import("./pages/SuspenselessPage.vue"),
    },
    {
      path: "/keep-alive",
      component: () => import("./pages/KeepAlivePage.vue"),
      children: [
        {
          path: "/tab-1",
          alias: "",
          component: () => import("./pages/keep-alive/Tab1.vue"),
        },
        {
          path: "/tab-2",
          component: () => import("./pages/keep-alive/Tab2.vue"),
        },
        {
          path: "/tab-3",
          component: () => import("./pages/keep-alive/Tab3.vue"),
        },
      ],
    },
  ],
});

createApp(App).use(router).mount("#app");
