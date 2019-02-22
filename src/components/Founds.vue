<template>
  <CardContainer :title="cardTitle" 
                 :button-text="buttonText"
                 :button-show="isButton">
    <div class="founds_card_container">
      <div class="founds_card_item" v-for="(item, index) in cardGroup" :key="index">
        <img :src="item.imgurl">
        <div class="founds_card_item_title">{{ item.title }}</div>
        <div class="founds_card_item_des">{{ item.description }}</div>
        <Icon class="founds_card_item_icon" :type="item.iconname" color="#fff" size="32"/>
        <div class="founds_card_info">
          <div class="founds_card_info_title">{{ item.title }}</div>
          <div class="founds_card_info_divider"/>
          <div class="founds_card_info_description">{{ item.description }}</div>
          <Button class="founds_card_info_button" type="primary">{{ bunText }}</Button>
        </div>
      </div>
    </div>
  </CardContainer>
</template>

<script>
  import CardContainer from '@/components/CardContainer'

  export default {
    name: 'Founds',
    components: {
      CardContainer
    },
    data () {
      return {
        bunText: '查看详情',
        cardGroup: [
          {
            imgurl: 'https://www.trjcn.com/assets/src/images/v6/201806/find_fund_03.jpg',
            title: '天使投资',
            description: '早期项目的福音，从这开始',
            iconname: 'ios-arrow-dropright',
          },
          {
            imgurl: 'https://www.trjcn.com/assets/src/images/v6/201806/find_fund_05.jpg',
            title: '股权投资',
            description: '引入实力投资，助推企业发展',
            iconname: 'ios-arrow-dropright',
          },
          {
            imgurl: 'https://www.trjcn.com/assets/src/images/v6/201806/find_fund_07.jpg',
            title: '债券投资',
            description: '借款方式多样，融资就这么简单',
            iconname: 'ios-arrow-dropright',
          },
        ],
        cardTitle: '找资金',
        buttonText: '发布资金',
        isButton: true
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
  background: #b81c22;
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
}
.founds_card_container {
  display: flex;
  padding-top: 24px;
  justify-content: space-between;
}
.founds_card_item {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
}
.founds_card_item:hover .founds_card_info {
  display: block;
}
.founds_card_item_title {
  font-size: 28px;
  font-weight: bold;
  color: #fff;
  position: absolute;
  top: 144px;
  height: 36px;
}
.founds_card_item_des {
  position: absolute;
  top: 193px;
  text-align: center;
  color: #fff;
  font-size: 14px;
  line-height: 24px;
  font-weight: bold;
}
.founds_card_item_icon {
  position: absolute;
  top: 230px;
}
.founds_card_info {
  position: absolute;
  left: 60px;
  top: 50px;
  width: 252px;
  height: 224px;
  background: #fff;
  text-align: center;
  display: none;
}
.founds_card_info_title {
  font-size: 28px;
  font-weight: bold;
  padding-top: 25px;
  line-height: 36px;
}
.founds_card_info_divider {
  width: 30px;
  border-bottom: 2px solid #5a4c5e;
  height: 17px;
  margin: 0 auto;
}
.founds_card_info_description {
  padding-top: 14px;
  font-size: 14px;
  line-height: 24px;
}
.founds_card_info_button {
  margin-top: 32px;
}
</style>


