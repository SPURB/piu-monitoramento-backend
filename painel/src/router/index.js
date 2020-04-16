import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    meta: {
      titulo: 'Login'
    },
    component: () => import(/* webpackChunkName: "login" */ '@/views/Login')
  },
  {
    path: '/painel',
    name: 'painel',
    meta: {
      titulo: 'Painel Administrativo'
    },
    component: () => import(/* webpackChunkName: "painel" */ '@/views/Painel')
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
