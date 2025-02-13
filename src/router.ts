import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    redirect: "/drivers",
  },
  {
    path: "/drivers",
    name: "drivers",
    component: () => import("./views/drivers/index.vue"),
  },
  // {
  //   path: "/test",
  //   name: "test",
  //   component: () => import("./views/test.vue"),
  // },
  {
    path: "/cars",
    name: "cars",
    component: () => import("./views/cars/index.vue"),
  },
  {
    path: "/countries",
    name: "countries",
    component: () => import("./views/countries/index.vue"),
  },
  {
    path: "/circuits",
    name: "circuits",
    component: () => import("./views/circuits/index.vue"),
  },
  {
    path: "/scuderies",
    name: "scuderies",
    component: () => import("./views/scuderies/index.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
