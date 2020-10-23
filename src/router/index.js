import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [

  {
    path: '/',
    component: () => import('../views/front/Layout.vue'),
    children: [{
      path: '',
      component: () => import('../views/front/Home.vue'),
    },
    {
      path: '/about',
      name: 'About',
      component: () => import('../views/front/About.vue'),
    },
    {
      path: '/products',
      component: () => import('../views/front/Products.vue'),
    },
    {
      path: '/product/:id',
      component: () => import('../views/front/Product.vue'),
    },
    {
      path: '/cart',
      component: () => import('../views/front/Cart.vue'),
    },
    {
      path: '/recipe',
      component: () => import('../views/front/Recipe.vue'),
    },
    {
      path: '/checkout_order',
      component: () => import('../views/front/Checkout_order.vue'),
    },
    {
      path: '/checkout_payment/:id',
      component: () => import('../views/front/Checkout_payment.vue'),
    }, {
      path: '/welldone',
      component: () => import('../views/front/Welldone.vue'),
    },
    ],
  },
  {
    path: '/login',
    component: () => import('../views/Login.vue'),
  },
  {
    path: '/admin',
    component: () => import('../views/backend/Backend_Dashboard.vue'),
    children: [
      {
        path: 'products',
        component: () => import('../views/backend/Backend_Products.vue'),
      },
      {
        path: 'coupons',
        component: () => import('../views/backend/Backend_Coupons.vue'),
      },
      {
        path: 'orders',
        component: () => import('../views/backend/Backend_Orders.vue'),
      },
      {
        path: 'storages',
        component: () => import('../views/backend/Backend_Storages.vue'),
      },
    ],
  },
  {
    path: '*',
    redirect: '/',
  },
];

const router = new VueRouter({
  routes,
});

export default router;
