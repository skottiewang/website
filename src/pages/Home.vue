<template>
  <div class="home_container">
    <PageHeader/>
    <Header/>
    <Banner/>
    <Summary/>
    <LeftAffix class="left_affix"/>
    <RightAffix class="right_affix"/>
    <Founds id="founds"/>
    <SuccessCase id="successcase"/>
    <Advertisement/>
    <Investor id="investor"/>
    <Project id="project"/>
    <Recommend id="recommend"/>
    <Interview id="interview"/>
    <Advertisement/>
    <Subject id="subject"/>
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
  import RightAffix from '@/components/RightAffix'

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
      LeftAffix,
      RightAffix
    }
  }
</script>

<style>
.home_container {
  background-color: #f2f2f2;
  height: 100%;
  position: relative;
  overflow-y: scroll;
}
/* .scroll_container {
  position: relative;
  overflow-y: scroll;
} */
.left_affix {
  position: absolute;
  top: 687px;
  left: 50%;
  margin-left: -758px;
  z-index: 110;
}
.right_affix {
 position: absolute;
 top: 687px;
 right: 20px;
 z-index: 110;
}
</style>


