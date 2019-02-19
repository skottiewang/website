<template>
  <div class="adv_container">
    <img src="../assets/adv.jpg">
  </div>
</template>
<script>
  import Advertisement from '@/components/Advertisement'

  export default {
    components: {
      Advertisement
    },
    name: 'Advertisement',
    data () {
      return {
      }
    }
  }
</script>

<style scoped>
.banner_login {
  position: absolute;
  right: 120px;
  top: 50px;
}
.banner_container {
  position: relative;
}
.banner {
  background-color: #ffffff;
}
</style>
