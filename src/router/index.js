//router SPA 路徑
//import元件路徑
//啟用元件
//path路徑，name命名，component元件名稱(與import同啟用)，meta驗證

import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/components/Dashboard'
import Home from '@/components/Home'
import Login from '@/components/pages/Login'
import Products from '@/components/pages/Products'
import CustomerOrders from '@/components/pages/CustomerOrders'
import Coupons from '@/components/pages/Coupons'
import HomePage from '@/components/pages/HomePage'
import Shopping from '@/components/pages/Shopping'
import OrderForm from '@/components/pages/OrderForm'
import CustomerCheckout from '@/components/pages/CustomerCheckout'
import CustomerOrderList from '@/components/pages/CustomerOrderList'
import CartList from '@/components/pages/CartList'
import FinishPage from '@/components/pages/FinishPage'






Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '*',
      redirect: 'login',

      //把用戶可能跑到不存在的頁面導回登入畫面

    },
    {
      path: '/Login',
      name: 'Login',
      component: Login,
    },
    {
      path: '/admin',
      name: 'Dashboard',
      component: Dashboard,
      children: [
        {
          path: 'Products',
          name: 'Products',
          component: Products,
          meta: { requiresAuth: true },
        },
        {
          path: 'Coupons',
          name: 'Coupons',
          component: Coupons,
          meta: { requiresAuth: true },
        },
        {
          path: 'CustomerOrders',
          name: 'CustomerOrders',
          component: CustomerOrders,
          meta: { requiresAuth: true },
        },
        {
          path: 'CustomerOrderList',
          name: 'CustomerOrderList',
          component: CustomerOrderList,
          meta: { requiresAuth: true },
        },

      ]
    },
    {
      path: '/',
      name: 'Home',
      component: Home,
      children: [
        {
          path: 'HomePage',
          name: 'HomePage',
          component: HomePage,
        },
        {
          path: 'Shopping',
          name: 'Shopping',
          component: Shopping,
        },
        {
          path: 'OrderForm',
          name: 'OrderForm',
          component: OrderForm,
        },
        {
          path: 'CustomerCheckout/:orderId',
          name: 'CustomerCheckout',
          component: CustomerCheckout,
        },
        {
          path: 'CartList',
          name: 'CartList',
          component: CartList,
        },
        {
          path: 'FinishPage',
          name: 'FinishPage',
          component: FinishPage,
        },
      ]
    },


  ]
})
