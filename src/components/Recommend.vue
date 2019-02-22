<template>
  <CardContainer :title="redtitle">
    <div class="recommend_card_wrap">
      <swiper :options="swiperOption">
        <swiper-slide v-for="(item, index) in cardGroup"
                      :key="index"
                      class="recommend_card_item">
          <img class="recommend_card_img" :src="item.img">
          <div class="recommend_card_title">{{ item.itemTitle }}</div>

          <div class="recommend_card_info">
            <div class="recommend_card_info_title">{{ item.itemTitle }}</div>
            <div class="recommend_card_info_Industry">
              <span class="recommend_card_info_label">{{ industry }}</span>
              {{ item.Industry }}
            </div>
            <div class="recommend_card_info_amount">
              <span class="recommend_card_info_label">{{ amount }}</span>
              {{ item.amount }}
            </div>
            <div class="recommend_card_info_area">
              <span class="recommend_card_info_label">{{ area }}</span>
              {{ item.area }}
            </div>
          </div>

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
    name: 'Recommend',
    components: {
      CardContainer,
      swiper,
      swiperSlide
    },
    data () {
      return {
        redtitle: '每周推荐',
        swiperOption: {
          slidesPerView: 3,
          spaceBetween: 20,
          loop: true,
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
        },
        industry: '所属行业:',
        amount: '融资金额:',
        area: '所在地区:',
        cardGroup: [
          {
            img: 'https://www.trjcn.com/upfile/apply/201902/180_1550226273.jpg',
            itemTitle: '厦门高端宠物营养食品项目',
            Industry: '移动互联网',
            amount: '600万-900万',
            area: '福建省'
          },
          {
            img: 'https://www.trjcn.com/upfile/apply/201902/180_1550559944.jpg',
            itemTitle: '云南年产2亿食品加工扩建',
            infoTitle: '',
            Industry: '',
            amount: '',
            area: ''
          },
          {
            img: 'https://www.trjcn.com/upfile/apply/201902/180_1549963912.jpg',
            itemTitle: '江西证件照o2o平台项目',
            Industry: 'O2O',
            amount: '30万',
            area: '江西省'
          },
          {
            img: 'https://www.trjcn.com/upfile/apply/201902/180_1549964024.jpg',
            itemTitle: '浙江服装品牌项目融资50万',
            Industry: '纺织服装饰品',
            amount: '50万',
            area: '浙江省'
          },
          {
            img: 'https://www.trjcn.com/upfile/apply/201902/180_1550559944.jpg',
            itemTitle: '云南年产2亿食品加工扩建',
            Industry: '农产品加工',
            amount: '2000万',
            area: '云南省'
          },
          {
            img: 'https://www.trjcn.com/upfile/apply/201902/180_1550226577.jpg',
            itemTitle: '精品名宿群项目',
            Industry: '酒店',
            amount: '5000万',
            area: '浙江省'
          },
          {
            img: 'https://www.trjcn.com/upfile/apply/201902/180_1550225970.jpg',
            itemTitle: '安徽云雾茶叶项目股权融资',
            Industry: '农林牧渔',
            amount: '500万',
            area: '安徽省'
          },
        ]
      }
    }
  }
</script>

<style>
.recommend_card_wrap {
  margin-top: 24px;
}
.recommend_card_item {
  width: 100%;
  position: relative;
}
.recommend_card_img {
  width: 100%;
}
.recommend_card_title {
  background-color: rgba(0,0,0,.36);
  height: 36px;
  width: 100%;
  text-align: center;
  line-height: 36px;
  font-size: 14px;
  color: #fff;
  position: absolute;
  left: 0px;
  bottom: 4px;
}
.recommend_card_info {
  position: absolute;
  width: 372px;
  height: 212px;
  left: 0;
  top: 0px;
  background: rgba(0,110,225,.8);
  color: #fff;
  padding: 30px 30px 0 30px;
  transition: all ease-in .3s;
  display: none;
}
.recommend_card_item:hover .recommend_card_info {
  display: block;
}
.recommend_card_info_label {
  line-height: 29px;
  color: #bcd7fc;
  font-size: 14px;
}
.recommend_card_info_title {
  font-size: 16px;
  font-weight: bold;
  padding-bottom: 15px;
  padding-top: 10px;
}
.recommend_card_info_Industry {
  color: #fff;
  font-size: 14px;
  line-height: 29px;
}
.recommend_card_info_amount {
  color: #fff;
  font-size: 14px;
  line-height: 29px;
}
.recommend_card_info_area {
  color: #fff;
  font-size: 14px;
  line-height: 29px;
}
</style>


