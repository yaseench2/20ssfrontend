import { createRouter, createWebHistory } from 'vue-router'

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect:'/home'
    },
    {
      path: '/home',
      component: () => import('../views/Home.vue'),
    },
    {
      path: '/allGadgets',
      component: () => import('../views/Product.vue'),
    },
    {
      path: '/allWatches',
      component: () => import('../views/Product.vue'),
    },
    {
      path: '/allSneakers',
      component: () => import('../views/Product.vue'),
    },
    {
      path: '/allDressess',
      component: () => import('../views/Product.vue'),
    },
    {
      path: '/Dress',
      component: () => import('../views/Product.vue'),
    },
    {
      path: '/product_details/:id/:pName',
      component: () => import('../views/ProductDetails.vue'),
    },
    {
      path: '/cart/user/:userId',
      component: () => import('../views/Cart.vue'),
    },
    {
      path: '/login',
      component: () => import('../views/Login.vue'),
    },
    {
      path: '/register',
      component: () => import('../views/Register.vue'),
    },
    {
      path: '/Privacy/Policy',
      component: () => import('../views/Legal.vue'),
    },
    {
      path: '/about',
      component: () => import('../views/AboutUs.vue'),
    },
    {
      path: '/profile',
      component: () => import('../views/Profile.vue'),
    },
    {
      path: '/:pathMatch(.*)*',
      component: () => import('../views/NotFound.vue'),
    },
  ],
})