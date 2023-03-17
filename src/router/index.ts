import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router"

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/login"
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/login/LoginPage.vue")
  },
  {
    path: "/home",
    component: () => import("@/views/home/index.vue")
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
// router.beforeEach((to, form) => {
//   if (!isAuthenticated && to.name !== "login") {
//     return { name: "login" }
//   }
// })
export default router
