<template>
  <CardContainer :title="cardTitle">
    <div>234</div>
  </CardContainer>
</template>
<script>
  import CardContainer from '@/components/CardContainer'

  export default {
    components: {
      CardContainer
    },
    name: 'SuccessCase',
    data () {
      return {
        value2: 0,
        cardTitle: '成功案例'
      }
    }
  }
</script>

<style scoped>

</style>
