import Vue from 'vue'
import Router from 'vue-router'
import about from '@/components/about'
import home from '@/components/home'
import nav from '@/components/nav'

Vue.use(Router)

export default new Router({
  linkActiveClass: 'active',
  linkExactActiveClass: 'active',
  routes: [
    {
      path: '/nav',
      component: nav,
      children: [{
        name:'home',
        path: '/home',
        component: home
      },{
        name:'about',
        path: '/about',
        component: about
      }]
    }
  ]
})
