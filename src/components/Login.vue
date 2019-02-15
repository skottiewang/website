<template>
  <div>
    <div class="login_tab_container">
      <div v-for="(item, index) in text"
           :key="index"
           :class="wrapCls(index)"
           @click="handleClick(index)"
      >
        {{ item }}
      </div>
    </div>

    <div class="login_tab_login">
      <Form class="login_form">
        <FormItem>
          <Input v-model="formCustom.account" placeholder="手机号码">
          </Input>
        </FormItem>
        <FormItem>
          <Input v-model="formCustom.password" placeholder="密码">
          </Input>
        </FormItem>

        <div class='login_loginitem'>
          <FormItem>
            <Checkbox v-model="isAutoLogin" class='login_checkbox'>{{ autoLogin }}</Checkbox>
          </FormItem>
          <FormItem>
            <a>{{ forgetPassword }}</a>
          </FormItem>
        </div>

        <FormItem>
          <Button class='login_button' type="primary">{{ loginButton }}</Button>
        </FormItem>
      </Form>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'Login',
    data () {
      return {
        forgetPassword: '忘记密码?',
        autoLogin: '两周内自动登录',
        isAutoLogin: '',
        loginButton: '登录',
        formCustom: {
          account: '',
          password: ''
        },
        currentIndex: '',
        login: '登录',
        signup: '注册',
        msg: {
          title: '客服热线:',
          number: '400-858-9000',
          login: '登录',
          btntext: '资本机构免费入驻'
        },
        text: ['登录', '注册']
      }
    },
    created () {
      this.currentIndex = 0
    },
    methods: {
      handleClick (index) {
        this.currentIndex = index
      },
      wrapCls (index) {
        console.log(index)
        return {
          'login_tabpane_highlight': this.currentIndex === index,
          'login_tabpane': this.currentIndex !== index,
        }
      }
    }
  }
</script>

<style scoped>
.login_tab_container {
  display: flex;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  line-height: 40px;
}
.login_loginitem {
  display: flex;
  justify-content: space-between;
  height: 32px;
}
.login_tabpane {
  background-color: #333;
  color: #fff;
  width: 140px;
  height: 40px;
  text-align: center;
  opacity: 0.8;
}
.login_tabpane_highlight {
  background-color: #333;
  color: #fff;
  width: 140px;
  height: 40px;
  text-align: center;
  opacity: 0.5;
}
/* .login_signup {
  background-color: #333;
  width: 140px;
  height: 40px;
  text-align: center;
  color: #ccc;
} */
.login_tab_login {
  width: 280px;
  height: 240px;
  background-color: rgba(51,51,51,0.5)
}
.login_form {
  width: 80%;
  margin-right: auto;
  margin-left: auto;
  padding-top: 24px;
}
.login_button {
  width: 100%;
}
.login_checkbox {
  color: #fff;
}
</style>
