import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Nav from '../views/Nav.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/nav',
      name: 'nav',
      component: Nav
    },
  ]
})


export default router
