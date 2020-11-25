import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/HomePage.vue'
import Login from '../pages/Login.vue'

const routes = [
  {
    path: '/login',
    component: Login,
  },
  {
    path: '/home',
    component: HomePage,
  },
]
const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
