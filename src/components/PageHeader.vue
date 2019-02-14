<template>
  <div class="pageheader_container">
    <div class="left_bar">
      <span>{{ msg.title }}</span>
      <span>{{ msg.number }}</span>
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
      <div class="btn">{{ msg.btntext }}</div>
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
.pageheader_container {
  background-color: rgb(239, 239, 239);
  height: 36px;
  display: flex;
  justify-content: space-between;
  padding: 0 50px;
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
  background-color: #b90c0e;
}
</style>
