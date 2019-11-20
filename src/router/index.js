import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    component: () => import('../views/Index.vue'),
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
  }, {
    path: '/js',
    name: 'js',
    component: () => import('../views/js/index.vue'),
    meta: {
      title: 'js汇总'
    }
  }, {
    path: '/vue',
    name: 'vue',
    component: () => import('../views/vue/index.vue'),
    meta: {
      title: 'vue汇总'
    }
  }, {
    path: '/html',
    name: 'html5s',
    component: () => import('../views/html5/index.vue'),
    meta: {
      title: 'html4'
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
