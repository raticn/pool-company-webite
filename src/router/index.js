import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Nav from '../views/Nav.vue'
import Kontakt from '../views/Kontakt.vue'

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
    { 
      path: '/kontakt',
      name: 'kontakt',
      component: Kontakt 
    }
  ]
})


export default router
