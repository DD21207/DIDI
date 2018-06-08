import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import under from '@/views/under'






Vue.use(Router)

export default new Router({
  base:'/didiReport/',
  mode: 'history',
  routes: [{
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/cityradar',
    name: 'under',
    component: under
  },
  {
    path: '/commerceradar',
    name: 'under',
    component: under
  },
  {
    path: '/intentradar',
    name: 'under',
    component: under
  }]
})
