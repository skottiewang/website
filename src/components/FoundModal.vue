<template>
  <div class="foundmodal_container" 
       @mouseenter="$emit('handl-enter')" 
       @mouseleave="$emit('handl-leave')">
    <transition name="fade" mode="out-in" appear>
      <div class="foundmodal_background"
           id="foundmodal_background"/>
    </transition>
    <div class="foundmodal_item_container">
      <div v-for="(item, index) in modalGroup"
           :key="index"
           class="foundmodal_item">
        <img :src="item.img" class="foundmodal_img">
        <a class="foundmodal_title">{{ item.title }}</a>
        <div class="foundmodal_label">{{ item.label }}</div>
      </div>
    </div>
    <div class="foundmodal_icon"/>
    <div class="foundmodal_icon_shield"/>
    
  </div>
</template>
<script>
  export default {
    name: 'FoundModal',
    data () {
      return {
        modalGroup: [
          {
            img: '../../static/icon_a.png',
            title: '精选资金',
            label: '海量资金方任你选',
          },
          {
            img: '../../static/icon_b.png',
            title: '融资直通车',
            label: '一键直约 直通资本',
          },
          {
            img: '../../static/icon_c.png',
            title: '融资服务',
            label: '融资成功 关键所在',
          }
        ]
      }
    },
    methods: {
      handlEnter () {
        this.$emit('handl-enter')
      },
      handlLeave () {
        this.$emit('handl-leave')
      },
      handlAnimation () {
        console.log('animation')
        // var f = document.getElementById('foundmodal_background')
        // f.style.left = (ev.clientX-125)+'px'
        // f.style.top = (ev.clientY-125)+'px'
      }
    },
    mounted () {
      this.$on('animation',()=>{
        this.handlAnimation()
      })
    }
  }
</script>
<style>
.foundmodal_container {
  width: 100%;
  border-top: 1px solid #e8e8e8;
  border-bottom: 1px solid #e8e8e8;
  position: absolute;
  top: 90px;
  left: 0px;
  z-index: 999;
  transition:  all 2s;
}
.foundmodal_item {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 16px;
}
.foundmodal_img {
  width: 65px;
}
.foundmodal_title {
  font-size: 16px;
  margin-top: 16px;
  font-weight: bold;
  color: #333;
}
.foundmodal_label {
  color: #999;
}
.foundmodal_background {
  background-color: #fff;
  height: 200px;
  width: 100%;
  z-index: 160;
  transition:  all 2s;
}
.foundmodal_item_container {
  position: absolute;
  top: 16px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-left: 34%;
  width: 540px;
}
.foundmodal_icon {
  border: 1px solid #e8e8e8;
  width: 24px;
  height: 24px;
  background-color: #fff;
  position: absolute;
  margin-left: 41%;
  top: -13px;
  z-index: 150;
  transform:rotate(45deg);
}
.foundmodal_icon_shield {
  width: 100px;
  height: 20px;
  background-color:#fff;
  z-index: 180;
  position: absolute;
  margin-left: 39%;
  top: 0px;
}
</style>

