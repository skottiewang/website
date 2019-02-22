<template>
  <CardContainer :title="cardTitle">
    <div class="case_card_wrap">
      <swiper :options="swiperOption">
        <swiper-slide v-for="(item, index) in cardGroup"
                      :key="index"
                      class="case_card_item">
          <div class="case_card_content">
            <img class="case_card_item_img" :src="item.img">
            <div class="case_card_item_title">{{ item.itemTitle }}</div>
            <div class="case_card_item_desc">{{ item.itemDesc }}</div>
          </div>
          <div class="case_card_shadow"/>
        </swiper-slide>
        <div class="swiper-button-prev" slot="button-prev"/>
        <div class="swiper-button-next" slot="button-next"/>
      </swiper>
    </div>
  </CardContainer>
</template>
<script>
  import CardContainer from '@/components/CardContainer'
  import 'swiper/dist/css/swiper.css'
  import { swiper, swiperSlide } from 'vue-awesome-swiper'

  export default {
    components: {
      CardContainer,
      swiper,
      swiperSlide
    },
    name: 'SuccessCase',
    data () {
      return {
        value2: 0,
        cardTitle: '成功案例',
        swiperOption: {
          slidesPerView: 4,
          spaceBetween: 24,
          loop: true,
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }
        },
        cardGroup: [
          {
            img: 'https://www.trjcn.com/upfile/success_case/20190219/thumb_1550546163.jpg',
            itemTitle: '成功融资600万',
            itemDesc: '云南1300亩天然柑橘种植基地运营项目',

          },
          {
            img: 'https://www.trjcn.com/upfile/success_case/20190215/thumb_1550196744.jpg',
            itemTitle: '成功融资300万元',
            itemDesc: '深圳分享租赁项目',

          },
          {
            img: 'https://www.trjcn.com/upfile/success_case/20190213/thumb_1550026908.jpg',
            itemTitle: '成功融资1000万元',
            itemDesc: '福建广告共享平台建设项目',

          },
          {
            img: 'https://www.trjcn.com/upfile/success_case/20190212/thumb_1549951003.jpg',
            itemTitle: '成功融资5000万元',
            itemDesc: '吉林延边黄牛繁育基地项目',

          },
          {
            img: 'https://www.trjcn.com/upfile/success_case/20190219/thumb_1550546040.jpg',
            itemTitle: '成功融资80万元',
            itemDesc: '湖北“实体店”网络化APP项目',

          },
          {
            img: 'https://www.trjcn.com/upfile/success_case/20190220/thumb_1550631949.jpg',
            itemTitle: '成功融资500万元',
            itemDesc: '江苏樱桃种植项目',

          },
          {
            img: 'https://www.trjcn.com/upfile/success_case/20190219/thumb_1550546163.jpg',
            itemTitle: '成功融资200万元',
            itemDesc: '广东沙糖桔扩种项目',

          },
          {
            img: 'https://www.trjcn.com/upfile/success_case/20190213/thumb_1550026908.jpg',
            itemTitle: '成功融资3亿元',
            itemDesc: '西藏那曲市40MW并网光伏电站建设项目',

          }
        ]
      }
    }
  }
</script>

<style scoped>
.case_card_wrap {
  margin-top: 24px;
}
.case_card_item_img {
  width: 100%;
  height: 144px;
}
.case_card_wrap {
  width: 100%;
}
.case_card_item_desc {
  line-height: 22px;
  font-size: 14px;
  color: #666;
  text-align: center;
}
.case_card_item_title {
  line-height: 34px;
  font-size: 20px;
  padding-top: 10px;
  color: #666;
  text-align: center;
}
.case_card_shadow {
  position: absolute;
  left: 16px;
  bottom: -10px;
  width: 240px;
  height: 100px;
  box-shadow: 0 5px 20px rgba(0,0,0,.1);
  z-index: 1;
  display: block;
}
.case_card_item {
  height: 232px;
  position: relative;
  background-color: #fff;
  z-index: 5;
}
.case_card_item:hover {
  border: 1px solid #b81c22;
}
.case_card_item:hover .case_card_item_desc {
  color:  #b81c22;
}
.case_card_item:hover .case_card_item_title {
  color:  #b81c22;
}
</style>
