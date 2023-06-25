import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PolicyView from '../views/PolicyView.vue'
import ContactView from '../views/ContactView.vue'
import ContactComplete from '../views/ContactComplete.vue'

import Sample from '../components/HumSample.vue'

import NotFound from '../views/NotFound.vue'


Vue.use(VueRouter)

const router = new VueRouter({
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return {
        top: 0
      }
    }
  },
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
      path: '/contact_complete',
      name: 'contact_complete',
      component: ContactComplete
    },
    {
      path: '/:pathMatch(.*)',
      component: NotFound
    },
    {
      path: '/sample',
      component: Sample
    },
  ]
})

export default router
