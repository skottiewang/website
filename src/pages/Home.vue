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

  export default {
    components: {
      Header,
      PageHeader,
      Banner,
      Summary,
      Founds,
      SuccessCase,
      Advertisement,
      Investor
    }
  }
</script>

<style>
.home_container {
  background-color: #f2f2f2;
  height: 100%;
}
</style>


