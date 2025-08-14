//创建路由,使用WebHash模式
import { createRouter, createWebHistory } from 'vue-router'

//指定路由规则
// routes是一个数组
const routes = [
  {
    path: '/',
    name: 'main',
    component: () => import('@/views/Main.vue'),
  },
]

//创建路由器
const router = createRouter({
  // 路由模式
  history: createWebHistory(),
  routes,
})

//向外暴露路由
export default router
