import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Nav from '../views/Nav.vue'
import Kontakt from '../views/Kontakt.vue'
import Galerija from '../views/Galerija.vue'


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
    },
    { 
      path: '/galerija',
      name: 'galerija',
      component: Galerija 
    }
  ]
})


export default router
