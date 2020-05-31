import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from "@/page/Home";
import Login from "@/page/Login";
import ProductEdit from "@/page/ProductEdit";
import Admin from "@/page/Admin";
import ProductList from "@/page/ProductList";
import OrderList from "@/page/OrderList";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Home',
      name: 'Home',
      component: Home
    },{
      path: '/',
      name: 'Login',
      component: Login
    },{
      path: '/productEdit',
      name: 'ProductEdit',
      component: ProductEdit
    },{
      path: '/admin',
      name: 'Admin',
      component: Admin
    },{
      path: '/productList',
      name: 'ProductList',
      component: ProductList
    },{
      path: '/orderList',
      name: 'OrderList',
      component: OrderList
    },

  ]
})
