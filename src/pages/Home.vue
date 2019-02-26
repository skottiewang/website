<template>
  <div class="home_container">
    <PageHeader/>
    <Header/>
    <Banner/>
    <Summary/>
    <Founds/>
    <SuccessCase/>
    <Advertisement/>
    <Investor/>
    <Project/>
    <Recommend/>
    <Interview/>
    <Advertisement/>
    <Subject/>
    <Foot/>
  </div>
</template>

<script>
  import Header from '@/components/Header'
  import PageHeader from '@/components/PageHeader'
  import Banner from '@/components/Banner'
  import Summary from '@/components/Summary'
  import Founds from '@/components/Founds'
  import SuccessCase from '@/components/SuccessCase'
  import Advertisement from '@/components/Advertisement'
  import Investor from '@/components/Investor'
  import Project from '@/components/Project'
  import Recommend from '@/components/Recommend'
  import Interview from '@/components/Interview'
  import Subject from '@/components/Subject'
  import Foot from '@/components/Foot'
  import LeftAffix from '@/components/LeftAffix'

  export default {
    components: {
      Header,
      PageHeader,
      Banner,
      Summary,
      Founds,
      SuccessCase,
      Advertisement,
      Investor,
      Project,
      Recommend,
      Interview,
      Subject,
      Foot,
      LeftAffix
    }
  }
</script>

<style>
.home_container {
  background-color: #f2f2f2;
  height: 100%;
}
.scroll_container {
  position: relative;
  overflow-y: scroll;
}
</style>


