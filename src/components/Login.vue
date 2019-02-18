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

    <div class="login_tab_login" v-if="isLogin">
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

    <div class="login_tab_signup" v-else>
      <Form class="login_form">
        <FormItem>
          <Input v-model="formCustom.account" placeholder="手机号码">
          </Input>
        </FormItem>

        <FormItem>
          <Row class="login_compute">
            <Col span="12">
            <Input v-model="formCustom.password" placeholder="密码">
            </Input>
            </Col>
            <Col span="2"><div/></Col>
            <Col span="10">
            <div class="login_compute_box"/>
            </Col>
          </Row>
        </FormItem>
        <FormItem>
          <Row class="login_compute">
            <Col span="12">
            <Input v-model="formCustom.password" placeholder="请输入验证码">
            </Input>
            </Col>
            <Col span="2"><div/></Col>
            <Col span="10">
            <Button class="login_get_code">{{ getCode }}</Button>
            </Col>
          </Row>
        </FormItem>

        <div class='login_loginitem'>
          <FormItem>
            <Checkbox v-model="isAutoLogin" class='login_checkbox'>{{ readAgreement }}</Checkbox>
          </FormItem>
        </div>

        <FormItem>
          <Button class='login_button' type="primary">{{ signup }}</Button>
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
        phoneNumber: '手机号码11',
        getCode: '获取验证码',
        readAgreement: '我已阅读并同意《投融界服务协议》',
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
        signup: '免费注册',
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
        return {
          'login_tabpane_highlight': this.currentIndex === index,
          'login_tabpane': this.currentIndex !== index,
        }
      }
    },
    computed: {
      isLogin () {
        return this.currentIndex === 0
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
.login_tab_login {
  width: 280px;
  height: 240px;
  background-color: rgba(51,51,51,0.5)
}
.login_tab_signup {
  width: 280px;
  height: 280px;
  background-color: rgba(51,51,51,0.5)
}
.login_compute {
  display: flex;
  justify-content: space-between;
}
.login_compute_box {
  height: 33px;
  width: 100%;
  background-color: #ffffff;
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
