import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import PageHeader from '@/components/PageHeader'
import Header from '@/components/Header'
import Banner from '@/components/Banner'
import Summary from '@/components/Summary'
import Login from '@/components/Login'
import Founds from '@/components/Founds'
import SuccessCase from '@/components/SuccessCase'
import CardContainer from '@/components/CardContainer'
import Advertisement from '@/components/Advertisement'
import Investor from '@/components/Investor'
import Project from '@/components/Project'
import test from '@/components/test'
import Recommend from '@/components/Recommend'
import FlexCard from '@/components/FlexCard'
import Interview from '@/components/Interview'
import Subject from '@/components/Subject'
import Foot from '@/components/Foot'
import LeftAffix from '@/components/LeftAffix'


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
    {
      path: '/cardcontainer',
      name: 'CardContainer',
      component: CardContainer
    },
    {
      path: '/successcase',
      name: 'SuccessCase',
      component: SuccessCase
    },
    {
      path: '/advertisement',
      name: 'Advertisement',
      component: Advertisement
    },
    {
      path: '/investor',
      name: 'Investor',
      component: Investor
    },
    {
      path: '/test',
      name: 'test',
      component: test
    },
    {
      path: '/project',
      name: 'Project',
      component: Project
    },
    {
      path: '/recommend',
      name: 'Recommend',
      component: Recommend
    },
    {
      path: '/flexcard',
      name: 'FlexCard',
      component: FlexCard
    },
    {
      path: '/interview',
      name: 'Interview',
      component: Interview
    },
    {
      path: '/subject',
      name: 'Subject',
      component: Subject
    },
    {
      path: '/foot',
      name: 'Foot',
      component: Foot
    },
    {
      path: '/leftaffix',
      name: 'LeftAffix',
      component: LeftAffix
    }
  ]
})
