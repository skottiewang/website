import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import PageHeader from '@/components/PageHeader'
import Header from '@/components/Header'
import Banner from '@/components/Banner'
import Summary from '@/components/Summary'
import Login from '@/components/Login'
import Founds from '@/components/Founds'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/pageheader',
      name: 'PageHeader',
      component: PageHeader
    },
    {
      path: '/header',
      name: 'Header',
      component: Header
    },
    {
      path: '/banner',
      name: 'Banner',
      component: Banner
    },
    {
      path: '/summary',
      name: 'Summary',
      component: Summary
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/founds',
      name: 'Founds',
      component: Founds
    },
  ]
})
