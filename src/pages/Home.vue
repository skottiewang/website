<template>
  <div>
    <PageHeader/>
    <Header/>
    <Banner/>
  </div>
</template>

<script>
  import Header from '@/components/Header'
  import PageHeader from '@/components/PageHeader'
  import Banner from '@/components/Banner'

  export default {
    components: {
      Header,
      PageHeader,
      Banner,
    }
  }
</script>

