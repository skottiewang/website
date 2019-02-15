<template>
  <div class="banner">
    <div class="banner_container">
      <Carousel v-model="value2" loop autoplay :autoplay-speed=6000>
        <CarouselItem>
          <img src="../assets/banner_01.png">
        </CarouselItem>
        <CarouselItem>
          <img src="../assets/banner_02.jpg">
        </CarouselItem>
        <CarouselItem>
          <img src="../assets/banner_03.jpg">
        </CarouselItem>
        <CarouselItem>
          <img src="../assets/banner_04.jpg">
        </CarouselItem>
      </Carousel>
      <Login class="banner_login"/>
    </div>
   
  </div>
</template>
<script>
  import Login from '@/components/Login'

  export default {
    components: {
      Login
    },
    name: 'Banner',
    data () {
      return {
        value2: 0,
        msg: {
          title: '客服热线:',
          number: '400-858-9000',
          login: '登录',
          btntext: '资本机构免费入驻'
        },
        msgs: ['注册', '新手指导', '投融服务', '手机投融界']
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
</style>
