import { createMemoryHistory, createRouter } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import AuthRoutes from '../modules/auth/router';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
  },
  ...AuthRoutes
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router
