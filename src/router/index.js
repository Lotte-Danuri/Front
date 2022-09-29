import { createRouter, createWebHistory } from 'vue-router'
import MyMain from '../views/MyMain.vue'
import MyProduct from '../views/MyProduct.vue'
import ProductDetail from '../views/MyDetail.vue'

const routes = [
  {
    path: '/',
    name: 'MyMain',
    component: MyMain
  },
  {
    path: '/MyShop',
    name: 'MyShop',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/MyShop.vue')
  },
  {
    path: '/detail',
    name: 'ProductDetail',
    component: ProductDetail
  },
  {
    path: '/MyProduct',
    name: 'MyProduct',
    component: MyProduct
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
