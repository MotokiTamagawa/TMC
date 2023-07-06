import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PolicyView from '../views/PolicyView.vue'
import ContactView from '../views/ContactView.vue'
import ContactComplete from '../views/ContactComplete.vue'

import PriceTable from '../views/PriceTable.vue'



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
      path: '/price_table',
      name: 'price_table',
      component: PriceTable
    },
    {
      path: '/:pathMatch(.*)',
      component: NotFound
    }
  ]
})

export default router
