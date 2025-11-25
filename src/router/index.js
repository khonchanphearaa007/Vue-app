import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import NotFoundView from "../views/NotFoundView.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/jobs",
      name: "jobs",
      component: () => import("../views/JobsView.vue"),
    },
    {
        path: "/jobs/:id",
        name: "job",
        component: () => import("../views/JobView.vue"),
    },
    {
      path: "/:catchAll(.*)",
      name: "not-found",
      component: NotFoundView,    
    }
  ],
});
export default router;
