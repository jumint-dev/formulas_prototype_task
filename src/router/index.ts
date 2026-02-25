import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'

// 路由配置
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/HomePage.vue'),
    meta: { title: '任务数据保障系统' }
  },
  {
    path: '/management',
    name: 'Management',
    component: () => import('../views/ManagementPage.vue'),
    meta: { title: '任务数据保障管理' }
  },
  {
    path: '/management/joint-air-operation',
    name: 'JointAirOperation',
    component: () => import('../views/JointAirOperationPage.vue'),
    meta: { title: '联合空中作战筹划主题数据保障' }
  },
  {
    path: '/validation',
    name: 'Validation',
    component: () => import('../views/ValidationPage.vue'),
    meta: { title: '任务数据保障流程验证管理' }
  },
  {
    path: '/tools',
    name: 'Tools',
    component: () => import('../views/ToolsPage.vue'),
    meta: { title: '任务数据验证工具研制' }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
