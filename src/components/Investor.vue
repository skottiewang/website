<template>
  <CardContainer :title="cardTitle">
    <div>234</div>
  </CardContainer>
</template>
<script>
  import CardContainer from '@/components/CardContainer'
  export default {
    name: 'Investor',
    components: {
      CardContainer
    },
    data () {
      return {
        firstTitle: '天使投资',
        firstDescription: '早期项目的福音，从这开始',
        secondTitle: '股权投资',
        secondDescription: '引入实力投资，助推企业发展',
        thirdTitle: '债券投资',
        thirdDescription: '借款方式多样，融资就这么简单',
        cardTitle: '找资金',
        buttonText: '发布资金',
        isButton: true
      }
    }
  }
</script>
<style>

</style>

