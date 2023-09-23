import { createRouter, createWebHistory } from "@ionic/vue-router";
import { RouteRecordRaw } from "vue-router";
import RootPage from "@/views/RootPage.vue";
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "welcome",
    component: RootPage,
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: "/",
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});
export default router;
