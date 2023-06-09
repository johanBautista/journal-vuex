import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import daybookRouter from "@/modules/daybook/router";
const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: () => import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/daybook",
    ...daybookRouter,
    // name: "daybook",
    // component: () => import(/* webpackChunkName: "daybook" */ "../modules/daybook/layouts/DayBookLayout.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
