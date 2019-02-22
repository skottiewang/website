<template>
  <CardContainer :title="cardTitle">
    <div class="investor_card_container">
      <div v-for="(item, index) in cards" 
           :key="index"
           class="investor_card_item">
        <img class="investor_card_img"
             :src="item.img">
        <div class="investor_card_box">
          <a class="investor_card_name">{{ item.name }}</a>
          <div class="investor_card_position">{{ item.position }}</div>
          <div class="investor_card_desc">{{ item.desc }}</div>
          <Button class="investor_card_btn" type="primary">{{ item.button }}</Button>
        </div>
        <div class="investor_card_shadow"/>
      </div>
    </div>
  </CardContainer>
</template>
<script>
  import CardContainer from '@/components/CardContainer'
  export default {
    name: 'Investor',
    components: {
      CardContainer
    },
    data () {
      return {
        cardTitle: '直约投资人',
        buttonText: '发布资金',
        isButton: true,
        cards: [
          {
            img: 'https://www.trjcn.com/upfile/page_item/2019/02/805_1550144972.png',
            name: '刘雨坤',
            position: 'IDG 高级投资经理',
            desc: '比较看好的团队是一个有互联网意识但同时又懂得这个行业是怎么运转的这么一个团队',
            button: '立即约见'
          },
          {
            img: 'https://www.trjcn.com/upfile/page_item/2019/02/805_1550144651.png',
            name: '王立军',
            position: '浙江九仁资本管理有限公司 副总裁',
            desc: '浙江大学医学硕士，现任浙江九仁资本管理有限公司副总裁，进入投行多年，曾在贝达药业...',
            button: '立即约见'
          },
          {
            img: 'https://www.trjcn.com/upfile/page_item/2019/02/805_1550144749.png',
            name: '刘云',
            position: '华医资本（光合资本） 创始合伙人',
            desc: '刘云在健康产业、O2O领域有独特投资视角，能为创业者把脉新形势下的移动医疗发展方向，...',
            button: '立即约见'
          }
        ]
      }
    }
  }
</script>
<style>
.investor_card_img {
  width: 102px;
  height: 102px;
  border-radius: 50%;
  z-index: 15;
}
.investor_card_container {
  display: flex;
  justify-content: space-between;
}
.investor_card_box {
  width: 370px;
  height: 258px;
  border: 1px solid #f8f8f8;
  background: #f8f8f8;
  text-align: center;
  padding: 60px 30px 0 30px;
  position: absolute;
  left: 0;
  bottom: 0;
  z-index: 10;
}
.investor_card_box:hover {
  border: 1px solid #b81c22;
  background: #fff;
}
.investor_card_box:hover .investor_card_name {
  color: #b81c22;
}
.investor_card_box:hover +div {
  display: none;
}
.investor_card_item {
  position: relative;
  float: left;
  width: 370px;
  height: 305px;
  margin-right: 20px;
  display: flex;
  justify-content: center;
  margin-top: 16px;
}
.investor_card_name {
  font-size: 24px;
  font-weight: bold;
  line-height: 36px;
  color: #333;
}
.investor_card_position {
  font-size: 16px;
  line-height: 40px;
}
.investor_card_desc {
  font-size: 14px;
  color: #999;
  line-height: 24px;
}
.investor_card_btn {
  margin-top: 16px;
  width: 204px;
}
.investor_card_shadow {
  position: absolute;
  left: 13px;
  bottom: 0px;
  width: 340px;
  height: 100px;
  box-shadow: 0 5px 20px rgba(0,0,0,.1);
  z-index: 5;
  display: block;
}
</style>

