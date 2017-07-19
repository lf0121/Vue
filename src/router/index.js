import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import login from '@/components/login'
import head from '@/components/head'
import home from '@/components/second'
import saferAlert from '@/components/saferAlert'
import admin from '@/components/adminListCom'  

Vue.use(Router)

export default new Router({
  mode:'history',
  base:__dirname + '/',
  routes: [
    {
      path: '/',
      component: Hello
    },{
      path: '/login',
      component: login
    },{
      path: '/home',
      component: home
    },{
      path: '/head',
      component: head
    },{
      path: '/saferAlert',
      component: saferAlert
    },{
      path: '/admin',
      component: admin
    }
    
  ]
})
