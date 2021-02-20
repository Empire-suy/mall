import VueRouter from 'vue-router'
import Vue from 'vue'

Vue.use(VueRouter)

const Home = () => import('views/home/Home')

const routes = [
  {
    path: '/',
    component: Home
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
