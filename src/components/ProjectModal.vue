<template>
  <div class="projectmodal_container" 
       @mouseenter="$emit('handl-enter')" 
       @mouseleave="$emit('handl-leave')">
    <div class="projectmodal_background"/>
    <div class="projectmodal_item_container">
      <div v-for="(item, index) in modalGroup"
           :key="index"
           class="projectmodal_item">
        <img :src="item.img" class="projectmodal_img">
        <a class="projectmodal_title">{{ item.title }}</a>
        <div class="projectmodal_label">{{ item.label }}</div>
      </div>
    </div>
    <div class="projectmodal_icon"/>
    <div class="projectmodal_icon_shield"/>
    
  </div>
</template>
<script>
  export default {
    name: 'ProjectModal',
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
        console.log('insideenter')
        this.$emit('handl-enter')
      },
      handlLeave () {
        console.log('insideleave')
        this.$emit('handl-leave')
      }
    }
  }
</script>
<style>
.projectmodal_container {
  width: 100%;
  border-top: 1px solid #e8e8e8;
  position: relative;
}
.projectmodal_item {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 16px;
}
.projectmodal_img {
  width: 65px;
}
.projectmodal_title {
  font-size: 16px;
  margin-top: 16px;
  font-weight: bold;
  color: #333;
}
.projectmodal_label {
  color: #999;
}
.projectmodal_background {
  background-color: #fff;
  height: 200px;
  width: 100%;
  z-index: 160;
}
.projectmodal_item_container {
  position: absolute;
  top: 16px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-left: 34%;
  width: 540px;
}
.projectmodal_icon {
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
.projectmodal_icon_shield {
  width: 100px;
  height: 20px;
  background-color:#fff;
  z-index: 180;
  position: absolute;
  margin-left: 39%;
  top: 0px;
}
</style>

