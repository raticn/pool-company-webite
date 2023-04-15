import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Nav from '../views/Nav.vue'
import Kontakt from '../views/Kontakt.vue'
import Galerija from '../views/Galerija.vue'
import GalerijaSekcija from '../views/GalerijaSekcija.vue'
import Hemija from '../views/Hemija.vue'


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
    },
    { 
      path: '/galerijaSekcija',
      name: 'galerijaSekcija',
      component: GalerijaSekcija
    },
    { 
      path: '/hemijskaSredstva',
      name: 'hemijskaSredstva',
      component: Hemija
    },
  ]
})


export default router
