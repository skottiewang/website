<template>
  <div class="founds">
    <div class="founds_container">
      <div class="founds_card_title">
        <div class="founds_red_tag"/>
        <a class="founds_card_title_text">{{ title }}</a>
        <Button type="primary" v-if="buttonShow">{{ buttonText }}</Button>
      </div>
      <div>
        <slot/>
      </div>
      <div class="founds_card_footer">
        <a class="founds_footer_font">{{ viewMore }}</a>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'CardContainer',
    props: {
      title: {
        type: String,
        default: ''
      },
      buttonShow: {
        type: Boolean,
        default: false
      },
      buttonText: {
        type: String,
        default: ''
      },
    },
    data () {
      return {
        viewMore: '点击查看更多',
      }
    }
  }
</script>
<style>
.founds_container {
  width: 1200px;
  min-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  background-color: #ffffff;
  margin-top: 24px;
  margin-bottom: 24px;
  padding: 0 22px;
  position: relative;
}
.founds_card_title_text {
  font-size: 24px;
  line-height: 75px;
  color: #333;
}
.founds_card_title {
  display: flex;
  justify-content: space-between;
  position: relative;
  border-bottom: 1px solid #e8e8e8;
}
.founds_red_tag {
  width: 3px;
  height: 24px;
  background: #409EFF;
  position: absolute;
  left: -22px;
  top: 26px;
}
.founds_card_footer {
  height: 52px;
  width: 100%;
  text-align: center;
  line-height: 52px;
  border-top: 1px solid #e8e8e8;
  margin-top: 24px;
}
.founds_footer_font {
  font-size: 16px;
  color: #666;
}
</style>


