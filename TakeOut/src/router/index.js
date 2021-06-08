import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from "../components/Home";
import Login from "../components/Login";
import User from "../components/User";
// import Register from "../components/Register";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',   //默认加载主页面
      component: Home
    },

    {
      path:'/home',   //主页面
      component: Home
    },
    {//登陆与注册
      path: '/login',
      component: Login,
      props: true,
      name:'login'
    },
    {          //个人中心
      path: '/user',
      name: 'user',
      component: User,
      props: true
    },
  ]
})
