import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import lily from '@/components/lily'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/lily',
      name: 'lily',
      component: lily
    }
  ]
})
