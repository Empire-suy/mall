import VueRouter from 'vue-router'
import Vue from 'vue'

Vue.use(VueRouter)

const Home = () => import('views/home/Home')
const Category = () => import('views/category/Category')

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/category',
    component: Category
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
