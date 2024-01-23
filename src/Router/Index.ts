import { RouteRecordRaw, createRouter, createWebHistory } from "vue-router";
import Index from "@/Views/Index";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "Index",
    component: Index,
  },
  {
    path: "/About",
    name: "About",
    component: () => import("@/Views/About"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
