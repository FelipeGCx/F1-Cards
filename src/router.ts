import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/countries",
    name: "countries",
    component: () => import("./views/countries/index.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
