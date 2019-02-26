<template>
  <div class="pageheader">
    <div class="container">
      <div class="left_bar">
        <span class="pageheader_phone_label">{{ msg.title }}</span>
        <span class="pageheader_phone_number">{{ msg.number }}</span>
      </div>

      <div class="right_bar">
        <div class="login">
          <Icon type="ios-contact-outline" size="16" style="margin-right: 4px"/>
          <a>{{ msg.login }}</a>
        </div>
        <div class="bar_msgs" v-for="(item,index) in msgs" :key="index">
          <a>{{ item }}</a>
        </div>
        <div>
          <Icon type="ios-text" size="16"/>
          <Icon type="logo-vimeo" size="14"/>
        </div>
        <a class="btn">{{ msg.btntext }}</a>
      </div>
    </div>
   
  </div>
</template>
<script>
  export default {
    name: 'PageHeader',
    data () {
      return {
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
.pageheader {
  background-color: rgb(239, 239, 239);
}
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  width: 1200px;
  min-width: 1200px;
  height: 36px;
}
.top_nav {
  line-height: 14;
  margin-top: 10px;
  border-right: 1px solid #cccccc;
  display: none;
}
.right_bar {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.left_bar {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.bar_msgs {
  line-height: 14px;
  padding: 0 8px;
  border-left: 1px solid #cccccc;
}
.login {
  padding: 0 8px;
  display: flex;
  align-items: center;
}
.btn {
  background-color: #2d8cf0;
  color: #ffffff;
  text-align: center;
  font-size: 12px;
  width: 104px;
  height: 20px;
  line-height: 20px;
  margin-left:8px;
}
.pageheader_phone_label {
  color: #999;
}
.pageheader_phone_number {
  color: #b90c0e;
  font-size: 18px;
  margin-left: 8px;
}
</style>
