<template>
  <Anchor container=".scroll_container">
    <AnchorLink href="#founds" title="找资金"/>
    <AnchorLink href="#successcase" title="成功案例"/>
    <AnchorLink href="#investor" title="直约投资者"/>
  </Anchor>
</template>
<script>

  export default {
    components: {
    },
    name: 'LeftAffix',
    data () {
      return {
        founds: '找资金',
        successcase: '成功案例'
      }
    },
    methods: {
      affixScroll () {
        console.log (123)
      }
    }
  }
</script>

<style scoped>
.sidebar-menu {
  z-index: 120;
}
</style>
