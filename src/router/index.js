import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/our-services',
      name: 'our-services',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('./../views/OurServices.vue')
    },
    {
      path: '/contactUs',
      name: 'contact-us',
      component: () => import('./../views/ContactUs.vue')
    },
    {
      path: '/aboutUs',
      name: 'about-us',
      component: () => import('./../views/AboutUs.vue')
    },
    {
      path: '/our-works',
      name: 'our-works',
      component: () => import('./../views/OurWorks.vue')
    }
  ]
})

export default router
