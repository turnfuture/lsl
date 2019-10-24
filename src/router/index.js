import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    component: Index,
    meta: {
      title: '首页'
    }
  }, {
    path: '/sass',
    name: 'sass',
    component: () => import('../views/Sass.vue'),
    meta: {
      title: 'Sass'
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
