<template>
  <div class="foundmodal_container">
    <div class="foundmodal_background"/>
    <div class="foundmodal_item_container">
      <div v-for="(item, index) in modalGroup"
           :key="index"
           class="foundmodal_item">
        <img :src="item.img" class="foundmodal_img">
        <div class="foundmodal_title">{{ item.title }}</div>
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
    }
  }
</script>
<style>
.foundmodal_container {
  width: 100%;
  border-top: 1px solid #e8e8e8;
  position: relative;
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
}
.foundmodal_label {
  color: #999;
}
.foundmodal_background {
  background-color: #fff;
  height: 200px;
  width: 100%;
  z-index: 160;
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
  margin-left: 40%;
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
  margin-left: 38%;
  top: 0px;
}
</style>

