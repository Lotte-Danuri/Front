import { createRouter, createWebHistory } from 'vue-router'
import MyMain from '../views/MyMain.vue'
import MyProduct from '../views/MyProduct.vue'
import MyWishlist from '../views/MyWishlist.vue'
import MyCart from '../views/MyCart.vue'
import MyCheckout from '../views/MyCheckout.vue'
import MyOrders from '../views/MyOrders.vue'
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
    path: '/MyProduct',
    name: 'MyProduct',
    component: MyProduct
  },
  {
    path: '/MyWishlist',
    name: 'MyWishlist',
    component: MyWishlist
  },
  {
    path: '/MyCart',
    name: 'MyCart',
    component: MyCart
  },
  {
    path: '/MyCheckout',
    name: 'MyCheckout',
    component: MyCheckout
  },
  {
    path: '/MyOrders',
    name: 'MyOrders',
    component: MyOrders
  },
  {
    path: '/detail',
    name: 'ProductDetail',
    component: ProductDetail
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
