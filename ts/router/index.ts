
import Vue from '../../js/lib/vue.js'
import VueRouter from '../../js/lib/vue-router.js'

import Home from '../views/home.js'
import About from '../views/about.js'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: About
  }
]

const router = new VueRouter({
  mode: 'history',
  base: '/',
  routes
})

export default router
