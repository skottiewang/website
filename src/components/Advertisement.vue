<template>
  <div class="adv_container">
    <!-- <img src="../assets/adv.jpg"> -->
    <div class="adv_img"/>
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
.adv_img {
  display: block;
  height: 200px;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url(https://www.trjcn.com/upfile/page_item/2018/06/588_1530254378.jpg);
}
</style>
