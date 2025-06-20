import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/leion-hey2',
      name: 'leion-hey2',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/LeionHey.vue'),
    },
    {
      path: '/brand',
      name: 'brand',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/BrandView.vue'),
    },
    {
      path: '/contact',
      name: 'contact',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ContactView.vue'),
    },
  ],
// 这个配置的作用是：
// 如果用户是通过浏览器前进/后退按钮导航，savedPosition 会记录之前的滚动位置，页面会回到那个位置。
// 对于其他路由导航（比如点击菜单项），页面会强制滚动到 top: 0 和 left: 0，也就是页面的最顶部。
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { left: 0, top: 0 }
    }
  },
})

export default router
