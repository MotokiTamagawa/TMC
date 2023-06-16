import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PolicyView from '../views/PolicyView.vue'
import ContactView from '../views/ContactView.vue'
import ContactConfirm from '../views/ContactConfirm.vue'

import NotFound from '../views/NotFound.vue'


Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: import.meta.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/policy',
      name: 'policy',
      component: PolicyView
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView
    },
    {
      path: '/contact_confirm',
      name: 'contact_confirm',
      component: ContactConfirm
    },
    {
      path: '/:pathMatch(.*)',
      component: NotFound
    },

  ]
})

export default router
